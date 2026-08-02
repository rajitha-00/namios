import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../site";

export const metadata: Metadata = {
  title: "Hotel Software Offers | NamiOS",
  description: "Claim a one-month free NamiOS trial, annual-plan website and onsite visit, plus exclusive Pro Annual brand and social-media bonuses."
};

const offerGroups = [
  {
    badge: "EVERY PLAN",
    title: "Start free for one full month",
    description: "Put NamiOS to work with your real rooms, bookings, guests, and team before you pay.",
    value: "LKR 0",
    valueNote: "to start",
    features: ["30-day free trial", "Guided property setup", "Practical staff training", "No upfront payment"],
    cta: "Start my free month",
    featured: false
  },
  {
    badge: "ANNUAL BONUS",
    title: "Go annual. Get more free.",
    description: "Choose any annual plan and we will help your property launch online and onsite.",
    value: "3 bonuses",
    valueNote: "included free",
    features: ["Free direct-booking website", "Onsite property visit", "Staff training session", "10% annual plan saving"],
    cta: "Claim annual bonuses",
    featured: true
  },
  {
    badge: "PRO ANNUAL",
    title: "The complete growth launch",
    description: "Bring the whole property onto NamiOS and give your brand a stronger digital start.",
    value: "All included",
    valueNote: "with Pro Annual",
    features: ["Everything in the annual offer", "Brand launch support", "Social-media starter package", "Priority onboarding"],
    cta: "Grab the Pro offer",
    featured: false
  }
];

const launchSteps = [
  ["Discover", "We map your rooms, rates, booking sources, taxes, departments, and current workflows."],
  ["Configure", "We prepare roles, room types, invoices, deposit rules, guest fields, and operating statuses."],
  ["Train", "Your team rehearses real booking, arrival, housekeeping, payment, and checkout scenarios."],
  ["Go live", "We guide the launch, monitor the system, and stay close while the team settles in."]
];

export default function OffersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Limited-time launch offers"
        title="More than software. Your launch extras are on us."
        description="Try NamiOS free for one month. Choose annual billing to unlock a free website, onsite visit, and staff training—or go Pro Annual for the complete brand and social launch package."
        image="/brand/hero-coastal-resort-v2.webp"
        alt="A Sri Lankan coastal resort ready to welcome guests"
        signals={["1 month free", "LKR 0 upfront", "Annual bonuses included"]}
        primaryHref="#grab-your-offer"
        primaryLabel="Grab your offer"
        secondaryHref="/pricing"
        secondaryLabel="Compare plans"
      />

      <section className="offer-marquee" aria-label="Offer highlights">
        <div className="container">
          <span>ONE MONTH FREE</span><i aria-hidden="true">✦</i>
          <span>FREE ANNUAL WEBSITE</span><i aria-hidden="true">✦</i>
          <span>ONSITE VISIT</span><i aria-hidden="true">✦</i>
          <span>STAFF TRAINING</span>
        </div>
      </section>

      <section className="section-pad offer-sale-section reveal-section" id="grab-your-offer">
        <div className="container">
          <div className="offer-sale-heading">
            <div>
              <span className="eyebrow">Pick your advantage</span>
              <h2>Grab the offer that fits your next move.</h2>
            </div>
            <p>Every plan starts with a free month. Annual subscriptions unlock the biggest launch benefits, with an exclusive brand-growth bundle on Pro Annual.</p>
          </div>

          <div className="sale-offer-grid">
            {offerGroups.map((offer) => (
              <article className={`sale-offer-card${offer.featured ? " is-featured" : ""}`} key={offer.title}>
                {offer.featured ? <span className="sale-ribbon">MOST POPULAR</span> : null}
                <span className="sale-offer-badge">{offer.badge}</span>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <div className="sale-offer-value"><strong>{offer.value}</strong><span>{offer.valueNote}</span></div>
                <ul>
                  {offer.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <Link className={`button${offer.featured ? " light" : ""}`} href="/pricing">{offer.cta}</Link>
              </article>
            ))}
          </div>
          <p className="offer-terms">Annual bonuses apply to subscriptions billed annually. Pro brand and social-media deliverables are agreed during onboarding.</p>
        </div>
      </section>

      <section className="section-pad pro-offer-band reveal-section">
        <div className="container pro-offer-layout">
          <div className="pro-offer-kicker">
            <span>PRO ANNUAL</span>
            <strong>Everything your hotel needs to operate—and launch.</strong>
          </div>
          <div className="pro-offer-list">
            <span><i>01</i> Free direct-booking website</span>
            <span><i>02</i> Onsite setup visit</span>
            <span><i>03</i> Staff training</span>
            <span><i>04</i> Brand launch support</span>
            <span><i>05</i> Social-media starter package</span>
            <span><i>06</i> Priority onboarding</span>
          </div>
        </div>
      </section>

      <section className="section-pad support-promise reveal-section">
        <div className="container support-promise-grid">
          <div className="support-number">24/7</div>
          <div>
            <span className="eyebrow">Always-on confidence</span>
            <h2>Support when you need it. Built to keep your property moving.</h2>
            <p>Get round-the-clock support, continuous uptime monitoring, secure cloud access, guided onboarding, and dependable help through every shift.</p>
          </div>
          <div className="support-chips" aria-label="Service benefits">
            <span>24-hour support</span>
            <span>Zero-downtime deployment</span>
            <span>Secure cloud access</span>
            <span>Fast issue response</span>
          </div>
        </div>
      </section>

      <section className="section-pad page-section page-section-soft reveal-section">
        <div className="container">
          <div className="page-section-head">
            <div><span className="eyebrow">Your launch path</span><h2>From “yes” to go-live in four clear steps.</h2></div>
            <p>We configure NamiOS around the way your property actually works, then train your team with familiar day-to-day scenarios.</p>
          </div>
          <div className="launch-timeline">
            {launchSteps.map(([title, body], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="offer-final-cta reveal-section">
        <div className="container">
          <span className="eyebrow">Ready when you are</span>
          <h2>Your free month is waiting.</h2>
          <p>Choose a plan, claim your launch bonuses, and let’s get your property running on NamiOS.</p>
          <div>
            <Link className="button" href="/pricing">Grab your offer</Link>
            <Link className="button secondary" href="/products">Explore NamiOS</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
