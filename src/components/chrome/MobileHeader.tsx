"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      className="md:hidden fixed top-0 left-0 right-0 z-[120] flex items-center justify-between"
      style={{
        height: 56,
        padding: "0 1.25rem",
        background: "rgba(247, 243, 237, 0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: open ? "1px solid rgba(28,25,22,0.08)" : "1px solid rgba(28,25,22,0.08)",
      }}
    >
      {/* Logo */}
      <button
        onClick={() => scrollTo("hero")}
        className="font-serif font-bold"
        style={{
          fontSize: "1.1rem",
          letterSpacing: "-0.02em",
          color: "var(--ink)",
          background: "transparent",
          border: "none",
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

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        style={{
          width: 32,
          height: 32,
          background: "transparent",
          border: "none",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <motion.span
          style={{ display: "block", width: 18, height: 1.5, background: "var(--ink)", originX: 0.5, originY: 0.5 }}
          animate={open ? { rotate: 45, y: 2.75 } : { rotate: 0, y: 0 }}
        />
        <motion.span
          style={{ display: "block", width: 18, height: 1.5, background: "var(--ink)", originX: 0.5, originY: 0.5 }}
          animate={open ? { rotate: -45, y: -2.75 } : { rotate: 0, y: 0 }}
        />
      </button>

    </div>
      {/* Fullscreen menu — rendered outside header so it covers all content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden flex flex-col"
            style={{
              position: "fixed",
              top: 56,
              left: 0,
              right: 0,
              bottom: 0,
              background: "#F7F3ED",
              zIndex: 110,
            }}
          >
            <ul
              className="flex flex-col list-none"
              style={{ padding: "2rem 1.5rem", gap: "0.5rem" }}
            >
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.3 }}
                >
                  <button
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
                    }}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
