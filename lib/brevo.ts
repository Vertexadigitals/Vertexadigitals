import { BrevoClient, BrevoError } from "@getbrevo/brevo";

import { siteConfig } from "@/lib/site-config";
import { renderLeadNotificationEmail } from "@/lib/email-templates/lead-notification";
import { renderAuditNotificationEmail } from "@/lib/email-templates/audit-notification";

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

// ─── Audit Tool Lead Capture ──────────────────────────────────────────────────

export interface AuditLeadData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone: string;
  websiteUrl: string;
  overallGrade: string;
  overallScore: number;
  performanceScore: number;
  seoScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
}

export async function submitAuditLead(data: AuditLeadData): Promise<void> {
  const attributes = {
    FIRSTNAME: data.firstName,
    LASTNAME: data.lastName,
    COMPANY: data.company ?? "",
    PHONE_NUMBER: data.phone,
    // Audit-specific attributes (create these custom fields in Brevo if not present)
    AUDIT_URL: data.websiteUrl,
    AUDIT_GRADE: data.overallGrade,
    AUDIT_SCORE: data.overallScore,
    AUDIT_PERFORMANCE: data.performanceScore,
    AUDIT_SEO: data.seoScore,
    AUDIT_ACCESSIBILITY: data.accessibilityScore,
    AUDIT_BEST_PRACTICES: data.bestPracticesScore,
    AUDIT_DATE: new Date().toISOString().split("T")[0], // YYYY-MM-DD
    LEAD_TYPE: "audit_lead",
    SUBMISSION_SOURCE: "Website Audit Tool",
  };

  try {
    await brevo.contacts.createContact({
      email: data.email,
      updateEnabled: true,
      attributes,
    });
  } catch (error) {
    console.error("[Brevo Audit Contact Create Error]", error);
    try {
      await brevo.contacts.updateContact({
        identifier: data.email,
        attributes,
      });
    } catch (updateError) {
      console.error("[Brevo Audit Contact Update Error]", updateError);
    }
  }

  try {
    await brevo.contacts.addContactToList({
      listId: VERTEXA_WEBSITE_LEADS_LIST_ID,
      body: { emails: [data.email] },
    });
  } catch (error) {
    const alreadyInList =
      error instanceof BrevoError &&
      error.statusCode === 400 &&
      typeof (error.body as { message?: string } | undefined)?.message === "string" &&
      (error.body as { message: string }).message.toLowerCase().includes("already");
    if (!alreadyInList) {
      console.error("[Brevo Audit Add To List Error]", error);
    }
  }
}

export async function sendAuditNotificationEmail(data: AuditLeadData): Promise<void> {
  try {
    await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        email: siteConfig.contact.email,
        name: "Vertexa Digitals Website",
      },
      to: [{ email: siteConfig.contact.email }],
      subject: `New Audit Lead: ${data.firstName} ${data.lastName} — ${data.websiteUrl} (Grade ${data.overallGrade})`,
      htmlContent: renderAuditNotificationEmail(data),
    });
  } catch (error) {
    console.error("[Brevo Audit Email Error]", error);
  }
}

export interface AuditConfirmationEmailData {
  firstName: string;
  email: string;
  websiteUrl: string;
  overallGrade: string;
  overallScore: number;
  performanceScore: number;
  seoScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
}

function scoreColor(score: number): string {
  if (score >= 90) return "#16a34a";
  if (score >= 70) return "#ca8a04";
  if (score >= 50) return "#ea580c";
  return "#dc2626";
}

function gradeColor(grade: string): string {
  const map: Record<string, string> = {
    A: "#16a34a", B: "#65a30d", C: "#ca8a04", D: "#ea580c", F: "#dc2626",
  };
  return map[grade] ?? "#737373";
}

export async function sendAuditConfirmationEmail(data: AuditConfirmationEmailData): Promise<void> {
  const scoreRow = (label: string, score: number) =>
    `<tr>
      <td style="padding:10px 0;border-bottom:1px solid #f5f5f5;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#737373;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #f5f5f5;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:${scoreColor(score)};text-align:right;">${score}/100</td>
    </tr>`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><title>Your Website Audit Report</title></head>
<body style="margin:0;padding:0;background-color:#f5f5f5;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;">

        <!-- Header -->
        <tr>
          <td style="background-color:#171717;padding:28px 32px;">
            <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:20px;color:#ffffff;font-weight:500;">Your Website Audit Report</p>
            <p style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#a3a3a3;">Vertexa Digitals · Free Performance Audit</p>
          </td>
        </tr>

        <!-- Grade banner -->
        <tr>
          <td style="padding:28px 32px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e5e5;border-radius:10px;overflow:hidden;">
              <tr>
                <td style="padding:20px 24px;background-color:#fafafa;border-right:1px solid #e5e5e5;text-align:center;width:120px;">
                  <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#a3a3a3;text-transform:uppercase;letter-spacing:0.08em;">Grade</p>
                  <p style="margin:6px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:48px;font-weight:700;color:${gradeColor(data.overallGrade)};line-height:1;">${data.overallGrade}</p>
                </td>
                <td style="padding:20px 24px;">
                  <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#a3a3a3;text-transform:uppercase;letter-spacing:0.08em;">Overall Score</p>
                  <p style="margin:4px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:32px;font-weight:700;color:${scoreColor(data.overallScore)};line-height:1;">${data.overallScore}<span style="font-size:16px;font-weight:400;color:#a3a3a3;">/100</span></p>
                  <p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#737373;">${data.websiteUrl}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Score breakdown -->
        <tr>
          <td style="padding:24px 32px 0;">
            <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#a3a3a3;text-transform:uppercase;letter-spacing:0.08em;">Score Breakdown</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              ${scoreRow("Performance", data.performanceScore)}
              ${scoreRow("SEO", data.seoScore)}
              ${scoreRow("Accessibility", data.accessibilityScore)}
              ${scoreRow("Best Practices", data.bestPracticesScore)}
            </table>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:24px 32px 32px;">
            <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#171717;line-height:1.6;">Hi ${data.firstName},</p>
            <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#525252;line-height:1.6;">
              Your free website audit is complete. The scores above are pulled directly from Google PageSpeed Insights and reflect how your site performs for real users on mobile.
            </p>
            <p style="margin:0 0 24px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#525252;line-height:1.6;">
              Our team can implement every improvement and get you to 90+ — with measurable results. If you'd like a walkthrough of the findings, we're happy to jump on a call.
            </p>
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-radius:8px;background-color:#171717;">
                  <a href="https://vertexadigitals.com/contact" style="display:inline-block;padding:14px 28px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:0.02em;">
                    Get a Free Improvement Plan
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px;background-color:#fafafa;border-top:1px solid #e5e5e5;">
            <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#a3a3a3;">
              Generated by vertexadigitals.com/audit · Powered by Google PageSpeed Insights · You received this because you requested a free audit.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  try {
    await brevo.transactionalEmails.sendTransacEmail({
      sender: { email: siteConfig.contact.email, name: "Vertexa Digitals" },
      to: [{ email: data.email, name: data.firstName }],
      subject: `Your Website Audit Report — Grade ${data.overallGrade} (${data.overallScore}/100)`,
      htmlContent: html,
    });
  } catch (error) {
    console.error("[Brevo Audit Confirmation Email Error]", error);
  }
}
