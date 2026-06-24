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
  const [anchor, ...supporting] = paragraphs;

  return (
    <section
      aria-labelledby="location-timezone-heading"
      className="bg-neutral-50 px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="location-timezone-heading"
              className="font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
            >
              {h2}
            </h2>
            {anchor && (
              <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
                {anchor}
              </p>
            )}

            <div className="mt-8 flex items-start gap-3 rounded-lg border-l-4 border-neutral-900 bg-white p-6">
              <Clock className="mt-0.5 size-5 shrink-0 text-neutral-900" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-neutral-700">
                {overlapHours}
              </p>
            </div>

            <ul className="mt-6 flex flex-wrap gap-3">
              {communicationTools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-neutral-200/60 bg-white px-4 py-2 text-sm text-neutral-700"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {supporting.map((paragraph, index) => (
              <div
                key={index}
                className="rounded-xl border border-neutral-200/60 bg-white p-6"
              >
                <p className="text-sm leading-relaxed text-neutral-600">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
