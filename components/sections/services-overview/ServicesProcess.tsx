import { SectionHeader } from "@/components/sections/SectionHeader";

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
        <SectionHeader
          headingId="services-approach-heading"
          heading="Our Approach Across All Services"
          subtext="Every service we offer is judged by the same standard: does it move a number that matters to your business. A beautifully designed website that doesn't convert, or an ad campaign that burns budget without tracking ROAS, isn't success by our definition, no matter how polished it looks."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
    </section>
  );
}
