export const APP_CONFIG = {
  name: "NamiOS",
  tagline: "The modern Hotel OS for Sri Lankan properties",
  routes: {
    home: "/",
    benefits: "/benefits",
    pricing: "/pricing",
    offers: "/offers",
    contact: "/contact"
  },
  limits: {
    trialDays: 30,
    depositLockMinutes: 15
  }
} as const;
