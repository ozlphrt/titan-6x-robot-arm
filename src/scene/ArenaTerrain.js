import * as THREE from 'three';

/**
 * Evaluates real-time 3D elevation, normal vector, and slope gradients across the entire arena floor.
 * 
 * Features:
 * 1. Flat Sanctuary Arm Base Circles (r <= 1.35m): Perfectly flat floor (y = 0) within each of the 4 robot arm defense territories.
 * 2. Gradual Radial Base Elevation (r > 1.35m): Smooth, progressive elevation rise everywhere outside the 4 base circles.
 * 3. High-Convexity Central Dome (~15.5cm): Central crest between all 4 stations that rolls idle balls outward.
 * 4. Inter-Arm Neutral Corridor Dividing Ridges: Crests along X=0 and Z=0 dividing lines guiding balls sideways into adjacent station circles.
 * 5. Perimeter Wall & Corner Banking Ramps: Smooth banking along outer perimeter walls and corners.
 */
export function evaluateArenaTerrain(x, z) {
  // 4 Robot Arm station centers
  const d1 = Math.hypot(x - 1.4, z - (-1.4));   // Alpha (NE)
  const d2 = Math.hypot(x - (-1.4), z - (-1.4));  // Beta (NW)
  const d3 = Math.hypot(x - (-1.4), z - 1.4);    // Gamma (SW)
  const d4 = Math.hypot(x - 1.4, z - 1.4);      // Delta (SE)

  const minArmDist = Math.min(d1, d2, d3, d4);
  const R0 = 1.35; // Defense & gathering circle radius

  const u = Math.max(0, minArmDist - R0);
  if (u <= 0.0001) {
    return {
      y: 0,
      normal: new THREE.Vector3(0, 1, 0),
      gradX: 0,
      gradZ: 0,
      isElevated: false
    };
  }

  // Smooth C1 Hermite transition factor: 0 at u=0, 1 at u=0.55m
  const tU = Math.min(1.0, u / 0.55);
  const sU = tU * tU * (3 - 2 * tU);

  // 1. Gradual Base Elevation: smooth continuous rise outside the circles
  const yBase = 0.095 * sU + Math.max(0, u - 0.55) * 0.055;

  // 2. Central Convex Dome Feature: Peaks at (0, 0)
  const r = Math.hypot(x, z);
  let yDome = 0;
  if (r < 1.35) {
    const tR = r / 1.35;
    yDome = 0.060 * ((1 + Math.cos(Math.PI * tR)) / 2) * sU;
  }

  // 3. Inter-Arm Corridor Dividing Ridges along cardinal neutral axes
  const absX = Math.abs(x);
  const absZ = Math.abs(z);

  // Ridge dividing East & West stations (along X=0)
  let yCorridorZ = 0;
  if (absX < 0.65 && absZ < 2.75) {
    const cZ = (1 + Math.cos(Math.PI * Math.min(1.0, absX / 0.65))) / 2;
    const lZ = Math.max(0, Math.min(1.0, (absZ - 0.30) / 0.60));
    yCorridorZ = 0.040 * cZ * lZ * sU;
  }

  // Ridge dividing North & South stations (along Z=0)
  let yCorridorX = 0;
  if (absZ < 0.65 && absX < 2.75) {
    const cX = (1 + Math.cos(Math.PI * Math.min(1.0, absZ / 0.65))) / 2;
    const lX = Math.max(0, Math.min(1.0, (absX - 0.30) / 0.60));
    yCorridorX = 0.040 * cX * lX * sU;
  }

  // 4. Perimeter Wall & Corner Banking Ramps (along |x| > 1.95 or |z| > 1.95)
  const wX = Math.max(0, (absX - 1.95) / 0.80);
  const wZ = Math.max(0, (absZ - 1.95) / 0.80);
  const wMax = Math.min(1.0, Math.max(wX, wZ));
  const yWall = 0.045 * ((1 - Math.cos(Math.PI * wMax)) / 2) * sU;

  const y = yBase + yDome + yCorridorX + yCorridorZ + yWall;

  // Symmetric finite-difference gradient for exact, robust surface normal & slope vectors
  const eps = 0.001;
  const rawEval = (px, pz) => {
    const mD = Math.min(
      Math.hypot(px - 1.4, pz - (-1.4)),
      Math.hypot(px - (-1.4), pz - (-1.4)),
      Math.hypot(px - (-1.4), pz - 1.4),
      Math.hypot(px - 1.4, pz - 1.4)
    );
    const locU = Math.max(0, mD - R0);
    if (locU <= 0.0001) return 0;
    const locTU = Math.min(1.0, locU / 0.55);
    const locSU = locTU * locTU * (3 - 2 * locTU);
    const locBase = 0.095 * locSU + Math.max(0, locU - 0.55) * 0.055;
    const locR = Math.hypot(px, pz);
    let locDome = 0;
    if (locR < 1.35) {
      locDome = 0.060 * ((1 + Math.cos(Math.PI * (locR / 1.35))) / 2) * locSU;
    }
    const locAbsX = Math.abs(px);
    const locAbsZ = Math.abs(pz);
    let locCorridorZ = 0;
    if (locAbsX < 0.65 && locAbsZ < 2.75) {
      locCorridorZ = 0.040 * ((1 + Math.cos(Math.PI * Math.min(1.0, locAbsX / 0.65))) / 2) * Math.max(0, Math.min(1.0, (locAbsZ - 0.30) / 0.60)) * locSU;
    }
    let locCorridorX = 0;
    if (locAbsZ < 0.65 && locAbsX < 2.75) {
      locCorridorX = 0.040 * ((1 + Math.cos(Math.PI * Math.min(1.0, locAbsZ / 0.65))) / 2) * Math.max(0, Math.min(1.0, (locAbsX - 0.30) / 0.60)) * locSU;
    }
    const locWX = Math.max(0, (locAbsX - 1.95) / 0.80);
    const locWZ = Math.max(0, (locAbsZ - 1.95) / 0.80);
    const locWall = 0.045 * ((1 - Math.cos(Math.PI * Math.min(1.0, Math.max(locWX, locWZ)))) / 2) * locSU;
    return locBase + locDome + locCorridorX + locCorridorZ + locWall;
  };

  const gx = (rawEval(x + eps, z) - rawEval(x - eps, z)) / (2 * eps);
  const gz = (rawEval(x, z + eps) - rawEval(x, z - eps)) / (2 * eps);
  const nLen = Math.hypot(gx, 1.0, gz);

  return {
    y: y,
    normal: new THREE.Vector3(-gx / nLen, 1.0 / nLen, -gz / nLen),
    gradX: gx,
    gradZ: gz,
    isElevated: (y > 0.0005)
  };
}

