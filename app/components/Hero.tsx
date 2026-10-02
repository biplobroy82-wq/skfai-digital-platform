
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Clapperboard,
  Camera,
  Video,
  Lightbulb,
  Users,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Hero() {
  const [hero, setHero] = useState({
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

  const services = [
    {
      icon: Clapperboard,
      title: "Film Production",
      subtitle: "Stories with impact",
    },
    {
      icon: Camera,
      title: "Commercial Ads",
      subtitle: "Built for brands",
    },
    {
      icon: Video,
      title: "AI Video Ads",
      subtitle: "Ideas into visuals",
    },
    {
      icon: Lightbulb,
      title: "Creative Direction",
      subtitle: "Concept to screen",
    },
    {
      icon: Users,
      title: "Brand Promotion",
      subtitle: "Connect with people",
    },
  ];

  if (loading) {
    return (
      <section className="flex min-h-[75svh] items-center justify-center bg-[#08090c]">
        <div className="h-9 w-9 animate-spin rounded-full border-2 border-white/20 border-t-[#ff5a00]" />
      </section>
    );
  }

  return (
    <section className="relative isolate min-h-[calc(100svh-76px)] overflow-hidden bg-[#08090c] text-white">

      {/* Background */}
      <Image
        src={hero.background_image || "/hero-bg.jpg"}
        alt="Sri Krishna Films production studio"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#08090c]/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#08090c]/95 via-[#08090c]/65 to-[#08090c]/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-[#08090c]/35" />

      {/* Orange studio lighting */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-[#ff5a00]/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#ff5a00]/10 blur-[120px]" />

      {/* Main responsive layout */}
      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-76px)] w-full max-w-[1600px] grid-cols-1 items-center gap-5 px-5 pb-8 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.78fr_0.88fr] lg:gap-3 lg:px-10 lg:pb-24 lg:pt-8 xl:px-12">

        {/* LEFT: Company introduction */}
        <div className="relative z-20 min-w-0 lg:py-8">

          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <Image
              src="/og-image.jpg"
              alt="Sri Krishna Films logo"
              width={58}
              height={58}
              priority
              className="h-11 w-11 shrink-0 rounded-full border border-[#ff5a00]/70 object-cover sm:h-14 sm:w-14"
            />

            <div className="min-w-0">
              <h2 className="font-[var(--font-display)] text-base font-bold leading-tight sm:text-xl xl:text-2xl">
                {hero.company_name || "Sri Krishna Films & Advertisement Industry"}
              </h2>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#ff9a3c] sm:text-[10px]">
                {hero.company_tagline || "Advertisement Industry"}
              </p>
            </div>
          </div>

          {hero.badge && (
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#ff5a00]/60 bg-black/40 px-3 py-2 sm:mb-6">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff5a00]" />
              <span className="text-xs text-gray-200 sm:text-sm">
                {hero.badge}
              </span>
            </div>
          )}

          <h1 className="max-w-[650px] font-[var(--font-display)] text-[clamp(2rem,3.45vw,4rem)] font-black uppercase leading-[1.04] tracking-[-0.035em]">
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

          {hero.description && (
            <p className="mt-4 max-w-[520px] text-sm leading-6 text-gray-300 sm:mt-5 sm:text-base sm:leading-7">
              {hero.description}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
            <a
              href={hero.button_link || "#contact"}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#ff5a00] px-5 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#e94f00] sm:px-6 sm:text-sm"
            >
              {hero.button_text || "Contact Us"}
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#services"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/35 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-[#ff5a00] sm:px-6 sm:text-sm"
            >
              Our Services
              <ArrowRight
                size={17}
                className="text-[#ff5a00] transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* MIDDLE: Founder portrait — no name or nameplate */}
        <div className="relative order-last flex min-h-[340px] items-end justify-center sm:min-h-[430px] lg:order-none lg:h-full lg:min-h-[620px]">
          <div className="pointer-events-none absolute bottom-5 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#ff5a00]/15 blur-[85px] sm:h-64 sm:w-64" />

          <Image
            src="/founder-hero.png"
            alt="Sri Krishna Films founder"
            width={700}
            height={1100}
            priority
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 55vw, 35vw"
            className="relative z-10 h-auto max-h-[580px] w-auto max-w-full object-contain object-bottom sm:max-h-[680px] lg:absolute lg:bottom-0 lg:left-1/2 lg:max-h-[min(78svh,780px)] lg:w-[min(38vw,540px)] lg:max-w-none lg:-translate-x-1/2"
          />
        </div>

        {/* RIGHT: Services */}
        <div className="relative z-20 min-w-0 py-3 lg:py-8">
          <div className="mb-5 sm:mb-7">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#ff5a00]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#ff9a3c]">
                What We Create
              </p>
            </div>

            <h2 className="font-[var(--font-display)] text-3xl font-bold leading-tight sm:text-4xl">
              Ideas into
              <span className="block text-[#ff5a00]">
                Visual Impact.
              </span>
            </h2>
          </div>

          <div className="divide-y divide-white/15 border-y border-white/15">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group flex items-center gap-3 py-3.5 sm:gap-4 sm:py-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#ff5a00]/50 bg-[#ff5a00]/[0.07] transition-colors group-hover:bg-[#ff5a00]/15 sm:h-11 sm:w-11">
                    <Icon
                      size={19}
                      strokeWidth={1.5}
                      className="text-[#ff7a32]"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-white sm:text-base">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                      {service.subtitle}
                    </p>
                  </div>

                  <span className="text-[10px] font-medium tracking-widest text-[#ff7a32]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-5 border-l-2 border-[#ff5a00] bg-black/25 px-4 py-3 text-sm leading-6 text-gray-300">
            Every brand has a story. We help bring it to life through creative ideas and professional production.
          </p>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#ff5a00] to-transparent opacity-80" />
    </section>
  );
}
