import { siteConfig } from "@/lib/site-config";

export type ServiceOffering = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ServiceWhyUsPoint = {
  title: string;
  description: string;
};

export type ServiceTechStack = {
  intro: string;
  tools: string[];
};

export type ServiceIndustry = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceContent = {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroSubheadline: string;
  /** ~80-word summary + 4 highlight bullets used on the /services overview grid. */
  gridSummary: string;
  gridHighlights: string[];
  overview: string[];
  offerings: ServiceOffering[];
  process: ServiceProcessStep[];
  whyUs: ServiceWhyUsPoint[];
  techStack: ServiceTechStack;
  industries: ServiceIndustry[];
  faqs: ServiceFaq[];
  ctaHeading: string;
  ctaText: string;
};

export const servicesContent: Record<string, ServiceContent> = {
  "web-development": {
    h1: "Web Development for Brands That Demand More",
    metaTitle: "Web Development Services",
    metaDescription:
      "Custom web development with Next.js, React, and Shopify — fast, SEO-optimized websites built for conversions. Trusted by ambitious global brands.",
    keywords: [
      "web development services",
      "custom web development",
      "Next.js development agency",
      "Shopify development services",
      "React development agency",
      "WordPress development services",
      "headless CMS development",
      "ecommerce web development",
      "B2B website development",
      "website redesign agency",
    ],
    heroSubheadline:
      "We build fast, scalable websites and web applications using Next.js, React, Shopify, and WordPress — engineered for search visibility, conversion rate, and long-term maintainability. Whether you need a marketing site that ranks or a complex web application that scales, our development team ships production-grade code, not templated shortcuts. Every build starts with a technical SEO foundation and ends with a site your team can actually update.",
    gridSummary:
      "Marketing sites, e-commerce storefronts, and complex web applications built on Next.js, React, Shopify, and WordPress — engineered for speed, search visibility, and long-term maintainability rather than a flashy launch that becomes unmanageable within a year. Every build starts with a technical SEO foundation, clean component architecture, and documentation your team can actually use. Whether you're rebuilding an underperforming site or shipping a new application from scratch, we build for the business you're becoming, not just the one you are today.",
    gridHighlights: [
      "Next.js, React & Shopify development",
      "Technical SEO built into every build",
      "Core Web Vitals optimization",
      "Clean, documented, maintainable code",
    ],
    overview: [
      "Most websites are built to be launched, not maintained. They're handed off with bloated page builders, undocumented custom code, or CMS platforms nobody on your team understands — and within a year, every small change requires calling the agency that built it. We build differently: clean codebases, sensible component architecture, and documentation that means your team can actually own the site after launch.",
      "Our stack depends on what you're building, not what we're comfortable defaulting to. Marketing sites and content-heavy properties get Next.js with a headless CMS for speed and editorial flexibility. E-commerce gets Shopify or a custom storefront when off-the-shelf themes can't support your margins or merchandising logic. Complex web applications — internal tools, customer portals, multi-tenant SaaS dashboards — get full-stack React and TypeScript, built for the edge cases your business actually has.",
      "Performance and SEO aren't an afterthought bolted on before launch — they're architectural decisions made from day one. That means thinking about Core Web Vitals during the design phase, structuring URLs and metadata before a single page is built, and choosing rendering strategies (static, server-rendered, or hybrid) based on what each page actually needs rather than defaulting to one approach for the entire site.",
      "If you're rebuilding an existing site, we start with an audit — what's working, what's costing you rankings, what's confusing your CMS editors — before writing a line of code. If you're building from scratch, we start with the same questions everyone skips: who's actually maintaining this in twelve months, and what does that person need from the codebase we hand them?",
    ],
    offerings: [
      {
        title: "Custom Website Development",
        description:
          "Marketing sites, corporate websites, and content platforms built on Next.js and React with a headless CMS — fast page loads, clean editorial workflows, and a component library your team can extend without touching core code. Every build ships with structured metadata and semantic HTML from page one.",
      },
      {
        title: "Shopify & E-commerce Development",
        description:
          "Custom Shopify themes and headless commerce builds for brands that have outgrown off-the-shelf templates. We handle product data architecture, checkout customization, app integrations, and the merchandising logic that turns a generic storefront into one built around how you actually sell.",
      },
      {
        title: "Web Application Development",
        description:
          "Full-stack applications — customer portals, internal tools, multi-tenant dashboards — built with React, TypeScript, and a backend architecture sized to your actual scale. We design for the data model first, not the UI, so the application holds up as your business changes.",
      },
      {
        title: "Website Migrations & Replatforming",
        description:
          "Moving from WordPress to headless, Shopify to a custom storefront, or one CMS to another — without losing your search rankings. We map every URL, preserve redirect logic, and validate structured data before and after launch so a migration never costs you organic traffic.",
      },
      {
        title: "Performance & Core Web Vitals Optimization",
        description:
          "Slow sites lose rankings and revenue. We audit render-blocking resources, image delivery, third-party scripts, and server response times, then rebuild the bottlenecks — not just the symptoms — so your Core Web Vitals scores hold up under real traffic, not just lab tests.",
      },
      {
        title: "API & Third-Party Integrations",
        description:
          "Payment gateways, CRMs, marketing automation platforms, inventory systems — we integrate the tools your business already runs on, building resilient API layers that don't break every time a third-party vendor ships an update. We document every integration so your team isn't dependent on us to troubleshoot it later.",
      },
      {
        title: "Ongoing Maintenance & Support",
        description:
          "Dependency updates, security patches, performance monitoring, and small feature requests — handled on a retainer so your site doesn't quietly degrade between major projects. You get a team that already knows your codebase, not a new developer relearning it from scratch every time.",
      },
      {
        title: "Technical SEO Implementation",
        description:
          "Structured data, canonical tags, XML sitemaps, internal linking architecture, and crawlability fixes built directly into the development process — not handed off to a separate SEO team after launch with no context on how the site was actually built.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Technical Audit",
        description:
          "We review your current site (if one exists), your tech constraints, your team's workflow, and your growth goals. For new builds, we map the content model and user flows before any design or code decisions are made.",
      },
      {
        step: "02",
        title: "Architecture & Design",
        description:
          "We decide the tech stack, information architecture, and rendering strategy based on what the site actually needs — then move into wireframes and visual design, with SEO and performance considerations built into every decision from the start.",
      },
      {
        step: "03",
        title: "Development & QA",
        description:
          "Our team builds in sprints with regular demos, not a single reveal at the end. Every feature is tested across devices, browsers, and connection speeds before it ships, with accessibility and performance checks built into the QA process.",
      },
      {
        step: "04",
        title: "Launch & Migration",
        description:
          "We handle DNS, redirects, structured data validation, and search console setup so launch day doesn't cost you rankings or traffic. Staging environments mirror production exactly, so there are no surprises when we go live.",
      },
      {
        step: "05",
        title: "Post-Launch Optimization",
        description:
          "We monitor Core Web Vitals, crawl errors, and conversion data after launch, then make the adjustments that only become obvious once real users are on the site — not just what looked right in a design file.",
      },
    ],
    whyUs: [
      {
        title: "Code Built to Outlast Us",
        description:
          "We've inherited too many sites that only the original agency could maintain. Every project we ship comes with documentation, sensible naming conventions, and architecture decisions explained — not buried in someone's head. If we disappeared tomorrow, your next developer could pick up the codebase without starting over from scratch.",
      },
      {
        title: "SEO Isn't a Separate Department",
        description:
          "The same team that writes your code thinks about your search rankings, because the two are inseparable. Site structure, page speed, and metadata aren't handed to an SEO specialist after the fact — they're decided alongside every architectural choice, which is why our builds tend to rank faster than redesigns bolted onto existing sites.",
      },
      {
        title: "We Design for the Maintainer, Not Just the Launch",
        description:
          "A beautiful launch that becomes unmaintainable in six months isn't a win. We ask who's updating this site day-to-day and build the CMS structure, component library, and editorial workflow around that person — not around what looks impressive in a portfolio case study.",
      },
      {
        title: "Senior Developers, Not a Junior Bench",
        description:
          "The engineers architecting your application are the same ones writing the code — not a senior who scopes the project and hands it to a team you'll never talk to. That continuity is why our estimates hold up and our builds don't drift in scope.",
      },
    ],
    techStack: {
      intro:
        "We choose tools based on what a project actually needs, not what we want to put on a case study. For most marketing sites and content platforms, that means Next.js paired with a headless CMS for speed and editorial control. For commerce, Shopify covers most use cases — we go custom only when the business logic genuinely requires it. For complex applications, we lean on React, TypeScript, and a backend sized appropriately to the data and scale involved, deployed on infrastructure that scales without a re-platform down the line.",
      tools: [
        "Next.js",
        "React",
        "TypeScript",
        "Shopify",
        "WooCommerce",
        "Sanity / Headless CMS",
        "Vercel",
        "Tailwind CSS",
        "PostgreSQL",
        "GraphQL & REST APIs",
      ],
    },
    industries: [
      {
        title: "SaaS Marketing Sites",
        description:
          "SaaS companies need marketing sites that load fast, rank for high-intent terms, and convert trial signups — without becoming a bottleneck for the product and growth teams who need to ship landing pages weekly. We build component systems flexible enough for marketing to self-serve most updates without filing a developer ticket for every change.",
      },
      {
        title: "D2C & E-commerce Stores",
        description:
          "D2C brands need storefronts that handle traffic spikes, support complex promotions and bundles, and don't require a developer for every merchandising change. We build Shopify and headless commerce solutions sized to actual order volume, not hypothetical scale.",
      },
      {
        title: "B2B Platforms & Portals",
        description:
          "B2B companies often need more than a marketing site — customer portals, partner dashboards, or internal tools that integrate with existing CRMs and data systems. We build these as proper applications, not website add-ons, with the data architecture to match.",
      },
    ],
    faqs: [
      {
        question: "Do you build on WordPress, or only Next.js and React?",
        answer:
          "Both, depending on the project. WordPress still makes sense for certain content-heavy sites with non-technical editorial teams. For most modern builds — especially anything performance or SEO-sensitive — we recommend Next.js with a headless CMS, but we'll tell you honestly which fits your situation better.",
      },
      {
        question: "How long does a typical website project take?",
        answer:
          "A marketing site typically takes 4-6 weeks from kickoff to launch. E-commerce builds run 6-10 weeks depending on integrations. Complex web applications vary widely based on scope — we'll give you a specific timeline after the discovery phase, not a generic estimate upfront.",
      },
      {
        question: "Will my new website be SEO-friendly?",
        answer:
          "Yes — technical SEO is built into our development process, not added afterward. That includes structured data, proper heading hierarchy, optimized Core Web Vitals, clean URL structures, and XML sitemaps. If you also want ongoing SEO strategy and content, that's a separate service we can bundle in.",
      },
      {
        question:
          "Can you redesign our site without losing our current search rankings?",
        answer:
          "Yes, this is one of the most common projects we handle. We map every existing URL, preserve or properly redirect them, validate structured data, and monitor rankings closely in the weeks after launch to catch any issues immediately.",
      },
      {
        question: "Do you offer ongoing maintenance after launch?",
        answer:
          "Yes. Most clients move to a monthly maintenance retainer after launch covering security updates, dependency upgrades, performance monitoring, and small feature requests. It's optional, but most teams prefer not to manage this in-house.",
      },
      {
        question: "What if we already have an internal dev team?",
        answer:
          "We frequently work alongside internal teams — handling a specific build, a migration, or a performance overhaul while your team focuses on other priorities. We document everything thoroughly so your developers can pick up where we leave off.",
      },
    ],
    ctaHeading: "Ready to build a website that actually performs?",
    ctaText: "Tell us what you're building — we'll tell you honestly what it'll take.",
  },
  "mobile-app-development": {
    h1: "Mobile Apps Built to Ship and Scale",
    metaTitle: "Mobile App Development Services",
    metaDescription:
      "iOS, Android, and cross-platform app development with React Native, Flutter, and native code. Built to ship fast and scale with your user base.",
    keywords: [
      "mobile app development services",
      "iOS app development",
      "Android app development",
      "React Native development",
      "Flutter development",
      "cross-platform app development",
      "native app development agency",
      "MVP app development",
      "SaaS mobile app development",
      "marketplace app development",
    ],
    heroSubheadline:
      "We design and build native iOS and Android apps, and cross-platform apps with React Native and Flutter — for startups shipping their first MVP and established businesses scaling a mobile product used by thousands. From architecture decisions to App Store submission, we handle the full lifecycle, not just the parts that are easy to scope. We've shipped apps that needed to work offline, sync across devices, and pass strict app store review on the first submission.",
    gridSummary:
      "Native iOS and Android apps, plus cross-platform builds with React Native and Flutter — for startups validating a first MVP and established businesses scaling a product used by thousands. We handle the full lifecycle: architecture decisions, offline behavior, push notifications, App Store and Play Store submission, and the post-launch maintenance that keeps an app running as OS versions change every year. We pick the framework based on what your app actually needs, not what's easiest for us to sell you.",
    gridHighlights: [
      "iOS, Android & cross-platform builds",
      "MVP to full-scale app development",
      "App Store & Play Store submission",
      "Post-launch maintenance & OS updates",
    ],
    overview: [
      "Building a mobile app is a different discipline than building a website, and treating it like one is how most app projects go over budget and miss their launch window. Mobile has its own constraints — app store review processes, offline behavior, push notification infrastructure, device fragmentation, and update cycles that move slower than the web. We plan for these from day one instead of discovering them during QA.",
      "The native-versus-cross-platform decision isn't ideological for us — it's a tradeoff we walk through with you based on your actual requirements. React Native and Flutter cover the vast majority of apps well, sharing a single codebase across iOS and Android while still feeling native to users. We reach for fully native Swift or Kotlin development when an app depends heavily on platform-specific APIs, hardware integrations, or performance characteristics that cross-platform frameworks can't deliver.",
      "Whether you're shipping a first MVP to validate a product idea or rebuilding an app that's outgrown its original architecture, the questions are similar: what's the minimum feature set that proves the concept, what's the data and backend architecture that won't need a rewrite at scale, and how do you structure the codebase so adding features next year doesn't mean starting over.",
      "We've built consumer apps competing for daily engagement, B2B SaaS companion apps extending a web product, and marketplace apps coordinating two-sided user bases — each with different technical priorities. A consumer app lives or dies on performance and polish; a B2B companion app needs to feel like a natural extension of the web product; a marketplace app needs real-time data sync that doesn't fall over under load.",
    ],
    offerings: [
      {
        title: "iOS App Development",
        description:
          "Native Swift development for apps that need deep platform integration — ARKit, HealthKit, CarPlay, widgets, or performance characteristics cross-platform frameworks can't match. We follow Apple's Human Interface Guidelines closely enough to sail through App Store review without rejection delays.",
      },
      {
        title: "Android App Development",
        description:
          "Native Kotlin development for apps that need to run reliably across the wide range of Android hardware and OS versions in active use. We test across real device tiers, not just flagship phones, so performance holds up for your actual user base.",
      },
      {
        title: "Cross-Platform Development (React Native & Flutter)",
        description:
          "A single codebase that ships to iOS and Android simultaneously, cutting development time and ongoing maintenance significantly without sacrificing native feel. We use React Native when your team already works in React/JavaScript, and Flutter when performance and custom UI take priority.",
      },
      {
        title: "MVP & Prototype Development",
        description:
          "A scoped, functional first version built to validate your product with real users — not a throwaway prototype you'll discard, but an architectural foundation you can extend once you've proven the concept and raised the resources to scale it.",
      },
      {
        title: "Backend & API Development for Mobile",
        description:
          "Apps are only as good as the backend behind them. We build or integrate the APIs, authentication, push notification infrastructure, and data sync logic your app depends on — designed for the offline-first and intermittent-connectivity reality of mobile usage.",
      },
      {
        title: "App Store & Play Store Optimization",
        description:
          "Submission isn't the finish line — visibility is. We optimize store listings, screenshots, and metadata for discovery, and we know the specific reasons apps get rejected in review, so first submissions don't bounce back with avoidable fixes.",
      },
      {
        title: "App Maintenance & OS Updates",
        description:
          "iOS and Android ship major OS updates annually, and apps that don't keep pace break silently or get flagged by app stores. We maintain apps post-launch — handling OS compatibility, dependency updates, crash monitoring, and incremental feature releases.",
      },
      {
        title: "App Performance & Crash Optimization",
        description:
          "Slow load times and crashes are the fastest way to lose users and tank your store rating. We profile apps for memory leaks, janky animations, and crash-prone code paths, then fix root causes — not just the symptoms showing up in your analytics.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Platform Strategy",
        description:
          "We define what the app needs to do, who it's for, and whether native, React Native, or Flutter fits best — based on your timeline, team, and the platform-specific features you actually need, not a default preference.",
      },
      {
        step: "02",
        title: "UX & Technical Architecture",
        description:
          "We design the user flows and data architecture together, since mobile UX decisions — offline states, loading patterns, navigation — are inseparable from how the backend and local storage are structured underneath them.",
      },
      {
        step: "03",
        title: "Development & Device Testing",
        description:
          "We build in sprints with testable builds delivered regularly, tested across real device tiers and OS versions rather than just simulators, catching the device-specific bugs that simulators don't reveal.",
      },
      {
        step: "04",
        title: "Store Submission & Launch",
        description:
          "We handle App Store and Play Store submission, including the metadata, screenshots, and compliance details that commonly trigger rejections, so your launch date doesn't slip because of an avoidable review bounce.",
      },
      {
        step: "05",
        title: "Post-Launch Monitoring",
        description:
          "We monitor crash reports, performance metrics, and user feedback after launch, using that data to prioritize the next round of fixes and features instead of guessing what users actually need.",
      },
    ],
    whyUs: [
      {
        title: "We Don't Default to One Framework",
        description:
          "Some agencies build everything in React Native because that's the only stack they know. We genuinely evaluate native, React Native, and Flutter for each project, because the wrong framework choice early on is the single most expensive mistake in mobile development — far more expensive to correct than to get right from the very start.",
      },
      {
        title: "We've Shipped Through App Store Rejections",
        description:
          "We know the specific, often undocumented reasons Apple and Google reject submissions — from privacy disclosure gaps to UI guideline violations — because we've fixed them before. That experience means fewer surprises and faster approval on your actual launch date.",
      },
      {
        title: "Backend Architecture That Scales With Adoption",
        description:
          "A mobile app that works great with 100 users and falls over at 10,000 is an architecture failure, not bad luck. We design data sync, caching, and API structure with your growth curve in mind from the first sprint, not as a re-architecture project a year later.",
      },
      {
        title: "Senior Engineers on Every Build",
        description:
          "The developers writing your app's code are the same ones in your sprint planning and demo calls — not a senior architect who scopes the project before junior developers execute it without that context.",
      },
    ],
    techStack: {
      intro:
        "Framework choice depends entirely on what the app needs to do. React Native covers most product apps well — especially when your team already works in JavaScript or TypeScript — and lets us share business logic across platforms efficiently. Flutter is our choice when custom UI and animation performance matter more than ecosystem familiarity. For apps requiring deep platform integration — ARKit, HealthKit, background processing, hardware sensors — we build natively in Swift for iOS and Kotlin for Android. On the backend, we typically pair Firebase or a custom Node/PostgreSQL stack with REST or GraphQL APIs, chosen based on your existing infrastructure and data complexity at the time.",
      tools: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "Node.js",
        "PostgreSQL",
        "GraphQL & REST APIs",
        "Xcode & Android Studio",
        "Fastlane (CI/CD for mobile)",
      ],
    },
    industries: [
      {
        title: "B2C Consumer Apps",
        description:
          "Consumer apps compete on daily engagement and retention, which means performance, polish, and onboarding friction matter more than feature count. We focus early sprints on the core loop that brings users back, rather than building every feature before validating the one that matters.",
      },
      {
        title: "B2B SaaS Mobile Companions",
        description:
          "B2B mobile apps usually extend an existing web product rather than replacing it — notifications, quick actions, and on-the-go visibility into data users manage in depth on desktop. We build these to feel like a natural extension of your product, not a disconnected add-on.",
      },
      {
        title: "Marketplace & Two-Sided Apps",
        description:
          "Marketplace apps need to serve two different user types — buyers and sellers, riders and drivers — often with different feature sets and real-time data requirements. We architect for that duality from the start, rather than retrofitting a second user type onto a single-sided app.",
      },
    ],
    faqs: [
      {
        question: "Should we build natively or use React Native/Flutter?",
        answer:
          "For most product apps, React Native or Flutter is the right call — faster development, one codebase, and a native feel for users. We recommend fully native development only when your app depends heavily on platform-specific hardware or APIs that cross-platform frameworks can't fully support.",
      },
      {
        question: "How long does it take to build a mobile app?",
        answer:
          "A focused MVP typically takes 8-12 weeks. Full-featured apps with complex backend integration run 12-16 weeks or more, depending on scope. We'll give you a specific timeline after discovery, broken into milestones you can track rather than a single end date.",
      },
      {
        question: "Do you handle App Store and Play Store submission?",
        answer:
          "Yes — submission, metadata, screenshots, and compliance review are part of every build. We know the common rejection reasons for both stores and build with those guidelines in mind from the start, which significantly reduces review delays.",
      },
      {
        question: "Can you take over an existing app from another developer?",
        answer:
          "Yes, this is a common engagement for us. We start with a codebase and architecture audit to understand what's there before touching anything, then prioritize stabilizing the app before adding new features on top of an unfamiliar foundation.",
      },
      {
        question: "What happens after the app launches?",
        answer:
          "Most clients move to an ongoing maintenance retainer covering OS compatibility updates, crash monitoring, and incremental feature releases. Mobile platforms change yearly, and apps that aren't maintained tend to break or get flagged within 12-18 months.",
      },
      {
        question: "Do you build the backend too, or just the app?",
        answer:
          "Both, typically. Most apps need a backend for authentication, data sync, and push notifications, and we build or integrate that alongside the app itself, since the two are rarely separable in practice.",
      },
    ],
    ctaHeading: "Have an app idea that needs to ship right?",
    ctaText: "Let's scope what it actually takes to build and launch it.",
  },
  seo: {
    h1: "SEO That Ranks Where Revenue Lives",
    metaTitle: "SEO Services",
    metaDescription:
      "Technical SEO and content strategy that ranks for keywords that drive revenue — not vanity traffic. Built for global B2B and e-commerce brands.",
    keywords: [
      "SEO services",
      "technical SEO",
      "international SEO",
      "SEO agency",
      "B2B SEO services",
      "e-commerce SEO",
      "enterprise SEO services",
      "SEO audit services",
      "organic growth agency",
      "link building services",
    ],
    heroSubheadline:
      "We run technical SEO audits, on-page optimization, content strategy, and link building campaigns designed to rank you for keywords that actually convert — not just keywords that are easy to rank for. Built for international markets, multi-region sites, and e-commerce catalogs where standard SEO playbooks fall short. We report on rankings and traffic, but we measure success in pipeline and revenue.",
    gridSummary:
      "Technical SEO audits, on-page optimization, content strategy, and link building designed to rank you for keywords that actually convert — not just keywords that are easy to rank for. We fix the crawlability, indexation, and structured data issues that silently cap rankings, then build the content and authority that compounds over time. Built for international markets and e-commerce catalogs where standard SEO playbooks fall short, with reporting tied to pipeline and revenue, not vanity traffic metrics nobody can act on.",
    gridHighlights: [
      "Technical SEO audits & fixes",
      "International & multi-region SEO",
      "Content strategy & topic clusters",
      "Link building & digital PR",
    ],
    overview: [
      "Most SEO engagements optimize for the wrong thing: ranking for keywords that look impressive in a monthly report but don't move revenue. We start from the opposite direction — what are the searches your actual buyers run before they convert, and what's currently stopping you from ranking for them? Sometimes that's a technical issue invisible without a crawl audit. Sometimes it's a content gap. Usually it's both.",
      "Technical SEO is the foundation everything else depends on, and it's the part most agencies skip because it's less visible than content. We audit crawlability, indexation, site architecture, Core Web Vitals, structured data, and international targeting (hreflang, currency, and regional content) — the issues that silently cap your rankings no matter how much content you publish on top of them.",
      "Content and on-page optimization come next: mapping search intent to the right page type, fixing keyword cannibalization between pages competing against each other, and building topic clusters that establish authority instead of publishing disconnected blog posts that never rank. For e-commerce, this means category and product page optimization at scale — not just blog content.",
      "Link building is the part of SEO most prone to shortcuts that eventually get penalized. We build links through genuine digital PR, partnerships, and content worth linking to — slower than buying links in bulk, but it's the only approach that survives algorithm updates instead of requiring disavowal campaigns two years later.",
      "Most SEO retainers run for months because rankings genuinely take that long to build and defend — but that doesn't mean reporting should be a black box until month four. We share what we're seeing every week: crawl issues fixed, content published, links earned, and the early ranking signals that tell us whether the strategy is working before the lagging traffic metrics catch up. If something isn't moving the way we expected, you'll hear about it from us before you have to ask.",
      "A lot of SEO advice you'll find online is generic enough to apply to any site, which is exactly why it doesn't move the needle for most businesses that follow it. Your actual constraint might be a JavaScript rendering issue blocking Google from seeing half your content, a content gap your competitors have quietly owned for years, or an information architecture that splits ranking authority across pages competing with each other. We diagnose your specific constraint before recommending a generic playbook that may not even apply to your situation.",
    ],
    offerings: [
      {
        title: "Technical SEO Audits",
        description:
          "A full crawl of your site to find indexation issues, crawl budget waste, duplicate content, broken internal linking, and Core Web Vitals problems — prioritized by actual ranking impact, not just listed alphabetically in a 40-page PDF nobody reads. You get a fix list ranked by what's actually capping your rankings, not a generic audit template.",
      },
      {
        title: "On-Page & Content Optimization",
        description:
          "Mapping pages to search intent, fixing keyword cannibalization, optimizing titles and meta descriptions at scale, and restructuring content to match what's actually ranking on page one — informed by SERP analysis, not guesswork or outdated best practices from a five-year-old blog post.",
      },
      {
        title: "International & Multi-Region SEO",
        description:
          "hreflang implementation, currency and regional content strategy, and technical configuration for brands targeting the US, UK, EU, and Australia simultaneously — avoiding the duplicate content and geo-targeting issues that quietly cap international visibility and split your ranking authority across near-identical pages.",
      },
      {
        title: "E-commerce SEO",
        description:
          "Category and product page optimization at scale, faceted navigation crawl management, structured data for rich snippets, and the technical fixes large catalogs need that standard SEO playbooks built for blogs don't address. We treat thousands of product pages as a system, not individual edits made one at a time.",
      },
      {
        title: "Content Strategy & Topic Clusters",
        description:
          "Editorial roadmaps built around search demand and buyer intent, structured into topic clusters that build topical authority — not disconnected blog posts published to hit a monthly quota with no cohesive strategy behind them or any plan for how they interlink with each other.",
      },
      {
        title: "Link Building & Digital PR",
        description:
          "Earned links through genuine outreach, partnerships, and content worth citing — built to survive algorithm updates, unlike bulk link purchases that eventually require a disavowal campaign once Google catches up to them and erases the rankings you paid good money for.",
      },
      {
        title: "SEO Migrations",
        description:
          "Redesigns, replatforms, and domain changes without losing your existing rankings — full URL mapping, redirect implementation, and post-migration monitoring to catch ranking drops within days, not months after the damage compounds and becomes far harder to reverse.",
      },
      {
        title: "Reporting & Analytics",
        description:
          "Rank tracking, traffic analysis, and conversion attribution tied to actual pipeline and revenue impact — not vanity metrics like total keywords ranked, which tell you very little about whether SEO is actually working.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Technical & Competitive Audit",
        description:
          "We crawl your site, audit technical health, and analyze what's actually ranking for your target keywords — competitors included — to find the specific gaps between where you rank now and where the opportunity actually is.",
      },
      {
        step: "02",
        title: "Strategy & Roadmap",
        description:
          "We prioritize fixes and content by ranking impact and effort, not by what's easiest to report on. You get a roadmap with clear sequencing — technical fixes first when they're blocking everything else, content and links layered on top.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "Technical fixes get implemented directly or handed to your dev team with exact specifications. Content gets written, optimized, and published on a consistent schedule. Link building campaigns run in parallel, not sequentially after everything else is finished.",
      },
      {
        step: "04",
        title: "Monitoring & Iteration",
        description:
          "SEO compounds over months, not weeks. We track rankings, traffic, and conversions continuously, adjusting strategy based on what's actually moving — doubling down on what works instead of running the same playbook regardless of results.",
      },
    ],
    whyUs: [
      {
        title: "We Optimize for Revenue, Not Rankings",
        description:
          "Ranking #1 for a keyword nobody searches with buying intent is a vanity win. Every keyword we target is mapped to actual business impact — pipeline, conversions, revenue — because a rankings report that doesn't tie back to outcomes you can show your board isn't worth the retainer you're paying for it.",
      },
      {
        title: "Technical SEO Is Our Starting Point, Not an Afterthought",
        description:
          "Most agencies lead with content because it's easier to sell. We lead with technical SEO because it's usually the actual constraint — no amount of content fixes a site Google can't properly crawl or index in the first place, no matter how well written that content is.",
      },
      {
        title: "Built for International & Multi-Region Complexity",
        description:
          "Most SEO agencies have never actually configured hreflang correctly or managed a multi-currency e-commerce catalog across four regions. We have, repeatedly, for brands serving the US, UK, EU, and Australia simultaneously — and we know exactly where international SEO commonly breaks before it costs you visibility in a market that matters.",
      },
      {
        title: "No Disavowal Cleanup Required Later",
        description:
          "We don't buy links in bulk or use tactics that work until the next algorithm update. Every link building campaign we run is built to hold up under scrutiny, because rankings built on shortcuts are rankings you'll eventually lose, usually right when you can least afford it.",
      },
    ],
    techStack: {
      intro:
        "SEO without proper tooling is guesswork. We run technical audits through Screaming Frog and Google Search Console, track rankings and competitive visibility through Ahrefs and Semrush, and validate Core Web Vitals and crawl health through a combination of Search Console and custom crawl reports. GA4 ties everything back to actual conversion and revenue data, so reporting reflects business impact, not just traffic volume.",
      tools: [
        "Ahrefs",
        "Semrush",
        "Screaming Frog",
        "Google Search Console",
        "Google Analytics 4",
        "Looker Studio",
        "Schema markup tools",
      ],
    },
    industries: [
      {
        title: "SaaS Organic Growth",
        description:
          "SaaS companies need organic traffic that converts to trials and demos, not just blog readers. We focus on commercial-intent keywords and product-led content, structured to move visitors toward activation rather than just ranking for broad informational terms with no conversion path attached to them.",
      },
      {
        title: "D2C & E-commerce Discovery",
        description:
          "E-commerce SEO lives or dies on category and product page optimization at scale — most catalogs have thousands of pages that need systematic treatment, not one-off fixes. We build scalable optimization frameworks rather than manually editing pages one at a time.",
      },
      {
        title: "B2B Lead Generation",
        description:
          "B2B buying cycles are long and research-heavy, which means SEO content needs to support every stage — not just top-of-funnel awareness content. We build content strategies that capture buyers at the comparison and decision stages too, where intent is highest.",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Most clients see meaningful movement within 3-4 months, with significant compounding results by month 6. Technical fixes can show impact faster; competitive keyword rankings and authority-building take longer. We'll set realistic expectations upfront based on your specific competitive landscape and current starting position.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer:
          "No reputable SEO agency can honestly guarantee specific rankings — Google's algorithm isn't something any agency controls. What we can guarantee is a transparent process, consistent execution, and reporting tied to real business metrics, not empty promises designed to close a sales call and nothing more.",
      },
      {
        question: "Do you handle international and multi-language SEO?",
        answer:
          "Yes — hreflang implementation, regional content strategy, and technical configuration for brands targeting multiple countries or languages simultaneously is a core part of what we do, not an add-on service we're figuring out as we go along with you.",
      },
      {
        question: "How is SEO priced — retainer or project-based?",
        answer:
          "SEO is almost always a monthly retainer, since rankings and authority build over time rather than in a single project sprint. One-time technical audits are available as a standalone project if you want a diagnostic before committing to ongoing work.",
      },
      {
        question: "Will you write the content, or just strategize?",
        answer:
          "Both, depending on what you need. We can run the full content production process — strategy, writing, optimization, publishing — or work alongside your existing content team, providing the strategic direction and technical optimization layer on top of content they produce.",
      },
      {
        question: "What's included in an SEO audit?",
        answer:
          "A full technical crawl, on-page and content gap analysis, backlink profile review, competitive benchmarking, and a prioritized action plan ranked by impact and effort — not a generic checklist, but findings specific to your actual site and market.",
      },
    ],
    ctaHeading: "Ready to rank for keywords that actually convert?",
    ctaText: "Let's audit what's holding your rankings back.",
  },
  "performance-marketing": {
    h1: "Performance Marketing Engineered for ROAS",
    metaTitle: "Performance Marketing Services",
    metaDescription:
      "Paid acquisition across Google, Meta, and LinkedIn Ads — engineered around ROAS and CAC, not vanity impressions. For ambitious global brands.",
    keywords: [
      "performance marketing services",
      "paid ads agency",
      "Google Ads agency",
      "Meta Ads agency",
      "PPC agency",
      "LinkedIn Ads agency",
      "paid social agency",
      "conversion rate optimization",
      "B2B demand generation",
      "ecommerce paid acquisition",
    ],
    heroSubheadline:
      "We plan, launch, and optimize paid acquisition campaigns across Google Ads, Meta, and LinkedIn — engineered around ROAS, CAC, and lifetime value, not impressions or click-through rate. Every campaign is built with conversion tracking that actually works, so budget decisions are based on real data, not platform-reported guesses. We manage budgets like they're our own money, because wasted spend is the fastest way to lose a client's trust.",
    gridSummary:
      "Paid acquisition campaigns across Google Ads, Meta, and LinkedIn — engineered around ROAS, CAC, and lifetime value, not impressions or click-through rate. We fix conversion tracking first, because optimizing against broken data wastes budget faster than any bad targeting decision. Creative is treated as a continuous testing process, not a one-time deliverable, and channel selection is based on where your actual buyers are — with reporting tied to revenue impact, not platform dashboards designed to make every campaign look good.",
    gridHighlights: [
      "Google, Meta & LinkedIn Ads",
      "Conversion tracking & attribution setup",
      "Continuous creative testing",
      "ROAS & CAC-focused reporting",
    ],
    overview: [
      "Most paid media engagements optimize for the metrics platforms make easy to report — impressions, clicks, click-through rate — instead of the metrics that actually matter to your business: cost per acquisition, return on ad spend, and lifetime value. We start every engagement by fixing conversion tracking first, because optimizing campaigns against broken or incomplete data is the single biggest waste of ad spend we see when we audit existing accounts.",
      "Channel selection depends on where your actual buyers are, not where it's trendy to spend budget. Google Ads captures high-intent search demand and works well across most industries. Meta Ads excels at demand generation and works particularly well for D2C and consumer products with strong creative. LinkedIn Ads is expensive per click but unmatched for B2B targeting by job title, company size, and industry — when the deal size justifies the cost.",
      "Creative is often the actual bottleneck, not bidding strategy or audience targeting. We treat ad creative as a continuous testing process — multiple angles, formats, and hooks running simultaneously, with underperformers killed quickly and winners scaled — rather than launching three ads and leaving them untouched for a month while performance quietly decays.",
      "We report on what changes spend decisions, not vanity dashboards. That means weekly visibility into what's working, monthly strategic reviews tied to your actual revenue and pipeline numbers, and the kind of transparency that means you'll know exactly why a campaign is being scaled, paused, or restructured.",
      "Budget scaling is where most accounts fall apart, because what's efficient at $5,000 a month rarely stays efficient at $50,000 without deliberate restructuring — new audiences, new creative volume, often new channels entirely. We plan for that inflection point in advance instead of discovering it after efficiency has already collapsed, which is the difference between a campaign that scales smoothly and one that needs to be rebuilt every time the budget grows.",
      "We also walk clients through the tradeoffs honestly rather than defaulting to whichever channel is easiest for us to manage. Sometimes the right answer is to hold spend flat on a channel that's working instead of chasing growth that erodes efficiency, or to slow-walk a new platform until the existing ones are genuinely maxed out. That kind of restraint doesn't always look exciting in a monthly report, but it's usually what separates accounts that stay profitable from accounts that scale spend and quietly bleed margin in the process.",
    ],
    offerings: [
      {
        title: "Google Ads Management",
        description:
          "Search, Shopping, Performance Max, and YouTube campaigns built around commercial intent keywords and conversion-optimized landing pages — managed with the bid strategy and budget allocation discipline that keeps cost per acquisition predictable as spend scales up.",
      },
      {
        title: "Meta Ads Management",
        description:
          "Facebook and Instagram campaigns built around creative testing velocity and audience strategy — prospecting, retargeting, and lookalike audiences structured to scale spend without the efficiency collapse that happens when budget increases faster than creative supply.",
      },
      {
        title: "LinkedIn Ads Management",
        description:
          "B2B campaigns targeting by job title, seniority, company size, and industry — built for demand generation and account-based marketing strategies where the deal size justifies LinkedIn's higher cost per click compared to other platforms.",
      },
      {
        title: "Conversion Tracking & Attribution Setup",
        description:
          "Server-side tracking, conversion API implementation, and attribution modeling that survives iOS privacy changes and cookie deprecation — fixing the broken tracking that quietly inflates cost-per-acquisition numbers in most accounts we audit.",
      },
      {
        title: "Creative Testing & Production",
        description:
          "Continuous ad creative testing across angles, formats, and hooks — static, video, UGC-style — with a testing cadence fast enough to find winners before audience fatigue sets in and performance decays across your top campaigns.",
      },
      {
        title: "Landing Page Optimization for Paid Traffic",
        description:
          "Paid traffic deserves a landing page built for conversion, not your general homepage. We build and test dedicated landing pages aligned to ad messaging and search intent, closing the gap between click and conversion rather than losing visitors at the last step.",
      },
      {
        title: "Retargeting & Lifecycle Campaigns",
        description:
          "Multi-stage retargeting sequences that meet prospects where they actually are in the buying journey, instead of showing the same generic ad to someone who already abandoned a cart versus someone who's never visited your site.",
      },
      {
        title: "Budget Strategy & Scaling",
        description:
          "Structured budget allocation across channels and campaigns based on actual marginal return, with a clear framework for when and how to scale spend — rather than increasing budget uniformly and hoping efficiency holds.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Tracking Fix",
        description:
          "We audit existing accounts and conversion tracking first, because most paid media accounts we inherit have measurement gaps that make every other optimization decision unreliable until they're fixed. We fix server-side tracking and attribution before touching bid strategy or budget.",
      },
      {
        step: "02",
        title: "Strategy & Channel Planning",
        description:
          "We map which channels match your buyer's actual behavior and decide budget allocation accordingly — not spreading spend evenly across every platform regardless of where your specific audience actually converts.",
      },
      {
        step: "03",
        title: "Launch & Creative Testing",
        description:
          "Campaigns launch with multiple creative variants running simultaneously, structured to identify winners quickly through statistically meaningful testing rather than gut-feel decisions made too early in the data.",
      },
      {
        step: "04",
        title: "Optimization & Scaling",
        description:
          "We optimize toward ROAS and CAC weekly, scaling budget into what's working and cutting what isn't — with creative refreshes scheduled before fatigue sets in, not after performance has already declined.",
      },
      {
        step: "05",
        title: "Reporting & Strategic Review",
        description:
          "Monthly reviews tie performance back to actual revenue and pipeline, not platform-reported vanity metrics — so budget decisions are made on real business impact, with full visibility into why.",
      },
    ],
    whyUs: [
      {
        title: "We Fix Tracking Before Touching Budget",
        description:
          "Most accounts we audit have broken or incomplete conversion tracking, which means every optimization decision built on top of that data is unreliable. We fix measurement first — server-side tracking, proper attribution — because scaling spend on bad data just scales the waste faster, not the results.",
      },
      {
        title: "Creative Velocity, Not Static Campaigns",
        description:
          "Ad fatigue is real and underestimated. We treat creative as a continuous production pipeline, not a one-time deliverable — testing new angles and formats on a cadence fast enough to stay ahead of audience fatigue, instead of watching performance quietly decay month over month with no clear explanation why.",
      },
      {
        title: "ROAS and CAC Are the Only Metrics That Matter",
        description:
          "We don't report impressions and click-through rate as if they're wins on their own. Every campaign is evaluated against return on ad spend and customer acquisition cost relative to lifetime value — the numbers that actually determine whether paid media is profitable for your business in the long run.",
      },
      {
        title: "Multi-Channel Strategy, Not Single-Platform Specialists",
        description:
          "Some agencies only run Google Ads or only run Meta Ads, because that's the one platform they know. We plan across channels based on where your buyers actually are, which means honest recommendations even when the answer is spending less on a platform we could otherwise bill more for.",
      },
    ],
    techStack: {
      intro:
        "Platform expertise matters less than measurement infrastructure. We build campaigns in Google Ads, Meta Ads Manager, and LinkedIn Campaign Manager, but the real differentiator is what sits underneath — server-side conversion tracking, GA4 configured to capture the events that actually matter to your business, and tools like Hotjar for understanding on-page behavior that explains why a campaign converts or doesn't. For e-commerce clients, we layer in platforms like Triple Whale for blended attribution across channels.",
      tools: [
        "Google Ads",
        "Meta Ads Manager",
        "LinkedIn Campaign Manager",
        "Google Analytics 4",
        "Google Tag Manager",
        "Hotjar",
        "Triple Whale",
        "Looker Studio",
      ],
    },
    industries: [
      {
        title: "D2C & E-commerce Scale",
        description:
          "D2C brands need paid acquisition that stays efficient as spend scales, not campaigns that work at a small budget and collapse at scale. We focus on creative supply and audience expansion strategy built for the volume D2C growth actually requires as spend grows month over month.",
      },
      {
        title: "SaaS Acquisition",
        description:
          "SaaS companies need paid campaigns optimized for trial signups and demo bookings, not just clicks — with attribution that connects ad spend to downstream activation and revenue, since the real cost of acquisition only becomes clear well after the initial conversion event takes place.",
      },
      {
        title: "B2B Demand Generation",
        description:
          "B2B paid media supports long sales cycles and account-based strategies, where the goal is often pipeline influence rather than immediate conversion. We build LinkedIn and retargeting strategies aligned to how B2B buying committees actually research and decide on a vendor.",
      },
    ],
    faqs: [
      {
        question: "What's a realistic budget to start with paid ads?",
        answer:
          "It depends on your industry and goals, but we typically recommend enough budget to gather statistically meaningful data within 4-6 weeks — often $3,000-$10,000/month minimum for most channels. We'll give you a specific recommendation based on your market, competition, and current funnel performance.",
      },
      {
        question: "How quickly will we see results?",
        answer:
          "Initial data and optimization signals usually emerge within 2-4 weeks. Meaningful efficiency improvements typically show by month 2-3 as creative testing and audience optimization compound. We'll set specific expectations based on your starting point and competitive landscape from day one.",
      },
      {
        question:
          "Which platform should we start with — Google, Meta, or LinkedIn?",
        answer:
          "It depends entirely on where your buyers actually are. High-intent search products often start with Google. Consumer and D2C brands often see faster results on Meta. B2B with larger deal sizes often justifies LinkedIn's higher cost. We'll recommend based on your specific business and goals.",
      },
      {
        question: "Do you also handle the creative, or just media buying?",
        answer:
          "We handle both, typically. Creative and media buying are too interconnected to separate effectively — the best-targeted campaign with weak creative still underperforms. We can also work alongside your in-house creative team if you prefer that structure instead of full production.",
      },
      {
        question: "How do you report on performance?",
        answer:
          "Weekly performance snapshots and monthly strategic reviews, tied to ROAS, CAC, and revenue impact — not platform-reported vanity metrics. You'll always know exactly why a campaign is being scaled, paused, or restructured, with the data behind that decision laid out clearly.",
      },
      {
        question: "Is this a monthly retainer or project-based?",
        answer:
          "Performance marketing is almost always a monthly retainer, since campaigns require continuous optimization rather than a one-time setup. We also offer an initial account audit as a standalone project if you want a diagnostic before committing to ongoing management.",
      },
    ],
    ctaHeading: "Ready to make paid acquisition profitable again?",
    ctaText: "Let's audit your accounts and show you what's actually working.",
  },
  "branding-design": {
    h1: "Branding That Builds Recognition and Revenue",
    metaTitle: "Branding & Design Services",
    metaDescription:
      "Brand identity, UI/UX design, and design systems for companies that want to look as serious as they are. Strategic branding agency for global growth brands.",
    keywords: [
      "branding agency",
      "brand identity design",
      "UI UX design agency",
      "logo design services",
      "design system services",
      "brand strategy agency",
      "visual identity design",
      "product design agency",
      "rebrand agency",
      "startup branding agency",
    ],
    heroSubheadline:
      "We build brand identities, design systems, and digital product design for companies that need to look as credible as the work they actually do. From a startup's first visual identity to a full rebrand for an established company outgrowing its original branding, we combine strategic positioning with design that holds up across every touchpoint. No mood boards without a strategy behind them, and no logos delivered without the system needed to use them consistently.",
    gridSummary:
      "Brand strategy, visual identity, design systems, and UI/UX design for companies that need to look as credible as the work they actually do. We start with positioning — who you're competing against and what you want to be known for — before any visual decisions get made, then build a complete system flexible enough to work across your website, product, and every other touchpoint. From a startup's first identity to a full rebrand, we design for recognition that compounds, not a one-off logo file.",
    gridHighlights: [
      "Brand strategy & positioning",
      "Logo & visual identity systems",
      "UI/UX & product design",
      "Design systems & documentation",
    ],
    overview: [
      "A logo isn't a brand, and most companies that hire a designer for 'branding' end up with the former and call it the latter. Brand strategy comes first — who you're actually competing against, what your buyers care about, and what you want to be known for — because design decisions made without that foundation tend to look nice and mean nothing, which is the most common failure mode in branding work.",
      "From there, visual identity gets built as a system, not a one-off logo file. Typography, color, photography direction, iconography, and layout principles need to work together across a pitch deck, a website, a product UI, and a trade show booth — which means design systems thinking from the start, not a brand guideline PDF assembled after the fact to retroactively document inconsistent decisions.",
      "For digital products, brand and UI/UX design aren't separate disciplines — they're the same problem from different angles. A design system that looks distinctive but creates usability friction fails the product. A design system that's usable but generic fails the brand. We design for both simultaneously, building component libraries that are recognizably yours and genuinely easy to use.",
      "Whether you're a startup defining your visual identity for the first time or an established company whose branding hasn't kept pace with how much the business has grown, the process looks similar: understand the strategic position first, then build the visual system flexible enough to grow with you instead of needing a full redo in two years.",
      "We also think about who actually has to live with the system day to day — the marketer building a campaign at 9pm before a launch, the salesperson assembling a deck for a pitch tomorrow morning, the new hire who's never seen the brand guidelines before. A design system that only works in the hands of its original designer isn't really a system. It needs to hold up when used by people who aren't designers, under deadline pressure, without us in the room.",
      "Good branding work also has to survive contact with reality — a junior marketer misusing the logo lockup, a sales deck built in a rush with the wrong color values, a partner agency asking for assets in a format nobody anticipated. We build a small margin for that kind of misuse into every system, rather than designing for the idealized scenario where every asset gets produced exactly as specified by someone who read the guidelines closely.",
    ],
    offerings: [
      {
        title: "Brand Strategy & Positioning",
        description:
          "Competitive analysis, audience research, and positioning work that defines what your brand actually stands for before a single visual decision gets made — because design without strategic grounding tends to be forgettable no matter how polished it looks on a slide.",
      },
      {
        title: "Logo & Visual Identity Design",
        description:
          "Logo design, color systems, typography, and brand guidelines built as a cohesive system — flexible enough to work across digital, print, and product contexts, not a single static logo file with no guidance on how to use it consistently across teams.",
      },
      {
        title: "Design Systems & Component Libraries",
        description:
          "Reusable, documented design systems for product teams — component libraries in Figma that bridge design and development, reducing inconsistency and design debt as your product and team grow beyond what a single designer can personally oversee.",
      },
      {
        title: "UI/UX Design for Web & Product",
        description:
          "Interface design for websites and digital products grounded in usability research, not just visual trends. We design the user flows and information architecture alongside the visual layer, because the two are inseparable in good product design.",
      },
      {
        title: "Rebrand & Brand Refresh",
        description:
          "Full or partial rebrands for companies whose visual identity hasn't kept pace with their growth — handled with a clear migration plan so a rebrand doesn't create brand confusion or lose the recognition equity you've already built.",
      },
      {
        title: "Pitch Decks & Sales Collateral",
        description:
          "Investor decks, sales presentations, and marketing collateral designed to reflect your brand consistently across every external-facing document — not a one-off PowerPoint template disconnected from the rest of your visual identity.",
      },
      {
        title: "Packaging & Print Design",
        description:
          "Product packaging, print collateral, and physical brand touchpoints designed with the same strategic and visual rigor as digital assets — because brand consistency across physical and digital touchpoints is where most companies' branding visibly falls apart.",
      },
      {
        title: "Design Direction & Art Direction",
        description:
          "Ongoing creative and art direction for companies that need ongoing design support without hiring a full internal design team — reviewing and directing campaign creative, product design, and marketing assets against a consistent brand standard.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Strategy",
        description:
          "We research your market, competitors, and audience, then define the strategic positioning — what you stand for and who you're for — that every subsequent design decision gets measured against. This phase often surfaces positioning gaps companies didn't know they had.",
      },
      {
        step: "02",
        title: "Concept & Direction",
        description:
          "We present 2-3 distinct visual directions grounded in the strategy, not just aesthetic preference, so you're choosing a strategic direction rather than picking your favorite color palette. Each direction comes with rationale tied directly back to your positioning work.",
      },
      {
        step: "03",
        title: "Design Development",
        description:
          "The selected direction gets developed into a full system — logo, typography, color, components — refined through review rounds until it's ready to actually ship across every touchpoint that needs it.",
      },
      {
        step: "04",
        title: "Documentation & Handoff",
        description:
          "Every project ships with brand guidelines and design system documentation your team can actually use — not a static PDF nobody opens again after the kickoff meeting where it was first presented.",
      },
      {
        step: "05",
        title: "Implementation Support",
        description:
          "We support implementation across your website, product, and marketing materials, ensuring the system gets applied consistently rather than degrading the moment it leaves our hands and into daily execution.",
      },
    ],
    whyUs: [
      {
        title: "Strategy Before Aesthetics",
        description:
          "We won't start designing logos before we understand your positioning, because beautiful design with no strategic grounding is the most common and expensive mistake in branding. Every visual decision we make traces back to a strategic reason, which means your brand can defend its choices, not just display them to a client or investor.",
      },
      {
        title: "Systems, Not One-Off Deliverables",
        description:
          "A single logo file isn't a brand identity. We build complete systems — typography, color, components, guidelines — designed to be used consistently by people who aren't designers, because most brand inconsistency happens when teams improvise without a usable system to follow in the first place when nobody's watching.",
      },
      {
        title: "Brand and Product Design, Together",
        description:
          "We don't treat brand identity and product UI/UX as separate disciplines handled by different teams. The same strategic thinking and visual language need to hold across your marketing site and your actual product — otherwise the brand experience fractures the moment a user logs in.",
      },
      {
        title: "Built to Scale With You",
        description:
          "We design systems flexible enough to extend as you launch new products, enter new markets, or grow your team — not a rigid identity that needs a full redo the moment your business looks different than it did at launch.",
      },
    ],
    techStack: {
      intro:
        "Design tools matter less than design thinking, but the right tools make systems easier to maintain and hand off. We design in Figma, building component libraries and design systems that integrate cleanly with development workflows. For brand assets, print, and campaign work, we use the Adobe Creative Suite. Documentation lives in shared, versioned files your team can access and update — not static PDFs that go stale the moment anything changes.",
      tools: [
        "Figma",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe InDesign",
        "Design system frameworks",
        "FigJam (workshops & strategy)",
      ],
    },
    industries: [
      {
        title: "Startup Launches",
        description:
          "Startups need a credible visual identity fast, often before product-market fit is fully proven — which means building a system flexible enough to evolve without needing a full rebrand the moment the product or positioning shifts under them in the first year.",
      },
      {
        title: "Established Brand Refresh",
        description:
          "Companies that have grown past their original branding need a refresh that respects existing brand equity while modernizing the system — a careful migration, not a jarring overnight change that confuses existing customers and partners.",
      },
      {
        title: "B2B Repositioning",
        description:
          "B2B companies repositioning for a new market or audience need branding that signals credibility to procurement teams and enterprise buyers — a different design language than consumer branding, with different priorities entirely.",
      },
    ],
    faqs: [
      {
        question: "Do you do logo design only, or full branding?",
        answer:
          "We rarely recommend a logo-only engagement, because a logo without strategic positioning and a usable system behind it tends to underperform. Most engagements include strategy, full visual identity, and guidelines — though we can scope a smaller project if budget genuinely requires it.",
      },
      {
        question: "How long does a branding project take?",
        answer:
          "A focused brand identity project typically takes 4-6 weeks. Full rebrands including implementation across multiple touchpoints run 8-12 weeks depending on scope. We'll give you a specific timeline after understanding what's actually included in your project and its full scope.",
      },
      {
        question: "Do you design websites too, or just brand assets?",
        answer:
          "Yes — we offer web development as a separate but complementary service, and many clients bundle branding with a website build so the visual identity and digital execution are designed together rather than handed to two disconnected teams.",
      },
      {
        question: "What if we already have a logo we like?",
        answer:
          "We can build a full design system and brand guidelines around an existing logo if it's strategically sound, or recommend evolving it if it's holding the brand back. We'll give you an honest assessment either way, with no pressure to redesign something that's already working.",
      },
      {
        question: "Do you provide ongoing design support after the project?",
        answer:
          "Yes, many clients move to an ongoing design retainer for campaign creative, new collateral, and design system maintenance as the brand evolves — useful for companies without a full in-house design team.",
      },
      {
        question: "Can you work with our existing brand guidelines?",
        answer:
          "Yes — for product design, web design, or campaign work, we can design within an existing brand system rather than starting from scratch, as long as the guidelines provide enough direction to work from.",
      },
    ],
    ctaHeading: "Ready for a brand that looks as serious as your work?",
    ctaText: "Let's talk about what your brand needs to say.",
  },
  "content-social-media": {
    h1: "Content That Attracts, Converts, and Compounds",
    metaTitle: "Content & Social Media Marketing Services",
    metaDescription:
      "Content strategy, copywriting, and social media management built to attract, convert, and compound — not chase algorithm trends. For global brands.",
    keywords: [
      "content marketing services",
      "social media agency",
      "content strategy services",
      "blog content agency",
      "B2B content marketing",
      "social media management services",
      "copywriting services",
      "editorial strategy agency",
      "content production agency",
      "thought leadership content",
    ],
    heroSubheadline:
      "We build content strategy, write and produce blog and editorial content, and manage social media — designed to compound over time, not chase short-term engagement spikes that disappear the moment you stop posting. Every piece of content is built around a strategic goal: organic traffic, lead generation, or brand authority, not just a content calendar to fill. We measure content by what it does for your business, not by likes.",
    gridSummary:
      "Content strategy, copywriting, blog production, and social media management built to compound over time, not chase short-term engagement spikes. Every piece of content is mapped to a specific business goal — organic traffic, lead generation, or brand authority — before it gets written, with editorial calendars, repurposing workflows, and consistent voice across every channel. We measure content by what it does for your business, not by likes or impressions that look good in a slide but mean very little.",
    gridHighlights: [
      "Content strategy & editorial calendars",
      "Blog & SEO content writing",
      "Social media management",
      "Copywriting across web, ads & email",
    ],
    overview: [
      "Most content marketing fails for the same reason: it's produced to fill a calendar, not to achieve a specific business outcome. Before we write anything, we define what the content is actually for — organic search traffic, top-of-funnel awareness, sales enablement, or thought leadership positioning — because content written without that clarity tends to be generically competent and strategically useless.",
      "For blog and editorial content, that means building topic clusters around real search demand and buyer questions, not publishing whatever feels timely. For social media, it means choosing platforms based on where your actual audience spends attention rather than maintaining a presence everywhere out of obligation, and building a content mix that doesn't depend entirely on going viral to work.",
      "Copywriting threads through everything else we do — website copy, ad creative, email, sales collateral — because consistent voice and message across every channel compounds, while disconnected copywriting from five different freelancers or tools creates a brand that sounds like a different company depending on which page you're reading.",
      "We treat content as a system with editorial calendars, repurposing workflows, and performance tracking — not a series of one-off deliverables disconnected from each other. A single piece of research can become a blog post, five social posts, a newsletter section, and a sales deck slide, instead of being produced once and forgotten.",
      "The hardest part of content marketing usually isn't the writing — it's the discipline to keep publishing consistently long enough for compounding to actually kick in. Most internal teams start strong and taper off within a few months once other priorities crowd it out, which is exactly when the early traffic gains stall before they've had time to build. We exist partly to provide that consistency: a team whose actual job is making sure the calendar doesn't quietly go dark the moment things get busy elsewhere in the business.",
      "We also push back when a content request doesn't actually serve the strategy, even when it's an easy yes. A trending topic with no connection to your audience, a vanity metric someone wants to chase, a format that worked for a competitor for reasons that don't apply to your business — saying no to those requests is part of the job, even though it's the part that's harder to put in a monthly deliverables list than simply producing whatever was asked for.",
    ],
    offerings: [
      {
        title: "Content Strategy & Editorial Calendars",
        description:
          "Strategic content roadmaps built around search demand, buyer journey stages, and business goals — not a generic calendar of trending topics disconnected from what actually moves your specific audience toward a decision they were already close to making.",
      },
      {
        title: "Blog & SEO Content Writing",
        description:
          "Long-form blog content written to rank and convert, built on real keyword research and structured around search intent — not generic articles optimized for nothing but word count and a keyword density checklist.",
      },
      {
        title: "Social Media Management",
        description:
          "Platform-specific content strategy and day-to-day management across the channels where your audience actually spends time — built around a content mix and posting cadence that doesn't depend on going viral to be effective week over week.",
      },
      {
        title: "Copywriting (Web, Ads, Email)",
        description:
          "Conversion-focused copywriting across your website, ad creative, and email campaigns — consistent in voice and message, because copy written by five different freelancers across channels creates a brand that sounds inconsistent to the people reading it and deciding whether to trust you.",
      },
      {
        title: "Thought Leadership & Executive Content",
        description:
          "Ghostwritten articles, LinkedIn content, and executive thought leadership that builds authority and trust — particularly valuable for B2B companies where the founder or executive's personal credibility directly influences buying decisions more than the company's own marketing does.",
      },
      {
        title: "Video & Visual Content Production",
        description:
          "Short-form video content, social graphics, and visual assets produced for the specific platforms they'll run on — not repurposed afterthoughts that look obviously out of place on the channel they're posted to and get scrolled past immediately.",
      },
      {
        title: "Email & Newsletter Content",
        description:
          "Newsletter strategy and email content that builds an owned audience you don't depend on a platform algorithm to reach — repurposing existing content strategically instead of writing every email from scratch.",
      },
      {
        title: "Content Repurposing & Systems",
        description:
          "Workflows that turn a single piece of research or content into multiple formats across channels — maximizing the return on every content investment instead of producing once and never reusing it again.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Content Audit & Strategy",
        description:
          "We audit existing content performance and define the strategic goals for new content — organic traffic, lead generation, or brand authority — so every piece produced afterward serves a specific, measurable purpose. This often reveals which existing content to fix versus retire entirely.",
      },
      {
        step: "02",
        title: "Editorial Planning",
        description:
          "We build editorial calendars mapped to search demand, buyer journey stages, and platform-specific content needs — sequenced so content builds on itself instead of existing as disconnected one-off pieces with no relationship to each other.",
      },
      {
        step: "03",
        title: "Production",
        description:
          "Writers, designers, and video producers execute against the calendar with consistent voice and visual standards, reviewed against the original strategic goal before anything gets published rather than after.",
      },
      {
        step: "04",
        title: "Distribution & Repurposing",
        description:
          "Content gets distributed across the right channels and repurposed into multiple formats — a blog post becomes social content, email content, and sales collateral instead of being produced once and forgotten.",
      },
      {
        step: "05",
        title: "Performance Review & Iteration",
        description:
          "We track what's actually driving traffic, leads, and engagement, then double down on formats and topics that work — adjusting the strategy based on real performance data, not assumptions made at the start.",
      },
    ],
    whyUs: [
      {
        title: "Strategy Before Production",
        description:
          "We don't start writing or posting until we know what the content is actually for. Every piece is mapped to a specific business goal — traffic, leads, or authority — because content produced just to fill a calendar tends to be forgettable and rarely moves any metric that matters to your business in a meaningful way.",
      },
      {
        title: "Consistent Voice Across Every Channel",
        description:
          "Website copy, blog content, social posts, and email shouldn't sound like five different writers worked in isolation — because that inconsistency is exactly what makes a brand feel unpolished. We build and maintain a consistent voice across every channel and format we touch, from a tweet to a sales deck.",
      },
      {
        title: "Content Built to Compound",
        description:
          "We design content systems where one piece of work generates multiple assets across channels, instead of producing content once and never reusing it. That repurposing discipline is the difference between a content program that compounds over time and one that just keeps you busy.",
      },
      {
        title: "We Measure Content by Business Impact",
        description:
          "Likes and impressions are easy to report and mean very little on their own. We track content performance against traffic, lead generation, and pipeline influence — the metrics that actually justify the investment, not the ones that just look good in a slide.",
      },
    ],
    techStack: {
      intro:
        "Good content systems depend on good workflow tools, not just good writers. We plan and manage editorial calendars in Notion and Asana, schedule and publish social content through Buffer and Loomly, and produce visual assets in Canva and Adobe Premiere for video. Performance gets tracked back to actual business metrics through GA4 and platform-native analytics, not just engagement numbers reported in isolation.",
      tools: [
        "Notion",
        "Asana",
        "Buffer",
        "Loomly",
        "Canva",
        "Adobe Premiere",
        "Google Analytics 4",
      ],
    },
    industries: [
      {
        title: "SaaS Content Marketing",
        description:
          "SaaS companies need content that supports both organic growth and product education — blog content that ranks, paired with content that helps users understand and adopt features they're already paying for but might not be using.",
      },
      {
        title: "D2C Social Commerce",
        description:
          "D2C brands need social content that builds community and drives direct sales, not just brand awareness — content built around the platforms and formats where your specific audience actually shops and engages, not a generic presence everywhere.",
      },
      {
        title: "B2B Thought Leadership",
        description:
          "B2B buyers research extensively before engaging sales, which means thought leadership and educational content directly influences deals you'll never see attributed in a last-click report — content that builds trust well before a prospect fills out a form.",
      },
    ],
    faqs: [
      {
        question: "Do you write the content, or just create the strategy?",
        answer:
          "Both, typically. We can run full content production — strategy, writing, design, publishing — or work alongside your existing content team providing strategic direction and editorial oversight if you prefer to keep production in-house and just need the strategy layer.",
      },
      {
        question: "How many social platforms should we be on?",
        answer:
          "Fewer than most companies think. We'd rather you show up consistently and well on two platforms where your audience actually is than spread thin across five platforms with inconsistent quality and frequency that nobody on your team can sustain long-term.",
      },
      {
        question: "How is content marketing priced?",
        answer:
          "Almost always a monthly retainer, since content strategy and production are ongoing rather than one-time projects. Retainer scope depends on content volume and channels — we'll size it to your specific goals, not a fixed package that doesn't fit your business.",
      },
      {
        question: "How long until content marketing shows results?",
        answer:
          "Organic content typically takes 3-6 months to show meaningful traffic and lead impact, since search authority and audience building both compound over time. Social media engagement can show faster signals, often within 4-6 weeks of consistent, well-targeted posting.",
      },
      {
        question: "Do you handle paid social too, or just organic?",
        answer:
          "Organic content and social management is this service. Paid social campaigns fall under our performance marketing service — the two are complementary and often run together, but they're scoped and managed as distinct engagements with separate deliverables.",
      },
      {
        question: "Can you match our existing brand voice?",
        answer:
          "Yes — we start by studying your existing content and voice guidelines, or help define one if it doesn't exist yet, then write consistently within that voice across every channel and format we touch, from blog posts to social captions.",
      },
    ],
    ctaHeading: "Ready for content that actually compounds?",
    ctaText: "Let's build a content system that works while you're not posting.",
  },
};

/** Looks up a service's content and its matching site-config entry by slug (e.g. "web-development"). */
export function getServiceBySlug(slug: string) {
  const content = servicesContent[slug];
  const link = siteConfig.services.find(
    (service) => service.href === `/services/${slug}`
  );

  if (!content || !link) {
    throw new Error(`Unknown service slug: ${slug}`);
  }

  return { content, link };
}

export type ServicesOverviewFaq = {
  question: string;
  answer: string;
};

export const servicesOverviewFaqs: ServicesOverviewFaq[] = [
  {
    question:
      "Do I need to use all six services or can I start with one?",
    answer:
      "Not at all. Most clients start with one service — often web development or SEO — and expand once they see how we work. There's no bundling requirement or minimum number of services to engage us for. We'd rather earn the rest of the relationship than require it upfront.",
  },
  {
    question:
      "How do your service prices typically compare to other agencies?",
    answer:
      "We're priced as a senior, founder-led team — generally above low-cost freelance marketplaces, and competitive with or below large agencies with heavy account management overhead. You're paying for senior execution across every project, not a layer of project managers between you and the people doing the work.",
  },
  {
    question: "Can we add services to our engagement over time?",
    answer:
      "Yes, frequently. Many clients start with one service and add others as trust builds and new needs emerge — a website client adding SEO, or an SEO client adding content production. Because it's the same team, expanding scope doesn't require onboarding a new vendor from scratch.",
  },
  {
    question: "How do you handle service handoffs internally?",
    answer:
      "Because the same team works across disciplines, there isn't a formal 'handoff' in the way there would be between separate agencies. The people working on your SEO strategy and your content production talk daily, not through a client serving as the relay between two vendors who've never spoken.",
  },
  {
    question: "What's your typical engagement length?",
    answer:
      "It varies by service. Project-based work like web development or branding typically runs weeks to a few months. Ongoing services like SEO, performance marketing, and content are typically retainer-based and continue as long as they're driving results — most clients stay far longer than their initial commitment.",
  },
];
