export function Footer() {
  return (
    <footer
      className="bg-ink text-cream flex justify-between items-center"
      style={{
        padding: "1.4rem 3rem",
        fontFamily: "var(--font-dm-mono), monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        opacity: 0.55,
      }}
    >
      <span>&copy; 2026 Suruchi Kumari</span>
      <span>Visual Designer — Remote</span>
      <span>Available for work ✦</span>
    </footer>
  );
}
