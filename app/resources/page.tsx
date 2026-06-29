import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { ResourcesHero } from "@/components/sections/resources/ResourcesHero";
import { ResourcesCards } from "@/components/sections/resources/ResourcesCards";
import { ResourcesWhatWereBuilding } from "@/components/sections/resources/ResourcesWhatWereBuilding";
import { ResourcesCTA } from "@/components/sections/resources/ResourcesCTA";
import { generateSeoMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/schema";
import { resourcesHubContent } from "@/lib/resources-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeoMetadata({
  title: "Digital Marketing Insights & Resources",
  description:
    "Resources and insights from Vertexa Digitals — a growing blog and case study library, built deliberately rather than rushed out to hit a quota.",
  canonical: "/resources",
  keywords: [
    "vertexa digitals resources",
    "digital agency blog",
    "digital marketing case studies",
    "SEO insights",
    "web development insights",
  ],
});

export default function ResourcesPage() {
  const pageUrl = `${siteConfig.url}/resources`;

  const webPageSchema = getWebPageSchema({
    name: "Resources & Insights",
    description:
      "A growing collection of writing and client work from the Vertexa Digitals team.",
    url: pageUrl,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url, position: 1 },
    { name: "Resources", url: pageUrl, position: 2 },
  ]);

  return (
    <>
      <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      <ResourcesHero
        h1={resourcesHubContent.hero.h1}
        subheadline={resourcesHubContent.hero.subheadline}
      />
      <ResourcesCards cards={resourcesHubContent.cards} />
      <ResourcesWhatWereBuilding
        h2={resourcesHubContent.whatWereBuilding.h2}
        paragraphs={resourcesHubContent.whatWereBuilding.paragraphs}
      />
      <ResourcesCTA />
    </>
  );
}
