import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "Beautiful ambience, professional service and a wonderful overall experience. Truly a premium salon in Jayanagar.",
    name: "A. Sharma",
    role: "Regular Client",
  },
  {
    quote: "The team at Aria k is incredibly skilled and attentive. My hair transformation exceeded all expectations.",
    name: "P. Reddy",
    role: "Salon Client",
  },
  {
    quote: "From the bridal makeup to the nail art, everything was flawless. Highly recommend Aria k Beauty Bar.",
    name: "R. Mehta",
    role: "Bridal Client",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("revealed"), i * 130);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "var(--black)", padding: "100px 0", position: "relative", overflow: "hidden" }}>
      {/* Decorative elements */}
      <div style={{ position: "absolute", top: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(223,163,165,0.06) 0%, transparent 70%)" }} aria-hidden="true" />
      <div style={{ position: "absolute", bottom: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(214,181,108,0.06) 0%, transparent 70%)" }} aria-hidden="true" />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p className="reveal" style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 500, color: "var(--gold)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>
            What Clients Say
          </p>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600, color: "var(--ivory)", lineHeight: 1.1 }}
          >
            Client{" "}
            <em style={{ fontStyle: "italic", color: "var(--blush)" }}>Experiences</em>
          </h2>
        </div>

        {/* Testimonial card */}
        <div
          className="reveal reveal-delay-2"
          style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}
        >
          {/* Quote mark */}
          <div style={{ fontFamily: "var(--font-display)", fontSize: 80, color: "var(--gold)", opacity: 0.2, lineHeight: 0.8, marginBottom: 32 }} aria-hidden="true">"</div>

          <p
            key={current}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(18px, 2.2vw, 24px)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "rgba(255,249,245,0.85)",
              lineHeight: 1.7,
              marginBottom: 40,
              animation: "fadeInUp 0.6s ease",
            }}
          >
            "{testimonials[current].quote}"
          </p>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16 }}>
            <div style={{ width: 32, height: 1, background: "var(--gold)", opacity: 0.4 }} aria-hidden="true" />
            <div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "var(--blush)", marginBottom: 2, letterSpacing: "0.08em" }}>{testimonials[current].name}</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,249,245,0.35)", letterSpacing: "0.18em", textTransform: "uppercase" }}>{testimonials[current].role}</p>
            </div>
            <div style={{ width: 32, height: 1, background: "var(--gold)", opacity: 0.4 }} aria-hidden="true" />
          </div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 48 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Testimonial ${i + 1}`}
                style={{
                  width: i === current ? 24 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === current ? "var(--gold)" : "rgba(214,181,108,0.25)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p style={{ textAlign: "center", marginTop: 48, fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,249,245,0.2)", fontStyle: "italic" }}>
          Sample testimonials — placeholder content for design purposes.
        </p>
      </div>
    </section>
  );
}
