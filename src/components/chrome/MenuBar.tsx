"use client";

import { useState, useEffect, useRef } from "react";
import { useDesignTool } from "./DesignToolContext";

interface MenuItem {
  label: string;
  action?: () => void;
  separator?: boolean;
  shortcut?: string;
}

interface Menu {
  label: string;
  items: MenuItem[];
}

export function MenuBar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { togglePanel, canvasRef } = useDesignTool();

  const scrollTo = (id: string) => {
    const el = canvasRef.current?.querySelector(`#${id}`);
    el?.scrollIntoView({ behavior: "smooth" });
    setOpenMenu(null);
  };

  const menus: Menu[] = [
    {
      label: "File",
      items: [
        { label: "Open Behance", action: () => window.open("https://www.behance.net/suruchikumari", "_blank") },
        { label: "View LinkedIn", action: () => window.open("http://linkedin.com/in/suruchi-kumari-128203160/", "_blank") },
        { separator: true, label: "---" },
        { label: "Contact Me", action: () => scrollTo("contact"), shortcut: "⌘K" },
      ],
    },
    {
      label: "Edit",
      items: [
        { label: "Undo Bad Design", action: () => scrollTo("contact"), shortcut: "⌘Z" },
        { label: "Copy Style", shortcut: "⌘C" },
        { label: "Paste Inspiration", shortcut: "⌘V" },
      ],
    },
    {
      label: "View",
      items: [
        { label: "Toggle Panels", action: togglePanel, shortcut: "\\" },
        { separator: true, label: "---" },
        { label: "Work", action: () => scrollTo("work") },
        { label: "About", action: () => scrollTo("about") },
        { label: "Process", action: () => scrollTo("process") },
      ],
    },
    {
      label: "Help",
      items: [
        { label: "About Suruchi", action: () => scrollTo("about") },
        { label: "Send Feedback", action: () => window.open("mailto:suruchi.skri@gmail.com") },
      ],
    },
  ];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      ref={menuRef}
      className="chrome-text hidden md:flex items-center select-none"
      style={{
        height: "var(--menubar-height)",
        background: "var(--chrome-bg)",
        borderBottom: "1px solid var(--chrome-border)",
        gridRow: 1,
        gridColumn: "1 / -1",
      }}
    >
      {/* Figma logo area */}
      <div
        className="flex items-center justify-center"
        style={{ width: 40, height: "100%", borderRight: "1px solid var(--chrome-border)" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CCCCCC" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      </div>

      {/* Menu items */}
      <div className="flex items-center h-full">
        {menus.map((menu) => (
          <div key={menu.label} className="relative h-full">
            <button
              className="h-full flex items-center transition-colors duration-100"
              style={{
                padding: "0 10px",
                background: openMenu === menu.label ? "var(--chrome-hover)" : "transparent",
                color: "var(--chrome-text)",
                border: "none",
                fontSize: 11,
                fontFamily: "inherit",
              }}
              onClick={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
              onMouseEnter={() => { if (openMenu) setOpenMenu(menu.label); }}
            >
              {menu.label}
            </button>

            {openMenu === menu.label && (
              <div
                className="absolute top-full left-0 z-[200]"
                style={{
                  background: "var(--chrome-bg)",
                  border: "1px solid var(--chrome-border)",
                  minWidth: 200,
                  padding: "4px 0",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
                }}
              >
                {menu.items.map((item, i) =>
                  item.separator ? (
                    <div
                      key={i}
                      style={{
                        height: 1,
                        background: "var(--chrome-border)",
                        margin: "4px 8px",
                      }}
                    />
                  ) : (
                    <button
                      key={item.label}
                      className="w-full text-left flex items-center justify-between transition-colors duration-100"
                      style={{
                        padding: "4px 12px 4px 24px",
                        background: "transparent",
                        color: "var(--chrome-text)",
                        border: "none",
                        fontSize: 11,
                        fontFamily: "inherit",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--chrome-accent)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                      onClick={() => { item.action?.(); setOpenMenu(null); }}
                    >
                      <span>{item.label}</span>
                      {item.shortcut && (
                        <span style={{ color: "var(--chrome-text-muted)", fontSize: 10 }}>
                          {item.shortcut}
                        </span>
                      )}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
