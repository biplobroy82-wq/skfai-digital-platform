
"use client";

import { motion } from "framer-motion";

const testimonials = [
  // Existing organizations — retained
  {
    name: "Kolkata Metro",
    designation: "Government Infrastructure",
    review:
      "Video production and creative content services for organizational communication.",
  },
  {
    name: "Indian Oil Corporation (IOCL)",
    designation: "Corporate & Energy",
    review:
      "Corporate communication, branding and advertisement production.",
  },
  {
    name: "IIT Kharagpur",
    designation: "Educational Institution",
    review:
      "Filming, video editing and professional production services.",
  },
  {
    name: "DAV Model School",
    designation: "Education",
    review:
      "Educational promotional videos and event-related production.",
  },
  {
    name: "Medica Hospital",
    designation: "Healthcare",
    review:
      "Healthcare promotional content and professional video production.",
  },
  {
    name: "Shree Height Builders",
    designation: "Real Estate",
    review:
      "Real estate promotional videos and property marketing content.",
  },
  {
    name: "Herbal & Cosmetic Brands",
    designation: "Beauty & Wellness",
    review:
      "Product advertisements, promotional videos and brand communication.",
  },
  {
    name: "Mobile App & Tech Startups",
    designation: "Technology",
    review:
      "App promotion videos, product explainers and digital content.",
  },

  // New company and brand names
  {
    name: "Acadfinity",
    designation: "Education Technology",
    review:
      "Educational platform promotion and digital video content.",
  },
  {
    name: "Right Real Estate Jhabua",
    designation: "Real Estate",
    review:
      "Property promotion, real estate advertisements and marketing videos.",
  },
  {
    name: "Basant Home Stay",
    designation: "Hospitality & Tourism",
    review:
      "Hospitality promotion and property showcase video content.",
  },
  {
    name: "KinKeeper Mobile App",
    designation: "Mobile Application",
    review:
      "Mobile app promotional videos and digital product communication.",
  },
  {
    name: "Izra Herbs",
    designation: "Herbal Products",
    review:
      "Herbal product advertisements and brand promotion content.",
  },
  {
    name: "Natraj Bag",
    designation: "Bags & Accessories",
    review:
      "Product showcase videos and promotional advertising content.",
  },
  {
    name: "Vet Sunrise Animal Food Products",
    designation: "Animal Nutrition",
    review:
      "Animal food product promotion and commercial video content.",
  },
  {
    name: "Benefit Wellness",
    designation: "Health & Wellness",
    review:
      "Wellness product promotion and digital advertising content.",
  },
  {
    name: "Luminexa",
    designation: "Brand & Product Promotion",
    review:
      "Brand communication and product-focused video content.",
  },
  {
    name: "Maa Sarda Marble & Sanitation",
    designation: "Marble & Sanitaryware",
    review:
      "Product showcases and showroom promotional video content.",
  },
  {
    name: "Ashmika Hair Oil",
    designation: "Hair Care & Beauty",
    review:
      "Hair care product advertisements and brand promotion.",
  },
  {
    name: "Raylight",
    designation: "Brand & Product Promotion",
    review:
      "Commercial video content and product advertising.",
  },

  // Additional brands and projects discussed
  {
    name: "Vaanchata Stone Decor",
    designation: "Stone & Building Materials",
    review:
      "Laterite stone product promotion and brand showcase content.",
  },
  {
    name: "Sumit Imported Korean Night Suits",
    designation: "Fashion & Apparel",
    review:
      "Fashion product showcase and promotional video content.",
  },
  {
    name: "Fit & Glow Collagen Mix Coffee",
    designation: "Beauty & Wellness Products",
    review:
      "Product advertisements and promotional brand communication.",
  },
  {
    name: "Vrumi Vedic",
    designation: "Ayurvedic Products",
    review:
      "Ayurvedic product promotion and commercial advertising content.",
  },
  {
    name: "Kerala Stone Factory",
    designation: "Stone & Building Materials",
    review:
      "Stone product showcases and business promotional videos.",
  },
  {
    name: "Puja Lite",
    designation: "Lighting Products",
    review:
      "Product promotion and commercial advertising content.",
  },
  {
    name: "MF Industries Pvt. Ltd.",
    designation: "Manufacturing",
    review:
      "Product-focused promotional content for business communication.",
  },
  {
    name: "Baro Maa Multi-Speciality Hospital",
    designation: "Healthcare",
    review:
      "Healthcare communication and hospital promotional content.",
  },
  {
    name: "NoticesInfo.com",
    designation: "Digital Platform",
    review:
      "Digital platform awareness videos and promotional content.",
  },
  {
    name: "Kolkata Federation",
    designation: "Industry & Organization",
    review:
      "Video production and creative communication services.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full overflow-x-clip bg-black px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-block rounded-full border border-yellow-500 px-5 py-2 text-xs uppercase tracking-[3px] text-yellow-400 sm:text-sm">
            Our Clients & Brands
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-yellow-400 sm:text-4xl lg:text-5xl">
            Organizations We've Worked With
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            From corporate organizations and educational institutions
            to healthcare, real estate, manufacturing and consumer
            brands, Sri Krishna Films provides creative video
            production and advertising solutions.
          </p>
        </motion.div>

        {/* Company Cards */}
        <div className="mt-12 grid w-full grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
              whileHover={{ y: -5 }}
              className="min-w-0 rounded-2xl border border-yellow-500/30 bg-zinc-900 p-5 transition-colors duration-300 hover:border-yellow-400 sm:p-7"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-yellow-500/30 bg-black text-yellow-400">
                <span className="text-lg font-bold">
                  {client.name.charAt(0)}
                </span>
              </div>

              <h3 className="break-words text-xl font-bold leading-snug text-white sm:text-2xl">
                {client.name}
              </h3>

              <p className="mt-2 break-words text-sm font-medium text-yellow-400">
                {client.designation}
              </p>

              <p className="mt-4 break-words text-sm leading-7 text-gray-400 sm:text-base">
                {client.review}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:mt-20 sm:gap-6 lg:grid-cols-4">
          <div className="min-w-0 rounded-xl border border-yellow-500/30 bg-zinc-900 p-4 text-center sm:p-6">
            <h3 className="text-2xl font-bold text-yellow-400 sm:text-4xl">
              1000+
            </h3>
            <p className="mt-2 text-xs text-gray-400 sm:text-sm">
              Happy Clients
            </p>
          </div>

          <div className="min-w-0 rounded-xl border border-yellow-500/30 bg-zinc-900 p-4 text-center sm:p-6">
            <h3 className="text-2xl font-bold text-yellow-400 sm:text-4xl">
              5000+
            </h3>
            <p className="mt-2 text-xs text-gray-400 sm:text-sm">
              Video Advertisements
            </p>
          </div>

          <div className="min-w-0 rounded-xl border border-yellow-500/30 bg-zinc-900 p-4 text-center sm:p-6">
            <h3 className="text-2xl font-bold text-yellow-400 sm:text-4xl">
              27+
            </h3>
            <p className="mt-2 text-xs text-gray-400 sm:text-sm">
              Years Experience
            </p>
          </div>

          <div className="min-w-0 rounded-xl border border-yellow-500/30 bg-zinc-900 p-4 text-center sm:p-6">
            <h3 className="text-xl font-bold text-yellow-400 sm:text-3xl">
              Since 1999
            </h3>
            <p className="mt-2 text-xs text-gray-400 sm:text-sm">
              Creative Excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
