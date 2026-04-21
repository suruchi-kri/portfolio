"use client";

import { useState } from "react";
import { useDesignTool } from "./DesignToolContext";

const sectionLabels: Record<string, string> = {
  hero: "Suruchi Kumari",
  work: "Selected Work",
  about: "About Me",
  process: "My Process",
  testimonials: "Testimonials",
  contact: "Contact",
};

const sectionColors: Record<string, string> = {
  hero: "#C44B2A",
  work: "#1C1916",
  about: "#EDE8DF",
  process: "#1C1916",
  testimonials: "#F7F3ED",
  contact: "#F7F3ED",
};

const layers = [
  { id: "hero", name: "Suruchi Kumari", indent: 0, icon: "◆" },
  { id: "work", name: "Work", indent: 0, icon: "◆" },
  { id: "about", name: "About Me", indent: 0, icon: "◆" },
  { id: "process", name: "Process", indent: 0, icon: "◆" },
  { id: "testimonials", name: "Testimonials", indent: 0, icon: "◆" },
  { id: "contact", name: "Contact", indent: 0, icon: "◆" },
];

function CollapsibleSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div style={{ borderBottom: "1px solid var(--chrome-border)" }}>
      <button
        className="w-full flex items-center chrome-text"
        style={{
          padding: "6px 12px",
          background: "transparent",
          border: "none",
          gap: 6,
          fontSize: 11,
          color: "var(--chrome-text)",
          fontFamily: "inherit",
        }}
        onClick={() => setOpen(!open)}
      >
        <span
          style={{
            fontSize: 8,
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.15s",
            display: "inline-block",
          }}
        >
          ▶
        </span>
        {title}
      </button>
      {open && (
        <div style={{ padding: "0 12px 8px" }}>{children}</div>
      )}
    </div>
  );
}

function PropertyRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="chrome-text flex items-center justify-between"
      style={{ padding: "2px 0", fontSize: 10 }}
    >
      <span style={{ color: "var(--chrome-text-muted)" }}>{label}</span>
      <span style={{ color: "var(--chrome-text)" }}>{value}</span>
    </div>
  );
}

function SectionProperties({ section }: { section: string }) {
  switch (section) {
    case "hero":
      return (
        <>
          <PropertyRow label="Name" value="Suruchi Kumari" />
          <PropertyRow label="Role" value="Visual Designer" />
          <PropertyRow label="Working" value="Remote" />
          <PropertyRow label="Status" value="✦ Available" />
          <PropertyRow label="Views" value="1,800+" />
          <PropertyRow label="Projects" value="12+" />
        </>
      );
    case "work":
      return (
        <>
          <PropertyRow label="Projects" value="8" />
          <PropertyRow label="Categories" value="4" />
          <PropertyRow label="Platform" value="Behance" />
          <PropertyRow label="Newest" value="Route GT" />
          <PropertyRow label="Most Viewed" value="Blog UI/UX" />
        </>
      );
    case "about":
      return (
        <>
          <PropertyRow label="Education" value="B. Des, NIFT" />
          <PropertyRow label="Tools" value="5" />
          <PropertyRow label="Freelance" value="Open" />
          <PropertyRow label="Full-Time" value="Open" />
        </>
      );
    case "process":
      return (
        <>
          <PropertyRow label="Steps" value="4" />
          <PropertyRow label="Method" value="Discover → Deliver" />
          <PropertyRow label="Primary Tool" value="Figma" />
        </>
      );
    case "testimonials":
      return (
        <>
          <PropertyRow label="Testimonials" value="2" />
          <PropertyRow label="Featured" value="Tarini · FSM" />
          <PropertyRow label="Layout" value="Horizontal Scroll" />
        </>
      );
    case "contact":
      return (
        <>
          <PropertyRow label="Email" value="suruchi.skri@..." />
          <PropertyRow label="Instagram" value="@layers.by.suru" />
          <PropertyRow label="Behance" value="suruchikumari" />
          <PropertyRow label="LinkedIn" value="Connected" />
        </>
      );
    default:
      return null;
  }
}

export function PropertiesPanel() {
  const { activeSection, panelVisible, canvasRef } = useDesignTool();

  if (!panelVisible) return null;

  const scrollTo = (id: string) => {
    const el = canvasRef.current?.querySelector(`#${id}`);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="hidden md:flex flex-col select-none overflow-y-auto"
      style={{
        width: "var(--panel-width)",
        background: "var(--chrome-bg)",
        borderLeft: "1px solid var(--chrome-border)",
        gridRow: 3,
        gridColumn: 4,
      }}
    >
      {/* Panel header — just "Design" */}
      <div
        className="flex chrome-text"
        style={{ borderBottom: "1px solid var(--chrome-border)" }}
      >
        <div
          className="flex-1"
          style={{
            padding: "8px 12px",
            background: "var(--chrome-bg)",
            borderBottom: "2px solid var(--chrome-accent)",
            color: "var(--chrome-text)",
            fontSize: 11,
          }}
        >
          Design
        </div>
      </div>

      {/* Properties */}
      <CollapsibleSection title={`Properties — ${sectionLabels[activeSection] || "Section"}`}>
        <SectionProperties section={activeSection} />
      </CollapsibleSection>

      {/* Fill */}
      <CollapsibleSection title="Fill">
        <div className="flex items-center" style={{ gap: 8 }}>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 4,
              background: sectionColors[activeSection] || "#F7F3ED",
              border: "1px solid var(--chrome-border)",
            }}
          />
          <span className="chrome-text" style={{ fontSize: 10 }}>
            {sectionColors[activeSection] || "#F7F3ED"}
          </span>
        </div>
      </CollapsibleSection>

      {/* Layers */}
      <CollapsibleSection title="Layers">
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {layers.map((layer) => (
            <button
              key={layer.id}
              className="flex items-center w-full chrome-text"
              style={{
                padding: "3px 4px",
                paddingLeft: 4 + layer.indent * 16,
                background: activeSection === layer.id ? "rgba(13,153,255,0.15)" : "transparent",
                border: "none",
                borderRadius: 3,
                gap: 6,
                fontSize: 10,
                color: activeSection === layer.id ? "var(--chrome-accent)" : "var(--chrome-text)",
                fontFamily: "inherit",
                textAlign: "left",
              }}
              onClick={() => scrollTo(layer.id)}
            >
              {/* Eye icon */}
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: 0.4, flexShrink: 0 }}>
                <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" />
                <circle cx="8" cy="8" r="2" />
              </svg>
              <span style={{ fontSize: 8, opacity: 0.4 }}>{layer.icon}</span>
              {layer.name}
            </button>
          ))}
        </div>
      </CollapsibleSection>
    </div>
  );
}
