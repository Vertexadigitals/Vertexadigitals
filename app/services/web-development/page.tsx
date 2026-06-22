import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { ServiceDetailTemplate } from "@/components/sections/service-detail/ServiceDetailTemplate";
import { generateSeoMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getServiceSchema,
} from "@/lib/schema";
import { getServiceBySlug } from "@/lib/services-content";
import { siteConfig } from "@/lib/site-config";

const SLUG = "web-development";
const { content, link } = getServiceBySlug(SLUG);

export const metadata: Metadata = generateSeoMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  canonical: link.href,
  keywords: content.keywords, 
});

export default function WebDevelopmentPage() {
  const serviceUrl = `${siteConfig.url}${link.href}`;

  const serviceSchema = getServiceSchema({
    name: link.name,
    description: content.metaDescription,
    url: serviceUrl,
    serviceType: link.serviceType,
  });

  const faqSchema = getFAQSchema(content.faqs);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url, position: 1 },
    { name: "Services", url: `${siteConfig.url}/services`, position: 2 },
    { name: link.name, url: serviceUrl, position: 3 },
  ]);

  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />
      <ServiceDetailTemplate slug={SLUG} serviceName={link.name} content={content} />
    </>
  );
}
