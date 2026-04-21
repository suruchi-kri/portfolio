"use client";

import { useState } from "react";

interface Project {
  id: string;
  title: string;
  category: string;
  filterCat: string;
  coverImage: string;
  behanceUrl: string;
  views: number;
  appreciations: number;
  note?: string;
  span: string;
  aspect: string;
}

const projects: Project[] = [
  {
    id: "route-gt",
    title: "Route GT — Branding Project",
    category: "Branding · Logo · Event Collateral",
    filterCat: "branding",
    coverImage: "/Route GT-Branding Project.jpg",
    behanceUrl:
      "https://www.behance.net/gallery/247751875/Route-GT-Branding-Project",
    views: 30,
    appreciations: 6,
    note: "newest",
    span: "p1",
    aspect: "808/632",
  },
  {
    id: "blog-uiux",
    title: "Blog Website — UI/UX Design",
    category: "UI/UX · Web Design · Figma + WordPress",
    filterCat: "ux",
    coverImage: "/Blog Website-UI:UX Design.png",
    behanceUrl:
      "https://www.behance.net/gallery/203849335/Blog-Website-UIUX-Design",
    views: 204,
    appreciations: 11,
    note: "most viewed",
    span: "p2",
    aspect: "17/12",
  },
  {
    id: "splitwise",
    title: "Splitwise App Redesign",
    category: "UI/UX · App Redesign",
    filterCat: "ux",
    coverImage: "/Splitwise App Redesign.png",
    behanceUrl:
      "https://www.behance.net/gallery/208693691/UIUX-App-Redesign-Splitwise",
    views: 163,
    appreciations: 10,
    span: "p3",
    aspect: "5/3",
  },
  {
    id: "skincare-social",
    title: "Skincare Brand — Social Media System",
    category: "Branding · Social Media",
    filterCat: "social",
    coverImage: "/Skincare Brand-Social Media System.png",
    behanceUrl:
      "https://www.behance.net/gallery/211075727/Branding-Social-Media-Posts-for-Skincare-Brand",
    views: 88,
    appreciations: 2,
    span: "p4",
    aspect: "852/634",
  },
  {
    id: "nat-habit",
    title: "Nat Habit Packaging",
    category: "Packaging Design",
    filterCat: "packaging",
    coverImage: "/Nat habit Packaging.png",
    behanceUrl:
      "https://www.behance.net/gallery/222087787/Nat-Habit-Packaging-Design",
    views: 41,
    appreciations: 2,
    span: "p5",
    aspect: "1/1",
  },
  {
    id: "little-hanoi",
    title: "Little Hanoi Egg Coffee",
    category: "Rebranding",
    filterCat: "branding",
    coverImage: "/Little Hanoi Egg Coffee.png",
    behanceUrl:
      "https://www.behance.net/gallery/218242219/Rebranding-Little-Hanoi-Egg-Coffee",
    views: 72,
    appreciations: 5,
    span: "p6",
    aspect: "1700/1012",
  },
  {
    id: "skincare-launch",
    title: "Product Launch Campaign — Skincare Brand",
    category: "Social Media · Campaign",
    filterCat: "social",
    coverImage: "/Product Launch Campaign-Skincare Brand.png",
    behanceUrl:
      "https://www.behance.net/gallery/221777787/Product-Launch-Campaign-for-a-Skincare-Brand",
    views: 80,
    appreciations: 5,
    span: "p7",
    aspect: "1080/700",
  },
  {
    id: "dating-app",
    title: "Dating App — Carousel & Sticker Pack",
    category: "Social Media · Illustration",
    filterCat: "social",
    coverImage: "/Dating App- Carousel & Sticker Pack.png",
    behanceUrl:
      "https://www.behance.net/gallery/216803361/Social-Media-Carousel-Sticker-Pack-for-a-Dating-App",
    views: 44,
    appreciations: 6,
    span: "p8",
    aspect: "3/2",
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
  p1: "7", // Route GT (featured)
  p2: "5", // Blog
  p3: "5", // Splitwise
  p4: "4", // Skincare social
  p5: "3", // Nat Habit
  p6: "6", // Little Hanoi
  p7: "6", // Skincare launch
  p8: "12", // Dating app (full width)
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.behanceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="proj-card relative overflow-hidden bg-pale group block no-underline text-ink"
      style={{ gridColumn: `span ${spanMap[project.span]}` }}
    >
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ aspectRatio: project.aspect }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105"
          style={{ transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }}
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-85"
          style={{ background: "var(--ink)", transition: "opacity 0.3s" }}
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
    </a>
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
        <h2
          className="font-serif font-extralight"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            letterSpacing: "-0.03em",
          }}
        >
          Projects
        </h2>
        <span
          className="font-serif"
          style={{ fontSize: "0.85rem", opacity: 0.28 }}
        >
          (08)
        </span>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap" style={{ gap: "0.5rem", marginBottom: "3.5rem" }}>
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setActiveFilter(f.value)}
            style={{
              padding: "0.7rem 1.2rem",
              minHeight: 44,
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
              touchAction: "manipulation",
              cursor: "pointer",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Desktop grid. key={activeFilter} remounts the container on filter
          change, which restarts the CSS fade-in on every card. */}
      <div
        key={activeFilter}
        className="work-grid hidden md:grid"
        style={{
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "1.4rem",
        }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Mobile: stacked */}
      <div
        key={`m-${activeFilter}`}
        className="work-list flex flex-col md:hidden"
        style={{ gap: "1.4rem" }}
      >
        {filteredProjects.map((project) => (
          <a
            key={project.id}
            href={project.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-card relative overflow-hidden bg-pale block no-underline text-ink"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div style={{ padding: "1.1rem 1.3rem 1.4rem" }}>
              <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.38, marginBottom: "0.35rem" }}>
                {project.category}
              </p>
              <p style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "1.08rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
                {project.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
