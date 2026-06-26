import Link from "next/link";

import { Button } from "@/components/ui/button";

type BlogMidCtaProps = {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink: string;
};

export function BlogMidCta({
  heading,
  subheading,
  buttonText,
  buttonLink,
}: BlogMidCtaProps) {
  return (
    <div className="my-12 rounded-2xl bg-neutral-900 px-8 py-12 text-center text-white">
      <p className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
        {heading}
      </p>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-300">
        {subheading}
      </p>
      <div className="mt-8">
        <Button
          render={<Link href={buttonLink} />}
          className="rounded-full bg-white px-8 py-4 text-base text-black hover:bg-neutral-200"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
