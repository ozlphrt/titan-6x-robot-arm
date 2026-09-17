import * as THREE from 'three';

function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fill();
}

function createBouncyBallTexture(teamId, styleIndex, theme) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  const baseCol = theme.primary;
  const accentCol = theme.secondary;
  const numCol = theme.numCol;
  const badgeCol = theme.badgeBg;
  const teamNum = String(teamId + 1);

  // 1. Base High-Saturation Color Fill
  ctx.fillStyle = baseCol;
  ctx.fillRect(0, 0, 512, 256);

  // 2. High-Contrast Team Graphic Patterns
  if (styleIndex === 0) {
    // Pro Racing Dual-Band
    ctx.fillStyle = accentCol;
    ctx.fillRect(0, 80, 512, 96);
    ctx.fillStyle = theme.stripeCol || '#ffffff';
    ctx.fillRect(0, 108, 512, 40);
  } else if (styleIndex === 1) {
    // Bold Hemisphere Block
    ctx.fillStyle = accentCol;
    ctx.fillRect(0, 128, 512, 128);
    ctx.fillStyle = theme.stripeCol || '#ffffff';
    ctx.fillRect(0, 118, 512, 20);
  } else if (styleIndex === 2) {
    // Dynamic Wave Ribbons
    ctx.fillStyle = accentCol;
    ctx.beginPath();
    ctx.moveTo(0, 128);
    for (let x = 0; x <= 512; x += 8) {
      ctx.lineTo(x, 128 + Math.sin((x / 512) * Math.PI * 4) * 60);
    }
    ctx.lineTo(512, 256);
    ctx.lineTo(0, 256);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = theme.stripeCol || '#ffffff';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.moveTo(0, 128);
    for (let x = 0; x <= 512; x += 8) {
      ctx.lineTo(x, 128 + Math.sin((x / 512) * Math.PI * 4) * 60);
    }
    ctx.stroke();
  } else {
    // Arcade Stars Belt
    ctx.fillStyle = accentCol;
    ctx.fillRect(0, 85, 512, 86);
    ctx.fillStyle = theme.stripeCol || '#ffffff';
    for (let i = 0; i < 6; i++) {
      drawStar(ctx, 42 + i * 85, 128, 5, 24, 11);
    }
  }

  // 3. Prominent Bold Circular Team Number Badges (Opposite Equator Positions)
  [128, 384].forEach(cx => {
    // Outer shadow rim
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.beginPath();
    ctx.arc(cx + 2, 130, 44, 0, Math.PI * 2);
    ctx.fill();

    // White / Contrast Base Disc
    ctx.fillStyle = badgeCol;
    ctx.beginPath();
    ctx.arc(cx, 128, 42, 0, Math.PI * 2);
    ctx.fill();

    // Colored Border Ring
    ctx.strokeStyle = accentCol;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(cx, 128, 39, 0, Math.PI * 2);
    ctx.stroke();

    // Large Bold Team Number
    ctx.fillStyle = numCol;
    ctx.font = '900 52px "Chakra Petch", "JetBrains Mono", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(teamNum, cx, 129);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

export class BallInterceptor {
  constructor(scene, robots, kinematicsList, audio) {
    this.scene = scene;
    this.robots = Array.isArray(robots) ? robots : [robots];
    this.kinematicsList = Array.isArray(kinematicsList) ? kinematicsList : [kinematicsList];
    this.robot = this.robots[0];
    this.kinematics = this.kinematicsList[0];
    this.audio = audio;

    this.enabled = true; // Auto-defense active by default
    this.targetFlockSize = 80; // 80 balls total (20 per team)
    this.spawnTimer = 0;
    this.spawnInterval = 0.08;
    this.spawnIndex = 0;

    this.balls = [];
    this.particles = [];

    // Gravity constant (m/s^2) - gentle, floaty, pleasant industrial simulation
    this.gravity = -3.8;

    // Arena boundary limits (3D bounding envelope covering all 4 quad stations)
    this.bounds = {
      minX: -2.35, maxX: 2.35,
      minY: 0.0, maxY: 2.4,
      minZ: -2.35, maxZ: 2.35
    };

    // The reach zone the robot arms actively defend (r <= 1.35m from station base)
    this.maxDefenseRadius = 1.35;
    this.minWorkspaceRadius = 0.18;

    this.score = 0;
    this.pushCount = 0;
    this.combo = 0;
    this.lastPushTime = 0;

    // 4 Distinct, Vivid High-Contrast Team Color Themes
    this.teamThemes = [
      {
        id: 0,
        name: 'ALPHA (ARM 1)',
        label: 'Solar Yellow',
        primary: '#ffea00',    // Vivid High-Luminance Solar Yellow
        secondary: '#0f172a',  // Dark Obsidian
        stripeCol: '#ffffff',
        badgeBg: '#ffffff',
        numCol: '#000000',
        hex: 0xffea00
      },
      {
        id: 1,
        name: 'BETA (ARM 2)',
        label: 'Blaze Orange',
        primary: '#ff3d00',    // Vivid Fiery Crimson Orange
        secondary: '#7f1d1d',  // Deep Burgundy Maroon
        stripeCol: '#ffffff',
        badgeBg: '#ffffff',
        numCol: '#d50000',
        hex: 0xff3d00
      },
      {
        id: 2,
        name: 'GAMMA (ARM 3)',
        label: 'Arctic White',
        primary: '#ffffff',    // Brilliant Arctic Pure White
        secondary: '#1d4ed8',  // Vivid Electric Sapphire Blue
        stripeCol: '#38bdf8',  // Sky Blue Accent
        badgeBg: '#1e3a8a',
        numCol: '#ffffff',
        hex: 0xf8fafc
      },
      {
        id: 3,
        name: 'DELTA (ARM 4)',
        label: 'Laser Cyan',
        primary: '#00f0ff',    // Ultra-Vivid Neon Laser Cyan
        secondary: '#030712',  // Midnight Void
        stripeCol: '#4f46e5',  // Indigo Laser Accent
        badgeBg: '#ffffff',
        numCol: '#006699',
        hex: 0x00f0ff
      }
    ];

    // Multi-Arm Pursuit & Defense States for all 4 Robot Arms
    this.armPursuits = this.robots.map((r, idx) => {
      const basePos = new THREE.Vector3();
      r.group.getWorldPosition(basePos);
      const dirToCenter = new THREE.Vector3(-basePos.x, 0, -basePos.z).normalize();
      const restPos = new THREE.Vector3().copy(basePos).addScaledVector(dirToCenter, 0.45);
      restPos.y = 0.52;

      return {
        robot: r,
        teamId: idx,
        basePos: basePos,
        pursuitPos: restPos.clone(),
        pursuitTarget: restPos.clone(),
        pursuitVelocity: new THREE.Vector3(0, 0, 0),
        defaultRestPos: restPos.clone(),
        currentTargetBall: null,
        lockedTargetBall: null,
        throwState: 'IDLE', // 'IDLE', 'APPROACH', 'CLAMP', 'WINDUP', 'RELEASE'
        throwBall: null,
        heldBall: null,
        throwTimer: 0,
        targetThrowDir: new THREE.Vector3(0, 0, 0),
        ejectionsCount: 0,
        retainsCount: 0
      };
    });

    this.ballsGroup = new THREE.Group();
    this.ballsGroup.name = 'FlockingBallsGroup';
    this.scene.add(this.ballsGroup);

    this.particlesGroup = new THREE.Group();
    this.particlesGroup.name = 'DeflectionParticlesGroup';
    this.scene.add(this.particlesGroup);

    // Holographic AI Targeting Lock-On Reticle
    this.targetReticle = new THREE.Group();
    this.targetReticle.name = 'AITargetReticle';
    this.targetReticle.visible = false;

    const reticleGeo = new THREE.RingGeometry(0.08, 0.095, 32);
    const reticleMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide
    });
    this.reticleMesh = new THREE.Mesh(reticleGeo, reticleMat);
    this.targetReticle.add(this.reticleMesh);

    // Crosshairs on reticle
    const crossGeo = new THREE.RingGeometry(0.02, 0.03, 16);
    const crossMesh = new THREE.Mesh(crossGeo, reticleMat);
    this.targetReticle.add(crossMesh);

    this.scene.add(this.targetReticle);

    // Pre-create textures for the 4 teams
    this.teamTextures = this.teamThemes.map((theme, teamId) => {
      return [
        createBouncyBallTexture(teamId, 0, theme),
        createBouncyBallTexture(teamId, 1, theme),
        createBouncyBallTexture(teamId, 2, theme),
        createBouncyBallTexture(teamId, 3, theme)
      ];
    });

    // Initial staggered spawn of 80 balls matching all 4 arm colors
    this.spawnInitialBalls(this.targetFlockSize);
  }

  toggle() {
    this.enabled = !this.enabled;
    if (!this.enabled && this.targetReticle) {
      this.targetReticle.visible = false;
    }
    return this.enabled;
  }

  spawnInitialBalls(count = 80) {
    // Stagger initial ball drops for a lively fountain effect
    for (let i = 0; i < count; i++) {
      const teamId = i % 4;
      setTimeout(() => {
        if (this.balls.length < this.targetFlockSize) {
          this.spawnBall(true, teamId);
        }
      }, i * 45);
    }
  }

  /**
   * Spawns / drops a ball at the center circle with designated arm team color
   */
  spawnBall(dropAtCenter = true, specificTeamId = null) {
    let x = (Math.random() - 0.5) * 0.16;
    let z = (Math.random() - 0.5) * 0.16;
    let y = 1.30 + Math.random() * 0.50; // Dropping vertically from 1.30m - 1.80m height

    if (!dropAtCenter) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 0.3 + Math.random() * 0.4;
      x = Math.cos(angle) * dist;
      z = Math.sin(angle) * dist;
      y = 0.8 + Math.random() * 0.4;
    }

    const teamId = specificTeamId !== null ? specificTeamId : (this.spawnIndex++ % 4);
    const theme = this.teamThemes[teamId];
    const styleIndex = Math.floor(Math.random() * 4);
    const ballTexture = this.teamTextures[teamId][styleIndex];

    // Uniform spherical ball size (0.062m - 0.076m)
    const ballRadius = 0.064 + Math.random() * 0.010;
    const baseRestitution = 0.74 + Math.random() * 0.04;
    const mass = Math.pow(ballRadius / 0.070, 3) * 0.08;

    // Gentle vertical initial drop
    const vx = (Math.random() - 0.5) * 0.04;
    const vz = (Math.random() - 0.5) * 0.04;
    const vy = -0.20;

    const geo = new THREE.SphereGeometry(ballRadius, 24, 24);
    const mat = new THREE.MeshPhysicalMaterial({
      map: ballTexture,
      roughness: 0.10,
      metalness: 0.04,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      reflectivity: 0.98,
      emissive: new THREE.Color(theme.hex),
      emissiveIntensity: 0.06
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;

    this.ballsGroup.add(mesh);

    const ball = {
      mesh,
      teamId: teamId,
      theme: theme,
      radius: ballRadius,
      mass: mass,
      color: theme.hex,
      texture: ballTexture,
      velocity: new THREE.Vector3(vx, vy, vz),
      restitution: baseRestitution,
      bounces: 0,
      age: 0,
      lastPushTime: 0
    };

    this.balls.push(ball);
    return ball;
  }

  /**
   * Creates an energetic outward push ripple shockwave and deflective sparks
   */
  createPushRippleEffect(pos, color, radius, pushDir) {
    const count = 14;
    const particleGeo = new THREE.SphereGeometry(0.012, 6, 6);
    const particleMat = new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.95 });

    // Outward directional spark burst
    for (let i = 0; i < count; i++) {
      const pMesh = new THREE.Mesh(particleGeo, particleMat.clone());
      pMesh.position.copy(pos);

      const spreadAngle = (Math.random() - 0.5) * 1.2;
      const cosA = Math.cos(spreadAngle);
      const sinA = Math.sin(spreadAngle);
      
      const dirX = pushDir.x * cosA - pushDir.z * sinA;
      const dirZ = pushDir.x * sinA + pushDir.z * cosA;
      const speed = 1.2 + Math.random() * 1.6;

      const vel = new THREE.Vector3(
        dirX * speed,
        0.3 + Math.random() * 0.6,
        dirZ * speed
      );

      this.particlesGroup.add(pMesh);
      this.particles.push({
        mesh: pMesh,
        vel: vel,
        life: 0.8,
        decay: 2.2 + Math.random() * 1.0
      });
    }

    // Expanding Horizontal Push Wave Ring
    const shockGeo = new THREE.RingGeometry(radius * 0.5, radius * 1.1, 24);
    shockGeo.rotateX(-Math.PI / 2);
    const shockMat = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide
    });
    const shockMesh = new THREE.Mesh(shockGeo, shockMat);
    shockMesh.position.set(pos.x, Math.max(0.02, pos.y), pos.z);
    this.particlesGroup.add(shockMesh);

    this.particles.push({
      mesh: shockMesh,
      vel: new THREE.Vector3(pushDir.x * 0.35, 0, pushDir.z * 0.35),
      isRing: true,
      life: 0.7,
      decay: 2.6
    });

    this.audio.playPuff();
  }

  /**
   * Fast, Optimized 80-Ball Bouncing Physics with True Spherical Integrity
   */
  updateBallPhysics(deltaTime) {
    const numBalls = this.balls.length;
    const subSteps = 2; // High-precision sub-stepping for smooth 80-ball physics
    const dt = deltaTime / subSteps;
    const maxSpeedLimit = 2.4;

    for (let step = 0; step < subSteps; step++) {
      // 1. Single Ball Integration: Gravity, Velocity, Floor & Perimeter Wall Bounces
      for (let i = 0; i < numBalls; i++) {
        const b = this.balls[i];
        if (!b || !b.mesh || b.isHeld) continue;

        const pos = b.mesh.position;

        // Apply Gentle Gravity
        b.velocity.y += this.gravity * dt;

        // Clamp maximum downward fall speed
        if (b.velocity.y < -2.4) b.velocity.y = -2.4;

        // Integrate Position
        pos.addScaledVector(b.velocity, dt);

        // Floor Contact & Elastic Bouncing (pos.y <= b.radius)
        if (pos.y <= b.radius) {
          pos.y = b.radius;
          if (b.velocity.y < -0.10) {
            b.velocity.y = -b.velocity.y * b.restitution;
            b.velocity.x *= 0.97;
            b.velocity.z *= 0.97;
            b.bounces++;

            if (Math.abs(b.velocity.y) > 0.8) {
              this.audio.playClick();
            }
          } else {
            b.velocity.y = 0;
            b.velocity.x *= (1.0 - dt * 1.8);
            b.velocity.z *= (1.0 - dt * 1.8);
          }
        }

        // Arena Perimeter Wall Bounces
        if (pos.x < this.bounds.minX + b.radius) {
          pos.x = this.bounds.minX + b.radius;
          b.velocity.x = Math.abs(b.velocity.x) * 0.85;
        } else if (pos.x > this.bounds.maxX - b.radius) {
          pos.x = this.bounds.maxX - b.radius;
          b.velocity.x = -Math.abs(b.velocity.x) * 0.85;
        }

        if (pos.z < this.bounds.minZ + b.radius) {
          pos.z = this.bounds.minZ + b.radius;
          b.velocity.z = Math.abs(b.velocity.z) * 0.85;
        } else if (pos.z > this.bounds.maxZ - b.radius) {
          pos.z = this.bounds.maxZ - b.radius;
          b.velocity.z = -Math.abs(b.velocity.z) * 0.85;
        }

        // Ceiling bounce
        if (pos.y > this.bounds.maxY - b.radius) {
          pos.y = this.bounds.maxY - b.radius;
          b.velocity.y = -Math.abs(b.velocity.y) * 0.70;
        }

        // Air drag
        b.velocity.x *= (1.0 - dt * 0.10);
        b.velocity.z *= (1.0 - dt * 0.10);

        // Overall speed clamp
        const currentSpeed = b.velocity.length();
        if (currentSpeed > maxSpeedLimit) {
          b.velocity.multiplyScalar(maxSpeedLimit / currentSpeed);
        }
      }

      // 2. Pairwise Elastic Ball-to-Ball Collisions (with Fast Bounding Box Early Exit)
      for (let i = 0; i < numBalls; i++) {
        const b1 = this.balls[i];
        if (!b1 || !b1.mesh || b1.isHeld) continue;
        const p1 = b1.mesh.position;
        const r1 = b1.radius;

        for (let j = i + 1; j < numBalls; j++) {
          const b2 = this.balls[j];
          if (!b2 || !b2.mesh || b2.isHeld) continue;
          const p2 = b2.mesh.position;
          const minDist = r1 + b2.radius;

          // Fast Manhattan / Bounding Box Rejection
          const dx = p1.x - p2.x;
          if (Math.abs(dx) > minDist) continue;
          const dz = p1.z - p2.z;
          if (Math.abs(dz) > minDist) continue;
          const dy = p1.y - p2.y;
          if (Math.abs(dy) > minDist) continue;

          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < minDist * minDist && distSq > 0.000001) {
            const dist = Math.sqrt(distSq);
            const nx = dx / dist;
            const ny = dy / dist;
            const nz = dz / dist;

            // Positional overlap resolution based on masses
            const overlap = minDist - dist;
            const totalMass = b1.mass + b2.mass;
            const m1Ratio = b2.mass / totalMass;
            const m2Ratio = b1.mass / totalMass;

            p1.x += nx * overlap * m1Ratio;
            p1.y += ny * overlap * m1Ratio;
            p1.z += nz * overlap * m1Ratio;

            p2.x -= nx * overlap * m2Ratio;
            p2.y -= ny * overlap * m2Ratio;
            p2.z -= nz * overlap * m2Ratio;

            // Relative velocity
            const vRelX = b1.velocity.x - b2.velocity.x;
            const vRelY = b1.velocity.y - b2.velocity.y;
            const vRelZ = b1.velocity.z - b2.velocity.z;

            // Normal relative speed
            const vNormal = vRelX * nx + vRelY * ny + vRelZ * nz;

            // Only apply impulse if balls are moving toward each other
            if (vNormal < 0) {
              const restitution = Math.min(b1.restitution, b2.restitution) * 0.75;
              const impulse = -(1.0 + restitution) * vNormal / (1.0 / b1.mass + 1.0 / b2.mass) * 0.80;

              b1.velocity.x += (impulse / b1.mass) * nx;
              b1.velocity.y += (impulse / b1.mass) * ny;
              b1.velocity.z += (impulse / b1.mass) * nz;

              b2.velocity.x -= (impulse / b2.mass) * nx;
              b2.velocity.y -= (impulse / b2.mass) * ny;
              b2.velocity.z -= (impulse / b2.mass) * nz;

              // Clamp post-collision speed
              const s1 = b1.velocity.length();
              if (s1 > maxSpeedLimit) b1.velocity.multiplyScalar(maxSpeedLimit / s1);
              const s2 = b2.velocity.length();
              if (s2 > maxSpeedLimit) b2.velocity.multiplyScalar(maxSpeedLimit / s2);

              if (Math.abs(vNormal) > 0.8) {
                this.audio.playClick();
              }
            }
          }
        }
      }
    }

    // 3. 3D Rolling Spin with Pure Spherical Integrity (scale always exactly 1, 1, 1)
    for (let i = 0; i < numBalls; i++) {
      const b = this.balls[i];
      if (!b || !b.mesh) continue;

      // 3D Rolling spin based on velocity
      const speed = b.velocity.length();
      if (speed > 0.05) {
        const rollAxis = new THREE.Vector3(-b.velocity.z, 0, b.velocity.x).normalize();
        b.mesh.rotateOnAxis(rollAxis, (speed / b.radius) * deltaTime);
      }

      // Guarantee perfect spherical shape (no non-uniform scale deformation!)
      b.mesh.scale.set(1.0, 1.0, 1.0);
    }
  }

  /**
   * Spacetime Target & Interception Predictor:
   * Supports both Outward Ejections (Opponent balls) and Inward Keep-In Nudges (Own balls).
   */
  predictInterception(ball, currentTcp, basePos, targetDir) {
    const simPos = ball.mesh.position.clone();
    const simVel = ball.velocity.clone();
    const dt = 0.033;
    const maxSteps = 30;
    const armSpeed = 6.0;

    for (let step = 0; step <= maxSteps; step++) {
      const t = step * dt;
      if (step > 0) {
        simVel.y += this.gravity * dt;
        simPos.addScaledVector(simVel, dt);

        if (simPos.y <= ball.radius) {
          simPos.y = ball.radius;
          simVel.y = Math.abs(simVel.y) * ball.restitution;
        }
      }

      const dx = simPos.x - basePos.x;
      const dz = simPos.z - basePos.z;
      const hDist = Math.hypot(dx, dz);

      if (hDist <= this.maxDefenseRadius + 0.20 && hDist >= 0.15 && simPos.y <= 1.55) {
        // Strike target: position TCP slightly behind the ball relative to targetDir
        const strikePos = simPos.clone().addScaledVector(targetDir, -ball.radius * 0.45);
        strikePos.y = Math.max(0.040, simPos.y);

        const distFromTcp = currentTcp.distanceTo(strikePos);
        const timeNeeded = distFromTcp / armSpeed;
        if (step === 0 || timeNeeded <= (t + 0.25)) {
          return {
            interceptPos: strikePos,
            targetDir: targetDir,
            time: t,
            dist: distFromTcp
          };
        }
      }
    }

    // Fallback: direct lead clamped within reach envelope of this arm
    const fallbackPos = ball.mesh.position.clone().addScaledVector(ball.velocity, 0.10);
    const offset = new THREE.Vector3().subVectors(fallbackPos, basePos);
    const fbH = Math.hypot(offset.x, offset.z);
    const safeH = Math.max(0.20, Math.min(1.30, fbH));
    if (fbH > 0.001) {
      fallbackPos.x = basePos.x + (offset.x / fbH) * safeH;
      fallbackPos.z = basePos.z + (offset.z / fbH) * safeH;
    }
    fallbackPos.y = Math.max(0.040, Math.min(1.30, fallbackPos.y));

    const strikeFallback = fallbackPos.clone().addScaledVector(targetDir, -ball.radius * 0.45);
    strikeFallback.y = Math.max(0.040, strikeFallback.y);

    return {
      interceptPos: strikeFallback,
      targetDir: targetDir,
      time: 0.15,
      dist: currentTcp.distanceTo(strikeFallback)
    };
  }

  update(deltaTime) {
    const now = performance.now();

    // 1. Particle Effects Simulation
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= deltaTime * p.decay;

      if (p.isRing) {
        p.mesh.position.addScaledVector(p.vel, deltaTime);
        p.mesh.scale.multiplyScalar(1.0 + deltaTime * 5.0);
        p.mesh.material.opacity = Math.max(0, p.life);
      } else {
        p.mesh.position.addScaledVector(p.vel, deltaTime);
        p.vel.y -= 0.6 * deltaTime;
        p.mesh.material.opacity = Math.max(0, p.life);
        p.mesh.scale.multiplyScalar(Math.max(0.01, p.life));
      }

      if (p.life <= 0) {
        this.particlesGroup.remove(p.mesh);
        p.mesh.geometry.dispose();
        p.mesh.material.dispose();
        this.particles.splice(i, 1);
      }
    }

    // 2. Comprehensive 3D Bouncing Physics with True Spheres
    this.updateBallPhysics(deltaTime);

    // Maintain steady active population of 80 balls
    if (this.balls.length < this.targetFlockSize) {
      this.spawnTimer += deltaTime;
      if (this.spawnTimer >= this.spawnInterval) {
        this.spawnTimer = 0;
        this.spawnBall(true);
      }
    }

    // 3. Multi-Arm Push Contact, Grab & Throw for Stuck Balls
    for (let rIdx = 0; rIdx < this.robots.length; rIdx++) {
      const robot = this.robots[rIdx];
      const ap = this.armPursuits[rIdx];
      const armTeam = ap.teamId;
      const basePos = ap.basePos;
      robot.group.getWorldPosition(basePos);

      const tcpPos = new THREE.Vector3();
      robot.getTCPWorldPosition(tcpPos);
      const armColliders = robot.getArmColliders();

      // Check stuck status for all opponent balls in this arm's zone
      for (let i = 0; i < this.balls.length; i++) {
        const b = this.balls[i];
        if (!b || !b.mesh || b.isHeld) continue;
        const pos = b.mesh.position;

        const isOwnColor = (b.teamId === armTeam);
        const dxBase = pos.x - basePos.x;
        const dzBase = pos.z - basePos.z;
        const distBase = Math.hypot(dxBase, dzBase);

        // Stuck detection: opponent ball lingering in circle without leaving
        if (!isOwnColor && distBase <= 1.35) {
          const speed = b.velocity.length();
          if (speed < 0.60) {
            b.stuckTime = (b.stuckTime || 0) + deltaTime;
          } else {
            b.stuckTime = Math.max(0, (b.stuckTime || 0) - deltaTime * 0.5);
          }

          // If ball has been stuck for > 0.35s, and arm is idle, initiate Grab & Throw!
          if (b.stuckTime > 0.35 && ap.throwState === 'IDLE') {
            ap.throwState = 'APPROACH';
            ap.throwBall = b;
            ap.throwTimer = 0;
            robot.setGripper(0.0); // Open wide!
          }
        }

        // --- Active Gripper / TCP Push Contact Zone (Normal Non-Stuck Pushes) ---
        if (ap.throwState === 'IDLE') {
          const distToTcp = pos.distanceTo(tcpPos);
          const pushThreshold = b.radius + 0.11;
          const canBePushed = (now - b.lastPushTime) > 120;

          if (distToTcp <= pushThreshold && pos.y >= 0.02 && canBePushed) {
            b.lastPushTime = now;

            let pushDir;
            let pushForce;

            if (!isOwnColor) {
              // EJECT OPPONENT BALL
              const oppBase = this.armPursuits[b.teamId]?.basePos || new THREE.Vector3(0, 0, 0);
              const dxOpp = oppBase.x - pos.x;
              const dzOpp = oppBase.z - pos.z;
              const dOpp = Math.hypot(dxOpp, dzOpp);

              if (dOpp > 0.1) {
                pushDir = new THREE.Vector3(dxOpp / dOpp, 0, dzOpp / dOpp);
              } else {
                pushDir = distBase > 0.001 ? new THREE.Vector3(dxBase / distBase, 0, dzBase / distBase) : new THREE.Vector3(1, 0, 0);
              }
              pushForce = 2.8 + Math.random() * 0.8;
              ap.ejectionsCount++;
              this.score += 50;
            } else {
              // RETAIN OWN BALL
              const dxIn = basePos.x - pos.x;
              const dzIn = basePos.z - pos.z;
              const dIn = Math.hypot(dxIn, dzIn);
              pushDir = dIn > 0.001 ? new THREE.Vector3(dxIn / dIn, 0, dzIn / dIn) : new THREE.Vector3(0, 0, 0);
              pushForce = 1.3 + Math.random() * 0.4;
              ap.retainsCount++;
              this.score += 20;
            }

            b.velocity.x = pushDir.x * pushForce;
            b.velocity.z = pushDir.z * pushForce;
            b.velocity.y = 0.50 + Math.random() * 0.30;
            b.bounces++;

            this.pushCount++;
            this.combo++;
            this.lastPushTime = now;

            this.createPushRippleEffect(pos, b.color, b.radius, pushDir);
            robot.setGripper(0.85);
            setTimeout(() => robot.setGripper(0.0), 140);
          }
        }

        // --- Physical Robot Arm Segment Collisions & Deflections ---
        if (!b.isHeld) {
          for (const col of armColliders) {
            let closestPoint = null;
            const colRadius = col.radius;

            if (col.type === 'sphere') {
              closestPoint = col.center;
            } else if (col.type === 'capsule') {
              const ab = new THREE.Vector3().subVectors(col.p2, col.p1);
              const apVec = new THREE.Vector3().subVectors(pos, col.p1);
              const abLenSq = ab.lengthSq();
              const t = abLenSq > 0.0001 ? Math.max(0, Math.min(1, apVec.dot(ab) / abLenSq)) : 0;
              closestPoint = new THREE.Vector3().copy(col.p1).addScaledVector(ab, t);
            }

            if (closestPoint) {
              const diff = new THREE.Vector3().subVectors(pos, closestPoint);
              const dist = diff.length();
              const minDist = colRadius + b.radius;

              if (dist < minDist && dist > 0.0001) {
                const normal = diff.clone().normalize();
                pos.copy(closestPoint).addScaledVector(normal, minDist + 0.006);
                b.mesh.position.copy(pos);

                const outBaseDir = distBase > 0.001 ? new THREE.Vector3(dxBase / distBase, 0, dzBase / distBase) : normal;
                const vDotN = b.velocity.dot(normal);
                if (vDotN < 0) {
                  b.velocity.addScaledVector(normal, -(1.0 + b.restitution) * vDotN);
                }
                b.velocity.addScaledVector(outBaseDir, 0.70 + Math.random() * 0.35);
                b.bounces++;
                this.audio.playClick();
              }
            }
          }
        }
      }

      // --- GRAB & THROW STATE MACHINE FOR THIS ARM ---
      if (ap.throwState === 'APPROACH') {
        robot.setGripper(0.0); // Open wide!
        ap.throwTimer += deltaTime;

        // Failsafe timeout or target invalidation: if grasp takes > 1.1s, apply impulse and reset to IDLE
        if (!ap.throwBall || !ap.throwBall.mesh || ap.throwBall.isHeld || ap.throwTimer > 1.1) {
          if (ap.throwBall && ap.throwBall.mesh) {
            const outDir = new THREE.Vector3(ap.throwBall.mesh.position.x - basePos.x, 0, ap.throwBall.mesh.position.z - basePos.z).normalize();
            ap.throwBall.velocity.addScaledVector(outDir, 2.6);
            ap.throwBall.velocity.y = 0.55;
            ap.throwBall.stuckTime = 0;
          }
          ap.throwBall = null;
          ap.throwState = 'IDLE';
        } else {
          // Track directly onto ball center
          const ballPos = ap.throwBall.mesh.position;
          ap.pursuitTarget.set(ballPos.x, Math.max(0.040, ballPos.y), ballPos.z);

          const distToBall = tcpPos.distanceTo(ballPos);
          if (distToBall <= ap.throwBall.radius + 0.13) {
            // CLAMP / GRASP!
            robot.setGripper(1.0);
            ap.heldBall = ap.throwBall;
            ap.heldBall.isHeld = true;
            ap.heldBall.velocity.set(0, 0, 0);
            this.audio.playClick();
            ap.throwState = 'WINDUP';
            ap.throwTimer = 0.22;

            // Compute throw direction toward opponent station
            const oppBase = this.armPursuits[ap.heldBall.teamId]?.basePos || new THREE.Vector3(0, 0, 0);
            ap.targetThrowDir.set(oppBase.x - ap.basePos.x, 0, oppBase.z - ap.basePos.z).normalize();
            if (ap.targetThrowDir.lengthSq() < 0.001) {
              ap.targetThrowDir.set(-ap.basePos.x, 0, -ap.basePos.z).normalize();
            }
          }
        }
      } else if (ap.throwState === 'WINDUP') {
        // Cock arm back and up into high wind-up position
        if (ap.heldBall && ap.heldBall.mesh) {
          ap.heldBall.mesh.position.copy(tcpPos);
          ap.heldBall.velocity.set(0, 0, 0);
        }

        const windUpPos = ap.basePos.clone().add(new THREE.Vector3(0, 0.88, 0)).addScaledVector(ap.targetThrowDir, -0.30);
        ap.pursuitTarget.copy(windUpPos);

        ap.throwTimer -= deltaTime;
        if (ap.throwTimer <= 0) {
          // Transition to forward power swing
          ap.throwState = 'RELEASE';
          ap.throwTimer = 0.12;
        }
      } else if (ap.throwState === 'RELEASE') {
        if (ap.heldBall && ap.heldBall.mesh) {
          ap.heldBall.mesh.position.copy(tcpPos);
          ap.heldBall.velocity.set(0, 0, 0);
        }

        const swingPos = ap.basePos.clone().add(new THREE.Vector3(0, 0.52, 0)).addScaledVector(ap.targetThrowDir, 1.10);
        ap.pursuitTarget.copy(swingPos);

        ap.throwTimer -= deltaTime;
        if (ap.throwTimer <= 0) {
          // POWER THROW RELEASE!
          robot.setGripper(0.0); // Open wide to release!

          if (ap.heldBall && ap.heldBall.mesh) {
            const throwPower = 5.6 + Math.random() * 0.8;
            ap.heldBall.velocity.x = ap.targetThrowDir.x * throwPower;
            ap.heldBall.velocity.z = ap.targetThrowDir.z * throwPower;
            ap.heldBall.velocity.y = 1.30 + Math.random() * 0.35; // Lofty catapult arc!
            ap.heldBall.bounces++;
            ap.heldBall.stuckTime = 0;
            ap.heldBall.isHeld = false;
            ap.heldBall.lastPushTime = now + 400;

            this.createPushRippleEffect(tcpPos, ap.heldBall.color, ap.heldBall.radius, ap.targetThrowDir);
            this.audio.playPuff();
            ap.ejectionsCount++;
            this.pushCount++;
            this.score += 100;
          }

          ap.heldBall = null;
          ap.throwBall = null;
          ap.throwState = 'IDLE';
        }
      }
    }

    // 4. Cooperative 4-Arm Intelligent Dynamic Targeting: Keep Own / Eject Opponents
    let primaryTargetBall = null;

    if (this.enabled) {
      for (let k = 0; k < this.armPursuits.length; k++) {
        const ap = this.armPursuits[k];
        const armTeam = ap.teamId;
        const robot = ap.robot;
        const kinematics = this.kinematicsList[k] || this.kinematicsList[0];
        const tcpPos = new THREE.Vector3();
        robot.getTCPWorldPosition(tcpPos);
        robot.group.getWorldPosition(ap.basePos);

        // If arm is currently performing Grab & Throw, skip regular targeting pursuit
        if (ap.throwState !== 'IDLE') {
          // Smooth tracking towards throw waypoints
          const smoothTime = ap.throwState === 'RELEASE' ? 0.030 : 0.048;
          const maxSpeed = ap.throwState === 'RELEASE' ? 9.5 : 7.2;

          const omega = 2.0 / smoothTime;
          const x = omega * deltaTime;
          const exp = 1.0 / (1.0 + x + 0.48 * x * x + 0.235 * x * x * x);

          const change = new THREE.Vector3().subVectors(ap.pursuitPos, ap.pursuitTarget);
          const originalTo = ap.pursuitTarget.clone();

          const maxChange = maxSpeed * smoothTime;
          change.clampLength(0, maxChange);
          const clampedTarget = ap.pursuitPos.clone().sub(change);

          const temp = new THREE.Vector3().addVectors(
            ap.pursuitVelocity,
            change.clone().multiplyScalar(omega)
          ).multiplyScalar(deltaTime);

          ap.pursuitVelocity.sub(temp.clone().multiplyScalar(omega)).multiplyScalar(exp);
          const newPos = clampedTarget.clone().add(change.add(temp).multiplyScalar(exp));

          if (originalTo.clone().sub(ap.pursuitPos).dot(newPos.clone().sub(originalTo)) > 0) {
            newPos.copy(originalTo);
            ap.pursuitVelocity.set(0, 0, 0);
          }
          ap.pursuitPos.copy(newPos);

          kinematics.solveIK(ap.pursuitPos, 18, 0.002, false);
          continue;
        }

        // Validate locked target for this arm
        if (ap.lockedTargetBall) {
          const b = ap.lockedTargetBall;
          const bIndex = this.balls.indexOf(b);
          const pos = b && b.mesh ? b.mesh.position : null;
          const hDist = pos ? Math.hypot(pos.x - ap.basePos.x, pos.z - ap.basePos.z) : 999;
          const isStillValid = bIndex !== -1 && !b.isHeld && hDist <= 1.55 && pos.y >= 0.02 && pos.y <= 1.85;
          if (!isStillValid) {
            ap.lockedTargetBall = null;
          }
        }

        let bestTarget = null;
        let lowestScore = Infinity;

        for (let i = 0; i < this.balls.length; i++) {
          const b = this.balls[i];
          if (!b || !b.mesh || b.isHeld) continue;
          const pos = b.mesh.position;
          const hDist = Math.hypot(pos.x - ap.basePos.x, pos.z - ap.basePos.z);

          // Only consider balls within reachable perimeter (r <= 1.55m)
          if (hDist > 1.55 || pos.y < 0.02) continue;

          const isOwnColor = (b.teamId === armTeam);

          // Determine Strategic Direction & Priority for this ball
          let targetDir;
          let priorityScore = 0;

          if (!isOwnColor) {
            if (hDist > 1.40) continue; // Outside this arm's defense circle

            const oppBase = this.armPursuits[b.teamId]?.basePos || new THREE.Vector3(0, 0, 0);
            const dxOpp = oppBase.x - pos.x;
            const dzOpp = oppBase.z - pos.z;
            const dOpp = Math.hypot(dxOpp, dzOpp);
            targetDir = dOpp > 0.001 ? new THREE.Vector3(dxOpp / dOpp, 0, dzOpp / dOpp) : new THREE.Vector3(1, 0, 0);

            // Foreign balls inside the circle have absolute top priority (score ~0.0 to 0.4)
            // Balls deeper inside circle (smaller hDist) have lower score (higher urgency)
            priorityScore = 0.05 + (hDist / 1.40) * 0.35;
          } else {
            // Own balls: keep inside circle
            if (hDist <= 0.85) continue; // Already safely nestled inside core base
            if (hDist > 1.40) continue;

            const dxIn = ap.basePos.x - pos.x;
            const dzIn = ap.basePos.z - pos.z;
            const dIn = Math.hypot(dxIn, dzIn);
            targetDir = dIn > 0.001 ? new THREE.Vector3(dxIn / dIn, 0, dzIn / dIn) : new THREE.Vector3(0, 0, 0);

            // Own color recovery has lower priority than ejecting invaders
            priorityScore = 2.2 + (1.40 - hDist) * 0.4;
          }

          const prediction = this.predictInterception(b, tcpPos, ap.basePos, targetDir);
          if (prediction) {
            let score = prediction.time * 1.2 + prediction.dist * 0.8 + priorityScore;

            if (b === ap.lockedTargetBall) {
              score -= 0.35; // Hysteresis bonus
            }

            if (score < lowestScore) {
              lowestScore = score;
              bestTarget = {
                ball: b,
                interceptPos: prediction.interceptPos,
                time: prediction.time
              };
            }
          }
        }

        if (bestTarget) {
          ap.lockedTargetBall = bestTarget.ball;
          ap.currentTargetBall = bestTarget.ball;
          ap.pursuitTarget.copy(bestTarget.interceptPos);
          if (!primaryTargetBall) primaryTargetBall = bestTarget.ball;
        } else {
          ap.currentTargetBall = null;
          ap.lockedTargetBall = null;
          const dirToCenter = new THREE.Vector3(-ap.basePos.x, 0, -ap.basePos.z).normalize();
          const restX = ap.basePos.x + dirToCenter.x * 0.45;
          const restZ = ap.basePos.z + dirToCenter.z * 0.45;
          const restY = 0.50;
          ap.pursuitTarget.set(restX, restY, restZ);
        }

        // Fast, agile critically damped Cartesian pursuit (SmoothDamp)
        const smoothTime = 0.048;
        const maxSpeed = 6.8;

        const omega = 2.0 / smoothTime;
        const x = omega * deltaTime;
        const exp = 1.0 / (1.0 + x + 0.48 * x * x + 0.235 * x * x * x);

        const change = new THREE.Vector3().subVectors(ap.pursuitPos, ap.pursuitTarget);
        const originalTo = ap.pursuitTarget.clone();

        const maxChange = maxSpeed * smoothTime;
        change.clampLength(0, maxChange);
        const clampedTarget = ap.pursuitPos.clone().sub(change);

        const temp = new THREE.Vector3().addVectors(
          ap.pursuitVelocity,
          change.clone().multiplyScalar(omega)
        ).multiplyScalar(deltaTime);

        ap.pursuitVelocity.sub(temp.clone().multiplyScalar(omega)).multiplyScalar(exp);
        const newPos = clampedTarget.clone().add(change.add(temp).multiplyScalar(exp));

        if (originalTo.clone().sub(ap.pursuitPos).dot(newPos.clone().sub(originalTo)) > 0) {
          newPos.copy(originalTo);
          ap.pursuitVelocity.set(0, 0, 0);
        }
        ap.pursuitPos.copy(newPos);

        kinematics.solveIK(ap.pursuitPos, 18, 0.002, false);

        if (ap.currentTargetBall) {
          robot.setGripper(0.0);
        }
      }

      // Update Holographic Reticle
      if (this.targetReticle) {
        if (primaryTargetBall && primaryTargetBall.mesh) {
          this.targetReticle.visible = true;
          this.targetReticle.position.copy(primaryTargetBall.mesh.position);
          this.targetReticle.lookAt(this.targetReticle.position.clone().add(new THREE.Vector3(0, 1, 0)));
          this.reticleMesh.rotation.z += deltaTime * 5.0;
        } else {
          this.targetReticle.visible = false;
        }
      }
    }
  }

  /**
   * Returns comprehensive multi-arm territory statistics
   */
  getStats() {
    // Count how many balls of each team are currently inside each arm's 1.35m perimeter circle
    const territoryCounts = [0, 0, 0, 0];
    const foreignCounts = [0, 0, 0, 0];

    for (let i = 0; i < this.balls.length; i++) {
      const b = this.balls[i];
      if (!b || !b.mesh) continue;
      const pos = b.mesh.position;

      for (let k = 0; k < this.armPursuits.length; k++) {
        const ap = this.armPursuits[k];
        const dist = Math.hypot(pos.x - ap.basePos.x, pos.z - ap.basePos.z);
        if (dist <= 1.35) {
          if (b.teamId === k) {
            territoryCounts[k]++;
          } else {
            foreignCounts[k]++;
          }
        }
      }
    }

    return {
      score: this.score,
      pushCount: this.pushCount,
      burstCount: this.pushCount,
      combo: this.combo,
      activeBalls: this.balls.length,
      territoryCounts,
      foreignCounts,
      armPursuits: this.armPursuits
    };
  }
}


