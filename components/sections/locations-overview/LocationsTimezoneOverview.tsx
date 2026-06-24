const supportingPoints = [
  "We structure our own schedule around each region's business hours rather than asking every client to adapt to ours, and we supplement live overlap with disciplined async habits — detailed written updates, recorded video walkthroughs, and clear documentation.",
  "This isn't a workaround we're apologizing for. Many of our most effective working relationships happen specifically because the distance forces clearer communication than two teams sitting in the same office might default to.",
  "Each city page on this site details the specific overlap window and communication tools we use for that market. We'd rather be specific about each market than make a vague, one-size-fits-all claim about \"global availability.\"",
  "We also recognize that not every project genuinely needs heavy real-time collaboration. Strategy, content, and most design and development work can progress well asynchronously with periodic live check-ins.",
  "Being based in Udaipur, India also means our own working day starts well before much of the world's, which turns out to be a genuine advantage. By the time US clients start their day, there's often already a meaningful update waiting for them.",
  "None of this is a special process reserved for international clients. Clear async communication and proactive status updates are simply how we work day to day, which is why the model holds up consistently across every region we serve.",
];

export function LocationsTimezoneOverview() {
  return (
    <section
      aria-labelledby="locations-timezone-heading"
      className="bg-white px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="locations-timezone-heading"
              className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
            >
              How We Work Across Time Zones
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
              Working with a remote agency across a real time difference is
              a legitimate question, not something we gloss over. The
              honest answer is that overlap varies meaningfully by region —
              UK and EU clients get 5-6 hours of daily real-time overlap,
              Australian clients get a genuinely favorable 4-5 hours, and
              US clients get 2-4 hours depending on the specific city and
              coast.
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
