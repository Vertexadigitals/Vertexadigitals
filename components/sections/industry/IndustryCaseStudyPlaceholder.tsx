import Link from "next/link";
import { ArrowRight } from "lucide-react";

type IndustryCaseStudyPlaceholderProps = {
  h2: string;
  text: string;
};

export function IndustryCaseStudyPlaceholder({
  h2,
  text,
}: IndustryCaseStudyPlaceholderProps) {
  return (
    <section
      aria-labelledby="industry-case-study-heading"
      className="px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="industry-case-study-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          {h2}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
          {text}
        </p>
        <Link
          href="/resources/case-studies"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-black hover:underline"
        >
          See what we&apos;re building toward
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
