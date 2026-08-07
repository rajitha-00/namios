import type { Metadata } from "next";
import { PageHero } from "../site";
import { BenefitsSection } from "./components";
import { CtaBand } from "@/components";

export const metadata: Metadata = {
  title: "Benefits & Features",
  description: "Explore NamiOS capabilities: Multi-Language (Sinhala, Tamil, English), Tourist Police sync, Housekeeping Kanban, RBAC, and deposit locks."
};

export default function BenefitsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Engineered for Sri Lankan hospitality"
        title="Modern hotel operating features. Zero repetitive admin."
        description="NamiOS connects guest bookings, trilingual interfaces (Sinhala, Tamil, English), Tourist Police compliance, live housekeeping Kanban, role security (RBAC), and deposit locks into one unified platform."
        image="/brand/hero-courtyard-hotel.webp"
        alt="A calm boutique hotel courtyard prepared for guests"
        signals={["Trilingual i18n (Sinhala, Tamil, English)", "Tourist Police Google Sheet Sync", "Housekeeping Kanban & Deposit Locks"]}
        secondaryHref="/products"
        secondaryLabel="Explore Nami Stay"
      />

      <section className="section-pad page-section">
        <div className="container">
          <div className="page-section-head">
            <div>
              <span className="eyebrow">Platform Capabilities</span>
              <h2>Built for boutique hotels, villas, resorts, and restaurants.</h2>
            </div>
            <p>Every feature solves a real operational friction point—from check-in to compliance and revenue protection.</p>
          </div>

          <BenefitsSection />
        </div>
      </section>

      <section className="section-pad local-proof-band">
        <div className="container local-proof-grid">
          <div>
            <span className="eyebrow light">Sri Lanka ready</span>
            <h2>Local operations should not feel like custom workarounds.</h2>
          </div>
          <div className="local-proof-points">
            <span>Trilingual UI (Sinhala, Tamil, English)</span>
            <span>Tourist Police-ready records</span>
            <span>VAT, SSCL, and service charge setup</span>
            <span>LKR pricing and local payment workflows</span>
            <span>WhatsApp-ready guest documents</span>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
