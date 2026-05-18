import { GraduationCap, MapPin, PanelsTopLeft, Workflow } from "lucide-react";
import { aboutHighlights, personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { AnimatedCard } from "@/components/ui/animated-card";
import { MotionSection } from "@/components/ui/motion-section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Foundation",
    text: "BS in Computer Science from Lebanese International University with a strong software and systems background.",
  },
  {
    icon: PanelsTopLeft,
    title: "Frontend Focus",
    text: "Building clean, scalable interfaces using React.js, Next.js, TypeScript, and modern component-driven workflows.",
  },
  {
    icon: Workflow,
    title: "Integration Experience",
    text: "Working with CMS APIs, Odoo API, multilingual websites, e-commerce systems, and desktop ERP solutions.",
  },
  {
    icon: MapPin,
    title: "Based In",
    text: personalInfo.location,
  },
];

export function AboutSection() {
  return (
    <MotionSection id="about" className="py-14 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Frontend development with a practical product mindset."
            description="I focus on building fast, responsive digital experiences that are visually polished, easy to maintain, and aligned with business goals."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <AnimatedCard as="div" className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/10 sm:p-8">
            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              Nabih Al Attar is a frontend developer who combines design awareness with implementation depth. He specializes in React.js and Next.js, with experience delivering responsive websites, API-integrated platforms, CMS-powered solutions, multilingual web applications, e-commerce websites, and Electron.js desktop ERP systems.
            </p>
            <div className="mt-6 grid gap-3">
              {aboutHighlights.map((item) => (
                <Reveal
                  as="div"
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm leading-7 text-slate-200"
                >
                  {item}
                </Reveal>
              ))}
            </div>
          </AnimatedCard>

          <div className="grid gap-4">
            {highlights.map(({ icon: Icon, title, text }, index) => (
              <AnimatedCard
                as="div"
                key={title}
                delay={0.07 + index * 0.04}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
