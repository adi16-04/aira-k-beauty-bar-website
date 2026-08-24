import { useEffect, useRef } from "react";

const CONTACT = {
  phone: "8660211087",
  website: "www.airakbeautybar.com",
  address: "No 1625, 1st Floor, 4th Block, Jayanagar East End Main Road, Bangalore - 560041",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=No+1625+1st+Floor+4th+Block+Jayanagar+East+End+Main+Road+Bangalore+560041",
  whatsapp: "https://wa.me/918660211087?text=Hello!%20I'd%20like%20to%20book%20an%20appointment%20at%20Aria%20k%20Beauty%20Bar.",
};

export default function Contact() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} style={{ background: "var(--warm-white)", padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p className="reveal" style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 500, color: "var(--gold)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>
            Find Us
          </p>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 600, color: "var(--soft-black)", lineHeight: 1.1, marginBottom: 16 }}
          >
            Visit <em style={{ fontStyle: "italic", color: "var(--muted-rose)" }}>Aira K</em>
          </h2>
          <div className="reveal reveal-delay-2" style={{ width: 48, height: 1, background: "var(--gold)", margin: "0 auto", opacity: 0.6 }} aria-hidden="true" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="contact-grid">
          {/* Info panel */}
          <div>
            <div className="reveal" style={{ marginBottom: 48 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "var(--soft-black)", marginBottom: 28, letterSpacing: "0.04em" }}>
                Aira K Beauty Bar
              </h3>
              <p style={{ fontFamily: "var(--font-script)", fontSize: 18, color: "var(--gold)", marginBottom: 32 }}>Unisex Salon</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {/* Phone */}
                <a
                  href="tel:8660211087"
                  style={{ display: "flex", alignItems: "flex-start", gap: 16, textDecoration: "none", group: true } as React.CSSProperties}
                >
                  <div style={{ width: 40, height: 40, background: "var(--black)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.72 6.72l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 500, color: "var(--muted-rose)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 }}>Phone</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 18, color: "var(--soft-black)", fontWeight: 500 }}>8660211087</p>
                  </div>
                </a>

                {/* Website */}
                <a
                  href={`https://${CONTACT.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "flex-start", gap: 16, textDecoration: "none" }}
                >
                  <div style={{ width: 40, height: 40, background: "var(--black)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 500, color: "var(--muted-rose)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 }}>Website</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--soft-black)", fontWeight: 300 }}>{CONTACT.website}</p>
                  </div>
                </a>

                {/* Address */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ width: 40, height: 40, background: "var(--black)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 500, color: "var(--muted-rose)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 }}>Address</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--soft-black)", fontWeight: 300, lineHeight: 1.75 }}>
                      No 1625, 1st Floor, 4th Block,<br />
                      Jayanagar East End Main Road,<br />
                      Bangalore - 560041
                    </p>
                    <a
                      href={CONTACT.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: 12,
                        fontFamily: "var(--font-body)",
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(214,181,108,0.4)",
                        paddingBottom: 2,
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.7")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Book CTA */}
            <div className="reveal reveal-delay-2" style={{ borderTop: "1px solid rgba(214,181,108,0.18)", paddingTop: 36 }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: "var(--soft-black)", marginBottom: 20 }}>Book Your Appointment</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="tel:8660211087"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--black)",
                    background: "linear-gradient(135deg, var(--gold), var(--light-gold))",
                    padding: "13px 28px",
                    textDecoration: "none",
                    display: "inline-block",
                    transition: "opacity 0.25s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
                >
                  Call to Book
                </a>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ivory)",
                    background: "var(--soft-black)",
                    padding: "13px 28px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "opacity 0.25s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.8")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Map embed area */}
          <div className="reveal reveal-delay-2">
            <div
              style={{
                position: "relative",
                height: 440,
                background: "var(--charcoal)",
                overflow: "hidden",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1758188753373-5b01a0fc6d9d?w=700&h=500&fit=crop&auto=format"
                alt="Aira K Beauty Bar salon ambiance"
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }}
              />
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
                <div style={{ width: 48, height: 48, background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--black)" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ivory)", textAlign: "center", lineHeight: 1.6, maxWidth: 280 }}>
                  No 1625, 1st Floor, 4th Block,<br />
                  Jayanagar East End Main Road,<br />
                  Bangalore - 560041
                </p>
                <a
                  href={CONTACT.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--black)",
                    background: "var(--gold)",
                    padding: "12px 28px",
                    textDecoration: "none",
                    marginTop: 8,
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
