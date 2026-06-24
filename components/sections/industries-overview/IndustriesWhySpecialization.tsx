const supportingPoints = [
  "We've built specific pattern recognition across the eight industries listed here through repeated, focused work — not a single project we're now generalizing into an \"industry expertise\" claim. The challenges a SaaS company brings us are genuinely different from the challenges a law firm or a real estate brokerage brings us.",
  "Specialization also means we already know which services actually matter most for your category and which ones are a lower priority, so we can scope an engagement around your real highest-leverage opportunity instead of a standard package.",
  "It shows up in smaller, less obvious ways too — knowing which tools and platforms a given industry actually runs on, which compliance or ethics constraints shape what content can responsibly say, and which buyer objections come up predictably enough to address proactively.",
  "We also stay honest about the edges of our specialization. Industry experience doesn't mean we've seen every possible variation within a category. We treat the industry pages here as a starting point for an informed conversation, not a solved problem.",
  "The eight industries on this page reflect where we've done enough focused, repeated work to genuinely understand the patterns — not a marketing list assembled to look comprehensive.",
  "We update each industry page as our own pattern recognition deepens, rather than writing it once early on and leaving it static while the actual work we do for that category keeps evolving.",
  "This also shapes how we staff engagements internally. Someone who's spent real time inside a category's specific constraints brings judgment to a new project that can't be replicated by reading a brief, however thorough.",
  "None of this replaces an actual conversation about your specific business. Specialization narrows the starting questions we need to ask, but it's not a substitute for understanding what makes your company different from the next one in the same category.",
];

export function IndustriesWhySpecialization() {
  return (
    <section
      aria-labelledby="industries-why-specialization-heading"
      className="bg-white px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="industries-why-specialization-heading"
              className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
            >
              Why Industry Specialization Matters
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
              A generalist agency can produce competent work for almost any
              industry, but competent isn&apos;t the same as informed. Every
              category we work in has its own vocabulary, its own buyer
              psychology, and its own version of what actually moves the
              metrics that matter — and a team that has to learn that
              context from scratch on your engagement is spending your
              budget on their education, not your results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {supportingPoints.map((point, index) => (
              <div
                key={index}
                className="rounded-xl border border-neutral-200/60 bg-neutral-50 p-6"
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
