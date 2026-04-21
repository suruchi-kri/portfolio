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

function ShellInner({ children }: { children: ReactNode }) {
  const { canvasRef, setActiveTool, togglePanel } = useDesignTool();

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when typing in inputs
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
    <div
      className="h-screen w-screen overflow-hidden"
      style={{
        display: "grid",
        gridTemplateRows: "var(--menubar-height) var(--tabbar-height) 1fr var(--statusbar-height)",
        gridTemplateColumns: "var(--toolbar-width) var(--ruler-size) 1fr var(--panel-width)",
      }}
    >
      {/* Row 1: Menu Bar (spans all columns) */}
      <MenuBar />

      {/* Row 2: Tab Bar (spans all columns) */}
      <TabBar />

      {/* Row 3: ToolBar | Rulers + Canvas | Properties Panel */}
      <ToolBar />

      {/* Ruler corner + vertical ruler column */}
      <div className="hidden md:flex flex-col" style={{ borderRight: "1px solid var(--chrome-border)" }}>
        <RulerCorner />
        <VerticalRuler />
      </div>

      {/* Canvas area with horizontal ruler on top */}
      <div className="flex flex-col overflow-hidden" style={{ gridColumn: "span 1" }}>
        <HorizontalRuler />
        <Canvas>{children}</Canvas>
      </div>

      {/* Properties Panel */}
      <PropertiesPanel />

      {/* Row 4: Status Bar (spans all columns) */}
      <StatusBar />
    </div>
  );
}

export function DesignToolShell({ children }: { children: ReactNode }) {
  return (
    <DesignToolProvider>
      <ShellInner>{children}</ShellInner>
    </DesignToolProvider>
  );
}
