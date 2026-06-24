type ServiceIndustriesProps = {
  serviceName: string;
  industries: { title: string; description: string }[];
};

export function ServiceIndustries({
  serviceName,
  industries,
}: ServiceIndustriesProps) {
  return (
    <section
      aria-labelledby="service-industries-heading"
      className="bg-white px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="service-industries-heading"
          className="max-w-2xl font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          Who we build {serviceName} for
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-6"
            >
              <h3 className="font-serif text-lg font-medium text-black">
                {industry.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
