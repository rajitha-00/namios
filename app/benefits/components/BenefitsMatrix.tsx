"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  I18nVisual,
  TouristPoliceVisual,
  HousekeepingVisual,
  RbacVisual,
  DepositLockVisual
} from "./AnimatedVisuals";
import { comparisonGroups, pricingPlans } from "../../pricing/constants";

export function BenefitsMatrix() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const coreModules = [
    {
      id: "i18n",
      category: "operations",
      title: "Multi-Language System (i18n)",
      subtitle: "Locales & Translation Packs for Sri Lanka",
      description:
        "Full Sinhala (si), Tamil (ta), and English (en) localization dictionaries. Staff and guest interfaces adapt instantly so team members work in their native language.",
      component: <I18nVisual />,
      featured: true
    },
    {
      id: "police",
      category: "operations",
      title: "Tourist Police Google Sheets Sync",
      subtitle: "Automated Compliance Stream",
      description:
        "Real-time guest check-in data streams straight into designated Sri Lanka Tourist Police spreadsheets, eliminating manual nightly admin and retyping.",
      component: <TouristPoliceVisual />,
      featured: false
    },
    {
      id: "housekeeping",
      category: "operations",
      title: "Housekeeping Kanban Board",
      subtitle: "Live Task & Room Status",
      description:
        "Real-time Kanban lanes connect front desk check-outs to housekeeper task queues with room readiness, cleaning logs, and maintenance alerts.",
      component: <HousekeepingVisual />,
      featured: false
    },
    {
      id: "rbac",
      category: "operations",
      title: "Role-Based Access Control (RBAC)",
      subtitle: "Dynamic Portal Auth Middleware",
      description:
        "Granular role enforcement for Owner, GM, Front Desk Agent, Housekeeper, and F&B Captain. Ensures sensitive folios and revenue stay protected.",
      component: <RbacVisual />,
      featured: false
    },
    {
      id: "deposit",
      category: "sales",
      title: "Prevent Fake Bookings (Deposit Lock)",
      subtitle: "Advance Payment & Time Window Controls",
      description:
        "Configurable deposit rules, advance payment amounts, and payment window timers hold room blocks until bank deposits or payment links are verified.",
      component: <DepositLockVisual />,
      featured: false
    }
  ];

  const filterTabs = [
    { id: "all", label: "All Key Capabilities" },
    { id: "operations", label: "Property Operations & Compliance" },
    { id: "sales", label: "Sales & Deposit Automation" }
  ];

  const filteredModules = activeTab === "all"
    ? coreModules
    : coreModules.filter((m) => m.category === activeTab);

  // Stagger variants for scroll-driven entry
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="benefits-matrix-wrapper">
      {/* Compact Category Filter Bar */}
      <div className="matrix-filter-bar">
        {filterTabs.map((tab) => {
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              className={`filter-btn ${isSelected ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              {isSelected && (
                <motion.div
                  className="active-filter-bg"
                  layoutId="activeFilterTab"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              <span className="filter-btn-text">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Modern 2-Column Bento Grid */}
      <motion.div
        className="bento-grid-2col"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        <AnimatePresence mode="popLayout">
          {filteredModules.map((item) => (
            <motion.article
              layout
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`bento-card ${item.featured && activeTab === "all" ? "bento-card-featured" : ""}`}
            >
              <div className="bento-card-inner">
                <div className="bento-card-header">
                  <span className="bento-badge">{item.subtitle}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="bento-visual-container">
                  {item.component}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>


    </div>
  );
}
