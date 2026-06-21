const tips = [
  "What's prompting the project now — a launch deadline, a problem that's gotten too costly to ignore, or a new initiative leadership has just signed off on. Timing context helps us understand urgency without you having to spell out the word \"urgent.\"",
  "Who else is involved in the decision, and what their priorities are. A project championed by a marketing lead looks different from one a CEO is personally driving, and we'd rather know that upfront than guess halfway through a proposal.",
  "Any existing assets — a current website, brand guidelines, previous campaign data, analytics access — that give us real context instead of a blank slate. Even a rough, outdated version of something is more useful to us than nothing at all.",
  "What \"success\" would actually look like for you in six months, in terms you'd actually use internally — not a vague aspiration, but the specific number or outcome that would make this project worth having started.",
  "Any constraints we should know about upfront — budget ceiling, technical requirements, internal politics, or a board presentation you're building toward. Constraints aren't a weakness to hide; they're information that helps us scope something realistic.",
];

export function WhatToInclude() {
  return (
    <section
      aria-labelledby="what-to-include-heading"
      className="px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="what-to-include-heading"
          className="font-serif text-3xl text-black md:text-4xl"
        >
          What to Include in Your Message
        </h2>
        <p className="mt-6 text-base leading-relaxed text-neutral-600">
          The more context you give us upfront, the more useful our first
          response can be — a detailed inquiry gets a detailed answer. A few
          things worth including:
        </p>
        <ul className="mt-6 flex list-disc flex-col gap-3 pl-5 text-base leading-relaxed text-neutral-600">
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
        <p className="mt-6 text-base leading-relaxed text-neutral-600">
          None of this is required to reach out — we&apos;ll ask if we need
          to know more. But the inquiries that include this context tend to
          get a more specific, useful response than the ones that just say
          &quot;interested in your services.&quot; We&apos;d rather spend
          our first reply giving you a real answer than asking five
          questions you could have answered upfront.
        </p>
      </div>
    </section>
  );
}
