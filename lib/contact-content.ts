export const budgetRanges = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
  "Not sure yet",
];

export const timelineOptions = [
  "ASAP / within a month",
  "1–3 months",
  "3–6 months",
  "Just exploring, no fixed timeline",
];

export type ContactStep = {
  title: string;
  description: string;
};

export const whatHappensNextSteps: ContactStep[] = [
  {
    title: "Discovery Call",
    description:
      "We schedule a 30-minute call to understand your goals, constraints, and what success looks like — no slide deck, just a real conversation about your project, your team, and what's actually driving the timeline.",
  },
  {
    title: "Proposal",
    description:
      "Within a few days, you'll get a written proposal with scope, timeline, and pricing — specific to your project, not a templated rate card we send to everyone regardless of what they actually asked for.",
  },
  {
    title: "Scope Alignment",
    description:
      "We walk through the proposal together, adjust anything that doesn't fit, and make sure expectations are aligned on both sides before any contract gets signed or any deposit is requested.",
  },
  {
    title: "Kickoff",
    description:
      "Once everything's confirmed, we kick off with a clear project plan, communication cadence, and the first milestone already on the calendar before week one ends — not a vague \"we'll be in touch.\"",
  },
];

export type ContactFaq = {
  question: string;
  answer: string;
};

export const contactFaqs: ContactFaq[] = [
  {
    question: "How quickly will you respond to my inquiry?",
    answer:
      "Within 24 hours on any weekday, usually much sooner. If your project is urgent, mention that in the form and we'll prioritize getting back to you with next steps instead of placing you in the general queue.",
  },
  {
    question: "Do I need to know exactly what I need before reaching out?",
    answer:
      "No. Many of the best engagements start with a vague problem rather than a fully scoped project. Tell us what's not working or what you're trying to achieve, and we'll help shape the right approach together over the first call.",
  },
  {
    question:
      "What if my project doesn't fit neatly into one of your six services?",
    answer:
      "Tell us anyway. Most real projects touch more than one discipline, and we'll tell you honestly if something falls outside what we do well rather than stretch to take it on regardless of fit, which rarely ends well for either side.",
  },
  {
    question: "Do you work with startups, or only established companies?",
    answer:
      "Both. We work with early-stage startups validating a first product and established companies scaling an existing one — the engagement looks different, but the standards we hold ourselves to don't change based on company size.",
  },
  {
    question:
      "Is the discovery call free, and does it commit me to anything?",
    answer:
      "Yes, completely free, and no commitment. It's a conversation to see if we're a good fit for each other before anyone signs anything or spends any money on either side of the table.",
  },
];
