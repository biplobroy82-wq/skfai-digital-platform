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
    </section>
  );
}
