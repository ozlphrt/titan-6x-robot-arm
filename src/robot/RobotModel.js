import * as THREE from 'three';

/**
 * Creates a rounded box geometry with filleted edges and smooth chamfers
 */
function createRoundedBoxGeometry(width, height, depth, radius, smoothness = 4) {
  const shape = new THREE.Shape();
  const eps = 0.00001;
  const radiusClamped = Math.min(radius, Math.min(width, height, depth) / 2 - eps);

  const w = width / 2 - radiusClamped;
  const h = height / 2 - radiusClamped;

  shape.absarc(-w, -h, radiusClamped, Math.PI, 1.5 * Math.PI, false);
  shape.absarc(w, -h, radiusClamped, 1.5 * Math.PI, 2 * Math.PI, false);
  shape.absarc(w, h, radiusClamped, 0, 0.5 * Math.PI, false);
  shape.absarc(-w, h, radiusClamped, 0.5 * Math.PI, Math.PI, false);

  const extrudeSettings = {
    depth: depth - radiusClamped * 2,
    bevelEnabled: true,
    bevelSegments: smoothness * 2,
    steps: 1,
    bevelSize: radiusClamped,
    bevelThickness: radiusClamped,
    curveSegments: smoothness * 2
  };

  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geometry.center();
  return geometry;
}

export class RobotModel {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'IndustrialRobotArm';

    // Theme color palettes
    this.themes = {
      fanuc: { primary: 0xffcb05, secondary: 0x1c2128, accent: 0xffe047, dark: 0x0f1318 },
      kuka: { primary: 0xe65100, secondary: 0x1e242d, accent: 0xff9800, dark: 0x11141a },
      abb: { primary: 0xe5e7eb, secondary: 0x8b0000, accent: 0xd32f2f, dark: 0x1a1d24 },
      cyber: { primary: 0x00f0ff, secondary: 0x0d1527, accent: 0x00ff9d, dark: 0x060913 },
      stealth: { primary: 0x374151, secondary: 0x0f172a, accent: 0x9ca3af, dark: 0x070b14 }
    };
    this.currentTheme = 'fanuc';

    // Joint Angle State in Radians (Actual current physical angles)
    this.angles = [0, 0, 0, 0, 0, 0]; // J1..J6
    // Target Joint Angles in Radians (Goal commanded angles)
    this.targetAngles = [0, 0, 0, 0, 0, 0];
    // Joint angular velocities for smooth critically damped motion
    this.jointVelocities = [0, 0, 0, 0, 0, 0];
    // Max angular speeds (rad/s) for agile, high-performance robotic tracking [J1..J6]
    this.jointSpeeds = [5.2, 4.6, 5.2, 6.5, 6.5, 8.0]; // Fast, agile industrial servo speed

    // Joint Angle Limits in Degrees (Physical Hard Stops for Solid Machine Structure)
    this.limits = [
      { min: -180, max: 180 }, // J1: Base Yaw
      { min: -105, max: 20 },  // J2: Shoulder Pitch (hard stop prevents crashing backward into base)
      { min: -145, max: 25 },  // J3: Elbow Pitch (hard stop prevents forearm folding into upper arm/base)
      { min: -180, max: 180 }, // J4: Forearm Roll
      { min: -115, max: 115 }, // J5: Wrist Pitch
      { min: -360, max: 360 }  // J6: Tool Roll
    ];

    // Link Dimensions
    this.dimensions = {
      baseHeight: 0.22,
      shoulderHeight: 0.18,
      upperArmLength: 0.45,
      elbowOffset: 0.08,
      baseForearmLength: 0.38,
      forearmLength: 0.38,
      maxTelescopeExtension: 0.28,
      wristLength: 0.12,
      flangeLength: 0.05
    };

    // Telescoping Forearm State (0.0 = fully retracted, 1.0 = fully extended)
    this.telescopeExtension = 0.0;
    this.targetTelescopeExtension = 0.0;
    this.telescopeVelocity = 0.0;

    // Gripper State
    this.gripperPosition = 0.0;
    this.activeTool = 'gripper';

    this.initMaterials();
    this.buildRobot();
    this.scene.add(this.group);
  }

  initMaterials() {
    const t = this.themes[this.currentTheme];

    this.materials = {
      primaryPaint: new THREE.MeshStandardMaterial({
        color: t.primary,
        metalness: 0.35,
        roughness: 0.22,
        clearcoat: 0.7,
        clearcoatRoughness: 0.15,
        envMapIntensity: 1.3
      }),
      darkMetal: new THREE.MeshStandardMaterial({
        color: t.secondary,
        metalness: 0.85,
        roughness: 0.32,
        envMapIntensity: 1.0
      }),
      chromePiston: new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.98,
        roughness: 0.04
      }),
      castIronBase: new THREE.MeshStandardMaterial({
        color: 0x222733,
        metalness: 0.65,
        roughness: 0.55
      }),
      jointBezel: new THREE.MeshStandardMaterial({
        color: 0x0f131a,
        metalness: 0.9,
        roughness: 0.25
      }),
      brassGold: new THREE.MeshStandardMaterial({
        color: 0xd4af37,
        metalness: 0.92,
        roughness: 0.18
      }),
      rubberPads: new THREE.MeshStandardMaterial({
        color: 0x151820,
        roughness: 0.92,
        metalness: 0.05
      }),
      cableLoom: new THREE.MeshStandardMaterial({
        color: 0x111318,
        roughness: 0.85,
        metalness: 0.2
      }),
      statusRing: new THREE.MeshStandardMaterial({
        color: 0x00ff9d,
        emissive: 0x00ff9d,
        emissiveIntensity: 1.8,
        roughness: 0.1
      }),
      laserLens: new THREE.MeshStandardMaterial({
        color: 0x00f0ff,
        emissive: 0x00f0ff,
        emissiveIntensity: 3.5
      })
    };
  }

  setTheme(themeKey) {
    if (!this.themes[themeKey]) return;
    this.currentTheme = themeKey;
    const t = this.themes[themeKey];
    this.materials.primaryPaint.color.setHex(t.primary);
    this.materials.darkMetal.color.setHex(t.secondary);
  }

  setStatus(state = 'ready') {
    if (state === 'ready') {
      this.materials.statusRing.color.setHex(0x00ff9d);
      this.materials.statusRing.emissive.setHex(0x00ff9d);
      this.materials.statusRing.emissiveIntensity = 1.8;
    } else if (state === 'running') {
      this.materials.statusRing.color.setHex(0x00f0ff);
      this.materials.statusRing.emissive.setHex(0x00f0ff);
      this.materials.statusRing.emissiveIntensity = 2.4;
    } else if (state === 'estop' || state === 'alarm') {
      this.materials.statusRing.color.setHex(0xff3366);
      this.materials.statusRing.emissive.setHex(0xff3366);
      this.materials.statusRing.emissiveIntensity = 3.5;
    }
  }

  buildRobot() {
    // =========================================================================
    // 1. BASE ASSEMBLY (Heavy Sculpted Foundation)
    // =========================================================================
    this.baseGroup = new THREE.Group();
    this.baseGroup.name = 'BaseAssembly';

    // Tier 1: Beveled Heavy Mounting Flange
    const basePlateGeo = new THREE.CylinderGeometry(0.33, 0.38, 0.05, 48);
    const basePlate = new THREE.Mesh(basePlateGeo, this.materials.castIronBase);
    basePlate.position.y = 0.025;
    basePlate.castShadow = true;
    basePlate.receiveShadow = true;
    this.baseGroup.add(basePlate);

    // Radiused step rim
    const rimTorus = new THREE.Mesh(
      new THREE.TorusGeometry(0.33, 0.02, 16, 48),
      this.materials.castIronBase
    );
    rimTorus.rotateX(Math.PI / 2);
    rimTorus.position.y = 0.05;
    this.baseGroup.add(rimTorus);

    // Cast anchor bolts
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const boltGroup = new THREE.Group();
      boltGroup.position.set(Math.cos(angle) * 0.31, 0.05, Math.sin(angle) * 0.31);

      const boltWasher = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.015, 16), this.materials.jointBezel);
      const boltNut = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.013, 0.03, 6), this.materials.chromePiston);
      boltNut.position.y = 0.018;

      boltGroup.add(boltWasher);
      boltGroup.add(boltNut);
      boltGroup.castShadow = true;
      this.baseGroup.add(boltGroup);
    }

    // Tier 2: Sculpted Cast Pedestal Column
    const pedestalGeo = new THREE.CylinderGeometry(0.24, 0.29, 0.15, 48);
    const pedestal = new THREE.Mesh(pedestalGeo, this.materials.darkMetal);
    pedestal.position.y = 0.125;
    pedestal.castShadow = true;
    pedestal.receiveShadow = true;
    this.baseGroup.add(pedestal);

    // Status LED Halo Ring with protective chamfer bezel
    const bezelRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.252, 0.018, 16, 48),
      this.materials.jointBezel
    );
    bezelRing.rotateX(Math.PI / 2);
    bezelRing.position.y = 0.185;
    this.baseGroup.add(bezelRing);

    const statusRingGeo = new THREE.TorusGeometry(0.252, 0.009, 16, 48);
    statusRingGeo.rotateX(Math.PI / 2);
    this.statusRingMesh = new THREE.Mesh(statusRingGeo, this.materials.statusRing);
    this.statusRingMesh.position.y = 0.185;
    this.baseGroup.add(this.statusRingMesh);

    this.group.add(this.baseGroup);

    // =========================================================================
    // 2. JOINT 1 (J1: Base Turntable - Yaw Rotation)
    // =========================================================================
    this.j1 = new THREE.Group();
    this.j1.name = 'Joint1_Turntable';
    this.j1.position.y = this.dimensions.baseHeight;
    this.group.add(this.j1);

    // Turntable Main Cast Ring (Flared profile)
    const turntableHousingGeo = new THREE.CylinderGeometry(0.23, 0.248, 0.12, 48);
    const turntableHousing = new THREE.Mesh(turntableHousingGeo, this.materials.primaryPaint);
    turntableHousing.position.y = 0.06;
    turntableHousing.castShadow = true;
    this.j1.add(turntableHousing);

    // Machined center bearing race
    const raceGeo = new THREE.CylinderGeometry(0.21, 0.21, 0.03, 48);
    const raceMesh = new THREE.Mesh(raceGeo, this.materials.darkMetal);
    raceMesh.position.y = 0.125;
    this.j1.add(raceMesh);

    // Shoulder Pivot Yoke (Sculpted organic arch with rounded chamfers)
    const yokeWidth = 0.08;
    const yokeHeight = 0.24;
    const yokeDepth = 0.22;
    const yokeRadius = 0.035;

    // Left Cast Wing
    const yokeLeftGeo = createRoundedBoxGeometry(yokeWidth, yokeHeight, yokeDepth, yokeRadius, 4);
    const yokeLeft = new THREE.Mesh(yokeLeftGeo, this.materials.primaryPaint);
    yokeLeft.position.set(-0.115, 0.21, 0.0);
    yokeLeft.castShadow = true;
    this.j1.add(yokeLeft);

    // Right Cast Wing
    const yokeRightGeo = createRoundedBoxGeometry(yokeWidth, yokeHeight, yokeDepth, yokeRadius, 4);
    const yokeRight = new THREE.Mesh(yokeRightGeo, this.materials.primaryPaint);
    yokeRight.position.set(0.115, 0.21, 0.0);
    yokeRight.castShadow = true;
    this.j1.add(yokeRight);

    // Harmonic Drive Rotary Bearing Hubs (Large diameter precision discs)
    [-0.16, 0.16].forEach(x => {
      const hubGeo = new THREE.CylinderGeometry(0.105, 0.105, 0.025, 32);
      hubGeo.rotateZ(Math.PI / 2);
      const hub = new THREE.Mesh(hubGeo, this.materials.jointBezel);
      hub.position.set(x, 0.26, 0);
      this.j1.add(hub);

      const hubCap = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.032, 24), this.materials.darkMetal);
      hubCap.rotateZ(Math.PI / 2);
      hubCap.position.set(x * 1.05, 0.26, 0);
      this.j1.add(hubCap);
    });

    // =========================================================================
    // 3. JOINT 2 (J2: Shoulder Pitch & Upper Arm Assembly)
    // =========================================================================
    this.j2 = new THREE.Group();
    this.j2.name = 'Joint2_Shoulder';
    this.j2.position.set(0, 0.26, 0);
    this.j1.add(this.j2);

    // Shoulder Pivot Core Cylinder
    const shoulderPivotGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.19, 32);
    shoulderPivotGeo.rotateZ(Math.PI / 2);
    const shoulderPivot = new THREE.Mesh(shoulderPivotGeo, this.materials.darkMetal);
    shoulderPivot.castShadow = true;
    this.j2.add(shoulderPivot);

    // Sculpted Upper Arm Boom (Organic aerodynamic taper with generous edge radius)
    const boomGeo = createRoundedBoxGeometry(0.15, this.dimensions.upperArmLength, 0.16, 0.045, 5);
    const boom = new THREE.Mesh(boomGeo, this.materials.primaryPaint);
    boom.position.y = this.dimensions.upperArmLength / 2;
    boom.castShadow = true;
    this.j2.add(boom);

    // Recessed Ergonomic Cast Pockets (Left & Right Ribbed Weight-Saving Cavities)
    [-0.078, 0.078].forEach(x => {
      const pocketGeo = createRoundedBoxGeometry(0.015, this.dimensions.upperArmLength * 0.72, 0.10, 0.02, 3);
      const pocket = new THREE.Mesh(pocketGeo, this.materials.darkMetal);
      pocket.position.set(x, this.dimensions.upperArmLength / 2, 0);
      this.j2.add(pocket);

      // Embedded branding badge on side pocket
      const badgeGeo = new THREE.PlaneGeometry(0.08, 0.03);
      const badge = new THREE.Mesh(badgeGeo, this.materials.brassGold);
      badge.rotateY(x > 0 ? Math.PI / 2 : -Math.PI / 2);
      badge.position.set(x * 1.02, this.dimensions.upperArmLength / 2 + 0.06, 0);
      this.j2.add(badge);
    });

    // Counterweight Housing (Sculpted cast box behind shoulder with radiused corners)
    const counterweightGeo = createRoundedBoxGeometry(0.17, 0.14, 0.15, 0.035, 4);
    const counterweight = new THREE.Mesh(counterweightGeo, this.materials.darkMetal);
    counterweight.position.set(0, 0.01, -0.135);
    counterweight.castShadow = true;
    this.j2.add(counterweight);

    // =========================================================================
    // 4. JOINT 3 (J3: Authentic Industrial Elbow Knuckle & Drive Housing)
    // =========================================================================
    this.j3 = new THREE.Group();
    this.j3.name = 'Joint3_Elbow';
    this.j3.position.y = this.dimensions.upperArmLength;
    this.j2.add(this.j3);

    // Upper Arm Top Fork / Pivot Support Boss (Stays on Upper Arm side of J3)
    const elbowPivotBossGeo = new THREE.CylinderGeometry(0.085, 0.085, 0.16, 32);
    elbowPivotBossGeo.rotateZ(Math.PI / 2);
    const elbowPivotBoss = new THREE.Mesh(elbowPivotBossGeo, this.materials.darkMetal);
    elbowPivotBoss.castShadow = true;
    this.j3.add(elbowPivotBoss);

    // Heavy Servo Motor Housing on the Elbow Axis (Offset to one side like Fanuc/KUKA)
    const elbowMotorGeo = new THREE.CylinderGeometry(0.075, 0.075, 0.10, 32);
    elbowMotorGeo.rotateZ(Math.PI / 2);
    const elbowMotor = new THREE.Mesh(elbowMotorGeo, this.materials.primaryPaint);
    elbowMotor.position.x = -0.11;
    elbowMotor.castShadow = true;
    this.j3.add(elbowMotor);

    // Motor End Cap & Cooling Ribs
    const motorCap = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.02, 24), this.materials.jointBezel);
    motorCap.rotateZ(Math.PI / 2);
    motorCap.position.x = -0.165;
    this.j3.add(motorCap);

    // Harmonic Drive Precision Gear Ring on the opposite side
    const harmonicRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.088, 0.012, 16, 36),
      this.materials.jointBezel
    );
    harmonicRing.rotateY(Math.PI / 2);
    harmonicRing.position.x = 0.09;
    this.j3.add(harmonicRing);

    const encoderCover = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.06, 0.035, 24), this.materials.darkMetal);
    encoderCover.rotateZ(Math.PI / 2);
    encoderCover.position.x = 0.11;
    this.j3.add(encoderCover);

    // Sculpted Forearm Root Bracket (Connects J3 pivot to the J4 Forearm Roll Axis)
    const elbowRootGeo = createRoundedBoxGeometry(0.12, 0.10, 0.13, 0.028, 4);
    const elbowRoot = new THREE.Mesh(elbowRootGeo, this.materials.primaryPaint);
    elbowRoot.position.set(0, 0.045, 0);
    elbowRoot.castShadow = true;
    this.j3.add(elbowRoot);

    // =========================================================================
    // 5. JOINT 4 (J4: Telescoping Forearm Roll & Multi-Stage Extension Assembly)
    // =========================================================================
    this.j4 = new THREE.Group();
    this.j4.name = 'Joint4_ForearmRoll';
    this.j4.position.set(0, 0.08, 0); // Offset along the forearm root
    this.j3.add(this.j4);

    // Forearm Roll Base Flange / Turntable Ring
    const forearmFlange = new THREE.Mesh(
      new THREE.CylinderGeometry(0.076, 0.084, 0.03, 32),
      this.materials.jointBezel
    );
    forearmFlange.position.y = 0.015;
    this.j4.add(forearmFlange);

    // --- STAGE 1: Outer Base Sleeve (Fixed to J4) ---
    this.telescopeStage1 = new THREE.Group();
    this.telescopeStage1.name = 'Telescope_Stage1_Outer';

    const stage1BarrelGeo = new THREE.CylinderGeometry(0.073, 0.080, 0.18, 32);
    const stage1Barrel = new THREE.Mesh(stage1BarrelGeo, this.materials.primaryPaint);
    stage1Barrel.position.y = 0.10;
    stage1Barrel.castShadow = true;
    this.telescopeStage1.add(stage1Barrel);

    // Stage 1 Top Machined Sealing Collar
    const stage1Collar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.082, 0.078, 0.025, 32),
      this.materials.jointBezel
    );
    stage1Collar.position.y = 0.19;
    this.telescopeStage1.add(stage1Collar);

    const stage1BezelTorus = new THREE.Mesh(
      new THREE.TorusGeometry(0.080, 0.006, 12, 32),
      this.materials.primaryPaint
    );
    stage1BezelTorus.rotateX(Math.PI / 2);
    stage1BezelTorus.position.y = 0.19;
    this.telescopeStage1.add(stage1BezelTorus);

    // External Linear Guide Rails & Hydraulic Booster Housings
    this.sidePistonRods = [];
    [-0.086, 0.086].forEach(x => {
      // Guide rail spine on side of Stage 1
      const railMesh = new THREE.Mesh(
        createRoundedBoxGeometry(0.018, 0.17, 0.02, 0.004, 2),
        this.materials.darkMetal
      );
      railMesh.position.set(x, 0.10, 0);
      railMesh.castShadow = true;
      this.telescopeStage1.add(railMesh);

      // Hydraulic Actuator Cylinder Housing
      const cylMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.013, 0.013, 0.15, 16),
        this.materials.darkMetal
      );
      cylMesh.position.set(x * 1.05, 0.09, 0);
      cylMesh.castShadow = true;
      this.telescopeStage1.add(cylMesh);

      // Dynamic Extension Piston Rod inside side actuator
      const rodMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.007, 0.007, 0.14, 16),
        this.materials.chromePiston
      );
      rodMesh.position.set(x * 1.05, 0.10, 0);
      rodMesh.castShadow = true;
      this.telescopeStage1.add(rodMesh);
      this.sidePistonRods.push(rodMesh);
    });

    this.j4.add(this.telescopeStage1);

    // --- STAGE 2: Intermediate Telescopic Extension Sleeve ---
    this.telescopeStage2 = new THREE.Group();
    this.telescopeStage2.name = 'Telescope_Stage2_Mid';
    this.telescopeStage2.position.y = 0.0;

    const stage2BarrelGeo = new THREE.CylinderGeometry(0.063, 0.066, 0.18, 32);
    const stage2Barrel = new THREE.Mesh(stage2BarrelGeo, this.materials.primaryPaint);
    stage2Barrel.position.y = 0.15;
    stage2Barrel.castShadow = true;
    this.telescopeStage2.add(stage2Barrel);

    // Stage 2 Top Wiper Collar
    const stage2Collar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.069, 0.066, 0.02, 32),
      this.materials.jointBezel
    );
    stage2Collar.position.y = 0.24;
    this.telescopeStage2.add(stage2Collar);

    // Metric laser etched stroke ring markers
    for (let m = 0; m < 3; m++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.0645, 0.002, 8, 32),
        this.materials.jointBezel
      );
      ring.rotateX(Math.PI / 2);
      ring.position.y = 0.10 + m * 0.045;
      this.telescopeStage2.add(ring);
    }

    this.j4.add(this.telescopeStage2);

    // --- STAGE 3: Inner Telescoping Piston Rod (Carries Wrist J5) ---
    this.telescopeStage3 = new THREE.Group();
    this.telescopeStage3.name = 'Telescope_Stage3_Inner';
    this.telescopeStage3.position.y = 0.0;

    // Mirror polished chrome / titanium telescoping inner shaft
    const stage3RodGeo = new THREE.CylinderGeometry(0.052, 0.054, 0.19, 32);
    const stage3Rod = new THREE.Mesh(stage3RodGeo, this.materials.chromePiston);
    stage3Rod.position.y = 0.20;
    stage3Rod.castShadow = true;
    this.telescopeStage3.add(stage3Rod);

    // Telescopic wrist adaptor neck ring
    const stage3Neck = new THREE.Mesh(
      new THREE.CylinderGeometry(0.058, 0.054, 0.025, 32),
      this.materials.jointBezel
    );
    stage3Neck.position.y = 0.29;
    this.telescopeStage3.add(stage3Neck);

    this.j4.add(this.telescopeStage3);

    // =========================================================================
    // 6. JOINT 5 (J5: Wrist Knuckle & Spherical Harmonic Drive)
    // =========================================================================
    this.j5 = new THREE.Group();
    this.j5.name = 'Joint5_WristPitch';
    this.j5.position.y = this.dimensions.forearmLength;
    this.j4.add(this.j5);

    // Spherical Central Knuckle with high segment smoothness
    const wristKnuckleGeo = new THREE.SphereGeometry(0.078, 32, 32);
    const wristKnuckle = new THREE.Mesh(wristKnuckleGeo, this.materials.darkMetal);
    wristKnuckle.castShadow = true;
    this.j5.add(wristKnuckle);

    // Sculpted Wrist Fork (Radiused U-bracket)
    const forkGeo = createRoundedBoxGeometry(0.11, 0.11, 0.09, 0.025, 3);
    const wristFork = new THREE.Mesh(forkGeo, this.materials.primaryPaint);
    wristFork.position.y = 0.055;
    wristFork.castShadow = true;
    this.j5.add(wristFork);

    // =========================================================================
    // 7. JOINT 6 (J6: Precision Tool Mounting Flange)
    // =========================================================================
    this.j6 = new THREE.Group();
    this.j6.name = 'Joint6_ToolFlange';
    this.j6.position.y = this.dimensions.wristLength;
    this.j5.add(this.j6);

    // ISO 9409-1 Tool Mounting Flange (Beveled chamfer ring)
    const flangePlate = new THREE.Mesh(
      new THREE.CylinderGeometry(0.062, 0.068, 0.025, 32),
      this.materials.darkMetal
    );
    flangePlate.position.y = 0.0125;
    flangePlate.castShadow = true;
    this.j6.add(flangePlate);

    const flangeChamfer = new THREE.Mesh(
      new THREE.TorusGeometry(0.062, 0.005, 12, 32),
      this.materials.jointBezel
    );
    flangeChamfer.rotateX(Math.PI / 2);
    flangeChamfer.position.y = 0.025;
    this.j6.add(flangeChamfer);

    // =========================================================================
    // 8. END EFFECTORS (High-Fidelity Gripper & Laser Welder)
    // =========================================================================
    this.buildEndEffectors();

    // =========================================================================
    // 9. DYNAMIC HYDRAULIC DAMPER LINKAGES
    // =========================================================================
    this.buildHydraulicPiston();

    // =========================================================================
    // 10. FLEXIBLE CORRUGATED ROBOTIC CABLE LOOM
    // =========================================================================
    this.buildCableHarness();
  }

  buildEndEffectors() {
    this.toolsGroup = new THREE.Group();
    this.toolsGroup.name = 'EndEffectorGroup';
    this.toolsGroup.position.y = 0.025;
    this.j6.add(this.toolsGroup);

    // --- A. TWO-FINGER PARALLEL SERVO GRIPPER ---
    this.gripperGroup = new THREE.Group();
    this.gripperGroup.name = 'ServoGripper';

    // Sculpted Pneumatic Actuator Body with rounded corners
    const gBaseGeo = createRoundedBoxGeometry(0.13, 0.055, 0.075, 0.018, 3);
    const gBase = new THREE.Mesh(gBaseGeo, this.materials.darkMetal);
    gBase.position.y = 0.028;
    gBase.castShadow = true;
    this.gripperGroup.add(gBase);

    // Dual Hardened Chrome Linear Guide Rails
    [-0.018, 0.018].forEach(z => {
      const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.12, 16), this.materials.chromePiston);
      rail.rotateZ(Math.PI / 2);
      rail.position.set(0, 0.03, z);
      this.gripperGroup.add(rail);
    });

    // Finger Left with Radiused Edges & Grooved Friction Pads
    this.fingerLeft = new THREE.Group();
    this.fingerLeft.position.set(-0.045, 0.055, 0);

    const fingerLGeo = createRoundedBoxGeometry(0.015, 0.085, 0.038, 0.004, 2);
    const fingerLMesh = new THREE.Mesh(fingerLGeo, this.materials.primaryPaint);
    fingerLMesh.position.y = 0.0425;
    fingerLMesh.castShadow = true;
    this.fingerLeft.add(fingerLMesh);

    const padL = new THREE.Mesh(
      new THREE.BoxGeometry(0.005, 0.065, 0.034),
      this.materials.rubberPads
    );
    padL.position.set(0.01, 0.045, 0);
    this.fingerLeft.add(padL);
    this.gripperGroup.add(this.fingerLeft);

    // Finger Right with Radiused Edges & Grooved Friction Pads
    this.fingerRight = new THREE.Group();
    this.fingerRight.position.set(0.045, 0.055, 0);

    const fingerRGeo = createRoundedBoxGeometry(0.015, 0.085, 0.038, 0.004, 2);
    const fingerRMesh = new THREE.Mesh(fingerRGeo, this.materials.primaryPaint);
    fingerRMesh.position.y = 0.0425;
    fingerRMesh.castShadow = true;
    this.fingerRight.add(fingerRMesh);

    const padR = new THREE.Mesh(
      new THREE.BoxGeometry(0.005, 0.065, 0.034),
      this.materials.rubberPads
    );
    padR.position.set(-0.01, 0.045, 0);
    this.fingerRight.add(padR);
    this.gripperGroup.add(this.fingerRight);

    // Gripper TCP Center Point Marker
    this.tcpMarker = new THREE.Object3D();
    this.tcpMarker.name = 'TCP_Marker';
    this.tcpMarker.position.y = 0.15;
    this.gripperGroup.add(this.tcpMarker);

    this.toolsGroup.add(this.gripperGroup);

    // --- B. LASER WELDING TORCH TOOL ---
    this.welderGroup = new THREE.Group();
    this.welderGroup.name = 'LaserWelder';
    this.welderGroup.visible = false;

    const torchBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.032, 0.042, 0.09, 24),
      this.materials.darkMetal
    );
    torchBody.position.y = 0.045;
    this.welderGroup.add(torchBody);

    const nozzle = new THREE.Mesh(
      new THREE.ConeGeometry(0.028, 0.075, 24),
      this.materials.brassGold
    );
    nozzle.position.y = 0.135;
    nozzle.rotateX(Math.PI);
    this.welderGroup.add(nozzle);

    const lens = new THREE.Mesh(new THREE.SphereGeometry(0.011, 16, 16), this.materials.laserLens);
    lens.position.y = 0.175;
    this.welderGroup.add(lens);

    this.toolsGroup.add(this.welderGroup);
  }

  buildHydraulicPiston() {
    // Dynamic Hydraulic Counterweight Damper with Spherical Rod Ends
    this.pistonBase = new THREE.Group();
    this.pistonBase.position.set(0, 0.08, -0.14);
    this.j1.add(this.pistonBase);

    // Swivel Rod End Ball Joint
    const ballJoint = new THREE.Mesh(new THREE.SphereGeometry(0.024, 16, 16), this.materials.darkMetal);
    this.pistonBase.add(ballJoint);

    // Outer Heavy Cylinder Barrel
    this.cylinderMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.022, 0.025, 0.22, 24),
      this.materials.darkMetal
    );
    this.cylinderMesh.position.y = 0.11;
    this.pistonBase.add(this.cylinderMesh);

    // Cylinder Gland Seal Cap
    const glandCap = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.02, 24), this.materials.brassGold);
    glandCap.position.y = 0.21;
    this.pistonBase.add(glandCap);

    // Inner Mirror-Polished Chrome Rod
    this.rodMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.013, 0.013, 0.22, 24),
      this.materials.chromePiston
    );
    this.rodMesh.position.y = 0.22;
    this.pistonBase.add(this.rodMesh);
  }

  buildCableHarness() {
    // Corrugated Cable Conduit routed along J2 to J3
    const curvePoints = [
      new THREE.Vector3(0.09, 0.04, -0.06),
      new THREE.Vector3(0.11, 0.22, -0.08),
      new THREE.Vector3(0.09, 0.42, -0.05)
    ];
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(curve, 20, 0.016, 12, false);
    const cableMesh = new THREE.Mesh(tubeGeo, this.materials.cableLoom);
    cableMesh.castShadow = true;
    this.j2.add(cableMesh);
  }

  setTool(toolName) {
    this.activeTool = toolName;
    if (toolName === 'gripper') {
      this.gripperGroup.visible = true;
      this.welderGroup.visible = false;
    } else {
      this.gripperGroup.visible = false;
      this.welderGroup.visible = true;
    }
  }

  setGripper(val) {
    this.gripperPosition = Math.max(0, Math.min(1, val));
    const stroke = 0.045 - this.gripperPosition * 0.032;
    this.fingerLeft.position.x = -stroke;
    this.fingerRight.position.x = stroke;
  }

  setTelescope(val) {
    this.telescopeExtension = Math.max(0, Math.min(1.0, val));
    const ext = this.telescopeExtension;
    const maxExt = this.dimensions.maxTelescopeExtension;

    // Dynamically update total forearm length
    this.dimensions.forearmLength = this.dimensions.baseForearmLength + ext * maxExt;

    // Stage 2 (Mid Sleeve) extends outward
    if (this.telescopeStage2) {
      this.telescopeStage2.position.y = ext * (maxExt * 0.48);
    }

    // Stage 3 (Inner Piston) extends full stroke
    if (this.telescopeStage3) {
      this.telescopeStage3.position.y = ext * maxExt;
    }

    // Dynamic side booster actuator rods
    if (this.sidePistonRods) {
      this.sidePistonRods.forEach(rod => {
        rod.scale.y = 1.0 + ext * 1.5;
        rod.position.y = 0.10 + ext * (maxExt * 0.45);
      });
    }

    // Shift Joint 5 (Wrist Assembly & Gripper) with the inner piston
    if (this.j5) {
      this.j5.position.y = this.dimensions.forearmLength;
    }
  }

  getTelescope() {
    return this.telescopeExtension;
  }

  /**
   * Enforces physical solid body non-penetration constraints:
   * Prevents upper arm, elbow, forearm, or wrist from passing through the solid base pedestal cylinder or floor.
   */
  enforceSolidArmPhysics(angles) {
    // 1. Clamp to mechanical hard-stop limits
    for (let i = 0; i < 6; i++) {
      const limit = this.limits[i];
      const minRad = THREE.MathUtils.degToRad(limit.min);
      const maxRad = THREE.MathUtils.degToRad(limit.max);
      angles[i] = Math.max(minRad, Math.min(maxRad, angles[i]));
    }

    // 2. Solid Base Turntable & Ground Clearance Enforcement
    const shoulderY = 0.48; // Base height + shoulder yoke height
    const j2 = angles[1];
    const j3 = angles[2];

    const upperLen = this.dimensions.upperArmLength;
    const rElbow = -Math.sin(j2) * upperLen;
    const yElbow = shoulderY + Math.cos(j2) * upperLen;

    const foreLen = this.dimensions.forearmLength;
    const armAngle2 = j2 + j3;
    const rWrist = rElbow - Math.sin(armAngle2) * foreLen;
    const yWrist = yElbow + Math.cos(armAngle2) * foreLen;

    // Solid Floor Clearance (Y >= 0.05m)
    if (yWrist < 0.05) {
      const deficit = 0.05 - yWrist;
      angles[1] -= deficit * 0.75;
      angles[2] += deficit * 0.45;
    }

    // Solid Base Turntable Cylinder (Radius <= 0.27m, Height <= 0.46m)
    const baseRadius = 0.27;
    const baseHeight = 0.46;
    if (Math.abs(rWrist) < baseRadius && yWrist < baseHeight) {
      // Forearm is attempting to penetrate the solid turntable! Push arm forward
      if (angles[1] > -0.22) {
        angles[1] = -0.22;
      }
      if (angles[2] > -0.15) {
        angles[2] = -0.15;
      }
    }

    if (Math.abs(rElbow) < baseRadius && yElbow < baseHeight) {
      if (angles[1] > -0.18) {
        angles[1] = -0.18;
      }
    }

    // Re-clamp to limits
    for (let i = 0; i < 6; i++) {
      const limit = this.limits[i];
      const minRad = THREE.MathUtils.degToRad(limit.min);
      const maxRad = THREE.MathUtils.degToRad(limit.max);
      angles[i] = Math.max(minRad, Math.min(maxRad, angles[i]));
    }
    return angles;
  }

  setTargetJointAngles(anglesRad) {
    const valid = [...anglesRad];
    this.enforceSolidArmPhysics(valid);
    for (let i = 0; i < 6; i++) {
      if (valid[i] !== undefined) {
        this.targetAngles[i] = valid[i];
      }
    }
  }

  setTargetTelescope(val) {
    this.targetTelescopeExtension = Math.max(0, Math.min(1.0, val));
  }

  setJointAngles(anglesRad) {
    const valid = [...anglesRad];
    this.enforceSolidArmPhysics(valid);
    for (let i = 0; i < 6; i++) {
      if (valid[i] !== undefined) {
        this.angles[i] = valid[i];
        this.targetAngles[i] = valid[i];
      }
    }
    this.applyJointAngles();
  }

  setJointAngleDeg(index, deg) {
    const rad = THREE.MathUtils.degToRad(deg);
    const candidate = [...this.angles];
    candidate[index] = rad;
    this.enforceSolidArmPhysics(candidate);
    this.angles = candidate;
    this.targetAngles = [...candidate];
    this.applyJointAngles();
  }

  /**
   * Smoothly drives all robot joints and telescoping stroke towards target positions
   * using critically damped robotic servo motor dynamics (no teleportation/snapping).
   */
  updateServoMotors(deltaTime) {
    const smoothTime = 0.08; // Crisp, agile servo response time in seconds
    const omega = 2.0 / Math.max(0.01, smoothTime);
    const x = omega * deltaTime;
    const exp = 1.0 / (1.0 + x + 0.48 * x * x + 0.235 * x * x * x);

    let hasMoved = false;

    // 1. Smooth 6-Axis Joint Servo Motors
    const nextAngles = [...this.angles];
    for (let i = 0; i < 6; i++) {
      const current = this.angles[i];
      const target = this.targetAngles[i];
      const maxSpeed = this.jointSpeeds[i];

      let change = current - target;
      const originalTo = target;

      const maxChange = maxSpeed * smoothTime;
      change = Math.max(-maxChange, Math.min(maxChange, change));
      const clampedTarget = current - change;

      const temp = (this.jointVelocities[i] + omega * change) * deltaTime;
      this.jointVelocities[i] = (this.jointVelocities[i] - omega * temp) * exp;
      let newAngle = clampedTarget + (change + temp) * exp;

      if ((originalTo - current > 0) === (newAngle > originalTo)) {
        newAngle = originalTo;
        this.jointVelocities[i] = 0;
      }

      nextAngles[i] = newAngle;
    }

    this.enforceSolidArmPhysics(nextAngles);

    for (let i = 0; i < 6; i++) {
      if (Math.abs(nextAngles[i] - this.angles[i]) > 0.0001) {
        hasMoved = true;
      }
      this.angles[i] = nextAngles[i];
    }

    // 2. Smooth Telescopic Forearm Piston Motor
    const currentTele = this.telescopeExtension;
    const targetTele = this.targetTelescopeExtension;
    const maxTeleSpeed = 3.2; // Fast telescopic stroke rate

    let teleChange = currentTele - targetTele;
    const teleMaxChange = maxTeleSpeed * smoothTime;
    teleChange = Math.max(-teleMaxChange, Math.min(teleMaxChange, teleChange));
    const clampedTeleTarget = currentTele - teleChange;

    const teleTemp = (this.telescopeVelocity + omega * teleChange) * deltaTime;
    this.telescopeVelocity = (this.telescopeVelocity - omega * teleTemp) * exp;
    let newTele = clampedTeleTarget + (teleChange + teleTemp) * exp;

    if ((targetTele - currentTele > 0) === (newTele > targetTele)) {
      newTele = targetTele;
      this.telescopeVelocity = 0;
    }
    newTele = Math.max(0, Math.min(1.0, newTele));

    if (Math.abs(newTele - this.telescopeExtension) > 0.0005) {
      hasMoved = true;
      this.setTelescope(newTele);
    }

    this.applyJointAngles();
    return hasMoved;
  }

  applyJointAngles() {
    // J1: Base Yaw around Y
    this.j1.rotation.y = this.angles[0];

    // J2: Shoulder Pitch around X (coaxial with shoulder axle)
    this.j2.rotation.x = this.angles[1];

    // J3: Elbow Pitch around X (coaxial with elbow motor/drive axle)
    this.j3.rotation.x = this.angles[2];

    // J4: Forearm Roll around Y (axial along forearm)
    this.j4.rotation.y = this.angles[3];

    // J5: Wrist Pitch around X (coaxial with wrist knuckle pivot)
    this.j5.rotation.x = this.angles[4];

    // J6: Tool Roll around Y (axial along tool flange)
    this.j6.rotation.y = this.angles[5];

    // Dynamic Hydraulic Damper Angle Tracking (Pitches with J2 around X)
    const shoulderAngle = this.angles[1];
    this.pistonBase.rotation.x = -shoulderAngle * 0.45;
    this.rodMesh.position.y = 0.22 - Math.sin(shoulderAngle) * 0.04;
  }

  getTCPWorldPosition(targetVec = new THREE.Vector3()) {
    this.tcpMarker.getWorldPosition(targetVec);
    return targetVec;
  }

  getTCPWorldQuaternion(targetQuat = new THREE.Quaternion()) {
    this.tcpMarker.getWorldQuaternion(targetQuat);
    return targetQuat;
  }

  /**
   * Returns world-space geometric colliders for all physical links of the robot arm
   * (Base, Shoulder, Upper Arm, Elbow, Forearm, Wrist).
   */
  getArmColliders() {
    const colliders = [];

    // 1. Base Pedestal (Ground to turntable)
    colliders.push({
      type: 'capsule',
      p1: new THREE.Vector3(0, 0.02, 0),
      p2: new THREE.Vector3(0, 0.22, 0),
      radius: 0.32
    });

    // 2. Shoulder J2 Assembly
    const j2Pos = new THREE.Vector3();
    this.j2.getWorldPosition(j2Pos);
    colliders.push({
      type: 'sphere',
      center: j2Pos,
      radius: 0.16
    });

    // 3. Upper Arm Link (J2 to J3)
    const j3Pos = new THREE.Vector3();
    this.j3.getWorldPosition(j3Pos);
    colliders.push({
      type: 'capsule',
      p1: j2Pos,
      p2: j3Pos,
      radius: 0.115
    });

    // 4. Elbow J3 Assembly
    colliders.push({
      type: 'sphere',
      center: j3Pos,
      radius: 0.13
    });

    // 5. Forearm Link (J3 to J5)
    const j5Pos = new THREE.Vector3();
    this.j5.getWorldPosition(j5Pos);
    colliders.push({
      type: 'capsule',
      p1: j3Pos,
      p2: j5Pos,
      radius: 0.095
    });

    // 6. Wrist Knuckle J5 to Tool Flange J6
    const j6Pos = new THREE.Vector3();
    this.j6.getWorldPosition(j6Pos);
    colliders.push({
      type: 'capsule',
      p1: j5Pos,
      p2: j6Pos,
      radius: 0.08
    });

    return colliders;
  }

  getJointAnglesDeg() {
    return this.angles.map(rad => Math.round(THREE.MathUtils.radToDeg(rad) * 10) / 10);
  }

  setWireframe(enabled) {
    Object.values(this.materials).forEach(mat => {
      if (mat.wireframe !== undefined) {
        mat.wireframe = enabled;
      }
    });
  }

  setShadows(enabled) {
    this.group.traverse(child => {
      if (child.isMesh) {
        child.castShadow = enabled;
        child.receiveShadow = enabled;
      }
    });
  }
}
