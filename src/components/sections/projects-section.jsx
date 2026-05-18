"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
import { projectFilters, projects } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { MotionSection } from "@/components/ui/motion-section";
import { ParallaxSection, Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.featuredFilter.includes(activeFilter));
  }, [activeFilter]);

  return (
    <MotionSection id="projects" className="py-14 sm:py-24">
      <Container>
        <div className="relative">
          <ParallaxSection className="pointer-events-none absolute -right-10 top-0 hidden h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl lg:block" offset={18} />
          <Reveal>
            <SectionHeading
              eyebrow="Projects"
              title="Selected projects that highlight frontend execution, responsiveness, and API-connected experiences."
              description="A curated set of websites and desktop applications spanning company platforms, e-commerce, multilingual products, and ERP workflows."
            />
          </Reveal>
        </div>

        <div className="mb-8 lg:sticky lg:top-24 lg:z-20 lg:rounded-2xl lg:border lg:border-white/10 lg:bg-slate-950/65 lg:p-4 lg:backdrop-blur">
          <Reveal className="flex flex-wrap gap-3">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-medium ${
                  activeFilter === filter
                    ? "perf-filter-pill-active border-cyan-300/40 bg-cyan-400 text-slate-950"
                    : "perf-filter-pill border-white/10 bg-white/5 text-slate-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </Reveal>
        </div>

        <Reveal className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" delay={0.06}>
          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              className="perf-card group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/10"
            >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex max-w-full whitespace-normal break-words rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[9px] font-semibold uppercase leading-tight tracking-[0.08em] text-cyan-300 sm:rounded-full sm:px-3 sm:text-xs sm:tracking-[0.22em]">
                      {project.category}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-white sm:text-xl">{project.title}</h3>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    {project.responsive ? "Responsive" : "Desktop"}
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="perf-btn-primary inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950"
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>
                  ) : null}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="perf-btn-secondary inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white"
                    >
                      GitHub
                      <Code2 size={16} />
                    </a>
                  ) : null}
                </div>
            </article>
          ))}
        </Reveal>
      </Container>
    </MotionSection>
  );
}
