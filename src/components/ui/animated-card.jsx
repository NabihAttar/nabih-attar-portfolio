"use client";

import { Reveal } from "@/components/ui/reveal";

export function AnimatedCard({
  as = "article",
  children,
  className = "",
  delay = 0,
  distance = 18,
}) {
  return (
    <Reveal
      as={as}
      delay={delay}
      distance={distance}
      className={`perf-card ${className}`}
    >
      {children}
    </Reveal>
  );
}
