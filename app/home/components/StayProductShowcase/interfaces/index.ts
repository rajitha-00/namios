export type StaySceneKey =
  | "dashboard"
  | "bookings"
  | "guests"
  | "rooms"
  | "housekeeping"
  | "payments"
  | "touristPolice"
  | "otaImport"
  | "channels"
  | "settings";

export interface StaySceneDefinition {
  key: StaySceneKey;
  number: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
}

export interface ProductFrameProps {
  activeNav: string;
  children: React.ReactNode;
  propertyLabel?: string;
}
