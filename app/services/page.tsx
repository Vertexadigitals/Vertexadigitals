import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { ServicesHero } from "@/components/sections/services-overview/ServicesHero";
import { ServicesWhyIntegrated } from "@/components/sections/services-overview/ServicesWhyIntegrated";
import { ServicesGrid } from "@/components/sections/services-overview/ServicesGrid";
import { ServicesProcess } from "@/components/sections/services-overview/ServicesProcess";
import { ServicesIndustries } from "@/components/sections/services-overview/ServicesIndustries";
import { ServicesFAQ } from "@/components/sections/services-overview/ServicesFAQ";
import { ServicesCTA } from "@/components/sections/services-overview/ServicesCTA";
import { generateSeoMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getItemListSchema,
} from "@/lib/schema";
import { servicesOverviewFaqs } from "@/lib/services-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeoMetadata({
  title: "Services",
  description:
    "Premium digital services from one integrated team: web development, mobile apps, SEO, performance marketing, branding & content. For ambitious global brands.",
  canonical: "/services",
  keywords: [
    "digital agency services",
    "web development services",
    "SEO services",
    "mobile app development services",
    "performance marketing services",
    "branding services",
    "content marketing services",
    "integrated digital agency",
    "full-service digital agency",
  ],
});

export default function ServicesPage() {
  const itemListSchema = getItemListSchema(
    siteConfig.services.map((service) => ({
      name: service.name,
      url: `${siteConfig.url}${service.href}`,
    }))
  );

  const faqSchema = getFAQSchema(servicesOverviewFaqs);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url, position: 1 },
    { name: "Services", url: `${siteConfig.url}/services`, position: 2 },
  ]);

  return (
    <>
      <JsonLd data={[itemListSchema, faqSchema, breadcrumbSchema]} />
      <ServicesHero />
      <ServicesWhyIntegrated />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesIndustries />
      <ServicesFAQ />
      <ServicesCTA />
    </>
  );
}
