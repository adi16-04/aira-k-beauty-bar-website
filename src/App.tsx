import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FemaleServicesQr from "./components/FemaleServicesQr";
import WhyChooseUs from "./components/WhyChooseUs";
import Experience from "./components/Experience";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FemaleServicesMenu from "./components/FemaleServicesMenu";
import { useEffect, useState } from "react";

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (hash === "#female-services") {
    return (
      <FemaleServicesMenu
        audience="female"
        csvPath="/female-services.csv"
        hash="#female-services"
        eyebrow="Female Services Menu"
        description="Hair, skin, and nail services for women at Aira K Beauty Bar, Jayanagar."
        qrAlt="QR code for female services menu"
        downloadName="airak-female-services-qr.png"
      />
    );
  }

  if (hash === "#men-services") {
    return (
      <FemaleServicesMenu
        audience="men"
        csvPath="/men-services.csv"
        hash="#men-services"
        eyebrow="Men Services Menu"
        description="Hair, skin, and nail services for men at Aira K Beauty Bar, Jayanagar."
        qrAlt="QR code for men services menu"
        downloadName="airak-men-services-qr.png"
      />
    );
  }

  return (
    <>
      {/* SEO meta is wired in index.html; structured data below */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BeautySalon",
        "name": "Aira K Beauty Bar",
        "description": "Aira K Beauty Bar is a premium unisex salon in Jayanagar, Bangalore, offering professional hair, skin, makeup, nails and massage services.",
        "url": "https://www.airakbeautybar.com",
        "telephone": "+918660211087",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No 1625, 1st Floor, 4th Block, Jayanagar East End Main Road",
          "addressLocality": "Bangalore",
          "postalCode": "560041",
          "addressCountry": "IN"
        }
      }) }} />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FemaleServicesQr />
        <WhyChooseUs />
        <Experience />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
