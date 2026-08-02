"use client";

import type { CSSProperties } from "react";
import { useScrollComparison } from "../hooks";

const beforeItems = [
  "Paper guest books slow every arrival",
  "Tourist Police records are retyped at night",
  "Unpaid holds block rooms and create no-shows",
  "Booking portals, invoices, and room notes never agree"
];

const afterItems = [
  "Guest profiles are ready before check-in",
  "Compliance records update from one source",
  "Deposit rules confirm revenue before room lock",
  "Bookings, rooms, folios, and teams share one timeline"
];

interface ComparisonPanelProps {
  eyebrow: string;
  items: string[];
  metrics: Array<[string, string]>;
  mode: "before" | "after";
  title: string;
}

const ComparisonPanel = ({ eyebrow, items, metrics, mode, title }: ComparisonPanelProps) => (
  <article className={`comparison-panel ${mode}`}>
    <div className="comparison-panel-head">
      <span>{eyebrow}</span>
      <strong>{mode === "before" ? "Manual" : "Connected"}</strong>
    </div>
    <div className="comparison-panel-body">
      <div>
        <h3>{title}</h3>
        <ul>
          {items.map((item) => (
            <li key={item}>
              <i aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="comparison-panel-metrics">
        {metrics.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  </article>
);

const outcomes = [
  ["90%", "faster check-in workflow"],
  ["15+ hrs", "monthly admin recovered"],
  ["0%", "fake bookings after deposit lock"],
  ["0%", "commission on direct bookings"]
];

export const BeforeAfterExperience = () => {
  const { motionRef, progress, slideProgress } = useScrollComparison();
  const afterIsActive = slideProgress >= 0.5;
  const motionStyle = {
    "--comparison-progress": `${progress * 100}%`,
    "--comparison-slide": `${slideProgress * 50}%`
  } as CSSProperties;

  return (
    <section id="before-after" className="comparison-section section-pad" aria-labelledby="comparison-title">
      <div className="container comparison-heading">
        <div>
          <span className="eyebrow">Before and after NamiOS</span>
          <h2 id="comparison-title">From nightly admin to one calm operating view.</h2>
        </div>
        <p>
          NamiOS replaces scattered property work with a shared guest, room, payment, and compliance timeline your whole team can trust.
        </p>
      </div>

      <div id="before-after-motion" className="comparison-motion" ref={motionRef} style={motionStyle}>
        <div className="comparison-stage">
          <div className="container">
            <div className="comparison-statebar" aria-label="NamiOS operating transformation">
              <span className={!afterIsActive ? "active" : ""}>Before NamiOS</span>
              <i aria-hidden="true" />
              <span className={afterIsActive ? "active" : ""}>With NamiOS</span>
            </div>

            <div className="comparison-window">
              <div className="comparison-track">
                <ComparisonPanel
                  eyebrow="Before NamiOS"
                  items={beforeItems}
                  metrics={[["15+ hrs", "monthly compliance admin"], ["15-25%", "OTA commission pressure"]]}
                  mode="before"
                  title="The property runs on memory and manual follow-up."
                />
                <ComparisonPanel
                  eyebrow="With NamiOS"
                  items={afterItems}
                  metrics={[["90%", "faster guest check-in"], ["0%", "commission on direct bookings"]]}
                  mode="after"
                  title="Every stay moves forward from one shared source."
                />
              </div>
            </div>

            <div className="comparison-progress" aria-hidden="true">
              <i />
              <span>{afterIsActive ? "One connected operation" : "Scroll to transform the property"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container comparison-outcomes" aria-label="NamiOS operating outcomes">
        {outcomes.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
