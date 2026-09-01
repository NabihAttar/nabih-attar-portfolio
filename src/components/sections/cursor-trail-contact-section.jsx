"use client";

import dynamic from "next/dynamic";
import { personalInfo } from "@/data/portfolio";

const CursorTrailContactShader = dynamic(
  () =>
    import("@/components/sections/cursor-trail-contact-shader").then(
      (mod) => mod.CursorTrailContactShader,
    ),
  { ssr: false },
);

const socialLinks = [
  { label: "LinkedIn", href: personalInfo.linkedin },
  { label: "GitHub", href: personalInfo.github },
  { label: "Email", href: personalInfo.emailHref },
];

export function CursorTrailContactSection() {
  return (
    <section
      id="contact"
      className="cursor-trail-contact relative isolate flex min-h-[100dvh] flex-col overflow-hidden border-t border-white/10 bg-slate-950 font-[family-name:var(--font-cursor-trail-sans)] text-slate-100 antialiased"
      aria-label="Contact"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <CursorTrailContactShader />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_18%)]"
        aria-hidden="true"
      />

      <div className="pointer-events-none relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h2
          className="cursor-trail-reveal text-2xl font-medium text-slate-300 sm:text-3xl"
          style={{ "--reveal-delay": "0.1s" }}
        >
          Got something to make?
        </h2>

        <a
          href={personalInfo.emailHref}
          className="group pointer-events-auto cursor-trail-reveal mt-5 inline-block max-w-full break-words text-[clamp(2.2rem,7vw,6rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white transition-colors hover:text-cyan-100"
          style={{ "--reveal-delay": "0.25s" }}
        >
          Contact me
          <span className="mx-auto mt-2 block h-[3px] w-0 bg-cyan-400/80 transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
        </a>
      </div>

      <footer
        className="cursor-trail-reveal pointer-events-none relative z-10 flex flex-wrap items-center justify-between gap-4 px-6 pb-9 font-[family-name:var(--font-cursor-trail-mono)] text-xs uppercase tracking-[0.18em] text-slate-400 sm:px-12"
        style={{ "--reveal-delay": "0.45s" }}
      >
        <div className="pointer-events-auto flex flex-wrap gap-7">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="transition-colors hover:text-cyan-200"
            >
              {label}
            </a>
          ))}
        </div>

        <p className="hidden sm:block">( move your cursor )</p>
      </footer>
    </section>
  );
}
