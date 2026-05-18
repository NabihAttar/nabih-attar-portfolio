import { StaggerContainer, StaggerItem } from "@/components/ui/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <StaggerContainer className={`mb-10 flex flex-col gap-3 ${alignment}`}>
      <StaggerItem as="span" className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </StaggerItem>
      <StaggerItem as="h2" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </StaggerItem>
      {description ? (
        <StaggerItem as="p" className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {description}
        </StaggerItem>
      ) : null}
    </StaggerContainer>
  );
}
