import { useEffect, useRef, useState } from "react";
import { trackCtaClick, trackOnboardingStart } from "../utils/analytics";

const services = [
  {
    id: "hair",
    name: "Hair",
    icon: "✂",
    desc: "Expert cuts, colours and treatments to transform your look.",
    image: "https://images.unsplash.com/photo-1629397685944-7073f5589754?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Professional hair styling service",
    items: ["Haircut & Styling", "Hair Spa", "Hair Coloring", "Global Color", "Highlights", "Hair Treatments", "Blow Dry", "Bridal Hair Styling"],
  },
  {
    id: "skin",
    name: "Skin",
    icon: "✦",
    desc: "Radiance-boosting facials and skin care rituals.",
    image: "https://images.unsplash.com/photo-1760862652442-e8ff7ebdd2f8?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Premium skincare products and treatments",
    items: ["Cleanup", "Facial", "Premium Facial", "Skin Treatments", "De-Tan", "Bleaching", "Glow Treatments"],
  },
  {
    id: "makeup",
    name: "Makeup",
    icon: "◆",
    desc: "Flawless artistry for every occasion and milestone.",
    image: "https://images.unsplash.com/photo-1648671095177-d00c1f6264e9?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Professional makeup application",
    items: ["Party Makeup", "Bridal Makeup", "Engagement Makeup", "Event Makeup", "Professional Makeup"],
  },
  {
    id: "nails",
    name: "Nails",
    icon: "◈",
    desc: "Meticulous nail care, art and extensions.",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Elegant nail art and manicure service",
    items: ["Manicure", "Pedicure", "Nail Art", "Gel Nails", "Nail Extensions", "Nail Care"],
  },
  {
    id: "massage",
    name: "Massage",
    icon: "❧",
    desc: "Calming bodywork for complete relaxation and renewal.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop&auto=format",
    imageAlt: "Relaxing hot stone massage therapy",
    items: ["Relaxation Massage", "Head Massage", "Back Massage", "Full Body Massage", "Stress Relief Treatments"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState("hair");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("revealed"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const current = services.find((s) => s.id === activeService)!;

  const handleBookNowClick = () => {
    trackCtaClick("Book Now", "services");
    trackOnboardingStart("services", "phone");
  };

  return (
    <section id="services" ref={sectionRef} style={{ background: "var(--black)", padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="reveal" style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 500, color: "var(--gold)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>
            What We Offer
          </p>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 600, color: "var(--ivory)", lineHeight: 1.1, marginBottom: 16 }}
          >
            Our Signature Services
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,249,245,0.45)", maxWidth: 480, margin: "0 auto", fontWeight: 300 }}>
            Everything you need to look your best, all under one roof.
          </p>
          <div className="reveal reveal-delay-3" style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <div style={{ width: 64, height: 1, background: "linear-gradient(to right, transparent, var(--gold), transparent)" }} aria-hidden="true" />
          </div>
        </div>

        {/* Service tab bar */}
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 0,
            marginBottom: 56,
            borderBottom: "1px solid rgba(214,181,108,0.18)",
            flexWrap: "wrap",
          }}
        >
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveService(s.id)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: activeService === s.id ? "var(--gold)" : "rgba(255,249,245,0.4)",
                background: "none",
                border: "none",
                borderBottom: activeService === s.id ? "2px solid var(--gold)" : "2px solid transparent",
                padding: "14px 28px",
                cursor: "pointer",
                transition: "color 0.25s",
                marginBottom: -1,
              }}
              aria-selected={activeService === s.id}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Active service panel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "start",
          }}
          className="service-panel-grid"
          key={activeService}
        >
          {/* Image */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img
              src={current.image}
              alt={current.imageAlt}
              loading="lazy"
              style={{
                width: "100%",
                height: 440,
                objectFit: "cover",
                display: "block",
                transition: "transform 0.6s ease",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.transform = "scale(1.03)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.transform = "none")}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                background: "linear-gradient(to top, rgba(10,10,10,0.7), transparent)",
              }}
              aria-hidden="true"
            />
            <div style={{ position: "absolute", bottom: 24, left: 24 }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 36, color: "var(--gold)", opacity: 0.6 }} aria-hidden="true">{current.icon}</span>
            </div>
          </div>

          {/* Content */}
          <div style={{ paddingTop: 20 }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 42,
                fontWeight: 600,
                color: "var(--ivory)",
                letterSpacing: "-0.01em",
                marginBottom: 8,
              }}
            >
              {current.name}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "rgba(255,249,245,0.55)",
                marginBottom: 32,
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              {current.desc}
            </p>

            <div style={{ borderTop: "1px solid rgba(214,181,108,0.15)", paddingTop: 28, marginBottom: 32 }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px" }}>
                {current.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "rgba(255,249,245,0.7)",
                      fontWeight: 300,
                    }}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="tel:8660211087"
              onClick={handleBookNowClick}
              style={{
                display: "inline-block",
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--black)",
                background: "linear-gradient(135deg, var(--gold), var(--light-gold))",
                padding: "14px 32px",
                textDecoration: "none",
                transition: "opacity 0.25s, transform 0.25s",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.88"; (e.target as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "none"; }}
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Service cards row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 2, marginTop: 80 }} className="service-cards-grid">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveService(s.id)}
              style={{
                background: activeService === s.id ? "rgba(214,181,108,0.1)" : "rgba(255,255,255,0.03)",
                border: activeService === s.id ? "1px solid rgba(214,181,108,0.4)" : "1px solid rgba(255,255,255,0.06)",
                padding: "28px 16px",
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.25s",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(214,181,108,0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = activeService === s.id ? "rgba(214,181,108,0.1)" : "rgba(255,255,255,0.03)")}
            >
              <span style={{ fontSize: 22, color: activeService === s.id ? "var(--gold)" : "rgba(255,249,245,0.4)" }}>{s.icon}</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: activeService === s.id ? "var(--gold)" : "rgba(255,249,245,0.5)" }}>
                {s.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .service-panel-grid { grid-template-columns: 1fr !important; }
          .service-cards-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .service-cards-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
