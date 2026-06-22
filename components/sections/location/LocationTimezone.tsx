import { Clock } from "lucide-react";

type LocationTimezoneProps = {
  h2: string;
  paragraphs: string[];
  overlapHours: string;
  communicationTools: string[];
};

export function LocationTimezone({
  h2,
  paragraphs,
  overlapHours,
  communicationTools,
}: LocationTimezoneProps) {
  return (
    <section
      aria-labelledby="location-timezone-heading"
      className="px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="location-timezone-heading"
          className="font-serif text-4xl text-black md:text-5xl"
        >
          {h2}
        </h2>
        <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-neutral-600 md:text-lg">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-black/10 bg-neutral-50 p-6">
          <Clock className="mt-0.5 size-5 shrink-0 text-black" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-neutral-700">
            {overlapHours}
          </p>
        </div>

        <ul className="mt-6 flex flex-wrap gap-3">
          {communicationTools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-black/10 px-4 py-2 text-sm text-neutral-700"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
