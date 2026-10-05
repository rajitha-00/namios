import type { ComparisonGroup, PricingPlan } from "../interfaces";

export const pricingPlans: PricingPlan[] = [
  {
    id: "launch",
    name: "Launch",
    description: "Front-desk POS & walk-ins with basic iCal export (no 2-way sync).",
    monthlyPrice: 6999
  },
  {
    id: "standard",
    name: "Standard",
    description: "Complete Stay OS with 2-way OTA channel synchronization.",
    monthlyPrice: 19999,
    badge: "Most popular",
    featured: true
  },
  {
    id: "ai",
    name: "Standard + AI",
    description: "Stay OS with 2-way OTA sync and Nami AI operating assistant.",
    monthlyPrice: 28999,
    badge: "AI included"
  },
  {
    id: "pro",
    name: "Pro",
    description: "Full suite + multi-channel OTA sync for the whole business.",
    monthlyPrice: 39999,
    badge: "Best value"
  }
];

export const comparisonGroups: ComparisonGroup[] = [
  {
    name: "Property operations",
    features: [
      { name: "Bookings, rooms, and guest profiles", values: { launch: true, standard: true, ai: true, pro: true } },
      { name: "Housekeeping and live room status", values: { launch: true, standard: true, ai: true, pro: true } },
      { name: "Folios and branded invoices", values: { launch: true, standard: true, ai: true, pro: true } },
      { name: "Role-Based Access Control (RBAC)", values: { launch: false, standard: true, ai: true, pro: true } },
      { name: "Channel sync status (OTA)", values: { launch: "No Sync (iCal only)", standard: "2-Way Sync", ai: "2-Way Sync + AI", pro: "Multi-Channel Sync" } },
      { name: "Tourist Police Google Sheet Sync", values: { launch: true, standard: "Real-time", ai: "Real-time", pro: "Real-time" } },
      { name: "Advanced reports and revenue insights", values: { launch: true, standard: true, ai: true, pro: true } }
    ]
  },
  {
    name: "Sales and guest experience",
    features: [
      { name: "Direct-booking engine", values: { launch: true, standard: true, ai: true, pro: true } },
      { name: "Hybrid WhatsApp Dispatcher", values: { launch: true, standard: true, ai: true, pro: true } },
      { name: "Payment links and deposit automation", values: { launch: true, standard: true, ai: true, pro: true } },
      { name: "Nami Dine restaurant POS", values: { launch: false, standard: false, ai: true, pro: true } },
      { name: "Front desk hardware leasing", values: { launch: "Optional", standard: "Optional", ai: "Optional", pro: "Optional" } },
      { name: "Nami Pay settlement workflows", values: { launch: false, standard: false, ai: false, pro: true } }
    ]
  },
  {
    name: "AI, people, and support",
    features: [
      { name: "Nami AI operating assistant", values: { launch: false, standard: false, ai: true, pro: true } },
      { name: "Guest promotion campaigns", values: { launch: true, standard: true, ai: true, pro: true } },
      { name: "AI summaries, forecasts, and suggestions", values: { launch: false, standard: false, ai: true, pro: true } },
      { name: "Nami People HR and attendance", values: { launch: false, standard: false, ai: false, pro: true } },
      { name: "Payroll workflows and payslips", values: { launch: false, standard: false, ai: false, pro: true } },
      { name: "Onboarding and team training", values: { launch: "Guided", standard: "Included", ai: "Included", pro: "Priority" } },
      { name: "1-month free trial", values: { launch: true, standard: true, ai: true, pro: true } }
    ]
  },
  {
    name: "Annual plan benefits",
    features: [
      { name: "10% annual subscription saving", values: { launch: true, standard: true, ai: true, pro: true } },
      { name: "Custom direct-booking website", values: { launch: true, standard: true, ai: true, pro: true } },
      { name: "Branding and social-media launch package", values: { launch: false, standard: false, ai: false, pro: true } }
    ]
  }
];
