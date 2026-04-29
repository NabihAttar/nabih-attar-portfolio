"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionSection id="skills" className="py-14 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A balanced toolkit across frontend, backend fundamentals, databases, tools, and technical documentation."
          description="Organized by discipline to make technical strengths easy to scan for recruiters, hiring managers, and collaborators."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: groupIndex * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
                    className="rounded-full border border-white/10 bg-slate-950/65 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
