import { NextResponse } from "next/server";
import { z } from "zod";

import { addContactToBrevoList, sendLeadNotificationEmail } from "@/lib/brevo";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";

const contactRequestSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1),
  budget: z.string().optional(),
  details: z.string().min(20),
  referenceNumber: z.string().min(1),
});

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = contactRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data." },
      { status: 400 }
    );
  }

  const { details, ...rest } = parsed.data;
  const leadData = {
    ...rest,
    projectDetails: details,
    submissionSource: "Contact Page" as const,
  };

  await Promise.all([
    sendLeadNotificationEmail(leadData),
    addContactToBrevoList(leadData),
  ]);

  return NextResponse.json({ success: true });
}
