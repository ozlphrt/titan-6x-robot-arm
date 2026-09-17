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
  constructor(scene, robot, kinematics, audio) {
    this.scene = scene;
    this.robot = robot;
    this.kinematics = kinematics;
    this.audio = audio;

    this.enabled = true; // Auto-defense active by default
    this.targetFlockSize = 3; // Clean, focused flock size of 3 flying balls
    this.spawnTimer = 0;
    this.spawnInterval = 2.0;

    this.balls = [];
    this.particles = [];

    // Airspace flight bounds (3D bounding envelope within workspace)
    this.bounds = {
      minX: -1.65, maxX: 1.65,
      minY: 0.28,  maxY: 1.55,
      minZ: -1.65, maxZ: 1.65
    };

    // The circle is the reach zone the robot arm actively defends (r <= 1.35m)
    this.maxDefenseRadius = 1.35;
    this.minWorkspaceRadius = 0.18;

    this.score = 0;
    this.burstCount = 0;
    this.combo = 0;
    this.lastBurstTime = 0;

    // Swarm flow / wandering parametric attractor state
    this.flowTime = 0;

    // Smooth pursuit state
    this.pursuitPos = new THREE.Vector3(0.45, 0.55, 0.0);
    this.pursuitTarget = new THREE.Vector3(0.45, 0.55, 0.0);
    this.pursuitVelocity = new THREE.Vector3(0, 0, 0);

    this.defaultRestPos = new THREE.Vector3(0.45, 0.55, 0.0);

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

    this.lockedTargetBall = null;

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

    // Initial flock formation
    this.spawnFlock(this.targetFlockSize);
  }

  toggle() {
    this.enabled = !this.enabled;
    if (!this.enabled && this.targetReticle) {
      this.targetReticle.visible = false;
    }
    return this.enabled;
  }

  spawnFlock(count = 4) {
    for (let i = 0; i < count; i++) {
      this.spawnBall(false, (i / count) * Math.PI * 2);
    }
  }

  spawnBall(forceNear = false, angleOffset = null) {
    const spawnAngle = angleOffset !== null ? angleOffset : Math.random() * Math.PI * 2;
    const spawnDist = forceNear ? (0.65 + Math.random() * 0.55) : (1.35 + Math.random() * 0.40);
    
    const x = Math.cos(spawnAngle) * spawnDist;
    const z = Math.sin(spawnAngle) * spawnDist;
    const y = 0.45 + Math.random() * 0.85;

    // Aerodynamic tangential / swirling flight velocity
    const tangentAngle = spawnAngle + Math.PI * 0.5 + (Math.random() - 0.5) * 0.5;
    const cruiseSpeed = 1.0 + Math.random() * 0.45; // 1.0 - 1.45 m/s organic flight cruise
    const vx = Math.cos(tangentAngle) * cruiseSpeed;
    const vz = Math.sin(tangentAngle) * cruiseSpeed;
    const vy = (Math.random() - 0.5) * 0.25;

    const ballRadius = 0.046 + Math.random() * 0.032; // 0.046m - 0.078m
    const themeIndex = Math.floor(Math.random() * this.ballColorThemes.length);
    const theme = this.ballColorThemes[themeIndex];
    const styleIndex = Math.floor(Math.random() * 4);

    // High-Gloss Elastic Plastic / Rubber Ball Material
    const ballTexture = createBouncyBallTexture(styleIndex, theme.primary, theme.secondary);
    const geo = new THREE.SphereGeometry(ballRadius, 32, 32);
    const mat = new THREE.MeshPhysicalMaterial({
      map: ballTexture,
      roughness: 0.15,
      metalness: 0.03,
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
      color: theme.hex,
      texture: ballTexture,
      velocity: new THREE.Vector3(vx, vy, vz),
      acceleration: new THREE.Vector3(0, 0, 0),
      maxSpeed: 1.55 + Math.random() * 0.4,
      minSpeed: 0.75,
      maxForce: 3.5,
      restitution: 0.88,
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

      const speed = 1.4 + Math.random() * 3.0;
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;

      const vel = new THREE.Vector3(
        Math.sin(theta) * Math.cos(phi) * speed,
        Math.sin(theta) * Math.sin(phi) * speed + 0.3,
        Math.cos(theta) * speed
      );

      this.particlesGroup.add(pMesh);
      this.particles.push({
        mesh: pMesh,
        vel: vel,
        life: 1.0,
        decay: 1.6 + Math.random() * 1.2
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

    // Scatter nearby flock members with a sudden evasive agility impulse
    for (const other of this.balls) {
      if (other.burst) continue;
      const d = other.mesh.position.distanceTo(pos);
      if (d < 1.15 && d > 0.01) {
        const scatterDir = new THREE.Vector3().subVectors(other.mesh.position, pos).normalize();
        const impulse = (1.15 - d) * 3.6;
        other.velocity.addScaledVector(scatterDir, impulse);
        other.squash = 0.72;
      }
    }

    this.audio.playBurst();
  }

  /**
   * 3D Boids Flocking Simulation Step (Craig Reynolds Flocking)
   */
  updateFlockPhysics(deltaTime) {
    this.flowTime += deltaTime * 0.45;

    // Dynamic wandering swoop attractor that guides the flock in undulating 3D ribbons
    const swoopX = Math.cos(this.flowTime * 1.1) * 0.90;
    const swoopZ = Math.sin(this.flowTime * 0.85) * 0.90;
    const swoopY = 0.65 + Math.sin(this.flowTime * 1.9) * 0.35;
    const swoopTarget = new THREE.Vector3(swoopX, swoopY, swoopZ);

    const numBalls = this.balls.length;
    const sepDist = 0.30;
    const alignDist = 0.75;
    const cohDist = 1.15;

    for (let i = 0; i < numBalls; i++) {
      const b = this.balls[i];
      if (b.burst) continue;

      const pos = b.mesh.position;

      // 1. Craig Reynolds Boids Steering Vectors
      const sepForce = new THREE.Vector3();
      const alignForce = new THREE.Vector3();
      const cohForce = new THREE.Vector3();
      let sepCount = 0;
      let alignCount = 0;
      let cohCount = 0;

      for (let j = 0; j < numBalls; j++) {
        if (i === j) continue;
        const other = this.balls[j];
        if (other.burst) continue;

        const otherPos = other.mesh.position;
        const dist = pos.distanceTo(otherPos);

        // Separation (avoid crowding)
        if (dist > 0.001 && dist < sepDist) {
          const diff = new THREE.Vector3().subVectors(pos, otherPos).normalize().divideScalar(dist);
          sepForce.add(diff);
          sepCount++;
        }

        // Alignment (match velocity heading)
        if (dist < alignDist) {
          alignForce.add(other.velocity);
          alignCount++;
        }

        // Cohesion (steer toward flock center)
        if (dist < cohDist) {
          cohForce.add(otherPos);
          cohCount++;
        }
      }

      const totalAcc = new THREE.Vector3();

      if (sepCount > 0) {
        sepForce.divideScalar(sepCount);
        if (sepForce.lengthSq() > 0) {
          sepForce.normalize().multiplyScalar(b.maxSpeed).sub(b.velocity).clampLength(0, b.maxForce);
          totalAcc.addScaledVector(sepForce, 1.8);
        }
      }

      if (alignCount > 0) {
        alignForce.divideScalar(alignCount);
        if (alignForce.lengthSq() > 0) {
          alignForce.normalize().multiplyScalar(b.maxSpeed).sub(b.velocity).clampLength(0, b.maxForce);
          totalAcc.addScaledVector(alignForce, 1.1);
        }
      }

      if (cohCount > 0) {
        cohForce.divideScalar(cohCount);
        const desired = new THREE.Vector3().subVectors(cohForce, pos);
        if (desired.lengthSq() > 0) {
          desired.normalize().multiplyScalar(b.maxSpeed).sub(b.velocity).clampLength(0, b.maxForce);
          totalAcc.addScaledVector(desired, 0.85);
        }
      }

      // 2. Swarm Flow & Swoop Guidance Field
      const toSwoop = new THREE.Vector3().subVectors(swoopTarget, pos);
      if (toSwoop.lengthSq() > 0) {
        toSwoop.normalize().multiplyScalar(b.maxSpeed).sub(b.velocity).clampLength(0, b.maxForce);
        totalAcc.addScaledVector(toSwoop, 0.65);
      }

      // 3. Gentle Airspace Boundary Steering (Soft turn-back containment)
      const boundForce = new THREE.Vector3();
      const margin = 0.35;
      if (pos.x < this.bounds.minX + margin) boundForce.x += Math.pow((this.bounds.minX + margin - pos.x) / margin, 2) * 3.5;
      if (pos.x > this.bounds.maxX - margin) boundForce.x -= Math.pow((pos.x - (this.bounds.maxX - margin)) / margin, 2) * 3.5;
      if (pos.z < this.bounds.minZ + margin) boundForce.z += Math.pow((this.bounds.minZ + margin - pos.z) / margin, 2) * 3.5;
      if (pos.z > this.bounds.maxZ - margin) boundForce.z -= Math.pow((pos.z - (this.bounds.maxZ - margin)) / margin, 2) * 3.5;
      if (pos.y < this.bounds.minY + margin) boundForce.y += Math.pow((this.bounds.minY + margin - pos.y) / margin, 2) * 4.0;
      if (pos.y > this.bounds.maxY - margin) boundForce.y -= Math.pow((pos.y - (this.bounds.maxY - margin)) / margin, 2) * 4.0;
      totalAcc.add(boundForce);

      // 4. Base Obstacle Proximity Steering (prevents boids from penetrating inner pedestal)
      const baseDist = Math.sqrt(pos.x * pos.x + pos.z * pos.z);
      if (baseDist < 0.25) {
        const pushOut = new THREE.Vector3(pos.x, 0, pos.z).normalize().multiplyScalar(3.0);
        totalAcc.add(pushOut);
      }

      // Integrate Acceleration & Velocity
      b.velocity.addScaledVector(totalAcc, deltaTime);

      // Clamp to cruise speed envelope
      const currentSpeed = b.velocity.length();
      if (currentSpeed > b.maxSpeed) {
        b.velocity.setLength(b.maxSpeed);
      } else if (currentSpeed < b.minSpeed && currentSpeed > 0.001) {
        b.velocity.setLength(b.minSpeed);
      }

      // Integrate Position
      b.mesh.position.addScaledVector(b.velocity, deltaTime);

      // Hard Boundary Clamp safeguard
      pos.x = Math.max(this.bounds.minX, Math.min(this.bounds.maxX, pos.x));
      pos.y = Math.max(this.bounds.minY, Math.min(this.bounds.maxY, pos.y));
      pos.z = Math.max(this.bounds.minZ, Math.min(this.bounds.maxZ, pos.z));

      // Aerodynamic Flight Visuals: Bank and face flight heading
      if (b.velocity.lengthSq() > 0.01) {
        const forward = b.velocity.clone().normalize();
        b.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), forward);
        // Spin along flight axis
        b.mesh.rotateZ(deltaTime * 3.5);
      }

      // Elastic squash recovery
      if (b.squash < 1.0) {
        b.squash += (1.0 - b.squash) * Math.min(1.0, deltaTime * 12.0);
        const stretch = 1.0 + (1.0 - b.squash) * 0.3;
        b.mesh.scale.set(stretch, b.squash, stretch);
      } else {
        b.mesh.scale.set(1.0, 1.0, 1.0);
      }
    }
  }

  /**
   * Spacetime Rendezvous Trajectory Predictor for Flying Boids
   */
  predictInterception(ball, currentTcp) {
    const simPos = ball.mesh.position.clone();
    const simVel = ball.velocity.clone();
    const dt = 0.035; // 35ms simulation slice
    const maxSteps = 45; // ~1.55 seconds lookahead
    const armSpeed = 4.2; // m/s effective robotic intercept capability

    for (let step = 1; step <= maxSteps; step++) {
      const t = step * dt;
      simPos.addScaledVector(simVel, dt);

      // Check if candidate point is within physical reachable defense envelope
      const hDist = Math.sqrt(simPos.x * simPos.x + simPos.z * simPos.z);
      if (hDist <= 1.25 && hDist >= 0.18 && simPos.y >= 0.15 && simPos.y <= 1.35) {
        const distFromTcp = currentTcp.distanceTo(simPos);
        const timeNeeded = distFromTcp / armSpeed;
        if (timeNeeded <= (t + 0.15)) {
          return {
            interceptPos: simPos.clone(),
            time: t,
            dist: distFromTcp
          };
        }
      }
    }

    // Fallback: direct lead clamped within reach envelope
    const fallbackPos = ball.mesh.position.clone().addScaledVector(ball.velocity, 0.18);
    const fbH = Math.sqrt(fallbackPos.x * fallbackPos.x + fallbackPos.z * fallbackPos.z);
    if (fbH > 1.18) {
      fallbackPos.x = (fallbackPos.x / fbH) * 1.18;
      fallbackPos.z = (fallbackPos.z / fbH) * 1.18;
    }
    fallbackPos.y = Math.max(0.18, Math.min(1.25, fallbackPos.y));
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

    // 2. 3D Flocking Boids Aerodynamic Simulation
    this.updateFlockPhysics(deltaTime);

    // Maintain steady active flock population
    if (this.balls.length < this.targetFlockSize) {
      this.spawnTimer += deltaTime;
      if (this.spawnTimer >= 0.6) {
        this.spawnTimer = 0;
        this.spawnBall();
      }
    }

    // 3. Collision, Deflection & Gripper Contact Checks
    const currentTcp = new THREE.Vector3();
    this.robot.getTCPWorldPosition(currentTcp);

    for (let i = this.balls.length - 1; i >= 0; i--) {
      const b = this.balls[i];
      const pos = b.mesh.position;

      // --- Precise Physical Contact Check: ONLY BURSTS WHEN GRIPPER TOUCHES THE BALL ---
      const distToTcp = pos.distanceTo(currentTcp);
      const touchThreshold = b.radius + 0.055; // Physical pinch contact zone with gripper jaws

      if (distToTcp <= touchThreshold && pos.y > 0.05) {
        // BURST THE BALL!
        this.createBurstEffect(pos, b.color, b.radius);
        this.score += Math.round(100 * (1.1 - b.radius * 4));
        this.burstCount++;
        this.combo++;
        this.lastBurstTime = performance.now();

        // Snap Gripper closed for physical pinch / bite
        this.robot.setGripper(1.0);
        setTimeout(() => this.robot.setGripper(0.0), 160);

        if (this.lockedTargetBall === b) {
          this.lockedTargetBall = null;
        }

        this.ballsGroup.remove(b.mesh);
        b.mesh.geometry.dispose();
        b.mesh.material.dispose();
        if (b.texture) b.texture.dispose();
        this.balls.splice(i, 1);
        continue;
      }

      // --- Physical Robot Arm Segment Collisions & Bounce Deflections ---
      const armColliders = this.robot.getArmColliders();
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

    // 4. Intelligent Dynamic Ball Targeting with Adaptive Priority Scoring
    let bestTarget = null;
    let lowestScore = Infinity;

    if (this.enabled) {
      // Validate locked target
      if (this.lockedTargetBall) {
        const b = this.lockedTargetBall;
        const bIndex = this.balls.indexOf(b);
        const pos = b ? b.mesh.position : null;
        const hDist = pos ? Math.sqrt(pos.x * pos.x + pos.z * pos.z) : 999;
        const isStillValid = bIndex !== -1 && !b.burst && hDist <= 1.45 && pos.y >= 0.10 && pos.y <= 1.55;
        if (!isStillValid) {
          this.lockedTargetBall = null;
        }
      }

      for (let i = 0; i < this.balls.length; i++) {
        const b = this.balls[i];
        const pos = b.mesh.position;
        const hDist = Math.sqrt(pos.x * pos.x + pos.z * pos.z);

        // Candidate filtering
        if (hDist > 1.50 || pos.y < 0.08) continue;

        const prediction = this.predictInterception(b, currentTcp);
        if (prediction) {
          // Dynamic Priority Score: Lower is better
          let score = prediction.time * 1.6 + prediction.dist * 1.8 + Math.abs(pos.y - 0.70) * 0.4;

          // Balanced lock-on hysteresis (smooth tracking without being locked into distant targets)
          if (b === this.lockedTargetBall) {
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
        this.lockedTargetBall = bestTarget.ball;
      }
    }

    // 5. Agile Arm Pursuit, Kinematics & HUD Reticle
    if (this.enabled) {
      if (bestTarget) {
        this.currentTargetBall = bestTarget.ball;
        this.pursuitTarget.copy(bestTarget.interceptPos);

        // Update 3D Holographic Lock-On Reticle
        if (this.targetReticle) {
          this.targetReticle.visible = true;
          this.targetReticle.position.copy(this.currentTargetBall.mesh.position);
          this.targetReticle.lookAt(this.targetReticle.position.clone().add(new THREE.Vector3(0, 1, 0)));
          this.reticleMesh.rotation.z += deltaTime * 5.0;
        }
      } else {
        this.currentTargetBall = null;
        this.lockedTargetBall = null;
        this.pursuitTarget.copy(this.defaultRestPos);
        if (this.targetReticle) {
          this.targetReticle.visible = false;
        }
      }

      // Fast, agile critically damped Cartesian pursuit (SmoothDamp)
      const smoothTime = 0.06; // Snappy, responsive pursuit
      const maxSpeed = 5.8; // High-speed robotic interception

      const omega = 2.0 / smoothTime;
      const x = omega * deltaTime;
      const exp = 1.0 / (1.0 + x + 0.48 * x * x + 0.235 * x * x * x);

      const change = new THREE.Vector3().subVectors(this.pursuitPos, this.pursuitTarget);
      const originalTo = this.pursuitTarget.clone();

      const maxChange = maxSpeed * smoothTime;
      change.clampLength(0, maxChange);
      const clampedTarget = this.pursuitPos.clone().sub(change);

      const temp = new THREE.Vector3().addVectors(
        this.pursuitVelocity,
        change.clone().multiplyScalar(omega)
      ).multiplyScalar(deltaTime);

      this.pursuitVelocity.sub(temp.clone().multiplyScalar(omega)).multiplyScalar(exp);
      const newPos = clampedTarget.clone().add(change.add(temp).multiplyScalar(exp));

      if (originalTo.clone().sub(this.pursuitPos).dot(newPos.clone().sub(originalTo)) > 0) {
        newPos.copy(originalTo);
        this.pursuitVelocity.set(0, 0, 0);
      }
      this.pursuitPos.copy(newPos);

      // Solve IK target configuration smoothly into targetAngles with unified analytical Elbow-Up solver
      this.kinematics.solveIK(this.pursuitPos, 16, 0.002, false);

      // Open gripper jaws on approach
      if (this.currentTargetBall) {
        this.robot.setGripper(0.0);
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
