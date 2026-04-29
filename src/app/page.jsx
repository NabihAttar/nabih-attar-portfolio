import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { AiWorkflowSection } from "@/components/sections/ai-workflow-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { EntrepreneurialWorkSection } from "@/components/sections/entrepreneurial-work-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EntrepreneurialWorkSection />
        <SkillsSection />
        <AiWorkflowSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
