export const resourcesNavLinks = [
  { label: "Blog", href: "/resources/blogs" },
  { label: "Case Studies", href: "/resources/case-studies" },
];

export interface ResourcesHubContent {
  hero: {
    h1: string;
    subheadline: string;
  };
  cards: {
    title: string;
    description: string;
    href: string;
    linkLabel: string;
  }[];
  whatWereBuilding: {
    h2: string;
    paragraphs: string[];
  };
}

export const resourcesHubContent: ResourcesHubContent = {
  hero: {
    h1: "Resources & Insights",
    subheadline:
      "A growing collection of writing and client work from the Vertexa Digitals team — built deliberately, not rushed out to hit a publishing quota. Most of it is still in progress, and we'd rather tell you that directly than fake a content library that doesn't exist yet. Both sections below explain exactly where things stand and what to expect as they fill in.",
  },
  cards: [
    {
      title: "Blog",
      description:
        "Frameworks, field notes, and practical writing on SEO, web development, performance marketing, branding, and content — grounded in actual client work, not generic advice rewritten from someone else's listicle.",
      href: "/resources/blogs",
      linkLabel: "See what's coming",
    },
    {
      title: "Case Studies",
      description:
        "Client outcomes and the methodology behind them, currently in progress as we deliver work for our launch clients. Reach out directly for relevant samples and examples of our process in the meantime.",
      href: "/resources/case-studies",
      linkLabel: "Learn more",
    },
  ],
  whatWereBuilding: {
    h2: "What We're Building",
    paragraphs: [
      "Most agency resource sections exist to demonstrate activity, not to actually help anyone — a thin blog post published weekly to satisfy an SEO checklist, or a handful of vague case studies with the client names blurred out and the numbers conveniently rounded up. We didn't want to build that version of a resources section just because it's the default.",
      "Instead, we're building this section in the order our actual work generates real material to share. Blog content comes from genuine questions we're solving for clients — when a piece of writing reflects something we've actually argued through with a client, it goes up. When it would just be filler to hit a schedule, it doesn't.",
      "Case studies follow the same logic, with one added constraint: we're a new agency, and our current case study candidates are projects still in progress for launch clients. We'd rather wait until we can show real, verifiable outcomes than publish a case study with placeholder numbers or invented results.",
      "If you're evaluating us and want more than what's published here so far, the fastest path is a direct conversation — we're happy to walk through specific examples of our thinking and approach that haven't made it into a formal write-up yet.",
      "We also won't pad either section with content licensed or rewritten from elsewhere just to look more active. Everything that eventually publishes here, whether a blog post or a case study, will be something we genuinely produced ourselves and would be comfortable putting our name on.",
      "This page itself will keep changing as both sections fill in — check back periodically, or use the subscribe option on the blog page if you'd rather be notified directly than need to remember to come check.",
      "We considered launching with a smaller batch of placeholder posts and a few rough early case studies just to avoid having an obviously empty resources section on a brand-new site. We decided against it, since a half-finished version of either section would have undercut the same credibility this section is meant to help build in the first place.",
      "In the meantime, the rest of the site — particularly our detailed service and sub-service pages — reflects the same thinking and depth we'll eventually bring to this resources section specifically. Those pages are a reasonable substitute for evaluating how we think about a problem while this section continues filling in.",
    ],
  },
};

export interface CaseStudiesPlaceholderContent {
  hero: {
    h1: string;
    subheadline: string;
  };
  currentStatus: {
    h2: string;
    paragraphs: string[];
  };
  whatTheyWillInclude: {
    h2: string;
    items: { title: string; description: string }[];
  };
}

export const caseStudiesPlaceholderContent: CaseStudiesPlaceholderContent = {
  hero: {
    h1: "Case Studies & Client Outcomes",
    subheadline:
      "We don't have published case studies yet, and we'd rather tell you that plainly than show you something dressed up to look more established than we actually are. If you want relevant samples of our thinking and approach in the meantime, email us directly.",
  },
  currentStatus: {
    h2: "Where We Actually Are Right Now",
    paragraphs: [
      "We're currently delivering work for our launch clients, and a real case study needs a real, verifiable outcome behind it — not a project still in its first few weeks of execution. Publishing a case study before we have honest results to show would undercut the entire point of having one.",
      "This isn't a permanent state. As soon as we have client work with measurable, attributable outcomes we can share responsibly (and with client permission), we'll publish it here. Until then, we'd rather have an honest, direct conversation about what we can do for you than point you toward a fabricated success story.",
      "If you're evaluating us and want to see how we think about a problem similar to yours, email us at info@vertexadigitals.com and we'll walk you through relevant examples of our process, even if they haven't been formalized into a published case study yet.",
      "We'd also rather lose a prospective client who needs to see a polished case study right now than win one by publishing something misleading. If proof of past results is a hard requirement on your end before moving forward, we understand, and we'd rather you know that limitation upfront than discover it later.",
      "What we can offer in the meantime is a direct walkthrough of our actual process — the audit methodology, the strategic frameworks, and the kind of reasoning that will eventually show up in these case studies once we have outcomes to attach to them.",
    ],
  },
  whatTheyWillInclude: {
    h2: "What Our Case Studies Will Include",
    items: [
      {
        title: "The Actual Starting Point",
        description:
          "A clear, specific baseline — traffic, conversion rate, ranking position, whatever metric is relevant — measured before any work began, not a vague description of the problem the client came to us with.",
      },
      {
        title: "What We Actually Did",
        description:
          "The specific strategy and execution decisions made, including the reasoning behind them and the alternatives we considered, not just a generic list of deliverables checked off a contract.",
      },
      {
        title: "The Measured Outcome",
        description:
          "Results measured against that same baseline on a defined timeline, with the methodology behind the numbers made clear rather than left vague or conveniently rounded in our favor.",
      },
      {
        title: "What We'd Do Differently",
        description:
          "Honest reflection on what didn't work as expected the first time, since a case study that only shows wins isn't giving you the full, useful picture of how we actually work.",
      },
    ],
  },
};
