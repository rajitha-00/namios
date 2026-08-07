export const THEME_TOKENS = {
  colors: {
    background: "bg-[#061a25]",
    surface: "bg-[#092231]/90",
    surfaceHover: "hover:bg-[#0d2d40]",
    surfaceActive: "bg-[#11384f]",
    border: "border-[#1e485e]/60",
    borderGlow: "hover:border-[#14b8a6]/60",
    borderActive: "border-[#14b8a6]/90",
    primary: "text-[#14b8a6]",
    primaryBg: "bg-[#14b8a6] hover:bg-[#0d9488]",
    accent: "text-[#10b981]",
    accentBg: "bg-[#10b981]",
    textHeading: "text-slate-100",
    textBody: "text-slate-300",
    textMuted: "text-slate-400",
    ink: "#082f43",
    teal: "#0a384d",
    sea: "#2aa6a1",
    mint: "#dff7ee",
    sun: "#f4b85f"
  },
  glassmorphism: {
    card: "backdrop-blur-xl bg-[#092231]/85 border border-[#1e485e]/60 shadow-2xl shadow-black/30 rounded-3xl",
    cardInteractive: "backdrop-blur-xl bg-[#092231]/85 border border-[#1e485e]/60 hover:border-[#14b8a6]/50 shadow-2xl shadow-black/30 rounded-3xl transition-all duration-300",
    cardLight: "backdrop-blur-xl bg-white/90 border border-slate-200/90 shadow-xl shadow-slate-900/5 rounded-3xl",
    pill: "backdrop-blur-md bg-white/10 border border-white/15 rounded-full text-slate-200",
    glowOrb: "absolute rounded-full blur-3xl opacity-20 pointer-events-none"
  },
  layout: {
    bentoGrid: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[minmax(180px,auto)]",
    containerPadding: "px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
  }
} as const;
