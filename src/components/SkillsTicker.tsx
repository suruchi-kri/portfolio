"use client";

const skills = [
  "UI/UX",
  "Branding",
  "Packaging",
  "Social Media",
  "Web Design",
  "Figma",
  "Photoshop",
  "WordPress",
];

export function SkillsTicker() {
  return (
    <div className="bg-ink overflow-hidden" style={{ padding: "0.9rem 0" }}>
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "ticker 16s linear infinite" }}
      >
        {[...Array(2)].map((_, setIndex) =>
          skills.map((skill, i) => (
            <span key={`${setIndex}-${i}`} className="flex items-center">
              <span
                className="text-cream"
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  opacity: 0.6,
                  padding: "0 2rem",
                }}
              >
                {skill}
              </span>
              <span className="text-gold" style={{ fontSize: "0.7rem" }}>✦</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}
