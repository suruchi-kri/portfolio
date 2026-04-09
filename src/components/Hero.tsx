"use client";

import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 3rem 4.5rem",
      }}
    >
      {/* Background marquee text */}
      <div
        className="absolute left-0 right-0 overflow-hidden pointer-events-none"
        style={{ top: "50%", transform: "translateY(-55%)" }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 26s linear infinite" }}
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="font-serif font-bold text-transparent"
              style={{
                fontSize: "clamp(5rem, 13vw, 12rem)",
                WebkitTextStroke: "1.5px var(--ink)",
                opacity: 0.06,
                letterSpacing: "-0.04em",
                paddingRight: "2rem",
              }}
            >
              {i % 2 === 0
                ? "Suruchi Kumari\u00A0\u00A0·\u00A0\u00A0"
                : "Visual Designer\u00A0\u00A0·\u00A0\u00A0"}
            </span>
          ))}
        </div>
      </div>

      {/* Spinning badge */}
      <div
        className="absolute hidden md:block"
        style={{
          top: "28%",
          right: "5.5%",
          width: 115,
          height: 115,
          animation: "spin-slow 22s linear infinite",
        }}
      >
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            id="cp"
            d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
            fill="none"
          />
          <text
            fontFamily="var(--font-dm-mono), DM Mono, monospace"
            fontSize="10"
            fill="#1C1916"
            opacity="0.45"
            letterSpacing="2.8"
          >
            <textPath href="#cp">DELHI · DESIGNER · FREELANCE · </textPath>
          </text>
          <circle cx="60" cy="60" r="9" fill="var(--rust)" />
        </svg>
      </div>

      {/* Hero content */}
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.45,
            marginBottom: "1.3rem",
          }}
        >
          Suruchi Kumari — Visual Designer · New Delhi, India
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-serif font-extralight"
          style={{
            fontSize: "clamp(3.2rem, 7vw, 6.8rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            maxWidth: 820,
            marginBottom: "3rem",
          }}
        >
          Design that
          <br />
          <em className="italic text-rust font-semibold">connects</em> and
          <br />
          converts
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="flex items-center flex-wrap"
          style={{ gap: "3rem" }}
        >
          <a
            href="#work"
            className="group inline-flex items-center bg-ink text-cream no-underline hover:bg-rust transition-all duration-200 hover:-translate-y-0.5"
            style={{
              gap: "0.7rem",
              padding: "0.9rem 2rem",
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            View Work
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-1 transition-transform duration-200"
              style={{ width: 13 }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.7rem", opacity: 0.45, letterSpacing: "0.05em" }}>
            <strong className="block font-serif font-bold text-ink" style={{ fontSize: "1.5rem", opacity: 1 }}>
              1,800+
            </strong>
            Behance project views
          </div>
          <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.7rem", opacity: 0.45, letterSpacing: "0.05em" }}>
            <strong className="block font-serif font-bold text-ink" style={{ fontSize: "1.5rem", opacity: 1 }}>
              148
            </strong>
            Appreciations
          </div>
          <div style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.7rem", opacity: 0.45, letterSpacing: "0.05em" }}>
            <strong className="block font-serif font-bold text-ink" style={{ fontSize: "1.5rem", opacity: 1 }}>
              12+
            </strong>
            Projects shipped
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
