const blocks = [
  {
    title: "Founder-Touched, Not Outsourced",
    description:
      "Most digital agencies hand off projects to junior teams and hide behind status reports. Every project here is touched by our founders, every decision grounded in performance data, every deliverable built to compete on the global stage.",
  },
  {
    title: "Built for Ambitious Brands",
    description:
      "Our clients are ambitious SaaS founders, D2C brands, B2B companies, and high-growth startups across the US, UK, EU, and Australia — companies that came to us tired of agencies that promised growth and delivered excuses.",
  },
  {
    title: "No Outsourced Labor. No Middlemen.",
    description:
      "Whether it's a single high-impact engagement or a long-term growth partnership, we operate as an extension of your team. No surprises. Just senior-led execution, transparent communication, and measurable outcomes.",
  },
];

export function Introduction() {
  return (
    <section aria-labelledby="intro-heading" className="bg-neutral-50 px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <h2
            id="intro-heading"
            className="font-serif text-3xl leading-tight font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
          >
            We&apos;re not a digital agency. We&apos;re your growth partner.
          </h2>

          <div className="flex flex-col gap-6">
            {blocks.map((block) => (
              <div
                key={block.title}
                className="rounded-xl border border-neutral-200/60 bg-white p-6"
              >
                <h3 className="font-serif text-lg font-medium text-black">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
