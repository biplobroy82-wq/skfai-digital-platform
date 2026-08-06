import { Metadata } from "next";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";
import ServiceSchema from "../components/seo/ServiceSchema";
import FAQSchema from "../components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Business Lead Generation Company India | B2B & B2C Leads",

  description:
    "Sri Krishna Films provides high-quality Business Lead Generation services using Google Ads, Meta Ads, Landing Pages and AI Marketing across India.",

  keywords: [
    "Lead Generation India",
    "Business Leads",
    "Google Ads Leads",
    "Facebook Lead Ads",
    "B2B Leads",
    "B2C Leads",
    "Sales Leads",
    "Lead Generation Company",
  ],

  alternates: {
    canonical: "https://www.skfai.online/lead-generation",
  },
};

export default function LeadGenerationPage() {
  const faqs = [
    {
      question: "What is Lead Generation?",
      answer:
        "Lead Generation is the process of attracting potential customers who are interested in your products or services.",
    },
    {
      question: "Do you generate leads across India?",
      answer:
        "Yes. We generate business leads for companies throughout India using Google Ads, Meta Ads and landing pages.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We work with hospitals, manufacturers, educational institutes, builders, real estate companies, herbal brands, startups and corporate businesses.",
    },
    {
      question: "Do you provide Google Ads Lead Generation?",
      answer:
        "Yes. We manage Google Ads campaigns focused on generating qualified enquiries and conversions.",
    },
    {
      question: "Can you create landing pages for lead generation?",
      answer:
        "Yes. We design SEO-friendly and conversion-focused landing pages to improve lead quality.",
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
            name: "Lead Generation",
            url: "https://www.skfai.online/lead-generation",
          },
        ]}
      />

      <ServiceSchema
        name="Lead Generation"
        description="Business Lead Generation Services Across India."
        url="https://www.skfai.online/lead-generation"
      />

      <FAQSchema faqs={faqs} />

      <main className="max-w-6xl mx-auto px-6 py-20 text-white">

        <h1 className="text-5xl font-bold mb-8">
          Business Lead Generation Services
        </h1>

        <p className="text-xl text-gray-300 leading-9 mb-10">
          Sri Krishna Films helps businesses generate qualified customer
          enquiries using Google Ads, Meta Ads, Landing Pages and AI-powered
          marketing strategies across India.
        </p>

        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Our Lead Generation Solutions
        </h2>

        <ul className="space-y-4 text-lg text-gray-300 list-disc pl-6">
          <li>Google Ads Lead Generation</li>
          <li>Facebook Lead Ads</li>
          <li>Instagram Lead Campaigns</li>
          <li>Landing Page Development</li>
          <li>WhatsApp Lead Funnels</li>
          <li>B2B Lead Generation</li>
          <li>B2C Lead Generation</li>
          <li>Corporate Lead Generation</li>
          <li>Performance Marketing</li>
        </ul>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Why Choose Sri Krishna Films?
          </h2>

          <p className="text-lg text-gray-300 leading-9">
            We create complete lead generation systems that combine
            high-converting advertisements, landing pages and marketing
            automation to help businesses receive more qualified enquiries and
            increase sales.
          </p>
        </div>

        <div className="mt-14 rounded-xl border border-yellow-500 bg-zinc-900 p-8">

          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Generate More Business Leads
          </h2>

          <p className="text-lg text-gray-300 mb-6">
            Contact Sri Krishna Films today and start generating qualified
            business enquiries from across India.
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