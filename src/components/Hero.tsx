import { useEffect, useRef } from "react";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        el.style.transition = "opacity 1.1s ease, transform 1.1s ease";
        el.style.opacity = "1";
        el.style.transform = "none";
      }, 200);
    }
  }, []);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "var(--black)",
        overflow: "hidden",
      }}
      aria-label="Hero"
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1773904215697-e6c21fc27ac2?w=1400&h=900&fit=crop&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          opacity: 0.25,
        }}
        aria-hidden="true"
      />

      {/* Left dark overlay gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(105deg, rgba(10,10,10,0.97) 40%, rgba(10,10,10,0.55) 70%, rgba(223,163,165,0.08) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative floral top-right */}
      <div
        style={{
          position: "absolute",
          top: -20,
          right: -20,
          width: 420,
          height: 420,
          opacity: 0.07,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <FlowerDecor />
      </div>

      {/* Decorative bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: -40,
          left: -40,
          width: 340,
          height: 340,
          opacity: 0.05,
          transform: "rotate(180deg)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <FlowerDecor />
      </div>

      {/* Vertical gold line */}
      <div
        style={{
          position: "absolute",
          left: 64,
          top: "20%",
          bottom: "20%",
          width: 1,
          background: "linear-gradient(to bottom, transparent, var(--gold), transparent)",
          opacity: 0.4,
        }}
        aria-hidden="true"
      />

      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "120px 32px 80px", width: "100%" }}>
        <div style={{ maxWidth: 680 }}>
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 500,
              color: "var(--gold)",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              marginBottom: 20,
              opacity: 0,
              animation: "fadeInUp 0.8s ease 0.3s both",
            }}
          >
            Unisex Salon · Jayanagar, Bangalore
          </p>

          {/* Main heading */}
          <h1
            ref={headingRef}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(42px, 7vw, 88px)",
              fontWeight: 600,
              color: "var(--ivory)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: 12,
            }}
          >
            Where Beauty
            <br />
            <em style={{ color: "var(--blush)", fontStyle: "italic", fontWeight: 400 }}>Meets Confidence</em>
          </h1>

          {/* Script accent */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(18px, 2.4vw, 28px)",
              fontWeight: 500,
              letterSpacing: "0.08em",
              color: "var(--gold)",
              marginBottom: 28,
              opacity: 0,
              animation: "fadeInUp 0.8s ease 0.6s both",
            }}
          >
            Aria K Beauty Bar
          </p>

          {/* Divider */}
          <div
            style={{ width: 64, height: 1, background: "var(--gold)", marginBottom: 28, opacity: 0, animation: "fadeIn 1s ease 0.8s both" }}
            aria-hidden="true"
          />

          {/* Supporting text */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: "rgba(255,249,245,0.65)",
              lineHeight: 1.75,
              maxWidth: 520,
              marginBottom: 44,
              fontWeight: 300,
              opacity: 0,
              animation: "fadeInUp 0.8s ease 0.9s both",
            }}
          >
            Premium beauty, hair, skin, makeup, nails and relaxation services designed to help you look your best and feel even better.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              opacity: 0,
              animation: "fadeInUp 0.8s ease 1.1s both",
            }}
          >
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
                padding: "16px 36px",
                textDecoration: "none",
                transition: "opacity 0.25s, transform 0.25s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = "translateY(-2px)"; (e.target as HTMLElement).style.opacity = "0.9"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = "none"; (e.target as HTMLElement).style.opacity = "1"; }}
            >
              Book an Appointment
            </a>
            <button
              onClick={() => scrollToSection("#services")}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--ivory)",
                background: "transparent",
                border: "1px solid rgba(255,249,245,0.3)",
                padding: "16px 36px",
                cursor: "pointer",
                transition: "border-color 0.25s, color 0.25s",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.borderColor = "var(--gold)"; (e.target as HTMLElement).style.color = "var(--gold)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,249,245,0.3)"; (e.target as HTMLElement).style.color = "var(--ivory)"; }}
            >
              Explore Services
            </button>
          </div>

          {/* Service pillars */}
          <div
            style={{
              display: "flex",
              gap: 28,
              marginTop: 60,
              opacity: 0,
              animation: "fadeInUp 0.8s ease 1.3s both",
              flexWrap: "wrap",
            }}
          >
            {["Hair", "Skin", "Makeup", "Nails", "Massage"].map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(214,181,108,0.7)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 10,
              letterSpacing: "0.28em",
              color: "rgba(255,249,245,0.3)",
              marginTop: 14,
              textTransform: "uppercase",
              opacity: 0,
              animation: "fadeInUp 0.8s ease 1.4s both",
            }}
          >
            Beauty • Style • Confidence
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0,
          animation: "fadeIn 1s ease 1.8s both",
        }}
        aria-hidden="true"
      >
        <span style={{ fontFamily: "var(--font-body)", fontSize: 9, letterSpacing: "0.22em", color: "rgba(255,249,245,0.3)", textTransform: "uppercase" }}>Scroll</span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, var(--gold), transparent)",
            animation: "scrollPulse 1.8s ease-in-out infinite",
          }}
        />
      </div>
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.1); }
        }
      `}</style>
    </section>
  );
}

function FlowerDecor() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <circle cx="200" cy="200" r="80" stroke="#D6B56C" strokeWidth="0.8" opacity="0.6" />
      <circle cx="200" cy="200" r="120" stroke="#D6B56C" strokeWidth="0.5" opacity="0.4" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const r = angle * (Math.PI / 180);
        const x1 = 200 + 80 * Math.cos(r);
        const y1 = 200 + 80 * Math.sin(r);
        const x2 = 200 + 190 * Math.cos(r);
        const y2 = 200 + 190 * Math.sin(r);
        const mx = 200 + 135 * Math.cos(r + 0.3);
        const my = 200 + 135 * Math.sin(r + 0.3);
        return (
          <g key={angle}>
            <ellipse cx={(x1 + x2) / 2} cy={(y1 + y2) / 2} rx="18" ry="32" transform={`rotate(${angle + 90} ${(x1 + x2) / 2} ${(y1 + y2) / 2})`} fill="#DFA3A5" opacity="0.5" />
            <ellipse cx={mx} cy={my} rx="10" ry="20" transform={`rotate(${angle + 45} ${mx} ${my})`} fill="#D6B56C" opacity="0.35" />
          </g>
        );
      })}
      <circle cx="200" cy="200" r="20" fill="#D6B56C" opacity="0.6" />
    </svg>
  );
}
