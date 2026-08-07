"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BENTO_CARD_VARIANTS, CARD_HOVER_FLOW } from "@/constants/animation";
import type { BentoLang } from "../types";

export function HeroTrilingualCard() {
  const [lang, setLang] = useState<BentoLang>("en");

  const translations = {
    en: { badge: "EN", code: "en-US", heading: "Guest Check-in & Registration", sub: "Passport OCR scanned · Folio #1084 open", status: "Ready for arrival", dict: "locales/en.json" },
    si: { badge: "SI", code: "si-LK", heading: "අමුත්තන්ගේ ලියාපදිංචිය", sub: "විදේශගමන් බලපත්‍රය පරීක්ෂා කරන ලදී · ෆෝලියෝ #1084", status: "පැමිණීමට සූදානම්", dict: "locales/si.json" },
    ta: { badge: "TA", code: "ta-LK", heading: "விருந்தினர் பதிவு மற்றும் சரிபார்ப்பு", sub: "கடவுச்சீட்டு சரிபார்க்கப்பட்டது · ஃபோலியோ #1084", status: "வருகைக்கு தயார்", dict: "locales/ta.json" }
  };

  const pack = translations[lang];

  return (
    <motion.article
      variants={BENTO_CARD_VARIANTS}
      whileHover={CARD_HOVER_FLOW}
      className="bento-card bento-hero-card bento-span-2x1"
    >
      <div className="bento-card-header">
        <span className="bento-tag-pill bento-teal-tag">MULTI-LANGUAGE I18N</span>
        <h3 className="bento-title">Trilingual System (Sinhala, Tamil, English)</h3>
        <p className="bento-desc">
          Locales & translation packs configured in <code className="bento-inline-code">hotelos-shared/src/i18n</code>. Staff and guests switch between English, සිංහල, and தமிழ் instantly.
        </p>
      </div>

      <div className="bento-visual-wrapper">
        <div className="bento-glow bento-teal-glow" />

        <div className="bento-tab-bar">
          {(["en", "si", "ta"] as const).map((key) => {
            const active = lang === key;
            const labels = { en: "English", si: "සිංහල", ta: "தமிழ்" };
            return (
              <button
                key={key}
                onClick={() => setLang(key)}
                className={`bento-tab-btn ${active ? "is-active" : ""}`}
                type="button"
              >
                {active && (
                  <motion.div
                    layoutId="heroActiveLangPill"
                    className="bento-tab-pill"
                    transition={{ type: "spring" as const, stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="bento-tab-text">{labels[key]}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0.7, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.7, y: -4 }}
            transition={{ duration: 0.15 }}
            className="bento-i18n-preview"
          >
            <div className="bento-card-topbar">
              <div className="bento-live-badge">
                <span className="bento-pulse-dot" />
                <span>Live i18n Stream</span>
              </div>
              <span className="bento-code-tag">{pack.code}</span>
            </div>

            <h4 className="bento-preview-title">{pack.heading}</h4>
            <p className="bento-preview-desc">{pack.sub}</p>

            <div className="bento-preview-footer">
              <span className="bento-status-pill">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {pack.status}
              </span>
              <span className="bento-dict-tag">{pack.dict}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
