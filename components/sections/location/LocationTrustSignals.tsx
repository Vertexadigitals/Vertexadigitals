import { CheckCircle2 } from "lucide-react";

type LocationTrustSignalsProps = {
  city: string;
  regionShort: "US" | "UK" | "EU" | "AU";
};

const currencyByRegion: Record<LocationTrustSignalsProps["regionShort"], string> = {
  US: "USD",
  UK: "GBP",
  EU: "EUR",
  AU: "AUD",
};

export function LocationTrustSignals({ city, regionShort }: LocationTrustSignalsProps) {
  const currency = currencyByRegion[regionShort];

  const trustPoints = [
    "International data privacy compliance",
    "Native English communication",
    "Premium delivery standards",
    "Founder-led project access",
    `Transparent pricing in ${currency}`,
  ];

  return (
    <section
      aria-labelledby="location-trust-heading"
      className="bg-neutral-50 px-6 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="location-trust-heading"
          className="max-w-2xl font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          Built for {city} business standards
        </h2>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-3 rounded-xl border border-neutral-200/60 bg-white p-5"
            >
              <CheckCircle2
                className="size-5 shrink-0 text-neutral-700"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-neutral-700">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
