"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
      >
        <source src="/skfai-showreel.mp4.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-20">

        <div className="max-w-2xl">

          {/* Logo */}
          <div className="flex items-center gap-4 mb-8">

            <Image
              src="/logo.png"
              alt="SKFAI"
              width={75}
              height={75}
              priority
            />

            <div>
              <h2 className="text-3xl font-bold text-white">
                Sri Krishna Films
              </h2>

              <p className="text-yellow-400 tracking-widest text-sm uppercase">
                Advertisement Industry
              </p>
            </div>

          </div>

          {/* Badge */}

          <div className="inline-block border border-yellow-500 rounded-full px-5 py-2 mb-6">

            <span className="text-yellow-400 font-semibold text-sm">
              ★ Since 1999 • 27+ Years Experience
            </span>

          </div>

          {/* Heading */}

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">

            We Create

            <br />

            <span className="text-yellow-400">
              Cinematic
            </span>

            <br />

            Experiences

          </h1>

          {/* Description */}

          <p className="mt-6 text-lg text-gray-300 leading-8">

            TV Commercials • Corporate Films • AI Video Ads
            <br />
            Digital Marketing • Product Shoot • Branding

          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-full transition"
            >
              ▶ Watch Showreel
            </a>

            <a
              href="#contact"
              className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition"
            >
              Contact Us
            </a>

          </div>

          {/* Stats */}

          <div className="mt-12 flex flex-wrap gap-10">

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
                Video Ads
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

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white text-sm tracking-[6px]">
        SCROLL ↓
      </div>

    </section>
  );
  video{
  transition:8s;
}

section:hover video{
  transform:scale(1.15);
}
}
