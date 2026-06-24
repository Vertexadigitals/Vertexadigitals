import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { QuoteCTA } from "@/components/sections/QuoteCTA";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { generateSeoMetadata } from "@/lib/seo";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...generateSeoMetadata({
    title: "Vertexa Digitals | Your Complete Digital Growth Partner",
    description:
      "We design, build, and scale digital experiences for ambitious brands across the US, UK, EU, and Australia. Web development, mobile apps, SEO, paid ads, branding, and content.",
    canonical: "/",
  }),
  // Overrides the plain string above with the template Next.js uses to
  // suffix every other page's <title> with " | Vertexa Digitals".
  title: {
    default: "Vertexa Digitals | Your Complete Digital Growth Partner",
    template: "%s | Vertexa Digitals",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={[getOrganizationSchema(), getWebsiteSchema()]} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <QuoteCTA />
        <Footer />
      </body>
    </html>
  );
}
