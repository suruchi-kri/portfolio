"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

interface Project {
  id: string;
  title: string;
  category: string;
  filterCat: string;
  gradient: string;
  shortLabel: string;
  behanceUrl: string;
  views: number;
  appreciations: number;
  note?: string;
  span: string;
  aspect: string;
}

const projects: Project[] = [
  {
    id: "blog-uiux",
    title: "Blog Website — UI/UX Design",
    category: "UI/UX · Web Design · Figma + WordPress",
    filterCat: "ux",
    gradient: "linear-gradient(135deg, #1C1916, #2563A8)",
    shortLabel: "Blog",
    behanceUrl: "https://www.behance.net/gallery/203849335/Blog-Website-UIUX-Design",
    views: 204,
    appreciations: 11,
    note: "most viewed",
    span: "p1",
    aspect: "16/9",
  },
  {
    id: "splitwise",
    title: "Splitwise App Redesign",
    category: "UI/UX · App Redesign",
    filterCat: "ux",
    gradient: "linear-gradient(135deg, #1F4068, #1B262C)",
    shortLabel: "Split",
    behanceUrl: "https://www.behance.net/gallery/208693691/UIUX-App-Redesign-Splitwise",
    views: 162,
    appreciations: 11,
    span: "p2",
    aspect: "4/3",
  },
  {
    id: "skincare-social",
    title: "Skincare Brand — Social Media System",
    category: "Branding · Social Media",
    filterCat: "social",
    gradient: "linear-gradient(135deg, #D4A5A5, #9E6B8A)",
    shortLabel: "Skin",
    behanceUrl: "https://www.behance.net/gallery/211075727/Branding-Social-Media-Posts-for-Skincare-Brand",
    views: 87,
    appreciations: 3,
    span: "p3",
    aspect: "4/3",
  },
  {
    id: "nat-habit",
    title: "Nat Habit Packaging",
    category: "Packaging Design",
    filterCat: "packaging",
    gradient: "linear-gradient(135deg, #4A7C59, #C9973A)",
    shortLabel: "Nat",
    behanceUrl: "https://www.behance.net/gallery/222087787/Nat-Habit-Packaging-Design",
    views: 39,
    appreciations: 3,
    span: "p4",
    aspect: "1/1",
  },
  {
    id: "little-hanoi",
    title: "Little Hanoi Egg Coffee",
    category: "Rebranding",
    filterCat: "branding",
    gradient: "linear-gradient(135deg, #C44B2A, #F5C842)",
    shortLabel: "LH",
    behanceUrl: "https://www.behance.net/gallery/218242219/Rebranding-Little-Hanoi-Egg-Coffee",
    views: 72,
    appreciations: 5,
    span: "p5",
    aspect: "1/1",
  },
  {
    id: "skincare-launch",
    title: "Product Launch Campaign — Skincare Brand",
    category: "Social Media · Campaign",
    filterCat: "social",
    gradient: "linear-gradient(135deg, #F9E4D4, #C44B2A, #1C1916)",
    shortLabel: "Launch",
    behanceUrl: "https://www.behance.net/gallery/221777787/Product-Launch-Campaign-for-a-Skincare-Brand",
    views: 80,
    appreciations: 5,
    span: "p6",
    aspect: "16/9",
  },
  {
    id: "dating-app",
    title: "Dating App — Carousel & Sticker Pack",
    category: "Social Media · Illustration",
    filterCat: "social",
    gradient: "linear-gradient(135deg, #FF6B6B, #9B7EA6)",
    shortLabel: "Date",
    behanceUrl: "https://www.behance.net/gallery/216803361/Social-Media-Carousel-Sticker-Pack-for-a-Dating-App",
    views: 44,
    appreciations: 6,
    span: "p7",
    aspect: "16/9",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "UI / UX", value: "ux" },
  { label: "Branding", value: "branding" },
  { label: "Packaging", value: "packaging" },
  { label: "Social Media", value: "social" },
];

const spanMap: Record<string, string> = {
  p1: "7",
  p2: "5",
  p3: "5",
  p4: "4",
  p5: "3",
  p6: "6",
  p7: "6",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      className="proj-card relative overflow-hidden bg-pale group"
      style={{
        gridColumn: `span ${spanMap[project.span]}`,
        transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      onClick={() => window.open(project.behanceUrl, "_blank")}
      whileHover={{ y: -7 }}
    >
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: project.aspect }}>
        <div
          className="w-full h-full flex items-center justify-center select-none group-hover:scale-105"
          style={{
            background: project.gradient,
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "3.5rem",
            fontWeight: 700,
            color: "rgba(255,255,255,0.12)",
            transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {project.shortLabel}
        </div>
        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: "var(--ink)",
            opacity: 0,
            transition: "opacity 0.3s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.84"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0"; }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--cream)",
              border: "1px solid rgba(247,243,237,0.3)",
              padding: "0.65rem 1.4rem",
            }}
          >
            View on Behance ↗
          </span>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "1.1rem 1.3rem 1.4rem" }}>
        <p
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            opacity: 0.38,
            marginBottom: "0.35rem",
          }}
        >
          {project.category}
        </p>
        <p
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "1.08rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {project.title}
        </p>
        <p
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.62rem",
            opacity: 0.3,
            marginTop: "0.3rem",
          }}
        >
          {project.views} views · {project.appreciations} appreciations
          {project.note ? ` — ${project.note}` : ""}
        </p>
      </div>
    </motion.div>
  );
}

export function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.filterCat === activeFilter);

  return (
    <section id="work" style={{ padding: "7rem 3rem 5rem" }}>
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
          Selected Work
        </span>
        <ScrollReveal>
          <h2
            className="font-serif font-extralight"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Projects
          </h2>
        </ScrollReveal>
        <span
          className="font-serif"
          style={{ fontSize: "0.85rem", opacity: 0.28 }}
        >
          (07)
        </span>
      </div>

      {/* Filters */}
      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap" style={{ gap: "0.5rem", marginBottom: "3.5rem" }}>
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              style={{
                padding: "0.45rem 1.1rem",
                border: "1px solid",
                borderColor:
                  activeFilter === f.value
                    ? "var(--ink)"
                    : "rgba(28,25,22,0.18)",
                background:
                  activeFilter === f.value ? "var(--ink)" : "transparent",
                color:
                  activeFilter === f.value ? "var(--cream)" : "var(--ink)",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "all 0.2s",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Grid */}
      <ScrollReveal delay={0.2}>
        <motion.div
          layout
          className="hidden md:grid"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "1.4rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile: stacked */}
        <div className="flex flex-col md:hidden" style={{ gap: "1.4rem" }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="proj-card relative overflow-hidden bg-pale group"
              onClick={() => window.open(project.behanceUrl, "_blank")}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <div
                  className="w-full h-full flex items-center justify-center select-none"
                  style={{
                    background: project.gradient,
                    fontFamily: "var(--font-fraunces), serif",
                    fontSize: "3.5rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.12)",
                  }}
                >
                  {project.shortLabel}
                </div>
              </div>
              <div style={{ padding: "1.1rem 1.3rem 1.4rem" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.38, marginBottom: "0.35rem" }}>
                  {project.category}
                </p>
                <p style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "1.08rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
                  {project.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
