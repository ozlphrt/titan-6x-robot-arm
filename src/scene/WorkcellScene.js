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

    // 2. Single Monolithic Precision Base Plate Floor (Top surface at y = 0)
    const floorGeo = new THREE.PlaneGeometry(16, 16);
    this.platformMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.35,
      metalness: 0.25,
      envMapIntensity: 1.0
    });
    this.floorMesh = new THREE.Mesh(floorGeo, this.platformMat);
    this.floorMesh.rotation.x = -Math.PI / 2;
    this.floorMesh.position.y = 0;
    this.floorMesh.receiveShadow = true;
    this.scene.add(this.floorMesh);

    // 3. Precision Engineering Grid across the Base Plate Floor
    this.gridHelper = new THREE.GridHelper(8.0, 40, 0x0284c7, 0xcbd5e1);
    this.gridHelper.position.y = 0.001;
    this.scene.add(this.gridHelper);

    // 4. Quad-Station Dynamic Pie Chart HUD Floor Decals (Under each of 4 Robot Arms)
    this.ringsGroup = new THREE.Group();
    this.ringsGroup.name = 'TacticalRadarHUDGroup';

    this.quadArmPositions = [
      new THREE.Vector3(1.4, 0, -1.4),   // Arm 1 (Alpha - North-East)
      new THREE.Vector3(-1.4, 0, -1.4),  // Arm 2 (Beta - North-West)
      new THREE.Vector3(-1.4, 0, 1.4),   // Arm 3 (Gamma - South-West)
      new THREE.Vector3(1.4, 0, 1.4)     // Arm 4 (Delta - South-East)
    ];

    this.armHudCanvases = [];
    this.armHudCtxs = [];
    this.armHudTextures = [];
    this.hudMeshes = [];
    this.armBallDistributions = [
      { total: 0, counts: [0, 0, 0, 0] },
      { total: 0, counts: [0, 0, 0, 0] },
      { total: 0, counts: [0, 0, 0, 0] },
      { total: 0, counts: [0, 0, 0, 0] }
    ];
    this.armAnimatedCounts = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    this.armAnimatedTotal = [0, 0, 0, 0];
    this.currentThemeKey = 'light_studio';
    this.forceHudUpdate = true;

    const hudPlaneGeo = new THREE.PlaneGeometry(3.0, 3.0);

    this.quadArmPositions.forEach((pos, idx) => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');
      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = 16;

      const mat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
        toneMapped: false
      });

      const hudMesh = new THREE.Mesh(hudPlaneGeo, mat);
      hudMesh.rotation.x = -Math.PI / 2;
      hudMesh.position.set(pos.x, 0.002, pos.z);
      this.ringsGroup.add(hudMesh);

      this.armHudCanvases.push(canvas);
      this.armHudCtxs.push(ctx);
      this.armHudTextures.push(texture);
      this.hudMeshes.push(hudMesh);
    });

    // Render initial pie chart decals
    this.renderTacticalHUD(false);

    // 5. Central Shared Interaction Arena - Smooth Convex Dome
    this.createCenterConvexDome();

    this.scene.add(this.ringsGroup);
  }

  createCenterConvexDome() {
    const domeRadius = 0.82;
    const domeHeight = 0.038;

    // Create smooth high-tessellation convex dome geometry
    const geom = new THREE.PlaneGeometry(domeRadius * 2, domeRadius * 2, 72, 72);
    geom.rotateX(-Math.PI / 2);

    const posAttr = geom.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const z = posAttr.getZ(i);
      const r = Math.hypot(x, z);

      if (r <= domeRadius) {
        // Smooth C1 cosine convex dome elevation
        const y = (domeHeight / 2) * (1 + Math.cos((Math.PI * r) / domeRadius));
        posAttr.setY(i, y);
      } else {
        posAttr.setY(i, 0);
      }
    }
    geom.computeVertexNormals();

    this.centerDishMat = new THREE.MeshStandardMaterial({
      color: 0x131824,
      roughness: 0.30,
      metalness: 0.40,
      flatShading: false
    });

    this.centerDishMesh = new THREE.Mesh(geom, this.centerDishMat);
    this.centerDishMesh.receiveShadow = true;
    this.ringsGroup.add(this.centerDishMesh);

    // Decorative Concentric Contour Elevation Rings indicating convex elevation
    const contourRadii = [0.25, 0.50, 0.75, 0.82];
    this.contourRings = [];

    contourRadii.forEach(r => {
      const ringGeo = new THREE.RingGeometry(r - 0.007, r + 0.007, 64);
      ringGeo.rotateX(-Math.PI / 2);

      const y = (domeHeight / 2) * (1 + Math.cos((Math.PI * r) / domeRadius)) + 0.0015;

      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x0284c7,
        transparent: true,
        opacity: r === 0.82 ? 0.75 : 0.28,
        side: THREE.DoubleSide,
        depthWrite: false
      });

      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.y = y;
      this.ringsGroup.add(ringMesh);
      this.contourRings.push(ringMesh);
    });
  }

  /**
   * Renders the dynamic Circular Progress Bar HUD for a specific robot arm station
   * depicting real-time 20-ball capacity progress and color composition.
   * - Sleek perimeter progress ring gauge (unobstructed open floor center)
   * - Desaturated matte palette matching the 4 robot arm native paints
   * - 20-ball capacity graduated track with 5-step milestone markers
   * - Sequential progress fill (Own secured balls + intruder balls)
   * - Glowing active progress front indicator
   */
  renderArmPieHUD(armIdx, animatedCounts, animatedTotal, isDark) {
    const ctx = this.armHudCtxs[armIdx];
    const canvas = this.armHudCanvases[armIdx];
    if (!ctx || !canvas) return;

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const scale = 320; // 1m = 320px in 1024x1024 canvas (1.35m = 432px)

    ctx.clearRect(0, 0, w, h);

    // Desaturated, elegant color palette perfectly matching each robot arm's native paint
    // Alpha = Fanuc Yellow (#ffcb05), Beta = Kuka Orange (#e65100), Gamma = Emerald Green (#10b981), Delta = Cyber Cyan (#00f0ff)
    const teamFills = [
      'rgba(215, 175, 60, 0.80)',   // Fanuc Yellow (muted warm ochre)
      'rgba(195, 100, 50, 0.80)',   // Kuka Orange (muted terracotta)
      'rgba(35, 175, 115, 0.80)',   // Gamma Emerald Green (muted industrial green)
      'rgba(55, 160, 175, 0.80)'    // Cyber Cyan (muted slate teal)
    ];

    const teamDividers = [
      'rgba(240, 205, 95, 0.95)',
      'rgba(225, 130, 80, 0.95)',
      'rgba(75, 215, 155, 0.95)',
      'rgba(85, 195, 210, 0.95)'
    ];

    const teamStandbyGlows = [
      'rgba(215, 175, 60, 0.15)',
      'rgba(195, 100, 50, 0.15)',
      'rgba(35, 175, 115, 0.15)',
      'rgba(55, 160, 175, 0.15)'
    ];

    const teamNames = ['ALPHA (YELLOW)', 'BETA (ORANGE)', 'GAMMA (GREEN)', 'DELTA (CYAN)'];

    const colPrimary = isDark ? '#00f0ff' : '#0284c7';
    const colSecondary = isDark ? '#00ff9d' : '#059669';
    const colAccent = isDark ? '#ffb300' : '#d97706';
    const colGhost = isDark ? 'rgba(0, 240, 255, 0.16)' : 'rgba(2, 132, 199, 0.20)';
    const colSubtle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.10)';

    // Progress Bar Ring Radii (Perimeter Ring Gauge)
    const rOuter = 1.35 * scale;    // 432px (outer boundary)
    const rBarOuter = 430;          // Outer progress ring edge
    const rBarInner = 388;          // Inner progress ring edge (42px thick progress track)
    const rMid = 0.90 * scale;      // 288px (mid working envelope)
    const rCore = 0.55 * scale;     // 176px (inner core defense)
    const rBase = 0.355 * scale;    // 113.6px (pedestal base collar)

    const counts = animatedCounts || [0, 0, 0, 0];
    const MAX_CAPACITY = 20.0;
    const activeSum = counts.reduce((acc, v) => acc + Math.max(0, v), 0);
    const startAngle = -Math.PI / 2; // Start at 12 o'clock top

    // 1. CIRCULAR PROGRESS BAR GROOVE / BASE TRACK
    ctx.save();
    // Track background fill
    const trackBg = isDark ? 'rgba(255, 255, 255, 0.040)' : 'rgba(15, 23, 42, 0.055)';
    ctx.fillStyle = trackBg;
    ctx.beginPath();
    ctx.arc(cx, cy, rBarOuter, 0, Math.PI * 2);
    ctx.arc(cx, cy, rBarInner, Math.PI * 2, 0, true);
    ctx.fill();

    // Track inner & outer subtle border rails
    ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(15, 23, 42, 0.14)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(cx, cy, rBarOuter, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, rBarInner, 0, Math.PI * 2);
    ctx.stroke();

    // 20 Discrete Capacity Graduation Notches
    for (let i = 0; i < 20; i++) {
      const angle = startAngle + (i / 20) * Math.PI * 2;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const isMajor = i % 5 === 0; // 0, 5, 10, 15 (25% quarters)

      ctx.strokeStyle = isMajor
        ? (isDark ? 'rgba(255, 255, 255, 0.35)' : 'rgba(15, 23, 42, 0.35)')
        : (isDark ? 'rgba(255, 255, 255, 0.10)' : 'rgba(15, 23, 42, 0.12)');
      ctx.lineWidth = isMajor ? 2.2 : 1.2;

      ctx.beginPath();
      ctx.moveTo(cx + cos * (rBarInner + 2), cy + sin * (rBarInner + 2));
      ctx.lineTo(cx + cos * (rBarOuter - 2), cy + sin * (rBarOuter - 2));
      ctx.stroke();
    }
    ctx.restore();

    // 2. FILLED PROGRESS BAR SEGMENTS (Sequential: Own balls first, then intruders)
    if (activeSum > 0.02) {
      let currentAngle = startAngle;
      // If activeSum < 20, progress angle is (count / 20) * 2pi. If >= 20, normalized to 2pi.
      const anglePerUnit = activeSum < MAX_CAPACITY ? (Math.PI * 2 / MAX_CAPACITY) : (Math.PI * 2 / activeSum);

      // Prioritize own balls first in the progress sequence, then other teams
      const fillOrder = [armIdx, ...[0, 1, 2, 3].filter(t => t !== armIdx)];

      fillOrder.forEach(t => {
        const count = Math.max(0, counts[t]);
        if (count < 0.01) return;

        const sliceAngle = count * anglePerUnit;
        const nextAngle = currentAngle + sliceAngle;

        ctx.save();
        // Progress Bar Arc Segment
        ctx.beginPath();
        ctx.arc(cx, cy, rBarOuter, currentAngle, nextAngle);
        ctx.arc(cx, cy, rBarInner, nextAngle, currentAngle, true);
        ctx.closePath();

        // Soft Radial Gradient along track width
        const grad = ctx.createRadialGradient(cx, cy, rBarInner, cx, cy, rBarOuter);
        grad.addColorStop(0, teamFills[t].replace('0.80', '0.65').replace('0.75', '0.60'));
        grad.addColorStop(0.5, teamFills[t]);
        grad.addColorStop(1, teamFills[t].replace('0.80', '0.90').replace('0.75', '0.85'));

        ctx.fillStyle = grad;
        ctx.fill();

        // Segment Divider
        ctx.strokeStyle = teamDividers[t];
        ctx.lineWidth = 2.0;
        ctx.stroke();
        ctx.restore();

        currentAngle = nextAngle;
      });

      // Active Progress Front Indicator / Leading Edge Cap
      if (activeSum < MAX_CAPACITY - 0.05) {
        ctx.save();
        const headCos = Math.cos(currentAngle);
        const headSin = Math.sin(currentAngle);

        // Glowing progress needle line
        ctx.strokeStyle = isDark ? '#ffffff' : '#0f172a';
        ctx.lineWidth = 3.0;
        ctx.beginPath();
        ctx.moveTo(cx + headCos * (rBarInner - 2), cy + headSin * (rBarInner - 2));
        ctx.lineTo(cx + headCos * (rBarOuter + 2), cy + headSin * (rBarOuter + 2));
        ctx.stroke();

        // Subtle leading bead dot
        ctx.fillStyle = isDark ? '#00f0ff' : '#0284c7';
        ctx.beginPath();
        ctx.arc(cx + headCos * ((rBarInner + rBarOuter) / 2), cy + headSin * ((rBarInner + rBarOuter) / 2), 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    } else {
      // Empty Standby Track Glow
      ctx.save();
      ctx.strokeStyle = teamStandbyGlows[armIdx];
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(cx, cy, (rBarInner + rBarOuter) / 2, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // 3. TACTICAL RADAR INTERIOR & WORKING ENVELOPE RIMS (Clean Open Floor Center)
    ctx.save();
    // Outer boundary rim
    ctx.strokeStyle = colGhost;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, rOuter + 14, 0, Math.PI * 2);
    ctx.stroke();

    // 72 Perimeter Ticks outside the progress bar
    for (let deg = 0; deg < 360; deg += 5) {
      const rad = (deg * Math.PI) / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      const isMajor = deg % 45 === 0;
      const isMedium = deg % 15 === 0;
      const len = isMajor ? 10 : isMedium ? 6 : 3;

      ctx.strokeStyle = isMajor ? colAccent : isMedium ? colPrimary : colGhost;
      ctx.lineWidth = isMajor ? 2.5 : isMedium ? 1.8 : 1.0;
      ctx.beginPath();
      ctx.moveTo(cx + cos * (rBarOuter + 2), cy + sin * (rBarOuter + 2));
      ctx.lineTo(cx + cos * (rBarOuter + 2 + len), cy + sin * (rBarOuter + 2 + len));
      ctx.stroke();
    }

    // Mid working envelope ring (rMid)
    ctx.strokeStyle = colSecondary;
    ctx.lineWidth = 1.8;
    ctx.setLineDash([12, 10]);
    ctx.beginPath();
    ctx.arc(cx, cy, rMid, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Inner core defense ring (rCore)
    ctx.strokeStyle = colPrimary;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.arc(cx, cy, rCore, 0, Math.PI * 2);
    ctx.stroke();

    // Base collar (rBase)
    ctx.strokeStyle = colGhost;
    ctx.lineWidth = 1.6;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.arc(cx, cy, rBase, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // 4. TOP TACTICAL PROGRESS HEADER (Clean & Informative)
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = isDark ? '#ffffff' : '#0f172a';
    ctx.font = 'bold 16px "JetBrains Mono", monospace';
    const displayTotal = Math.round(animatedTotal || 0);
    const ownCount = Math.round(counts[armIdx] || 0);
    const foreignCount = Math.max(0, displayTotal - ownCount);
    const pct = Math.min(100, Math.round((displayTotal / 20) * 100));
    const headerTitle = `ARM ${armIdx + 1} (${teamNames[armIdx]}) // PROGRESS: ${displayTotal}/20 [${pct}%]`;
    const subTitle = displayTotal > 0 ? `[${ownCount} OWN SECURED • ${foreignCount} INTRUDERS]` : '[STANDBY • 0/20 CAPACITY]';

    ctx.fillText(headerTitle, cx, cy - rBarOuter - 30);
    ctx.font = '600 12px "JetBrains Mono", monospace';
    ctx.fillStyle = foreignCount > 0 ? '#ffb300' : '#00ff9d';
    ctx.fillText(subTitle, cx, cy - rBarOuter - 12);
    ctx.restore();

    this.armHudTextures[armIdx].needsUpdate = true;
  }

  /**
   * Updates all 4 Arm Pie Chart HUD targets based on real-time ball territory distributions
   */
  updateArmPieHUDs(distributions, isDark = null) {
    if (!distributions || distributions.length < 4) return;
    for (let i = 0; i < 4; i++) {
      const dist = distributions[i];
      this.armBallDistributions[i] = {
        total: dist.total,
        counts: [...dist.counts]
      };
    }
    if (isDark !== null) {
      this.currentThemeKey = isDark ? 'dark_cyber' : 'light_studio';
      this.forceHudUpdate = true;
    }
  }

  renderTacticalHUD(isDark) {
    this.currentThemeKey = isDark ? 'dark_cyber' : 'light_studio';
    this.forceHudUpdate = true;
    this.updateArmPieHUDs(this.armBallDistributions, isDark);
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

    // Platform Floor Material
    this.platformMat.color.setHex(cfg.platform);
    this.platformMat.roughness = cfg.platformRoughness;
    this.platformMat.metalness = cfg.platformMetalness;

    // Lights
    if (this.ambientLight) this.ambientLight.intensity = cfg.ambient;
    if (this.mainLight) this.mainLight.intensity = cfg.main;
    if (this.fillLight) this.fillLight.intensity = cfg.fill;
    if (this.backLight) this.backLight.intensity = cfg.back;

    // Update Tactical HUD Texture & Sweeper to match theme
    const isDark = themeKey === 'dark_cyber' || themeKey === 'cad_blueprint';
    this.renderTacticalHUD(isDark);
    if (this.sweeperMat) {
      this.sweeperMat.color.setHex(cfg.gridCenter);
      this.sweeperMat.opacity = isDark ? 0.18 : 0.10;
    }

    // Center Concave Dish & Contour Rings Theme
    if (this.centerDishMat) {
      this.centerDishMat.color.setHex(cfg.platform);
      this.centerDishMat.roughness = cfg.platformRoughness;
      this.centerDishMat.metalness = cfg.platformMetalness;
    }
    if (this.contourRings) {
      this.contourRings.forEach(rm => {
        rm.material.color.setHex(cfg.gridCenter);
      });
    }

    // Grid
    if (this.gridHelper) {
      this.scene.remove(this.gridHelper);
      this.gridHelper.geometry.dispose();
      this.gridHelper = new THREE.GridHelper(8.0, 40, cfg.gridCenter, cfg.gridLines);
      this.gridHelper.position.y = 0.001;
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
    // Subtle rotation of tactical radar pulse across all 4 arm stations
    if (this.sweeperMeshes) {
      this.sweeperMeshes.forEach((mesh, idx) => {
        mesh.rotation.y += deltaTime * (0.18 + idx * 0.04);
      });
    }

    // Smooth continuous interpolation of Dynamic Pie Chart HUDs
    const darkTheme = (this.currentThemeKey === 'dark_cyber' || this.currentThemeKey === 'cad_blueprint');
    const lerpRate = 8.5; // Smooth, fluid response without sluggish lag
    const factor = 1 - Math.exp(-lerpRate * Math.min(deltaTime, 0.1));

    for (let i = 0; i < 4; i++) {
      let needsRender = false;
      const targetCounts = this.armBallDistributions[i]?.counts || [0, 0, 0, 0];
      const targetTotal = this.armBallDistributions[i]?.total || 0;

      for (let t = 0; t < 4; t++) {
        const target = targetCounts[t];
        const diff = target - this.armAnimatedCounts[i][t];
        if (Math.abs(diff) > 0.003) {
          this.armAnimatedCounts[i][t] += diff * factor;
          needsRender = true;
        } else if (this.armAnimatedCounts[i][t] !== target) {
          this.armAnimatedCounts[i][t] = target;
          needsRender = true;
        }
      }

      const diffTot = targetTotal - this.armAnimatedTotal[i];
      if (Math.abs(diffTot) > 0.003) {
        this.armAnimatedTotal[i] += diffTot * factor;
        needsRender = true;
      } else if (this.armAnimatedTotal[i] !== targetTotal) {
        this.armAnimatedTotal[i] = targetTotal;
        needsRender = true;
      }

      if (needsRender || this.forceHudUpdate) {
        this.renderArmPieHUD(i, this.armAnimatedCounts[i], this.armAnimatedTotal[i], darkTheme);
      }
    }
    this.forceHudUpdate = false;
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
