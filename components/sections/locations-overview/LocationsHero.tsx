import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function LocationsHero() {
  return (
    <section
      aria-labelledby="locations-hero-heading"
      className="px-6 pt-12 pb-20 md:pt-16 md:pb-28"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1
          id="locations-hero-heading"
          className="mt-6 font-serif text-4xl leading-tight font-medium tracking-tight text-black sm:text-5xl lg:text-6xl"
        >
          Serving Brands Across the US, UK, EU, and Australia
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-600 sm:text-lg lg:text-xl">
          We&apos;re a remote agency based in Udaipur, India — not physically
          present in any of the cities below. What we&apos;ve built instead
          is genuine timezone overlap, market-specific understanding, and a
          working rhythm that holds up across the distance, city by city.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            render={<Link href={siteConfig.cta.href} />}
            className="rounded-full bg-black px-7 py-3.5 text-white hover:bg-neutral-800"
          >
            {siteConfig.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
