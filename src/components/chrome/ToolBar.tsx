"use client";

import { useState } from "react";
import { useDesignTool } from "./DesignToolContext";

interface Tool {
  id: string;
  label: string;
  shortcut: string;
  section?: string;
  icon: React.ReactNode;
  group?: boolean; // divider after this tool
}

const tools: Tool[] = [
  {
    id: "move",
    label: "Who Am I?",
    shortcut: "V",
    section: "hero",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M2 2l5.5 12 1.5-4 4-1.5L2 2z" />
        <path d="M9 9l4 4" />
      </svg>
    ),
    group: true,
  },
  {
    id: "frame",
    label: "Projects I've Done",
    shortcut: "F",
    section: "work",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="3" width="10" height="10" />
        <line x1="3" y1="0" x2="3" y2="3" />
        <line x1="13" y1="0" x2="13" y2="3" />
        <line x1="3" y1="13" x2="3" y2="16" />
        <line x1="13" y1="13" x2="13" y2="16" />
        <line x1="0" y1="3" x2="3" y2="3" />
        <line x1="13" y1="3" x2="16" y2="3" />
        <line x1="0" y1="13" x2="3" y2="13" />
        <line x1="13" y1="13" x2="16" y2="13" />
      </svg>
    ),
    group: true,
  },
  {
    id: "text",
    label: "About Me",
    shortcut: "T",
    section: "about",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 3h10M8 3v10M5.5 13h5" />
      </svg>
    ),
  },
  {
    id: "pen",
    label: "My Process",
    shortcut: "P",
    section: "process",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2L6 8v4h4l6-6M10 4l2 2" />
      </svg>
    ),
    group: true,
  },
  {
    id: "eyedropper",
    label: "Kind Words About Me",
    shortcut: "I",
    section: "testimonials",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M13 3a2 2 0 00-3 0L4 9l-1 4 4-1 6-6a2 2 0 000-3z" />
        <path d="M10 3l3 3" />
      </svg>
    ),
  },
  {
    id: "comment",
    label: "Let's Talk",
    shortcut: "C",
    section: "contact",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M2 3a1 1 0 011-1h10a1 1 0 011 1v7a1 1 0 01-1 1H6l-3 3V11H3a1 1 0 01-1-1V3z" />
      </svg>
    ),
  },
];

export function ToolBar() {
  const { activeTool, setActiveTool, canvasRef } = useDesignTool();
  const [tooltip, setTooltip] = useState<string | null>(null);

  const handleClick = (tool: Tool) => {
    setActiveTool(tool.id);
    if (tool.section && canvasRef.current) {
      const el = canvasRef.current.querySelector(`#${tool.section}`);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="select-none hidden md:flex flex-col items-center relative"
      style={{
        width: "var(--toolbar-width)",
        background: "var(--chrome-bg)",
        borderRight: "1px solid var(--chrome-border)",
        paddingTop: 8,
        gap: 2,
      }}
    >
      {tools.map((tool) => (
        <div key={tool.id}>
          <button
            className="relative flex items-center justify-center transition-colors duration-100"
            style={{
              width: 28,
              height: 28,
              borderRadius: 4,
              border: "none",
              background: activeTool === tool.id ? "rgba(13,153,255,0.2)" : "transparent",
              color: activeTool === tool.id ? "var(--chrome-accent)" : "var(--chrome-text)",
              borderLeft: activeTool === tool.id ? "2px solid var(--chrome-accent)" : "2px solid transparent",
            }}
            onClick={() => handleClick(tool)}
            onMouseEnter={() => setTooltip(tool.id)}
            onMouseLeave={() => setTooltip(null)}
          >
            {tool.icon}

            {/* Tooltip */}
            {tooltip === tool.id && (
              <div
                className="absolute left-full ml-2 whitespace-nowrap z-[200] chrome-text"
                style={{
                  background: "var(--chrome-bg)",
                  border: "1px solid var(--chrome-border)",
                  padding: "4px 8px",
                  borderRadius: 4,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                  pointerEvents: "none",
                }}
              >
                {tool.label}{" "}
                <span style={{ color: "var(--chrome-text-muted)" }}>{tool.shortcut}</span>
              </div>
            )}
          </button>

          {tool.group && (
            <div
              style={{
                width: 20,
                height: 1,
                background: "var(--chrome-border)",
                margin: "4px auto",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
