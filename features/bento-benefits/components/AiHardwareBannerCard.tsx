"use client";

import { motion } from "framer-motion";
import { BENTO_CARD_VARIANTS, CARD_HOVER_FLOW } from "@/constants/animation";

export function AiHardwareBannerCard() {
  return (
    <motion.article
      variants={BENTO_CARD_VARIANTS}
      whileHover={CARD_HOVER_FLOW}
      className="bento-card bento-full-banner bento-span-4x1"
    >
      <div className="bento-banner-layout">
        <div>
          <span className="bento-tag-pill bento-gold-tag">AI MARKETING & HARDWARE BUNDLE</span>
          <h3 className="bento-title">AI Guest Campaigns & Hardware Leasing</h3>
          <p className="bento-desc">
            Target past guests with automated promotions via Email, SMS, and WhatsApp broadcasts using your guest database. Lease front-desk Android tablets, thermal receipt printers, and LankaQR display stands (monitors/desktops excluded).
          </p>
        </div>

        <div className="bento-hardware-pills">
          <span className="h-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
            </svg>
            Front Desk Android Tablets
          </span>

          <span className="h-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            Thermal Receipt Printers
          </span>

          <span className="h-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            LankaQR Acrylic Stands
          </span>

          <span className="h-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            AI Multi-Channel Broadcasts
          </span>
        </div>
      </div>
    </motion.article>
  );
}
