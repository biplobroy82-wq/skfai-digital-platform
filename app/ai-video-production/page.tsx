import { Metadata } from "next";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";
import ServiceSchema from "../components/seo/ServiceSchema";
import FAQSchema from "../components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "AI Video Production Company India | AI Advertisement Agency",

  description:
    "Sri Krishna Films creates AI Video Ads, AI Product Commercials, AI Brand Promotions, AI Reels and AI Marketing Videos for businesses across India.",

  keywords: [
    "AI Video Production",
    "AI Advertisement",
    "AI Commercial",
    "AI Video Ads",
    "AI Marketing Videos",
    "AI Product Video",
    "AI Video Company India",
  ],

  alternates: {
    canonical:
      "https://www.skfai.online/ai-video-production",
  },
};

export default function AIProductionPage() {
  const faqs = [
    {
      question: "What is AI Video Production?",
      answer:
        "AI Video Production uses Artificial Intelligence to create high-quality promotional, commercial and marketing videos faster and more cost-effectively.",
    },

    {
      question:
        "Does Sri Krishna Films create AI advertisements?",
      answer:
        "Yes. We create premium AI Advertisement Videos, AI Product Promotions, AI Commercials and AI Marketing Videos for businesses across India.",
    },

    {
      question:
        "Which industries can use AI videos?",
      answer:
        "Hospitals, Manufacturers, Real Estate, Educational Institutes, Herbal Products, Startups, Hotels, Restaurants and Corporate Companies can use AI videos for marketing.",
    },

    {
      question:
        "Can AI videos be used for Facebook and Instagram Ads?",
      answer:
        "Yes. Our AI videos are optimized for Facebook, Instagram, YouTube, Google Ads and other digital platforms.",
    },

    {
      question:
        "Do you provide AI videos in multiple languages?",
      answer:
        "Yes. We create AI videos in Hindi, English, Bengali and regional languages according to project requirements.",
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
            name: "AI Video Production",
            url: "https://www.skfai.online/ai-video-production",
          },
        ]}
      />

      <ServiceSchema
        name="AI Video Production"
        description="Professional AI Video Production services across India."
        url="https://www.skfai.online/ai-video-production"
      />

      <FAQSchema faqs={faqs} />

      <main className="max-w-6xl mx-auto px-6 py-20 text-white">

        <h1 className="text-5xl font-bold mb-8">
          AI Video Production Company in India
        </h1>

        <p className="text-xl text-gray-300 leading-9 mb-10">
          Sri Krishna Films & Advertisement Industry provides premium AI Video
          Production services for manufacturers, hospitals, educational
          institutions, builders, startups and corporate companies across India.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-yellow-400">
          Our AI Video Services
        </h2>

        <ul className="space-y-4 text-lg text-gray-300 list-disc pl-6">
          <li>AI Product Advertisement</li>
          <li>AI Commercial Videos</li>
          <li>AI Brand Promotion</li>
          <li>AI Social Media Reels</li>
          <li>AI Corporate Videos</li>
          <li>AI Explainer Videos</li>
          <li>AI Real Estate Advertisement</li>
          <li>AI Healthcare Promotion</li>
        </ul>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">
            Why Choose Sri Krishna Films?
          </h2>

          <p className="text-lg text-gray-300 leading-9">
            Since 1999, Sri Krishna Films has combined professional filmmaking
            with modern Artificial Intelligence technology to create premium,
            affordable and high-converting AI promotional videos for businesses
            across India.
          </p>
        </div>

        <div className="mt-14 rounded-xl border border-yellow-500 p-8 bg-zinc-900">

          <h2 className="text-3xl font-bold mb-4 text-yellow-400">
            Need an AI Advertisement?
          </h2>

          <p className="text-lg text-gray-300 mb-6">
            Contact Sri Krishna Films today for professional AI Video Production
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