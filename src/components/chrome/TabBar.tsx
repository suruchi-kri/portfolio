"use client";

import { useDesignTool } from "./DesignToolContext";

const tabs = [
  { id: "portfolio", label: "Portfolio.fig", active: true },
  { id: "resume", label: "Resume.fig", active: false },
  { id: "contact", label: "Contact.fig", active: false },
];

export function TabBar() {
  const { canvasRef } = useDesignTool();

  const handleTabClick = (tabId: string) => {
    if (tabId === "contact") {
      const el = canvasRef.current?.querySelector("#contact");
      el?.scrollIntoView({ behavior: "smooth" });
    } else if (tabId === "resume") {
      const el = canvasRef.current?.querySelector("#about");
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      canvasRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className="chrome-text flex items-end select-none"
      style={{
        height: "var(--tabbar-height)",
        background: "var(--chrome-bg-darker)",
        borderBottom: "1px solid var(--chrome-border)",
        gridColumn: "1 / -1",
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className="flex items-center h-[32px] relative"
          style={{
            padding: "0 16px",
            background: tab.active ? "var(--chrome-bg)" : "transparent",
            color: tab.active ? "var(--chrome-text)" : "var(--chrome-text-muted)",
            border: "none",
            borderTop: tab.active ? "2px solid var(--chrome-accent)" : "2px solid transparent",
            borderRight: "1px solid var(--chrome-border)",
            fontSize: 11,
            fontFamily: "inherit",
            gap: 8,
          }}
        >
          {/* File icon */}
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 1h5.5L13 4.5V14a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z" />
            <path d="M9 1v4h4" />
          </svg>
          {tab.label}
          {/* Close icon */}
          <svg
            width="10" height="10" viewBox="0 0 10 10"
            fill="none" stroke="currentColor" strokeWidth="1.5"
            style={{ opacity: 0.4, marginLeft: 4 }}
          >
            <path d="M2 2l6 6M8 2l-6 6" />
          </svg>
        </button>
      ))}

      {/* New tab + button */}
      <button
        className="flex items-center justify-center"
        style={{
          width: 28,
          height: 32,
          background: "transparent",
          border: "none",
          color: "var(--chrome-text-muted)",
          fontSize: 16,
          fontFamily: "inherit",
        }}
      >
        +
      </button>
    </div>
  );
}
