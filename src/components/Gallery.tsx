import { useEffect, useRef, useState } from "react";

type GalleryImage = { src: string; alt: string; category: string; tall?: boolean };

const images: GalleryImage[] = [
  { src: "/salon-images/IMG-20260821-WA0002.jpg", alt: "Aira K Beauty Bar gold salon sign", category: "Interior" },
  { src: "/salon-images/1000225018.jpg", alt: "Aira K skincare treatment room with salon equipment", category: "Skin", tall: true },
  { src: "/salon-images/1000225024.jpg", alt: "Aira K facial treatment bed and beauty room", category: "Beauty", tall: true },
  { src: "/salon-images/1000225069.jpg", alt: "Professional makeup products displayed at Aira K Beauty Bar", category: "Makeup" },
  { src: "/salon-images/1000225036.jpg", alt: "Aira K skincare machines and salon trolley", category: "Skin", tall: true },
  { src: "/salon-images/1000225063.jpg", alt: "Aira K hair styling stations with mirrors and salon chairs", category: "Hair", tall: true },
  { src: "/salon-images/1000225098.jpg", alt: "Aira K beauty treatment room with facial bed", category: "Beauty", tall: true },
  { src: "/salon-images/1000225096.jpg", alt: "Aira K spa capsule and treatment room", category: "Beauty", tall: true },
  { src: "/salon-images/1000225097.jpg", alt: "Aira K salon interior with styling chairs and mirrors", category: "Hair", tall: true },
  { src: "/salon-images/1000225102.jpg", alt: "Aira K salon styling area with chandelier", category: "Interior", tall: true },
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
            A glimpse into the Aira K experience.
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
