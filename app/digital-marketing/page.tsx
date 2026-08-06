import { Metadata } from "next";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";
import ServiceSchema from "../components/seo/ServiceSchema";
import FAQSchema from "../components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Digital Marketing Agency India | Google Ads & Meta Ads",
  description:
    "Sri Krishna Films provides Digital Marketing, Google Ads, Facebook Ads, Instagram Ads, YouTube Marketing, SEO and Lead Generation services across India.",

  keywords: [
    "Digital Marketing Agency India",
    "Google Ads Agency",
    "Facebook Ads",
    "Instagram Ads",
    "Meta Ads",
    "SEO Services",
    "Lead Generation",
    "Website Marketing",
  ],

  alternates: {
    canonical: "https://www.skfai.online/digital-marketing",
  },
};

export default function DigitalMarketingPage() {
  const faqs = [
    {
      question: "What Digital Marketing services do you provide?",
      answer:
        "We provide Google Ads, Facebook Ads, Instagram Ads, YouTube Marketing, SEO, Lead Generation and complete Digital Marketing solutions.",
    },

    {
      question: "Do you work with businesses across India?",
      answer:
        "Yes. Sri Krishna Films provides Digital Marketing services for businesses across India.",
    },

    {
      question: "Can you generate business leads?",
      answer:
        "Yes. We specialize in Lead Generation campaigns using Google Ads, Meta Ads and Landing Pages.",
    },

    {
      question: "Do you manage social media advertising?",
      answer:
        "Yes. We create and manage Facebook, Instagram and YouTube advertising campaigns.",
    },

    {
      question: "Can you promote hospitals, manufacturers and real estate projects?",
      answer:
        "Yes. We work with hospitals, manufacturers, educational institutes, builders, herbal brands and many other industries.",
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
            name: "Digital Marketing",
            url: "https://www.skfai.online/digital-marketing",
          },
        ]}
      />

      <ServiceSchema
        name="Digital Marketing"
        description="Professional Digital Marketing services across India."
        url="https://www.skfai.online/digital-marketing"
      />

      <FAQSchema faqs={faqs} />

      <main className="max-w-6xl mx-auto px-6 py-20 text-white">

        <h1 className="text-5xl font-bold mb-8">
          Digital Marketing Agency in India
        </h1>

        <p className="text-xl text-gray-300 leading-9 mb-10">
          Sri Krishna Films & Advertisement Industry helps businesses increase
          sales, generate qualified leads and build strong online brands through
          result-driven Digital Marketing campaigns across India.
        </p>

        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Our Digital Marketing Services
        </h2>

        <ul className="space-y-4 text-lg text-gray-300 list-disc pl-6">
          <li>Google Ads Management</li>
          <li>Facebook Advertising</li>
          <li>Instagram Marketing</li>
          <li>YouTube Video Promotion</li>
          <li>SEO Services</li>
          <li>Lead Generation</li>
          <li>Landing Page Development</li>
          <li>Business Branding</li>
          <li>Performance Marketing</li>
        </ul>

        <div className="mt-12">

          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Why Choose Sri Krishna Films?
          </h2>

          <p className="text-lg text-gray-300 leading-9">
            Since 1999, Sri Krishna Films has helped businesses grow through
            creative advertising, professional video production and
            performance-based digital marketing strategies. Our goal is simple —
            generate more leads, increase sales and strengthen your brand.
          </p>

        </div>

        <div className="mt-14 rounded-xl border border-yellow-500 bg-zinc-900 p-8">

          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Grow Your Business Today
          </h2>

          <p className="text-lg text-gray-300 mb-6">
            Contact Sri Krishna Films for complete Digital Marketing,
            Google Ads and Lead Generation services across India.
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