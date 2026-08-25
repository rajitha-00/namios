import type { Metadata } from "next";
import Link from "next/link";
import { BenefitsGrid, CtaBand, FeatureMosaic, OffersGrid, PricingCards, ProductGrid, QaList, StaySpotlight, TrustMarquee } from "@/components";
import { AudienceRail, BeforeAfterExperience, IntegrationLandscape, OperatingJourney, PropertyHeroMedia } from "./home/components";

export const metadata: Metadata = {
  title: "Hotel Management Software Sri Lanka — PMS, POS & Direct Bookings | NamiOS",
  description:
    "NamiOS is Sri Lanka's #1 hotel management software. PMS, restaurant POS, Tourist Police sync, trilingual UI (Sinhala, Tamil, English), deposit locks, and 0% commission direct bookings. Start free for 1 month from LKR 6,999.",
  keywords: [
    "hotel management software Sri Lanka",
    "best hotel PMS Sri Lanka",
    "hotel software for small hotels Sri Lanka",
    "boutique villa management system Sri Lanka",
    "tourist police sync hotel software",
    "hotel direct booking engine Sri Lanka",
    "NamiOS hotel operating system",
    "hotel front desk software Colombo",
    "Sri Lankan resort management software",
    "LKR hotel billing software",
    "Sinhala Tamil English hotel software",
    "hotel POS system Sri Lanka",
    "independent hotel software Sri Lanka",
    "guesthouse management system Sri Lanka",
    "OTA import hotel software Sri Lanka"
  ],
  alternates: {
    canonical: "https://namios.io"
  },
  openGraph: {
    title: "Hotel Management Software Sri Lanka — NamiOS",
    description:
      "Sri Lanka's leading NamiOS. PMS, POS, Tourist Police sync, direct bookings, and trilingual UI for independent hotels, villas & resorts. From LKR 6,999/month.",
    url: "https://namios.io",
    images: [{ url: "/og/og-home.png", width: 1200, height: 630, alt: "NamiOS Hotel Management Software Sri Lanka" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Management Software Sri Lanka — NamiOS",
    description: "PMS, POS, Tourist Police sync, and trilingual NamiOS for Sri Lanka. Start free for 1 month.",
    images: ["/og/og-home.png"]
  }
};

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://namios.io/#software",
        name: "NamiOS",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Hotel Management Software",
        operatingSystem: "Web, iOS, Android",
        url: "https://namios.io",
        description:
          "NamiOS is a cloud-based hotel operating system for independent hotels, boutique villas, guesthouses, resorts, and restaurants in Sri Lanka. Features include PMS, POS, Tourist Police sync, direct booking engine, housekeeping Kanban, RBAC, and trilingual UI in Sinhala, Tamil, and English.",
        screenshot: "https://namios.io/og/og-home.png",
        featureList: [
          "Property Management System (PMS)",
          "Restaurant Point of Sale (POS)",
          "Tourist Police Google Sheets sync",
          "Direct booking engine (0% commission)",
          "Housekeeping Kanban board",
          "Deposit lock system",
          "Trilingual UI — Sinhala, Tamil, English",
          "Role-based access control (RBAC)",
          "OTA import from Booking.com and Agoda",
          "LKR billing with VAT, SSCL, and service charge"
        ],
        audience: {
          "@type": "Audience",
          audienceType: "Independent hotel owners, boutique villa operators, guesthouse managers, resort operators, restaurant owners in Sri Lanka"
        },
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "6999",
          highPrice: "29999",
          priceCurrency: "LKR",
          offerCount: 4,
          offers: [
            { "@type": "Offer", name: "Launch", price: "6999", priceCurrency: "LKR" },
            { "@type": "Offer", name: "Standard", price: "9900", priceCurrency: "LKR" },
            { "@type": "Offer", name: "Standard + AI", price: "17999", priceCurrency: "LKR" },
            { "@type": "Offer", name: "Pro", price: "29999", priceCurrency: "LKR" }
          ]
        },
        provider: { "@id": "https://namios.io/#organization" },
        inLanguage: ["en", "si", "ta"],
        availableLanguage: [
          { "@type": "Language", name: "English" },
          { "@type": "Language", name: "Sinhala" },
          { "@type": "Language", name: "Tamil" }
        ],
        areaServed: {
          "@type": "Country",
          name: "Sri Lanka"
        }
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="hero property-hero">
        <PropertyHeroMedia />
        <div className="container property-hero-layout">
          <div className="hero-copy">
            <span className="eyebrow">Formerly NamiOS, now NamiOS</span>
            <h1>Every stay.<br />Moving as one.</h1>
            <p className="lead">
              The modern NamiOS for Sri Lankan hotels, villas, guesthouses, and resorts. Run bookings, rooms, guests, housekeeping, deposits, invoices, OTA imports, and compliance from one calm workspace.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/offers">
                Book a live demo
              </Link>
              <Link className="button secondary" href="/products">
                Explore Nami Stay
              </Link>
            </div>
            <div className="proof-strip">
              <div className="proof-item"><strong>90%</strong><span>faster check-in workflow</span></div>
              <div className="proof-item"><strong>0%</strong><span>fake bookings after deposit lock</span></div>
              <div className="proof-item"><strong>15+ hrs</strong><span>monthly admin time recovered</span></div>
            </div>
          </div>
        </div>
      </section>
      <TrustMarquee />
      <BeforeAfterExperience />
      <section id="platform" className="section-pad platform-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">The NamiOS platform</span>
              <h2>One operating system. Every part of the property.</h2>
            </div>
            <p>Nami Stay runs the guest journey. Nami Dine connects food and beverage. Control gives owners and groups the visibility to lead.</p>
          </div>
          <ProductGrid />
        </div>
      </section>
      <StaySpotlight />
      <OperatingJourney />
      <section className="section-pad band">
        <div className="container section-head">
          <div>
            <span className="eyebrow light">The operating outcome</span>
            <h2>Less chasing.<br />More hosting.</h2>
          </div>
          <p>Front desk knows the guest. Housekeeping knows the room. Kitchen knows the order. Owners know where revenue is moving and what needs attention.</p>
        </div>
      </section>
      <section id="benefits" className="section-pad benefits-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Benefits</span>
              <h2>Built for independent hotels, villas, and resorts.</h2>
            </div>
          </div>
          <BenefitsGrid />
        </div>
      </section>
      <section className="section-pad mosaic-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Feature depth</span>
              <h2>Designed around the front desk moments that decide the guest experience.</h2>
            </div>
          </div>
          <FeatureMosaic />
        </div>
      </section>
      <AudienceRail />
      <IntegrationLandscape />
      <section className="section-pad">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Pricing</span>
              <h2>Plans that grow with the property.</h2>
            </div>
          </div>
          <PricingCards />
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Launch offers</span>
              <h2>Exclusive setup &amp; onboarding bonuses.</h2>
            </div>
            <p>Every plan starts with a 30-day free trial. Unlock free booking website, onsite visits, and brand packages on annual plans.</p>
          </div>
          <OffersGrid />
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">QA</span>
              <h2>Fast, accessible, searchable.</h2>
            </div>
          </div>
          <QaList />
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
