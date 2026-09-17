import * as THREE from 'three';

export class Kinematics {
  constructor(robotModel) {
    this.robot = robotModel;
    
    // Preset Poses in Radians [J1, J2, J3, J4, J5, J6] (Solid collision-safe configurations)
    this.presets = {
      home: [0, 0, 0, 0, 0, 0],
      ready: [0, -0.45, -0.55, 0, 0.60, 0],
      reach: [0, -0.85, -0.30, 0, 0.45, 0],
      inspect: [0.78, -0.50, -0.65, 0.3, 0.40, 0.5],
      compact: [0, -0.20, -1.85, 0, 1.15, 0]
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
   * Solve Inverse Kinematics using Analytical Geometric Elbow-Up Seeding + CCD Refinement
   * @param {THREE.Vector3} targetPos - Target 3D Cartesian position in world space
   * @param {number} maxIterations - Maximum solver iterations per frame
   * @param {number} threshold - Stop distance threshold in meters
   * @param {boolean} applyImmediately - If false, updates target angles for smooth servo motor motion
   * @param {number} wristRoll - Optional wrist J4/J6 roll offset in radians for orientation variation
   * @param {number} wristPitchOffset - Optional wrist J5 pitch offset in radians
   */
  solveIK(targetPos, maxIterations = 16, threshold = 0.002, applyImmediately = false, wristRoll = 0.0, wristPitchOffset = 0.0) {
    const initialAngles = [...this.robot.angles];
    const initialTelescope = this.robot.getTelescope();

    // 0. Transform World Target to Robot Local Space
    this.robot.group.updateMatrixWorld(true);
    const localTarget = targetPos.clone();
    this.robot.group.worldToLocal(localTarget);

    // 1. Analytical Base Yaw (J1): Face target directly in robot local XZ plane
    const targetYaw = Math.atan2(localTarget.x, localTarget.z);
    
    // 2. Planar Coordinates relative to shoulder pivot
    const shoulderLocalY = 0.48; // Base height + shoulder yoke height
    const hDist = Math.sqrt(localTarget.x * localTarget.x + localTarget.z * localTarget.z);
    const dy = localTarget.y - shoulderLocalY;
    const targetDist = Math.sqrt(hDist * hDist + dy * dy);

    // 3. Adaptive Telescoping Extension
    const baseArmReach = 0.75;
    const maxArmReach = 1.48;
    const desiredExt = Math.max(0, Math.min(1.0, (targetDist - baseArmReach) / (maxArmReach - baseArmReach)));
    const currentExt = this.robot.getTelescope();
    const newExt = currentExt + (desiredExt - currentExt) * 0.50;
    this.robot.setTelescope(newExt);

    // 4. Analytical 2-Link Geometric "Elbow-Up" Seed
    const L1 = this.robot.dimensions.upperArmLength;
    const L2 = this.robot.dimensions.forearmLength + this.robot.dimensions.wristLength + 0.175; // Forearm + Wrist + Gripper TCP
    const dClamped = Math.max(0.16, Math.min(L1 + L2 - 0.005, targetDist));

    const cosBeta = Math.max(-1.0, Math.min(1.0, (L1 * L1 + L2 * L2 - dClamped * dClamped) / (2 * L1 * L2)));
    const beta = Math.acos(cosBeta);

    const cosGamma = Math.max(-1.0, Math.min(1.0, (L1 * L1 + dClamped * dClamped - L2 * L2) / (2 * L1 * dClamped)));
    const gamma = Math.acos(cosGamma);

    const phi = Math.atan2(hDist, dy); // Angle from +Y towards +Z
    const seedJ2 = -(phi - gamma); // Forward shoulder pitch
    const seedJ3 = Math.PI - beta; // Forward elbow pitch
    const seedJ5 = -seedJ2 - seedJ3; // Wrist alignment

    // Seed robot with canonical forward-reaching pose & adaptive orientation
    this.robot.angles[0] = targetYaw;
    this.robot.angles[1] = seedJ2;
    this.robot.angles[2] = seedJ3;
    this.robot.angles[3] = wristRoll || 0.0;
    this.robot.angles[4] = seedJ5 + (wristPitchOffset || 0.0);
    this.robot.angles[5] = -(wristRoll || 0.0) * 0.5;

    // Apply joint limits to seed
    for (let i = 0; i < 6; i++) {
      const limit = this.robot.limits[i];
      const minRad = THREE.MathUtils.degToRad(limit.min);
      const maxRad = THREE.MathUtils.degToRad(limit.max);
      this.robot.angles[i] = Math.max(minRad, Math.min(maxRad, this.robot.angles[i]));
    }

    this.robot.applyJointAngles();
    this.robot.group.updateMatrixWorld(true);

    // 5. CCD Refinement Passes for Millimeter-Precise Convergence
    const joints = [
      { obj: this.robot.j1, axis: new THREE.Vector3(0, 1, 0), idx: 0 },
      { obj: this.robot.j2, axis: new THREE.Vector3(1, 0, 0), idx: 1 },
      { obj: this.robot.j3, axis: new THREE.Vector3(1, 0, 0), idx: 2 },
      { obj: this.robot.j5, axis: new THREE.Vector3(1, 0, 0), idx: 4 }
    ];

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

      for (let j = joints.length - 1; j >= 0; j--) {
        const joint = joints[j];
        joint.obj.getWorldPosition(jointWorldPos);
        this.robot.getTCPWorldPosition(currentTcp);

        toTcp.subVectors(currentTcp, jointWorldPos);
        toTarget.subVectors(targetPos, jointWorldPos);

        if (toTcp.lengthSq() < 0.0001 || toTarget.lengthSq() < 0.0001) continue;

        toTcp.normalize();
        toTarget.normalize();

        const jointQuat = new THREE.Quaternion();
        joint.obj.getWorldQuaternion(jointQuat);
        jointWorldAxis.copy(joint.axis).applyQuaternion(jointQuat).normalize();

        const toTcpProj = toTcp.clone().sub(jointWorldAxis.clone().multiplyScalar(toTcp.dot(jointWorldAxis))).normalize();
        const toTargetProj = toTarget.clone().sub(jointWorldAxis.clone().multiplyScalar(toTarget.dot(jointWorldAxis))).normalize();

        let dot = Math.max(-1.0, Math.min(1.0, toTcpProj.dot(toTargetProj)));
        let angleDelta = Math.acos(dot);

        const cross = new THREE.Vector3().crossVectors(toTcpProj, toTargetProj);
        if (cross.dot(jointWorldAxis) < 0) {
          angleDelta = -angleDelta;
        }

        const damping = 0.85;
        let newAngle = this.robot.angles[joint.idx] + angleDelta * damping;

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
