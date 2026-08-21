import { useEffect, useState } from "react";

type QrItem = {
  label: string;
  hash: string;
  description: string;
  downloadName: string;
};

const QR_ITEMS: QrItem[] = [
  {
    label: "Female",
    hash: "#female-services",
    description: "Hair, skin, and nail services for women.",
    downloadName: "airak-female-services-qr.png",
  },
  {
    label: "Men",
    hash: "#men-services",
    description: "Hair, skin, and nail services for men.",
    downloadName: "airak-men-services-qr.png",
  },
];

export default function FemaleServicesQr() {
  const [origin, setOrigin] = useState("https://www.airakbeautybar.com");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  return (
    <section id="service-qr" style={{ background: "var(--ivory)", padding: "72px 0" }}>
      <div className="female-qr-section">
        <div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600, color: "var(--muted-rose)", letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 14 }}>
            Service Menu QR
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 600, color: "var(--soft-black)", lineHeight: 1.05, marginBottom: 16 }}>
            Scan the right menu
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "rgba(10,10,10,0.58)", maxWidth: 540, marginBottom: 28 }}>
            Keep the women&apos;s and men&apos;s service menus separate with dedicated QR codes for each menu.
          </p>
        </div>

        <div className="service-qr-grid">
          {QR_ITEMS.map((item) => {
            const menuUrl = `${origin}/${item.hash}`;
            const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=640x640&margin=24&data=${encodeURIComponent(menuUrl)}`;

            return (
              <article key={item.hash} className="female-qr-print-card">
                <h3>{item.label}</h3>
                <img src={qrUrl} alt={`QR code for AIRAK Beauty Bar ${item.label.toLowerCase()} services menu`} />
                <p>{item.description}</p>
                <p>{menuUrl}</p>
                <div className="service-qr-actions">
                  <a href={item.hash}>View</a>
                  <a href={qrUrl} download={item.downloadName}>Download</a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
