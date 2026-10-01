
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
  Package,
  ArrowRight,
  X,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Facility = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tag: string;
};

const facilities: Facility[] = [
  {
    number: "01",
    title: "Film Studio",
    description:
      "Professional indoor studio for commercials, interviews, reels and cinematic productions.",
    icon: Clapperboard,
    tag: "STUDIO",
  },
  {
    number: "02",
    title: "Green Screen Studio",
    description:
      "Chroma-key production for virtual backgrounds, VFX and creative video content.",
    icon: Scan,
    tag: "CHROMA",
  },
  {
    number: "03",
    title: "4K Camera Setup",
    description:
      "Professional camera equipment for detailed visuals and cinematic video production.",
    icon: Camera,
    tag: "CAMERA",
  },
  {
    number: "04",
    title: "Professional Lighting",
    description:
      "Creative lighting setups for balanced exposure and professional visual quality.",
    icon: Lightbulb,
    tag: "LIGHTING",
  },
  {
    number: "05",
    title: "Audio Recording",
    description:
      "Clear voice recording and sound capture for advertisements and corporate films.",
    icon: Mic,
    tag: "AUDIO",
  },
  {
    number: "06",
    title: "Video Editing & VFX",
    description:
      "Video editing, colour grading, motion graphics and visual effects.",
    icon: MonitorPlay,
    tag: "POST PRODUCTION",
  },
  {
    number: "07",
    title: "Drone Shoot",
    description:
      "Aerial photography and cinematic drone videography for suitable projects.",
    icon: Plane,
    tag: "AERIAL",
  },
  {
    number: "08",
    title: "Creative Production",
    description:
      "Concept development, scripting, direction and coordinated production services.",
    icon: Settings,
    tag: "PRODUCTION",
  },
  {
    number: "09",
    title: "Product Shoot",
    description:
      "Product photography and commercial visuals for brands and businesses.",
    icon: Package,
    tag: "PRODUCTS",
  },
];

export default function ProductionFacilities() {
  const [selectedFacility, setSelectedFacility] =
    useState<Facility | null>(null);

  return (
    <section
      id="production-facilities"
      aria-labelledby="facilities-heading"
      className="relative overflow-hidden border-y border-white/10 bg-black py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-600/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-orange-500/[0.06] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/70 bg-orange-500/[0.06] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-orange-400 sm:text-xs">
            <Sparkles size={14} />
            Production Facilities
          </span>

          <h2
            id="facilities-heading"
            className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Professional Studio{" "}
            <span className="text-orange-500">Infrastructure</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 bg-orange-500" />

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            From filming and photography to editing and post-production,
            our facilities support a wide range of advertising and
            commercial video projects.
          </p>
        </div>

        {/* Facilities grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <button
                key={facility.number}
                type="button"
                onClick={() => setSelectedFacility(facility)}
                className="facility-card group relative flex min-h-[245px] min-w-0 flex-col overflow-hidden rounded-xl border border-orange-500/50 bg-[#090909] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-[0_0_28px_rgba(255,90,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:p-6"
                style={{
                  animationDelay: `${index * 90}ms`,
                }}
              >
                {/* Animated corner accent */}
                <span className="absolute right-0 top-0 h-16 w-16 border-r border-t border-orange-500/30 transition-all duration-300 group-hover:h-24 group-hover:w-24 group-hover:border-orange-400" />

                <div className="flex items-start justify-between gap-4">
                  {/* Animated icon */}
                  <div className="facility-icon relative flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-xl border border-orange-500/60 bg-orange-500/[0.07] text-orange-500 transition-all duration-300 group-hover:scale-105 group-hover:border-orange-400 group-hover:bg-orange-500 group-hover:text-black">
                    <Icon
                      size={32}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="pointer-events-none absolute inset-0 rounded-xl border border-orange-400/0 transition-all duration-300 group-hover:scale-125 group-hover:border-orange-400/40" />
                  </div>

                  <span className="font-mono text-2xl font-bold text-white/20 transition-colors group-hover:text-orange-500/70">
                    {facility.number}
                  </span>
                </div>

                <div className="mt-5 flex flex-1 flex-col">
                  <span className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-orange-500/80">
                    {facility.tag}
                  </span>

                  <h3 className="text-lg font-bold leading-snug text-white transition-colors group-hover:text-orange-400 sm:text-xl">
                    {facility.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 transition-colors group-hover:text-gray-300">
                    Explore Facility
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-500/60 text-orange-500 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-orange-500 group-hover:text-black">
                    <ArrowRight size={16} />
                  </span>
                </div>

                {/* Bottom animated line */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
              </button>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-5 rounded-xl border border-orange-500/50 bg-[#090909] p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-orange-500">
              Complete Production Support
            </p>

            <h3 className="mt-2 text-xl font-extrabold leading-tight sm:text-2xl">
              Everything You Need{" "}
              <span className="text-orange-500">Under One Roof</span>
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
              Discuss your next advertisement, product shoot,
              corporate film or creative video project with our team.
            </p>
          </div>

          <a
            href="https://wa.me/916204731481?text=Hello%20Sri%20Krishna%20Films%2C%20I%20want%20to%20discuss%20a%20production%20project."
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-md border border-orange-500 bg-orange-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-all hover:bg-transparent hover:text-orange-500"
          >
            Discuss Your Project
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Facility information modal */}
      {selectedFacility && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedFacility(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="facility-modal-heading"
            className="relative w-full max-w-lg rounded-xl border border-orange-500/60 bg-[#101010] p-6 shadow-[0_0_40px_rgba(255,90,0,0.12)] sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setSelectedFacility(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-colors hover:border-orange-500 hover:text-orange-500"
            >
              <X size={19} />
            </button>

            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-orange-500/60 bg-orange-500/10 text-orange-500">
              <selectedFacility.icon size={32} strokeWidth={1.7} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Facility {selectedFacility.number}
            </p>

            <h3
              id="facility-modal-heading"
              className="mt-2 pr-8 text-2xl font-extrabold text-white sm:text-3xl"
            >
              {selectedFacility.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              {selectedFacility.description}
            </p>

            <a
              href={`https://wa.me/916204731481?text=${encodeURIComponent(
                `Hello Sri Krishna Films, I would like to enquire about ${selectedFacility.title}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-orange-400"
            >
              Enquire on WhatsApp
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      )}

      {/* Entrance animation and reduced-motion accessibility */}
      <style jsx>{`
        .facility-card {
          animation: facility-enter 650ms ease both;
        }

        @keyframes facility-enter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .facility-card {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
