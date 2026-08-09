import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../site";
import { ContactForm } from "./components";

export const metadata: Metadata = {
  title: "Contact NamiOS",
  description: "Contact the NamiOS hospitality software team for product demos, pricing, onboarding, direct-booking websites, partnerships, or support."
};

const ContactPage = () => (
  <main>
    <PageHero
      eyebrow="Talk to NamiOS"
      title="Your property deserves a useful first conversation."
      description="Call the hospitality hotline, message us on WhatsApp, or send the operating details through the form. We will respond with a clear next step—not a generic sales deck."
      image="/brand/nami-hospitality-landscape.webp"
      alt="A tropical Sri Lankan hospitality property"
      signals={["1 business-day response", "Sri Lankan hospitality team", "Product and support hotline"]}
      primaryLabel="Call the hotline"
      primaryHref="tel:+94707140146"
      secondaryHref="https://wa.me/94707140146?text=Hello%20NamiOS%2C%20I%27d%20like%20to%20discuss%20my%20property."
      secondaryLabel="Chat on WhatsApp"
    />

    <section className="contact-command-section reveal-section">
      <div className="container contact-command-grid">
        <div className="contact-command-copy">
          <span className="eyebrow">Hospitality hotline</span>
          <h2>Talk to a person who understands the operating day.</h2>
          <a className="hotline-number" href="tel:+94707140146">+94 70 714 0146</a>
          <p>For demos, pricing, migrations, annual-plan websites, partnerships, and active-customer support.</p>
          <div className="hotline-actions"><a href="https://wa.me/94707140146?text=Hello%20NamiOS%2C%20I%27d%20like%20to%20discuss%20my%20property." target="_blank" rel="noreferrer"><b>WA</b><span><strong>WhatsApp us</strong><small>Fastest for a first message</small></span></a><a href="mailto:hello@namios.io?subject=NamiOS%20enquiry"><b>@</b><span><strong>hello@namios.io</strong><small>Product, support, and partnerships</small></span></a></div>
          <div className="response-promise"><div><strong>&lt; 1 day</strong><span>Typical business response</span></div><div><strong>08:30–17:30</strong><span>Monday–Friday · Sri Lanka</span></div><div><strong>Colombo</strong><span>Local product team</span></div></div>
        </div>
        <ContactForm />
      </div>
    </section>

    <section className="section-pad page-section page-section-soft reveal-section">
      <div className="container contact-journey">
        <div><span className="eyebrow">What happens next</span><h2>A conversation with a useful outcome.</h2><p>No empty discovery call. We use what you share to prepare the right product path.</p></div>
        <div className="contact-journey-steps"><article><span>01</span><strong>We listen</strong><p>Understand the property, current tools, and highest-friction workflow.</p></article><article><span>02</span><strong>We map</strong><p>Connect your needs to Launch, Standard, AI, Pro, or a phased rollout.</p></article><article><span>03</span><strong>We demonstrate</strong><p>Show the relevant NamiOS screens using realistic property scenarios.</p></article><article><span>04</span><strong>You decide</strong><p>Begin the one-month trial only when scope, price, and launch work are clear.</p></article></div>
      </div>
    </section>

    <section className="contact-social-band reveal-section">
      <div className="container contact-social-layout">
        <div><span className="eyebrow">Keep the conversation moving</span><h2>Connect, share, or send NamiOS to your team.</h2></div>
        <div className="contact-social-links">
          <a href="https://wa.me/94707140146?text=Hello%20NamiOS%2C%20I%27d%20like%20to%20discuss%20my%20property." target="_blank" rel="noreferrer"><span>WA</span><strong>WhatsApp NamiOS</strong><small>Start a direct conversation</small></a>
          <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fnamios.com" target="_blank" rel="noreferrer"><span>in</span><strong>Share on LinkedIn</strong><small>Send NamiOS to your network</small></a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnamios.com" target="_blank" rel="noreferrer"><span>f</span><strong>Share on Facebook</strong><small>Introduce the platform</small></a>
          <a href="mailto:?subject=NamiOS%20for%20our%20property&body=Take%20a%20look%20at%20https%3A%2F%2Fnamios.com"><span>↗</span><strong>Email to your team</strong><small>Share the website internally</small></a>
        </div>
      </div>
    </section>

    <section className="contact-final">
      <div className="container"><p>Already using NamiOS?</p><h2>Include your property name and account email for faster support.</h2><div className="contact-final-actions"><Link className="button light" href="mailto:hello@namios.io?subject=NamiOS%20customer%20support">Email customer support</Link><Link className="button secondary" href="/qa">Browse common questions</Link></div></div>
    </section>
  </main>
);

export default ContactPage;
