import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionTransition } from "@/components/ui/reveal";

const SonicWaveScrollytellingHero = dynamic(
  () =>
    import("@/components/sections/sonicwave-scrollytelling-hero").then(
      (mod) => mod.SonicWaveScrollytellingHero,
    ),
  {
    loading: () => (
      <div
        className="h-[100dvh] w-full bg-[#050505]"
        aria-hidden="true"
      />
    ),
  },
);

const ExperienceSection = dynamic(
  () => import("@/components/sections/experience-section").then((mod) => mod.ExperienceSection),
);
const ProjectsSection = dynamic(
  () => import("@/components/sections/projects-section").then((mod) => mod.ProjectsSection),
);
const EntrepreneurialWorkSection = dynamic(
  () =>
    import("@/components/sections/entrepreneurial-work-section").then(
      (mod) => mod.EntrepreneurialWorkSection,
    ),
);
const SkillsSection = dynamic(
  () => import("@/components/sections/skills-section").then((mod) => mod.SkillsSection),
);
const AiWorkflowSectionLazy = dynamic(
  () => import("@/components/sections/ai-workflow-section").then((mod) => mod.AiWorkflowSection),
);
const EducationSection = dynamic(
  () => import("@/components/sections/education-section").then((mod) => mod.EducationSection),
);
const CursorTrailContactSection = dynamic(
  () =>
    import("@/components/sections/cursor-trail-contact-section").then(
      (mod) => mod.CursorTrailContactSection,
    ),
  {
    loading: () => (
      <section
        id="contact"
        className="flex min-h-[100dvh] items-center justify-center bg-slate-950 text-slate-300"
        aria-label="Contact loading"
      >
        <p className="text-sm uppercase tracking-[0.2em]">Loading contact</p>
      </section>
    ),
  },
);

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <SonicWaveScrollytellingHero />
        <HeroSection />
        <SectionTransition className="opacity-50" />
        <AboutSection />
        <SectionTransition className="opacity-40" />
        <ExperienceSection />
        <SectionTransition className="opacity-40" />
        <ProjectsSection />
        <SectionTransition className="opacity-40" />
        <EntrepreneurialWorkSection />
        <SectionTransition className="opacity-30" />
        <SkillsSection />
        <SectionTransition className="opacity-30" />
        <AiWorkflowSectionLazy />
        <SectionTransition className="opacity-30" />
        <EducationSection />
        <SectionTransition className="opacity-30" />
        <CursorTrailContactSection />
      </main>
    </div>
  );
}
