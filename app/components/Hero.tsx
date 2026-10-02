
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
        const { data, error } = await supabase
          .from("hero")
          .select("*")
          .eq("id", 1)
          .single();

        if (error) {
          console.error("Failed to load hero:", error);
          return;
        }

        if (data) {
          setHero((previous) => ({
            ...previous,
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
          }));
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
      <section className="flex min-h-[calc(100svh-76px)] items-center justify-center bg-[#0b0d10] px-4 text-center">
        <div className="h-9 w-9 animate-spin rounded-full border-2 border-white/20 border-t-[#ff5a00]" />
      </section>
    );
  }

  return (
    <section className="relative isolate flex min-h-[min(780px,calc(100svh-76px))] w-full items-center overflow-hidden bg-[#0b0d10] sm:min-h-[min(820px,calc(100svh-88px))]">

      {/* Cinematic Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-bg.jpg"
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-label="Sri Krishna Films cinematic production showreel"
      >
        <source src="/hero-intro.mp4" type="video/mp4" />
      </video>

      {/* Video Overlay for Text Readability */}
      <div className="absolute inset-0 bg-[#08090b]/35" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#08090b]/90 via-[#08090b]/60 to-[#08090b]/25" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10]/80 via-transparent to-[#08090b]/25" />

      {/* Orange Accent */}
      <div className="absolute left-0 top-1/4 h-36 w-1 bg-[#ff5a00] sm:h-52" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="w-full max-w-5xl">

          {/* Company Identity */}
          <div className="mb-6 flex min-w-0 items-center gap-3 sm:mb-7 sm:gap-4">
            <Image
              src="/og-image.jpg"
              alt="Sri Krishna Films logo"
              width={64}
              height={64}
              priority
              className="h-11 w-11 shrink-0 rounded-full border border-[#ff5a00]/70 object-cover sm:h-14 sm:w-14"
            />

            <div className="min-w-0">
              <h2 className="font-[var(--font-display)] text-lg font-bold leading-tight tracking-wide text-white sm:text-2xl lg:text-3xl">
                {hero.company_name || "Sri Krishna Films"}
              </h2>

              <p className="mt-1 text-[9px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-[#ff9a3c] sm:text-[11px] sm:tracking-[0.25em]">
                {hero.company_tagline || "Advertisement Industry"}
              </p>
            </div>
          </div>

          {/* Experience Badge */}
          {hero.badge && (
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#ff5a00]/60 bg-black/45 px-3.5 py-2 backdrop-blur-sm sm:mb-7">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff5a00]" />

              <span className="text-xs font-medium leading-relaxed text-white sm:text-sm">
                {hero.badge}
              </span>
            </div>
          )}

          {/* Main Heading */}
          <h1 className="w-full max-w-5xl font-[var(--font-display)] text-[clamp(2rem,4.7vw,4.8rem)] font-black uppercase leading-[0.98] tracking-[-0.035em]">
            {hero.hero_title_line1 && (
              <span className="block text-white">
                {hero.hero_title_line1}
              </span>
            )}

            {hero.hero_title_line2 && (
              <span className="block text-[#ff5a00]">
                {hero.hero_title_line2}
              </span>
            )}

            {hero.hero_title_line3 && (
              <span className="block text-white">
                {hero.hero_title_line3}
              </span>
            )}

            {hero.hero_title_line4 && (
              <span className="block text-[#ff7a32]">
                {hero.hero_title_line4}
              </span>
            )}
          </h1>

          {/* Description */}
          {hero.description && (
            <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-200 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
              {hero.description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
            <a
              href={hero.button_link || "#contact"}
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-sm bg-[#ff5a00] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[#e94f00] sm:px-7"
            >
              <span>{hero.button_text || "GET A QUOTE"}</span>

              <ArrowRight
                size={18}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#services"
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-sm border border-white/40 bg-black/25 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:border-[#ff5a00] hover:text-[#ff9a3c] sm:px-7"
            >
              Our Services

              <ArrowRight
                size={18}
                className="shrink-0 text-[#ff5a00] transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0b0d10]/80 to-transparent sm:h-20" />

      {/* Thin Orange Border Around the Entire Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-2 z-20 border border-[#ff5a00]/75 sm:inset-3"
      />
    </section>
  );
}
