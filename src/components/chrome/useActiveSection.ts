"use client";

import { useEffect } from "react";

const SECTION_IDS = ["hero", "work", "about", "process", "testimonials", "contact"];

export function useActiveSection(
  canvasRef: React.RefObject<HTMLDivElement | null>,
  setActiveSection: (id: string) => void
) {
  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const containerRect = container.getBoundingClientRect();
      // Threshold line: 25% down from top of the canvas viewport
      const threshold = containerRect.top + containerRect.height * 0.25;

      let currentId = SECTION_IDS[0];

      // Walk sections in order; the last one whose top is above the threshold wins
      for (const id of SECTION_IDS) {
        const el = container.querySelector(`#${id}`) as HTMLElement | null;
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold) {
          currentId = id;
        } else {
          break;
        }
      }

      setActiveSection(currentId);
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Run once on mount
    update();

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [canvasRef, setActiveSection]);
}
