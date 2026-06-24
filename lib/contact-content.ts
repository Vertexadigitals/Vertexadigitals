export const budgetRanges = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
  "Not sure yet",
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
