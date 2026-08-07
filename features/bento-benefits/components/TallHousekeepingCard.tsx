"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BENTO_CARD_VARIANTS, CARD_HOVER_FLOW } from "@/constants/animation";

export function TallHousekeepingCard() {
  const [selected, setSelected] = useState(1);

  const columns = [
    { title: "Dirty", count: 2, dot: "red", card: "Room 104 · Checkout" },
    { title: "Cleaning", count: 1, dot: "amber", card: "Room 201 · P. Perera" },
    { title: "Ready", count: 4, dot: "green", card: "Room 101 · Inspected ✓" }
  ];

  return (
    <motion.article
      variants={BENTO_CARD_VARIANTS}
      whileHover={CARD_HOVER_FLOW}
      className="bento-card bento-span-2x1"
    >
      <div className="bento-card-header">
        <span className="bento-tag-pill bento-amber-tag">LIVE HOUSEKEEPING</span>
        <h3 className="bento-title">Housekeeping Live Kanban Board</h3>
        <p className="bento-desc">
          Connects front desk check-outs to housekeeper task queues with room readiness, cleaning logs, and maintenance alerts.
        </p>
      </div>

      <div className="bento-visual-wrapper">
        <div className="bento-glow bento-amber-glow" />

        <div className="bento-kanban-cols-horizontal">
          {columns.map((col, idx) => {
            const active = selected === idx;
            return (
              <button
                key={col.title}
                onClick={() => setSelected(idx)}
                className={`bento-kanban-col ${active ? "is-active" : ""}`}
                type="button"
              >
                <div className="kanban-col-head">
                  <span className={`kanban-dot ${col.dot}`} />
                  <span>{col.title} ({col.count})</span>
                </div>
                <div className="kanban-card-preview">
                  <span>{col.card}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}
