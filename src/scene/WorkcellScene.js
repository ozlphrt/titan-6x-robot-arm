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
    this.ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    this.scene.add(this.ambientLight);

    this.mainLight = new THREE.DirectionalLight(0xffffff, 2.6);
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
    this.fillLight = new THREE.DirectionalLight(0x38bdf8, 1.0);
    this.fillLight.position.set(-3.0, 2.5, -2.0);
    this.scene.add(this.fillLight);

    // Warm backlight
    this.backLight = new THREE.DirectionalLight(0xffb300, 0.6);
    this.backLight.position.set(0, 3.0, -3.5);
    this.scene.add(this.backLight);

    // 2. High-Tech Industrial Rectangular Base Plate Platform (3.6m x 3.6m, Top at y=0)
    this.basePlateWidth = 3.6;
    this.basePlateDepth = 3.6;

    // Rectangular Platform Slab (Top surface at y=0, height 0.08m)
    const platformGeo = new THREE.BoxGeometry(3.6, 0.08, 3.6);
    this.platformMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.35,
      metalness: 0.25,
      envMapIntensity: 1.0
    });
    this.platformMesh = new THREE.Mesh(platformGeo, this.platformMat);
    this.platformMesh.position.y = -0.04;
    this.platformMesh.receiveShadow = true;
    this.scene.add(this.platformMesh);

    // Beveled Border Edge Frame around Rectangular Base Plate
    this.borderMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.4,
      metalness: 0.6
    });

    // Perimeter border rails
    const railThickness = 0.04;
    const railHeight = 0.015;
    // North & South rails
    [-1.8 + railThickness / 2, 1.8 - railThickness / 2].forEach(z => {
      const railGeo = new THREE.BoxGeometry(3.6, railHeight, railThickness);
      const railMesh = new THREE.Mesh(railGeo, this.borderMat);
      railMesh.position.set(0, 0.005, z);
      this.scene.add(railMesh);
    });
    // East & West rails
    [-1.8 + railThickness / 2, 1.8 - railThickness / 2].forEach(x => {
      const railGeo = new THREE.BoxGeometry(railThickness, railHeight, 3.6);
      const railMesh = new THREE.Mesh(railGeo, this.borderMat);
      railMesh.position.set(x, 0.005, 0);
      this.scene.add(railMesh);
    });

    // Lower Sub-Floor in the Void Below (at y = -1.2m)
    const lowerFloorGeo = new THREE.PlaneGeometry(18, 18);
    this.lowerFloorMat = new THREE.MeshStandardMaterial({
      color: 0xdbeafe,
      roughness: 0.8,
      metalness: 0.1
    });
    this.lowerFloor = new THREE.Mesh(lowerFloorGeo, this.lowerFloorMat);
    this.lowerFloor.rotation.x = -Math.PI / 2;
    this.lowerFloor.position.y = -1.2;
    this.lowerFloor.receiveShadow = true;
    this.scene.add(this.lowerFloor);

    // 3. Precision Grid across the Rectangular Base Plate
    this.gridHelper = new THREE.GridHelper(3.6, 24, 0x0284c7, 0xcbd5e1);
    this.gridHelper.position.y = 0.002;
    this.scene.add(this.gridHelper);

    // 4. Concentric Circular Defense Envelope (The zone the robot arm reaches & defends)
    this.ringsGroup = new THREE.Group();
    const reachOutlines = [
      { radius: 0.50, color: 0x0284c7, opacity: 0.45 },
      { radius: 0.85, color: 0x059669, opacity: 0.50 },
      { radius: 1.15, color: 0xd97706, opacity: 0.50 },
      { radius: 1.35, color: 0x0284c7, opacity: 0.75 } // Outer max reach defense boundary
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

  setEnvironmentTheme(themeKey) {
    const envThemes = {
      light_studio: {
        bg: 0xf1f5f9,
        fogDensity: 0.05,
        platform: 0xe2e8f0,
        platformRoughness: 0.35,
        platformMetalness: 0.25,
        rails: 0x94a3b8,
        floor: 0xdbeafe,
        gridCenter: 0x0284c7,
        gridLines: 0xcbd5e1,
        ambient: 1.4,
        main: 2.6,
        fill: 1.0,
        back: 0.6
      },
      dark_cyber: {
        bg: 0x07090e,
        fogDensity: 0.12,
        platform: 0x131824,
        platformRoughness: 0.25,
        platformMetalness: 0.5,
        rails: 0x0c0f17,
        floor: 0x06080d,
        gridCenter: 0x00f0ff,
        gridLines: 0x1a2436,
        ambient: 0.7,
        main: 2.2,
        fill: 0.8,
        back: 0.5
      },
      cad_blueprint: {
        bg: 0x0a192f,
        fogDensity: 0.08,
        platform: 0x112240,
        platformRoughness: 0.4,
        platformMetalness: 0.3,
        rails: 0x233554,
        floor: 0x020c1b,
        gridCenter: 0x64ffda,
        gridLines: 0x1e3a5f,
        ambient: 0.8,
        main: 2.0,
        fill: 0.9,
        back: 0.4
      },
      cleanroom_lab: {
        bg: 0xffffff,
        fogDensity: 0.03,
        platform: 0xf8fafc,
        platformRoughness: 0.15,
        platformMetalness: 0.1,
        rails: 0xe2e8f0,
        floor: 0xf1f5f9,
        gridCenter: 0x0ea5e9,
        gridLines: 0xe2e8f0,
        ambient: 1.8,
        main: 2.8,
        fill: 1.4,
        back: 0.7
      }
    };

    const cfg = envThemes[themeKey] || envThemes.light_studio;

    // Background & Fog
    if (this.scene.background) this.scene.background.setHex(cfg.bg);
    if (this.scene.fog) {
      this.scene.fog.color.setHex(cfg.bg);
      this.scene.fog.density = cfg.fogDensity;
    }

    // Platform & Floor
    this.platformMat.color.setHex(cfg.platform);
    this.platformMat.roughness = cfg.platformRoughness;
    this.platformMat.metalness = cfg.platformMetalness;
    this.borderMat.color.setHex(cfg.rails);
    this.lowerFloorMat.color.setHex(cfg.floor);

    // Lights
    if (this.ambientLight) this.ambientLight.intensity = cfg.ambient;
    if (this.mainLight) this.mainLight.intensity = cfg.main;
    if (this.fillLight) this.fillLight.intensity = cfg.fill;
    if (this.backLight) this.backLight.intensity = cfg.back;

    // Grid
    if (this.gridHelper) {
      this.scene.remove(this.gridHelper);
      this.gridHelper.geometry.dispose();
      this.gridHelper = new THREE.GridHelper(3.6, 24, cfg.gridCenter, cfg.gridLines);
      this.gridHelper.position.y = 0.002;
      this.gridHelper.visible = this.gridVisible;
      this.scene.add(this.gridHelper);
    }
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
