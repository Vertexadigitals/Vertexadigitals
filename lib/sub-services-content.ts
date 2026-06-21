export interface SubServiceOffering {
  title: string;
  description: string;
}

export interface SubServiceProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SubServiceWhyChoosePoint {
  title: string;
  description: string;
}

export interface SubServiceTechStack {
  h2: string;
  paragraph: string;
  tools: string[];
}

export interface SubServiceUseCase {
  title: string;
  description: string;
}

export interface SubServiceFaq {
  question: string;
  answer: string;
}

export interface SubServiceRelated {
  slug: string;
  parentSlug: string;
  name: string;
  shortDescription: string;
}

export interface SubService {
  slug: string;
  parentSlug: string;
  parentName: string;
  parentLabel: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    eyebrow: string;
    h1: string;
    subheadline: string;
  };
  overview: {
    h2: string;
    paragraphs: string[];
  };
  whatsIncluded: {
    h2: string;
    items: SubServiceOffering[];
  };
  process: {
    h2: string;
    steps: SubServiceProcessStep[];
  };
  whyChoose: {
    h2: string;
    points: SubServiceWhyChoosePoint[];
  };
  techStack?: SubServiceTechStack;
  useCases: {
    h2: string;
    cases: SubServiceUseCase[];
  };
  faqs: SubServiceFaq[];
  cta: {
    h2: string;
    subhead: string;
  };
  relatedSubServices?: SubServiceRelated[];
}

export const subServices: SubService[] = [
  {
    slug: "shopify",
    parentSlug: "web-development",
    parentName: "Web Development",
    parentLabel: "Web Development",
    meta: {
      title: "Shopify Development Services",
      description:
        "Custom Shopify development — themes, Hydrogen storefronts, and app integrations built for stores that have outgrown generic templates.",
      keywords: [
        "Shopify development services",
        "Shopify developer",
        "custom Shopify theme",
        "Shopify Hydrogen development",
        "Shopify Plus development",
        "Shopify app development",
        "Shopify migration",
        "headless Shopify",
      ],
    },
    hero: {
      eyebrow: "Shopify Development",
      h1: "Shopify Development for Stores Built to Scale",
      subheadline:
        "We build and customize Shopify stores for brands that have outgrown what a theme from the Shopify Theme Store can do — custom Liquid development, Hydrogen storefronts for headless commerce, and the app and API integrations that connect Shopify to the rest of your stack. Whether you're launching your first store or replatforming from a system that can't keep up, we build for your actual order volume, not a generic template.",
    },
    overview: {
      h2: "Why Shopify Still Wins for Most E-commerce Brands",
      paragraphs: [
        "Shopify dominates e-commerce for good reason: a mature plugin ecosystem, reliable checkout and payments infrastructure, and a platform that scales from a first sale to enterprise volume without a full re-platform. The tradeoff is that most stores never use more than a fraction of what Shopify can actually do, because the default theme customization options are genuinely limited — anything beyond basic layout changes requires real development, in Liquid or through Shopify's newer Hydrogen/Remix framework for headless storefronts.",
        "We work across the full spectrum of Shopify development: customizing an existing theme when that's the right call for budget and timeline, building a fully custom theme from scratch when brand and UX requirements demand it, and building headless storefronts with Hydrogen when performance and design flexibility matter more than staying within Shopify's templating constraints. The right approach depends on your actual requirements, not which option happens to be easiest for us to deliver.",
        "Shopify Plus and Shopify Functions have changed what's possible for complex merchandising logic — custom discount logic, B2B pricing tiers, subscription models, and checkout customization that used to require expensive workarounds. We build with these native tools first, reaching for third-party apps only when Shopify's own capabilities genuinely can't cover the requirement, which keeps your store faster and easier to maintain than one held together by a dozen overlapping apps.",
        "Migration is often the actual reason brands come to us — moving from BigCommerce, Magento, WooCommerce, or a custom platform to Shopify, or from Shopify's default theme system to a custom build or headless architecture. We handle data migration, URL mapping, and SEO preservation as core parts of the process, not an afterthought that risks your existing rankings and customer accounts.",
      ],
    },
    whatsIncluded: {
      h2: "What Shopify Development with Vertexa Includes",
      items: [
        {
          title: "Custom Theme Development",
          description:
            "Liquid-based custom themes built around your brand and merchandising needs, not a modified version of a stock theme that fights you every time you need something it wasn't built for. We design the theme architecture around how you actually sell.",
        },
        {
          title: "Hydrogen & Headless Storefronts",
          description:
            "Headless commerce storefronts built with Shopify's Hydrogen framework on Remix, giving you full control over frontend performance and design while keeping Shopify's checkout, inventory, and backend infrastructure. The right call when page speed and custom UX matter more than templating convenience.",
        },
        {
          title: "Shopify Plus Implementation",
          description:
            "B2B storefronts, custom checkout extensions, multi-currency and multi-language setups, and the higher-volume infrastructure Shopify Plus unlocks for stores that have outgrown standard Shopify — implemented using native Shopify Plus tools before reaching for third-party workarounds.",
        },
        {
          title: "App & API Integrations",
          description:
            "Connecting Shopify to your ERP, CRM, fulfillment provider, or marketing stack through the Shopify API and curated app integrations — chosen for reliability and minimal app bloat, not just whatever has the most five-star reviews.",
        },
        {
          title: "Shopify Migrations",
          description:
            "Moving from BigCommerce, Magento, WooCommerce, or another platform to Shopify — full product, customer, and order data migration, URL redirects, and SEO preservation so the move doesn't cost you existing search rankings or customer accounts.",
        },
        {
          title: "Subscription & Membership Setup",
          description:
            "Recurring revenue infrastructure through Shopify's native subscription APIs or vetted subscription apps, integrated with your checkout and customer accounts rather than bolted on as a disconnected experience.",
        },
        {
          title: "Performance & Conversion Optimization",
          description:
            "Page speed audits and Core Web Vitals optimization specific to Shopify's rendering model, plus checkout and product page conversion improvements informed by how Shopify stores actually convert, not generic e-commerce UX advice.",
        },
      ],
    },
    process: {
      h2: "How We Build on Shopify",
      steps: [
        {
          number: "01",
          title: "Discovery & Platform Audit",
          description:
            "We review your current store (or starting requirements), merchandising complexity, and growth plans to decide whether theme customization, custom development, or a headless Hydrogen build is the right fit — not a default answer applied to every project.",
        },
        {
          number: "02",
          title: "Design & Architecture",
          description:
            "We design the storefront and decide the technical architecture together, since Shopify's theme structure and your merchandising logic are inseparable decisions — getting this wrong early means expensive rework later.",
        },
        {
          number: "03",
          title: "Development & Testing",
          description:
            "Development happens in a staging environment with regular checkpoints, tested across checkout flows, payment methods, and device types before anything touches your live store and real customer orders.",
        },
        {
          number: "04",
          title: "Launch & Optimization",
          description:
            "We handle launch day, monitor checkout and performance metrics closely in the first weeks, and tune based on real customer behavior rather than assumptions made during the build phase.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Shopify Development",
      points: [
        {
          title: "We Don't Default to Apps for Everything",
          description:
            "Many Shopify builds accumulate a dozen apps because that's faster than custom development — until the store is slow, expensive to maintain, and breaks every time one app updates. We build native Shopify and Shopify Plus solutions first, which keeps stores faster and easier to maintain long-term.",
        },
        {
          title: "Real Hydrogen & Headless Experience",
          description:
            "Headless Shopify development is still relatively rare expertise — most 'Shopify experts' have only worked within the standard theme system. We've shipped Hydrogen storefronts and understand when headless is actually the right call versus when it's unnecessary complexity.",
        },
        {
          title: "Migrations That Protect Your Rankings",
          description:
            "We treat SEO preservation as a core requirement of any migration, not an afterthought — full URL mapping, redirect implementation, and structured data validation before and after launch, so moving platforms doesn't cost you organic traffic.",
        },
        {
          title: "Built for Your Actual Order Volume",
          description:
            "We size the architecture to your real order volume and growth trajectory, not a hypothetical enterprise scale that adds unnecessary complexity and cost to a store that doesn't need it yet.",
        },
      ],
    },
    techStack: {
      h2: "Shopify Technologies We Use",
      paragraph:
        "Our Shopify development is built on Liquid for traditional theme development, with Shopify's Hydrogen and Remix framework for headless storefronts that need full frontend control. We use Shopify CLI for local development and theme deployment, Shopify Functions for native customization of discounts and checkout logic, and Polaris when building custom admin interfaces or apps. For complex integrations, we work directly with the Shopify Admin and Storefront APIs rather than relying solely on third-party connector apps that add latency and another point of failure.",
      tools: [
        "Liquid",
        "Shopify Hydrogen",
        "Remix",
        "Shopify CLI",
        "Shopify Functions",
        "Shopify Admin API",
        "Shopify Storefront API",
        "Polaris",
      ],
    },
    useCases: {
      h2: "Who We Build Shopify Stores For",
      cases: [
        {
          title: "D2C Brands Launching Their First Store",
          description:
            "First-time Shopify merchants who need a store that looks credible and converts from day one, without the cost or timeline of a fully custom build their order volume doesn't yet justify.",
        },
        {
          title: "Established Brands Replatforming",
          description:
            "Brands moving from BigCommerce, Magento, or WooCommerce to Shopify after outgrowing their previous platform's limitations — migrations that preserve SEO equity, customer data, and order history.",
        },
        {
          title: "Multi-Region Brands Using Shopify Markets",
          description:
            "Brands expanding internationally through Shopify Markets, needing multi-currency pricing, localized content, and regional compliance handled correctly from the start.",
        },
      ],
    },
    faqs: [
      {
        question: "How long does a Shopify build typically take?",
        answer:
          "A theme customization project usually takes 3-5 weeks. A fully custom theme runs 6-10 weeks. Hydrogen headless storefronts take longer, typically 10-16 weeks, given the additional architecture decisions involved.",
      },
      {
        question: "Should we customize a theme or build fully custom?",
        answer:
          "It depends on your budget, timeline, and how much your merchandising and brand requirements diverge from what a customized theme can support. We'll give you an honest recommendation rather than always pushing the more expensive option.",
      },
      {
        question: "What's the difference between standard Shopify and Hydrogen?",
        answer:
          "Standard Shopify uses Liquid templating within Shopify's hosting. Hydrogen is a headless framework giving you full control over the frontend, hosted separately, while still using Shopify for checkout and backend commerce logic — more flexibility, more complexity.",
      },
      {
        question: "Can you migrate our existing Shopify store to a custom build?",
        answer:
          "Yes, this is a common project — moving from a customized stock theme to a fully custom build, or to a Hydrogen headless storefront, without losing existing product data, customer accounts, or SEO equity.",
      },
      {
        question: "Do you build Shopify apps, or just storefronts?",
        answer:
          "Both. Most of our work is storefront development, but we also build custom Shopify apps when off-the-shelf options don't cover a specific business requirement, using Shopify's Admin API directly.",
      },
      {
        question: "How do you handle Shopify Plus pricing and requirements?",
        answer:
          "We'll assess whether Shopify Plus's higher cost is actually justified by your volume and feature requirements rather than recommending it by default regardless of whether you need it.",
      },
    ],
    cta: {
      h2: "Ready to build a Shopify store that scales with you?",
      subhead:
        "Tell us about your current store or your launch plans — we'll tell you honestly whether theme customization, custom development, or headless Hydrogen is the right fit.",
    },
    relatedSubServices: [
      {
        slug: "ecommerce-development",
        parentSlug: "web-development",
        name: "E-commerce Development",
        shortDescription:
          "Platform-agnostic e-commerce strategy when you're not sure Shopify is the right starting point.",
      },
      {
        slug: "ecommerce-seo",
        parentSlug: "seo",
        name: "E-commerce SEO",
        shortDescription:
          "Category and product page SEO built for stores at catalog scale.",
      },
      {
        slug: "conversion-rate-optimization",
        parentSlug: "performance-marketing",
        name: "Conversion Rate Optimization",
        shortDescription:
          "Turning Shopify storefront traffic into more completed checkouts.",
      },
    ],
  },
  {
    slug: "wordpress",
    parentSlug: "web-development",
    parentName: "Web Development",
    parentLabel: "Web Development",
    meta: {
      title: "WordPress Development Services",
      description:
        "Custom WordPress development — theme builds, Gutenberg blocks, ACF, and WooCommerce for content-heavy sites that need a CMS editors actually like.",
      keywords: [
        "WordPress development services",
        "custom WordPress development",
        "WordPress theme development",
        "WooCommerce development",
        "WordPress Gutenberg blocks",
        "ACF development",
        "WordPress migration",
        "enterprise WordPress",
      ],
    },
    hero: {
      eyebrow: "WordPress Development",
      h1: "WordPress Development Built for Editorial Teams",
      subheadline:
        "We build custom WordPress themes, Gutenberg blocks, and WooCommerce stores for content-heavy sites where the editorial team needs real control — not a page builder plugin that breaks every time WordPress updates. From custom block development to complex ACF field architectures, we build WordPress sites that are genuinely easier to maintain than they are to break.",
    },
    overview: {
      h2: "Why WordPress Still Makes Sense for Content-Heavy Sites",
      paragraphs: [
        "WordPress remains the right choice for a specific kind of site: one with a non-technical editorial team that needs to publish frequently and independently, without filing a developer ticket for every new page. Despite running a large share of the web, most WordPress builds we inherit are held together by a stack of page builder plugins that slow the site down and create an editing experience nobody actually enjoys using.",
        "We build differently — custom Gutenberg blocks that give editors genuine flexibility within a structured, on-brand system, rather than a blank canvas that lets every page look like a different website. Advanced Custom Fields (ACF) handles structured content types that don't fit neatly into standard posts and pages, giving editors clean, purpose-built interfaces instead of a wall of generic text fields.",
        "For e-commerce, WooCommerce remains a legitimate alternative to Shopify for stores with complex content and commerce needs intertwined — a publisher with a shop, a membership site with digital products, a business where the content marketing and the storefront need to share the same CMS. We build WooCommerce stores with the same custom development discipline we apply to any WordPress build, not a default theme with a checkout bolted on.",
        "Performance and security get baked into WordPress builds from the start, not patched on afterward — minimal plugin footprint, server-level caching, and a hosting setup that doesn't depend on a dozen security plugins compensating for a fundamentally insecure setup. A well-built WordPress site should never feel like the liability WordPress sometimes gets a reputation for being.",
        "We also think carefully about hosting and the broader infrastructure a WordPress site depends on, since the platform's reputation for being slow or insecure usually traces back to cheap shared hosting and an unmanaged plugin stack rather than WordPress itself. We recommend hosting sized to your actual traffic, and we document exactly what's running on a site so a future developer — or a future version of your own team — can understand it without archaeology.",
      ],
    },
    whatsIncluded: {
      h2: "What WordPress Development with Vertexa Includes",
      items: [
        {
          title: "Custom Theme Development",
          description:
            "Purpose-built WordPress themes designed around your content model and brand, not a modified commercial theme carrying thousands of lines of unused code and styling conflicts you'll be debugging for years.",
        },
        {
          title: "Gutenberg Block Development",
          description:
            "Custom block libraries built for the block editor, giving editors structured flexibility — distinct layout options within brand constraints, not an unrestricted page builder that turns every page into a one-off design.",
        },
        {
          title: "Advanced Custom Fields (ACF) Architecture",
          description:
            "Structured content types and clean editorial interfaces built with ACF, for content that doesn't fit standard posts and pages — team bios, product specs, case studies, or any repeating structured content.",
        },
        {
          title: "WooCommerce Development",
          description:
            "Custom WooCommerce stores and storefront customization for businesses where commerce and content genuinely need to live in the same CMS, built with the same code quality standards as any custom WordPress theme.",
        },
        {
          title: "WordPress Migrations",
          description:
            "Moving from another CMS to WordPress, or from a bloated existing WordPress install to a clean custom rebuild — full content migration, URL mapping, and SEO preservation handled as core requirements.",
        },
        {
          title: "Plugin Development & Custom Functionality",
          description:
            "Custom plugin development for functionality that doesn't have a reliable existing plugin, avoiding the common trap of stacking five overlapping plugins to approximate what one well-built custom plugin would do cleanly.",
        },
        {
          title: "Performance & Security Hardening",
          description:
            "Caching configuration, database optimization, and security hardening specific to WordPress's common attack vectors — built into the technical setup, not dependent on a security plugin doing all the work after the fact.",
        },
      ],
    },
    process: {
      h2: "How We Build on WordPress",
      steps: [
        {
          number: "01",
          title: "Content Model & Discovery",
          description:
            "We map your actual content types and editorial workflow before any design or development — what editors need to create, how often, and what structure makes that process fast rather than fighting the CMS.",
        },
        {
          number: "02",
          title: "Design & Block Architecture",
          description:
            "We design the theme and Gutenberg block library together, since the block system and visual design are inseparable decisions about what editors can and can't do within the system.",
        },
        {
          number: "03",
          title: "Development & QA",
          description:
            "Development happens with regular editor-facing checkpoints, not just developer-facing ones — your team should be testing the actual editing experience well before launch.",
        },
        {
          number: "04",
          title: "Launch & Editor Training",
          description:
            "We handle launch and provide editor training on the actual system we built, since a custom CMS setup is only as good as your team's ability to use it confidently from day one.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for WordPress Development",
      points: [
        {
          title: "We Build for Editors, Not Just Developers",
          description:
            "A WordPress site is only as good as the daily experience of the people publishing on it. We design block libraries and field structures around your actual editorial workflow, not a generic CMS setup that technically works but frustrates your content team.",
        },
        {
          title: "Minimal Plugin Footprint by Design",
          description:
            "Every additional plugin is a future maintenance liability and a potential security and performance cost. We build custom functionality natively where it makes sense, using plugins only when they're genuinely the better-maintained option.",
        },
        {
          title: "WooCommerce Without the Generic Storefront Look",
          description:
            "Most WooCommerce stores look like WooCommerce stores, because most builds barely customize the default theme. We build WooCommerce storefronts with the same custom design attention as any standalone commerce build.",
        },
        {
          title: "Migrations That Don't Break Your Search Rankings",
          description:
            "Moving CMS platforms is one of the highest-risk projects in web development from an SEO standpoint. We treat URL mapping, redirect logic, and structured data preservation as core deliverables, not optional add-ons.",
        },
      ],
    },
    techStack: {
      h2: "WordPress Technologies We Use",
      paragraph:
        "We build WordPress themes using the native Gutenberg block editor and custom block development rather than third-party page builders, with Advanced Custom Fields (ACF) for structured content types that need clean editorial interfaces. WooCommerce handles commerce functionality when content and checkout need to share a CMS. We manage development workflows with WP-CLI for efficient deployment and maintenance, and build custom plugins in PHP when functionality genuinely warrants it rather than relying on a stack of third-party plugins of inconsistent quality.",
      tools: [
        "WordPress Core",
        "Gutenberg",
        "Advanced Custom Fields (ACF)",
        "WooCommerce",
        "WP-CLI",
        "PHP",
        "MySQL",
      ],
    },
    useCases: {
      h2: "Who We Build WordPress Sites For",
      cases: [
        {
          title: "Publishers & Content-Heavy Brands",
          description:
            "Organizations publishing frequently across multiple content types who need an editorial system flexible enough for daily independent publishing without sacrificing brand consistency.",
        },
        {
          title: "WooCommerce Stores with Complex Content",
          description:
            "Businesses where commerce and content marketing are genuinely intertwined — a publication with a shop, a membership business with gated content and digital products.",
        },
        {
          title: "Enterprises Replatforming from Legacy CMS",
          description:
            "Organizations moving off an outdated or unsupported CMS to modern WordPress, needing careful content migration and editorial workflow redesign alongside the technical rebuild.",
        },
      ],
    },
    faqs: [
      {
        question: "Why choose WordPress over Next.js or another modern framework?",
        answer:
          "WordPress makes sense when a non-technical team needs to publish frequently and independently. If your team is comfortable with a headless CMS workflow, Next.js with a headless CMS might serve you better — we'll recommend honestly based on your team's needs.",
      },
      {
        question: "Do you use page builder plugins like Elementor?",
        answer:
          "Generally no. Page builders create maintenance and performance problems long-term. We build custom Gutenberg blocks instead, which gives editors comparable flexibility within a cleaner, faster, more maintainable system.",
      },
      {
        question: "Can you fix or rebuild our existing slow WordPress site?",
        answer:
          "Yes, this is one of our most common projects. We audit the plugin stack, theme code, and hosting setup to find what's actually causing the slowdown, then rebuild the problematic pieces rather than just adding a caching plugin on top.",
      },
      {
        question: "How long does a custom WordPress build take?",
        answer:
          "A custom theme with standard content types typically takes 4-6 weeks. Complex ACF architectures or WooCommerce stores run 8-12 weeks depending on scope. We'll give you a specific timeline after understanding your content model.",
      },
      {
        question: "Will our editorial team need training on the new system?",
        answer:
          "Yes, and we include it. A custom block library is only valuable if your team actually understands how to use it, so every project includes hands-on training on the specific system we built for you.",
      },
      {
        question: "Do you handle ongoing WordPress maintenance and updates?",
        answer:
          "Yes. WordPress core, theme, and plugin updates need regular attention to stay secure and compatible. Most clients move to a maintenance retainer after launch rather than letting updates accumulate until something breaks.",
      },
    ],
    cta: {
      h2: "Ready for a WordPress site your editors will actually enjoy using?",
      subhead:
        "Tell us about your content and team — we'll show you what a custom-built WordPress system could look like for your specific workflow.",
    },
    relatedSubServices: [
      {
        slug: "headless-cms",
        parentSlug: "web-development",
        name: "Headless CMS",
        shortDescription:
          "When your content needs to power more than just a WordPress-powered website.",
      },
      {
        slug: "content-strategy",
        parentSlug: "content-social-media",
        name: "Content Strategy",
        shortDescription:
          "Editorial roadmaps built for the content system we build for you.",
      },
      {
        slug: "technical-seo",
        parentSlug: "seo",
        name: "Technical SEO",
        shortDescription:
          "Making sure your WordPress build is built to rank, not just publish.",
      },
    ],
  },
  {
    slug: "nextjs",
    parentSlug: "web-development",
    parentName: "Web Development",
    parentLabel: "Web Development",
    meta: {
      title: "Next.js Development Services",
      description:
        "Next.js development with the App Router and React Server Components — for sites and apps where performance and SEO are non-negotiable.",
      keywords: [
        "Next.js development agency",
        "Next.js development services",
        "React Server Components",
        "Next.js App Router development",
        "Vercel deployment",
        "Next.js SEO",
        "headless Next.js",
        "Next.js web application development",
      ],
    },
    hero: {
      eyebrow: "Next.js Development",
      h1: "Next.js Development for Performance-Critical Products",
      subheadline:
        "We build marketing sites, content platforms, and full web applications on Next.js using the App Router and React Server Components — for teams that need the SEO performance of a server-rendered site and the interactivity of a modern web app, without choosing between them. If Core Web Vitals and search visibility are genuinely business-critical, Next.js is usually the right foundation.",
    },
    overview: {
      h2: "Why Next.js for Performance- and SEO-Critical Builds",
      paragraphs: [
        "Next.js solved a real problem that plagued earlier generations of JavaScript frameworks: the tradeoff between rich, interactive UI and the server-rendered performance search engines and Core Web Vitals actually reward. The App Router and React Server Components let us render most of a page on the server by default, shipping JavaScript to the browser only for the specific pieces that genuinely need client-side interactivity.",
        "That architecture matters most for sites where both dimensions are non-negotiable — marketing sites that need to rank competitively and convert well, content platforms publishing at volume where page speed compounds across thousands of pages, and web applications where the product experience needs app-like interactivity without sacrificing the initial load performance a typical single-page application struggles with.",
        "We choose rendering strategies per page rather than applying one default across an entire site — static generation for content that doesn't change often, server rendering for personalized or frequently updated content, and client-side interactivity scoped narrowly to the components that actually need it. This granular control is what separates a genuinely fast Next.js build from one that's technically using Next.js but defaulting to client-rendering everything anyway.",
        "Deployment on Vercel's edge network, or any infrastructure that supports Next.js's rendering modes, means pages can be served from locations physically close to your users globally — relevant for brands serving the US, UK, EU, and Australia simultaneously, where a site optimized for one region's latency profile underperforms everywhere else.",
        "We also pay close attention to bundle size and what actually ships to the browser, since the App Router's defaults make it easy to accidentally ship a heavy client bundle if components aren't marked correctly. A genuinely fast Next.js site requires watching this throughout development, not just at a final performance audit, because bundle bloat tends to accumulate gradually as features get added rather than arriving all at once. Catching this early is far cheaper than a dedicated remediation project months after launch.",
      ],
    },
    whatsIncluded: {
      h2: "What Next.js Development with Vertexa Includes",
      items: [
        {
          title: "Marketing & Content Site Development",
          description:
            "High-performance marketing sites and content platforms built with the App Router, optimized for Core Web Vitals and search visibility from the architecture level, not patched in after a slow initial build.",
        },
        {
          title: "Web Application Development",
          description:
            "Full web applications — dashboards, customer portals, internal tools — built with Next.js, React Server Components, and a backend architecture sized to your actual data and scale requirements.",
        },
        {
          title: "Headless CMS Integration",
          description:
            "Next.js frontends connected to headless CMS platforms for editorial flexibility without sacrificing the performance benefits of server-side rendering and static generation where appropriate.",
        },
        {
          title: "E-commerce on Next.js",
          description:
            "Custom storefronts built directly on Next.js, either headless against Shopify's Storefront API or a custom commerce backend, for brands that need design and performance control beyond a standard platform theme.",
        },
        {
          title: "API Routes & Backend Integration",
          description:
            "Next.js API routes and server actions handling backend logic, third-party integrations, and data fetching, architected to keep sensitive logic and credentials off the client where they belong.",
        },
        {
          title: "Performance & Core Web Vitals Optimization",
          description:
            "Rendering strategy audits, bundle size optimization, and image and font delivery tuning specific to Next.js's performance model, addressing the actual bottlenecks rather than generic web performance advice.",
        },
        {
          title: "Migration from Other Frameworks",
          description:
            "Moving from Create React App, Gatsby, a legacy SPA, or another framework to Next.js — replatforming for the performance and SEO benefits without starting the entire codebase from zero.",
        },
      ],
    },
    process: {
      h2: "How We Build on Next.js",
      steps: [
        {
          number: "01",
          title: "Architecture & Rendering Strategy",
          description:
            "We decide rendering strategy per route based on content type and update frequency — static, server-rendered, or hybrid — before writing component code, since this decision shapes the entire application architecture going forward.",
        },
        {
          number: "02",
          title: "Component & Data Architecture",
          description:
            "We design the component hierarchy and data-fetching patterns together, deciding what renders on the server versus the client deliberately, not by default client-component habits carried over from older React patterns.",
        },
        {
          number: "03",
          title: "Development & Performance Testing",
          description:
            "Development includes continuous performance testing against Core Web Vitals targets, not a single audit at the end — catching regressions as they're introduced rather than after they've accumulated.",
        },
        {
          number: "04",
          title: "Deployment & Monitoring",
          description:
            "We deploy to Vercel's edge network or your preferred infrastructure, with monitoring in place to catch performance or error regressions in production before they affect meaningful traffic.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Next.js Development",
      points: [
        {
          title: "We Use Server Components Deliberately, Not by Default",
          description:
            "Many teams new to the App Router either client-render everything out of habit or over-correct and create awkward server/client boundaries. We make this decision deliberately per component, based on what genuinely needs interactivity, not on a habit carried over from an older React pattern.",
        },
        {
          title: "Performance Is an Architecture Decision, Not a Final Audit",
          description:
            "We don't build a site and then run a Lighthouse audit at the end hoping it passes. Performance budgets and rendering strategy are architectural decisions made before development starts.",
        },
        {
          title: "SEO Built Into the Framework Choice",
          description:
            "Next.js's rendering model is itself an SEO decision — we structure routes, metadata, and structured data correctly from the start, treating technical SEO as inseparable from the framework architecture.",
        },
        {
          title: "We Build Applications, Not Just Marketing Sites",
          description:
            "Our Next.js experience spans marketing sites and full web applications with complex state, authentication, and data requirements — we're not limited to the simpler use case most agencies default to.",
        },
      ],
    },
    techStack: {
      h2: "Next.js Technologies We Use",
      paragraph:
        "We build on the Next.js App Router with React Server Components as the default rendering model, reaching for client components only where genuine interactivity is required. TypeScript is standard across every build for type safety at scale. We deploy primarily to Vercel for its tight Next.js integration and edge network, though we also deploy to other infrastructure when a client's existing setup requires it. For styling, we typically use Tailwind CSS, and for data, we integrate with whatever backend fits the project's actual requirements.",
      tools: [
        "Next.js (App Router)",
        "React Server Components",
        "TypeScript",
        "Vercel",
        "Edge Functions",
        "Tailwind CSS",
        "GraphQL & REST APIs",
      ],
    },
    useCases: {
      h2: "Who We Build Next.js Sites and Apps For",
      cases: [
        {
          title: "SaaS Marketing Sites",
          description:
            "SaaS companies needing marketing sites that load instantly and rank well, built to support frequent landing page iteration from growth and marketing teams without becoming an engineering bottleneck.",
        },
        {
          title: "High-Traffic Content Platforms",
          description:
            "Publishers and content platforms where page speed compounds across thousands of pages — a small per-page performance gain multiplies into significant aggregate impact at scale.",
        },
        {
          title: "Web Applications Needing App-Like Performance",
          description:
            "Products that need the interactivity of a single-page application without sacrificing the initial load performance and SEO visibility that client-rendered SPAs traditionally struggle with.",
        },
      ],
    },
    faqs: [
      {
        question: "Is Next.js overkill for a simple marketing site?",
        answer:
          "Not necessarily — Next.js's static generation handles simple sites efficiently, and you benefit from the same performance and SEO foundation if the site grows later. For genuinely simple sites, we'll tell you honestly if a simpler stack makes more sense for your actual needs.",
      },
      {
        question: "Can Next.js handle complex web applications, not just marketing sites?",
        answer:
          "Yes — we've built full applications with authentication, complex data fetching, and real-time features on Next.js. The App Router and Server Components handle application complexity well when planned correctly from the start.",
      },
      {
        question: "Do we need to host on Vercel specifically?",
        answer:
          "No, though Vercel offers the tightest integration with Next.js's rendering features. We can deploy to other infrastructure based on your existing setup and requirements.",
      },
      {
        question: "How is Next.js different from just using React?",
        answer:
          "React is a UI library; Next.js is a full framework built on React that adds routing, server rendering, and performance optimizations React alone doesn't provide. Building production apps in plain React means recreating much of what Next.js solves.",
      },
      {
        question: "Can you migrate our existing React app to Next.js?",
        answer:
          "Yes, this is a common project. We assess your existing application architecture and plan a migration path that captures the performance and SEO benefits without requiring a complete rewrite in most cases.",
      },
      {
        question: "Do you handle the backend too, or just the Next.js frontend?",
        answer:
          "Both, typically. Next.js API routes and server actions can handle significant backend logic directly, and we also integrate with separate backend services or headless CMS platforms depending on requirements.",
      },
    ],
    cta: {
      h2: "Ready for a site that's actually fast and ranks?",
      subhead:
        "Tell us what you're building — we'll tell you honestly whether Next.js is the right foundation and what it would take to build it properly.",
    },
    relatedSubServices: [
      {
        slug: "headless-cms",
        parentSlug: "web-development",
        name: "Headless CMS",
        shortDescription:
          "The content layer most Next.js marketing sites and platforms need behind the frontend.",
      },
      {
        slug: "technical-seo",
        parentSlug: "seo",
        name: "Technical SEO",
        shortDescription:
          "Making sure your Next.js architecture earns the rankings its performance deserves.",
      },
      {
        slug: "ecommerce-development",
        parentSlug: "web-development",
        name: "E-commerce Development",
        shortDescription:
          "Headless commerce on Next.js when a standard platform theme isn't enough.",
      },
    ],
  },
  {
    slug: "webflow",
    parentSlug: "web-development",
    parentName: "Web Development",
    parentLabel: "Web Development",
    meta: {
      title: "Webflow Development Services",
      description:
        "Webflow development and custom CMS builds — for marketing teams who want real design control without depending on developers for every page.",
      keywords: [
        "Webflow development services",
        "Webflow developer",
        "Webflow CMS development",
        "Webflow custom code",
        "Webflow agency",
        "Webflow ecommerce",
        "Webflow vs WordPress",
        "no-code website development",
      ],
    },
    hero: {
      eyebrow: "Webflow Development",
      h1: "Webflow Development for Teams Who Want Real Control",
      subheadline:
        "We design and build Webflow sites for marketing and design teams who want genuine visual control over their site without filing a ticket for every layout change — combined with custom code, interactions, and CMS architecture that goes beyond what most Webflow templates offer. It's the right platform when your team wants to own day-to-day changes but still needs a professionally built foundation.",
    },
    overview: {
      h2: "Why Webflow Fits a Specific Kind of Team",
      paragraphs: [
        "Webflow occupies a real middle ground between fully custom development and generic website builders — visual design control comparable to working directly in a design tool, backed by a genuine CMS and the ability to add custom code where Webflow's native capabilities run out. It's not the right fit for every project, but for marketing teams who want to ship and iterate on pages independently, it solves a real problem custom-coded sites create.",
        "The teams who get the most value from Webflow are ones with an active design or marketing function that wants to launch new landing pages, update content, and experiment with layout regularly — without that work queuing behind developer availability. We build the initial site with the structure and components needed to support that independence, rather than a one-off design that locks every future change behind a developer.",
        "Webflow's CMS handles structured content reasonably well for marketing sites, blogs, and portfolios, but it has real limits compared to a dedicated headless CMS or custom-built system — which we're upfront about rather than oversell. For genuinely complex content models or applications, we'll tell you honestly when Webflow isn't the right tool, rather than force-fitting a project into a platform because it's what we're building that week.",
        "Custom code embeds, advanced interactions, and third-party integrations extend Webflow well beyond its out-of-the-box capabilities when built correctly — the difference between a Webflow site that looks like every other Webflow template and one that feels genuinely custom and on-brand.",
        "Performance on Webflow depends heavily on how disciplined the build is with images, fonts, and the number of custom interactions running on a given page, since the platform makes it easy to add weight without immediately feeling the cost. We build with performance budgets in mind from the start, testing real page weight rather than assuming Webflow's hosting automatically handles speed regardless of what's actually on the page.",
        "We also think about what happens after handoff, not just at launch — a Webflow site that's well-structured but poorly documented still ends up bottlenecked on us for changes your team should be able to make independently. Documentation and a short, practical walkthrough are part of every project, not an optional add-on billed separately after the fact, since independence without guidance rarely actually gets used.",
      ],
    },
    whatsIncluded: {
      h2: "What Webflow Development with Vertexa Includes",
      items: [
        {
          title: "Custom Webflow Design & Build",
          description:
            "Fully custom Webflow sites designed and built around your brand, not a customized template — structured so your team can manage content and launch new pages independently after handoff.",
        },
        {
          title: "Webflow CMS Architecture",
          description:
            "Structured CMS collections designed around your actual content types, giving your team a clean, purpose-built editing interface rather than a generic blog setup stretched to cover content it wasn't designed for.",
        },
        {
          title: "Custom Interactions & Animations",
          description:
            "Webflow's native interactions system used to build polished micro-interactions and scroll animations, going beyond template defaults to create something that feels genuinely designed rather than assembled.",
        },
        {
          title: "Custom Code Integration",
          description:
            "Custom HTML, CSS, and JavaScript embeds for functionality beyond Webflow's native capabilities, integrated cleanly rather than as disconnected code that breaks when Webflow updates its platform.",
        },
        {
          title: "Webflow E-commerce",
          description:
            "Webflow's native e-commerce functionality for stores with straightforward catalog and checkout needs, where Shopify's additional complexity isn't necessary for your actual product range.",
        },
        {
          title: "Migration to Webflow",
          description:
            "Moving from WordPress, Squarespace, or a custom-coded site to Webflow — content migration, URL mapping, and SEO preservation handled as core parts of the move, not afterthoughts.",
        },
        {
          title: "Webflow Training & Handoff",
          description:
            "Hands-on training for your team on the specific Webflow site we build, so the editorial and design independence Webflow offers actually gets used rather than left unused.",
        },
      ],
    },
    process: {
      h2: "How We Build on Webflow",
      steps: [
        {
          number: "01",
          title: "Discovery & Content Planning",
          description:
            "We map your content types and how your team wants to manage the site day-to-day, since the CMS structure needs to match your actual workflow, not a generic Webflow collection setup.",
        },
        {
          number: "02",
          title: "Design in Webflow",
          description:
            "We design directly in Webflow rather than handing off static design files for someone else to rebuild, which keeps the visual design and the technical build in sync throughout.",
        },
        {
          number: "03",
          title: "Build & Custom Code",
          description:
            "We build out interactions, custom code, and CMS connections, testing across devices and browsers before anything goes live to your actual visitors.",
        },
        {
          number: "04",
          title: "Launch & Team Handoff",
          description:
            "We launch and provide hands-on training specific to your site's structure, so your team can confidently manage content and build new pages independently going forward.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Webflow",
      points: [
        {
          title: "We Design Directly in Webflow",
          description:
            "Many agencies design in Figma and hand off static files for a separate build phase, losing fidelity in translation. We design directly in Webflow, which means what you approve is genuinely what ships, not an approximation rebuilt later by someone else.",
        },
        {
          title: "We're Honest About Webflow's Limits",
          description:
            "Webflow isn't right for every project, and we'll tell you when a different approach actually serves your needs better, rather than recommending Webflow because it's convenient for us to build in.",
        },
        {
          title: "Custom Code That Doesn't Fight the Platform",
          description:
            "We extend Webflow with custom code that integrates cleanly with the platform's update cycle, rather than fragile workarounds that break the next time Webflow ships a platform change.",
        },
        {
          title: "Built for Your Team's Independence",
          description:
            "We structure CMS collections and components specifically so your marketing team can launch new pages and content without needing us for every change — the entire point of choosing Webflow.",
        },
      ],
    },
    techStack: {
      h2: "Webflow Tools & Capabilities We Use",
      paragraph:
        "We build using Webflow's Designer for visual development, structuring CMS Collections around your actual content model rather than defaults. Webflow's native Interactions system handles animation and micro-interaction work, and we extend functionality with custom HTML, CSS, and JavaScript embeds when native capabilities reach their limit. For e-commerce builds, we use Webflow's native commerce engine. Where a project needs functionality genuinely beyond Webflow, we integrate third-party tools through Webflow's API rather than forcing an unsuitable workaround.",
      tools: [
        "Webflow Designer",
        "Webflow CMS",
        "Webflow Interactions",
        "Webflow Ecommerce",
        "Custom Code Embeds",
        "Webflow API",
      ],
    },
    useCases: {
      h2: "Who We Build Webflow Sites For",
      cases: [
        {
          title: "Marketing Teams Who Want Independence",
          description:
            "In-house marketing teams who need to launch landing pages and update content frequently without depending on developer availability, while still wanting a professionally designed foundation.",
        },
        {
          title: "Design-Led Brands & Agencies",
          description:
            "Design studios, creative agencies, and design-forward brands where the visual execution needs to match the quality of the brand's own work, beyond what a generic template allows.",
        },
        {
          title: "Startups Needing a Fast, Polished Launch",
          description:
            "Early-stage companies that need a credible, well-designed site quickly, without the timeline and cost of a fully custom-coded build their stage doesn't yet require.",
        },
      ],
    },
    faqs: [
      {
        question: "Is Webflow better than WordPress?",
        answer:
          "Neither is universally better — they serve different needs. Webflow offers tighter design control and a gentler learning curve for marketing teams; WordPress offers a more mature plugin ecosystem for very large or complex content sites overall.",
      },
      {
        question: "Can Webflow handle e-commerce?",
        answer:
          "Yes, for stores with straightforward catalog and checkout requirements. For complex merchandising, B2B pricing, or high order volume, Shopify is usually the better fit — we'll tell you honestly which applies.",
      },
      {
        question: "Will our team be able to update the site themselves?",
        answer:
          "Yes, that's the point of choosing Webflow. We structure the CMS and components specifically for your team's independence, and include training so that independence actually gets used.",
      },
      {
        question: "What if we need functionality Webflow doesn't support natively?",
        answer:
          "We extend Webflow with custom code for most functionality gaps. For genuinely complex application needs, we'll tell you if Webflow isn't the right tool rather than force a workaround.",
      },
      {
        question: "How long does a Webflow build take?",
        answer:
          "A marketing site typically takes 3-5 weeks. More complex builds with extensive CMS architecture or custom interactions run 6-8 weeks. We'll give you a specific timeline based on your actual scope.",
      },
      {
        question: "Can you migrate our existing site to Webflow?",
        answer:
          "Yes — from WordPress, Squarespace, or a custom-coded site. We handle content migration, URL redirects, and SEO preservation as standard parts of any migration project.",
      },
    ],
    cta: {
      h2: "Ready for a Webflow site your team can actually run?",
      subhead:
        "Tell us about your content and how your team wants to work — we'll show you what a properly structured Webflow build looks like.",
    },
    relatedSubServices: [
      {
        slug: "ui-ux-design",
        parentSlug: "branding-design",
        name: "UI/UX Design",
        shortDescription:
          "Interface design work that feeds directly into a Webflow build.",
      },
      {
        slug: "content-strategy",
        parentSlug: "content-social-media",
        name: "Content Strategy",
        shortDescription:
          "Editorial planning for the CMS collections we structure in Webflow.",
      },
      {
        slug: "on-page-seo",
        parentSlug: "seo",
        name: "On-Page SEO",
        shortDescription:
          "Making sure your new Webflow pages are structured to rank.",
      },
    ],
  },
  {
    slug: "headless-cms",
    parentSlug: "web-development",
    parentName: "Web Development",
    parentLabel: "Web Development",
    meta: {
      title: "Headless CMS Development Services",
      description:
        "Headless CMS architecture and content modeling with Sanity, Contentful, and similar platforms — decoupled content management for modern frontends.",
      keywords: [
        "headless CMS development",
        "headless CMS agency",
        "Sanity development",
        "Contentful development",
        "content modeling services",
        "headless architecture",
        "decoupled CMS",
        "JAMstack development",
      ],
    },
    hero: {
      eyebrow: "Headless CMS Development",
      h1: "Headless CMS Architecture Built Around Your Content",
      subheadline:
        "We design and implement headless CMS architecture — content modeling, editorial workflows, and the API layer connecting your content to whatever frontend you're building on, whether that's Next.js, a mobile app, or multiple channels at once. The right content model upfront saves months of rework once your content actually starts to scale.",
    },
    overview: {
      h2: "Why Headless CMS Architecture Matters More Than Platform Choice",
      paragraphs: [
        "The platform choice between Sanity, Contentful, Strapi, or another headless CMS matters less than most vendors would have you believe — what actually determines whether a headless CMS implementation succeeds or becomes a frustrating bottleneck is the content model underneath it. A poorly modeled content structure makes editors fight the system regardless of which platform it's built on.",
        "Headless architecture decouples content management from presentation, which means the same content can power a website, a mobile app, and other channels from a single source of truth — genuinely valuable when you actually have multiple channels, and unnecessary complexity when you don't. We help clients make this decision honestly rather than defaulting to headless because it's the trend.",
        "Good content modeling means thinking in structured, reusable content types rather than page-shaped blobs of content — a 'service' content type that can render differently across a listing page, a detail page, and a search result, rather than a single rigid template tied to one specific layout. This structural thinking is what separates a headless CMS implementation that scales gracefully from one that requires a content model overhaul within a year.",
        "Editorial experience matters as much as technical architecture. A technically elegant content model that's confusing for non-technical editors to actually use fails just as completely as a poorly structured one — we design the editing interface and content model together, testing with the people who'll actually use it daily, not just the developers consuming the API.",
        "Preview environments deserve more attention than most headless CMS implementations give them — editors need to see roughly what a piece of content will actually look like before publishing, not just a raw content form disconnected from the eventual rendered page. We build preview functionality as a standard part of the implementation, since publishing blind is one of the more common complaints we hear from teams who've moved to a headless setup without it, and it's avoidable with the right setup from the start.",
      ],
    },
    whatsIncluded: {
      h2: "What Headless CMS Development with Vertexa Includes",
      items: [
        {
          title: "Content Modeling & Architecture",
          description:
            "Structured content type design built around how content actually gets reused and rendered across your channels, not a one-to-one mirror of your old CMS's page structure carried over without rethinking.",
        },
        {
          title: "CMS Platform Implementation",
          description:
            "Implementation on Sanity, Contentful, Strapi, or another headless platform chosen based on your specific requirements — editorial experience, pricing model, and technical fit — not whichever platform we default to.",
        },
        {
          title: "API Integration & Frontend Connection",
          description:
            "Connecting your headless CMS to your frontend — Next.js, a mobile app, or another consumer — through GraphQL or REST APIs, with caching and revalidation strategy built in for performance.",
        },
        {
          title: "Editorial Workflow Design",
          description:
            "Custom editing interfaces, preview environments, and publishing workflows designed around your actual editorial process, including approval stages and scheduled publishing where needed for your team.",
        },
        {
          title: "Multi-Channel Content Strategy",
          description:
            "Architecture supporting content reuse across website, mobile app, and other channels from a single content source, when you genuinely have multiple channels that benefit from shared content.",
        },
        {
          title: "Migration from Traditional CMS",
          description:
            "Moving content from WordPress, Drupal, or another traditional CMS into a headless structure — content audit, restructuring, and migration handled as a content modeling exercise, not just a data dump.",
        },
        {
          title: "Localization & Multi-Region Content",
          description:
            "Content architecture supporting multiple languages and regions, structured correctly from the start to avoid the common headless CMS pitfall of localization bolted on as an afterthought.",
        },
      ],
    },
    process: {
      h2: "How We Build Headless CMS Architecture",
      steps: [
        {
          number: "01",
          title: "Content Audit & Modeling",
          description:
            "We audit your existing content (if any) and map the content types your business actually needs, designing the model around reuse and future flexibility, not just your current page layouts.",
        },
        {
          number: "02",
          title: "Platform Selection & Setup",
          description:
            "We select the headless platform that fits your editorial team's needs and budget, then configure the content types, relationships, and access controls to match the model we designed.",
        },
        {
          number: "03",
          title: "API & Frontend Integration",
          description:
            "We connect the CMS to your frontend, building the data-fetching and caching strategy that determines how fresh content appears and how the system performs under real traffic.",
        },
        {
          number: "04",
          title: "Editorial Testing & Launch",
          description:
            "We test the editorial experience with your actual content team before launch, since a content model that makes sense to developers can still confuse the people using it daily.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Headless CMS Architecture",
      points: [
        {
          title: "We Design Content Models, Not Just CMS Configurations",
          description:
            "Most headless CMS implementations skip real content modeling and just replicate an existing page structure inside a new platform. We design content types around reuse and structure, which is what actually determines whether the system scales gracefully over time.",
        },
        {
          title: "Platform-Agnostic Recommendations",
          description:
            "We're not tied to selling one specific CMS platform. We recommend Sanity, Contentful, Strapi, or another option based on your actual requirements, not which platform we have a partnership with or are most comfortable defaulting to regardless of fit.",
        },
        {
          title: "We Test With Real Editors",
          description:
            "A content model that works in theory can still fail in practice if editors find it confusing. We test the actual editing experience with your team before launch, not just the API responses developers care about most.",
        },
        {
          title: "Built for Multi-Channel from Day One",
          description:
            "When you genuinely need content across web, mobile, and other channels, we architect for that from the start — rather than retrofitting multi-channel support onto a model designed for a single website after the fact, which rarely goes smoothly.",
        },
      ],
    },
    techStack: {
      h2: "Headless CMS Platforms & Tools We Use",
      paragraph:
        "We work across the major headless CMS platforms — Sanity for its flexible, code-first content modeling and real-time collaboration; Contentful for enterprise-grade content operations and governance; and Strapi when a self-hosted, open-source option fits the budget and infrastructure requirements better. Integration happens through GraphQL or REST APIs depending on the platform and frontend, with caching and incremental revalidation strategies built to balance content freshness against performance.",
      tools: [
        "Sanity",
        "Contentful",
        "Strapi",
        "GraphQL",
        "REST APIs",
        "Next.js (frontend integration)",
      ],
    },
    useCases: {
      h2: "Who Needs a Headless CMS",
      cases: [
        {
          title: "Multi-Channel Brands",
          description:
            "Companies publishing the same content across a website, mobile app, and potentially other channels, who need a single content source rather than duplicate content across disconnected systems.",
        },
        {
          title: "High-Growth Content Teams",
          description:
            "Editorial teams scaling content production who've outgrown a traditional CMS's content modeling flexibility and need structured, reusable content types that support that growth.",
        },
        {
          title: "Engineering Teams Wanting Frontend Freedom",
          description:
            "Development teams who want to build with modern frontend frameworks like Next.js without being constrained by a traditional CMS's templating system and rendering model.",
        },
      ],
    },
    faqs: [
      {
        question: "Do we actually need a headless CMS, or would WordPress work?",
        answer:
          "It depends on your channels and team. If you publish to a single website and your team is comfortable with WordPress, a headless CMS may be unnecessary complexity. If you need multi-channel content, headless makes considerably more sense for your situation.",
      },
      {
        question: "Which headless CMS platform should we use?",
        answer:
          "It depends on your content complexity, editorial team size, and budget. Sanity suits flexible, developer-collaborative content modeling. Contentful suits larger teams needing governance features. We'll recommend based on your specific situation and constraints.",
      },
      {
        question: "How long does content modeling and implementation take?",
        answer:
          "Content modeling typically takes 2-3 weeks for a thorough job. Full implementation including frontend integration runs 6-10 weeks depending on complexity. Rushing the modeling phase is the most common cause of rework later.",
      },
      {
        question: "Can our editorial team use a headless CMS as easily as WordPress?",
        answer:
          "With a well-designed content model and editing interface, yes — often more easily, since structured content types reduce the chance of accidentally breaking page layouts.",
      },
      {
        question: "Do you build the frontend too, or just the CMS layer?",
        answer:
          "Both, typically. We often build the Next.js (or other) frontend alongside the CMS architecture, since the two are closely related decisions. We can also work alongside an existing frontend team.",
      },
      {
        question: "What happens if we need to switch CMS platforms later?",
        answer:
          "A well-designed content model is largely portable between platforms, since the modeling principles matter more than platform-specific features. Migration still requires work, but a thoughtful initial architecture makes it less painful.",
      },
    ],
    cta: {
      h2: "Ready to build content architecture that scales?",
      subhead:
        "Tell us about your content and channels — we'll help you figure out if headless is actually the right fit, and what the content model should look like.",
    },
    relatedSubServices: [
      {
        slug: "nextjs",
        parentSlug: "web-development",
        name: "Next.js Development",
        shortDescription:
          "The frontend framework we most often pair with a headless CMS.",
      },
      {
        slug: "content-strategy",
        parentSlug: "content-social-media",
        name: "Content Strategy",
        shortDescription:
          "Editorial planning that determines what your content model actually needs to support.",
      },
      {
        slug: "saas-seo",
        parentSlug: "seo",
        name: "SaaS SEO",
        shortDescription:
          "Organic growth strategy for the content your headless CMS will power.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    parentSlug: "web-development",
    parentName: "Web Development",
    parentLabel: "Web Development",
    meta: {
      title: "E-commerce Development Services",
      description:
        "Custom e-commerce development across Shopify, headless commerce, and custom platforms — built around your catalog complexity and order volume.",
      keywords: [
        "ecommerce development services",
        "ecommerce development agency",
        "custom ecommerce development",
        "headless commerce development",
        "ecommerce platform selection",
        "B2B ecommerce development",
        "ecommerce replatforming",
        "multi-channel commerce",
      ],
    },
    hero: {
      eyebrow: "E-commerce Development",
      h1: "E-commerce Development Built Around How You Actually Sell",
      subheadline:
        "We build e-commerce experiences across Shopify, headless commerce architectures, and custom platforms — choosing the right foundation based on your catalog complexity, order volume, and merchandising logic rather than defaulting to one platform for every project. Most e-commerce platform decisions get made for the wrong reasons; we'd rather get yours right the first time.",
    },
    overview: {
      h2: "Why Platform Choice Should Follow Your Business, Not the Other Way Around",
      paragraphs: [
        "Most e-commerce projects start with a platform decision made too early, often based on what an agency happens to specialize in rather than what the business actually needs. Shopify is the right call for most direct-to-consumer brands. It's the wrong call for complex B2B catalogs with negotiated pricing per account, or for brands whose commerce experience needs to be deeply integrated with a broader custom application.",
        "We start from your actual requirements — catalog size and complexity, B2B versus B2C dynamics, integration needs with existing systems, and realistic order volume — before recommending a platform. Sometimes that's Shopify. Sometimes it's a headless commerce architecture giving more frontend control. Sometimes it's a custom-built commerce backend when off-the-shelf platforms genuinely can't support the business logic required.",
        "Headless commerce — separating the storefront frontend from the commerce backend — has become a legitimate option as platforms like Shopify have opened up their APIs, giving brands platform reliability for checkout and inventory with full design and performance control on the frontend. This isn't the right call for every store, but for brands where the storefront experience is a genuine competitive differentiator, it's increasingly the standard approach.",
        "Replatforming is often the actual project — moving from a platform that's hit its limits, whether that's Magento's maintenance burden, BigCommerce's customization ceiling, or a custom system nobody currently on the team understands. We treat data migration, SEO preservation, and customer account continuity as core requirements of any replatform, not risks to manage after the fact.",
        "Integration with the rest of your operational stack — inventory management, fulfillment, accounting, customer service tools — often matters more to day-to-day operations than the storefront's visual design, even though it gets far less attention in most e-commerce project conversations. We map these integration requirements early, since discovering a critical system doesn't connect cleanly after the storefront is already built is an expensive and avoidable mistake.",
        "Payment and checkout configuration also varies more than most platform comparisons acknowledge — different regions favor different payment methods, subscription billing has its own requirements separate from one-time purchases, and B2B checkout flows often need approval steps a standard B2C checkout was never designed to support. We configure for your actual transaction types rather than assuming a generic checkout setup covers every business model equally well, since that assumption is where many implementations quietly fail later.",
      ],
    },
    whatsIncluded: {
      h2: "What E-commerce Development with Vertexa Includes",
      items: [
        {
          title: "Platform Selection & Strategy",
          description:
            "An honest assessment of Shopify, headless commerce, or custom platform options based on your catalog, order volume, and business model — delivered before any development begins, so the foundation is right.",
        },
        {
          title: "Headless Commerce Architecture",
          description:
            "Decoupled storefront and commerce backend architecture, typically pairing a Next.js frontend with a commerce API for maximum design and performance control.",
        },
        {
          title: "B2B Commerce Development",
          description:
            "Account-based pricing, quote workflows, bulk ordering, and the procurement-friendly features B2B buyers expect — functionality most B2C-oriented platforms support poorly without custom development.",
        },
        {
          title: "Multi-Channel Commerce Integration",
          description:
            "Inventory and order management synchronized across web, marketplaces, and potentially physical retail, avoiding the common failure mode of disconnected systems that lose track of stock across channels.",
        },
        {
          title: "Custom Checkout & Payment Integration",
          description:
            "Checkout customization and payment gateway integration beyond standard platform defaults, including subscription billing, split payments, or other non-standard transaction models your business requires.",
        },
        {
          title: "E-commerce Replatforming",
          description:
            "Migration from Magento, BigCommerce, WooCommerce, or a custom system to a better-fitting platform — full data migration, SEO preservation, and customer account continuity as core deliverables.",
        },
        {
          title: "Conversion & Checkout Optimization",
          description:
            "Checkout flow and product page optimization informed by how your specific customers actually shop, not generic e-commerce best practices applied without context.",
        },
      ],
    },
    process: {
      h2: "How We Build E-commerce Experiences",
      steps: [
        {
          number: "01",
          title: "Business & Catalog Assessment",
          description:
            "We assess your catalog complexity, order volume, B2B/B2C dynamics, and integration needs before recommending a platform — the foundation decision that shapes everything that follows.",
        },
        {
          number: "02",
          title: "Architecture & Platform Setup",
          description:
            "We design the technical architecture — Shopify, headless, or custom — and set up the foundational systems: catalog structure, checkout flow, and integrations with your existing tools.",
        },
        {
          number: "03",
          title: "Development & Integration",
          description:
            "We build the storefront and integrate payment, inventory, and fulfillment systems, testing transaction flows thoroughly before any real customer touches the checkout.",
        },
        {
          number: "04",
          title: "Launch & Conversion Monitoring",
          description:
            "We handle launch and monitor conversion and checkout metrics closely in the following weeks, tuning based on real customer behavior rather than launch-day assumptions.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for E-commerce Development",
      points: [
        {
          title: "We Recommend Platforms, Not Just Build on Whatever We Know",
          description:
            "Some agencies specialize in one platform and fit every client into it. We work across Shopify, headless commerce, and custom architectures, which means our platform recommendation is based on your business, not our specialization, even when that means recommending a platform we build on less often.",
        },
        {
          title: "Real B2B Commerce Experience",
          description:
            "B2B e-commerce has fundamentally different requirements than B2C — account pricing, procurement workflows, quote-to-order processes — and most agencies' e-commerce experience is exclusively D2C. We've built for both.",
        },
        {
          title: "Replatforming That Protects What You've Built",
          description:
            "Moving platforms is high-risk for SEO and customer trust if handled carelessly. We treat data integrity, URL preservation, and account continuity as core requirements, not optional extras tacked on if time and budget happen to allow it.",
        },
        {
          title: "Headless Commerce Done Right",
          description:
            "Headless commerce adds real complexity, and it's not the right call for every store. We're honest about when the added control is worth it, and when a standard platform setup genuinely serves you better.",
        },
      ],
    },
    techStack: {
      h2: "E-commerce Technologies We Use",
      paragraph:
        "Our e-commerce development spans Shopify and Shopify Hydrogen for headless storefronts, WooCommerce for content-integrated stores, and custom commerce backends when business logic requires it. For headless architectures, we typically pair a Next.js frontend with the commerce platform's Storefront API. Payment integration covers Stripe, PayPal, and platform-native payment processors, with inventory and order management connected to fulfillment and ERP systems via API integration rather than manual data entry between disconnected tools.",
      tools: [
        "Shopify & Hydrogen",
        "WooCommerce",
        "Next.js",
        "Stripe",
        "Commerce APIs",
        "ERP/Inventory Integrations",
      ],
    },
    useCases: {
      h2: "Who We Build E-commerce Experiences For",
      cases: [
        {
          title: "D2C Brands Choosing Their First Platform",
          description:
            "Brands launching their first serious e-commerce operation, needing an honest platform recommendation rather than a default answer, sized to their actual catalog and growth plans.",
        },
        {
          title: "B2B Companies Adding E-commerce",
          description:
            "B2B businesses moving order processes online, needing account-based pricing and procurement-friendly workflows most B2C platforms don't handle well out of the box.",
        },
        {
          title: "Brands Replatforming from Legacy Systems",
          description:
            "Established e-commerce businesses outgrowing Magento, BigCommerce, or a custom system, needing a careful migration that preserves SEO equity and customer relationships.",
        },
      ],
    },
    faqs: [
      {
        question: "How do you decide which platform is right for us?",
        answer:
          "We assess your catalog size, B2B versus B2C dynamics, order volume, and integration requirements first. The platform recommendation follows from those factors — we don't default to one platform regardless of fit or our own familiarity with it.",
      },
      {
        question: "What's the difference between this service and your Shopify development service?",
        answer:
          "Our Shopify service covers development specifically on the Shopify platform. This service covers the broader platform decision and development across Shopify, headless commerce, and custom systems.",
      },
      {
        question: "Is headless commerce worth the added complexity for our store?",
        answer:
          "It depends on whether storefront performance and design control are genuine competitive differentiators for your brand. For many stores, standard platform theming is sufficient. We'll give you an honest assessment rather than push the more complex option by default.",
      },
      {
        question: "Can you handle B2B-specific requirements like account pricing?",
        answer:
          "Yes — account-based pricing, quote workflows, and bulk ordering are common requirements we build for, whether on a B2B-capable platform like Shopify Plus or a custom commerce backend built specifically for your procurement process.",
      },
      {
        question: "How long does an e-commerce replatform take?",
        answer:
          "A standard replatform typically takes 8-12 weeks depending on catalog size and integration complexity. Complex B2B or multi-channel migrations can run longer. We'll give you a specific timeline after assessment.",
      },
      {
        question: "Do you handle ongoing e-commerce maintenance after launch?",
        answer:
          "Yes. Most clients move to an ongoing retainer covering platform updates, integration maintenance, and conversion optimization, since e-commerce performance benefits from continuous attention.",
      },
    ],
    cta: {
      h2: "Ready to build e-commerce that fits how you actually sell?",
      subhead:
        "Tell us about your catalog and business model — we'll give you an honest platform recommendation before we talk about building anything.",
    },
    relatedSubServices: [
      {
        slug: "shopify",
        parentSlug: "web-development",
        name: "Shopify Development",
        shortDescription:
          "Platform-specific Shopify development when that's the platform you've chosen.",
      },
      {
        slug: "ecommerce-seo",
        parentSlug: "seo",
        name: "E-commerce SEO",
        shortDescription:
          "Category and product page SEO built for catalogs at scale.",
      },
      {
        slug: "conversion-rate-optimization",
        parentSlug: "performance-marketing",
        name: "Conversion Rate Optimization",
        shortDescription:
          "Turning the traffic your new storefront gets into completed orders.",
      },
    ],
  },
  {
    slug: "ios-app-development",
    parentSlug: "mobile-app-development",
    parentName: "Mobile App Development",
    parentLabel: "Mobile Apps",
    meta: {
      title: "iOS App Development Services",
      description:
        "Native iOS app development with Swift and SwiftUI — built for deep Apple ecosystem integration and App Store approval on the first submission.",
      keywords: [
        "iOS app development services",
        "iOS app developer",
        "Swift development",
        "SwiftUI development",
        "Apple app development agency",
        "iPhone app development",
        "iOS App Store optimization",
        "native iOS development",
      ],
    },
    hero: {
      eyebrow: "iOS Development",
      h1: "Native iOS Development for Apps That Feel Genuinely Apple",
      subheadline:
        "We build native iOS apps in Swift and SwiftUI — for products that need deep integration with Apple's ecosystem, performance that cross-platform frameworks can't match, or simply the polish that comes from building specifically for one platform instead of compromising for two. If your app leans on ARKit, HealthKit, widgets, or Apple Watch, native is usually the only real option.",
    },
    overview: {
      h2: "When Native iOS Is Actually the Right Call",
      paragraphs: [
        "Cross-platform frameworks like React Native and Flutter have closed much of the gap with native development, which means the decision to build natively for iOS should be deliberate, not a default. Native makes sense when an app depends on deep platform integration — ARKit for augmented reality, HealthKit for health data, CarPlay, complex widgets, or Apple Watch companion apps — where cross-platform frameworks either don't support the API fully or add a layer of abstraction that costs real performance.",
        "SwiftUI has changed what's efficient to build natively, letting us build interfaces declaratively with significantly less code than the older UIKit approach, while still having full access to UIKit when something needs more granular control. Most new iOS development we do is SwiftUI-first, falling back to UIKit selectively for specific components that benefit from it.",
        "App Store review is its own discipline most teams underestimate until they hit a rejection. We build with Apple's Human Interface Guidelines and App Store Review Guidelines in mind from the start — privacy disclosure requirements, in-app purchase implementation rules, and the specific UI patterns Apple flags — because fixing these after a rejected submission costs more time than building correctly the first time, and resubmission queues can add days to an already tight launch timeline you've already committed to publicly.",
        "Performance optimization on iOS means understanding the specific constraints of Apple's hardware and memory model — efficient use of Swift's concurrency model, careful management of view lifecycle and state, and profiling with Instruments to catch memory leaks and performance bottlenecks before they show up as App Store reviews complaining about battery drain or crashes.",
        "We also plan for the OS update cycle from the start, since Apple ships a major iOS release every year that can change behavior in ways that are easy to miss until users start reporting issues. Building with deprecation warnings addressed promptly and testing against beta releases before public launch means an app stays stable through these transitions instead of breaking the week a new iOS version ships to your actual users without warning. This forward planning extends to hardware too, since each new iPhone generation introduces screen sizes, sensors, or chip capabilities that a well-built app should take advantage of rather than simply tolerate.",
      ],
    },
    whatsIncluded: {
      h2: "What iOS Development with Vertexa Includes",
      items: [
        {
          title: "Native App Development (Swift/SwiftUI)",
          description:
            "Full native iOS apps built in Swift and SwiftUI, architected for maintainability and performance from the start, not a quick build that becomes unmaintainable as features accumulate.",
        },
        {
          title: "Apple Ecosystem Integration",
          description:
            "ARKit, HealthKit, CarPlay, widgets, App Clips, and Apple Watch companion app development — the platform-specific capabilities that justify choosing native iOS development in the first place.",
        },
        {
          title: "App Store Submission & Optimization",
          description:
            "Submission handling including metadata, screenshots, and privacy disclosures, plus App Store optimization for discoverability — informed by the specific reasons apps get rejected or buried in search results.",
        },
        {
          title: "Backend & API Integration",
          description:
            "Integration with your backend services, authentication systems, and third-party APIs, built with proper error handling and offline behavior for the realities of intermittent mobile connectivity.",
        },
        {
          title: "In-App Purchases & Subscriptions",
          description:
            "StoreKit implementation for in-app purchases and subscriptions, built to Apple's specific requirements to avoid the common rejection reasons tied to commerce functionality.",
        },
        {
          title: "Performance Optimization & Profiling",
          description:
            "Memory and performance profiling using Instruments to catch leaks, slow renders, and battery drain issues before they reach production and show up in App Store reviews.",
        },
        {
          title: "Legacy App Modernization",
          description:
            "Migrating older UIKit/Objective-C codebases to modern Swift and SwiftUI incrementally, without requiring a full rewrite that puts feature development on hold for months.",
        },
      ],
    },
    process: {
      h2: "How We Build Native iOS Apps",
      steps: [
        {
          number: "01",
          title: "Discovery & Technical Planning",
          description:
            "We define the app's core functionality and identify which Apple-specific APIs and capabilities the project actually depends on, confirming native iOS is the right call before committing to it.",
        },
        {
          number: "02",
          title: "Design & Architecture",
          description:
            "We design the UI in SwiftUI-first architecture and plan the data and state management approach, since iOS app architecture decisions are expensive to reverse once development is underway.",
        },
        {
          number: "03",
          title: "Development & Device Testing",
          description:
            "Development happens with continuous testing across iPhone and iPad models and iOS versions in active use, not just the latest device and OS version.",
        },
        {
          number: "04",
          title: "App Store Submission & Launch",
          description:
            "We handle submission, respond to any review feedback, and monitor crash reports and user feedback closely in the weeks after launch.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for iOS Development",
      points: [
        {
          title: "Real Apple Ecosystem Expertise",
          description:
            "We've shipped apps using ARKit, HealthKit, and Apple Watch integration — the platform-specific work that's genuinely rare expertise, not just standard CRUD app development with an iOS wrapper applied on top of it as an afterthought.",
        },
        {
          title: "We Know Why Apps Get Rejected",
          description:
            "App Store review rejections are often avoidable with the right upfront knowledge — specific privacy disclosure requirements, UI guideline details, in-app purchase rules. We build to avoid common rejection reasons from day one.",
        },
        {
          title: "SwiftUI-First, Not Legacy UIKit by Default",
          description:
            "Some iOS shops still default to UIKit out of habit. We build SwiftUI-first for faster development and more maintainable code, using UIKit selectively only where it genuinely offers an advantage over what SwiftUI currently supports well.",
        },
        {
          title: "Performance Profiling as Standard Practice",
          description:
            "We profile every app with Instruments before launch, catching memory leaks and performance issues that would otherwise surface as bad App Store reviews after the fact, once they're far more expensive to fix.",
        },
      ],
    },
    techStack: {
      h2: "iOS Development Tools We Use",
      paragraph:
        "We build natively in Swift with SwiftUI as our default UI framework, using UIKit selectively where it offers specific advantages over SwiftUI's current capabilities. Development happens in Xcode with Instruments for performance profiling and memory debugging. We use TestFlight for beta distribution and App Store Connect for release management, submission, and analytics. For backend integration, we work with REST and GraphQL APIs and implement StoreKit directly for in-app purchases and subscriptions.",
      tools: [
        "Swift",
        "SwiftUI",
        "UIKit",
        "Xcode",
        "Instruments",
        "TestFlight",
        "App Store Connect",
        "StoreKit",
      ],
    },
    useCases: {
      h2: "Who We Build Native iOS Apps For",
      cases: [
        {
          title: "Apps Requiring Deep Apple Integration",
          description:
            "Products built around ARKit, HealthKit, CarPlay, or Apple Watch — functionality that cross-platform frameworks support poorly or not at all, making native development the only realistic option for this category of app.",
        },
        {
          title: "Performance-Critical Consumer Apps",
          description:
            "Consumer apps competing on speed and polish, where the performance ceiling of cross-platform frameworks becomes a genuine competitive disadvantage against native competitors.",
        },
        {
          title: "Enterprise & Internal iOS Tools",
          description:
            "Internal business apps deployed via enterprise distribution, often needing deep device integration (camera, NFC, biometrics) that benefits from native development's full API access.",
        },
      ],
    },
    faqs: [
      {
        question: "Should we build natively or use React Native/Flutter?",
        answer:
          "If your app depends heavily on Apple-specific APIs — ARKit, HealthKit, CarPlay — native is usually the right call. For most standard product apps without that dependency, cross-platform frameworks are often the more efficient and cost-effective choice.",
      },
      {
        question: "How long does a native iOS app take to build?",
        answer:
          "A focused MVP typically takes 8-12 weeks. Apps with complex Apple ecosystem integration or extensive features run 12-20 weeks. We'll give you a specific timeline after understanding your actual feature scope and requirements.",
      },
      {
        question: "Do you handle App Store submission and rejections?",
        answer:
          "Yes — submission is part of every project, and we build with Apple's guidelines in mind from the start to minimize rejection risk. If a rejection does happen, we handle the resubmission process directly with you informed throughout.",
      },
      {
        question: "Can you build an Apple Watch companion app alongside our iPhone app?",
        answer:
          "Yes, watchOS development is something we build alongside iOS apps when a companion experience makes sense for the product, sharing code and data models between the two where appropriate rather than duplicating logic across both targets.",
      },
      {
        question: "Will you use SwiftUI or the older UIKit framework?",
        answer:
          "SwiftUI by default, since it's faster to develop and more maintainable for most modern app UI. We use UIKit selectively for specific components where it currently offers a genuine advantage.",
      },
      {
        question: "Do you provide ongoing maintenance for iOS version updates?",
        answer:
          "Yes. Apple ships major iOS updates annually that can affect app behavior and compatibility, and most clients move to a maintenance retainer to handle these updates proactively rather than reactively.",
      },
    ],
    cta: {
      h2: "Have an iOS app that needs native expertise?",
      subhead:
        "Tell us what you're building — we'll tell you honestly whether native iOS is the right call or if a cross-platform approach would serve you just as well.",
    },
    relatedSubServices: [
      {
        slug: "android-app-development",
        parentSlug: "mobile-app-development",
        name: "Android App Development",
        shortDescription:
          "Native Android development when you need both platforms built natively.",
      },
      {
        slug: "cross-platform-development",
        parentSlug: "mobile-app-development",
        name: "Cross-Platform Development",
        shortDescription:
          "When sharing one codebase across iOS and Android makes more sense than native.",
      },
      {
        slug: "ui-ux-design",
        parentSlug: "branding-design",
        name: "UI/UX Design",
        shortDescription:
          "Interface design that respects Apple's Human Interface Guidelines from the start.",
      },
    ],
  },
  {
    slug: "android-app-development",
    parentSlug: "mobile-app-development",
    parentName: "Mobile App Development",
    parentLabel: "Mobile Apps",
    meta: {
      title: "Android App Development Services",
      description:
        "Native Android app development with Kotlin and Jetpack Compose — built and tested across the device fragmentation real Android users actually have.",
      keywords: [
        "Android app development services",
        "Android app developer",
        "Kotlin development",
        "Jetpack Compose development",
        "Android app development agency",
        "Google Play optimization",
        "native Android development",
        "Android enterprise apps",
      ],
    },
    hero: {
      eyebrow: "Android Development",
      h1: "Native Android Development Built for Real-World Devices",
      subheadline:
        "We build native Android apps in Kotlin and Jetpack Compose, tested across the genuine diversity of Android hardware and OS versions in active use — not just a flagship device in a controlled demo environment. If your app needs to perform reliably for users on a five-year-old budget phone as well as the newest flagship, that requires deliberate engineering most teams skip.",
    },
    overview: {
      h2: "Why Android Development Requires Different Discipline Than iOS",
      paragraphs: [
        "Android's open ecosystem is both its strength and its core development challenge: thousands of device models from dozens of manufacturers, running multiple OS versions simultaneously, with manufacturer-specific customizations layered on top of stock Android. An app that works flawlessly on a Pixel can behave differently on a Samsung device with its own UI layer, or struggle on the older, lower-spec devices that still make up a meaningful share of the active Android install base.",
        "Jetpack Compose has modernized Android UI development the way SwiftUI modernized iOS — declarative, more maintainable UI code with less boilerplate than the older View-based system. We build Compose-first for new development, while maintaining legacy View-based code when working within an existing codebase that hasn't migrated yet.",
        "Device and OS fragmentation testing isn't optional for Android the way it sometimes is for iOS's more controlled hardware ecosystem. We test across device tiers — flagship, mid-range, and budget — and across the OS versions Google's own data shows still have meaningful active usage, rather than assuming the latest Android version represents your actual user base.",
        "Google Play's review and policy requirements differ meaningfully from Apple's — different privacy disclosure formats, different content policy enforcement, different monetization rules. We build with Play Store policy in mind from the start, the same way we approach App Store guidelines for iOS, because the specific compliance requirements genuinely differ between platforms.",
        "Battery and memory efficiency matter more on Android than developers coming from iOS often expect, given the wider spread of hardware capability across the active device base. We profile against lower-spec devices specifically, not just flagship hardware, because an app that drains battery noticeably or feels sluggish on a budget device loses users in markets where that device tier represents real, meaningful market share.",
        "Manufacturer-specific customizations layered on top of stock Android — different notification handling, background process management, and UI conventions from Samsung, Xiaomi, and other manufacturers — add another layer of testing complexity that a purely stock-Android emulator setup won't surface, which is why physical device testing across multiple manufacturers remains part of our standard process rather than an optional extra step.",
        "We also keep an eye on Google's annual Android platform changes, since new permission models, background execution limits, and storage restrictions arrive every release and can quietly break functionality that worked fine the year before if nobody is specifically watching for them.",
      ],
    },
    whatsIncluded: {
      h2: "What Android Development with Vertexa Includes",
      items: [
        {
          title: "Native App Development (Kotlin/Jetpack Compose)",
          description:
            "Full native Android apps built in Kotlin with Jetpack Compose for modern, maintainable UI development, architected for the realities of Android's device and OS diversity.",
        },
        {
          title: "Device & OS Fragmentation Testing",
          description:
            "Testing across real device tiers and active OS versions, not just flagship devices and the latest Android release, catching the device-specific bugs that only show up on hardware most teams don't test against.",
        },
        {
          title: "Google Play Store Optimization",
          description:
            "Store listing optimization, policy compliance, and submission handling informed by Play Store's specific review criteria and the common reasons apps get flagged or rejected.",
        },
        {
          title: "Backend & API Integration",
          description:
            "Integration with your backend services and third-party APIs, built with the offline-first and intermittent-connectivity handling Android's diverse network conditions require.",
        },
        {
          title: "Material Design Implementation",
          description:
            "UI built to Google's Material Design guidelines where appropriate, balanced against your specific brand requirements rather than a generic Material Design template that looks like every other Android app.",
        },
        {
          title: "Performance Optimization Across Device Tiers",
          description:
            "Performance profiling and optimization specifically validated on lower-spec devices, since an app that performs well on a flagship can still feel sluggish on the budget devices many users carry.",
        },
        {
          title: "Enterprise & MDM Deployment",
          description:
            "Android apps deployed through Mobile Device Management (MDM) systems for enterprise use cases, with the specific security and deployment requirements internal business apps require.",
        },
      ],
    },
    process: {
      h2: "How We Build Native Android Apps",
      steps: [
        {
          number: "01",
          title: "Discovery & Device Strategy",
          description:
            "We define core functionality and identify the device tiers and OS versions your actual or target user base uses, planning testing strategy around real usage data rather than assumptions.",
        },
        {
          number: "02",
          title: "Design & Architecture",
          description:
            "We design the UI in Jetpack Compose and plan the architecture for maintainability across Android's diverse hardware, since retrofitting device compatibility later is far more expensive.",
        },
        {
          number: "03",
          title: "Development & Multi-Device Testing",
          description:
            "Development includes continuous testing across a representative spread of device tiers and OS versions, catching fragmentation-specific bugs throughout rather than discovering them at the end.",
        },
        {
          number: "04",
          title: "Play Store Submission & Launch",
          description:
            "We handle Play Store submission and policy compliance, then monitor crash reports and performance data closely across device types in the weeks after launch.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Android Development",
      points: [
        {
          title: "We Actually Test Across Device Tiers",
          description:
            "Many Android builds get tested primarily on flagship devices and ship with undiscovered bugs on the budget and mid-range devices a large share of real users carry. We test deliberately across tiers, using real hardware rather than relying solely on emulators that don't always reproduce real-world quirks.",
        },
        {
          title: "Kotlin & Compose, Not Legacy Java/View Habits",
          description:
            "We build with modern Kotlin and Jetpack Compose by default, which means faster development and more maintainable code than teams still defaulting to older Java-based, View-system development patterns.",
        },
        {
          title: "We Understand Play Store Policy Specifically",
          description:
            "Google Play's review and policy requirements differ from Apple's in specific, important ways. We build with Play Store's actual compliance requirements in mind, not a generic mobile compliance checklist.",
        },
        {
          title: "Enterprise Android Experience",
          description:
            "Beyond consumer apps, we have real experience with enterprise Android deployment through MDM systems — a different discipline than typical consumer app development that many agencies haven't actually done before, with its own deployment and security requirements.",
        },
      ],
    },
    techStack: {
      h2: "Android Development Tools We Use",
      paragraph:
        "We build natively in Kotlin with Jetpack Compose as our default UI framework for new development, maintaining View-based UI code when working within existing codebases that haven't migrated. Development happens in Android Studio, with the Android Profiler for performance and memory analysis across device tiers. We use the Google Play Console for release management, staged rollouts, and crash reporting, and integrate with REST and GraphQL APIs for backend connectivity.",
      tools: [
        "Kotlin",
        "Jetpack Compose",
        "Android Studio",
        "Android Profiler",
        "Google Play Console",
        "Material Design",
        "REST & GraphQL APIs",
      ],
    },
    useCases: {
      h2: "Who We Build Native Android Apps For",
      cases: [
        {
          title: "Apps Needing Broad Device Reach",
          description:
            "Products targeting markets with significant budget and mid-range device usage, where genuine cross-device performance testing matters more than chasing the newest flagship features.",
        },
        {
          title: "Enterprise & Internal Business Apps",
          description:
            "Businesses deploying internal tools via MDM, needing the security, device management, and deployment controls enterprise Android development requires beyond consumer app standards.",
        },
        {
          title: "Apps Requiring Deep Android Integration",
          description:
            "Products depending on Android-specific capabilities — widgets, background services, specific hardware integrations — that benefit from native development's full platform access.",
        },
      ],
    },
    faqs: [
      {
        question: "How do you handle Android's device fragmentation?",
        answer:
          "We test deliberately across device tiers — flagship, mid-range, and budget — and across the OS versions with meaningful active usage, using real device testing rather than assuming emulators catch every issue your actual users will run into.",
      },
      {
        question: "Should we build with Jetpack Compose or the older View system?",
        answer:
          "Compose for new development, generally — it's faster to build and maintain. For existing apps with significant View-based code, we'll assess whether a full migration or incremental adoption makes more sense for your timeline.",
      },
      {
        question: "How long does a native Android app take to build?",
        answer:
          "A focused MVP typically takes 8-12 weeks, similar to iOS timelines. Apps requiring extensive device-tier testing or enterprise deployment features can run longer. We'll give you a specific timeline after scoping.",
      },
      {
        question: "Do you handle Google Play Store policy compliance?",
        answer:
          "Yes — Play Store policy compliance, including the specific privacy disclosure and content policy requirements, is built into the development process, not handled as a last-minute afterthought before submission.",
      },
      {
        question: "Can you build for both phones and tablets?",
        answer:
          "Yes, we design responsive layouts that adapt across Android's range of screen sizes, including tablets and foldable devices, rather than a phone-only layout that breaks on larger screens.",
      },
      {
        question: "Do you support enterprise deployment through MDM systems?",
        answer:
          "Yes, we have experience deploying Android apps through enterprise MDM systems, with the specific security, distribution, and device management requirements that internal business apps need.",
      },
    ],
    cta: {
      h2: "Have an Android app that needs to work everywhere?",
      subhead:
        "Tell us about your target users and devices — we'll build and test for the actual diversity of hardware your users carry, not just the newest flagship phone.",
    },
    relatedSubServices: [
      {
        slug: "ios-app-development",
        parentSlug: "mobile-app-development",
        name: "iOS App Development",
        shortDescription:
          "Native iOS development when you need both platforms built natively.",
      },
      {
        slug: "cross-platform-development",
        parentSlug: "mobile-app-development",
        name: "Cross-Platform Development",
        shortDescription:
          "When sharing one codebase across iOS and Android makes more sense than native.",
      },
      {
        slug: "local-seo",
        parentSlug: "seo",
        name: "Local SEO",
        shortDescription:
          "Discoverability strategy for apps with a local or regional user base.",
      },
    ],
  },
  {
    slug: "react-native-development",
    parentSlug: "mobile-app-development",
    parentName: "Mobile App Development",
    parentLabel: "Mobile Apps",
    meta: {
      title: "React Native Development Services",
      description:
        "React Native app development — one codebase shipping to iOS and Android, ideal for teams already working in React or JavaScript.",
      keywords: [
        "React Native development services",
        "React Native developer",
        "React Native app development agency",
        "cross-platform app development",
        "React Native vs Flutter",
        "React Native Expo development",
        "JavaScript mobile development",
        "React Native MVP",
      ],
    },
    hero: {
      eyebrow: "React Native Development",
      h1: "React Native Development for Teams Who Live in React",
      subheadline:
        "We build cross-platform mobile apps in React Native — a single codebase shipping to iOS and Android simultaneously, with the added advantage of sharing logic and even components with a React-based web product when your team already works in JavaScript or TypeScript. It's usually the fastest path from idea to a genuinely native-feeling app on both platforms.",
    },
    overview: {
      h2: "Why React Native Fits Teams Already Working in React",
      paragraphs: [
        "React Native's biggest practical advantage isn't just cross-platform code sharing — it's that teams already building in React or TypeScript can apply existing skills and patterns directly to mobile development, rather than hiring entirely separate iOS and Android teams with different languages and mental models. For a company with a React-based web product, that overlap in skills and sometimes even shared business logic is a genuine efficiency gain, not just a marketing claim.",
        "The framework has matured significantly — the New Architecture (Fabric and TurboModules) has closed much of the performance gap with native development for most app categories, and the ecosystem of native module integrations means React Native can access platform-specific APIs when genuinely needed, rather than being limited to lowest-common-denominator functionality.",
        "Expo has become the default starting point for most React Native projects, handling much of the build tooling, OTA updates, and native module management that used to require deep native development knowledge to configure correctly. We use Expo where it fits and eject to bare React Native when a project's specific native requirements exceed what Expo's managed workflow supports.",
        "React Native isn't the right call for every app — performance-critical games, apps with extremely heavy native API dependencies, or apps requiring pixel-perfect platform-specific UI on both iOS and Android sometimes fit native development better. We'll tell you honestly when that's the case rather than defaulting to React Native because it's faster for us to build.",
        "Upgrading React Native versions over time is its own discipline worth planning for upfront, since the framework and its ecosystem of native modules move faster than most teams expect, and falling multiple versions behind makes any eventual upgrade significantly more painful. We build with a realistic upgrade cadence in mind rather than treating version updates as something to defer indefinitely until they become unavoidable and far more disruptive than staying current would have been.",
        "We also keep a close eye on which third-party native modules a project depends on, since an unmaintained module can quietly become a liability years into a product's life. Favoring well-supported, actively maintained packages over the newest or most feature-rich option is a deliberate tradeoff we make on every project.",
      ],
    },
    whatsIncluded: {
      h2: "What React Native Development with Vertexa Includes",
      items: [
        {
          title: "Cross-Platform App Development",
          description:
            "Full mobile apps built once in React Native and shipped to both iOS and Android, architected to share the maximum amount of code while accommodating genuine platform-specific UI differences where they matter.",
        },
        {
          title: "Expo & Bare Workflow Development",
          description:
            "Development using Expo's managed workflow when it fits the project's needs, or bare React Native when specific native module requirements exceed what Expo's managed environment supports.",
        },
        {
          title: "Native Module Integration",
          description:
            "Custom native module development in Swift/Kotlin when a project needs platform-specific functionality React Native's JavaScript layer can't access directly, bridged cleanly into the codebase.",
        },
        {
          title: "Code Sharing with Web Products",
          description:
            "Architecture that shares business logic, API clients, and sometimes UI components between a React Native mobile app and a React-based web product, when your company maintains both.",
        },
        {
          title: "Performance Optimization",
          description:
            "Profiling and optimization addressing React Native's specific performance characteristics — bridge communication overhead, list rendering at scale, and animation performance — using the New Architecture where it helps.",
        },
        {
          title: "App Store & Play Store Submission",
          description:
            "Submission handling for both platforms, including the platform-specific requirements that differ even when the underlying codebase is shared.",
        },
        {
          title: "Migration from Native or Other Frameworks",
          description:
            "Migrating an existing native iOS/Android app pair, or an app built in another cross-platform framework, to a unified React Native codebase.",
        },
      ],
    },
    process: {
      h2: "How We Build with React Native",
      steps: [
        {
          number: "01",
          title: "Discovery & Architecture Planning",
          description:
            "We define app requirements and assess whether React Native genuinely fits — including whether Expo's managed workflow covers your needs or bare React Native is necessary.",
        },
        {
          number: "02",
          title: "Component & Code-Sharing Design",
          description:
            "We design the component architecture to maximize code sharing across platforms while planning explicitly for the platform-specific UI differences that genuinely matter for native feel.",
        },
        {
          number: "03",
          title: "Development & Cross-Platform Testing",
          description:
            "Development includes continuous testing on both iOS and Android throughout, catching platform-specific rendering and behavior differences as they're introduced, not at the end.",
        },
        {
          number: "04",
          title: "Submission & Launch",
          description:
            "We handle submission to both the App Store and Play Store, accounting for each platform's specific requirements, then monitor performance and crash data across both platforms post-launch.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for React Native Development",
      points: [
        {
          title: "We Know When React Native Isn't the Answer",
          description:
            "Some agencies build everything in React Native regardless of fit. We'll tell you honestly when a project's requirements genuinely call for native development instead, rather than stretch React Native into a use case it doesn't serve well just to keep the project on a stack we know.",
        },
        {
          title: "Real Native Module Experience",
          description:
            "When a project needs platform-specific functionality beyond React Native's JavaScript layer, we write the native bridge code directly rather than searching for a community package that may be unmaintained.",
        },
        {
          title: "Code Sharing That Actually Gets Used",
          description:
            "For companies with both a React web product and a React Native app, we architect genuine code sharing — not just the same language, but actually shared business logic and API layers.",
        },
        {
          title: "New Architecture Expertise",
          description:
            "We build with React Native's New Architecture (Fabric and TurboModules) where it benefits the project, understanding the real performance tradeoffs rather than treating it as an automatic checkbox to tick on every build.",
        },
      ],
    },
    techStack: {
      h2: "React Native Technologies We Use",
      paragraph:
        "We build with React Native and TypeScript as our default stack, using Expo's managed workflow for most projects and ejecting to bare React Native when specific native module requirements demand it. For navigation, we use React Navigation, and for state management, we choose based on project complexity — from React Context for simpler apps to dedicated state libraries for complex ones. We integrate native modules in Swift and Kotlin when platform-specific functionality requires it, and use Fastlane for build automation and store submission.",
      tools: [
        "React Native",
        "TypeScript",
        "Expo",
        "React Navigation",
        "Fastlane",
        "Swift & Kotlin (native modules)",
      ],
    },
    useCases: {
      h2: "Who React Native Fits Best",
      cases: [
        {
          title: "Teams Already Building in React",
          description:
            "Companies with an existing React or TypeScript team who want to apply existing skills to mobile development rather than build out separate native iOS and Android teams.",
        },
        {
          title: "Startups Needing Fast, Cross-Platform MVPs",
          description:
            "Early-stage companies needing to validate a product on both iOS and Android quickly, without the cost of building and maintaining two separate native codebases before product-market fit.",
        },
        {
          title: "Products with a Companion Web App",
          description:
            "Companies maintaining both a React web product and a mobile app, who benefit from sharing business logic and reducing the maintenance burden of fully separate codebases.",
        },
      ],
    },
    faqs: [
      {
        question: "Is React Native as good as native development now?",
        answer:
          "For most standard product apps, React Native with the New Architecture performs very close to native. For apps with extremely heavy native API dependencies or intensive graphics, native development can still be the better fit for your specific use case.",
      },
      {
        question: "Should we use Expo or bare React Native?",
        answer:
          "Expo's managed workflow covers most app requirements efficiently and is our default starting point. We move to bare React Native when a project needs specific native modules Expo's managed environment doesn't currently support well.",
      },
      {
        question: "Can React Native apps access native device features?",
        answer:
          "Yes, through React Native's native module system and a large ecosystem of community and custom modules. For anything not already supported, we write custom native bridge code in Swift and Kotlin.",
      },
      {
        question: "How long does a React Native app take to build?",
        answer:
          "A focused MVP typically takes 8-12 weeks for both platforms simultaneously — often faster than building two separate native apps, since most of the codebase is shared between iOS and Android.",
      },
      {
        question: "Can you share code between our React web app and a new mobile app?",
        answer:
          "Yes, this is one of React Native's genuine advantages for teams with an existing React web product. We architect shared business logic, API clients, and sometimes UI components between the two.",
      },
      {
        question: "What happens if we need a feature React Native can't support?",
        answer:
          "We write a custom native module bridging the specific native API into your React Native app. This is less common than it used to be given the maturity of the ecosystem.",
      },
    ],
    cta: {
      h2: "Have a product idea that needs to ship on both platforms fast?",
      subhead:
        "Tell us about your team and timeline — React Native is often the fastest path to a genuinely native-feeling app on iOS and Android simultaneously.",
    },
    relatedSubServices: [
      {
        slug: "flutter-app-development",
        parentSlug: "mobile-app-development",
        name: "Flutter Development",
        shortDescription:
          "When custom UI consistency matters more than sharing code with a React team.",
      },
      {
        slug: "cross-platform-development",
        parentSlug: "mobile-app-development",
        name: "Cross-Platform Development",
        shortDescription:
          "An honest framework comparison if you're not sure React Native is the right fit.",
      },
      {
        slug: "nextjs",
        parentSlug: "web-development",
        name: "Next.js Development",
        shortDescription:
          "The web framework that pairs most naturally with a React Native code-sharing strategy.",
      },
    ],
  },
  {
    slug: "flutter-app-development",
    parentSlug: "mobile-app-development",
    parentName: "Mobile App Development",
    parentLabel: "Mobile Apps",
    meta: {
      title: "Flutter App Development Services",
      description:
        "Flutter app development — one Dart codebase rendering custom, pixel-perfect UI natively on iOS and Android with consistent performance.",
      keywords: [
        "Flutter app development services",
        "Flutter developer",
        "Flutter app development agency",
        "Dart development",
        "Flutter vs React Native",
        "Flutter custom UI",
        "cross-platform app development",
        "Flutter MVP development",
      ],
    },
    hero: {
      eyebrow: "Flutter Development",
      h1: "Flutter Development for Apps That Need Custom, Consistent UI",
      subheadline:
        "We build cross-platform apps in Flutter when custom UI, consistent rendering across platforms, and animation performance matter more than sharing an ecosystem with an existing JavaScript team. Flutter renders its own UI directly to the screen rather than relying on platform-native components, which gives us pixel-perfect consistency between iOS and Android that other cross-platform approaches can struggle to match.",
    },
    overview: {
      h2: "Why Flutter Wins on Custom UI and Rendering Consistency",
      paragraphs: [
        "Flutter takes a fundamentally different approach to cross-platform development than React Native — rather than bridging to native platform UI components, Flutter renders its own widgets directly using its own rendering engine. The practical result is genuinely identical UI and animation behavior across iOS and Android, which matters enormously for apps where custom, brand-specific design is a core product requirement rather than a nice-to-have.",
        "Performance for animation-heavy and custom-UI apps tends to be a Flutter strength, since the framework isn't bridging through a JavaScript layer to native components the way React Native does. For apps with complex custom animations, data visualizations, or design systems that need to look and behave identically regardless of platform, this rendering approach is a genuine technical advantage.",
        "Dart, Flutter's language, has a learning curve for teams coming from JavaScript or Swift/Kotlin backgrounds, but it's a deliberately approachable language designed for UI development, and most experienced mobile developers become productive in it within weeks rather than months. We don't treat Dart as a barrier — the language tradeoff is usually worth it for the UI consistency and performance benefits Flutter delivers.",
        "Flutter isn't the right call when an app needs maximum code sharing with an existing JavaScript/React team, or when extremely deep platform-specific integration matters more than UI consistency. We're upfront about that tradeoff rather than defaulting to whichever cross-platform framework we happen to be building in that week.",
        "App size is a genuine tradeoff worth knowing about upfront — Flutter apps tend to ship with a larger baseline binary size than an equivalent native or React Native app, since the framework bundles its own rendering engine rather than relying on the platform's existing UI components. For most product categories this isn't a meaningful problem, but for markets where users are sensitive to install size on constrained connections, it's a factor we discuss honestly during scoping.",
        "Web and desktop targets are also available through Flutter beyond just iOS and Android, and we'll factor that into the architecture decision when a client has a genuine need to extend the same codebase to additional platforms later, rather than treating mobile as the only target Flutter is good for, even though that's where most of our Flutter work actually ships today.",
        "Testing strategy for Flutter apps benefits from the framework's built-in widget testing tools, which let us validate UI behavior without needing a full device or simulator for every test run. We use this alongside integration testing on real devices, since widget tests alone can't catch every platform-specific quirk that only shows up on actual hardware.",
      ],
    },
    whatsIncluded: {
      h2: "What Flutter Development with Vertexa Includes",
      items: [
        {
          title: "Custom UI & Animation Development",
          description:
            "Pixel-perfect, custom-designed interfaces and complex animations built to render identically across iOS and Android, leveraging Flutter's own rendering engine rather than platform-native UI bridging.",
        },
        {
          title: "Cross-Platform App Development",
          description:
            "Full apps built once in Flutter and Dart, shipping to both iOS and Android from a single codebase, architected for the platform-specific behaviors that still genuinely matter even within a consistent UI approach.",
        },
        {
          title: "State Management Architecture",
          description:
            "Scalable state management implementation — using Riverpod, Bloc, or another pattern matched to your app's actual complexity, not a default choice applied regardless of project needs.",
        },
        {
          title: "Native Platform Integration",
          description:
            "Platform channel implementation for accessing native iOS and Android APIs that Flutter's core framework doesn't cover directly, bridged cleanly through Dart's platform channel system.",
        },
        {
          title: "Performance Optimization",
          description:
            "Profiling and optimization specific to Flutter's rendering pipeline, addressing widget rebuild efficiency and frame rendering performance for smooth animation and scrolling.",
        },
        {
          title: "App Store & Play Store Submission",
          description:
            "Submission handling for both platforms, accounting for platform-specific requirements even within a shared Flutter codebase.",
        },
        {
          title: "Migration from Native or Other Frameworks",
          description:
            "Migrating from separate native iOS/Android codebases, or from another cross-platform framework, to a unified Flutter codebase when consistent UI becomes a priority.",
        },
      ],
    },
    process: {
      h2: "How We Build with Flutter",
      steps: [
        {
          number: "01",
          title: "Discovery & UI Requirements",
          description:
            "We assess whether Flutter's strengths — custom UI consistency, animation performance — genuinely fit your project's priorities before committing to it over alternative approaches.",
        },
        {
          number: "02",
          title: "Widget & State Architecture",
          description:
            "We design the widget tree and state management approach together, since Flutter's architecture decisions around state significantly affect app performance and maintainability long-term.",
        },
        {
          number: "03",
          title: "Development & Cross-Platform Testing",
          description:
            "Development includes continuous testing on both iOS and Android, validating that the custom UI and animations perform consistently across both platforms as intended.",
        },
        {
          number: "04",
          title: "Submission & Launch",
          description:
            "We handle submission to both app stores and monitor performance metrics post-launch, since Flutter's rendering performance benefits still need validation against real device conditions.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Flutter Development",
      points: [
        {
          title: "We Choose Flutter When It's Actually the Right Fit",
          description:
            "We don't default to Flutter for every cross-platform project. When an app needs maximum code sharing with an existing React team instead, we'll recommend React Native — the choice follows your actual requirements, not which framework we'd rather build in.",
        },
        {
          title: "Real Custom Animation Experience",
          description:
            "Flutter's value proposition is strongest for apps with genuinely custom, complex UI and animation — we've built that kind of work, not just standard CRUD app interfaces that don't take advantage of what Flutter does well.",
        },
        {
          title: "Thoughtful State Management Architecture",
          description:
            "Flutter app quality depends heavily on getting state management architecture right early. We choose the approach — Riverpod, Bloc, or another pattern — based on your app's actual complexity, not habit.",
        },
        {
          title: "Native Platform Channel Expertise",
          description:
            "When a project needs native functionality beyond Flutter's core framework, we implement platform channels correctly rather than reaching for an unmaintained community package as a shortcut that breaks on the next Flutter upgrade.",
        },
      ],
    },
    techStack: {
      h2: "Flutter Technologies We Use",
      paragraph:
        "We build in Dart with Flutter's widget framework, choosing state management architecture — Riverpod, Bloc, or Provider — based on the specific app's complexity rather than a fixed default. Development happens in Android Studio or VS Code with Flutter's DevTools for performance profiling and widget inspection. We implement platform channels in Swift and Kotlin when native functionality beyond Flutter's core capabilities is required, and use Fastlane for build automation and store submission across both platforms.",
      tools: [
        "Dart",
        "Flutter",
        "Riverpod/Bloc",
        "Flutter DevTools",
        "Platform Channels",
        "Fastlane",
      ],
    },
    useCases: {
      h2: "Who Flutter Fits Best",
      cases: [
        {
          title: "Brands Needing Pixel-Perfect Custom UI",
          description:
            "Products where custom, brand-specific design and consistent cross-platform rendering are core requirements, not a nice-to-have — design-forward consumer apps and brand-critical experiences.",
        },
        {
          title: "Apps with Complex Animations & Visualizations",
          description:
            "Products with data visualization, complex animations, or custom interaction patterns that benefit from Flutter's rendering performance advantages over bridge-based cross-platform approaches.",
        },
        {
          title: "Teams Without an Existing JavaScript Codebase",
          description:
            "Companies without an existing React web product to share code with, who can evaluate Flutter purely on its cross-platform development merits.",
        },
      ],
    },
    faqs: [
      {
        question: "Flutter or React Native — which should we choose?",
        answer:
          "If you have an existing React/JavaScript team or web product to share code with, React Native often makes more sense. If custom UI consistency and animation performance are top priorities, Flutter is often the stronger choice.",
      },
      {
        question: "Is Dart hard to learn for our development team?",
        answer:
          "Dart has a real but manageable learning curve. Developers experienced in other typed languages typically become productive within a few weeks. We don't consider it a significant barrier given Flutter's other advantages.",
      },
      {
        question: "Does Flutter feel truly native, or does it feel like a web app?",
        answer:
          "Flutter renders its own UI rather than using platform-native components, but when built well, the result feels genuinely native in performance and responsiveness — the rendering approach is different, but the experience isn't compromised.",
      },
      {
        question: "How long does a Flutter app take to build?",
        answer:
          "A focused MVP typically takes 8-12 weeks for both platforms simultaneously, similar to other cross-platform timelines. Apps with extensive custom animation work may take somewhat longer.",
      },
      {
        question: "Can Flutter access native device features like camera and biometrics?",
        answer:
          "Yes, through Flutter's plugin ecosystem and custom platform channel implementation when needed. Most common native features have mature plugin support.",
      },
      {
        question: "Can you migrate our existing app to Flutter?",
        answer:
          "Yes — from separate native codebases or another cross-platform framework. We assess your existing app's complexity and plan a migration that captures Flutter's UI consistency benefits.",
      },
    ],
    cta: {
      h2: "Need an app with genuinely consistent, custom UI?",
      subhead:
        "Tell us about your design requirements — if pixel-perfect cross-platform consistency matters to your product, Flutter is probably the right conversation to have.",
    },
    relatedSubServices: [
      {
        slug: "react-native-development",
        parentSlug: "mobile-app-development",
        name: "React Native Development",
        shortDescription:
          "When sharing code with an existing React team matters more than rendering consistency.",
      },
      {
        slug: "ui-ux-design",
        parentSlug: "branding-design",
        name: "UI/UX Design",
        shortDescription:
          "The custom interface design work Flutter is built to render pixel-perfectly.",
      },
      {
        slug: "design-systems",
        parentSlug: "branding-design",
        name: "Design Systems",
        shortDescription:
          "Component libraries that translate directly into Flutter's widget architecture.",
      },
    ],
  },
  {
    slug: "cross-platform-development",
    parentSlug: "mobile-app-development",
    parentName: "Mobile App Development",
    parentLabel: "Mobile Apps",
    meta: {
      title: "Cross-Platform App Development Services",
      description:
        "Cross-platform app development — React Native, Flutter, or the right framework for your team, chosen based on your actual requirements.",
      keywords: [
        "cross-platform app development",
        "cross-platform development agency",
        "React Native vs Flutter",
        "cross-platform mobile development",
        "one codebase iOS Android",
        "mobile framework selection",
        "cross-platform MVP development",
        "multi-platform app development",
      ],
    },
    hero: {
      eyebrow: "Cross-Platform Development",
      h1: "Cross-Platform Development, Without the Framework Bias",
      subheadline:
        "We help you decide between React Native, Flutter, and other cross-platform approaches based on your team's skills, your app's UI requirements, and your actual native integration needs — then build it. Most cross-platform development agencies specialize in one framework and fit every client into it; we work across the major options and recommend honestly.",
    },
    overview: {
      h2: "Why the Framework Decision Deserves More Thought Than It Usually Gets",
      paragraphs: [
        "Most companies choose a cross-platform framework based on which agency they happened to call first, or which framework has the loudest community buzz that year — not based on a genuine assessment of their team's existing skills, their app's UI and performance requirements, and their native integration needs. That's a consequential decision made too casually, since switching frameworks mid-project is expensive and rare.",
        "React Native makes the most sense when your team already works in React or JavaScript, when you have a web product to share code with, or when the broader ecosystem and community size matters for finding talent and packages. Flutter makes more sense when custom, pixel-perfect UI consistency across platforms and animation performance are top priorities, independent of any existing JavaScript investment.",
        "Beyond these two dominant options, there are real edge cases worth considering: Progressive Web Apps (PWAs) when app store distribution isn't actually required and web technology covers your needs; native development when platform-specific integration genuinely outweighs the efficiency of a shared codebase. We assess all of these honestly rather than starting from 'which framework are we pitching today.'",
        "Whatever framework fits best, the actual execution quality matters more than the framework choice in determining whether an app succeeds. A well-built React Native app will outperform a poorly built Flutter app, and vice versa — framework selection is an important early decision, but it's not a substitute for disciplined architecture, testing, and performance work throughout the build.",
        "We also factor in long-term maintainability when making this recommendation, not just initial development speed — a framework with a smaller hiring pool or a less active community can leave you stuck if we're not involved long-term and you need to bring in a different team later. We weigh this practical consideration alongside the more commonly discussed technical tradeoffs, since a technically ideal framework choice that nobody else can hire for creates its own kind of risk.",
        "For companies genuinely uncertain whether cross-platform is the right call at all, we're comfortable saying so directly rather than steering every conversation toward a framework recommendation. Sometimes the more honest answer is that the project's requirements are specific enough that two separate native teams, working from a shared design system and API, will actually serve the product better long-term than any single cross-platform codebase could.",
        "We revisit this assessment periodically for longer engagements too, since a framework decision that made sense at launch can shift as a product's requirements evolve — a feature that was once a nice-to-have can become core to the experience in a way that changes the calculus entirely.",
      ],
    },
    whatsIncluded: {
      h2: "What Cross-Platform Development with Vertexa Includes",
      items: [
        {
          title: "Framework Selection & Strategy",
          description:
            "An honest assessment of React Native, Flutter, and alternative approaches based on your team, app requirements, and constraints — delivered before any development begins, so the foundation decision is made deliberately.",
        },
        {
          title: "React Native Development",
          description:
            "Full React Native app development when that's the right fit — see our dedicated React Native service for the platform-specific details of that work.",
        },
        {
          title: "Flutter Development",
          description:
            "Full Flutter app development when custom UI consistency is the priority — see our dedicated Flutter service for the platform-specific details of that work.",
        },
        {
          title: "Progressive Web App (PWA) Development",
          description:
            "Web-based app experiences with offline support and installability, when app store distribution isn't strictly required and web technology genuinely covers your use case efficiently.",
        },
        {
          title: "Code Sharing Strategy",
          description:
            "Architecture planning for sharing business logic, design systems, or even UI code between web and mobile products, regardless of which mobile framework you choose.",
        },
        {
          title: "Framework Migration",
          description:
            "Migrating between cross-platform frameworks, or from native to cross-platform, when an earlier framework choice has stopped serving the product's actual needs.",
        },
        {
          title: "Multi-Platform Testing Strategy",
          description:
            "Testing infrastructure and processes ensuring consistent quality across iOS and Android regardless of framework, catching platform-specific issues throughout development.",
        },
      ],
    },
    process: {
      h2: "How We Approach Cross-Platform Development",
      steps: [
        {
          number: "01",
          title: "Requirements & Team Assessment",
          description:
            "We assess your team's existing skills, app UI requirements, native integration needs, and timeline before recommending a framework — the foundation decision that shapes the entire project.",
        },
        {
          number: "02",
          title: "Framework Selection & Architecture",
          description:
            "We commit to a framework based on that assessment and design the technical architecture, planning explicitly for the platform-specific considerations that framework requires.",
        },
        {
          number: "03",
          title: "Development & Cross-Platform Testing",
          description:
            "Development proceeds with continuous testing across iOS and Android, regardless of which framework we've chosen, catching platform-specific issues throughout.",
        },
        {
          number: "04",
          title: "Launch & Performance Monitoring",
          description:
            "We handle submission to both stores and monitor performance and crash data closely post-launch, validating the framework choice held up under real usage.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Cross-Platform Strategy",
      points: [
        {
          title: "We're Not Locked Into One Framework",
          description:
            "Most cross-platform agencies specialize in React Native or Flutter exclusively and fit every client into their specialty. We work across both, which means our recommendation reflects your needs, not our limitations or whichever stack we happen to staff most easily.",
        },
        {
          title: "Honest About When Cross-Platform Isn't the Answer",
          description:
            "Sometimes native development or even a PWA genuinely serves a project better than React Native or Flutter. We'll tell you when that's the case rather than push a cross-platform build regardless of fit.",
        },
        {
          title: "Framework Decisions Based on Your Team, Not Trends",
          description:
            "We weigh your existing team's skills and your app's specific UI and integration requirements — not which framework has the most buzz in developer communities that particular year.",
        },
        {
          title: "Execution Quality Over Framework Hype",
          description:
            "We know the framework choice matters less than disciplined execution. Whichever framework fits your project, the architecture, testing, and performance discipline we apply is the same, because that's what actually determines whether the app holds up.",
        },
      ],
    },
    techStack: {
      h2: "Cross-Platform Technologies We Work With",
      paragraph:
        "Our cross-platform development capability spans React Native with TypeScript and Expo, Flutter with Dart, and Progressive Web App development using modern web standards for offline support and installability. We choose between these based on a genuine requirements assessment rather than defaulting to one. For code sharing strategies, we architect shared business logic and API layers using TypeScript across React-based web and mobile products, or platform-appropriate sharing patterns for other technology combinations.",
      tools: [
        "React Native",
        "Flutter",
        "TypeScript",
        "Dart",
        "Progressive Web Apps (PWA)",
        "Expo",
      ],
    },
    useCases: {
      h2: "Who Needs a Cross-Platform Strategy Conversation",
      cases: [
        {
          title: "Companies Unsure Which Framework Fits",
          description:
            "Teams who know they need a cross-platform approach but haven't decided between React Native, Flutter, or another option, and want an honest assessment before committing.",
        },
        {
          title: "Companies with Mixed Technical Backgrounds",
          description:
            "Organizations where the existing team's skills don't clearly point to one framework, needing a structured decision process weighing the real tradeoffs.",
        },
        {
          title: "Companies Considering a Framework Switch",
          description:
            "Businesses whose current cross-platform framework has stopped serving their needs well, needing an honest assessment of whether migration is worth the cost.",
        },
      ],
    },
    faqs: [
      {
        question: "Do you have a default framework you recommend to everyone?",
        answer:
          "No. We assess each project's team, requirements, and constraints individually. We've recommended React Native, Flutter, and even native development or PWAs depending on what genuinely fits the situation, not a default answer we apply to everyone.",
      },
      {
        question: "How long does framework selection take before development starts?",
        answer:
          "Typically 1-2 weeks for a thorough assessment, including discussions with your team about existing skills and constraints. This upfront time is far cheaper than discovering the wrong framework choice mid-project and having to start over.",
      },
      {
        question: "Can you help us decide if we should go cross-platform at all, versus native?",
        answer:
          "Yes — that's part of the same assessment. If your app's requirements genuinely favor native development over any cross-platform option, we'll tell you, even though it means a different scope of work for us.",
      },
      {
        question: "What if we've already started with one framework and it's not working?",
        answer:
          "We can assess the existing codebase and your specific pain points to determine whether the issues are framework-inherent or implementation-specific, then recommend whether migration or remediation makes more sense.",
      },
      {
        question: "Is it cheaper to build cross-platform than native for both platforms?",
        answer:
          "Usually, yes, since you're maintaining one codebase instead of two. The savings vary based on how much platform-specific work your app still requires regardless of framework choice.",
      },
      {
        question: "Do you charge extra for the framework selection assessment?",
        answer:
          "It's typically included as the discovery phase of any cross-platform project, not billed as a separate service, since it directly informs the project scope and timeline we propose.",
      },
    ],
    cta: {
      h2: "Not sure which framework fits your app?",
      subhead:
        "Tell us about your team and your product requirements — we'll give you an honest recommendation before you commit to a framework and a development partner.",
    },
    relatedSubServices: [
      {
        slug: "react-native-development",
        parentSlug: "mobile-app-development",
        name: "React Native Development",
        shortDescription:
          "The cross-platform framework we recommend most often for React-based teams.",
      },
      {
        slug: "flutter-app-development",
        parentSlug: "mobile-app-development",
        name: "Flutter Development",
        shortDescription:
          "The cross-platform framework we recommend when custom UI consistency leads.",
      },
      {
        slug: "ios-app-development",
        parentSlug: "mobile-app-development",
        name: "iOS App Development",
        shortDescription:
          "Native development for when cross-platform genuinely isn't the right fit.",
      },
    ],
  },
  {
    slug: "technical-seo",
    parentSlug: "seo",
    parentName: "SEO Services",
    parentLabel: "SEO",
    meta: {
      title: "Technical SEO Services",
      description:
        "Technical SEO audits and fixes — crawlability, indexation, Core Web Vitals, and structured data that remove the barriers capping your rankings.",
      keywords: [
        "technical SEO services",
        "technical SEO audit",
        "Core Web Vitals optimization",
        "crawlability audit",
        "structured data implementation",
        "site architecture SEO",
        "indexation issues",
        "technical SEO agency",
      ],
    },
    hero: {
      eyebrow: "Technical SEO",
      h1: "Technical SEO That Removes What's Actually Capping Your Rankings",
      subheadline:
        "We audit and fix the technical foundation search engines depend on to crawl, index, and rank your site — crawlability, site architecture, Core Web Vitals, and structured data. No amount of content or link building fixes a site Google can't properly crawl in the first place, which is why technical SEO is where we start, not where we get to eventually.",
    },
    overview: {
      h2: "Why Technical SEO Is the Foundation Everything Else Depends On",
      paragraphs: [
        "Technical SEO covers the infrastructure search engines depend on to discover, crawl, render, and index your site correctly — the layer that, when broken, silently caps rankings no matter how good your content or backlink profile is. Crawl budget waste, broken internal linking, duplicate content from URL parameters, and pages that render differently for Googlebot than for users are the kinds of issues that show up as flat or declining rankings with no obvious content explanation.",
        "We start every technical SEO engagement with a full crawl using tools like Screaming Frog and Sitebulb, cross-referenced against actual server log files when available, to see exactly how search engines are crawling your site — not just how we assume they're crawling it based on the sitemap. Log file analysis reveals crawl budget waste and indexation issues that a standard crawl alone can miss.",
        "Core Web Vitals — loading performance, interactivity, and visual stability — have been a confirmed ranking factor for years now, and they're also a genuine measure of user experience quality independent of SEO. We treat performance optimization as both a technical SEO deliverable and a conversion rate consideration, since slow sites lose both rankings and revenue.",
        "Structured data (schema markup) helps search engines understand your content's meaning and context, and correctly implemented schema can unlock rich snippets — star ratings, FAQ accordions, breadcrumbs — that improve click-through rate even at the same ranking position. We implement and validate structured data as a standard part of technical SEO work, not an optional add-on.",
        "Site migrations and redesigns are where technical SEO does the most damage when it's skipped, since a new platform, a new URL structure, or a new design can quietly break years of accumulated ranking equity in a single launch. We treat migrations as a dedicated technical SEO project — mapping redirects, preserving internal linking patterns, and validating indexation before and after launch — rather than an afterthought handled by whoever happens to be building the new site.",
        "International and mobile-specific technical issues add further complexity for sites operating across multiple markets or device types, since rendering, redirect, and crawl behavior can differ meaningfully between a desktop Googlebot crawl and a mobile-first indexing pass.",
      ],
    },
    whatsIncluded: {
      h2: "What Technical SEO with Vertexa Includes",
      items: [
        {
          title: "Full Technical SEO Audits",
          description:
            "Comprehensive crawl analysis covering indexation, crawl budget, duplicate content, broken links, redirect chains, and rendering issues — prioritized by actual ranking impact, with a clear action plan.",
        },
        {
          title: "Core Web Vitals Optimization",
          description:
            "Performance audits and fixes addressing Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift — diagnosed down to the actual code or asset causing each issue.",
        },
        {
          title: "Crawlability & Indexation Fixes",
          description:
            "Resolving crawl budget waste, fixing robots.txt and meta robots misconfigurations, and correcting canonical tag issues that cause search engines to ignore or duplicate-flag pages.",
        },
        {
          title: "Structured Data Implementation",
          description:
            "Schema markup implementation and validation for your specific content types — articles, products, FAQs, breadcrumbs, organization data — built to unlock relevant rich snippet types.",
        },
        {
          title: "Site Architecture & Internal Linking",
          description:
            "Information architecture and internal linking structure designed to pass authority to your most important pages and help search engines understand your site's topical hierarchy.",
        },
        {
          title: "JavaScript SEO",
          description:
            "Auditing and fixing rendering issues for JavaScript-heavy sites, ensuring content that depends on client-side rendering is actually visible to search engine crawlers.",
        },
        {
          title: "Log File Analysis",
          description:
            "Server log file analysis revealing exactly how search engine crawlers are spending their time on your site, surfacing crawl budget waste invisible to a standard crawl tool.",
        },
      ],
    },
    process: {
      h2: "How We Run Technical SEO",
      steps: [
        {
          number: "01",
          title: "Crawl & Log File Audit",
          description:
            "We run a full site crawl and analyze server logs where available, building a complete picture of how search engines actually interact with your site today.",
        },
        {
          number: "02",
          title: "Prioritization & Roadmap",
          description:
            "We rank every issue by actual ranking impact and implementation effort, giving you a clear sequence rather than an overwhelming flat list of every technical issue found.",
        },
        {
          number: "03",
          title: "Implementation",
          description:
            "We implement fixes directly or provide exact specifications for your development team, validating each fix doesn't introduce new issues elsewhere on the site.",
        },
        {
          number: "04",
          title: "Monitoring & Re-Crawl",
          description:
            "We re-crawl and monitor Search Console data after implementation to confirm fixes actually resolved the underlying issues, not just the symptoms we initially flagged.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Technical SEO",
      points: [
        {
          title: "We Use Log Files, Not Just Crawl Tools",
          description:
            "Most technical SEO audits rely solely on crawl tools that simulate how search engines might behave. We cross-reference with actual server log data when available, revealing how search engines really crawl your site.",
        },
        {
          title: "Performance Fixes Tied to Root Cause",
          description:
            "We diagnose Core Web Vitals issues down to the specific asset, script, or code pattern causing them, rather than generic recommendations like 'optimize images' that don't address the bottleneck. That level of specificity is what makes the fix permanent instead of a temporary score bump that regresses the next time content is added.",
        },
        {
          title: "Structured Data Built for Your Actual Content",
          description:
            "We implement schema markup specific to your content types and validate it actually qualifies for the rich snippets you're targeting, not generic markup that technically validates but unlocks nothing. Every schema type we ship gets tested against the actual rich result it's meant to trigger, not just checked for syntax errors.",
        },
        {
          title: "We Prioritize by Impact, Not Just List Issues",
          description:
            "A 60-page technical audit listing every possible issue isn't useful without prioritization. We rank fixes by actual ranking impact so you know what to do first, and we're upfront when an issue is low priority so your team doesn't waste a sprint on something that won't move rankings.",
        },
      ],
    },
    techStack: {
      h2: "Technical SEO Tools We Use",
      paragraph:
        "We run technical audits through Screaming Frog and Sitebulb for comprehensive crawl analysis, cross-referenced with Google Search Console data and server log files when available. Core Web Vitals diagnosis happens through PageSpeed Insights and Chrome DevTools, drilling into specific performance bottlenecks. We validate structured data through Google's Rich Results Test and Schema Markup Validator, and use Google Analytics 4 to tie technical improvements back to actual traffic and conversion impact.",
      tools: [
        "Screaming Frog",
        "Sitebulb",
        "Google Search Console",
        "PageSpeed Insights",
        "Chrome DevTools",
        "Schema Markup Validator",
        "Log File Analysis Tools",
      ],
    },
    useCases: {
      h2: "Who Needs Technical SEO",
      cases: [
        {
          title: "Sites with Stagnant Rankings",
          description:
            "Sites that have stopped growing organically despite continued content investment, often because an underlying technical issue is capping what content and links alone can achieve.",
        },
        {
          title: "Large or Complex Sites",
          description:
            "Enterprise sites and e-commerce catalogs with thousands of pages, where crawl budget management and indexation issues compound at scale.",
        },
        {
          title: "JavaScript-Heavy Web Applications",
          description:
            "Sites built on modern JavaScript frameworks where rendering and crawlability issues can silently prevent content from being indexed at all.",
        },
      ],
    },
    faqs: [
      {
        question: "How long does a technical SEO audit take?",
        answer:
          "A thorough audit typically takes 2-3 weeks for a standard site, longer for enterprise sites with complex architecture. We'd rather take the time to find the real issues than rush a superficial scan.",
      },
      {
        question: "Will fixing technical SEO issues guarantee better rankings?",
        answer:
          "Technical SEO removes barriers to ranking — it doesn't guarantee a specific outcome on its own, since content quality and authority also matter. But unresolved technical issues can cap what even great content can achieve.",
      },
      {
        question: "Do you implement fixes, or just provide a report?",
        answer:
          "Both, depending on your preference. We can implement fixes directly if we have access, or provide your development team with exact specifications if you prefer to handle implementation in-house.",
      },
      {
        question: "What's the difference between technical SEO and on-page SEO?",
        answer:
          "Technical SEO addresses the infrastructure layer — crawlability, indexation, site speed, structured data. On-page SEO addresses content and page-level optimization — titles, headings, content quality.",
      },
      {
        question: "How often should we run a technical SEO audit?",
        answer:
          "An annual deep audit is reasonable for most sites, with ongoing monitoring in between. Sites that change frequently — large catalogs, frequent redesigns — benefit from more regular check-ins.",
      },
      {
        question: "Can technical SEO issues actually get a page removed from Google's index?",
        answer:
          "Yes, in serious cases — misconfigured robots.txt, accidental noindex tags, or severe duplicate content issues can cause pages to be deindexed entirely. We specifically check for these first.",
      },
    ],
    cta: {
      h2: "Ready to find out what's actually capping your rankings?",
      subhead:
        "Let's run a real technical audit — crawl data and log files, not assumptions — and show you exactly what's holding your site back.",
    },
    relatedSubServices: [
      {
        slug: "on-page-seo",
        parentSlug: "seo",
        name: "On-Page SEO",
        shortDescription:
          "Content-level optimization once the technical foundation is fixed.",
      },
      {
        slug: "ecommerce-seo",
        parentSlug: "seo",
        name: "E-commerce SEO",
        shortDescription:
          "Technical SEO challenges specific to large product catalogs.",
      },
      {
        slug: "nextjs",
        parentSlug: "web-development",
        name: "Next.js Development",
        shortDescription:
          "A technical foundation built to avoid these issues from day one.",
      },
    ],
  },
  {
    slug: "on-page-seo",
    parentSlug: "seo",
    parentName: "SEO Services",
    parentLabel: "SEO",
    meta: {
      title: "On-Page SEO Services",
      description:
        "On-page SEO — search intent mapping, title and content optimization, and fixing keyword cannibalization so your pages rank for the right terms.",
      keywords: [
        "on-page SEO services",
        "on-page SEO optimization",
        "search intent optimization",
        "title tag optimization",
        "meta description optimization",
        "keyword cannibalization fix",
        "content optimization SEO",
        "on-page SEO audit",
      ],
    },
    hero: {
      eyebrow: "On-Page SEO",
      h1: "On-Page SEO That Matches Content to What People Actually Search",
      subheadline:
        "We optimize titles, headings, content structure, and internal linking at the page level — mapping each page to the search intent it should actually serve, and fixing keyword cannibalization where multiple pages compete against each other for the same terms. On-page SEO is where most of the easy ranking gains live, and most sites leave them unclaimed.",
    },
    overview: {
      h2: "Why On-Page Optimization Is Where the Easy Wins Live",
      paragraphs: [
        "The most common on-page SEO failure isn't a missing keyword — it's a mismatch between what a page offers and what searchers actually want when they type that query. A page targeting 'best CRM software' written as a single-product sales page will struggle against comparison-style content, regardless of how well-optimized the titles and headings are, because it doesn't match search intent.",
        "Title tags and meta descriptions matter for both rankings and click-through rate, and most sites either leave them as CMS defaults or write them once and never revisit them as search behavior and SERP features change. We optimize at scale across your existing pages, not just new content, since on-page fixes to already-indexed pages are often the fastest wins available.",
        "Keyword cannibalization — multiple pages on your own site competing for the same search terms — silently splits your ranking authority and confuses search engines about which page to actually rank. We diagnose cannibalization issues through search query data and decide whether to consolidate competing pages or clearly differentiate their targeting and content.",
        "Content depth and structure should match what's actually ranking on page one for a given term, not a generic word count target. Sometimes the winning format is a concise direct answer; sometimes it's a comprehensive guide. We analyze the actual SERP landscape per keyword rather than applying the same content template to every page regardless of what's actually being rewarded for that specific query.",
        "On-page SEO is also where a lot of quick, low-risk wins get left on the table simply because nobody owns the maintenance cycle. Pages that ranked well a year ago can drift as competitors update their content, as search intent shifts, or as SERP features change what a winning result actually looks like, and a page that was never revisited keeps losing ground silently. We treat on-page optimization as an ongoing discipline rather than a one-time pass, revisiting already-optimized pages on a schedule rather than assuming the work is permanently done.",
        "Featured snippets and other SERP features add another on-page consideration most generic advice skips entirely, since the formatting that wins a featured snippet — a concise definitional answer, a numbered list, a comparison table — often differs from the formatting that best serves a reader scrolling through the full page. We structure content deliberately to compete for these features when the opportunity justifies it, rather than treating every page the same regardless of what's actually winning that SERP slot.",
      ],
    },
    whatsIncluded: {
      h2: "What On-Page SEO with Vertexa Includes",
      items: [
        {
          title: "Search Intent Mapping",
          description:
            "Auditing your pages against the actual search intent behind their target keywords, identifying mismatches where content type doesn't match what's winning in the SERP for that query.",
        },
        {
          title: "Title Tag & Meta Description Optimization",
          description:
            "Optimization across existing pages at scale, balancing keyword relevance with the click-through rate impact of how titles and descriptions actually appear in search results.",
        },
        {
          title: "Keyword Cannibalization Audits & Fixes",
          description:
            "Identifying pages competing against each other for the same terms using search query data, then consolidating or differentiating them to resolve the authority split.",
        },
        {
          title: "Content Structure & Heading Optimization",
          description:
            "Restructuring page content, heading hierarchy, and on-page formatting to match search intent and improve both readability and crawlability.",
        },
        {
          title: "Internal Linking Optimization",
          description:
            "Strategic internal linking that passes authority to priority pages and helps search engines understand topical relationships between your content.",
        },
        {
          title: "Image & Media SEO",
          description:
            "Alt text, file naming, and image optimization that supports both accessibility and image search visibility, often an overlooked on-page opportunity.",
        },
        {
          title: "Content Gap & Depth Analysis",
          description:
            "Identifying where existing content underperforms relative to what's actually ranking, informing whether a page needs expansion, restructuring, or a different angle entirely.",
        },
      ],
    },
    process: {
      h2: "How We Run On-Page SEO",
      steps: [
        {
          number: "01",
          title: "Page & Query Audit",
          description:
            "We audit your existing pages against their target and actual ranking keywords, using Search Console data to find intent mismatches and cannibalization issues.",
        },
        {
          number: "02",
          title: "Prioritization",
          description:
            "We rank pages by traffic and ranking potential versus optimization effort, focusing first on pages close to ranking improvements rather than starting alphabetically.",
        },
        {
          number: "03",
          title: "Optimization",
          description:
            "We rewrite or restructure titles, headings, and content as needed, implementing changes directly or providing specifications for your content team.",
        },
        {
          number: "04",
          title: "Monitoring & Iteration",
          description:
            "We track ranking and click-through rate changes after implementation, since on-page changes can take weeks to fully reflect in rankings.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for On-Page SEO",
      points: [
        {
          title: "We Map Intent Before Optimizing Anything",
          description:
            "We won't rewrite a title or restructure content without first confirming what the page should actually be optimized to serve. Optimizing the wrong intent just produces a more polished wrong page.",
        },
        {
          title: "Cannibalization Fixes Based on Real Data",
          description:
            "We diagnose cannibalization using actual Search Console query data showing which pages compete for which terms, not guesswork based on similar-sounding titles. That distinction matters because the wrong fix — consolidating pages that should stay separate, or vice versa — can cost more ranking ground than the original cannibalization issue.",
        },
        {
          title: "Content Depth Matched to the SERP, Not a Formula",
          description:
            "We analyze what's actually ranking for each target term rather than applying a fixed word count or structure template regardless of what the specific query actually rewards. A query that rewards a tight, direct answer doesn't need padding just to hit an arbitrary length target.",
        },
        {
          title: "On-Page Fixes That Compound with Technical and Content Work",
          description:
            "On-page SEO works best alongside technical and content strategy, and we coordinate across all three rather than optimizing pages in isolation from the broader SEO picture. A perfectly optimized page still underperforms if it sits behind a crawlability issue or a missing internal link from a higher-authority page.",
        },
      ],
    },
    techStack: {
      h2: "On-Page SEO Tools We Use",
      paragraph:
        "We diagnose on-page opportunities using Google Search Console query and page data, cross-referenced with SERP analysis tools like Ahrefs and Semrush to understand the competitive landscape for each target keyword. Content structure and readability get assessed using a combination of manual SERP review and content analysis tools, since automated scoring alone misses genuine search intent nuance. Schema markup validation happens through Google's Rich Results Test where on-page work intersects with structured data.",
      tools: [
        "Google Search Console",
        "Ahrefs",
        "Semrush",
        "Screaming Frog",
        "Rich Results Test",
      ],
    },
    useCases: {
      h2: "Who Needs On-Page SEO",
      cases: [
        {
          title: "Sites with Plateaued Rankings",
          description:
            "Sites ranking on page two or the bottom of page one for valuable terms, where on-page refinement can be the difference-maker without an entirely new content strategy.",
        },
        {
          title: "Sites with Cannibalization Issues",
          description:
            "Larger content libraries where multiple pages have organically grown to compete for the same terms over time, diluting ranking potential that consolidation could recover.",
        },
        {
          title: "Recently Redesigned or Migrated Sites",
          description:
            "Sites where a redesign or migration disrupted on-page elements — titles, headings, internal links — that were previously working, needing restoration and improvement.",
        },
      ],
    },
    faqs: [
      {
        question: "What's the difference between on-page and technical SEO?",
        answer:
          "On-page SEO covers content and page-level elements — titles, headings, content structure, internal linking. Technical SEO covers site infrastructure — crawlability, site speed, structured data. We offer both.",
      },
      {
        question: "How quickly do on-page changes affect rankings?",
        answer:
          "Search engines typically need to recrawl and reprocess a page after changes, which can take days to a few weeks. Significant on-page improvements often show measurable impact within 4-8 weeks.",
      },
      {
        question: "Will rewriting our titles hurt our existing rankings?",
        answer:
          "There's always some risk with any change to an already-ranking page, which is why we prioritize data-informed changes over arbitrary rewrites, and monitor closely after implementation.",
      },
      {
        question: "How do you decide which pages to optimize first?",
        answer:
          "We prioritize pages with the most traffic and ranking potential relative to the effort required — often pages already ranking on page one or two, where improvements can push them higher faster.",
      },
      {
        question: "Can on-page SEO fix keyword cannibalization on its own?",
        answer:
          "Usually yes, through consolidation (merging competing pages) or differentiation (making each page's targeting distinct). Severe cases sometimes also need technical fixes like canonical tags or redirects.",
      },
      {
        question: "Do you write new content, or just optimize existing pages?",
        answer:
          "This service focuses on optimizing existing pages. If you need new content created, that falls under our content strategy and blog writing services, which we can coordinate alongside this work.",
      },
    ],
    cta: {
      h2: "Ready to claim the rankings already within reach?",
      subhead:
        "Let's audit your existing pages — on-page improvements are often the fastest, lowest-cost ranking gains available, and most sites haven't claimed them yet.",
    },
    relatedSubServices: [
      {
        slug: "technical-seo",
        parentSlug: "seo",
        name: "Technical SEO",
        shortDescription:
          "The infrastructure layer that needs to be sound before on-page work can fully pay off.",
      },
      {
        slug: "link-building",
        parentSlug: "seo",
        name: "Link Building",
        shortDescription:
          "Authority building that compounds with strong on-page optimization.",
      },
      {
        slug: "content-strategy",
        parentSlug: "content-social-media",
        name: "Content Strategy",
        shortDescription:
          "New content planning for the gaps on-page audits reveal.",
      },
    ],
  },
  {
    slug: "link-building",
    parentSlug: "seo",
    parentName: "SEO Services",
    parentLabel: "SEO",
    meta: {
      title: "Link Building Services",
      description:
        "Link building through genuine digital PR and outreach — earned links built to survive algorithm updates, not bulk purchases that eventually backfire.",
      keywords: [
        "link building services",
        "link building agency",
        "digital PR services",
        "backlink building",
        "white hat link building",
        "guest posting strategy",
        "link building outreach",
        "domain authority building",
      ],
    },
    hero: {
      eyebrow: "Link Building",
      h1: "Link Building That Survives the Next Algorithm Update",
      subheadline:
        "We build backlinks through genuine digital PR, partnerships, and content worth citing — slower than buying links in bulk, but the only approach that holds up under scrutiny instead of requiring a disavowal campaign once Google catches up. If your link profile looks suspicious to a human reviewer, it'll eventually look suspicious to the algorithm too.",
    },
    overview: {
      h2: "Why Earned Links Are the Only Links Worth Building",
      paragraphs: [
        "Link building has a worse reputation than it deserves, mostly because so much of the industry defaults to shortcuts — bulk link purchases, private blog networks, and low-quality guest post farms that work until the next Google algorithm update flags the pattern and erases months of investment overnight. We build links the slower way, because it's the only way that doesn't carry that risk.",
        "Genuine digital PR link building means creating something worth linking to — original research, a useful tool, a genuinely newsworthy angle — and then doing the outreach work to get it in front of journalists, bloggers, and site owners who'd actually want to cite it. This produces fewer links than a bulk outreach campaign, but the links that result carry real authority and rarely need to be disavowed later.",
        "Link quality depends on relevance and context as much as raw domain authority — a link from a moderately authoritative site genuinely relevant to your industry often helps more than a link from an unrelated high-authority site that looks purchased or out of place. We evaluate prospective link opportunities on relevance first, authority second.",
        "This approach is genuinely slower than buying links, and we're upfront about that tradeoff. A digital PR link building campaign builds momentum over months, compounding as your site develops more genuine citations and relationships — which is also exactly why it's resilient to algorithm updates that specifically target manipulative, fast link acquisition patterns.",
        "We also pay close attention to anchor text patterns and link placement context, since an unnaturally optimized anchor text profile is one of the clearest signals search engines use to flag manipulative link building even when the links themselves come from reasonable domains. Natural link building produces a varied, organic-looking anchor text distribution because real journalists and site owners link the way they'd naturally describe your content, not the way an SEO campaign wants them to.",
        "Industry and niche relevance also shape how we evaluate outreach targets, since a link from a site that genuinely covers your industry tends to age better than a link from a generic high-traffic blog willing to publish almost any guest post for the right pitch. We'd rather build a smaller number of links from genuinely relevant, recognized publications in your space than chase volume from sites with broad reach but no real topical connection to what you do.",
      ],
    },
    whatsIncluded: {
      h2: "What Link Building with Vertexa Includes",
      items: [
        {
          title: "Digital PR Campaigns",
          description:
            "Original research, data studies, or genuinely newsworthy content created specifically to earn media coverage and citations, then pitched to relevant journalists and publications.",
        },
        {
          title: "Outreach & Relationship Building",
          description:
            "Targeted outreach to site owners, bloggers, and journalists in your industry, building genuine relationships that produce links now and ongoing opportunities later.",
        },
        {
          title: "Guest Posting (Done Right)",
          description:
            "Strategic guest content placed on genuinely relevant, reputable sites — not mass guest posting on low-quality sites that exist primarily to sell links.",
        },
        {
          title: "Broken Link Building",
          description:
            "Identifying broken links on relevant sites and pitching your content as a replacement — a genuinely useful service to the site owner, not just a link request.",
        },
        {
          title: "Resource Page & Roundup Link Acquisition",
          description:
            "Identifying resource pages and roundup content relevant to your industry, pitching inclusion where your content genuinely adds value to their existing resource.",
        },
        {
          title: "Link Profile Audits",
          description:
            "Auditing your existing backlink profile to identify toxic or risky links that may warrant disavowal, and benchmarking your link profile against competitors.",
        },
        {
          title: "Competitor Backlink Analysis",
          description:
            "Analyzing where your competitors' links come from to identify realistic, relevant link opportunities you may be missing entirely.",
        },
      ],
    },
    process: {
      h2: "How We Build Links",
      steps: [
        {
          number: "01",
          title: "Link Profile Audit & Strategy",
          description:
            "We audit your existing backlink profile and competitors' profiles to identify realistic opportunities and any existing risks worth addressing before building new links.",
        },
        {
          number: "02",
          title: "Content & Asset Development",
          description:
            "We develop the content or research asset genuinely worth linking to — the foundation any successful digital PR or outreach campaign needs before pitching anyone.",
        },
        {
          number: "03",
          title: "Outreach & Relationship Building",
          description:
            "We conduct targeted outreach to relevant journalists, bloggers, and site owners, building relationships rather than treating every contact as a one-off transaction.",
        },
        {
          number: "04",
          title: "Tracking & Reporting",
          description:
            "We track new links acquired, monitor their quality and relevance, and report on actual ranking and traffic impact, not just a raw link count.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Link Building",
      points: [
        {
          title: "We Build Assets Worth Linking To First",
          description:
            "Outreach without something genuinely valuable to offer produces low response rates and low-quality links. We invest in creating link-worthy content before pitching anyone, since the strength of the asset largely determines how much outreach effort actually converts.",
        },
        {
          title: "Relevance-First, Not Just Domain Authority",
          description:
            "We prioritize topically relevant links over chasing the highest possible domain authority number, since relevance increasingly matters more for both rankings and resilience to algorithm changes. A modestly authoritative but genuinely relevant link often outlasts a higher-authority link that looks out of place.",
        },
        {
          title: "No Shortcuts That Need Disavowing Later",
          description:
            "We don't buy links in bulk or use private blog networks. Every link building campaign we run is built to hold up under manual review, not just to pass automated detection, which means you're never one manual action away from losing the authority we've spent months building, and you never need to budget for an eventual cleanup project.",
        },
        {
          title: "Transparent Reporting on Real Links",
          description:
            "You see exactly which links were acquired, from where, and why — not a vague monthly report claiming a number of links without verifiable detail. If a link underperforms or gets removed by the linking site, we flag it rather than quietly letting the count drop.",
        },
      ],
    },
    techStack: {
      h2: "Link Building Tools We Use",
      paragraph:
        "Our link building process runs on Ahrefs and Semrush for backlink analysis, competitor research, and prospecting, with manual outreach conducted through email and relationship-building tools rather than automated mass-outreach software that produces low-quality, low-response campaigns. We track link acquisition and quality through a combination of these platforms and Google Search Console, validating that new links are actually being indexed and counted.",
      tools: [
        "Ahrefs",
        "Semrush",
        "Google Search Console",
        "Outreach & CRM tools",
      ],
    },
    useCases: {
      h2: "Who Needs Link Building",
      cases: [
        {
          title: "Sites with Strong Content but Low Authority",
          description:
            "Sites publishing genuinely good content that isn't ranking competitively because the domain lacks the backlink authority competitors have already built.",
        },
        {
          title: "Brands Recovering from a Toxic Link Profile",
          description:
            "Sites that previously used risky link building tactics and need both cleanup (disavowal) and a legitimate strategy going forward to rebuild authority safely.",
        },
        {
          title: "B2B & SaaS Companies Building Category Authority",
          description:
            "Companies in competitive B2B or SaaS categories where backlink authority is often the deciding factor between similarly content-strong competitors.",
        },
      ],
    },
    faqs: [
      {
        question: "How long does link building take to show results?",
        answer:
          "Digital PR and outreach link building typically takes 3-6 months to build meaningful momentum, since it depends on genuine relationship building and content creation rather than instant link purchases, with results compounding further beyond that window.",
      },
      {
        question: "Do you buy links or use private blog networks?",
        answer:
          "No. We build links exclusively through genuine outreach, digital PR, and content worth citing. We won't use tactics that risk a future penalty, even though they'd show faster short-term results.",
      },
      {
        question: "How many links will we get per month?",
        answer:
          "Link velocity varies based on your industry, content quality, and campaign type — we'd rather under-promise a specific number and over-deliver on quality than guarantee a count that pressures lower-quality tactics.",
      },
      {
        question: "Can you remove bad links from a previous agency's work?",
        answer:
          "Yes — we audit existing link profiles and can manage the disavowal process for toxic or risky links, alongside building a legitimate strategy going forward.",
      },
      {
        question: "Do you guarantee a specific domain authority increase?",
        answer:
          "No reputable link building service can honestly guarantee a specific authority metric increase, since these metrics are calculated by third-party tools, not Google itself. We focus on rankings and traffic instead.",
      },
      {
        question: "What content do you need from us to start a digital PR campaign?",
        answer:
          "Ideally, original data, research, or a genuinely unique angle related to your industry. If you don't have this yet, we can help develop a link-worthy content asset as part of the campaign.",
      },
    ],
    cta: {
      h2: "Ready to build authority that actually holds up?",
      subhead:
        "Let's audit your current link profile and figure out what kind of link building campaign would genuinely move your rankings.",
    },
    relatedSubServices: [
      {
        slug: "on-page-seo",
        parentSlug: "seo",
        name: "On-Page SEO",
        shortDescription:
          "On-page work that helps new links actually translate into ranking gains.",
      },
      {
        slug: "content-strategy",
        parentSlug: "content-social-media",
        name: "Content Strategy",
        shortDescription:
          "The editorial planning behind genuinely link-worthy content assets.",
      },
      {
        slug: "technical-seo",
        parentSlug: "seo",
        name: "Technical SEO",
        shortDescription:
          "Making sure new authority actually translates into crawlable, indexable rankings.",
      },
    ],
  },
  {
    slug: "international-seo",
    parentSlug: "seo",
    parentName: "SEO Services",
    parentLabel: "SEO",
    meta: {
      title: "International SEO Services",
      description:
        "International SEO — hreflang, multi-region content, and technical configuration for brands targeting the US, UK, EU, and Australia simultaneously.",
      keywords: [
        "international SEO services",
        "hreflang implementation",
        "multi-region SEO",
        "global SEO strategy",
        "multilingual SEO",
        "international SEO audit",
        "geo-targeting SEO",
        "cross-border SEO",
      ],
    },
    hero: {
      eyebrow: "International SEO",
      h1: "International SEO for Brands Competing Across Multiple Markets",
      subheadline:
        "We handle hreflang implementation, regional content strategy, and the technical configuration brands need to rank across the US, UK, EU, and Australia simultaneously without duplicate content or geo-targeting issues quietly splitting your visibility. International SEO breaks in specific, predictable ways most agencies have never actually had to fix.",
    },
    overview: {
      h2: "Why International SEO Breaks in Predictable, Fixable Ways",
      paragraphs: [
        "International SEO has more ways to quietly fail than almost any other SEO discipline, because the configuration required — hreflang tags, regional targeting signals, content localization — is genuinely complex and easy to implement incorrectly in ways that look fine on the surface but confuse search engines about which version of a page to show which audience. We've fixed enough broken hreflang implementations to know exactly where this typically goes wrong.",
        "hreflang tags tell search engines which regional or language version of a page to serve to which audience, but they require precise, reciprocal implementation across every page variant — a single missing or incorrect tag can cause the wrong version to rank in the wrong market, or cause search engines to treat near-identical regional pages as duplicate content competing against each other.",
        "Localization is not the same as translation, and treating it as a pure translation exercise is one of the most common international SEO mistakes. Currency, measurement units, cultural references, and even product availability often need to differ by region — content that's merely translated but not genuinely localized tends to underperform with both search engines and actual regional audiences.",
        "The technical infrastructure decision — country-code top-level domains, subdirectories, or subdomains for different regions — has real SEO implications for authority consolidation and crawl efficiency, and the right answer depends on your specific situation rather than a universal best practice. We help clients make this decision deliberately rather than inheriting whatever structure happened to get set up first.",
        "Regional search engine differences also matter more than most international SEO plans account for, since Google doesn't have the same dominance everywhere and ranking factors that work for one search engine don't necessarily transfer to another. Markets where Baidu, Yandex, or Naver hold meaningful share need a genuinely different technical and content approach, not the same Google playbook applied with a different hreflang tag attached to it.",
        "Server location and hosting strategy is a smaller but still relevant factor for international performance, since serving every region from a single distant data center can introduce latency that hurts both Core Web Vitals scores and the user experience for visitors furthest from that server. We assess whether a CDN configuration or regional hosting setup is warranted given your specific market spread, rather than assuming a single hosting location is fine for every region you're targeting.",
      ],
    },
    whatsIncluded: {
      h2: "What International SEO with Vertexa Includes",
      items: [
        {
          title: "Hreflang Implementation & Audits",
          description:
            "Precise, reciprocal hreflang tag implementation across all regional and language page variants, audited regularly since hreflang errors compound silently as new pages get added.",
        },
        {
          title: "International Site Architecture",
          description:
            "Strategic decisions on ccTLD, subdirectory, or subdomain structure for regional content, based on your specific authority consolidation and crawl efficiency needs.",
        },
        {
          title: "Regional Content Strategy",
          description:
            "Content strategy that accounts for genuine regional differences — currency, terminology, cultural context — rather than a single piece of content translated uniformly across markets.",
        },
        {
          title: "Multi-Currency & Multi-Language Technical Setup",
          description:
            "Technical configuration supporting multiple currencies and languages correctly, including the geo-targeting signals that help search engines serve the right version to the right audience.",
        },
        {
          title: "Duplicate Content Resolution",
          description:
            "Resolving duplicate content issues between near-identical regional pages, using canonical tags and hreflang correctly together rather than treating them as competing solutions.",
        },
        {
          title: "International Keyword Research",
          description:
            "Keyword research conducted per target market rather than assuming search behavior and terminology translate directly between regions, let alone across languages.",
        },
        {
          title: "Regional Search Console & Analytics Setup",
          description:
            "Search Console and analytics configuration that lets you actually measure performance per region, rather than aggregated data that hides regional performance differences.",
        },
      ],
    },
    process: {
      h2: "How We Run International SEO",
      steps: [
        {
          number: "01",
          title: "International Audit",
          description:
            "We audit your current international setup (if any) for hreflang errors, duplicate content issues, and architecture problems, or plan the structure from scratch for a new expansion.",
        },
        {
          number: "02",
          title: "Architecture & Strategy",
          description:
            "We decide the technical structure and content localization strategy per region, based on your authority consolidation needs and the genuine differences between your target markets.",
        },
        {
          number: "03",
          title: "Implementation",
          description:
            "We implement hreflang, technical configuration, and content localization, validating reciprocal tagging and correct geo-targeting signals throughout.",
        },
        {
          number: "04",
          title: "Monitoring Per Region",
          description:
            "We monitor rankings and traffic per region specifically, since aggregated global data can mask a region underperforming while others compensate in the average.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for International SEO",
      points: [
        {
          title: "We've Actually Fixed Broken Hreflang at Scale",
          description:
            "Most SEO practitioners have configured hreflang for a simple two-region site. We've audited and fixed complex multi-region, multi-language implementations where errors had compounded for years, often across more than a dozen regional variants simultaneously.",
        },
        {
          title: "We Distinguish Localization from Translation",
          description:
            "We push back on pure-translation approaches to international content, because genuinely localized content performs better with both search engines and actual regional audiences. That pushback can mean a harder conversation upfront, but it saves a second, more expensive localization pass later.",
        },
        {
          title: "Architecture Decisions Based on Your Situation",
          description:
            "ccTLD versus subdirectory versus subdomain has no universal right answer. We make this recommendation based on your specific authority, resourcing, and regional strategy, and we'll say so plainly if your current setup is actually fine and doesn't need a costly migration.",
        },
        {
          title: "Per-Region Reporting, Not Aggregated Vanity Numbers",
          description:
            "We report performance by region specifically, so you can see exactly which markets are working and which need more attention, not a blended number that hides the real picture. A strong US region can otherwise mask a UK launch that's quietly underperforming and needs intervention before the gap widens further.",
        },
      ],
    },
    techStack: {
      h2: "International SEO Tools We Use",
      paragraph:
        "We audit and implement hreflang and international technical configuration using Screaming Frog's international SEO crawl features and manual validation against Google's hreflang testing tools. Regional keyword research happens through Ahrefs and Semrush configured per target market and language, since global keyword data doesn't reflect actual regional search behavior. We set up region-specific tracking in Google Search Console and GA4, segmenting performance data that would otherwise be hidden in aggregated global reporting.",
      tools: [
        "Screaming Frog (International SEO)",
        "Ahrefs",
        "Semrush",
        "Google Search Console",
        "Google Analytics 4 (regional segmentation)",
      ],
    },
    useCases: {
      h2: "Who Needs International SEO",
      cases: [
        {
          title: "Brands Expanding into New English-Speaking Markets",
          description:
            "US brands expanding into UK or Australia (or vice versa), needing to account for genuine terminology, currency, and cultural differences despite the shared language.",
        },
        {
          title: "Brands Expanding into Non-English Markets",
          description:
            "Companies entering European markets requiring genuine multi-language content and the technical hreflang configuration to serve it correctly.",
        },
        {
          title: "Multi-Region E-commerce Brands",
          description:
            "E-commerce businesses managing product catalogs and pricing across multiple currencies and regions simultaneously, where mistakes directly cost conversions.",
        },
        {
          title: "Companies Consolidating Multiple Regional Domains",
          description:
            "Brands that grew into international markets organically through separate domains or microsites, now needing a more deliberate, consolidated international architecture as the business matures.",
        },
      ],
    },
    faqs: [
      {
        question: "Do we need separate domains for each country we target?",
        answer:
          "Not necessarily — subdirectories and subdomains can work well with correct hreflang implementation, and often consolidate authority better than separate ccTLDs. We'll recommend based on your situation and existing authority distribution.",
      },
      {
        question: "Can we just translate our existing content for new markets?",
        answer:
          "Translation alone often underperforms compared to genuine localization, which accounts for currency, terminology, and cultural context differences. Localization is recommended, though translation can be a reasonable starting point for smaller markets.",
      },
      {
        question: "How do we know if our hreflang implementation is broken?",
        answer:
          "Common symptoms include the wrong regional page ranking in the wrong market, or regional pages appearing to compete directly against each other. We run a full hreflang audit to diagnose this precisely and thoroughly.",
      },
      {
        question: "Does international SEO take longer to show results than standard SEO?",
        answer:
          "Often yes, especially for genuinely new markets where you're building authority from a lower starting point. Existing markets with hreflang and technical fixes in place can see noticeably faster improvement once corrected properly.",
      },
      {
        question: "Do you handle the actual content translation/localization?",
        answer:
          "We handle the strategy and can coordinate translation/localization through our content team or your existing vendor, ensuring the SEO requirements are integrated into that process.",
      },
      {
        question: "How many regions can you support simultaneously?",
        answer:
          "We've managed international SEO across four or more regions simultaneously without issues. Complexity and cost scale with the number of regions and languages involved, and we'll scope accordingly upfront.",
      },
    ],
    cta: {
      h2: "Expanding into new markets and want to get the SEO right?",
      subhead:
        "Let's review your current setup or plan your expansion — international SEO mistakes are expensive to unwind once they've compounded across multiple regions.",
    },
    relatedSubServices: [
      {
        slug: "technical-seo",
        parentSlug: "seo",
        name: "Technical SEO",
        shortDescription:
          "The crawlability foundation international configuration builds on top of.",
      },
      {
        slug: "ecommerce-seo",
        parentSlug: "seo",
        name: "E-commerce SEO",
        shortDescription:
          "Catalog-scale SEO for multi-region e-commerce expansion.",
      },
      {
        slug: "saas-seo",
        parentSlug: "seo",
        name: "SaaS SEO",
        shortDescription:
          "Organic growth strategy for SaaS companies expanding internationally.",
      },
    ],
  },
  {
    slug: "ecommerce-seo",
    parentSlug: "seo",
    parentName: "SEO Services",
    parentLabel: "SEO",
    meta: {
      title: "E-commerce SEO Services",
      description:
        "E-commerce SEO — category and product page optimization at scale, faceted navigation fixes, and structured data for catalogs with thousands of pages.",
      keywords: [
        "ecommerce SEO services",
        "ecommerce SEO agency",
        "product page SEO",
        "category page optimization",
        "faceted navigation SEO",
        "Shopify SEO",
        "ecommerce SEO audit",
        "product schema markup",
      ],
    },
    hero: {
      eyebrow: "E-commerce SEO",
      h1: "E-commerce SEO Built for Catalogs at Scale",
      subheadline:
        "We optimize category and product pages, fix faceted navigation crawl issues, and implement structured data for e-commerce catalogs with hundreds or thousands of pages — the kind of scale where standard SEO playbooks built for blog content simply don't apply. A few fixes applied systematically across your catalog architecture beats manually optimizing pages one at a time.",
    },
    overview: {
      h2: "Why E-commerce SEO Requires Thinking in Templates, Not Pages",
      paragraphs: [
        "Category pages are usually the highest-leverage SEO opportunity for e-commerce sites, because they target the broader, higher-volume commercial keywords customers actually search before they know which specific product they want. Most e-commerce sites under-invest in category page content and SEO, treating them as pure product grids when they're often a site's best ranking opportunity for valuable commercial-intent terms.",
        "Faceted navigation — filtering by size, color, price, and other attributes — creates a genuine SEO challenge at scale: each filter combination can generate a unique URL, multiplying your page count into the thousands or millions and overwhelming crawl budget with low-value, near-duplicate pages. We configure faceted navigation to preserve the user experience while preventing this crawl budget catastrophe.",
        "Product pages face their own duplicate content risk, especially when the same or similar products appear across multiple categories, or when product descriptions are pulled directly from manufacturer feeds shared across many competing retailers. We address this through canonical strategy, unique content development, and structured product data that helps differentiate pages even when underlying product information is similar.",
        "Structured data for products — price, availability, reviews, ratings — directly powers the rich snippets that appear in standard search results, and correctly implemented product schema can meaningfully improve click-through rate even without a ranking change. We treat this as a standard, non-negotiable part of e-commerce SEO work.",
        "Seasonality and inventory churn add another layer most generic SEO advice ignores entirely, since e-commerce catalogs constantly add, retire, and restock products in ways a static content site never has to deal with. A page that ranked well last season can lose its rankings simply because it sat unavailable for too long, and a catalog without a deliberate policy for handling these transitions bleeds accumulated SEO value every time a product cycles out.",
        "Internal site search and on-site filtering behavior also feed back into SEO strategy in ways many catalog owners overlook, since the queries customers type into your own search bar are a direct, high-confidence signal of demand and terminology that often differs from what generic keyword research tools surface. We treat internal search data as a genuine input into category and product page optimization, not a separate analytics stream that lives in a different team's dashboard.",
      ],
    },
    whatsIncluded: {
      h2: "What E-commerce SEO with Vertexa Includes",
      items: [
        {
          title: "Category Page SEO",
          description:
            "Optimization of category page content, internal linking, and on-page structure to target the high-volume commercial keywords customers search before narrowing to specific products.",
        },
        {
          title: "Faceted Navigation Crawl Management",
          description:
            "Configuration of filter and facet URLs to prevent crawl budget waste from near-infinite filter combinations, while preserving the filtering experience users actually need.",
        },
        {
          title: "Product Page Optimization at Scale",
          description:
            "Systematic product page SEO improvements — unique content strategies, internal linking, and structured data — applied across catalogs too large for manual page-by-page optimization.",
        },
        {
          title: "Product Schema & Rich Snippets",
          description:
            "Structured data implementation for price, availability, ratings, and reviews, validated to actually qualify for the rich snippet types relevant to shopping-related search results.",
        },
        {
          title: "Duplicate Content Resolution at Catalog Scale",
          description:
            "Canonical strategy and content differentiation addressing duplicate content risk from shared manufacturer descriptions, product variants, and cross-category listings.",
        },
        {
          title: "E-commerce Site Architecture",
          description:
            "Category and subcategory structure designed to distribute link authority effectively and help search engines understand your full catalog's topical hierarchy.",
        },
        {
          title: "Out-of-Stock & Discontinued Product Strategy",
          description:
            "A clear policy for handling out-of-stock and discontinued product pages — when to keep them live, redirect, or remove — that protects the SEO value already built into those URLs.",
        },
      ],
    },
    process: {
      h2: "How We Run E-commerce SEO",
      steps: [
        {
          number: "01",
          title: "Catalog & Crawl Audit",
          description:
            "We audit your category and product page structure, faceted navigation configuration, and crawl behavior to understand where budget and authority are currently being wasted.",
        },
        {
          number: "02",
          title: "Architecture & Strategy",
          description:
            "We design the category structure, faceted navigation rules, and content strategy needed to fix the issues found, sized appropriately to your catalog scale.",
        },
        {
          number: "03",
          title: "Systematic Implementation",
          description:
            "We implement fixes systematically across templates and page types rather than page by page, since catalog-scale SEO requires solutions that apply consistently across thousands of pages.",
        },
        {
          number: "04",
          title: "Monitoring at Scale",
          description:
            "We monitor rankings, crawl stats, and indexation across representative page samples, since manually checking every page in a large catalog isn't feasible or necessary.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for E-commerce SEO",
      points: [
        {
          title: "We Think in Templates, Not Individual Pages",
          description:
            "E-commerce SEO at scale requires systematic fixes applied across page templates, not one-off manual optimization. We build solutions that work across your entire catalog, scaling cleanly as new products and categories get added later.",
        },
        {
          title: "Real Faceted Navigation Crawl Experience",
          description:
            "Faceted navigation crawl budget problems are a genuinely technical challenge most generalist SEO providers haven't actually solved at scale. We've fixed this for catalogs with complex filtering systems spanning hundreds of attribute combinations.",
        },
        {
          title: "Category Pages Treated as Priority, Not Afterthought",
          description:
            "Most e-commerce SEO work focuses on individual product pages. We prioritize category page optimization, often the higher-leverage opportunity most catalogs underinvest in, since a single category page improvement can lift rankings across an entire product line at once.",
        },
        {
          title: "Structured Data That Actually Qualifies for Rich Snippets",
          description:
            "We validate that product schema implementation actually meets Google's requirements for rich snippets, not just technically valid markup that doesn't unlock anything visible. That validation step catches the gap between markup that passes a syntax check and markup that actually earns a star rating in search results.",
        },
      ],
    },
    techStack: {
      h2: "E-commerce SEO Tools We Use",
      paragraph:
        "We audit e-commerce sites using Screaming Frog configured for large-scale crawls, with custom extraction rules for faceted navigation and product schema validation. Category and product keyword research happens through Ahrefs and Semrush, mapped against your actual catalog structure. We validate structured data through Google's Rich Results Test and Merchant Center where applicable, and use Google Search Console's URL inspection and coverage reports to monitor indexation across large page counts.",
      tools: [
        "Screaming Frog",
        "Ahrefs",
        "Semrush",
        "Rich Results Test",
        "Google Merchant Center",
        "Google Search Console",
      ],
    },
    useCases: {
      h2: "Who Needs E-commerce SEO",
      cases: [
        {
          title: "Large Catalog E-commerce Sites",
          description:
            "Stores with hundreds or thousands of SKUs where manual page-by-page SEO isn't feasible and systematic, template-level solutions are required instead.",
        },
        {
          title: "Sites with Faceted Navigation Issues",
          description:
            "Stores experiencing crawl budget problems or duplicate content issues from filter and facet URLs multiplying page count unsustainably.",
        },
        {
          title: "Brands Selling Manufacturer-Supplied Products",
          description:
            "Retailers selling products with manufacturer-provided descriptions shared across many competing sites, facing duplicate content challenges requiring differentiation strategy.",
        },
        {
          title: "Stores Planning a Platform Migration",
          description:
            "E-commerce brands moving between platforms — Shopify, Magento, headless commerce — who need their existing SEO equity preserved through proper redirect mapping and URL structure planning.",
        },
      ],
    },
    faqs: [
      {
        question: "How is e-commerce SEO different from standard SEO?",
        answer:
          "E-commerce SEO deals with scale challenges — thousands of similar pages, faceted navigation, product schema, duplicate content from shared manufacturer data — that standard content-site SEO playbooks don't address at all.",
      },
      {
        question: "Should we noindex our faceted navigation pages?",
        answer:
          "Often yes for many filter combinations, but the right configuration depends entirely on your specific facets and actual search demand for filtered terms. We assess which combinations have genuine search value before recommending a blanket policy.",
      },
      {
        question: "How do we deal with duplicate product descriptions from manufacturers?",
        answer:
          "Options include writing unique descriptions for your highest-value products, using canonical tags strategically, or differentiating through other on-page elements when unique content isn't feasible across the entire catalog at scale.",
      },
      {
        question: "Will optimizing category pages actually drive meaningful traffic?",
        answer:
          "Often yes — category pages frequently target higher-volume commercial keywords than individual product pages, making them a strong ROI opportunity that many catalogs significantly underinvest in relative to the upside.",
      },
      {
        question: "Do you work with Shopify, WooCommerce, or other platforms specifically?",
        answer:
          "Yes, across all major e-commerce platforms available today. The SEO principles are largely platform-agnostic, though implementation details vary meaningfully, and we adapt our approach to your specific platform's particular constraints and capabilities.",
      },
      {
        question: "How long until e-commerce SEO shows results?",
        answer:
          "Similar to other SEO disciplines, typically 3-6 months for meaningful movement, though large catalogs with significant technical issues can often see faster initial wins once crawl budget problems are properly resolved first.",
      },
    ],
    cta: {
      h2: "Ready to fix the SEO issues hiding in your catalog?",
      subhead:
        "Let's audit your category structure and faceted navigation — the fixes that work at e-commerce scale look different from standard SEO advice.",
    },
    relatedSubServices: [
      {
        slug: "shopify",
        parentSlug: "web-development",
        name: "Shopify Development",
        shortDescription:
          "Platform development work that determines how much SEO flexibility your catalog actually has.",
      },
      {
        slug: "technical-seo",
        parentSlug: "seo",
        name: "Technical SEO",
        shortDescription:
          "Crawl budget and indexation fixes that apply beyond just e-commerce catalogs.",
      },
      {
        slug: "conversion-rate-optimization",
        parentSlug: "performance-marketing",
        name: "Conversion Rate Optimization",
        shortDescription:
          "Turning the organic traffic your catalog earns into completed orders.",
      },
    ],
  },
  {
    slug: "saas-seo",
    parentSlug: "seo",
    parentName: "SEO Services",
    parentLabel: "SEO",
    meta: {
      title: "SaaS SEO Services",
      description:
        "SaaS SEO — product-led content and commercial-intent keyword strategy built to convert organic visitors into trials and demos, not just blog readers.",
      keywords: [
        "SaaS SEO services",
        "SaaS SEO agency",
        "product-led SEO",
        "SaaS content marketing SEO",
        "B2B SaaS SEO",
        "SaaS keyword strategy",
        "trial conversion SEO",
        "SaaS organic growth",
      ],
    },
    hero: {
      eyebrow: "SaaS SEO",
      h1: "SaaS SEO Built to Convert Visitors Into Trials, Not Just Readers",
      subheadline:
        "We build SEO strategy specifically for SaaS companies — targeting commercial-intent keywords your actual buyers search, building product-led content that demonstrates value instead of generic thought leadership, and structuring the conversion path from organic visit to trial signup. Most SaaS SEO work optimizes for traffic; we optimize for activation.",
    },
    overview: {
      h2: "Why SaaS SEO Needs to Optimize for Activation, Not Just Traffic",
      paragraphs: [
        "Most SaaS content marketing chases broad, high-volume keywords that generate impressive traffic numbers in a monthly report but convert poorly, because the searchers behind those terms aren't actually evaluating software purchases. We prioritize commercial-intent keywords — comparison searches, 'best X software' lists, specific use-case and integration queries — that reflect genuine buyer evaluation behavior, even when the search volume is lower.",
        "Product-led content — pages that demonstrate what your product actually does for a specific use case or integration, rather than generic educational content about the broader category — tends to convert significantly better for SaaS than top-of-funnel thought leadership alone. We build content architecture that includes genuine product-led pages: use-case pages, integration pages, and comparison content that helps a prospect actually evaluate fit.",
        "B2B SaaS buying cycles are long and often involve multiple stakeholders, which means content needs to support the entire journey — not just top-of-funnel awareness content, but comparison and decision-stage content that helps a prospect build a business case internally. We map content to funnel stage deliberately, since most SaaS content strategies overinvest in awareness content.",
        "SEO can also support retention and expansion, not just acquisition — help center and documentation content optimized for search reduces support burden and improves activation, while feature-announcement and use-case content can support expansion within existing accounts. We think about SaaS SEO across the full customer lifecycle, not just top-of-funnel acquisition.",
        "Category creation and category leadership content matters more in SaaS than almost any other industry, since many SaaS products compete by defining a new category rather than fighting for share of an existing one. Content strategy for a category leader looks different from content for a challenger — it needs to establish and own the terminology prospects will eventually use to search for solutions like yours, rather than just ranking for terms a competitor already defined.",
        "Free tools and calculators built around your product's core value proposition are an underused SaaS SEO tactic, since a genuinely useful free tool — a calculator, a checker, a generator — earns organic links and traffic on its own merit while introducing prospects to your product in a low-pressure way. We treat these as a legitimate content investment alongside written content, not a nice-to-have side project, since they often outperform traditional blog content on both link acquisition and qualified traffic.",
      ],
    },
    whatsIncluded: {
      h2: "What SaaS SEO with Vertexa Includes",
      items: [
        {
          title: "Commercial-Intent Keyword Strategy",
          description:
            "Keyword research prioritizing comparison, alternative, and use-case search terms that reflect genuine buyer evaluation behavior, over broad informational keywords that generate traffic without conversion.",
        },
        {
          title: "Product-Led Content Development",
          description:
            "Use-case pages, integration pages, and comparison content built to actually demonstrate product value and support evaluation, not generic educational content disconnected from the product.",
        },
        {
          title: "Competitor Comparison Pages",
          description:
            "Strategic comparison and alternative pages targeting 'X vs Y' and '[Competitor] alternative' searches — a high-intent content type most SaaS companies underinvest in.",
        },
        {
          title: "Technical SEO for SaaS Sites",
          description:
            "Technical SEO addressing the specific patterns common to SaaS sites — app-adjacent marketing pages, documentation subdomains, and JavaScript-heavy product marketing pages.",
        },
        {
          title: "Trial & Demo Conversion Path Optimization",
          description:
            "On-page and content structure optimization specifically for the path from organic visit to trial signup or demo request, not just ranking for the sake of ranking.",
        },
        {
          title: "Help Center & Documentation SEO",
          description:
            "SEO optimization for help center and documentation content, which often ranks well for product-specific searches and supports both acquisition and retention simultaneously.",
        },
        {
          title: "SaaS Content Strategy by Funnel Stage",
          description:
            "Editorial strategy mapping content to awareness, consideration, and decision stages deliberately, addressing the common SaaS mistake of overinvesting in top-of-funnel content alone.",
        },
      ],
    },
    process: {
      h2: "How We Run SaaS SEO",
      steps: [
        {
          number: "01",
          title: "Buyer & Keyword Research",
          description:
            "We research your actual buyer's search behavior across the funnel — comparison terms, use-case searches, decision-stage queries — not just broad category keywords.",
        },
        {
          number: "02",
          title: "Content & Conversion Architecture",
          description:
            "We map content to funnel stage and design the conversion path from organic content to trial or demo, ensuring content does more than just attract traffic.",
        },
        {
          number: "03",
          title: "Production & Technical Implementation",
          description:
            "We produce product-led content and implement technical SEO fixes specific to SaaS site patterns, prioritized by commercial impact.",
        },
        {
          number: "04",
          title: "Conversion-Focused Monitoring",
          description:
            "We track trial signups and demo requests attributed to organic content, not just traffic and rankings, since conversion is the metric that actually matters for SaaS growth.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for SaaS SEO",
      points: [
        {
          title: "We Optimize for Trials, Not Just Traffic",
          description:
            "Generic SEO agencies report on rankings and sessions. We track and optimize for trial signups and demo requests attributed to organic content, the metric that actually matters for SaaS growth and the one that actually shows up in a board deck.",
        },
        {
          title: "Product-Led Content, Not Generic Thought Leadership",
          description:
            "We build content that demonstrates actual product value for specific use cases, rather than generic educational content disconnected from what your software actually does. The goal is content a prospect can use to evaluate fit, not content that just happens to rank.",
        },
        {
          title: "We Build for the Full Funnel, Not Just Awareness",
          description:
            "Most SaaS content strategies overinvest in top-of-funnel awareness content. We deliberately build comparison and decision-stage content that supports the parts of the funnel most agencies neglect, since that's usually where the actual revenue impact is concentrated.",
        },
        {
          title: "We Understand the Long B2B SaaS Sales Cycle",
          description:
            "Content built for a long, multi-stakeholder buying process looks different than content for an impulse B2C purchase. We architect for that reality, not a generic SEO playbook, including content that helps a champion build an internal business case for procurement and legal.",
        },
      ],
    },
    techStack: {
      h2: "SaaS SEO Tools We Use",
      paragraph:
        "We research SaaS-specific keyword opportunities through Ahrefs and Semrush, with particular attention to comparison and alternative search terms that standard keyword tools sometimes undervalue relative to their actual conversion potential. Technical SEO audits use Screaming Frog adapted for SaaS site patterns including JavaScript-rendered marketing pages and documentation subdomains. We track trial and demo conversion attribution through GA4 configured for SaaS-specific conversion events.",
      tools: [
        "Ahrefs",
        "Semrush",
        "Screaming Frog",
        "Google Analytics 4 (SaaS conversion tracking)",
        "Google Search Console",
      ],
    },
    useCases: {
      h2: "Who Needs SaaS SEO",
      cases: [
        {
          title: "SaaS Companies with High Traffic, Low Trial Conversion",
          description:
            "Companies whose content marketing generates meaningful organic traffic that isn't converting to trials or demos at a reasonable rate, often due to a top-of-funnel-heavy content mix.",
        },
        {
          title: "SaaS Companies Competing in Crowded Categories",
          description:
            "Products in competitive categories where comparison and alternative content is essential for capturing prospects actively evaluating multiple vendors.",
        },
        {
          title: "Product-Led Growth SaaS Companies",
          description:
            "Companies whose growth model depends on self-serve trial and signup conversion, where content needs to support evaluation and activation directly, often through free tools and in-product education that convert without a sales conversation.",
        },
      ],
    },
    faqs: [
      {
        question: "How is SaaS SEO different from standard B2B SEO?",
        answer:
          "SaaS SEO emphasizes product-led content, comparison pages, and trial/demo conversion paths specific to software evaluation behavior — patterns that differ meaningfully from general B2B services SEO and its longer, more relationship-driven sales cycle.",
      },
      {
        question: "Should we create comparison pages for our competitors?",
        answer:
          "Generally yes — 'X vs Y' and alternative searches are high-intent and frequently searched by prospects actively comparing options. These pages are often significantly underutilized relative to their actual conversion potential.",
      },
      {
        question: "How do you measure success — traffic or trial signups?",
        answer:
          "We track both metrics closely, but trial signups and demo requests attributed to organic content are what we ultimately optimize toward. Traffic without conversion isn't real success in our view.",
      },
      {
        question: "Can SEO help with churn and retention, not just new signups?",
        answer:
          "Yes, through optimized help center and documentation content that improves activation and reduces support friction, and through feature-focused content that supports expansion within existing accounts.",
      },
      {
        question: "How long until SaaS SEO shows trial signup impact?",
        answer:
          "Similar to other SEO timelines — meaningful movement within 3-6 months, with compounding results beyond that as comparison and decision-stage content steadily builds authority for competitive category terms.",
      },
      {
        question: "Do you write the product-led content, or just strategize?",
        answer:
          "Both — we can produce comparison pages, use-case content, and other product-led assets directly, or work alongside your existing content or product marketing team.",
      },
    ],
    cta: {
      h2: "Ready for SEO that drives trials, not just traffic?",
      subhead:
        "Tell us about your product and funnel — we'll show you the commercial-intent keywords and content gaps your current strategy is probably missing.",
    },
    relatedSubServices: [
      {
        slug: "technical-seo",
        parentSlug: "seo",
        name: "Technical SEO",
        shortDescription:
          "Fixing the JavaScript rendering and crawlability issues common to SaaS marketing sites.",
      },
      {
        slug: "content-strategy",
        parentSlug: "content-social-media",
        name: "Content Strategy",
        shortDescription:
          "Editorial planning for the funnel-stage content SaaS SEO depends on.",
      },
      {
        slug: "conversion-rate-optimization",
        parentSlug: "performance-marketing",
        name: "Conversion Rate Optimization",
        shortDescription:
          "Turning organic visits into trial signups once they land on your site.",
      },
    ],
  },
  {
    slug: "local-seo",
    parentSlug: "seo",
    parentName: "SEO Services",
    parentLabel: "SEO",
    meta: {
      title: "Local SEO Services",
      description:
        "Local SEO — Google Business Profile optimization, citation building, and location page strategy built to win local pack rankings and visibility.",
      keywords: [
        "local SEO services",
        "local SEO agency",
        "Google Business Profile optimization",
        "local citation building",
        "local pack rankings",
        "multi-location SEO",
        "NAP consistency",
        "local search optimization",
      ],
    },
    hero: {
      eyebrow: "Local SEO",
      h1: "Local SEO That Wins the Map Pack, Not Just the Website",
      subheadline:
        "We optimize Google Business Profiles, build consistent local citations, and structure location pages for businesses competing in local and regional search — where ranking in the map pack often matters more than ranking on the standard organic results below it. Local search has its own ranking factors most general SEO strategies don't account for.",
    },
    overview: {
      h2: "Why the Map Pack Plays by Different Rules",
      paragraphs: [
        "Local search results include a distinct 'map pack' surface — the three local business listings shown above standard organic results for location-relevant searches — governed by ranking factors that differ meaningfully from standard organic SEO: proximity, Google Business Profile completeness and engagement, and local citation consistency matter more here than the backlink-and-content factors that dominate standard organic rankings.",
        "Google Business Profile is the central asset in local SEO, and most businesses leave significant value unclaimed — incomplete categories, outdated hours, unanswered reviews, and missed opportunities to post updates and respond to questions all affect local ranking and conversion. We treat Google Business Profile optimization as an ongoing discipline, not a one-time setup task.",
        "Citation consistency — your business name, address, and phone number (NAP) matching exactly across directories, review sites, and other local listings — still matters for local ranking signals, even though it's less glamorous than other SEO work. Inconsistent or outdated citations confuse local ranking algorithms and can actively suppress visibility.",
        "Multi-location businesses face a distinct version of this challenge — managing Google Business Profiles, citations, and location pages consistently across many locations simultaneously, often complicated by franchise or multi-brand structures. We build systematic processes for multi-location local SEO rather than treating each location as a one-off project.",
        "Review velocity and sentiment have become a bigger factor in local visibility than most businesses realize, since Google's local algorithm reads recency and rating distribution as a signal of an actively maintained, trustworthy business. A location with strong reviews from two years ago but nothing recent sends a weaker signal than a competitor with a steady, current stream of reviews, even if the average rating is similar — which is why review generation needs to be a continuous process, not a one-time push after launch.",
        "Local search behavior is also increasingly mobile and voice-driven, with searches like 'near me' and conversational location queries growing faster than typed desktop search. Optimizing for this shift means making sure your Google Business Profile data — hours, service areas, attributes — is precise enough to surface correctly in these more conversational, intent-driven queries, not just accurate enough to pass a manual glance.",
        "Local pack ranking also responds to genuine proximity in ways businesses can't fully control, which makes it tempting to treat local SEO as a fixed ceiling rather than something worth investing in. We push back on that framing — within the proximity constraint that does exist, Profile completeness, review signals, and citation consistency still meaningfully shift who wins the map pack for searchers at a comparable distance, and that's the part of the equation actually worth optimizing.",
      ],
    },
    whatsIncluded: {
      h2: "What Local SEO with Vertexa Includes",
      items: [
        {
          title: "Google Business Profile Optimization",
          description:
            "Complete profile setup and ongoing optimization — categories, services, photos, posts, and review response management — treated as an active asset, not a one-time setup task.",
        },
        {
          title: "Local Citation Building & Audits",
          description:
            "Auditing existing citations for NAP consistency across directories and review platforms, then building new, consistent citations on relevant local and industry-specific directories.",
        },
        {
          title: "Location Page SEO",
          description:
            "Dedicated, genuinely useful location pages for multi-location businesses, optimized for location-specific search terms without becoming thin, duplicate-feeling templated content.",
        },
        {
          title: "Review Generation & Management Strategy",
          description:
            "Systematic approaches to generating genuine customer reviews and responding to them professionally, since review quantity and recency are meaningful local ranking and conversion factors.",
        },
        {
          title: "Local Link Building",
          description:
            "Building local backlinks from community organizations, local press, and industry associations relevant to your specific geographic market.",
        },
        {
          title: "Multi-Location SEO Management",
          description:
            "Systematic, consistent management of Google Business Profiles, citations, and location pages across many business locations simultaneously, including franchise structures.",
        },
        {
          title: "Local Keyword & Competitive Research",
          description:
            "Researching the specific local search terms and competitive landscape in your actual market, since local search volume and competition vary significantly by geography.",
        },
      ],
    },
    process: {
      h2: "How We Run Local SEO",
      steps: [
        {
          number: "01",
          title: "Local Presence Audit",
          description:
            "We audit your current Google Business Profile, citations, and location pages (if any) to identify gaps, inconsistencies, and missed optimization opportunities.",
        },
        {
          number: "02",
          title: "Foundation Building",
          description:
            "We optimize or build out Google Business Profiles and correct citation inconsistencies, establishing the consistent local presence foundation everything else builds on.",
        },
        {
          number: "03",
          title: "Content & Review Strategy",
          description:
            "We build out location page content and implement review generation processes, since both ongoing visibility and conversion depend on active management, not one-time setup.",
        },
        {
          number: "04",
          title: "Ongoing Local Optimization",
          description:
            "We monitor map pack rankings and local visibility, adjusting strategy as local competition and Google's local algorithm evolve.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Local SEO",
      points: [
        {
          title: "We Treat Google Business Profile as an Active Asset",
          description:
            "Many agencies set up a Google Business Profile once and move on. We manage it as an ongoing asset — regular posts, review responses, and updates that local ranking factors reward.",
        },
        {
          title: "Real Multi-Location Experience",
          description:
            "Managing local SEO consistently across multiple locations is a genuinely different operational challenge than single-location SEO, and we have systematic processes for it.",
        },
        {
          title: "Citation Consistency Done Thoroughly",
          description:
            "We audit citations across the full range of relevant directories, not just the handful of major ones, since inconsistencies on lesser-known directories can still affect local ranking signals. A single outdated phone number on an obscure directory can quietly undercut an otherwise clean citation profile.",
        },
        {
          title: "Location Pages That Aren't Thin Duplicate Content",
          description:
            "We build genuinely useful, differentiated location pages rather than a templated page with the address swapped out, which search engines increasingly recognize and discount. Each page reflects what's actually true and distinct about that specific location, not a find-and-replace exercise across a city list.",
        },
      ],
    },
    techStack: {
      h2: "Local SEO Tools We Use",
      paragraph:
        "We manage Google Business Profile optimization directly through Google's Business Profile platform, with citation auditing and building through tools like BrightLocal and manual directory research for relevance-specific listings. Local keyword research happens through a combination of Google's own local search behavior data and tools like Semrush's local pack tracking features. Review management and generation processes integrate with whatever CRM or customer communication tools a client already uses.",
      tools: [
        "Google Business Profile",
        "BrightLocal",
        "Semrush (Local Pack Tracking)",
        "Local citation directories",
      ],
    },
    useCases: {
      h2: "Who Needs Local SEO",
      cases: [
        {
          title: "Single-Location Local Businesses",
          description:
            "Service-area and storefront businesses competing primarily for local search visibility, where map pack ranking often drives more business than standard organic results.",
        },
        {
          title: "Multi-Location & Franchise Businesses",
          description:
            "Businesses managing local SEO consistently across many locations, needing systematic processes rather than treating each location as an independent project.",
        },
        {
          title: "Service-Area Businesses Without a Storefront",
          description:
            "Businesses serving a geographic area without a public-facing location — contractors, home services, mobile businesses — with their own specific configuration needs.",
        },
        {
          title: "Businesses with Inconsistent or Outdated Citations",
          description:
            "Companies that have changed address, phone number, or business name over time, leaving a trail of outdated citations across the web that actively suppress current local visibility.",
        },
      ],
    },
    faqs: [
      {
        question: "How is local SEO different from standard SEO?",
        answer:
          "Local SEO targets the map pack and location-specific search results, governed by factors like Google Business Profile completeness, citation consistency, and proximity — distinct from the standard organic ranking factors that dominate elsewhere.",
      },
      {
        question: "How important are online reviews for local SEO?",
        answer:
          "Very important — review quantity, recency, and rating all factor into local ranking, and reviews also directly influence whether searchers click through and convert once they see your listing.",
      },
      {
        question: "Do we need a physical location to benefit from local SEO?",
        answer:
          "No — service-area businesses without a public storefront can still optimize Google Business Profile and local SEO, with specific configuration for service-area business types.",
      },
      {
        question: "How do you handle local SEO for businesses with many locations?",
        answer:
          "We build systematic processes for managing Google Business Profiles, citations, and location pages consistently across all locations, rather than treating each as a disconnected project.",
      },
      {
        question: "How long does local SEO take to show results?",
        answer:
          "Often faster than standard organic SEO for the map pack specifically — meaningful movement within 2-4 months is common, though competitive markets and multi-location strategies can take longer.",
      },
      {
        question: "Can you help us respond to negative reviews?",
        answer:
          "Yes, we help develop a professional review response strategy, including how to handle negative reviews constructively, since response quality affects both reputation and local ranking signals.",
      },
    ],
    cta: {
      h2: "Ready to win the map pack in your market?",
      subhead:
        "Let's audit your Google Business Profile and citations — local SEO has its own rules, and most businesses are leaving easy visibility on the table.",
    },
    relatedSubServices: [
      {
        slug: "technical-seo",
        parentSlug: "seo",
        name: "Technical SEO",
        shortDescription:
          "Site-wide technical health that supports local rankings too.",
      },
      {
        slug: "social-media-management",
        parentSlug: "content-social-media",
        name: "Social Media Management",
        shortDescription:
          "Local community engagement that complements Google Business Profile activity.",
      },
      {
        slug: "content-strategy",
        parentSlug: "content-social-media",
        name: "Content Strategy",
        shortDescription:
          "Location-specific content planning for multi-location businesses.",
      },
    ],
  },
  {
    slug: "google-ads",
    parentSlug: "performance-marketing",
    parentName: "Performance Marketing",
    parentLabel: "Performance Marketing",
    meta: {
      title: "Google Ads Management Services",
      description:
        "Google Ads management — Search, Shopping, and Performance Max campaigns engineered around ROAS and CAC, with proper conversion tracking from day one.",
      keywords: [
        "Google Ads management services",
        "Google Ads agency",
        "Google Ads management",
        "Performance Max management",
        "Google Shopping ads",
        "PPC management agency",
        "Google Ads audit",
        "Smart Bidding strategy",
      ],
    },
    hero: {
      eyebrow: "Google Ads Management",
      h1: "Google Ads Management Built Around Commercial Intent",
      subheadline:
        "We manage Google Ads campaigns across Search, Shopping, Performance Max, and YouTube — built around the commercial intent keywords your actual buyers search, with conversion tracking that survives iOS privacy changes and cookie deprecation. Most Google Ads accounts we audit are bleeding budget on broken tracking before we ever touch bid strategy.",
    },
    overview: {
      h2: "Why Conversion Tracking Comes Before Bid Strategy",
      paragraphs: [
        "Google Ads captures the highest-intent traffic of any paid channel, because search itself is an explicit expression of what someone wants right now — which makes broken conversion tracking in a Google Ads account especially costly. We start every engagement by auditing and fixing tracking, because optimizing Smart Bidding against incomplete or duplicated conversion data actively makes campaigns worse, not better.",
        "Search campaigns target explicit commercial intent and remain the foundation for most accounts, while Shopping campaigns serve product-level intent for e-commerce, and Performance Max blends multiple Google inventory types behind a single automated campaign type. We choose campaign types based on where your actual buyers are in their decision process, not by defaulting to whichever campaign type Google's interface highlights as recommended.",
        "Smart Bidding — Google's machine learning-driven bid automation — performs well, but only when fed clean, complete conversion data; feeding it broken or partial signals just means the algorithm optimizes confidently toward the wrong outcome faster than manual bidding ever could. This is why conversion tracking quality is the actual lever underneath most 'Smart Bidding isn't working' complaints we inherit.",
        "Performance Max campaigns trade transparency for reach, automatically serving across Search, Display, YouTube, Discover, and Gmail from a single campaign — powerful, but a genuine black box for understanding exactly where budget is being spent. We use Performance Max deliberately, with the asset groups, audience signals, and exclusions configured to make it as accountable as a genuinely automated campaign type can be.",
        "Account structure decisions made early tend to compound, for better or worse, as an account scales. A campaign and ad group structure that made sense at $2,000 a month often actively limits performance at $20,000 a month, since the segmentation that once helped control budget allocation can end up fragmenting conversion data across too many low-volume ad groups for Smart Bidding to learn effectively. We periodically reassess structure against current spend rather than letting an account's architecture calcify around decisions made at a much smaller scale.",
        "Auction insights and competitive pressure also deserve regular attention, since a sudden shift in impression share or average position often signals a new competitor entering the auction rather than anything wrong with your own campaign. We review competitive movement as a routine part of account management, distinguishing genuine competitive pressure from a self-inflicted performance dip before recommending any change in strategy.",
      ],
    },
    whatsIncluded: {
      h2: "What Google Ads Management with Vertexa Includes",
      items: [
        {
          title: "Search Campaign Management",
          description:
            "Search campaigns built around commercial intent keywords, with ad copy, extensions, and landing page alignment optimized for the specific intent behind each keyword group.",
        },
        {
          title: "Shopping & Performance Max Campaigns",
          description:
            "Product feed optimization and Shopping/Performance Max campaign management for e-commerce, structured to give Google's automation the signals it needs to actually perform.",
        },
        {
          title: "Conversion Tracking & Attribution Setup",
          description:
            "Server-side conversion tracking and Enhanced Conversions implementation that survives iOS privacy restrictions and cookie deprecation, fixing the broken tracking that quietly inflates CPA.",
        },
        {
          title: "Smart Bidding Strategy & Optimization",
          description:
            "Bid strategy selection and ongoing optimization matched to your actual conversion volume and goals, built on the clean conversion data Smart Bidding needs to perform well.",
        },
        {
          title: "Search Query & Negative Keyword Management",
          description:
            "Ongoing search query analysis and negative keyword management to prevent budget waste on irrelevant or low-intent search terms triggering your ads.",
        },
        {
          title: "Landing Page Alignment",
          description:
            "Ensuring ad messaging, keywords, and landing page content are tightly aligned, since Quality Score and conversion rate both suffer when there's a gap between ad and page.",
        },
        {
          title: "Account Audits & Restructuring",
          description:
            "Comprehensive audits of existing Google Ads accounts identifying wasted spend, tracking issues, and structural problems, with a clear restructuring plan.",
        },
      ],
    },
    process: {
      h2: "How We Manage Google Ads",
      steps: [
        {
          number: "01",
          title: "Audit & Tracking Fix",
          description:
            "We audit your existing account (or build the foundation for a new one) and fix conversion tracking first, since every subsequent optimization depends on clean data.",
        },
        {
          number: "02",
          title: "Campaign Structure & Strategy",
          description:
            "We structure campaigns by intent and funnel stage, choosing bid strategies appropriate to your actual conversion volume and business goals.",
        },
        {
          number: "03",
          title: "Launch & Active Management",
          description:
            "Campaigns launch with close monitoring in the early weeks, since new campaigns and Smart Bidding strategies need a learning period before they stabilize.",
        },
        {
          number: "04",
          title: "Ongoing Optimization & Reporting",
          description:
            "We optimize continuously based on performance data, with reporting tied to ROAS, CAC, and revenue impact, not just clicks and impressions.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Google Ads",
      points: [
        {
          title: "We Fix Tracking Before Touching Bid Strategy",
          description:
            "Most Google Ads accounts we inherit have measurement gaps that make Smart Bidding optimize against incomplete data. We fix this first, since it's the actual root cause behind most underperforming accounts.",
        },
        {
          title: "We Choose Campaign Types Deliberately",
          description:
            "We don't default to Performance Max because Google's interface recommends it. We choose campaign types based on your actual funnel and the transparency-versus-automation tradeoff that makes sense.",
        },
        {
          title: "Search Query Management as Ongoing Discipline",
          description:
            "Negative keyword and search query management is easy to neglect after initial setup. We treat it as continuous work, since budget waste compounds quietly without it, often invisible in a top-line ROAS number until it's been bleeding for months.",
        },
        {
          title: "Landing Pages Are Part of the Campaign, Not Separate",
          description:
            "We won't optimize ad copy in isolation from the landing page it sends traffic to. Quality Score and conversion rate both depend on alignment between the two, and a great ad sending traffic to a mismatched page is money spent solving the wrong problem.",
        },
      ],
    },
    techStack: {
      h2: "Google Ads Tools We Use",
      paragraph:
        "We manage campaigns directly in Google Ads, using GAQL (Google Ads Query Language) for custom reporting and bulk account analysis beyond what the standard interface surfaces. Conversion tracking runs through Google Tag Manager with server-side tagging and Enhanced Conversions for first-party data matching. We use Google Analytics 4 for cross-channel attribution context and Looker Studio for client-facing reporting tied to business outcomes.",
      tools: [
        "Google Ads",
        "Google Tag Manager",
        "GAQL",
        "Google Analytics 4",
        "Looker Studio",
        "Google Merchant Center",
      ],
    },
    useCases: {
      h2: "Who Needs Google Ads Management",
      cases: [
        {
          title: "Businesses with High-Intent Search Demand",
          description:
            "Companies whose buyers actively search for solutions — software, professional services, considered purchases — where Search campaigns capture demand at the exact moment of intent.",
        },
        {
          title: "E-commerce Brands Running Shopping Campaigns",
          description:
            "Online retailers needing product-level visibility through Shopping and Performance Max campaigns, with feed optimization as a core part of campaign performance.",
        },
        {
          title: "Accounts with Broken or Incomplete Tracking",
          description:
            "Businesses whose existing Google Ads account has been running on incomplete conversion data, needing a tracking fix before any optimization work can be trusted.",
        },
        {
          title: "Brands Transitioning Away from an Agency or In-House Team",
          description:
            "Companies inheriting an existing account from a previous agency or departing employee, needing an honest audit of what's actually working before deciding what to keep or rebuild.",
        },
      ],
    },
    faqs: [
      {
        question: "What's a realistic minimum budget for Google Ads?",
        answer:
          "It varies by industry and competition, but we typically recommend at least enough budget to gather statistically meaningful conversion data within 4-6 weeks — often starting around $3,000-$5,000 per month.",
      },
      {
        question: "Should we use Performance Max or stick with standard Search campaigns?",
        answer:
          "It depends on your goals and how much transparency you need into where budget is spent. Performance Max can extend reach efficiently, but Search campaigns offer more control. We'll recommend based on your specific situation and reporting needs.",
      },
      {
        question: "How long before we see results from Google Ads?",
        answer:
          "Initial data and Smart Bidding learning typically stabilizes within 2-4 weeks. Meaningful optimization improvements usually show by month two as we accumulate enough conversion data.",
      },
      {
        question: "Do you manage Google Shopping feeds too?",
        answer:
          "Yes — product feed optimization is core to Shopping and Performance Max performance, and we manage feed structure, titles, and attributes alongside campaign management.",
      },
      {
        question: "Can you fix our account if conversion tracking has been broken for months?",
        answer:
          "Yes, this is one of the most common starting points for new engagements. We audit and rebuild tracking, and while historical data can't be recovered, going-forward data becomes trustworthy.",
      },
      {
        question: "Do you handle both B2B and e-commerce Google Ads accounts?",
        answer:
          "Yes, though the campaign structure and strategy differ significantly between B2B lead generation and e-commerce — we tailor the approach to your specific business model.",
      },
    ],
    cta: {
      h2: "Ready to make Google Ads actually profitable?",
      subhead:
        "Let's audit your account and conversion tracking — most of the budget waste we find happens before optimization even starts.",
    },
    relatedSubServices: [
      {
        slug: "conversion-rate-optimization",
        parentSlug: "performance-marketing",
        name: "Conversion Rate Optimization",
        shortDescription:
          "Turning the clicks Google Ads earns into more completed conversions.",
      },
      {
        slug: "meta-ads",
        parentSlug: "performance-marketing",
        name: "Meta Ads",
        shortDescription:
          "A complementary channel for brands also running paid social.",
      },
      {
        slug: "technical-seo",
        parentSlug: "seo",
        name: "Technical SEO",
        shortDescription:
          "Organic visibility to complement what you're paying for in Google Ads.",
      },
    ],
  },
  {
    slug: "meta-ads",
    parentSlug: "performance-marketing",
    parentName: "Performance Marketing",
    parentLabel: "Performance Marketing",
    meta: {
      title: "Meta Ads Management Services",
      description:
        "Meta Ads management — Facebook and Instagram campaigns built on creative testing velocity, Pixel and CAPI tracking, and Advantage+ optimization.",
      keywords: [
        "Meta Ads management services",
        "Facebook Ads agency",
        "Instagram Ads management",
        "Meta Pixel setup",
        "Conversions API setup",
        "Advantage+ campaigns",
        "Facebook Ads creative testing",
        "Meta Ads agency",
      ],
    },
    hero: {
      eyebrow: "Meta Ads Management",
      h1: "Meta Ads Built on Creative Testing, Not Just Targeting",
      subheadline:
        "We manage Facebook and Instagram campaigns built around continuous creative testing and proper Pixel and Conversions API tracking — because on Meta, creative quality and testing velocity drive performance more than granular audience targeting does today. Most accounts plateau not from a targeting problem but from running the same three ads for two months straight.",
    },
    overview: {
      h2: "Why Creative Velocity Beats Targeting Precision on Meta",
      paragraphs: [
        "Meta's advertising platform has shifted fundamentally since Apple's iOS 14 privacy changes reduced the granular audience targeting and tracking precision advertisers used to rely on. Meta's own machine learning now does more of the audience-finding work, which means creative quality and the signal quality you feed the algorithm matter more for performance than manual audience targeting precision does today.",
        "Conversions API (CAPI) has become essential infrastructure, not an optional add-on — it sends conversion data directly from your server to Meta, supplementing what the browser-based Pixel can capture given browser privacy restrictions and ad blockers. Accounts running Pixel-only tracking are working with an incomplete picture of what's actually converting, which degrades Meta's ability to optimize delivery.",
        "Advantage+ campaigns represent Meta's push toward broader, more automated targeting backed by stronger creative and conversion signals, often outperforming heavily segmented manual campaigns when fed quality creative and clean tracking data. We use Advantage+ deliberately rather than reflexively, understanding when broader automated targeting genuinely outperforms manual audience building.",
        "Creative testing velocity is the lever most accounts underinvest in — ad fatigue sets in faster than most teams expect, and an account running the same handful of creatives for months is leaving performance on the table regardless of how well targeting and bidding are configured. We treat creative production as a continuous pipeline, not a one-time deliverable refreshed quarterly.",
        "Budget allocation across the funnel also needs regular rebalancing rather than a fixed split set once at launch, since prospecting and retargeting audiences behave differently as an account scales and as your retargeting pool grows or shrinks with site traffic. An account that worked well at a 70/30 prospecting-to-retargeting split at one budget level often needs a different ratio entirely once spend doubles, and we revisit this allocation as part of ongoing management rather than leaving it static.",
        "Creative format mix matters as much as creative volume, since an account running only static image ads is leaving meaningful performance on the table when video and interactive formats are tested alongside it. We diversify creative formats deliberately rather than defaulting to whichever format was easiest to produce first, since Meta's delivery algorithm rewards accounts that give it more varied, high-quality creative to test against an audience.",
      ],
    },
    whatsIncluded: {
      h2: "What Meta Ads Management with Vertexa Includes",
      items: [
        {
          title: "Facebook & Instagram Campaign Management",
          description:
            "Full campaign management across Meta's placements, structured around your actual funnel — prospecting, retargeting, and lookalike audiences — with continuous optimization.",
        },
        {
          title: "Pixel & Conversions API (CAPI) Setup",
          description:
            "Server-side Conversions API implementation alongside Pixel tracking, ensuring Meta receives complete, accurate conversion signals despite browser privacy restrictions.",
        },
        {
          title: "Advantage+ Shopping & App Campaigns",
          description:
            "Strategic use of Meta's automated campaign types when broader targeting backed by strong creative signals genuinely outperforms manual audience segmentation.",
        },
        {
          title: "Creative Testing & Production",
          description:
            "Continuous ad creative production and testing across formats — static, video, UGC-style — at a cadence fast enough to stay ahead of audience fatigue.",
        },
        {
          title: "Retargeting & Lifecycle Campaigns",
          description:
            "Multi-stage retargeting sequences meeting prospects at different points in their journey, rather than showing the same generic ad to everyone who's ever visited your site.",
        },
        {
          title: "Catalog & Dynamic Ads Setup",
          description:
            "Product catalog integration and dynamic ad setup for e-commerce, automatically serving relevant product ads based on browsing and purchase behavior.",
        },
        {
          title: "Account Audits & Restructuring",
          description:
            "Auditing existing Meta accounts for tracking gaps, creative fatigue, and structural inefficiencies, with a clear plan to fix what's actually underperforming.",
        },
      ],
    },
    process: {
      h2: "How We Manage Meta Ads",
      steps: [
        {
          number: "01",
          title: "Tracking Audit & CAPI Setup",
          description:
            "We audit existing Pixel and CAPI implementation and fix tracking gaps first, since accurate conversion signals are the foundation Meta's algorithm needs to optimize delivery well.",
        },
        {
          number: "02",
          title: "Account Structure & Strategy",
          description:
            "We structure campaigns around your funnel and decide where Advantage+ automation fits versus where more manual control makes sense for your specific goals.",
        },
        {
          number: "03",
          title: "Creative Production & Launch",
          description:
            "We launch with multiple creative variants from day one, since a single ad creative rarely tells you enough to optimize confidently.",
        },
        {
          number: "04",
          title: "Continuous Testing & Optimization",
          description:
            "We maintain an ongoing creative testing cadence and optimize budget allocation toward what's actually working, refreshing creative before fatigue sets in.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Meta Ads",
      points: [
        {
          title: "Creative Velocity as a Core Discipline",
          description:
            "We treat creative production as continuous, not a one-time deliverable. Most underperforming Meta accounts we inherit are suffering from creative fatigue, not a targeting or bidding problem.",
        },
        {
          title: "CAPI Implementation Done Properly",
          description:
            "Server-side tracking implementation is easy to do poorly. We implement Conversions API correctly, validated against Meta's Events Manager, contributing useful signal, not just technically present.",
        },
        {
          title: "Advantage+ Used Deliberately, Not Reflexively",
          description:
            "We understand when Meta's automated campaign types genuinely outperform manual targeting, and when more granular control still serves a specific account better, and we'll tell you plainly when the answer is the less exciting, more manual option.",
        },
        {
          title: "We Report on Revenue Impact, Not Just Platform Metrics",
          description:
            "We tie Meta Ads performance back to actual revenue and customer acquisition cost, not just the platform's own reported metrics, which can overstate impact without cross-channel context. A client should never have to translate platform jargon into business outcomes themselves.",
        },
      ],
    },
    techStack: {
      h2: "Meta Ads Tools We Use",
      paragraph:
        "We manage campaigns through Meta Ads Manager, with Conversions API implemented server-side alongside the Meta Pixel for complete conversion signal coverage. Creative testing and asset management happens through a structured production pipeline feeding into Ads Manager's dynamic creative testing features. We validate tracking accuracy through Meta's Events Manager and tie performance back to business outcomes using GA4 and, for e-commerce clients, tools like Triple Whale for blended cross-channel attribution.",
      tools: [
        "Meta Ads Manager",
        "Meta Pixel",
        "Conversions API (CAPI)",
        "Events Manager",
        "Google Analytics 4",
        "Triple Whale",
      ],
    },
    useCases: {
      h2: "Who Needs Meta Ads Management",
      cases: [
        {
          title: "D2C & E-commerce Brands",
          description:
            "Brands relying on strong visual creative and catalog-driven dynamic ads to drive direct sales, where creative testing velocity directly correlates with acquisition efficiency.",
        },
        {
          title: "Consumer Apps & Subscription Products",
          description:
            "Products needing efficient user acquisition through Meta's broad reach and Advantage+ app campaigns, with conversion tracking tuned for app install and subscription events specifically, not generic e-commerce purchase conversions.",
        },
        {
          title: "Brands Recovering from Post-iOS14 Performance Decline",
          description:
            "Businesses whose Meta Ads performance declined after privacy changes and haven't yet rebuilt tracking and creative strategy for the current advertising environment.",
        },
        {
          title: "Brands with Stale or Fatigued Creative",
          description:
            "Accounts running the same handful of ad creatives for months, where performance has plateaued not because of targeting or bidding issues but simply because the audience has seen the same ads too many times.",
        },
      ],
    },
    faqs: [
      {
        question: "Is Meta Ads still effective after the iOS privacy changes?",
        answer:
          "Yes, but the playbook has changed — creative quality and signal quality (through CAPI) matter more than they used to, while granular manual targeting matters less. Accounts that haven't adapted their approach tend to underperform noticeably.",
      },
      {
        question: "What's Conversions API and do we really need it?",
        answer:
          "CAPI sends conversion data directly from your own server to Meta, supplementing what the browser-based Pixel alone can capture given privacy restrictions. Yes, it's effectively required now for accurate optimization and reliable delivery.",
      },
      {
        question: "How much creative do we need to produce regularly?",
        answer:
          "More than most teams expect — we typically recommend testing several new creative concepts monthly to stay ahead of audience fatigue, though the right cadence depends on your budget, audience size, and how quickly your specific account burns through impressions.",
      },
      {
        question: "Should we use Advantage+ campaigns or build manual audiences?",
        answer:
          "It depends on your conversion volume and creative quality — Advantage+ tends to perform well with strong creative and clean tracking data feeding it. We'll test both and recommend based on actual performance.",
      },
      {
        question: "How quickly will we see results?",
        answer:
          "Initial learning phase signals usually emerge within 1-2 weeks. Meaningful efficiency improvements from creative testing and optimization typically show within 4-6 weeks of consistent management.",
      },
      {
        question: "Do you create the ad creative, or just manage the campaigns?",
        answer:
          "We handle both, typically, since creative and media buying are closely linked on Meta. We can also work alongside your in-house creative team if you prefer that structure.",
      },
    ],
    cta: {
      h2: "Ready for Meta Ads that don't plateau after month one?",
      subhead:
        "Let's audit your tracking and creative testing cadence — most underperforming accounts are fixable with the right foundation.",
    },
    relatedSubServices: [
      {
        slug: "tiktok-ads",
        parentSlug: "performance-marketing",
        name: "TikTok Ads",
        shortDescription:
          "A complementary short-form video channel for brands reaching younger audiences.",
      },
      {
        slug: "conversion-rate-optimization",
        parentSlug: "performance-marketing",
        name: "Conversion Rate Optimization",
        shortDescription:
          "Turning Meta traffic into more completed conversions once it lands.",
      },
      {
        slug: "social-media-management",
        parentSlug: "content-social-media",
        name: "Social Media Management",
        shortDescription:
          "Organic content strategy that feeds strong creative into Spark and Advantage+ campaigns.",
      },
    ],
  },
  {
    slug: "linkedin-ads",
    parentSlug: "performance-marketing",
    parentName: "Performance Marketing",
    parentLabel: "Performance Marketing",
    meta: {
      title: "LinkedIn Ads Management Services",
      description:
        "LinkedIn Ads management — B2B campaigns targeting by job title, seniority, and company size, built for demand generation and account-based marketing.",
      keywords: [
        "LinkedIn Ads management services",
        "LinkedIn Ads agency",
        "B2B LinkedIn advertising",
        "account-based marketing LinkedIn",
        "LinkedIn lead gen forms",
        "LinkedIn Ads targeting",
        "B2B demand generation ads",
        "LinkedIn Campaign Manager",
      ],
    },
    hero: {
      eyebrow: "LinkedIn Ads Management",
      h1: "LinkedIn Ads for B2B Deals Worth the Higher Cost",
      subheadline:
        "We manage LinkedIn Ads campaigns targeting by job title, seniority, company size, and industry — built for demand generation and account-based marketing where the deal size justifies LinkedIn's notably higher cost per click. This isn't the right channel for every business, but for the right B2B deal size, nothing else targets decision-makers this precisely.",
    },
    overview: {
      h2: "Why LinkedIn's Cost Premium Is Justified for the Right Deal Size",
      paragraphs: [
        "LinkedIn Ads cost significantly more per click than Meta or Google for comparable reach, and that premium is justified only when your deal size and sales cycle support it — this is not a channel for low-margin transactional purchases. For B2B companies selling into mid-market or enterprise accounts, LinkedIn's targeting precision by job title, seniority, function, and company size reaches decision-makers no other platform can identify as reliably.",
        "Account-based marketing on LinkedIn, using Matched Audiences to target specific company lists, lets B2B marketing and sales teams coordinate outreach toward named target accounts rather than broad demographic targeting — genuinely valuable for companies with a defined target account list and an enterprise sales motion that benefits from coordinated multi-channel pressure.",
        "Lead gen forms — LinkedIn's native form that pre-fills with the user's profile data — typically produce higher form completion rates than sending traffic to an external landing page, but the leads that result often need more nurturing, since the friction of leaving LinkedIn has been removed. We choose between native forms and landing pages based on your sales team's capacity to handle lead volume versus lead quality tradeoffs.",
        "Creative and messaging on LinkedIn need to match the platform's professional context — more text-forward, value-proposition-driven content tends to outperform the highly visual, entertainment-adjacent creative that works well on Meta or TikTok. We build LinkedIn-specific creative rather than repurposing assets built for a different platform's audience expectations.",
        "Budget pacing on LinkedIn also deserves more attention than it typically gets, since LinkedIn's auction dynamics and audience sizes for tightly defined B2B segments are small enough that aggressive daily budgets can exhaust a relevant audience within days, leaving the campaign serving to progressively less relevant overflow inventory for the rest of the month. We size daily budgets against actual audience size rather than treating budget pacing as a simple division of monthly spend across thirty days.",
        "Sales and marketing alignment matters more for LinkedIn than for almost any other paid channel, since the value of a lead depends heavily on how quickly and effectively your sales team follows up, especially with native lead gen forms that can generate volume faster than a sales team is prepared to handle well. We coordinate directly with sales on response time and qualification criteria as part of campaign setup, not as an afterthought once leads start arriving.",
      ],
    },
    whatsIncluded: {
      h2: "What LinkedIn Ads Management with Vertexa Includes",
      items: [
        {
          title: "B2B Campaign Strategy & Targeting",
          description:
            "Campaign targeting by job title, seniority, function, company size, and industry, built around your actual buyer personas and ideal customer profile.",
        },
        {
          title: "Account-Based Marketing (ABM) Campaigns",
          description:
            "Matched Audiences targeting specific company lists for coordinated account-based marketing, aligned with your sales team's target account strategy.",
        },
        {
          title: "Lead Gen Forms & Landing Page Strategy",
          description:
            "Strategic decisions between LinkedIn's native lead gen forms and external landing pages, based on your sales team's lead handling capacity and qualification process.",
        },
        {
          title: "Sponsored Content & Message Ads",
          description:
            "Campaign management across LinkedIn's ad formats — Sponsored Content, Message Ads, and Document Ads — chosen based on what fits your specific message and funnel stage.",
        },
        {
          title: "Conversion Tracking & CRM Integration",
          description:
            "LinkedIn Insight Tag implementation and CRM integration ensuring lead and conversion data flows correctly into your sales process for proper attribution.",
        },
        {
          title: "LinkedIn-Specific Creative Development",
          description:
            "Ad creative built for LinkedIn's professional context and content expectations, distinct from creative built for more visual, entertainment-oriented platforms.",
        },
        {
          title: "Account Audits & Budget Strategy",
          description:
            "Auditing existing LinkedIn accounts for targeting and budget efficiency, with clear recommendations on whether LinkedIn's cost premium is actually justified by your results.",
        },
      ],
    },
    process: {
      h2: "How We Manage LinkedIn Ads",
      steps: [
        {
          number: "01",
          title: "ICP & Targeting Strategy",
          description:
            "We define your ideal customer profile and target account list (if running ABM), translating this into LinkedIn's specific targeting parameters.",
        },
        {
          number: "02",
          title: "Campaign & Creative Development",
          description:
            "We build campaigns and LinkedIn-specific creative aligned to your funnel stage, deciding between lead gen forms and landing pages based on your sales process.",
        },
        {
          number: "03",
          title: "Launch & CRM Integration",
          description:
            "We launch campaigns with conversion tracking and CRM integration validated, ensuring leads flow correctly into your sales follow-up process from day one.",
        },
        {
          number: "04",
          title: "Optimization & Sales Alignment",
          description:
            "We optimize based on both platform metrics and actual sales pipeline outcomes, coordinating with your sales team on which leads are converting to real opportunities.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for LinkedIn Ads",
      points: [
        {
          title: "We're Honest About When LinkedIn Isn't Worth It",
          description:
            "LinkedIn's cost premium doesn't make sense for every business. We'll tell you if your deal size and margins don't support LinkedIn's CPCs, rather than run an expensive campaign regardless.",
        },
        {
          title: "Real Account-Based Marketing Experience",
          description:
            "ABM on LinkedIn requires coordination with sales on target account lists and follow-up process — we've run genuine ABM campaigns, not just demographic targeting labeled as ABM.",
        },
        {
          title: "Creative Built for LinkedIn's Context",
          description:
            "We build creative specifically for LinkedIn's professional audience expectations, not repurposed assets from a Meta or TikTok campaign that won't land the same way. A LinkedIn feed scroller is evaluating your offer in a different mindset than a Reels or TikTok viewer.",
        },
        {
          title: "We Track Pipeline, Not Just Lead Volume",
          description:
            "We coordinate with your sales team to understand which leads actually become opportunities and revenue, not just optimizing for the cheapest possible lead form completion. A campaign generating cheap, unqualified leads isn't actually winning by the metric that matters.",
        },
      ],
    },
    techStack: {
      h2: "LinkedIn Ads Tools We Use",
      paragraph:
        "We manage campaigns through LinkedIn Campaign Manager, implementing the LinkedIn Insight Tag for conversion tracking and audience building. For account-based marketing, we use Matched Audiences with company lists provided by your sales team or built through LinkedIn's company targeting parameters. Lead data integrates with your CRM — Salesforce, HubSpot, or another platform — to ensure proper attribution and sales follow-up.",
      tools: [
        "LinkedIn Campaign Manager",
        "LinkedIn Insight Tag",
        "Matched Audiences",
        "CRM Integration (Salesforce/HubSpot)",
        "Google Analytics 4",
      ],
    },
    useCases: {
      h2: "Who Needs LinkedIn Ads",
      cases: [
        {
          title: "B2B Companies with Mid-Market/Enterprise Deals",
          description:
            "Companies selling into accounts where deal size justifies LinkedIn's higher cost per click, typically B2B SaaS, professional services, and enterprise solutions.",
        },
        {
          title: "Companies Running Account-Based Marketing",
          description:
            "B2B teams with a defined target account list and coordinated sales-marketing motion, using LinkedIn to reach specific companies and roles directly.",
        },
        {
          title: "Recruiting & Talent-Focused Campaigns",
          description:
            "Companies using LinkedIn's professional targeting for recruiting-adjacent or talent-focused campaigns, leveraging the platform's unique professional audience data.",
        },
        {
          title: "Companies Launching a New Enterprise Product Line",
          description:
            "B2B businesses introducing a new product or service tier aimed at larger accounts, needing to establish visibility with decision-makers who don't yet know the offering exists.",
        },
      ],
    },
    faqs: [
      {
        question: "Is LinkedIn Ads worth the higher cost compared to other platforms?",
        answer:
          "It depends entirely on your specific deal size and sales cycle length. For high-value B2B deals where reaching specific job titles and companies matters most, yes, often decisively so. For lower-margin products, the premium usually isn't justified at all.",
      },
      {
        question: "What's a realistic budget for LinkedIn Ads?",
        answer:
          "LinkedIn's CPCs run notably higher than Meta or Google — we typically recommend a minimum monthly spend of $5,000-$10,000 to gather meaningful data, though this varies considerably by targeting specificity, industry vertical, and overall competition level.",
      },
      {
        question: "Should we use lead gen forms or send traffic to our website?",
        answer:
          "Lead gen forms typically produce noticeably higher completion rates but can generate less-qualified leads needing more nurturing afterward. We'll recommend based on your sales team's actual capacity to handle volume versus quality.",
      },
      {
        question: "Can LinkedIn Ads support account-based marketing campaigns?",
        answer:
          "Yes, through Matched Audiences targeting specific company lists — genuinely effective for B2B companies with a defined target account strategy coordinated closely with their sales team.",
      },
      {
        question: "How is LinkedIn Ads creative different from Meta or Google Ads?",
        answer:
          "LinkedIn's professional context favors more text-forward, value-proposition-driven creative over the highly visual, entertainment-adjacent content that performs well on Meta or TikTok, since the audience mindset is fundamentally different.",
      },
      {
        question: "How do you measure success on LinkedIn — leads or revenue?",
        answer:
          "We track both, but coordinate closely with your sales team to understand which leads convert to actual pipeline and revenue, since lead volume alone can be a genuinely misleading success metric on its own.",
      },
    ],
    cta: {
      h2: "Have a B2B deal size that justifies LinkedIn's targeting precision?",
      subhead:
        "Let's talk about your ICP and target accounts — LinkedIn works well for the right business, and we'll tell you honestly if that's you.",
    },
    relatedSubServices: [
      {
        slug: "google-ads",
        parentSlug: "performance-marketing",
        name: "Google Ads",
        shortDescription:
          "Capturing high-intent search demand alongside LinkedIn's account-based targeting.",
      },
      {
        slug: "content-strategy",
        parentSlug: "content-social-media",
        name: "Content Strategy",
        shortDescription:
          "The decision-stage content that supports a long B2B LinkedIn-driven sales cycle.",
      },
      {
        slug: "copywriting",
        parentSlug: "content-social-media",
        name: "Copywriting",
        shortDescription:
          "Text-forward ad copy built for LinkedIn's professional context.",
      },
    ],
  },
  {
    slug: "tiktok-ads",
    parentSlug: "performance-marketing",
    parentName: "Performance Marketing",
    parentLabel: "Performance Marketing",
    meta: {
      title: "TikTok Ads Management Services",
      description:
        "TikTok Ads management — short-form video campaigns built on native, organic-feeling creative and Spark Ads, for brands reaching younger audiences.",
      keywords: [
        "TikTok Ads management services",
        "TikTok Ads agency",
        "TikTok advertising",
        "Spark Ads strategy",
        "TikTok creative strategy",
        "short-form video ads",
        "TikTok Shop ads",
        "TikTok Pixel setup",
      ],
    },
    hero: {
      eyebrow: "TikTok Ads Management",
      h1: "TikTok Ads That Actually Look Like TikTok Content",
      subheadline:
        "We manage TikTok Ads campaigns built on native, organic-feeling short-form video — because the single biggest reason TikTok campaigns underperform is creative that looks like a traditional ad dropped into a feed built entirely around authentic, unpolished content. If your TikTok ads look like your Meta ads, they're already underperforming.",
    },
    overview: {
      h2: "Why Native Creative Is the Actual Requirement on TikTok",
      paragraphs: [
        "TikTok's entire content experience is built around the For You feed's discovery algorithm surfacing content based on engagement signals, not follower relationships — which means an ad that looks and feels like native TikTok content, rather than a polished traditional advertisement, performs dramatically better. Brands that succeed on TikTok treat creative production as fundamentally different from their Meta or Google ad creative, not a resized version of the same assets.",
        "Spark Ads — boosting an existing organic post, including content from creators — typically outperforms standalone ad creative built from scratch, because it inherits the engagement and authenticity signals of content that already resonated organically. We build Spark Ads strategy around genuinely strong organic or creator content, rather than defaulting to traditional ad units because they're more familiar to manage.",
        "TikTok's audience skews younger than other major ad platforms, though this has broadened significantly, and the discovery mechanics reward genuinely entertaining or useful content over interruptive advertising messaging. Brands that approach TikTok with a direct-response mindset borrowed from Google or Meta often see weaker performance than brands willing to adapt creative strategy to how people actually consume TikTok content.",
        "TikTok Shop has introduced native commerce functionality directly within the platform, letting users purchase without leaving the app — a meaningful development for D2C brands, since it removes friction from the path between discovery and purchase that previously required driving traffic off-platform to a separate storefront.",
        "Trend participation is another area where TikTok rewards genuine speed and cultural fluency over polished planning cycles, since a trending sound or format has a short window where it actually reads as current rather than dated. Brands that wait for a multi-week creative approval process to adapt a trend usually miss the window entirely, which is why we build a lighter, faster approval workflow specifically for TikTok rather than routing every piece of creative through the same review cycle used for more deliberate channels.",
        "Comment sections on TikTok function almost as a second creative surface, since viewers actively read and engage with comments in a way that's less common on other platforms, and a brand that ignores or mishandles comments on a paid post can undercut otherwise strong creative performance. We monitor and engage with comments on active campaigns as part of ongoing management, treating community response as a genuine signal worth acting on rather than a separate concern from the media buying itself.",
      ],
    },
    whatsIncluded: {
      h2: "What TikTok Ads Management with Vertexa Includes",
      items: [
        {
          title: "Native Creative Strategy & Production",
          description:
            "Short-form video creative built specifically for TikTok's content expectations — authentic, fast-paced, and trend-aware — distinct from creative built for other ad platforms.",
        },
        {
          title: "Spark Ads Campaigns",
          description:
            "Boosting strong organic or creator content through Spark Ads, leveraging existing engagement signals rather than building standalone ad creative from scratch by default.",
        },
        {
          title: "Creator Partnership Strategy",
          description:
            "Identifying and coordinating with creators whose content style fits your brand, for content that performs natively rather than feeling like an obvious paid placement.",
        },
        {
          title: "TikTok Shop Integration",
          description:
            "Setting up and optimizing TikTok Shop for D2C brands, integrating native commerce functionality with your broader product catalog and fulfillment systems.",
        },
        {
          title: "TikTok Pixel & Conversion Tracking",
          description:
            "TikTok Pixel implementation and conversion tracking setup, including TikTok's Events API for server-side tracking resilience against browser privacy restrictions.",
        },
        {
          title: "Audience Targeting & Testing",
          description:
            "Audience and interest targeting strategy, balanced against TikTok's algorithm's own broad-reach discovery strengths, testing where manual targeting adds value.",
        },
        {
          title: "Performance Reporting & Iteration",
          description:
            "Reporting tied to actual business outcomes — conversions, revenue, customer acquisition cost — not just views and engagement metrics that don't necessarily reflect commercial performance.",
        },
      ],
    },
    process: {
      h2: "How We Manage TikTok Ads",
      steps: [
        {
          number: "01",
          title: "Audience & Content Strategy",
          description:
            "We research how your target audience actually engages with TikTok content in your category, informing creative direction before any campaign structure decisions.",
        },
        {
          number: "02",
          title: "Creative Production & Spark Ads Setup",
          description:
            "We produce native-feeling creative or identify strong organic/creator content for Spark Ads, prioritizing authenticity over traditional ad polish.",
        },
        {
          number: "03",
          title: "Campaign Launch & Tracking Validation",
          description:
            "We launch campaigns with TikTok Pixel and Events API tracking validated, ensuring conversion data is accurate from the start.",
        },
        {
          number: "04",
          title: "Optimization & Creative Refresh",
          description:
            "We optimize based on performance and refresh creative regularly, since TikTok's fast-moving content culture means creative fatigue happens faster than on other platforms.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for TikTok Ads",
      points: [
        {
          title: "We Build Native Creative, Not Resized Ads",
          description:
            "We don't repurpose Meta or Google creative for TikTok. We build content specifically for TikTok's format and culture, which is the single biggest factor in TikTok ad performance.",
        },
        {
          title: "Real Spark Ads & Creator Strategy",
          description:
            "We understand how to identify and leverage strong organic content and creator partnerships for Spark Ads, rather than defaulting to traditional ad units because they're easier to manage.",
        },
        {
          title: "We Adapt to TikTok's Discovery Mechanics",
          description:
            "We don't apply a direct-response playbook borrowed from Google Ads. We build for how TikTok's algorithm and audience actually engage with content, including a faster creative turnaround built specifically for the platform's pace.",
        },
        {
          title: "TikTok Shop Experience for D2C Brands",
          description:
            "We've set up and optimized TikTok Shop integrations, understanding the specific opportunity and constraints of native in-app commerce for D2C brands, including how it interacts with existing fulfillment and inventory systems.",
        },
      ],
    },
    techStack: {
      h2: "TikTok Ads Tools We Use",
      paragraph:
        "We manage campaigns through TikTok Ads Manager, implementing the TikTok Pixel alongside Events API for server-side conversion tracking resilience. Creative production uses TikTok's native editing tools and trend research features to identify current content patterns relevant to your category. For D2C brands, we integrate TikTok Shop with existing product catalogs, and use GA4 alongside platform reporting for cross-channel attribution context.",
      tools: [
        "TikTok Ads Manager",
        "TikTok Pixel",
        "TikTok Events API",
        "TikTok Shop",
        "Google Analytics 4",
      ],
    },
    useCases: {
      h2: "Who Needs TikTok Ads",
      cases: [
        {
          title: "D2C Brands Targeting Younger Demographics",
          description:
            "Consumer brands whose target audience actively engages with TikTok, needing native creative and potentially TikTok Shop integration for in-app commerce.",
        },
        {
          title: "Brands with Strong Organic TikTok Presence",
          description:
            "Companies already generating organic engagement on TikTok, positioned to amplify that content through Spark Ads rather than starting paid creative from zero.",
        },
        {
          title: "Brands Willing to Invest in Native Creative Production",
          description:
            "Companies prepared to produce genuinely TikTok-native content rather than repurpose existing ad assets, recognizing this as a requirement for the platform.",
        },
        {
          title: "Brands Wanting Faster Cultural Relevance",
          description:
            "Companies whose category benefits from feeling current and culturally fluent, where a fast trend-responsive creative process matters more than the polish of a traditional campaign.",
        },
      ],
    },
    faqs: [
      {
        question: "Can we just use our existing Meta ad creative on TikTok?",
        answer:
          "We'd strongly advise against it in almost every case. TikTok's audience expects native, authentic-feeling content, and repurposed traditional ad creative typically underperforms significantly compared to genuinely platform-specific content built for this particular audience.",
      },
      {
        question: "What's Spark Ads and why does it matter?",
        answer:
          "Spark Ads boosts existing organic content (yours or a creator's) rather than running standalone ad creative, inheriting the engagement and authenticity signals of content that already resonated genuinely with a real, organic audience first.",
      },
      {
        question: "Is TikTok only effective for younger audiences?",
        answer:
          "TikTok's audience has broadened significantly beyond its original younger demographic, though it still skews somewhat younger than some other major platforms overall. We'll assess honestly whether your target audience is genuinely active there before recommending the channel for your campaign.",
      },
      {
        question: "Do we need to work with creators, or can we produce our own content?",
        answer:
          "Both approaches can work well. Creator partnerships often produce more authentic-feeling content faster, while in-house production gives more brand control over the message. We'll recommend based on your resources and goals.",
      },
      {
        question: "What's TikTok Shop and should we use it?",
        answer:
          "TikTok Shop enables native in-app purchasing without ever leaving the platform — valuable for D2C brands wanting to reduce friction between discovery and purchase. We'll assess honestly if it actually fits your current setup.",
      },
      {
        question: "How is success measured differently on TikTok versus other platforms?",
        answer:
          "We track the same ultimate business outcomes — conversions, revenue, customer acquisition cost — but the path often involves different engagement metrics specific to TikTok's content culture, like video completion rate and overall share velocity.",
      },
    ],
    cta: {
      h2: "Ready for TikTok ads that don't look like ads?",
      subhead:
        "Let's talk about your audience and brand — TikTok rewards genuine creative investment, and we'll tell you honestly if your brand is positioned for it.",
    },
    relatedSubServices: [
      {
        slug: "meta-ads",
        parentSlug: "performance-marketing",
        name: "Meta Ads",
        shortDescription:
          "A complementary paid social channel with a more mature creative and tracking ecosystem.",
      },
      {
        slug: "social-media-management",
        parentSlug: "content-social-media",
        name: "Social Media Management",
        shortDescription:
          "Organic TikTok content strategy that feeds your Spark Ads pipeline.",
      },
      {
        slug: "content-strategy",
        parentSlug: "content-social-media",
        name: "Content Strategy",
        shortDescription:
          "Editorial planning behind a consistent short-form video content cadence.",
      },
    ],
  },
  {
    slug: "conversion-rate-optimization",
    parentSlug: "performance-marketing",
    parentName: "Performance Marketing",
    parentLabel: "Performance Marketing",
    meta: {
      title: "Conversion Rate Optimization Services",
      description:
        "Conversion rate optimization — landing page and checkout testing that turns the traffic you're already paying for into more leads and sales.",
      keywords: [
        "conversion rate optimization services",
        "CRO agency",
        "landing page optimization",
        "A/B testing services",
        "checkout optimization",
        "CRO audit",
        "website conversion optimization",
        "funnel optimization",
      ],
    },
    hero: {
      eyebrow: "Conversion Rate Optimization",
      h1: "Conversion Rate Optimization for Traffic You're Already Paying For",
      subheadline:
        "We test and optimize landing pages, forms, and checkout flows to convert more of the traffic you're already earning or paying for — because scaling ad spend or SEO into a leaky conversion funnel just means losing more money faster. CRO is usually the highest-ROI work available to any business already running meaningful traffic, and most never invest in it deliberately.",
    },
    overview: {
      h2: "Why CRO Is the Most Underinvested Lever in Most Marketing Budgets",
      paragraphs: [
        "Most businesses invest heavily in driving traffic — through SEO, paid ads, or content — and comparatively little in what happens once that traffic arrives. A 20% improvement in conversion rate has the same revenue impact as a 20% increase in traffic, but it's almost always cheaper to achieve, since you're improving the experience for visitors you've already earned or paid for rather than acquiring more of them.",
        "Effective CRO is hypothesis-driven, not a random redesign hoping for improvement. We form specific hypotheses about why a page or flow is underperforming — based on data, user research, and conversion best practices relevant to the specific context — then test those hypotheses deliberately rather than changing everything at once and hoping something works.",
        "Statistical rigor matters in testing, and a huge share of 'successful' A/B tests reported across the industry are actually false positives from tests stopped too early or run with insufficient traffic to reach genuine statistical significance. We size tests appropriately to your actual traffic volume and let them run to real significance, even when that's slower than a team wants.",
        "Qualitative research — session recordings, heatmaps, and user testing — often reveals friction points that pure analytics data alone won't surface, like a confusing form field or a piece of copy that quietly causes hesitation. We combine quantitative funnel analysis with qualitative research to form testing hypotheses grounded in how real users actually experience your site.",
        "Test velocity matters almost as much as test quality, since a CRO program that runs one carefully designed test per quarter will compound far more slowly than one that runs a steady cadence of well-prioritized tests even if each individual test is more modest in scope. We structure programs around a sustainable testing cadence rather than treating CRO as a single big-bang redesign project with an end date, since the businesses that benefit most from CRO are the ones that keep testing long after the first obvious wins are claimed.",
        "Segment-level analysis often reveals that an apparent 'losing' test actually wins decisively for one traffic segment while losing for another, and averaging those results together into a single overall verdict can throw away a genuinely valuable insight. We routinely break results down by traffic source, device, and new-versus-returning visitor status before declaring a test won or lost, since the aggregate number sometimes hides the more useful, more actionable answer underneath it.",
      ],
    },
    whatsIncluded: {
      h2: "What Conversion Rate Optimization with Vertexa Includes",
      items: [
        {
          title: "Conversion Funnel Audits",
          description:
            "Full funnel analysis identifying where visitors drop off and why, combining analytics data with qualitative research to form a clear picture of actual friction points.",
        },
        {
          title: "Landing Page Testing & Optimization",
          description:
            "Hypothesis-driven A/B and multivariate testing on landing pages, optimizing layout, messaging, and calls-to-action based on what actually moves conversion rate.",
        },
        {
          title: "Checkout & Form Optimization",
          description:
            "Testing and optimization specific to checkout flows and lead capture forms, where small friction points often have outsized impact on completion rates.",
        },
        {
          title: "User Research & Session Recording Analysis",
          description:
            "Qualitative research through session recordings, heatmaps, and user testing, surfacing friction points pure analytics data alone wouldn't reveal.",
        },
        {
          title: "A/B Testing Infrastructure & Statistical Analysis",
          description:
            "Proper test setup and statistical analysis ensuring results are genuinely significant, not false positives from underpowered or prematurely stopped tests.",
        },
        {
          title: "Mobile Conversion Optimization",
          description:
            "Conversion testing specific to mobile experiences, which often have meaningfully different friction points and behavior patterns than desktop.",
        },
        {
          title: "Personalization & Segmentation Testing",
          description:
            "Testing personalized experiences for different traffic sources or audience segments, when segment-specific behavior differences justify the added complexity.",
        },
      ],
    },
    process: {
      h2: "How We Run CRO",
      steps: [
        {
          number: "01",
          title: "Funnel Audit & Research",
          description:
            "We analyze your conversion funnel data and conduct qualitative research (session recordings, user testing) to identify where and why visitors are dropping off.",
        },
        {
          number: "02",
          title: "Hypothesis Development & Prioritization",
          description:
            "We form specific, testable hypotheses about what's causing friction, prioritized by potential impact and ease of implementation.",
        },
        {
          number: "03",
          title: "Test Implementation & Monitoring",
          description:
            "We implement tests properly sized for statistical significance given your traffic volume, monitoring without prematurely calling results before they're genuinely conclusive.",
        },
        {
          number: "04",
          title: "Analysis & Iteration",
          description:
            "We analyze results rigorously, implement winning variations, and use learnings to inform the next round of hypotheses — CRO compounds through iteration.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for CRO",
      points: [
        {
          title: "We Test Hypotheses, Not Random Redesigns",
          description:
            "Every test we run is grounded in a specific hypothesis about why something isn't converting, informed by data and research — not a redesign hoping aesthetic changes improve performance.",
        },
        {
          title: "Statistical Rigor Over Premature Conclusions",
          description:
            "We size tests appropriately to your traffic and let them run to genuine significance, because false-positive 'wins' waste implementation effort on changes that don't actually work.",
        },
        {
          title: "Qualitative Research Informs What We Test",
          description:
            "We don't just stare at funnel drop-off numbers. Session recordings and user testing reveal the actual friction that pure analytics data hides, often the difference between a hypothesis that sounds reasonable and one that's actually grounded in real user behavior.",
        },
        {
          title: "CRO Coordinated with Your Acquisition Channels",
          description:
            "We understand that traffic from Google Ads, Meta, and organic search often has different intent and behavior, and we account for that in testing rather than treating all traffic identically. A landing page variant that wins for paid search traffic won't necessarily win for organic visitors with different expectations.",
        },
      ],
    },
    techStack: {
      h2: "CRO Tools We Use",
      paragraph:
        "We run A/B and multivariate tests using tools appropriate to your existing stack, configured for statistically rigorous test design. Qualitative research happens through session recording and heatmap tools like Hotjar or Microsoft Clarity, paired with structured user testing when deeper insight is needed. We track funnel performance through GA4 and tie testing results back to actual revenue and conversion impact, not just statistical significance in isolation.",
      tools: [
        "A/B Testing Platforms",
        "Hotjar",
        "Microsoft Clarity",
        "Google Analytics 4",
        "Google Optimize Alternatives",
      ],
    },
    useCases: {
      h2: "Who Needs Conversion Rate Optimization",
      cases: [
        {
          title: "Businesses Scaling Paid Acquisition",
          description:
            "Companies increasing ad spend who want to ensure their landing pages and funnels convert efficiently before scaling spend further into an underoptimized funnel.",
        },
        {
          title: "E-commerce Stores with High Traffic, Low Conversion",
          description:
            "Online stores generating meaningful traffic through SEO or ads that isn't converting at a competitive rate relative to industry benchmarks.",
        },
        {
          title: "B2B Companies with High-Value, Low-Volume Conversions",
          description:
            "Companies where each conversion (demo request, trial signup) is valuable enough that even small percentage improvements translate into meaningful revenue impact.",
        },
        {
          title: "Businesses Ahead of a Site Redesign",
          description:
            "Companies planning a redesign who want testing-validated insight into what's actually working today, so the new design doesn't accidentally remove elements that were quietly driving conversions.",
        },
      ],
    },
    faqs: [
      {
        question: "How long does a CRO program take to show results?",
        answer:
          "Individual tests typically run 2-6 weeks depending on your traffic volume, since tests need enough data to reach genuine statistical significance. A sustained CRO program compounds meaningfully over several months of consistent testing.",
      },
      {
        question: "Do we need a lot of traffic to do CRO effectively?",
        answer:
          "Higher traffic allows faster, more granular testing, but lower-traffic sites can still benefit from qualitative research and well-prioritized tests — we'll size the approach to your actual traffic.",
      },
      {
        question: "What's the difference between CRO and UI/UX design?",
        answer:
          "UI/UX design focuses on the overall user experience and interface design. CRO specifically uses rigorous testing and data to validate which design and content decisions actually improve conversion in practice.",
      },
      {
        question: "How do you decide what to test first?",
        answer:
          "We prioritize based on potential impact (high-traffic pages, high-friction steps) and ease of implementation, using funnel data and qualitative research to identify the genuinely highest-value testing opportunities first.",
      },
      {
        question: "What if a test doesn't show a clear winner?",
        answer:
          "Inconclusive tests still provide genuinely useful information — they tell us the hypothesis wasn't quite right, which directly informs the next test. Not every test needs to 'win' to be valuable to the overall process.",
      },
      {
        question: "Can you run CRO on our existing site without a redesign?",
        answer:
          "Yes, that's typically how CRO works — testing specific changes on your existing site and design, rather than requiring a full redesign before testing can begin.",
      },
    ],
    cta: {
      h2: "Ready to convert more of the traffic you already have?",
      subhead:
        "Let's audit your funnel — improving conversion rate is usually the highest-ROI work available, and most businesses never invest in it deliberately.",
    },
    relatedSubServices: [
      {
        slug: "google-ads",
        parentSlug: "performance-marketing",
        name: "Google Ads",
        shortDescription:
          "Paid acquisition that pairs directly with a well-optimized conversion funnel.",
      },
      {
        slug: "ui-ux-design",
        parentSlug: "branding-design",
        name: "UI/UX Design",
        shortDescription:
          "Interface design work that often informs and benefits from CRO testing.",
      },
      {
        slug: "ecommerce-seo",
        parentSlug: "seo",
        name: "E-commerce SEO",
        shortDescription:
          "Organic traffic growth to pair with a funnel that's been optimized to convert it.",
      },
    ],
  },
  {
    slug: "brand-identity",
    parentSlug: "branding-design",
    parentName: "Branding & Design",
    parentLabel: "Branding & Design",
    meta: {
      title: "Brand Identity Design Services",
      description:
        "Brand identity design — strategy, visual system, and guidelines built around real market positioning, not just a logo and color palette.",
      keywords: [
        "brand identity design services",
        "brand identity agency",
        "brand strategy services",
        "visual identity design",
        "brand guidelines development",
        "rebrand strategy",
        "startup brand identity",
        "brand positioning services",
      ],
    },
    hero: {
      eyebrow: "Brand Identity",
      h1: "Brand Identity Built on Strategy, Not Just Aesthetics",
      subheadline:
        "We build complete brand identity systems — positioning, visual language, voice, and the guidelines that make it usable by people who aren't designers — starting from market and audience strategy, not a mood board. A logo is one artifact within a brand identity; the identity itself is the strategic and visual system everything else gets built from.",
    },
    overview: {
      h2: "Why Identity Work Starts Before Any Visual Decision",
      paragraphs: [
        "Brand identity work starts before any visual decision gets made — with positioning research that answers who you're actually competing against, what your audience cares about, and what you want to be known for that competitors aren't already claiming. Skipping this step is the single most common reason brand identity projects produce something that looks polished but doesn't actually differentiate the business in any meaningful way.",
        "A brand identity is a system, not a single asset — typography, color, photography or illustration direction, iconography, and layout principles that need to work together coherently across a pitch deck, a website, a product interface, and a trade show booth. This is the meaningful distinction between a brand identity project and a logo design project: identity work produces the full system a logo gets used within.",
        "Brand guidelines are the deliverable that determines whether an identity system actually gets used consistently after we hand it off — clear, practical documentation that a non-designer on your team can follow when building a slide deck or social post, not a beautiful but impractical PDF that gets opened once and ignored. We design guidelines to be genuinely usable, testing them against realistic, unglamorous use cases.",
        "Not every engagement needs a full identity project — sometimes a logo refresh within an already-solid existing system, or design work for a single new product line, is the right scope. We'll tell you honestly when a smaller, more targeted engagement actually fits your need better than a comprehensive identity overhaul.",
        "Brand identity also needs to anticipate how the business will actually grow, not just reflect where it stands today. A system designed only around a single product, a single market, or a single audience tends to crack under pressure the moment the company expands into a second product line or a new geography, forcing an expensive redesign far sooner than it should have been necessary. We build in enough flexibility from the outset to absorb that growth without losing coherence.",
        "Internal buy-in matters as much as external market reception, since a brand identity that the founding team or internal stakeholders don't genuinely believe in tends to get applied inconsistently or quietly abandoned within a year regardless of how strong the strategic rationale was. We involve key stakeholders throughout the process specifically to build that conviction, rather than presenting a finished system at the end and hoping it lands well with people who weren't part of shaping it.",
      ],
    },
    whatsIncluded: {
      h2: "What Brand Identity Design with Vertexa Includes",
      items: [
        {
          title: "Brand Strategy & Positioning",
          description:
            "Competitive analysis, audience research, and positioning work defining what your brand stands for and who it's for, the foundation every subsequent visual decision gets measured against.",
        },
        {
          title: "Visual Identity System Design",
          description:
            "Logo, typography, color palette, photography/illustration direction, and iconography designed as a cohesive system, not a collection of disconnected assets.",
        },
        {
          title: "Brand Voice & Messaging Guidelines",
          description:
            "Defining how your brand sounds in writing — tone, vocabulary, messaging pillars — alongside the visual system, since brand identity is more than what it looks like.",
        },
        {
          title: "Brand Guidelines Documentation",
          description:
            "Practical, usable brand guidelines documenting how to apply the identity system correctly, tested against realistic use cases your team will actually encounter.",
        },
        {
          title: "Rebrand Strategy & Migration",
          description:
            "Full or partial rebrand planning for companies whose existing identity has stopped serving their growth, including a migration plan that protects existing brand recognition.",
        },
        {
          title: "Brand Identity for New Product Lines",
          description:
            "Sub-brand or product-line identity work that fits coherently within your existing master brand system, rather than creating disconnected visual silos.",
        },
        {
          title: "Implementation Support",
          description:
            "Supporting your team or other vendors in correctly applying the new identity across initial touchpoints, ensuring the system launches consistently.",
        },
      ],
    },
    process: {
      h2: "How We Build Brand Identity Systems",
      steps: [
        {
          number: "01",
          title: "Strategy & Positioning",
          description:
            "We research your market, competitors, and audience to define the strategic positioning every subsequent design decision gets measured against.",
        },
        {
          number: "02",
          title: "Concept Development",
          description:
            "We present distinct visual directions grounded in the strategy, each with clear rationale, so you're choosing a strategic direction, not just a favorite color palette.",
        },
        {
          number: "03",
          title: "System Design & Refinement",
          description:
            "The selected direction gets developed into a full system, refined through review rounds until it's ready to ship across every touchpoint that needs it.",
        },
        {
          number: "04",
          title: "Guidelines & Handoff",
          description:
            "We document the system in usable brand guidelines and support initial implementation, ensuring the identity launches consistently across your team.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Brand Identity",
      points: [
        {
          title: "Strategy Before a Single Visual Decision",
          description:
            "We won't start designing before understanding your positioning, because design without strategic grounding is the most common and expensive mistake in brand identity work.",
        },
        {
          title: "Systems, Not Disconnected Assets",
          description:
            "We build complete, coherent systems — not a logo file and a color palette handed over separately. Every element is designed to work together across every touchpoint.",
        },
        {
          title: "Guidelines Built for Actual Use",
          description:
            "We design brand guidelines tested against realistic scenarios your non-designer team members will actually encounter, not a beautiful document opened once and ignored. The real test is whether someone in sales can build an on-brand slide deck without asking design for help.",
        },
        {
          title: "Honest About Scope",
          description:
            "We'll tell you when a smaller engagement — a logo refresh, not a full identity overhaul — actually fits your need, rather than always pitching the larger project regardless of what the situation actually calls for.",
        },
      ],
    },
    techStack: {
      h2: "Brand Identity Tools We Use",
      paragraph:
        "We design brand identity systems in Figma, building shareable style guides and component libraries that translate cleanly into both design handoff and brand guideline documentation. For print and packaging-adjacent work, we use the Adobe Creative Suite. Brand strategy and positioning work is documented through structured research and workshop frameworks rather than a specific software tool, since this phase is more about rigorous thinking than a particular platform.",
      tools: [
        "Figma",
        "Adobe Illustrator",
        "Adobe InDesign",
        "FigJam (strategy workshops)",
      ],
    },
    useCases: {
      h2: "Who Needs Brand Identity Design",
      cases: [
        {
          title: "Startups Building Their First Identity",
          description:
            "Early-stage companies establishing a credible visual identity for the first time, built flexible enough to evolve as the product and positioning mature.",
        },
        {
          title: "Companies Rebranding After Outgrowing Their Identity",
          description:
            "Established businesses whose original branding no longer reflects how much the company has grown, needing a refresh that respects existing brand equity.",
        },
        {
          title: "Companies Launching a New Product Line or Division",
          description:
            "Businesses needing sub-brand identity work that fits coherently within an existing master brand system rather than creating a disconnected new visual identity.",
        },
        {
          title: "Companies Preparing for Investment or Acquisition",
          description:
            "Businesses needing a more credible, polished brand presence ahead of a funding round or acquisition conversation, where perception genuinely affects how seriously the business gets taken.",
        },
      ],
    },
    faqs: [
      {
        question: "What's the difference between this and your logo design service?",
        answer:
          "Brand identity covers the full strategic and visual system — positioning, typography, color, voice, guidelines. Logo design focuses specifically on the mark itself, often as part of a larger identity project.",
      },
      {
        question: "How long does a brand identity project take?",
        answer:
          "A focused identity project typically takes 4-6 weeks. Full rebrands including implementation across multiple touchpoints run 8-12 weeks. We'll give you a specific timeline after understanding scope.",
      },
      {
        question: "Do we need a full rebrand, or just a refresh?",
        answer:
          "It depends on whether your positioning has fundamentally changed or just needs visual modernization. We'll assess honestly and recommend the smaller, more targeted option when that's genuinely what fits.",
      },
      {
        question: "Will you also design our website as part of this?",
        answer:
          "Web development is a separate but complementary service, and many clients bundle brand identity with a website build so the two are designed together. We can scope either independently or combined.",
      },
      {
        question: "What if we already have brand guidelines from a previous agency?",
        answer:
          "We'll review your existing guidelines and assess whether they need a refresh, a full overhaul, or just better internal adoption support — not every situation requires starting from scratch.",
      },
      {
        question: "Do you handle trademark or legal aspects of a new brand name/logo?",
        answer:
          "No, we recommend working with a trademark attorney for legal clearance and registration. We focus on the strategic and design work, though we're happy to coordinate with your legal counsel.",
      },
    ],
    cta: {
      h2: "Ready for a brand identity built on real strategy?",
      subhead:
        "Let's talk about your positioning — the visual decisions are easier once we know what your brand actually needs to say.",
    },
    relatedSubServices: [
      {
        slug: "logo-design",
        parentSlug: "branding-design",
        name: "Logo Design",
        shortDescription:
          "The specific mark, when that's the focused scope you need rather than a full identity system.",
      },
      {
        slug: "design-systems",
        parentSlug: "branding-design",
        name: "Design Systems",
        shortDescription:
          "Translating a brand identity into a scalable component library for digital products.",
      },
      {
        slug: "website-redesign",
        parentSlug: "branding-design",
        name: "Website Redesign",
        shortDescription:
          "Bringing a new or refreshed identity to life across your website.",
      },
    ],
  },
  {
    slug: "logo-design",
    parentSlug: "branding-design",
    parentName: "Branding & Design",
    parentLabel: "Branding & Design",
    meta: {
      title: "Logo Design Services",
      description:
        "Logo design — a distinctive, versatile mark built to work across every size and context, grounded in strategy rather than trend-chasing.",
      keywords: [
        "logo design services",
        "logo design agency",
        "custom logo design",
        "logo design for startups",
        "logo redesign",
        "brand mark design",
        "logo design process",
        "professional logo design",
      ],
    },
    hero: {
      eyebrow: "Logo Design",
      h1: "Logo Design That Works at Every Size and in Every Context",
      subheadline:
        "We design distinctive, versatile logos — the specific mark, not the full brand system around it — built to hold up at favicon size and on a building facade, in black and white and in full color, on a t-shirt and on a legal document. A good logo is simpler than most clients expect, and that simplicity is deliberate, not a lack of effort.",
    },
    overview: {
      h2: "Why a Logo Is One Artifact, Not the Whole Identity",
      paragraphs: [
        "A logo is a single, specific deliverable — the mark itself — distinct from the fuller brand identity system (typography, color palette, voice, guidelines) that a complete brand identity project actually produces. This service is scoped specifically to the mark, which makes sense as a standalone engagement when you already have a solid identity system in place and need a refresh, or for early-stage projects with a tighter budget.",
        "Versatility testing is where most amateur logo design falls apart — a mark that looks great large on a homepage hero section often breaks down at favicon size, loses legibility in single-color print contexts, or doesn't work when flipped to a dark background. We test every logo concept across the full range of real-world contexts it'll actually need to perform in well before considering it finished.",
        "Trend-chasing produces logos that look dated within a few short years, because design trends cycle faster than most businesses actually want to invest in a logo refresh. We aim for marks that feel current without being so trend-dependent that they'll look obviously of-their-moment in five years — a genuinely harder design problem than chasing whatever's popular in logo design galleries this particular year.",
        "Standalone logo design makes sense when your broader brand strategy and identity system are already solid and you specifically need a new or refreshed mark — for a full identity overhaul including positioning, voice, and the complete visual system, our brand identity service is the better fit, and we'll tell you honestly which one your situation calls for.",
        "Color and typography choices within a logo carry more strategic weight than clients often expect going in, since these decisions get inherited across the entire brand the moment the logo ships, whether or not anyone consciously decided that should happen. A color chosen because it looked good in a single mockup can end up constraining packaging, signage, and digital product decisions for years, which is why we treat these choices as strategic commitments rather than purely aesthetic preferences made late in the process.",
        "Negative space and how a mark behaves when placed near other logos — a partner's, a platform's, an app store icon — is a practical consideration that's easy to overlook until a logo actually needs to share a crowded space with several others. We test concepts in these realistic crowded contexts, not just on a clean white background, since that's rarely where a logo actually has to perform in the real world.",
      ],
    },
    whatsIncluded: {
      h2: "What Logo Design with Vertexa Includes",
      items: [
        {
          title: "Logo Concept Development",
          description:
            "Multiple distinct logo concepts grounded in your brand's positioning (existing or newly defined), not a single direction presented as the only option.",
        },
        {
          title: "Versatility & Scalability Testing",
          description:
            "Testing every concept across real-world contexts — favicon size, single-color print, dark backgrounds, large-format applications — before finalizing a direction.",
        },
        {
          title: "Logo Refinement & Finalization",
          description:
            "Refining the selected concept through review rounds, adjusting details like spacing, proportion, and weight that significantly affect how a logo reads at different sizes.",
        },
        {
          title: "Logo Variations & File Formats",
          description:
            "Primary, secondary, and icon-only variations delivered in the full range of file formats your team needs across web, print, and software applications.",
        },
        {
          title: "Logo Usage Guidelines",
          description:
            "Clear, practical guidance on correct logo usage — minimum sizes, clear space, color variations, and common misuse examples — even outside a full brand guidelines document.",
        },
        {
          title: "Logo Redesign & Modernization",
          description:
            "Refreshing an existing logo to feel more current while preserving the recognition and equity already built into the original mark, rather than starting from zero.",
        },
        {
          title: "Trademark-Ready File Preparation",
          description:
            "Preparing final logo files in the format and specifications typically required for trademark registration, coordinated with your legal counsel's requirements.",
        },
      ],
    },
    process: {
      h2: "How We Design Logos",
      steps: [
        {
          number: "01",
          title: "Discovery & Direction Setting",
          description:
            "We review your existing brand strategy (or help define the basics if none exists yet) to ground logo concepts in actual positioning rather than aesthetic preference alone.",
        },
        {
          number: "02",
          title: "Concept Exploration",
          description:
            "We develop multiple distinct concepts exploring different strategic and visual directions, presented with rationale rather than just visual options to choose between.",
        },
        {
          number: "03",
          title: "Refinement & Testing",
          description:
            "The selected concept gets refined and tested across real-world usage contexts — different sizes, colors, and applications — until it performs reliably everywhere needed.",
        },
        {
          number: "04",
          title: "Finalization & Delivery",
          description:
            "We deliver final files in all required formats and variations, along with usage guidance that ensures the mark gets applied correctly going forward.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Logo Design",
      points: [
        {
          title: "We Test Versatility Rigorously",
          description:
            "We test every concept across the full range of real-world contexts before finalizing, catching the scalability and legibility issues that only show up outside a clean presentation deck.",
        },
        {
          title: "We Design for Longevity, Not Trends",
          description:
            "We aim for marks that won't look obviously dated within a few years, a genuinely harder design problem than chasing whatever's currently popular in design trend galleries.",
        },
        {
          title: "We're Clear About Scope",
          description:
            "If your project actually needs a full brand identity — positioning, voice, the complete system — we'll tell you, rather than deliver a logo in isolation when it won't solve the underlying need you actually came to us with.",
        },
        {
          title: "Practical Deliverables, Not Just Pretty Files",
          description:
            "We deliver the full range of formats and variations your team will actually need across web, print, and software, with usage guidance that prevents the common misapplication mistakes we see most often.",
        },
      ],
    },
    techStack: {
      h2: "Logo Design Tools We Use",
      paragraph:
        "We design logos in Figma and Adobe Illustrator, working in vector formats that scale cleanly across every required size and application. Testing happens across simulated real-world contexts — favicon previews, single-color print mockups, dark and light background variations — before any concept gets finalized. Final delivery includes the full range of formats (SVG, EPS, PNG, PDF) your team needs across web, print, and software applications.",
      tools: ["Figma", "Adobe Illustrator", "Vector file formats (SVG/EPS)"],
    },
    useCases: {
      h2: "Who Needs Logo Design",
      cases: [
        {
          title: "Startups Needing a First Logo",
          description:
            "Early-stage companies needing a credible, distinctive mark on a tighter budget and timeline than a full identity project, often before broader brand strategy is fully developed.",
        },
        {
          title: "Established Brands Refreshing an Outdated Mark",
          description:
            "Companies whose logo has started to look dated relative to their current market position, needing a modernization that preserves existing brand recognition.",
        },
        {
          title: "Businesses with a Solid Identity Needing Just a New Mark",
          description:
            "Companies with an already-strong brand voice and visual system needing specifically a new or refreshed logo, without revisiting the broader identity work.",
        },
        {
          title: "Companies Merging Brands or Consolidating Sub-Brands",
          description:
            "Businesses combining multiple brands or product lines under a single mark following a merger, acquisition, or internal consolidation, needing a logo that represents the combined entity credibly.",
        },
      ],
    },
    faqs: [
      {
        question: "Do we need a full brand identity project, or just a logo?",
        answer:
          "If your positioning, voice, and broader visual system are already solid, a standalone logo project can work well on its own. If those fundamentals don't exist yet, a full brand identity project will serve you noticeably better.",
      },
      {
        question: "How many logo concepts will we see?",
        answer:
          "Typically 2-3 genuinely distinct concepts, each grounded in a different strategic angle and rationale, rather than many minor variations of the same underlying idea presented as options.",
      },
      {
        question: "How long does logo design take?",
        answer:
          "A standalone logo project typically takes 2-4 weeks, including concept development, refinement, and final delivery of all required files. Timelines extend if it's bundled with broader brand identity work.",
      },
      {
        question: "Can you refresh our existing logo without starting from scratch?",
        answer:
          "Yes — logo modernization that preserves existing recognition and equity while updating dated elements is a common and often more strategic choice than a complete redesign starting entirely from zero.",
      },
      {
        question: "What files will we receive?",
        answer:
          "Vector source files, the full range of export formats (SVG, EPS, PNG, PDF), logo variations (primary, secondary, icon-only), and clear usage guidelines for applying the mark correctly.",
      },
      {
        question: "Will the logo work for a trademark application?",
        answer:
          "We prepare files in formats and specifications typically required for trademark registration, though we recommend working with a trademark attorney for the legal filing process itself.",
      },
    ],
    cta: {
      h2: "Need a mark that works everywhere you'll actually use it?",
      subhead:
        "Tell us about your brand and where this logo needs to show up — we'll design something that holds up at every size and in every context.",
    },
    relatedSubServices: [
      {
        slug: "brand-identity",
        parentSlug: "branding-design",
        name: "Brand Identity",
        shortDescription:
          "The full strategic and visual system, when a logo alone isn't enough.",
      },
      {
        slug: "design-systems",
        parentSlug: "branding-design",
        name: "Design Systems",
        shortDescription:
          "Putting your new mark to work across a scalable component library.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    parentSlug: "branding-design",
    parentName: "Branding & Design",
    parentLabel: "Branding & Design",
    meta: {
      title: "UI/UX Design Services",
      description:
        "UI/UX design — interface and user experience design grounded in usability research, for websites and digital products that need to actually work.",
      keywords: [
        "UI UX design services",
        "UI UX design agency",
        "user experience design",
        "product design services",
        "user research services",
        "interface design agency",
        "usability testing",
        "design for conversion",
      ],
    },
    hero: {
      eyebrow: "UI/UX Design",
      h1: "UI/UX Design Grounded in How People Actually Use Things",
      subheadline:
        "We design interfaces and user experiences for websites and digital products, grounded in usability research and real user flows rather than just visual trends. Good UI/UX design is mostly invisible when it's working well — users complete what they came to do without friction they have to consciously notice — which is a much harder design problem than it looks at first glance.",
    },
    overview: {
      h2: "Why UX Structure and UI Polish Get Designed Together",
      paragraphs: [
        "UX and UI are related but genuinely distinct disciplines we design together rather than treating as separate phases: UX covers user flows, information architecture, and interaction patterns — the structural decisions about how someone moves through a product or site to accomplish something. UI covers the visual interface layer built on top of that structure — the specific look, feel, and visual hierarchy of each screen.",
        "Design decisions grounded in actual user research — usability testing, user interviews, behavioral data — consistently outperform decisions based purely on aesthetic judgment or internal opinion, even when the research-informed design looks less immediately impressive in a presentation. We push for research where the budget and timeline allow it, because the alternative is designing purely based on assumptions about how users behave.",
        "Prototyping and testing before full development catches usability problems while they're still genuinely cheap to fix — a confusing flow discovered in a clickable prototype costs a redesign session; the same problem discovered after development costs a full rebuild. We build interactive prototypes for validation specifically because skipping this step is one of the most expensive false economies in digital product design.",
        "This service focuses on the specific interface and experience design for a website or product — distinct from our design systems service, which builds the reusable component infrastructure that scales consistent design across many product surfaces and a growing team. Many projects need both, starting with strong UI/UX design before formalizing it into a systematized component library.",
        "Accessibility is a structural requirement we build into UX decisions from the start, not a compliance checklist applied after the visual design is already finished. Color contrast, keyboard navigation, and screen reader compatibility shape real design decisions — layout, component choice, interaction pattern — and retrofitting accessibility into a design that ignored it from the outset almost always produces a worse result than designing for it from the first wireframe.",
        "Edge cases and error states deserve as much design attention as the primary happy path, since real users hit empty states, validation errors, and slow network conditions constantly, and a polished primary flow paired with neglected edge cases still produces a frustrating overall experience. We design these states deliberately rather than leaving them as an engineering afterthought filled in with whatever default the framework happens to provide.",
      ],
    },
    whatsIncluded: {
      h2: "What UI/UX Design with Vertexa Includes",
      items: [
        {
          title: "User Research & Usability Testing",
          description:
            "User interviews, usability testing, and behavioral research informing design decisions with real user behavior rather than internal assumptions about how people will use the product.",
        },
        {
          title: "Information Architecture & User Flows",
          description:
            "Structuring how users navigate and accomplish tasks within your product or site, mapped before visual design begins, since structure problems are expensive to fix later.",
        },
        {
          title: "Wireframing & Prototyping",
          description:
            "Low- and high-fidelity wireframes and interactive prototypes for validating flows and interactions before committing to full visual design and development.",
        },
        {
          title: "UI Design & Visual Interface",
          description:
            "Visual interface design built on validated UX foundations — layout, typography, color, and component design specific to your product's actual interface needs.",
        },
        {
          title: "Usability Testing & Iteration",
          description:
            "Testing prototypes and designs with real users, iterating based on observed friction rather than internal opinion about what should be intuitive.",
        },
        {
          title: "Responsive & Multi-Device Design",
          description:
            "Interface design that adapts thoughtfully across desktop, tablet, and mobile, considering how interaction patterns genuinely differ across device types rather than simply scaling the same layout down.",
        },
        {
          title: "Design-to-Development Handoff",
          description:
            "Detailed design specifications and assets prepared for development handoff, reducing the back-and-forth and implementation drift common with poorly documented handoffs between design and engineering teams.",
        },
        {
          title: "Accessibility-Informed Design",
          description:
            "Color contrast, keyboard navigation, and semantic structure built into design decisions from the start, rather than treated as a compliance pass applied after visual design is finished.",
        },
      ],
    },
    process: {
      h2: "How We Design UI/UX",
      steps: [
        {
          number: "01",
          title: "Research & Discovery",
          description:
            "We conduct user research and define the core user flows and goals the design needs to support, grounding the project in real user needs before any visual work begins.",
        },
        {
          number: "02",
          title: "Wireframing & Prototyping",
          description:
            "We build wireframes and interactive prototypes to validate structure and flow, testing with real users where the timeline allows before committing to full visual design.",
        },
        {
          number: "03",
          title: "UI Design & Refinement",
          description:
            "We design the visual interface on top of the validated UX foundation, refining through review rounds and additional usability testing as needed.",
        },
        {
          number: "04",
          title: "Handoff & Implementation Support",
          description:
            "We deliver detailed specifications and support the development handoff, staying involved to resolve implementation questions as the design gets built.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for UI/UX Design",
      points: [
        {
          title: "Research-Informed, Not Just Aesthetic Judgment",
          description:
            "We push for real user research where it's feasible, because design decisions grounded in actual user behavior consistently outperform decisions based purely on internal opinion.",
        },
        {
          title: "Prototyping Before Expensive Mistakes",
          description:
            "We test flows and interactions through prototypes before development, catching usability problems while they're still cheap to fix rather than after a costly rebuild.",
        },
        {
          title: "UX and UI Designed Together",
          description:
            "We don't treat user flow structure and visual design as separate, sequential phases handled by different specialists with no coordination. The two inform each other throughout the entire project, not just at the handoff point.",
        },
        {
          title: "Detailed, Developer-Friendly Handoff",
          description:
            "We prepare specifications that reduce implementation drift and back-and-forth, since a great design that gets built incorrectly delivers the same poor experience as a mediocre design built faithfully.",
        },
      ],
    },
    techStack: {
      h2: "UI/UX Design Tools We Use",
      paragraph:
        "We design in Figma for both wireframing and high-fidelity UI design, using its prototyping features to build interactive, clickable prototypes for user testing before development begins. User research happens through a combination of moderated usability testing sessions and tools like Maze or UserTesting for unmoderated testing at scale. We maintain design tokens and component specifications in Figma structured for clean handoff to development.",
      tools: ["Figma", "Figma Prototyping", "Maze/UserTesting", "Design Tokens"],
    },
    useCases: {
      h2: "Who Needs UI/UX Design",
      cases: [
        {
          title: "Products Launching a New Core Experience",
          description:
            "Companies designing a new product or major feature from scratch, needing UX research and validated flows before committing engineering resources to a build.",
        },
        {
          title: "Sites & Products with Usability Problems",
          description:
            "Existing websites or products where users are dropping off or struggling to complete key actions, needing research-informed redesign of the problematic flows.",
        },
        {
          title: "Teams Wanting Validated Designs Before Development",
          description:
            "Product teams that want to test and validate UX decisions through prototyping before committing development time to building something that might need significant rework.",
        },
        {
          title: "Companies Needing Accessibility Compliance",
          description:
            "Organizations needing to meet accessibility standards for legal, contractual, or genuine inclusivity reasons, requiring design decisions that account for accessibility from the structural level up, not as a late patch.",
        },
      ],
    },
    faqs: [
      {
        question: "What's the difference between UI design and UX design?",
        answer:
          "UX covers user flows, information architecture, and interaction structure. UI covers the visual interface layer built on top of that structure. We design both together as one process, since they're deeply interdependent and rarely succeed in isolation.",
      },
      {
        question: "Do you do user research, or just design based on best practices?",
        answer:
          "We push for real user research — interviews, usability testing — wherever budget and timeline allow, since research-informed decisions consistently outperform design based on assumptions alone.",
      },
      {
        question: "How is this different from your design systems service?",
        answer:
          "This service focuses on the specific experience and interface design for a single website or product. Design systems builds the reusable, scalable component infrastructure across many product surfaces at once.",
      },
      {
        question: "Do you build interactive prototypes, or just static designs?",
        answer:
          "Yes, we build interactive, clickable prototypes for validating flows and interactions before development, since testing on a prototype is far cheaper than discovering issues after a build.",
      },
      {
        question: "How long does a UI/UX design project take?",
        answer:
          "A focused project covering a core flow or product area typically takes 4-8 weeks including research, prototyping, and usability testing. Larger, multi-area products take meaningfully longer. We'll scope based on your specific project.",
      },
      {
        question: "Do you also handle the development, or just the design?",
        answer:
          "We offer web and mobile app development as separate services and frequently handle both design and development together as one coordinated engagement, though we can also hand off designs to your existing development team.",
      },
    ],
    cta: {
      h2: "Ready for an interface that actually works for your users?",
      subhead:
        "Tell us about your product and users — research-informed design catches the problems that aesthetic-only design misses.",
    },
    relatedSubServices: [
      {
        slug: "design-systems",
        parentSlug: "branding-design",
        name: "Design Systems",
        shortDescription:
          "Scaling a validated UI/UX foundation into a reusable component library.",
      },
      {
        slug: "website-redesign",
        parentSlug: "branding-design",
        name: "Website Redesign",
        shortDescription:
          "Applying research-informed UX improvements to an existing underperforming site.",
      },
      {
        slug: "conversion-rate-optimization",
        parentSlug: "performance-marketing",
        name: "Conversion Rate Optimization",
        shortDescription:
          "Testing interface decisions against real conversion data.",
      },
    ],
  },
  {
    slug: "design-systems",
    parentSlug: "branding-design",
    parentName: "Branding & Design",
    parentLabel: "Branding & Design",
    meta: {
      title: "Design Systems Services",
      description:
        "Design systems — component libraries and design tokens that bridge design and development, reducing inconsistency as your product and team scale.",
      keywords: [
        "design systems services",
        "design system agency",
        "component library design",
        "design tokens",
        "Figma design system",
        "design system documentation",
        "design ops services",
        "scalable design systems",
      ],
    },
    hero: {
      eyebrow: "Design Systems",
      h1: "Design Systems That Scale Past What One Designer Can Personally Oversee",
      subheadline:
        "We build component libraries and design token systems that bridge design and development, reducing inconsistency and design debt as your product and team continue to grow. A design system isn't a nice-to-have once you're shipping more than a handful of screens with more than one designer — it's the infrastructure that genuinely determines whether your product stays coherent or fragments.",
    },
    overview: {
      h2: "Why a Component Folder Isn't the Same as a Design System",
      paragraphs: [
        "Design systems become necessary at a fairly specific point: when a single designer can no longer personally review every screen for consistency, or when your product has grown well past what ad hoc component reuse can handle gracefully. Below that scale, a lightweight component library is often sufficient; above it, the absence of a real design system starts compounding into visible inconsistency and design debt that gets more expensive to fix the longer it's deferred.",
        "A proper design system is built on design tokens — the foundational values (colors, spacing, typography scales) that propagate consistently across every component — paired with a component library built on top of those tokens. This structure is what makes systematic updates possible: changing a single foundational color token updates every component using it, rather than requiring manual updates across dozens of disconnected component instances.",
        "Documentation is as critical as the components themselves, and it's the piece most design systems shortchange badly. Clear usage guidelines — when to use which component, what variants exist, what the underlying logic is — determine whether a design system actually gets adopted consistently by a growing team, or whether people route around it because they can't figure out how to use it correctly.",
        "A folder of reusable Figma components isn't actually the same thing as a real design system — the difference is governance: a clear ownership model for proposing changes, a versioning approach that doesn't silently break existing usage, and genuine adoption tracking that tells you whether the system is actually being used consistently or quietly ignored. We build for this governance layer, not just the component library itself.",
        "Migration from an existing, fragmented setup deserves as much planning as the system itself, since most teams can't simply pause feature work for months to rebuild every screen against the new system at once. We plan incremental migration paths that let new feature work adopt the system immediately while existing screens transition gradually, rather than forcing a disruptive all-or-nothing cutover that stalls product development.",
        "Adoption tends to stall when a system feels imposed on a team rather than built with them, which is why we involve engineers and other designers in component decisions throughout the project rather than handing down a finished system for everyone else to simply comply with. A system the team helped shape gets defended and maintained in ways a system that was simply mandated rarely is.",
      ],
    },
    whatsIncluded: {
      h2: "What Design Systems with Vertexa Includes",
      items: [
        {
          title: "Design Token Architecture",
          description:
            "Foundational design tokens — color, typography, spacing, elevation — structured to propagate consistently across every component, enabling systematic updates rather than manual ones.",
        },
        {
          title: "Component Library Design",
          description:
            "Reusable UI components built on the token foundation, covering your product's actual interface needs rather than a generic component set that doesn't match real usage.",
        },
        {
          title: "Design System Documentation",
          description:
            "Usage guidelines for every component — when to use which variant, what the underlying logic is — written for genuine team adoption, not just internal design team reference.",
        },
        {
          title: "Design-to-Development Token Sync",
          description:
            "Token and component structure designed to sync cleanly with development implementation (CSS variables, design token tools), reducing drift between design and built product.",
        },
        {
          title: "Governance & Contribution Model",
          description:
            "A clear ownership and contribution process for proposing new components or changes, preventing the system from fragmenting as more people contribute to it over time.",
        },
        {
          title: "Accessibility Standards Built In",
          description:
            "Accessibility requirements (contrast, focus states, semantic structure) built into component specifications from the start, rather than retrofitted after wide use.",
        },
        {
          title: "Design System Audits & Migration",
          description:
            "Auditing an existing, fragmented component setup and planning a migration to a proper system, including how to handle existing product surfaces during the transition.",
        },
      ],
    },
    process: {
      h2: "How We Build Design Systems",
      steps: [
        {
          number: "01",
          title: "Audit & Token Strategy",
          description:
            "We audit your existing components and interface patterns, then define the foundational design token architecture everything else will build on.",
        },
        {
          number: "02",
          title: "Component Library Design",
          description:
            "We design the component library on top of the token foundation, prioritizing the components your product actually needs based on real usage patterns.",
        },
        {
          number: "03",
          title: "Documentation & Governance",
          description:
            "We document usage guidelines and establish a governance model for how the system evolves, ensuring it stays coherent as more people contribute to it.",
        },
        {
          number: "04",
          title: "Implementation & Adoption Support",
          description:
            "We support the development implementation and rollout across your product, then track adoption to ensure the system actually gets used consistently.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Design Systems",
      points: [
        {
          title: "We Build the Token Foundation First",
          description:
            "Many design systems skip proper token architecture and build components directly, which makes systematic future updates painful. We build the token foundation first.",
        },
        {
          title: "Documentation Treated as a Core Deliverable",
          description:
            "We write usage guidelines tested for genuine team adoption, not internal reference notes. A design system nobody can figure out how to use isn't solving the consistency problem.",
        },
        {
          title: "Governance, Not Just a Component Folder",
          description:
            "We build the ownership and contribution model alongside the components, since a system without governance fragments the moment more than one person contributes to it without a shared process.",
        },
        {
          title: "Accessibility Built Into Every Component",
          description:
            "We build accessibility requirements into component specifications from the start, rather than treating it as a separate audit applied after the fact once components are already widely used.",
        },
      ],
    },
    techStack: {
      h2: "Design System Tools We Use",
      paragraph:
        "We build design systems in Figma, structuring design tokens using Figma's variables feature synced where possible with development-side token tools for clean design-to-code handoff. Component documentation lives in Figma alongside the components themselves, with broader governance and contribution guidelines documented in a format your team can actually reference day-to-day. For development sync, we work with whatever token and component framework your engineering team uses.",
      tools: [
        "Figma",
        "Figma Variables",
        "Design Tokens",
        "Component Documentation Tools",
      ],
    },
    useCases: {
      h2: "Who Needs a Design System",
      cases: [
        {
          title: "Product Teams Scaling Past One Designer",
          description:
            "Companies whose design team has grown beyond what informal component sharing can handle consistently, needing real governance and documentation.",
        },
        {
          title: "Products with Visible Design Inconsistency",
          description:
            "Companies whose product has accumulated visible inconsistency across screens and features, built by different designers or teams without a shared system.",
        },
        {
          title: "Engineering Teams Wanting Design-Dev Alignment",
          description:
            "Development teams frustrated by design handoffs that don't translate cleanly into reusable code components, needing a token-based system that bridges the gap.",
        },
        {
          title: "Companies Standardizing Across Multiple Products",
          description:
            "Organizations running several distinct products or platforms that want consistent design language across all of them, without forcing every product to look visually identical.",
        },
      ],
    },
    faqs: [
      {
        question: "How is a design system different from just having reusable Figma components?",
        answer:
          "A design system includes the token foundation, documentation, and governance model that make components maintainable and consistently adopted at scale — a folder without that structure tends to fragment.",
      },
      {
        question: "At what point does our product actually need a design system?",
        answer:
          "Generally once a single designer can no longer personally review every screen for consistency, or once you have multiple designers and developers contributing simultaneously. Below that scale, a lighter component library often suffices just fine.",
      },
      {
        question: "How long does building a design system take?",
        answer:
          "A focused initial system covering core components typically takes 6-10 weeks to design and document properly. Comprehensive systems covering a large existing product can take longer, often built incrementally over several phases.",
      },
      {
        question: "Will our developers need to rebuild everything to use the new system?",
        answer:
          "Not necessarily — we plan migration strategies that can be incremental, updating components and screens gradually over time rather than requiring an immediate, disruptive full rebuild of the whole product.",
      },
      {
        question: "Do you maintain the design system after building it, or just hand it off?",
        answer:
          "Both options are available to clients. Many move to an ongoing design retainer for system maintenance and expansion, while others prefer a full handoff with complete documentation.",
      },
      {
        question: "Can a design system work across both our website and product?",
        answer:
          "Yes, when designed with that broader scope in mind from the start — a shared token foundation can support both marketing and product surfaces well, though component needs often differ between the two.",
      },
    ],
    cta: {
      h2: "Ready for design infrastructure that scales with your team?",
      subhead:
        "Let's look at your current components and inconsistencies — a real design system fixes problems that compound the longer they're left alone.",
    },
    relatedSubServices: [
      {
        slug: "ui-ux-design",
        parentSlug: "branding-design",
        name: "UI/UX Design",
        shortDescription:
          "The product design work that informs what your component library actually needs.",
      },
      {
        slug: "brand-identity",
        parentSlug: "branding-design",
        name: "Brand Identity",
        shortDescription:
          "The brand foundation a design system's tokens and components should express consistently.",
      },
      {
        slug: "nextjs",
        parentSlug: "web-development",
        name: "Next.js Development",
        shortDescription:
          "The frontend framework most design token and component implementations sync with.",
      },
    ],
  },
  {
    slug: "website-redesign",
    parentSlug: "branding-design",
    parentName: "Branding & Design",
    parentLabel: "Branding & Design",
    meta: {
      title: "Website Redesign Services",
      description:
        "Website redesign — rebuilding an underperforming site without losing the SEO equity and brand recognition already built into the one you have.",
      keywords: [
        "website redesign services",
        "website redesign agency",
        "website redesign without losing SEO",
        "outdated website redesign",
        "website modernization",
        "site redesign process",
        "redesign vs rebuild website",
        "website redesign audit",
      ],
    },
    hero: {
      eyebrow: "Website Redesign",
      h1: "Website Redesign That Doesn't Throw Away What's Working",
      subheadline:
        "We redesign underperforming or outdated websites — rebuilding the parts that genuinely need to change while protecting the SEO equity, conversion paths, and brand recognition already built into the site you currently have. A redesign that tanks your rankings or confuses returning customers isn't actually genuine progress, even if it looks better in a simple before-and-after screenshot.",
    },
    overview: {
      h2: "Why Redesigns Carry Risks a New Build Doesn't",
      paragraphs: [
        "A website redesign carries risks a brand-new build simply doesn't: an existing site has accumulated search rankings, backlinks, and customer familiarity that a careless redesign can damage even while improving the site's appearance. We treat protecting what's already working as a core project requirement, because we've personally seen redesigns that looked great at launch tank organic traffic for months afterward.",
        "Every redesign starts with an honest audit of what's actually broken versus what just looks visually dated — a site can have an outdated visual style while its information architecture, conversion paths, and SEO foundation are genuinely sound underneath, in which case a more surgical redesign makes more sense than a full rebuild. We diagnose this distinction carefully before recommending the actual scope of the project.",
        "The temptation in any redesign is to change everything simultaneously, since you're already touching the codebase anyway — but bundling a visual refresh with a CMS migration, an information architecture overhaul, and new functionality all at once multiplies risk and makes it far harder to diagnose what actually caused any post-launch issue. We scope redesigns deliberately, sometimes recommending a phased approach over one risky big-bang relaunch.",
        "Launch day execution determines whether a redesign's risks actually materialize — proper URL mapping and redirects, structured data validation, and close monitoring in the weeks after launch catch issues while they're still easy to fix. We treat launch as a critical, carefully managed event, not just flipping a switch once development is done.",
        "Stakeholder expectations also need active management throughout a redesign, since the people approving the new design often respond most strongly to visual polish while underweighting the structural and technical decisions that actually determine whether the redesign succeeds commercially. We make a point of keeping the conversation anchored to the metrics that matter — rankings, conversion rate, task completion — rather than letting the project drift into a purely aesthetic exercise judged on subjective taste alone.",
        "Content migration is frequently underestimated in scope and timeline, since moving years of accumulated pages, blog posts, and resources into a new structure involves more judgment calls than a simple copy-paste exercise — what to keep, what to consolidate, what to retire, and how to map old URLs to new ones without breaking links that other sites and search engines still reference. We budget real time for this work rather than treating it as a quick task squeezed in at the end of the project.",
      ],
    },
    whatsIncluded: {
      h2: "What Website Redesign with Vertexa Includes",
      items: [
        {
          title: "Pre-Redesign Audit",
          description:
            "A full audit of your existing site's performance, SEO foundation, conversion paths, and technical health, distinguishing genuine problems from elements working fine.",
        },
        {
          title: "Information Architecture Review",
          description:
            "Assessing whether your site's structure and navigation genuinely need to change, or whether a visual refresh within the existing architecture better serves the actual goals.",
        },
        {
          title: "Visual & UX Redesign",
          description:
            "Modernized visual design and user experience improvements addressing the genuine problems identified in the audit, not change for the sake of change.",
        },
        {
          title: "SEO Preservation Planning",
          description:
            "Complete URL mapping, redirect strategy, and structured data planning executed before launch, protecting existing search rankings through the transition.",
        },
        {
          title: "Phased Redesign Strategy",
          description:
            "Planning for phased rollouts when bundling every change into a single relaunch would multiply risk unnecessarily, allowing issues to be isolated and fixed more easily.",
        },
        {
          title: "Launch Management & Monitoring",
          description:
            "Careful launch day execution and close post-launch monitoring of rankings, traffic, and conversion metrics, catching issues quickly while they're still easy to address.",
        },
        {
          title: "Post-Launch Optimization",
          description:
            "Continued monitoring and refinement in the weeks following launch, since redesign impact often only becomes fully clear once real traffic interacts with the new site.",
        },
      ],
    },
    process: {
      h2: "How We Run Website Redesigns",
      steps: [
        {
          number: "01",
          title: "Audit & Scope Definition",
          description:
            "We audit the existing site thoroughly and define what genuinely needs to change versus what's already working, scoping the redesign to actual problems.",
        },
        {
          number: "02",
          title: "Design & Architecture Planning",
          description:
            "We design the visual and UX changes alongside SEO and migration planning simultaneously, since these decisions are interdependent, not sequential.",
        },
        {
          number: "03",
          title: "Development & Pre-Launch Validation",
          description:
            "We build the redesign and validate redirects, structured data, and tracking thoroughly in staging before anything goes live to real traffic.",
        },
        {
          number: "04",
          title: "Launch & Close Monitoring",
          description:
            "We manage launch carefully and monitor rankings, traffic, and conversions closely in the following weeks, ready to address any issues quickly.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Website Redesign",
      points: [
        {
          title: "We Audit Before We Redesign",
          description:
            "We won't recommend a full rebuild before understanding what's actually broken versus what just looks dated. Sometimes a surgical fix serves you better than a complete overhaul.",
        },
        {
          title: "SEO Preservation as a Core Requirement",
          description:
            "We treat protecting existing rankings as a non-negotiable project requirement, with full URL mapping and redirect planning built into the process from the start.",
        },
        {
          title: "We Scope to Reduce Risk, Not Maximize Scope",
          description:
            "We'll recommend a phased approach when bundling every change into one relaunch multiplies risk unnecessarily, even though a bigger project would be easier for us to sell and bill for upfront.",
        },
        {
          title: "Careful Launch Execution & Monitoring",
          description:
            "We treat launch as a managed event with close monitoring afterward, catching issues within days rather than discovering a ranking drop a month later with no clear cause to point to.",
        },
      ],
    },
    techStack: {
      h2: "Website Redesign Tools We Use",
      paragraph:
        "Our website redesign process uses Screaming Frog and Google Search Console for the pre-redesign audit, mapping every existing URL and its current performance before planning the new site structure. Design and prototyping happen in Figma, with development typically on Next.js, WordPress, Shopify, or Webflow depending on the site's actual needs. Redirect mapping and structured data validation use Screaming Frog and Google's Rich Results Test before and after launch.",
      tools: [
        "Screaming Frog",
        "Google Search Console",
        "Figma",
        "Rich Results Test",
      ],
    },
    useCases: {
      h2: "Who Needs a Website Redesign",
      cases: [
        {
          title: "Sites with an Outdated Visual Identity",
          description:
            "Businesses whose site functions reasonably well but looks visibly dated compared to competitors, needing a visual and UX refresh without disrupting what's structurally working.",
        },
        {
          title: "Sites with Declining Performance Despite Good Content",
          description:
            "Sites where genuine technical or UX problems are capping performance, needing a more substantial rebuild addressing root causes rather than a surface-level refresh.",
        },
        {
          title: "Companies Outgrowing Their Original Site Scope",
          description:
            "Businesses whose site was built for an earlier, smaller version of the company and needs restructuring to reflect expanded services, content, or audience.",
        },
        {
          title: "Companies Migrating Platforms During a Redesign",
          description:
            "Businesses using a redesign as the opportunity to also move platforms — from a legacy CMS to Next.js or another modern stack — requiring extra care around migration and SEO preservation simultaneously.",
        },
      ],
    },
    faqs: [
      {
        question: "Will a redesign hurt our existing SEO rankings?",
        answer:
          "It can if handled carelessly, which is why we treat SEO preservation — URL mapping, redirects, structured data — as a genuine core requirement. Done correctly, a redesign shouldn't cost you meaningful ranking equity at all.",
      },
      {
        question: "How do we know if we need a full redesign or just a refresh?",
        answer:
          "We audit your existing site first to distinguish genuine structural or technical problems from elements that are simply visually dated and need a refresh. The audit determines the right scope for your specific situation.",
      },
      {
        question: "How long does a website redesign take?",
        answer:
          "A focused visual and UX refresh typically takes 6-8 weeks from kickoff to launch. A more substantial rebuild involving architecture and platform changes runs 10-16 weeks. We'll give you a specific timeline after the audit.",
      },
      {
        question: "Should we redesign everything at once, or in phases?",
        answer:
          "It depends on your risk tolerance and how many things are changing simultaneously across the project. We'll recommend phasing when bundling everything into one relaunch would meaningfully increase overall risk.",
      },
      {
        question: "What happens to our existing content during a redesign?",
        answer:
          "We audit and migrate existing content as part of the redesign, identifying what to keep, update, consolidate, or retire — content migration is planned explicitly from the start, not treated as an afterthought.",
      },
      {
        question: "Do you handle the technical platform work too, or just design?",
        answer:
          "Both — we handle the full redesign including development work, whether that's on Next.js, WordPress, Shopify, or Webflow, all coordinated with the design and SEO preservation work together.",
      },
    ],
    cta: {
      h2: "Ready to redesign without losing what's already working?",
      subhead:
        "Let's audit your current site first — we'll tell you honestly what actually needs to change and what doesn't.",
    },
    relatedSubServices: [
      {
        slug: "ui-ux-design",
        parentSlug: "branding-design",
        name: "UI/UX Design",
        shortDescription:
          "Research-informed interface design applied to your redesigned site.",
      },
      {
        slug: "technical-seo",
        parentSlug: "seo",
        name: "Technical SEO",
        shortDescription:
          "The crawlability and indexation safeguards every redesign migration needs.",
      },
      {
        slug: "nextjs",
        parentSlug: "web-development",
        name: "Next.js Development",
        shortDescription:
          "A common technical foundation for performance-focused website redesigns.",
      },
    ],
  },
  {
    slug: "content-strategy",
    parentSlug: "content-social-media",
    parentName: "Content & Social Media",
    parentLabel: "Content & Social Media",
    meta: {
      title: "Content Strategy Services",
      description:
        "Content strategy — editorial roadmaps and topic clusters built around real search demand and business goals, not a content calendar to fill.",
      keywords: [
        "content strategy services",
        "content strategy agency",
        "editorial calendar planning",
        "content marketing strategy",
        "topic cluster strategy",
        "content audit services",
        "B2B content strategy",
        "content gap analysis",
      ],
    },
    hero: {
      eyebrow: "Content Strategy",
      h1: "Content Strategy Built Around What You're Actually Trying to Achieve",
      subheadline:
        "We build editorial roadmaps and topic cluster strategy grounded in real search demand, buyer journey stages, and specific business goals — the planning layer that determines whether content production actually moves a metric, or simply just fills up a calendar. Strategy is the part most content marketing skips entirely in the rush to start publishing content right away.",
    },
    overview: {
      h2: "Why Strategy Is the Planning Layer, Not the Writing",
      paragraphs: [
        "Most content marketing starts with production — assigning blog topics and a publishing schedule — without first answering the strategic questions that should come before any of that work: what is this content actually supposed to achieve, who specifically is it for, and what does the competitive content landscape already look like today. Content strategy is that planning layer, separate from the actual writing and production work.",
        "A content audit of what already exists — what's ranking, what's not, what's outdated, what's redundant — is almost always the right starting point, since most established businesses have far more existing content than they realize, much of it underperforming for specific, fixable reasons. We audit before recommending new production, because creating more content on top of an unaudited foundation often just adds to existing problems.",
        "Topic cluster architecture — organizing content around pillar topics with supporting cluster content that interlinks strategically — builds topical authority far more effectively than publishing disconnected individual articles, even on genuinely good topics. We map content opportunities into this cluster structure from the start, rather than letting a content library accumulate organically into a disconnected pile of individually decent but strategically unconnected pieces.",
        "Every single piece of recommended content gets mapped to a specific business goal and funnel stage — organic traffic growth, lead generation, sales enablement, brand authority — because content without a clear purpose tends to be generically competent and strategically useless in practice. We'd rather recommend less content with a clear purpose than a high-volume calendar nobody can actually explain the business reason for.",
        "Content strategy also needs a realistic relationship with production capacity, since a roadmap built around an unrealistic publishing cadence just becomes a source of ongoing guilt and missed deadlines rather than an actual plan anyone follows. We size the roadmap to what your team or our production capacity can sustainably deliver, since a smaller, consistently executed plan beats an ambitious one that quietly falls apart after the second month.",
        "Strategy needs to evolve as actual performance data comes in, rather than being treated as a fixed plan set once and followed rigidly regardless of what's actually working. A topic cluster that isn't gaining traction after a reasonable runway is a signal worth acting on, and we build in regular checkpoints specifically to catch and respond to these signals rather than discovering eighteen months later that an entire content pillar never resonated.",
      ],
    },
    whatsIncluded: {
      h2: "What Content Strategy with Vertexa Includes",
      items: [
        {
          title: "Content Audits",
          description:
            "Comprehensive audits of existing content identifying what's ranking, what's underperforming, what's outdated, and what's redundant, informing whether to update, consolidate, or retire each individual piece.",
        },
        {
          title: "Topic Cluster & Pillar Content Architecture",
          description:
            "Organizing content opportunities into pillar topics with supporting cluster content, structured to build topical authority through strategic internal linking.",
        },
        {
          title: "Editorial Calendar Development",
          description:
            "Content calendars mapped to search demand, buyer journey stages, and business goals, sequenced so content builds on itself rather than existing as disconnected pieces.",
        },
        {
          title: "Content Gap Analysis",
          description:
            "Identifying where competitors are capturing search visibility or audience attention that you're not, informing where new content investment has the clearest opportunity.",
        },
        {
          title: "Content Performance Measurement Framework",
          description:
            "Defining what success actually looks like for different content types and funnel stages, so performance gets measured against the right goal.",
        },
        {
          title: "Cross-Channel Content Planning",
          description:
            "Strategy for how a single content investment gets adapted across blog, social, and email, maximizing the return on each piece of original research or insight produced.",
        },
        {
          title: "Content Strategy for New Initiatives",
          description:
            "Strategic planning for entering new content categories, launching a new content format, or supporting a new product or service line with appropriate, well-targeted content.",
        },
      ],
    },
    process: {
      h2: "How We Build Content Strategy",
      steps: [
        {
          number: "01",
          title: "Audit & Research",
          description:
            "We audit existing content and research search demand, competitive landscape, and audience needs to understand the current state and the actual opportunity.",
        },
        {
          number: "02",
          title: "Strategy & Architecture",
          description:
            "We define content goals by funnel stage and map opportunities into a topic cluster structure, prioritized by potential impact.",
        },
        {
          number: "03",
          title: "Roadmap Development",
          description:
            "We build a specific, sequenced editorial roadmap your team or our content production service can execute against, not a vague strategic direction.",
        },
        {
          number: "04",
          title: "Measurement & Iteration",
          description:
            "We define how success will be measured and revisit the strategy periodically as performance data comes in, since strategy should evolve with what's working.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Content Strategy",
      points: [
        {
          title: "We Audit Before We Recommend More Content",
          description:
            "We won't recommend a pile of new content on top of an unaudited existing library. We diagnose what's actually underperforming and why before adding anything new to the pile.",
        },
        {
          title: "Strategy Mapped to Specific Business Goals",
          description:
            "Every content recommendation ties to a specific, measurable goal — traffic, leads, authority — not a generic content calendar with no clear business rationale behind each individual piece.",
        },
        {
          title: "Topic Clusters, Not Disconnected Articles",
          description:
            "We architect content as interconnected clusters building topical authority, rather than letting a content library accumulate into disconnected individual pieces with no relationship to each other.",
        },
        {
          title: "We Coordinate Strategy with Execution",
          description:
            "Content strategy disconnected from who's actually producing the content often doesn't survive contact with reality. We coordinate closely with content production from the start, not after the roadmap is finalized.",
        },
      ],
    },
    techStack: {
      h2: "Content Strategy Tools We Use",
      paragraph:
        "We conduct content audits and gap analysis using a combination of Google Search Console performance data, Ahrefs and Semrush for competitive and keyword research, and Screaming Frog for crawling and cataloging existing content at scale. Editorial calendars and content roadmaps are managed in tools like Notion or Asana, structured for collaboration with both strategy and production teams. We track content performance through GA4, tied back to the specific business goals each piece was mapped to.",
      tools: [
        "Ahrefs",
        "Semrush",
        "Google Search Console",
        "Screaming Frog",
        "Notion/Asana",
        "Google Analytics 4",
      ],
    },
    useCases: {
      h2: "Who Needs Content Strategy",
      cases: [
        {
          title: "Companies with an Underperforming Content Library",
          description:
            "Businesses that have published content for years without a clear strategic throughline, needing an audit and restructuring before continuing to produce more.",
        },
        {
          title: "Companies Starting Content Marketing for the First Time",
          description:
            "Businesses launching a content program from scratch, needing a strategic foundation before committing to ongoing production investment.",
        },
        {
          title: "Companies Expanding Into New Content Categories",
          description:
            "Established content programs looking to expand into new topics, formats, or audience segments, needing strategic planning before production begins.",
        },
        {
          title: "Marketing Teams Needing to Justify Content Investment",
          description:
            "Teams needing to make a clear, defensible case internally for continued or increased content investment, grounded in a strategic plan rather than an instinct that content marketing is generally worthwhile.",
        },
      ],
    },
    faqs: [
      {
        question: "What's the difference between this and your blog writing service?",
        answer:
          "Content strategy is the planning layer — what to create, why, and in what sequence to create it. Blog writing is the actual production of long-form articles. Many clients use both together, but they're distinct deliverables.",
      },
      {
        question: "Do you also produce the content, or just plan it?",
        answer:
          "We can do both — strategy plus production through our blog writing, copywriting, and other content services — or just deliver the strategy for your existing content team to execute themselves.",
      },
      {
        question: "How long does a content strategy engagement take?",
        answer:
          "An initial audit and roadmap typically takes 3-4 weeks to complete thoroughly and properly. Ongoing strategy work (quarterly reviews, roadmap updates) continues afterward as a lighter-touch retainer alongside content production.",
      },
      {
        question: "Do you do content strategy for social media too, or just blog/web content?",
        answer:
          "Our content strategy work can encompass cross-channel planning across formats, though deep platform-specific social strategy is often coordinated closely with our social media management service.",
      },
      {
        question: "How do you decide what content to prioritize?",
        answer:
          "We prioritize based on search demand, competitive gaps, and potential business impact — weighing effort against expected return realistically, rather than treating every single idea as equally worth pursuing right away.",
      },
      {
        question: "Can you create a content strategy for a brand-new business with no existing content?",
        answer:
          "Yes — for new businesses, we build the strategy around market research, competitive analysis, and audience research instead of an existing content audit that simply doesn't exist yet.",
      },
    ],
    cta: {
      h2: "Ready for a content plan with a clear point?",
      subhead:
        "Let's audit what you have and figure out what content would actually move the metrics that matter to your business.",
    },
    relatedSubServices: [
      {
        slug: "blog-writing",
        parentSlug: "content-social-media",
        name: "Blog Writing",
        shortDescription:
          "The production and writing execution behind a content strategy roadmap.",
      },
      {
        slug: "link-building",
        parentSlug: "seo",
        name: "Link Building",
        shortDescription:
          "Earning authority for the content assets a strategy identifies as worth creating.",
      },
      {
        slug: "saas-seo",
        parentSlug: "seo",
        name: "SaaS SEO",
        shortDescription:
          "Funnel-stage content strategy specific to SaaS buyer behavior.",
      },
    ],
  },
  {
    slug: "blog-writing",
    parentSlug: "content-social-media",
    parentName: "Content & Social Media",
    parentLabel: "Content & Social Media",
    meta: {
      title: "Blog Writing Services",
      description:
        "Blog writing — long-form content built on real keyword research and search intent, written to rank and actually convert readers, not just publish.",
      keywords: [
        "blog writing services",
        "blog content agency",
        "SEO blog writing",
        "B2B blog writing services",
        "content writing agency",
        "long-form content writing",
        "ghostwriting services",
        "blog post writing service",
      ],
    },
    hero: {
      eyebrow: "Blog Writing",
      h1: "Blog Writing Built to Rank and Actually Convert Readers",
      subheadline:
        "We write long-form blog content grounded in real keyword research and genuine search intent — built to rank competitively and move readers toward a clear next step, not just hit a publish quota each month. This is the production and writing service; if you need the strategic planning behind what to write about, that's our content strategy service instead.",
    },
    overview: {
      h2: "Why Writing Is Execution, Distinct from Strategy",
      paragraphs: [
        "Blog writing is the production and execution layer — the actual researching and writing of articles — distinct from content strategy, which determines what to write about and why. Many clients use both services together, but they're separable: some come to us with a clear content roadmap already in place and just need the writing executed well; others need the strategic planning first.",
        "Every single article starts with keyword and search intent research specific to that piece, not a generic brief based on a topic that simply sounds relevant. Understanding what's actually ranking for a target term — and why — informs the structure, depth, and angle of what we write, rather than producing content optimized for nothing but word count and a keyword density checklist.",
        "Subject matter depth matters more than most content mills account for — a well-researched piece that demonstrates genuine understanding of a topic outperforms a competently-written but shallow article covering the exact same ground. We research thoroughly, including talking to subject matter experts on your team when a topic requires expertise we don't have in-house.",
        "Structure serves both readers and search engines simultaneously — clear headings, scannable formatting, and a logical argument structure that helps readers actually find what they're looking for, while also giving search engines the structural signals they use to understand and rank content. Good structure isn't a separate SEO consideration bolted onto writing; it's part of writing well in the first place.",
        "Consistency over time matters as much as the quality of any individual article, since a publishing cadence that starts strong and then quietly tapers off after a few months undermines both the SEO momentum and the audience trust that consistent publishing builds. We structure production as a sustainable, ongoing cadence rather than a front-loaded sprint that produces a burst of content and then stalls once the initial enthusiasm fades.",
        "Fact-checking and accuracy matter more in blog writing than the casual tone of most content might suggest, since a single factual error discovered by a knowledgeable reader can undermine the credibility of an entire piece, and by extension the brand publishing it. We verify claims and statistics against primary sources rather than repeating secondhand figures circulating across other blogs, since an inherited error doesn't become more accurate just because it's been copied widely.",
      ],
    },
    whatsIncluded: {
      h2: "What Blog Writing with Vertexa Includes",
      items: [
        {
          title: "SEO-Optimized Blog Articles",
          description:
            "Long-form articles built on keyword and search intent research specific to each piece, structured to rank competitively and genuinely serve the reader's actual question.",
        },
        {
          title: "Subject Matter Research & Expert Interviews",
          description:
            "Thorough research, including interviews with subject matter experts on your team when a topic requires expertise beyond general knowledge, ensuring genuine depth and accuracy.",
        },
        {
          title: "Content Repurposing from Existing Material",
          description:
            "Turning webinars, podcasts, internal documentation, or other existing material into polished blog content, maximizing the value of work you've already done.",
        },
        {
          title: "Ghostwriting & Thought Leadership Articles",
          description:
            "Ghostwritten articles capturing a specific voice — often an executive's — for thought leadership content under their byline.",
        },
        {
          title: "Editing & Content Refresh",
          description:
            "Updating and improving existing blog content that's underperforming or outdated, often a faster path to ranking improvement than producing entirely new articles.",
        },
        {
          title: "Content Formatting & On-Page SEO",
          description:
            "Structuring articles with proper headings, internal linking, and on-page elements that support both readability and search visibility across every published piece.",
        },
        {
          title: "Editorial Calendar Execution",
          description:
            "Consistent production against an agreed editorial calendar, whether that's one we developed through content strategy or one you bring to us already planned and ready to execute.",
        },
        {
          title: "Multi-Format Adaptation",
          description:
            "Adapting long-form articles into supporting formats — social snippets, email summaries, internal documentation — extending the value of each piece of original research beyond the blog post itself.",
        },
      ],
    },
    process: {
      h2: "How We Write Blog Content",
      steps: [
        {
          number: "01",
          title: "Brief & Research",
          description:
            "We research keyword intent and the competitive content landscape for each piece, building a brief that informs structure, depth, and angle before writing begins.",
        },
        {
          number: "02",
          title: "Drafting",
          description:
            "We write the first draft grounded in that research, structured for both reader value and search visibility from the outset, not retrofitted afterward.",
        },
        {
          number: "03",
          title: "Review & Revision",
          description:
            "Drafts go through review against the original brief and your feedback, refining for accuracy, voice, and clarity before finalizing.",
        },
        {
          number: "04",
          title: "Publishing & Optimization",
          description:
            "We finalize on-page SEO elements and either publish directly or hand off publish-ready content, depending on your preferred workflow.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Blog Writing",
      points: [
        {
          title: "Every Piece Starts with Real Keyword Research",
          description:
            "We don't write generic articles based on a topic that sounds relevant. Every piece is grounded in research about what's actually ranking and why, informing the angle and structure.",
        },
        {
          title: "Genuine Subject Matter Depth",
          description:
            "We research thoroughly and talk to your subject matter experts when a topic requires it, rather than writing confidently about things we don't actually understand well.",
        },
        {
          title: "Structure That Serves Readers and Search Engines Together",
          description:
            "We don't treat good writing and SEO structure as separate, competing concerns. Clear, scannable structure serves both simultaneously when done well, without feeling like it was written for an algorithm instead of a person.",
        },
        {
          title: "Flexible to Your Existing Strategy or Ours",
          description:
            "We can execute against a content roadmap you already have, or pair this service with our content strategy work for a fully integrated, end-to-end approach.",
        },
      ],
    },
    techStack: {
      h2: "Blog Writing Tools We Use",
      paragraph:
        "Our writing process is grounded in keyword research from Ahrefs and Semrush, informing the search intent and competitive context for each piece before drafting begins. We manage editorial workflows and drafts through Notion or Google Docs for collaborative review, and validate on-page SEO elements — headings, internal linking, metadata — before publishing. Content performance gets tracked through Google Search Console and GA4 to inform what's actually working.",
      tools: [
        "Ahrefs",
        "Semrush",
        "Notion/Google Docs",
        "Google Search Console",
        "Google Analytics 4",
      ],
    },
    useCases: {
      h2: "Who Needs Blog Writing",
      cases: [
        {
          title: "Companies with a Content Strategy Needing Execution",
          description:
            "Businesses with a clear editorial roadmap already in place, needing consistent, quality writing execution against that plan.",
        },
        {
          title: "B2B Companies Needing Subject Matter Depth",
          description:
            "Companies in technical or specialized industries where genuinely deep, accurate content matters more than generic, broadly-applicable writing.",
        },
        {
          title: "Executives Wanting Thought Leadership Content",
          description:
            "Founders and executives who want to build a public voice and authority through content but don't have time to write it themselves.",
        },
        {
          title: "Companies Needing Consistent Production Without an In-House Writer",
          description:
            "Businesses without a dedicated content writer on staff who still need a reliable, ongoing publishing cadence rather than sporadic articles whenever someone internally finds the time.",
        },
      ],
    },
    faqs: [
      {
        question: "How is this different from your content strategy service?",
        answer:
          "Content strategy is the planning layer — what to write about, why, and in what sequence. Blog writing is the actual research and writing execution. We offer both separately or together.",
      },
      {
        question: "Do you need our input for every article, or can you write independently?",
        answer:
          "It depends on the topic — for general topics, we can research and write largely independently. For topics requiring specific company or product knowledge, we'll need brief input or a short expert interview.",
      },
      {
        question: "How long does each blog article take to produce?",
        answer:
          "A standard long-form article typically takes 1-2 weeks from initial brief to final draft, depending on research depth required and the number of revision rounds needed. We'll give you a specific cadence for ongoing production.",
      },
      {
        question: "Can you write in our company's existing voice?",
        answer:
          "Yes — we study existing content and any voice guidelines you have, or help establish a consistent voice if one doesn't exist yet, then write consistently within it across every piece.",
      },
      {
        question: "Do you publish the content, or just deliver the writing?",
        answer:
          "Both options are available to clients — we can publish directly to your CMS with full on-page SEO setup, or deliver publish-ready content for your own team to post.",
      },
      {
        question: "Can you update and improve our existing underperforming articles?",
        answer:
          "Yes, content refresh and improvement of existing articles is often a faster path to ranking improvement than new content, and we offer this as part of the service.",
      },
    ],
    cta: {
      h2: "Ready for blog content that actually ranks and converts?",
      subhead:
        "Tell us about your topics and goals — we'll show you what research-backed, properly structured content looks like for your industry.",
    },
    relatedSubServices: [
      {
        slug: "content-strategy",
        parentSlug: "content-social-media",
        name: "Content Strategy",
        shortDescription:
          "The planning and roadmap layer behind a sustainable blog writing program.",
      },
      {
        slug: "copywriting",
        parentSlug: "content-social-media",
        name: "Copywriting",
        shortDescription:
          "Short-form, conversion-focused writing for the pages your blog content links to.",
      },
      {
        slug: "on-page-seo",
        parentSlug: "seo",
        name: "On-Page SEO",
        shortDescription:
          "Optimization that helps published articles actually rank for their target terms.",
      },
    ],
  },
  {
    slug: "social-media-management",
    parentSlug: "content-social-media",
    parentName: "Content & Social Media",
    parentLabel: "Content & Social Media",
    meta: {
      title: "Social Media Management Services",
      description:
        "Social media management — platform-specific content and day-to-day management built around a sustainable cadence, not chasing every viral trend.",
      keywords: [
        "social media management services",
        "social media management agency",
        "social media content strategy",
        "Instagram management services",
        "LinkedIn content management",
        "social media scheduling",
        "community management services",
        "social media reporting",
      ],
    },
    hero: {
      eyebrow: "Social Media Management",
      h1: "Social Media Management Built for Consistency, Not Just Virality",
      subheadline:
        "We manage day-to-day social media presence — platform-specific content, posting cadence, and community engagement — built around a sustainable rhythm your brand can genuinely maintain over time, rather than chasing every viral trend and burning out within a few months. The brands that win on social media long-term show up consistently, not just occasionally brilliantly once in a while.",
    },
    overview: {
      h2: "Why Consistency Beats Chasing Virality",
      paragraphs: [
        "Social media strategy needs to be genuinely platform-specific, because the content that performs on LinkedIn looks nothing like what performs on Instagram or TikTok, and an identical cross-posted piece of content typically underperforms everywhere compared to content built for each platform's specific format and audience expectations. We build distinct content approaches for each platform rather than producing once and distributing identically everywhere.",
        "Most brands either post sporadically with no consistent cadence at all, or burn out trying to chase every viral trend and format, both of which undermine the platform algorithms' clear preference for consistent, reliable posting. We build a sustainable cadence specific to what your team or budget can actually maintain long-term, since a consistent, modest posting schedule reliably outperforms an ambitious one that collapses after two months.",
        "Community management — responding to comments, messages, and mentions — is as much a part of social media management as content creation, and it's the piece many brands neglect once content is scheduled and 'done.' Genuine engagement with your audience builds the relationship that makes social media valuable beyond pure reach.",
        "We report on metrics tied to actual business value — engagement that correlates with brand affinity, traffic and conversions driven to owned channels, follower growth in genuinely relevant audiences — rather than vanity metrics like raw impressions or follower count that look good in a report but don't necessarily reflect business impact.",
        "Crisis and reputation moments are also part of what a real social media management relationship needs to plan for, since even well-run brand accounts occasionally face a product issue, a customer complaint that goes viral, or a broader industry controversy that demands a fast, careful response. We establish an escalation process and tone guidance for these situations upfront, rather than improvising a response in the middle of an actual incident when the brand's reputation is already on the line.",
        "Platform algorithm changes are a constant rather than an occasional disruption, and a strategy that worked six months ago on a given platform can quietly stop working as the platform shifts what it rewards. We monitor performance closely enough to notice these shifts early and adjust the approach, rather than continuing to execute a strategy that's already stopped delivering the results it once did.",
        "Brand voice on social media needs to feel like an actual person communicating, not a corporate account reciting approved talking points, since audiences on every platform respond more to content that feels genuinely human than to content that reads like it passed through several layers of approval before publishing. We write social copy with that directness in mind, even while staying within brand guardrails.",
      ],
    },
    whatsIncluded: {
      h2: "What Social Media Management with Vertexa Includes",
      items: [
        {
          title: "Platform-Specific Content Strategy",
          description:
            "Distinct content approaches for each platform you're active on, built around what genuinely performs on that specific platform rather than identical cross-posted content.",
        },
        {
          title: "Content Creation & Scheduling",
          description:
            "Visual and written content creation, scheduled on a sustainable cadence specific to your resources, maintaining consistency rather than sporadic bursts of activity.",
        },
        {
          title: "Community Management & Engagement",
          description:
            "Ongoing response to comments, messages, and mentions, building genuine audience relationships rather than treating social media as a one-way broadcast channel.",
        },
        {
          title: "Social Media Content Calendars",
          description:
            "Structured content planning that coordinates with broader marketing campaigns and content strategy, rather than social media operating in isolation.",
        },
        {
          title: "Influencer & Creator Coordination",
          description:
            "Identifying and coordinating with relevant influencers or creators for partnerships, when collaboration genuinely extends your reach to the right audience.",
        },
        {
          title: "Social Listening & Trend Monitoring",
          description:
            "Monitoring relevant conversations and trends in your industry, informing timely content opportunities without chasing every trend regardless of fit.",
        },
        {
          title: "Performance Reporting & Strategy Iteration",
          description:
            "Reporting tied to engagement quality, traffic, and conversion impact rather than vanity metrics, with strategy adjustments based on what's actually working.",
        },
      ],
    },
    process: {
      h2: "How We Manage Social Media",
      steps: [
        {
          number: "01",
          title: "Platform & Audience Audit",
          description:
            "We audit your current presence (or plan from scratch) and define which platforms genuinely matter for your specific audience, rather than maintaining a presence everywhere by default.",
        },
        {
          number: "02",
          title: "Content Strategy & Calendar",
          description:
            "We build platform-specific content strategies and a sustainable posting calendar coordinated with your broader marketing activities.",
        },
        {
          number: "03",
          title: "Content Production & Community Management",
          description:
            "We produce content on the agreed cadence and actively manage community engagement, treating both as ongoing, equally important responsibilities.",
        },
        {
          number: "04",
          title: "Reporting & Iteration",
          description:
            "We report on performance tied to business-relevant metrics and adjust strategy based on what's genuinely working for your specific audience and goals.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Social Media Management",
      points: [
        {
          title: "Platform-Specific Strategy, Not Cross-Posted Content",
          description:
            "We build distinct content approaches for each platform rather than producing once and distributing identically everywhere, since that approach reliably underperforms.",
        },
        {
          title: "Sustainable Cadence Over Burnout Cycles",
          description:
            "We build a posting rhythm your team or budget can actually maintain long-term, since consistency reliably outperforms an ambitious schedule that collapses after a few months.",
        },
        {
          title: "Community Management as a Core Deliverable",
          description:
            "We treat ongoing engagement with comments and messages as seriously as content creation, not an afterthought once content is scheduled and considered done. A brand that posts well but never replies still feels absent to its actual audience.",
        },
        {
          title: "Reporting Tied to Business Value",
          description:
            "We report on metrics that actually correlate with business impact, not vanity numbers like raw follower count or impressions that look good but don't necessarily mean anything to your bottom line.",
        },
      ],
    },
    techStack: {
      h2: "Social Media Management Tools We Use",
      paragraph:
        "We manage content scheduling and publishing through tools like Buffer or Loomly, coordinated with a content calendar in Notion or Asana for cross-team visibility. Visual content production happens in Canva for quick-turnaround assets and Adobe Creative Suite for more polished campaign work. Social listening and trend monitoring use platform-native analytics alongside dedicated listening tools, and we track performance through a combination of platform analytics and GA4.",
      tools: [
        "Buffer",
        "Loomly",
        "Canva",
        "Adobe Creative Suite",
        "Notion/Asana",
        "Google Analytics 4",
      ],
    },
    useCases: {
      h2: "Who Needs Social Media Management",
      cases: [
        {
          title: "Brands Building Audience on a Specific Platform",
          description:
            "Companies focusing on building a genuine following and engagement on the platforms where their actual audience spends time, rather than a token presence everywhere.",
        },
        {
          title: "B2B Companies Building LinkedIn Presence",
          description:
            "B2B brands and executives building thought leadership and audience on LinkedIn specifically, where professional content and engagement drive business value.",
        },
        {
          title: "D2C Brands Needing Consistent Visual Content",
          description:
            "Consumer brands needing a steady stream of platform-native visual content across Instagram, TikTok, or other visually-driven platforms.",
        },
        {
          title: "Brands Recovering from an Inactive or Neglected Presence",
          description:
            "Companies whose social accounts went dormant for months or longer, needing both a content reboot and a realistic plan for rebuilding engagement that doesn't bounce back overnight.",
        },
      ],
    },
    faqs: [
      {
        question: "How many platforms should we be active on?",
        answer:
          "Fewer than most companies think. We'd rather you show up consistently and well on two platforms where your audience actually is than spread thin across five with inconsistent quality.",
      },
      {
        question: "Do you create the visual content, or just manage scheduling?",
        answer:
          "Both — we handle content creation (visual and written) as well as scheduling, community management, and reporting, as a complete management service rather than just a scheduling tool.",
      },
      {
        question: "How do you handle responding to negative comments or messages?",
        answer:
          "We develop a response approach aligned with your brand voice for handling both routine engagement and more sensitive situations, escalating to your team when something requires direct involvement.",
      },
      {
        question: "How is success measured for social media management?",
        answer:
          "We track engagement quality, follower growth in relevant audiences, and traffic or conversion impact to owned channels — not just raw impressions or vanity follower counts alone.",
      },
      {
        question: "Do you handle paid social too, or just organic?",
        answer:
          "Organic content and community management is this specific service. Paid social campaigns fall under our performance marketing services (Meta Ads, TikTok Ads), though we coordinate closely between the two teams.",
      },
      {
        question: "Can you work with our existing in-house social media person?",
        answer:
          "Yes — we can take over full management entirely, support an existing team member with strategy and overflow content production, or focus specifically on platforms where you need additional capacity.",
      },
    ],
    cta: {
      h2: "Ready for social media that builds something, not just posts?",
      subhead:
        "Let's figure out which platforms actually matter for your audience — focus beats spreading thin every time.",
    },
    relatedSubServices: [
      {
        slug: "content-strategy",
        parentSlug: "content-social-media",
        name: "Content Strategy",
        shortDescription:
          "Cross-channel planning that coordinates social content with the rest of your marketing.",
      },
      {
        slug: "meta-ads",
        parentSlug: "performance-marketing",
        name: "Meta Ads",
        shortDescription:
          "Amplifying strong organic content through paid Spark and Advantage+ campaigns.",
      },
      {
        slug: "tiktok-ads",
        parentSlug: "performance-marketing",
        name: "TikTok Ads",
        shortDescription:
          "Boosting native short-form video content that's already resonating organically.",
      },
    ],
  },
  {
    slug: "copywriting",
    parentSlug: "content-social-media",
    parentName: "Content & Social Media",
    parentLabel: "Content & Social Media",
    meta: {
      title: "Copywriting Services",
      description:
        "Copywriting — conversion-focused website, ad, and email copy with a consistent voice across every channel, not five different writers' worth of tone.",
      keywords: [
        "copywriting services",
        "copywriting agency",
        "website copywriting services",
        "conversion copywriting",
        "ad copywriting services",
        "B2B copywriting",
        "sales page copywriting",
        "brand voice copywriting",
      ],
    },
    hero: {
      eyebrow: "Copywriting",
      h1: "Copywriting Built to Convert, with One Consistent Voice",
      subheadline:
        "We write conversion-focused copy for websites, ads, sales pages, and email — short-form, persuasive writing distinct from long-form blog content, built around one consistent brand voice across every single channel you use. Copy written by five different freelancers across your website, ads, and email creates a brand that sounds like a different company depending on which page someone's currently reading.",
    },
    overview: {
      h2: "Why Copywriting Is a Different Discipline from Blog Writing",
      paragraphs: [
        "Copywriting and blog writing are different disciplines serving entirely different purposes — copywriting is short-form, persuasion-focused writing built to move someone toward a specific action (a purchase, a signup, a click), while blog writing is longer-form, informational content built primarily to inform and rank. Both matter, but conflating them produces website copy that reads like a blog post, or blog content padded with sales language.",
        "Voice consistency across every single channel — website, ads, email, sales materials — is one of the most underrated brand assets, and one of the easiest to accidentally fragment by using different freelance writers for each channel without any coordination. We write across all of a client's copy needs specifically to maintain one consistent voice, rather than each channel sounding like a completely different company wrote it.",
        "Each copywriting format has different conversion mechanics that the writing needs to account for — a landing page needs to overcome objections and build a complete case for action within a single scroll; an ad needs to capture attention in a few seconds before someone scrolls past; an email needs a subject line that earns the open before the body copy can do any persuasive work at all. We write with these format-specific mechanics in mind.",
        "Good copywriting is research-informed, not just clever wordplay — understanding your actual customer's objections, language, and decision-making process produces copy that resonates and converts, while copy that's just stylistically polished without that grounding often falls flat with real audiences regardless of how well-written it sounds in isolation.",
        "Clarity should win over cleverness whenever the two are in tension, since a clever line that requires a second read to understand almost always converts worse than a plain sentence the reader grasps instantly. We're willing to cut a line we personally like if it doesn't communicate as fast as a simpler alternative, because the job of conversion copy is to move someone toward action, not to demonstrate writing skill for its own sake.",
        "Objection handling is the part of copywriting that separates persuasive writing from merely descriptive writing, since simply listing features and benefits does nothing to address the specific doubts a real prospect is silently weighing before they'll act. We write directly to the objections a buyer is actually having — price, risk, trust, timing — rather than writing around them and hoping the reader doesn't notice the gap.",
      ],
    },
    whatsIncluded: {
      h2: "What Copywriting with Vertexa Includes",
      items: [
        {
          title: "Website & Landing Page Copy",
          description:
            "Conversion-focused copy for homepages, service pages, and landing pages, built to overcome objections and guide visitors toward a specific action.",
        },
        {
          title: "Ad Copywriting",
          description:
            "Copy for Google, Meta, LinkedIn, and other paid ad platforms, written to capture attention and communicate value within each platform's specific format and attention constraints.",
        },
        {
          title: "Email Copywriting",
          description:
            "Subject lines and body copy for marketing and lifecycle emails, written to earn opens and drive action, coordinated with our email marketing service for full campaign execution.",
        },
        {
          title: "Sales Page & Long-Form Sales Copy",
          description:
            "Comprehensive sales page copy for higher-consideration purchases, building a complete persuasive case addressing objections in depth.",
        },
        {
          title: "Brand Voice Development & Documentation",
          description:
            "Defining and documenting your brand's voice — tone, vocabulary, what to say and what to avoid — ensuring consistency across every writer and channel going forward.",
        },
        {
          title: "Product & Feature Copy",
          description:
            "Concise, clear copy for product descriptions, feature explanations, and in-app messaging, balancing clarity with persuasive value communication throughout the product experience.",
        },
        {
          title: "Copy Audits & Optimization",
          description:
            "Auditing existing copy across channels for voice consistency and conversion effectiveness, identifying specific underperforming copy worth rewriting rather than leaving it untouched.",
        },
        {
          title: "Pitch Deck & Investor Copy",
          description:
            "Sharpening the written narrative within pitch decks, one-pagers, and investor updates, where clear, persuasive writing genuinely affects how an opportunity gets received by its audience.",
        },
      ],
    },
    process: {
      h2: "How We Write Copy",
      steps: [
        {
          number: "01",
          title: "Research & Voice Definition",
          description:
            "We research your audience, competitors, and existing brand voice (or help define one) before writing anything, since copy without that grounding tends to be generic.",
        },
        {
          number: "02",
          title: "Copy Strategy & Outlines",
          description:
            "We outline the persuasive structure and key messaging for each piece before drafting, ensuring the copy's argument is sound before focusing on wordsmithing.",
        },
        {
          number: "03",
          title: "Drafting & Refinement",
          description:
            "We write and refine copy through review rounds, balancing persuasive effectiveness with consistent brand voice across every piece.",
        },
        {
          number: "04",
          title: "Testing & Iteration",
          description:
            "Where possible, we recommend testing copy variations to validate what actually converts better with your specific audience, rather than relying purely on internal opinion.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Copywriting",
      points: [
        {
          title: "One Voice Across Every Channel",
          description:
            "We write across website, ads, and email specifically to maintain consistent voice, rather than your brand sounding like a different company on each channel due to disconnected freelancers.",
        },
        {
          title: "Format-Specific Conversion Mechanics",
          description:
            "We understand that a landing page, an ad, and an email each have different jobs and constraints, and we write accordingly rather than applying the same generic approach everywhere.",
        },
        {
          title: "Research-Informed, Not Just Clever Wordplay",
          description:
            "We ground copy in real understanding of your customer's objections and language, since stylistically polished copy without that grounding often falls flat with real audiences regardless of craft.",
        },
        {
          title: "Copywriting and Content Strategy Coordinated",
          description:
            "When you also work with us on content strategy or blog writing, your copy and content stay coordinated under one consistent strategic and voice framework, not siloed between separate teams.",
        },
      ],
    },
    techStack: {
      h2: "Copywriting Tools We Use",
      paragraph:
        "Our copywriting process is grounded in customer and competitor research, often informed by the same keyword and search intent research we use for SEO content, plus direct customer interview insights when available. We draft and collaborate in Google Docs or Notion for clean review workflows, and coordinate closely with our design team when copy needs to work within a specific layout or component structure. For paid ad copy, we work directly within each platform's specific format constraints and character limits.",
      tools: [
        "Google Docs/Notion",
        "Customer & Competitor Research",
        "Platform-Specific Ad Formats",
      ],
    },
    useCases: {
      h2: "Who Needs Copywriting",
      cases: [
        {
          title: "Companies Launching a New Website or Landing Page",
          description:
            "Businesses needing conversion-focused copy for a new site or campaign landing page, where the writing needs to do real persuasive work, not just describe features.",
        },
        {
          title: "Brands with Inconsistent Voice Across Channels",
          description:
            "Companies whose website, ads, and email currently sound like different brands due to disconnected freelance writers, needing voice consolidation.",
        },
        {
          title: "Companies Launching New Paid Campaigns",
          description:
            "Businesses needing ad copy coordinated with landing page copy for a cohesive campaign experience from click to conversion.",
        },
        {
          title: "Companies Preparing for a Funding Round or Major Pitch",
          description:
            "Businesses needing sharper, more persuasive copy for pitch decks, one-pagers, and supporting materials where the writing quality genuinely affects how the opportunity gets perceived.",
        },
      ],
    },
    faqs: [
      {
        question: "What's the difference between copywriting and blog writing?",
        answer:
          "Copywriting is short-form, persuasion-focused writing built to drive a specific action — website, ads, email. Blog writing is longer-form, informational content built primarily to inform and rank.",
      },
      {
        question: "Can you match our existing brand voice?",
        answer:
          "Yes — we study your existing content and any voice guidelines, or help define a voice if one doesn't exist yet, then write consistently within it across every piece of copy.",
      },
      {
        question: "Do you write for a specific platform's character limits and format requirements?",
        answer:
          "Yes — we write within each platform's specific constraints (Google Ads character limits, LinkedIn's text-forward expectations, email subject line length) rather than writing generically and adjusting afterward.",
      },
      {
        question: "How long does a copywriting project take?",
        answer:
          "A landing page or set of website pages typically takes 1-2 weeks from brief to final copy. Ad copy and email campaigns are often faster, especially once brand voice is already well established.",
      },
      {
        question: "Do you test different copy variations?",
        answer:
          "Where possible, yes — we recommend A/B testing copy variations, especially for high-traffic pages or ads, to validate what actually performs better with your specific real audience.",
      },
      {
        question: "Can you write copy for a product or industry you're not familiar with?",
        answer:
          "Yes, through dedicated research and, when needed, interviews with your own team's subject matter experts — thorough research lets us write credibly even in unfamiliar, technical industry areas.",
      },
    ],
    cta: {
      h2: "Ready for copy that sounds like one brand everywhere?",
      subhead:
        "Tell us about your channels and voice — we'll show you what consistent, conversion-focused copy looks like across your whole funnel.",
    },
    relatedSubServices: [
      {
        slug: "blog-writing",
        parentSlug: "content-social-media",
        name: "Blog Writing",
        shortDescription:
          "Long-form, informational content distinct from short-form conversion copy.",
      },
      {
        slug: "email-marketing",
        parentSlug: "content-social-media",
        name: "Email Marketing",
        shortDescription:
          "The strategy and automation layer your email copy gets deployed within.",
      },
      {
        slug: "linkedin-ads",
        parentSlug: "performance-marketing",
        name: "LinkedIn Ads",
        shortDescription:
          "A platform where text-forward, professionally-toned copywriting matters most.",
      },
    ],
  },
  {
    slug: "email-marketing",
    parentSlug: "content-social-media",
    parentName: "Content & Social Media",
    parentLabel: "Content & Social Media",
    meta: {
      title: "Email Marketing Services",
      description:
        "Email marketing — lifecycle and campaign emails built on real segmentation and deliverability practices, for an owned channel you don't rent.",
      keywords: [
        "email marketing services",
        "email marketing agency",
        "email automation services",
        "lifecycle email marketing",
        "email segmentation strategy",
        "email deliverability services",
        "Klaviyo email marketing",
        "ecommerce email marketing",
      ],
    },
    hero: {
      eyebrow: "Email Marketing",
      h1: "Email Marketing for an Audience You Actually Own",
      subheadline:
        "We build email marketing strategy and execution — lifecycle automations, campaign sends, and the segmentation and deliverability practices that determine whether your emails actually reach the inbox at all. Email is the rare owned channel you don't rent from a platform algorithm, and most brands genuinely underinvest in it relative to how reliably and consistently it actually performs.",
    },
    overview: {
      h2: "Why Email Is the Owned Channel Most Brands Underinvest In",
      paragraphs: [
        "Email marketing has a genuine structural advantage over social media and paid advertising: it's an owned channel, meaning your relationship with subscribers doesn't depend on a platform algorithm's changing rules about organic reach, or on an ever-rising cost-per-click for paid acquisition. Building and nurturing an email list is one of the few marketing investments that compounds in value over time rather than requiring continuous spend just to maintain reach.",
        "Deliverability — actually landing in the inbox rather than spam — is the unglamorous technical foundation email marketing depends on, and it's frequently neglected until a sending reputation problem quietly tanks open rates across an entire program. Proper authentication (SPF, DKIM, DMARC), list hygiene, and sending practices that respect engagement signals all factor into deliverability, and we treat this infrastructure as seriously as the actual email content itself.",
        "Lifecycle automation — welcome series, abandoned cart flows, post-purchase sequences, re-engagement campaigns — generates consistent, often higher-converting revenue with a one-time setup investment, compared to one-off campaign sends that require continuous content production to sustain indefinitely. We build automation flows as the foundation, with campaign sends layered on top for timely promotions and announcements.",
        "Segmentation lets a single email program feel personally relevant to meaningfully different subscriber groups — new versus returning customers, high-value versus occasional buyers, engaged versus dormant subscribers — rather than sending identical content to everyone on the list. We build segmentation strategy that genuinely changes what different groups actually receive, not just personalized name fields in an otherwise completely identical email.",
        "List hygiene deserves ongoing attention rather than a one-time cleanup, since an email list naturally accumulates disengaged subscribers over time, and continuing to send to addresses that never open or click actively damages sending reputation with mailbox providers. We build regular suppression and re-engagement processes into the program from the start, treating list health as something that needs continuous maintenance rather than a problem solved once and forgotten.",
        "Mobile rendering deserves dedicated testing rather than an assumption that a desktop-designed template will simply scale down acceptably, since the majority of email opens now happen on mobile devices where a poorly tested template can break entirely or render illegibly. We test every template across the major mobile email clients before it goes into active rotation, since a broken render on launch day undermines an otherwise well-planned campaign.",
      ],
    },
    whatsIncluded: {
      h2: "What Email Marketing with Vertexa Includes",
      items: [
        {
          title: "Lifecycle Automation Flows",
          description:
            "Welcome series, abandoned cart, post-purchase, and re-engagement automation flows built once and generating ongoing revenue, the foundation of a mature email program.",
        },
        {
          title: "Campaign Email Strategy & Execution",
          description:
            "Promotional and announcement campaign emails coordinated with your broader marketing calendar, written and designed for the specific goal of each send.",
        },
        {
          title: "List Segmentation Strategy",
          description:
            "Subscriber segmentation based on behavior, purchase history, and engagement, enabling genuinely relevant content for different groups rather than one-size-fits-all sends.",
        },
        {
          title: "Deliverability Audits & Optimization",
          description:
            "Auditing sending reputation, authentication setup, and list hygiene to ensure emails actually reach the inbox rather than spam or promotions folders.",
        },
        {
          title: "Email Design & Template Development",
          description:
            "On-brand, mobile-responsive email templates designed for both visual consistency and the specific rendering quirks of different email clients.",
        },
        {
          title: "A/B Testing & Optimization",
          description:
            "Testing subject lines, send times, and content variations to improve open and click rates based on actual subscriber behavior, not internal assumptions about what should work.",
        },
        {
          title: "Email Platform Migration & Setup",
          description:
            "Migrating between email service providers or setting up a new platform correctly, including list import, automation rebuilding, and deliverability reputation management throughout the transition.",
        },
        {
          title: "List Growth Strategy",
          description:
            "Advising on lead magnets, signup incentives, and on-site capture points that grow your list with genuinely engaged subscribers, coordinated with content and paid acquisition efforts.",
        },
      ],
    },
    process: {
      h2: "How We Run Email Marketing",
      steps: [
        {
          number: "01",
          title: "Audit & List Health Check",
          description:
            "We audit your existing email program (or set up the foundation for a new one), checking deliverability health and list hygiene before building new campaigns or automations.",
        },
        {
          number: "02",
          title: "Segmentation & Automation Strategy",
          description:
            "We define subscriber segments and design the lifecycle automation flows that will run continuously, the foundation generating consistent revenue.",
        },
        {
          number: "03",
          title: "Campaign Calendar & Content",
          description:
            "We build out the campaign send calendar and content, coordinated with your broader marketing activities and product or promotional calendar.",
        },
        {
          number: "04",
          title: "Testing & Performance Optimization",
          description:
            "We test and optimize based on actual open, click, and conversion data, refining subject lines, content, and timing based on real subscriber behavior.",
        },
      ],
    },
    whyChoose: {
      h2: "Why Brands Choose Us for Email Marketing",
      points: [
        {
          title: "Deliverability Treated as Core Infrastructure",
          description:
            "We treat authentication, list hygiene, and sending reputation as seriously as email content itself, since even great copy doesn't matter if it lands in the spam folder.",
        },
        {
          title: "Automation as the Foundation, Not an Afterthought",
          description:
            "We build lifecycle automation flows first, since they generate consistent revenue with one-time setup, rather than relying entirely on ongoing one-off campaign production.",
        },
        {
          title: "Genuine Segmentation, Not Just Name Personalization",
          description:
            "We build segmentation that changes what different subscriber groups actually receive, not just inserting a first name into an otherwise identical email sent to your entire list.",
        },
        {
          title: "We Understand Email as an Owned Asset",
          description:
            "We think about your email list as a long-term owned asset worth genuinely nurturing, not just a channel for periodic promotional blasts when there's a sale to announce and revenue to chase quickly.",
        },
      ],
    },
    techStack: {
      h2: "Email Marketing Tools We Use",
      paragraph:
        "We build and manage email programs primarily in Klaviyo for e-commerce clients, given its native integration with platforms like Shopify, and other platforms like HubSpot or Mailchimp depending on a client's existing stack and broader marketing needs. Deliverability monitoring uses authentication validation tools and engagement-based sending practices native to these platforms. We design responsive email templates tested across major email clients, and track performance through platform-native analytics alongside GA4.",
      tools: [
        "Klaviyo",
        "HubSpot",
        "Mailchimp",
        "Email Authentication Tools",
        "Google Analytics 4",
      ],
    },
    useCases: {
      h2: "Who Needs Email Marketing",
      cases: [
        {
          title: "E-commerce Brands Wanting Lifecycle Revenue",
          description:
            "D2C and e-commerce businesses wanting to maximize revenue from automated flows — abandoned cart, post-purchase, win-back — rather than relying solely on one-off promotional sends and discount blasts.",
        },
        {
          title: "B2B Companies Nurturing Long Sales Cycles",
          description:
            "B2B companies needing email nurture sequences that support a long, multi-touch buying process between initial interest and an eventual sales-ready opportunity for their sales team.",
        },
        {
          title: "Brands with Poor Email Deliverability",
          description:
            "Companies whose email open rates have declined due to deliverability issues, needing a technical audit and remediation before campaign strategy can be effective again.",
        },
        {
          title: "Brands Switching Email Platforms",
          description:
            "Companies migrating from one email service provider to another, needing careful list import, automation rebuilding, and sending reputation management through the transition.",
        },
      ],
    },
    faqs: [
      {
        question: "What's the difference between automation flows and campaign emails?",
        answer:
          "Automation flows trigger based on specific subscriber behavior (joining a list, abandoning a cart) and run continuously once set up. Campaign emails are one-off sends to a chosen segment at a specific time.",
      },
      {
        question: "How do you fix poor email deliverability?",
        answer:
          "We audit authentication setup (SPF, DKIM, DMARC), list hygiene, and sending practices, then implement fixes and often a gradual sending reputation rebuild, since deliverability issues don't resolve instantly overnight.",
      },
      {
        question: "Which email platform should we use?",
        answer:
          "It depends on your specific business model and existing stack — Klaviyo works well for e-commerce, especially on Shopify; HubSpot suits B2B companies already using its CRM for sales and marketing.",
      },
      {
        question: "How often should we send campaign emails?",
        answer:
          "It depends on your audience and content volume, but consistency matters more than raw frequency overall — a sustainable weekly or biweekly cadence usually outperforms sporadic, high-frequency bursts of sending.",
      },
      {
        question: "Can you grow our email list, or just manage what we have?",
        answer:
          "We can advise on list growth strategy (lead magnets, signup incentives), though list growth tactics often coordinate closely with our content strategy, social media, or paid ads services together.",
      },
      {
        question: "Do you design the emails too, or just write the strategy?",
        answer:
          "Both — we handle email design and template development alongside strategy and copywriting, ensuring everything works together as one coordinated, cohesive program from top to bottom.",
      },
    ],
    cta: {
      h2: "Ready to make email an owned growth channel, not an afterthought?",
      subhead:
        "Let's audit your current program — deliverability and automation gaps are often the easiest wins available in email marketing.",
    },
    relatedSubServices: [
      {
        slug: "copywriting",
        parentSlug: "content-social-media",
        name: "Copywriting",
        shortDescription:
          "The persuasive writing that goes into every campaign and automation email.",
      },
      {
        slug: "content-strategy",
        parentSlug: "content-social-media",
        name: "Content Strategy",
        shortDescription:
          "Cross-channel planning that coordinates email with your broader content calendar.",
      },
      {
        slug: "conversion-rate-optimization",
        parentSlug: "performance-marketing",
        name: "Conversion Rate Optimization",
        shortDescription:
          "Testing and improving what happens after someone clicks through from an email.",
      },
    ],
  },
];

export function getSubServiceBySlug(
  parentSlug: string,
  slug: string
): SubService | undefined {
  return subServices.find(
    (service) => service.parentSlug === parentSlug && service.slug === slug
  );
}

export function getSubServicesByParent(parentSlug: string): SubService[] {
  return subServices.filter((service) => service.parentSlug === parentSlug);
}
