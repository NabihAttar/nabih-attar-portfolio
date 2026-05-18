export const SONICWAVE_TOTAL_FRAMES = 240;
export const SONICWAVE_BG = "#050505";
export const SONICWAVE_SCROLL_HEIGHT_VH = 420;
export const SONICWAVE_SCROLL_HEIGHT_VH_MOBILE = 320;

export const SONICWAVE_DESKTOP_WIDTH = 1920;
export const SONICWAVE_DESKTOP_HEIGHT = 1080;
export const SONICWAVE_MOBILE_WIDTH = 960;
export const SONICWAVE_MOBILE_HEIGHT = 540;

/** @param {number} index 0-based frame index */
export function getSonicwaveFramePaths(index, mobile = false) {
  const frame = String(index + 1).padStart(3, "0");
  const folder = mobile ? "frames-webp-mobile" : "frames-webp";

  return {
    webp: `/${folder}/ezgif-frame-${frame}.webp`,
    png: `/frames/ezgif-frame-${frame}.png`,
  };
}

/** @param {"webp" | "png"} format */
export function getSonicwaveFramePath(index, format = "webp", mobile = false) {
  return getSonicwaveFramePaths(index, mobile)[format];
}

export function isSonicwaveMobileViewport() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 767px)").matches;
}

export function getSonicwaveSourceDimensions(mobile = false) {
  return mobile
    ? { width: SONICWAVE_MOBILE_WIDTH, height: SONICWAVE_MOBILE_HEIGHT }
    : { width: SONICWAVE_DESKTOP_WIDTH, height: SONICWAVE_DESKTOP_HEIGHT };
}

export function getSonicwaveScrollHeightVh(mobile = false) {
  return mobile ? SONICWAVE_SCROLL_HEIGHT_VH_MOBILE : SONICWAVE_SCROLL_HEIGHT_VH;
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

  const narrow = isSonicwaveMobileViewport();
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
  if (isSonicwaveMobileViewport()) return 6;
  return 10;
}

export function getSonicwaveCanvasDpr() {
  if (typeof window === "undefined") return 1;

  const saveData = navigator.connection?.saveData;
  const dpr = window.devicePixelRatio || 1;
  const mobile = isSonicwaveMobileViewport();

  if (saveData) return 1;
  if (mobile) return Math.min(dpr, 1.5);
  if (dpr >= 2) return 2;
  return Math.min(dpr, 1.5);
}
