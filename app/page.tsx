import Script from "next/script";

import Hero from "./components/Hero";
import UdyamRegistration from "./components/UdyamRegistration";
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
import Team from "./components/Team";
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
      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Udyam / MSME Registration */}
        <UdyamRegistration />

        {/* Trust / Recognition */}
        <Trust />

        {/* Services */}
        <Services />

        {/* Service Rate Card */}
        <ServiceRateCard />

        {/* About */}
        <About />

        {/* Why Choose Us */}
        <WhyChoose />

        {/* Portfolio */}
        <Portfolio />

        {/* Production Facilities */}
        <ProductionFacilities />

        {/* Mentor */}
        <BrandAmbassador />

        {/* Celebrity Booking */}
        <CelebrityBooking />

        {/* Testimonials */}
        <Testimonials />

        {/* Founder Message */}
        <FounderMessage />

        {/* Team */}
        <Team />

        {/* CTA */}
        <CTA />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp / Call Buttons */}
      <FloatingButtons />
    </>
  );
}
