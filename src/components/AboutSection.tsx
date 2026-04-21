"use client";

const tools = ["Figma", "Photoshop", "Illustrator", "WordPress", "InDesign"];

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
      {/* Photo */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "3/4" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/About me.jpg"
          alt="Suruchi Kumari"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute pointer-events-none"
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

      {/* Content */}
      <div>
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

        <p
          className="font-serif italic"
          style={{
            fontSize: "1.02rem",
            lineHeight: 1.55,
            fontWeight: 500,
            color: "var(--rust)",
            marginBottom: "1rem",
            maxWidth: 480,
            letterSpacing: "-0.01em",
          }}
        >
          I don&apos;t just design — I shape how brands are seen, felt, and
          remembered.
        </p>

        <p
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.82rem",
            lineHeight: 1.85,
            opacity: 0.65,
            marginBottom: "1.6rem",
            maxWidth: 480,
          }}
        >
          I&apos;m Suruchi, a visual designer driven by storytelling,
          digital experiences, and design systems that actually work. From
          building brands to rethinking app interfaces, I create visuals
          that cut through noise and leave an impact. My approach is equal
          parts instinct and intention — where aesthetics meet strategy.
          Currently freelancing, I&apos;m constantly pushing boundaries and
          refining my craft. Open to remote work and full-time roles where I
          can create work that stands out.
        </p>

        <div
          style={{
            borderLeft: "2px solid var(--rust)",
            paddingLeft: "1rem",
            marginBottom: "2rem",
            maxWidth: 480,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              opacity: 0.45,
              marginBottom: "0.4rem",
            }}
          >
            Education
          </p>
          <p
            className="font-serif"
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              marginBottom: "0.2rem",
            }}
          >
            B. Des
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.72rem",
              opacity: 0.55,
            }}
          >
            National Institute of Fashion Technology, New Delhi
          </p>
        </div>

        {/* Tools — styled as floating pills */}
        <p
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.45,
            marginBottom: "0.8rem",
          }}
        >
          Tools
        </p>
        <div className="flex flex-wrap" style={{ gap: "0.45rem", marginBottom: "2.2rem" }}>
          {tools.map((tool) => (
            <span
              key={tool}
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
              {tool}
            </span>
          ))}
        </div>

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
      </div>
    </section>
  );
}
