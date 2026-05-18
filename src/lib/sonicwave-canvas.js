import { SONICWAVE_BG, SONICWAVE_SOURCE_HEIGHT, SONICWAVE_SOURCE_WIDTH } from "@/lib/sonicwave-frames";

export function configureCanvasContext(ctx) {
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
}

export function resizeCanvas(canvas, ctx, width, height, dpr) {
  const pixelWidth = Math.floor(width * dpr);
  const pixelHeight = Math.floor(height * dpr);

  if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
    canvas.width = pixelWidth;
    canvas.height = pixelHeight;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    configureCanvasContext(ctx);
    return true;
  }

  return false;
}

/** Cover-fit draw; never upscale beyond native frame resolution. */
export function drawCoverFrame(ctx, image, width, height) {
  const source =
    image instanceof ImageBitmap || image instanceof HTMLImageElement
      ? { w: image.width, h: image.height }
      : { w: SONICWAVE_SOURCE_WIDTH, h: SONICWAVE_SOURCE_HEIGHT };

  const imgRatio = source.w / source.h;
  const canvasRatio = width / height;
  let drawWidth;
  let drawHeight;
  let offsetX;
  let offsetY;

  if (imgRatio > canvasRatio) {
    drawHeight = height;
    drawWidth = height * imgRatio;
    offsetX = (width - drawWidth) / 2;
    offsetY = 0;
  } else {
    drawWidth = width;
    drawHeight = width / imgRatio;
    offsetX = 0;
    offsetY = (height - drawHeight) / 2;
  }

  const maxScale = Math.max(drawWidth / source.w, drawHeight / source.h);
  if (maxScale > 1) {
    drawWidth /= maxScale;
    drawHeight /= maxScale;
    offsetX = (width - drawWidth) / 2;
    offsetY = (height - drawHeight) / 2;
  }

  ctx.fillStyle = SONICWAVE_BG;
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
}
