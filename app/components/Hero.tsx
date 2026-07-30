"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 lg:px-16">

        <div className="max-w-2xl">

          {/* Logo */}
          <div className="flex items-center gap-4 mb-8">

            <Image
              src="/logo.png"
              alt="Sri Krishna Films & Advertisement Industry"
              width={90}
              height={90}
              priority
            />

            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                Sri Krishna Films
              </h2>

              <p className="text-yellow-400 text-sm tracking-[4px] uppercase">
                & Advertisement Industry
              </p>
            </div>

          </div>

          {/* Badge */}
          <div className="inline-block border border-yellow-500 rounded-full px-5 py-2 mb-6">
            <span className="text-yellow-400 font-semibold">
              Since 1999 • 27+ Years Experience
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
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
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#portfolio"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-bold transition"
            >
              View Portfolio
            </a>

            <a
              href="#contact"
              className="border border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-bold transition"
            >
              Contact Us
            </a>

          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-10">

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">27+</h3>
              <p className="text-white/70">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">5000+</h3>
              <p className="text-white/70">Video Advertisements</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-yellow-400">PAN INDIA</h3>
              <p className="text-white/70">Creative Services</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
