"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getAllCategories, type BlogCategory, type BlogPost } from "@/lib/blogs-content";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

type BlogIndexGridProps = {
  posts: BlogPost[];
};

export function BlogIndexGrid({ posts }: BlogIndexGridProps) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">("All");
  const categories: (BlogCategory | "All")[] = ["All", ...getAllCategories()];

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const showFeatured = activeCategory === "All" && filtered.length > 0;
  const featured = showFeatured ? filtered[0] : null;
  const gridPosts = featured ? filtered.slice(1) : filtered;

  return (
    <>
      <section className="bg-white px-6 pb-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-neutral-900 text-white"
                    : "border border-neutral-200 text-neutral-700 hover:border-neutral-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-neutral-500">
            {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          </p>
        </div>
      </section>

      {featured && (
        <section className="bg-white px-6 pb-16">
          <div className="mx-auto max-w-7xl">
            <Link
              href={`/resources/blogs/${featured.slug}`}
              className="group grid grid-cols-1 gap-8 rounded-2xl border border-neutral-200 p-6 transition-shadow duration-300 hover:shadow-xl sm:p-8 lg:grid-cols-2 lg:items-center"
            >
              <div className="aspect-video rounded-2xl bg-neutral-100" />
              <div>
                <span className="inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium tracking-widest text-neutral-600 uppercase">
                  Featured
                </span>
                <span className="ml-2 text-xs font-medium tracking-widest text-neutral-500 uppercase">
                  {featured.category}
                </span>
                <h2 className="mt-4 font-serif text-2xl font-medium tracking-tight text-black sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">
                  {featured.excerpt}
                </p>
                <p className="mt-4 text-sm text-neutral-500">
                  {featured.readTime} min read ·{" "}
                  {formatDate(featured.publishDate)}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-black transition-colors group-hover:text-neutral-700">
                  Read article
                  <ArrowRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="bg-neutral-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-serif text-3xl font-medium tracking-tight text-black sm:text-4xl">
            Latest articles
          </h2>

          {gridPosts.length === 0 ? (
            <p className="mt-12 text-center text-base text-neutral-500">
              No articles in this category yet.
            </p>
          ) : (
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/resources/blogs/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="aspect-[16/10] bg-neutral-100" />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-medium tracking-widest text-neutral-500 uppercase">
                      {post.category}
                    </span>
                    <h3 className="mt-3 font-serif text-xl font-medium text-black">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm text-neutral-600">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-neutral-500">
                        {post.readTime} min read · {formatDate(post.publishDate)}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-black transition-colors group-hover:text-neutral-700">
                        Read
                        <ArrowRight
                          className="size-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
