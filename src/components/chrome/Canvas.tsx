"use client";

import { ReactNode, useCallback } from "react";
import { useDesignTool } from "./DesignToolContext";
import { useActiveSection } from "./useActiveSection";

export function Canvas({ children }: { children: ReactNode }) {
  const { canvasRef, setMousePosition, setActiveSection } = useDesignTool();

  useActiveSection(canvasRef, setActiveSection);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: Math.round(e.clientX - rect.left),
        y: Math.round(e.clientY - rect.top + (e.currentTarget.scrollTop || 0)),
      });
    },
    [setMousePosition]
  );

  return (
    <div
      ref={canvasRef}
      className="canvas-scroll relative overflow-y-auto overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
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
