"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function LightBentoShowcase() {
  const [activeLang, setActiveLang] = useState<"en" | "si" | "ta">("en");

  const langData = {
    en: { flag: "🇬🇧", name: "English", code: "en-US", sample: "Guest Check-in & Registration" },
    si: { flag: "🇱🇰", name: "සිංහල", code: "si-LK", sample: "අමුත්තන්ගේ ලියාපදිංචිය" },
    ta: { flag: "🇱🇰", name: "தமிழ்", code: "ta-LK", sample: "விருந்தினர் பதிவு" }
  };

  const selectedLangData = langData[activeLang];

  return (
    <div className="light-bento-container">
      {/* Top Row: Card 1 (Role Security Shield) & Card 2 (Direct Booking Yields Chart) */}
      <div className="bento-grid-2">
        {/* CARD 1: Role Security Shield (RBAC) */}
        <motion.div
          className="light-bento-card card-shield"
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <div className="light-card-glow glow-amber" />
          
          <div className="widget-display shield-widget">
            <div className="shield-aura-bg">
              <svg width="120" height="130" viewBox="0 0 120 130" fill="none" className="shield-svg">
                {/* Outer glowing rings */}
                <path d="M 60 10 Q 105 25 105 65 Q 105 105 60 120 Q 15 105 15 65 Q 15 25 60 10 Z" stroke="rgba(245, 158, 11, 0.25)" strokeWidth="1.5" />
                <path d="M 60 18 Q 98 31 98 65 Q 98 98 60 110 Q 22 98 22 65 Q 22 31 60 18 Z" stroke="rgba(20, 184, 166, 0.35)" strokeWidth="2" />
                {/* Inner Shield */}
                <path d="M 60 26 Q 90 37 90 65 Q 90 92 60 102 Q 30 92 30 65 Q 30 37 60 26 Z" fill="url(#shieldGrad)" />
                {/* Keyhole icon */}
                <circle cx="60" cy="58" r="8" fill="#071318" />
                <path d="M 57 58 L 63 58 L 65 76 L 55 76 Z" fill="#071318" />

                <defs>
                  <linearGradient id="shieldGrad" x1="30" y1="26" x2="90" y2="102" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="50%" stopColor="#2dd4bf" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="shield-role-badge">requirePortalRole · Active Guard</div>
          </div>

          <div className="light-card-content">
            <h3>Role Security & Access Control (RBAC)</h3>
            <p>
              Granular portal role enforcement for Owner, GM, Front Desk Agent, Housekeeper, and F&B Captain. Sensitive folios, audit logs, and revenue stay 100% protected.
            </p>
          </div>
        </motion.div>

        {/* CARD 2: Direct Revenue & Yields Chart */}
        <motion.div
          className="light-bento-card card-chart"
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <div className="light-card-glow glow-emerald" />

          <div className="widget-display chart-widget">
            <div className="chart-header-row">
              <div className="chart-stat-main">
                <span className="stat-value">LKR 546K</span>
                <span className="stat-growth-pill">↑ +94% Direct</span>
              </div>
              <span className="time-range-pill">0% Commission</span>
            </div>

            {/* Vector Line Chart SVG */}
            <div className="chart-vector-wrap">
              <svg viewBox="0 0 320 100" fill="none" className="chart-svg">
                {/* Horizontal Grid lines */}
                <line x1="0" y1="25" x2="320" y2="25" stroke="rgba(20, 184, 166, 0.12)" strokeWidth="1" />
                <line x1="0" y1="50" x2="320" y2="50" stroke="rgba(20, 184, 166, 0.12)" strokeWidth="1" />
                <line x1="0" y1="75" x2="320" y2="75" stroke="rgba(20, 184, 166, 0.12)" strokeWidth="1" />

                {/* Gradient area under line */}
                <path d="M 0 80 Q 60 70 100 40 T 200 60 T 320 15 L 320 100 L 0 100 Z" fill="url(#chartAreaGrad)" opacity="0.18" />

                {/* Line Path */}
                <path d="M 0 80 Q 60 70 100 40 T 200 60 T 320 15" stroke="url(#chartLineGrad)" strokeWidth="3.5" strokeLinecap="round" />

                {/* Highlighted Pulse Dot */}
                <circle cx="260" cy="30" r="6" fill="#10b981" />
                <circle cx="260" cy="30" r="11" stroke="#10b981" strokeWidth="2" opacity="0.6">
                  <animate attributeName="r" values="6;14;6" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Tooltip Tag */}
                <g transform="translate(210, 2)">
                  <rect x="0" y="0" width="100" height="22" rx="11" fill="#0d9488" />
                  <text x="50" y="15" fill="#ffffff" fontSize="10" fontWeight="700" textAnchor="middle">LKR 450K Direct</text>
                </g>

                <defs>
                  <linearGradient id="chartLineGrad" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                  <linearGradient id="chartAreaGrad" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="light-card-content">
            <h3>Direct Revenue & Deposit Locks</h3>
            <p>
              0% commission direct-booking engine, WhatsApp payment link dispatch, and 15-minute deposit rules eliminate unpaid holds and fake bookings.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Row: Card 3 (Tourist Police Data Stream) & Card 4 (Trilingual Orbit) */}
      <div className="bento-grid-2">
        {/* CARD 3: Tourist Police Sync Data Stream */}
        <motion.div
          className="light-bento-card card-stream"
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <div className="light-card-glow glow-cyan" />

          <div className="widget-display drop-stream-widget">
            {/* Grid lines background */}
            <div className="grid-lines-bg" />

            <div className="drop-pulse-wrap">
              <svg width="90" height="100" viewBox="0 0 90 100" fill="none">
                <path d="M 45 10 C 65 45 80 60 80 75 C 80 90 65 98 45 98 C 25 98 10 90 10 75 C 10 60 25 45 45 10 Z" fill="url(#dropGrad)" />
                <path d="M 45 18 C 60 48 72 61 72 74 C 72 85 60 92 45 92 C 30 92 18 85 18 74 C 18 61 30 48 45 18 Z" stroke="#ffffff" strokeWidth="1.5" opacity="0.3" />
                <defs>
                  <linearGradient id="dropGrad" x1="45" y1="10" x2="45" y2="98" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#2dd4bf" />
                    <stop offset="50%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="stream-badge-row">
              <span className="live-dot-pill">
                <span className="dot-green" /> Tourist Police Sheet
              </span>
              <span className="synced-text">Synced ✓</span>
            </div>
          </div>

          <div className="light-card-content">
            <h3>Automated Compliance Stream</h3>
            <p>
              Real-time guest check-in passport OCR data streams directly into Sri Lanka Tourist Police spreadsheets, eliminating manual nightly admin work.
            </p>
          </div>
        </motion.div>

        {/* CARD 4: Trilingual Orbit & i18n System */}
        <motion.div
          className="light-bento-card card-orbit"
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <div className="light-card-glow glow-indigo" />

          <div className="widget-display orbit-widget">
            <div className="orbit-rings-wrap">
              {/* Outer orbit circle */}
              <div className="ring ring-3" />
              <div className="ring ring-2" />
              <div className="ring ring-1" />

              {/* Center Core Node */}
              <div className="core-node">
                <span>i18n</span>
              </div>

              {/* Floating Language Nodes on Orbits */}
              <button
                className={`orbit-node node-en ${activeLang === "en" ? "active" : ""}`}
                onClick={() => setActiveLang("en")}
                type="button"
              >
                🇬🇧 EN
              </button>
              <button
                className={`orbit-node node-si ${activeLang === "si" ? "active" : ""}`}
                onClick={() => setActiveLang("si")}
                type="button"
              >
                🇱🇰 SI
              </button>
              <button
                className={`orbit-node node-ta ${activeLang === "ta" ? "active" : ""}`}
                onClick={() => setActiveLang("ta")}
                type="button"
              >
                🇱🇰 TA
              </button>
            </div>

            <div className="orbit-active-info">
              <span className="lang-code-pill">{selectedLangData.code}</span>
              <strong>{selectedLangData.sample}</strong>
            </div>
          </div>

          <div className="light-card-content">
            <h3>Trilingual System (i18n)</h3>
            <p>
              Sinhala (සිංහල), Tamil (தமிழ்), and English (en) dictionary packs configured in <code>hotelos-shared/src/i18n</code> for trilingual staff & guest interfaces.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Full-width 5th Card: Housekeeping Live Kanban Operations */}
      <motion.div
        className="light-bento-card card-kanban-full"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      >
        <div className="kanban-full-layout">
          <div className="light-card-content">
            <span className="bento-tag-small">Live Operations</span>
            <h3>Housekeeping Kanban Board</h3>
            <p>
              Real-time room status lanes (Dirty, Cleaning, Ready) connect front desk check-outs to housekeeper task queues with room readiness and maintenance alerts.
            </p>
          </div>

          <div className="kanban-preview-strip">
            <div className="k-strip-col col-dirty">
              <div className="k-strip-head"><span className="dot red" /> Dirty (2)</div>
              <div className="k-strip-card">Room 104</div>
            </div>
            <div className="k-strip-col col-progress">
              <div className="k-strip-head"><span className="dot amber" /> In Progress (1)</div>
              <div className="k-strip-card active">Room 201 · Cleaning</div>
            </div>
            <div className="k-strip-col col-ready">
              <div className="k-strip-head"><span className="dot green" /> Ready (4)</div>
              <div className="k-strip-card">Room 101 ✓</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
