import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

type IndustryHeroProps = {
  eyebrow: string;
  h1: string;
  subheadline: string;
};

export function IndustryHero({ eyebrow, h1, subheadline }: IndustryHeroProps) {
  return (
    <section
      aria-labelledby="industry-hero-heading"
      className="px-6 pt-12 pb-20 md:pt-16 md:pb-28"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          {eyebrow}
        </p>

        <h1
          id="industry-hero-heading"
          className="mt-4 font-serif text-4xl leading-tight font-medium tracking-tight text-black sm:text-5xl lg:text-6xl"
        >
          {h1}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-600 sm:text-lg lg:text-xl">
          {subheadline}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            render={<Link href={siteConfig.cta.href} />}
            className="rounded-full bg-black px-7 py-3.5 text-white hover:bg-neutral-800"
          >
            {siteConfig.cta.label}
          </Button>
          <Button
            render={<Link href="/industries" />}
            variant="outline"
            className="rounded-full border-2 border-black bg-transparent px-7 py-3.5 text-black hover:bg-black hover:text-white"
          >
            View All Industries
          </Button>
        </div>
      </div>
    </section>
  );
}
