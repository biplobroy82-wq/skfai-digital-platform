import Hero from "./components/Hero";
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
  return (
    <>
      <Hero />

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

      <Footer />

      <FloatingButtons />
    </>
  );
}