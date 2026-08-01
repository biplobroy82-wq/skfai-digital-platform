import { Metadata } from "next";
import BreadcrumbSchema from "../components/seo/BreadcrumbSchema";
import ServiceSchema from "../components/seo/ServiceSchema";
import FAQSchema from "../components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Corporate Film Production Company India",

  description:
    "Sri Krishna Films produces Corporate Films, Company Profile Videos, Industrial Films, Documentary Films and Brand Films across India.",

  keywords: [
    "Corporate Film Production",
    "Corporate Video Production",
    "Company Profile Video",
    "Industrial Film",
    "Documentary Production",
    "Business Film",
    "Corporate Filmmaker India",
  ],

  alternates: {
    canonical: "https://www.skfai.online/corporate-film-production",
  },
};

export default function CorporateFilmPage() {
  const faqs = [
    {
      question: "What is a Corporate Film?",
      answer:
        "A Corporate Film professionally presents a company's profile, products, manufacturing process, services and brand story.",
    },
    {
      question: "Do you produce Corporate Films across India?",
      answer:
        "Yes. Sri Krishna Films provides Corporate Film Production services throughout India.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We produce films for manufacturers, hospitals, educational institutes, government organizations, exporters and corporate businesses.",
    },
    {
      question: "Can you shoot inside factories and offices?",
      answer:
        "Yes. We provide complete on-location production with professional cameras, lighting and audio equipment.",
    },
    {
      question: "Do you provide script writing and voice-over?",
      answer:
        "Yes. We provide concept development, script writing, professional voice-over and complete post-production.",
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
            name: "Corporate Film Production",
            url: "https://www.skfai.online/corporate-film-production",
          },
        ]}
      />

      <ServiceSchema
        name="Corporate Film Production"
        description="Professional Corporate Film Production Services Across India."
        url="https://www.skfai.online/corporate-film-production"
      />

      <FAQSchema faqs={faqs} />

      <main className="max-w-6xl mx-auto px-6 py-20 text-white">

        <h1 className="text-5xl font-bold mb-8">
          Corporate Film Production Company
        </h1>

        <p className="text-xl text-gray-300 leading-9 mb-10">
          Sri Krishna Films creates premium Corporate Films, Company Profile
          Videos, Industrial Films and Documentary Films that build trust,
          strengthen brand identity and support business growth across India.
        </p>

        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Our Corporate Film Services
        </h2>

        <ul className="space-y-4 text-lg text-gray-300 list-disc pl-6">
          <li>Corporate Profile Films</li>
          <li>Industrial Films</li>
          <li>Manufacturing Process Videos</li>
          <li>Factory Documentary</li>
          <li>Company Introduction Films</li>
          <li>CSR Films</li>
          <li>Training Videos</li>
          <li>Brand Story Videos</li>
        </ul>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Why Choose Sri Krishna Films?
          </h2>

          <p className="text-lg text-gray-300 leading-9">
            Since 1999, Sri Krishna Films has been producing high-quality
            corporate films with cinematic storytelling, professional production
            and modern editing techniques for businesses throughout India.
          </p>
        </div>

        <div className="mt-14 rounded-xl border border-yellow-500 bg-zinc-900 p-8">

          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Tell Your Company's Story
          </h2>

          <p className="text-lg text-gray-300 mb-6">
            Contact Sri Krishna Films for professional Corporate Film Production
            anywhere in India.
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