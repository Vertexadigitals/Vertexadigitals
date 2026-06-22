type ResourcesWhatWereBuildingProps = {
  h2: string;
  paragraphs: string[];
};

export function ResourcesWhatWereBuilding({
  h2,
  paragraphs,
}: ResourcesWhatWereBuildingProps) {
  return (
    <section
      aria-labelledby="resources-building-heading"
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="resources-building-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          {h2}
        </h2>
        <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-neutral-600 md:text-lg">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
