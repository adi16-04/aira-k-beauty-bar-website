import { useEffect, useRef } from "react";
import { trackCtaClick, trackOnboardingStart } from "../utils/analytics";

export default function Experience() {
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

  const handleBookClick = () => {
    trackCtaClick("Book an Appointment", "experience");
    trackOnboardingStart("experience", "phone");
  };

  const handleWhatsappClick = () => {
    trackCtaClick("WhatsApp Us", "experience");
    trackOnboardingStart("experience", "whatsapp");
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: 560,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--black)",
      }}
      aria-label="Experience section"
    >
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1400&h=700&fit=crop&auto=format"
        alt="Luxury salon interior ambience"
        loading="lazy"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }}
      />
      <div
        style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.9) 40%, rgba(10,10,10,0.5) 100%)" }}
        aria-hidden="true"
      />

      {/* Gold floral right decoration */}
      <div
        style={{ position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)", width: 340, height: 340, opacity: 0.06 }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 300 300" fill="none">
          {[0, 60, 120, 180, 240, 300].map((a) => {
            const r = a * (Math.PI / 180);
            const x = 150 + 100 * Math.cos(r);
            const y = 150 + 100 * Math.sin(r);
            return <ellipse key={a} cx={x} cy={y} rx="20" ry="50" transform={`rotate(${a + 90} ${x} ${y})`} fill="#D6B56C" />;
          })}
          <circle cx="150" cy="150" r="25" fill="#D6B56C" />
        </svg>
      </div>

      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "100px 32px", width: "100%" }}>
        <div style={{ maxWidth: 640 }}>
          <p className="reveal" style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "var(--gold)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 20 }}>
            The Experience
          </p>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4.5vw, 58px)",
              fontWeight: 600,
              color: "var(--ivory)",
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            Your Beauty.{" "}
            <em style={{ color: "var(--blush)", fontStyle: "italic" }}>Your Style.</em>
            <br />
            Your Confidence.
          </h2>

          <div className="reveal reveal-delay-2" style={{ width: 48, height: 1, background: "var(--gold)", marginBottom: 28, opacity: 0.7 }} aria-hidden="true" />

          <p
            className="reveal reveal-delay-3"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "rgba(255,249,245,0.6)",
              lineHeight: 1.85,
              fontWeight: 300,
              marginBottom: 44,
              maxWidth: 520,
            }}
          >
            Step into an experience designed around you — from relaxing treatments to professional styling and beauty services that leave you looking and feeling extraordinary.
          </p>

          <div className="reveal reveal-delay-4" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="tel:8660211087"
              onClick={handleBookClick}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--black)",
                background: "linear-gradient(135deg, var(--gold), var(--light-gold))",
                padding: "15px 32px",
                textDecoration: "none",
                transition: "opacity 0.25s, transform 0.25s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.88"; (e.target as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "none"; }}
            >
              Book an Appointment
            </a>
            <a
              href={`https://wa.me/918660211087?text=${encodeURIComponent("Hello! I'd like to book an appointment at Aira K Beauty Bar.")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsappClick}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--ivory)",
                background: "transparent",
                border: "1px solid rgba(255,249,245,0.3)",
                padding: "15px 32px",
                textDecoration: "none",
                display: "inline-block",
                transition: "border-color 0.25s, color 0.25s",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.borderColor = "var(--gold)"; (e.target as HTMLElement).style.color = "var(--gold)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,249,245,0.3)"; (e.target as HTMLElement).style.color = "var(--ivory)"; }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
