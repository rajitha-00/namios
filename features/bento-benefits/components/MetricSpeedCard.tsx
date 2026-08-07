"use client";

import { motion } from "framer-motion";
import { BENTO_CARD_VARIANTS, CARD_HOVER_FLOW } from "@/constants/animation";

export function MetricSpeedCard() {
  return (
    <motion.article
      variants={BENTO_CARD_VARIANTS}
      whileHover={CARD_HOVER_FLOW}
      className="bento-card bento-metric-card bento-span-1x1"
    >
      <div className="bento-card-header">
        <span className="bento-tag-pill bento-sky-tag">OPERATIONAL SPEED</span>
        <h3 className="bento-title">90% Faster Check-in</h3>
      </div>

      <div className="bento-metric-body">
        <div className="bento-big-stat text-sky">
          <strong>15+ Hrs</strong>
          <span>Monthly Admin Saved</span>
        </div>
        <div className="bento-progress-ring">
          <svg width="54" height="54" viewBox="0 0 54 54">
            <circle cx="27" cy="27" r="21" stroke="rgba(14, 165, 233, 0.2)" strokeWidth="4" fill="none" />
            <motion.circle
              cx="27"
              cy="27"
              r="21"
              stroke="#0ea5e9"
              strokeWidth="4"
              fill="none"
              strokeDasharray="132"
              strokeDashoffset="13"
              strokeLinecap="round"
              initial={{ strokeDashoffset: 132 }}
              whileInView={{ strokeDashoffset: 13 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </svg>
          <span className="bento-ring-label">90%</span>
        </div>
        <small className="bento-caption">Passport & NIC OCR populates guest profiles instantly.</small>
      </div>
    </motion.article>
  );
}
