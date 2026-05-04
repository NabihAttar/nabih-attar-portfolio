"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function MotionSection({
  id,
  className = "",
  children,
}) {
  const shouldReduceMotion = useReducedMotion();
  const [forceVisible, setForceVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;

    // Fallback for mobile browsers where viewport detection can be unreliable.
    const timer = setTimeout(() => {
      setForceVisible(true);
    }, 900);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const initialY = isMobile ? 12 : 28;
  const viewportAmount = isMobile ? 0.08 : 0.2;
  const transitionDuration = isMobile ? 0.35 : 0.55;

  return (
    <motion.section
      id={id}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: initialY }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      animate={forceVisible ? { opacity: 1, y: 0 } : undefined}
      onViewportEnter={() => setForceVisible(true)}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration: transitionDuration, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
