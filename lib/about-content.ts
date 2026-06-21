export type Founder = {
  name: string;
  role: string;
  bio: string;
};

export const founders: Founder[] = [
  {
    name: "Ajaypal Singh",
    role: "SEO, Digital Marketing & Client Acquisition",
    bio: "Ajaypal leads strategy, client acquisition, and growth at Vertexa Digitals. His focus is SEO and digital marketing — turning organic visibility and outbound relationships into a steady pipeline of the kind of clients the rest of the team loves working with. He's the first call for any prospective client, and the person who makes sure every engagement starts with a clear, honest scope before any work begins, rather than a vague proposal that gets renegotiated halfway through the project.",
  },
  {
    name: "Manav Parihar",
    role: "Web Development",
    bio: "Manav owns web development end to end — Shopify storefronts, WordPress builds, and modern Next.js applications. He's the one deciding which stack actually fits a project instead of defaulting to whatever's fastest to ship, and the one still in the codebase years after a site launches, because he believes a website's job isn't finished at launch — it's just getting started. He's also usually the person who notices a small performance regression before a client does.",
  },
  {
    name: "Nayan Kumar",
    role: "Mobile App Development",
    bio: "Nayan leads mobile app development across iOS, Android, React Native, and Flutter. He thinks about apps the way users actually experience them — load times, offline behavior, the small interactions that make an app feel native instead of assembled. Every mobile project at Vertexa goes through him, from the first architecture decision to the App Store submission that actually gets approved, and the maintenance work nobody notices until it's missing.",
  },
  {
    name: "Jayantilal Suthar",
    role: "Finance, Accounting & Analytics",
    bio: "Jayantilal keeps Vertexa's numbers honest — finance, accounting, and the research and analytics that inform how we price engagements and measure whether client work is actually performing. He's the quiet check on every claim the team makes about results, making sure 'it's working' is backed by data before it ever reaches a client report, not just a screenshot that looks good in isolation.",
  },
];

export const originStoryParagraphs: string[] = [
  "Vertexa Digitals didn't start as a business plan — it started as four people who'd each spent years working inside agencies, freelancing, or building products, and kept running into the same frustration: most digital agencies are built to maximize billable hours, not client outcomes. We watched good work get diluted by account management layers, project scope creep that nobody pushed back on, and reporting designed to look good rather than tell the truth, until the work itself stopped being the point.",
  "We started Vertexa with a simple test: would we hire this agency ourselves, with our own money, for something that actually mattered to us? That question ruled out most of the structures common in this industry — junior teams executing senior pitches, services bundled together without real expertise behind each one, retainers that continue regardless of whether they're producing results. We built around four people who each own a discipline completely, not a layer of management between clients and the work.",
  "What started as a handful of small engagements for clients willing to bet on a new team has grown into a studio working with SaaS companies, D2C brands, and B2B firms across the US, UK, EU, and Australia. The mix of services has grown — web development, mobile apps, SEO, performance marketing, branding, content — but the original test hasn't changed. Every new capability we add still has to pass it before we offer it to a single client.",
];

export const missionParagraphs: string[] = [
  "We're building toward a specific kind of agency: one where \"senior-led\" isn't a sales line but an operating fact, where every service we offer is owned by someone who's genuinely good at it rather than assigned to whoever's available, and where clients can tell the difference within the first month of working with us. We want to be the agency ambitious founders and marketing leaders recommend to each other — not because we're the cheapest option, but because we're the one that actually did what we said we would.",
  "Long term, that means staying deliberately focused rather than expanding into every adjacent service we could plausibly offer. We'd rather be genuinely excellent at six disciplines than mediocre across fifteen, and we'd rather turn down work that doesn't fit our model than stretch the team thin trying to be everything to everyone. Growth, for us, means going deeper with the clients and services we already have — not chasing scale for its own sake.",
  "We also want to be the kind of agency that's still around in ten years, run by the same people who started it, working with clients who've been with us for most of that time. That's a deliberately unglamorous goal in an industry that often optimizes for a quick exit or rapid headcount growth, but it's the one that actually aligns with doing good work consistently rather than chasing whatever metric makes the business look impressive in the short term.",
];

export type Value = {
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    title: "Ownership Over Assignment",
    description:
      "Every discipline at Vertexa is owned by someone who's genuinely good at it, not assigned to whoever has capacity that week. That ownership is why our estimates hold up and why the person scoping your project is the same person accountable for delivering it.",
  },
  {
    title: "Honesty Over Optimism",
    description:
      "We'd rather tell a client a timeline is unrealistic or a strategy won't work than say yes to keep a sales conversation pleasant. Every commitment we make is one we actually intend to keep, which means we're careful about which commitments we make in the first place.",
  },
  {
    title: "Depth Over Breadth",
    description:
      "We chose six disciplines deliberately and went deep in each one, instead of offering twenty services at a shallow level. If something falls outside what we're genuinely good at, we'll tell you — and point you somewhere better, rather than take the work anyway.",
  },
  {
    title: "Data Over Opinion",
    description:
      "Every claim we make about performance is backed by a number we can show you, not a feeling about how a project is going. When something isn't working, the data tells us before a client has to ask why, and we'd rather surface that early than wait for a quarterly review to deliver bad news.",
  },
  {
    title: "Long-Term Over Transactional",
    description:
      "We measure success by whether clients stay and grow with us, not by how many new logos we sign in a quarter. That horizon shapes how we price, how we scope, and how honestly we talk about what's actually working — a one-quarter relationship and a five-year one require different kinds of honesty.",
  },
];

export const whyForeignClientsParagraphs: string[] = [
  "Vertexa Digitals is based in Udaipur, India, but every client we work with is based in the United States, United Kingdom, European Union, or Australia. That's a deliberate choice, not an accident of how the business grew. Serving international markets means holding ourselves to the standards, pricing, and communication norms those markets expect — overlapping working hours, transparent reporting, and a level of polish that doesn't get diluted by serving a dozen different markets with different expectations at once.",
  "It also means we can specialize in problems specific to brands competing internationally — international SEO, multi-currency e-commerce, campaigns that need to work across time zones and cultural context simultaneously. We'd rather be exceptional at solving that specific set of problems for a focused group of clients than be a generalist agency serving every market with none of that depth. It's the same philosophy behind choosing six services instead of twenty — focus compounds, and we'd rather compound.",
  "This isn't a pricing arbitrage story, even though cost is part of why international clients first consider an agency based outside their home market. The clients who stay with us long-term aren't doing so to save money — they're doing so because the work holds up to the same standard they'd expect from an agency down the street from their office, at a price that makes sense for the value delivered. That combination is the actual pitch, not the geography.",
];

export const locationParagraph =
  "Our team works out of Udaipur, Rajasthan — a deliberate base that keeps our costs sane without compromising the quality of work we deliver, since none of that savings comes from cutting corners on talent or process. We work fully remotely with every client, with overlapping hours for US, UK, and Australia time zones built into how we staff projects, so distance never becomes the excuse for slow communication or missed context. Most clients never visit, and most never need to — video calls, shared project boards, and a habit of writing things down instead of relying on a hallway conversation cover the gap a shared office would otherwise fill for a team working across this many time zones.";
