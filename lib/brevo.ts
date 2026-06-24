import { BrevoClient } from "@getbrevo/brevo";

import { siteConfig } from "@/lib/site-config";
import { renderLeadNotificationEmail } from "@/lib/email-templates/lead-notification";

export const VERTEXA_WEBSITE_LEADS_LIST_ID = 6;

export interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  projectDetails: string;
  referenceNumber: string;
  submissionSource: "Contact Page" | "Quote CTA Popup";
}

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY ?? "",
});

export async function sendLeadNotificationEmail(data: LeadData): Promise<void> {
  try {
    await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        email: siteConfig.contact.email,
        name: "Vertexa Digitals Website",
      },
      to: [{ email: siteConfig.contact.email }],
      subject: `New Lead: ${data.firstName} ${data.lastName} - ${data.service}`,
      htmlContent: renderLeadNotificationEmail(data),
    });
  } catch (error) {
    console.error("[Brevo Email Error]", error);
  }
}

export async function addContactToBrevoList(data: LeadData): Promise<void> {
  try {
    await brevo.contacts.createContact({
      email: data.email,
      updateEnabled: true,
      listIds: [VERTEXA_WEBSITE_LEADS_LIST_ID],
      attributes: {
        FIRSTNAME: data.firstName,
        LASTNAME: data.lastName,
        COMPANY: data.company ?? "",
        PHONE_NUMBER: data.phone ?? "",
        SERVICE: data.service,
        BUDGET: data.budget ?? "",
        PROJECT_DETAILS: data.projectDetails,
        REFERENCE_NUMBER: data.referenceNumber,
        SUBMISSION_SOURCE: data.submissionSource,
      },
    });
  } catch (error) {
    console.error("[Brevo Contact Error]", error);
  }
}
