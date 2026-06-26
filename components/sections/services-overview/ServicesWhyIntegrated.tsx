import { SectionHeader } from "@/components/sections/SectionHeader";

const supportingPoints = [
  "When a paid campaign underperforms, is it the targeting, the landing page, the brand messaging, or the product itself? With four agencies each owning one piece, you get four different explanations and no clear answer. With one integrated team, there's nowhere to point fingers.",
  "Strategy degrades every time it gets handed to a new team. The positioning your branding agency developed gets diluted by the time your content agency writes copy, and diluted further by the time your ad agency builds creative around it.",
  "Deadline slippage compounds across vendors too — your website launch waits on your branding agency, your content calendar waits on your website, and every delay cascades into the next.",
  "We don't do everything. We do six things exceptionally well — the six things ambitious global brands actually need.",
];

export function ServicesWhyIntegrated() {
  return (
    <section
      aria-labelledby="why-integrated-heading"
      className="bg-neutral-50 px-6 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          headingId="why-integrated-heading"
          heading="Why Integrated Beats Fragmented"
          subtext="Hiring six specialists across six different agencies means six kickoff calls, six sets of status updates, and six relationships to manage before any actual work gets coordinated. Every hour your team spends translating between vendors who don't talk to each other is an hour not spent on the decisions that actually need your attention."
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
