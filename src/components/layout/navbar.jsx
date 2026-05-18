"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);

    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 shadow-[0_12px_40px_rgba(2,6,23,0.35)] backdrop-blur-xl">
      <Container>
        <div className="flex h-18 items-center justify-between gap-4 py-4">
          <a
            href="#home"
            className="perf-icon-link flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-white/5 text-sm font-semibold tracking-[0.3em] text-cyan-300"
            aria-label="Go to home"
          >
            {personalInfo.initials}
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="perf-nav-link text-sm text-slate-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={personalInfo.cvPath}
              download
              className="perf-btn-primary perf-magnetic inline-flex items-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950"
            >
              Download CV
            </a>
          </div>

          <button
            type="button"
            className="perf-icon-link inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-100 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      <div
        aria-hidden={!isOpen}
        className={`border-t border-white/10 bg-slate-950/95 md:hidden ${
          isOpen ? "" : "pointer-events-none"
        }`}
        style={{
          transformOrigin: "top",
          transform: isOpen ? "scaleY(1)" : "scaleY(0.96)",
          opacity: isOpen ? 1 : 0,
          willChange: "transform, opacity",
          transition: "transform 200ms ease-out, opacity 200ms ease-out",
        }}
      >
        <Container className={`${isOpen ? "block" : "hidden"} pb-5`}>
          <nav className="flex flex-col gap-2 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={personalInfo.cvPath}
              download
              className="perf-btn-primary mt-2 inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950"
            >
              Download CV
            </a>
          </nav>
        </Container>
      </div>
    </header>
  );
}
