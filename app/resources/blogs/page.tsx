import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { BlogsHero } from "@/components/sections/resources/BlogsHero";
import { BlogsTopics } from "@/components/sections/resources/BlogsTopics";
import { BlogsWhyWaiting } from "@/components/sections/resources/BlogsWhyWaiting";
import { generateSeoMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/schema";
import { blogsPlaceholderContent } from "@/lib/resources-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeoMetadata({
  title: "Blog",
  description:
    "The Vertexa Digitals blog is coming soon — insights, frameworks, and field notes on SEO, web development, performance marketing, branding, and content.",
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
      "Insights, frameworks, and field notes on SEO, web development, performance marketing, branding, and content.",
    url: pageUrl,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url, position: 1 },
    { name: "Resources", url: `${siteConfig.url}/resources`, position: 2 },
    { name: "Blog", url: pageUrl, position: 3 },
  ]);

  return (
    <>
      <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      <BlogsHero
        h1={blogsPlaceholderContent.hero.h1}
        subheadline={blogsPlaceholderContent.hero.subheadline}
      />
      <BlogsTopics
        h2={blogsPlaceholderContent.topics.h2}
        intro={blogsPlaceholderContent.topics.intro}
        items={blogsPlaceholderContent.topics.items}
      />
      <BlogsWhyWaiting
        h2={blogsPlaceholderContent.whyWaiting.h2}
        paragraphs={blogsPlaceholderContent.whyWaiting.paragraphs}
      />
    </>
  );
}
