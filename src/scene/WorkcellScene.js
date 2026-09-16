import * as THREE from 'three';

export class WorkcellScene {
  constructor(scene) {
    this.scene = scene;
    this.graspableObjects = [];
    this.gridVisible = true;
    this.shadowsEnabled = true;

    this.initEnvironment();
  }

  initEnvironment() {
    // 1. High-Bay Overhead & Spot Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);

    this.mainLight = new THREE.DirectionalLight(0xffffff, 2.2);
    this.mainLight.position.set(2.5, 4.0, 2.0);
    this.mainLight.castShadow = true;
    this.mainLight.shadow.mapSize.width = 2048;
    this.mainLight.shadow.mapSize.height = 2048;
    this.mainLight.shadow.camera.near = 0.5;
    this.mainLight.shadow.camera.far = 12;
    this.mainLight.shadow.camera.left = -2;
    this.mainLight.shadow.camera.right = 2;
    this.mainLight.shadow.camera.top = 2;
    this.mainLight.shadow.camera.bottom = -2;
    this.mainLight.shadow.bias = -0.0005;
    this.scene.add(this.mainLight);

    // Blue-tinted fill light
    const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.8);
    fillLight.position.set(-3.0, 2.5, -2.0);
    this.scene.add(fillLight);

    // Warm backlight
    const backLight = new THREE.DirectionalLight(0xffb300, 0.5);
    backLight.position.set(0, 3.0, -3.5);
    this.scene.add(backLight);

    // 2. High-Tech Industrial Rectangular Base Plate Platform (3.6m x 3.6m, Top at y=0)
    this.basePlateWidth = 3.6;
    this.basePlateDepth = 3.6;

    // Rectangular Platform Slab (Top surface at y=0, height 0.08m)
    const platformGeo = new THREE.BoxGeometry(3.6, 0.08, 3.6);
    this.platformMat = new THREE.MeshStandardMaterial({
      color: 0x131824,
      roughness: 0.25,
      metalness: 0.5,
      envMapIntensity: 0.9
    });
    this.platformMesh = new THREE.Mesh(platformGeo, this.platformMat);
    this.platformMesh.position.y = -0.04;
    this.platformMesh.receiveShadow = true;
    this.scene.add(this.platformMesh);

    // Beveled Border Edge Frame around Rectangular Base Plate
    const borderMat = new THREE.MeshStandardMaterial({
      color: 0x0c0f17,
      roughness: 0.35,
      metalness: 0.85
    });

    // Perimeter border rails
    const railThickness = 0.04;
    const railHeight = 0.015;
    // North & South rails
    [-1.8 + railThickness / 2, 1.8 - railThickness / 2].forEach(z => {
      const railGeo = new THREE.BoxGeometry(3.6, railHeight, railThickness);
      const railMesh = new THREE.Mesh(railGeo, borderMat);
      railMesh.position.set(0, 0.005, z);
      this.scene.add(railMesh);
    });
    // East & West rails
    [-1.8 + railThickness / 2, 1.8 - railThickness / 2].forEach(x => {
      const railGeo = new THREE.BoxGeometry(railThickness, railHeight, 3.6);
      const railMesh = new THREE.Mesh(railGeo, borderMat);
      railMesh.position.set(x, 0.005, 0);
      this.scene.add(railMesh);
    });

    // Lower Sub-Floor in the Void Below (at y = -1.2m)
    const lowerFloorGeo = new THREE.PlaneGeometry(18, 18);
    const lowerFloorMat = new THREE.MeshStandardMaterial({
      color: 0x06080d,
      roughness: 0.8,
      metalness: 0.2
    });
    const lowerFloor = new THREE.Mesh(lowerFloorGeo, lowerFloorMat);
    lowerFloor.rotation.x = -Math.PI / 2;
    lowerFloor.position.y = -1.2;
    lowerFloor.receiveShadow = true;
    this.scene.add(lowerFloor);

    // 3. Precision Grid across the Rectangular Base Plate
    this.gridHelper = new THREE.GridHelper(3.6, 24, 0x00f0ff, 0x1a2436);
    this.gridHelper.position.y = 0.002;
    this.scene.add(this.gridHelper);

    // 4. Concentric Circular Defense Envelope (The zone the robot arm reaches & defends)
    this.ringsGroup = new THREE.Group();
    const reachOutlines = [
      { radius: 0.50, color: 0x00f0ff, opacity: 0.35 },
      { radius: 0.85, color: 0x00ff9d, opacity: 0.40 },
      { radius: 1.15, color: 0xffcb05, opacity: 0.40 },
      { radius: 1.35, color: 0x00f0ff, opacity: 0.65 } // Outer max reach defense boundary
    ];

    reachOutlines.forEach(env => {
      const ringGeo = new THREE.RingGeometry(env.radius - 0.003, env.radius + 0.003, 128);
      ringGeo.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: env.color,
        transparent: true,
        opacity: env.opacity,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.y = 0.003;
      this.ringsGroup.add(ring);
    });
    this.scene.add(this.ringsGroup);
  }

  getGraspableObjects() {
    return this.graspableObjects;
  }

  attachObjectToArm(obj, armParentGroup) {
    this.scene.remove(obj);
    armParentGroup.add(obj);
    obj.position.set(0, 0.14, 0);
    obj.rotation.set(0, 0, 0);
  }

  detachObjectFromArm(obj) {
    const worldPos = new THREE.Vector3();
    const worldQuat = new THREE.Quaternion();
    obj.getWorldPosition(worldPos);
    obj.getWorldQuaternion(worldQuat);

    obj.parent.remove(obj);
    this.scene.add(obj);

    obj.position.copy(worldPos);
    obj.quaternion.copy(worldQuat);
  }

  update(deltaTime) {
    // Clean scene
  }

  toggleSafetyCurtain(visible) {
    // No-op
  }

  toggleGrid(visible) {
    this.gridVisible = visible;
    if (this.gridHelper) this.gridHelper.visible = visible;
    if (this.ringsGroup) this.ringsGroup.visible = visible;
  }

  toggleShadows(enabled) {
    this.shadowsEnabled = enabled;
    this.mainLight.castShadow = enabled;
  }
}
