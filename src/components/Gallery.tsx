import { useEffect, useRef, useState } from "react";

type GalleryImage = { src: string; alt: string; category: string; tall?: boolean };

const images: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1773904215697-e6c21fc27ac2?w=600&h=800&fit=crop&auto=format", alt: "Luxury barber chairs in salon", category: "Interior", tall: true },
  { src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=400&fit=crop&auto=format", alt: "Professional blow dry styling", category: "Hair" },
  { src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&h=400&fit=crop&auto=format", alt: "Pink manicure nail art", category: "Nails" },
  { src: "https://images.unsplash.com/photo-1648671095177-d00c1f6264e9?w=600&h=800&fit=crop&auto=format", alt: "Professional makeup application", category: "Makeup", tall: true },
  { src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop&auto=format", alt: "Hot stone massage therapy", category: "Beauty" },
  { src: "https://images.unsplash.com/photo-1629397685944-7073f5589754?w=600&h=400&fit=crop&auto=format", alt: "Hair curling styling service", category: "Hair" },
  { src: "https://images.unsplash.com/photo-1760862652442-e8ff7ebdd2f8?w=600&h=400&fit=crop&auto=format", alt: "Premium skincare products", category: "Skin" },
  { src: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?w=600&h=400&fit=crop&auto=format", alt: "Elegant black nail manicure", category: "Nails" },
  { src: "https://images.unsplash.com/photo-1734111719430-fe4a3973f8af?w=600&h=600&fit=crop&auto=format", alt: "Round brush hair styling", category: "Hair" },
  { src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=400&fit=crop&auto=format", alt: "Relaxing massage with white flowers", category: "Beauty" },
  { src: "https://images.unsplash.com/photo-1758188753373-5b01a0fc6d9d?w=600&h=400&fit=crop&auto=format", alt: "Elegant skincare bottle collection", category: "Skin" },
];

const categories = ["All", "Hair", "Skin", "Makeup", "Nails", "Beauty", "Interior"];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("revealed"), i * 80);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeFilter === "All" ? images : images.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" ref={sectionRef} style={{ background: "var(--soft-black)", padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="reveal" style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 500, color: "var(--gold)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16 }}>
            Our Work
          </p>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 600, color: "var(--ivory)", lineHeight: 1.1, marginBottom: 16 }}
          >
            Gallery
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,249,245,0.4)", fontWeight: 300, maxWidth: 400, margin: "0 auto 32px" }}>
            A glimpse into the AIRAK experience.
          </p>

          {/* Filter tabs */}
          <div className="reveal reveal-delay-3" style={{ display: "flex", justifyContent: "center", gap: 4, flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: activeFilter === cat ? "var(--black)" : "rgba(255,249,245,0.45)",
                  background: activeFilter === cat ? "var(--gold)" : "transparent",
                  border: "1px solid",
                  borderColor: activeFilter === cat ? "var(--gold)" : "rgba(255,249,245,0.12)",
                  padding: "8px 18px",
                  cursor: "pointer",
                  transition: "all 0.22s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <div
          style={{
            columns: "3 280px",
            columnGap: 6,
          }}
        >
          {filtered.map((img, i) => (
            <div
              key={img.src + activeFilter}
              className="reveal"
              style={{
                breakInside: "avoid",
                marginBottom: 6,
                overflow: "hidden",
                position: "relative",
                background: "var(--charcoal)",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{
                  width: "100%",
                  height: img.tall ? 420 : 280,
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                  opacity: 0.9,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.transform = "scale(1.04)";
                  (e.target as HTMLElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.transform = "none";
                  (e.target as HTMLElement).style.opacity = "0.9";
                }}
              />
              {/* Category tag */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "32px 16px 12px",
                  background: "linear-gradient(to top, rgba(10,10,10,0.75), transparent)",
                  opacity: 0,
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
              >
                <span style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
                  {img.category}
                </span>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "32px 16px 12px",
                  background: "linear-gradient(to top, rgba(10,10,10,0.75), transparent)",
                  transition: "opacity 0.3s",
                }}
                aria-hidden="true"
              >
                <span style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
