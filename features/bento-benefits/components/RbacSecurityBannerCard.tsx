"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BENTO_CARD_VARIANTS, CARD_HOVER_FLOW } from "@/constants/animation";
import type { BentoRole } from "../types";

export function RbacSecurityBannerCard() {
  const [role, setRole] = useState<BentoRole>("owner");

  const roles = {
    owner: { label: "Owner / GM", color: "gold", perms: ["Revenue & Folios", "Audit Logs", "Staff Roles", "OTA Settings"] },
    reception: { label: "Front Desk", color: "teal", perms: ["Check-in / Out", "Passport OCR", "Deposit Links", "Folios"] },
    housekeeping: { label: "Housekeeper", color: "blue", perms: ["Room Status", "Cleaning Queue", "Maintenance Alerts", "Ready Flag"] },
    fb: { label: "F&B Captain", color: "purple", perms: ["Nami Dine POS", "Table Maps", "Room Billing", "Kitchen Queue"] }
  };

  const current = roles[role];

  return (
    <motion.article
      variants={BENTO_CARD_VARIANTS}
      whileHover={CARD_HOVER_FLOW}
      className="bento-card bento-span-2x1"
    >
      <div className="bento-card-header">
        <span className="bento-tag-pill bento-purple-tag">SECURITY & RBAC</span>
        <h3 className="bento-title">Role-Based Access Control (RBAC)</h3>
        <p className="bento-desc">
          Dynamic portal auth enforcement (<code className="bento-inline-code">requirePortalRole</code>) for Owner, GM, Reception Agent, Housekeeper, and F&B Captain.
        </p>
      </div>

      <div className="bento-visual-wrapper">
        <div className="bento-glow bento-purple-glow" />

        <div className="bento-rbac-tabs">
          {(Object.keys(roles) as Array<keyof typeof roles>).map((key) => {
            const active = role === key;
            return (
              <button
                key={key}
                onClick={() => setRole(key)}
                className={`bento-rbac-tab ${active ? "is-active" : ""}`}
                type="button"
              >
                {active && (
                  <motion.div
                    layoutId="bentoRoleIndicator"
                    className="bento-rbac-pill"
                    transition={{ type: "spring" as const, stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="bento-rbac-label">{roles[key].label}</span>
              </button>
            );
          })}
        </div>

        <div className="bento-rbac-body">
          <div className="bento-rbac-header">
            <span className={`bento-role-chip ${current.color}`}>{current.label} Workspace</span>
            <small className="bento-mw-tag">requirePortalRole middleware</small>
          </div>

          <div className="bento-perm-grid">
            {current.perms.map((perm) => (
              <div key={perm} className="bento-perm-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{perm}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
