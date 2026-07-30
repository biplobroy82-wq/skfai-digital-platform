"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          transform: "scale(1.08)",
        }}
      >
        <source src="/skfai-showreel.mp4.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 lg:px-20">

        <div className="max-w-2xl">

          {/* Logo */}
          <div className="flex items-center gap-4 mb-8">

            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              priority
            />

            <div>
              <h2 className="text-3xl font-bold text-white">
                Sri Krishna Films
              </h2>

              <p className="text-yellow-400 tracking-[5px] uppercase text-sm">
                Advertisement Industry
              </p>
            </div>

          </div>

          {/* Badge */}

          <div className="inline-flex border border-yellow-500 rounded-full px-5 py-2 mb-6">

            <span className="text-yellow-400 font-semibold">
              SINCE 1999 • 27+ YEARS EXPERIENCE
            </span>

          </div>

          {/* Heading */}

          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight">

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

          <div className="mt-8 flex gap-4 flex-wrap">

            <a
              href="#"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-full"
            >
              ▶ Watch Showreel
            </a>

            <a
              href="#contact"
              className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full"
            >
              Contact Us
            </a>

          </div>

          {/* Stats */}

          <div className="mt-12 flex gap-10 flex-wrap">

            <div>
              <h3 className="text-yellow-400 text-4xl font-bold">27+</h3>
              <p className="text-white/70">Years Experience</p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-4xl font-bold">5000+</h3>
              <p className="text-white/70">Video Ads</p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-4xl font-bold">PAN INDIA</h3>
              <p className="text-white/70">Creative Services</p>
            </div>

          </div>

        </div>

      </div>

      {/* Scroll */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        ↓
      </div>

    </section>
  );
}
