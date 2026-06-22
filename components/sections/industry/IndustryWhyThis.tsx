type IndustryWhyThisProps = {
  h2: string;
  paragraphs: string[];
};

export function IndustryWhyThis({ h2, paragraphs }: IndustryWhyThisProps) {
  return (
    <section
      aria-labelledby="industry-why-this-heading"
      className="px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="industry-why-this-heading"
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
