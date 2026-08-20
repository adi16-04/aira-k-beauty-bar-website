import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Experience from "./components/Experience";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* SEO meta is wired in index.html; structured data below */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BeautySalon",
        "name": "AIRAK Beauty Bar",
        "description": "AIRAK Beauty Bar is a premium unisex salon in Jayanagar, Bangalore, offering professional hair, skin, makeup, nails and massage services.",
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
