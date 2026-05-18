import { personalInfo } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/components/ui/reveal";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
        <FadeUp as="p" distance={12}>
          © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js and Tailwind CSS.
        </FadeUp>
        <FadeUp as="p" delay={0.08} distance={12}>{personalInfo.location}</FadeUp>
      </Container>
    </footer>
  );
}
