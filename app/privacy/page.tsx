import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { LegalPageTemplate } from "@/components/sections/legal/LegalPageTemplate";
import { generateSeoMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/schema";
import { privacyContent } from "@/lib/legal-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeoMetadata({
  title: "Privacy Policy",
  description:
    "How Vertexa Digitals collects, uses, and protects your personal information. GDPR and CCPA compliant.",
  canonical: "/privacy",
  keywords: [
    "vertexa digitals privacy policy",
    "data protection",
    "GDPR compliance",
    "CCPA compliance",
    "privacy rights",
  ],
});

export default function PrivacyPage() {
  const pageUrl = `${siteConfig.url}/privacy`;

  const webPageSchema = getWebPageSchema({
    name: "Privacy Policy",
    description:
      "How Vertexa Digitals collects, uses, and protects your personal information.",
    url: pageUrl,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url, position: 1 },
    { name: "Privacy Policy", url: pageUrl, position: 2 },
  ]);

  return (
    <>
      <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      <LegalPageTemplate content={privacyContent} />
    </>
  );
}
