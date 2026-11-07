import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { siteGraph } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Preloader } from "@/components/preloader";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Chef Mani Bista | Private Chef in Kathmandu & Nepal",
    template: "%s | Chef Mani Bista",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Chef Mani Bista", url: siteConfig.url }],
  creator: "Chef Mani Bista",
  publisher: "Chef Mani Bista",
  category: "food",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Chef Mani Bista | Private Chef in Kathmandu & Nepal",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    images: [
      {
        url: "/og/chef-mani-bista.jpg",
        width: 1200,
        height: 630,
        alt: "Chef Mani Bista — private chef in Kathmandu, Nepal, and India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chef Mani Bista | Private Chef in Kathmandu & Nepal",
    description: siteConfig.description,
    images: ["/og/chef-mani-bista.jpg"],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodoni.variable} ${manrope.variable} ${plex.variable}`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll />
        <Preloader />
        <ScrollReveal />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
        <JsonLd data={siteGraph()} />
      </body>
    </html>
  );
}
