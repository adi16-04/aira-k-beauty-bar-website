import { useEffect, useRef } from "react";

const features = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40" aria-hidden="true">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" />
        <path d="M20 10l2.5 7.5H30l-6.25 4.5 2.5 7.5L20 25l-6.25 4.5 2.5-7.5L10 17.5h7.5L20 10z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    ),
    label: "Premium Service",
    desc: "Exceptional attention to detail and a refined salon experience crafted around your comfort.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40" aria-hidden="true">
        <path d="M20 8c-6.627 0-12 5.373-12 12 0 4.418 2.394 8.276 5.946 10.382" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M20 8c6.627 0 12 5.373 12 12 0 4.418-2.394 8.276-5.946 10.382" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M14 28l4-4 2 2 4-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    label: "Hygienic & Safe",
    desc: "A clean, comfortable and welcoming salon environment maintained to the highest standards.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40" aria-hidden="true">
        <circle cx="20" cy="13" r="5" stroke="currentColor" strokeWidth="1" />
        <circle cx="10" cy="16" r="4" stroke="currentColor" strokeWidth="1" />
        <circle cx="30" cy="16" r="4" stroke="currentColor" strokeWidth="1" />
        <path d="M20 22c-5 0-9 2-9 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M20 22c5 0 9 2 9 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M10 24c-3.5 0-6 1.5-6 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M30 24c3.5 0 6 1.5 6 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    label: "Expert Professionals",
    desc: "Professional beauty services delivered with care, skill, and genuine expertise.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40" aria-hidden="true">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" />
        <path d="M14 18a6 6 0 1 0 12 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="20" cy="13" r="2" fill="currentColor" />
        <path d="M16 28h8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M28 15a3 3 0 1 0 0-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M12 15a3 3 0 1 1 0-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    label: "Unisex Salon",
    desc: "Professional beauty and grooming services designed for everyone — all are welcome here.",
  },
];

export default function WhyChooseUs() {
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
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} style={{ background: "var(--cream)", padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p className="reveal" style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 500, color: "var(--muted-rose)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>
            Our Promise
          </p>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 600, color: "var(--soft-black)", lineHeight: 1.1, marginBottom: 16 }}
          >
            Why Choose{" "}
            <em style={{ fontStyle: "italic", color: "var(--muted-rose)" }}>Aria k?</em>
          </h2>
          <div
            className="reveal reveal-delay-2"
            style={{ width: 48, height: 1, background: "var(--gold)", margin: "0 auto", opacity: 0.6 }}
            aria-hidden="true"
          />
        </div>

        {/* Feature grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }} className="why-grid">
          {features.map((f, i) => (
            <div
              key={f.label}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: "var(--warm-white)",
                padding: "48px 32px",
                textAlign: "center",
                position: "relative",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              {/* Gold top accent */}
              <div
                style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 40, height: 2, background: "var(--gold)" }}
                aria-hidden="true"
              />

              <div style={{ color: "var(--muted-rose)", marginBottom: 24, display: "flex", justifyContent: "center" }}>
                {f.icon}
              </div>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, color: "var(--soft-black)", marginBottom: 12, letterSpacing: "0.01em" }}>
                {f.label}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#6b5b5c", lineHeight: 1.75, fontWeight: 300 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="reveal" style={{ textAlign: "center", marginTop: 64 }}>
          <p style={{ fontFamily: "var(--font-script)", fontSize: 28, color: "var(--gold)", marginBottom: 8 }}>Beauty is Our Passion</p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: "0.3em", color: "var(--muted-rose)", textTransform: "uppercase" }}>
            Beauty • Style • Confidence
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
