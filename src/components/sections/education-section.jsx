import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function EducationSection() {
  return (
    <MotionSection className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Education & Certifications"
          title="Academic background supported by practical certifications and digital training programs."
          description="A concise overview of education and complementary certifications relevant to software development and digital work."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <GraduationCap size={22} />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">Education</h3>
            <div className="mt-5 space-y-4">
              {education.map((item) => (
                <div key={item.institution} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                  <p className="text-sm text-slate-400">{item.period}</p>
                  <h4 className="mt-2 text-lg font-semibold text-white">{item.institution}</h4>
                  <p className="mt-2 text-sm text-slate-300">{item.degree}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <Award size={22} />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">Certifications</h3>
            <div className="mt-5 space-y-4">
              {certifications.map((item) => (
                <div
                  key={`${item.title}-${item.year}`}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h4 className="text-base font-semibold text-white">{item.title}</h4>
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{item.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
