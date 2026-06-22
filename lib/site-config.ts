export type NavLink = {
  label: string;
  href: string;
};

export type ServiceLink = NavLink & {
  /** Full marketing name used in headings/schema (label stays short for Navbar/Footer). */
  name: string;
  description: string;
  serviceType: string;
};

export const siteConfig = {
  name: "Vertexa Digitals",
  tagline: "Your complete digital growth partner.",
  description:
    "We partner with ambitious brands to design, build, and grow digital experiences that perform.",
  url: "https://vertexadigitals.com",
  logo: {
    src: "/logo.png",
    alt: "Vertexa Digitals",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Locations", href: "/locations" },
    { label: "Resources", href: "/resources" },
  ] satisfies NavLink[],
  services: [
    {
      label: "Web Development",
      name: "Web Development",
      href: "/services/web-development",
      serviceType: "Web Development",
      description:
        "From marketing sites to complex web applications, we build fast, SEO-optimized, conversion-focused websites using Next.js, React, Shopify, WordPress, and modern stacks that scale with your business.",
    },
    {
      label: "Mobile Apps",
      name: "Mobile App Development",
      href: "/services/mobile-app-development",
      serviceType: "Mobile App Development",
      description:
        "Native iOS, Android, and cross-platform applications built with React Native, Flutter, Swift, and Kotlin. We design and ship mobile experiences that users love and businesses depend on.",
    },
    {
      label: "SEO",
      name: "SEO Services",
      href: "/services/seo",
      serviceType: "Search Engine Optimization",
      description:
        "Technical SEO, on-page optimization, content strategy, and link building designed to rank you on page one for keywords that drive revenue — not vanity metrics. Built for international markets.",
    },
    {
      label: "Performance Marketing",
      name: "Performance Marketing",
      href: "/services/performance-marketing",
      serviceType: "Performance Marketing",
      description:
        "Paid acquisition campaigns across Google Ads, Meta, LinkedIn, and emerging platforms — engineered around ROAS, CAC, and lifetime value. We don't run ads. We engineer growth.",
    },
    {
      label: "Branding & Design",
      name: "Branding & Design",
      href: "/services/branding-design",
      serviceType: "Branding and Design",
      description:
        "Brand identity, visual design systems, UI/UX, and creative direction for companies that want to look as serious as they are. The work you'd expect from a branding agency obsessed with outcomes, not just aesthetics.",
    },
    {
      label: "Content & Social Media",
      name: "Content & Social Media",
      href: "/services/content-social-media",
      serviceType: "Content and Social Media Marketing",
      description:
        "Content strategy, copywriting, social media management, and editorial production — built to attract, convert, and retain customers. Words and visuals that do real work.",
    },
  ] satisfies ServiceLink[],
  company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
  cta: {
    label: "Get a Quote",
    href: "/contact",
  } satisfies NavLink,
  contact: {
    email: "info@vertexadigitals.com",
    website: "vertexadigitals.com",
    websiteUrl: "https://vertexadigitals.com",
  },
  social: {
    instagram: {
      label: "@vertexadigitals",
      href: "https://instagram.com/vertexadigitals",
    },
    linkedin: {
      label: "linkedin.com/company/vertexadigitals",
      href: "https://linkedin.com/company/vertexadigitals",
    },
  },
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ] satisfies NavLink[],
  foundingDate: "2026",
  areaServed: [
    "United States",
    "United Kingdom",
    "European Union",
    "Australia",
  ],
  address: {
    country: "IN",
    locality: "Udaipur",
    region: "Rajasthan",
    latitude: 24.5854,
    longitude: 73.7125,
  },
} as const;
