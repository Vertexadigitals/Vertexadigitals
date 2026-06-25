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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="resources-building-heading"
              className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
            >
              {h2}
            </h2>
            {anchor && (
              <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
                {anchor}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
      </div>
    </section>
  );
}
