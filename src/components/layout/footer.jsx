import { personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js, Tailwind CSS, and Framer Motion.
        </p>
        <p>{personalInfo.location}</p>
      </Container>
    </footer>
  );
}
