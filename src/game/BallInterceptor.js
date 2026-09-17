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
    this.targetFlockSize = 5; // Multi-ball bouncing arena
    this.spawnTimer = 0;
    this.spawnInterval = 1.6;

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

    // The reach zone the robot arms actively defend (r <= 1.35m from base)
    this.maxDefenseRadius = 1.35;
    this.minWorkspaceRadius = 0.18;

    this.score = 0;
    this.burstCount = 0;
    this.combo = 0;
    this.lastBurstTime = 0;

    // Multi-Arm Pursuit States for all 4 Robot Arms
    this.armPursuits = this.robots.map((r) => {
      const basePos = new THREE.Vector3();
      r.group.getWorldPosition(basePos);
      const restPos = new THREE.Vector3().copy(basePos).add(new THREE.Vector3(0, 0.55, 0));
      return {
        robot: r,
        basePos: basePos,
        pursuitPos: restPos.clone(),
        pursuitTarget: restPos.clone(),
        pursuitVelocity: new THREE.Vector3(0, 0, 0),
        defaultRestPos: restPos.clone(),
        currentTargetBall: null,
        lockedTargetBall: null
      };
    });

    // Color pairs for vibrant bouncy rubber/plastic balls
    this.ballColorThemes = [
      { primary: '#ff1744', secondary: '#ffea00', hex: 0xff1744 }, // Hot Red & Sunny Yellow
      { primary: '#00e5ff', secondary: '#76ff03', hex: 0x00e5ff }, // Electric Cyan & Lime
      { primary: '#d500f9', secondary: '#00e5ff', hex: 0xd500f9 }, // Vivid Magenta & Cyan
      { primary: '#ff9100', secondary: '#2979ff', hex: 0xff9100 }, // Neon Orange & Deep Blue
      { primary: '#00e676', secondary: '#ffff00', hex: 0x00e676 }, // Spring Green & Yellow
      { primary: '#3d5afe', secondary: '#ff4081', hex: 0x3d5afe }  // Royal Blue & Hot Pink
    ];

    this.ballsGroup = new THREE.Group();
    this.ballsGroup.name = 'FlockingBallsGroup';
    this.scene.add(this.ballsGroup);

    this.particlesGroup = new THREE.Group();
    this.particlesGroup.name = 'BurstParticlesGroup';
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

    // Initial drop of balls above center circle
    this.spawnInitialBalls(this.targetFlockSize);
  }

  toggle() {
    this.enabled = !this.enabled;
    if (!this.enabled && this.targetReticle) {
      this.targetReticle.visible = false;
    }
    return this.enabled;
  }

  spawnInitialBalls(count = 5) {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        this.spawnBall(true);
      }, i * 400);
    }
  }

  /**
   * Spawns / drops a ball at the center circle with variable size and mass
   * Pure vertical drop (0 horizontal velocity) - horizontal speed is gained exclusively through collisions
   */
  spawnBall(dropAtCenter = true) {
    // 1. Center Circle Spawn Coordinates (purely centered above the center ground disc)
    let x = (Math.random() - 0.5) * 0.08;
    let z = (Math.random() - 0.5) * 0.08;
    let y = 1.30 + Math.random() * 0.40; // Dropping vertically from 1.30m - 1.70m height

    if (!dropAtCenter) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 0.3 + Math.random() * 0.4;
      x = Math.cos(angle) * dist;
      z = Math.sin(angle) * dist;
      y = 0.8 + Math.random() * 0.4;
    }

    // 2. Increased Variable Sizes & Reduced Lightweight Masses
    const sizeRoll = Math.random();
    let ballRadius;
    let baseRestitution;
    
    if (sizeRoll < 0.35) {
      // Small agile ball
      ballRadius = 0.068 + Math.random() * 0.018; // 0.068m - 0.086m
      baseRestitution = 0.78 + Math.random() * 0.04;
    } else if (sizeRoll < 0.75) {
      // Medium playground ball
      ballRadius = 0.090 + Math.random() * 0.024; // 0.090m - 0.114m
      baseRestitution = 0.73 + Math.random() * 0.04;
    } else {
      // Large playground ball
      ballRadius = 0.120 + Math.random() * 0.030; // 0.120m - 0.150m
      baseRestitution = 0.68 + Math.random() * 0.04;
    }

    // Reduced lightweight masses
    const mass = Math.pow(ballRadius / 0.095, 3) * 0.09;

    // 3. ZERO initial horizontal speed - gentle downward drop!
    const vx = 0.0;
    const vz = 0.0;
    const vy = -0.15; // Gentle downward initial release velocity

    const themeIndex = Math.floor(Math.random() * this.ballColorThemes.length);
    const theme = this.ballColorThemes[themeIndex];
    const styleIndex = Math.floor(Math.random() * 4);

    // High-Gloss Elastic Plastic / Rubber Ball Material
    const ballTexture = createBouncyBallTexture(styleIndex, theme.primary, theme.secondary);
    const geo = new THREE.SphereGeometry(ballRadius, 32, 32);
    const mat = new THREE.MeshPhysicalMaterial({
      map: ballTexture,
      roughness: 0.15,
      metalness: 0.04,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;

    this.ballsGroup.add(mesh);

    const ball = {
      mesh,
      radius: ballRadius,
      mass: mass,
      color: theme.hex,
      texture: ballTexture,
      velocity: new THREE.Vector3(vx, vy, vz),
      rotationAxis: new THREE.Vector3(0, 1, 0),
      rotationSpeed: 0,
      restitution: baseRestitution,
      squash: 1.0,
      bounces: 0,
      age: 0,
      burst: false
    };

    this.balls.push(ball);
    return ball;
  }

  createBurstEffect(pos, color, radius) {
    const count = 36;
    const particleGeo = new THREE.SphereGeometry(0.014, 8, 8);
    const particleMat = new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 1.0 });

    for (let i = 0; i < count; i++) {
      const pMesh = new THREE.Mesh(particleGeo, particleMat.clone());
      pMesh.position.copy(pos);

      const speed = 1.0 + Math.random() * 2.0;
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;

      const vel = new THREE.Vector3(
        Math.sin(theta) * Math.cos(phi) * speed,
        Math.sin(theta) * Math.sin(phi) * speed + 0.2,
        Math.cos(theta) * speed
      );

      this.particlesGroup.add(pMesh);
      this.particles.push({
        mesh: pMesh,
        vel: vel,
        life: 1.0,
        decay: 1.8 + Math.random() * 1.0
      });
    }

    // Expanding Shockwave Ring
    const shockGeo = new THREE.RingGeometry(radius * 0.4, radius * 0.9, 32);
    shockGeo.rotateX(-Math.PI / 2);
    const shockMat = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide
    });
    const shockMesh = new THREE.Mesh(shockGeo, shockMat);
    shockMesh.position.copy(pos);
    this.particlesGroup.add(shockMesh);

    this.particles.push({
      mesh: shockMesh,
      vel: new THREE.Vector3(0, 0, 0),
      isRing: true,
      life: 0.85,
      decay: 2.8
    });

    // Scatter nearby balls gently
    for (const other of this.balls) {
      if (other.burst) continue;
      const d = other.mesh.position.distanceTo(pos);
      if (d < 1.0 && d > 0.01) {
        const scatterDir = new THREE.Vector3().subVectors(other.mesh.position, pos).normalize();
        const impulse = (1.0 - d) * 1.2 / (other.mass || 0.10);
        other.velocity.addScaledVector(scatterDir, Math.min(impulse, 1.2));
        other.squash = 0.82;
      }
    }

    this.audio.playBurst();
  }

  /**
   * Comprehensive Bouncing Physics with Gravity, Floor Bounces, and Ball-to-Ball Elastic Collisions
   */
  updateBallPhysics(deltaTime) {
    const numBalls = this.balls.length;
    const subSteps = 3;
    const dt = deltaTime / subSteps;
    const maxSpeedLimit = 1.35; // Controlled, smooth maximum speed limit

    for (let step = 0; step < subSteps; step++) {
      // 1. Single Ball Integration: Gravity, Velocity, Floor & Perimeter Wall Bounces
      for (let i = 0; i < numBalls; i++) {
        const b = this.balls[i];
        if (b.burst) continue;

        const pos = b.mesh.position;

        // Apply Gentle Gravity
        b.velocity.y += this.gravity * dt;

        // Clamp maximum downward fall speed
        if (b.velocity.y < -2.2) b.velocity.y = -2.2;

        // Integrate Position
        pos.addScaledVector(b.velocity, dt);

        // Floor Contact & Elastic Bouncing (pos.y <= b.radius)
        if (pos.y <= b.radius) {
          pos.y = b.radius;
          if (b.velocity.y < -0.10) {
            // Pure vertical elastic bounce
            b.velocity.y = -b.velocity.y * b.restitution;
            // Floor rolling friction
            b.velocity.x *= 0.97;
            b.velocity.z *= 0.97;

            // Elastic squash deformation
            b.squash = Math.max(0.65, 1.0 - Math.abs(b.velocity.y) * 0.08);
            b.bounces++;

            if (Math.abs(b.velocity.y) > 0.6) {
              this.audio.playClick();
            }
          } else {
            // Resting / rolling on floor
            b.velocity.y = 0;
            b.velocity.x *= (1.0 - dt * 1.8);
            b.velocity.z *= (1.0 - dt * 1.8);
          }
        }

        // Arena Perimeter Wall Bounces (Keep balls bouncing within active workcell arena)
        if (pos.x < this.bounds.minX + b.radius) {
          pos.x = this.bounds.minX + b.radius;
          b.velocity.x = Math.abs(b.velocity.x) * 0.75;
          b.squash = 0.82;
        } else if (pos.x > this.bounds.maxX - b.radius) {
          pos.x = this.bounds.maxX - b.radius;
          b.velocity.x = -Math.abs(b.velocity.x) * 0.75;
          b.squash = 0.82;
        }

        if (pos.z < this.bounds.minZ + b.radius) {
          pos.z = this.bounds.minZ + b.radius;
          b.velocity.z = Math.abs(b.velocity.z) * 0.75;
          b.squash = 0.82;
        } else if (pos.z > this.bounds.maxZ - b.radius) {
          pos.z = this.bounds.maxZ - b.radius;
          b.velocity.z = -Math.abs(b.velocity.z) * 0.75;
          b.squash = 0.82;
        }

        // Ceiling bounce
        if (pos.y > this.bounds.maxY - b.radius) {
          pos.y = this.bounds.maxY - b.radius;
          b.velocity.y = -Math.abs(b.velocity.y) * 0.70;
        }

        // Air drag
        b.velocity.x *= (1.0 - dt * 0.15);
        b.velocity.z *= (1.0 - dt * 0.15);

        // Overall speed clamp
        const currentSpeed = b.velocity.length();
        if (currentSpeed > maxSpeedLimit) {
          b.velocity.multiplyScalar(maxSpeedLimit / currentSpeed);
        }
      }

      // 2. Ball-to-Ball Elastic & Inelastic Collision Physics with Conservation of Momentum
      for (let i = 0; i < numBalls; i++) {
        const b1 = this.balls[i];
        if (b1.burst) continue;

        for (let j = i + 1; j < numBalls; j++) {
          const b2 = this.balls[j];
          if (b2.burst) continue;

          const p1 = b1.mesh.position;
          const p2 = b2.mesh.position;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const distSq = dx * dx + dy * dy + dz * dz;
          const minDist = b1.radius + b2.radius;

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
              const restitution = Math.min(b1.restitution, b2.restitution) * 0.70;
              const impulse = -(1.0 + restitution) * vNormal / (1.0 / b1.mass + 1.0 / b2.mass) * 0.75;

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

              // Elastic deformation / squash
              const squashAmt = Math.max(0.65, 1.0 - Math.abs(vNormal) * 0.08);
              b1.squash = Math.min(b1.squash, squashAmt);
              b2.squash = Math.min(b2.squash, squashAmt);

              if (Math.abs(vNormal) > 0.5) {
                this.audio.playClick();
              }
            }
          }
        }
      }
    }

    // 3. Visual Rotation & Squash Recovery
    for (let i = 0; i < numBalls; i++) {
      const b = this.balls[i];
      if (b.burst) continue;

      // 3D Rolling spin based on velocity
      const speed = b.velocity.length();
      if (speed > 0.05) {
        const rollAxis = new THREE.Vector3(-b.velocity.z, 0, b.velocity.x).normalize();
        b.mesh.rotateOnAxis(rollAxis, (speed / b.radius) * deltaTime);
      }

      // Squash recovery
      if (b.squash < 1.0) {
        b.squash += (1.0 - b.squash) * Math.min(1.0, deltaTime * 14.0);
        const stretch = 1.0 + (1.0 - b.squash) * 0.35;
        b.mesh.scale.set(stretch, b.squash, stretch);
      } else {
        b.mesh.scale.set(1.0, 1.0, 1.0);
      }
    }
  }

  /**
   * Spacetime Rendezvous Trajectory Predictor for Bouncing Ball with Gravity
   */
  predictInterception(ball, currentTcp, basePos = new THREE.Vector3(0, 0, 0)) {
    const simPos = ball.mesh.position.clone();
    const simVel = ball.velocity.clone();
    const dt = 0.035; // 35ms simulation slice
    const maxSteps = 45; // ~1.55 seconds lookahead
    const armSpeed = 4.5; // m/s effective robotic intercept capability

    for (let step = 1; step <= maxSteps; step++) {
      const t = step * dt;
      // Ballistic step with gravity
      simVel.y += this.gravity * dt;
      simPos.addScaledVector(simVel, dt);

      // Floor bounce in simulation
      if (simPos.y <= ball.radius) {
        simPos.y = ball.radius;
        simVel.y = Math.abs(simVel.y) * ball.restitution;
      }

      // Check if candidate point is within physical reachable defense envelope of this arm
      const hDist = Math.hypot(simPos.x - basePos.x, simPos.z - basePos.z);
      if (hDist <= 1.30 && hDist >= 0.15 && simPos.y >= 0.10 && simPos.y <= 1.45) {
        const distFromTcp = currentTcp.distanceTo(simPos);
        const timeNeeded = distFromTcp / armSpeed;
        if (timeNeeded <= (t + 0.18)) {
          return {
            interceptPos: simPos.clone(),
            time: t,
            dist: distFromTcp
          };
        }
      }
    }

    // Fallback: direct lead clamped within reach envelope of this arm
    const fallbackPos = ball.mesh.position.clone().addScaledVector(ball.velocity, 0.18);
    const offset = new THREE.Vector3().subVectors(fallbackPos, basePos);
    const fbH = Math.hypot(offset.x, offset.z);
    if (fbH > 1.20) {
      fallbackPos.x = basePos.x + (offset.x / fbH) * 1.20;
      fallbackPos.z = basePos.z + (offset.z / fbH) * 1.20;
    }
    fallbackPos.y = Math.max(0.12, Math.min(1.30, fallbackPos.y));
    return {
      interceptPos: fallbackPos,
      time: 0.20,
      dist: currentTcp.distanceTo(fallbackPos)
    };
  }

  update(deltaTime) {
    // 1. Particle Effects Simulation
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= deltaTime * p.decay;

      if (p.isRing) {
        p.mesh.scale.multiplyScalar(1.0 + deltaTime * 6.5);
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

    // 2. Comprehensive 3D Bouncing, Elastic Collision & Gravity Physics
    this.updateBallPhysics(deltaTime);

    // Maintain steady active bouncing ball population (drop new balls at center circle)
    if (this.balls.length < this.targetFlockSize) {
      this.spawnTimer += deltaTime;
      if (this.spawnTimer >= 0.8) {
        this.spawnTimer = 0;
        this.spawnBall(true);
      }
    }

    // 3. Multi-Arm Collision, Deflection & Gripper Contact Checks
    for (let rIdx = 0; rIdx < this.robots.length; rIdx++) {
      const robot = this.robots[rIdx];
      const tcpPos = new THREE.Vector3();
      robot.getTCPWorldPosition(tcpPos);
      const armColliders = robot.getArmColliders();

      for (let i = this.balls.length - 1; i >= 0; i--) {
        const b = this.balls[i];
        if (!b || !b.mesh) continue;
        const pos = b.mesh.position;

        // --- Precise Physical Contact Check: ONLY BURSTS WHEN GRIPPER TOUCHES THE BALL ---
        const distToTcp = pos.distanceTo(tcpPos);
        const touchThreshold = b.radius + 0.070; // Physical pinch contact zone with gripper jaws

        if (distToTcp <= touchThreshold && pos.y > 0.05) {
          // BURST THE BALL!
          this.createBurstEffect(pos, b.color, b.radius);
          this.score += Math.round(100 * (1.1 - b.radius * 4));
          this.burstCount++;
          this.combo++;
          this.lastBurstTime = performance.now();

          // Snap Gripper closed for physical pinch / bite
          robot.setGripper(1.0);
          setTimeout(() => robot.setGripper(0.0), 160);

          for (const ap of this.armPursuits) {
            if (ap.lockedTargetBall === b) ap.lockedTargetBall = null;
            if (ap.currentTargetBall === b) ap.currentTargetBall = null;
          }

          this.ballsGroup.remove(b.mesh);
          b.mesh.geometry.dispose();
          b.mesh.material.dispose();
          if (b.texture) b.texture.dispose();
          this.balls.splice(i, 1);
          continue;
        }

        // --- Physical Robot Arm Segment Collisions & Bounce Deflections ---
        for (const col of armColliders) {
          let closestPoint = null;
          const colRadius = col.radius;

          if (col.type === 'sphere') {
            closestPoint = col.center;
          } else if (col.type === 'capsule') {
            const ab = new THREE.Vector3().subVectors(col.p2, col.p1);
            const ap = new THREE.Vector3().subVectors(pos, col.p1);
            const abLenSq = ab.lengthSq();
            const t = abLenSq > 0.0001 ? Math.max(0, Math.min(1, ap.dot(ab) / abLenSq)) : 0;
            closestPoint = new THREE.Vector3().copy(col.p1).addScaledVector(ab, t);
          }

          if (closestPoint) {
            const diff = new THREE.Vector3().subVectors(pos, closestPoint);
            const dist = diff.length();
            const minDist = colRadius + b.radius;

            if (dist < minDist && dist > 0.0001) {
              const normal = diff.clone().normalize();
              // Separate sphere out of collision penetration cleanly
              pos.copy(closestPoint).addScaledVector(normal, minDist + 0.006);
              b.mesh.position.copy(pos);

              // Reflect velocity with lively elasticity and momentum deflection
              const vDotN = b.velocity.dot(normal);
              if (vDotN < 0) {
                b.velocity.subScaledVector(normal, (1.0 + b.restitution) * vDotN);
              }
              b.velocity.addScaledVector(normal, 0.55 + Math.random() * 0.25);

              b.bounces++;
              b.squash = 0.62;
              this.audio.playClick();
            }
          }
        }
      }
    }

    // 4. Cooperative 4-Arm Intelligent Dynamic Targeting & Pursuit
    let primaryTargetBall = null;

    if (this.enabled) {
      for (let k = 0; k < this.armPursuits.length; k++) {
        const ap = this.armPursuits[k];
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
          const isStillValid = bIndex !== -1 && !b.burst && hDist <= 1.45 && pos.y >= 0.10 && pos.y <= 1.65;
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

          // Candidate filtering relative to this arm's base
          if (hDist > 1.50 || pos.y < 0.08) continue;

          const prediction = this.predictInterception(b, tcpPos, ap.basePos);
          if (prediction) {
            // Dynamic Priority Score: Lower is better
            let score = prediction.time * 1.6 + prediction.dist * 1.8 + Math.abs(pos.y - 0.70) * 0.4;

            // Balanced lock-on hysteresis
            if (b === ap.lockedTargetBall) {
              score -= 0.35;
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
          // Rest position slightly above arm base
          const restY = 0.55;
          ap.pursuitTarget.set(ap.basePos.x * 0.55, restY, ap.basePos.z * 0.55);
        }

        // Fast, agile critically damped Cartesian pursuit (SmoothDamp)
        const smoothTime = 0.06;
        const maxSpeed = 5.8;

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

        // Open gripper jaws on approach
        if (ap.currentTargetBall) {
          robot.setGripper(0.0);
        }
      }

      // Update Holographic Reticle
      if (this.targetReticle) {
        if (primaryTargetBall) {
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

  getStats() {
    return {
      score: this.score,
      burstCount: this.burstCount,
      combo: this.combo,
      activeBalls: this.balls.length
    };
  }
}
