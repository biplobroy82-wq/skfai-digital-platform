"use client";

import { motion } from "framer-motion";

const clients = [
  "IOCL",
  "Kolkata Metro",
  "IIT Kharagpur",
  "DAV Model School",
  "Medica Hospital",
  "Shyam Steel",
  "Shree Height Builders",
  "HLC Electrical India",
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="bg-[#070707] py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >

          <span className="inline-block border border-yellow-500 rounded-full px-5 py-2 text-yellow-400 uppercase tracking-[3px] text-sm">
            Trusted By
          </span>

          <h2 className="text-5xl font-bold text-yellow-400 mt-6">
            Organizations That Trust Sri Krishna Films
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            For more than
            <span className="text-yellow-400 font-semibold">
              {" "}27+ Years
            </span>,
            we have proudly worked with leading government organizations,
            educational institutions, hospitals, builders and corporate
            companies across India.
          </p>

        </motion.div>

        {/* Clients */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {clients.map((client, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="group rounded-2xl border border-yellow-500/30 bg-zinc-900 p-10 flex items-center justify-center h-44 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]"
            >

              <h3 className="text-yellow-400 text-2xl font-bold text-center group-hover:text-white transition">
                {client}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}