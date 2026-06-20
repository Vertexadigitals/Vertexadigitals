type ServiceTechStackProps = {
  intro: string;
  tools: string[];
};

export function ServiceTechStack({ intro, tools }: ServiceTechStackProps) {
  return (
    <section aria-labelledby="service-tech-heading" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-3xl">
        <h2
          id="service-tech-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          Technologies &amp; tools we use
        </h2>
        <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
          {intro}
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
