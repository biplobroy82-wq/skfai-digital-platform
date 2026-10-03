import { Metadata } from "next";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";
import ServiceSchema from "../components/seo/ServiceSchema";
import FAQSchema from "../components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Website Development Company India | Business Website Design",

  description:
    "Sri Krishna Films develops premium business websites, portfolio websites, corporate websites, landing pages and SEO-friendly websites across India.",

  keywords: [
    "Website Development India",
    "Business Website",
    "Website Design",
    "Corporate Website",
    "Landing Page",
    "Next.js Website",
    "SEO Website",
    "Website Company India",
  ],

  alternates: {
    canonical: "https://www.skfai.online/website-development",
  },
};

export default function WebsiteDevelopmentPage() {
  const faqs = [
    {
      question: "Do you develop business websites?",
      answer:
        "Yes. We build business websites, corporate websites, portfolio websites and landing pages.",
    },
    {
      question: "Is every website mobile responsive?",
      answer:
        "Yes. Every website is fully responsive and optimized for desktop, tablet and mobile devices.",
    },
    {
      question: "Do you provide SEO-friendly websites?",
      answer:
        "Yes. Our websites are built with modern SEO best practices to improve search engine visibility.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Yes. We redesign old websites with a modern UI, better speed and improved SEO.",
    },
    {
      question: "Do you provide website maintenance?",
      answer:
        "Yes. We provide website updates, maintenance and technical support after launch.",
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
            name: "Website Development",
            url: "https://www.skfai.online/website-development",
          },
        ]}
      />

      <ServiceSchema
        name="Website Development"
        description="Professional Website Development Services Across India."
        url="https://www.skfai.online/website-development"
      />

      <FAQSchema faqs={faqs} />

      <main className="max-w-6xl mx-auto px-6 py-20 text-white">

        <h1 className="text-5xl font-bold mb-8">
          Professional Website Development Company
        </h1>

        <p className="text-xl text-gray-300 leading-9 mb-10">
          Sri Krishna Films creates premium business websites that are fast,
          responsive, SEO-friendly and designed to generate more customer enquiries.
        </p>

        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Our Website Services
        </h2>

        <ul className="space-y-4 text-lg text-gray-300 list-disc pl-6">
          <li>Corporate Website Development</li>
          <li>Business Website Design</li>
          <li>Portfolio Website</li>
          <li>Landing Page Design</li>
          <li>Next.js Development</li>
          <li>SEO Optimization</li>
          <li>Website Maintenance</li>
          <li>Website Redesign</li>
        </ul>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Why Sri Krishna Films?
          </h2>

          <p className="text-lg text-gray-300 leading-9">
            We build websites focused on branding, speed, SEO and lead generation,
            helping businesses across India establish a strong digital presence.
          </p>
        </div>

        <div className="mt-14 rounded-xl border border-yellow-500 bg-zinc-900 p-8">

          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Build Your Business Website Today
          </h2>

          <p className="text-lg text-gray-300 mb-6">
            Contact Sri Krishna Films for premium website development services.
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