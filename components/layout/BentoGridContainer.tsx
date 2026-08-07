import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";
import { BENTO_CONTAINER_VARIANTS } from "@/constants/animation";

export interface BentoGridContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export function BentoGridContainer({ className, children, ...props }: BentoGridContainerProps) {
  return (
    <motion.div
      className={cn("bento-grid-container", className)}
      variants={BENTO_CONTAINER_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
