type SubServiceTechStackProps = {
  h2: string;
  paragraph: string;
  tools: string[];
};

export function SubServiceTechStack({
  h2,
  paragraph,
  tools,
}: SubServiceTechStackProps) {
  return (
    <section
      aria-labelledby="sub-service-tech-heading"
      className="px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="sub-service-tech-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          {h2}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
          {paragraph}
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-black/10 px-4 py-2 text-sm text-neutral-700"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
