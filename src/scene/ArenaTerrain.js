import * as THREE from 'three';

/**
 * Evaluates real-time 3D elevation, normal vector, and slope gradients across the entire arena floor.
 * Includes:
 * 1. An enhanced central convex dome with high outward roll acceleration.
 * 2. Four elevated convex corridor ridges connecting between adjacent arm base circles
 *    (+X, -X, +Z, -Z corridors) that actively roll trapped balls sideways into active arm territories.
 */
export function evaluateArenaTerrain(x, z) {
  const r = Math.hypot(x, z);
  const domeRadius = 1.15;
  const domeHeight = 0.062;

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
  const ridgeWidth = 0.88;  // Half-width of corridor ridge (covers the gap between circles)
  const ridgeHeight = 0.052; // Height of the ridge crest
  const ridgeReach = 2.45;  // Reaches past the outer arm perimeter

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

  // Smooth composite union
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

  const nLen = Math.hypot(gx, 1.0, gz);
  return {
    y: y,
    normal: new THREE.Vector3(-gx / nLen, 1.0 / nLen, -gz / nLen),
    gradX: gx,
    gradZ: gz,
    isElevated: (y > 0.0005)
  };
}
