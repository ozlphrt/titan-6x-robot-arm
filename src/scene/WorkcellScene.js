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
   * Renders the dynamic Pie Chart HUD for a specific robot arm station
   * depicting the exact composition of ball colors currently inside its defense circle.
   */
  renderArmPieHUD(armIdx, distribution, isDark) {
    const ctx = this.armHudCtxs[armIdx];
    const canvas = this.armHudCanvases[armIdx];
    if (!ctx || !canvas) return;

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const scale = 320; // 1m = 320px in 1024x1024 canvas (1.35m = 432px)

    ctx.clearRect(0, 0, w, h);

    const teamColors = ['#ffcb05', '#ff5500', '#e60026', '#00f0ff'];
    const teamGlows = [
      'rgba(255, 203, 5, 0.48)',
      'rgba(255, 85, 0, 0.48)',
      'rgba(230, 0, 38, 0.48)',
      'rgba(0, 240, 255, 0.48)'
    ];
    const teamNames = ['ALPHA (YELLOW)', 'BETA (ORANGE)', 'GAMMA (RED)', 'DELTA (CYAN)'];
    const nativeColor = teamColors[armIdx];
    const nativeGlow = teamGlows[armIdx];

    const colPrimary = isDark ? '#00f0ff' : '#0284c7';
    const colSecondary = isDark ? '#00ff9d' : '#059669';
    const colAccent = isDark ? '#ffb300' : '#d97706';
    const colGhost = isDark ? 'rgba(0, 240, 255, 0.16)' : 'rgba(2, 132, 199, 0.20)';
    const colSubtle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.10)';

    const rBase = 0.355 * scale; // 113.6px
    const rCore = 0.55 * scale;  // 176px
    const rMid = 0.95 * scale;   // 304px
    const rOuter = 1.35 * scale; // 432px

    const total = distribution ? distribution.total : 0;
    const counts = distribution ? distribution.counts : [0, 0, 0, 0];

    // 1. DYNAMIC PIE CHART WEDGES
    if (total === 0) {
      // Empty / Standby Ring in Native Arm Color
      ctx.save();
      const grad = ctx.createRadialGradient(cx, cy, rBase, cx, cy, rOuter);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0.0)');
      grad.addColorStop(0.6, nativeGlow.replace('0.48', '0.12'));
      grad.addColorStop(1, nativeGlow.replace('0.48', '0.22'));
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, rOuter, 0, Math.PI * 2);
      ctx.arc(cx, cy, rBase, Math.PI * 2, 0, true);
      ctx.fill();
      ctx.restore();
    } else {
      let currentAngle = -Math.PI / 2; // Start at 12 o'clock top

      for (let t = 0; t < 4; t++) {
        const count = counts[t];
        if (count <= 0) continue;

        const fraction = count / total;
        const sliceAngle = fraction * Math.PI * 2;
        const nextAngle = currentAngle + sliceAngle;

        ctx.save();
        // Annular Pie Slice
        ctx.beginPath();
        ctx.arc(cx, cy, rOuter, currentAngle, nextAngle);
        ctx.arc(cx, cy, rBase, nextAngle, currentAngle, true);
        ctx.closePath();

        // Vibrant Fill with soft gradient
        const grad = ctx.createRadialGradient(cx, cy, rBase, cx, cy, rOuter);
        grad.addColorStop(0, teamGlows[t].replace('0.48', '0.25'));
        grad.addColorStop(0.6, teamGlows[t]);
        grad.addColorStop(1, teamGlows[t].replace('0.48', '0.58'));

        ctx.fillStyle = grad;
        ctx.fill();

        // Slice Outline / Divider Ray
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.restore();

        // Data Label Badge in the center of the slice
        if (fraction >= 0.065) {
          const midA = currentAngle + sliceAngle / 2;
          const badgeR = rBase + (rOuter - rBase) * 0.56;
          const bx = cx + Math.cos(midA) * badgeR;
          const by = cy + Math.sin(midA) * badgeR;

          ctx.save();
          const pct = Math.round(fraction * 100) + '%';
          const isOwn = t === armIdx;
          const roleStr = isOwn ? 'OWN' : 'INTRUDER';
          const countStr = `${count} ${count === 1 ? 'BALL' : 'BALLS'}`;

          ctx.font = 'bold 22px "JetBrains Mono", monospace';
          const pctWidth = ctx.measureText(pct).width;
          const boxW = Math.max(88, pctWidth + 28);
          const boxH = fraction >= 0.13 ? 48 : 28;

          // Dark pill badge background
          ctx.fillStyle = 'rgba(6, 9, 18, 0.88)';
          ctx.strokeStyle = teamColors[t];
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(bx - boxW / 2, by - boxH / 2, boxW, boxH, 6);
          ctx.fill();
          ctx.stroke();

          // Percentage Text
          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = 'bold 20px "JetBrains Mono", monospace';
          ctx.fillText(pct, bx, fraction >= 0.13 ? by - 8 : by);

          // Sub-label (Count + Role)
          if (fraction >= 0.13) {
            ctx.fillStyle = isOwn ? '#00ff9d' : '#ffb300';
            ctx.font = 'bold 10px "JetBrains Mono", monospace';
            ctx.fillText(`${countStr} • ${roleStr}`, bx, by + 12);
          }

          ctx.restore();
        }

        currentAngle = nextAngle;
      }
    }

    // 2. TACTICAL OVERLAY MARKINGS & ENVELOPE RIMS
    ctx.save();
    // Outer boundary ring (rOuter)
    ctx.strokeStyle = colPrimary;
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.arc(cx, cy, rOuter, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = colGhost;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, rOuter + 14, 0, Math.PI * 2);
    ctx.stroke();

    // 72 Radial Perimeter Ticks
    for (let deg = 0; deg < 360; deg += 5) {
      const rad = (deg * Math.PI) / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      const isMajor = deg % 45 === 0;
      const isMedium = deg % 15 === 0;
      const len = isMajor ? 12 : isMedium ? 7 : 4;

      ctx.strokeStyle = isMajor ? colAccent : isMedium ? colPrimary : colGhost;
      ctx.lineWidth = isMajor ? 3 : isMedium ? 2 : 1;
      ctx.beginPath();
      ctx.moveTo(cx + cos * (rOuter - len), cy + sin * (rOuter - len));
      ctx.lineTo(cx + cos * (rOuter + len), cy + sin * (rOuter + len));
      ctx.stroke();
    }

    // Mid working envelope ring (rMid)
    ctx.strokeStyle = colSecondary;
    ctx.lineWidth = 2.5;
    ctx.setLineDash([14, 10]);
    ctx.beginPath();
    ctx.arc(cx, cy, rMid, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Inner core defense ring (rCore)
    ctx.strokeStyle = colPrimary;
    ctx.lineWidth = 2.0;
    ctx.beginPath();
    ctx.arc(cx, cy, rCore, 0, Math.PI * 2);
    ctx.stroke();

    // Base collar (rBase)
    ctx.strokeStyle = colGhost;
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.arc(cx, cy, rBase, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // 3. TOP TACTICAL HEADER BADGE
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = isDark ? '#ffffff' : '#0f172a';
    ctx.font = 'bold 18px "JetBrains Mono", monospace';
    const ownCount = counts[armIdx] || 0;
    const foreignCount = total - ownCount;
    const headerTitle = `ARM ${armIdx + 1} (${teamNames[armIdx]}) // ${total} BALLS IN CIRCLE`;
    const subTitle = total > 0 ? `[${ownCount} OWN SECURED • ${foreignCount} INTRUDERS]` : '[CIRCLE CLEAR • 0 BALLS]';

    ctx.fillText(headerTitle, cx, cy - rOuter - 34);
    ctx.font = '600 12px "JetBrains Mono", monospace';
    ctx.fillStyle = foreignCount > 0 ? '#ffb300' : '#00ff9d';
    ctx.fillText(subTitle, cx, cy - rOuter - 15);
    ctx.restore();

    this.armHudTextures[armIdx].needsUpdate = true;
  }

  /**
   * Updates all 4 Arm Pie Chart HUDs based on real-time ball territory distributions
   */
  updateArmPieHUDs(distributions, isDark = null) {
    if (!distributions || distributions.length < 4) return;
    const darkTheme = isDark !== null ? isDark : (this.currentThemeKey === 'dark_cyber' || this.currentThemeKey === 'cad_blueprint');

    for (let i = 0; i < 4; i++) {
      const dist = distributions[i];
      const prev = this.armBallDistributions[i];

      let changed = false;
      if (!prev || dist.total !== prev.total) {
        changed = true;
      } else {
        for (let t = 0; t < 4; t++) {
          if (dist.counts[t] !== prev.counts[t]) {
            changed = true;
            break;
          }
        }
      }

      if (changed || this.forceHudUpdate) {
        this.armBallDistributions[i] = {
          total: dist.total,
          counts: [...dist.counts]
        };
        this.renderArmPieHUD(i, dist, darkTheme);
      }
    }
    this.forceHudUpdate = false;
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
