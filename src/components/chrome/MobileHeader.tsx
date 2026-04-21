"use client";

import { useState } from "react";
import { useDesignTool } from "./DesignToolContext";

const navItems = [
  { id: "hero", label: "Suruchi Kumari" },
  { id: "work", label: "Work" },
  { id: "about", label: "About Me" },
  { id: "process", label: "Process" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export function MobileHeader() {
  const [open, setOpen] = useState(false);
  const { canvasRef } = useDesignTool();

  const scrollTo = (id: string) => {
    const el = canvasRef.current?.querySelector(`#${id}`);
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <div
        className="md:hidden sticky top-0 left-0 right-0 z-[120] flex items-center justify-between"
        style={{
          height: 56,
          padding: "0 1.25rem",
          background: "rgba(247, 243, 237, 0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(28,25,22,0.08)",
        }}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="font-serif font-bold"
          style={{
            fontSize: "1.1rem",
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            touchAction: "manipulation",
          }}
        >
          SK.
        </button>

        {/* Availability badge */}
        <div
          className="flex items-center"
          style={{
            gap: "0.4rem",
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--sage)",
              animation: "pulse-dot 2.2s infinite",
            }}
          />
          Available
        </div>

        {/* Hamburger / close — CSS-only icon transitions */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className={`mobile-hamburger ${open ? "is-open" : ""}`}
        >
          <span />
          <span />
        </button>
      </div>

      {/* Fullscreen menu — always rendered, toggled via CSS. No AnimatePresence
          so taps don't race with mount/unmount. */}
      <div
        className={`md:hidden mobile-menu ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <ul
          className="flex flex-col list-none"
          style={{ padding: "2rem 1.5rem", gap: "0.5rem" }}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollTo(item.id)}
                className="font-serif w-full text-left"
                style={{
                  fontSize: "2rem",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  color: "var(--ink)",
                  background: "transparent",
                  border: "none",
                  padding: "0.5rem 0",
                  cursor: "pointer",
                  touchAction: "manipulation",
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div
          className="mt-auto"
          style={{
            padding: "1.5rem",
            borderTop: "1px solid rgba(28,25,22,0.08)",
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            opacity: 0.6,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <a
            href="mailto:suruchi.skri@gmail.com"
            style={{ color: "var(--rust)", textDecoration: "none" }}
          >
            suruchi.skri@gmail.com
          </a>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="https://www.instagram.com/layers.by.suru/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--ink)", textDecoration: "none" }}
            >
              Instagram
            </a>
            <a
              href="https://www.behance.net/suruchikumari"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--ink)", textDecoration: "none" }}
            >
              Behance
            </a>
            <a
              href="http://linkedin.com/in/suruchi-kumari-128203160/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--ink)", textDecoration: "none" }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
