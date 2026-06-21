export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
  closingParagraph?: string;
};

export type LegalPageContent = {
  h1: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export const privacyContent: LegalPageContent = {
  h1: "Privacy Policy",
  lastUpdated: "June 21, 2026",
  intro:
    "This Privacy Policy explains how Vertexa Digitals (\"we,\" \"us,\" or \"our\") collects, uses, discloses, and protects information when you visit vertexadigitals.com (the \"Site\") or engage us for digital services. We are committed to handling your personal information responsibly and in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR) for visitors and clients in the European Union, and the California Consumer Privacy Act (CCPA) for residents of California. By using our Site or engaging our services, you agree to the practices described in this policy. If you do not agree with any part of this policy, please do not use our Site or services.",
  sections: [
    {
      heading: "Information We Collect",
      paragraphs: [
        "We collect information in three general ways: information you provide to us directly, information collected automatically when you visit our Site, and information received from third-party services we use to operate our business.",
        "Information You Provide Directly: When you fill out our contact form, book a discovery call, or engage us for services, we collect information you choose to share, including your name, email address, company name, job title, project details, budget range, timeline expectations, and any other information you include in your inquiry or during the course of a project engagement.",
        "Information Collected Automatically: When you visit our Site, certain information is collected automatically through cookies, analytics tools, and standard web server logs, including your IP address and approximate geographic location, browser type and version, device type and operating system, pages visited, time spent on the Site, referring URLs, and general usage patterns gathered through Google Analytics.",
        "Information From Third-Party Services: We use a small number of trusted third-party services to operate our business, and those services may collect or process information on our behalf, including hosting providers, analytics platforms, and communication tools described in the \"Data Sharing and Third Parties\" section below.",
      ],
    },
    {
      heading: "How We Use Your Information",
      paragraphs: [
        "We use the information we collect for the following purposes:",
      ],
      list: [
        "To respond to inquiries and provide quotes for our services",
        "To deliver, manage, and improve the services we provide to clients",
        "To communicate with you about your project, including updates and scheduling",
        "To send occasional updates about our services, only if you've opted in",
        "To analyze how visitors use our Site so we can improve its content and performance",
        "To comply with legal obligations and protect our legitimate business interests",
      ],
      closingParagraph:
        "Where required by applicable law, our legal basis for processing personal information includes your consent, the necessity of processing to perform a contract with you, and our legitimate interests in operating and improving our business, balanced against your privacy rights. We do not sell your personal information to third parties, and we never will. Any sharing of information is limited to what's necessary to operate our business and deliver the services described in this policy.",
    },
    {
      heading: "Cookies and Tracking",
      paragraphs: [
        "Our Site uses cookies and similar tracking technologies to understand how visitors interact with our content and to improve the experience over time. Cookies are small text files stored on your device that allow us to recognize repeat visits and gather aggregate usage data.",
        "We primarily use cookies for analytics purposes through Google Analytics, which helps us understand which pages are most useful to visitors and where people are coming from. We do not use cookies for invasive tracking, cross-site advertising profiles, or to sell data to advertising networks. Some cookies are strictly necessary for the Site to function and cannot be disabled without affecting core functionality.",
        "You can control or disable cookies through your browser settings at any time. Disabling cookies may affect some functionality of the Site, though the core content will remain accessible. We do not currently respond to browser \"Do Not Track\" signals, as there is no consistent industry standard for how to interpret them, but we limit our use of tracking technologies as described throughout this policy regardless.",
      ],
    },
    {
      heading: "Data Sharing and Third Parties",
      paragraphs: [
        "We work with a limited number of third-party service providers to operate Vertexa Digitals, and we only share the information necessary for each provider to perform its function:",
      ],
      list: [
        "Google Analytics — for understanding Site traffic and usage patterns",
        "Vercel — our hosting and infrastructure provider, which processes data necessary to serve the Site",
        "Google Workspace — for business email and communication",
        "CRM and project management tools — for managing client relationships and ongoing projects",
      ],
      closingParagraph:
        "Each of these providers maintains its own privacy and security practices, and we select providers that maintain industry-standard data protection commitments. We do not share your information with third parties for their own independent marketing purposes, and we do not share personal information with data brokers.",
    },
    {
      heading: "Data Retention",
      paragraphs: [
        "We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, including the duration of any active client engagement and a reasonable period afterward for accounting, legal, and business record-keeping purposes. Inquiry information from prospective clients who don't proceed with an engagement is generally retained for up to 24 months, after which it is deleted unless you've asked us to keep it for future reference. You may request earlier deletion of your information at any time, as described in the \"Your Rights\" section below.",
      ],
    },
    {
      heading: "Your Rights Under GDPR",
      paragraphs: [
        "If you are located in the European Union or European Economic Area, you have certain rights under the GDPR regarding your personal information, including the right to access a copy of the information we hold about you, the right to request correction of inaccurate or incomplete information, the right to request deletion of your information subject to certain legal exceptions, the right to request a portable copy of your data in a structured, machine-readable format, the right to restrict or object to certain processing of your information, and the right to lodge a complaint with your local data protection authority.",
      ],
    },
    {
      heading: "Your Rights Under CCPA",
      paragraphs: [
        "If you are a California resident, you have rights under the CCPA, including the right to know what categories of personal information we have collected about you and how it has been used, the right to request deletion of your personal information, the right to opt out of the sale or sharing of personal information (we do not sell or share personal information for cross-context behavioral advertising), and the right not to receive discriminatory treatment for exercising any of these rights.",
      ],
      closingParagraph:
        "To exercise any rights described in this policy, contact us using the details at the end of this page. We will verify your request and respond within the timeframe required by applicable law, typically within 30 days.",
    },
    {
      heading: "Marketing Communications",
      paragraphs: [
        "If you've opted in to receive updates from us, you can unsubscribe at any time using the link included in any marketing email, or by contacting us directly. Opting out of marketing communications does not affect transactional communications related to an active project engagement, such as invoices or project updates, which we will continue to send as necessary to deliver our services.",
      ],
    },
    {
      heading: "International Data Transfers",
      paragraphs: [
        "Vertexa Digitals is based in India, and the majority of our clients are located in the United States, United Kingdom, European Union, and Australia. This means your personal information may be transferred to, stored in, and processed in India and other countries where our service providers operate, which may have data protection laws different from those in your home country.",
        "Where required by applicable law — particularly for clients and visitors in the European Union — we take steps to ensure that any international transfer of personal information is conducted in a manner consistent with applicable data protection requirements, including reliance on service providers that maintain appropriate contractual and technical safeguards for cross-border data transfers.",
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "We take reasonable technical and organizational measures to protect personal information against unauthorized access, alteration, disclosure, or destruction. This includes secure hosting infrastructure, restricted internal access to client information, and the use of reputable third-party providers that maintain their own security standards.",
        "No method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security. If we become aware of a data breach affecting your personal information, we will notify you and any relevant authorities as required by applicable law.",
      ],
    },
    {
      heading: "Third-Party Links",
      paragraphs: [
        "Our Site may contain links to third-party websites, including client case studies, social media profiles, and tools we reference. We are not responsible for the privacy practices or content of those third-party sites, and we encourage you to review their privacy policies before providing any personal information to them.",
      ],
    },
    {
      heading: "Automated Decision-Making",
      paragraphs: [
        "We do not use your personal information for automated decision-making or profiling that produces legal effects or similarly significant outcomes concerning you. Any analytics or reporting we generate from Site usage data is used in aggregate to understand visitor behavior, not to make individual decisions about you.",
      ],
    },
    {
      heading: "Your Choices, Summarized",
      paragraphs: [
        "In short: you can ask us what information we hold about you, ask us to correct or delete it, opt out of marketing emails at any time, and control cookies through your browser. We try to make these choices straightforward rather than burying them in dense legal language, and we'd rather you email us directly with a question than struggle to interpret a clause in this policy.",
      ],
    },
    {
      heading: "Children's Privacy",
      paragraphs: [
        "Our Site and services are intended for businesses and individuals over the age of 18. We do not knowingly collect personal information from children under 16. If we become aware that we have inadvertently collected information from a child under this age, we will take steps to delete it promptly.",
      ],
    },
    {
      heading: "Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. Any changes will be posted on this page with an updated \"Last Updated\" date. We encourage you to review this policy periodically. Continued use of our Site or services after changes are posted constitutes acceptance of the updated policy.",
      ],
    },
    {
      heading: "Do Not Sell or Share My Personal Information",
      paragraphs: [
        "Vertexa Digitals does not sell personal information, and we do not share personal information for cross-context behavioral advertising purposes, as those terms are defined under the CCPA and similar state privacy laws. If our practices change in the future, we will update this policy and provide the opt-out mechanisms required by applicable law before any such sharing begins.",
      ],
    },
    {
      heading: "State-Specific Privacy Rights",
      paragraphs: [
        "Residents of certain U.S. states beyond California — including Virginia, Colorado, Connecticut, and others with comprehensive privacy laws — may have similar rights to access, correct, delete, and port their personal information, and to opt out of targeted advertising or profiling. We extend the same practical protections described in this policy to residents of those states, and you can exercise any applicable rights using the contact details below regardless of which state you reside in.",
      ],
    },
    {
      heading: "Contact Us About Privacy",
      paragraphs: [
        "If you have questions about this Privacy Policy or wish to exercise any of the rights described above, contact us at privacy@vertexadigitals.com or info@vertexadigitals.com. We aim to respond to all privacy-related inquiries within 30 days.",
      ],
    },
  ],
};

export const termsContent: LegalPageContent = {
  h1: "Terms of Service",
  lastUpdated: "June 21, 2026",
  intro:
    "These Terms of Service (\"Terms\") govern your engagement of Vertexa Digitals (\"we,\" \"us,\" or \"our\") for web development, mobile app development, SEO, performance marketing, branding and design, and content and social media services (collectively, the \"Services\"). By engaging us for any Service, signing a proposal, or otherwise instructing us to begin work, you (\"Client,\" \"you,\" or \"your\") agree to be bound by these Terms. Please read them carefully before engaging our Services, and contact us first if anything here is unclear.",
  sections: [
    {
      heading: "Acceptance of Terms",
      paragraphs: [
        "These Terms apply to every engagement between Vertexa Digitals and a Client, whether initiated through a signed proposal, a written agreement, or any other form of authorization to begin work. If you engage us on behalf of a company or other entity, you represent that you have the authority to bind that entity to these Terms. If any specific written agreement between you and Vertexa Digitals conflicts with these Terms, the specific agreement will govern for that engagement.",
      ],
    },
    {
      heading: "Services Description",
      paragraphs: [
        "Vertexa Digitals provides digital services across six core disciplines: web development, mobile app development, search engine optimization, performance marketing, branding and design, and content and social media marketing. The specific scope, deliverables, timeline, and pricing for any engagement will be defined in a separate proposal or statement of work, which is incorporated into these Terms by reference.",
        "We reserve the right to decline any project that falls outside our expertise or that we determine, in good faith, we cannot deliver to our own standards. Acceptance of an engagement does not obligate us to accept future engagements from the same Client on the same terms.",
      ],
    },
    {
      heading: "Client Responsibilities",
      paragraphs: [
        "To deliver our Services effectively, we depend on timely and accurate cooperation from the Client, including:",
      ],
      list: [
        "Providing accurate information about your business, goals, and requirements",
        "Responding to requests for feedback, approvals, and materials within agreed timeframes",
        "Providing timely access to necessary accounts, platforms, content, and credentials",
        "Making payments according to the agreed schedule",
        "Designating a primary point of contact with authority to approve decisions on the Client's behalf",
      ],
      closingParagraph:
        "Delays in providing feedback, materials, or access may result in corresponding delays to project timelines and milestones, for which Vertexa Digitals is not responsible.",
    },
    {
      heading: "Scope of Work and Change Requests",
      paragraphs: [
        "Each engagement begins with an agreed scope of work outlining deliverables, timeline, and pricing. Work outside this scope — including additional features, revisions beyond an agreed number of rounds, or new requirements introduced after work has begun — constitutes a change request.",
        "Change requests will be evaluated for impact on timeline and cost, and we will provide an estimate before proceeding. Significant change requests may require a revised proposal or additional fees, agreed upon in writing before work continues on the affected portion of the project.",
      ],
    },
    {
      heading: "Payment Terms",
      paragraphs: [
        "Unless otherwise specified in a signed proposal, the following payment terms apply:",
      ],
      list: [
        "All pricing is quoted in United States Dollars (USD) by default for international clients",
        "Accepted payment methods include international wire transfer, Wise, and Skydo, or other methods specified in your proposal",
        "Project-based engagements typically require a deposit before work begins, with remaining payments tied to project milestones",
        "Retainer-based engagements are billed monthly in advance",
        "Invoices are due within 14 days of issuance unless otherwise agreed in writing",
        "Late payments may incur a late fee and may result in a pause of active work until the account is brought current",
      ],
    },
    {
      heading: "Intellectual Property",
      paragraphs: [
        "Upon full payment for a project, the Client owns the final deliverables created specifically for that project, including custom code, designs, and content produced under the engagement, except as noted below.",
        "Vertexa Digitals retains ownership of any pre-existing tools, frameworks, templates, or proprietary processes used in delivering the work; any third-party software, plugins, or licensed assets incorporated into deliverables, which remain subject to their own licensing terms; and the right to display completed work in our portfolio and case studies, unless the Client requests confidentiality in writing prior to project completion.",
      ],
    },
    {
      heading: "Confidentiality",
      paragraphs: [
        "Both parties agree to keep confidential any non-public business, technical, or financial information shared during the course of an engagement, and to use such information solely for the purposes of the engagement. This obligation survives the termination of any engagement and continues for a reasonable period afterward.",
        "Confidentiality obligations do not apply to information that is or becomes publicly available through no fault of the receiving party, or that is required to be disclosed by law or a valid legal process.",
      ],
    },
    {
      heading: "Warranties and Disclaimers",
      paragraphs: [
        "We warrant that our Services will be performed in a professional and competent manner consistent with industry standards. However, we do not guarantee specific business outcomes, including but not limited to search engine rankings, conversion rates, advertising performance, or revenue results, as these depend on factors outside our control, including market conditions, platform algorithm changes, and Client execution of recommendations.",
        "Except as expressly stated in these Terms or a signed proposal, our Services are provided \"as is\" without warranties of any kind, whether express or implied, including warranties of merchantability or fitness for a particular purpose.",
      ],
    },
    {
      heading: "Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by applicable law, Vertexa Digitals' total liability for any claim arising from or related to an engagement will not exceed the total fees paid by the Client for the specific Service giving rise to the claim in the preceding three months.",
        "In no event will Vertexa Digitals be liable for indirect, incidental, consequential, or punitive damages, including loss of profits, loss of data, or business interruption, even if advised of the possibility of such damages in advance.",
      ],
    },
    {
      heading: "Indemnification",
      paragraphs: [
        "The Client agrees to indemnify and hold Vertexa Digitals harmless from any claims, damages, or expenses arising from the Client's breach of these Terms, the Client's provision of inaccurate information or unauthorized materials (including content, images, or trademarks the Client does not have rights to use), or the Client's misuse of deliverables provided by Vertexa Digitals.",
      ],
    },
    {
      heading: "Independent Contractor Relationship",
      paragraphs: [
        "Vertexa Digitals is an independent contractor in its relationship with each Client, not an employee, agent, partner, or joint venturer. Nothing in these Terms creates an employment, partnership, or agency relationship between the parties, and neither party has the authority to bind the other to any third-party obligation without prior written consent.",
      ],
    },
    {
      heading: "Non-Solicitation",
      paragraphs: [
        "During an engagement and for 12 months afterward, the Client agrees not to directly solicit for hire any Vertexa Digitals team member who worked on the Client's project, without our prior written consent. This provision exists to protect the team and working relationships that make our model possible, not to restrict normal hiring outside that specific context.",
      ],
    },
    {
      heading: "Assignment",
      paragraphs: [
        "Neither party may assign or transfer its rights or obligations under these Terms without the prior written consent of the other party, except that Vertexa Digitals may assign these Terms in connection with a merger, acquisition, or sale of substantially all of its business, provided the assignee agrees to honor the terms of any active engagement.",
      ],
    },
    {
      heading: "Notices",
      paragraphs: [
        "Any formal notice required under these Terms must be sent in writing to the email address associated with the Client's engagement, or to info@vertexadigitals.com for notices to Vertexa Digitals. Notices are considered received on the next business day after being sent, unless the sending party receives an indication of delivery failure.",
      ],
    },
    {
      heading: "Force Majeure",
      paragraphs: [
        "Neither party will be liable for delays or failures in performance resulting from circumstances reasonably beyond its control, including natural disasters, internet or infrastructure outages, government action, or other events of similar nature. The affected party will notify the other as soon as reasonably possible and use reasonable efforts to resume performance promptly once the circumstance has passed.",
      ],
    },
    {
      heading: "Termination",
      paragraphs: [
        "Either party may terminate an ongoing engagement with 30 days' written notice for retainer-based services, or as specified in the relevant proposal for project-based engagements. Upon termination, the Client is responsible for payment of all fees for work completed and expenses incurred up to the termination date.",
        "Vertexa Digitals reserves the right to suspend or terminate Services immediately in the event of non-payment or a material breach of these Terms by the Client that remains uncured after written notice.",
      ],
    },
    {
      heading: "Dispute Resolution",
      paragraphs: [
        "These Terms are governed by the laws of India. Any dispute arising from or relating to these Terms or an engagement with Vertexa Digitals will first be addressed through good-faith negotiation between the parties.",
        "If a resolution cannot be reached within 30 days, the dispute will be resolved through binding arbitration conducted in Udaipur, Rajasthan, India, in accordance with the Arbitration and Conciliation Act, with proceedings conducted in English. This clause does not prevent either party from seeking injunctive relief in a court of competent jurisdiction where legally necessary to prevent irreparable harm.",
      ],
    },
    {
      heading: "Severability and Entire Agreement",
      paragraphs: [
        "If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will continue in full force and effect.",
        "These Terms, together with any signed proposal or statement of work, constitute the entire agreement between the Client and Vertexa Digitals regarding the Services, and supersede any prior agreements or understandings, whether written or oral, relating to the same subject matter.",
      ],
    },
    {
      heading: "Modifications to Terms",
      paragraphs: [
        "We may revise these Terms from time to time to reflect changes in our practices or legal requirements. Material changes will be communicated to active clients, and the updated Terms will apply to engagements entered into after the effective date of the change. Continued engagement of our Services after changes take effect constitutes acceptance of the revised Terms.",
      ],
    },
    {
      heading: "Limitation Period for Claims",
      paragraphs: [
        "Any claim arising out of or related to an engagement with Vertexa Digitals must be brought within one year after the claim first arose, regardless of any statute of limitations that might otherwise apply, except where applicable law prohibits such a limitation. This provision is intended to encourage prompt resolution of disputes while the relevant facts and context are still fresh for both parties.",
      ],
    },
    {
      heading: "Headings and Interpretation",
      paragraphs: [
        "Section headings in these Terms are included for convenience only and do not affect the interpretation of any provision. Where the context requires, the singular includes the plural and references to one gender include all genders. These Terms have been negotiated by both parties and will not be construed against either party solely because that party drafted them.",
      ],
    },
    {
      heading: "Waiver",
      paragraphs: [
        "No failure or delay by either party in exercising any right under these Terms will operate as a waiver of that right, and no single or partial exercise of any right will preclude any other or further exercise of it. Any waiver must be made in writing and signed by the party granting it to be effective.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "Questions about these Terms can be directed to info@vertexadigitals.com. We're happy to clarify any provision before you engage our Services, and we'd rather answer a question upfront than leave room for a misunderstanding later.",
      ],
    },
  ],
};
