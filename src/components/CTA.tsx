import { useEffect, useRef } from "react";

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("revealed"), i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--black)",
        padding: "100px 32px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        borderTop: "1px solid rgba(214,181,108,0.12)",
        borderBottom: "1px solid rgba(214,181,108,0.12)",
      }}
    >
      {/* Decorative corners */}
      <div style={{ position: "absolute", top: 24, left: 24, width: 80, height: 80, borderTop: "1px solid rgba(214,181,108,0.3)", borderLeft: "1px solid rgba(214,181,108,0.3)" }} aria-hidden="true" />
      <div style={{ position: "absolute", top: 24, right: 24, width: 80, height: 80, borderTop: "1px solid rgba(214,181,108,0.3)", borderRight: "1px solid rgba(214,181,108,0.3)" }} aria-hidden="true" />
      <div style={{ position: "absolute", bottom: 24, left: 24, width: 80, height: 80, borderBottom: "1px solid rgba(214,181,108,0.3)", borderLeft: "1px solid rgba(214,181,108,0.3)" }} aria-hidden="true" />
      <div style={{ position: "absolute", bottom: 24, right: 24, width: 80, height: 80, borderBottom: "1px solid rgba(214,181,108,0.3)", borderRight: "1px solid rgba(214,181,108,0.3)" }} aria-hidden="true" />

      {/* Soft glow */}
      <div
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 400, background: "radial-gradient(ellipse, rgba(223,163,165,0.07) 0%, transparent 70%)", pointerEvents: "none" }}
        aria-hidden="true"
      />

      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>
        <p className="reveal" style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 500, color: "var(--gold)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>
          Ready for Your Transformation?
        </p>

        <h2
          className="reveal reveal-delay-1"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 600, color: "var(--ivory)", lineHeight: 1.05, marginBottom: 12 }}
        >
          You Deserve
          <br />
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>to Shine</em>
        </h2>

        <p className="reveal reveal-delay-2" style={{ fontFamily: "var(--font-script)", fontSize: 22, color: "var(--blush)", marginBottom: 20 }}>
          Beauty is Our Passion
        </p>

        <div
          className="reveal reveal-delay-3"
          style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}
          aria-hidden="true"
        >
          <div style={{ width: 80, height: 1, background: "linear-gradient(to right, transparent, var(--gold), transparent)" }} />
        </div>

        <p
          className="reveal reveal-delay-3"
          style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "rgba(255,249,245,0.5)", lineHeight: 1.7, fontWeight: 300, marginBottom: 48 }}
        >
          Ready for your next beauty experience?
        </p>

        <div className="reveal reveal-delay-4" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="tel:8660211087"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--black)",
              background: "linear-gradient(135deg, var(--gold), var(--light-gold))",
              padding: "16px 40px",
              textDecoration: "none",
              display: "inline-block",
              transition: "opacity 0.25s, transform 0.25s",
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.88"; (e.target as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "none"; }}
          >
            Book an Appointment
          </a>
          <a
            href="tel:8660211087"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gold)",
              background: "transparent",
              border: "1px solid rgba(214,181,108,0.4)",
              padding: "16px 40px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              transition: "border-color 0.25s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.borderColor = "var(--gold)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(214,181,108,0.4)")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.72 6.72l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call 8660211087
          </a>
        </div>
      </div>
    </section>
  );
}
