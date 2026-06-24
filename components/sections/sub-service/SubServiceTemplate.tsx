import { JsonLd } from "@/components/JsonLd";
import { SubServiceHero } from "@/components/sections/sub-service/SubServiceHero";
import { SubServiceOverview } from "@/components/sections/sub-service/SubServiceOverview";
import { SubServiceOfferings } from "@/components/sections/sub-service/SubServiceOfferings";
import { SubServiceProcess } from "@/components/sections/sub-service/SubServiceProcess";
import { SubServiceWhyChoose } from "@/components/sections/sub-service/SubServiceWhyChoose";
import { SubServiceTechStack } from "@/components/sections/sub-service/SubServiceTechStack";
import { SubServiceUseCases } from "@/components/sections/sub-service/SubServiceUseCases";
import { SubServiceFAQ } from "@/components/sections/sub-service/SubServiceFAQ";
import { SubServiceRelated } from "@/components/sections/sub-service/SubServiceRelated";
import { SubServiceCTA } from "@/components/sections/sub-service/SubServiceCTA";
import {
  getBreadcrumbSchema,
  getFAQSchema,
  getServiceSchema,
} from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import type { SubService } from "@/lib/sub-services-content";

type SubServiceTemplateProps = {
  data: SubService;
};

export function SubServiceTemplate({ data }: SubServiceTemplateProps) {
  const serviceName = data.hero.eyebrow;
  const serviceUrl = `${siteConfig.url}/services/${data.parentSlug}/${data.slug}`;
  const parentUrl = `${siteConfig.url}/services/${data.parentSlug}`;

  const serviceSchema = getServiceSchema({
    name: serviceName,
    description: data.meta.description,
    url: serviceUrl,
    serviceType: data.parentName,
  });

  const faqSchema = getFAQSchema(data.faqs);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url, position: 1 },
    { name: "Services", url: `${siteConfig.url}/services`, position: 2 },
    { name: data.parentName, url: parentUrl, position: 3 },
    { name: serviceName, url: serviceUrl, position: 4 },
  ]);

  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />
      <SubServiceHero
        eyebrow={data.hero.eyebrow}
        h1={data.hero.h1}
        subheadline={data.hero.subheadline}
        parentName={data.parentName}
        parentSlug={data.parentSlug}
      />
      <SubServiceOverview
        h2={data.overview.h2}
        paragraphs={data.overview.paragraphs}
      />
      <SubServiceOfferings
        h2={data.whatsIncluded.h2}
        items={data.whatsIncluded.items}
      />
      <SubServiceProcess h2={data.process.h2} steps={data.process.steps} />
      <SubServiceWhyChoose
        h2={data.whyChoose.h2}
        points={data.whyChoose.points}
      />
      {data.techStack && (
        <SubServiceTechStack
          h2={data.techStack.h2}
          paragraph={data.techStack.paragraph}
          tools={data.techStack.tools}
        />
      )}
      <SubServiceUseCases h2={data.useCases.h2} cases={data.useCases.cases} />
      <SubServiceRelated
        related={data.relatedSubServices}
        parentName={data.parentName}
        parentSlug={data.parentSlug}
      />
      <SubServiceFAQ serviceName={serviceName} faqs={data.faqs} />
      <SubServiceCTA h2={data.cta.h2} subhead={data.cta.subhead} />
    </>
  );
}
