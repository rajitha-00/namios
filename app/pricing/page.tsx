import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../site";
import { PricingPlans } from "./components";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Clear LKR pricing for NamiOS hotel management software with no commission on direct bookings and plans for independent Sri Lankan properties."
};

const pricingFaq = [
  ["Do you charge commission on direct bookings?", "No. NamiOS uses a clear subscription model. Revenue from your direct booking flow remains your property revenue; payment gateway charges may still apply."],
  ["Can a villa start with the Launch plan?", "Yes. Launch includes the core bookings, rooms, guests, housekeeping, folios, and invoices needed to move a small property online."],
  ["What is included in the one-month free trial?", "Your selected NamiOS applications are configured for a working trial. We use the month to validate your workflows before paid billing begins."],
  ["How does annual billing work?", "Annual plans are billed for 12 months upfront with a 10% discount. They also include a custom website connected to NamiOS for commission-free direct bookings."],
  ["What does Pro Annual include at launch?", "In addition to the annual discount and direct-booking website, Pro Annual includes a brand launch and social media starter package. The agreed deliverables and channels are confirmed during onboarding."],
  ["Which plans include AI?", "Standard + AI includes the Nami AI operating assistant for LKR 17,999 per month. Pro includes AI together with Dine, Pay, People, HR, and payroll for LKR 29,999 per month."]
];

const PricingPage = () => {
  return (
    <main>
      <PageHero
        eyebrow="Fair hospitality software"
        title="Clear plans for every stage of the property."
        description="Launch from LKR 6,999, move to the complete Standard plan, add AI when it creates value, or connect the whole business with Pro. Every plan begins with a one-month free trial."
        image="/brand/hero-hill-villa.webp"
        alt="A modern Sri Lankan villa overlooking tea country"
        signals={["1 month free trial", "10% off annually", "0% direct-booking commission"]}
        primaryLabel="Start free for one month"
        secondaryHref="/products"
        secondaryLabel="Compare products"
      />

      <section className="section-pad page-section reveal-section">
        <div className="container">
          <div className="page-section-head">
            <div><span className="eyebrow">Simple SaaS pricing</span><h2>Compare every plan, feature by feature.</h2></div>
            <p>Choose Launch, Standard, Standard + AI, or Pro. Switch to Annual to see the 10% saving and included launch benefits.</p>
          </div>
          <PricingPlans />
        </div>
      </section>

      <section className="section-pad page-section page-section-soft reveal-section">
        <div className="container roi-layout">
          <div className="roi-copy">
            <span className="eyebrow">The real cost comparison</span>
            <h2>One recovered direct booking can cover months of software.</h2>
            <p>For a property selling a LKR 30,000 room night, an 18% OTA commission is LKR 5,400. NamiOS helps the property build a direct channel while keeping OTA imports visible in the same operating view.</p>
            <small>Illustrative example only. Actual commission rates, room prices, gateway charges, and savings vary by property.</small>
          </div>
          <div className="roi-ledger" aria-label="Illustrative direct booking economics">
            <div><span>One room night</span><strong>LKR 30,000</strong></div>
            <div><span>Illustrative OTA commission at 18%</span><strong>- LKR 5,400</strong></div>
            <div className="positive"><span>NamiOS direct-booking commission</span><strong>LKR 0</strong></div>
            <div className="total"><span>Revenue retained before gateway fees</span><strong>LKR 5,400</strong></div>
          </div>
        </div>
      </section>

      <section className="section-pad page-section reveal-section">
        <div className="container faq-layout">
          <div><span className="eyebrow">Pricing answers</span><h2>Clear before you commit.</h2></div>
          <div className="faq-list">
            {pricingFaq.map(([question, answer]) => (
              <details key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container section-head">
          <div>
            <span className="eyebrow">Your first month is on us</span>
            <h2>Choose the applications. We’ll prepare the launch.</h2>
            <p>Start with Stay or bring the whole property onto Pro. We will map your operation, configure the trial, and agree every annual-plan deliverable before billing begins.</p>
          </div>
          <Link className="button light" href="/offers">Start the free trial</Link>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
