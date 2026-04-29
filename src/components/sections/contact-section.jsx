import { BriefcaseBusiness, Code2, Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";

const contactItems = [
  {
    label: "Email",
    value: personalInfo.email,
    href: personalInfo.emailHref,
    icon: Mail,
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: personalInfo.phoneHref,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nabih-attar-99a63b2b4",
    href: personalInfo.linkedin,
    icon: BriefcaseBusiness,
  },
  {
    label: "GitHub",
    value: "github.com/NabihAttar",
    href: personalInfo.github,
    icon: Code2,
  },
];

export function ContactSection() {
  return (
    <MotionSection id="contact" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Open to frontend, React.js, Next.js, and software development opportunities."
              description="If you are hiring or would like to discuss a project, feel free to reach out through email, phone, LinkedIn, or GitHub."
            />
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-white/[0.02] p-6">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={18} className="text-cyan-300" />
                <span>{personalInfo.location}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Available for professional opportunities involving responsive UI development, scalable frontend architecture, API-integrated web apps, and polished user experiences.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactItems.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Icon size={20} />
                </div>
                <p className="mt-5 text-sm text-slate-400">{label}</p>
                <p className="mt-2 text-base font-medium text-white">{value}</p>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </MotionSection>
  );
}
