import { Metadata } from "next";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";
import ServiceSchema from "../components/seo/ServiceSchema";
import FAQSchema from "../components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "TV Commercial Production Company India",
  description:
    "Professional TV Commercial Production Company in India. Creative TV Ads, Product Commercials, Brand Advertisement and Television Campaigns.",
  keywords: [
    "TV Commercial Production",
    "TV Advertisement",
    "Commercial Film Production",
    "Advertising Agency India",
    "Product Commercial",
    "Video Advertisement",
  ],

  alternates: {
    canonical:
      "https://www.skfai.online/tv-commercial-production",
  },
};

export default function TVCommercialPage() {
  const faqs = [
    {
      question: "What is a TV Commercial?",
      answer:
        "A TV Commercial is a professionally produced advertisement created to promote products, services or brands through television and digital platforms.",
    },

    {
      question:
        "Does Sri Krishna Films provide TV Commercial production across India?",
      answer:
        "Yes. Sri Krishna Films provides professional TV Commercial production services for businesses, manufacturers, hospitals, builders, educational institutions and startups across India.",
    },

    {
      question:
        "How long does it take to produce a TV Commercial?",
      answer:
        "Production time depends on script, shooting schedule and editing requirements. Most projects are completed within a few days.",
    },

    {
      question:
        "Do you provide actors, models and voice-over artists?",
      answer:
        "Yes. We provide professional actors, models, voice artists and complete production support according to project requirements.",
    },

    {
      question:
        "Can you produce commercials in multiple languages?",
      answer:
        "Yes. We produce TV Commercials in Hindi, Bengali, English and other regional languages as required.",
    },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.skfai.online",
          },
          {
            name: "TV Commercial Production",
            url: "https://www.skfai.online/tv-commercial-production",
          },
        ]}
      />

      <ServiceSchema
        name="TV Commercial Production"
        description="Professional TV Commercial Production services for businesses across India."
        url="https://www.skfai.online/tv-commercial-production"
      />

      <FAQSchema faqs={faqs} />

      <main className="max-w-6xl mx-auto px-6 py-20 text-white">
        <h1 className="text-5xl font-bold mb-8">
          TV Commercial Production Company
        </h1>

        <p className="text-xl text-gray-300 leading-9 mb-10">
          Sri Krishna Films & Advertisement Industry creates premium television
          commercials for manufacturers, hospitals, builders, educational
          institutes, startups and corporate companies across India.
        </p>

        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Our TV Commercial Services
        </h2>

        <ul className="space-y-4 text-lg text-gray-300 list-disc pl-6">
          <li>Product Advertisement</li>
          <li>Television Commercial Production</li>
          <li>Corporate TV Ads</li>
          <li>Real Estate TV Commercials</li>
          <li>Healthcare Advertisement</li>
          <li>Educational Institute Promotions</li>
          <li>Brand Launch Campaigns</li>
          <li>Government Awareness Films</li>
        </ul>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Why Choose Sri Krishna Films?
          </h2>

          <p className="text-lg text-gray-300 leading-9">
            Since 1999, Sri Krishna Films has produced advertising films,
            corporate videos and television commercials for businesses across
            India. Our creative team combines cinematic storytelling,
            professional production and marketing strategy to create commercials
            that strengthen brand value and improve customer engagement.
          </p>
        </div>

        <div className="mt-14 rounded-xl border border-yellow-500 bg-zinc-900 p-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Let's Produce Your Next TV Commercial
          </h2>

          <p className="text-lg text-gray-300 mb-6">
            Contact Sri Krishna Films for professional TV Commercial Production
            services anywhere in India.
          </p>

          <div className="space-y-2 text-lg">
            <p>📞 +91 6204731481</p>
            <p>📧 info.skfai@gmail.com</p>
            <p>🌐 https://www.skfai.online</p>
          </div>
        </div>
      </main>
    </>
  );
}