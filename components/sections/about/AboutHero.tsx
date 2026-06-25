import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="px-6 pt-12 pb-20 text-center md:pt-16 md:pb-28"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          About Vertexa Digitals
        </p>
        <h1
          id="about-hero-heading"
          className="mt-4 font-serif text-4xl leading-tight font-medium tracking-tight text-black sm:text-5xl lg:text-6xl"
        >
          Building the Agency We Wanted to Hire
        </h1>
        <p className="mt-6 text-base text-neutral-600 sm:text-lg lg:text-xl">
          We&apos;re four founders who got tired of watching good client
          work get diluted by agency overhead — so we built the agency
          we&apos;d actually want to hire ourselves.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            render={<Link href={siteConfig.cta.href} />}
            className="rounded-full bg-black px-7 py-3.5 text-white hover:bg-neutral-800"
          >
            {siteConfig.cta.label}
          </Button>
          <Button
            render={<Link href="/services" />}
            variant="outline"
            className="rounded-full border-2 border-black bg-transparent px-7 py-3.5 text-black hover:bg-black hover:text-white"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
