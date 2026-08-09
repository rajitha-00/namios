export interface ProductNavigationItem {
  name: string;
  description: string;
  href: string;
  status: "Live" | "Coming soon";
  accent: string;
  shortMark: string;
}

export const productNavigationItems: ProductNavigationItem[] = [
  {
    name: "Nami Stay",
    description: "Bookings, guests, rooms, housekeeping, billing, and compliance.",
    href: "/products",
    status: "Live",
    accent: "stay",
    shortMark: "S"
  },
  {
    name: "Nami Dine",
    description: "Restaurant POS, kitchen flow, tables, menus, and outlet revenue.",
    href: "/products/dine",
    status: "Coming soon",
    accent: "dine",
    shortMark: "D"
  },
  {
    name: "Nami People",
    description: "HR, attendance, shifts, leave, and hospitality payroll.",
    href: "/products/people",
    status: "Coming soon",
    accent: "people",
    shortMark: "P"
  },
  {
    name: "Nami Payments",
    description: "Property payments, deposits, settlements, and reconciliation.",
    href: "/products/payments",
    status: "Coming soon",
    accent: "payments",
    shortMark: "₨"
  },
  {
    name: "Nami Portal",
    description: "A direct guest journey for bookings, payments, and requests.",
    href: "/products/portal",
    status: "Coming soon",
    accent: "portal",
    shortMark: "O"
  },
  {
    name: "Nami AI",
    description: "Operational answers, forecasts, automation, and smart actions.",
    href: "/products/ai",
    status: "Coming soon",
    accent: "ai",
    shortMark: "AI"
  }
];

export const primaryNavigationItems = [
  ["Pricing", "/pricing"],
  ["Benefits", "/benefits"],
  ["Offers", "/offers"],
  ["Q&A", "/qa"],
  ["About", "/about"]
] as const;

export const breadcrumbLabels: Record<string, string> = {
  products: "Products",
  dine: "Nami Dine",
  people: "Nami People",
  payments: "Nami Payments",
  portal: "Nami Portal",
  ai: "Nami AI",
  pricing: "Pricing",
  benefits: "Benefits",
  offers: "Offers",
  about: "About",
  contact: "Contact",
  qa: "Why NamiOS",
  privacy: "Privacy policy",
  terms: "Terms & conditions"
};
