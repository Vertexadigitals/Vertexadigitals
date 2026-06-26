import { SectionHeader } from "@/components/sections/SectionHeader";

type IndustryWhyThisProps = {
  h2: string;
  paragraphs: string[];
};

export function IndustryWhyThis({ h2, paragraphs }: IndustryWhyThisProps) {
  const [anchor, ...supporting] = paragraphs;

  return (
    <section
      aria-labelledby="industry-why-this-heading"
      className="bg-neutral-50 px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          headingId="industry-why-this-heading"
          heading={h2}
          subtext={anchor}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {supporting.map((paragraph, index) => (
            <div
              key={index}
              className="rounded-xl border border-neutral-200/60 bg-white p-6"
            >
              <p className="text-sm leading-relaxed text-neutral-600">
                {paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
