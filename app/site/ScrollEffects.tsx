"use client";

import { useEffect } from "react";

export const ScrollEffects = () => {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-section, .section-pad")
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
        { rootMargin: "0px 0px -10%", threshold: 0.08 }
      );
      revealTargets.forEach((target) => observer?.observe(target));
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      root.classList.remove("motion-ready");
      root.style.removeProperty("--site-scroll-progress");
    };
  }, []);

  return (
    <div className="site-scroll-progress" aria-hidden="true">
      <i />
    </div>
  );
};
