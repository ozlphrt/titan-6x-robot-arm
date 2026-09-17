import * as THREE from 'three';

/**
 * Creates an arc line geometry between two angles in radians with radial tick marks
 */
function createArcGeometry(radius, minAngleRad, maxAngleRad, segments = 64) {
  const points = [];
  const span = maxAngleRad - minAngleRad;
  for (let i = 0; i <= segments; i++) {
    const theta = minAngleRad + (i / segments) * span;
    // By convention in local pitch (around X): cos is along Z, sin is along Y
    points.push(new THREE.Vector3(0, Math.sin(theta) * radius, Math.cos(theta) * radius));
  }
  const geo = new THREE.BufferGeometry().setFromPoints(points);
  return geo;
}

/**
 * Creates horizontal circle/arc geometry for yaw/roll joints around Y axis
 */
function createYawArcGeometry(radius, minAngleRad, maxAngleRad, segments = 64) {
  const points = [];
  const span = maxAngleRad - minAngleRad;
  for (let i = 0; i <= segments; i++) {
    const theta = minAngleRad + (i / segments) * span;
    // In local plane (around Y): sin is along X, cos is along Z
    points.push(new THREE.Vector3(Math.sin(theta) * radius, 0, Math.cos(theta) * radius));
  }
  const geo = new THREE.BufferGeometry().setFromPoints(points);
  return geo;
}

/**
 * Creates dynamic 2D canvas text badge texture for floating joint HUD
 */
function createJointBadgeTexture(label, rangeText) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 96;
  const ctx = canvas.getContext('2d');

  // Background Glass Pill
  ctx.fillStyle = 'rgba(10, 16, 26, 0.85)';
  ctx.strokeStyle = '#00f0ff';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.roundRect(6, 6, 244, 84, 18);
  ctx.fill();
  ctx.stroke();

  // Joint Label Text
  ctx.fillStyle = '#00ff9d';
  ctx.font = 'bold 30px "JetBrains Mono", monospace';
  ctx.textAlign = 'center';
  ctx.fillText(label, 128, 40);

  // Range text
  ctx.fillStyle = '#94a3b8';
  ctx.font = '500 20px "Inter", sans-serif';
  ctx.fillText(rangeText, 128, 72);

  const texture = new THREE.CanvasTexture(canvas);
  return { texture, canvas, ctx };
}

export class JointRangeVisualizer {
  constructor(scene, robotModel) {
    this.scene = scene;
    this.robot = robotModel;
    this.enabled = true;

    this.group = new THREE.Group();
    this.group.name = 'JointROMHelpersGroup';
    this.scene.add(this.group);

    this.jointHelpers = [];
    this.buildROMHelpers();
  }

  buildROMHelpers() {
    this.group.clear();
    this.jointHelpers = [];

    const helperConfigs = [
      {
        jointIndex: 0,
        name: 'J1: BASE YAW',
        parentObj: this.robot.j1,
        radius: 0.32,
        type: 'yaw',
        offset: new THREE.Vector3(0, 0.08, 0),
        color: 0x00f0ff
      },
      {
        jointIndex: 1,
        name: 'J2: SHOULDER PITCH',
        parentObj: this.robot.j2,
        radius: 0.22,
        type: 'pitch',
        offset: new THREE.Vector3(0.18, 0, 0),
        color: 0x00ff9d
      },
      {
        jointIndex: 2,
        name: 'J3: ELBOW PITCH',
        parentObj: this.robot.j3,
        radius: 0.20,
        type: 'pitch',
        offset: new THREE.Vector3(0.15, 0, 0),
        color: 0xffea00
      },
      {
        jointIndex: 3,
        name: 'J4: FOREARM ROLL',
        parentObj: this.robot.j4,
        radius: 0.16,
        type: 'yaw',
        offset: new THREE.Vector3(0, 0.18, 0),
        color: 0x00e5ff
      },
      {
        jointIndex: 4,
        name: 'J5: WRIST PITCH',
        parentObj: this.robot.j5,
        radius: 0.14,
        type: 'pitch',
        offset: new THREE.Vector3(0.11, 0, 0),
        color: 0xd500f9
      },
      {
        jointIndex: 5,
        name: 'J6: TOOL ROLL',
        parentObj: this.robot.j6,
        radius: 0.11,
        type: 'yaw',
        offset: new THREE.Vector3(0, 0.06, 0),
        color: 0xff3366
      }
    ];

    helperConfigs.forEach((cfg) => {
      const limit = this.robot.limits[cfg.jointIndex];
      const minRad = THREE.MathUtils.degToRad(limit.min);
      const maxRad = THREE.MathUtils.degToRad(limit.max);

      const helperGroup = new THREE.Group();
      helperGroup.name = `ROM_Helper_${cfg.name}`;

      // 1. Arc Sector Geometry depicting the total range of motion
      let arcGeo;
      if (cfg.type === 'yaw') {
        arcGeo = createYawArcGeometry(cfg.radius, minRad, maxRad);
      } else {
        arcGeo = createArcGeometry(cfg.radius, minRad, maxRad);
      }

      const arcMat = new THREE.LineBasicMaterial({
        color: cfg.color,
        linewidth: 3,
        transparent: true,
        opacity: 0.85
      });
      const arcLine = new THREE.Line(arcGeo, arcMat);
      helperGroup.add(arcLine);

      // 2. Limit End Stop Tick Marks (Red Warning Indicators at extremities)
      const stopMat = new THREE.MeshBasicMaterial({ color: 0xff3366 });
      const stopGeo = new THREE.SphereGeometry(0.012, 12, 12);

      const stopMin = new THREE.Mesh(stopGeo, stopMat);
      const stopMax = new THREE.Mesh(stopGeo, stopMat);

      if (cfg.type === 'yaw') {
        stopMin.position.set(Math.sin(minRad) * cfg.radius, 0, Math.cos(minRad) * cfg.radius);
        stopMax.position.set(Math.sin(maxRad) * cfg.radius, 0, Math.cos(maxRad) * cfg.radius);
      } else {
        stopMin.position.set(0, Math.sin(minRad) * cfg.radius, Math.cos(minRad) * cfg.radius);
        stopMax.position.set(0, Math.sin(maxRad) * cfg.radius, Math.cos(maxRad) * cfg.radius);
      }
      helperGroup.add(stopMin);
      helperGroup.add(stopMax);

      // 3. Current Live Pointer Needle
      const needleMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const needleGeo = new THREE.CylinderGeometry(0.003, 0.003, cfg.radius * 0.95, 8);
      const needleMesh = new THREE.Mesh(needleGeo, needleMat);

      const pointerHeadGeo = new THREE.ConeGeometry(0.012, 0.03, 12);
      const pointerHead = new THREE.Mesh(pointerHeadGeo, new THREE.MeshBasicMaterial({ color: cfg.color }));

      const needleGroup = new THREE.Group();
      needleMesh.position.y = (cfg.radius * 0.95) / 2;
      pointerHead.position.y = cfg.radius * 0.95;
      needleGroup.add(needleMesh);
      needleGroup.add(pointerHead);

      helperGroup.add(needleGroup);

      // 4. Floating 3D Joint Label Sprite Badge
      const rangeStr = `${limit.min}° to +${limit.max}°`;
      const badgeData = createJointBadgeTexture(cfg.name.split(':')[0], rangeStr);
      const spriteMat = new THREE.SpriteMaterial({
        map: badgeData.texture,
        transparent: true,
        opacity: 0.92
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(0.24, 0.09, 1.0);
      sprite.position.copy(cfg.offset).add(new THREE.Vector3(0, cfg.radius * 0.45, 0));
      helperGroup.add(sprite);

      helperGroup.position.copy(cfg.offset);

      // Attach to joint parent or scene
      cfg.parentObj.add(helperGroup);

      this.jointHelpers.push({
        cfg,
        helperGroup,
        needleGroup,
        badgeData,
        sprite
      });
    });
  }

  update() {
    if (!this.enabled) return;

    for (const item of this.jointHelpers) {
      const idx = item.cfg.jointIndex;
      const currentAngleRad = this.robot.angles[idx];
      const currentAngleDeg = THREE.MathUtils.radToDeg(currentAngleRad);

      // Update live pointer angle
      if (item.cfg.type === 'yaw') {
        item.needleGroup.rotation.y = currentAngleRad;
      } else {
        item.needleGroup.rotation.x = currentAngleRad;
      }

      // Update badge text live
      const ctx = item.badgeData.ctx;
      const limit = this.robot.limits[idx];
      ctx.clearRect(0, 0, 256, 96);

      // Background Glass Pill
      ctx.fillStyle = 'rgba(10, 16, 26, 0.88)';
      ctx.strokeStyle = item.cfg.color ? `#${item.cfg.color.toString(16).padStart(6, '0')}` : '#00f0ff';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(6, 6, 244, 84, 18);
      ctx.fill();
      ctx.stroke();

      // Label & live angle
      const sign = currentAngleDeg >= 0 ? '+' : '';
      const jName = item.cfg.name.split(':')[0];
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 28px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${jName} ${sign}${currentAngleDeg.toFixed(1)}°`, 128, 42);

      // Range text
      ctx.fillStyle = '#94a3b8';
      ctx.font = '500 18px "Inter", sans-serif';
      ctx.fillText(`[${limit.min}° ... +${limit.max}°]`, 128, 72);

      item.badgeData.texture.needsUpdate = true;
    }
  }

  toggle(visible) {
    this.enabled = visible !== undefined ? visible : !this.enabled;
    this.jointHelpers.forEach(item => {
      item.helperGroup.visible = this.enabled;
    });
    return this.enabled;
  }
}
