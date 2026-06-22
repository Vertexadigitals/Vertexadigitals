type LocationWhyThisCityProps = {
  h2: string;
  paragraphs: string[];
};

export function LocationWhyThisCity({ h2, paragraphs }: LocationWhyThisCityProps) {
  return (
    <section
      aria-labelledby="location-why-city-heading"
      className="px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="location-why-city-heading"
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
