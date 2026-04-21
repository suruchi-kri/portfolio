"use client";

import { useDesignTool } from "./DesignToolContext";

const sectionLabels: Record<string, string> = {
  hero: "Hero",
  work: "Selected Work",
  about: "About Me",
  process: "My Process",
  testimonials: "Testimonials",
  contact: "Contact",
};

export function StatusBar() {
  const { activeSection, mousePosition } = useDesignTool();

  return (
    <div
      className="chrome-text select-none hidden md:grid"
      style={{
        height: "var(--statusbar-height)",
        background: "var(--chrome-bg-darker)",
        borderTop: "1px solid var(--chrome-border)",
        padding: "0 12px",
        gridRow: 4,
        gridColumn: "1 / -1",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
      }}
    >
      {/* Left — section + coords */}
      <div
        className="flex items-center"
        style={{ gap: 16, fontSize: 10, justifySelf: "start" }}
      >
        <span style={{ color: "var(--chrome-text)" }}>
          {sectionLabels[activeSection] || "Portfolio"}
        </span>
        <span className="hidden md:inline" style={{ color: "var(--chrome-text-muted)" }}>
          X: {mousePosition.x} &nbsp; Y: {mousePosition.y}
        </span>
      </div>

      {/* Center — fixed position regardless of left/right content */}
      <span
        style={{
          color: "var(--chrome-text-muted)",
          fontSize: 10,
          justifySelf: "center",
        }}
      >
        Portfolio.fig
      </span>

      {/* Right — zoom */}
      <div
        className="flex items-center"
        style={{ gap: 8, fontSize: 10, justifySelf: "end" }}
      >
        <button
          style={{ background: "none", border: "none", color: "var(--chrome-text-muted)", fontSize: 12, fontFamily: "inherit", padding: "0 4px" }}
        >
          −
        </button>
        <span style={{ color: "var(--chrome-text)" }}>100%</span>
        <button
          style={{ background: "none", border: "none", color: "var(--chrome-text-muted)", fontSize: 12, fontFamily: "inherit", padding: "0 4px" }}
        >
          +
        </button>
      </div>
    </div>
  );
}
