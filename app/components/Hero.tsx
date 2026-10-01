
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
      <section className="flex min-h-[75svh] items-center justify-center bg-[#111318] px-4 text-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-[#ff5a00]" />
      </section>
    );
  }

  return (
    <section className="relative isolate flex min-h-[min(780px,calc(100svh-76px))] w-full items-center overflow-hidden bg-[#111318] sm:min-h-[min(820px,calc(100svh-88px))]">
      {/* Cinematic Background */}
      <Image
        src={hero.background_image || "/hero-bg.jpg"}
        alt="Sri Krishna Films video production studio"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark overlays for readable text */}
      <div className="absolute inset-0 bg-[#08090b]/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#08090b]/95 via-[#08090b]/75 to-[#08090b]/20" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/90 via-transparent to-[#08090b]/20" />

      {/* Orange cinematic accent */}
      <div className="absolute left-0 top-1/4 h-40 w-1 bg-[#ff5a00] sm:h-56" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="w-full max-w-4xl">
          {/* Company Identity */}
          <div className="mb-7 flex min-w-0 items-center gap-4 sm:mb-9 sm:gap-5">
            <Image
              src="/og-image.jpg"
              alt="Sri Krishna Films logo"
              width={76}
              height={76}
              priority
              className="h-12 w-12 shrink-0 rounded-full border border-[#ff5a00]/70 object-cover sm:h-16 sm:w-16"
            />

            <div className="min-w-0">
              <h2 className="font-[var(--font-display)] text-xl font-bold leading-tight tracking-wide text-white sm:text-3xl lg:text-4xl">
                {hero.company_name}
              </h2>

              <p className="mt-1.5 text-[9px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-[#ff7a32] sm:text-xs sm:tracking-[0.28em] lg:text-sm">
                {hero.company_tagline}
              </p>
            </div>
          </div>

          {/* Experience Badge */}
          {hero.badge && (
            <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-[#ff5a00]/60 bg-black/40 px-4 py-2 backdrop-blur-sm sm:mb-9">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff5a00]" />

              <span className="text-xs font-semibold leading-relaxed text-white sm:text-sm">
                {hero.badge}
              </span>
            </div>
          )}

          {/* Main Heading */}
          <h1 className="max-w-4xl font-[var(--font-display)] text-[clamp(2.6rem,7vw,6rem)] font-black uppercase leading-[0.98] tracking-[-0.025em]">
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
              <span className="mt-1 block text-white">
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
            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-300 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
              {hero.description}
            </p>
          )}

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
            <a
              href={hero.button_link || "#contact"}
              className="group inline-flex min-h-12 max-w-full items-center justify-center gap-3 rounded-sm bg-[#ff5a00] px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[#e94f00] sm:px-7 sm:py-4"
            >
              <span>
                {hero.button_text || "GET A QUOTE"}
              </span>

              <ArrowRight
                size={18}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#services"
              className="group inline-flex min-h-12 max-w-full items-center justify-center gap-3 rounded-sm border border-white/35 bg-black/20 px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:border-[#ff5a00] hover:text-[#ff7a32] sm:px-7 sm:py-4"
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

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#111318] to-transparent sm:h-28" />
    </section>
  );
}
