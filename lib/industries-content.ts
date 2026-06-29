export interface IndustryChallenge {
  title: string;
  description: string;
}

export interface IndustryServiceItem {
  name: string;
  description: string;
  relevantServiceSlug: string;
  relevantSubServiceSlug?: string;
}

export interface IndustryProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface Industry {
  slug: string;
  name: string;
  icon: string;
  cardDescription: string;
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
  whyThisIndustry: {
    h2: string;
    paragraphs: string[];
  };
  industryChallenges: {
    h2: string;
    challenges: IndustryChallenge[];
  };
  servicesForIndustry: {
    h2: string;
    intro: string;
    services: IndustryServiceItem[];
  };
  toolsAndTech: {
    h2: string;
    paragraph: string;
    tools: string[];
  };
  caseStudyPlaceholder: {
    h2: string;
    text: string;
  };
  ourProcess: {
    h2: string;
    steps: IndustryProcessStep[];
  };
  faqs: IndustryFaq[];
  cta: { h2: string; subhead: string };
}

export const industries: Industry[] = [
  {
    slug: "saas",
    name: "SaaS",
    icon: "Cloud",
    cardDescription:
      "Marketing sites, organic acquisition, and conversion work built around trial signups and activation, not vanity traffic.",
    meta: {
      title: "SaaS Marketing Agency",
      description:
        "Digital agency for SaaS companies. Growth marketing, SEO, performance ads, and content strategy for B2B SaaS brands targeting US, UK, EU, and Australia markets.",
      keywords: [
        "digital agency for SaaS",
        "SaaS marketing agency",
        "SaaS web development",
        "SaaS SEO services",
        "SaaS growth agency",
        "B2B SaaS marketing",
        "product-led growth agency",
        "SaaS conversion optimization",
      ],
    },
    hero: {
      eyebrow: "For SaaS Companies",
      h1: "Digital Agency for SaaS Companies",
      subheadline:
        "We work with SaaS companies on the two things that actually move the growth metrics that matter — a marketing site built to convert trial signups and demos, and organic and paid acquisition that stays efficient as you scale past your earliest, easiest customers. Most SaaS marketing problems are a conversion problem wearing a traffic problem's clothes.",
    },
    whyThisIndustry: {
      h2: "Why SaaS Marketing Needs to Be Different",
      paragraphs: [
        "SaaS companies sell something genuinely harder to market than most products: a recurring commitment to software a buyer hasn't fully experienced yet, evaluated by people who've usually already tried two or three competitors before they land on your site. That changes what a marketing site, a piece of content, or an ad actually needs to do — it needs to help an already-skeptical, already-comparing buyer commit, not just introduce a category they've never heard of.",
        "We've worked with SaaS companies at very different stages — pre-PMF startups still figuring out who their best-fit customer actually is, growth-stage companies whose paid acquisition has started getting expensive as they scale past their first easy wins, and more established SaaS businesses whose marketing site hasn't kept pace with how much the product itself has matured. Each stage needs a genuinely different approach, not the same generic SaaS marketing playbook applied regardless of where the business actually is.",
        "Trial-to-paid conversion and free-signup activation are the metrics that actually matter for most SaaS businesses, and a huge amount of SaaS marketing spend gets wasted optimizing for top-of-funnel traffic that never converts because the site, the messaging, or the onboarding flow underneath it was never actually built to convert skeptical software buyers. We treat the marketing site itself as a conversion product, not a brochure that happens to sit in front of a signup form.",
        "Churn and retention sit closer to marketing than most SaaS companies treat them, since the content and messaging that attracts the right-fit customer in the first place directly affects how well that customer sticks around once they're in. A SaaS company that markets aggressively to a poor-fit audience just to hit a signup number ends up paying for that mismatch later in elevated churn, which is why we care about who a campaign brings in, not just how many.",
        "Product-led growth has changed what SaaS marketing sites need to do structurally, since a self-serve product with a free trial or freemium tier needs the marketing site to actually demonstrate the product — screenshots, embedded product tours, interactive demos — rather than relying purely on persuasive copy the way a sales-led, demo-gated product reasonably can. We build marketing sites differently depending on which motion your business actually runs.",
        "Pricing page design deserves more dedicated attention than most SaaS companies give it, since this single page often carries an outsized share of the conversion decision and a confusing tier structure or unclear value framing can undo weeks of otherwise effective top-of-funnel work. We treat the pricing page as its own focused project rather than an afterthought template filled in once everything else is done.",
        "Competitive displacement content — comparison pages, migration guides, alternative-to pages — has become one of the highest-converting content types in SaaS specifically, since a prospect actively comparing your product against an incumbent is further along in their decision than almost any other search behavior. We build this content deliberately rather than treating it as a lower-priority addition to a broader content calendar.",
      ],
    },
    industryChallenges: {
      h2: "Challenges SaaS Companies Bring Us",
      challenges: [
        {
          title: "Trial Signups That Don't Convert to Paid",
          description:
            "Strong top-of-funnel signup numbers that quietly mask a weak activation and conversion problem further down the funnel, often invisible until someone actually looks at the full picture.",
        },
        {
          title: "Rising CAC as Easy Acquisition Channels Saturate",
          description:
            "Paid acquisition that worked efficiently in the early days getting steadily more expensive as the easiest, highest-intent audience segments get exhausted.",
        },
        {
          title: "Content That Generates Traffic But Not Trials",
          description:
            "Blog and SEO content driving meaningful organic traffic that never translates into trial signups, usually because it targets broad informational terms instead of commercial-intent ones.",
        },
        {
          title: "A Marketing Site That Hasn't Kept Pace With the Product",
          description:
            "A site built around an earlier, simpler version of the product, now failing to communicate features, use cases, and positioning the product has since outgrown entirely.",
        },
        {
          title: "Category Confusion in a Crowded Market",
          description:
            "Struggling to differentiate from several similarly-positioned competitors, leaving prospects unable to articulate why your product is the right choice over the obvious alternatives they're also evaluating.",
        },
      ],
    },
    servicesForIndustry: {
      h2: "Our Services for SaaS Companies",
      intro:
        "Most SaaS engagements start with one of two problems — a marketing site that isn't converting, or acquisition that's stopped being efficient — and expand from there once the first project proves the work. Here's where we typically start.",
      services: [
        {
          name: "Next.js Development",
          description:
            "Fast, conversion-focused marketing sites built on the App Router, designed to demonstrate the product directly rather than just describing it persuasively.",
          relevantServiceSlug: "web-development",
          relevantSubServiceSlug: "nextjs",
        },
        {
          name: "SaaS SEO",
          description:
            "Organic acquisition built around commercial-intent keywords and product-led content, mapped to the specific stage of the buyer journey it's meant to serve.",
          relevantServiceSlug: "seo",
          relevantSubServiceSlug: "saas-seo",
        },
        {
          name: "Conversion Rate Optimization",
          description:
            "Testing and optimization on the marketing site and signup flow specifically, since SaaS conversion problems are usually fixable without more traffic.",
          relevantServiceSlug: "performance-marketing",
          relevantSubServiceSlug: "conversion-rate-optimization",
        },
        {
          name: "Google Ads",
          description:
            "Paid acquisition targeting commercial-intent search terms with proper conversion tracking, avoiding the broad-match budget waste common in SaaS accounts.",
          relevantServiceSlug: "performance-marketing",
          relevantSubServiceSlug: "google-ads",
        },
        {
          name: "Content Strategy",
          description:
            "Editorial planning that maps content to funnel stage deliberately, addressing the common SaaS mistake of overinvesting in top-of-funnel awareness content alone.",
          relevantServiceSlug: "content-social-media",
          relevantSubServiceSlug: "content-strategy",
        },
      ],
    },
    toolsAndTech: {
      h2: "Tools We Work With in the SaaS Stack",
      paragraph:
        "We build and integrate around the tools SaaS companies already run on, rather than asking you to adopt new infrastructure just to work with us. That typically means product analytics like Mixpanel or Amplitude, customer data platforms like Segment, billing through Stripe, and lifecycle and support tooling like Intercom and Calendly feeding into the marketing and conversion work we do.",
      tools: [
        "Mixpanel",
        "Amplitude",
        "Segment",
        "Stripe",
        "Intercom",
        "Calendly",
      ],
    },
    caseStudyPlaceholder: {
      h2: "Results We're Building Toward",
      text:
        "We're early enough in our agency's life that we'd rather point you to a real conversation about your specific situation than a generic case study template with the names changed. The pattern we look for with every SaaS engagement is the same: a clear baseline metric — trial conversion, signup-to-activation, organic share of pipeline — measured before we start, and measured again on a fixed timeline after, so the impact is never just a feeling.",
    },
    ourProcess: {
      h2: "How We Work with SaaS Companies",
      steps: [
        {
          number: "01",
          title: "Funnel & Metric Audit",
          description:
            "We map your current funnel from first visit to paid conversion, identifying where the actual drop-off is happening before recommending any specific fix.",
        },
        {
          number: "02",
          title: "Prioritized Scope",
          description:
            "We scope the highest-leverage work first — usually the marketing site or conversion path — rather than a broad engagement that spreads effort too thin.",
        },
        {
          number: "03",
          title: "Build & Launch",
          description:
            "We execute the agreed scope with regular check-ins, since SaaS marketing work benefits from iteration rather than a single big-bang reveal.",
        },
        {
          number: "04",
          title: "Measure & Expand",
          description:
            "We measure against the baseline metric we set at the start, then scope the next highest-leverage piece of work based on what the data actually shows.",
        },
      ],
    },
    faqs: [
      {
        question: "Do you work with pre-revenue or pre-PMF SaaS startups?",
        answer:
          "Yes, though the engagement looks different — earlier-stage companies often need positioning and messaging clarity before a full marketing site rebuild makes sense, and we'll say so honestly.",
      },
      {
        question: "Can you help with both organic and paid acquisition?",
        answer:
          "Yes — we run SEO and paid acquisition (Google Ads, LinkedIn Ads) as coordinated services, since the strongest SaaS growth motions usually combine both rather than relying on just one channel.",
      },
      {
        question: "Do you build the product itself, or just the marketing site?",
        answer:
          "We focus on the marketing site, content, and acquisition layer. For product development specifically, that typically falls outside our scope, though we coordinate closely with in-house product teams.",
      },
      {
        question: "How do you handle SaaS companies with a sales-led motion instead of self-serve?",
        answer:
          "We adjust the marketing site and content strategy accordingly — sales-led SaaS needs demo-focused conversion paths and decision-stage content rather than the self-serve trial flows a product-led motion typically depends on.",
      },
      {
        question: "What if our SaaS product is in a niche, technical category?",
        answer:
          "We research thoroughly and talk to your subject matter experts when needed — niche, technical SaaS categories need genuinely informed content and positioning, not generic SaaS marketing language applied loosely or carelessly.",
      },
      {
        question: "How long before we see results from a SaaS marketing engagement?",
        answer:
          "It depends on the specific work — conversion optimization on an existing site can show results within weeks, while organic SEO growth typically takes 3-6 months to build meaningful momentum.",
      },
    ],
    cta: {
      h2: "Ready to fix the gap between traffic and trials?",
      subhead:
        "Tell us about your funnel — most SaaS marketing problems are conversion problems wearing a traffic problem's clothes, and we'll help you tell the difference.",
    },
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    icon: "ShoppingCart",
    cardDescription:
      "Storefronts that handle real order volume, paid acquisition that stays profitable at scale, and branding that earns repeat purchases.",
    meta: {
      title: "E-commerce Marketing Agency",
      description:
        "Digital agency for e-commerce brands. Shopify development, SEO, performance marketing, and content for D2C brands targeting global markets.",
      keywords: [
        "ecommerce digital agency",
        "D2C marketing agency",
        "Shopify agency",
        "ecommerce SEO",
        "D2C performance marketing",
        "ecommerce branding agency",
        "Shopify development agency",
        "ecommerce growth agency",
      ],
    },
    hero: {
      eyebrow: "For E-commerce & D2C Brands",
      h1: "Digital Agency for E-commerce & D2C Brands",
      subheadline:
        "We work with e-commerce and D2C brands on storefronts that can handle real order volume, paid acquisition that stays profitable as spend scales, and branding that turns one-time buyers into repeat customers. Most D2C growth problems show up as a single broken metric, but the actual fix usually touches all three.",
    },
    whyThisIndustry: {
      h2: "Why E-commerce Growth Breaks in Specific, Predictable Ways",
      paragraphs: [
        "E-commerce and D2C brands face a particular kind of growth pressure that most other business models don't — every metric is visible and compared constantly, from CAC and LTV to conversion rate and average order value, and a brand that's winning on one metric can still be quietly losing on another that eventually catches up with them. We've worked with brands at the point where the easy growth has plateaued and the next stage requires actually fixing root causes instead of throwing more ad spend at the problem.",
        "Cart abandonment is the single most common symptom we're brought in to diagnose, and it's rarely caused by just one thing — checkout friction, unexpected shipping costs revealed too late, a slow mobile experience, or simply a price objection the product page never addressed. We treat cart abandonment as a diagnostic starting point, not the actual problem, since fixing the symptom without finding the cause just produces a temporary bump that fades.",
        "The relationship between customer acquisition cost and lifetime value determines whether a D2C brand is actually building a sustainable business or just buying revenue at a loss while it lasts, and this calculation gets harder, not easier, as a brand scales into broader, less naturally-converting audiences. We help brands understand this relationship clearly enough to make real decisions about acquisition spend, not just chase a vanity ROAS number in isolation.",
        "Q4 and seasonal scaling exposes infrastructure and operational weaknesses that stay invisible the rest of the year — a site that handles normal traffic fine can buckle under a Black Friday surge, and an ad account tuned for steady-state spend needs real adjustment to scale efficiently into a seasonal spike. We plan for this seasonality explicitly rather than treating it as a routine month with extra budget.",
        "Multi-channel attribution has become genuinely difficult as D2C marketing has spread across Meta, Google, TikTok, email, and organic simultaneously, and brands that rely purely on platform-reported ROAS often make resourcing decisions based on numbers that don't reflect what's actually driving incremental revenue. We build measurement that accounts for this overlap rather than taking each platform's self-reported performance at face value.",
        "Brand differentiation matters more in D2C than the category often gets credit for, since most products in any given D2C category are genuinely comparable on specs alone, and the brands that build durable, repeat-purchase businesses are usually the ones that built a real brand identity, not just the ones with the lowest CAC in a given month.",
        "Post-purchase experience shapes lifetime value as much as the initial conversion does, since the unboxing experience, the speed and clarity of shipping communication, and how a brand handles a return or an issue all factor into whether a customer becomes a repeat buyer or a one-time purchase. We think about this experience as a genuine growth lever, not just a fulfillment and customer service operational detail disconnected from marketing.",
        "Product page optimization gets less attention than top-of-funnel acquisition work in most D2C strategies, even though product pages are where the actual purchase decision happens — photography quality, social proof placement, and how clearly a page answers a buyer's likely objections all directly affect conversion rate independent of how well the traffic driving people there was targeted.",
      ],
    },
    industryChallenges: {
      h2: "Challenges E-commerce & D2C Brands Bring Us",
      challenges: [
        {
          title: "Rising CAC as Easy Channels Saturate",
          description:
            "Paid acquisition that was efficient early on getting steadily more expensive as a brand scales past its first, easiest-converting audience segments.",
        },
        {
          title: "Cart Abandonment with No Clear Cause",
          description:
            "High add-to-cart rates that don't translate to completed purchases, with no clear diagnosis of whether the issue is price, friction, trust, or something else entirely.",
        },
        {
          title: "Seasonal Scaling Stress",
          description:
            "Infrastructure and ad accounts tuned for steady-state traffic and spend struggling to scale efficiently into Q4 and other seasonal surges.",
        },
        {
          title: "Attribution Confusion Across Channels",
          description:
            "Conflicting performance numbers across Meta, Google, TikTok, and email reporting, making it genuinely difficult to know where to actually allocate budget.",
        },
        {
          title: "Replatforming Without Losing Momentum",
          description:
            "Brands needing to migrate off an outgrown platform without disrupting SEO rankings, customer accounts, or order processing during the transition.",
        },
      ],
    },
    servicesForIndustry: {
      h2: "Our Services for E-commerce & D2C Brands",
      intro:
        "D2C brands typically need some combination of a storefront that can handle real volume, acquisition that stays profitable as it scales, and a brand that earns repeat purchases. Here's where we usually start.",
      services: [
        {
          name: "Shopify Development",
          description:
            "Custom Shopify builds and Hydrogen storefronts for stores that have outgrown generic templates and need genuine performance and customization.",
          relevantServiceSlug: "web-development",
          relevantSubServiceSlug: "shopify",
        },
        {
          name: "Meta Ads",
          description:
            "Facebook and Instagram campaigns built on creative testing velocity and proper Conversions API tracking, the actual levers that move D2C acquisition efficiency.",
          relevantServiceSlug: "performance-marketing",
          relevantSubServiceSlug: "meta-ads",
        },
        {
          name: "E-commerce SEO",
          description:
            "Category and product page optimization at scale, plus faceted navigation fixes that prevent crawl budget waste on large catalogs.",
          relevantServiceSlug: "seo",
          relevantSubServiceSlug: "ecommerce-seo",
        },
        {
          name: "Email Marketing",
          description:
            "Lifecycle automation — abandoned cart, post-purchase, win-back — built on real segmentation, often the highest-ROI channel D2C brands underinvest in.",
          relevantServiceSlug: "content-social-media",
          relevantSubServiceSlug: "email-marketing",
        },
        {
          name: "Brand Identity",
          description:
            "Positioning and visual identity work built to differentiate in a category where most products are genuinely comparable on specs alone.",
          relevantServiceSlug: "branding-design",
          relevantSubServiceSlug: "brand-identity",
        },
      ],
    },
    toolsAndTech: {
      h2: "Tools We Work With in the E-commerce Stack",
      paragraph:
        "We build around the e-commerce stack you're already running on rather than forcing a platform migration just to work with us. That typically means Shopify as the core platform, Klaviyo for email and SMS, Triple Whale or similar tools for blended attribution, Postscript for SMS marketing, and Yotpo for reviews and loyalty feeding into the broader growth strategy.",
      tools: ["Shopify", "Klaviyo", "Triple Whale", "Postscript", "Yotpo"],
    },
    caseStudyPlaceholder: {
      h2: "Results We're Building Toward",
      text:
        "We're early enough in our agency's life that we'd rather have an honest conversation about your specific numbers than show you a generic case study with the brand name swapped out. The pattern we look for with every D2C engagement is the same: a clear baseline on CAC, conversion rate, or repeat purchase rate measured before we start, and measured again on a fixed timeline after, so any claimed improvement is actually verifiable.",
    },
    ourProcess: {
      h2: "How We Work with E-commerce Brands",
      steps: [
        {
          number: "01",
          title: "Funnel & Metrics Audit",
          description:
            "We audit your storefront, acquisition channels, and attribution setup to find where revenue is actually being lost before recommending any specific fix.",
        },
        {
          number: "02",
          title: "Prioritized Scope",
          description:
            "We scope the highest-impact work first — usually checkout friction or acquisition efficiency — rather than spreading effort across every possible improvement at once.",
        },
        {
          number: "03",
          title: "Build & Launch",
          description:
            "We execute the agreed scope with close attention to revenue impact throughout, since e-commerce changes have an immediate, measurable effect on the bottom line.",
        },
        {
          number: "04",
          title: "Measure & Scale",
          description:
            "We measure against the baseline we set at the start, then scale what's working and adjust what isn't, based on actual revenue data, not assumptions.",
        },
      ],
    },
    faqs: [
      {
        question: "Do you work with brands on Shopify exclusively, or other platforms too?",
        answer:
          "Shopify is where most of our e-commerce work happens, but we also support headless commerce and other platforms depending on a brand's specific catalog complexity and technical needs.",
      },
      {
        question: "Can you help us launch a new D2C brand from scratch?",
        answer:
          "Yes — we've supported new D2C launches across branding, storefront build, and initial acquisition strategy, scoped appropriately for a launch budget and timeline.",
      },
      {
        question: "How do you handle Q4 and seasonal scaling specifically?",
        answer:
          "We plan infrastructure and ad account scaling ahead of major seasonal spikes deliberately, rather than treating Q4 as a routine month that just happens to have more budget.",
      },
      {
        question: "Do you fix attribution problems across multiple ad platforms?",
        answer:
          "Yes — we build measurement that accounts for cross-channel overlap rather than relying purely on each platform's self-reported, often overstated return on ad spend.",
      },
      {
        question: "Can you help us replatform without losing our SEO rankings?",
        answer:
          "Yes — replatforming is a dedicated technical SEO project for us, with full URL mapping and redirect planning executed before launch to protect existing search equity.",
      },
      {
        question: "What size of e-commerce brand do you typically work with?",
        answer:
          "We've worked with brands from early post-launch through established, scaling D2C businesses. The right engagement depends more on the specific problem than the brand's current size or revenue.",
      },
      {
        question: "Can you help with post-purchase experience, not just acquisition?",
        answer:
          "Yes — unboxing, shipping communication, and return handling all factor into repeat purchase rate, and we treat this as a genuine growth lever alongside acquisition work, not a separate operational concern.",
      },
    ],
    cta: {
      h2: "Ready to scale without breaking what's already working?",
      subhead:
        "Tell us about your funnel and your numbers — most D2C growth problems are fixable once you can see clearly where revenue is actually leaking.",
    },
  },
  {
    slug: "healthcare",
    name: "Healthcare & MedTech",
    icon: "HeartPulse",
    cardDescription:
      "Compliance-aware web development, medically accurate content, and local SEO built for patient trust and practice-level acquisition.",
    meta: {
      title: "Healthcare Marketing Agency",
      description:
        "Digital agency for healthcare brands. HIPAA-compliant marketing, SEO, content, and performance ads for medical, wellness, and biotech companies.",
      keywords: [
        "healthcare digital agency",
        "medical SEO services",
        "HIPAA compliant web development",
        "MedTech marketing agency",
        "healthcare content marketing",
        "medical practice SEO",
        "healthcare website design",
        "digital health marketing",
      ],
    },
    hero: {
      eyebrow: "For Healthcare & MedTech",
      h1: "Digital Agency for Healthcare & MedTech",
      subheadline:
        "We work with healthcare practices, MedTech startups, and healthcare platforms on compliance-aware web development, content that builds genuine medical authority, and local SEO that drives patient acquisition. Healthcare marketing has constraints most other industries don't, and we treat those constraints as a starting requirement, not an afterthought.",
    },
    whyThisIndustry: {
      h2: "Why Healthcare Marketing Carries Different Constraints",
      paragraphs: [
        "Healthcare and MedTech marketing operates under constraints that don't exist in most other industries — data handling needs to account for patient privacy expectations even outside formal regulatory scope, medical claims need to be accurate rather than just persuasive, and content needs to demonstrate genuine clinical credibility rather than generic marketing confidence. We treat these constraints as the starting requirement for any healthcare engagement, not a compliance checkbox handled after the creative work is done.",
        "Patient acquisition for private practices and healthcare platforms depends heavily on trust signals that differ from typical consumer marketing — credentials, patient reviews, clear explanations of conditions and treatments, and a website that reads as credible to someone who's often anxious or uncertain when they're searching. We build with this emotional and trust context in mind rather than applying a generic conversion-focused playbook that ignores why someone is actually on a healthcare site.",
        "Medical content credibility is harder to fake convincingly than most other content categories, since an inaccurate or oversimplified medical claim is easy for both patients and the search engines increasingly scrutinizing health content (Google's broader emphasis on expertise and trustworthiness for medical topics) to catch. We research thoroughly and coordinate with clinical staff or medical reviewers when content requires expertise beyond general knowledge.",
        "MedTech startups face a different challenge again — explaining genuinely complex clinical or technical products to a buyer audience that might include clinicians, hospital administrators, and procurement teams simultaneously, each evaluating the product from a different angle. We build content and marketing sites that can speak to this mixed audience without oversimplifying to the point of losing clinical credibility.",
        "Local SEO and reputation management carry particular weight for individual practices and clinics, since most patients choose a provider based on proximity, reviews, and what shows up when they search a specific condition plus their city, rather than broad national brand awareness. We treat local search visibility as a core deliverable for practice-level healthcare clients, not a minor add-on to broader marketing work.",
        "Accessibility matters more in healthcare web experiences than in almost any other category, since the patient population searching for care skews toward older users, users with disabilities, and users navigating a site while genuinely unwell or distracted. A healthcare site that fails basic accessibility standards isn't just a compliance risk — it's actively excluding the patients who often need the information most urgently.",
        "Multi-location healthcare groups and growing practices face a scaling challenge similar to other multi-location businesses, but with added complexity around provider-specific pages, individual clinician credentials, and location-specific service availability that needs to stay accurate and current as the organization grows. We build systems for managing this consistently rather than treating each new location as a disconnected project.",
      ],
    },
    industryChallenges: {
      h2: "Challenges Healthcare & MedTech Brands Bring Us",
      challenges: [
        {
          title: "Building Trust with Anxious, Uncertain Patients",
          description:
            "A website and content experience that needs to read as genuinely credible and reassuring to someone often searching while anxious or in discomfort, not just persuasive.",
        },
        {
          title: "Explaining Complex Products to Mixed Audiences",
          description:
            "MedTech products that need to be communicated clearly to clinicians, administrators, and procurement teams simultaneously, each evaluating from a different angle.",
        },
        {
          title: "Maintaining Medical Accuracy Under Marketing Pressure",
          description:
            "Content and claims that need to stay clinically accurate even when a more dramatic, simplified version would likely perform better in the short term across most channels.",
        },
        {
          title: "Local Visibility in a Trust-Driven Search Category",
          description:
            "Patients searching condition-plus-location terms who need to find a credible, well-reviewed local provider, not just whichever practice ranks through volume alone.",
        },
        {
          title: "Data Handling Expectations Beyond Formal Compliance",
          description:
            "Patients and clients expecting careful handling of health-adjacent information even in contexts that fall outside strict regulatory requirements, often without articulating that expectation explicitly.",
        },
      ],
    },
    servicesForIndustry: {
      h2: "Our Services for Healthcare & MedTech",
      intro:
        "Healthcare and MedTech clients typically need a credible, compliance-aware web presence, content that demonstrates genuine clinical authority, and local visibility that drives real patient acquisition. Here's where we usually start.",
      services: [
        {
          name: "Next.js Development",
          description:
            "Fast, accessible websites built with careful attention to data handling and patient privacy expectations, for practices, platforms, and MedTech products alike.",
          relevantServiceSlug: "web-development",
        },
        {
          name: "Local SEO",
          description:
            "Google Business Profile optimization and citation building for practices and clinics, built to win local pack visibility for condition-plus-location searches.",
          relevantServiceSlug: "seo",
          relevantSubServiceSlug: "local-seo",
        },
        {
          name: "Blog Writing",
          description:
            "Medically researched, accurately written content that builds genuine clinical authority, with subject matter expert coordination where a topic requires it.",
          relevantServiceSlug: "content-social-media",
          relevantSubServiceSlug: "blog-writing",
        },
        {
          name: "Brand Identity",
          description:
            "Visual and positioning work that reads as credible and reassuring to patients while still feeling distinct from the generic, clinical-feeling design common in healthcare.",
          relevantServiceSlug: "branding-design",
          relevantSubServiceSlug: "brand-identity",
        },
        {
          name: "Technical SEO",
          description:
            "Core Web Vitals and crawlability work that matters for both rankings and the genuine accessibility needs of a patient audience that includes older and less tech-fluent users navigating while unwell.",
          relevantServiceSlug: "seo",
          relevantSubServiceSlug: "technical-seo",
        },
      ],
    },
    toolsAndTech: {
      h2: "How We Approach Healthcare-Specific Infrastructure",
      paragraph:
        "We build with patient privacy expectations in mind from the start — careful analytics configuration that avoids capturing unnecessary personal health information, secure form handling, and infrastructure choices that hold up under scrutiny even outside formal regulatory audits. For MedTech platforms with deeper compliance or EHR integration needs, we coordinate closely with your existing technical and compliance teams rather than assuming we should own that layer ourselves.",
      tools: [
        "Privacy-Conscious Analytics",
        "Secure Form Handling",
        "Google Business Profile",
        "Accessibility-First Development",
      ],
    },
    caseStudyPlaceholder: {
      h2: "Results We're Building Toward",
      text:
        "We're early enough in our agency's life that we'd rather have a direct conversation about your specific practice or product than show you a generic case study. The pattern we look for with healthcare and MedTech clients is the same: a clear baseline — patient inquiries, local visibility, content engagement — measured before we start, and measured again on a fixed timeline after, so any improvement is genuinely verifiable rather than anecdotal.",
    },
    ourProcess: {
      h2: "How We Work with Healthcare & MedTech Clients",
      steps: [
        {
          number: "01",
          title: "Audit & Compliance Context",
          description:
            "We audit your current site, content, and local visibility, and understand any specific regulatory or compliance context that needs to shape the work upfront.",
        },
        {
          number: "02",
          title: "Prioritized Scope",
          description:
            "We scope the highest-impact work first — usually local visibility or site credibility — rather than a broad engagement that dilutes focus across everything at once.",
        },
        {
          number: "03",
          title: "Build with Clinical Review",
          description:
            "We build and write content with subject matter expert or clinical review built into the process wherever medical accuracy genuinely requires it.",
        },
        {
          number: "04",
          title: "Measure & Expand",
          description:
            "We measure against the baseline we set at the start and expand into the next highest-priority area based on what the data actually shows.",
        },
      ],
    },
    faqs: [
      {
        question: "Are you a HIPAA-compliant agency?",
        answer:
          "We build with patient privacy and data handling carefully in mind, but HIPAA compliance for your specific systems and processes is ultimately your organization's responsibility — we coordinate with your compliance team rather than claiming to own that certification ourselves.",
      },
      {
        question: "Do you write the medical content yourselves, or need a clinician's input?",
        answer:
          "We research thoroughly and write the content, but for anything requiring genuine clinical expertise, we coordinate with your medical staff or a qualified reviewer to validate accuracy before anything gets published.",
      },
      {
        question: "Can you help a single practice with local SEO specifically?",
        answer:
          "Yes — local SEO for individual practices and clinics is one of our most common healthcare engagements, since most patients choose a provider based on local visibility and reviews.",
      },
      {
        question: "Do you work with MedTech startups, or just established practices?",
        answer:
          "Both — MedTech startups typically need help explaining complex products to mixed clinical and business audiences, which is a different challenge than local patient acquisition for a practice.",
      },
      {
        question: "How do you handle medical claims and accuracy in marketing content?",
        answer:
          "We research thoroughly, avoid overstating claims, and bring in clinical review where a topic requires expertise beyond general knowledge, since accuracy matters more in healthcare than almost any other category.",
      },
      {
        question: "Do you handle EHR or healthcare platform integrations?",
        answer:
          "We coordinate with your existing technical and compliance teams on deeper EHR or platform integrations rather than assuming ownership of that layer, since it usually requires specialized healthcare IT expertise and certification.",
      },
      {
        question: "Can you help multi-location practices manage provider pages at scale?",
        answer:
          "Yes — we build systematic processes for keeping provider bios, credentials, and location-specific service pages accurate and current as a healthcare group grows, rather than treating each location as a separate project.",
      },
    ],
    cta: {
      h2: "Ready for a healthcare web presence patients actually trust?",
      subhead:
        "Tell us about your practice or product — we'll show you what compliance-aware, genuinely credible healthcare marketing looks like.",
    },
  },
  {
    slug: "fintech",
    name: "FinTech & Finance",
    icon: "Landmark",
    cardDescription:
      "Trust-building branding, regulatory-aware content, and SEO for financial products where credibility decides conversion before anything else.",
    meta: {
      title: "Fintech Marketing Agency",
      description:
        "Digital agency for fintech brands. Branding, web development, SEO, and growth marketing for financial services, payments, and digital banking companies.",
      keywords: [
        "fintech digital agency",
        "financial services marketing",
        "fintech SEO",
        "B2B finance agency",
        "fintech branding agency",
        "financial services content marketing",
        "fintech web development",
        "wealth management marketing",
      ],
    },
    hero: {
      eyebrow: "For FinTech & Finance",
      h1: "Digital Agency for FinTech & Financial Services",
      subheadline:
        "We work with FinTech startups, wealth management firms, and financial services companies on trust-building brand identity, content that establishes real authority, and SEO built for a category where credibility decides conversion more than almost any other factor. People don't hand over financial trust to a brand that looks unfinished.",
    },
    whyThisIndustry: {
      h2: "Why Trust Is the Actual Product in FinTech Marketing",
      paragraphs: [
        "Financial services and FinTech marketing operates on a trust premium that most other categories don't carry — a prospective customer is being asked to hand over money, financial data, or both, to a brand they're evaluating largely through a website and a handful of content pieces. A polished, professional, genuinely trustworthy-feeling presence isn't a nice-to-have differentiator here; it's close to the actual product being evaluated before the financial product itself even enters the conversation.",
        "Regulatory marketing constraints shape what FinTech and financial services content can actually say, and these constraints vary meaningfully depending on the specific financial product or service involved — wealth management, lending, payments, and banking software all carry different disclosure and claims requirements. We work within these constraints rather than writing persuasive copy first and worrying about compliance after the fact.",
        "Complex product education is a genuine content challenge in this category, since many FinTech and financial products require a prospect to understand something non-trivial — how a particular investment vehicle works, how a payments product integrates with their existing systems, how a lending product's terms actually compare to alternatives — before they can make a confident decision. We build content that genuinely explains rather than content that gestures persuasively at complexity without resolving it.",
        "Security-conscious development matters more visibly in FinTech than in most other categories, since a slow, glitchy, or visually unpolished site reads as a security and competence red flag to a financial services prospect in a way it might not for a less sensitive purchase. We build with that perception risk in mind, treating site quality and performance as part of the trust signal, not just a user experience nicety.",
        "B2B FinTech selling into banks, credit unions, or enterprise finance teams faces an additional layer of institutional caution beyond typical B2B skepticism, since procurement and risk teams at financial institutions are professionally trained to be suspicious of vendor claims. Content and positioning for this audience needs to read as substantive and risk-aware, not just confidently persuasive in the way that might work in a less regulated B2B category.",
        "Trust signals in FinTech go beyond visual polish into substantive proof points — security certifications, regulatory licensing displayed clearly, partnership and integration logos, and transparent fee or rate disclosures all factor into whether a prospect feels comfortable proceeding. We help clients identify and surface the specific trust signals that matter most for their particular financial product rather than applying a generic trust-badge checklist.",
        "Onboarding flow design carries outsized weight in FinTech conversion specifically, since the step where a prospect actually shares financial information or commits funds is where hesitation peaks, and a confusing or seemingly insecure-feeling onboarding flow can lose a prospect who was otherwise ready to proceed. We treat this flow as a dedicated conversion problem, not just a necessary compliance and KYC formality.",
      ],
    },
    industryChallenges: {
      h2: "Challenges FinTech & Finance Brands Bring Us",
      challenges: [
        {
          title: "Establishing Trust Before Any Product Conversation",
          description:
            "A brand and web presence that needs to feel credible and secure enough for a prospect to even begin considering a financial commitment.",
        },
        {
          title: "Marketing Within Regulatory Constraints",
          description:
            "Content and claims that need to stay within disclosure and compliance requirements specific to the financial product, without becoming so hedged it loses persuasive power.",
        },
        {
          title: "Educating Prospects on Genuinely Complex Products",
          description:
            "Financial products that require real understanding before a confident decision, where oversimplified marketing language actively undermines the trust it's trying to build.",
        },
        {
          title: "Selling Into Institutionally Skeptical Buyers",
          description:
            "B2B FinTech facing procurement and risk teams at financial institutions trained to scrutinize vendor claims more rigorously than a typical B2B buyer.",
        },
        {
          title: "Differentiating in a Crowded, Well-Funded Category",
          description:
            "Competing against well-capitalized incumbents and a steady stream of new entrants, all making similar trust and innovation claims to the same skeptical audience.",
        },
      ],
    },
    servicesForIndustry: {
      h2: "Our Services for FinTech & Finance",
      intro:
        "FinTech and financial services clients typically need brand and content work that builds real credibility, plus organic visibility for prospects actively researching financial decisions. Here's where we usually start.",
      services: [
        {
          name: "Brand Identity",
          description:
            "Positioning and visual identity work built specifically to project the trust and credibility a financial decision requires, grounded in real market strategy.",
          relevantServiceSlug: "branding-design",
          relevantSubServiceSlug: "brand-identity",
        },
        {
          name: "Content Strategy",
          description:
            "Editorial planning that genuinely educates on complex financial products and topics, rather than gesturing at complexity without resolving it.",
          relevantServiceSlug: "content-social-media",
          relevantSubServiceSlug: "content-strategy",
        },
        {
          name: "Technical SEO",
          description:
            "Site performance and crawlability work that matters doubly in FinTech, where a slow or glitchy site reads as a competence and security red flag.",
          relevantServiceSlug: "seo",
          relevantSubServiceSlug: "technical-seo",
        },
        {
          name: "Copywriting",
          description:
            "Persuasive but compliance-aware writing across the site and campaigns, built to maintain one consistent, trustworthy voice across every channel.",
          relevantServiceSlug: "content-social-media",
          relevantSubServiceSlug: "copywriting",
        },
        {
          name: "LinkedIn Ads",
          description:
            "B2B targeting by job title and company for FinTech selling into institutional buyers, where LinkedIn's precision often justifies its higher cost per click.",
          relevantServiceSlug: "performance-marketing",
          relevantSubServiceSlug: "linkedin-ads",
        },
      ],
    },
    toolsAndTech: {
      h2: "How We Approach FinTech-Specific Considerations",
      paragraph:
        "We build with security and compliance context in mind from the start, coordinating closely with your legal and compliance teams on what marketing claims and content can actually say for your specific financial product. Development work prioritizes performance and reliability as genuine trust signals, and we work alongside your existing security and infrastructure requirements rather than assuming we should own that layer independently.",
      tools: [
        "Compliance-Aware Content Review",
        "Performance-First Development",
        "Secure Form Handling",
        "LinkedIn Sales Navigator",
      ],
    },
    caseStudyPlaceholder: {
      h2: "Results We're Building Toward",
      text:
        "We're early enough in our agency's life that we'd rather have a direct conversation about your specific product and market than show you a generic case study. The pattern we look for with FinTech and financial services clients is the same: a clear baseline — qualified leads, organic visibility, content engagement — measured before we start, and measured again on a fixed timeline after, so results are verifiable rather than assumed.",
    },
    ourProcess: {
      h2: "How We Work with FinTech & Finance Clients",
      steps: [
        {
          number: "01",
          title: "Audit & Compliance Context",
          description:
            "We audit your current brand, content, and site, and understand the specific regulatory and disclosure context that needs to shape every piece of work.",
        },
        {
          number: "02",
          title: "Trust-First Strategy",
          description:
            "We prioritize the work most likely to move the trust signal that actually drives conversion in your category, rather than generic marketing best practices.",
        },
        {
          number: "03",
          title: "Build with Compliance Review",
          description:
            "We build and write with your legal or compliance team's review built into the process wherever claims or disclosures genuinely require it.",
        },
        {
          number: "04",
          title: "Measure & Expand",
          description:
            "We measure against the baseline we set at the start and expand into the next highest-priority area based on what the data actually shows.",
        },
      ],
    },
    faqs: [
      {
        question: "Can you help us market a regulated financial product?",
        answer:
          "Yes — we work within whatever regulatory and disclosure constraints apply to your specific product, coordinating closely with your legal or compliance team rather than writing persuasive copy first and checking compliance after the fact.",
      },
      {
        question: "Do you work with early-stage FinTech startups or just established firms?",
        answer:
          "Both — early-stage FinTech often needs trust-building brand and positioning work especially urgently, since an unfinished-feeling presence is a bigger liability in finance than in most other categories.",
      },
      {
        question: "How do you handle marketing for B2B FinTech selling to institutions?",
        answer:
          "We build content and positioning that reads as substantive and risk-aware for institutionally skeptical procurement and risk teams, rather than the more casually persuasive approach that works in less regulated B2B categories.",
      },
      {
        question: "Can you write content that explains complex financial products clearly?",
        answer:
          "Yes — we research thoroughly and coordinate with your subject matter experts when needed, since genuinely explaining a complex product builds far more trust than marketing language that gestures at complexity without resolving it.",
      },
      {
        question: "Do you handle the security side of FinTech development?",
        answer:
          "We build with security and performance as genuine priorities, but deeper security architecture and compliance certification work alongside your existing technical and security teams, not as something we own independently.",
      },
      {
        question: "How long does it take to see results in FinTech marketing?",
        answer:
          "Trust-building work compounds over months rather than weeks, similar to other high-consideration categories — brand and content credibility build gradually, even though individual campaigns can show faster directional signal early on.",
      },
      {
        question: "Can you help improve our onboarding flow conversion specifically?",
        answer:
          "Yes — onboarding is where hesitation peaks in most financial products, and we treat it as a dedicated conversion problem alongside broader brand and content work, not just a compliance formality.",
      },
    ],
    cta: {
      h2: "Ready to build the trust your financial product needs to convert?",
      subhead:
        "Tell us about your product and your regulatory context — we'll show you what credible, compliance-aware FinTech marketing actually looks like.",
    },
  },
  {
    slug: "b2b",
    name: "B2B & Professional Services",
    icon: "Building2",
    cardDescription:
      "SEO, content, and LinkedIn-driven demand generation built for long B2B sales cycles and credibility-led buying decisions.",
    meta: {
      title: "B2B Marketing Agency",
      description:
        "Digital agency for B2B brands. Demand generation, account-based marketing, LinkedIn ads, content marketing, and SEO for enterprise software and services.",
      keywords: [
        "B2B digital agency",
        "B2B marketing agency",
        "professional services marketing",
        "B2B SEO",
        "B2B demand generation agency",
        "B2B content marketing",
        "B2B LinkedIn marketing",
        "consulting firm marketing agency",
      ],
    },
    hero: {
      eyebrow: "For B2B & Professional Services",
      h1: "Digital Agency for B2B & Professional Services",
      subheadline:
        "We work with consulting firms, agencies, and B2B software resellers on the credibility-building work that actually drives long B2B sales cycles — SEO that captures research-stage demand, content that signals real expertise, and LinkedIn-driven demand generation. B2B trust gets built slowly, and we plan engagements around that reality instead of around quarterly campaign theater.",
    },
    whyThisIndustry: {
      h2: "Why B2B Buying Cycles Need a Different Marketing Approach",
      paragraphs: [
        "B2B and professional services buying decisions typically involve multiple stakeholders, a research phase that can stretch for months, and a level of institutional risk-aversion that consumer marketing tactics simply don't account for. A B2B buyer evaluating a consulting firm, an agency, or enterprise software isn't making an impulse decision — they're building an internal case they'll need to defend to colleagues and leadership, and the marketing that supports that process looks different from demand-gen tactics built for faster-moving categories.",
        "Demand generation and lead generation get conflated constantly in B2B marketing, and the distinction matters — lead generation captures people already actively looking, while demand generation builds awareness and credibility with the broader market that will eventually become active buyers. Most B2B companies overinvest in lead-gen tactics while underinvesting in the demand-gen work that fills the pipeline those lead-gen tactics eventually draw from.",
        "Long sales cycles mean content needs to support a buyer across multiple touchpoints over an extended period, not just convert on a single landing page visit. We map content explicitly to where a buyer actually is in that cycle — awareness, evaluation, internal buy-in, final decision — rather than producing a flat stream of generic thought leadership that doesn't actually move anyone closer to a decision.",
        "Account-based marketing has become a genuinely effective approach for B2B companies with a defined list of target accounts and an enterprise sales motion, since it lets marketing and sales coordinate around specific named companies rather than broad demographic targeting. We build ABM campaigns, particularly on LinkedIn, for clients where this coordinated approach actually fits the sales motion.",
        "Credibility signals matter disproportionately in professional services specifically, since a prospect evaluating a consulting firm, an agency, or a specialized service provider is largely assessing whether this team is genuinely capable, not just whether the marketing is polished. Case studies, genuine expertise demonstrated through content, and a site that doesn't look like a templated consulting deck all factor into that credibility assessment.",
        "Sales enablement content is an underused lever in most B2B marketing strategies, since the marketing-produced content that actually helps a sales team close — comparison sheets, ROI calculators, objection-handling resources — often gets treated as a sales team responsibility rather than a coordinated marketing deliverable. We build this content as part of a broader content strategy rather than leaving it as a gap between two departments.",
        "Search intent in B2B skews heavily toward research and comparison rather than direct commercial terms, since a B2B buyer is typically gathering information across an extended evaluation period before they're ready to engage directly with a vendor. We build content that captures this research-stage intent deliberately, since it's where a meaningful share of eventual pipeline actually originates.",
      ],
    },
    industryChallenges: {
      h2: "Challenges B2B & Professional Services Firms Bring Us",
      challenges: [
        {
          title: "Long Sales Cycles with Multiple Stakeholders",
          description:
            "Buying decisions that involve several people over an extended period, where marketing needs to support an internal champion building a case, not just a single buyer.",
        },
        {
          title: "Overinvestment in Lead-Gen, Underinvestment in Demand-Gen",
          description:
            "A pipeline that's only as strong as the demand-gen work feeding it, with most B2B marketing budgets skewed toward capturing active buyers instead of building future ones.",
        },
        {
          title: "Generic Thought Leadership That Doesn't Move Buyers Forward",
          description:
            "Content that demonstrates expertise in the abstract without actually helping a prospect move from one stage of their buying decision to the next.",
        },
        {
          title: "Looking Like Every Other Consulting Deck",
          description:
            "Branding and positioning that's functionally indistinguishable from competitors offering a similar service, making credibility harder to establish at first glance or first meeting.",
        },
        {
          title: "Coordinating Marketing and Sales on Target Accounts",
          description:
            "Sales and marketing operating with different priorities or target lists, undermining account-based approaches that depend on tight coordination between the two.",
        },
      ],
    },
    servicesForIndustry: {
      h2: "Our Services for B2B & Professional Services",
      intro:
        "B2B and professional services firms typically need credibility-building content, organic visibility that captures long research cycles, and demand generation coordinated with sales. Here's where we usually start.",
      services: [
        {
          name: "Content Strategy",
          description:
            "Editorial planning mapped explicitly to funnel stage, addressing the common B2B mistake of overinvesting in top-of-funnel awareness content alone.",
          relevantServiceSlug: "content-social-media",
          relevantSubServiceSlug: "content-strategy",
        },
        {
          name: "LinkedIn Ads",
          description:
            "B2B targeting by job title, seniority, and company size, including account-based marketing for clients with a defined target account list.",
          relevantServiceSlug: "performance-marketing",
          relevantSubServiceSlug: "linkedin-ads",
        },
        {
          name: "Technical SEO & On-Page SEO",
          description:
            "Organic visibility for high-intent B2B research terms, the kind of long-cycle search behavior that paid acquisition alone can't fully capture.",
          relevantServiceSlug: "seo",
          relevantSubServiceSlug: "technical-seo",
        },
        {
          name: "Brand Identity",
          description:
            "Positioning and visual identity built to differentiate from competitors offering a functionally similar service, signaling genuine credibility rather than generic professionalism.",
          relevantServiceSlug: "branding-design",
          relevantSubServiceSlug: "brand-identity",
        },
        {
          name: "Blog Writing",
          description:
            "Genuinely expert content that demonstrates real capability, written with subject matter input where a topic requires expertise beyond general knowledge.",
          relevantServiceSlug: "content-social-media",
          relevantSubServiceSlug: "blog-writing",
        },
      ],
    },
    toolsAndTech: {
      h2: "Tools We Work With in the B2B Stack",
      paragraph:
        "We build around the B2B marketing and sales stack you're already running on, integrating content and campaign work with the CRM and sales tools your team depends on. That typically means coordinating with HubSpot or Salesforce for lead and pipeline tracking, LinkedIn Sales Navigator for account-based targeting, and whatever marketing automation platform already sits at the center of your demand generation process.",
      tools: [
        "HubSpot",
        "Salesforce",
        "LinkedIn Sales Navigator",
        "LinkedIn Campaign Manager",
      ],
    },
    caseStudyPlaceholder: {
      h2: "Results We're Building Toward",
      text:
        "We're early enough in our agency's life that we'd rather have a direct conversation about your specific sales cycle and pipeline than show you a generic case study. The pattern we look for with B2B and professional services clients is the same: a clear baseline — pipeline contribution, organic visibility, content engagement — measured before we start, and measured again on a fixed timeline after, since B2B results take longer to show but compound meaningfully once they do.",
    },
    ourProcess: {
      h2: "How We Work with B2B & Professional Services Clients",
      steps: [
        {
          number: "01",
          title: "Audit & Sales Cycle Mapping",
          description:
            "We audit your current content and visibility, and map your actual sales cycle stages so subsequent work targets the right buyer at the right stage.",
        },
        {
          number: "02",
          title: "Demand-Gen & Lead-Gen Balance",
          description:
            "We scope a mix of demand generation and lead capture work appropriate to your current pipeline gaps, rather than defaulting to whichever is easier to measure.",
        },
        {
          number: "03",
          title: "Build & Coordinate with Sales",
          description:
            "We execute content and campaign work coordinated with your sales team's target accounts and follow-up process, not as a marketing initiative running in isolation.",
        },
        {
          number: "04",
          title: "Measure & Expand",
          description:
            "We measure against the baseline we set at the start, tracking pipeline contribution specifically, then expand into the next highest-priority area based on what's working.",
        },
      ],
    },
    faqs: [
      {
        question: "How is B2B marketing different from consumer marketing?",
        answer:
          "B2B involves longer sales cycles, multiple stakeholders, and an internal buying process the marketing needs to support — patterns that differ meaningfully from the faster, more individual decisions consumer marketing targets.",
      },
      {
        question: "Do you offer account-based marketing specifically?",
        answer:
          "Yes, particularly through LinkedIn Matched Audiences targeting specific company lists, coordinated closely with your sales team's target account strategy where that approach genuinely fits your specific sales motion.",
      },
      {
        question: "Can you help us generate more qualified leads, not just traffic?",
        answer:
          "Yes — we prioritize commercial-intent content and targeting specifically, and coordinate with your sales team on what lead quality actually looks like so we're optimizing for the right outcome.",
      },
      {
        question: "How long does B2B content take to show pipeline impact?",
        answer:
          "Typically longer than B2C — B2B content and SEO often take 3-6 months to build meaningful momentum, with pipeline impact compounding further as content builds authority for competitive terms.",
      },
      {
        question: "Do you work with professional services firms specifically, like consultancies?",
        answer:
          "Yes — professional services firms typically need credibility-building branding and content work distinct from product-led B2B marketing, since the service itself is harder to demonstrate before purchase.",
      },
      {
        question: "Can you coordinate directly with our sales team on campaigns?",
        answer:
          "Yes — we coordinate on target accounts, lead handoff process, and follow-up expectations as part of campaign setup, rather than treating marketing and sales as disconnected functions operating in isolation.",
      },
      {
        question: "Do you build sales enablement content like comparison sheets or ROI calculators?",
        answer:
          "Yes — we treat sales enablement as a coordinated marketing deliverable rather than a gap between departments, since this content genuinely helps a sales team close deals already in motion.",
      },
    ],
    cta: {
      h2: "Ready for B2B marketing that respects how your buyers actually decide?",
      subhead:
        "Tell us about your sales cycle and pipeline — we'll show you where demand generation is genuinely underinvested in your current strategy.",
    },
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "Home",
    cardDescription:
      "Hyper-local SEO, IDX-integrated websites, and performance marketing built for realtors, brokerages, and property tech startups.",
    meta: {
      title: "Real Estate Marketing Agency",
      description:
        "Digital agency for real estate brands. Lead generation, branding, SEO, and performance marketing for residential, commercial, and PropTech companies.",
      keywords: [
        "real estate digital agency",
        "realtor marketing agency",
        "real estate SEO services",
        "property tech marketing",
        "real estate website design",
        "IDX website development",
        "brokerage marketing agency",
        "real estate lead generation",
      ],
    },
    hero: {
      eyebrow: "For Real Estate",
      h1: "Digital Agency for Real Estate & PropTech",
      subheadline:
        "We work with realtors, brokerages, and property tech startups on hyper-local SEO, listing-ready websites with proper IDX integration, and lead capture that converts the specific, time-sensitive intent behind a property search. Real estate marketing lives or dies on local visibility and a frictionless path from a listing view to a lead.",
    },
    whyThisIndustry: {
      h2: "Why Real Estate Marketing Is a Hyper-Local Game",
      paragraphs: [
        "Real estate is one of the most genuinely local categories in digital marketing — a buyer or seller is almost always searching for a specific neighborhood, city, or zip code, not a general real estate brand, which makes hyper-local SEO and presence the foundation almost everything else in real estate marketing builds on top of. A realtor or brokerage with weak local visibility is invisible to the exact searches that actually convert, regardless of how strong their branding or paid campaigns are elsewhere.",
        "Listing presentation carries more conversion weight in real estate than in most other categories, since a prospective buyer is making one of the largest financial decisions of their life partly based on how a property is presented online before they ever schedule a viewing. We treat listing pages, photography presentation, and the overall site experience as genuine conversion infrastructure, not just a functional requirement to display inventory.",
        "Lead capture in real estate needs to account for genuinely time-sensitive intent — someone searching for homes in a specific area right now is often actively house-hunting, and a slow, clunky, or confusing lead capture experience loses that prospect to a competitor's listing within the same search session. We build for this urgency deliberately rather than treating lead capture as a generic contact form bolted onto a listing site.",
        "Brokerage-level branding faces a particular tension between consistency and individual agent personal brand, since most brokerages operate as a collection of individual agents each building their own reputation under a shared brokerage identity. We help brokerages navigate this tension rather than forcing every agent into an identical, personality-free template that undermines the trust individual agents have built.",
        "IDX integration — pulling live MLS listing data into a brokerage or agent's own website — is a genuine technical requirement specific to real estate that most general web development work doesn't account for, and a poorly integrated IDX feed produces a slow, unreliable listing experience that actively damages the conversion potential of an otherwise well-designed site.",
        "Mobile experience matters more in real estate than almost any other local category, since a significant share of property searches happen on a phone while someone is actually out viewing neighborhoods or driving past listings, not sitting at a desktop researching in advance. A site that performs poorly on mobile is failing the exact moment a prospective buyer is most actively engaged with their search.",
        "Seasonal and market-cycle awareness shapes real estate marketing in ways that don't apply as directly to most other local service categories, since buyer and seller behavior shifts meaningfully with interest rates, local inventory levels, and time of year. We build strategy that accounts for these cycles rather than running the same campaign approach regardless of what the broader market is actually doing.",
        "Reviews and testimonials carry particular weight in real estate, since choosing an agent is a high-trust, high-stakes decision most people make only a few times in their life, and a strong review profile is often the deciding factor between two similarly-credentialed agents competing for the same client. We treat review generation as an active, ongoing process rather than something that happens passively after a closing.",
      ],
    },
    industryChallenges: {
      h2: "Challenges Real Estate Brands Bring Us",
      challenges: [
        {
          title: "Weak Hyper-Local Visibility",
          description:
            "Limited visibility for the specific neighborhood and city searches that actually convert, regardless of how strong branding or paid campaigns are elsewhere.",
        },
        {
          title: "Listing Pages That Don't Convert Browsers Into Leads",
          description:
            "Property pages that display inventory functionally but don't present listings compellingly enough to move a browsing visitor toward an inquiry.",
        },
        {
          title: "Slow or Unreliable IDX Integration",
          description:
            "MLS feed integrations that load slowly or break intermittently, actively undermining the conversion potential of an otherwise well-built site.",
        },
        {
          title: "Balancing Brokerage Brand with Individual Agent Identity",
          description:
            "A brokerage-wide brand and template system that needs to accommodate individual agents' own reputation and personal brand without fragmenting entirely.",
        },
        {
          title: "Losing Time-Sensitive Leads to Slow Follow-Up",
          description:
            "Active house-hunters lost to competing listings because lead capture or follow-up wasn't fast enough to match the urgency of their search.",
        },
      ],
    },
    servicesForIndustry: {
      h2: "Our Services for Real Estate",
      intro:
        "Real estate clients typically need strong local visibility, a listing-ready website with reliable IDX integration, and lead capture built for time-sensitive search intent. Here's where we usually start.",
      services: [
        {
          name: "Local SEO",
          description:
            "Google Business Profile optimization and citation building tuned for hyper-local, neighborhood-and-city-specific real estate search behavior.",
          relevantServiceSlug: "seo",
          relevantSubServiceSlug: "local-seo",
        },
        {
          name: "Next.js Development",
          description:
            "Fast, reliable websites with proper IDX/MLS integration, built so listing data loads quickly and doesn't undermine the broader site experience.",
          relevantServiceSlug: "web-development",
          relevantSubServiceSlug: "nextjs",
        },
        {
          name: "Meta Ads",
          description:
            "Visually-driven listing and brand campaigns on Facebook and Instagram, where strong property photography and creative testing drive lead quality.",
          relevantServiceSlug: "performance-marketing",
          relevantSubServiceSlug: "meta-ads",
        },
        {
          name: "Google Ads",
          description:
            "Search campaigns capturing high-intent, location-specific property searches at the exact moment of buyer or seller intent.",
          relevantServiceSlug: "performance-marketing",
          relevantSubServiceSlug: "google-ads",
        },
        {
          name: "Brand Identity",
          description:
            "Brokerage-level identity work that accommodates individual agent personal branding rather than forcing a single, personality-free template on every agent.",
          relevantServiceSlug: "branding-design",
          relevantSubServiceSlug: "brand-identity",
        },
      ],
    },
    toolsAndTech: {
      h2: "Tools We Work With in the Real Estate Stack",
      paragraph:
        "We integrate with the MLS and CRM systems real estate businesses already depend on rather than asking brokerages or agents to adopt new core infrastructure. That typically means IDX/MLS feed integration for live listing data, CRM platforms like kvCORE or Boomtown for lead management, and local SEO tooling tuned specifically for neighborhood-level visibility tracking.",
      tools: ["IDX/MLS Integration", "kvCORE", "Boomtown", "BrightLocal"],
    },
    caseStudyPlaceholder: {
      h2: "Results We're Building Toward",
      text:
        "We're early enough in our agency's life that we'd rather have a direct conversation about your specific market and listings than show you a generic case study. The pattern we look for with real estate clients is the same: a clear baseline — local visibility, lead volume, lead-to-showing conversion — measured before we start, and measured again on a fixed timeline after, so improvement is genuinely verifiable.",
    },
    ourProcess: {
      h2: "How We Work with Real Estate Clients",
      steps: [
        {
          number: "01",
          title: "Local Visibility & Site Audit",
          description:
            "We audit your current local search visibility, listing presentation, and IDX integration to find the highest-impact gaps before recommending any specific fix.",
        },
        {
          number: "02",
          title: "Prioritized Scope",
          description:
            "We scope the highest-impact work first — usually local SEO or listing conversion — rather than a broad engagement that spreads effort too thin.",
        },
        {
          number: "03",
          title: "Build & Launch",
          description:
            "We execute the agreed scope with attention to listing load speed and lead capture responsiveness, since both directly affect time-sensitive buyer behavior.",
        },
        {
          number: "04",
          title: "Measure & Expand",
          description:
            "We measure against the baseline we set at the start, then expand into the next highest-priority area based on actual lead and conversion data.",
        },
      ],
    },
    faqs: [
      {
        question: "Do you work with individual agents or only brokerages?",
        answer:
          "Both — individual agents often need a focused local SEO and personal brand presence, while brokerages typically need a broader system that still accommodates each individual agent's own identity and reputation.",
      },
      {
        question: "Can you integrate our website with our MLS listing feed?",
        answer:
          "Yes — IDX/MLS integration is a core, recurring part of real estate web development for us, built specifically to load reliably and quickly rather than slowing down the broader site experience.",
      },
      {
        question: "How important is local SEO compared to paid ads for real estate?",
        answer:
          "Both matter, but local SEO often delivers more durable, lower-cost-per-lead visibility over time, while paid ads can capture immediate, time-sensitive intent — we typically recommend running both together.",
      },
      {
        question: "Can you help us follow up with leads faster?",
        answer:
          "We build lead capture and notification systems designed for speed, since real estate leads are often actively house-hunting and lost quickly to a faster-responding competitor.",
      },
      {
        question: "Do you work with property tech (PropTech) startups too?",
        answer:
          "Yes — PropTech startups typically need different positioning and content than individual agents or brokerages, often closer to a B2B or B2B2C SaaS marketing approach.",
      },
      {
        question: "How do you handle real estate marketing across multiple markets or offices?",
        answer:
          "We build systematic, repeatable local SEO and content processes for multi-location brokerages, rather than treating each office or market as an independent, disconnected project with its own separate strategy.",
      },
      {
        question: "Can you help us improve our mobile listing experience specifically?",
        answer:
          "Yes — mobile performance is a genuine priority for us in real estate development, since a meaningful share of property searches happen on a phone during active house-hunting, not desktop research.",
      },
    ],
    cta: {
      h2: "Ready for real estate marketing built around your actual market?",
      subhead:
        "Tell us about your listings and local market — we'll show you exactly where your local visibility and lead capture are leaving leads on the table.",
    },
  },
  {
    slug: "legal",
    name: "Legal",
    icon: "Scale",
    cardDescription:
      "Ethics-aware local and practice-area SEO, authority-building content, and sites built for nurturing high-value legal cases.",
    meta: {
      title: "Legal Marketing Agency",
      description:
        "Digital agency for law firms. Branding, web development, SEO, and content marketing for legal practices in the US, UK, EU, and Australia.",
      keywords: [
        "law firm digital agency",
        "legal marketing agency",
        "law firm SEO",
        "attorney website design",
        "legal content marketing",
        "practice area SEO",
        "legal tech marketing agency",
        "law firm lead generation",
      ],
    },
    hero: {
      eyebrow: "For Law Firms & Legal Tech",
      h1: "Digital Agency for Law Firms & Legal Tech",
      subheadline:
        "We work with solo practitioners, mid-size firms, and legal tech startups on local-and-practice-area SEO, content that builds genuine legal authority, and websites built for nurturing high-value cases through a longer decision process. Legal marketing operates under professional ethics rules most other industries never have to think about, and we build with that constraint from the start.",
    },
    whyThisIndustry: {
      h2: "Why Legal Marketing Operates Under Different Rules",
      paragraphs: [
        "Legal marketing carries professional ethics constraints that vary by jurisdiction and practice area — rules around case result claims, client testimonials, and even how attorneys can describe their own specialization differ from state to state and bar to bar. We build content and marketing strategy within these constraints rather than assuming the same playbook that works for a typical local service business applies cleanly to a law firm.",
        "Local and practice-area SEO need to work together for most law firms, since a prospective client is usually searching for a specific legal need in a specific location — \"personal injury attorney\" plus a city, \"divorce lawyer\" plus a county — rather than a generic legal services term. We build SEO strategy around this dual local-and-practice-area intent rather than optimizing for broad legal terms that don't reflect how people actually search when they need a lawyer.",
        "High-value cases, particularly in personal injury, family law, and complex litigation, often involve a genuinely longer decision process than a typical local service purchase, with a prospective client researching, comparing firms, and sometimes consulting with multiple attorneys before committing. Lead nurturing for this kind of decision needs more than a single contact form — it needs content and follow-up that builds confidence over the actual length of that decision window.",
        "Legal content credibility depends on actually demonstrating expertise rather than just claiming it, and prospective clients evaluating a law firm are often doing so during a stressful, high-stakes moment in their lives where generic, templated legal content reads as a red flag rather than reassurance. We write content that genuinely explains legal processes and options clearly, coordinated with attorneys when a topic requires specific expertise.",
        "Legal tech startups face a different version of this challenge — explaining a product to an audience that includes practicing attorneys evaluating it skeptically against their existing workflow, often resistant to change for understandable professional risk-aversion reasons. We build positioning and content that respects this skepticism rather than overselling a product to an audience trained to be cautious.",
        "Initial consultation conversion matters enormously for most law firms, since the gap between a website visit and an actual booked consultation is where a large share of potential cases are lost, often due to friction in the contact process or a lack of clarity about what happens after someone reaches out. We treat this conversion path as a dedicated piece of work, not an assumed byproduct of good content alone.",
        "Multi-attorney and multi-office firms face a coordination challenge similar to other multi-location businesses, needing individual attorney bios and practice-area pages that stay accurate and current while still contributing to a coherent firm-wide brand and SEO strategy, rather than each attorney's page operating as an island disconnected from the rest.",
      ],
    },
    industryChallenges: {
      h2: "Challenges Law Firms & Legal Tech Bring Us",
      challenges: [
        {
          title: "Marketing Within Professional Ethics Constraints",
          description:
            "Case result claims, testimonials, and specialization descriptions that need to comply with jurisdiction-specific bar rules, which vary meaningfully from state to state.",
        },
        {
          title: "Competing for Both Local and Practice-Area Search Intent",
          description:
            "Visibility needed for location-plus-practice-area searches specifically, not broad legal services terms that don't reflect how people actually search for a lawyer.",
        },
        {
          title: "Nurturing High-Value Cases Through a Long Decision Process",
          description:
            "Prospective clients researching and comparing firms over weeks, where a single contact form isn't enough to build the confidence a high-value case decision requires.",
        },
        {
          title: "Generic Content That Reads as a Red Flag, Not Reassurance",
          description:
            "Templated legal content that fails to genuinely explain a process or option clearly, undermining trust at a moment when a prospective client is already stressed.",
        },
        {
          title: "Selling Legal Tech to a Professionally Cautious Audience",
          description:
            "Attorneys evaluating new tools skeptically against established workflows, for understandable professional risk-aversion reasons that generic SaaS marketing tactics don't account for.",
        },
      ],
    },
    servicesForIndustry: {
      h2: "Our Services for Law Firms & Legal Tech",
      intro:
        "Law firms and legal tech companies typically need ethics-aware local and practice-area visibility, genuinely authoritative content, and a site built for nurturing longer, higher-stakes decisions. Here's where we usually start.",
      services: [
        {
          name: "Local SEO",
          description:
            "Google Business Profile optimization and citation building tuned for location-plus-practice-area legal search behavior specifically.",
          relevantServiceSlug: "seo",
          relevantSubServiceSlug: "local-seo",
        },
        {
          name: "Blog Writing",
          description:
            "Genuinely explanatory legal content written with attorney input where a topic requires specific expertise, built to reassure rather than read as templated.",
          relevantServiceSlug: "content-social-media",
          relevantSubServiceSlug: "blog-writing",
        },
        {
          name: "On-Page SEO",
          description:
            "Practice-area page optimization mapped to the specific terms prospective clients actually search when they need a particular kind of legal help.",
          relevantServiceSlug: "seo",
          relevantSubServiceSlug: "on-page-seo",
        },
        {
          name: "Next.js Development",
          description:
            "Fast, credible websites with case result and testimonial presentation built to comply with applicable bar advertising rules.",
          relevantServiceSlug: "web-development",
          relevantSubServiceSlug: "nextjs",
        },
        {
          name: "Email Marketing",
          description:
            "Nurture sequences for high-value cases with a longer decision window, supporting a prospective client across multiple touchpoints rather than a single contact form.",
          relevantServiceSlug: "content-social-media",
          relevantSubServiceSlug: "email-marketing",
        },
      ],
    },
    toolsAndTech: {
      h2: "How We Approach Legal-Specific Considerations",
      paragraph:
        "We build with bar advertising rules and jurisdiction-specific ethics constraints in mind from the start, coordinating with your firm on what case results and testimonials can actually be presented and how. For legal tech specifically, we research the practicing-attorney workflow context thoroughly so positioning respects professional skepticism rather than overselling against it.",
      tools: [
        "Bar-Compliant Content Review",
        "Practice-Area Keyword Research",
        "Google Business Profile",
        "Legal Directory Citations",
      ],
    },
    caseStudyPlaceholder: {
      h2: "Results We're Building Toward",
      text:
        "We're early enough in our agency's life that we'd rather have a direct conversation about your specific practice areas than show you a generic case study. The pattern we look for with legal clients is the same: a clear baseline — qualified inquiries, local visibility, practice-area rankings — measured before we start, and measured again on a fixed timeline after, so improvement is genuinely verifiable.",
    },
    ourProcess: {
      h2: "How We Work with Law Firms & Legal Tech",
      steps: [
        {
          number: "01",
          title: "Audit & Ethics Context",
          description:
            "We audit your current visibility and content, and understand the specific bar rules and ethics constraints applicable to your jurisdiction and practice areas.",
        },
        {
          number: "02",
          title: "Prioritized Scope",
          description:
            "We scope the highest-impact work first — usually local-and-practice-area SEO or content credibility — rather than a broad engagement that dilutes focus.",
        },
        {
          number: "03",
          title: "Build with Attorney Review",
          description:
            "We build and write content with attorney review built into the process wherever legal accuracy or ethics compliance genuinely requires it.",
        },
        {
          number: "04",
          title: "Measure & Expand",
          description:
            "We measure against the baseline we set at the start and expand into the next highest-priority area based on actual inquiry and ranking data.",
        },
      ],
    },
    faqs: [
      {
        question: "Can you market case results and testimonials for our firm?",
        answer:
          "It depends on your jurisdiction's bar advertising rules — we work within whatever constraints apply to your specific state and practice area rather than assuming a one-size-fits-all approach.",
      },
      {
        question: "Do you specialize in a particular practice area?",
        answer:
          "We work across practice areas, researching thoroughly and coordinating closely with your attorneys for the specific expertise each individual practice area's content genuinely requires.",
      },
      {
        question: "How do you handle SEO for firms with multiple practice areas?",
        answer:
          "We build dedicated practice-area pages mapped to how people actually search for each specific legal need, rather than one generic page trying to cover everything.",
      },
      {
        question: "Can you help with lead nurturing for high-value personal injury or family law cases?",
        answer:
          "Yes — these cases often involve a longer, more careful decision process, and we build content and email nurture sequences that support a prospective client across that entire decision window.",
      },
      {
        question: "Do you work with legal tech companies, not just law firms?",
        answer:
          "Yes — legal tech needs different positioning than a law firm, typically closer to B2B SaaS marketing, but still respectful of how professionally cautious practicing attorneys evaluate new tools.",
      },
      {
        question: "How long does legal SEO take to show results?",
        answer:
          "Similar to other competitive local categories, typically 3-6 months for meaningful movement, though practice-area-specific terms in less competitive markets can show results faster than highly contested ones.",
      },
      {
        question: "Can you help us convert more website visitors into booked consultations?",
        answer:
          "Yes — the gap between a site visit and a booked consultation is where many firms lose potential cases, and we treat that specific conversion path as dedicated work, not an assumed byproduct of good content.",
      },
      {
        question: "Do you build individual attorney bio pages for multi-attorney firms?",
        answer:
          "Yes — we build attorney-specific pages that stay accurate and current while contributing to a coherent firm-wide brand and SEO strategy, rather than letting each page operate disconnected from the rest.",
      },
    ],
    cta: {
      h2: "Ready for legal marketing that respects your ethics obligations?",
      subhead:
        "Tell us about your practice areas and jurisdiction — we'll show you what compliant, genuinely credible legal marketing looks like.",
    },
  },
  {
    slug: "education",
    name: "Education & EdTech",
    icon: "GraduationCap",
    cardDescription:
      "Student and teacher acquisition, content authority, and SEO built for online schools, course creators, and learning platforms.",
    meta: {
      title: "Education Marketing Agency",
      description:
        "Digital agency for education brands. Web development, SEO, content marketing, and performance ads for EdTech, higher education, and online learning.",
      keywords: [
        "edtech digital agency",
        "education marketing agency",
        "edtech SEO",
        "online learning marketing",
        "course creator marketing",
        "edtech content strategy",
        "online school marketing agency",
        "education platform SEO",
      ],
    },
    hero: {
      eyebrow: "For Education & EdTech",
      h1: "Digital Agency for Education & EdTech",
      subheadline:
        "We work with EdTech startups, online schools, course creators, and education platforms on student and teacher acquisition, content that builds genuine subject-matter authority, and SEO built for a category with two distinct audiences to win over. Education marketing usually has to convince both the learner and whoever's actually paying.",
    },
    whyThisIndustry: {
      h2: "Why Education Marketing Has to Win Over Two Audiences at Once",
      paragraphs: [
        "Education and EdTech marketing frequently has to address two distinct audiences within a single buying decision — the student or learner who'll actually use the product, and a parent, employer, or institution that's often the one actually paying or approving the purchase. This B2B2C dynamic shapes everything from messaging to content strategy, since a campaign that resonates with a student but fails to reassure the paying decision-maker (or vice versa) leaves real conversions on the table.",
        "Student and teacher acquisition both matter for most education platforms, and they require genuinely different marketing approaches — a platform trying to attract learners needs to address aspiration and outcome, while a platform trying to attract teachers or content creators needs to address compensation, support, and professional legitimacy. We build separate content and acquisition strategies for each audience rather than collapsing them into one generic message.",
        "Retention is arguably a bigger lever in education than acquisition for many EdTech businesses, since course completion rates and continued engagement directly affect both the value a learner gets and the testimonials and word-of-mouth that drive future acquisition. We think about content and lifecycle marketing across the full learner journey, not just the initial signup, since a platform with poor completion rates is fighting acquisition with one hand tied behind its back.",
        "Content authority matters enormously in education, since prospective students and parents are evaluating whether a course, school, or platform will actually deliver the outcome being promised, and that evaluation leans heavily on whether the content demonstrates real subject-matter depth rather than marketing confidence alone. We research and write with genuine expertise, coordinating with your educators or subject matter experts where a topic requires it.",
        "Resource libraries and free educational content function as both a genuine value-add and a powerful organic acquisition channel for EdTech and online schools, since search behavior in education skews heavily toward informational, how-to, and comparison queries that a well-built content library can capture before a prospective student has even decided to enroll anywhere.",
        "Social proof in education carries a particular weight beyond typical testimonials, since prospective students and parents are often looking specifically for outcome evidence — job placement rates, skill demonstrations, alumni success stories — that speaks directly to whether the promised result is achievable, not just whether past students enjoyed the experience generally.",
        "Comparison and alternative-focused content matters in EdTech similarly to how it matters in SaaS, since a prospective student or institutional buyer evaluating multiple courses or platforms is actively comparing options before committing, and content that helps with that comparison directly — rather than only promoting one option in isolation — tends to convert prospects already further along in their decision.",
      ],
    },
    industryChallenges: {
      h2: "Challenges Education & EdTech Brands Bring Us",
      challenges: [
        {
          title: "Convincing Both the Learner and the Payer",
          description:
            "A B2B2C dynamic where messaging needs to resonate with the student while also reassuring the parent, employer, or institution actually approving the purchase.",
        },
        {
          title: "Separate Acquisition Needs for Students and Teachers",
          description:
            "Two distinct audiences requiring genuinely different messaging — outcome-focused for learners, compensation-and-legitimacy-focused for teachers or content creators.",
        },
        {
          title: "Retention and Completion Affecting Future Acquisition",
          description:
            "Poor course completion rates undermining both learner outcomes and the word-of-mouth and testimonials that future acquisition depends on heavily.",
        },
        {
          title: "Demonstrating Genuine Subject-Matter Authority",
          description:
            "Content that needs to prove real educational depth, not just marketing confidence, to a prospective student evaluating whether a promised outcome is credible.",
        },
        {
          title: "Capturing Early-Stage, Pre-Enrollment Search Intent",
          description:
            "Prospective students researching informational and comparison queries long before they've decided to enroll anywhere, representing acquisition opportunity most EdTech brands consistently underuse or ignore entirely.",
        },
      ],
    },
    servicesForIndustry: {
      h2: "Our Services for Education & EdTech",
      intro:
        "Education and EdTech clients typically need distinct acquisition strategies for students and teachers, content that builds real authority, and SEO that captures early-stage research intent. Here's where we usually start.",
      services: [
        {
          name: "Content Strategy",
          description:
            "Editorial planning split deliberately between learner-facing and teacher-or-creator-facing content, rather than one generic message trying to serve both.",
          relevantServiceSlug: "content-social-media",
          relevantSubServiceSlug: "content-strategy",
        },
        {
          name: "SaaS SEO",
          description:
            "Commercial-intent and informational keyword strategy built for education platforms, capturing both early-stage research and active enrollment-decision search behavior.",
          relevantServiceSlug: "seo",
          relevantSubServiceSlug: "saas-seo",
        },
        {
          name: "Blog Writing",
          description:
            "Genuinely authoritative educational content written with subject matter expert input, building the credibility a prospective student's outcome evaluation depends on.",
          relevantServiceSlug: "content-social-media",
          relevantSubServiceSlug: "blog-writing",
        },
        {
          name: "Email Marketing",
          description:
            "Lifecycle automation supporting learner engagement and completion, not just initial enrollment, since retention compounds into the word-of-mouth future acquisition heavily depends on.",
          relevantServiceSlug: "content-social-media",
          relevantSubServiceSlug: "email-marketing",
        },
        {
          name: "Meta Ads",
          description:
            "Acquisition campaigns tuned separately for learner-facing and parent-or-institution-facing messaging, depending on who's actually approving the purchase.",
          relevantServiceSlug: "performance-marketing",
          relevantSubServiceSlug: "meta-ads",
        },
      ],
    },
    toolsAndTech: {
      h2: "How We Approach Education-Specific Infrastructure",
      paragraph:
        "We build and integrate around the learning and engagement infrastructure education platforms already run on, coordinating with your existing LMS or course delivery platform rather than asking you to adopt new core systems. That typically means working alongside platforms like Teachable, Thinkific, or a custom LMS, plus lifecycle and engagement tools that support retention and completion tracking specifically.",
      tools: [
        "LMS Integrations",
        "Teachable / Thinkific",
        "Email Lifecycle Automation",
        "Google Analytics 4",
      ],
    },
    caseStudyPlaceholder: {
      h2: "Results We're Building Toward",
      text:
        "We're early enough in our agency's life that we'd rather have a direct conversation about your specific platform and audience than show you a generic case study. The pattern we look for with education and EdTech clients is the same: a clear baseline — enrollment, completion rate, organic visibility — measured before we start, and measured again on a fixed timeline after, so improvement is genuinely verifiable.",
    },
    ourProcess: {
      h2: "How We Work with Education & EdTech Clients",
      steps: [
        {
          number: "01",
          title: "Audience & Funnel Audit",
          description:
            "We audit your current content, visibility, and acquisition funnel, identifying where student and teacher acquisition needs genuinely diverge for your specific platform.",
        },
        {
          number: "02",
          title: "Prioritized Scope",
          description:
            "We scope the highest-impact work first — usually content authority or one specific acquisition channel — rather than a broad engagement that dilutes focus.",
        },
        {
          number: "03",
          title: "Build & Launch",
          description:
            "We execute the agreed scope with separate messaging tracks for learner and payer audiences where that distinction genuinely applies to your platform.",
        },
        {
          number: "04",
          title: "Measure & Expand",
          description:
            "We measure against the baseline we set at the start, tracking completion and retention alongside acquisition, then expand based on what's actually working.",
        },
      ],
    },
    faqs: [
      {
        question: "Do you market to students, parents, or both?",
        answer:
          "It depends on your platform's actual buying dynamic — we build separate messaging tracks for the learner and the paying decision-maker when both genuinely factor into the final purchase decision.",
      },
      {
        question: "Can you help us with teacher or content creator acquisition too?",
        answer:
          "Yes — teacher and creator acquisition needs different messaging than student acquisition, typically focused on compensation, support, and professional legitimacy rather than learning outcomes specifically.",
      },
      {
        question: "Do you help with retention and completion rates, or just enrollment?",
        answer:
          "We think about the full learner lifecycle, since completion and retention directly affect the word-of-mouth and testimonials future acquisition depends on — not just the initial signup.",
      },
      {
        question: "Can you write genuinely accurate educational content for our courses?",
        answer:
          "Yes — we research thoroughly and coordinate with your educators or subject matter experts when a topic requires specific expertise, since content credibility matters heavily in education specifically.",
      },
      {
        question: "Do you integrate with our existing LMS or course platform?",
        answer:
          "We coordinate with whatever LMS or course delivery platform you already run on, rather than requiring a disruptive migration to new core systems just to work with us.",
      },
      {
        question: "Can you help us reduce student churn after enrollment?",
        answer:
          "Yes — we build lifecycle email and content touchpoints aimed at engagement and completion specifically, since reducing post-enrollment churn protects both outcomes and future word-of-mouth acquisition.",
      },
      {
        question: "How long does EdTech SEO take to show results?",
        answer:
          "Similar to SaaS SEO timelines, typically 3-6 months for meaningful organic movement, with resource libraries and informational content often building momentum faster than commercial-intent terms alone usually do.",
      },
      {
        question: "Can you help us build outcome-focused social proof, not just testimonials?",
        answer:
          "Yes — we help surface job placement rates, skill demonstrations, and alumni outcomes specifically, since prospective students and parents are usually looking for outcome evidence rather than generic satisfaction quotes.",
      },
      {
        question: "Do you build comparison content against other courses or platforms?",
        answer:
          "Yes — comparison and alternative-focused content helps prospective students already evaluating multiple options, and it tends to convert better than content promoting only one option in isolation.",
      },
    ],
    cta: {
      h2: "Ready to win over both your learners and whoever's paying?",
      subhead:
        "Tell us about your platform and audience — we'll show you where student and teacher acquisition are being underserved by one generic message.",
    },
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export const industriesHubFaqs: IndustryFaq[] = [
  {
    question: "Do you only work with the eight industries listed here?",
    answer:
      "These are the industries where we've built genuine specialization and repeated experience, but we take on strong-fit projects outside this list too. The list reflects where we have the deepest pattern recognition, not a hard boundary on who we'll work with.",
  },
  {
    question: "What does 'industry specialization' actually mean in practice?",
    answer:
      "It means we already understand the specific challenges, terminology, and buyer behavior of your category before we start, rather than learning your industry from scratch on your dime during the engagement itself — and that translates into faster, more relevant strategy from the very first conversation.",
  },
  {
    question: "Will our project be handled by people with real experience in our industry?",
    answer:
      "Yes — we assign work based on which of our team has the most relevant pattern recognition for your specific industry, rather than assigning generalist capacity regardless of actual category fit.",
  },
  {
    question: "What if our business spans multiple industries on this list?",
    answer:
      "That's common, and we scope accordingly — a business that's both B2B and SaaS, for example, needs a strategy that accounts for both buyer dynamics rather than picking just one lens to view it through.",
  },
  {
    question: "Do industry-specific engagements cost more than general ones?",
    answer:
      "No — industry specialization changes how we approach the strategy and content, not our pricing structure. You're not paying a premium just for us already understanding your category coming in.",
  },
  {
    question: "How do you stay current on what's changing within each industry?",
    answer:
      "Through the engagements themselves, mostly — working repeatedly within a category keeps our understanding current in a way that reading industry reports alone never quite replicates.",
  },
];
