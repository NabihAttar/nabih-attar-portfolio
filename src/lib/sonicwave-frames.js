export const SONICWAVE_TOTAL_FRAMES = 240;
export const SONICWAVE_BG = "#050505";
export const SONICWAVE_SCROLL_HEIGHT_VH = 420;
export const SONICWAVE_SOURCE_WIDTH = 1920;
export const SONICWAVE_SOURCE_HEIGHT = 1080;

/** @param {number} index 0-based frame index */
export function getSonicwaveFramePaths(index) {
  const frame = String(index + 1).padStart(3, "0");
  return {
    webp: `/frames-webp/ezgif-frame-${frame}.webp`,
    png: `/frames/ezgif-frame-${frame}.png`,
  };
}

/** @param {"webp" | "png"} format */
export function getSonicwaveFramePath(index, format = "webp") {
  return getSonicwaveFramePaths(index)[format];
}

/** @param {number} step Load every Nth frame (2 = half on mobile) */
export function buildSonicwaveFrameIndices(total = SONICWAVE_TOTAL_FRAMES, step = 1) {
  const indices = [];
  for (let i = 0; i < total; i += step) {
    indices.push(i);
  }
  return indices;
}

/** Adaptive frame skip: fewer frames on constrained devices. */
export function getSonicwaveFrameStep() {
  if (typeof window === "undefined") return 1;

  const narrow = window.matchMedia("(max-width: 767px)").matches;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const saveData = navigator.connection?.saveData;
  const slow =
    navigator.connection?.effectiveType === "slow-2g" ||
    navigator.connection?.effectiveType === "2g" ||
    navigator.connection?.effectiveType === "3g";

  if (saveData || slow) return 4;
  if (narrow || coarse) return 2;
  return 1;
}

export function getSonicwavePreloadBatch() {
  if (typeof window === "undefined") return 8;

  const saveData = navigator.connection?.saveData;
  const slow =
    navigator.connection?.effectiveType === "slow-2g" ||
    navigator.connection?.effectiveType === "2g";

  if (saveData || slow) return 4;
  if (window.matchMedia("(max-width: 767px)").matches) return 6;
  return 10;
}

export function getSonicwaveCanvasDpr() {
  if (typeof window === "undefined") return 1;

  const saveData = navigator.connection?.saveData;
  const dpr = window.devicePixelRatio || 1;

  if (saveData) return 1;
  if (dpr >= 2) return 2;
  return Math.min(dpr, 1.5);
}
