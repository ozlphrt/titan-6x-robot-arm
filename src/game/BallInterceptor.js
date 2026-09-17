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

function createBouncyBallTexture(styleIndex, color1Hex, color2Hex) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Base Solid Color
  ctx.fillStyle = color1Hex;
  ctx.fillRect(0, 0, 512, 256);

  if (styleIndex === 0) {
    // Equator Racing Stripe Band
    ctx.fillStyle = color2Hex;
    ctx.fillRect(0, 90, 512, 76);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 114, 512, 28);
  } else if (styleIndex === 1) {
    // Classic Arcade Star Superball
    ctx.fillStyle = color2Hex;
    ctx.fillRect(0, 80, 512, 96);
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < 6; i++) {
      drawStar(ctx, 42 + i * 85, 128, 5, 26, 12);
    }
  } else if (styleIndex === 2) {
    // Swirl Wave Playground Pattern
    ctx.fillStyle = color2Hex;
    ctx.beginPath();
    ctx.moveTo(0, 128);
    for (let x = 0; x <= 512; x += 8) {
      ctx.lineTo(x, 128 + Math.sin((x / 512) * Math.PI * 4) * 65);
    }
    ctx.lineTo(512, 256);
    ctx.lineTo(0, 256);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(0, 128);
    for (let x = 0; x <= 512; x += 8) {
      ctx.lineTo(x, 128 + Math.sin((x / 512) * Math.PI * 4) * 65);
    }
    ctx.stroke();
  } else {
    // Dual Tone Vibrant Hemisphere
    ctx.fillStyle = color2Hex;
    ctx.fillRect(0, 128, 512, 128);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 120, 512, 16);
  }

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

    // 4 Team Color Themes Matching the 4 Robot Arms
    this.teamThemes = [
      { id: 0, name: 'ALPHA (ARM 1)', label: 'Yellow', primary: '#ffb700', secondary: '#111111', hex: 0xffb700 }, // Fanuc Yellow
      { id: 1, name: 'BETA (ARM 2)', label: 'Orange', primary: '#ff5500', secondary: '#111111', hex: 0xff5500 }, // KUKA Orange
      { id: 2, name: 'GAMMA (ARM 3)', label: 'White', primary: '#f8fafc', secondary: '#475569', hex: 0xf8fafc }, // ABB White
      { id: 3, name: 'DELTA (ARM 4)', label: 'Cyan', primary: '#00e5ff', secondary: '#002244', hex: 0x00e5ff }  // Cyber Cyan
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
    this.teamTextures = this.teamThemes.map((theme) => {
      return [
        createBouncyBallTexture(0, theme.primary, theme.secondary),
        createBouncyBallTexture(1, theme.primary, theme.secondary),
        createBouncyBallTexture(2, theme.primary, theme.secondary),
        createBouncyBallTexture(3, theme.primary, theme.secondary)
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
      roughness: 0.15,
      metalness: 0.05,
      clearcoat: 0.9,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95
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
        if (!b || !b.mesh) continue;

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
        if (!b1 || !b1.mesh) continue;
        const p1 = b1.mesh.position;
        const r1 = b1.radius;

        for (let j = i + 1; j < numBalls; j++) {
          const b2 = this.balls[j];
          if (!b2 || !b2.mesh) continue;
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
    const dt = 0.035;
    const maxSteps = 35;
    const armSpeed = 5.5;

    for (let step = 1; step <= maxSteps; step++) {
      const t = step * dt;
      simVel.y += this.gravity * dt;
      simPos.addScaledVector(simVel, dt);

      if (simPos.y <= ball.radius) {
        simPos.y = ball.radius;
        simVel.y = Math.abs(simVel.y) * ball.restitution;
      }

      const dx = simPos.x - basePos.x;
      const dz = simPos.z - basePos.z;
      const hDist = Math.hypot(dx, dz);

      if (hDist <= this.maxDefenseRadius + 0.15 && hDist >= this.minWorkspaceRadius && simPos.y >= 0.08 && simPos.y <= 1.45) {
        // Strike target: position TCP slightly behind the ball relative to targetDir
        const strikePos = simPos.clone().addScaledVector(targetDir, -ball.radius * 0.40);
        strikePos.y = Math.max(0.08, strikePos.y);

        const distFromTcp = currentTcp.distanceTo(strikePos);
        const timeNeeded = distFromTcp / armSpeed;
        if (timeNeeded <= (t + 0.18)) {
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
    const fallbackPos = ball.mesh.position.clone().addScaledVector(ball.velocity, 0.12);
    const offset = new THREE.Vector3().subVectors(fallbackPos, basePos);
    const fbH = Math.hypot(offset.x, offset.z);
    const safeH = Math.max(0.20, Math.min(1.25, fbH));
    if (fbH > 0.001) {
      fallbackPos.x = basePos.x + (offset.x / fbH) * safeH;
      fallbackPos.z = basePos.z + (offset.z / fbH) * safeH;
    }
    fallbackPos.y = Math.max(0.10, Math.min(1.30, fallbackPos.y));

    const strikeFallback = fallbackPos.clone().addScaledVector(targetDir, -ball.radius * 0.40);
    strikeFallback.y = Math.max(0.08, strikeFallback.y);

    return {
      interceptPos: strikeFallback,
      targetDir: targetDir,
      time: 0.20,
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

    // 3. Multi-Arm Push Contact & Circle Strategy (Keep Own Color / Eject Opponents)
    for (let rIdx = 0; rIdx < this.robots.length; rIdx++) {
      const robot = this.robots[rIdx];
      const ap = this.armPursuits[rIdx];
      const armTeam = ap.teamId;
      const basePos = ap.basePos;
      robot.group.getWorldPosition(basePos);

      const tcpPos = new THREE.Vector3();
      robot.getTCPWorldPosition(tcpPos);
      const armColliders = robot.getArmColliders();

      for (let i = 0; i < this.balls.length; i++) {
        const b = this.balls[i];
        if (!b || !b.mesh) continue;
        const pos = b.mesh.position;

        const isOwnColor = (b.teamId === armTeam);

        // Distance from this arm base
        const dxBase = pos.x - basePos.x;
        const dzBase = pos.z - basePos.z;
        const distBase = Math.hypot(dxBase, dzBase);

        // --- Active Gripper / TCP Push Contact Zone ---
        const distToTcp = pos.distanceTo(tcpPos);
        const pushThreshold = b.radius + 0.085;
        const canBePushed = (now - b.lastPushTime) > 240;

        if (distToTcp <= pushThreshold && pos.y > 0.04 && canBePushed) {
          b.lastPushTime = now;

          let pushDir;
          let pushForce;

          if (!isOwnColor) {
            // EJECT OPPONENT BALL: push towards opponent's home base or out toward center
            const oppBase = this.armPursuits[b.teamId]?.basePos || new THREE.Vector3(0, 0, 0);
            const dxOpp = oppBase.x - pos.x;
            const dzOpp = oppBase.z - pos.z;
            const dOpp = Math.hypot(dxOpp, dzOpp);

            if (dOpp > 0.1) {
              pushDir = new THREE.Vector3(dxOpp / dOpp, 0, dzOpp / dOpp);
            } else {
              pushDir = distBase > 0.001 ? new THREE.Vector3(dxBase / distBase, 0, dzBase / distBase) : new THREE.Vector3(1, 0, 0);
            }
            pushForce = 2.4 + Math.random() * 0.7;
            ap.ejectionsCount++;
            this.score += 50;
          } else {
            // RETAIN OWN BALL: if near/past perimeter, push back INWARD toward station base!
            const dxIn = basePos.x - pos.x;
            const dzIn = basePos.z - pos.z;
            const dIn = Math.hypot(dxIn, dzIn);
            pushDir = dIn > 0.001 ? new THREE.Vector3(dxIn / dIn, 0, dzIn / dIn) : new THREE.Vector3(0, 0, 0);
            pushForce = 1.2 + Math.random() * 0.4;
            ap.retainsCount++;
            this.score += 20;
          }

          // Impart push velocity
          b.velocity.x = pushDir.x * pushForce;
          b.velocity.z = pushDir.z * pushForce;
          b.velocity.y = 0.45 + Math.random() * 0.30;
          b.bounces++;

          this.pushCount++;
          this.combo++;
          this.lastPushTime = now;

          // Trigger outward ripple shockwave & tactile sound
          this.createPushRippleEffect(pos, b.color, b.radius, pushDir);

          // Cycle gripper jaws for active swatting motion
          robot.setGripper(0.85);
          setTimeout(() => robot.setGripper(0.0), 160);
        }

        // --- Physical Robot Arm Segment Collisions & Deflections ---
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
              b.velocity.addScaledVector(outBaseDir, 0.65 + Math.random() * 0.30);
              b.bounces++;
              this.audio.playClick();
            }
          }
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

        // Validate locked target for this arm
        if (ap.lockedTargetBall) {
          const b = ap.lockedTargetBall;
          const bIndex = this.balls.indexOf(b);
          const pos = b ? b.mesh.position : null;
          const hDist = pos ? Math.hypot(pos.x - ap.basePos.x, pos.z - ap.basePos.z) : 999;
          const isStillValid = bIndex !== -1 && hDist <= 1.55 && pos.y >= 0.06 && pos.y <= 1.65;
          if (!isStillValid) {
            ap.lockedTargetBall = null;
          }
        }

        let bestTarget = null;
        let lowestScore = Infinity;

        for (let i = 0; i < this.balls.length; i++) {
          const b = this.balls[i];
          const pos = b.mesh.position;
          const hDist = Math.hypot(pos.x - ap.basePos.x, pos.z - ap.basePos.z);

          // Only consider balls within reachable perimeter (r <= 1.50m)
          if (hDist > 1.50 || pos.y < 0.06) continue;

          const isOwnColor = (b.teamId === armTeam);

          // Determine Strategic Direction for this ball
          let targetDir;
          let priorityWeight = 1.0;

          if (!isOwnColor) {
            // OPPONENT BALL: Must eject if inside circle (r <= 1.35m)
            if (hDist > 1.38) continue; // Ignore opponent balls that are already outside

            // Eject toward opponent's base station
            const oppBase = this.armPursuits[b.teamId]?.basePos || new THREE.Vector3(0, 0, 0);
            const dxOpp = oppBase.x - pos.x;
            const dzOpp = oppBase.z - pos.z;
            const dOpp = Math.hypot(dxOpp, dzOpp);
            targetDir = dOpp > 0.001 ? new THREE.Vector3(dxOpp / dOpp, 0, dzOpp / dOpp) : new THREE.Vector3(1, 0, 0);

            // Highest priority: threat increases as opponent ball gets closer to base center
            priorityWeight = 0.5 + (hDist / 1.35) * 0.8;
          } else {
            // OWN BALL: If safely inside core circle (r <= 0.85m), do NOT disturb!
            if (hDist <= 0.85) continue;

            // If escaping perimeter (0.85m < r <= 1.50m), pull / nudge back INWARD
            const dxIn = ap.basePos.x - pos.x;
            const dzIn = ap.basePos.z - pos.z;
            const dIn = Math.hypot(dxIn, dzIn);
            targetDir = dIn > 0.001 ? new THREE.Vector3(dxIn / dIn, 0, dzIn / dIn) : new THREE.Vector3(0, 0, 0);

            // Medium priority for keeping own balls in
            priorityWeight = 1.4 + (1.35 - hDist) * 0.5;
          }

          const prediction = this.predictInterception(b, tcpPos, ap.basePos, targetDir);
          if (prediction) {
            let score = prediction.time * 1.5 + prediction.dist * 1.2 + priorityWeight;

            // Lock-on hysteresis
            if (b === ap.lockedTargetBall) {
              score -= 0.45;
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
          // Guard rest position: hovering defensively inside circle perimeter facing center
          const dirToCenter = new THREE.Vector3(-ap.basePos.x, 0, -ap.basePos.z).normalize();
          const restX = ap.basePos.x + dirToCenter.x * 0.45;
          const restZ = ap.basePos.z + dirToCenter.z * 0.45;
          const restY = 0.52;
          ap.pursuitTarget.set(restX, restY, restZ);
        }

        // Fast, agile critically damped Cartesian pursuit (SmoothDamp)
        const smoothTime = 0.055;
        const maxSpeed = 6.2;

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

        // Solve IK target configuration smoothly into targetAngles for this arm
        kinematics.solveIK(ap.pursuitPos, 16, 0.002, false);

        // Keep gripper jaws open ready to push/swat
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


