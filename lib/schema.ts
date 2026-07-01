import { siteConfig } from "@/lib/site-config";
import type { BlogPost } from "@/lib/blogs-content";

const logoUrl = `${siteConfig.url}${siteConfig.logo.src}`;
const sameAs = [
  siteConfig.social.facebook.href,
  siteConfig.social.instagram.href,
  siteConfig.social.linkedin.href,
  siteConfig.social.twitter.href,
];

/** Organization schema describing Vertexa Digitals as a business entity. */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: ["Vertexa", "Vertexa Digital", "Vertexa Digitals Agency"],
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      width: 512,
      height: 512,
    },
    description:
      "Premium digital agency for ambitious global brands. Web development, mobile apps, SEO, performance marketing, branding, and content marketing for US, UK, EU, and Australia markets.",
    email: siteConfig.contact.email,
    sameAs,
    foundingDate: siteConfig.foundingDate,
    founders: [
      { "@type": "Person", name: "Ajaypal Singh", jobTitle: "Founder · SEO & Marketing" },
      { "@type": "Person", name: "Manav Parihar", jobTitle: "Founder · Web Development" },
      { "@type": "Person", name: "Nayan Kumar", jobTitle: "Founder · Mobile Development" },
      { "@type": "Person", name: "Jayantilal Suthar", jobTitle: "Founder · Operations & Finance" },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.address.country,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contact.email,
      contactType: "customer service",
      areaServed: ["US", "GB", "EU", "AU"],
      availableLanguage: ["English"],
    },
    areaServed: siteConfig.areaServed,
  };
}

/** WebSite schema, makes the site eligible for a sitelinks search box. */
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: "Premium digital agency for ambitious global brands",
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-US",
  };
}

type ServiceSchemaParams = {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: readonly string[];
  hasOfferCatalog?: {
    name: string;
    items: { name: string; description?: string }[];
  };
};

/** Service schema for individual /services/* pages. */
export function getServiceSchema(params: ServiceSchemaParams) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: params.url,
    serviceType: params.serviceType,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: params.areaServed ?? siteConfig.areaServed,
    ...(params.hasOfferCatalog && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: params.hasOfferCatalog.name,
        itemListElement: params.hasOfferCatalog.items.map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: item.name,
            description: item.description,
          },
        })),
      },
    }),
  };
}

type ItemListEntry = {
  name: string;
  url: string;
};

/** ItemList schema for a list of named, linked entities (e.g. the services list). */
export function getItemListSchema(items: ItemListEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

type BreadcrumbItem = {
  name: string;
  url: string;
  position: number;
};

/** BreadcrumbList schema for page navigation trails. */
export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      item: item.url,
    })),
  };
}

type Faq = {
  question: string;
  answer: string;
};

/** FAQPage schema, makes FAQ sections eligible for rich snippets. */
export function getFAQSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

type ArticleSchemaParams = {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
};

/** Article schema for blog posts. */
export function getArticleSchema(params: ArticleSchemaParams) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    image: params.image,
    url: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    author: {
      "@type": "Person",
      name: params.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
  };
}

/** BlogPosting schema for individual blog articles. */
export function getBlogPostingSchema(blog: BlogPost) {
  const url = `${siteConfig.url}/resources/blogs/${blog.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription,
    author: {
      "@type": "Organization",
      name: blog.authorName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    datePublished: blog.publishDate,
    dateModified: blog.updatedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    keywords: [blog.primaryKeyword, ...blog.secondaryKeywords].join(", "),
  };
}

/** LocalBusiness schema for the contact page. */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: logoUrl,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    sameAs,
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.address.country,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.latitude,
      longitude: siteConfig.address.longitude,
    },
    areaServed: siteConfig.areaServed,
    priceRange: "$$$",
  };
}

type PersonSchemaParams = {
  name: string;
  jobTitle: string;
  description?: string;
};

/** Person schema for team/founder bios (e.g. on the About page). */
export function getPersonSchema(params: PersonSchemaParams) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: params.name,
    jobTitle: params.jobTitle,
    description: params.description,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

type WebPageSchemaParams = {
  name: string;
  description: string;
  url: string;
};

/** Generic WebPage schema for simple pages like Privacy and Terms. */
export function getWebPageSchema(params: WebPageSchemaParams) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: params.name,
    description: params.description,
    url: params.url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

type ContactPageSchemaParams = {
  name: string;
  description: string;
  url: string;
};

/** ContactPage schema for the contact page. */
export function getContactPageSchema(params: ContactPageSchemaParams) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: params.name,
    description: params.description,
    url: params.url,
  };
}
