
"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  Camera,
  Clapperboard,
  Film,
  CalendarDays,
} from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden bg-[#080808] py-16 sm:py-20 lg:py-24"
    >
      {/* Cinematic background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,101,0,0.09),transparent_60%)]" />

      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-orange-600/15 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

      {/* Decorative film-production visuals */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden items-center justify-between overflow-hidden px-5 opacity-[0.13] lg:flex xl:px-12"
      >
        <Camera
          strokeWidth={0.8}
          className="h-48 w-48 -rotate-6 text-orange-400 xl:h-64 xl:w-64"
        />

        <div className="relative">
          <Film
            strokeWidth={0.8}
            className="h-52 w-52 rotate-12 text-orange-400 xl:h-64 xl:w-64"
          />
          <Clapperboard
            strokeWidth={0.8}
            className="absolute -bottom-8 -right-10 h-28 w-28 -rotate-12 text-white xl:h-36 xl:w-36"
          />
        </div>
      </div>

      {/* Orange cinematic light lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[36%] -z-10 h-px w-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 text-center sm:px-6"
      >
        {/* Section badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/70 bg-black/80 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[3px] text-white sm:text-xs sm:tracking-[4px]">
            <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_#ff6500]" />
            Let&apos;s Work Together
          </span>
        </div>

        {/* Main heading */}
        <h2 className="mx-auto mt-7 max-w-5xl text-4xl font-black leading-[1.1] tracking-tight text-white sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
          Ready to Grow
          <br />
          <span className="text-orange-500">
            Your Business?
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-zinc-300 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
          From TV Commercials to AI Video Creation, Corporate Films,
          Digital Marketing and Lead Generation —{" "}
          <span className="font-semibold text-orange-400">
            Sri Krishna Films
          </span>{" "}
          is ready to help your business grow.
        </p>

        {/* Contact number */}
        <div className="mt-7 flex justify-center sm:mt-8">
          <a
            href="tel:+916204731481"
            className="inline-flex max-w-full items-center justify-center gap-3 rounded-full border border-orange-500/70 bg-black/80 px-5 py-3 text-lg font-bold tracking-wide text-white transition duration-300 hover:border-orange-400 hover:bg-orange-500/10 sm:px-7 sm:py-3.5 sm:text-2xl"
          >
            <Phone
              className="h-5 w-5 shrink-0 text-orange-500 sm:h-6 sm:w-6"
              fill="currentColor"
            />
            <span className="whitespace-nowrap">
              +91 62047 31481
            </span>
          </a>
        </div>

        {/* Action buttons */}
        <div className="mx-auto mt-8 flex w-full max-w-5xl flex-col items-stretch justify-center gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          {/* Call Now */}
          <a
            href="tel:+916204731481"
            className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl border border-orange-400 bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-4 font-bold text-white shadow-[0_0_25px_rgba(255,101,0,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,101,0,0.35)] sm:min-w-[190px]"
          >
            <Phone size={20} />
            Call Now
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/916204731481"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl border border-green-500 bg-green-500/10 px-6 py-4 font-bold text-green-400 transition duration-300 hover:-translate-y-1 hover:bg-green-600 hover:text-white sm:min-w-[210px]"
          >
            <MessageCircle size={21} />
            WhatsApp Now
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          {/* Free consultation */}
          <a
            href="#contact"
            className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl border border-orange-500/80 bg-black/70 px-6 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white sm:min-w-[260px]"
          >
            <CalendarDays size={20} className="text-orange-400 group-hover:text-white" />
            Get Free Consultation
            <ArrowRight
              size={18}
              className="text-orange-400 transition-transform group-hover:translate-x-1 group-hover:text-white"
            />
          </a>
        </div>

        {/* Bottom supporting text — no statistics */}
        <div className="mx-auto mt-9 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs tracking-wide text-zinc-400 sm:mt-10 sm:text-sm">
          <span>Professional Video Production</span>
          <span className="text-orange-500">•</span>
          <span>Creative Advertising Solutions</span>
          <span className="text-orange-500">•</span>
          <span>Serving Businesses Across India</span>
        </div>
      </motion.div>
    </section>
  );
}
