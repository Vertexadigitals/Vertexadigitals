import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { BlogIndexHero } from "@/components/sections/blog/BlogIndexHero";
import { BlogIndexGrid } from "@/components/sections/blog/BlogIndexGrid";
import { BlogFinalCta } from "@/components/sections/blog/BlogFinalCta";
import { generateSeoMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getItemListSchema, getWebPageSchema } from "@/lib/schema";
import { blogPosts } from "@/lib/blogs-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeoMetadata({
  title: "Blog",
  description:
    "Premium insights for ambitious brands — deep dives into digital strategy, web development, SEO, mobile apps, branding, and content marketing.",
  canonical: "/resources/blogs",
  keywords: [
    "vertexa digitals blog",
    "digital marketing blog",
    "SEO blog",
    "web development blog",
  ],
});

export default function BlogsPage() {
  const pageUrl = `${siteConfig.url}/resources/blogs`;

  const webPageSchema = getWebPageSchema({
    name: "Blog",
    description:
      "Premium insights for ambitious brands — digital strategy, web development, SEO, mobile apps, branding, and content marketing.",
    url: pageUrl,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url, position: 1 },
    { name: "Resources", url: `${siteConfig.url}/resources`, position: 2 },
    { name: "Blog", url: pageUrl, position: 3 },
  ]);

  const itemListSchema = getItemListSchema(
    blogPosts.map((post) => ({
      name: post.title,
      url: `${siteConfig.url}/resources/blogs/${post.slug}`,
    }))
  );

  return (
    <>
      <JsonLd data={[webPageSchema, breadcrumbSchema, itemListSchema]} />
      <BlogIndexHero />
      <BlogIndexGrid posts={blogPosts} />
      <BlogFinalCta
        heading="Want to talk about your project?"
        subheading="Tell us what you're building — we'll respond within 24-48 hours with a clear, honest next step."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </>
  );
}
