import Link from "next/link";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

type CaseStudiesHeroProps = {
  h1: string;
  subheadline: string;
};

export function CaseStudiesHero({ h1, subheadline }: CaseStudiesHeroProps) {
  return (
    <section
      aria-labelledby="case-studies-hero-heading"
      className="px-6 pt-12 pb-20 md:pt-16 md:pb-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1
          id="case-studies-hero-heading"
          className="mt-6 font-serif text-4xl text-black md:text-6xl"
        >
          {h1}
        </h1>

        <p className="mt-6 text-lg text-neutral-600 md:text-xl">
          {subheadline}
        </p>

        <div className="mt-8 flex justify-center">
          <Button
            render={<Link href={`mailto:${siteConfig.contact.email}`} />}
            className="rounded-full bg-black px-7 py-3.5 text-white hover:bg-neutral-800"
          >
            <Mail className="size-4" aria-hidden="true" />
            Email Us for Samples
          </Button>
        </div>
      </div>
    </section>
  );
}
