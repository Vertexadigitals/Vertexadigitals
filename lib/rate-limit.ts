const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

const requestCounts = new Map<string, { count: number; resetAt: number }>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = requestCounts.get(ip);

  if (!entry || now > entry.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS_PER_WINDOW;
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

// ─── Audit-specific rate limiters ────────────────────────────────────────────
// 5 requests per IP per hour
const AUDIT_IP_WINDOW_MS = 60 * 60 * 1000;
const AUDIT_IP_MAX = 5;
// 3 requests per email address per 24 hours
const AUDIT_EMAIL_WINDOW_MS = 24 * 60 * 60 * 1000;
const AUDIT_EMAIL_MAX = 3;

const auditIpCounts = new Map<string, { count: number; resetAt: number }>();
const auditEmailCounts = new Map<string, { count: number; resetAt: number }>();

function checkLimit(
  map: Map<string, { count: number; resetAt: number }>,
  key: string,
  windowMs: number,
  max: number
): boolean {
  const now = Date.now();
  const entry = map.get(key);
  if (!entry || now > entry.resetAt) {
    map.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }
  entry.count += 1;
  return entry.count > max;
}

export function isAuditIpRateLimited(ip: string): boolean {
  return checkLimit(auditIpCounts, ip, AUDIT_IP_WINDOW_MS, AUDIT_IP_MAX);
}

export function isAuditEmailRateLimited(email: string): boolean {
  return checkLimit(auditEmailCounts, email.toLowerCase(), AUDIT_EMAIL_WINDOW_MS, AUDIT_EMAIL_MAX);
}
