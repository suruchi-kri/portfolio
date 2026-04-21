"use client";

import { createContext, useContext, useState, useRef, ReactNode, RefObject } from "react";

interface DesignToolContextType {
  activeSection: string;
  setActiveSection: (id: string) => void;
  mousePosition: { x: number; y: number };
  setMousePosition: (pos: { x: number; y: number }) => void;
  panelVisible: boolean;
  togglePanel: () => void;
  activeTool: string;
  setActiveTool: (tool: string) => void;
  canvasRef: RefObject<HTMLDivElement | null>;
}

const DesignToolContext = createContext<DesignToolContextType | null>(null);

export function DesignToolProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [panelVisible, setPanelVisible] = useState(true);
  const [activeTool, setActiveTool] = useState("move");
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <DesignToolContext.Provider
      value={{
        activeSection,
        setActiveSection,
        mousePosition,
        setMousePosition,
        panelVisible,
        togglePanel: () => setPanelVisible((v) => !v),
        activeTool,
        setActiveTool,
        canvasRef,
      }}
    >
      {children}
    </DesignToolContext.Provider>
  );
}

export function useDesignTool() {
  const ctx = useContext(DesignToolContext);
  if (!ctx) throw new Error("useDesignTool must be used within DesignToolProvider");
  return ctx;
}
