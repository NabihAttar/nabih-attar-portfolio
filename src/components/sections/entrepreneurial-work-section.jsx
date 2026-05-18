import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { entrepreneurialWork } from "@/data/portfolio";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Container } from "@/components/ui/container";
import { MotionSection } from "@/components/ui/motion-section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function EntrepreneurialWorkSection() {
  return (
    <MotionSection id="entrepreneurial-work" className="py-14 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={entrepreneurialWork.title}
            title={entrepreneurialWork.subtitle}
            description="A part-time entrepreneurial and freelance software initiative that reflects practical execution, business awareness, and real-world solution building."
          />
        </Reveal>

        <AnimatedCard as="article" className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-white/[0.02] p-7 shadow-2xl shadow-slate-950/10 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            {entrepreneurialWork.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 text-cyan-200">
            <BriefcaseBusiness size={18} />
            <p className="text-sm font-medium">Building part-time while staying focused on frontend career growth.</p>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
            {entrepreneurialWork.description}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            {entrepreneurialWork.impact}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {entrepreneurialWork.services.map((service, index) => (
              <Reveal
                as="div"
                key={service}
                delay={0.07 + index * 0.02}
                className="rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 text-sm text-slate-200"
              >
                {service}
              </Reveal>
            ))}
          </div>

          <a
            href={entrepreneurialWork.website}
            target="_blank"
            rel="noreferrer"
            className="perf-btn-primary mt-7 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950"
          >
            Visit Clothify Website
            <ArrowUpRight size={16} />
          </a>
        </AnimatedCard>
      </Container>
    </MotionSection>
  );
}
