export interface UpcomingApplication {
  name: string;
  eyebrow: string;
  description: string;
  promise: string;
  accent: string;
  capabilities: string[];
}

export const upcomingApplications: Record<string, UpcomingApplication> = {
  dine: {
    name: "Nami Dine",
    eyebrow: "Restaurant operations",
    description: "A connected dining workspace for hotel restaurants, cafés, bars, room service, and multi-outlet teams.",
    promise: "Orders, kitchens, tables, inventory signals, guest folios, and outlet revenue—moving together.",
    accent: "dine",
    capabilities: ["Restaurant POS", "Kitchen flow", "Menu and table control", "Stay folio posting"]
  },
  people: {
    name: "Nami People",
    eyebrow: "HR and payroll",
    description: "A people operations workspace designed around hospitality shifts, attendance, leave, and payroll.",
    promise: "Give managers one reliable view of who is working, what is changing, and what payroll needs next.",
    accent: "people",
    capabilities: ["Staff profiles", "Shifts and attendance", "Leave workflows", "Payroll preparation"]
  },
  payments: {
    name: "Nami Payments",
    eyebrow: "Property payments",
    description: "A payment operations layer for deposits, online collections, settlements, and daily reconciliation.",
    promise: "Connect the payment to the guest, booking, outlet, and invoice without another spreadsheet.",
    accent: "payments",
    capabilities: ["Booking deposits", "Payment links", "Settlement tracking", "Reconciliation"]
  },
  portal: {
    name: "Nami Portal",
    eyebrow: "Direct guest experience",
    description: "A branded guest portal for direct bookings, pre-arrival details, payments, and stay requests.",
    promise: "Turn the property website into a connected direct channel that continues beyond confirmation.",
    accent: "portal",
    capabilities: ["Direct booking", "Guest self-service", "Online payments", "Stay requests"]
  },
  ai: {
    name: "Nami AI",
    eyebrow: "Hospitality intelligence",
    description: "An AI operating assistant that understands the property’s live workflows, numbers, and priorities.",
    promise: "Move from dashboards to clear answers, forecasts, suggested actions, and safe automation.",
    accent: "ai",
    capabilities: ["Operational answers", "Demand forecasting", "Task automation", "Exception alerts"]
  }
};
