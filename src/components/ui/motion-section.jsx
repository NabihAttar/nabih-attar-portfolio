"use client";

import { Reveal } from "@/components/ui/reveal";

export function MotionSection({ id, className = "", children }) {
  return (
    <Reveal as="section" id={id} className={className} distance={20} amount={0.12}>
      {children}
    </Reveal>
  );
}
