import Link from "next/link";

import { Button } from "@/components/ui/button";

type BlogFinalCtaProps = {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink: string;
};

export function BlogFinalCta({
  heading,
  subheading,
  buttonText,
  buttonLink,
}: BlogFinalCtaProps) {
  return (
    <section className="bg-neutral-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
          {heading}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-300">
          {subheading}
        </p>
        <div className="mt-10">
          <Button
            render={<Link href={buttonLink} />}
            className="rounded-full bg-white px-8 py-4 text-base text-black hover:bg-neutral-200"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
