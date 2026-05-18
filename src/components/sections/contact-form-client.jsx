"use client";

import { Send } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function ContactFormClient() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = `Portfolio Contact from ${name}`;
    const body = `${name}\n${email}\n\n${message}`;
    const gmailComposeUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(personalInfo.email)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-base font-semibold text-white">Send me an email</p>
      <p className="mt-1 text-sm text-slate-400">
        Fill this form and your email app will open with your message ready to send.
      </p>

      <div className="mt-5 space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/50"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/50"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={4}
          className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/50"
        />
        <button
          type="submit"
          className="perf-btn-primary perf-magnetic inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950"
        >
          Send Email
          <Send size={16} />
        </button>
      </div>
    </form>
  );
}

