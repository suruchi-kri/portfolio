"use client";

import { Quote } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    id: "tarini-fsm",
    quote:
      "You are and will always be my favourite designer — not just because of your incredible aesthetics, but also because of how effortless and easy you make everything feel. It's rare to find someone as dedicated as you are, and I truly loved working with you. Whenever you're available in the future, please remember that my company's doors will always be open for you — with all my arms and heart wide open. People like you are so rare in a world where most just work for the sake of it. You've handled everything with such care and dedication, and I am beyond grateful to have met you.",
    name: "Tarini",
    company: "Fame Spread Media",
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
      <div
        className="flex items-baseline"
        style={{ gap: "1.5rem", marginBottom: "3.5rem" }}
      >
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

      {/* Grid: 2 columns on desktop, 1 on mobile */}
      <ScrollReveal delay={0.1}>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-item">
              {/* Card */}
              <div
                className="bg-pale hover:-translate-y-1.5 transition-transform duration-300"
                style={{
                  border: "1px solid rgba(28,25,22,0.12)",
                  padding: "2rem 2.2rem",
                }}
              >
                <p
                  className="font-serif italic font-extralight"
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    opacity: 0.82,
                    marginBottom: "1.6rem",
                  }}
                >
                  {t.quote}
                </p>
              {/* Lucide Quote icon — bottom-right of testimonial text */}
              <div
                className="flex justify-end select-none pointer-events-none"
                style={{
                  marginTop: "-0.6rem",
                  marginBottom: "1rem",
                  color: "var(--rust)",
                  opacity: 0.45,
                }}
                aria-hidden="true"
              >
                <Quote size={32} strokeWidth={1.25} />
              </div>
                <div
                  style={{
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(28,25,22,0.12)",
                  }}
                >
                  <strong
                    className="block font-serif font-bold"
                    style={{
                      fontSize: "0.95rem",
                      marginBottom: "0.2rem",
                      color: "var(--rust)",
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
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
