import type { ComparisonGroup, PricingPlan } from "../interfaces";

export const pricingPlans: PricingPlan[] = [
  {
    id: "launch",
    name: "Launch",
    description: "Start running rooms and guests digitally.",
    monthlyPrice: 6999
  },
  {
    id: "standard",
    name: "Standard",
    description: "The complete Stay OS for a growing property.",
    monthlyPrice: 9999,
    badge: "Most popular",
    featured: true
  },
  {
    id: "ai",
    name: "Standard + AI",
    description: "Stay OS with an AI operating assistant.",
    monthlyPrice: 17999,
    badge: "AI included"
  },
  {
    id: "pro",
    name: "Pro",
    description: "Every NamiOS application for the whole business.",
    monthlyPrice: 29999,
    badge: "Best value"
  }
];

export const comparisonGroups: ComparisonGroup[] = [
  {
    name: "Property operations",
    features: [
      { name: "Bookings, rooms, and guest profiles", values: { launch: true, standard: true, ai: true, pro: true } },
      { name: "Housekeeping and live room status", values: { launch: "Basic", standard: "Full", ai: "Full", pro: "Full" } },
      { name: "Folios and branded invoices", values: { launch: true, standard: true, ai: true, pro: true } },
      { name: "OTA booking imports", values: { launch: false, standard: true, ai: true, pro: true } },
      { name: "Tourist Police-ready records", values: { launch: false, standard: true, ai: true, pro: true } },
      { name: "Advanced reports and revenue insights", values: { launch: false, standard: true, ai: true, pro: true } }
    ]
  },
  {
    name: "Sales and guest experience",
    features: [
      { name: "Direct-booking engine", values: { launch: false, standard: true, ai: true, pro: true } },
      { name: "Payment links and deposit automation", values: { launch: false, standard: true, ai: true, pro: true } },
      { name: "Nami Dine restaurant POS", values: { launch: false, standard: false, ai: false, pro: true } },
      { name: "Nami Pay settlement workflows", values: { launch: false, standard: false, ai: false, pro: true } }
    ]
  },
  {
    name: "AI, people, and support",
    features: [
      { name: "Nami AI operating assistant", values: { launch: false, standard: false, ai: true, pro: true } },
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
