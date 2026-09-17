import * as THREE from 'three';

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

    // The reach zone the robot arms actively defend (extended reach envelope)
    this.maxDefenseRadius = 1.65;
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
   * Spawns / drops a ball at the center circle with designated arm team solid color
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
    const mat = this.teamMaterials[teamId];

    // Uniform spherical ball size (0.064m - 0.074m)
    const ballRadius = 0.064 + Math.random() * 0.010;
    // Damped dense rubber elasticity (less hyper-bouncy, natural tactile settle)
    const baseRestitution = 0.42 + Math.random() * 0.05;
    const mass = Math.pow(ballRadius / 0.070, 3) * 0.08;

    // Gentle vertical initial drop
    const vx = (Math.random() - 0.5) * 0.04;
    const vz = (Math.random() - 0.5) * 0.04;
    const vy = -0.20;

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
   * Returns precise floor elevation and surface normal across the arena,
   * including the smooth convex center dome (r <= 0.82m, height = 0.038m).
   */
  getFloorInfo(x, z) {
    const r = Math.hypot(x, z);
    const domeRadius = 0.82;
    const domeHeight = 0.038;

    if (r <= domeRadius) {
      const angle = (Math.PI * r) / domeRadius;
      // Convex mound profile: y = +(domeHeight / 2) * (1 + cos(angle))
      const yFloor = (domeHeight / 2) * (1 + Math.cos(angle));
      // Radial slope magnitude
      const slope = (domeHeight * Math.PI) / (2 * domeRadius) * Math.sin(angle);
      // For a convex dome, outward slope tilts outward away from center (+x, +z)
      const nx = r > 0.0001 ? (slope * x / r) : 0;
      const nz = r > 0.0001 ? (slope * z / r) : 0;
      const ny = 1.0;
      const len = Math.hypot(nx, ny, nz);

      return {
        y: yFloor,
        normal: new THREE.Vector3(nx / len, ny / len, nz / len),
        slope: slope,
        inDome: true,
        r: r
      };
    }

    return {
      y: 0.0,
      normal: new THREE.Vector3(0, 1, 0),
      slope: 0,
      inDome: false,
      r: r
    };
  }

  /**
   * Fast, Optimized 80-Ball Bouncing Physics with True Spherical Integrity & Convex Center Dome
   */
  updateBallPhysics(deltaTime) {
    const numBalls = this.balls.length;
    const subSteps = 2; // High-precision sub-stepping for smooth 80-ball physics
    const dt = deltaTime / subSteps;
    const maxSpeedLimit = 3.6;

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

        // Floor Elevation & Convex Surface Evaluation
        const floor = this.getFloorInfo(pos.x, pos.z);
        const contactY = floor.y + b.radius;

        // Convex Dome Gravitational Outward Roll Acceleration
        if (floor.inDome && floor.r > 0.001) {
          const outwardDirX = pos.x / floor.r;
          const outwardDirZ = pos.z / floor.r;
          const aOutward = Math.abs(this.gravity) * floor.slope * 1.30;
          b.velocity.x += outwardDirX * aOutward * dt;
          b.velocity.z += outwardDirZ * aOutward * dt;
        }

        // Floor Contact & Damped Rubbery Bouncing
        if (pos.y <= contactY) {
          pos.y = contactY;
          const normal = floor.normal;
          const vDotN = b.velocity.dot(normal);

          if (vDotN < -0.15) {
            b.velocity.addScaledVector(normal, -(1.0 + b.restitution * 0.80) * vDotN);
            b.velocity.x *= 0.93;
            b.velocity.z *= 0.93;
            b.bounces++;

            if (Math.abs(vDotN) > 0.8) {
              this.audio.playBallBounce(Math.min(1.0, Math.abs(vDotN) / 2.5));
            }
          } else {
            b.velocity.y = (normal.y - 1.0) * 0.08;
            b.velocity.x *= (1.0 - dt * 2.6);
            b.velocity.z *= (1.0 - dt * 2.6);
          }
        }

        // 1b. Robot Arm Solid Black Base Pedestal Collisions & Bounces (Impenetrable Physical Barrier)
        const numArms = this.armPursuits.length;
        for (let a = 0; a < numArms; a++) {
          const basePos = this.armPursuits[a].basePos;
          const dx = pos.x - basePos.x;
          const dz = pos.z - basePos.z;
          const hDist = Math.hypot(dx, dz);

          // Check vertical zone of the robot arm base pedestal (0 to 0.58m)
          if (pos.y <= 0.58) {
            // Sculpted radial profile of the black base pedestal
            let baseRadius = 0.355; // Ground mounting flange & bolt ring
            if (pos.y > 0.07 && pos.y <= 0.22) {
              baseRadius = 0.295; // Cast pedestal column
            } else if (pos.y > 0.22 && pos.y <= 0.38) {
              baseRadius = 0.260; // Turntable ring & housing
            } else if (pos.y > 0.38) {
              baseRadius = 0.235; // Shoulder yoke pivot
            }

            const minSolidDist = baseRadius + b.radius;

            if (hDist < minSolidDist) {
              // Exact outward normal vector
              const nx = hDist > 0.0001 ? (dx / hDist) : 1.0;
              const nz = hDist > 0.0001 ? (dz / hDist) : 0.0;

              // Immediate positional separation: push ball completely outside the base
              pos.x = basePos.x + nx * minSolidDist;
              pos.z = basePos.z + nz * minSolidDist;

              // Elastic velocity bounce off base cylinder (damped to prevent violent rebound)
              const vDotN = b.velocity.x * nx + b.velocity.z * nz;
              if (vDotN < 0) {
                const restitution = Math.max(0.38, b.restitution * 0.55);
                const impulse = -(1.0 + restitution) * vDotN;
                b.velocity.x += impulse * nx;
                b.velocity.z += impulse * nz;

                // Deflect outward slightly vertically if rolling against flange
                if (pos.y < 0.10) {
                  b.velocity.y = Math.max(b.velocity.y, Math.abs(vDotN) * 0.15);
                }

                b.bounces++;
                if (Math.abs(vDotN) > 0.6) {
                  this.audio.playBallBounce(Math.min(1.0, Math.abs(vDotN) / 2.5));
                }
              }
            }
          } else if (pos.y <= 0.65 + b.radius && hDist < 0.24 + b.radius) {
            // Landing on top of shoulder/turntable horizontal shelf
            pos.y = 0.65 + b.radius;
            if (b.velocity.y < -0.3) {
              b.velocity.y = Math.abs(b.velocity.y) * 0.40;
              b.bounces++;
              this.audio.playBallBounce(0.35);
            }
          }
        }

        // Arena Perimeter Wall Bounces (Firm rubbery damping)
        if (pos.x < this.bounds.minX + b.radius) {
          pos.x = this.bounds.minX + b.radius;
          b.velocity.x = Math.abs(b.velocity.x) * 0.30;
        } else if (pos.x > this.bounds.maxX - b.radius) {
          pos.x = this.bounds.maxX - b.radius;
          b.velocity.x = -Math.abs(b.velocity.x) * 0.30;
        }

        if (pos.z < this.bounds.minZ + b.radius) {
          pos.z = this.bounds.minZ + b.radius;
          b.velocity.z = Math.abs(b.velocity.z) * 0.30;
        } else if (pos.z > this.bounds.maxZ - b.radius) {
          pos.z = this.bounds.maxZ - b.radius;
          b.velocity.z = -Math.abs(b.velocity.z) * 0.30;
        }

        // Ceiling bounce
        if (pos.y > this.bounds.maxY - b.radius) {
          pos.y = this.bounds.maxY - b.radius;
          b.velocity.y = -Math.abs(b.velocity.y) * 0.30;
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

            // Damped rubbery impulse between balls
            if (vNormal < 0) {
              const restitution = Math.min(b1.restitution, b2.restitution) * 0.45;
              const impulse = -(1.0 + restitution) * vNormal / (1.0 / b1.mass + 1.0 / b2.mass) * 0.65;

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

              if (Math.abs(vNormal) > 1.2) {
                this.audio.playBallBounce(Math.min(1.0, Math.abs(vNormal) / 3.0));
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
  predictInterception(ball, currentTcp, basePos, targetDir, angleOffset = 0, yOffset = 0) {
    const simPos = ball.mesh.position.clone();
    const simVel = ball.velocity.clone();
    const dt = 0.033;
    const maxSteps = 30;
    const armSpeed = 6.0;

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
        // Strike target: position TCP slightly behind the ball relative to rotated attack direction
        const strikePos = simPos.clone().addScaledVector(rotatedAttackDir, -ball.radius * 0.45);
        
        // Clamp strikePos to robot's physical reach envelope (<= 1.35m)
        const sDx = strikePos.x - basePos.x;
        const sDz = strikePos.z - basePos.z;
        const sH = Math.hypot(sDx, sDz);
        if (sH > 1.35) {
          strikePos.x = basePos.x + (sDx / sH) * 1.35;
          strikePos.z = basePos.z + (sDz / sH) * 1.35;
        }
        
        strikePos.y = Math.max(floorAtPos.y + ball.radius * 0.75 + yOffset, simPos.y + yOffset);

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
    const safeH = Math.max(0.20, Math.min(1.35, fbH));
    if (fbH > 0.001) {
      fallbackPos.x = basePos.x + (offset.x / fbH) * safeH;
      fallbackPos.z = basePos.z + (offset.z / fbH) * safeH;
    }
    const fbFloor = this.getFloorInfo(fallbackPos.x, fallbackPos.z);
    fallbackPos.y = Math.max(fbFloor.y + ball.radius * 0.75 + yOffset, Math.min(1.40, fallbackPos.y));

    const strikeFallback = fallbackPos.clone().addScaledVector(rotatedAttackDir, -ball.radius * 0.45);
    const sfDx = strikeFallback.x - basePos.x;
    const sfDz = strikeFallback.z - basePos.z;
    const sfH = Math.hypot(sfDx, sfDz);
    if (sfH > 1.35) {
      strikeFallback.x = basePos.x + (sfDx / sfH) * 1.35;
      strikeFallback.z = basePos.z + (sfDz / sfH) * 1.35;
    }
    strikeFallback.y = Math.max(fbFloor.y + ball.radius * 0.75 + yOffset, strikeFallback.y);

    return {
      interceptPos: strikeFallback,
      targetDir: targetDir,
      time: 0.15,
      dist: currentTcp.distanceTo(strikeFallback)
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

        if (b.centerStuckTime > 1.4) {
          const armIdx = b.teamId;
          const ap = this.armPursuits[armIdx];

          if (ap && ap.throwState === 'IDLE' && !this.hasActiveThreatsInZone(armIdx, b)) {
            // Find a resting own-color ball in this arm's zone to use as projectile ammo
            let ammoBall = null;
            let closestDist = Infinity;
            for (let j = 0; j < this.balls.length; j++) {
              const ab = this.balls[j];
              if (!ab || !ab.mesh || ab.isHeld || ab === b) continue;
              if (ab.teamId === armIdx) {
                const abSpeed = ab.velocity.length();
                if (abSpeed > 0.35) continue; // Pick a slow/resting ball as ammo

                const d = Math.hypot(ab.mesh.position.x - ap.basePos.x, ab.mesh.position.z - ap.basePos.z);
                if (d >= 0.22 && d <= 1.45 && d < closestDist) {
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
        if (!isOwnColor && distBase <= 1.45) {
          const speed = b.velocity.length();
          if (speed < 0.25) {
            b.stuckTime = (b.stuckTime || 0) + deltaTime;
          } else {
            b.stuckTime = Math.max(0, (b.stuckTime || 0) - deltaTime * 0.8);
          }

          // If ball has been stuck for > 0.9s and no dynamic fast threats, initiate Grab & Throw
          if (b.stuckTime > 0.9 && ap.throwState === 'IDLE' && !this.hasActiveThreatsInZone(rIdx, b)) {
            ap.throwState = 'APPROACH';
            ap.throwMode = 'EJECT';
            ap.throwBall = b;
            ap.centerTargetBall = null;
            ap.throwTimer = 0;
            robot.setGripper(0.0); // Open wide!
          }
        }

        // --- Active Gripper / TCP Push Contact Zone (Normal Fast Deflections & Swats) ---
        if (ap.throwState === 'IDLE') {
          const distToTcp = pos.distanceTo(tcpPos);
          const hDistTcp = Math.hypot(pos.x - tcpPos.x, pos.z - tcpPos.z);
          const vDistTcp = Math.abs(pos.y - tcpPos.y);
          const pushThreshold = b.radius + 0.18;
          const isProximity = (distToTcp <= pushThreshold) || (hDistTcp <= b.radius + 0.16 && vDistTcp <= 0.24);
          const canBePushed = (now - b.lastPushTime) > 80;

          if (isProximity && pos.y >= 0.02 && canBePushed) {
            b.lastPushTime = now;

            let pushDir;
            let pushForce;

            if (!isOwnColor) {
              // EJECT OPPONENT BALL: Strongly propel towards opponent station
              const oppBase = this.armPursuits[b.teamId]?.basePos || new THREE.Vector3(0, 0, 0);
              const dxOpp = oppBase.x - pos.x;
              const dzOpp = oppBase.z - pos.z;
              const dOpp = Math.hypot(dxOpp, dzOpp);

              if (dOpp > 0.1) {
                pushDir = new THREE.Vector3(dxOpp / dOpp, 0, dzOpp / dOpp);
              } else {
                pushDir = distBase > 0.001 ? new THREE.Vector3(dxBase / distBase, 0, dzBase / distBase) : new THREE.Vector3(1, 0, 0);
              }

              // If approaching with retry orientation offset, deflect push direction to bypass obstruction
              if (ap.approachAttempts > 0 && Math.abs(ap.currentAngleOffset) > 0.001) {
                const cosA = Math.cos(ap.currentAngleOffset * 0.45);
                const sinA = Math.sin(ap.currentAngleOffset * 0.45);
                pushDir = new THREE.Vector3(
                  pushDir.x * cosA - pushDir.z * sinA,
                  0,
                  pushDir.x * sinA + pushDir.z * cosA
                ).normalize();
              }

              pushForce = 2.1 + Math.random() * 0.35;
              ap.ejectionsCount++;
              this.score += 50;
            } else {
              // RETAIN OWN BALL: Guide & shield it safely behind the robot arm sanctuary
              const behindDir = new THREE.Vector3(basePos.x, 0, basePos.z).normalize();
              const sanctuaryPos = basePos.clone().addScaledVector(behindDir, 0.48);
              const dxS = sanctuaryPos.x - pos.x;
              const dzS = sanctuaryPos.z - pos.z;
              const dS = Math.hypot(dxS, dzS);
              pushDir = dS > 0.001 ? new THREE.Vector3(dxS / dS, 0, dzS / dS) : behindDir;
              pushForce = 1.25 + Math.random() * 0.30;
              ap.retainsCount++;
              this.score += 20;
            }

            b.velocity.x = pushDir.x * pushForce;
            b.velocity.z = pushDir.z * pushForce;
            b.velocity.y = 0.26 + Math.random() * 0.12;
            b.bounces++;

            // Successful contact: reset retry counter & orientation
            ap.approachAttempts = 0;
            ap.attemptTimer = 0;
            ap.currentAngleOffset = 0;
            ap.currentWristRoll = 0;
            ap.currentWristPitch = 0;
            ap.currentYOffset = 0;

            this.pushCount++;
            this.combo++;
            this.lastPushTime = now;

            this.createPushRippleEffect(pos, b.color, b.radius, pushDir);
            robot.setGripper(0.85);
            if (this.audio && typeof this.audio.playArmSwat === 'function') {
              this.audio.playArmSwat(Math.min(1.0, pushForce / 2.4));
            }
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
                b.velocity.addScaledVector(outBaseDir, 0.30 + Math.random() * 0.15);
                b.bounces++;
                if (Math.abs(vDotN) > 0.4) {
                  this.audio.playBallBounce(Math.min(1.0, Math.abs(vDotN) / 2.0));
                }
              }
            }
          }
        }
      }

      // --- GRAB & THROW STATE MACHINE FOR THIS ARM ---
      if (ap.throwState === 'APPROACH') {
        robot.setGripper(0.0); // Open wide!
        ap.throwTimer += deltaTime;

        // Failsafe timeout or target invalidation: if grasp takes > 1.2s, apply impulse and reset to IDLE
        if (!ap.throwBall || !ap.throwBall.mesh || ap.throwBall.isHeld || ap.throwTimer > 1.2) {
          if (ap.throwBall && ap.throwBall.mesh) {
            const outDir = new THREE.Vector3(ap.throwBall.mesh.position.x - basePos.x, 0, ap.throwBall.mesh.position.z - basePos.z).normalize();
            ap.throwBall.velocity.addScaledVector(outDir, 1.4);
            ap.throwBall.velocity.y = 0.35;
            ap.throwBall.stuckTime = 0;
          }
          ap.throwBall = null;
          ap.centerTargetBall = null;
          ap.throwMode = 'EJECT';
          ap.throwState = 'IDLE';
        } else {
          // Track directly onto ammo ball center
          const ballPos = ap.throwBall.mesh.position;
          ap.pursuitTarget.set(ballPos.x, Math.max(0.040, ballPos.y), ballPos.z);

          const distToBall = tcpPos.distanceTo(ballPos);
          if (distToBall <= ap.throwBall.radius + 0.13) {
            // CLAMP / GRASP!
            robot.setGripper(1.0);
            ap.heldBall = ap.throwBall;
            ap.heldBall.isHeld = true;
            ap.heldBall.velocity.set(0, 0, 0);
            this.audio.playPneumatic(true);
            ap.throwState = 'WINDUP';
            ap.throwTimer = 0.26;

            if (ap.throwMode === 'CENTER_STRIKE') {
              // Aim directly at the stationary center ball!
              const targetPos = (ap.centerTargetBall && ap.centerTargetBall.mesh) ? ap.centerTargetBall.mesh.position : new THREE.Vector3(0, 0.065, 0);
              ap.targetThrowDir.set(targetPos.x - ap.basePos.x, 0, targetPos.z - ap.basePos.z).normalize();
            } else {
              // Compute throw direction toward opponent station
              const oppBase = this.armPursuits[ap.heldBall.teamId]?.basePos || new THREE.Vector3(0, 0, 0);
              ap.targetThrowDir.set(oppBase.x - ap.basePos.x, 0, oppBase.z - ap.basePos.z).normalize();
              if (ap.targetThrowDir.lengthSq() < 0.001) {
                ap.targetThrowDir.set(-ap.basePos.x, 0, -ap.basePos.z).normalize();
              }
            }
          }
        }
      } else if (ap.throwState === 'WINDUP') {
        if (ap.heldBall && ap.heldBall.mesh) {
          ap.heldBall.mesh.position.copy(tcpPos);
          ap.heldBall.velocity.set(0, 0, 0);
        }

        if (ap.throwMode === 'CENTER_STRIKE') {
          // Precise low wind-up aligned directly back along the line of sight
          const tgtPos = (ap.centerTargetBall && ap.centerTargetBall.mesh) ? ap.centerTargetBall.mesh.position : new THREE.Vector3(0, 0.065, 0);
          const aimDir = new THREE.Vector3(tgtPos.x - ap.basePos.x, 0, tgtPos.z - ap.basePos.z).normalize();
          ap.targetThrowDir.copy(aimDir);

          const windUpPos = ap.basePos.clone().add(new THREE.Vector3(0, 0.35, 0)).addScaledVector(aimDir, -0.22);
          ap.pursuitTarget.copy(windUpPos);
        } else {
          // High catapult wind-up
          const windUpPos = ap.basePos.clone().add(new THREE.Vector3(0, 0.88, 0)).addScaledVector(ap.targetThrowDir, -0.30);
          ap.pursuitTarget.copy(windUpPos);
        }

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

        if (ap.throwMode === 'CENTER_STRIKE') {
          // Low forward power bowling stroke right along floor line of sight
          const swingPos = ap.basePos.clone().add(new THREE.Vector3(0, 0.060, 0)).addScaledVector(ap.targetThrowDir, 0.85);
          ap.pursuitTarget.copy(swingPos);
        } else {
          const swingPos = ap.basePos.clone().add(new THREE.Vector3(0, 0.52, 0)).addScaledVector(ap.targetThrowDir, 1.10);
          ap.pursuitTarget.copy(swingPos);
        }

        ap.throwTimer -= deltaTime;
        if (ap.throwTimer <= 0) {
          // POWER THROW RELEASE!
          robot.setGripper(0.0); // Open wide to release!

          if (ap.heldBall && ap.heldBall.mesh) {
            if (ap.throwMode === 'CENTER_STRIKE') {
              // PINPOINT BILLIARD BOWLING SNIPE:
              // Compute exact vector from TCP directly to the center target ball's center!
              const tgtPos = (ap.centerTargetBall && ap.centerTargetBall.mesh) ? ap.centerTargetBall.mesh.position : new THREE.Vector3(0, 0.065, 0);
              const strikeVector = new THREE.Vector3(tgtPos.x - tcpPos.x, 0, tgtPos.z - tcpPos.z);
              const strikeDist = strikeVector.length();
              if (strikeDist > 0.001) strikeVector.normalize();
              else strikeVector.copy(ap.targetThrowDir);

              const strikeSpeed = 3.2; // Controlled kinetic bowling speed
              ap.heldBall.mesh.position.set(tcpPos.x, 0.065, tcpPos.z);
              ap.heldBall.velocity.set(strikeVector.x * strikeSpeed, 0.02, strikeVector.z * strikeSpeed);

              if (ap.centerTargetBall) ap.centerTargetBall.centerStuckTime = 0;
            } else {
              // High arc catapult throw towards opponent base
              const oppBase = this.armPursuits[ap.heldBall.teamId]?.basePos || new THREE.Vector3(0, 0, 0);
              const oppVector = new THREE.Vector3(oppBase.x - tcpPos.x, 0, oppBase.z - tcpPos.z);
              if (oppVector.lengthSq() > 0.001) oppVector.normalize();
              else oppVector.copy(ap.targetThrowDir);

              const throwPower = 2.6;
              ap.heldBall.velocity.set(oppVector.x * throwPower, 0.65, oppVector.z * throwPower);
            }

            ap.heldBall.bounces++;
            ap.heldBall.stuckTime = 0;
            ap.heldBall.isHeld = false;
            ap.heldBall.lastPushTime = now + 400;

            this.createPushRippleEffect(tcpPos, ap.heldBall.color, ap.heldBall.radius, ap.targetThrowDir);
            this.audio.playPuff();
            if (this.audio && typeof this.audio.playArmSwat === 'function') {
              this.audio.playArmSwat(1.1);
            }
            ap.ejectionsCount++;
            this.pushCount++;
            this.score += 100;
          }

          ap.heldBall = null;
          ap.throwBall = null;
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
        // All own balls are gathered inside this circle AND zero foreign balls
        const totalOwnBalls = this.balls.filter(b => b.teamId === armTeam).length;
        const ownInCircle = distributions[k]?.counts[armTeam] || 0;
        const foreignInCircle = (distributions[k]?.total || 0) - ownInCircle;
        const isComplete = (totalOwnBalls > 0 && ownInCircle === totalOwnBalls && foreignInCircle === 0);

        ap.isDancing = isComplete;

        if (isComplete) {
          ap.danceTimer = (ap.danceTimer || 0) + deltaTime;
          if (!ap.wasDancing) {
            ap.wasDancing = true;
            if (this.audio && typeof this.audio.playVictoryFanfare === 'function') {
              this.audio.playVictoryFanfare();
            }
          }

          // --- VICTORY CELEBRATION DANCE ANIMATION ---
          const t = ap.danceTimer;
          const baseDirYaw = Math.atan2(-ap.basePos.x, -ap.basePos.z);
          const j1 = baseDirYaw + Math.sin(t * 4.5) * 0.45; // Upbeat base sway
          const j2 = -0.38 + Math.sin(t * 9.0) * 0.32;   // Shoulder bounce
          const j3 = 0.68 + Math.cos(t * 9.0) * 0.35;    // Elbow groove
          const j4 = Math.sin(t * 6.0) * 1.6;            // Forearm wave
          const j5 = -0.65 + Math.cos(t * 9.0) * 0.48;   // Wrist pitch flex
          const j6 = Math.sin(t * 14.0) * 4.2;           // Flange celebration spin

          robot.setTargetAngles([j1, j2, j3, j4, j5, j6]);
          robot.setGripper(0.5 + 0.5 * Math.sin(t * 16.0)); // Gripper celebration claps!
          continue;
        } else {
          ap.danceTimer = 0;
          ap.wasDancing = false;
        }

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

          kinematics.solveIK(ap.pursuitPos, 18, 0.002, false, ap.currentWristRoll, ap.currentWristPitch);
          continue;
        }

        // Validate locked target for this arm with anti-stall tracking
        if (ap.lockedTargetBall) {
          const b = ap.lockedTargetBall;
          const bIndex = this.balls.indexOf(b);
          const pos = b && b.mesh ? b.mesh.position : null;
          const hDist = pos ? Math.hypot(pos.x - ap.basePos.x, pos.z - ap.basePos.z) : 999;
          const isStillValid = bIndex !== -1 && !b.isHeld && hDist <= 1.75 && pos.y >= 0.02 && pos.y <= 1.85;

          ap.lockTimer = (ap.lockTimer || 0) + deltaTime;

          // Anti-stall: If locked on same stationary ball for > 0.8s without clearing, pop it and re-evaluate
          if (!isStillValid || ap.lockTimer > 0.8) {
            if (ap.lockTimer > 0.8 && b && b.mesh) {
              const isOwn = (b.teamId === armTeam);
              if (isOwn) {
                const behindDir = new THREE.Vector3(ap.basePos.x, 0, ap.basePos.z).normalize();
                const sanctuaryPos = ap.basePos.clone().addScaledVector(behindDir, 0.48);
                const inDir = new THREE.Vector3(sanctuaryPos.x - pos.x, 0, sanctuaryPos.z - pos.z).normalize();
                b.velocity.x = inDir.x * 1.8;
                b.velocity.z = inDir.z * 1.8;
                b.velocity.y = 0.28;
              } else {
                const oppBase = this.armPursuits[b.teamId]?.basePos || new THREE.Vector3(0, 0, 0);
                const outDir = new THREE.Vector3(oppBase.x - pos.x, 0, oppBase.z - pos.z).normalize();
                b.velocity.x = outDir.x * 2.8;
                b.velocity.z = outDir.z * 2.8;
                b.velocity.y = 0.40;
              }
              b.lastPushTime = now;
              b.bounces++;
            }
            ap.lockedTargetBall = null;
            ap.lockTimer = 0;
            ap.approachAttempts = 0;
          }
        } else {
          ap.lockTimer = 0;
        }

        let bestTarget = null;
        let lowestScore = Infinity;

        for (let i = 0; i < this.balls.length; i++) {
          const b = this.balls[i];
          if (!b || !b.mesh || b.isHeld) continue;
          const pos = b.mesh.position;
          const hDist = Math.hypot(pos.x - ap.basePos.x, pos.z - ap.basePos.z);

          // Full extended reach envelope covering defense station and boundary corridors (r <= 1.75m)
          if (hDist > 1.75 || pos.y < 0.02) continue;

          const isOwnColor = (b.teamId === armTeam);
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

            if (hDist <= 1.45) {
              // Inside home circle: Absolute top priority (clear out all intruders!)
              const speedUrgency = ballSpeed > 0.20 ? 0.08 : 0.0;
              priorityScore = 0.01 + (hDist / 1.45) * 0.15 - speedUrgency;
            } else {
              // In boundary corridor / outer reach: Proactive arena-wide clearance
              priorityScore = 0.22 + (hDist / 1.75) * 0.20;
            }
          } else {
            // OWN COLOR BALL: Guide and retain in protected rear sanctuary behind arm
            const behindDir = new THREE.Vector3(ap.basePos.x, 0, ap.basePos.z).normalize();
            const sanctuaryPos = ap.basePos.clone().addScaledVector(behindDir, 0.48);
            const distToSanctuary = Math.hypot(pos.x - sanctuaryPos.x, pos.z - sanctuaryPos.z);

            // If already safely protected in rear sanctuary, leave settled
            if (distToSanctuary <= 0.35 && ballSpeed < 0.20) continue;

            if (hDist > 1.65) continue; // Don't reach too far out for settled own balls

            const dxS = sanctuaryPos.x - pos.x;
            const dzS = sanctuaryPos.z - pos.z;
            const dS = Math.hypot(dxS, dzS);
            targetDir = dS > 0.001 ? new THREE.Vector3(dxS / dS, 0, dzS / dS) : behindDir;

            // Priority: moving own balls take precedence, but foreign intruders always higher priority
            priorityScore = 0.50 + (distToSanctuary / 1.65) * 0.25 - (ballSpeed > 0.20 ? 0.10 : 0.0);
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

          // Adaptive Retry Angle & Orientation Cycling:
          // If stuck on the same ball without clearing it, systematically cycle approach angles and wrist orientation
          if (ap.lastAttemptBall === targetBall) {
            ap.attemptTimer += deltaTime;
            if (ap.attemptTimer > 0.45 && targetBall.velocity.length() < 0.28) {
              ap.attemptTimer = 0;
              ap.approachAttempts++;

              const cycle = ap.approachAttempts % 5;
              if (cycle === 1) {
                // 1. Left Flank Attack: approach from +55 deg side with +45 deg wrist roll
                ap.currentAngleOffset = 0.96;
                ap.currentWristRoll = 0.78;
                ap.currentWristPitch = 0.26;
                ap.currentYOffset = 0.015;
              } else if (cycle === 2) {
                // 2. Right Flank Attack: approach from -55 deg side with -45 deg wrist roll
                ap.currentAngleOffset = -0.96;
                ap.currentWristRoll = -0.78;
                ap.currentWristPitch = 0.26;
                ap.currentYOffset = 0.015;
              } else if (cycle === 3) {
                // 3. Low Shovel Scoop: approach under ball with upward wrist pitch
                ap.currentAngleOffset = 0.0;
                ap.currentWristRoll = 0.0;
                ap.currentWristPitch = -0.44;
                ap.currentYOffset = -0.020;
              } else if (cycle === 4) {
                // 4. High Overhead Hook / Side Flick
                ap.currentAngleOffset = 1.35;
                ap.currentWristRoll = 1.57;
                ap.currentWristPitch = 0.35;
                ap.currentYOffset = 0.035;
              } else {
                // 5. Direct approach reset with energy pulse
                const isOwn = (targetBall.teamId === armTeam);
                if (isOwn) {
                  const behindDir = new THREE.Vector3(ap.basePos.x, 0, ap.basePos.z).normalize();
                  const sanctuaryPos = ap.basePos.clone().addScaledVector(behindDir, 0.48);
                  const inDir = new THREE.Vector3(sanctuaryPos.x - targetBall.mesh.position.x, 0, sanctuaryPos.z - targetBall.mesh.position.z).normalize();
                  targetBall.velocity.x = inDir.x * 1.8;
                  targetBall.velocity.z = inDir.z * 1.8;
                  targetBall.velocity.y = 0.28;
                } else {
                  const outDir = new THREE.Vector3(targetBall.mesh.position.x - ap.basePos.x, 0, targetBall.mesh.position.z - ap.basePos.z).normalize();
                  targetBall.velocity.addScaledVector(outDir, 2.4);
                  targetBall.velocity.y = 0.40;
                }
                targetBall.lastPushTime = now;
                targetBall.bounces++;
                ap.currentAngleOffset = 0;
                ap.currentWristRoll = 0;
                ap.currentWristPitch = 0;
                ap.currentYOffset = 0;
              }
            }
          } else {
            ap.lastAttemptBall = targetBall;
            ap.attemptTimer = 0;
            ap.approachAttempts = 0;
            ap.currentAngleOffset = 0;
            ap.currentWristRoll = 0;
            ap.currentWristPitch = 0;
            ap.currentYOffset = 0;
          }

          ap.lockedTargetBall = targetBall;
          ap.currentTargetBall = targetBall;
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

        kinematics.solveIK(ap.pursuitPos, 18, 0.002, false, ap.currentWristRoll, ap.currentWristPitch);

        if (ap.currentTargetBall) {
          robot.setGripper(0.0);
        }

        // Proactive Hover Stall-Breaker:
        // If the arm's TCP has arrived near target ball (dist <= 0.24m) and ball is resting/slow (v < 0.25m/s)
        // for more than 0.30s, directly trigger contact push without waiting.
        if (ap.currentTargetBall && ap.currentTargetBall.mesh) {
          const tb = ap.currentTargetBall;
          const tbPos = tb.mesh.position;
          const distTcpToTb = tcpPos.distanceTo(tbPos);
          if (distTcpToTb <= 0.24 && tb.velocity.length() < 0.25) {
            ap.hoverStallTimer = (ap.hoverStallTimer || 0) + deltaTime;
            if (ap.hoverStallTimer > 0.30) {
              ap.hoverStallTimer = 0;
              const isOwn = (tb.teamId === armTeam);
              let pushDir;
              let pushForce;
              if (isOwn) {
                const behindDir = new THREE.Vector3(ap.basePos.x, 0, ap.basePos.z).normalize();
                const sanctuaryPos = ap.basePos.clone().addScaledVector(behindDir, 0.48);
                const inDir = new THREE.Vector3(sanctuaryPos.x - tbPos.x, 0, sanctuaryPos.z - tbPos.z).normalize();
                pushDir = inDir;
                pushForce = 1.35;
                ap.retainsCount++;
              } else {
                const oppBase = this.armPursuits[tb.teamId]?.basePos || new THREE.Vector3(0, 0, 0);
                pushDir = new THREE.Vector3(oppBase.x - tbPos.x, 0, oppBase.z - tbPos.z).normalize();
                pushForce = 2.4;
                ap.ejectionsCount++;
              }
              tb.velocity.x = pushDir.x * pushForce;
              tb.velocity.z = pushDir.z * pushForce;
              tb.velocity.y = 0.26;
              tb.lastPushTime = now;
              tb.bounces++;
              this.createPushRippleEffect(tbPos, tb.color, tb.radius, pushDir);
              robot.setGripper(0.85);
              if (this.audio && typeof this.audio.playArmSwat === 'function') {
                this.audio.playArmSwat(Math.min(1.0, pushForce / 2.4));
              }
              setTimeout(() => robot.setGripper(0.0), 140);
              ap.lockedTargetBall = null;
              ap.currentTargetBall = null;
            }
          } else {
            ap.hoverStallTimer = 0;
          }
        } else {
          ap.hoverStallTimer = 0;
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


