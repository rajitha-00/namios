import type { Metadata } from "next";
import Link from "next/link";
import { BenefitsGrid, CtaBand, FeatureMosaic, PricingCards, ProductGrid, QaList, StaySpotlight, TrustMarquee } from "./components";
import { AudienceRail, BeforeAfterExperience, IntegrationLandscape, OperatingJourney, PropertyHeroMedia } from "./home/components";

export const metadata: Metadata = {
  title: "NamiOS | The modern Hotel OS for Sri Lankan properties",
  description:
    "Replace paper guest books, manual Tourist Police reporting, unpaid room holds, OTA commission leakage, and fragmented hotel workflows with NamiOS."
};

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NamiOS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Hotel operating platform for PMS, POS, direct booking, invoicing, guest operations, and Sri Lanka-ready compliance workflows.",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "9900",
      priceCurrency: "LKR"
    }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="hero property-hero">
        <PropertyHeroMedia />
        <div className="container property-hero-layout">
          <div className="hero-copy">
            <span className="eyebrow">Formerly Hotel OS, now NamiOS</span>
            <h1>Every stay.<br />Moving as one.</h1>
            <p className="lead">
              The modern Hotel OS for Sri Lankan hotels, villas, guesthouses, and resorts. Run bookings, rooms, guests, housekeeping, deposits, invoices, OTA imports, and compliance from one calm workspace.
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
