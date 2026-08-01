"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function Hero() {
  const [hero, setHero] = useState({
    title: "",
    subtitle: "",

    company_name: "",
    company_tagline: "",
    badge: "",

    hero_title_line1: "",
    hero_title_line2: "",
    hero_title_line3: "",
    hero_title_line4: "",

    description: "",

    button_text: "",
    button_link: "",
    background_image: "/hero-bg.jpg",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHero() {
      const { data } = await supabase
        .from("hero")
        .select("*")
        .eq("id", 1)
        .single();

      if (data) {
        setHero({
          title: data.title || "",
          subtitle: data.subtitle || "",

          company_name: data.company_name || "",
          company_tagline: data.company_tagline || "",
          badge: data.badge || "",

          hero_title_line1: data.hero_title_line1 || "",
          hero_title_line2: data.hero_title_line2 || "",
          hero_title_line3: data.hero_title_line3 || "",
          hero_title_line4: data.hero_title_line4 || "",

          description: data.description || "",

          button_text: data.button_text || "",
          button_link: data.button_link || "",
          background_image: data.background_image || "/hero-bg.jpg",
        });
      }

      setLoading(false);
    }

    loadHero();
  }, []);

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-black text-yellow-400 text-2xl">
        Loading...
      </section>
    );
  }

  return (
<<<<<<< HEAD
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

=======
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background */}
      <Image
        src={hero.background_image || "/hero-bg.jpg"}
        alt="Sri Krishna Films"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-between px-6 py-20 lg:px-12">
        {/* LEFT */}
        <div className="w-full max-w-4xl">
          <div className="flex items-center gap-5">
            <Image
              src="/logo.png"
              alt="Logo"
              width={90}
              height={90}
              priority
            />

            <div>
              <h2 className="text-4xl font-black text-white lg:text-5xl">
                                {hero.company_name}
              </h2>

              <p className="mt-2 uppercase tracking-[7px] text-yellow-400 text-sm">
                {hero.company_tagline}
              </p>
            </div>
          </div>

          <div className="mt-8 inline-flex rounded-full border border-yellow-500 bg-black/40 px-6 py-2 backdrop-blur">
            <span className="font-semibold text-yellow-300">
              {hero.badge}
            </span>
          </div>

          <h1 className="mt-10 text-5xl font-black leading-tight lg:text-7xl">
            <span className="block text-white">
              {hero.hero_title_line1}
            </span>

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              {hero.hero_title_line2}
            </span>

            <span className="mt-2 block text-white">
              {hero.hero_title_line3}
            </span>

            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
              {hero.hero_title_line4}
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href={hero.button_link}
              className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-9 py-4 font-bold text-black transition hover:scale-105"
            >
              {hero.button_text}
            </a>
          </div>
        </div>
      </div>
            {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
>>>>>>> 499d93e (Fix page and hero)
    </section>
  );
}
