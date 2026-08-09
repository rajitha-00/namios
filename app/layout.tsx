import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { ScrollEffects, SiteBreadcrumbs, SiteHeader, WhatsAppWidget } from "./site";
import "./globals.css";

const namiBrandFont = localFont({
  src: "../public/fonts/quicksand/Quicksand-VariableFont_wght.ttf",
  display: "swap",
  preload: true,
  variable: "--font-namios",
  weight: "300 700"
});

// ─── Viewport (separate from Metadata in Next.js 15+) ─────────────────────
export const viewport: Viewport = {
  themeColor: "#2aa6a1",
  width: "device-width",
  initialScale: 1
};

// ─── Global / Fallback Metadata ────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://namios.io"),

  title: {
    default: "NamiOS | Hotel Management Software Sri Lanka — PMS, POS & Direct Bookings",
    template: "%s | NamiOS — Hotel OS Sri Lanka"
  },

  description:
    "NamiOS is Sri Lanka's leading hotel management software. PMS, restaurant POS, direct booking engine, Tourist Police sync, trilingual UI (Sinhala, Tamil, English), and deposit locks — starting LKR 6,999/month.",

  keywords: [
    "hotel management software Sri Lanka",
    "hotel PMS Sri Lanka",
    "NamiOS",
    "hotel operating system Sri Lanka",
    "boutique hotel software Sri Lanka",
    "villa management system Sri Lanka",
    "tourist police hotel reporting software",
    "direct booking hotel software",
    "Sri Lankan hotel POS system",
    "restaurant POS Sri Lanka",
    "hotel software Colombo",
    "guesthouse management software Sri Lanka",
    "resort management system Sri Lanka",
    "hotel front desk software",
    "LKR hotel billing software"
  ],

  authors: [{ name: "DesignNetrix", url: "https://www.designnetrix.com/" }],
  creator: "DesignNetrix",
  publisher: "DesignNetrix",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },

  alternates: {
    canonical: "https://namios.io",
    languages: {
      "en-LK": "https://namios.io",
      "en": "https://namios.io"
    }
  },

  openGraph: {
    title: "NamiOS | Hotel Management Software Sri Lanka",
    description:
      "Sri Lanka's modern Hotel OS — PMS, POS, direct bookings, Tourist Police compliance, trilingual UI, and deposit locks for independent hotels, villas and resorts. From LKR 6,999/month.",
    url: "https://namios.io",
    siteName: "NamiOS",
    images: [
      {
        url: "/og/og-home.png",
        width: 1200,
        height: 630,
        alt: "NamiOS — Hotel Management Software for Sri Lanka"
      }
    ],
    locale: "en_LK",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "NamiOS | Hotel Management Software Sri Lanka",
    description:
      "PMS, POS, direct bookings, Tourist Police sync & trilingual UI for Sri Lankan hotels, villas & resorts. Start free for 1 month.",
    images: ["/og/og-home.png"]
  },

  icons: {
    icon: "/brand/nami-mark.svg",
    shortcut: "/brand/nami-mark.svg",
    apple: "/brand/nami-apple-touch-icon.png"
  },

  // Verification tokens — fill in after GSC/Bing verification
  verification: {
    google: "REPLACE_WITH_GOOGLE_SITE_VERIFICATION_TOKEN",
    // bing: "REPLACE_WITH_BING_VERIFICATION_TOKEN",
  },

  other: {
    "geo.region": "LK",
    "geo.placename": "Sri Lanka",
    "geo.position": "7.8731;80.7718",
    "ICBM": "7.8731, 80.7718"
  }
};

// ─── Global Organisation + Website Schema ─────────────────────────────────
const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://namios.io/#organization",
      name: "NamiOS",
      url: "https://namios.io",
      logo: {
        "@type": "ImageObject",
        url: "https://namios.io/brand/nami-logo.svg",
        width: 485,
        height: 474
      },
      description:
        "NamiOS is a modern hotel operating system for independent hotels, villas, guesthouses, resorts, and restaurants in Sri Lanka, built by DesignNetrix.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+94-70-714-0146",
        contactType: "customer service",
        email: "hello@namios.io",
        availableLanguage: ["English", "Sinhala", "Tamil"],
        areaServed: "LK"
      },
      sameAs: [
        "https://www.designnetrix.com/",
        "https://www.linkedin.com/company/designnetrix",
        "https://www.facebook.com/namios"
      ],
      parentOrganization: {
        "@type": "Organization",
        name: "DesignNetrix",
        url: "https://www.designnetrix.com/"
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "LK",
        addressLocality: "Colombo"
      },
      foundingLocation: {
        "@type": "Place",
        name: "Colombo, Sri Lanka"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://namios.io/#website",
      url: "https://namios.io",
      name: "NamiOS",
      description: "Hotel Management Software for Sri Lanka",
      publisher: { "@id": "https://namios.io/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://namios.io/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      inLanguage: ["en", "si", "ta"]
    }
  ]
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="me" href="mailto:hello@namios.io" />
      </head>
      <body className={`${namiBrandFont.className} ${namiBrandFont.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
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
                <Link href="/offers">Offers</Link>
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
                <Link href="/terms">Terms &amp; conditions</Link>
                <a href="https://www.designnetrix.com/" target="_blank" rel="noreferrer">DesignNetrix ↗</a>
              </div>
            </div>
          </div>
          <div className="container footer-base">
            <span>© 2026 NamiOS · A DesignNetrix product</span>
            <span>Researched and engineered in Sri Lanka</span>
          </div>
        </footer>
        <WhatsAppWidget />
      </body>
    </html>
  );
};

export default RootLayout;
