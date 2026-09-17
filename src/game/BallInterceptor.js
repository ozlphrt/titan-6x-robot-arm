import * as THREE from 'three';
import { evaluateArenaTerrain } from '../scene/ArenaTerrain.js';

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

    // Arena boundary limits (Tangent to outer edge of all 4 arm circles: base ±1.40 + radius 1.35 = ±2.75m)
    this.bounds = {
      minX: -2.75, maxX: 2.75,
      minY: 0.0, maxY: 2.4,
      minZ: -2.75, maxZ: 2.75
    };

    // The reach zone the robot arms actively defend (extended reach envelope with longer telescoping forearm)
    this.maxDefenseRadius = 2.15;
    this.minWorkspaceRadius = 0.18;

    this.score = 0;
    this.pushCount = 0;
    this.combo = 0;
    this.lastPushTime = 0;

    // 4 Solid Color Themes Identical to the 4 Robot Arm Primary Paints
    this.teamThemes = [
      {
        id: 0,
        name: 'ALPHA (ARM 1)',
        label: 'Fanuc Yellow',
        primary: '#ffcb05',
        hex: 0xffcb05
      },
      {
        id: 1,
        name: 'BETA (ARM 2)',
        label: 'Kuka Orange',
        primary: '#e65100',
        hex: 0xe65100
      },
      {
        id: 2,
        name: 'GAMMA (ARM 3)',
        label: 'Emerald Green',
        primary: '#10b981',
        hex: 0x10b981
      },
      {
        id: 3,
        name: 'DELTA (ARM 4)',
        label: 'Cobalt Blue',
        primary: '#2563eb',
        hex: 0x2563eb
      }
    ];

    // Premium Dense Rubbery Solid Finish Materials matching arm paints
    this.teamMaterials = this.teamThemes.map(theme => new THREE.MeshPhysicalMaterial({
      color: theme.hex,
      metalness: 0.12,
      roughness: 0.36,
      clearcoat: 0.40,
      clearcoatRoughness: 0.22,
      envMapIntensity: 1.1
    }));

    // Multi-Arm Pursuit & Defense States for all 4 Robot Arms
    this.armPursuits = this.robots.map((r, idx) => {
      r.group.updateMatrixWorld(true);
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
        throwMode: 'EJECT', // 'EJECT' or 'CENTER_STRIKE'
        throwBall: null,
        heldBall: null,
        centerTargetBall: null,
        throwTimer: 0,
        targetThrowDir: new THREE.Vector3(0, 0, 0),
        ejectionsCount: 0,
        retainsCount: 0,
        approachAttempts: 0,
        lastAttemptBall: null,
        attemptTimer: 0,
        currentAngleOffset: 0,
        currentWristRoll: 0,
        currentWristPitch: 0,
        currentYOffset: 0,
        isDancing: false,
        danceTimer: 0,
        wasDancing: false
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

    // Initial instant spawn of 80 balls distributed dynamically across arena
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
    // Instantaneous active ball distribution for immediate 4-arm concurrent battle
    for (let i = 0; i < count; i++) {
      const teamId = i % 4;
      this.spawnBall(false, teamId);
    }
  }

  /**
   * Spawns / drops a ball at the center circle or distributed with designated arm team solid color
   */
  spawnBall(dropAtCenter = false, specificTeamId = null) {
    let x, z, y;
    let vx, vz, vy;

    if (dropAtCenter) {
      x = (Math.random() - 0.5) * 0.20;
      z = (Math.random() - 0.5) * 0.20;
      y = 0.50 + Math.random() * 0.30;
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.35 + Math.random() * 0.45;
      vx = Math.cos(angle) * speed;
      vz = Math.sin(angle) * speed;
      vy = -0.50;
    } else {
      const angle = Math.random() * Math.PI * 2;
      const dist = 0.25 + Math.random() * 1.85;
      x = Math.cos(angle) * dist;
      z = Math.sin(angle) * dist;
      y = 0.30 + Math.random() * 0.40;
      const vAngle = angle + (Math.random() - 0.5) * 1.0;
      const speed = 0.20 + Math.random() * 0.40;
      vx = Math.cos(vAngle) * speed;
      vz = Math.sin(vAngle) * speed;
      vy = -0.60;
    }

    const teamId = specificTeamId !== null ? specificTeamId : (this.spawnIndex++ % 4);
    const theme = this.teamThemes[teamId];
    const mat = this.teamMaterials[teamId];

    // Uniform spherical ball size (0.064m - 0.074m)
    const ballRadius = 0.064 + Math.random() * 0.010;
    // Damped dense rubber elasticity (low bounciness, natural tactile dead-drop & roll)
    const baseRestitution = 0.16 + Math.random() * 0.04;
    const mass = Math.pow(ballRadius / 0.070, 3) * 0.08;

    const geo = new THREE.SphereGeometry(ballRadius, 24, 24);
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
   * Creates an energetic holographic impact ripple and spark burst on the perimeter safety wall
   */
  createWallImpactEffect(pos, normal, color) {
    if (!this.particlesGroup) return;

    // Glowing impact ring on the glass wall surface
    const ringGeo = new THREE.RingGeometry(0.04, 0.16, 24);
    if (Math.abs(normal.x) > 0.5) {
      ringGeo.rotateY(Math.PI / 2);
    }

    const ringMat = new THREE.MeshBasicMaterial({
      color: color || 0x00f0ff,
      transparent: true,
      opacity: 0.90,
      side: THREE.DoubleSide
    });

    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.copy(pos);
    ringMesh.position.addScaledVector(normal, 0.012); // Slightly offset in front of glass to prevent z-fighting

    this.particlesGroup.add(ringMesh);
    this.particles.push({
      mesh: ringMesh,
      vel: new THREE.Vector3(0, 0, 0),
      isRing: true,
      life: 0.45,
      decay: 3.2
    });

    // 4 directional surface spark particles radiating outward along the wall plane
    const sparkGeo = new THREE.SphereGeometry(0.01, 6, 6);
    const sparkMat = new THREE.MeshBasicMaterial({ color: color || 0x00f0ff, transparent: true, opacity: 0.9 });
    const count = 4;
    for (let i = 0; i < count; i++) {
      const pMesh = new THREE.Mesh(sparkGeo, sparkMat.clone());
      pMesh.position.copy(pos).addScaledVector(normal, 0.015);

      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.4;
      let vx = 0, vy = Math.sin(angle) * (0.6 + Math.random() * 0.6), vz = 0;
      if (Math.abs(normal.x) > 0.5) {
        vz = Math.cos(angle) * (0.6 + Math.random() * 0.6);
      } else {
        vx = Math.cos(angle) * (0.6 + Math.random() * 0.6);
      }

      this.particlesGroup.add(pMesh);
      this.particles.push({
        mesh: pMesh,
        vel: new THREE.Vector3(vx, vy, vz),
        life: 0.4,
        decay: 3.0
      });
    }
  }

  /**
   * Returns precise floor elevation, surface normal, and slope gradients across the arena,
   * including the high-convexity center dome and inter-station corridor ridges.
   */
  getFloorInfo(x, z) {
    return evaluateArenaTerrain(x, z);
  }

  /**
   * Fast, Optimized 80-Ball Bouncing Physics with True Spherical Integrity & Convex Terrain Slopes
   */
  updateBallPhysics(deltaTime) {
    const numBalls = this.balls.length;
    const subSteps = 2; // High-precision sub-stepping for smooth 80-ball physics
    const dt = deltaTime / subSteps;
    const maxSpeedLimit = 9.0;

    for (let step = 0; step < subSteps; step++) {
      // 1. Single Ball Integration: Gravity, Velocity, Floor & Perimeter Wall Bounces
      for (let i = 0; i < numBalls; i++) {
        const b = this.balls[i];
        if (!b || !b.mesh || b.isHeld) continue;

        const pos = b.mesh.position;

        // Apply Gentle Gravity
        b.velocity.y += this.gravity * dt;

        // Terminal downward fall speed limit (natural falling physics)
        if (b.velocity.y < -6.5) b.velocity.y = -6.5;

        // Integrate Position
        pos.addScaledVector(b.velocity, dt);

        // Floor Elevation & Convex Surface Evaluation
        const floor = this.getFloorInfo(pos.x, pos.z);
        const contactY = floor.y + b.radius;

        // Active Gravitational Downhill Roll Acceleration on Central Dome, Corridor Ridges, & Corner Ramps:
        // Automatically rolls any balls from center, neutral corridors, and outer corner banks straight into circles!
        if (floor.isElevated) {
          const gMag = Math.abs(this.gravity);
          const aX = -gMag * floor.gradX * 4.8;
          const aZ = -gMag * floor.gradZ * 4.8;
          b.velocity.x += aX * dt;
          b.velocity.z += aZ * dt;
        }

        // Floor Contact & Damped Rubbery Bouncing
        if (pos.y <= contactY) {
          pos.y = contactY;
          const normal = floor.normal;
          const vDotN = b.velocity.dot(normal);

          if (vDotN < -0.20) {
            // Highly damped low-elasticity rebound (absorbs ~85% of vertical kinetic energy)
            b.velocity.addScaledVector(normal, -(1.0 + b.restitution * 0.40) * vDotN);
            b.velocity.x *= 0.82;
            b.velocity.z *= 0.82;
            b.bounces++;

            if (Math.abs(vDotN) > 1.2) {
              this.audio.playBallBounce(Math.min(1.0, Math.abs(vDotN) / 3.2));
            }
          } else {
            // Rolling / resting contact on floor: low resistance on slopes so balls easily roll into circles, stable resting inside flat circles
            b.velocity.y = (normal.y - 1.0) * 0.04;
            const friction = floor.isElevated ? 0.85 : 3.8;
            b.velocity.x *= (1.0 - dt * friction);
            b.velocity.z *= (1.0 - dt * friction);
          }
        }

        // 1b. Robot Arm Solid Base Pedestal Collisions & Deflections (Impenetrable Physical Barrier)
        const numArms = this.armPursuits.length;
        for (let a = 0; a < numArms; a++) {
          const basePos = this.armPursuits[a].basePos;
          const dx = pos.x - basePos.x;
          const dz = pos.z - basePos.z;
          const hDist = Math.hypot(dx, dz);

          // Check vertical zone of the robot arm base pedestal (up to 0.72m)
          if (pos.y <= 0.72) {
            // Radial profile of the base pedestal
            let baseRadius = 0.355; // Ground mounting flange & bolt ring
            if (pos.y > 0.07 && pos.y <= 0.22) {
              baseRadius = 0.295; // Cast pedestal column
            } else if (pos.y > 0.22 && pos.y <= 0.40) {
              baseRadius = 0.260; // Turntable ring & housing
            } else if (pos.y > 0.40) {
              baseRadius = 0.235; // Shoulder yoke pivot
            }

            const minSolidDist = baseRadius + b.radius;

            if (hDist < minSolidDist) {
              // Exact outward normal vector
              const nx = hDist > 0.0001 ? (dx / hDist) : 1.0;
              const nz = hDist > 0.0001 ? (dz / hDist) : 0.0;

              // Immediate positional separation: push ball completely outside the base radially
              pos.x = basePos.x + nx * minSolidDist;
              pos.z = basePos.z + nz * minSolidDist;

              // Low-elasticity cushioned bounce off base cylinder
              const vDotN = b.velocity.x * nx + b.velocity.z * nz;
              if (vDotN < 0) {
                const restitution = b.restitution * 0.30;
                const impulse = -(1.0 + restitution) * vDotN;
                b.velocity.x += impulse * nx;
                b.velocity.z += impulse * nz;
                b.velocity.x *= 0.75;
                b.velocity.z *= 0.75;

                b.bounces++;
                if (Math.abs(vDotN) > 1.2) {
                  this.audio.playBallBounce(Math.min(1.0, Math.abs(vDotN) / 3.2));
                }
              }
            }
          }
        }

        // Arena Perimeter Wall Bounces (Firm dead-cushion rubber damping & dynamic holographic wall flash)
        if (pos.x < this.bounds.minX + b.radius) {
          pos.x = this.bounds.minX + b.radius;
          const hitSpeed = Math.abs(b.velocity.x);
          b.velocity.x = hitSpeed * 0.16;
          if (hitSpeed > 0.3) {
            this.createWallImpactEffect(pos, new THREE.Vector3(1, 0, 0), b.color);
            if (hitSpeed > 1.2) this.audio.playBallBounce(Math.min(1.0, hitSpeed / 3.0));
          }
        } else if (pos.x > this.bounds.maxX - b.radius) {
          pos.x = this.bounds.maxX - b.radius;
          const hitSpeed = Math.abs(b.velocity.x);
          b.velocity.x = -hitSpeed * 0.16;
          if (hitSpeed > 0.3) {
            this.createWallImpactEffect(pos, new THREE.Vector3(-1, 0, 0), b.color);
            if (hitSpeed > 1.2) this.audio.playBallBounce(Math.min(1.0, hitSpeed / 3.0));
          }
        }

        if (pos.z < this.bounds.minZ + b.radius) {
          pos.z = this.bounds.minZ + b.radius;
          const hitSpeed = Math.abs(b.velocity.z);
          b.velocity.z = hitSpeed * 0.16;
          if (hitSpeed > 0.3) {
            this.createWallImpactEffect(pos, new THREE.Vector3(0, 0, 1), b.color);
            if (hitSpeed > 1.2) this.audio.playBallBounce(Math.min(1.0, hitSpeed / 3.0));
          }
        } else if (pos.z > this.bounds.maxZ - b.radius) {
          pos.z = this.bounds.maxZ - b.radius;
          const hitSpeed = Math.abs(b.velocity.z);
          b.velocity.z = -hitSpeed * 0.16;
          if (hitSpeed > 0.3) {
            this.createWallImpactEffect(pos, new THREE.Vector3(0, 0, -1), b.color);
            if (hitSpeed > 1.2) this.audio.playBallBounce(Math.min(1.0, hitSpeed / 3.0));
          }
        }

        // Ceiling bounce
        if (pos.y > this.bounds.maxY - b.radius) {
          pos.y = this.bounds.maxY - b.radius;
          b.velocity.y = -Math.max(0.3, Math.abs(b.velocity.y) * 0.20);
        }

        // Air drag
        b.velocity.x *= (1.0 - dt * 0.20);
        b.velocity.z *= (1.0 - dt * 0.20);

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

            // Damped rubbery impulse between balls (absorbs energy instead of ricocheting)
            if (vNormal < 0) {
              const restitution = Math.min(b1.restitution, b2.restitution) * 0.25;
              const impulse = -(1.0 + restitution) * vNormal / (1.0 / b1.mass + 1.0 / b2.mass) * 0.45;

              b1.velocity.x += (impulse / b1.mass) * nx;
              b1.velocity.y += (impulse / b1.mass) * ny;
              b1.velocity.z += (impulse / b1.mass) * nz;

              b2.velocity.x -= (impulse / b2.mass) * nx;
              b2.velocity.y -= (impulse / b2.mass) * ny;
              b2.velocity.z -= (impulse / b2.mass) * nz;

              // Tangential slight damping on ball collision
              b1.velocity.multiplyScalar(0.96);
              b2.velocity.multiplyScalar(0.96);

              // Clamp post-collision speed
              const s1 = b1.velocity.length();
              if (s1 > maxSpeedLimit) b1.velocity.multiplyScalar(maxSpeedLimit / s1);
              const s2 = b2.velocity.length();
              if (s2 > maxSpeedLimit) b2.velocity.multiplyScalar(maxSpeedLimit / s2);

              if (Math.abs(vNormal) > 2.2) {
                this.audio.playBallBounce(Math.min(1.0, Math.abs(vNormal) / 4.0));
              }
            }
          }
        }
      }
    }

    // 3. 3D Rolling Spin with Pure Spherical Integrity (scale always exactly 1, 1, 1)
    for (let i = 0; i < numBalls; i++) {
      const b = this.balls[i];
      if (!b || !b.mesh || b.isHeld) continue;

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
  predictInterception(ball, currentTcp, basePos, targetDir, angleOffset = 0, yOffset = 0) {
    const simPos = ball.mesh.position.clone();
    const simVel = ball.velocity.clone();
    const dt = 0.033;
    const maxSteps = 30;
    const armSpeed = 12.0;

    // Rotate attack vector horizontally around vertical Y axis if retry angleOffset is applied
    let rotatedAttackDir = targetDir;
    if (Math.abs(angleOffset) > 0.001) {
      const cosA = Math.cos(angleOffset);
      const sinA = Math.sin(angleOffset);
      rotatedAttackDir = new THREE.Vector3(
        targetDir.x * cosA - targetDir.z * sinA,
        0,
        targetDir.x * sinA + targetDir.z * cosA
      ).normalize();
    }

    for (let step = 0; step <= maxSteps; step++) {
      const t = step * dt;
      if (step > 0) {
        simVel.y += this.gravity * dt;
        simPos.addScaledVector(simVel, dt);

        const simFloor = this.getFloorInfo(simPos.x, simPos.z);
        const contactY = simFloor.y + ball.radius;

        if (simPos.y <= contactY) {
          simPos.y = contactY;
          simVel.y = Math.abs(simVel.y) * ball.restitution;
        }
      }

      const dx = simPos.x - basePos.x;
      const dz = simPos.z - basePos.z;
      const hDist = Math.hypot(dx, dz);

      if (hDist <= this.maxDefenseRadius + 0.20 && hDist >= 0.15 && simPos.y <= 1.55) {
        const floorAtPos = this.getFloorInfo(simPos.x, simPos.z);
        // Strike target: drive TCP directly into and through the ball along attack vector
        const strikePos = simPos.clone().addScaledVector(rotatedAttackDir, ball.radius * 0.15);
        
        // Clamp strikePos to robot's physical reach envelope (<= 2.15m with extended telescoping forearm)
        const sDx = strikePos.x - basePos.x;
        const sDz = strikePos.z - basePos.z;
        const sH = Math.hypot(sDx, sDz);
        if (sH > 2.15) {
          strikePos.x = basePos.x + (sDx / sH) * 2.15;
          strikePos.z = basePos.z + (sDz / sH) * 2.15;
        }
        
        strikePos.y = Math.max(floorAtPos.y + ball.radius + yOffset, Math.min(simPos.y + yOffset, 0.40));

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

    const fallbackPos = ball.mesh.position.clone().addScaledVector(ball.velocity, 0.10);
    const offset = new THREE.Vector3().subVectors(fallbackPos, basePos);
    const fbH = Math.hypot(offset.x, offset.z);
    const safeH = Math.max(0.20, Math.min(2.15, fbH));
    if (fbH > 0.001) {
      fallbackPos.x = basePos.x + (offset.x / fbH) * safeH;
      fallbackPos.z = basePos.z + (offset.z / fbH) * safeH;
    }
    const fbFloor = this.getFloorInfo(fallbackPos.x, fallbackPos.z);
    fallbackPos.y = Math.max(fbFloor.y + ball.radius + yOffset, Math.min(1.40, fallbackPos.y));

    const strikeFallback = fallbackPos.clone().addScaledVector(rotatedAttackDir, ball.radius * 0.15);
    const sfDx = strikeFallback.x - basePos.x;
    const sfDz = strikeFallback.z - basePos.z;
    const sfH = Math.hypot(sfDx, sfDz);
    if (sfH > 2.15) {
      strikeFallback.x = basePos.x + (sfDx / sfH) * 2.15;
      strikeFallback.z = basePos.z + (sfDz / sfH) * 2.15;
    }
    strikeFallback.y = Math.max(fbFloor.y + ball.radius + yOffset, strikeFallback.y);

    return {
      interceptPos: strikeFallback,
      targetDir: targetDir,
      time: 0.15,
      dist: currentTcp.distanceTo(strikeFallback)
    };
  }

  /**
   * Calculates the exact 3D ballistic launch velocity required to land a ball at targetPos
   * from the release position, taking into account launch elevation angle, gravity, and air drag.
   */
  calculateBallisticLaunchVelocity(releasePos, targetPos) {
    const dx = targetPos.x - releasePos.x;
    const dz = targetPos.z - releasePos.z;
    const dHoriz = Math.max(0.25, Math.hypot(dx, dz));
    const dY = targetPos.y - releasePos.y; // Height difference to target landing surface

    // Optimal launch elevation angle theta (26 deg for short toss up to 35 deg for cross-arena throw)
    const angleRatio = Math.max(0, Math.min(1.0, (dHoriz - 0.6) / 3.2));
    const theta = (26.0 + 9.0 * angleRatio) * (Math.PI / 180.0); // in radians
    const tanTheta = Math.tan(theta);

    const g = 9.81;
    // Ballistic trajectory: dY = dHoriz * tanTheta - (g * dHoriz^2) / (2 * vHoriz^2)
    // => 2 * vHoriz^2 = (g * dHoriz^2) / (dHoriz * tanTheta - dY)
    const denom = 2.0 * Math.max(0.05, dHoriz * tanTheta - dY);
    let vHoriz = Math.sqrt(Math.max(0.1, (g * dHoriz * dHoriz) / denom));

    // Slight aerodynamic drag compensation (damping is 0.998 per step in physics engine)
    vHoriz *= 1.08;
    const vY = vHoriz * tanTheta;

    const horizDir = new THREE.Vector3(dx / dHoriz, 0, dz / dHoriz);
    const launchVel = horizDir.clone().multiplyScalar(vHoriz);
    launchVel.y = vY;

    return {
      velocity: launchVel,
      speed: launchVel.length(),
      vHoriz: vHoriz,
      vY: vY,
      elevationAngle: theta,
      dHoriz: dHoriz
    };
  }

  /**
   * Returns true if there are fast incoming threats in the given arm's defense sector,
   * optionally ignoring a ball being currently handled.
   */
  hasActiveThreatsInZone(armIdx, ignoreBall = null) {
    const ap = this.armPursuits[armIdx];
    if (!ap) return false;
    const basePos = ap.basePos;

    for (let i = 0; i < this.balls.length; i++) {
      const b = this.balls[i];
      if (!b || !b.mesh || b.isHeld || b === ignoreBall) continue;
      const pos = b.mesh.position;
      const distBase = Math.hypot(pos.x - basePos.x, pos.z - basePos.z);

      if (distBase <= 1.45 && pos.y >= 0.02) {
        const speed = b.velocity.length();
        // Fast moving ball is a dynamic threat needing immediate reaction
        if (speed > 0.40) return true;
      }
    }
    return false;
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

    // 1.5. Global Held-Ball State Integrity:
    // Guarantees no ball ever remains orphaned or stuck mid-air if an arm transitions or drops target
    for (let i = 0; i < this.balls.length; i++) {
      const b = this.balls[i];
      if (!b || !b.mesh) continue;
      if (b.isHeld) {
        const isActuallyHeld = this.armPursuits.some(ap => ap.heldBall === b && ap.throwState !== 'IDLE');
        if (!isActuallyHeld) {
          b.isHeld = false;
        }
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

    // 2.5. Stationary Center Ball Billiard Snipe System:
    // When an arm's own ball has been stationary (v < 0.12 m/s) in the center circle (r <= 0.52m) for > 1.4s,
    // the arm grabs an ammo ball from its zone and performs a kinetic bowling snipe!
    for (let i = 0; i < this.balls.length; i++) {
      const b = this.balls[i];
      if (!b || !b.mesh || b.isHeld) continue;
      const pos = b.mesh.position;
      const distCenter = Math.hypot(pos.x, pos.z);

      if (distCenter <= 0.52) {
        const speed = b.velocity.length();
        if (speed < 0.12) {
          b.centerStuckTime = (b.centerStuckTime || 0) + deltaTime;
        } else {
          b.centerStuckTime = Math.max(0, (b.centerStuckTime || 0) - deltaTime * 1.5);
        }

        if (b.centerStuckTime > 0.25) {
          const armIdx = b.teamId;
          const ap = this.armPursuits[armIdx];

          if (ap && ap.throwState === 'IDLE') {
            // Find a resting own-color ball in this arm's zone to use as projectile ammo
            let ammoBall = null;
            let closestDist = Infinity;
            for (let j = 0; j < this.balls.length; j++) {
              const ab = this.balls[j];
              if (!ab || !ab.mesh || ab.isHeld || ab === b) continue;
              if (ab.teamId === armIdx) {
                const abSpeed = ab.velocity.length();
                if (abSpeed > 0.45) continue; // Pick a slow/resting ball as ammo

                const d = Math.hypot(ab.mesh.position.x - ap.basePos.x, ab.mesh.position.z - ap.basePos.z);
                if (d >= 0.22 && d <= 1.55 && d < closestDist) {
                  closestDist = d;
                  ammoBall = ab;
                }
              }
            }

            if (ammoBall) {
              ap.throwState = 'APPROACH';
              ap.throwMode = 'CENTER_STRIKE';
              ap.throwBall = ammoBall;
              ap.centerTargetBall = b;
              ap.throwTimer = 0;
              ap.robot.setGripper(0.0);
              b.centerStuckTime = 0;
            }
          }
        }
      } else {
        b.centerStuckTime = 0;
      }
    }

    // 3. Multi-Arm Push Contact, Grab & Throw for Stuck Balls
    for (let rIdx = 0; rIdx < this.robots.length; rIdx++) {
      const robot = this.robots[rIdx];
      const ap = this.armPursuits[rIdx];
      const kinematics = this.kinematicsList[rIdx] || this.kinematicsList[0];
      const armTeam = ap.teamId;
      const basePos = ap.basePos;
      robot.group.getWorldPosition(basePos);

      const tcpPos = new THREE.Vector3();
      robot.getTCPWorldPosition(tcpPos);
      const armColliders = robot.getArmColliders();

      // Check stuck status for all opponent balls in this arm's zone
      for (let i = 0; i < this.balls.length; i++) {
        const b = this.balls[i];
        if (!b || !b.mesh || b.isHeld || (now < (b.lastPushTime || 0))) continue;
        const pos = b.mesh.position;

        const isOwnColor = (b.teamId === armTeam);
        const dxBase = pos.x - basePos.x;
        const dzBase = pos.z - basePos.z;
        const distBase = Math.hypot(dxBase, dzBase);

        // Instant stuck detection: opponent ball lingering in circle without leaving
        if (!isOwnColor && distBase <= 1.45) {
          const speed = b.velocity.length();
          if (speed < 0.30) {
            b.stuckTime = (b.stuckTime || 0) + deltaTime;
          } else {
            b.stuckTime = Math.max(0, (b.stuckTime || 0) - deltaTime * 0.8);
          }

          // If ball has been stuck for > 0.08s, immediately initiate Grab & Catapult Eject
          if (b.stuckTime > 0.08 && ap.throwState === 'IDLE') {
            ap.throwState = 'APPROACH';
            ap.throwMode = 'EJECT';
            ap.throwBall = b;
            ap.centerTargetBall = null;
            ap.throwTimer = 0;
            robot.setGripper(0.0); // Open wide!
          }
        }

        // --- Active Direct Grasp Trigger on Approach for Intruder Balls ---
        if (ap.throwState === 'IDLE') {
          const distToTcp = pos.distanceTo(tcpPos);
          const isDirectContact = (distToTcp <= b.radius + 0.12);

          if (isDirectContact && pos.y >= 0.02 && (now - (b.lastPushTime || 0)) > 60) {
            const isOwnColor = (b.teamId === armTeam);
            const hDistBase = Math.hypot(pos.x - basePos.x, pos.z - basePos.z);

            if (!isOwnColor && hDistBase <= 1.65) {
              // Initiate Grab & Catapult Eject for intruder ball
              ap.throwState = 'APPROACH';
              ap.throwMode = 'EJECT';
              ap.throwBall = b;
              ap.throwTimer = 0;
              robot.setGripper(0.0);
            } else if (isOwnColor && hDistBase > 1.35 && hDistBase <= 2.15) {
              // Initiate Grab & Retrieve for outside own ball
              ap.throwState = 'APPROACH';
              ap.throwMode = 'RETRIEVE_CARRY';
              ap.throwBall = b;
              ap.throwTimer = 0;
              robot.setGripper(0.0);
            }
          }
        }

        // --- Physical Robot Arm Segment Collisions & Deflections ---
        if (!b.isHeld && now > (b.lastPushTime || 0)) {
          const isTargetOfArm = (b === ap.throwBall || b === ap.currentTargetBall || b === ap.lockedTargetBall);

          for (const col of armColliders) {
            // Gripper fingers must NOT repel the ball that this arm is actively trying to grasp or target!
            if (col.isGripper && isTargetOfArm) continue;

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
                pos.copy(closestPoint).addScaledVector(normal, minDist + 0.002);
                b.mesh.position.copy(pos);

                const vDotN = b.velocity.dot(normal);
                if (vDotN < 0) {
                  // Low-elasticity cushioned deflection along collision normal
                  b.velocity.addScaledVector(normal, -(1.0 + b.restitution * 0.35) * vDotN);
                  b.velocity.multiplyScalar(0.85);
                }
                b.bounces++;
                if (Math.abs(vDotN) > 1.2) {
                  this.audio.playBallBounce(Math.min(1.0, Math.abs(vDotN) / 3.0));
                }
              }
            }
          }
        }
      }

      // --- GRAB, CARRY, PLACE & THROW STATE MACHINE FOR THIS ARM ---
      if (ap.throwState === 'APPROACH') {
        robot.setGripper(0.0); // Open wide!
        ap.throwTimer += deltaTime;

        // Failsafe timeout or target invalidation (including balls currently in ballistic flight)
        if (!ap.throwBall || !ap.throwBall.mesh || (ap.throwBall.isHeld && ap.heldBall !== ap.throwBall) || (now < (ap.throwBall.lastPushTime || 0))) {
          ap.throwBall = null;
          ap.centerTargetBall = null;
          ap.throwMode = 'EJECT';
          ap.throwState = 'IDLE';
        } else {
          // Track directly onto target ball center at exact spherical equator
          const ballPos = ap.throwBall.mesh.position;
          const floorInfo = this.getFloorInfo(ballPos.x, ballPos.z);
          const targetY = Math.max(floorInfo.y + ap.throwBall.radius - 0.010, Math.min(ballPos.y, 0.40));
          ap.pursuitTarget.set(ballPos.x, targetY, ballPos.z);

          const distToBall = tcpPos.distanceTo(ballPos);
          const graspThreshold = ap.throwBall.radius + 0.24; // Immediate generous reach for open jaws

          if (distToBall <= graspThreshold && now > (ap.throwBall.lastPushTime || 0)) {
            // Initiate Instant Clamping Phase (0.035s fast progressive jaw closure)
            ap.throwState = 'CLAMPING';
            ap.clampDuration = 0.035;
            ap.throwTimer = 0.035;
            ap.graspStartPos = tcpPos.clone();

            ap.heldBall = ap.throwBall;
            ap.heldBall.isHeld = true;
            ap.heldBall.velocity.set(0, 0, 0);
            ap.heldBall.mesh.position.copy(tcpPos);
            this.audio.playPneumatic(true);

            if (ap.throwMode === 'CENTER_STRIKE') {
              const targetPos = (ap.centerTargetBall && ap.centerTargetBall.mesh) ? ap.centerTargetBall.mesh.position : new THREE.Vector3(0, 0.065, 0);
              ap.targetThrowPos = targetPos.clone();
              ap.targetThrowDir.set(targetPos.x - ap.basePos.x, 0, targetPos.z - ap.basePos.z).normalize();
            } else if (ap.throwMode === 'RETRIEVE_CARRY') {
              // Retrieve mode: carry inward towards home circle
              const angle = ((ap.retainsCount || 0) * 1.35) % (Math.PI * 2);
              const rIn = 0.55 + ((ap.retainsCount || 0) % 3) * 0.14;
              ap.targetThrowPos = ap.basePos.clone().add(new THREE.Vector3(Math.cos(angle) * rIn, 0, Math.sin(angle) * rIn));
              ap.targetThrowDir.set(ap.targetThrowPos.x - ap.basePos.x, 0, ap.targetThrowPos.z - ap.basePos.z).normalize();
            } else {
              // Target: land directly at the opponent arm's base pedestal
              const targetArm = this.armPursuits[ap.heldBall.teamId];
              const targetBase = targetArm ? targetArm.basePos : new THREE.Vector3(0, 0, 0);
              const landingSpot = targetBase.clone();
              landingSpot.y = 0.065;
              ap.targetThrowPos = landingSpot;
              ap.targetThrowDir.set(landingSpot.x - ap.basePos.x, 0, landingSpot.z - ap.basePos.z).normalize();
              if (ap.targetThrowDir.lengthSq() < 0.001) {
                ap.targetThrowDir.set(-ap.basePos.x, 0, -ap.basePos.z).normalize();
              }
            }

            // Estimate release position (approx 0.45m forward from base at 0.44m height)
            const estReleasePos = ap.basePos.clone().addScaledVector(ap.targetThrowDir, 0.45);
            estReleasePos.y = 0.44;

            const launchSolution = this.calculateBallisticLaunchVelocity(estReleasePos, ap.targetThrowPos);
            ap.requiredLaunchVel = launchSolution.velocity;
            ap.requiredLaunchSpeed = launchSolution.speed;
            ap.requiredElevation = launchSolution.elevationAngle;

            // Power ratio alpha strictly based on required ballistic launch speed
            const alpha = Math.max(0.05, Math.min(1.0, (launchSolution.speed - 1.2) / 3.4));
            ap.throwPowerRatio = alpha;

            // PRE-COMPUTE THROW KEYFRAME JOINT ANGLES via IK (done once here at grasp time)
            if (ap.throwMode !== 'RETRIEVE_CARRY') {
              const perpDir = new THREE.Vector3(-ap.targetThrowDir.z, 0, ap.targetThrowDir.x);
              const cockedWorldPos = ap.basePos.clone()
                .sub(ap.targetThrowDir.clone().multiplyScalar(0.12 + 0.22 * alpha))
                .addScaledVector(perpDir, (rIdx % 2 === 0 ? -1 : 1) * 0.06 * alpha);
              cockedWorldPos.y = 0.52 + 0.24 * alpha;

              const releaseWorldPos = ap.basePos.clone().addScaledVector(ap.targetThrowDir, 0.38 + 0.32 * alpha);
              releaseWorldPos.y = 0.46 + 0.18 * alpha;

              const followWorldPos = ap.basePos.clone().addScaledVector(ap.targetThrowDir, 0.48 + 0.30 * alpha);
              followWorldPos.y = 0.22 + 0.06 * alpha;

              const savedAngles = [...robot.angles];
              const savedTele = robot.getTelescope();

              kinematics.solveIK(cockedWorldPos, 20, 0.001, true);
              ap.throwCockedAngles = [...robot.angles];
              ap.throwCockedTele = robot.getTelescope();

              kinematics.solveIK(releaseWorldPos, 20, 0.001, true);
              ap.throwReleaseAngles = [...robot.angles];
              ap.throwReleaseTele = robot.getTelescope();

              kinematics.solveIK(followWorldPos, 20, 0.001, true);
              ap.throwFollowAngles = [...robot.angles];
              ap.throwFollowTele = robot.getTelescope();

              robot.setJointAngles(savedAngles);
              robot.setTargetTelescope(savedTele);
              robot.setTelescope(savedTele);
            }
          } else if (distToBall <= 0.38 && ap.throwTimer > 0.6) {
            // CORNER / EDGE RAKE: Close enough but blocked from full clamping
            if (ap.throwMode === 'RETRIEVE_CARRY') {
              const pushDir = new THREE.Vector3(ap.basePos.x - ballPos.x, 0, ap.basePos.z - ballPos.z).normalize();
              ap.throwBall.velocity.set(pushDir.x * 4.5, 0.85, pushDir.z * 4.5);
              ap.throwBall.lastPushTime = now + 100;
              ap.throwBall.isHeld = false;
              this.audio.playPneumatic(false);
              if (typeof this.audio.playArmSwat === 'function') this.audio.playArmSwat(1.2);
            } else {
              const oppBase = this.armPursuits[ap.throwBall.teamId]?.basePos || new THREE.Vector3(0, 0, 0);
              const pushDir = new THREE.Vector3(oppBase.x - ballPos.x, 0, oppBase.z - ballPos.z).normalize();
              if (pushDir.lengthSq() < 0.001) pushDir.set(ballPos.x - ap.basePos.x, 0, ballPos.z - ap.basePos.z).normalize();

              ap.throwBall.velocity.set(pushDir.x * 6.5, 1.35, pushDir.z * 6.5);
              ap.throwBall.lastPushTime = now + 100;
              ap.throwBall.isHeld = false;
              this.audio.playPneumatic(false);
              if (typeof this.audio.playArmSwat === 'function') this.audio.playArmSwat(1.3);
            }

            robot.getTCPWorldPosition(tcpPos);
            ap.pursuitPos.copy(tcpPos);
            ap.pursuitTarget.copy(tcpPos);
            ap.pursuitVelocity.set(0, 0, 0);
            ap.lockedTargetBall = null;
            ap.throwBall = null;
            ap.centerTargetBall = null;
            ap.throwMode = 'EJECT';
            ap.throwState = 'IDLE';
          } else if (ap.throwTimer > 1.2) {
            // Rapid 1.2s timeout for maximum reach extension
            if (ap.throwBall) {
              ap.throwBall.lastPushTime = now + 100;
            }
            robot.getTCPWorldPosition(tcpPos);
            ap.pursuitPos.copy(tcpPos);
            ap.pursuitTarget.copy(tcpPos);
            ap.pursuitVelocity.set(0, 0, 0);
            ap.lockedTargetBall = null;
            ap.throwBall = null;
            ap.centerTargetBall = null;
            ap.throwMode = 'EJECT';
            ap.throwState = 'IDLE';
          }
        }
      } else if (ap.throwState === 'CLAMPING') {
        // Step 2: Instant zero-jerk progressive clamp
        const cDuration = ap.clampDuration || 0.035;
        const clampT = Math.max(0, Math.min(1.0, 1.0 - ap.throwTimer / cDuration));
        const pClamp = clampT * clampT * (3.0 - 2.0 * clampT);
        robot.setGripper(pClamp);

        if (ap.heldBall && ap.heldBall.mesh) {
          ap.heldBall.velocity.set(0, 0, 0);
          ap.heldBall.mesh.position.copy(tcpPos);
        }

        ap.throwTimer -= deltaTime;
        if (ap.throwTimer <= 0) {
          robot.setGripper(1.0);
          if (ap.throwMode === 'RETRIEVE_CARRY') {
            ap.throwState = 'RETRIEVE_CARRY';
            ap.throwTimer = 0.09;
            ap.carryDuration = 0.09;
          } else {
            // Step 3: Rapid explosive joint-space windup
            ap.throwState = 'WINDUP';
            ap.windupStartAngles = [...robot.angles];
            ap.windupStartTele = robot.getTelescope();
            const alpha = ap.throwPowerRatio || 0.5;
            ap.windupDuration = 0.05 + 0.03 * alpha;
            ap.throwTimer = ap.windupDuration;
          }
        }
      } else if (ap.throwState === 'RETRIEVE_CARRY') {
        // Swiftly carry ball over into the home circle (r <= 0.85m < 1.35m)
        robot.getTCPWorldPosition(tcpPos);
        if (ap.heldBall && ap.heldBall.mesh) {
          ap.heldBall.velocity.set(0, 0, 0);
          ap.heldBall.mesh.position.copy(tcpPos);
        }
        robot.setGripper(1.0);

        const angle = ((ap.retainsCount || 0) * 1.35) % (Math.PI * 2);
        const rIn = 0.55 + ((ap.retainsCount || 0) % 3) * 0.14;
        const sanctuaryPos = ap.basePos.clone().add(new THREE.Vector3(Math.cos(angle) * rIn, 0, Math.sin(angle) * rIn));

        const cDuration = ap.carryDuration || 0.09;
        const carryT = Math.max(0, Math.min(1.0, 1.0 - ap.throwTimer / cDuration));
        const pCarry = carryT * carryT * (3.0 - 2.0 * carryT);
        const arcY = 0.20 + Math.sin(carryT * Math.PI) * 0.24;
        ap.pursuitTarget.set(
          ap.graspStartPos.x + (sanctuaryPos.x - ap.graspStartPos.x) * pCarry,
          arcY,
          ap.graspStartPos.z + (sanctuaryPos.z - ap.graspStartPos.z) * pCarry
        );

        ap.throwTimer -= deltaTime;
        const hDistToSanctuary = Math.hypot(tcpPos.x - sanctuaryPos.x, tcpPos.z - sanctuaryPos.z);
        if (ap.throwTimer <= 0 || hDistToSanctuary < 0.10) {
          ap.throwState = 'RETRIEVE_PLACE';
          ap.placeDuration = 0.045;
          ap.throwTimer = 0.045;
        }
      } else if (ap.throwState === 'RETRIEVE_PLACE') {
        // Lower down smoothly and gently place inside home circle
        robot.getTCPWorldPosition(tcpPos);
        if (ap.heldBall && ap.heldBall.mesh) {
          ap.heldBall.velocity.set(0, 0, 0);
          ap.heldBall.mesh.position.copy(tcpPos);
        }
        const angle = ((ap.retainsCount || 0) * 1.35) % (Math.PI * 2);
        const rIn = 0.55 + ((ap.retainsCount || 0) % 3) * 0.14;
        const sanctuaryPos = ap.basePos.clone().add(new THREE.Vector3(Math.cos(angle) * rIn, 0, Math.sin(angle) * rIn));
        const floorInfo = this.getFloorInfo(sanctuaryPos.x, sanctuaryPos.z);
        ap.pursuitTarget.set(sanctuaryPos.x, floorInfo.y + (ap.heldBall ? ap.heldBall.radius : 0.065) + 0.015, sanctuaryPos.z);

        const pDuration = ap.placeDuration || 0.045;
        const placeT = Math.max(0, Math.min(1.0, 1.0 - ap.throwTimer / pDuration));
        const pPlace = placeT * placeT * (3.0 - 2.0 * placeT);
        robot.setGripper(1.0 - pPlace); // Progressive release

        ap.throwTimer -= deltaTime;
        if (ap.throwTimer <= 0) {
          robot.setGripper(0.0); // Fully open
          this.audio.playPneumatic(false);

          if (ap.heldBall && ap.heldBall.mesh) {
            ap.heldBall.mesh.position.copy(tcpPos);
            ap.heldBall.isHeld = false;
            // Gentle inward settling nudge towards circle center
            const dirIn = new THREE.Vector3(ap.basePos.x - ap.heldBall.mesh.position.x, 0, ap.basePos.z - ap.heldBall.mesh.position.z).normalize();
            ap.heldBall.velocity.set(dirIn.x * 0.22, 0, dirIn.z * 0.22);
            ap.heldBall.lastPushTime = now + 80;
            ap.retainsCount = (ap.retainsCount || 0) + 1;
            this.pushCount++;
            this.score += 50;
          }

          robot.getTCPWorldPosition(tcpPos);
          ap.pursuitPos.copy(tcpPos);
          ap.pursuitTarget.copy(tcpPos);
          ap.pursuitVelocity.set(0, 0, 0);

          ap.lockedTargetBall = null;
          ap.heldBall = null;
          ap.throwBall = null;
          ap.throwMode = 'EJECT';
          ap.throwState = 'IDLE';
        }
      } else if (ap.throwState === 'WINDUP') {
        // Step 4: Rapid joint-space pullback
        const wDuration = ap.windupDuration || 0.06;
        const windT = Math.max(0, Math.min(1.0, 1.0 - ap.throwTimer / wDuration));
        const p = windT * windT * (3.0 - 2.0 * windT);

        const startAngles = ap.windupStartAngles || [...robot.angles];
        const targetAngles = ap.throwCockedAngles;
        if (targetAngles) {
          const interpAngles = targetAngles.map((t, i) => startAngles[i] + (t - startAngles[i]) * p);
          robot.setJointAngles(interpAngles);
          // Interpolate telescope too
          const startTele = ap.windupStartTele !== undefined ? ap.windupStartTele : robot.getTelescope();
          const targetTele = ap.throwCockedTele !== undefined ? ap.throwCockedTele : robot.getTelescope();
          robot.setTelescope(startTele + (targetTele - startTele) * p);
        }
        robot.getTCPWorldPosition(tcpPos);

        if (ap.heldBall && ap.heldBall.mesh) {
          ap.heldBall.velocity.set(0, 0, 0);
          ap.heldBall.mesh.position.copy(tcpPos);
        }
        robot.setGripper(1.0);

        ap.throwTimer -= deltaTime;
        if (ap.throwTimer <= 0) {
          ap.cockedAngles = ap.throwCockedAngles ? [...ap.throwCockedAngles] : [...robot.angles];
          ap.cockedTele = ap.throwCockedTele !== undefined ? ap.throwCockedTele : robot.getTelescope();

          // Seamless transition directly into SWING_THROW (zero artificial pause!)
          ap.throwState = 'SWING_THROW';
          ap.swingDuration = 0.065;
          ap.throwTimer = 0.065;
          ap.prevSwingTcpPos = null;
        }
      } else if (ap.throwState === 'SWING_THROW' || ap.throwState === 'RELEASE') {
        // Step 5-7: JOINT-SPACE THROW — continuous whip curve from cocked → release → follow-through
        const sDuration = ap.swingDuration || 0.065;
        const swingT = Math.max(0, Math.min(1.0, 1.0 - ap.throwTimer / sDuration));
        const tRelease = 0.75; // Release at 75% peak velocity

        const cockedA = ap.cockedAngles;
        const releaseA = ap.throwReleaseAngles || cockedA;
        const followA = ap.throwFollowAngles || releaseA;
        const cockedTele = ap.cockedTele || 0;
        const releaseTele = ap.throwReleaseTele !== undefined ? ap.throwReleaseTele : cockedTele;
        const followTele = ap.throwFollowTele !== undefined ? ap.throwFollowTele : releaseTele;

        let swingAngles, swingTele;
        if (swingT <= tRelease) {
          const u = swingT / tRelease;
          const wh = Math.pow(u, 2.2);
          swingAngles = cockedA.map((c, i) => c + ((releaseA[i] ?? c) - c) * wh);
          swingTele = cockedTele + (releaseTele - cockedTele) * wh;
        } else {
          const w = (swingT - tRelease) / (1.0 - tRelease);
          const ft = w * (2.0 - w);
          swingAngles = releaseA.map((r, i) => r + ((followA[i] ?? r) - r) * ft);
          swingTele = releaseTele + (followTele - releaseTele) * ft;
        }

        robot.setJointAngles(swingAngles);
        robot.setTelescope(swingTele);

        const prevTcpPos = ap.prevSwingTcpPos ? ap.prevSwingTcpPos.clone() : tcpPos.clone();
        robot.getTCPWorldPosition(tcpPos);
        ap.prevSwingTcpPos = tcpPos.clone();
        const vGripper = new THREE.Vector3().subVectors(tcpPos, prevTcpPos).divideScalar(Math.max(0.001, deltaTime));
        ap.gripperVelocity = vGripper.clone();

        if (swingT < tRelease) {
          robot.setGripper(1.0);
          if (ap.heldBall && ap.heldBall.mesh) {
            ap.heldBall.velocity.copy(vGripper);
            ap.heldBall.mesh.position.copy(tcpPos);
          }
        } else if (ap.heldBall && ap.heldBall.mesh) {
          robot.setGripper(0.0);
          this.audio.playPneumatic(false);

          const ballisticVel = (ap.requiredLaunchVel && ap.requiredLaunchVel.lengthSq() > 0.5) ? ap.requiredLaunchVel : null;
          let finalLaunchVel;
          if (ballisticVel && vGripper.lengthSq() > 0.2) {
            const gDir = vGripper.clone().normalize();
            const bDir = ballisticVel.clone().normalize();
            const blendDir = new THREE.Vector3().addVectors(gDir.multiplyScalar(0.35), bDir.multiplyScalar(0.65)).normalize();
            finalLaunchVel = blendDir.multiplyScalar(ballisticVel.length());
          } else if (ballisticVel) {
            finalLaunchVel = ballisticVel;
          } else if (vGripper.lengthSq() > 0.5) {
            finalLaunchVel = vGripper;
          } else {
            finalLaunchVel = ap.targetThrowDir.clone().multiplyScalar(4.0);
          }

          const launchDir = finalLaunchVel.clone().normalize();
          ap.heldBall.mesh.position.copy(tcpPos).addScaledVector(launchDir, ap.heldBall.radius + 0.04);
          ap.heldBall.velocity.copy(finalLaunchVel);
          ap.heldBall.bounces = 0;
          ap.heldBall.stuckTime = 0;
          ap.heldBall.isHeld = false;
          ap.heldBall.lastPushTime = now + 80;

          if (this.audio && typeof this.audio.playArmSwat === 'function') {
            this.audio.playArmSwat(Math.min(1.6, 0.5 + finalLaunchVel.length() * 0.20));
          }
          ap.ejectionsCount++;
          this.pushCount++;
          this.score += 100;
          ap.heldBall = null;
        } else {
          robot.setGripper(0.0);
        }

        ap.throwTimer -= deltaTime;
        if (ap.throwTimer <= 0) {
          // Instant handover to IDLE so next target can be engaged immediately
          robot.getTCPWorldPosition(tcpPos);
          ap.pursuitPos.copy(tcpPos);
          ap.pursuitTarget.copy(tcpPos);
          ap.pursuitVelocity.set(0, 0, 0);
          robot.setGripper(0.0);

          if (ap.heldBall) {
            ap.heldBall.isHeld = false;
            ap.heldBall = null;
          }
          if (ap.throwBall) {
            ap.throwBall.isHeld = false;
            ap.throwBall = null;
          }
          ap.lockedTargetBall = null;
          ap.centerTargetBall = null;
          ap.throwMode = 'EJECT';
          ap.throwState = 'IDLE';
        }
      }
    }

    // 4. Cooperative 4-Arm Intelligent Dynamic Targeting: Keep Own / Eject Opponents
    let primaryTargetBall = null;

    if (this.enabled) {
      const distributions = this.getArmBallDistribution();

      for (let k = 0; k < this.armPursuits.length; k++) {
        const ap = this.armPursuits[k];
        const armTeam = ap.teamId;
        const robot = ap.robot;
        const kinematics = this.kinematicsList[k] || this.kinematicsList[0];
        const tcpPos = new THREE.Vector3();
        robot.getTCPWorldPosition(tcpPos);
        robot.group.getWorldPosition(ap.basePos);

        // --- VICTORY CONDITION CHECK ---
        // An arm can ONLY claim victory if:
        // 1. It is not currently holding or throwing a ball (must finish throwing alien ball first)
        // 2. All own balls are gathered inside this circle AND zero foreign balls in perimeter
        const targetTeamBalls = Math.floor(this.targetFlockSize / 4); // Exactly 20 balls required per team
        const totalOwnBalls = this.balls.filter(b => b.teamId === armTeam).length;
        const ownInCircle = distributions[k]?.counts[armTeam] || 0;
        const foreignInCircle = (distributions[k]?.total || 0) - ownInCircle;
        const isBusyHandling = (ap.heldBall !== null || ap.throwState !== 'IDLE');

        let hasForeignInZone = false;
        for (let i = 0; i < this.balls.length; i++) {
          const b = this.balls[i];
          if (!b || !b.mesh || b.teamId === armTeam) continue;
          const distBase = Math.hypot(b.mesh.position.x - ap.basePos.x, b.mesh.position.z - ap.basePos.z);
          if (distBase <= 1.35) {
            hasForeignInZone = true;
            break;
          }
        }

        const isComplete = (
          !isBusyHandling &&
          !hasForeignInZone &&
          totalOwnBalls >= targetTeamBalls &&
          ownInCircle >= targetTeamBalls &&
          foreignInCircle === 0
        );

        ap.isDancing = isComplete;

        if (isComplete) {
          ap.danceTimer = (ap.danceTimer || 0) + deltaTime;
          if (!ap.wasDancing) {
            ap.wasDancing = true;
            if (this.audio && typeof this.audio.playVictoryFanfare === 'function') {
              this.audio.playVictoryFanfare();
            }
          }

          // --- VICTORY CELEBRATION SWING DANCE ANIMATION (High/Low Vertical Swing) ---
          const t = ap.danceTimer;
          const tempo = 3.4; // Smooth energetic swing tempo
          const baseDirYaw = Math.atan2(-ap.basePos.x, -ap.basePos.z);

          // 1. Horizontal Turntable Sway (Wide side-to-side swing)
          const j1 = baseDirYaw + Math.sin(t * tempo) * 0.65;
          const j2 = -0.40 + Math.cos(t * tempo) * 0.75;
          const j3 = 0.20 - Math.cos(t * tempo) * 0.55 + Math.sin(t * tempo * 2.0) * 0.22;
          const j4 = Math.sin(t * tempo + 0.8) * 1.35;
          const j5 = -0.30 + Math.cos(t * tempo) * 0.80;
          const j6 = t * 3.8 + Math.sin(t * tempo) * 2.2;
          const tele = 0.15 + 0.70 * (0.5 + 0.5 * Math.cos(t * tempo));
          robot.setTargetTelescope(tele);

          robot.setTargetAngles([j1, j2, j3, j4, j5, j6]);
          robot.setGripper(0.5 + 0.5 * Math.sin(t * tempo * 2.0)); // Syncopated upbeat gripper claps!
          continue;
        } else {
          ap.danceTimer = 0;
          ap.wasDancing = false;
        }

        // If arm is in LIFT, WINDUP, COCK_PAUSE or SWING_THROW, direct joint trajectory controls the arm
        if (ap.throwState === 'LIFT' || ap.throwState === 'WINDUP' || ap.throwState === 'COCK_PAUSE' || ap.throwState === 'SWING_THROW' || ap.throwState === 'RELEASE') {
          continue;
        }

        // If arm is currently performing Grab / Carry waypoints, smooth tracking applies
        if (ap.throwState !== 'IDLE') {
          // Hyper-agile snappy tracking towards throw waypoints
          const smoothTime = 0.016;
          const maxSpeed = 18.0;

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

          kinematics.solveIK(ap.pursuitPos, 18, 0.002, false, ap.currentWristRoll, ap.currentWristPitch);
          robot.group.updateMatrixWorld(true);
          robot.getTCPWorldPosition(tcpPos);
          if (ap.heldBall && ap.heldBall.mesh) {
            ap.heldBall.mesh.position.copy(tcpPos);
            ap.heldBall.velocity.set(0, 0, 0);
          }
          continue;
        }

        // Validate locked target for this arm with anti-stall tracking
        if (ap.lockedTargetBall) {
          ap.lockTimer = (ap.lockTimer || 0) + deltaTime;
          const b = ap.lockedTargetBall;
          const bIndex = this.balls.indexOf(b);
          const pos = b && b.mesh ? b.mesh.position : null;
          const hDist = pos ? Math.hypot(pos.x - ap.basePos.x, pos.z - ap.basePos.z) : 999;
          const isStillValid = bIndex !== -1 && !b.isHeld && hDist <= 2.15 && pos.y >= 0.02 && pos.y <= 1.85;

          // Target tracking timeout: if arm is unable to reach target within 1.2s, release lock and re-evaluate immediately
          if (!isStillValid || ap.lockTimer > 1.2) {
            if (b) b.lastPushTime = now + 100;
            ap.lockedTargetBall = null;
            ap.lockTimer = 0;
            ap.approachAttempts = 0;
            if (ap.throwState === 'APPROACH') {
              ap.throwBall = null;
              ap.throwState = 'IDLE';
            }
          }
        } else {
          ap.lockTimer = 0;
        }

        // 1. Scan for any foreign/alien intruder balls strictly INSIDE this arm's home circle (radius <= 1.35m)
        let hasAlienBallsInBase = false;
        for (let i = 0; i < this.balls.length; i++) {
          const b = this.balls[i];
          if (!b || !b.mesh || b.isHeld || b.teamId === armTeam || (now < (b.lastPushTime || 0))) continue;
          const pos = b.mesh.position;
          const hDist = Math.hypot(pos.x - ap.basePos.x, pos.z - basePos.z);
          if (hDist <= 1.35 && pos.y >= 0.02 && pos.y <= 1.85) {
            hasAlienBallsInBase = true;
            break;
          }
        }

        // Strict priority override: If an alien intruder enters home circle while arm was retrieving own ball, abort and eject intruder
        if (hasAlienBallsInBase) {
          if (ap.lockedTargetBall && ap.lockedTargetBall.teamId === armTeam) {
            ap.lockedTargetBall = null;
            ap.lockTimer = 0;
          }
          if (ap.throwState === 'APPROACH' && ap.throwMode === 'RETRIEVE_CARRY') {
            ap.throwBall = null;
            ap.throwState = 'IDLE';
            robot.setGripper(0.0);
          }
        }

        let bestTarget = null;
        let lowestScore = Infinity;

        for (let i = 0; i < this.balls.length; i++) {
          const b = this.balls[i];
          if (!b || !b.mesh || b.isHeld || (now < (b.lastPushTime || 0))) continue;
          const pos = b.mesh.position;
          const hDist = Math.hypot(pos.x - ap.basePos.x, pos.z - ap.basePos.z);

          // Full extended reach envelope covering defense station and boundary corridors (r <= 2.15m)
          if (hDist > 2.15 || pos.y < 0.02) continue;

          const isOwnColor = (b.teamId === armTeam);

          // ABSOLUTE DEFENSE RULE: While ANY alien intruder ball is inside the circle (r <= 1.35), clear intruder first
          if (hasAlienBallsInBase && isOwnColor) {
            continue;
          }

          const ballSpeed = b.velocity.length();

          let targetDir;
          let priorityScore = 0;

          if (!isOwnColor) {
            // FOREIGN INTRUDER BALL: Eject towards its owner station
            const oppBase = this.armPursuits[b.teamId]?.basePos || new THREE.Vector3(0, 0, 0);
            const dxOpp = oppBase.x - pos.x;
            const dzOpp = oppBase.z - pos.z;
            const dOpp = Math.hypot(dxOpp, dzOpp);
            targetDir = dOpp > 0.001 ? new THREE.Vector3(dxOpp / dOpp, 0, dzOpp / dOpp) : new THREE.Vector3(1, 0, 0);

            if (hDist <= 1.35) {
              // Inside home circle: Absolute top priority (clear out all intruders!)
              const speedUrgency = ballSpeed > 0.20 ? 0.08 : 0.0;
              priorityScore = 0.005 + (hDist / 1.35) * 0.015 - speedUrgency;
            } else {
              // In boundary corridor / outer reach: Proactive arena-wide clearance
              priorityScore = 0.15 + (hDist / 2.15) * 0.08;
            }
          } else {
            // OWN COLOR BALL
            if (hDist > 1.35) {
              // OUTSIDE THE CIRCLE: Top Priority Retrieval to bring it inside!
              const dxBase = ap.basePos.x - pos.x;
              const dzBase = ap.basePos.z - pos.z;
              const dBase = Math.hypot(dxBase, dzBase);
              targetDir = dBase > 0.001 ? new THREE.Vector3(dxBase / dBase, 0, dzBase / dBase) : new THREE.Vector3(0, 0, 0);

              // Prioritize closer outside balls first, higher priority than foreign balls outside circle
              priorityScore = 0.008 + (hDist - 1.35) * 0.015;
            } else {
              // ALREADY INSIDE THE CIRCLE
              // If already settled inside the circle, leave undisturbed so it remains secure
              if (ballSpeed < 0.25) continue;

              const dxBase = ap.basePos.x - pos.x;
              const dzBase = ap.basePos.z - pos.z;
              const dBase = Math.hypot(dxBase, dzBase);
              targetDir = dBase > 0.001 ? new THREE.Vector3(dxBase / dBase, 0, dzBase / dBase) : new THREE.Vector3(0, 0, 0);
              priorityScore = 0.12;
            }
          }

          const angleOffset = (b === ap.lastAttemptBall) ? ap.currentAngleOffset : 0;
          const yOffset = (b === ap.lastAttemptBall) ? ap.currentYOffset : 0;
          const prediction = this.predictInterception(b, tcpPos, ap.basePos, targetDir, angleOffset, yOffset);

          if (prediction) {
            let score = prediction.time * 0.8 + prediction.dist * 0.5 + priorityScore;

            if (b === ap.lockedTargetBall) {
              score -= 0.25; // Moderate hysteresis bonus
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
          const targetBall = bestTarget.ball;
          ap.lockedTargetBall = targetBall;
          ap.currentTargetBall = targetBall;

          // Automatically engage unified Grasp & Retrieve / Catapult State Machine
          if (ap.throwState === 'IDLE') {
            ap.throwState = 'APPROACH';
            ap.throwMode = (targetBall.teamId === armTeam) ? 'RETRIEVE_CARRY' : 'EJECT';
            ap.throwBall = targetBall;
            ap.throwTimer = 0;
            robot.setGripper(0.0);
          }

          ap.pursuitTarget.copy(bestTarget.interceptPos);
          if (!primaryTargetBall) primaryTargetBall = targetBall;
        } else {
          ap.currentTargetBall = null;
          ap.lockedTargetBall = null;
          ap.lastAttemptBall = null;
          ap.attemptTimer = 0;
          ap.approachAttempts = 0;
          ap.currentAngleOffset = 0;
          ap.currentWristRoll = 0;
          ap.currentWristPitch = 0;
          ap.currentYOffset = 0;
          const dirToCenter = new THREE.Vector3(-ap.basePos.x, 0, -ap.basePos.z).normalize();
          const restX = ap.basePos.x + dirToCenter.x * 0.45;
          const restZ = ap.basePos.z + dirToCenter.z * 0.45;
          const restY = 0.50;
          ap.pursuitTarget.set(restX, restY, restZ);
        }

        // Fast, agile critically damped Cartesian pursuit (SmoothDamp)
        const smoothTime = 0.016;
        const maxSpeed = 18.0;

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

        kinematics.solveIK(ap.pursuitPos, 18, 0.002, false, ap.currentWristRoll, ap.currentWristPitch);
        robot.group.updateMatrixWorld(true);

        // Immediate post-IK synchronization: eliminates 1-frame transform lag and jitter/vibration
        if (ap.heldBall && ap.heldBall.mesh) {
          robot.getTCPWorldPosition(tcpPos);
          ap.heldBall.mesh.position.copy(tcpPos);
          ap.heldBall.velocity.set(0, 0, 0);
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
   * Returns exact real-time ball color/team distribution counts for each robot arm's defense circle
   */
  getArmBallDistribution() {
    const distributions = [
      { total: 0, counts: [0, 0, 0, 0] },
      { total: 0, counts: [0, 0, 0, 0] },
      { total: 0, counts: [0, 0, 0, 0] },
      { total: 0, counts: [0, 0, 0, 0] }
    ];

    for (let i = 0; i < this.balls.length; i++) {
      const b = this.balls[i];
      if (!b || !b.mesh) continue;
      const pos = b.mesh.position;

      for (let k = 0; k < this.armPursuits.length; k++) {
        const ap = this.armPursuits[k];
        const dist = Math.hypot(pos.x - ap.basePos.x, pos.z - ap.basePos.z);
        if (dist <= 1.35) {
          const tId = Math.max(0, Math.min(3, b.teamId ?? 0));
          distributions[k].counts[tId]++;
          distributions[k].total++;
        }
      }
    }

    return distributions;
  }

  /**
   * Returns comprehensive multi-arm territory statistics
   */
  getStats() {
    const distributions = this.getArmBallDistribution();
    const territoryCounts = [
      distributions[0].counts[0],
      distributions[1].counts[1],
      distributions[2].counts[2],
      distributions[3].counts[3]
    ];
    const foreignCounts = [
      distributions[0].total - distributions[0].counts[0],
      distributions[1].total - distributions[1].counts[1],
      distributions[2].total - distributions[2].counts[2],
      distributions[3].total - distributions[3].counts[3]
    ];

    const victoryStates = [
      this.armPursuits[0]?.isDancing || false,
      this.armPursuits[1]?.isDancing || false,
      this.armPursuits[2]?.isDancing || false,
      this.armPursuits[3]?.isDancing || false
    ];

    return {
      score: this.score,
      pushCount: this.pushCount,
      burstCount: this.pushCount,
      combo: this.combo,
      activeBalls: this.balls.length,
      territoryCounts,
      foreignCounts,
      victoryStates,
      distributions,
      armPursuits: this.armPursuits
    };
  }
}


