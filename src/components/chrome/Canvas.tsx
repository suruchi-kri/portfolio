"use client";

import { ReactNode, useEffect } from "react";
import { useDesignTool } from "./DesignToolContext";
import { useActiveSection } from "./useActiveSection";
import { MobileHeader } from "./MobileHeader";

export function Canvas({ children }: { children: ReactNode }) {
  const { canvasRef, setMousePosition, setActiveSection } = useDesignTool();

  useActiveSection(canvasRef, setActiveSection);

  // Track mouse position for the desktop status bar X/Y readout. Skip entirely
  // on touch devices — iOS fires synthetic mousemove on every touch, which
  // triggers a state update and re-render storm that can swallow taps.
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const isFineMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFineMouse) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMousePosition({
        x: Math.round(e.clientX - rect.left),
        y: Math.round(e.clientY - rect.top + (el.scrollTop || 0)),
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [canvasRef, setMousePosition]);

  return (
    <div
      ref={canvasRef}
      className="canvas-scroll relative overflow-y-auto overflow-x-hidden"
    >
      {/* Mobile header — sticky at top of canvas, hidden on desktop */}
      <MobileHeader />

      {/* Artboard label — desktop only */}
      <div
        className="chrome-text text-center select-none hidden md:block"
        style={{
          padding: "16px 0 8px",
          color: "var(--chrome-text-muted)",
          fontSize: 10,
        }}
      >
        Portfolio — 1440 × Auto
      </div>

      {/* Artboard */}
      <div
        className="artboard relative mx-auto"
        style={{ background: "var(--cream)" }}
      >
        {children}
      </div>
    </div>
  );
}
