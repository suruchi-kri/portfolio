"use client";

import { useEffect } from "react";

const SECTION_IDS = ["hero", "work", "about", "process", "testimonials", "contact"];

/**
 * Tracks which section is currently "in view" based on scroll position.
 * Uses the window viewport as the reference so it works whether the scroll
 * container is the document (mobile) or the canvas-scroll div (desktop).
 */
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
      // Threshold: 25% down from the top of the viewport.
      const threshold = window.innerHeight * 0.25;

      let currentId = SECTION_IDS[0];
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

    // Listen on both the canvas (desktop inner scroll) and window (mobile
    // document scroll). Whichever is actually scrolling will fire events.
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    update();

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [canvasRef, setActiveSection]);
}
