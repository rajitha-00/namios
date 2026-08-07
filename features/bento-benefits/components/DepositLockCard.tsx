"use client";

import { motion } from "framer-motion";
import { BENTO_CARD_VARIANTS, CARD_HOVER_FLOW } from "@/constants/animation";

export function DepositLockCard() {
  return (
    <motion.article
      variants={BENTO_CARD_VARIANTS}
      whileHover={CARD_HOVER_FLOW}
      className="bento-card bento-span-2x1"
    >
      <div className="bento-card-header">
        <span className="bento-tag-pill bento-emerald-tag">REVENUE PROTECTION</span>
        <h3 className="bento-title">Prevent Fake Bookings (Deposit Lock)</h3>
        <p className="bento-desc">
          Advance payment rules, deposit amount settings, and payment window timers hold room blocks until bank deposits are verified.
        </p>
      </div>

      <div className="bento-visual-wrapper">
        <div className="bento-glow bento-sky-glow" />

        <div className="bento-timer-box">
          <div className="bento-timer-top">
            <span className="bento-timer-label">15-Min Deposit Lock</span>
            <span className="bento-timer-badge">Active Timer</span>
          </div>
          <div className="bento-timer-digits">
            <strong>14:59</strong>
            <span>Remaining to confirm hold</span>
          </div>
          <div className="bento-timer-action">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span>Send Hybrid WhatsApp Link via wa.me</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
