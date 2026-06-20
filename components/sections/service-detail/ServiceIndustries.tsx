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
      className="bg-neutral-50 px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="service-industries-heading"
          className="max-w-2xl font-serif text-4xl text-black md:text-5xl"
        >
          Who we build {serviceName} for
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {industries.map((industry) => (
            <div key={industry.title}>
              <h3 className="font-serif text-xl text-black">
                {industry.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
