const supportingPoints = [
  "Every engagement is founder-led, regardless of which of the six services you're working with. It's why our estimates hold up, and why the people who scope your project are the same people accountable for its results.",
  "We hold ourselves to the same standards as the agencies our clients' competitors are paying premium rates for in New York, London, and Sydney — because that's the bar our clients actually compete against.",
  "That consistency — in standards, in accountability, in communication — is what \"integrated\" actually means in practice. Not a shared logo across six disconnected teams, but one team applying the same bar to every discipline.",
];

export function ServicesProcess() {
  return (
    <section
      aria-labelledby="services-approach-heading"
      className="bg-neutral-50 px-6 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="services-approach-heading"
              className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
            >
              Our Approach Across All Services
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
              Every service we offer is judged by the same standard: does it
              move a number that matters to your business. A beautifully
              designed website that doesn&apos;t convert, or an ad campaign
              that burns budget without tracking ROAS, isn&apos;t success by
              our definition, no matter how polished it looks.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {supportingPoints.map((point, index) => (
              <div
                key={index}
                className="rounded-xl border border-neutral-200/60 bg-white p-6"
              >
                <p className="text-sm leading-relaxed text-neutral-600">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
