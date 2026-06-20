type Segment = {
  title: string;
  description: string;
};

const segments: Segment[] = [
  {
    title: "SaaS & Software Companies",
    description:
      "From early-stage startups to established platforms, we help SaaS companies improve activation, reduce churn, and scale paid acquisition. Our work spans landing page optimization, technical SEO for product-led growth, and full marketing site rebuilds that turn visitors into trial users.",
  },
  {
    title: "D2C & E-commerce Brands",
    description:
      "Premium D2C brands and ambitious e-commerce stores trust us to build Shopify storefronts that convert, scale paid ad campaigns profitably, and create the kind of brand identity that turns one-time buyers into lifelong customers. We focus on growth that compounds.",
  },
  {
    title: "B2B & Professional Services",
    description:
      "Consulting firms, agencies, and B2B companies hire us to build authoritative websites, rank for high-intent keywords, and generate qualified leads through content marketing and SEO. We understand the long sales cycle — and we build for it.",
  },
];

export function WhoWeServe() {
  return (
    <section aria-labelledby="who-we-serve-heading" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          Our Clients
        </p>
        <h2
          id="who-we-serve-heading"
          className="mt-4 max-w-3xl font-serif text-4xl text-black md:text-5xl"
        >
          Built for ambitious global brands
        </h2>
        <p className="mt-6 max-w-2xl text-base text-neutral-600 md:text-lg">
          We&apos;re particular about who we work with — because that&apos;s
          how we deliver work we&apos;re proud of. The companies who thrive
          with us share a few things in common: ambition, clarity, and a real
          commitment to building something that lasts.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {segments.map((segment) => (
            <div key={segment.title}>
              <h3 className="font-serif text-xl text-black">
                {segment.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
