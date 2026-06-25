import { BlogSubscribeForm } from "@/components/sections/resources/BlogSubscribeForm";

type BlogsHeroProps = {
  h1: string;
  subheadline: string;
};

export function BlogsHero({ h1, subheadline }: BlogsHeroProps) {
  return (
    <section
      aria-labelledby="blogs-hero-heading"
      className="px-6 pt-12 pb-20 md:pt-16 md:pb-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1
          id="blogs-hero-heading"
          className="mt-6 font-serif text-4xl text-black md:text-6xl"
        >
          {h1}
        </h1>

        <p className="mt-6 text-lg text-neutral-600 md:text-xl">
          {subheadline}
        </p>

        <div className="mt-8 mx-auto max-w-sm">
          <BlogSubscribeForm />
        </div>
      </div>
    </section>
  );
}
