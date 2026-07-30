"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/skfai-showreel.mp4.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Gold Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">

        <div className="max-w-3xl px-8 lg:px-20">

          {/* Logo */}
          <div className="flex items-center gap-4 mb-8">

            <Image
              src="/logo.png"
              alt="SKFAI"
              width={80}
              height={80}
              className="rounded-full"
            />

            <div>
              <h2 className="text-white text-3xl font-bold">
                Sri Krishna Films
              </h2>

              <p className="text-yellow-400 tracking-[4px] uppercase text-sm">
                Advertisement Industry
              </p>
            </div>

          </div>

          {/* Since */}
          <div className="inline-block border border-yellow-500 rounded-full px-4 py-2 mb-5">

            <span className="text-yellow-400 font-semibold">
              SINCE 1999 • 27+ YEARS EXPERIENCE
            </span>

          </div>

          {/* Heading */}

          <h1 className="text-white text-5xl lg:text-7xl font-black leading-tight">

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

          <p className="mt-6 text-gray-300 text-lg max-w-xl leading-8">

            TV Commercials • Corporate Films • AI Video Ads •
            Digital Marketing • Product Shoots • Brand Promotion

          </p>

          {/* Buttons */}

          <div className="mt-10 flex gap-5 flex-wrap">

            <button className="bg-yellow-500 hover:bg-yellow-400 transition px-8 py-4 rounded-full text-black font-bold">

              ▶ Watch Showreel

            </button>

            <button className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full text-white font-bold">

              Start Your Project

            </button>

          </div>

          {/* Stats */}

          <div className="flex gap-10 mt-14 flex-wrap">

            <div>

              <h3 className="text-yellow-400 text-4xl font-bold">
                5000+
              </h3>

              <p className="text-white/70">
                Video Ads
              </p>

            </div>

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
