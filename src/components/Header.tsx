"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between"
      style={{ padding: "1.4rem 3rem", mixBlendMode: "multiply" }}
    >
      <a
        href="#"
        className="font-serif font-bold text-ink no-underline"
        style={{ fontSize: "1.05rem", letterSpacing: "-0.02em" }}
      >
        SK.
      </a>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center list-none" style={{ gap: "2.5rem" }}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-ink no-underline opacity-50 hover:opacity-100 transition-opacity duration-200"
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Availability badge — desktop */}
      <div
        className="hidden md:flex items-center opacity-55"
        style={{
          gap: "0.45rem",
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        <span
          className="bg-sage rounded-full"
          style={{
            width: 7,
            height: 7,
            animation: "pulse-dot 2.2s infinite",
          }}
        />
        Available Now
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 -mr-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-5 flex flex-col gap-1">
          <motion.span
            className="block h-0.5 bg-ink origin-center"
            animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="block h-0.5 bg-ink"
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="block h-0.5 bg-ink origin-center"
            animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          />
        </div>
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-cream z-[99] flex flex-col items-center justify-center"
            style={{ gap: "2rem" }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-serif text-3xl font-light text-ink no-underline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <div
              className="flex items-center mt-6 opacity-55"
              style={{
                gap: "0.45rem",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <span
                className="bg-sage rounded-full"
                style={{ width: 7, height: 7, animation: "pulse-dot 2.2s infinite" }}
              />
              Available Now
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
