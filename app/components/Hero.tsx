
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Clapperboard, Camera, Video, Lightbulb, Users } from "lucide-react";
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
      <section className="flex min-h-[80svh] items-center justify-center bg-[#08090c]">
        <div className="h-9 w-9 animate-spin rounded-full border-2 border-white/20 border-t-[#ff5a00]" />
      </section>
    );
  }

  const highlights = [
    { icon: Clapperboard, title: "Film Production", detail: "Stories with impact" },
    { icon: Camera, title: "Commercial Ads", detail: "Built for brands" },
    { icon: Video, title: "AI Video Ads", detail: "Ideas into visuals" },
    { icon: Lightbulb, title: "Creative Direction", detail: "Concept to screen" },
    { icon: Users, title: "Brand Promotion", detail: "Connect with people" },
  ];

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#08090c] text-white">
      {/* Cinematic background */}
      <Image
        src={hero.background_image || "/hero-bg.jpg"}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#08090c]/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#08090c]/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-black/30" />

      {/* Subtle orange lighting */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[#ff5a00]/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#ff5a00]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-12 lg:pb-20 lg:pt-16">
        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[1.05fr_0.85fr_0.65fr] lg:gap-6 xl:gap-10">

          {/* LEFT: Company identity and headline */}
          <div className="order-1 min-w-0 py-3 lg:py-8">
            <div className="mb-6 flex items-center gap-3 sm:mb-8">
              <Image
                src="/og-image.jpg"
                alt="Sri Krishna Films logo"
                width={60}
                height={60}
                priority
                className="h-12 w-12 shrink-0 rounded-full border border-[#ff5a00]/70 object-cover sm:h-14 sm:w-14"
              />

              <div className="min-w-0">
                <p className="font-[var(--font-display)] text-base font-bold leading-tight sm:text-xl lg:text-2xl">
                  {hero.company_name || "Sri Krishna Films"}
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#ff9a3c] sm:text-[10px] sm:tracking-[0.24em]">
                  {hero.company_tagline || "Advertisement Industry"}
                </p>
              </div>
            </div>

            {hero.badge && (
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#ff5a00]/50 bg-black/40 px-3.5 py-2 backdrop-blur-sm sm:mb-7">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff5a00]" />
                <span className="text-xs leading-relaxed text-gray-200 sm:text-sm">
                  {hero.badge}
                </span>
              </div>
            )}

            <div className="mb-5 space-y-0.5 font-[var(--font-display)] text-[clamp(2.25rem,5vw,5rem)] font-black uppercase leading-[0.98] tracking-[-0.035em] sm:mb-6 lg:text-[clamp(2.5rem,4.1vw,4.6rem)]">
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
                <span className="block text-[#ff7130]">
                  {hero.hero_title_line4}
                </span>
              )}
            </div>

            {hero.description && (
              <p className="max-w-xl text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
                {hero.description}
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              <a
                href={hero.button_link || "#contact"}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#ff5a00] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#e94f00] sm:px-6 sm:text-sm"
              >
                {hero.button_text || "Get a Quote"}
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#services"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/35 bg-black/30 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:border-[#ff5a00] hover:text-[#ff9a3c] sm:px-6 sm:text-sm"
              >
                Our Services
                <ArrowRight
                  size={17}
                  className="text-[#ff5a00] transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-5 text-[10px] font-medium uppercase tracking-[0.13em] text-gray-400 sm:mt-9 sm:gap-x-6 sm:text-xs">
              <span>Film Production</span>
              <span>AI Video</span>
              <span>Brand Ads</span>
            </div>
          </div>

          {/* CENTER: Founder portrait */}
          <div className="relative order-2 mx-auto flex w-full max-w-[430px] items-end justify-center lg:min-h-[620px] lg:max-w-none">
            <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-40 w-4/5 -translate-x-1/2 rounded-full bg-[#ff5a00]/20 blur-[65px] sm:h-56" />

            <div className="pointer-events-none absolute bottom-[4%] left-1/2 h-px w-4/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff5a00]/70 to-transparent" />

            <Image
              src="/biplob-roy-founder.png"
              alt="Biplob Roy, Founder and Director of Sri Krishna Films"
              width={650}
              height={900}
              priority
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 55vw, 35vw"
              className="relative z-10 h-auto max-h-[440px] w-full object-contain object-bottom sm:max-h-[540px] lg:max-h-[700px]"
            />

            {/* Portrait caption */}
            <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap border border-white/15 bg-black/75 px-4 py-2 text-center backdrop-blur-md sm:bottom-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white sm:text-base">
                Biplob Roy
              </p>
              <p className="mt-0.5 text-[9px] uppercase tracking-[0.18em] text-[#ff9a3c] sm:text-[10px]">
                Founder &amp; Director
              </p>
            </div>
          </div>

          {/* RIGHT: Creative services and brand highlights */}
          <div className="order-3 min-w-0 py-4 lg:py-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#ff5a00]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff9a3c] sm:text-xs">
                What We Create
              </p>
            </div>

            <h2 className="mb-6 max-w-sm font-[var(--font-display)] text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Ideas into
              <span className="block text-[#ff5a00]">Visual Impact.</span>
            </h2>

            <div className="space-y-0">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-center gap-3 border-b border-white/10 py-3.5 transition-colors hover:border-[#ff5a00]/60 sm:gap-4 sm:py-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#ff5a00]/45 bg-[#ff5a00]/5 text-[#ff7a32] transition-colors group-hover:bg-[#ff5a00] group-hover:text-white sm:h-11 sm:w-11">
                      <Icon size={19} strokeWidth={1.6} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-white sm:text-base">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                        {item.detail}
                      </p>
                    </div>

                    <span className="text-xs text-[#ff5a00]">
                      0{index + 1}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 border-l-2 border-[#ff5a00] bg-white/[0.035] px-4 py-3.5 sm:mt-8 sm:px-5 sm:py-4">
              <p className="text-sm leading-6 text-gray-300">
                Every brand has a story. We help bring it to life through
                creative ideas and professional production.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#ff9a3c] transition hover:text-white sm:mt-6 sm:text-sm"
            >
              Let&apos;s Create Together
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        {/* Bottom experience strip */}
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-[#ff5a00]/40 bg-[#ff5a00]/20 sm:mt-14 sm:grid-cols-4">
          {[
            { number: "1000+", label: "Projects Completed" },
            { number: "500+", label: "Happy Clients" },
            { number: "27+", label: "Years of Experience" },
            { number: "PAN India", label: "Service Reach" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#08090c]/95 px-3 py-4 text-center sm:px-5 sm:py-5"
            >
              <p className="font-[var(--font-display)] text-xl font-bold text-[#ff5a00] sm:text-2xl lg:text-3xl">
                {stat.number}
              </p>
              <p className="mt-1 text-[10px] text-gray-300 sm:text-xs lg:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
