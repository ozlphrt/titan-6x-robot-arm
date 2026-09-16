import * as THREE from 'three';

export class ToolpathVisualizer {
  constructor(scene) {
    this.scene = scene;
    this.maxPoints = 250;
    this.points = [];
    this.enabled = false;

    // Line trail setup
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.maxPoints * 3);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.LineBasicMaterial({
      color: 0x00ff9d,
      linewidth: 2,
      transparent: true,
      opacity: 0.8
    });

    this.line = new THREE.Line(geometry, material);
    this.line.frustumCulled = false;
    this.line.visible = false;
    this.scene.add(this.line);

    // Target IK Draggable Sphere Gizmo
    this.buildTargetGizmo();
  }

  buildTargetGizmo() {
    this.targetGizmo = new THREE.Group();
    this.targetGizmo.name = 'IK_TargetGizmo';
    this.targetGizmo.position.set(0.4, 0.5, 0.0);
    this.targetGizmo.visible = false;

    // Outer Glowing Ring
    const ringGeo = new THREE.TorusGeometry(0.045, 0.003, 16, 32);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true });
    this.targetGizmo.add(new THREE.Mesh(ringGeo, ringMat));

    // Inner Glowing Core
    const coreGeo = new THREE.SphereGeometry(0.02, 16, 16);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 2.0,
      roughness: 0.2
    });
    this.targetGizmo.add(new THREE.Mesh(coreGeo, coreMat));

    // Small coordinate crosshairs
    const axisMatX = new THREE.MeshBasicMaterial({ color: 0xff3366 });
    const axisMatY = new THREE.MeshBasicMaterial({ color: 0x00ff9d });
    const axisMatZ = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

    const stemGeo = new THREE.CylinderGeometry(0.002, 0.002, 0.08, 8);

    const stemX = new THREE.Mesh(stemGeo, axisMatX);
    stemX.rotateZ(-Math.PI / 2);
    stemX.position.x = 0.04;
    this.targetGizmo.add(stemX);

    const stemY = new THREE.Mesh(stemGeo, axisMatY);
    stemY.position.y = 0.04;
    this.targetGizmo.add(stemY);

    const stemZ = new THREE.Mesh(stemGeo, axisMatZ);
    stemZ.rotateX(Math.PI / 2);
    stemZ.position.z = 0.04;
    this.targetGizmo.add(stemZ);

    this.scene.add(this.targetGizmo);
  }

  setTargetGizmoVisible(visible) {
    this.targetGizmo.visible = visible;
  }

  setTargetPosition(x, y, z) {
    this.targetGizmo.position.set(x, y, z);
  }

  getTargetPosition() {
    return this.targetGizmo.position;
  }

  addPoint(pos) {
    if (!this.enabled) return;

    if (this.points.length > 0) {
      const last = this.points[this.points.length - 1];
      if (last.distanceTo(pos) < 0.005) return; // Skip minor jitter
    }

    this.points.push(pos.clone());
    if (this.points.length > this.maxPoints) {
      this.points.shift();
    }

    const posAttr = this.line.geometry.attributes.position;
    for (let i = 0; i < this.points.length; i++) {
      posAttr.setXYZ(i, this.points[i].x, this.points[i].y, this.points[i].z);
    }
    this.line.geometry.setDrawRange(0, this.points.length);
    posAttr.needsUpdate = true;
  }

  clear() {
    this.points = [];
    this.line.geometry.setDrawRange(0, 0);
  }

  toggleTrail(visible) {
    this.enabled = visible;
    this.line.visible = visible;
  }
}
