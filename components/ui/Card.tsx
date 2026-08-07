import React from "react";
import { cn } from "@/utils/cn";
import { THEME_TOKENS } from "@/constants/theme";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export function Card({ className, interactive = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        interactive ? THEME_TOKENS.glassmorphism.cardInteractive : THEME_TOKENS.glassmorphism.card,
        "p-6 relative overflow-hidden flex flex-col justify-between",
        className
      )}
      {...props}
    />
  );
}
