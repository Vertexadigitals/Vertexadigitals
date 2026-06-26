import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import { BlogTemplate } from "@/components/sections/blog/BlogTemplate";
import { generateSeoMetadata } from "@/lib/seo";
import {
  getBlogPostingSchema,
  getBreadcrumbSchema,
  getFAQSchema,
} from "@/lib/schema";
import { blogPosts, getBlogBySlug } from "@/lib/blogs-content";
import { siteConfig } from "@/lib/site-config";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};

  return generateSeoMetadata({
    title: blog.title,
    description: blog.metaDescription,
    canonical: `/resources/blogs/${blog.slug}`,
    keywords: [blog.primaryKeyword, ...blog.secondaryKeywords],
  });
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const blogUrl = `${siteConfig.url}/resources/blogs/${blog.slug}`;

  const blogSchema = getBlogPostingSchema(blog);
  const faqSchema = getFAQSchema(blog.faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url, position: 1 },
    { name: "Resources", url: `${siteConfig.url}/resources`, position: 2 },
    { name: "Blog", url: `${siteConfig.url}/resources/blogs`, position: 3 },
    { name: blog.title, url: blogUrl, position: 4 },
  ]);

  return (
    <>
      <JsonLd data={[blogSchema, faqSchema, breadcrumbSchema]} />
      <BlogTemplate blog={blog} />
    </>
  );
}
