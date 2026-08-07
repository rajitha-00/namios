import React from "react";
import { cn } from "@/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "emerald" | "sky" | "teal" | "purple" | "amber" | "gold";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantStyles = {
    default: "bg-slate-800/80 text-slate-200 border-slate-700",
    emerald: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    sky: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    teal: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    purple: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    amber: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    gold: "bg-amber-400/20 text-amber-200 border-amber-400/40"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wider rounded-full border backdrop-blur-md transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
