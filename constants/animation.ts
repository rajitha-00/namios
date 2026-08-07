import type { Variants, Transition } from "framer-motion";

export const GOOGLE_FLOW_SPRING: Transition = {
  type: "spring" as const,
  stiffness: 260,
  damping: 24,
  mass: 0.8
};

export const BENTO_CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

export const BENTO_CARD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: GOOGLE_FLOW_SPRING
  }
};

export const CARD_HOVER_FLOW = {
  y: -6,
  scale: 1.01,
  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }
};
