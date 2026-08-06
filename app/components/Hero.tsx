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
    <section className="relative min-h-screen overflow-hidden bg-black">
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
        <div className="w-full max-w-4xl">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
            <Image
              src="/og-image.jpg"
              alt="Logo"
              width={90}
              height={90}
              priority
              className="h-14 w-14 sm:h-[90px] sm:w-[90px]"
            />
            <div className="min-w-0">
              <h2 className="break-words text-2xl font-black text-white sm:text-4xl lg:text-5xl">
                {hero.company_name}
              </h2>
              <p className="mt-2 uppercase tracking-[3px] sm:tracking-[7px] text-yellow-400 text-xs sm:text-sm">
                {hero.company_tagline}
              </p>
            </div>
          </div>

          <div className="mt-8 inline-flex rounded-full border border-yellow-500 bg-black/40 px-6 py-2 backdrop-blur">
            <span className="font-semibold text-yellow-300 text-sm sm:text-base">
              {hero.badge}
            </span>
          </div>

          <h1 className="mt-10 break-words text-3xl font-black leading-tight sm:text-5xl lg:text-7xl">
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

          <p className="mt-8 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            
              href={hero.button_link}
              className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-9 py-4 font-bold text-black transition hover:scale-105"
            >
              {hero.button_text}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}