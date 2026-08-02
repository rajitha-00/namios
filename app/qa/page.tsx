import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../site";

export const metadata: Metadata = {
  title: "Sri Lankan Hotel Market Gaps & Solutions | NamiOS",
  description: "See the operational gaps holding Sri Lankan hotels back and how NamiOS solves fragmented workflows, OTA dependence, compliance admin, deposit leakage, and disconnected teams."
};

const marketGaps = [
  {
    number: "01",
    category: "Daily operations",
    gap: "Hotel work is scattered across paper, spreadsheets, and chat messages.",
    impact: "Front desk, housekeeping, and management work from different information. Updates arrive late, tasks are repeated, and the property loses a reliable view of the day.",
    solution: "One live property workspace",
    answer: "Nami Stay connects bookings, rooms, guests, housekeeping, payments, folios, and invoices so every team works from the same operational truth.",
    outcomes: ["Live room status", "Faster shift handovers", "Searchable guest history"]
  },
  {
    number: "02",
    category: "Revenue",
    gap: "Independent properties depend heavily on high-commission OTA bookings.",
    impact: "Booking platforms bring valuable demand, but properties often lack the direct-booking tools and guest follow-up needed to build a healthier channel mix.",
    solution: "Commission-free direct growth",
    answer: "NamiOS adds a direct-booking website, connected availability, deposit workflows, and returning-guest records without taking a commission on direct revenue.",
    outcomes: ["Direct-booking website", "0% NamiOS commission", "Guest retention tools"]
  },
  {
    number: "03",
    category: "Compliance",
    gap: "Guest records and statutory reporting create repetitive nightly admin.",
    impact: "Passport or NIC information is copied between forms, registers, and spreadsheets, increasing staff effort and the chance of incomplete records.",
    solution: "Local records, captured once",
    answer: "Structured guest profiles and Tourist Police-ready exports keep required information organized, searchable, and ready for the property’s reporting workflow.",
    outcomes: ["Tourist Police-ready data", "Passport and NIC records", "Structured monthly exports"]
  },
  {
    number: "04",
    category: "Cash flow",
    gap: "Manual deposit follow-up leaves rooms blocked by uncertain bookings.",
    impact: "Teams chase screenshots, check bank transfers manually, and hold inventory without a consistent confirmation rule—especially during busy dates.",
    solution: "Deposits connected to bookings",
    answer: "Payment links, deposit rules, receipt checks, and clear booking statuses help staff confirm genuine stays and release unpaid holds sooner.",
    outcomes: ["Deposit reminders", "Clear payment status", "Fewer unpaid holds"]
  },
  {
    number: "05",
    category: "Guest experience",
    gap: "The guest journey breaks between the room, restaurant, and finance desk.",
    impact: "Separate systems and handwritten notes make it harder to recognize returning guests, combine charges, and answer simple questions quickly.",
    solution: "A connected hospitality platform",
    answer: "Nami Stay, Dine, Pay, and People bring property operations together, connecting guest context with room, dining, payment, and staff workflows.",
    outcomes: ["Connected guest folio", "Stay + restaurant visibility", "Consistent service context"]
  },
  {
    number: "06",
    category: "Technology fit",
    gap: "Many global hotel systems are too expensive, too complex, or not local enough.",
    impact: "Smaller properties pay for unused enterprise features while staff work around missing LKR, tax, invoice, and local support requirements.",
    solution: "Built around Sri Lankan reality",
    answer: "NamiOS combines straightforward plans with LKR billing, configurable VAT, SSCL and service charge, local workflows, guided migration, and practical staff training.",
    outcomes: ["LKR-first pricing", "Local tax configuration", "Human onboarding support"]
  }
];

const questions = [
  ["Is NamiOS only for large hotels?", "No. NamiOS is designed for independent hotels, boutique villas, guesthouses, resorts, restaurants, and growing groups. A property can start with the workflows it needs and add more applications later."],
  ["Can we move from paper or spreadsheets?", "Yes. Onboarding begins by mapping rooms, guest fields, booking sources, invoices, taxes, and repeated manual work. The migration plan is agreed before the system becomes the daily source of truth."],
  ["Does NamiOS replace Booking.com and Agoda?", "No. OTAs remain useful sales channels. NamiOS helps the property manage imported bookings while building a stronger direct channel and reducing unnecessary long-term dependence."],
  ["Does NamiOS support Sri Lankan billing and compliance?", "The platform supports LKR workflows, configurable VAT, SSCL and service charge, branded invoices, structured guest records, and Tourist Police-ready exports."],
  ["Will NamiOS take a commission on direct bookings?", "No. NamiOS is subscription software and does not take a commission from the property’s direct-booking revenue. Independent payment-provider charges may still apply."],
  ["How will staff learn the system?", "Launch support uses the property’s own rooms and real operating scenarios. Front desk, housekeeping, management, and other relevant teams rehearse the workflows they will use during a normal shift."]
];

export default function QaPage() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text }
    }))
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <PageHero
        eyebrow="The gap — and our answer"
        title="Sri Lankan hospitality deserves software built for its reality."
        description="Independent hotels are expected to deliver world-class service while running on disconnected tools, manual processes, and systems designed for somewhere else. NamiOS closes that gap."
        image="/brand/nami-hospitality-landscape.webp"
        alt="A Sri Lankan hospitality property surrounded by a tropical landscape"
        signals={["Local workflows first", "Connected hotel operations", "Built for independent properties"]}
        primaryHref="#market-gaps"
        primaryLabel="Explore the gaps"
        secondaryHref="/products"
        secondaryLabel="See our solutions"
      />

      <section className="market-thesis reveal-section">
        <div className="container market-thesis-grid">
          <span>THE MARKET TODAY</span>
          <p>Great hospitality is already here.</p>
          <i aria-hidden="true">→</i>
          <p>The operating tools have not kept up.</p>
          <i aria-hidden="true">→</i>
          <strong>That is the gap NamiOS closes.</strong>
        </div>
      </section>

      <section className="section-pad market-gap-section reveal-section" id="market-gaps">
        <div className="container">
          <div className="market-gap-heading">
            <div><span className="eyebrow">Six gaps we are solving</span><h2>Local problems. Practical answers.</h2></div>
            <p>These are recurring operating patterns across independent hospitality—not abstract software problems. Each NamiOS solution starts with what staff, owners, and guests experience every day.</p>
          </div>

          <div className="market-gap-list">
            {marketGaps.map((item) => (
              <article className="market-gap-card" key={item.number}>
                <header>
                  <span>{item.number}</span>
                  <small>{item.category}</small>
                </header>
                <div className="market-problem">
                  <span className="market-label">MARKET GAP</span>
                  <h3>{item.gap}</h3>
                  <p>{item.impact}</p>
                </div>
                <div className="market-solution">
                  <span className="market-label">NAMI<span>OS</span> SOLUTION</span>
                  <h3>{item.solution}</h3>
                  <p>{item.answer}</p>
                  <div className="market-outcomes">
                    {item.outcomes.map((outcome) => <span key={outcome}>{outcome}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad local-fit-band reveal-section">
        <div className="container local-fit-layout">
          <div>
            <span className="eyebrow">Not localized. Local by design.</span>
            <h2>The details global products often leave behind.</h2>
            <p>NamiOS treats Sri Lankan operating requirements as product foundations, not optional custom work added after purchase.</p>
            <Link className="button" href="/benefits">See every benefit</Link>
          </div>
          <div className="local-fit-grid">
            <article><strong>LKR</strong><span>Local pricing and billing workflows</span></article>
            <article><strong>VAT + SSCL</strong><span>Configurable tax and service charge</span></article>
            <article><strong>TP</strong><span>Tourist Police-ready guest records</span></article>
            <article><strong>0%</strong><span>NamiOS commission on direct bookings</span></article>
            <article><strong>OTA</strong><span>Booking.com and Agoda import workflows</span></article>
            <article><strong>24/7</strong><span>Support for an always-on operation</span></article>
          </div>
        </div>
      </section>

      <section className="section-pad page-section reveal-section">
        <div className="container faq-layout">
          <div><span className="eyebrow">Questions owners ask</span><h2>Clear answers before you change systems.</h2><p className="faq-intro">A better platform still needs a safe move. We confirm scope, migration, team training, and local requirements before launch.</p></div>
          <div className="faq-list">
            {questions.map(([question, answer]) => (
              <details key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className="market-final-cta reveal-section">
        <div className="container">
          <span className="eyebrow">Your property is the proof</span>
          <h2>Show us the gap slowing your hotel down.</h2>
          <p>We will map the current workflow, identify the highest-value change, and demonstrate NamiOS using the way your property actually operates.</p>
          <div>
            <Link className="button" href="/offers">Book a property demo</Link>
            <Link className="button secondary" href="/pricing">View plans</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
