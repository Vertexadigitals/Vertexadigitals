import type { LeadData } from "@/lib/brevo";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 14px 0; border-bottom: 1px solid #e5e5e5; font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #737373; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top; width: 160px;">
        ${escapeHtml(label)}
      </td>
      <td style="padding: 14px 0; border-bottom: 1px solid #e5e5e5; font-family: Arial, Helvetica, sans-serif; font-size: 15px; color: #171717; vertical-align: top;">
        ${value}
      </td>
    </tr>`;
}

export function renderLeadNotificationEmail(data: LeadData): string {
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Lead from Vertexa Digitals Website</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden;">
          <tr>
            <td style="background-color: #171717; padding: 28px 32px;">
              <p style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 20px; color: #ffffff; font-weight: 500;">
                New Lead from Vertexa Digitals Website
              </p>
              <p style="margin: 6px 0 0; font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #a3a3a3;">
                ${escapeHtml(data.submissionSource)}
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row("Name", escapeHtml(`${data.firstName} ${data.lastName}`))}
                ${row(
                  "Email",
                  `<a href="mailto:${escapeHtml(data.email)}" style="color: #171717; text-decoration: underline;">${escapeHtml(data.email)}</a>`
                )}
                ${row("Company", escapeHtml(data.company || "Not provided"))}
                ${row("Phone", escapeHtml(data.phone || "Not provided"))}
                ${row("Service Interested In", escapeHtml(data.service))}
                ${row("Budget Range", escapeHtml(data.budget || "Not specified"))}
                ${row("Reference Number", escapeHtml(data.referenceNumber))}
                ${row("Submitted", escapeHtml(submittedAt + " UTC"))}
              </table>

              <p style="margin: 24px 0 8px; font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #737373; text-transform: uppercase; letter-spacing: 0.05em;">
                Project Details
              </p>
              <div style="background-color: #f5f5f5; border-radius: 8px; padding: 16px 20px; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.6; color: #171717; white-space: pre-wrap;">
                ${escapeHtml(data.projectDetails)}
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding: 20px 32px; background-color: #fafafa; border-top: 1px solid #e5e5e5;">
              <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #a3a3a3;">
                This lead was captured from vertexadigitals.com
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
