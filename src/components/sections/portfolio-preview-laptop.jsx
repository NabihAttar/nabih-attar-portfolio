"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: "profile", label: "Profile" },
  { id: "freelance", label: "Freelance" },
  { id: "about", label: "About" },
];

function ProfileTab() {
  return (
    <div className="grid gap-4 md:grid-cols-[0.86fr_1.14fr]">
      <motion.div
        whileHover={{ y: -2, scale: 1.01 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="rounded-2xl border border-white/10 bg-slate-900/80 p-4"
      >
        <div className="overflow-hidden rounded-2xl border border-cyan-300/30 bg-slate-800">
          <Image
            src="/images/profile-tab-photo.png"
            width={640}
            height={720}
            alt="Nabih Attar profile preview"
            className="h-48 w-full object-cover sm:h-56"
          />
        </div>
      </motion.div>
      <div className="space-y-3">
        <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">Frontend Developer</p>
          <p className="mt-2 text-sm text-slate-300">React.js | Next.js | UI Developer</p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-slate-900/80 p-2.5 text-center sm:p-3">
            <p className="text-base font-semibold text-white sm:text-lg">20+</p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.16em]">Projects</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-900/80 p-2.5 text-center sm:p-3">
            <p className="text-base font-semibold text-white sm:text-lg">React</p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.16em]">Core Stack</p>
          </div>
          <div className="col-span-2 rounded-xl border border-white/10 bg-slate-900/80 p-2.5 text-center sm:col-span-1 sm:p-3">
            <p className="text-base font-semibold text-white sm:text-lg">UI</p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.12em] text-slate-400 sm:text-[10px] sm:tracking-[0.16em]">Premium Focus</p>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-3">
          <p className="text-xs leading-6 text-slate-300">
            Building clean, high-performance interfaces with modern design systems and business-focused user flows.
          </p>
        </div>
      </div>
    </div>
  );
}

function FreelanceTab() {
  const services = [
    "Frontend Development",
    "React.js / Next.js",
    "Responsive Websites",
    "SEO",
  ];

  return (
    <div className="grid gap-3 lg:grid-cols-[0.95fr_1.05fr]">
      <motion.div
        whileHover={{ y: -2, scale: 1.01 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/12 via-blue-500/8 to-slate-900/60 p-3"
      >
        <div className="space-y-3 rounded-xl border border-white/10 bg-slate-900/80 p-3">
          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-950/70 px-3 py-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-200">Freelance Workspace</span>
          </div>
          <div className="grid gap-2">
            <div className="rounded-lg border border-white/10 bg-slate-950/70 p-2.5">
              <div className="mb-2 h-1.5 w-24 rounded-full bg-cyan-300/65" />
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-white/10" />
                <div className="h-1.5 w-[86%] rounded-full bg-white/10" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-white/10 bg-slate-950/70 p-2.5">
                <div className="h-7 rounded-md bg-cyan-400/15" />
                <div className="mt-2 h-1.5 w-14 rounded-full bg-white/10" />
              </div>
              <div className="rounded-lg border border-white/10 bg-slate-950/70 p-2.5">
                <div className="h-7 rounded-md bg-blue-400/15" />
                <div className="mt-2 h-1.5 w-16 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-dashed border-cyan-300/25 bg-cyan-400/8 px-3 py-2">
            <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-100">UI + Performance + Delivery</p>
          </div>
        </div>
      </motion.div>

      <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-cyan-200">Freelance Services</p>
        <p className="mt-2 text-sm leading-7 text-slate-300">
        I work as a freelance frontend developer, building modern, responsive websites and web apps with clean UI and smooth user experiences.        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-xl border border-white/10 bg-slate-950/65 px-3 py-2 text-[11px] font-medium text-slate-200"
            >
              {service}
            </div>
          ))}
        </div>

        <motion.a
          href="#contact"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-400/15 px-4 py-2 text-xs font-semibold text-cyan-100 hover:bg-cyan-400/25"
        >
          Work With Me
          <ArrowUpRight size={14} />
        </motion.a>
      </div>
    </div>
  );
}

function AboutTab() {
  const infoBoxes = [
    "Frontend Developer",
    "React / Next.js",
    "Software Solutions",
    "Freelance Developer",
    "Experienced in building multilingual websites, responsive business platforms, and modern user-focused interfaces.",
    "Skilled in creating high-performance frontend solutions with clean code, scalable architecture, and smooth user experiences.",
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
        <p className="text-sm leading-7 text-slate-300">
          Nabih Attar is a Computer Science graduate and Frontend Developer specializing in React.js, Next.js, and modern responsive web interfaces. He builds clean, professional, and user-focused digital experiences, with experience in frontend development, software solutions, and business-focused web applications.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {infoBoxes.map((box) => (
          <div
            key={box}
            className="inline-flex items-start gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-xs font-medium leading-5 text-slate-200"
          >
            <Sparkles size={12} className="text-cyan-200" />
            <span>{box}</span>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-3">
        <p className="text-xs text-cyan-100">
          Focused on crafting premium UI with strong performance, accessibility, and clean maintainable architecture.
        </p>
      </div>
    </div>
  );
}

function LaptopTabs({ activeTab, onChange }) {
  return (
    <div role="tablist" aria-label="Portfolio preview tabs" className="grid w-full grid-cols-3 gap-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`preview-tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`preview-panel-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.id)}
            className={`w-full rounded-full px-3 py-1.5 text-center text-xs font-semibold transition ${
              isActive
                ? "border border-cyan-300/40 bg-cyan-400/15 text-cyan-100"
                : "border border-white/10 bg-white/5 text-slate-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

function LaptopScreen({ activeTab, reducedMotion }) {
  const tabContent = {
    profile: <ProfileTab />,
    freelance: <FreelanceTab />,
    about: <AboutTab />,
  };

  return (
    <div className="h-[380px] overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-b from-slate-900 to-slate-950 p-3 sm:h-[410px] lg:h-[430px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          id={`preview-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`preview-tab-${activeTab}`}
          className="h-full overflow-hidden"
          initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {tabContent[activeTab]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function PortfolioPreviewLaptop() {
  const [activeTab, setActiveTab] = useState("profile");
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl" />

      <div className="relative rounded-[1.6rem] border border-white/15 bg-gradient-to-b from-slate-700/95 to-slate-900 p-2 shadow-[0_28px_80px_rgba(8,47,73,0.5)]">
        <div className="rounded-[1.2rem] border border-white/10 bg-slate-950/95 p-3">
          <div className="mb-3 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-900/80 p-2">
            <LaptopTabs activeTab={activeTab} onChange={setActiveTab} />
            <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:inline-flex">
              Interactive Preview
            </span>
          </div>

          <div className="lg:px-1 xl:px-2">
            <LaptopScreen activeTab={activeTab} reducedMotion={reducedMotion} />
          </div>
        </div>
      </div>

      <div className="mx-auto h-3 w-[88%] rounded-b-[1.1rem] bg-gradient-to-b from-slate-400/40 via-slate-600/20 to-transparent" />
      <div className="mx-auto mt-1 h-3.5 w-[26%] rounded-full bg-slate-700/60" />
      <div className="pointer-events-none absolute -bottom-8 left-1/2 h-10 w-[74%] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-2xl" />
    </motion.div>
  );
}
