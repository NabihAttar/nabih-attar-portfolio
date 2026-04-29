"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionSection id="experience" className="py-14 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience across frontend delivery, public-sector systems, and IT training."
          description="A reverse chronological timeline highlighting hands-on web development, technical training, and enterprise software exposure."
        />

        <div className="relative space-y-6 before:absolute before:left-5 before:top-3 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-cyan-400/60 before:to-transparent sm:before:left-1/2 sm:before:-translate-x-1/2">
          {experiences.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.period}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative grid gap-4 sm:grid-cols-2"
            >
              <div
                className={`sm:contents ${
                  index % 2 === 0 ? "" : ""
                }`}
              >
                <div
                  className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/10 ${
                    index % 2 === 0 ? "sm:col-start-1" : "sm:col-start-2"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                      {item.period}
                    </span>
                    <span className="text-sm text-slate-400">{item.company}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.role}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute left-4 top-10 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-300 sm:left-1/2 sm:-translate-x-1/2" />
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
