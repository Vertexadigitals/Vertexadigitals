import { SectionHeader } from "@/components/sections/SectionHeader";
import { originStoryParagraphs } from "@/lib/about-content";

export function OriginStory() {
  const [anchor, ...supporting] = originStoryParagraphs;

  return (
    <section aria-labelledby="origin-story-heading" className="bg-neutral-50 px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          headingId="origin-story-heading"
          heading="Why we built Vertexa"
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
