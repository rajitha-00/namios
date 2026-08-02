"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollComparisonState {
  motionRef: React.RefObject<HTMLDivElement | null>;
  progress: number;
  slideProgress: number;
}

const clamp = (value: number) => Math.min(1, Math.max(0, value));

const smoothstep = (value: number) => {
  const clamped = clamp(value);
  return clamped * clamped * (3 - 2 * clamped);
};

export const useScrollComparison = (): ScrollComparisonState => {
  const motionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const motion = motionRef.current;

    if (!motion) {
      return;
    }

    let frame = 0;

    const update = () => {
      const bounds = motion.getBoundingClientRect();
      const travel = Math.max(1, motion.offsetHeight - window.innerHeight);
      const nextProgress = clamp(-bounds.top / travel);

      setProgress((current) => Math.abs(current - nextProgress) > 0.002 ? nextProgress : current);
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const transitionProgress = (progress - 0.32) / 0.36;

  return {
    motionRef,
    progress,
    slideProgress: smoothstep(transitionProgress)
  };
};
