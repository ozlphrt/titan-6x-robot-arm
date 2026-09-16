export class TelemetryManager {
  constructor(robotModel, kinematics) {
    this.robot = robotModel;
    this.kinematics = kinematics;

    this.prevAngles = [...this.robot.angles];
    this.jointVelocities = [0, 0, 0, 0, 0, 0];
    this.motorTemp = 42.5; // °C
    this.totalTorque = 120; // Nm
    this.maxVelocity = 0.0; // m/s
    this.fps = 60;
    this.frameCount = 0;
    this.lastFpsUpdate = performance.now();

    // DOM Elements cache
    this.elTemp = document.getElementById('val-temp');
    this.elBarTemp = document.getElementById('bar-temp');
    this.elTorque = document.getElementById('val-torque');
    this.elBarTorque = document.getElementById('bar-torque');
    this.elVelocity = document.getElementById('val-velocity');
    this.elBarVelocity = document.getElementById('bar-velocity');
    this.elFps = document.getElementById('qm-fps');
    this.elReach = document.getElementById('qm-reach');
    this.elLoad = document.getElementById('qm-load');
  }

  update(deltaTime) {
    if (deltaTime <= 0) return;

    // Calculate Joint Angular Velocities (rad/s)
    let totalSpeed = 0;
    for (let i = 0; i < 6; i++) {
      const diff = Math.abs(this.robot.angles[i] - this.prevAngles[i]);
      const vel = diff / deltaTime;
      this.jointVelocities[i] = vel;
      totalSpeed += vel;
      this.prevAngles[i] = this.robot.angles[i];
    }

    // Dynamic Simulated Torque (Gravitational cantilever moments on J2/J3)
    const j2 = this.robot.angles[1];
    const j3 = this.robot.angles[2];
    const gravityTorque = Math.abs(Math.sin(j2) * 140 + Math.sin(j2 + j3) * 90);
    const dynamicTorque = totalSpeed * 35;
    this.totalTorque = Math.round(50 + gravityTorque + dynamicTorque);

    // Motor Temperature dynamics
    if (totalSpeed > 0.1) {
      this.motorTemp = Math.min(78, this.motorTemp + totalSpeed * deltaTime * 0.4);
    } else {
      this.motorTemp = Math.max(38, this.motorTemp - deltaTime * 0.15);
    }

    // TCP Linear Velocity
    this.maxVelocity = Math.round((totalSpeed * 0.38) * 100) / 100;

    // FPS calculation
    this.frameCount++;
    const now = performance.now();
    if (now - this.lastFpsUpdate >= 500) {
      this.fps = Math.round((this.frameCount * 1000) / (now - this.lastFpsUpdate));
      this.frameCount = 0;
      this.lastFpsUpdate = now;
      this.renderTelemetry();
    }

    return totalSpeed;
  }

  renderTelemetry() {
    if (this.elTemp) {
      this.elTemp.textContent = `${this.motorTemp.toFixed(1)}°C`;
      this.elBarTemp.style.width = `${Math.min(100, (this.motorTemp / 80) * 100)}%`;
    }

    if (this.elTorque) {
      this.elTorque.textContent = `${this.totalTorque} Nm`;
      this.elBarTorque.style.width = `${Math.min(100, (this.totalTorque / 350) * 100)}%`;
    }

    if (this.elVelocity) {
      this.elVelocity.textContent = `${this.maxVelocity.toFixed(2)} m/s`;
      this.elBarVelocity.style.width = `${Math.min(100, (this.maxVelocity / 2.5) * 100)}%`;
    }

    if (this.elFps) {
      this.elFps.textContent = this.fps;
    }

    // Reach Calculation
    const tcp = this.kinematics.getTCPPose();
    const reachDist = Math.sqrt(tcp.x * tcp.x + tcp.z * tcp.z);
    if (this.elReach) {
      this.elReach.textContent = `${reachDist.toFixed(2)} m`;
    }
  }
}
