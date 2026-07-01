import { NextResponse, type NextRequest } from "next/server";
import { siteConfig } from "@/lib/site-config";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/robots.txt") {
    const body = [
      "User-agent: *",
      "Allow: /",
      "Disallow: /api/",
      "Disallow: /admin/",
      "Disallow: /_next/",
      "",
      `Sitemap: ${siteConfig.url}/sitemap.xml`,
    ].join("\n");

    return new NextResponse(body, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    });
  }
}

export const config = {
  matcher: ["/robots.txt"],
};
