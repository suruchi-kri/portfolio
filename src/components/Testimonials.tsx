"use client";

import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    id: "tarini-fsm",
    quote:
      "You are and will always be my favourite designer — not just because of your incredible aesthetics, but also because of how effortless and easy you make everything feel. It's rare to find someone as dedicated as you are, and I truly loved working with you. Whenever you're available in the future, please remember that my company's doors will always be open for you — with all my arms and heart wide open. People like you are so rare in a world where most just work for the sake of it. You've handled everything with such care and dedication, and I am beyond grateful to have met you.",
    name: "Tarini",
    company: "Fame Spread Media",
    featured: true,
  },
  {
    id: "ronalyn",
    quote:
      "Suruchi did a wonderful job on our packaging design. The client really appreciated how clean and clear the design was. She was easy to work with, took feedback well, and executed everything thoughtfully.",
    name: "Ronalyn Romero",
    company: "Executive Virtual Assistant",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: "7rem 3rem" }}>
      {/* Section header */}
      <div className="flex items-baseline" style={{ gap: "1.5rem", marginBottom: "3.5rem" }}>
        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.4,
          }}
        >
          Kind Words
        </span>
        <ScrollReveal>
          <h2
            className="font-serif font-extralight"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              letterSpacing: "-0.03em",
            }}
          >
            What Clients Say
          </h2>
        </ScrollReveal>
      </div>

      {/* Scrollable testimonials */}
      <ScrollReveal delay={0.1}>
        <div
          className="flex overflow-x-auto"
          style={{
            gap: "1.4rem",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            paddingBottom: "1rem",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-pale flex-shrink-0 hover:-translate-y-1.5 transition-transform duration-300 relative"
              style={{
                minWidth: t.featured ? 480 : 340,
                maxWidth: t.featured ? 520 : 380,
                scrollSnapAlign: "start",
                border: t.featured
                  ? "1px solid rgba(196,75,42,0.25)"
                  : "1px solid rgba(28,25,22,0.09)",
                padding: "2.4rem 2.2rem 2.2rem",
              }}
            >
              {/* Decorative quote mark for featured */}
              {t.featured && (
                <span
                  className="font-serif absolute select-none"
                  style={{
                    top: "0.4rem",
                    left: "1.2rem",
                    fontSize: "4rem",
                    lineHeight: 1,
                    color: "var(--rust)",
                    opacity: 0.35,
                    fontStyle: "italic",
                    fontWeight: 700,
                  }}
                >
                  &ldquo;
                </span>
              )}
              <p
                className="font-serif italic font-extralight"
                style={{
                  fontSize: t.featured ? "1.02rem" : "1rem",
                  lineHeight: 1.75,
                  opacity: 0.82,
                  marginBottom: "1.6rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {t.featured ? t.quote : `\u201C${t.quote}\u201D`}
              </p>
              <div
                style={{
                  paddingTop: "1rem",
                  borderTop: t.featured
                    ? "1px solid rgba(196,75,42,0.2)"
                    : "1px solid rgba(28,25,22,0.08)",
                }}
              >
                <strong
                  className="block font-serif font-bold"
                  style={{
                    fontSize: "0.95rem",
                    marginBottom: "0.2rem",
                    color: t.featured ? "var(--rust)" : "var(--ink)",
                  }}
                >
                  {t.name}
                </strong>
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    opacity: 0.5,
                  }}
                >
                  {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
