// Centralized social config — replace URLs when available
const SOCIAL = {
  instagram: "#",
  facebook: "#",
  whatsapp: "https://wa.me/918660211087",
};

const NAV = ["Home", "About", "Services", "Gallery", "Contact"];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(`#${id.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "var(--black)", color: "var(--ivory)", borderTop: "1px solid rgba(214,181,108,0.15)" }}>
      {/* Main footer */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 32px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 64 }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "var(--gold)", letterSpacing: "0.12em", marginBottom: 4 }}>Aira K</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 9, fontWeight: 400, color: "var(--blush)", letterSpacing: "0.38em", textTransform: "uppercase" }}>Beauty Bar</p>
            </div>
            <p style={{ fontFamily: "var(--font-script)", fontSize: 18, color: "var(--gold)", marginBottom: 16 }}>Unisex Salon</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,249,245,0.35)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 24 }}>
              Beauty • Style • Confidence
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,249,245,0.45)", lineHeight: 1.8, fontWeight: 300, maxWidth: 340, marginBottom: 32 }}>
              A premium unisex salon in Jayanagar, Bangalore, offering professional beauty services in a refined, welcoming environment.
            </p>

            {/* Social */}
            <div style={{ display: "flex", gap: 12 }}>
              <SocialIcon href={SOCIAL.instagram} label="Instagram">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>
              <SocialIcon href={SOCIAL.facebook} label="Facebook">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </SocialIcon>
              <SocialIcon href={SOCIAL.whatsapp} label="WhatsApp">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 24 }}>Navigation</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {NAV.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      fontWeight: 300,
                      color: "rgba(255,249,245,0.5)",
                      padding: 0,
                      textAlign: "left",
                      transition: "color 0.2s",
                      letterSpacing: "0.04em",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,249,245,0.5)")}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 24 }}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(214,181,108,0.5)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 4 }}>Phone</p>
                <a href="tel:8660211087" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,249,245,0.65)", textDecoration: "none", fontWeight: 300, transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,249,245,0.65)")}
                >
                  8660211087
                </a>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(214,181,108,0.5)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 4 }}>Website</p>
                <a href="https://www.airakbeautybar.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,249,245,0.65)", textDecoration: "none", fontWeight: 300, transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,249,245,0.65)")}
                >
                  www.airakbeautybar.com
                </a>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(214,181,108,0.5)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 4 }}>Address</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,249,245,0.5)", fontWeight: 300, lineHeight: 1.75 }}>
                  No 1625, 1st Floor, 4th Block,<br />
                  Jayanagar East End Main Road,<br />
                  Bangalore - 560041
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(214,181,108,0.3), transparent)" }} aria-hidden="true" />
      </div>

      {/* Copyright */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,249,245,0.25)", fontWeight: 300, letterSpacing: "0.06em" }}>
          © 2026 Aira K Beauty Bar. All Rights Reserved.
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(255,249,245,0.18)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Beauty • Style • Confidence
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noopener noreferrer" : undefined}
      style={{
        width: 36,
        height: 36,
        border: "1px solid rgba(214,181,108,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(255,249,245,0.45)",
        textDecoration: "none",
        transition: "all 0.25s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
        (e.currentTarget as HTMLElement).style.color = "var(--gold)";
        (e.currentTarget as HTMLElement).style.background = "rgba(214,181,108,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(214,181,108,0.2)";
        (e.currentTarget as HTMLElement).style.color = "rgba(255,249,245,0.45)";
        (e.currentTarget as HTMLElement).style.background = "transparent";
      }}
    >
      {children}
    </a>
  );
}
