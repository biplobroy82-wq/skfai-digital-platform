"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      <img
        src="/hero-bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex items-center min-h-screen px-6 lg:px-20">

        <div className="max-w-2xl">

          <div className="flex items-center gap-4 mb-8">

            <Image
              src="/logo.png"
              alt="Logo"
              width={90}
              height={90}
              priority
            />

            <div>

              <h2 className="text-4xl font-black text-white">
                Sri Krishna Films
              </h2>

              <p className="text-yellow-400 uppercase tracking-[5px] text-sm">
                & Advertisement Industry
              </p>

            </div>

          </div>

          <span className="inline-block border border-yellow-500 rounded-full px-5 py-2 text-yellow-400 font-semibold">
            Since 1999 • 27+ Years Experience
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight text-white">

            We Create

            <span className="block text-yellow-400">
              Cinematic Experiences
            </span>

          </h1>

          <p className="mt-6 text-lg text-gray-300">
            TV Commercials • Corporate Films • AI Video Ads •
            Digital Marketing
          </p>

          <div className="mt-8 flex gap-4">

            <a
              href="#portfolio"
              className="bg-yellow-500 text-black font-bold px-7 py-3 rounded-full"
            >
              View Portfolio
            </a>

            <a
              href="#contact"
              className="border border-white text-white px-7 py-3 rounded-full"
            >
              Contact Us
            </a>

          </div>

          <div className="mt-10 flex gap-10">

            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">27+</h3>
              <p className="text-white/70">Years</p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">5000+</h3>
              <p className="text-white/70">Ads</p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">PAN INDIA</h3>
              <p className="text-white/70">Services</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
