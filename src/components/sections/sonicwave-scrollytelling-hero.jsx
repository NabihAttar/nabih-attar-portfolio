"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { configureCanvasContext, drawCoverFrame, resizeCanvas } from "@/lib/sonicwave-canvas";
import {
  SONICWAVE_BG,
  SONICWAVE_TOTAL_FRAMES,
  buildSonicwaveFrameIndices,
  getSonicwaveCanvasDpr,
  getSonicwaveFramePaths,
  getSonicwaveFrameStep,
  getSonicwavePreloadBatch,
  getSonicwaveScrollHeightVh,
  getSonicwaveSourceDimensions,
} from "@/lib/sonicwave-frames";

const LERP_FACTOR = 0.14;

function lerp(current, target, factor) {
  return current + (target - current) * factor;
}

function buildPriorityLoadOrder(frameIndices) {
  const order = [];
  const seen = new Set();

  const push = (slot) => {
    if (slot < 0 || slot >= frameIndices.length) return;
    const frameIndex = frameIndices[slot];
    if (seen.has(frameIndex)) return;
    seen.add(frameIndex);
    order.push(frameIndex);
  };

  push(0);
  push(frameIndices.length - 1);

  for (let step = 1; step < frameIndices.length; step += 1) {
    push(step);
    push(frameIndices.length - 1 - step);
  }

  return order;
}

async function decodeFrame(src) {
  const response = await fetch(src);
  if (!response.ok) throw new Error(`Failed to load ${src}`);
  const blob = await response.blob();

  if (typeof createImageBitmap === "function") {
    return createImageBitmap(blob);
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(blob);
  });
}

async function loadFrame(frameIndex, cache, mobile) {
  if (cache[frameIndex]) return cache[frameIndex];

  const { webp, png } = getSonicwaveFramePaths(frameIndex, mobile);

  try {
    const bitmap = await decodeFrame(webp);
    cache[frameIndex] = bitmap;
    return bitmap;
  } catch {
    try {
      const bitmap = await decodeFrame(png);
      cache[frameIndex] = bitmap;
      return bitmap;
    } catch {
      return null;
    }
  }
}

function getNearestLoadedImage(frameIndex, images) {
  if (images[frameIndex]) return images[frameIndex];

  for (let offset = 1; offset < SONICWAVE_TOTAL_FRAMES; offset += 1) {
    if (images[frameIndex - offset]) return images[frameIndex - offset];
    if (images[frameIndex + offset]) return images[frameIndex + offset];
  }

  return null;
}

async function preloadFramesProgressive(
  frameIndices,
  images,
  batchSize,
  mobile,
  signal,
  { onFirstFrame, onProgress, onFrameLoaded },
) {
  const loadOrder = buildPriorityLoadOrder(frameIndices);

  await loadFrame(loadOrder[0], images, mobile);
  if (signal.aborted) return;
  onFirstFrame();
  onProgress(1 / loadOrder.length);

  let loaded = 1;

  for (let i = 1; i < loadOrder.length; i += batchSize) {
    if (signal.aborted) return;

    const slice = loadOrder.slice(i, i + batchSize);
    await Promise.all(
      slice.map(async (frameIndex) => {
        await loadFrame(frameIndex, images, mobile);
        if (!signal.aborted) onFrameLoaded(frameIndex);
      }),
    );

    loaded += slice.length;
    onProgress(loaded / loadOrder.length);

    await new Promise((resolve) => {
      if (typeof requestIdleCallback === "function") {
        requestIdleCallback(() => resolve(), { timeout: 120 });
      } else {
        setTimeout(resolve, 0);
      }
    });
  }
}

function useFrameStep() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const update = () => setStep(getSonicwaveFrameStep());
    update();

    const queries = [
      window.matchMedia("(max-width: 767px)"),
      window.matchMedia("(pointer: coarse)"),
    ];

    queries.forEach((mq) => mq.addEventListener("change", update));
    navigator.connection?.addEventListener?.("change", update);

    return () => {
      queries.forEach((mq) => mq.removeEventListener("change", update));
      navigator.connection?.removeEventListener?.("change", update);
    };
  }, []);

  return step;
}

function useMobileViewport() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return mobile;
}

function useSectionVisible(sectionRef) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { root: null, threshold: 0.05 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [sectionRef]);

  return visible;
}

export function SonicWaveScrollytellingHero() {
  const prefersReducedMotion = useReducedMotion();
  const frameStep = useFrameStep();
  const isMobile = useMobileViewport();
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const targetProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const renderStateRef = useRef({ slot: -1, exact: false });
  const canvasSizeRef = useRef({ width: 0, height: 0 });
  const rafRef = useRef(0);
  const preloadAbortRef = useRef(null);

  const [isReady, setIsReady] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  const isVisible = useSectionVisible(sectionRef);

  const frameIndices = useMemo(
    () => buildSonicwaveFrameIndices(SONICWAVE_TOTAL_FRAMES, frameStep),
    [frameStep],
  );
  const maxFrameIndex = frameIndices.length - 1;
  const sourceDimensions = getSonicwaveSourceDimensions(isMobile);
  const scrollHeightVh = getSonicwaveScrollHeightVh(isMobile);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const hintOpacity = useTransform(scrollYProgress, [0, 0.08, 0.18], [1, 1, 0]);
  const subtitleOpacity = useTransform(scrollYProgress, [0.1, 0.28, 0.58, 0.75], [0, 1, 1, 0]);
  const subtitleY = useTransform(scrollYProgress, [0.1, 0.75], [40, -56]);
  const ctaOpacity = useTransform(scrollYProgress, [0.82, 0.92, 1], [0, 1, 1]);
  const ctaY = useTransform(scrollYProgress, [0.82, 1], [28, 0]);
  const vignetteOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.35, 0.2, 0.2, 0.45]);

  const renderFrame = useCallback(
    (progress, force = false) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d", { alpha: false });
      if (!canvas || !ctx || maxFrameIndex < 0) return;

      const frameSlot = Math.round(progress * maxFrameIndex);
      const frameIndex = frameIndices[frameSlot];
      const exactImage = imagesRef.current[frameIndex];
      const image = exactImage ?? getNearestLoadedImage(frameIndex, imagesRef.current);
      const isExact = Boolean(exactImage);

      if (
        !image ||
        (!force &&
          renderStateRef.current.slot === frameSlot &&
          (renderStateRef.current.exact || !isExact))
      ) {
        return;
      }

      renderStateRef.current = { slot: frameSlot, exact: isExact };

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const dpr = getSonicwaveCanvasDpr();

      resizeCanvas(canvas, ctx, width, height, dpr);
      drawCoverFrame(
        ctx,
        image,
        width,
        height,
        sourceDimensions.width,
        sourceDimensions.height,
      );
      canvasSizeRef.current = { width, height };
    },
    [frameIndices, maxFrameIndex, sourceDimensions.width, sourceDimensions.height],
  );

  const renderFrameRef = useRef(renderFrame);
  renderFrameRef.current = renderFrame;

  const requestRedraw = useCallback((progress, force = false) => {
    renderStateRef.current = force ? { slot: -1, exact: false } : renderStateRef.current;
    renderFrameRef.current?.(progress, force);
  }, []);

  useEffect(() => {
    preloadAbortRef.current?.abort();
    const controller = new AbortController();
    preloadAbortRef.current = controller;

    imagesRef.current = new Array(SONICWAVE_TOTAL_FRAMES);
    setIsReady(false);
    setIsFullyLoaded(false);
    setLoadProgress(0);
    renderStateRef.current = { slot: -1, exact: false };

    const batchSize = getSonicwavePreloadBatch();

    preloadFramesProgressive(
      frameIndices,
      imagesRef.current,
      batchSize,
      isMobile,
      controller.signal,
      {
        onFirstFrame: () => {
          if (controller.signal.aborted) return;
          setIsReady(true);
          requestRedraw(0, true);
        },
        onProgress: (ratio) => {
          if (!controller.signal.aborted) setLoadProgress(ratio);
        },
        onFrameLoaded: (frameIndex) => {
          if (controller.signal.aborted) return;

          const slot = Math.round(smoothProgressRef.current * maxFrameIndex);
          if (frameIndices[slot] === frameIndex) {
            requestRedraw(smoothProgressRef.current, true);
          }
        },
      },
    ).then(() => {
      if (!controller.signal.aborted) setIsFullyLoaded(true);
    });

    return () => {
      controller.abort();
      imagesRef.current.forEach((bitmap) => bitmap?.close?.());
      imagesRef.current = [];
    };
  }, [frameIndices, maxFrameIndex, requestRedraw, isMobile]);

  useEffect(() => {
    const updateTarget = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;

      if (scrollable <= 0) {
        targetProgressRef.current = 0;
        return;
      }

      const raw = -rect.top / scrollable;
      targetProgressRef.current = Math.min(1, Math.max(0, raw));
    };

    updateTarget();
    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);

    return () => {
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
    };
  }, []);

  useEffect(() => {
    if (!isReady || prefersReducedMotion || !isVisible) return;

    const tick = () => {
      smoothProgressRef.current = lerp(
        smoothProgressRef.current,
        targetProgressRef.current,
        LERP_FACTOR,
      );

      renderFrameRef.current?.(smoothProgressRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isReady, prefersReducedMotion, isVisible]);

  useEffect(() => {
    if (!isReady) return;

    const onResize = () => {
      renderStateRef.current = { slot: -1, exact: false };
      requestRedraw(smoothProgressRef.current, true);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isReady, requestRedraw]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (prefersReducedMotion) {
      targetProgressRef.current = value;
      smoothProgressRef.current = value;
      requestRedraw(value, true);
    }
  });

  useEffect(() => {
    if (!isReady || !prefersReducedMotion) return;
    requestRedraw(0, true);
  }, [isReady, prefersReducedMotion, requestRedraw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: false });
    if (!canvas || !ctx) return;
    configureCanvasContext(ctx);
  }, []);

  return (
    <section
      id="sonicwave"
      ref={sectionRef}
      className="relative bg-[#050505]"
      style={{ height: `${scrollHeightVh}vh` }}
      aria-label="Cinematic portfolio introduction"
    >
      <div
        className="sticky top-0 z-40 h-[100dvh] w-full overflow-hidden bg-[#050505]"
        style={{ willChange: "transform" }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full [image-rendering:auto]"
          aria-hidden="true"
        />

        <motion.div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,#050505_100%)]"
          style={{ opacity: vignetteOpacity }}
        />

        <motion.div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]/70" />

        {!isReady && (
          <motion.div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-[#050505]">
            <div className="h-px w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full w-full origin-left bg-white/70"
                initial={{ scaleX: 0.08 }}
                animate={{ scaleX: Math.max(0.08, loadProgress) }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">
              Loading sequence
            </p>
          </motion.div>
        )}

        {isReady && !isFullyLoaded && (
          <motion.div
            className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
          >
            <motion.div className="h-px w-24 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full w-full origin-left bg-white/50"
                style={{ scaleX: loadProgress }}
              />
            </motion.div>
          </motion.div>
        )}

        <motion.div className="pointer-events-none absolute inset-0 z-10 flex flex-col">
          <motion.p
            className="absolute bottom-32 inset-x-5 mx-auto max-w-xs text-center text-xs leading-relaxed text-white/40 sm:bottom-36 sm:inset-x-auto sm:left-12 sm:text-left sm:text-sm lg:left-20"
            style={{ opacity: subtitleOpacity, y: subtitleY }}
          >
            Scroll through the sequence — design, code, and craft revealed frame
            by frame.
          </motion.p>

          <motion.div
            className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
            style={{ opacity: hintOpacity }}
          >
            <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">
              Scroll to Explore
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="text-white/40" size={20} strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          <motion.div
            className="pointer-events-auto absolute inset-x-0 bottom-0 flex justify-center px-5 pb-10 sm:px-6 sm:pb-16"
            style={{ opacity: ctaOpacity, y: ctaY }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-xs font-medium text-white backdrop-blur-md transition-[transform,background-color,border-color] duration-300 hover:border-white/25 hover:bg-white/10 sm:gap-3 sm:px-8 sm:py-4 sm:text-sm"
            >
              <span>View My Work</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
