import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { CaseStudiesHero } from "@/components/sections/resources/CaseStudiesHero";
import { CaseStudiesCurrentStatus } from "@/components/sections/resources/CaseStudiesCurrentStatus";
import { CaseStudiesWhatTheyInclude } from "@/components/sections/resources/CaseStudiesWhatTheyInclude";
import { generateSeoMetadata } from "@/lib/seo";
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/schema";
import { caseStudiesPlaceholderContent } from "@/lib/resources-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generateSeoMetadata({
  title: "Case Studies & Client Outcomes",
  description:
    "Vertexa Digitals case studies are in progress as we deliver work for our launch clients. Email us directly for relevant samples in the meantime.",
  canonical: "/resources/case-studies",
  keywords: [
    "vertexa digitals case studies",
    "digital agency case studies",
    "client outcomes",
  ],
});

export default function CaseStudiesPage() {
  const pageUrl = `${siteConfig.url}/resources/case-studies`;

  const webPageSchema = getWebPageSchema({
    name: "Case Studies",
    description:
      "Client outcomes and the methodology behind them, currently in progress as we deliver work for our launch clients.",
    url: pageUrl,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url, position: 1 },
    { name: "Resources", url: `${siteConfig.url}/resources`, position: 2 },
    { name: "Case Studies", url: pageUrl, position: 3 },
  ]);

  return (
    <>
      <JsonLd data={[webPageSchema, breadcrumbSchema]} />
      <CaseStudiesHero
        h1={caseStudiesPlaceholderContent.hero.h1}
        subheadline={caseStudiesPlaceholderContent.hero.subheadline}
      />
      <CaseStudiesCurrentStatus
        h2={caseStudiesPlaceholderContent.currentStatus.h2}
        paragraphs={caseStudiesPlaceholderContent.currentStatus.paragraphs}
      />
      <CaseStudiesWhatTheyInclude
        h2={caseStudiesPlaceholderContent.whatTheyWillInclude.h2}
        items={caseStudiesPlaceholderContent.whatTheyWillInclude.items}
      />
    </>
  );
}
