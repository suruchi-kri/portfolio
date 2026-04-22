"use client";

import { ReactNode, useEffect } from "react";
import { DesignToolProvider, useDesignTool } from "./DesignToolContext";
import { MenuBar } from "./MenuBar";
import { TabBar } from "./TabBar";
import { ToolBar } from "./ToolBar";
import { HorizontalRuler, VerticalRuler, RulerCorner } from "./Rulers";
import { Canvas } from "./Canvas";
import { PropertiesPanel } from "./PropertiesPanel";
import { StatusBar } from "./StatusBar";

function Shell({ children }: { children: ReactNode }) {
  const { canvasRef, setActiveTool, togglePanel } = useDesignTool();

  // Keyboard shortcuts (desktop; harmless on mobile — no keyboard events)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      const toolMap: Record<string, { tool: string; section?: string }> = {
        v: { tool: "move", section: "hero" },
        f: { tool: "frame", section: "work" },
        t: { tool: "text", section: "about" },
        p: { tool: "pen", section: "process" },
        i: { tool: "eyedropper", section: "testimonials" },
        c: { tool: "comment", section: "contact" },
      };

      const key = e.key.toLowerCase();

      if (key === "\\") {
        e.preventDefault();
        togglePanel();
        return;
      }

      const mapping = toolMap[key];
      if (mapping) {
        e.preventDefault();
        setActiveTool(mapping.tool);
        if (mapping.section && canvasRef.current) {
          const el = canvasRef.current.querySelector(`#${mapping.section}`);
          el?.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [canvasRef, setActiveTool, togglePanel]);

  return (
    <>
      <div
        className="shell-root h-screen w-screen overflow-hidden"
        style={{
          display: "grid",
          gridTemplateRows:
            "var(--menubar-height) var(--tabbar-height) minmax(0, 1fr) var(--statusbar-height)",
          gridTemplateColumns:
            "var(--toolbar-width) var(--ruler-size) minmax(0, 1fr) var(--panel-width)",
        }}
      >
        <MenuBar />
        <TabBar />
        <ToolBar />

        <div
          className="hidden md:flex flex-col"
          style={{
            gridRow: 3,
            gridColumn: 2,
            borderRight: "1px solid var(--chrome-border)",
          }}
        >
          <RulerCorner />
          <VerticalRuler />
        </div>

        <div
          className="flex flex-col md:overflow-hidden"
          style={{ gridRow: 3, gridColumn: 3 }}
        >
          <HorizontalRuler />
          <Canvas>{children}</Canvas>
        </div>

        <PropertiesPanel />
        <StatusBar />
      </div>
    </>
  );
}

export function DesignToolShell({ children }: { children: ReactNode }) {
  return (
    <DesignToolProvider>
      <Shell>{children}</Shell>
    </DesignToolProvider>
  );
}
