"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}
      <img
        src="/hero-bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">

        <div className="max-w-2xl px-6 lg:px-16">

          {/* Logo */}

          <div className="flex items-center gap-4 mb-8">

            <Image
              src="/logo.png"
              alt="Logo"
              width={85}
              height={85}
              priority
            />

            <div>

              <h2 className="text-4xl font-extrabold text-white">
                Sri Krishna Films
              </h2>

              <p className="text-yellow-400 tracking-[4px] uppercase text-sm">
                & Advertisement Industry
              </p>

            </div>

          </div>

          {/* Experience */}

          <div className="inline-block border border-yellow-500 rounded-full px-5 py-2 mb-8">

            <span className="text-yellow-400 font-semibold">
              Since 1999 • 27+ Years Experience
            </span>

          </div>

          {/* Heading */}

          <h1 className="text-white font-black text-5xl lg:text-7xl leading-tight">

            We Don't Just
            <br />

            Create Ads.

            <br />

            <span className="text-yellow-400">

              We Create
              <br />
              Cinematic Experiences.

            </span>

          </h1>

          {/* Description */}

          <p className="mt-6 text-lg text-gray-300 leading-8">

            TV Commercials • Corporate Films • AI Video Ads
            <br />
            Digital Marketing • Product Shoots • Brand Promotion

          </p>

          {/* Buttons */}

          <div className="mt-10 flex gap-4 flex-wrap">

            <a
              href="#portfolio"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-full transition"
            >
              View Portfolio
            </a>

            <a
              href="#contact"
              className="border border-white hover:bg-white hover:text-black text-white font-bold px-8 py-3 rounded-full transition"
            >
              Contact Us
            </a>

          </div>

          {/* Stats */}

          <div className="mt-12 flex gap-10 flex-wrap">

            <div>
              <h3 className="text-yellow-400 text-4xl font-bold">
                27+
              </h3>

              <p className="text-white/70">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-4xl font-bold">
                5000+
              </h3>

              <p className="text-white/70">
                Video Advertisements
              </p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-4xl font-bold">
                PAN INDIA
              </h3>

              <p className="text-white/70">
                Creative Services
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
