import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../site";

export const metadata: Metadata = {
  title: "About NamiOS and DesignNetrix",
  description: "Meet NamiOS, a research-led hospitality operating platform proudly developed and powered by DesignNetrix in Sri Lanka."
};

const principles = [
  ["Research before features", "We study the repeated work behind bookings, guest records, deposits, room readiness, compliance, billing, dining, and people operations before deciding what belongs in the product."],
  ["Sri Lankan reality first", "LKR billing, local taxes, Tourist Police-ready records, OTA dependence, WhatsApp documents, and practical staff training are product inputs, not afterthoughts."],
  ["Software people can trust", "A useful operating system should make responsibilities, information, pricing, and next actions clearer—not add another layer of complexity."],
  ["Grow without replacement", "A small property can begin with Launch. The same platform can grow into AI, dining, payments, HR, payroll, and multi-operation visibility."]
];

const AboutPage = () => (
  <main>
    <PageHero
      eyebrow="A DesignNetrix product"
      title="Researched in hospitality. Engineered in Sri Lanka."
      description="NamiOS is a proud DesignNetrix product—created from research into the daily operating gaps faced by independent hotels, villas, guesthouses, resorts, and restaurants."
      image="/brand/hero-hill-villa.webp"
      alt="A modern independent Sri Lankan villa in the hill country"
      signals={["Research-led product", "Powered by DNX", "Independent hospitality first"]}
      primaryLabel="Explore NamiOS"
      primaryHref="/products"
      secondaryHref="/contact"
      secondaryLabel="Meet the team"
    />

    <section className="section-pad page-section reveal-section">
      <div className="container dnx-story-layout">
        <div className="dnx-mark" aria-hidden="true"><span>DNX</span><small>DesignNetrix</small></div>
        <div className="dnx-story-copy">
          <span className="eyebrow">The company behind NamiOS</span>
          <h2>Built and powered by DesignNetrix.</h2>
          <p>DesignNetrix is a Sri Lankan technology and creative company building intelligent platforms, custom software, web experiences, automation, and premium brand systems for businesses in Sri Lanka and international markets.</p>
          <p>NamiOS brings those capabilities into one focused product mission: help hospitality businesses replace fragmented work with a connected, understandable operating system.</p>
          <a className="text-link" href="https://www.designnetrix.com/" target="_blank" rel="noreferrer">Visit DesignNetrix <span>↗</span></a>
        </div>
      </div>
    </section>

    <section className="section-pad research-band reveal-section">
      <div className="container research-band-grid">
        <div>
          <span className="eyebrow">Why the product exists</span>
          <h2>Hospitality should not depend on scattered memory.</h2>
        </div>
        <div className="research-steps">
          <article><span>01</span><strong>Observe</strong><p>Map how properties actually handle guests, rooms, money, teams, and compliance.</p></article>
          <article><span>02</span><strong>Connect</strong><p>Turn repeated handoffs into one shared operating timeline.</p></article>
          <article><span>03</span><strong>Improve</strong><p>Use real operating feedback to make each release calmer and more useful.</p></article>
        </div>
      </div>
    </section>

    <section className="section-pad page-section page-section-soft reveal-section">
      <div className="container">
        <div className="page-section-head">
          <div><span className="eyebrow">Our product principles</span><h2>Local depth. Global product discipline.</h2></div>
          <p>NamiOS combines practical Sri Lankan hospitality knowledge with the engineering, product design, automation, and brand experience of DesignNetrix.</p>
        </div>
        <div className="principle-grid">
          {principles.map(([title, body], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </div>
    </section>

    <section className="company-cta reveal-section">
      <div className="container">
        <span>A hospitality product by DesignNetrix</span>
        <h2>Bring us the workflow slowing your property down.</h2>
        <p>We will listen first, map the operating gap, and show how NamiOS can fit the way your team works.</p>
        <div><Link className="button light" href="/contact">Contact the team</Link><Link className="button secondary" href="/pricing">View pricing</Link></div>
      </div>
    </section>
  </main>
);

export default AboutPage;
