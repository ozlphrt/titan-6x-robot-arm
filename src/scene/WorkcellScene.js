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

    // 4. High-End Tactical Aerospace Radar HUD Floor Decal (3.2m x 3.2m, at y = 0.002)
    this.ringsGroup = new THREE.Group();
    this.ringsGroup.name = 'TacticalRadarHUDGroup';

    this.hudCanvas = document.createElement('canvas');
    this.hudCanvas.width = 2048;
    this.hudCanvas.height = 2048;
    this.hudCtx = this.hudCanvas.getContext('2d');
    this.hudTexture = new THREE.CanvasTexture(this.hudCanvas);
    this.hudTexture.anisotropy = 16;

    this.renderTacticalHUD(false); // Render initial Light Studio theme

    const hudPlaneGeo = new THREE.PlaneGeometry(3.2, 3.2);
    this.hudMat = new THREE.MeshBasicMaterial({
      map: this.hudTexture,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      toneMapped: false
    });

    this.hudMesh = new THREE.Mesh(hudPlaneGeo, this.hudMat);
    this.hudMesh.rotation.x = -Math.PI / 2;
    this.hudMesh.position.y = 0.002;
    this.ringsGroup.add(this.hudMesh);

    // Dynamic Sweeping Tactical Radar Reticle Ring
    const sweeperGeo = new THREE.RingGeometry(0.50, 1.36, 64);
    sweeperGeo.rotateX(-Math.PI / 2);
    this.sweeperMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    this.sweeperMesh = new THREE.Mesh(sweeperGeo, this.sweeperMat);
    this.sweeperMesh.position.y = 0.003;
    this.ringsGroup.add(this.sweeperMesh);

    this.scene.add(this.ringsGroup);
  }

  renderTacticalHUD(isDark) {
    const ctx = this.hudCtx;
    const w = 2048;
    const h = 2048;
    const cx = 1024;
    const cy = 1024;
    const scale = 640; // 1m = 640px (1.6m half-width = 1024px)

    ctx.clearRect(0, 0, w, h);

    // Color Palettes
    const colPrimary = isDark ? '#00f0ff' : '#0284c7';
    const colSecondary = isDark ? '#00ff9d' : '#059669';
    const colAccent = isDark ? '#ffb300' : '#d97706';
    const colGhost = isDark ? 'rgba(0, 240, 255, 0.16)' : 'rgba(2, 132, 199, 0.20)';
    const colSubtle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.10)';
    const colText = isDark ? '#e2e8f0' : '#0f172a';
    const colTextDim = isDark ? '#94a3b8' : '#64748b';

    // 1. Azimuth Guideline Rays (Every 45 degrees)
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      ctx.save();
      ctx.strokeStyle = i % 2 === 0 ? colGhost : colSubtle;
      ctx.lineWidth = i % 2 === 0 ? 3 : 2;
      ctx.setLineDash(i % 2 === 0 ? [12, 10] : [6, 8]);
      ctx.beginPath();
      ctx.moveTo(cx + cos * (0.32 * scale), cy + sin * (0.32 * scale));
      ctx.lineTo(cx + cos * (1.46 * scale), cy + sin * (1.46 * scale));
      ctx.stroke();
      ctx.restore();

      // Metric distance tick marks along cardinal rays
      if (i % 2 === 0) {
        [0.55, 0.75, 0.95, 1.15, 1.35].forEach(r => {
          const px = cx + cos * (r * scale);
          const py = cy + sin * (r * scale);
          const tickLen = 10;
          ctx.save();
          ctx.strokeStyle = colPrimary;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(px - sin * tickLen, py + cos * tickLen);
          ctx.lineTo(px + sin * tickLen, py - cos * tickLen);
          ctx.stroke();
          ctx.restore();
        });
      }
    }

    // 2. Outer Max Reach Defense Envelope Ring (r = 1.35m)
    const rOuter = 1.35 * scale;
    ctx.save();
    // Segmented Outer Track
    ctx.strokeStyle = colPrimary;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(cx, cy, rOuter, 0, Math.PI * 2);
    ctx.stroke();

    // Outer thin boundary offset
    ctx.strokeStyle = colGhost;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, rOuter + 22, 0, Math.PI * 2);
    ctx.stroke();

    // 72 Radial Perimeter Ticks & Degree Numbers (Every 5 deg)
    for (let deg = 0; deg < 360; deg += 5) {
      const rad = (deg * Math.PI) / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      const isMajor = deg % 45 === 0;
      const isMedium = deg % 15 === 0;

      const len = isMajor ? 20 : isMedium ? 12 : 6;
      ctx.strokeStyle = isMajor ? colAccent : isMedium ? colPrimary : colGhost;
      ctx.lineWidth = isMajor ? 4 : isMedium ? 2.5 : 1.5;
      ctx.beginPath();
      ctx.moveTo(cx + cos * (rOuter - len), cy + sin * (rOuter - len));
      ctx.lineTo(cx + cos * (rOuter + len), cy + sin * (rOuter + len));
      ctx.stroke();

      // Degree labels at 45 degree intervals
      if (isMajor) {
        const textDist = rOuter + 48;
        const tx = cx + cos * textDist;
        const ty = cy + sin * textDist;
        ctx.save();
        ctx.fillStyle = colAccent;
        ctx.font = 'bold 22px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const label = String(deg).padStart(3, '0') + '°';
        ctx.fillText(label, tx, ty);
        ctx.restore();
      }
    }

    // Outer Zone Label Badges
    ctx.fillStyle = colPrimary;
    ctx.font = 'bold 20px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('MAX DEFENSE REACH // R1.35m', cx, cy - rOuter - 65);
    ctx.fillText('TITAN-6X WORKCELL BOUNDARY', cx, cy + rOuter + 75);
    ctx.restore();

    // 3. Mid Working Envelope Ring (r = 0.95m)
    const rMid = 0.95 * scale;
    ctx.save();
    ctx.strokeStyle = colSecondary;
    ctx.lineWidth = 3.5;
    ctx.setLineDash([20, 12]);
    ctx.beginPath();
    ctx.arc(cx, cy, rMid, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Micro crosshair corner markers at 45°
    for (let i = 0; i < 4; i++) {
      const a = (i * Math.PI) / 2 + Math.PI / 4;
      const mx = cx + Math.cos(a) * rMid;
      const my = cy + Math.sin(a) * rMid;
      ctx.strokeStyle = colSecondary;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(mx - 14, my);
      ctx.lineTo(mx + 14, my);
      ctx.moveTo(mx, my - 14);
      ctx.lineTo(mx, my + 14);
      ctx.stroke();
    }

    ctx.fillStyle = colSecondary;
    ctx.font = '600 18px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('WORKING ENVELOPE // R0.95m', cx + rMid - 16, cy - 24);
    ctx.restore();

    // 4. Inner Agile Core Dock Ring (r = 0.55m)
    const rInner = 0.55 * scale;
    ctx.save();
    ctx.strokeStyle = colPrimary;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, rInner, 0, Math.PI * 2);
    ctx.stroke();

    // Hazard Hash Teeth around Inner Circle
    const hashCount = 36;
    for (let i = 0; i < hashCount; i++) {
      const a = (i / hashCount) * Math.PI * 2;
      const cos = Math.cos(a);
      const sin = Math.sin(a);
      ctx.strokeStyle = i % 2 === 0 ? colAccent : colGhost;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx + cos * (rInner - 12), cy + sin * (rInner - 12));
      ctx.lineTo(cx + cos * (rInner + 12), cy + sin * (rInner + 12));
      ctx.stroke();
    }

    ctx.fillStyle = colAccent;
    ctx.font = 'bold 16px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('CORE DEFENSE DOCK // R0.55m', cx, cy - rInner - 22);
    ctx.restore();

    // 5. Robot Base Clearance Collar (r = 0.32m)
    const rBase = 0.32 * scale;
    ctx.save();
    ctx.strokeStyle = colGhost;
    ctx.lineWidth = 2.5;
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.arc(cx, cy, rBase, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    this.hudTexture.needsUpdate = true;
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
    // Subtle rotation of tactical radar pulse
    if (this.sweeperMesh) {
      this.sweeperMesh.rotation.y += deltaTime * 0.18;
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
