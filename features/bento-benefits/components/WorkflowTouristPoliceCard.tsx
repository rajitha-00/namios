"use client";

import { motion } from "framer-motion";
import { BENTO_CARD_VARIANTS, CARD_HOVER_FLOW } from "@/constants/animation";

export function WorkflowTouristPoliceCard() {
  return (
    <motion.article
      variants={BENTO_CARD_VARIANTS}
      whileHover={CARD_HOVER_FLOW}
      className="bento-card bento-span-2x1"
    >
      <div className="bento-card-header">
        <span className="bento-tag-pill bento-teal-tag">COMPLIANCE AUTOMATION</span>
        <h3 className="bento-title">Tourist Police Google Sheets Sync</h3>
        <p className="bento-desc">
          Real-time automated data pipeline streams guest passport details directly into Sri Lanka Tourist Police spreadsheets.
        </p>
      </div>

      <div className="bento-visual-wrapper">
        <div className="bento-glow bento-emerald-glow" />

        <div className="bento-stream-nodes">
          <div className="bento-node">
            <div className="bento-node-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" />
              </svg>
            </div>
            <span className="bento-node-title">Guest Check-in</span>
            <small className="bento-node-sub">Passport OCR</small>
          </div>

          <div className="bento-stream-connector">
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
              <path d="M 0 12 H 60" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
              <motion.circle
                cx="0"
                cy="12"
                r="4"
                fill="#10b981"
                animate={{ cx: [0, 60], opacity: [0.3, 1, 1, 0.3] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
            <span className="bento-connector-tag">Google Stream</span>
          </div>

          <div className="bento-node sheet-node">
            <div className="bento-node-icon sheet-bg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="3" y1="15" x2="21" y2="15" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
            </div>
            <span className="bento-node-title">Tourist Police Sheet</span>
            <small className="bento-node-sub">Real-time Sync</small>
          </div>
        </div>

        <div className="bento-live-row">
          <span className="row-ref">#148</span>
          <span className="row-details">Villa 02 · Amara Silva (Passport)</span>
          <span className="row-synced">Synced ✓</span>
        </div>
      </div>
    </motion.article>
  );
}
