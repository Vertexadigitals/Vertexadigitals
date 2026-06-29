import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";
import { ContactFAQ } from "@/components/sections/contact/ContactFAQ";
import { generateSeoMetadata } from "@/lib/seo";
import {
  getBreadcrumbSchema,
  getContactPageSchema,
  getFAQSchema,
  getLocalBusinessSchema,
} from "@/lib/schema";
import { contactFaqs } from "@/lib/contact-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeoMetadata({
  title: "Contact Us — Start Your Project",
  description:
    "Get in touch with Vertexa Digitals. Tell us about your project — web development, mobile apps, SEO, paid ads, branding, or content. We respond within 24 hours.",
  canonical: "/contact",
  keywords: [
    "contact vertexa digitals",
    "hire a digital agency",
    "digital agency quote",
    "web development quote",
    "SEO agency contact",
    "digital agency inquiry",
  ],
});

export default function ContactPage() {
  const contactUrl = `${siteConfig.url}/contact`;

  const contactPageSchema = getContactPageSchema({
    name: "Contact Vertexa Digitals",
    description: siteConfig.description,
    url: contactUrl,
  });

  const localBusinessSchema = getLocalBusinessSchema();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url, position: 1 },
    { name: "Contact", url: contactUrl, position: 2 },
  ]);

  const faqSchema = getFAQSchema(contactFaqs);

  return (
    <>
      <JsonLd
        data={[contactPageSchema, localBusinessSchema, breadcrumbSchema, faqSchema]}
      />
      <ContactHero />
      <ContactFormSection />
      <ContactFAQ />
    </>
  );
}
