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
      className="relative overflow-y-auto overflow-x-hidden"
      style={{
        background: "var(--canvas-bg)",
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Artboard label */}
      <div
        className="chrome-text text-center select-none"
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
        style={{
          maxWidth: 1200,
          background: "var(--cream)",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 8px 40px rgba(0,0,0,0.4)",
          marginBottom: 40,
        }}
      >
        {children}
      </div>
    </div>
  );
}
