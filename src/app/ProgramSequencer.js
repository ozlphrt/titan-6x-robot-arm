import confetti from 'canvas-confetti';

export class ProgramSequencer {
  constructor(robotModel, kinematics, gripperController, audioEngine) {
    this.robot = robotModel;
    this.kinematics = kinematics;
    this.gripper = gripperController;
    this.audio = audioEngine;

    // Mode state
    this.currentMode = 'fk'; // 'fk', 'ik', 'auto', 'teach'
    this.isPlaying = false;
    this.isLooping = true;
    this.playbackSpeed = 1.0;

    // Teach Pendant Waypoints
    this.waypoints = [];
    this.currentStepIndex = 0;

    // Auto Mode Pick & Place State Machine
    this.isAutoRunning = false;
    this.autoStep = 0;
    this.partsProcessed = 0;
    this.cycleStartTime = 0;
    this.avgCycleTime = 0;

    // Listeners / UI callbacks
    this.onWaypointsChanged = null;
    this.onStepChanged = null;
    this.onAutoStatsChanged = null;
    this.onModeChanged = null;
  }

  setMode(mode) {
    this.currentMode = mode;
    this.stopPlayback();
    this.stopAuto();
    if (this.onModeChanged) this.onModeChanged(mode);
  }

  // --- TEACH PENDANT METHODS ---
  recordCurrentPose() {
    const wp = {
      id: Date.now(),
      label: `WP-${String(this.waypoints.length + 1).padStart(2, '0')}`,
      angles: [...this.robot.angles],
      gripper: this.gripper.isOpen ? 0 : 1,
      pose: this.kinematics.getTCPPose()
    };
    this.waypoints.push(wp);
    this.audio.playClick();
    if (this.onWaypointsChanged) this.onWaypointsChanged(this.waypoints);
  }

  deleteWaypoint(index) {
    this.waypoints.splice(index, 1);
    if (this.currentStepIndex >= this.waypoints.length) {
      this.currentStepIndex = Math.max(0, this.waypoints.length - 1);
    }
    if (this.onWaypointsChanged) this.onWaypointsChanged(this.waypoints);
  }

  clearWaypoints() {
    this.waypoints = [];
    this.currentStepIndex = 0;
    this.stopPlayback();
    if (this.onWaypointsChanged) this.onWaypointsChanged(this.waypoints);
  }

  loadDemoRoutine() {
    // A 4-waypoint industrial routine
    this.waypoints = [
      {
        id: 1,
        label: 'Approach Infeed',
        angles: [-0.95, -0.4, 0.8, 0, -0.4, 0],
        gripper: 0,
        pose: { x: -0.5, y: 0.45, z: 0.25 }
      },
      {
        id: 2,
        label: 'Pneumatic Pick',
        angles: [-0.95, -0.85, 1.25, 0, -0.4, 0],
        gripper: 1,
        pose: { x: -0.55, y: 0.28, z: 0.25 }
      },
      {
        id: 3,
        label: 'Transfer Apex',
        angles: [0, -0.3, 0.6, 0, -0.3, 0],
        gripper: 1,
        pose: { x: 0, y: 0.6, z: 0.2 }
      },
      {
        id: 4,
        label: 'Pallet Deposit',
        angles: [0.95, -0.85, 1.25, 0, -0.4, 0],
        gripper: 0,
        pose: { x: 0.55, y: 0.28, z: 0.25 }
      }
    ];
    this.currentStepIndex = 0;
    if (this.onWaypointsChanged) this.onWaypointsChanged(this.waypoints);
    this.audio.playClick();
  }

  togglePlayRoutine() {
    if (this.isPlaying) {
      this.stopPlayback();
    } else {
      this.startPlayback();
    }
  }

  startPlayback() {
    if (this.waypoints.length === 0) return;
    this.isPlaying = true;
    this.currentStepIndex = 0;
    this.executeCurrentStep();
  }

  stopPlayback() {
    this.isPlaying = false;
  }

  executeCurrentStep() {
    if (!this.isPlaying || this.waypoints.length === 0) return;

    const wp = this.waypoints[this.currentStepIndex];
    if (this.onStepChanged) this.onStepChanged(this.currentStepIndex);

    // Actuate gripper
    this.gripper.setOpen(wp.gripper === 0);

    // Duration based on speed
    const baseDuration = 1.2 / this.playbackSpeed;

    this.kinematics.interpolateTo(wp.angles, baseDuration, () => {
      if (!this.isPlaying) return;

      // Advance to next step
      this.currentStepIndex++;
      if (this.currentStepIndex >= this.waypoints.length) {
        if (this.isLooping) {
          this.currentStepIndex = 0;
          this.executeCurrentStep();
        } else {
          this.isPlaying = false;
          this.audio.playSuccess();
        }
      } else {
        this.executeCurrentStep();
      }
    });
  }

  stepForward() {
    if (this.waypoints.length === 0) return;
    this.currentStepIndex = (this.currentStepIndex + 1) % this.waypoints.length;
    const wp = this.waypoints[this.currentStepIndex];
    this.gripper.setOpen(wp.gripper === 0);
    this.kinematics.interpolateTo(wp.angles, 1.0 / this.playbackSpeed);
    if (this.onStepChanged) this.onStepChanged(this.currentStepIndex);
  }

  // --- AUTOMATED PICK & PLACE WORKCELL CYCLE ---
  toggleAuto() {
    if (this.isAutoRunning) {
      this.stopAuto();
    } else {
      this.startAuto();
    }
  }

  startAuto() {
    this.isAutoRunning = true;
    this.autoStep = 0;
    this.cycleStartTime = performance.now();
    this.runAutoStep();
  }

  stopAuto() {
    this.isAutoRunning = false;
  }

  runAutoStep() {
    if (!this.isAutoRunning) return;

    const autoPoses = [
      // 0: Hover above Infeed Conveyor
      { angles: [-0.95, -0.4, 0.8, 0, -0.4, 0], grip: true, duration: 1.0, stepId: 'step-infeed' },
      // 1: Descend & clamp part
      { angles: [-0.95, -0.85, 1.25, 0, -0.4, 0], grip: false, duration: 0.8, stepId: 'step-approach' },
      // 2: Lift part up
      { angles: [-0.95, -0.3, 0.6, 0, -0.3, 0], grip: false, duration: 0.8, stepId: 'step-grip' },
      // 3: Transport across apex to pallet
      { angles: [0.95, -0.3, 0.6, 0, -0.3, 0], grip: false, duration: 1.2, stepId: 'step-transport' },
      // 4: Lower onto pallet table
      { angles: [0.95, -0.85, 1.25, 0, -0.4, 0], grip: true, duration: 0.8, stepId: 'step-place' },
      // 5: Return to Home/Ready
      { angles: [0, -0.35, 0.75, 0, -0.4, 0], grip: true, duration: 1.0, stepId: 'step-infeed' }
    ];

    const current = autoPoses[this.autoStep];
    const duration = current.duration / this.playbackSpeed;

    // Highlight timeline UI step
    if (this.onAutoStatsChanged) {
      this.onAutoStatsChanged({
        stepId: current.stepId,
        partsCount: this.partsProcessed,
        cycleTime: this.avgCycleTime
      });
    }

    this.kinematics.interpolateTo(current.angles, duration, () => {
      if (!this.isAutoRunning) return;

      // Toggle gripper state
      this.gripper.setOpen(current.grip);

      this.autoStep++;
      if (this.autoStep >= autoPoses.length) {
        this.autoStep = 0;
        this.partsProcessed++;
        const elapsed = (performance.now() - this.cycleStartTime) / 1000;
        this.avgCycleTime = Math.round(elapsed * 10) / 10;
        this.cycleStartTime = performance.now();

        if (this.partsProcessed % 3 === 0) {
          confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
        }

        this.audio.playSuccess();
      }

      this.runAutoStep();
    });
  }
}
