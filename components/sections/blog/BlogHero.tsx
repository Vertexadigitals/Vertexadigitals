import type { BlogPost } from "@/lib/blogs-content";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

type BlogHeroProps = {
  blog: BlogPost;
};

export function BlogHero({ blog }: BlogHeroProps) {
  return (
    <section className="bg-white px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium tracking-widest text-neutral-600 uppercase">
          {blog.category}
        </span>

        <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          {blog.hero.eyebrow}
        </p>

        <h1 className="mt-4 font-serif text-4xl leading-tight font-medium tracking-tight text-black sm:text-5xl lg:text-6xl">
          {blog.hero.title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
          {blog.hero.subtitle}
        </p>

        <div className="mx-auto mt-8 h-px w-16 bg-neutral-200" aria-hidden="true" />

        <p className="mt-6 text-sm text-neutral-500">
          {blog.readTime} min read · {formatDate(blog.publishDate)} ·{" "}
          {blog.authorName}
        </p>
      </div>
    </section>
  );
}
