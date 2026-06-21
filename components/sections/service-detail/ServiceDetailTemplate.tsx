import { ServiceDetailHero } from "@/components/sections/service-detail/ServiceDetailHero";
import { ServiceOverview } from "@/components/sections/service-detail/ServiceOverview";
import { ServiceOfferings } from "@/components/sections/service-detail/ServiceOfferings";
import { ServiceProcess } from "@/components/sections/service-detail/ServiceProcess";
import { ServiceWhyUs } from "@/components/sections/service-detail/ServiceWhyUs";
import { ServiceTechStack } from "@/components/sections/service-detail/ServiceTechStack";
import { ServiceIndustries } from "@/components/sections/service-detail/ServiceIndustries";
import { ServiceSubServices } from "@/components/sections/service-detail/ServiceSubServices";
import { ServiceFAQ } from "@/components/sections/service-detail/ServiceFAQ";
import { ServiceCTA } from "@/components/sections/service-detail/ServiceCTA";
import type { ServiceContent } from "@/lib/services-content";
import { getSubServicesByParent } from "@/lib/sub-services-content";

type ServiceDetailTemplateProps = {
  slug: string;
  serviceName: string;
  content: ServiceContent;
};

export function ServiceDetailTemplate({
  slug,
  serviceName,
  content,
}: ServiceDetailTemplateProps) {
  const subServices = getSubServicesByParent(slug);

  return (
    <>
      <ServiceDetailHero
        serviceName={serviceName}
        h1={content.h1}
        subheadline={content.heroSubheadline}
      />
      <ServiceOverview serviceName={serviceName} paragraphs={content.overview} />
      <ServiceOfferings serviceName={serviceName} offerings={content.offerings} />
      <ServiceProcess steps={content.process} />
      <ServiceWhyUs serviceName={serviceName} points={content.whyUs} />
      <ServiceTechStack
        intro={content.techStack.intro}
        tools={content.techStack.tools}
      />
      <ServiceIndustries
        serviceName={serviceName}
        industries={content.industries}
      />
      <ServiceSubServices serviceName={serviceName} subServices={subServices} />
      <ServiceFAQ serviceName={serviceName} faqs={content.faqs} />
      <ServiceCTA heading={content.ctaHeading} text={content.ctaText} />
    </>
  );
}
