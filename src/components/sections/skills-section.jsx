import { skillGroups } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function SkillsSection() {
  return (
    <MotionSection id="skills" className="py-14 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A balanced toolkit across frontend, backend fundamentals, databases, tools, and technical documentation."
          description="Organized by discipline to make technical strengths easy to scan for recruiters, hiring managers, and collaborators."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/65 px-4 py-2 text-sm text-slate-200 transition-transform duration-200 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.02]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
