"use client";

import { useDesignTool } from "./DesignToolContext";

function HorizontalRuler() {
  const { mousePosition } = useDesignTool();
  const ticks = [];
  for (let i = 0; i <= 2000; i += 10) {
    const isMajor = i % 100 === 0;
    const isMid = i % 50 === 0 && !isMajor;
    ticks.push(
      <div
        key={i}
        className="absolute"
        style={{
          left: i,
          bottom: 0,
          width: 1,
          height: isMajor ? 10 : isMid ? 6 : 3,
          background: isMajor ? "#666" : "#444",
        }}
      />
    );
    if (isMajor) {
      ticks.push(
        <span
          key={`l-${i}`}
          className="absolute"
          style={{
            left: i + 2,
            top: 2,
            fontSize: 8,
            fontFamily: "-apple-system, system-ui, sans-serif",
            color: "#666",
            userSelect: "none",
          }}
        >
          {i}
        </span>
      );
    }
  }

  return (
    <div
      className="relative overflow-hidden hidden md:block"
      style={{
        height: "var(--ruler-size)",
        background: "var(--chrome-bg)",
        borderBottom: "1px solid var(--chrome-border)",
      }}
    >
      {ticks}
      {/* Cursor tracking line */}
      <div
        className="absolute"
        style={{
          left: mousePosition.x,
          top: 0,
          width: 1,
          height: "100%",
          background: "var(--chrome-accent)",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

function VerticalRuler() {
  const { mousePosition } = useDesignTool();
  const ticks = [];
  for (let i = 0; i <= 8000; i += 10) {
    const isMajor = i % 100 === 0;
    const isMid = i % 50 === 0 && !isMajor;
    ticks.push(
      <div
        key={i}
        className="absolute"
        style={{
          top: i,
          right: 0,
          height: 1,
          width: isMajor ? 10 : isMid ? 6 : 3,
          background: isMajor ? "#666" : "#444",
        }}
      />
    );
    if (isMajor && i > 0) {
      ticks.push(
        <span
          key={`l-${i}`}
          className="absolute"
          style={{
            top: i + 2,
            left: 2,
            fontSize: 8,
            fontFamily: "-apple-system, system-ui, sans-serif",
            color: "#666",
            userSelect: "none",
            writingMode: "vertical-lr",
          }}
        >
          {i}
        </span>
      );
    }
  }

  return (
    <div
      className="relative overflow-hidden hidden md:block"
      style={{
        width: "var(--ruler-size)",
        background: "var(--chrome-bg)",
        borderRight: "1px solid var(--chrome-border)",
      }}
    >
      {ticks}
      {/* Cursor tracking line */}
      <div
        className="absolute"
        style={{
          top: mousePosition.y,
          left: 0,
          height: 1,
          width: "100%",
          background: "var(--chrome-accent)",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export function Rulers() {
  return { HorizontalRuler, VerticalRuler };
}

export { HorizontalRuler, VerticalRuler };

/* Corner piece */
export function RulerCorner() {
  return (
    <div
      className="hidden md:block"
      style={{
        width: "var(--ruler-size)",
        height: "var(--ruler-size)",
        background: "var(--chrome-bg)",
        borderRight: "1px solid var(--chrome-border)",
        borderBottom: "1px solid var(--chrome-border)",
      }}
    />
  );
}
