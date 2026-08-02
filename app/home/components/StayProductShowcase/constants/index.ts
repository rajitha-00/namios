import type { StaySceneDefinition } from "../interfaces";

export const stayScenes: StaySceneDefinition[] = [
  {
    key: "dashboard",
    number: "01",
    label: "Dashboard",
    eyebrow: "A live command centre",
    title: "Know what needs attention—before anyone asks.",
    description: "Arrivals, revenue, room readiness, and booking pace come together in one focused morning view."
  },
  {
    key: "bookings",
    number: "02",
    label: "Bookings",
    eyebrow: "Visual reservation control",
    title: "Move stays, protect deposits, and fill every gap.",
    description: "A visual room calendar reveals availability, channel activity, and revenue opportunities instantly."
  },
  {
    key: "guests",
    number: "03",
    label: "Guests",
    eyebrow: "One guest memory",
    title: "Personal service without relying on staff memory.",
    description: "Identity, preferences, payments, notes, and every stay milestone travel with the guest."
  },
  {
    key: "rooms",
    number: "04",
    label: "Rooms",
    eyebrow: "Floor plans and room inventory",
    title: "See every room, category, and floor in one system.",
    description: "Visual floor plans and live room states make allocation and inventory decisions effortless."
  },
  {
    key: "housekeeping",
    number: "05",
    label: "Housekeeping",
    eyebrow: "Front desk and floors, aligned",
    title: "Turn rooms faster without chasing the team.",
    description: "Live room states, assignments, inspections, and maintenance alerts keep every handoff clear."
  },
  {
    key: "payments",
    number: "06",
    label: "Payments",
    eyebrow: "Revenue and payment intelligence",
    title: "Follow every rupee from reservation to settlement.",
    description: "Revenue, ADR, RevPAR, payment methods, and outstanding balances stay visible and export-ready."
  },
  {
    key: "touristPolice",
    number: "07",
    label: "Tourist Police",
    eyebrow: "Sri Lanka-ready compliance",
    title: "Turn mandatory reporting into one reliable workflow.",
    description: "Guest records are prepared, validated, synced, and audited without retyping nightly reports."
  },
  {
    key: "otaImport",
    number: "08",
    label: "OTA Import",
    eyebrow: "Faster channel onboarding",
    title: "Bring OTA reservations in without spreadsheet cleanup.",
    description: "Upload channel reports, validate rows, catch duplicates, and create clean bookings in minutes."
  },
  {
    key: "channels",
    number: "09",
    label: "Channel Manager",
    eyebrow: "Connected distribution",
    title: "Keep every sales channel connected and visible.",
    description: "Booking.com, iCal, Airbnb, and custom integrations report their status from one control centre."
  },
  {
    key: "settings",
    number: "10",
    label: "Settings",
    eyebrow: "A Stay OS shaped around the property",
    title: "Configure the operation once. Keep every team aligned.",
    description: "Profile, layout, branding, team, billing, automation, and compliance settings live together."
  }
];
