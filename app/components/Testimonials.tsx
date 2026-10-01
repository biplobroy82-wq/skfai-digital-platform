
"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Acadfinity",
    designation: "Education & Learning",
    review:
      "Educational promotional videos, digital advertisements and brand promotion.",
  },
  {
    name: "Right Real Estate, Jhabua",
    designation: "Real Estate",
    review:
      "Real estate promotional videos, property advertisements and marketing campaigns.",
  },
  {
    name: "Basant Home Stay",
    designation: "Hospitality & Tourism",
    review:
      "Hospitality promotions, property showcase videos and digital advertising.",
  },
  {
    name: "KinKeeper Mobile App",
    designation: "Mobile App & Technology",
    review:
      "Mobile app promotional videos, product demonstrations and digital campaigns.",
  },
  {
    name: "Izra Herbs",
    designation: "Herbal & Wellness",
    review:
      "Herbal product advertisements, product showcases and brand promotion.",
  },
  {
    name: "Natraj Bag",
    designation: "Bags & Accessories",
    review:
      "Product showcase videos, promotional advertisements and brand creatives.",
  },
  {
    name: "Vet Sunrise Animal Food Products",
    designation: "Animal Nutrition",
    review:
      "Animal food product promotions, product advertising and marketing videos.",
  },
  {
    name: "Benefit Wellness",
    designation: "Health & Wellness",
    review:
      "Wellness product promotions, digital advertisements and brand communication.",
  },
  {
    name: "Luminexa",
    designation: "Brand & Product Promotion",
    review:
      "Creative video advertisements, product presentations and promotional content.",
  },
  {
    name: "Maa Sarda Marble & Sanitation",
    designation: "Marble & Sanitary Products",
    review:
      "Product showcase videos, showroom promotions and business advertisements.",
  },
  {
    name: "Ashmika Hair Oil",
    designation: "Hair Care & Personal Care",
    review:
      "Hair care product advertisements, product demonstrations and brand promotion.",
  },
  {
    name: "Raylight",
    designation: "Brand & Product Promotion",
    review:
      "Commercial video production, product promotions and digital advertising.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-yellow-500 px-5 py-2 text-xs uppercase tracking-[3px] text-yellow-400 sm:text-sm">
            Our Clients
          </span>

          <h2 className="mt-6 break-words text-3xl font-bold leading-tight text-yellow-400 sm:text-4xl lg:text-5xl">
            Brands We've Worked With
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            From real estate and education to herbal products,
            mobile apps, wellness, hospitality and manufacturing,
            Sri Krishna Films provides creative video advertising
            and promotional solutions for businesses.
          </p>
        </motion.div>

        {/* Client / Brand Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8 lg:mt-20 lg:grid-cols-3">

          {testimonials.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 6) * 0.05 }}
              whileHover={{ y: -6 }}
              className="flex min-w-0 flex-col rounded-2xl border border-yellow-500/30 bg-zinc-900 p-6 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(255,215,0,0.10)] sm:p-8"
            >
              <div
                className="mb-4 text-xl tracking-wider text-yellow-400"
                aria-label="Featured brand"
              >
                ★★★★★
              </div>

              <h3 className="break-words text-xl font-bold leading-snug text-white sm:text-2xl">
                {client.name}
              </h3>

              <p className="mt-2 break-words text-sm text-yellow-400">
                {client.designation}
              </p>

              <p className="mt-5 break-words text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                {client.review}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Bottom Stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:mt-20 lg:grid-cols-4">

          <div className="rounded-xl border border-yellow-500/30 bg-zinc-900 p-4 text-center sm:p-6">
            <h3 className="text-2xl font-bold text-yellow-400 sm:text-4xl">
              1000+
            </h3>
            <p className="mt-2 text-xs text-gray-400 sm:text-base">
              Happy Clients
            </p>
          </div>

          <div className="rounded-xl border border-yellow-500/30 bg-zinc-900 p-4 text-center sm:p-6">
            <h3 className="text-2xl font-bold text-yellow-400 sm:text-4xl">
              5000+
            </h3>
            <p className="mt-2 text-xs text-gray-400 sm:text-base">
              Projects Delivered
            </p>
          </div>

          <div className="rounded-xl border border-yellow-500/30 bg-zinc-900 p-4 text-center sm:p-6">
            <h3 className="text-2xl font-bold text-yellow-400 sm:text-4xl">
              27+
            </h3>
            <p className="mt-2 text-xs text-gray-400 sm:text-base">
              Years Experience
            </p>
          </div>

          <div className="rounded-xl border border-yellow-500/30 bg-zinc-900 p-4 text-center sm:p-6">
            <h3 className="text-xl font-bold text-yellow-400 sm:text-3xl">
              Since 1999
            </h3>
            <p className="mt-2 text-xs text-gray-400 sm:text-base">
              Creative Excellence
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
