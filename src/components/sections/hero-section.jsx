import { ArrowRight, BriefcaseBusiness, Code2, Download, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { PortfolioPreviewLaptop } from "@/components/sections/portfolio-preview-laptop";
import {
  FloatingAccent,
  HeroReveal,
  ParallaxSection,
  PremiumButton,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.16),_transparent_28%),linear-gradient(180deg,_rgba(15,23,42,0.4),_rgba(2,6,23,0.9))]" />
      <div className="absolute inset-x-0 top-[-5rem] h-60 bg-cyan-400/10 blur-3xl" />
      <FloatingAccent className="absolute -left-20 top-28 h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl" />
      <FloatingAccent className="absolute right-0 top-20 h-52 w-52 rounded-full bg-blue-400/10 blur-3xl" />

      <Container className="relative py-14 sm:py-24 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] xl:grid-cols-[0.95fr_1.05fr]">
          <StaggerContainer className="max-w-3xl">
            <StaggerItem as="span" className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              Frontend Developer based in Beirut, Lebanon
            </StaggerItem>

            <StaggerItem as="h1" className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Nabih Al Attar
              <span className="mt-4 block bg-gradient-to-r from-cyan-300 via-blue-300 to-sky-100 bg-clip-text text-2xl text-transparent sm:text-3xl lg:text-4xl">
                {personalInfo.title}
              </span>
            </StaggerItem>

            <StaggerItem as="p" className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {personalInfo.intro}
            </StaggerItem>

            <StaggerItem as="div" className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PremiumButton
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950"
              >
                View Projects
                <ArrowRight size={16} />
              </PremiumButton>
              <a
                href={personalInfo.cvPath}
                download
                className="perf-btn-secondary inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white"
              >
                Download CV
                <Download size={16} />
              </a>
              <a
                href="#contact"
                className="perf-btn-secondary inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-slate-200"
              >
                Contact Me
                <Mail size={16} />
              </a>
            </StaggerItem>

            <StaggerItem as="div" className="mt-8 flex items-center gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="perf-icon-link inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200"
                aria-label="LinkedIn profile"
              >
                <BriefcaseBusiness size={20} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="perf-icon-link inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200"
                aria-label="GitHub profile"
              >
                <Code2 size={20} />
              </a>
            </StaggerItem>
          </StaggerContainer>

          <ParallaxSection className="relative mx-auto w-full max-w-xl lg:max-w-[52rem] xl:max-w-[58rem]" offset={26}>
            <HeroReveal as="div" delay={0.18} className="relative">
              <div className="perf-float-delayed">
                <PortfolioPreviewLaptop />
              </div>
            </HeroReveal>
          </ParallaxSection>
        </div>
      </Container>
    </section>
  );
}
