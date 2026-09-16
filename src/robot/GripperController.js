import * as THREE from 'three';

export class GripperController {
  constructor(robotModel, workcellScene, audioEngine) {
    this.robot = robotModel;
    this.workcell = workcellScene;
    this.audio = audioEngine;

    this.isOpen = true;
    this.currentValue = 0.0;
    this.targetValue = 0.0;
    this.attachedObject = null;
    this.gripRadius = 0.12; // Distance to detect graspable object
  }

  toggle() {
    this.setOpen(!this.isOpen);
  }

  setOpen(open) {
    this.isOpen = open;
    this.targetValue = open ? 0.0 : 1.0;
    this.audio.playPneumatic(!open);
  }

  update(deltaTime) {
    // Smooth gripper animation
    if (Math.abs(this.currentValue - this.targetValue) > 0.005) {
      const speed = 4.0; // Gripper close/open speed
      this.currentValue += (this.targetValue - this.currentValue) * Math.min(1.0, deltaTime * speed);
      this.robot.setGripper(this.currentValue);

      // Try grasping object when closing
      if (this.currentValue > 0.4 && !this.isOpen && !this.attachedObject) {
        this.attemptGrasp();
      }

      // Release object when opening
      if (this.currentValue < 0.3 && this.isOpen && this.attachedObject) {
        this.releaseObject();
      }
    }
  }

  attemptGrasp() {
    const tcpPos = new THREE.Vector3();
    this.robot.getTCPWorldPosition(tcpPos);

    // Check workcell active parts
    const candidates = this.workcell.getGraspableObjects();
    for (const obj of candidates) {
      const objWorldPos = new THREE.Vector3();
      obj.getWorldPosition(objWorldPos);

      if (tcpPos.distanceTo(objWorldPos) < this.gripRadius) {
        this.attachedObject = obj;
        this.workcell.attachObjectToArm(obj, this.robot.gripperGroup);
        this.audio.playClick();
        break;
      }
    }
  }

  releaseObject() {
    if (!this.attachedObject) return;
    this.workcell.detachObjectFromArm(this.attachedObject);
    this.attachedObject = null;
  }
}
