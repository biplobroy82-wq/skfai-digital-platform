"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-bg.jpg"
      >
        <source src="/skfai-showreel.mp4" type="video/mp4" />
      </video>

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/85" />

      {/* Gold Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[180px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >

          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Sri Krishna Films"
            width={260}
            height={90}
            priority
            className="mb-8"
          />

          <span className="inline-block rounded-full border border-yellow-500 px-5 py-2 text-sm uppercase tracking-[4px] text-yellow-400">
            Premium Film Production House
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight text-white md:text-8xl">
            Transform Your Brand With
            <span className="block text-yellow-400">
              Cinematic
            </span>
            Video Advertising
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
            TV Commercials • Corporate Films • AI Video Ads • Product Shoots •
            Celebrity Promotions • Digital Marketing • Lead Generation
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="#contact"
              className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              Start Your Project
            </Link>

            <Link
              href="/gallery"
              className="rounded-xl border border-yellow-500 px-8 py-4 font-bold text-white transition duration-300 hover:bg-yellow-500 hover:text-black"
            >
              Watch Showreel
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10">

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">
                5000+
              </h3>
              <p className="mt-2 text-gray-300">
                Video Ads Created
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">
                8+
              </h3>
              <p className="mt-2 text-gray-300">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">
                Pan India
              </h3>
              <p className="mt-2 text-gray-300">
                Services
              </p>
            </div>

          </div>

        </motion.div>

      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />

    </section>
  );
}
