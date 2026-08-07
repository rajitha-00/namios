import React from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  const variantStyles = {
    primary: "bg-[#14b8a6] hover:bg-[#0d9488] text-white shadow-lg shadow-teal-900/20",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700",
    outline: "bg-transparent border border-teal-500/50 text-teal-300 hover:bg-teal-500/10",
    ghost: "bg-transparent hover:bg-white/5 text-slate-300"
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
