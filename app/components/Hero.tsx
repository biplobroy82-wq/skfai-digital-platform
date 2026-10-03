"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Volume2,
  VolumeX,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(true);

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

  const toggleVideoSound = async () => {
    const video = videoRef.current;

    if (!video) return;

    const nextMutedState = !isMuted;

    video.muted = nextMutedState;
    setIsMuted(nextMutedState);

    try {
      await video.play();
    } catch (error) {
      console.error("Video playback issue:", error);
    }
  };

  if (loading) {
    return (
      <section className="flex min-h-[calc(100svh-76px)] items-center justify-center bg-[#08090b] px-4 text-center">
        <div className="h-9 w-9 animate-spin rounded-full border-2 border-white/20 border-t-[#ff5a00]" />
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#08090b]">
      {/* Very subtle background image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{
          backgroundImage: `url(${hero.background_image || "/hero-bg.jpg"})`,
        }}
      />

      {/* Dark cinematic overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#08090b] via-[#08090b]/95 to-[#111]/90" />

      {/* Main Hero */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-76px)] max-w-[1700px] items-center px-5 py-12 sm:px-8 sm:py-16 lg:px-10 xl:px-14 2xl:px-16">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[48%_52%] lg:gap-8 xl:grid-cols-[46%_54%] xl:gap-10">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="relative z-10 w-full max-w-[760px]">

            {/* Orange Accent */}
            <div className="mb-7 h-1 w-16 bg-[#ff5a00] sm:mb-8 sm:w-20" />

            {/* Company Identity */}
            <div className="mb-6 flex min-w-0 items-center gap-3 sm:mb-7 sm:gap-4">
              <Image
                src="/og-image.jpg"
                alt="Sri Krishna Films logo"
                width={64}
                height={64}
                priority
                className="h-12 w-12 shrink-0 rounded-full border border-[#ff5a00]/70 object-cover sm:h-14 sm:w-14"
              />

              <div className="min-w-0">
                <h2 className="font-[var(--font-display)] text-lg font-bold leading-tight tracking-wide text-white sm:text-2xl lg:text-[28px]">
                  {hero.company_name || "Sri Krishna Films"}
                </h2>

                <p className="mt-1 text-[9px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-[#ff9a3c] sm:text-[11px] sm:tracking-[0.25em]">
                  {hero.company_tagline || "Advertisement Industry"}
                </p>
              </div>
            </div>

            {/* Experience Badge */}
            {hero.badge && (
              <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#ff5a00]/60 bg-black/40 px-3.5 py-2 backdrop-blur-sm sm:mb-7">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff5a00] shadow-[0_0_10px_rgba(255,90,0,0.8)]" />

                <span className="text-xs font-medium leading-relaxed text-white sm:text-sm">
                  {hero.badge}
                </span>
              </div>
            )}

            {/* Main Heading */}
            <h1 className="w-full font-[var(--font-display)] text-[clamp(2.2rem,4.2vw,4.7rem)] font-black uppercase leading-[0.94] tracking-[-0.04em]">
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
              <p className="mt-6 max-w-[680px] text-sm leading-6 text-gray-300 sm:mt-7 sm:text-base sm:leading-7 lg:text-lg">
                {hero.description}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
              <a
                href={hero.button_link || "#contact"}
                className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-sm bg-[#ff5a00] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_30px_rgba(255,90,0,0.18)] transition-all duration-300 hover:bg-[#e94f00] hover:shadow-[0_10px_35px_rgba(255,90,0,0.3)] sm:px-7"
              >
                <span>{hero.button_text || "GET A QUOTE"}</span>

                <ArrowRight
                  size={18}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#services"
                className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-sm border border-white/25 bg-white/[0.03] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-[#ff5a00] hover:bg-white/[0.06] hover:text-[#ff9a3c] sm:px-7"
              >
                Our Services

                <ArrowRight
                  size={18}
                  className="shrink-0 text-[#ff5a00] transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT VIDEO FRAME
          ====================================================== */}
          <div className="relative z-10 w-full lg:pl-2 xl:pl-5">

            {/* Outer Glow */}
            <div className="absolute -inset-2 rounded-[22px] bg-[#ff5a00]/10 blur-2xl" />

            {/* Video Frame */}
            <div className="relative overflow-hidden rounded-2xl border border-[#ff5a00]/75 bg-black p-1.5 shadow-[0_25px_80px_rgba(0,0,0,0.65)] sm:p-2">

              {/* Inner Frame */}
              <div className="relative aspect-video overflow-hidden rounded-xl bg-[#050505]">

                {/* Video */}
                <video
                  ref={videoRef}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  preload="auto"
                  poster={hero.background_image || "/hero-bg.jpg"}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  aria-label="Sri Krishna Films cinematic production showreel"
                >
                  <source
                    src="/hero-intro.mp4"
                    type="video/mp4"
                  />
                </video>

                {/* Video Cinematic Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Top Video Label */}
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:left-5 sm:top-5 sm:text-xs">
                  Sri Krishna Films
                </div>

                {/* Sound Button */}
                <button
                  type="button"
                  onClick={toggleVideoSound}
                  aria-label={
                    isMuted
                      ? "Turn video sound on"
                      : "Turn video sound off"
                  }
                  aria-pressed={!isMuted}
                  title={
                    isMuted
                      ? "Turn Sound On"
                      : "Turn Sound Off"
                  }
                  className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/65 px-3.5 py-2.5 text-xs font-bold text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#ff5a00] hover:bg-black/85 sm:right-5 sm:top-5 sm:px-4 sm:py-3 sm:text-sm"
                >
                  {isMuted ? (
                    <>
                      <VolumeX
                        size={17}
                        className="text-gray-300"
                      />
                      <span>Sound Off</span>
                    </>
                  ) : (
                    <>
                      <Volume2
                        size={17}
                        className="text-[#ff9a3c]"
                      />
                      <span>Sound On</span>
                    </>
                  )}
                </button>

                {/* Bottom Video Caption */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between sm:bottom-5 sm:left-5 sm:right-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#ff9a3c] sm:text-[10px]">
                      Production Showreel
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white sm:text-sm">
                      Films • Advertising • Visual Stories
                    </p>
                  </div>

                  <div className="hidden h-2 w-2 rounded-full bg-[#ff5a00] shadow-[0_0_15px_rgba(255,90,0,0.9)] sm:block" />
                </div>
              </div>
            </div>

            {/* Small Orange Corner Accent */}
            <div className="absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 border-[#ff5a00]" />
            <div className="absolute -right-2 -top-2 h-8 w-8 border-r-2 border-t-2 border-[#ff5a00]" />
          </div>
        </div>
      </div>

      {/* Bottom Transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-[#08090b] to-transparent sm:h-24" />

      {/* Thin Orange Hero Border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-2 z-30 border border-[#ff5a00]/70 sm:inset-3"
      />
    </section>
  );
}
