import React from "react";
import type { ShiftItem } from "./types";

export interface ShiftCardProps {
  item: ShiftItem;
  index: number;
}

export function ShiftCard({ item, index }: ShiftCardProps) {
  const stepNumber = String(index).padStart(2, "0");

  return (
    <div className="shift-card">
      <div className="shift-card-head">
        <span className="shift-step-num">{stepNumber}</span>
        <h3>{item.title}</h3>
      </div>
      <div className="shift-comparison">
        <div className="before-box">
          <span className="comp-label before-label">Before NamiOS</span>
          <p>{item.before}</p>
        </div>
        <div className="after-box">
          <span className="comp-label after-label">With NamiOS ✓</span>
          <p>{item.after}</p>
        </div>
      </div>
    </div>
  );
}
