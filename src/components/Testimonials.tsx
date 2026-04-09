"use client";

import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    id: "1",
    quote:
      "Add your first testimonial here — even a short message from a client on WhatsApp works perfectly.",
    name: "Client Name",
    company: "Company / Project",
  },
  {
    id: "2",
    quote:
      "Reach out to 2–3 past clients and ask for a few lines. These are your most powerful social proof.",
    name: "Client Name",
    company: "Company / Project",
  },
  {
    id: "3",
    quote:
      "A specific outcome — 'our engagement doubled', 'sold out in a week' — is worth far more than a generic compliment.",
    name: "Client Name",
    company: "Company / Project",
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
              className="bg-pale flex-shrink-0 hover:-translate-y-1.5 transition-transform duration-300"
              style={{
                minWidth: 340,
                scrollSnapAlign: "start",
                border: "1px solid rgba(28,25,22,0.09)",
                padding: "2.2rem",
              }}
            >
              <p
                className="font-serif italic font-extralight"
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  opacity: 0.78,
                  marginBottom: "1.6rem",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <strong
                  className="block font-serif font-bold"
                  style={{ fontSize: "0.95rem", marginBottom: "0.2rem" }}
                >
                  {t.name}
                </strong>
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    opacity: 0.4,
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
