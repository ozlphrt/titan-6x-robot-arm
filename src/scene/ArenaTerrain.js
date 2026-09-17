import * as THREE from 'three';

/**
 * Evaluates real-time 3D elevation, normal vector, and slope gradients across the entire arena floor.
 * 
 * Features:
 * 1. High-Convexity Central Dome (14.5cm): Outward radial slope that continuously rolls balls from center to the 4 stations.
 * 2. 4 Inter-Arm Corridor Ridges (13.5cm): Convex ridges along the 4 neutral gaps (+X, -X, +Z, -Z) that push
 *    idle/trapped balls sideways directly into adjacent arm defense circles.
 * 3. 4 Outer Corner & Perimeter Wall Banking Ramps (9.2cm): Banking slopes along perimeter walls and corners
 *    that ensure any ball outside the circles naturally rolls inward towards one of the 4 circles.
 * 4. Level Arm Base Zones: Flat, calm gathering floor within each arm's station sanctuary (radius <= 1.30m).
 */
export function evaluateArenaTerrain(x, z) {
  const r = Math.hypot(x, z);
  const domeRadius = 1.25;
  const domeHeight = 0.145; // 14.5cm high-convexity center dome

  let yDome = 0;
  let gradDomeX = 0;
  let gradDomeZ = 0;

  if (r <= domeRadius) {
    const angle = (Math.PI * r) / domeRadius;
    yDome = (domeHeight / 2) * (1 + Math.cos(angle));
    const slope = -(domeHeight * Math.PI) / (2 * domeRadius) * Math.sin(angle); // dy/dr (negative down outward)
    if (r > 0.0001) {
      gradDomeX = slope * (x / r);
      gradDomeZ = slope * (z / r);
    }
  }

  // 4 Cardinal Corridor Ridges (+X, -X, +Z, -Z) between adjacent arm base circles
  const ridgeWidth = 1.05;   // Half-width of corridor ridge (covers neutral gap between circles)
  const ridgeHeight = 0.135; // 13.5cm height of the ridge crest
  const ridgeReach = 2.75;   // Reaches all the way to the outer perimeter wall

  const absZ = Math.abs(z);
  const absX = Math.abs(x);

  // Corridor along X-axis (between Alpha/Delta on +X, and Beta/Gamma on -X)
  let yRidgeX = 0;
  let gradRidgeXX = 0;
  let gradRidgeXZ = 0;

  if (absZ < ridgeWidth && absX < ridgeReach && absX > 0.15) {
    const crossAngle = (Math.PI * absZ) / ridgeWidth;
    const crossProfile = (1 + Math.cos(crossAngle)) / 2;
    const crossSlope = -(Math.PI / (2 * ridgeWidth)) * Math.sin(crossAngle) * Math.sign(z);

    let longProfile = 1.0;
    let longSlope = 0.0;
    if (absX > 1.70) {
      const t = (absX - 1.70) / (ridgeReach - 1.70);
      longProfile = (1 + Math.cos(Math.PI * Math.min(1.0, t))) / 2;
      longSlope = -(Math.PI / (2 * (ridgeReach - 1.70))) * Math.sin(Math.PI * Math.min(1.0, t)) * Math.sign(x);
    } else if (absX < 0.75) {
      const t = (absX - 0.15) / 0.60;
      longProfile = (1 - Math.cos(Math.PI * Math.max(0, Math.min(1.0, t)))) / 2;
      longSlope = (Math.PI / 1.20) * Math.sin(Math.PI * Math.max(0, Math.min(1.0, t))) * Math.sign(x);
    }

    yRidgeX = ridgeHeight * crossProfile * longProfile;
    gradRidgeXZ = ridgeHeight * crossSlope * longProfile;
    gradRidgeXX = ridgeHeight * crossProfile * longSlope;
  }

  // Corridor along Z-axis (between Alpha/Beta on -Z, and Gamma/Delta on +Z)
  let yRidgeZ = 0;
  let gradRidgeZX = 0;
  let gradRidgeZZ = 0;

  if (absX < ridgeWidth && absZ < ridgeReach && absZ > 0.15) {
    const crossAngle = (Math.PI * absX) / ridgeWidth;
    const crossProfile = (1 + Math.cos(crossAngle)) / 2;
    const crossSlope = -(Math.PI / (2 * ridgeWidth)) * Math.sin(crossAngle) * Math.sign(x);

    let longProfile = 1.0;
    let longSlope = 0.0;
    if (absZ > 1.70) {
      const t = (absZ - 1.70) / (ridgeReach - 1.70);
      longProfile = (1 + Math.cos(Math.PI * Math.min(1.0, t))) / 2;
      longSlope = -(Math.PI / (2 * (ridgeReach - 1.70))) * Math.sin(Math.PI * Math.min(1.0, t)) * Math.sign(z);
    } else if (absZ < 0.75) {
      const t = (absZ - 0.15) / 0.60;
      longProfile = (1 - Math.cos(Math.PI * Math.max(0, Math.min(1.0, t)))) / 2;
      longSlope = (Math.PI / 1.20) * Math.sin(Math.PI * Math.max(0, Math.min(1.0, t))) * Math.sign(z);
    }

    yRidgeZ = ridgeHeight * crossProfile * longProfile;
    gradRidgeZX = ridgeHeight * crossSlope * longProfile;
    gradRidgeZZ = ridgeHeight * crossProfile * longSlope;
  }

  // Smooth composite union of dome and corridor ridges
  let y = yDome;
  let gx = gradDomeX;
  let gz = gradDomeZ;

  if (yRidgeX > y) {
    y = yRidgeX;
    gx = gradRidgeXX;
    gz = gradRidgeXZ;
  }
  if (yRidgeZ > y) {
    y = yRidgeZ;
    gx = gradRidgeZX;
    gz = gradRidgeZZ;
  }

  // Level Arm Base Sanctuaries: smoothly fade central elevation inside each arm's station circle (r <= 1.30m)
  const dArmAlpha = Math.hypot(x - 1.4, z - (-1.4));
  const dArmBeta  = Math.hypot(x - (-1.4), z - (-1.4));
  const dArmGamma = Math.hypot(x - (-1.4), z - 1.4);
  const dArmDelta = Math.hypot(x - 1.4, z - 1.4);
  const minArmDist = Math.min(dArmAlpha, dArmBeta, dArmGamma, dArmDelta);

  if (minArmDist < 1.30) {
    const fade = Math.max(0, Math.min(1.0, (minArmDist - 0.70) / 0.60));
    const smoothFade = (1 - Math.cos(Math.PI * fade)) / 2;
    y *= smoothFade;
    gx *= smoothFade;
    gz *= smoothFade;
  }

  // 3. 4 Outer Corner & Perimeter Wall Convex Banking Ramps
  const cornerStations = [
    { bx: 1.4, bz: -1.4, cx: 2.75, cz: -2.75 },  // Alpha (NE)
    { bx: -1.4, bz: -1.4, cx: -2.75, cz: -2.75 }, // Beta (NW)
    { bx: -1.4, bz: 1.4, cx: -2.75, cz: 2.75 },  // Gamma (SW)
    { bx: 1.4, bz: 1.4, cx: 2.75, cz: 2.75 }     // Delta (SE)
  ];

  const cornerMaxHeight = 0.092; // 9.2cm corner apex incline
  const rCornerStart = 1.36;     // Starts outside the 1.35m circle track rails
  const rCornerEnd = 1.95;       // Apex elevation at corner vertex

  let yCorner = 0;
  let gradCornerX = 0;
  let gradCornerZ = 0;

  for (let k = 0; k < 4; k++) {
    const cs = cornerStations[k];
    const dx = x - cs.bx;
    const dz = z - cs.bz;

    // Outer quadrant facing the corner (behind / outer side of the arm base)
    if (dx * Math.sign(cs.cx) > 0 || dz * Math.sign(cs.cz) > 0) {
      const d = Math.hypot(dx, dz);
      if (d > rCornerStart) {
        const t = Math.min(1.0, (d - rCornerStart) / (rCornerEnd - rCornerStart));
        // Progressive rise towards the outer wall / corner vertex
        const profile = Math.pow((1 - Math.cos(Math.PI * t)) / 2, 1.10);
        const slopeMag = (Math.PI / (2 * (rCornerEnd - rCornerStart))) * Math.sin(Math.PI * t) * 1.10;

        const curY = cornerMaxHeight * profile;
        if (curY > yCorner) {
          yCorner = curY;
          gradCornerX = cornerMaxHeight * slopeMag * (dx / d);
          gradCornerZ = cornerMaxHeight * slopeMag * (dz / d);
        }
      }
    }
  }

  // 4. Perimeter Wall Base Incline Ramps along Outer Glass Walls (|x| > 2.20 or |z| > 2.20)
  const wallInclineStart = 2.15;
  const wallInclineEnd = 2.75;
  const wallMaxHeight = 0.085;

  let yWall = 0;
  let gradWallX = 0;
  let gradWallZ = 0;

  if (absX > wallInclineStart && absX <= wallInclineEnd && minArmDist > 1.25) {
    const tX = (absX - wallInclineStart) / (wallInclineEnd - wallInclineStart);
    const pX = (1 - Math.cos(Math.PI * Math.min(1.0, tX))) / 2;
    const sX = (Math.PI / (2 * (wallInclineEnd - wallInclineStart))) * Math.sin(Math.PI * tX) * Math.sign(x);
    yWall = wallMaxHeight * pX;
    gradWallX = wallMaxHeight * sX;
  }

  if (absZ > wallInclineStart && absZ <= wallInclineEnd && minArmDist > 1.25) {
    const tZ = (absZ - wallInclineStart) / (wallInclineEnd - wallInclineStart);
    const pZ = (1 - Math.cos(Math.PI * Math.min(1.0, tZ))) / 2;
    const sZ = (Math.PI / (2 * (wallInclineEnd - wallInclineStart))) * Math.sin(Math.PI * tZ) * Math.sign(z);
    if (wallMaxHeight * pZ > yWall) {
      yWall = wallMaxHeight * pZ;
      gradWallZ = wallMaxHeight * sZ;
    }
  }

  if (yCorner > y) {
    y = yCorner;
    gx = gradCornerX;
    gz = gradCornerZ;
  }

  if (yWall > y) {
    y = yWall;
    gx = gradWallX;
    gz = gradWallZ;
  }

  const nLen = Math.hypot(gx, 1.0, gz);
  return {
    y: y,
    normal: new THREE.Vector3(-gx / nLen, 1.0 / nLen, -gz / nLen),
    gradX: gx,
    gradZ: gz,
    isElevated: (y > 0.0005)
  };
}
