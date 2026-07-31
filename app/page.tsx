import Script from "next/script";

import Hero from "./components/Hero";
import Trust from "./components/trust/Trust";
import Clients from "./components/Clients";
import Services from "./components/Services";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Recognition from "./components/Recognition";
import Portfolio from "./components/Portfolio";
import ProductionFacilities from "./components/ProductionFacilities";
import BrandAmbassador from "./components/BrandAmbassador";
import Testimonials from "./components/Testimonials";
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
        <Hero />

        <Trust />

        <Clients />

        <Services />

        <About />

        <WhyChoose />

        <Recognition />

        <Portfolio />

        <ProductionFacilities />

        <BrandAmbassador />

        <Testimonials />

        <CTA />

        <Contact />
      </main>

      <Footer />
export default function Home() {
  return (
    <div className="h-screen">
      <video
        autoPlay
        muted
        loop
        controls
        className="w-full h-full object-cover"
      >
        <source src="/skfai-showreel.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
      <FloatingButtons />
    </>
  );
}
export default function Home() {
  return (
    <video
      autoPlay
      muted
      loop
      controls
      className="w-screen h-screen"
    >
      <source src="/skfai-showreel.mp4" type="video/mp4" />
    </video>
  );
}
