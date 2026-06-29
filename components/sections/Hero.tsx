import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex flex-col items-center justify-center px-6 py-20 text-center sm:py-24 lg:py-28"
    >
      <div className="flex flex-col items-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          Founder-Led · International Standards
        </p>

        <h1
          id="hero-heading"
          className="mt-6 max-w-3xl font-serif text-4xl leading-tight font-medium tracking-tight text-black sm:text-5xl lg:text-6xl"
        >
          Digital Agency Built for Ambitious Global Brands
        </h1>

        <p className="mt-6 max-w-2xl text-base text-neutral-600 sm:text-lg lg:text-xl">
          We design, build, and scale digital experiences for ambitious
          brands across the United States, United Kingdom, European Union,
          and Australia. From web development to performance marketing —
          one team, one vision, every capability you need.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            render={<Link href={siteConfig.cta.href} />}
            className="rounded-full bg-black px-8 py-4 text-base text-white hover:bg-neutral-800"
          >
            {siteConfig.cta.label}
          </Button>
          <Button
            render={<Link href="/services" />}
            variant="outline"
            className="rounded-full border-2 border-black bg-transparent px-8 py-4 text-base text-black hover:bg-black hover:text-white"
          >
            Explore Services
          </Button>
        </div>

        <p className="mt-8 text-xs tracking-widest text-neutral-600 uppercase">
          Serving brands across {siteConfig.areaServed.join(" · ")}
        </p>
      </div>
    </section>
  );
}
