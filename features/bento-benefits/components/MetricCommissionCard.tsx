"use client";

import { motion } from "framer-motion";
import { BENTO_CARD_VARIANTS, CARD_HOVER_FLOW } from "@/constants/animation";

export function MetricCommissionCard() {
  return (
    <motion.article
      variants={BENTO_CARD_VARIANTS}
      whileHover={CARD_HOVER_FLOW}
      className="bento-card bento-metric-card bento-span-1x1"
    >
      <div className="bento-card-header">
        <span className="bento-tag-pill bento-emerald-tag">REVENUE PROTECTION</span>
        <h3 className="bento-title">0% Booking Commission</h3>
      </div>

      <div className="bento-metric-body">
        <div className="bento-big-stat text-emerald">
          <strong>0%</strong>
          <span>Commission Payout</span>
        </div>
        <div className="bento-metric-sub">
          <span className="bento-pill-danger">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            Booking.com: 18%
          </span>
          <span className="bento-pill-success">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            NamiOS: 0% Fees
          </span>
        </div>
        <small className="bento-caption">Save LKR 1.2M+ monthly on 200 room nights.</small>
      </div>
    </motion.article>
  );
}
