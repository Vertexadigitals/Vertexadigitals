import { originStoryParagraphs } from "@/lib/about-content";

export function OriginStory() {
  const [anchor, ...supporting] = originStoryParagraphs;

  return (
    <section aria-labelledby="origin-story-heading" className="bg-neutral-50 px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="origin-story-heading"
              className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
            >
              Why we built Vertexa
            </h2>
            {anchor && (
              <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
                {anchor}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4">
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
      </div>
    </section>
  );
}
