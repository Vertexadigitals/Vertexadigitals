import { SectionHeader } from "@/components/sections/SectionHeader";

type ResourcesWhatWereBuildingProps = {
  h2: string;
  paragraphs: string[];
};

export function ResourcesWhatWereBuilding({
  h2,
  paragraphs,
}: ResourcesWhatWereBuildingProps) {
  const [anchor, ...supporting] = paragraphs;

  return (
    <section
      aria-labelledby="resources-building-heading"
      className="bg-white px-6 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          headingId="resources-building-heading"
          heading={h2}
          subtext={anchor}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {supporting.map((paragraph, index) => (
            <div
              key={index}
              className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-6"
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
