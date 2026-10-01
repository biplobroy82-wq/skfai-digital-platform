
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
      try {
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
            background_image:
              data.background_image || "/hero-bg.jpg",
          });
        }
      } catch (error) {
        console.error("Failed to load hero:", error);
      } finally {
        setLoading(false);
      }
    }

    loadHero();
  }, []);

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-black px-4 text-center text-xl text-yellow-400 sm:text-2xl">
        Loading...
      </section>
    );
  }

  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-black">

      {/* Background */}
      <Image
        src={hero.background_image || "/hero-bg.jpg"}
        alt="Sri Krishna Films"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Background overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-12">

        {/* Left Content */}
        <div className="w-full min-w-0 max-w-4xl">

          {/* Company Logo and Name */}
          <div className="flex min-w-0 flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">

            <Image
              src="/og-image.jpg"
              alt="Sri Krishna Films Logo"
              width={90}
              height={90}
              priority
              className="h-14 w-14 shrink-0 rounded-full object-contain sm:h-[90px] sm:w-[90px]"
            />

            <div className="w-full min-w-0">

              <h2 className="max-w-full break-words text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl [overflow-wrap:anywhere]">
                {hero.company_name}
              </h2>

              <p className="mt-2 max-w-full break-words text-xs uppercase leading-relaxed tracking-[1.5px] text-yellow-400 sm:text-sm sm:tracking-[3px] lg:tracking-[7px]">
                {hero.company_tagline}
              </p>

            </div>
          </div>

          {/* Experience Badge */}
          <div className="mt-6 inline-flex max-w-full items-center rounded-2xl border border-yellow-500 bg-black/40 px-4 py-3 backdrop-blur sm:mt-8 sm:rounded-full sm:px-6 sm:py-2">

            <span className="break-words text-sm font-semibold leading-relaxed text-yellow-300 sm:text-base">
              {hero.badge}
            </span>

          </div>

          {/* Main Heading */}
          <h1 className="mt-8 max-w-full break-words text-3xl font-black leading-[1.15] sm:mt-10 sm:text-5xl lg:text-7xl [overflow-wrap:anywhere]">

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

          {/* Description */}
          <p className="mt-6 max-w-xl break-words text-base leading-7 text-gray-300 sm:mt-8 sm:text-lg sm:leading-8">
            {hero.description}
          </p>

          {/* CTA Button */}
          <div className="mt-8 flex w-full min-w-0 flex-wrap gap-4 sm:mt-10 sm:gap-5">

            <a
              href={hero.button_link || "#contact"}
              className="inline-flex min-h-12 max-w-full items-center justify-center break-words rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-3 text-center font-bold text-black transition hover:scale-105 sm:px-9 sm:py-4"
            >
              {hero.button_text}
            </a>

          </div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}
