import React from "react";
import { ShiftCard } from "./ShiftCard";
import { SHIFT_ITEMS, type ShiftItem } from "./types";

export interface ShiftComparisonSectionProps {
  items?: ShiftItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function ShiftComparisonSection({
  items = SHIFT_ITEMS,
  eyebrow = "The Operating Shift",
  title = "Replace handoffs that depend on memory.",
  description = "Every change eliminates hotel friction and introduces an automated, repeatable workflow."
}: ShiftComparisonSectionProps) {
  return (
    <section className="section-pad revamp-shift-section">
      <div className="page-section-head">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
      </div>

      <div className="shift-card-grid">
        {items.map((item, idx) => (
          <ShiftCard key={item.id} item={item} index={idx + 1} />
        ))}
      </div>
    </section>
  );
}
