"use client";

import { Binoculars, BookA, PenTool, PackageCheck, LucideIcon } from "lucide-react";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: Binoculars,
    title: "Discover",
    description:
      "I start with a deep brief — your brand, audience, goals, and competition. Clarity here saves weeks later.",
  },
  {
    number: "02",
    icon: BookA,
    title: "Define",
    description:
      "Strategy before pixels. Tone of voice, visual direction, and positioning get locked in before I open Figma.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Design",
    description:
      "Multiple concepts, rapid iteration, honest feedback loops. I explore widely and commit with precision.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Deliver",
    description:
      "Clean files, brand guidelines, and everything you need to roll out independently. No loose ends.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-ink text-cream"
      style={{ padding: "7rem 3rem" }}
    >
      {/* Section header */}
      <div className="flex items-baseline" style={{ gap: "1.5rem" }}>
        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.4,
          }}
        >
          How I Work
        </span>
        <h2
          className="font-serif font-extralight text-cream"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            letterSpacing: "-0.03em",
          }}
        >
          My Process
        </h2>
      </div>

      {/* Steps grid */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
          marginTop: "4rem",
        }}
      >
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="relative hover:bg-cream/[0.03] transition-all duration-300 h-full"
              style={{
                padding: "2rem",
                border: "1px solid rgba(247,243,237,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(247,243,237,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(247,243,237,0.08)";
              }}
            >
              <div
                className="font-serif font-bold"
                style={{
                  fontSize: "3.5rem",
                  opacity: 0.08,
                  lineHeight: 1,
                  marginBottom: "1.2rem",
                  letterSpacing: "-0.04em",
                }}
              >
                {step.number}
              </div>
              <span
                className="absolute"
                style={{
                  top: "2rem",
                  right: "2rem",
                  opacity: 0.55,
                  color: "var(--rust)",
                }}
              >
                <Icon size={18} strokeWidth={1.5} />
              </span>
              <h3
                className="font-serif font-bold"
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "0.7rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.76rem",
                  lineHeight: 1.8,
                  opacity: 0.45,
                }}
              >
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
