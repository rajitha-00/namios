import Link from "next/link";
import type { CSSProperties } from "react";
import { Fragment } from "react";
import { benefits, offers, products, qa, stayFeatures, trustSignals } from "@/app/data";
import { StayFeatureVisual } from "@/app/home/components/StayFeatureVisual";
import { PricingPlans } from "@/app/pricing/components";

export function HeroScene() {
  return (
    <div className="stage hero-device" aria-label="Animated Nami Stay product interface">
      <div className="device-shell">
        <div className="device-top">
          <span>Nami Stay Live</span>
          <strong>94% occupancy</strong>
        </div>
        <div className="dashboard-grid">
          <div className="mini-panel calendar-panel">
            <span className="mini-label">Today</span>
            <strong>18 check-ins</strong>
            <div className="timeline">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="mini-panel guest-panel">
            <span className="mini-label">Guest profile</span>
            <strong>Passport verified</strong>
            <p>Deposit paid · Folio open · Room 204</p>
          </div>
          <div className="mini-panel house-panel">
            <span className="mini-label">Housekeeping</span>
            <strong>12 rooms ready</strong>
            <div className="room-dots">
              {Array.from({ length: 18 }).map((_, index) => (
                <i key={index} />
              ))}
            </div>
          </div>
          <div className="mini-panel revenue-panel">
            <span className="mini-label">Revenue protected</span>
            <strong>LKR 486K</strong>
            <p>Direct deposits collected this week</p>
          </div>
        </div>
      </div>
      <div className="orbit">
        <div className="core">
          <div className="floor-grid" aria-hidden="true">
            {Array.from({ length: 15 }).map((_, index) => <span className="room" key={index} />)}
          </div>
        </div>
        <div className="pulse-card one">
          Check-in ready
          <span>Guest profile, deposit, room and folio aligned.</span>
        </div>
        <div className="pulse-card two">
          Kitchen synced
          <span>Nami Dine orders move with rooms and reservations.</span>
        </div>
        <div className="pulse-card three">
          Owner view
          <span>Revenue, occupancy, OTA import and team work in one place.</span>
        </div>
      </div>
    </div>
  );
}

export function TrustMarquee() {
  return (
    <div className="trust-wrap" aria-label="NamiOS hospitality segments">
      <div className="trust-track">
        {[...trustSignals, ...trustSignals].map((signal, index) => (
          <span key={`${signal}-${index}`}>{signal}</span>
        ))}
      </div>
    </div>
  );
}

export function ProductGrid() {
  const [stayOs, ...supportingProducts] = products;

  return (
    <div className="platform-showcase">
      <article className="platform-product platform-product-primary">
        <div className="platform-product-copy">
          <div className="platform-product-meta">
            <span>01</span>
            <strong>{stayOs.name}</strong>
            <i>Core product</i>
          </div>
          <h3>The guest journey, connected from booking to checkout.</h3>
          <p>{stayOs.summary}</p>
          <div className="platform-signals" aria-label="Nami Stay operating areas">
            <span>Front desk</span>
            <span>Rooms</span>
            <span>Guests</span>
            <span>Revenue</span>
          </div>
          <small>{stayOs.proof}</small>
        </div>

        <div className="stay-os-preview" aria-label="Nami Stay daily operations preview">
          <div className="preview-topline">
            <div>
              <span>Nami Stay</span>
              <strong>Today at the property</strong>
            </div>
            <i>Live</i>
          </div>
          <div className="preview-stat-row">
            <div><strong>18</strong><span>Arrivals</span></div>
            <div><strong>12</strong><span>Rooms ready</span></div>
            <div><strong>94%</strong><span>Occupancy</span></div>
          </div>
          <div className="preview-activity">
            <div><i className="ready" /><span>Room 204</span><strong>Check-in ready</strong></div>
            <div><i className="active" /><span>Room 108</span><strong>Cleaning</strong></div>
            <div><i /><span>Villa 03</span><strong>Deposit due</strong></div>
          </div>
        </div>
      </article>

      <div className="platform-supporting">
        {supportingProducts.map((product, index) => (
          <article className="platform-product platform-product-support" key={product.name}>
            <div className="platform-product-meta">
              <span>0{index + 2}</span>
              <strong>{product.name}</strong>
            </div>
            <h3>{product.name === "Nami Dine" ? "Dining that moves with the stay." : "Clear oversight across every property."}</h3>
            <p>{product.summary}</p>
            <small>{product.proof}</small>
          </article>
        ))}
      </div>
    </div>
  );
}

export function StaySpotlight() {
  return (
    <section className="section-pad stay-spotlight">
      <div className="container spotlight-grid">
        <div>
          <span className="eyebrow">Nami Stay features</span>
          <h2>The PMS layer built for Sri Lankan hotel reality.</h2>
          <p className="lead">
            Nami Stay is the center of NamiOS: booking control, guest records, housekeeping, payments, invoices, compliance exports, and owner visibility designed as one daily workspace.
          </p>
          <div className="feature-pills">
            <span>Front desk</span>
            <span>Housekeeping</span>
            <span>Payments</span>
            <span>OTA import</span>
          </div>
        </div>
        <div className="stay-card-stack">
          {stayFeatures.slice(0, 4).map(([title, body], index) => (
            <article className="stay-card" key={title} style={{ "--delay": `${index * 80}ms` } as CSSProperties}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureMosaic() {
  return (
    <div className="mosaic feature-showcase-grid">
      {stayFeatures.map(([title, body], index) => (
        <article className={`mosaic-card feature-showcase-card item-${index + 1}`} key={title}>
          <div className="feature-card-glow" aria-hidden="true" />
          <div className="feature-card-meta"><span className="tag">Nami Stay</span><b>0{index + 1}</b></div>
          <StayFeatureVisual index={index} />
          <div className="feature-card-copy">
            <h3>{title}</h3>
            <p>{body}</p>
            <span className="feature-card-link">Explore feature <i>→</i></span>
          </div>
        </article>
      ))}
    </div>
  );
}

export function WorkflowStrip() {
  const steps = ["Import booking", "Lock deposit", "Assign room", "Check in guest", "Clean room", "Send invoice"];

  return (
    <div className="workflow-strip" aria-label="Nami Stay workflow">
      {steps.map((step, index) => (
        <div className="workflow-step" key={step}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{step}</strong>
        </div>
      ))}
    </div>
  );
}

export function ProductTable() {
  return (
    <div className="product-table">
      <div><strong>Product</strong></div>
      <div><strong>What it runs</strong></div>
      <div><strong>Why it matters</strong></div>
      {products.map((product) => (
        <Fragment key={product.name}>
          <div key={`${product.name}-name`}><strong>{product.name}</strong></div>
          <div key={`${product.name}-summary`}>{product.summary}</div>
          <div key={`${product.name}-proof`}>{product.proof}</div>
        </Fragment>
      ))}
    </div>
  );
}

export function BenefitsGrid() {
  const benefitAreas = ["Arrival", "Revenue", "Compliance", "Teams", "Finance", "Growth"];

  return (
    <div className="benefits-list">
      {benefits.map(([title, body], index) => (
        <article className="benefit-row" key={title}>
          <div className="benefit-index">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <small>{benefitAreas[index]}</small>
          </div>
          <div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PricingCards() {
  return <PricingPlans />;
}

export function QaList() {
  return (
    <div className="grid-2">
      {qa.map(([title, body]) => (
        <article className="qa-item" key={title}>
          <h3>{title}</h3>
          <p>{body}</p>
        </article>
      ))}
    </div>
  );
}

export function OffersGrid() {
  return (
    <div className="grid-3">
      {offers.map(([title, body]) => (
        <article className="offer" key={title}>
          <h3>{title}</h3>
          <p>{body}</p>
        </article>
      ))}
    </div>
  );
}

export const CtaBand = () => {
  return (
    <section className="cta">
      <div className="container section-head">
        <div>
          <span className="eyebrow">Launch offer</span>
          <h2>Move your front desk, rooms, and guest records into Nami Stay.</h2>
        </div>
        <p>
          We will map your rooms, taxes, guest workflows, booking sources, invoice brand, and training plan before your demo so NamiOS starts with your real operation.
        </p>
        <Link className="button" href="/offers">
          Start launch setup
        </Link>
      </div>
    </section>
  );
};
