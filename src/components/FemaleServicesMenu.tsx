import { useEffect, useMemo, useState } from "react";

type Service = {
  name: string;
  category: string;
  description: string;
  price: string;
  duration: string;
};

function parseCsvRow(row: string) {
  const values: string[] = [];
  let current = "";
  let quoted = false;

  for (let i = 0; i < row.length; i += 1) {
    const char = row[i];
    const next = row[i + 1];

    if (char === '"' && next === '"') {
      current += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      values.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  values.push(current.trim());
  return values;
}

function parseServicesCsv(csv: string): Service[] {
  return csv
    .trim()
    .split(/\r?\n/)
    .slice(1)
    .map(parseCsvRow)
    .filter((row) => row.length >= 5 && row[0])
    .map(([name, category, description, price, duration]) => ({
      name,
      category,
      description,
      price,
      duration,
    }));
}

function formatPrice(price: string) {
  if (!price) return "Ask at salon";
  return price
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => `Rs. ${part}`)
    .join(" / ");
}

type ServicesMenuProps = {
  audience: "female" | "men";
  csvPath: string;
  hash: string;
  eyebrow: string;
  description: string;
  qrAlt: string;
  downloadName: string;
};

export default function FemaleServicesMenu({
  audience,
  csvPath,
  hash,
  eyebrow,
  description,
  qrAlt,
  downloadName,
}: ServicesMenuProps) {
  const [services, setServices] = useState<Service[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [menuUrl, setMenuUrl] = useState(`https://www.airakbeautybar.com/${hash}`);

  useEffect(() => {
    setMenuUrl(`${window.location.origin}/${hash}`);
    fetch(csvPath)
      .then((response) => response.text())
      .then((csv) => setServices(parseServicesCsv(csv)))
      .catch(() => setServices([]));
  }, [csvPath, hash]);

  const categories = useMemo(() => ["All", ...Array.from(new Set(services.map((service) => service.category)))], [services]);
  const filteredServices = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return services.filter((service) => {
      const categoryMatch = activeCategory === "All" || service.category === activeCategory;
      const searchMatch = !normalizedQuery || service.name.toLowerCase().includes(normalizedQuery);
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, query, services]);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=640x640&margin=24&data=${encodeURIComponent(menuUrl)}`;

  return (
    <main style={{ minHeight: "100vh", background: "var(--ivory)", color: "var(--soft-black)" }}>
      <section style={{ background: "var(--black)", color: "var(--ivory)", padding: "36px 0 44px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 22px" }}>
          <a href="/#home" style={{ color: "var(--gold)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            AIRAK Beauty Bar
          </a>
          <div className="female-menu-hero">
            <div>
              <p style={{ marginTop: 34, marginBottom: 12, color: "var(--blush)", fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase" }}>
                {eyebrow}
              </p>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 6vw, 74px)", lineHeight: 1, margin: 0, fontWeight: 600 }}>
                Salon Menu
              </h1>
              <p style={{ maxWidth: 560, marginTop: 18, color: "rgba(255,249,245,0.62)", fontSize: 16, lineHeight: 1.75 }}>
                {description}
              </p>
            </div>
            <div className="female-qr-card">
              <img src={qrUrl} alt={qrAlt} style={{ width: 150, height: 150, display: "block" }} />
              <a href={qrUrl} download={downloadName} style={{ color: "var(--black)", background: "var(--gold)", padding: "10px 14px", textDecoration: "none", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center" }}>
                Download QR
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "28px 22px 72px" }}>
        <div className="female-menu-controls">
          <div className="female-category-tabs" role="tablist" aria-label="Service categories">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  border: activeCategory === category ? "1px solid var(--gold)" : "1px solid rgba(10,10,10,0.12)",
                  background: activeCategory === category ? "var(--black)" : "transparent",
                  color: activeCategory === category ? "var(--ivory)" : "var(--soft-black)",
                }}
              >
                {category}
              </button>
            ))}
          </div>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search services"
            aria-label="Search services"
            className="female-menu-search"
          />
        </div>

        <div className="female-services-list">
          {filteredServices.map((service) => (
            <article key={`${service.category}-${service.name}`} className="female-service-row">
              <div>
                <p>{service.category}</p>
                <h2>{service.name}</h2>
                {service.description && <span>{service.description}</span>}
              </div>
              <div>
                <strong>{formatPrice(service.price)}</strong>
                <span>{service.duration ? `${service.duration} min` : "Duration varies"}</span>
              </div>
            </article>
          ))}
        </div>
        {services.length === 0 && (
          <p style={{ color: "rgba(10,10,10,0.55)", fontSize: 15 }}>
            Loading {audience} services...
          </p>
        )}
      </section>
    </main>
  );
}
