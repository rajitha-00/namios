import type { Metadata } from "next";
import { BenefitsGrid, CtaBand } from "../components";
import { PageHero } from "../site";

export const metadata: Metadata = {
  title: "Benefits",
  description: "See how NamiOS reduces manual hotel work, protects room revenue, supports Sri Lankan compliance, and connects property teams."
};

const operatingShifts = [
  ["Arrival", "Paper register and repeated passport entry", "A searchable guest profile ready before check-in"],
  ["Compliance", "Nightly retyping into separate police records", "Structured guest data and audit-ready exports"],
  ["Revenue", "Unpaid room holds and unclear booking status", "Deposit rules before a booking becomes confirmed"],
  ["Teams", "Calls, notebooks, and chat threads between departments", "One room and guest timeline shared across roles"]
];

export default function BenefitsPage() {
  return (
    <main>
      <PageHero
        eyebrow="From manual to coordinated"
        title="Less hotel admin. More attention for the guest."
        description="NamiOS removes the repeated work between booking, check-in, housekeeping, compliance, payment, and checkout so a small property team can operate with clarity."
        image="/brand/hero-courtyard-hotel.webp"
        alt="A calm boutique hotel courtyard prepared for guests"
        signals={["Faster arrivals", "Revenue protected earlier", "Teams share one timeline"]}
        secondaryHref="/products"
        secondaryLabel="Explore Nami Stay"
      />

      <section className="section-pad page-section reveal-section">
        <div className="container">
          <div className="page-section-head">
            <div><span className="eyebrow">Operating benefits</span><h2>Built for independent hotels, villas, and resorts.</h2></div>
            <p>Useful outcomes come from connecting ordinary daily tasks, not adding another dashboard for staff to maintain.</p>
          </div>
          <BenefitsGrid />
        </div>
      </section>

      <section className="section-pad page-section page-section-soft reveal-section">
        <div className="container">
          <div className="page-section-head">
            <div><span className="eyebrow">The operating shift</span><h2>Replace handoffs that depend on memory.</h2></div>
            <p>Every change begins with a familiar hotel problem and ends with a workflow the team can see and repeat.</p>
          </div>
          <div className="shift-list">
            <div className="shift-head"><span>Workflow</span><span>Before NamiOS</span><span>With NamiOS</span></div>
            {operatingShifts.map(([area, before, after]) => (
              <article key={area}><strong>{area}</strong><p>{before}</p><p>{after}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad local-proof-band reveal-section">
        <div className="container local-proof-grid">
          <div><span className="eyebrow light">Sri Lanka ready</span><h2>Local operations should not feel like custom workarounds.</h2></div>
          <div className="local-proof-points">
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
