import { BrevoClient, BrevoError } from "@getbrevo/brevo";

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
  const attributes = {
    FIRSTNAME: data.firstName,
    LASTNAME: data.lastName,
    COMPANY: data.company ?? "",
    PHONE_NUMBER: data.phone ?? "",
    SERVICE: data.service,
    BUDGET: data.budget ?? "",
    PROJECT_DETAILS: data.projectDetails,
    REFERENCE_NUMBER: data.referenceNumber,
    SUBMISSION_SOURCE: data.submissionSource,
  };

  // Step 1: create or update the contact WITHOUT listIds. Brevo treats a
  // createContact call that includes listIds as a silent import, which
  // does not emit the "contact added to list" event that automations
  // listen for. Keeping list membership out of this call is deliberate.
  try {
    await brevo.contacts.createContact({
      email: data.email,
      updateEnabled: true,
      attributes,
    });
  } catch (error) {
    console.error("[Brevo Contact Create Error]", error);
    try {
      await brevo.contacts.updateContact({
        identifier: data.email,
        attributes,
      });
    } catch (updateError) {
      console.error("[Brevo Contact Update Error]", updateError);
    }
  }

  // Step 2: add the contact to the list through the dedicated endpoint.
  // This call — not the listIds shortcut above — is what actually emits
  // the "added to list" event that triggers Brevo automations.
  try {
    await brevo.contacts.addContactToList({
      listId: VERTEXA_WEBSITE_LEADS_LIST_ID,
      body: { emails: [data.email] },
    });
  } catch (error) {
    // Brevo returns 400 "invalid_parameter" when the contact is already
    // on the list (e.g. a repeat submission from the same email) — that's
    // an expected outcome, not a failure, so it's not logged as an error.
    const alreadyInList =
      error instanceof BrevoError &&
      error.statusCode === 400 &&
      typeof (error.body as { message?: string } | undefined)?.message === "string" &&
      (error.body as { message: string }).message.toLowerCase().includes("already");

    if (!alreadyInList) {
      console.error("[Brevo Add To List Error]", error);
    }
  }
}
