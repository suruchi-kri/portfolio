"use client";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/layers.by.suru/" },
  { label: "Behance", href: "https://www.behance.net/suruchikumari" },
  { label: "LinkedIn", href: "http://linkedin.com/in/suruchi-kumari-128203160/" },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="text-center relative overflow-hidden"
      style={{ padding: "8rem 3rem 5rem" }}
    >
      {/* Background text */}
      <div
        className="absolute pointer-events-none font-serif font-bold whitespace-nowrap text-transparent"
        style={{
          bottom: "-3rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "clamp(5rem, 17vw, 15rem)",
          WebkitTextStroke: "1px rgba(28, 25, 22, 0.06)",
          letterSpacing: "-0.05em",
        }}
      >
        Hello
      </div>

      <div
        className="flex items-start justify-center"
        style={{
          gap: "0.5rem",
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: "0.68rem",
          lineHeight: 1.6,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          opacity: 0.4,
          marginBottom: "1.5rem",
        }}
      >
        <span
          className="bg-sage rounded-full flex-shrink-0"
          style={{
            width: 7,
            height: 7,
            marginTop: "0.42em",
            animation: "pulse-dot 2.2s infinite",
          }}
        />
        <span>Available for Freelance &amp; Full-Time Remote</span>
      </div>

      <h2
        className="font-serif font-extralight relative z-[1]"
        style={{
          fontSize: "clamp(2.5rem, 7vw, 7rem)",
          letterSpacing: "-0.04em",
          lineHeight: 0.95,
          marginBottom: "2.5rem",
        }}
      >
        Let&apos;s make
        <br />
        something <em className="italic text-rust font-semibold">great</em>
      </h2>

      <a
        href="mailto:suruchi.skri@gmail.com"
        className="font-serif font-extralight text-ink no-underline hover:text-rust transition-colors duration-200 relative z-[1]"
        style={{
          fontSize: "clamp(0.9rem, 2.2vw, 1.6rem)",
          borderBottom: "1.5px solid var(--rust)",
          paddingBottom: "0.15rem",
        }}
      >
        suruchi.skri@gmail.com
      </a>

      <div
        className="flex justify-center relative z-[1]"
        style={{ gap: "2.5rem", marginTop: "3.5rem" }}
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink no-underline opacity-40 hover:opacity-100 transition-opacity duration-200"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
