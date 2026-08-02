import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { ScrollEffects, SiteBreadcrumbs, SiteHeader } from "./site";
import "./globals.css";

const namiBrandFont = localFont({
  src: "../public/fonts/quicksand/Quicksand-VariableFont_wght.ttf",
  display: "swap",
  preload: true,
  variable: "--font-namios",
  weight: "300 700"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://namios.com"),
  title: {
    default: "NamiOS | Modern hotel operating platform",
    template: "%s | NamiOS"
  },
  description:
    "NamiOS is a modern Hotel OS for independent hotels, villas, resorts, and restaurants with PMS, POS, direct bookings, billing, automation, and Sri Lanka-ready operations.",
  keywords: [
    "hotel OS",
    "hotel management software Sri Lanka",
    "PMS software",
    "restaurant POS",
    "direct booking engine",
    "tourist police hotel reporting",
    "NamiOS"
  ],
  openGraph: {
    title: "NamiOS | Every part of your property, moving together",
    description:
      "Run stays, dining, guest records, deposits, invoices, OTA import, and compliance from one elegant Hotel OS.",
    url: "https://namios.com",
    siteName: "NamiOS",
    images: [{ url: "/brand/nami-logo.svg", width: 485, height: 474 }],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: "/brand/nami-mark.svg",
    shortcut: "/brand/nami-mark.svg",
    apple: "/brand/nami-apple-touch-icon.png"
  }
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${namiBrandFont.className} ${namiBrandFont.variable}`}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <ScrollEffects />
        <SiteHeader />
        <SiteBreadcrumbs />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <footer className="footer">
          <div className="container footer-grid">
            <div className="footer-brand">
              <Image src="/brand/nami-logo-teal.svg" alt="NamiOS" width={120} height={117} />
              <p>A research-led hospitality operating platform proudly developed and powered by DesignNetrix in Sri Lanka.</p>
            </div>
            <div className="footer-links">
              <div>
                <strong>Platform</strong>
                <Link href="/products">Products</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/benefits">Benefits</Link>
              </div>
              <div>
                <strong>Company</strong>
                <Link href="/about">About</Link>
                <Link href="/qa">Market gaps</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/offers">Book a demo</Link>
              </div>
              <div>
                <strong>Legal</strong>
                <Link href="/privacy">Privacy policy</Link>
                <Link href="/terms">Terms & conditions</Link>
                <a href="https://www.designnetrix.com/" target="_blank" rel="noreferrer">DesignNetrix ↗</a>
              </div>
            </div>
          </div>
          <div className="container footer-base">
            <span>© 2026 NamiOS · A DesignNetrix product</span>
            <span>Researched and engineered in Sri Lanka</span>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
