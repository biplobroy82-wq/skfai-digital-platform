
import Script from "next/script";
import Hero from "./components/Hero";
import Trust from "./components/trust/Trust";
import Services from "./components/Services";
import ServiceRateCard from "./components/ServiceRateCard";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Portfolio from "./components/Portfolio";
import ProductionFacilities from "./components/ProductionFacilities";
import BrandAmbassador from "./components/BrandAmbassador";
import CelebrityBooking from "./components/CelebrityBooking";
import Testimonials from "./components/Testimonials";
import FounderMessage from "./components/FounderMessage";
import Recognition from "./components/Recognition";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sri Krishna Films & Advertisement Industry",
    alternateName: "Sri Krishna Films",
    url: "https://www.skfai.online",
    logo: "https://www.skfai.online/logo.png",
    image: "https://www.skfai.online/og-image.jpg",
    description:
      "Sri Krishna Films & Advertisement Industry is a professional video production company in Kolkata offering TV commercials, corporate films, AI video production, product shoots, digital marketing, website development and lead generation services across India.",
    email: "info@skfai.online",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    areaServed: "India",
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.youtube.com/",
      "https://www.linkedin.com/",
    ],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <main>
        <div id="home" className="scroll-mt-24">
          <Hero />
        </div>

        <Trust />

        <div id="services" className="scroll-mt-24">
          <Services />
        </div>

        <div id="rate-card" className="scroll-mt-24">
          <ServiceRateCard />
        </div>

        <div id="about" className="scroll-mt-24">
          <About />
        </div>

        <div id="why-choose-us" className="scroll-mt-24">
          <WhyChoose />
        </div>

        <div id="portfolio" className="scroll-mt-24">
          <Portfolio />
        </div>

        <div id="production-facilities" className="scroll-mt-24">
          <ProductionFacilities />
        </div>

        <div id="brand-ambassador" className="scroll-mt-24">
          <BrandAmbassador />
        </div>

        <div id="celebrity-booking" className="scroll-mt-24">
          <CelebrityBooking />
        </div>

        <div id="testimonials" className="scroll-mt-24">
          <Testimonials />
        </div>

        <div id="founder-message" className="scroll-mt-24">
          <FounderMessage />
        </div>

        <div id="recognition" className="scroll-mt-24">
          <Recognition />
        </div>

        <CTA />

        <div id="contact" className="scroll-mt-24">
          <Contact />
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
