import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { IndustriesHero } from "@/components/sections/industries-overview/IndustriesHero";
import { IndustriesGrid } from "@/components/sections/industries-overview/IndustriesGrid";
import { IndustriesWhySpecialization } from "@/components/sections/industries-overview/IndustriesWhySpecialization";
import { IndustriesFAQ } from "@/components/sections/industries-overview/IndustriesFAQ";
import { IndustriesCTA } from "@/components/sections/industries-overview/IndustriesCTA";
import { generateSeoMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getItemListSchema,
} from "@/lib/schema";
import { industries, industriesHubFaqs } from "@/lib/industries-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeoMetadata({
  title: "Industries We Serve",
  description:
    "Digital agency with real specialization across SaaS, e-commerce, healthcare, FinTech, B2B, real estate, legal, and education — not a generic playbook.",
  canonical: "/industries",
  keywords: [
    "industries we serve",
    "industry-specific digital agency",
    "SaaS marketing agency",
    "ecommerce digital agency",
    "B2B marketing agency",
    "healthcare digital agency",
    "fintech digital agency",
    "legal marketing agency",
  ],
});

export default function IndustriesPage() {
  const itemListSchema = getItemListSchema(
    industries.map((industry) => ({
      name: industry.name,
      url: `${siteConfig.url}/industries/${industry.slug}`,
    }))
  );

  const faqSchema = getFAQSchema(industriesHubFaqs);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url, position: 1 },
    { name: "Industries", url: `${siteConfig.url}/industries`, position: 2 },
  ]);

  return (
    <>
      <JsonLd data={[itemListSchema, faqSchema, breadcrumbSchema]} />
      <IndustriesHero />
      <IndustriesGrid />
      <IndustriesWhySpecialization />
      <IndustriesFAQ />
      <IndustriesCTA />
    </>
  );
}
