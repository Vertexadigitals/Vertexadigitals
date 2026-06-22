import { JsonLd } from "@/components/JsonLd";
import { IndustryHero } from "@/components/sections/industry/IndustryHero";
import { IndustryWhyThis } from "@/components/sections/industry/IndustryWhyThis";
import { IndustryChallenges } from "@/components/sections/industry/IndustryChallenges";
import { IndustryServices } from "@/components/sections/industry/IndustryServices";
import { IndustryToolsAndTech } from "@/components/sections/industry/IndustryToolsAndTech";
import { IndustryCaseStudyPlaceholder } from "@/components/sections/industry/IndustryCaseStudyPlaceholder";
import { IndustryProcess } from "@/components/sections/industry/IndustryProcess";
import { IndustryFAQ } from "@/components/sections/industry/IndustryFAQ";
import { IndustryCTA } from "@/components/sections/industry/IndustryCTA";
import { getBreadcrumbSchema, getFAQSchema, getServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import type { Industry } from "@/lib/industries-content";

type IndustryTemplateProps = {
  data: Industry;
};

export function IndustryTemplate({ data }: IndustryTemplateProps) {
  const industryUrl = `${siteConfig.url}/industries/${data.slug}`;

  const serviceSchema = getServiceSchema({
    name: `Digital Agency Services for ${data.name}`,
    description: data.meta.description,
    url: industryUrl,
    serviceType: `${data.name} Digital Marketing`,
  });

  const faqSchema = getFAQSchema(data.faqs);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url, position: 1 },
    { name: "Industries", url: `${siteConfig.url}/industries`, position: 2 },
    { name: data.name, url: industryUrl, position: 3 },
  ]);

  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />
      <IndustryHero
        eyebrow={data.hero.eyebrow}
        h1={data.hero.h1}
        subheadline={data.hero.subheadline}
      />
      <IndustryWhyThis
        h2={data.whyThisIndustry.h2}
        paragraphs={data.whyThisIndustry.paragraphs}
      />
      <IndustryChallenges
        h2={data.industryChallenges.h2}
        challenges={data.industryChallenges.challenges}
      />
      <IndustryServices
        h2={data.servicesForIndustry.h2}
        intro={data.servicesForIndustry.intro}
        services={data.servicesForIndustry.services}
      />
      <IndustryToolsAndTech
        h2={data.toolsAndTech.h2}
        paragraph={data.toolsAndTech.paragraph}
        tools={data.toolsAndTech.tools}
      />
      <IndustryCaseStudyPlaceholder
        h2={data.caseStudyPlaceholder.h2}
        text={data.caseStudyPlaceholder.text}
      />
      <IndustryProcess h2={data.ourProcess.h2} steps={data.ourProcess.steps} />
      <IndustryFAQ industryName={data.name} faqs={data.faqs} />
      <IndustryCTA h2={data.cta.h2} subhead={data.cta.subhead} />
    </>
  );
}
