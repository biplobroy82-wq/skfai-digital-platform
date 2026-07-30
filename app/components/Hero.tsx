"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Gold Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[180px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >

          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Sri Krishna Films"
            width={220}
            height={80}
            priority
            className="mb-8"
          />

          <span className="inline-block rounded-full border border-yellow-500 px-5 py-2 text-sm uppercase tracking-[4px] text-yellow-400">
            Premium Film Production House
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            We Create
            <span className="block text-yellow-400">
              Cinematic
            </span>
            Advertisements
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-300">
            TV Commercials • Corporate Films • AI Videos •
            Product Shoots • Celebrity Promotions •
            Digital Marketing • Lead Generation
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="#contact"
              className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-yellow-300"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/gallery"
              className="rounded-xl border border-yellow-500 px-8 py-4 font-bold text-white transition hover:bg-yellow-500 hover:text-black"
            >
              View Portfolio
            </Link>

          </div>

          {/* Trust Line */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-gray-300">

            <div>
              ⭐⭐⭐⭐⭐
            </div>

            <div>
              500+ Happy Clients
            </div>

            <div>
              5000+ Ads Delivered
            </div>

          </div>

        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}