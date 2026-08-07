"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/* 1. Multi-Language System (i18n) Visual                             */
/* ------------------------------------------------------------------ */
export function I18nVisual() {
  const [selectedLang, setSelectedLang] = useState<"en" | "si" | "ta">("en");

  const translations = {
    en: {
      flag: "🇬🇧",
      label: "English",
      code: "en",
      title: "Welcome to Nami Stay",
      subtitle: "Guest Check-in & Passport Verification",
      status: "Ready for arrival",
      dictionary: "en-US · UTF-8"
    },
    si: {
      flag: "🇱🇰",
      label: "සිංහල",
      code: "si",
      title: "නමි ස්ටේ වෙත සාදරයෙන් පිළිගනිමු",
      subtitle: "අමුත්තන්ගේ ලියාපදිංචිය සහ විදේශගමන් බලපත්‍ර පරීක්ෂාව",
      status: "පැමිණීමට සූදානම්",
      dictionary: "si-LK · Trilingual Pack"
    },
    ta: {
      flag: "🇱🇰",
      label: "தமிழ்",
      code: "ta",
      title: "நமி ஸ்டே உங்களை அன்புடன் வரவேற்கிறது",
      subtitle: "விருந்தினர் பதிவு மற்றும் கடவுச்சீட்டு சரிபார்ப்பு",
      status: "வருகைக்கு தயார்",
      dictionary: "ta-LK · Trilingual Pack"
    }
  };

  const active = translations[selectedLang];

  return (
    <div className="benefit-visual-box i18n-box">
      {/* Ambient background glow */}
      <div className="ambient-glow teal-glow" />

      {/* Animated Language Tabs */}
      <div className="i18n-lang-selector">
        {(Object.keys(translations) as Array<keyof typeof translations>).map((key) => {
          const item = translations[key];
          const isSelected = selectedLang === key;
          return (
            <button
              key={key}
              className={`lang-tab-btn ${isSelected ? "active" : ""}`}
              onClick={() => setSelectedLang(key)}
              type="button"
            >
              {isSelected && (
                <motion.div
                  className="active-tab-bg"
                  layoutId="activeLangPill"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="tab-content">
                {item.flag} {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Animated Content Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedLang}
          initial={{ opacity: 0, y: 10, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.97 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="i18n-card-preview"
        >
          <div className="i18n-card-head">
            <div className="pulse-indicator">
              <span className="pulse-ring" />
              <span className="pulse-dot" />
              <span className="pulse-text">Live i18n Dictionary</span>
            </div>
            <span className="i18n-badge">{active.dictionary}</span>
          </div>

          <h4 className="i18n-title">{active.title}</h4>
          <p className="i18n-sub">{active.subtitle}</p>

          <div className="i18n-footer">
            <motion.div
              className="i18n-status-pill"
              whileHover={{ scale: 1.05 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{active.status}</span>
            </motion.div>

            <span className="i18n-code-tag">i18n[{active.code}]</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Animated SVG Stream */}
      <div className="svg-stream-wrap">
        <svg viewBox="0 0 320 40" fill="none" className="stream-svg">
          <path d="M 10 20 H 310" stroke="rgba(20, 184, 166, 0.2)" strokeWidth="2" strokeDasharray="4 4" />
          <motion.circle
            cx="10"
            cy="20"
            r="4"
            fill="#14b8a6"
            animate={{ cx: [10, 310] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Tourist Police Google Sheets Sync Visual                       */
/* ------------------------------------------------------------------ */
export function TouristPoliceVisual() {
  return (
    <div className="benefit-visual-box police-sync-box">
      <div className="ambient-glow green-glow" />

      <div className="sync-pipeline">
        {/* Node 1: PMS Check-in */}
        <motion.div
          className="sync-node source-node"
          whileHover={{ y: -3 }}
        >
          <div className="node-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <polyline points="17 11 19 13 23 9" />
            </svg>
          </div>
          <span>Guest Check-in</span>
          <small>Passport / NIC OCR</small>
        </motion.div>

        {/* Animated Connector */}
        <div className="sync-connector">
          <svg width="90" height="36" viewBox="0 0 90 36" fill="none">
            <path d="M 5 18 H 85" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1s" repeatCount="indefinite" />
            </path>
            <motion.circle
              cx="5"
              cy="18"
              r="5"
              fill="#10b981"
              animate={{ cx: [5, 85], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
          <span className="live-pulse-label">Auto-Stream</span>
        </div>

        {/* Node 2: Google Sheets Registry */}
        <motion.div
          className="sync-node sheet-node"
          whileHover={{ y: -3 }}
        >
          <div className="node-icon sheet-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="3" y1="15" x2="21" y2="15" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </div>
          <span>Tourist Police Sheet</span>
          <small>Real-time Google Sync</small>
        </motion.div>
      </div>

      {/* Animated Live Row Stream */}
      <motion.div
        className="sheet-preview-row"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="row-left">
          <span className="row-num">#148</span>
          <strong>Villa 02 · A. Silva (Passport)</strong>
        </div>
        <motion.span
          className="badge-synced"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Synced ✓
        </motion.span>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Housekeeping Kanban Module Visual                                */
/* ------------------------------------------------------------------ */
export function HousekeepingVisual() {
  const [activeLane, setActiveLane] = useState<number>(1);

  const lanes = [
    { title: "Dirty", count: 2, dot: "dirty", rooms: ["Room 104", "Villa 01"] },
    { title: "In Progress", count: 1, dot: "progress", rooms: ["Room 201 · Cleaning"] },
    { title: "Ready", count: 4, dot: "ready", rooms: ["Room 101 ✓", "Room 102 ✓"] }
  ];

  return (
    <div className="benefit-visual-box housekeeping-box">
      <div className="ambient-glow amber-glow" />

      <div className="kanban-mini-board">
        {lanes.map((lane, idx) => {
          const isSelected = activeLane === idx;
          return (
            <motion.div
              key={lane.title}
              className={`kanban-column ${isSelected ? "active" : ""}`}
              onClick={() => setActiveLane(idx)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="kanban-col-head">
                <span className={`dot ${lane.dot}`} /> {lane.title} ({lane.count})
              </div>

              {lane.rooms.map((room) => (
                <motion.div
                  key={room}
                  className={`kanban-card ${isSelected ? "highlight-card" : ""}`}
                  layout
                >
                  <span>{room}</span>
                </motion.div>
              ))}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Role-Based Access Control (RBAC) Visual                         */
/* ------------------------------------------------------------------ */
export function RbacVisual() {
  const [role, setRole] = useState<"owner" | "reception" | "housekeeping" | "fb">("owner");

  const roleConfigs = {
    owner: {
      label: "Owner / GM",
      badgeClass: "gold",
      permissions: ["Full Revenue & Folios", "Audit Logs", "Staff Permissions", "OTA Import"]
    },
    reception: {
      label: "Front Desk",
      badgeClass: "teal",
      permissions: ["Check-in / Check-out", "Passport OCR", "Deposit Link Dispatch"]
    },
    housekeeping: {
      label: "Housekeeper",
      badgeClass: "blue",
      permissions: ["Room Status Board", "Cleaning Tasks", "Maintenance Alerts"]
    },
    fb: {
      label: "F&B Captain",
      badgeClass: "purple",
      permissions: ["Nami Dine POS", "Table Orders", "Room Billing Charges"]
    }
  };

  const current = roleConfigs[role];

  return (
    <div className="benefit-visual-box rbac-box">
      <div className="ambient-glow purple-glow" />

      {/* Role Tabs */}
      <div className="role-selector-tabs">
        {(Object.keys(roleConfigs) as Array<keyof typeof roleConfigs>).map((key) => {
          const isSelected = role === key;
          return (
            <button
              key={key}
              className={`role-tab-btn ${isSelected ? "active" : ""}`}
              onClick={() => setRole(key)}
              type="button"
            >
              {isSelected && (
                <motion.div
                  className="active-role-bg"
                  layoutId="activeRoleTab"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="role-tab-text">{roleConfigs[key].label}</span>
            </button>
          );
        })}
      </div>

      {/* Permissions Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={role}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="role-permissions-card"
        >
          <div className="role-card-header">
            <span className={`role-badge ${current.badgeClass}`}>{current.label}</span>
            <span className="rbac-shield">🛡️ requirePortalRole</span>
          </div>

          <ul className="permission-list">
            {current.permissions.map((perm, index) => (
              <motion.li
                key={perm}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{perm}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Prevent Fake Booking (Deposit Lock) Visual                      */
/* ------------------------------------------------------------------ */
export function DepositLockVisual() {
  return (
    <div className="benefit-visual-box deposit-box">
      <div className="ambient-glow blue-glow" />

      <div className="deposit-flow">
        <motion.div
          className="flow-step"
          whileHover={{ x: 4 }}
        >
          <span className="step-num">1</span>
          <div className="step-info">
            <strong>Guest Booking Request</strong>
            <small>Direct website / WhatsApp</small>
          </div>
        </motion.div>

        <div className="flow-arrow">↓</div>

        <motion.div
          className="flow-step active-step"
          whileHover={{ x: 4 }}
        >
          <span className="step-num active-num">2</span>
          <div className="step-info">
            <strong>Payment Link Dispatched</strong>
            <span className="timer-pill">⏳ 15-min deposit window</span>
          </div>
        </motion.div>

        <div className="flow-arrow">↓</div>

        <motion.div
          className="flow-step locked-step"
          whileHover={{ x: 4 }}
        >
          <span className="step-num locked-num">3</span>
          <div className="step-info">
            <strong>Bank Deposit Confirmed</strong>
            <span className="locked-badge">🔒 Room Block Locked</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
