
"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5000+", label: "Video Ads Created" },
  { value: "1000+", label: "Happy Clients & Projects" },
  { value: "27+", label: "Years of Experience" },
  { value: "PAN INDIA", label: "Service Reach" },
];

export default function FounderMessage() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#08090c] px-5 py-16 text-white sm:px-8 md:py-24 lg:px-12"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#101115] shadow-2xl lg:grid-cols-[0.85fr_1.15fr]"
        >
          {/* Founder portrait */}
          <div className="relative min-h-[430px] overflow-hidden bg-[#15171d] sm:min-h-[560px] lg:min-h-[680px]">
            <img
              src="/biplob-roy-founder.png"
              alt="Biplob Roy, Founder of Sri Krishna Films & Advertisement Industry"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9">
              <div className="mb-4 h-1 w-14 rounded-full bg-orange-500" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
                Founder & Proprietor
              </p>

              <h3 className="mt-2 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Biplob Roy
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-gray-300">
                Sri Krishna Films & Advertisement Industry
              </p>
            </div>
          </div>

          {/* Founder message */}
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14 xl:p-16">
            <div className="mb-6">
              <span className="inline-flex border-l-2 border-orange-500 pl-3 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-400 sm:text-xs">
                A Message from the Founder
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl xl:text-5xl">
                Creating Stories
                <br />
                That Create{" "}
                <span className="text-orange-500">Impact.</span>
              </h2>

              <div className="mt-6 h-1 w-16 rounded-full bg-orange-500" />
            </div>

            <div className="mb-5 text-5xl leading-none text-orange-500">
              “
            </div>

            <h3 className="text-xl font-bold leading-snug sm:text-2xl">
              Every brand has a story. Our mission is to make it stand out.
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-7 text-gray-300 sm:text-base">
              <p>
                At Sri Krishna Films & Advertisement Industry, we believe
                that powerful storytelling helps businesses connect with
                people and build lasting brand value.
              </p>

              <p>
                Our goal is to make professional video production,
                advertising and creative digital solutions accessible to
                businesses of different sizes. From TV commercials and
                corporate films to AI-powered video advertisements, we focus
                on creativity, quality and the purpose behind every project.
              </p>

              <p>
                Every project is an opportunity to understand a brand,
                communicate its vision and create something meaningful.
                We look forward to being a part of your brand’s journey.
              </p>
            </div>

            <div className="my-8 h-px w-full bg-white/10" />

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-bold">Biplob Roy</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                  Founder & Proprietor
                </p>
              </div>

              <a
                href="https://wa.me/916204731481?text=Hello%20Biplob%20Roy%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-orange-600 px-5 py-4 text-xs font-bold uppercase tracking-wider text-white transition duration-300 hover:bg-orange-500 sm:px-6"
              >
                Let’s Discuss Your Project
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Statistics bar */}
        <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-[#101115] md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-4 py-6 text-center sm:px-6 sm:py-8 ${
                index !== stats.length - 1
                  ? "border-r border-white/10"
                  : ""
              } ${
                index < 2 ? "border-b border-white/10 md:border-b-0" : ""
              }`}
            >
              <p className="text-xl font-extrabold text-orange-500 sm:text-2xl lg:text-3xl">
                {stat.value}
              </p>

              <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-gray-400 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
