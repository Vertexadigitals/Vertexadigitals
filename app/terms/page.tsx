import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { LegalPageTemplate } from "@/components/sections/legal/LegalPageTemplate";
import { generateSeoMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/schema";
import { termsContent } from "@/lib/legal-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeoMetadata({
  title: "Terms of Service",
  description:
    "Terms and conditions for using Vertexa Digitals services. Read before engaging us for any digital project.",
  canonical: "/terms",
  keywords: [
    "vertexa digitals terms of service",
    "terms and conditions",
    "service agreement",
    "agency contract terms",
  ],
});

export default function TermsPage() {
  const pageUrl = `${siteConfig.url}/terms`;

  const webPageSchema = getWebPageSchema({
    name: "Terms of Service",
    description:
      "Terms and conditions for using Vertexa Digitals services.",
    url: pageUrl,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url, position: 1 },
    { name: "Terms of Service", url: pageUrl, position: 2 },
  ]);

  return (
    <>
      <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      <LegalPageTemplate content={termsContent} />
    </>
  );
}
