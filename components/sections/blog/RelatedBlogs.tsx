import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/sections/SectionHeader";
import type { BlogPost } from "@/lib/blogs-content";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

type RelatedBlogsProps = {
  blogs: BlogPost[];
};

export function RelatedBlogs({ blogs }: RelatedBlogsProps) {
  if (blogs.length === 0) return null;

  return (
    <section className="bg-neutral-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader heading="Related Articles" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/resources/blogs/${blog.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="aspect-[16/10] bg-neutral-100" />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium tracking-widest text-neutral-500 uppercase">
                  {blog.category}
                </span>
                <h3 className="mt-3 font-serif text-xl font-medium text-black">
                  {blog.title}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm text-neutral-600">
                  {blog.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-neutral-500">
                    {blog.readTime} min read · {formatDate(blog.publishDate)}
                  </span>
                  <ArrowRight
                    className="size-4 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:text-neutral-900"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
