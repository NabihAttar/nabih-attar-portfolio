"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];
const staggerContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};
const staggerItemVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(3px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
};

export function Reveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  duration = 0.55,
  distance = 18,
  once = true,
  amount = 0.2,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (prefersReducedMotion) {
    return (
      <MotionTag className={className} {...rest}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      {...rest}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </MotionTag>
  );
}

export function HeroReveal({
  as = "div",
  children,
  className = "",
  delay = 0,
  duration = 0.65,
  distance = 24,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (prefersReducedMotion) {
    return (
      <MotionTag className={className} {...rest}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      {...rest}
      initial={{ opacity: 0, y: distance, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </MotionTag>
  );
}

export function FadeUp(props) {
  return <Reveal {...props} />;
}

export function SlideIn({
  as = "div",
  className = "",
  children,
  axis = "x",
  distance = 24,
  delay = 0,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;
  const initial = axis === "x" ? { opacity: 0, x: distance } : { opacity: 0, y: distance };

  if (prefersReducedMotion) {
    return (
      <MotionTag className={className} {...rest}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      {...rest}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerContainer({ as = "div", className = "", children, ...rest }) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({ as = "div", className = "", children, ...rest }) {
  const MotionTag = typeof as === "string" ? (motion[as] ?? motion.div) : motion.div;
  return (
    <MotionTag className={className} variants={staggerItemVariants} {...rest}>
      {children}
    </MotionTag>
  );
}

export function AnimatedHeading({ as = "h2", className = "", children, delay = 0 }) {
  return (
    <SlideIn as={as} axis="y" distance={20} delay={delay} className={className}>
      {children}
    </SlideIn>
  );
}

export function AnimatedText({ as = "p", className = "", children, delay = 0.08 }) {
  return (
    <FadeUp as={as} delay={delay} distance={16} duration={0.5} className={className}>
      {children}
    </FadeUp>
  );
}

export function ParallaxSection({ className = "", children, offset = 34 }) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1800], [0, -offset]);

  return (
    <motion.div
      className={`relative ${className}`}
      style={prefersReducedMotion ? undefined : { y }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTransition({ className = "" }) {
  return (
    <FadeUp
      aria-hidden
      className={`pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent ${className}`}
      distance={8}
      duration={0.6}
    />
  );
}

export function PremiumButton({ as = "a", className = "", children, ...rest }) {
  const MotionTag = motion[as] ?? motion.a;
  return (
    <MotionTag
      className={`perf-btn-primary perf-magnetic ${className}`}
      whileHover={{ y: -2, scale: 1.018 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export function FloatingAccent({ className = "" }) {
  return (
    <motion.div
      aria-hidden
      className={className}
      animate={{ y: [0, -8, 0], opacity: [0.45, 0.65, 0.45] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
