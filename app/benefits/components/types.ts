export interface ShiftItem {
  id: string;
  title: string;
  before: string;
  after: string;
}

export const SHIFT_ITEMS: ShiftItem[] = [
  {
    id: "i18n",
    title: "Multi-Language System (i18n)",
    before: "English-only software forcing staff to translate verbally",
    after: "Trilingual UI (Sinhala, Tamil, English) built into every screen"
  },
  {
    id: "police",
    title: "Tourist Police Sync",
    before: "Nightly manual retyping into separate police spreadsheets",
    after: "Real-time hands-free Google Sheets sync on guest check-in"
  },
  {
    id: "housekeeping",
    title: "Housekeeping Kanban",
    before: "Calls and notebook notes to check if Room 104 is clean",
    after: "Live Kanban board with room status dots & readiness flags"
  },
  {
    id: "rbac",
    title: "Role Security (RBAC)",
    before: "Shared passwords with full access to sensitive folios",
    after: "Tailored portal views (Owner, GM, Agent, Housekeeper, F&B)"
  },
  {
    id: "deposit",
    title: "Deposit Lock",
    before: "Unpaid room holds, fake bookings, and manual slip tracking",
    after: "Automated 15-minute deposit timers holding room blocks"
  }
];
