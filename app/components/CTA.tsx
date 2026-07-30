"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-black via-zinc-900 to-black py-24">

      {/* Gold Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <span className="inline-block rounded-full border border-yellow-500 px-5 py-2 text-sm uppercase tracking-[4px] text-yellow-400">
          Let's Work Together
        </span>

        <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
          Ready To Grow Your Business?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          From TV Commercials to AI Video Creation, Corporate Films,
          Digital Marketing and Lead Generation —
          Sri Krishna Films is ready to help your business grow.
        </p>

        <div className="mt-10 text-3xl font-bold text-yellow-400">
          📞 +91 62047 31481
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          {/* Call Button */}

          <a
            href="tel:+916204731481"
            className="flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-yellow-300"
          >
            <Phone size={20} />
            Call Now
          </a>

          {/* WhatsApp */}

          <a
            href="https://wa.me/916204731481"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-green-500 px-8 py-4 font-bold text-green-400 transition hover:bg-green-500 hover:text-white"
          >
            <MessageCircle size={20} />
            WhatsApp Now
          </a>

          {/* Contact */}

          <a
            href="#contact"
            className="flex items-center gap-3 rounded-xl border border-yellow-500 px-8 py-4 font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
          >
            <ArrowRight size={20} />
            Get Free Consultation
          </a>

        </div>

        <div className="mt-12 text-gray-400">
          Available for Businesses Across India • Since 1999 • 27+ Years of Excellence
        </div>

      </motion.div>

    </section>
  );
}