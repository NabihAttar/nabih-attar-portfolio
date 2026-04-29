"use client";

import { useState } from "react";
import { BriefcaseBusiness, Code2, Mail, MapPin, Phone, Send } from "lucide-react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `${formData.name}\n${formData.email}\n\n${formData.message}`;
    const gmailComposeUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(personalInfo.email)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <MotionSection id="contact" className="py-14 sm:py-24">
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

          <div className="space-y-4">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-base font-semibold text-white">Send me an email</p>
              <p className="mt-1 text-sm text-slate-400">
                Fill this form and your email app will open with your message ready to send.
              </p>

              <div className="mt-5 space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, name: event.target.value }))
                  }
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/50"
                />
        
                <textarea
                  placeholder="Your Message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, message: event.target.value }))
                  }
                  className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/50"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Send Email
                  <Send size={16} />
                </button>
              </div>
            </form>

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
        </div>
      </Container>
    </MotionSection>
  );
}
