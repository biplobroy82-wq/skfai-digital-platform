"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <img
        src="/hero-bg.jpg"
        alt="Sri Krishna Films"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>

      {/* Golden Light */}
      <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(255,196,0,0.15),transparent_45%)]"></div>

      {/* Red Accent */}
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-red-900/20 to-transparent"></div>

      <div className="relative z-10 flex min-h-screen items-center">

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">

          <div className="max-w-3xl">

            {/* Top Gold Line */}

            <div className="mb-8 h-1 w-28 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300"></div>

            {/* Logo */}

            <div className="mb-10 flex items-center gap-5">

              <Image
                src="/logo.png"
                alt="Logo"
                width={95}
                height={95}
                priority
              />

              <div>

                <h2 className="text-4xl md:text-5xl font-black text-white tracking-wide">

                  Sri Krishna Films

                </h2>

                <p className="mt-1 uppercase tracking-[8px] text-yellow-400 text-sm font-semibold">

                  Advertisement Industry

                </p>

              </div>

            </div>

            {/* Experience */}

            <div className="inline-flex items-center rounded-full border border-yellow-500/60 bg-black/40 px-5 py-2 backdrop-blur-sm">

              <span className="text-yellow-300 font-semibold">

                Since 1999 • 27+ Years Experience

              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

              <span className="text-white">

                We Don't Just

              </span>

              <br />

              <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">

                Create Advertisements.

              </span>

              <br />

              <span className="text-white">

                We Create

              </span>

              <br />

              <span className="text-red-400">

                Cinematic Experiences.

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">

              TV Commercials • Corporate Films • Product Shoots • AI Video Ads •
              Digital Marketing • Brand Promotion

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#portfolio"
                className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-3 font-bold text-black transition hover:scale-105"
              >
                View Portfolio
              </a>

              <a
                href="#contact"
                className="rounded-full border border-yellow-500 px-8 py-3 font-semibold text-white transition hover:bg-yellow-500 hover:text-black"
              >
                Contact Us
              </a>

            </div>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-3 gap-8 max-w-xl">

              <div>

                <h3 className="text-4xl font-black text-yellow-400">

                  27+

                </h3>

                <p className="mt-1 text-gray-300">

                  Years Experience

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-black text-yellow-400">

                  5000+

                </h3>

                <p className="mt-1 text-gray-300">

                  Video Ads

                </p>

              </div>

              <div>

                <h3 className="text-3xl font-black text-yellow-400">

                  PAN INDIA

                </h3>

                <p className="mt-1 text-gray-300">

                  Services

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
