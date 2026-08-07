"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const ScrollEffects = () => {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-section, .section-pad, .art-showcase")
    );

    root.classList.add("motion-ready");

    const updateProgress = () => {
      const maximum = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maximum > 0 ? Math.min(1, Math.max(0, window.scrollY / maximum)) : 0;
      root.style.setProperty("--site-scroll-progress", progress.toString());
    };

    let observer: IntersectionObserver | undefined;
    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.setAttribute("data-visible", "true"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).setAttribute("data-visible", "true");
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "150px 0px 0px", threshold: 0.01 }
      );

      revealTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        // Instantly reveal sections that are currently inside or near the initial viewport
        if (rect.top < window.innerHeight * 1.25) {
          target.setAttribute("data-visible", "true");
        } else {
          observer?.observe(target);
        }
      });
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [pathname]);

  return (
    <div className="site-scroll-progress" aria-hidden="true">
      <i />
    </div>
  );
};
