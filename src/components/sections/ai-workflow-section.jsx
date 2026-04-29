import { Bot, FileText, LayoutTemplate, Workflow } from "lucide-react";
import { Container } from "@/components/ui/container";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";

const workflowItems = [
  {
    icon: Bot,
    title: "AI-Assisted Planning",
    description:
      "I use AI-assisted development workflows to support software planning, requirement definition, and frontend implementation.",
  },
  {
    icon: FileText,
    title: "PRD & TRD Preparation",
    description:
      "I can prepare structured PRD and TRD documents, technical requirements, software documentation, and system breakdowns.",
  },
  {
    icon: Workflow,
    title: "User Flows & Modules",
    description:
      "I define system modules, organize user flows, and translate business ideas into clear technical scopes for teams and stakeholders.",
  },
  {
    icon: LayoutTemplate,
    title: "Prompting for AI Coding Tools",
    description:
      "I create professional prompts for AI coding tools such as Cursor to improve frontend development, debugging, and UI planning.",
  },
];

export function AiWorkflowSection() {
  return (
    <MotionSection className="py-14 sm:py-24">
      <Container>
        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950 p-8 shadow-2xl shadow-cyan-950/10 sm:p-10">
          <SectionHeading
            eyebrow="AI-Assisted Development"
            title="Using AI workflows to turn business ideas into structured technical execution."
            description="This approach supports planning, implementation clarity, documentation quality, debugging, and better communication between product goals and engineering work."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {workflowItems.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
