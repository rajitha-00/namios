export type BentoLang = "en" | "si" | "ta";
export type BentoRole = "owner" | "reception" | "housekeeping" | "fb";

export interface BentoCardWrapperProps {
  className?: string;
  children: React.ReactNode;
}
