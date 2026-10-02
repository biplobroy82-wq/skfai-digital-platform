
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Clapperboard,
  Camera,
  Play,
  Lightbulb,
  Users,
  Film,
} from "lucide-react";
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

  const creativeCards = [
    {
      number: "01",
      title: "BRAND FILMS",
      subtitle: "Powerful Brand Stories",
      icon: Film,
    },
    {
      number: "02",
      title: "COMMERCIAL ADS",
      subtitle: "Ads That Make an Impact",
      icon: Camera,
    },
    {
      number: "03",
      title: "AI VIDEO ADS",
      subtitle: "Next-Gen Visual Production",
      icon: Play,
    },
  ];

  if (loading) {
    return (
      <section className="flex min-h-[70svh] items-center justify-center bg-[#08090b]">
        <div className="h-9 w-9 animate-spin rounded-full border-2 border-white/20 border-t-[#ff5a00]" />
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#08090b] text-white">
      {/* Cinematic background — no founder portrait */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_35%,rgba(255,90,0,0.24),transparent_38%),radial-gradient(ellipse_at_48%_80%,rgba(255,90,0,0.10),transparent_42%),linear-gradient(110deg,#08090b_5%,#111014_48%,#08090b_100%)]" />

        <div className="absolute right-[8%] top-[12%] h-72 w-72 rounded-full bg-[#ff5a00]/10 blur-[110px]" />

        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff5a00]/70 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative mx-auto grid min-h-[680px] w-full max-w-[1600px] grid-cols-1 items-center gap-10 px-5 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:min-h-[730px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-12 xl:px-16">

        {/* LEFT: Brand and main message */}
        <div className="relative z-10 min-w-0">
          <div className="mb-8 flex items-center gap-3 sm:mb-10">
            <Image
              src="/og-image.jpg"
              alt="Sri Krishna Films logo"
              width={64}
              height={64}
              priority
              className="h-12 w-12 shrink-0 rounded-full border border-[#ff5a00]/60 object-cover sm:h-14 sm:w-14"
            />

            <div className="min-w-0">
              <h2 className="font-[var(--font-display)] text-base font-bold leading-tight text-white sm:text-xl lg:text-2xl">
                {hero.company_name || "Sri Krishna Films"}
              </h2>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#ff9a3c] sm:text-[10px] sm:tracking-[0.28em]">
                {hero.company_tagline || "Advertisement Industry"}
              </p>
            </div>
          </div>

          {hero.badge && (
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#ff5a00]/50 bg-white/[0.04] px-3.5 py-2 sm:mb-7">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff5a00]" />
              <span className="text-xs text-white/90 sm:text-sm">
                {hero.badge}
              </span>
            </div>
          )}

          <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#ff9a3c] sm:text-xs sm:tracking-[0.32em]">
            <span className="h-px w-8 bg-[#ff5a00]" />
            FILM · ADVERTISING · DIGITAL
          </p>

          <h1 className="max-w-3xl font-[var(--font-display)] text-[clamp(2.4rem,5.2vw,5.1rem)] font-black uppercase leading-[0.99] tracking-[-0.035em]">
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

            {!hero.hero_title_line1 &&
              !hero.hero_title_line2 &&
              !hero.hero_title_line3 &&
              !hero.hero_title_line4 && (
                <>
                  <span className="block text-white">
                    WE TURN IDEAS
                  </span>
                  <span className="block text-[#ff5a00]">
                    INTO CINEMATIC
                  </span>
                  <span className="block text-white">
                    EXPERIENCES.
                  </span>
                </>
              )}
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-white/75 sm:mt-6 sm:text-base sm:leading-7">
            {hero.description ||
              "Commercial films, brand stories and AI-powered video ads crafted to leave a lasting impression."}
          </p>

          <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
            <a
              href={hero.button_link || "#contact"}
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-[#ff5a00] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#e94f00] sm:px-7 sm:text-sm"
            >
              {hero.button_text || "EXPLORE OUR WORK"}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#services"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-sm border border-white/30 bg-black/20 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-[#ff5a00] sm:px-7 sm:text-sm"
            >
              OUR SERVICES
              <ArrowRight
                size={18}
                className="text-[#ff5a00] transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* RIGHT: Creative service cards */}
        <div className="relative z-10 min-w-0 lg:pl-4">
          <div className="relative overflow-hidden rounded-sm border border-white/10 bg-[#111114]/75 p-4 backdrop-blur-md sm:p-6 lg:p-7">
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#ff5a00]/10 blur-[70px]" />

            <div className="relative mb-6 flex items-end justify-between gap-4 border-b border-white/10 pb-5 sm:mb-7">
              <div>
                <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ff9a3c] sm:text-xs">
                  <span className="h-px w-6 bg-[#ff5a00]" />
                  WHAT WE CREATE
                </p>

                <h2 className="font-[var(--font-display)] text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Ideas into
                  <span className="block text-[#ff5a00]">
                    Visual Impact.
                  </span>
                </h2>
              </div>

              <Clapperboard
                className="mb-1 hidden shrink-0 text-[#ff5a00]/80 sm:block"
                size={38}
                strokeWidth={1.2}
              />
            </div>

            <div className="space-y-3">
              {creativeCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.number}
                    className="group flex items-center gap-3 border border-white/[0.07] bg-white/[0.025] p-3 transition-colors hover:border-[#ff5a00]/50 hover:bg-[#ff5a00]/[0.05] sm:gap-4 sm:p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#ff5a00]/50 bg-[#ff5a00]/[0.07] sm:h-12 sm:w-12">
                      <Icon
                        size={21}
                        className="text-[#ff7a32]"
                        strokeWidth={1.6}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-white sm:text-base">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-xs text-white/60 sm:text-sm">
                        {card.subtitle}
                      </p>
                    </div>

                    <span className="text-xs font-semibold tracking-wider text-[#ff7a32]">
                      {card.number}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex items-start gap-3 border-l-2 border-[#ff5a00] bg-black/30 px-4 py-3 sm:mt-6">
              <Lightbulb
                size={19}
                className="mt-0.5 shrink-0 text-[#ff7a32]"
              />
              <p className="text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">
                Every brand has a story. We help bring it to life
                through creative ideas and professional production.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom statistics bar */}
      <div className="relative z-10 border-y border-white/10 bg-black/65">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 divide-y divide-white/10 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center gap-4 py-5 sm:px-5 sm:first:pl-0">
            <Clapperboard
              size={30}
              className="shrink-0 text-[#ff5a00]"
              strokeWidth={1.5}
            />
            <div>
              <p className="font-[var(--font-display)] text-2xl font-bold text-[#ff5a00] sm:text-3xl">
                5,000+
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/65 sm:text-xs">
                Videos Created
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-5 sm:px-6">
            <Film
              size={30}
              className="shrink-0 text-[#ff5a00]"
              strokeWidth={1.5}
            />
            <div>
              <p className="font-[var(--font-display)] text-2xl font-bold text-[#ff5a00] sm:text-3xl">
                27+
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/65 sm:text-xs">
                Years of Experience
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-5 sm:px-6 sm:last:pr-0">
            <Users
              size={30}
              className="shrink-0 text-[#ff5a00]"
              strokeWidth={1.5}
            />
            <div>
              <p className="font-[var(--font-display)] text-2xl font-bold text-[#ff5a00] sm:text-3xl">
                PAN-INDIA
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/65 sm:text-xs">
                Production Reach
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
