import * as THREE from 'three';

const DOT_FONT_5x7 = {
  '0': [0b01110, 0b10001, 0b10011, 0b10101, 0b11001, 0b10001, 0b01110],
  '1': [0b00100, 0b01100, 0b00100, 0b00100, 0b00100, 0b00100, 0b01110],
  '2': [0b01110, 0b10001, 0b00001, 0b00010, 0b00100, 0b01000, 0b11111],
  '3': [0b11110, 0b00001, 0b00001, 0b01110, 0b00001, 0b00001, 0b11110],
  '4': [0b00010, 0b00110, 0b01010, 0b10010, 0b11111, 0b00010, 0b00010],
  '5': [0b11111, 0b10000, 0b11110, 0b00001, 0b00001, 0b10001, 0b01110],
  '6': [0b00110, 0b01000, 0b10000, 0b11110, 0b10001, 0b10001, 0b01110],
  '7': [0b11111, 0b00001, 0b00010, 0b00100, 0b01000, 0b01000, 0b01000],
  '8': [0b01110, 0b10001, 0b10001, 0b01110, 0b10001, 0b10001, 0b01110],
  '9': [0b01110, 0b10001, 0b10001, 0b01111, 0b00001, 0b00010, 0b01100],
  ' ': [0, 0, 0, 0, 0, 0, 0],
  '-': [0, 0, 0, 0b11111, 0, 0, 0]
};

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
  constructor(scene, options = {}) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = options.name || 'IndustrialRobotArm';

    if (options.position) {
      if (Array.isArray(options.position)) {
        this.group.position.set(options.position[0], options.position[1], options.position[2]);
      } else if (options.position && typeof options.position.x === 'number') {
        this.group.position.set(options.position.x, options.position.y, options.position.z);
      }
    }
    if (options.rotationY !== undefined) {
      this.group.rotation.y = options.rotationY;
    }

    // Theme color palettes
    this.themes = {
      fanuc: { primary: 0xffcb05, secondary: 0x1c2128, accent: 0xffe047, dark: 0x0f1318 },
      kuka: { primary: 0xe65100, secondary: 0x1e242d, accent: 0xff9800, dark: 0x11141a },
      abb: { primary: 0x10b981, secondary: 0x112920, accent: 0x34d399, dark: 0x061510 },
      cyber: { primary: 0x2563eb, secondary: 0x0f172a, accent: 0x60a5fa, dark: 0x070d1a },
      cleanroom: { primary: 0xffffff, secondary: 0x0284c7, accent: 0x38bdf8, dark: 0x334155 },
      stealth: { primary: 0x374151, secondary: 0x0f172a, accent: 0x9ca3af, dark: 0x070b14 }
    };
    this.currentTheme = options.theme || 'fanuc';

    // Joint Angle State in Radians (Actual current physical angles)
    this.angles = [0, 0, 0, 0, 0, 0]; // J1..J6
    // Target Joint Angles in Radians (Goal commanded angles)
    this.targetAngles = [0, 0, 0, 0, 0, 0];
    // Joint angular velocities for smooth critically damped motion
    this.jointVelocities = [0, 0, 0, 0, 0, 0];
    // Max angular speeds (rad/s) for agile, high-performance robotic tracking [J1..J6]
    this.jointSpeeds = [5.2, 4.6, 5.2, 6.5, 6.5, 8.0]; // Fast, agile industrial servo speed

    // Joint Angle Limits in Degrees (Wide Industrial Range to Reach All Ground Circles)
    this.limits = [
      { min: -180, max: 180 }, // J1: Base Yaw (Full 360° rotation)
      { min: -145, max: 65 },  // J2: Shoulder Pitch (Deep forward & downward reach)
      { min: -165, max: 85 },  // J3: Elbow Pitch (Deep folding for inner circles + extended reaching)
      { min: -180, max: 180 }, // J4: Forearm Roll (Full 360° axial roll)
      { min: -145, max: 145 }, // J5: Wrist Pitch (Perpendicular ground alignment)
      { min: -360, max: 360 }  // J6: Tool Roll (Continuous flange spin)
    ];

    // Link Dimensions
    this.dimensions = {
      baseHeight: 0.22,
      shoulderHeight: 0.18,
      upperArmLength: 0.52,
      elbowOffset: 0.08,
      baseForearmLength: 0.44,
      forearmLength: 0.44,
      maxTelescopeExtension: 0.36,
      wristLength: 0.13,
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
      primaryPaint: new THREE.MeshPhysicalMaterial({
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

    // Rear Dot Matrix Display Housing Frame & OLED/LED Bezel
    const displayBezelGeo = createRoundedBoxGeometry(0.146, 0.116, 0.010, 0.016, 3);
    const displayBezel = new THREE.Mesh(displayBezelGeo, this.materials.jointBezel);
    displayBezel.position.set(0, 0.01, -0.211);
    this.j2.add(displayBezel);

    // Initialize Active Dot Matrix LED Display Screen
    this.initDotMatrixDisplay();

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

    const stage1BarrelGeo = new THREE.CylinderGeometry(0.073, 0.080, 0.22, 32);
    const stage1Barrel = new THREE.Mesh(stage1BarrelGeo, this.materials.primaryPaint);
    stage1Barrel.position.y = 0.12;
    stage1Barrel.castShadow = true;
    this.telescopeStage1.add(stage1Barrel);

    // Stage 1 Top Machined Sealing Collar
    const stage1Collar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.082, 0.078, 0.025, 32),
      this.materials.jointBezel
    );
    stage1Collar.position.y = 0.23;
    this.telescopeStage1.add(stage1Collar);

    const stage1BezelTorus = new THREE.Mesh(
      new THREE.TorusGeometry(0.080, 0.006, 12, 32),
      this.materials.primaryPaint
    );
    stage1BezelTorus.rotateX(Math.PI / 2);
    stage1BezelTorus.position.y = 0.23;
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

    const stage2BarrelGeo = new THREE.CylinderGeometry(0.063, 0.066, 0.22, 32);
    const stage2Barrel = new THREE.Mesh(stage2BarrelGeo, this.materials.primaryPaint);
    stage2Barrel.position.y = 0.18;
    stage2Barrel.castShadow = true;
    this.telescopeStage2.add(stage2Barrel);

    // Stage 2 Top Wiper Collar
    const stage2Collar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.069, 0.066, 0.02, 32),
      this.materials.jointBezel
    );
    stage2Collar.position.y = 0.29;
    this.telescopeStage2.add(stage2Collar);

    // Metric laser etched stroke ring markers
    for (let m = 0; m < 3; m++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.0645, 0.002, 8, 32),
        this.materials.jointBezel
      );
      ring.rotateX(Math.PI / 2);
      ring.position.y = 0.12 + m * 0.055;
      this.telescopeStage2.add(ring);
    }

    this.j4.add(this.telescopeStage2);

    // --- STAGE 3: Inner Telescoping Piston Rod (Carries Wrist J5) ---
    this.telescopeStage3 = new THREE.Group();
    this.telescopeStage3.name = 'Telescope_Stage3_Inner';
    this.telescopeStage3.position.y = 0.0;

    // Mirror polished chrome / titanium telescoping inner shaft
    const stage3RodGeo = new THREE.CylinderGeometry(0.052, 0.054, 0.24, 32);
    const stage3Rod = new THREE.Mesh(stage3RodGeo, this.materials.chromePiston);
    stage3Rod.position.y = 0.24;
    stage3Rod.castShadow = true;
    this.telescopeStage3.add(stage3Rod);

    // Telescopic wrist adaptor neck ring
    const stage3Neck = new THREE.Mesh(
      new THREE.CylinderGeometry(0.058, 0.054, 0.025, 32),
      this.materials.jointBezel
    );
    stage3Neck.position.y = 0.35;
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

    // Sculpted Pneumatic Actuator Body with wider clearance for ball grasping
    const gBaseGeo = createRoundedBoxGeometry(0.19, 0.055, 0.075, 0.018, 3);
    const gBase = new THREE.Mesh(gBaseGeo, this.materials.darkMetal);
    gBase.position.y = 0.028;
    gBase.castShadow = true;
    this.gripperGroup.add(gBase);

    // Dual Hardened Chrome Linear Guide Rails
    [-0.018, 0.018].forEach(z => {
      const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.18, 16), this.materials.chromePiston);
      rail.rotateZ(Math.PI / 2);
      rail.position.set(0, 0.03, z);
      this.gripperGroup.add(rail);
    });

    // Finger Left with Radiused Edges & Grooved Friction Pads
    this.fingerLeft = new THREE.Group();
    this.fingerLeft.position.set(-0.085, 0.055, 0);

    const fingerLGeo = createRoundedBoxGeometry(0.016, 0.095, 0.042, 0.004, 2);
    const fingerLMesh = new THREE.Mesh(fingerLGeo, this.materials.primaryPaint);
    fingerLMesh.position.y = 0.0475;
    fingerLMesh.castShadow = true;
    this.fingerLeft.add(fingerLMesh);

    const padL = new THREE.Mesh(
      new THREE.BoxGeometry(0.006, 0.075, 0.038),
      this.materials.rubberPads
    );
    padL.position.set(0.01, 0.05, 0);
    this.fingerLeft.add(padL);
    this.gripperGroup.add(this.fingerLeft);

    // Finger Right with Radiused Edges & Grooved Friction Pads
    this.fingerRight = new THREE.Group();
    this.fingerRight.position.set(0.085, 0.055, 0);

    const fingerRGeo = createRoundedBoxGeometry(0.016, 0.095, 0.042, 0.004, 2);
    const fingerRMesh = new THREE.Mesh(fingerRGeo, this.materials.primaryPaint);
    fingerRMesh.position.y = 0.0475;
    fingerRMesh.castShadow = true;
    this.fingerRight.add(fingerRMesh);

    const padR = new THREE.Mesh(
      new THREE.BoxGeometry(0.006, 0.075, 0.038),
      this.materials.rubberPads
    );
    padR.position.set(-0.01, 0.05, 0);
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
    // When val = 0 (open): stroke = 0.088m (finger separation = 0.176m, easily holds ball)
    // When val = 1 (clamped): stroke = 0.035m (firm clamp)
    const stroke = 0.088 - this.gripperPosition * 0.053;
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
   * Prevents upper arm, elbow, forearm, or wrist from passing through the solid base pedestal core or floor.
   */
  enforceSolidArmPhysics(angles) {
    // 1. Clamp to mechanical limits
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

    // Solid Floor Clearance (allow reaching directly onto base plate circles at y=0.003)
    if (yWrist < 0.012) {
      const deficit = 0.012 - yWrist;
      angles[1] -= deficit * 0.25;
    }

    // Solid Base Turntable Core (Radius <= 0.23m, Height <= 0.38m)
    const baseCoreRadius = 0.23;
    const baseCoreHeight = 0.38;
    if (Math.abs(rWrist) < baseCoreRadius && yWrist < baseCoreHeight) {
      if (angles[1] > -0.15) {
        angles[1] = -0.15;
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

    // 1. Base Pedestal (Ground to turntable) - World Space
    const baseWorld = new THREE.Vector3();
    this.group.getWorldPosition(baseWorld);
    colliders.push({
      type: 'capsule',
      p1: new THREE.Vector3(baseWorld.x, 0.02, baseWorld.z),
      p2: new THREE.Vector3(baseWorld.x, 0.28, baseWorld.z),
      radius: 0.355
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

  /**
   * Initializes the physical OLED / Dot Matrix LED display attached to the rear of the shoulder counterweight
   */
  initDotMatrixDisplay() {
    this.displayCanvas = document.createElement('canvas');
    this.displayCanvas.width = 256;
    this.displayCanvas.height = 192;
    this.displayCtx = this.displayCanvas.getContext('2d');

    this.displayTexture = new THREE.CanvasTexture(this.displayCanvas);
    this.displayTexture.anisotropy = 8;

    const displayMat = new THREE.MeshBasicMaterial({
      map: this.displayTexture,
      toneMapped: false
    });

    const displayPlaneGeo = new THREE.PlaneGeometry(0.134, 0.104);
    this.displayMesh = new THREE.Mesh(displayPlaneGeo, displayMat);
    this.displayMesh.rotateY(Math.PI); // Face rearward (-Z)
    this.displayMesh.position.set(0, 0.01, -0.217);
    this.j2.add(this.displayMesh);

    this.lastDisplayedOwn = -1;
    this.lastDisplayedForeign = -1;
    this.updateDisplay(0, 0);
  }

  getDisplayThemeColors() {
    const t = this.currentTheme;
    if (t === 'fanuc') {
      return { ledOn: '#ffea00', glow: 'rgba(255, 234, 0, 0.45)', ledOff: '#1c1808', bg: '#08080c', text: '#ffe047' };
    } else if (t === 'kuka') {
      return { ledOn: '#ff3d00', glow: 'rgba(255, 61, 0, 0.45)', ledOff: '#200c06', bg: '#08080c', text: '#ff6e40' };
    } else if (t === 'abb' || t === 'emerald' || t === 'green') {
      return { ledOn: '#10b981', glow: 'rgba(16, 185, 129, 0.50)', ledOff: '#041c12', bg: '#020a06', text: '#34d399' };
    } else if (t === 'cyber' || t === 'blue') {
      return { ledOn: '#3b82f6', glow: 'rgba(59, 130, 246, 0.50)', ledOff: '#040d1a', bg: '#020610', text: '#60a5fa' };
    }
    return { ledOn: '#00ff9d', glow: 'rgba(0, 255, 157, 0.45)', ledOff: '#091c14', bg: '#060d0a', text: '#00ff9d' };
  }

  /**
   * Updates the rear Dot Matrix display with the number of balls held inside this arm's circle
   */
  updateDisplay(ownCount = 0, foreignCount = 0) {
    if (this.lastDisplayedOwn === ownCount && this.lastDisplayedForeign === foreignCount) {
      return;
    }
    this.lastDisplayedOwn = ownCount;
    this.lastDisplayedForeign = foreignCount;

    const ctx = this.displayCtx;
    if (!ctx) return;

    const w = this.displayCanvas.width;
    const h = this.displayCanvas.height;
    const colors = this.getDisplayThemeColors();

    // 1. Dark Smoked Industrial Glass Screen Background
    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, w, h);

    // Subtle CRT / scanline phosphor grid
    ctx.fillStyle = 'rgba(255, 255, 255, 0.025)';
    for (let y = 0; y < h; y += 4) {
      ctx.fillRect(0, y, w, 1);
    }

    // Top Header
    ctx.fillStyle = colors.text;
    ctx.font = 'bold 12px "Chakra Petch", "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('BALLS IN CIRCLE', w / 2, 8);

    // Format 2-digit number (00 - 99)
    const countClamped = Math.max(0, Math.min(99, ownCount));
    const str = String(countClamped).padStart(2, '0');
    const d1 = str[0];
    const d2 = str[1];

    const bitmap1 = DOT_FONT_5x7[d1] || DOT_FONT_5x7['0'];
    const bitmap2 = DOT_FONT_5x7[d2] || DOT_FONT_5x7['0'];

    // 2. Full Dot Matrix LED Grid (28 columns x 17 rows)
    const cols = 28;
    const rows = 17;
    const startX = 12;
    const startY = 26;
    const gridW = w - 24;
    const gridH = h - 42;
    const stepX = gridW / cols;
    const stepY = gridH / rows;
    const dotR = 2.7;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cx = startX + (c + 0.5) * stepX;
        const cy = startY + (r + 0.5) * stepY;

        let isLit = false;

        // Render big 5x7 digits scaled across center (rows 1..13)
        if (r >= 1 && r <= 13) {
          const fontRow = Math.floor((r - 1) / 1.86); // 0..6
          if (c >= 3 && c <= 12) {
            const fontCol = Math.floor((c - 3) / 2.0); // 0..4
            if (fontRow >= 0 && fontRow < 7 && fontCol >= 0 && fontCol < 5) {
              const bit = (bitmap1[fontRow] >> (4 - fontCol)) & 1;
              if (bit) isLit = true;
            }
          } else if (c >= 15 && c <= 24) {
            const fontCol = Math.floor((c - 15) / 2.0); // 0..4
            if (fontRow >= 0 && fontRow < 7 && fontCol >= 0 && fontCol < 5) {
              const bit = (bitmap2[fontRow] >> (4 - fontCol)) & 1;
              if (bit) isLit = true;
            }
          }
        }

        // Bottom status LED meter bar (row 15)
        if (r === 15 && c >= 2 && c <= 25) {
          const barIdx = c - 2; // 0..23
          const fillCount = Math.min(24, Math.ceil((countClamped / 20) * 24));
          if (barIdx < fillCount) isLit = true;
        }

        if (isLit) {
          // Glow Halo
          ctx.fillStyle = colors.glow;
          ctx.beginPath();
          ctx.arc(cx, cy, dotR * 2.2, 0, Math.PI * 2);
          ctx.fill();

          // Bright Core LED Diode
          ctx.fillStyle = colors.ledOn;
          ctx.beginPath();
          ctx.arc(cx, cy, dotR, 0, Math.PI * 2);
          ctx.fill();

          // Center Specular Reflection
          ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
          ctx.beginPath();
          ctx.arc(cx - 0.7, cy - 0.7, dotR * 0.45, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Unlit Dim Phosphor Diode
          ctx.fillStyle = colors.ledOff;
          ctx.beginPath();
          ctx.arc(cx, cy, dotR * 0.85, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Bottom warning label if any opponent ball is intruding
    if (foreignCount > 0) {
      ctx.fillStyle = '#ff1744';
      ctx.font = 'bold 10px "Chakra Petch", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`! ${foreignCount} INTRUDER${foreignCount > 1 ? 'S' : ''} !`, w / 2, h - 3);
    }

    this.displayTexture.needsUpdate = true;
  }
}
