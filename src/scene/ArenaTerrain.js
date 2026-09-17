import * as THREE from 'three';

/**
 * Evaluates real-time 3D elevation, normal vector, and slope gradients across the entire arena floor.
 * 
 * Features:
 * 1. Flat Sanctuary Arm Base Circles (r <= 1.42m): Perfectly flat floor (y = 0) keeping all station circle rails and HUD tracks 100% unobstructed.
 * 2. Rail Clearance & Boundary Fade: Smoothly returns to flat ground (y = 0) at the perimeter containment rails (|x|, |z| >= 2.68m).
 * 3. Gentle Neutral Slope (~5.5cm): Sleek downhill slope in open central and corridor spaces that rolls idle balls into adjacent stations.
 */
function rawArenaElevation(x, z) {
  // 4 Robot Arm station centers
  const d1 = Math.hypot(x - 1.4, z - (-1.4));   // Alpha (NE)
  const d2 = Math.hypot(x - (-1.4), z - (-1.4));  // Beta (NW)
  const d3 = Math.hypot(x - (-1.4), z - 1.4);    // Gamma (SW)
  const d4 = Math.hypot(x - 1.4, z - 1.4);      // Delta (SE)

  const minArmDist = Math.min(d1, d2, d3, d4);
  const R0 = 1.42; // Flat territory radius ensuring zero overlap with circle track rails (1.35m)

  const u = Math.max(0, minArmDist - R0);
  if (u <= 0.0001) return 0;

  // Perimeter wall fade: terrain smoothly returns to 0 at perimeter containment rails (|x| >= 2.68m or |z| >= 2.68m)
  const absX = Math.abs(x);
  const absZ = Math.abs(z);
  const wallDist = Math.max(absX, absZ);
  let wallFade = 1.0;
  if (wallDist > 2.35) {
    const tW = Math.min(1.0, (wallDist - 2.35) / 0.33);
    wallFade = (1 + Math.cos(Math.PI * tW)) / 2;
  }

  // Smooth Hermite elevation curve
  const tU = Math.min(1.0, u / 0.50);
  const sU = tU * tU * (3 - 2 * tU);

  // Gentle, sleek gradual elevation (max 5.5cm)
  const yBase = 0.055 * sU * wallFade;

  // Subtle corridor dividing ridge between stations
  let yCorridor = 0;
  if (absX < 0.60 && absZ < 2.50) {
    const cZ = (1 + Math.cos(Math.PI * Math.min(1.0, absX / 0.60))) / 2;
    const lZ = Math.max(0, Math.min(1.0, (absZ - 0.30) / 0.60));
    yCorridor = 0.025 * cZ * lZ * sU * wallFade;
  }
  if (absZ < 0.60 && absX < 2.50) {
    const cX = (1 + Math.cos(Math.PI * Math.min(1.0, absZ / 0.60))) / 2;
    const lX = Math.max(0, Math.min(1.0, (absX - 0.30) / 0.60));
    yCorridor = Math.max(yCorridor, 0.025 * cX * lX * sU * wallFade);
  }

  return yBase + yCorridor;
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


