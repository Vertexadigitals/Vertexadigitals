import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  headingId?: string;
  subtext?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  headingId,
  subtext,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center mb-12 lg:mb-16", className)}>
      {eyebrow && (
        <p className="mb-4 text-xs font-medium tracking-widest text-neutral-500 uppercase">
          {eyebrow}
        </p>
      )}
      <h2
        id={headingId}
        className="font-serif text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
      >
        {heading}
      </h2>
      {subtext && (
        <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
          {subtext}
        </p>
      )}
    </div>
  );
}
