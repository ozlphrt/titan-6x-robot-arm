import * as THREE from 'three';

/**
 * Evaluates real-time 3D elevation, normal vector, and slope gradients across the entire arena floor.
 * 
 * Features:
 * 1. Flat Sanctuary Arm Base Circles (r <= 1.36m): Perfectly flat floor (y = 0) keeping all station circle rails and HUD tracks 100% unobstructed.
 * 2. Steeper & Taller Neutral Elevation (~17.5cm Center, ~12.5cm Corridors): High-convexity slopes rapidly roll balls downhill into circles.
 * 3. Rail Clearance & Perimeter Fade: Smoothly returns to flat ground (y = 0) at perimeter containment walls (|x|, |z| >= 2.74m).
 */
function rawArenaElevation(x, z) {
  // 4 Robot Arm station centers
  const d1 = Math.hypot(x - 1.4, z - (-1.4));   // Alpha (NE)
  const d2 = Math.hypot(x - (-1.4), z - (-1.4));  // Beta (NW)
  const d3 = Math.hypot(x - (-1.4), z - 1.4);    // Gamma (SW)
  const d4 = Math.hypot(x - 1.4, z - 1.4);      // Delta (SE)

  const minArmDist = Math.min(d1, d2, d3, d4);
  const R0 = 1.36; // Flat territory radius ensuring zero overlap with circle track rails (1.35m)

  const u = Math.max(0, minArmDist - R0);
  if (u <= 0.0001) return 0;

  // Perimeter wall smooth fade (levels flush to 0 at perimeter containment rails |x|, |z| >= 2.74m)
  const absX = Math.abs(x);
  const absZ = Math.abs(z);
  const wallDist = Math.max(absX, absZ);
  let wallFade = 1.0;
  if (wallDist > 2.38) {
    const tW = Math.min(1.0, (wallDist - 2.38) / 0.36);
    wallFade = (1 + Math.cos(Math.PI * tW)) / 2;
  }

  // Steeper C1 Hermite elevation curve
  const tU = Math.min(1.0, u / 0.46);
  const sU = tU * tU * (3 - 2 * tU);

  // Taller base elevation (12.5cm)
  const yBase = 0.125 * sU * wallFade;

  // Center hub peak (~17.5cm total at 0,0)
  const r = Math.hypot(x, z);
  let yCenter = 0;
  if (r < 1.40) {
    const tR = r / 1.40;
    yCenter = 0.050 * ((1 + Math.cos(Math.PI * tR)) / 2) * sU * wallFade;
  }

  // Inter-arm neutral corridor dividing ridges (steeper 5-6cm divide in narrow gaps, up to 12.5cm outer)
  let yCorridorZ = 0;
  if (absX < 0.55 && absZ < 2.65 && absZ > 0.20) {
    const cZ = (1 + Math.cos(Math.PI * (absX / 0.55))) / 2;
    const lZ = Math.min(1.0, (absZ - 0.20) / 0.60);
    const tGap = Math.min(1.0, u / 0.05);
    const sGap = tGap * tGap * (3 - 2 * tGap);
    yCorridorZ = 0.055 * cZ * lZ * sGap * wallFade;
  }

  let yCorridorX = 0;
  if (absZ < 0.55 && absX < 2.65 && absX > 0.20) {
    const cX = (1 + Math.cos(Math.PI * (absZ / 0.55))) / 2;
    const lX = Math.min(1.0, (absX - 0.20) / 0.60);
    const tGap = Math.min(1.0, u / 0.05);
    const sGap = tGap * tGap * (3 - 2 * tGap);
    yCorridorX = 0.055 * cX * lX * sGap * wallFade;
  }

  return yBase + yCenter + Math.max(yCorridorX, yCorridorZ);
}

export function evaluateArenaTerrain(x, z) {
  const y = rawArenaElevation(x, z);
  if (y <= 0.0001) {
    return {
      y: 0,
      normal: new THREE.Vector3(0, 1, 0),
      gradX: 0,
      gradZ: 0,
      isElevated: false
    };
  }

  // Symmetric finite-difference gradient for exact, robust surface normal & slope vectors
  const eps = 0.001;
  const gx = (rawArenaElevation(x + eps, z) - rawArenaElevation(x - eps, z)) / (2 * eps);
  const gz = (rawArenaElevation(x, z + eps) - rawArenaElevation(x, z - eps)) / (2 * eps);
  const nLen = Math.hypot(gx, 1.0, gz);

  return {
    y: y,
    normal: new THREE.Vector3(-gx / nLen, 1.0 / nLen, -gz / nLen),
    gradX: gx,
    gradZ: gz,
    isElevated: (y > 0.0005)
  };
}


