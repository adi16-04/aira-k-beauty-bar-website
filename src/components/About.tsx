import { useEffect, useRef } from "react";

const pillars = [
  { label: "Premium Service", desc: "Exceptional attention to detail" },
  { label: "Expert Professionals", desc: "Skilled beauty specialists" },
  { label: "Unisex Salon", desc: "Welcoming everyone" },
  { label: "Hygiene Focused", desc: "Safe & clean environment" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("revealed"), i * 120);
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
    <section id="about" ref={sectionRef} style={{ background: "var(--warm-white)", padding: "100px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Image side */}
          <div className="reveal" style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: -20,
                left: -20,
                width: "60%",
                height: "60%",
                border: "1px solid var(--gold)",
                opacity: 0.3,
                pointerEvents: "none",
              }}
              aria-hidden="true"
            />
            <img
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=700&h=900&fit=crop&auto=format"
              alt="Professional hairstylist at work in Aria k Beauty Bar"
              loading="lazy"
              style={{
                width: "100%",
                height: 540,
                objectFit: "cover",
                display: "block",
                position: "relative",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -20,
                right: -20,
                width: "50%",
                height: "50%",
                border: "1px solid var(--blush)",
                opacity: 0.35,
                pointerEvents: "none",
                zIndex: 0,
              }}
              aria-hidden="true"
            />
            {/* Gold badge */}
            <div
              style={{
                position: "absolute",
                bottom: 32,
                left: -28,
                background: "var(--black)",
                border: "1px solid rgba(214,181,108,0.3)",
                padding: "20px 28px",
                zIndex: 2,
              }}
            >
              <p style={{ fontFamily: "var(--font-script)", fontSize: 22, color: "var(--gold)", margin: 0, lineHeight: 1 }}>You Deserve</p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--blush)", margin: 0, letterSpacing: "0.12em", textTransform: "uppercase" }}>to Shine</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="reveal" style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 500, color: "var(--gold)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>
              About Us
            </p>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(30px, 4vw, 48px)",
                fontWeight: 600,
                color: "var(--soft-black)",
                lineHeight: 1.15,
                marginBottom: 8,
              }}
            >
              Beauty Is Our
              <br />
              <em style={{ color: "var(--muted-rose)", fontStyle: "italic" }}>Passion</em>
            </h2>

            <p className="reveal reveal-delay-2" style={{ fontFamily: "var(--font-script)", fontSize: 20, color: "var(--gold)", marginBottom: 28 }}>
              Your Satisfaction is Our Priority
            </p>

            <div
              className="reveal reveal-delay-2"
              style={{ width: 48, height: 1, background: "var(--gold)", marginBottom: 28, opacity: 0.6 }}
              aria-hidden="true"
            />

            <p
              className="reveal reveal-delay-3"
              style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#4a3f3f", lineHeight: 1.85, marginBottom: 16, fontWeight: 300 }}
            >
              Aria k Beauty Bar is a premium unisex salon in the heart of Jayanagar, Bangalore — a sanctuary where every client is treated with care, expertise, and genuine attention to detail.
            </p>
            <p
              className="reveal reveal-delay-3"
              style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#4a3f3f", lineHeight: 1.85, marginBottom: 40, fontWeight: 300 }}
            >
              From professional hair care to radiant skin treatments and artful makeup — we offer everything you need to look your best and feel your most confident self.
            </p>

            {/* Pillars */}
            <div
              className="reveal reveal-delay-4"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                background: "rgba(214,181,108,0.18)",
                border: "1px solid rgba(214,181,108,0.18)",
              }}
            >
              {pillars.map((p) => (
                <div
                  key={p.label}
                  style={{
                    background: "var(--warm-white)",
                    padding: "20px 18px",
                    borderBottom: "1px solid rgba(214,181,108,0.12)",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "var(--soft-black)", marginBottom: 4, letterSpacing: "0.02em" }}>{p.label}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--muted-rose)", letterSpacing: "0.04em", fontWeight: 300 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
