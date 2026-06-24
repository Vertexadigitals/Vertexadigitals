type ServiceTechStackProps = {
  intro: string;
  tools: string[];
};

export function ServiceTechStack({ intro, tools }: ServiceTechStackProps) {
  return (
    <section aria-labelledby="service-tech-heading" className="bg-neutral-50 px-6 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <h2
          id="service-tech-heading"
          className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
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
              className="rounded-full border border-neutral-200/60 bg-white px-4 py-2 text-sm text-neutral-700"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
