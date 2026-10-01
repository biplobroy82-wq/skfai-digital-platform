
"use client";

import { useState } from "react";
import {
  Clapperboard,
  Scan,
  Camera,
  Lightbulb,
  Mic,
  MonitorPlay,
  Plane,
  Settings,
  Users,
  Play,
  Maximize2,
  ArrowRight,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Facility = {
  title: string;
  description: string;
  icon: LucideIcon;
  video: string;
  number: string;
};

const facilities: Facility[] = [
  {
    number: "01",
    title: "Film Studio",
    description:
      "Professional indoor studio for commercials, interviews, reels and cinematic productions.",
    icon: Clapperboard,
    video: "/videos/film-studio.mp4",
  },
  {
    number: "02",
    title: "Green Screen Studio",
    description:
      "Premium chroma setup for virtual backgrounds, VFX and creative video production.",
    icon: Scan,
    video: "/videos/green-screen.mp4",
  },
  {
    number: "03",
    title: "4K Camera Setup",
    description:
      "Professional cameras with cinematic lenses for high-quality video production.",
    icon: Camera,
    video: "/videos/camera-setup.mp4",
  },
  {
    number: "04",
    title: "Professional Lighting",
    description:
      "Studio lighting setup for balanced, soft and premium cinematic visuals.",
    icon: Lightbulb,
    video: "/videos/studio-lighting.mp4",
  },
  {
    number: "05",
    title: "Audio Recording",
    description:
      "Crystal-clear voice recording with professional microphones and audio equipment.",
    icon: Mic,
    video: "/videos/audio-recording.mp4",
  },
  {
    number: "06",
    title: "Video Editing & VFX",
    description:
      "Creative editing, colour grading, motion graphics and cinematic visual effects.",
    icon: MonitorPlay,
    video: "/videos/video-editing.mp4",
  },
  {
    number: "07",
    title: "Drone Shoot",
    description:
      "Aerial photography and cinematic drone videography for events and commercial projects.",
    icon: Plane,
    video: "/videos/drone-shoot.mp4",
  },
  {
    number: "08",
    title: "Creative Production",
    description:
      "Complete concept development, scripting, direction and post-production under one roof.",
    icon: Settings,
    video: "/videos/creative-production.mp4",
  },
  {
    number: "09",
    title: "Product Shoot",
    description:
      "Professional product photography and commercial video production.",
    icon: Users,
    video: "/videos/product-shoot.mp4",
  },
];

export default function ProductionFacilities() {
  const [activeVideo, setActiveVideo] = useState<Facility | null>(null);

  return (
    <section
      id="production-facilities"
      className="relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Subtle orange studio glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-96 -translate-x-1/2 rounded-full bg-orange-600/[0.06] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-7 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
          <span className="inline-flex rounded-full border border-orange-500 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-xs">
            Production Facilities
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Professional Studio{" "}
            <span className="text-orange-500">Infrastructure</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-orange-500" />

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
            From pre-production to final delivery, Sri Krishna Films
            & Advertisement Industry offers complete filming,
            photography, editing and digital production services
            with modern equipment and experienced professionals.
          </p>
        </div>

        {/* Facility cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {facilities.map((facility) => {
            const Icon = facility.icon;

            return (
              <article
                key={facility.number}
                className="group relative grid min-w-0 grid-cols-1 overflow-hidden rounded-xl border border-orange-500/70 bg-[#080808] shadow-[0_0_15px_rgba(255,90,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-[0_0_28px_rgba(255,90,0,0.16)] sm:grid-cols-[1fr_1fr]"
              >
                {/* Card text */}
                <div className="relative flex min-w-0 flex-col justify-center p-4 sm:p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-orange-500/70 bg-orange-500/10 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-black">
                      <Icon size={27} strokeWidth={2} />
                    </div>

                    <span className="text-xl font-extrabold text-orange-500">
                      {facility.number}
                    </span>
                  </div>

                  <div className="ml-1 mt-4 h-px w-8 bg-orange-500/70" />

                  <h3 className="mt-3 text-lg font-bold leading-snug text-white sm:text-xl">
                    {facility.title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-gray-400">
                    {facility.description}
                  </p>
                </div>

                {/* Video preview */}
                <div className="relative min-h-[190px] overflow-hidden border-t border-white/10 bg-[#111] sm:min-h-[220px] sm:border-l sm:border-t-0 sm:border-white/10">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={facility.video}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={`${facility.title} video preview`}
                  />

                  {/* Dark overlay for controls */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Fullscreen preview */}
                  <button
                    type="button"
                    onClick={() => setActiveVideo(facility)}
                    aria-label={`Play ${facility.title} video`}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-black/60 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-orange-500 hover:bg-orange-500">
                      <Play size={21} fill="currentColor" />
                    </span>
                  </button>

                  <span className="absolute bottom-3 left-3 rounded border border-white/20 bg-black/80 px-2 py-1 text-[10px] font-semibold text-white">
                    PREVIEW
                  </span>

                  <button
                    type="button"
                    onClick={() => setActiveVideo(facility)}
                    aria-label={`View ${facility.title} fullscreen`}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-md border border-white/30 bg-black/70 text-white transition-colors hover:border-orange-500 hover:text-orange-400"
                  >
                    <Maximize2 size={17} />
                  </button>

                  {/* Orange arrow */}
                  <button
                    type="button"
                    onClick={() => setActiveVideo(facility)}
                    aria-label={`View ${facility.title}`}
                    className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-orange-500 bg-black/80 text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-black"
                  >
                    <ArrowRight size={22} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-7 grid gap-6 rounded-xl border border-orange-500/80 bg-[#080808] p-5 shadow-[0_0_20px_rgba(255,90,0,0.08)] sm:p-7 lg:grid-cols-[1.05fr_1fr_auto] lg:items-center lg:gap-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-orange-500 text-orange-500 shadow-[0_0_18px_rgba(255,90,0,0.2)]">
              <Play size={23} fill="currentColor" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-500">
                Complete Solution
              </p>

              <h3 className="mt-2 text-xl font-extrabold leading-tight sm:text-2xl">
                Everything You Need{" "}
                <span className="text-orange-500">Under One Roof</span>
              </h3>
            </div>
          </div>

          <div className="border-l-2 border-orange-500/80 pl-4">
            <p className="text-sm leading-6 text-gray-400">
              Whether you need a TV commercial, corporate film,
              product shoot, music video, AI advertisement, drone
              shoot or a complete digital marketing campaign, our
              team delivers creative solutions tailored to your goals.
            </p>
          </div>

          <a
            href="https://wa.me/916204731481?text=Hello%20Sri%20Krishna%20Films%2C%20I%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-3 whitespace-nowrap rounded-md border border-orange-500 bg-orange-500/5 px-5 py-3 text-sm font-bold uppercase tracking-wide text-orange-500 transition-all hover:bg-orange-500 hover:text-black"
          >
            Discuss Your Project
            <ArrowRight size={19} />
          </a>
        </div>
      </div>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-white sm:text-2xl">
                <span className="mr-2 text-orange-500">
                  {activeVideo.number}
                </span>
                {activeVideo.title}
              </h3>

              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-black"
              >
                <X size={22} />
              </button>
            </div>

            <video
              key={activeVideo.video}
              src={activeVideo.video}
              className="max-h-[78vh] w-full rounded-lg border border-orange-500/60 bg-black"
              controls
              autoPlay
              playsInline
            />

            <p className="mt-3 text-sm text-gray-400">
              Sri Krishna Films & Advertisement Industry
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
