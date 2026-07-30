"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Kolkata Metro",
    designation: "Government Infrastructure",
    review:
      "Professional video production and creative execution with timely project delivery.",
  },
  {
    name: "Indian Oil Corporation (IOCL)",
    designation: "Corporate Client",
    review:
      "Outstanding corporate branding and advertisement production with premium quality.",
  },
  {
    name: "IIT Kharagpur",
    designation: "Educational Institution",
    review:
      "Professional filming, editing and production quality that met our expectations.",
  },
  {
    name: "DAV Model School",
    designation: "Educational Institution",
    review:
      "Excellent event coverage and educational promotional videos delivered on time.",
  },
  {
    name: "Medica Hospital",
    designation: "Healthcare Client",
    review:
      "Professional healthcare promotional videos with excellent production standards.",
  },
  {
    name: "Shyam Steel",
    designation: "Industrial Client",
    review:
      "Creative corporate films and branding videos with premium cinematic quality.",
  },
  {
    name: "Shree Height Builders",
    designation: "Real Estate Developer",
    review:
      "Professional real estate promotional videos that enhanced our marketing campaign.",
  },
  {
    name: "Herbal & Cosmetic Brands",
    designation: "Beauty & Wellness",
    review:
      "Creative product advertisements, influencer campaigns and promotional videos.",
  },
  {
    name: "Mobile App & Tech Startups",
    designation: "Technology",
    review:
      "App launch videos, promotional campaigns and digital marketing creatives.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block border border-yellow-500 rounded-full px-5 py-2 text-yellow-400 uppercase tracking-[3px] text-sm">
            Our Clients
          </span>

          <h2 className="text-5xl font-bold text-yellow-400 mt-6">
            Organizations We've Worked With
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Trusted by government organizations, educational institutions,
            hospitals, real estate companies, industries and businesses across
            India since 1999.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {testimonials.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-yellow-500/30 bg-zinc-900 p-8 hover:border-yellow-400 transition-all duration-300"
            >
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>

              <h3 className="text-2xl font-bold text-white">
                {client.name}
              </h3>

              <p className="text-yellow-400 mt-2">
                {client.designation}
              </p>

              <p className="text-gray-400 mt-6 leading-8">
                {client.review}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <div className="rounded-xl border border-yellow-500/30 bg-zinc-900 p-6 text-center">
            <h3 className="text-4xl font-bold text-yellow-400">1000+</h3>
            <p className="text-gray-400 mt-2">Happy Clients</p>
          </div>

          <div className="rounded-xl border border-yellow-500/30 bg-zinc-900 p-6 text-center">
            <h3 className="text-4xl font-bold text-yellow-400">5000+</h3>
            <p className="text-gray-400 mt-2">Projects Delivered</p>
          </div>

          <div className="rounded-xl border border-yellow-500/30 bg-zinc-900 p-6 text-center">
            <h3 className="text-4xl font-bold text-yellow-400">27+</h3>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>

          <div className="rounded-xl border border-yellow-500/30 bg-zinc-900 p-6 text-center">
            <h3 className="text-4xl font-bold text-yellow-400">Since 1999</h3>
            <p className="text-gray-400 mt-2">Creative Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}