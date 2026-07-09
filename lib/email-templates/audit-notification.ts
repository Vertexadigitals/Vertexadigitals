import type { AuditLeadData } from "@/lib/brevo";

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #e5e5e5;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#737373;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;width:160px;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:14px 0;border-bottom:1px solid #e5e5e5;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#171717;vertical-align:top;">
        ${value}
      </td>
    </tr>`;
}

function scoreCell(label: string, score: number) {
  const color = score >= 90 ? "#16a34a" : score >= 70 ? "#ca8a04" : "#dc2626";
  return `<td style="padding:12px 16px;text-align:center;">
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#737373;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">${escapeHtml(label)}</div>
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:24px;font-weight:700;color:${color};">${score}</div>
  </td>`;
}

export function renderAuditNotificationEmail(data: AuditLeadData): string {
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  });

  const gradeColor =
    data.overallGrade === "A"
      ? "#16a34a"
      : data.overallGrade === "B"
        ? "#65a30d"
        : data.overallGrade === "C"
          ? "#ca8a04"
          : data.overallGrade === "D"
            ? "#ea580c"
            : "#dc2626";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><title>New Audit Lead</title></head>
<body style="margin:0;padding:0;background-color:#f5f5f5;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="background-color:#171717;padding:28px 32px;">
            <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:20px;color:#ffffff;font-weight:500;">New Audit Lead</p>
            <p style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#a3a3a3;">Website Audit Tool</p>
          </td>
        </tr>

        <tr>
          <td style="padding:24px 32px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e5e5;border-radius:8px;">
              <tr>
                <td style="padding:16px;text-align:center;border-right:1px solid #e5e5e5;">
                  <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#737373;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Overall Grade</div>
                  <div style="font-family:Georgia,serif;font-size:40px;font-weight:700;color:${gradeColor};">${escapeHtml(data.overallGrade)}</div>
                </td>
                ${scoreCell("Performance", data.performanceScore)}
                ${scoreCell("SEO", data.seoScore)}
                ${scoreCell("Accessibility", data.accessibilityScore)}
                ${scoreCell("Best Practices", data.bestPracticesScore)}
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:24px 32px 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              ${row("Name", escapeHtml(`${data.firstName} ${data.lastName}`))}
              ${row("Email", `<a href="mailto:${escapeHtml(data.email)}" style="color:#171717;text-decoration:underline;">${escapeHtml(data.email)}</a>`)}
              ${row("Company", escapeHtml(data.company || "Not provided"))}
              ${row("Phone", escapeHtml(data.phone))}
              ${row("Website Audited", `<a href="${escapeHtml(data.websiteUrl)}" style="color:#171717;text-decoration:underline;">${escapeHtml(data.websiteUrl)}</a>`)}
              ${row("Submitted", escapeHtml(submittedAt + " UTC"))}
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:20px 32px;background-color:#fafafa;border-top:1px solid #e5e5e5;">
            <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#a3a3a3;">
              Captured from vertexadigitals.com/audit
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
