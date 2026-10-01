
"use client";

import { motion } from "framer-motion";

export default function FounderMessage() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#08090c] px-5 py-20 text-white md:px-10 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full border border-orange-500/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">
            A Message from the Founder
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            The Vision Behind{" "}
            <span className="text-orange-500">Our Work</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#101115] shadow-2xl md:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="relative min-h-[360px] overflow-hidden bg-[#15171d] sm:min-h-[460px]">
            <img
              src="/biplob-roy.png.png"
              alt="Biplob Roy, Founder of Sri Krishna Films"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/5" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
                Founder & Proprietor
              </p>
              <h3 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                Biplob Roy
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Sri Krishna Films & Advertisement Industry
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
            <span className="mb-5 text-5xl leading-none text-orange-500">
              “
            </span>

            <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
              Every brand has a story. Our mission is to make it stand out.
            </h3>

            <div className="mt-6 space-y-4 text-sm leading-7 text-gray-300 sm:text-base">
              <p>
                At Sri Krishna Films & Advertisement Industry, we believe
                that powerful storytelling can help businesses connect
                with people and build lasting brand value.
              </p>

              <p>
                Our goal is to make professional video production,
                advertising and creative digital solutions accessible to
                businesses of different sizes. From TV commercials and
                corporate films to AI-powered video advertisements, we
                focus on creativity, quality and the purpose behind every
                project.
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
                <p className="mt-1 text-xs uppercase tracking-widest text-orange-500">
                  Founder & Proprietor
                </p>
              </div>

              <a
                href="https://wa.me/916204731481?text=Hello%20Biplob%20Roy%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-orange-600 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-orange-500"
              >
                Discuss Your Project
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
