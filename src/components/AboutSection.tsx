"use client";

import { ScrollReveal } from "./ScrollReveal";

const skills = [
  "Brand Identity",
  "Packaging",
  "Social Media Systems",
  "UI/UX",
  "Web Design",
  "Campaigns",
  "Art Direction",
];

const tools = ["Figma", "Photoshop", "Illustrator", "WordPress", "Divi"];

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-pale"
      style={{
        padding: "7rem 3rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6rem",
        alignItems: "center",
      }}
    >
      {/* Photo placeholder */}
      <ScrollReveal>
        <div
          className="bg-cream relative overflow-hidden flex items-center justify-center"
          style={{
            aspectRatio: "3/4",
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "8rem",
            color: "rgba(28,25,22,0.06)",
          }}
        >
          ✦
          <div
            className="absolute"
            style={{ inset: 0, border: "1px solid rgba(28,25,22,0.08)" }}
          />
          <div
            className="absolute bg-rust rounded-full flex items-center justify-center text-cream text-center"
            style={{
              bottom: "-1.2rem",
              right: "-1.2rem",
              width: 96,
              height: 96,
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "0.72rem",
              fontWeight: 700,
              lineHeight: 1.3,
              padding: "0.8rem",
            }}
          >
            Open to
            <br />
            Projects
          </div>
        </div>
      </ScrollReveal>

      {/* Content */}
      <div>
        <ScrollReveal>
          <p
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.4,
              marginBottom: "1.4rem",
            }}
          >
            About Me
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="font-serif font-extralight"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              marginBottom: "1.6rem",
            }}
          >
            I turn ideas into
            <br />
            <em className="italic text-rust font-semibold">experiences</em>
            <br />
            people remember
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.82rem",
              lineHeight: 1.85,
              opacity: 0.6,
              marginBottom: "2rem",
              maxWidth: 440,
            }}
          >
            I&apos;m Suruchi — a visual designer based in New Delhi with a
            strong eye for brand storytelling, digital experiences, and design
            systems. From skincare brand identities to app UI overhauls, I work
            across the full visual spectrum. Currently at Transformative Learning
            Solutions, and always open to exciting freelance work.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap" style={{ gap: "0.45rem", marginBottom: "2.2rem" }}>
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full hover:bg-ink hover:text-cream hover:border-ink transition-all duration-200"
                style={{
                  padding: "0.3rem 0.85rem",
                  border: "1px solid rgba(28,25,22,0.13)",
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.64rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div
            className="flex items-center flex-wrap"
            style={{ gap: "1.2rem", opacity: 0.4, marginBottom: "2.5rem" }}
          >
            {tools.map((tool, i) => (
              <span key={tool} className="flex items-center" style={{ gap: "1.2rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {tool}
                </span>
                {i < tools.length - 1 && (
                  <span
                    className="bg-ink rounded-full"
                    style={{ width: 4, height: 4 }}
                  />
                )}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <a
            href="#contact"
            className="group inline-flex items-center bg-ink text-cream no-underline hover:bg-rust transition-all duration-200 hover:-translate-y-0.5"
            style={{
              gap: "0.7rem",
              padding: "0.9rem 2rem",
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              width: "fit-content",
            }}
          >
            Work With Me
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
        </ScrollReveal>
      </div>
    </section>
  );
}
