"use client";

import Image from "next/image";
import { useState } from "react";

const journeySteps = [
  {
    label: "Step 01",
    title: "Bring the property in",
    body: "We map rooms, taxes, booking sources, invoice branding, roles, and current guest records into a clean operating structure.",
    metric: "1 property",
    note: "configured around your real workflow",
    visual: "setup"
  },
  {
    label: "Step 02",
    title: "Run every stay live",
    body: "Front desk, housekeeping, payments, and management work from the same booking and guest timeline.",
    metric: "One view",
    note: "from reservation to checkout",
    visual: "operate"
  },
  {
    label: "Step 03",
    title: "Recover time and revenue",
    body: "Direct deposits, compliant invoices, structured guest data, and owner visibility replace avoidable manual work.",
    metric: "Every day",
    note: "less chasing, more hosting",
    visual: "grow"
  }
] as const;

export const OperatingJourney = () => {
  const [activeStep, setActiveStep] = useState(0);
  const step = journeySteps[activeStep];

  return (
    <section className="section-pad journey-section" aria-labelledby="journey-title">
      <div className="container journey-grid">
        <div className="journey-copy">
          <span className="eyebrow">How it works</span>
          <h2 id="journey-title">Go live without pausing the property.</h2>
          <p className="lead">NamiOS follows the flow your team already knows, then removes the repeated admin around it.</p>
          <div className="journey-stat-row">
            <article><strong>30 days</strong><span>guided launch setup</span></article>
            <article><strong>Real data</strong><span>used in team training</span></article>
          </div>
        </div>

        <div className="journey-visual">
          <div className="journey-tabs" role="tablist" aria-label="NamiOS launch steps">
            {journeySteps.map((item, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeStep === index}
                onClick={() => setActiveStep(index)}
                key={item.label}
              >
                {item.label}
              </button>
            ))}
          </div>
          {/* Added key={activeStep} to diagram and caption to trigger CSS animation on step changes */}
          <div className={`journey-diagram ${step.visual}`} key={`diagram-${activeStep}`}>
            <div className="journey-node source"><span>Property</span></div>
            <div className="journey-path" aria-hidden="true"><i /><i /><i /></div>
            <div className="journey-core">
              <Image src="/brand/nami-logo-teal.svg" alt="" width={62} height={62} />
              <span>{step.metric}</span>
            </div>
            <div className="journey-path reverse" aria-hidden="true"><i /><i /><i /></div>
            <div className="journey-node outcome"><span>Guest ready</span></div>
          </div>
          <div className="journey-caption" key={`caption-${activeStep}`}>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            <span>{step.note}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
