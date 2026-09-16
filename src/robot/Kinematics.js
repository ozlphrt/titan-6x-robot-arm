import * as THREE from 'three';

export class Kinematics {
  constructor(robotModel) {
    this.robot = robotModel;
    
    // Preset Poses in Radians [J1, J2, J3, J4, J5, J6]
    this.presets = {
      home: [0, 0, 0, 0, 0, 0],
      ready: [0, -0.35, 0.75, 0, -0.4, 0],
      reach: [0, -0.85, 0.45, 0, 0.4, 0],
      inspect: [0.78, -0.5, 0.9, 0.3, -0.4, 0.5],
      compact: [0, 1.1, -2.1, 0, 1.0, 0]
    };

    // Current interpolation state
    this.isInterpolating = false;
    this.startAngles = [0, 0, 0, 0, 0, 0];
    this.targetAngles = [0, 0, 0, 0, 0, 0];
    this.interpProgress = 1.0;
    this.interpDuration = 1.0; // seconds
    this.onInterpolationComplete = null;
  }

  // Smooth quintic polynomial easing (smooth robotic acceleration & deceleration)
  smoothStep5(t) {
    const clamped = Math.max(0, Math.min(1, t));
    return clamped * clamped * clamped * (clamped * (clamped * 6 - 15) + 10);
  }

  moveToPreset(presetName, duration = 1.2, onComplete = null) {
    if (!this.presets[presetName]) return;
    this.interpolateTo(this.presets[presetName], duration, onComplete);
  }

  interpolateTo(targetAnglesRad, duration = 1.0, onComplete = null) {
    this.startAngles = [...this.robot.angles];
    this.targetAngles = [...targetAnglesRad];
    this.interpDuration = Math.max(0.1, duration);
    this.interpProgress = 0.0;
    this.isInterpolating = true;
    this.onInterpolationComplete = onComplete;
  }

  update(deltaTime) {
    if (!this.isInterpolating) return false;

    this.interpProgress += deltaTime / this.interpDuration;
    const t = this.smoothStep5(this.interpProgress);

    const current = [];
    for (let i = 0; i < 6; i++) {
      current[i] = this.startAngles[i] + (this.targetAngles[i] - this.startAngles[i]) * t;
    }

    this.robot.setJointAngles(current);

    if (this.interpProgress >= 1.0) {
      this.isInterpolating = false;
      this.robot.setJointAngles(this.targetAngles);
      if (this.onInterpolationComplete) {
        const cb = this.onInterpolationComplete;
        this.onInterpolationComplete = null;
        cb();
      }
    }

    return true;
  }

  /**
   * Solve Inverse Kinematics using CCD (Cyclic Coordinate Descent) with joint limits
   * @param {THREE.Vector3} targetPos - Target 3D Cartesian position in world space
   * @param {number} maxIterations - Maximum solver iterations per frame
   * @param {number} threshold - Stop distance threshold in meters
   * @param {boolean} applyImmediately - If false, updates target angles for smooth servo motor motion
   */
  solveIK(targetPos, maxIterations = 24, threshold = 0.003, applyImmediately = false) {
    const initialAngles = [...this.robot.angles];
    const initialTelescope = this.robot.getTelescope();

    // Only use structural positioning joints (J1 Base, J2 Shoulder, J3 Elbow, J5 Wrist Pitch)
    // J4 (Forearm Roll) and J6 (Tool Roll) are kept stable to avoid unwanted gripper spinning
    const joints = [
      { obj: this.robot.j1, axis: new THREE.Vector3(0, 1, 0), idx: 0 },
      { obj: this.robot.j2, axis: new THREE.Vector3(1, 0, 0), idx: 1 },
      { obj: this.robot.j3, axis: new THREE.Vector3(1, 0, 0), idx: 2 },
      { obj: this.robot.j5, axis: new THREE.Vector3(1, 0, 0), idx: 4 }
    ];

    // Adaptive Telescoping Reach Extension based on target distance
    const shoulderPos = new THREE.Vector3();
    this.robot.j2.getWorldPosition(shoulderPos);
    const distFromShoulder = shoulderPos.distanceTo(targetPos);
    const baseReach = 0.50;
    const maxReach = 1.30;
    const desiredExt = Math.max(0, Math.min(1.0, (distFromShoulder - baseReach) / (maxReach - baseReach)));
    const currentExt = this.robot.getTelescope();
    const newExt = currentExt + (desiredExt - currentExt) * 0.35;
    this.robot.setTelescope(newExt);

    // Gently relax roll joints (J4, J6) towards neutral so the gripper stays stable and untwisted
    this.robot.angles[3] *= 0.92;
    this.robot.angles[5] *= 0.92;

    const currentTcp = new THREE.Vector3();
    const jointWorldPos = new THREE.Vector3();
    const toTcp = new THREE.Vector3();
    const toTarget = new THREE.Vector3();
    const jointWorldAxis = new THREE.Vector3();

    for (let iter = 0; iter < maxIterations; iter++) {
      this.robot.getTCPWorldPosition(currentTcp);
      if (currentTcp.distanceTo(targetPos) < threshold) {
        break; // Converged
      }

      // Iterate joints backward from wrist to base
      for (let j = joints.length - 1; j >= 0; j--) {
        const joint = joints[j];
        joint.obj.getWorldPosition(jointWorldPos);
        this.robot.getTCPWorldPosition(currentTcp);

        toTcp.subVectors(currentTcp, jointWorldPos);
        toTarget.subVectors(targetPos, jointWorldPos);

        if (toTcp.lengthSq() < 0.0001 || toTarget.lengthSq() < 0.0001) continue;

        toTcp.normalize();
        toTarget.normalize();

        // Get world orientation of the joint axis
        joint.obj.getWorldDirection(jointWorldAxis);
        const jointQuat = new THREE.Quaternion();
        joint.obj.getWorldQuaternion(jointQuat);
        jointWorldAxis.copy(joint.axis).applyQuaternion(jointQuat).normalize();

        // Project vectors onto the plane perpendicular to the rotation axis
        const toTcpProj = toTcp.clone().sub(jointWorldAxis.clone().multiplyScalar(toTcp.dot(jointWorldAxis))).normalize();
        const toTargetProj = toTarget.clone().sub(jointWorldAxis.clone().multiplyScalar(toTarget.dot(jointWorldAxis))).normalize();

        let dot = toTcpProj.dot(toTargetProj);
        dot = Math.max(-1.0, Math.min(1.0, dot));
        let angleDelta = Math.acos(dot);

        // Cross product to find rotation sign
        const cross = new THREE.Vector3().crossVectors(toTcpProj, toTargetProj);
        if (cross.dot(jointWorldAxis) < 0) {
          angleDelta = -angleDelta;
        }

        // Adaptive damping factor for rapid stable convergence
        const damping = 0.72;
        let newAngle = this.robot.angles[joint.idx] + angleDelta * damping;

        // Apply Joint Limits
        const limit = this.robot.limits[joint.idx];
        const minRad = THREE.MathUtils.degToRad(limit.min);
        const maxRad = THREE.MathUtils.degToRad(limit.max);
        newAngle = Math.max(minRad, Math.min(maxRad, newAngle));

        this.robot.angles[joint.idx] = newAngle;
        this.robot.applyJointAngles();
        this.robot.group.updateMatrixWorld(true);
      }
    }

    const distError = currentTcp.distanceTo(targetPos);
    const solvedAngles = [...this.robot.angles];
    const solvedTelescope = this.robot.getTelescope();

    if (!applyImmediately) {
      // Restore physical robot angles so servo motors can smoothly drive them without teleporting
      this.robot.angles = [...initialAngles];
      this.robot.telescopeExtension = initialTelescope;
      this.robot.setTargetJointAngles(solvedAngles);
      this.robot.setTargetTelescope(solvedTelescope);
      this.robot.applyJointAngles();
      this.robot.group.updateMatrixWorld(true);
    } else {
      this.robot.setTargetJointAngles(solvedAngles);
      this.robot.setTargetTelescope(solvedTelescope);
    }

    return distError;
  }

  // Get Cartesian Tool Center Point coordinates + Euler angles
  getTCPPose() {
    const pos = new THREE.Vector3();
    const quat = new THREE.Quaternion();
    this.robot.getTCPWorldPosition(pos);
    this.robot.getTCPWorldQuaternion(quat);

    const euler = new THREE.Euler().setFromQuaternion(quat, 'ZYX');
    return {
      x: pos.x,
      y: pos.y,
      z: pos.z,
      roll: THREE.MathUtils.radToDeg(euler.z),
      pitch: THREE.MathUtils.radToDeg(euler.x),
      yaw: THREE.MathUtils.radToDeg(euler.y)
    };
  }
}
