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

  useEffect(() => {
    if (shouldReduceMotion) return;

    // Fallback for mobile browsers where viewport detection can be unreliable.
    const timer = setTimeout(() => {
      setForceVisible(true);
    }, 900);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <motion.section
      id={id}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      animate={forceVisible ? { opacity: 1, y: 0 } : undefined}
      onViewportEnter={() => setForceVisible(true)}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
