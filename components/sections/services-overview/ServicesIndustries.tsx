export function ServicesIndustries() {
  return (
    <section
      aria-labelledby="services-industries-heading"
      className="bg-white px-6 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="services-industries-heading"
          className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          Industries We Serve
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-6">
            <h3 className="font-serif text-lg font-medium text-black">
              SaaS Companies
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              SaaS companies come to us for one of two reasons: a marketing
              site that isn&apos;t converting trial signups, or organic and
              paid acquisition that&apos;s stopped being efficient as
              they&apos;ve scaled. We typically start with whichever service
              addresses the most urgent gap, then expand into a broader
              engagement once the first project proves the work.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-6">
            <h3 className="font-serif text-lg font-medium text-black">
              D2C &amp; E-commerce
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              D2C and e-commerce brands usually need some combination of a
              storefront that can handle real order volume, paid acquisition
              that stays profitable as spend scales, and a brand identity
              that turns one-time buyers into repeat customers. We&apos;ve
              supported D2C brands across single services and full-stack
              engagements covering all of them.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-6">
            <h3 className="font-serif text-lg font-medium text-black">
              B2B &amp; Professional Services
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              B2B and professional services firms typically need
              credibility-building work — websites and content that signal
              expertise to procurement teams and enterprise buyers, SEO that
              captures long research cycles, and branding that doesn&apos;t
              look like a templated consulting deck. These engagements tend
              to run longer, because B2B trust gets built slowly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
