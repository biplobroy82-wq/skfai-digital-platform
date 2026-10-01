
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
  Play,
} from "lucide-react";

type Facility = {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  details: string;
};

const facilities: Facility[] = [
  {
    number: "01",
    title: "Film Studio",
    description:
      "Professional indoor studio for commercials, interviews, reels and cinematic productions.",
    icon: Clapperboard,
    details:
      "Indoor production space for advertisements, interviews, reels, corporate films and professional video shoots.",
  },
  {
    number: "02",
    title: "Green Screen Studio",
    description:
      "Premium chroma setup for virtual backgrounds, VFX and creative video production.",
    icon: Scan,
    details:
      "Green screen production for virtual locations, product presentations, presenter videos and visual effects.",
  },
  {
    number: "03",
    title: "4K Camera Setup",
    description:
      "Professional cameras with cinematic lenses for high-quality video production.",
    icon: Camera,
    details:
      "Professional camera setups for commercial shoots, interviews, product videos and cinematic visuals.",
  },
  {
    number: "04",
    title: "Professional Lighting",
    description:
      "Studio lighting setup for balanced, soft and premium cinematic visuals.",
    icon: Lightbulb,
    details:
      "Lighting arrangements for portraits, product photography, interviews and commercial video production.",
  },
  {
    number: "05",
    title: "Audio Recording",
    description:
      "Crystal-clear voice recording with professional microphones and audio equipment.",
    icon: Mic,
    details:
      "Voice-over recording, dialogue recording, narration and audio support for advertisements and films.",
  },
  {
    number: "06",
    title: "Video Editing & VFX",
    description:
      "Creative editing, colour grading, motion graphics and cinematic visual effects.",
    icon: MonitorPlay,
    details:
      "Post-production services including editing, colour correction, motion graphics and visual effects.",
  },
  {
    number: "07",
    title: "Drone Shoot",
    description:
      "Aerial photography and cinematic drone videography for events and commercial projects.",
    icon: Plane,
    details:
      "Aerial visuals for real estate, events, outdoor locations and commercial productions, subject to applicable permissions.",
  },
  {
    number: "08",
    title: "Creative Production",
    description:
      "Complete concept development, scripting, direction and post-production under one roof.",
    icon: Settings,
    details:
      "End-to-end creative production support, from concept and script development to filming and final delivery.",
  },
  {
    number: "09",
    title: "Product Shoot",
    description:
      "Professional product photography and commercial video production.",
    icon: Package,
    details:
      "Product-focused photography and videos for e-commerce, packaging, digital advertisements and brand promotions.",
  },
];

function FacilityArt({ type }: { type: number }) {
  const common = {
    fill: "none",
    stroke: "#ff6500",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 300 240"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`panel-${type}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10253a" />
          <stop offset="100%" stopColor="#30170e" />
        </linearGradient>
        <linearGradient id={`glow-${type}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffb44c" />
          <stop offset="100%" stopColor="#ff6500" />
        </linearGradient>
        <radialGradient id={`halo-${type}`}>
          <stop offset="0%" stopColor="#ff6500" stopOpacity=".24" />
          <stop offset="100%" stopColor="#ff6500" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="300" height="240" fill={`url(#panel-${type})`} />
      <rect width="300" height="240" fill={`url(#halo-${type})`} />

      {Array.from({ length: 7 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 50}
          y1="0"
          x2={i * 50}
          y2="240"
          stroke="#8da3b8"
          strokeOpacity=".08"
        />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 48}
          x2="300"
          y2={i * 48}
          stroke="#8da3b8"
          strokeOpacity=".08"
        />
      ))}

      <ellipse
        cx="150"
        cy="121"
        rx="108"
        ry="85"
        stroke="#ff6500"
        strokeOpacity=".25"
      />

      {type === 0 && (
        <>
          <path d="M44 202L87 120H213L256 202" stroke="#23394b" strokeWidth="4" />
          <path d="M68 202L111 120M232 202L189 120" stroke="#23394b" strokeWidth="3" />
          <rect x="104" y="72" width="92" height="99" rx="17" fill="#091421" stroke="#ff6500" />
          <rect x="119" y="87" width="62" height="47" rx="5" {...common} />
          <path d="M131 87V78H169V87" {...common} />
          <path d="M135 171V192H165V171" stroke="#284052" strokeWidth="4" />
          <path d="M48 46L87 58L78 91L39 79Z" fill="#fff0c6" stroke="#ffb44c" />
          <path d="M213 58L252 46L261 79L222 91Z" fill="#fff0c6" stroke="#ffb44c" />
          <path d="M57 45L65 26H91L83 53M243 45L235 26H209L217 53" {...common} />
          <circle cx="150" cy="111" r="8" fill="#ff6500" />
        </>
      )}

      {type === 1 && (
        <>
          <rect x="35" y="42" width="230" height="155" fill="#00a95c" />
          <path d="M35 42H265V197H35Z" stroke="#21e48b" strokeWidth="3" />
          <rect x="91" y="66" width="118" height="106" rx="18" fill="#0c1a29" stroke="#ff6500" />
          <path d="M132 103H143V114M168 103H157V114M132 139H143V128M168 139H157V128" {...common} strokeWidth="3" />
          <path d="M150 172V220" stroke="#142a35" strokeWidth="5" />
          <path d="M46 32L66 17L84 43L64 58Z" fill="#fff0c6" stroke="#ffb44c" />
          <path d="M254 32L234 17L216 43L236 58Z" fill="#fff0c6" stroke="#ffb44c" />
          <path d="M45 32L35 20M255 32L265 20" {...common} />
        </>
      )}

      {type === 2 && (
        <>
          <path d="M57 190L82 123M243 190L218 123" stroke="#263c50" strokeWidth="5" />
          <path d="M85 123L67 203M215 123L233 203" stroke="#263c50" strokeWidth="3" />
          <rect x="91" y="69" width="118" height="100" rx="18" fill="#091421" stroke="#ff6500" />
          <rect x="105" y="83" width="90" height="72" rx="9" stroke="#435c70" />
          <circle cx="126" cy="119" r="27" fill="#10283b" stroke="#ff6500" strokeWidth="3" />
          <circle cx="126" cy="119" r="16" stroke="#6f8ca1" strokeWidth="3" />
          <circle cx="126" cy="119" r="7" fill="#ff8b20" />
          <circle cx="174" cy="120" r="15" stroke="#ff6500" strokeWidth="3" />
          <path d="M151 67V54H184V67" {...common} />
          <path d="M99 174H201M110 184H190" stroke="#34495a" strokeWidth="3" />
        </>
      )}

      {type === 3 && (
        <>
          <path d="M46 200L73 103L103 113L76 200" fill="#1b3044" stroke="#ff6500" />
          <path d="M254 200L227 103L197 113L224 200" fill="#1b3044" stroke="#ff6500" />
          <path d="M72 103L99 110M228 103L201 110" {...common} />
          <rect x="106" y="84" width="88" height="103" rx="17" fill="#0b1826" stroke="#ff6500" />
          <path d="M150 105C134 105 130 125 143 135L145 145H155L157 135C170 125 166 105 150 105Z" {...common} strokeWidth="3" />
          <path d="M142 154H158M145 162H155" {...common} />
          <path d="M61 55L100 66L90 101L51 90Z" fill="#fff0c6" stroke="#ffb44c" />
          <path d="M239 55L200 66L210 101L249 90Z" fill="#fff0c6" stroke="#ffb44c" />
          <path d="M78 200V225M222 200V225" stroke="#253a4c" strokeWidth="5" />
        </>
      )}

      {type === 4 && (
        <>
          <path d="M40 85C70 85 65 157 40 157M260 85C230 85 235 157 260 157" {...common} />
          <path d="M51 75C78 105 78 137 51 167M249 75C222 105 222 137 249 167" stroke="#ff6500" strokeOpacity=".55" />
          <rect x="103" y="68" width="94" height="112" rx="20" fill="#0b1928" stroke="#ff6500" />
          <rect x="128" y="50" width="44" height="24" rx="12" fill="#263c4e" stroke="#ffb44c" />
          <rect x="136" y="43" width="28" height="10" rx="5" fill="#d3dce0" />
          <rect x="137" y="89" width="26" height="53" rx="13" stroke="#ff6500" strokeWidth="3" />
          <path d="M126 121V128C126 161 174 161 174 128V121" {...common} strokeWidth="3" />
          <path d="M150 160V190M132 190H168" {...common} />
          <path d="M150 190V225" stroke="#263d50" strokeWidth="4" />
        </>
      )}

      {type === 5 && (
        <>
          <rect x="25" y="44" width="99" height="72" rx="4" fill="#10263b" stroke="#456178" strokeWidth="2" />
          <rect x="35" y="54" width="24" height="8" fill="#ff6500" />
          <rect x="62" y="54" width="22" height="8" fill="#1488ba" />
          <rect x="87" y="54" width="26" height="8" fill="#334c62" />
          <path d="M35 79H113M35 89H113M35 99H113" stroke="#188cc1" strokeWidth="4" />
          <rect x="175" y="65" width="100" height="73" rx="4" fill="#10263b" stroke="#ff6500" strokeWidth="2" />
          <path d="M185 83H265M185 96H265M185 109H265" stroke="#248fc0" strokeWidth="5" />
          <rect x="98" y="89" width="104" height="87" rx="17" fill="#0b1928" stroke="#ff6500" />
          <rect x="119" y="108" width="62" height="36" rx="5" {...common} />
          <path d="M142 144V155M130 155H170" {...common} />
          <path d="M65 207H235M65 217H235" stroke="#244055" strokeWidth="4" />
          <path d="M83 192H217" stroke="#ff6500" strokeOpacity=".7" strokeWidth="3" />
        </>
      )}

      {type === 6 && (
        <>
          <circle cx="220" cy="53" r="23" fill="#ffe0a0" />
          <path d="M0 160L59 105L101 147L153 93L300 164V240H0Z" fill="#19334b" />
          <path d="M0 190L79 139L138 183L207 130L300 191V240H0Z" fill="#10263b" />
          <path d="M35 240V180H64V240M105 240V194H134V240M205 240V178H234V240" fill="#071725" />
          <rect x="93" y="82" width="114" height="86" rx="18" fill="#0b1928" stroke="#ff6500" transform="rotate(-4 150 125)" />
          <path d="M139 113L159 117L170 105C174 102 179 106 176 111L166 126L170 143L163 147L153 133L140 133L135 140L131 136L137 126L128 118Z" {...common} strokeWidth="3" />
          <path d="M112 77L87 75M190 169L215 172" {...common} />
        </>
      )}

      {type === 7 && (
        <>
          <rect x="60" y="72" width="180" height="112" fill="#132b40" stroke="#597084" strokeWidth="2" />
          <path d="M60 89H240" stroke="#ff6500" strokeWidth="3" />
          <path d="M75 104H130M75 114H115M75 124H140" stroke="#8da3b8" strokeWidth="2" />
          <path d="M160 106H224M160 117H224M160 128H209" stroke="#ff6500" strokeWidth="2" />
          <rect x="88" y="91" width="124" height="104" rx="18" fill="#0b1928" stroke="#ff6500" transform="rotate(-7 150 143)" />
          <path d="M121 135L178 119L183 131L126 147Z" {...common} strokeWidth="3" />
          <path d="M133 143L138 157L188 143L183 131" {...common} />
          <path d="M140 137L148 151M154 133L162 147M168 129L176 143" {...common} />
          <path d="M72 210H228" stroke="#ff6500" strokeOpacity=".7" strokeWidth="3" />
          <path d="M91 220H209" stroke="#32485b" strokeWidth="3" />
        </>
      )}

      {type === 8 && (
        <>
          <path d="M65 174L82 202H218L235 174" stroke="#ffb44c" strokeWidth="2" />
          <ellipse cx="150" cy="178" rx="89" ry="18" fill="#ffc76b" fillOpacity=".85" />
          <ellipse cx="150" cy="174" rx="89" ry="18" fill="#ffe3a0" stroke="#ffb44c" strokeWidth="2" />
          <rect x="112" y="85" width="76" height="91" rx="15" fill="#0b1928" stroke="#ff6500" />
          <path d="M126 85V73H174V85" {...common} />
          <path d="M123 112L150 97L177 112L150 127Z" {...common} strokeWidth="3" />
          <path d="M123 112V144L150 160L177 144V112" {...common} strokeWidth="3" />
          <path d="M150 127V160" {...common} />
          <path d="M48 60L80 69L73 100L41 91Z" fill="#fff0c6" stroke="#ffb44c" />
          <path d="M252 60L220 69L227 100L259 91Z" fill="#fff0c6" stroke="#ffb44c" />
          <path d="M58 60L70 41H92L84 67M242 60L230 41H208L216 67" {...common} />
        </>
      )}
    </svg>
  );
}

export default function ProductionFacilities() {
  const [selectedFacility, setSelectedFacility] =
    useState<Facility | null>(null);

  return (
    <section
      id="production-facilities"
      className="relative overflow-hidden bg-[#050505] px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#ff6500] px-5 py-2 text-xs font-bold tracking-[0.25em] text-[#ff6500] shadow-[0_0_18px_rgba(255,101,0,0.12)]">
            PRODUCTION FACILITIES
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Professional Studio{" "}
            <span className="text-[#ff6500]">Infrastructure</span>
          </h2>

          <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-[#ff6500]" />

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
            From pre-production to final delivery, Sri Krishna Films &
            Advertisement Industry offers complete filmmaking, photography,
            editing and digital production services with modern equipment
            and experienced professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <article
                key={facility.number}
                className="group relative flex min-h-[235px] overflow-hidden rounded-xl border border-[#ff6500]/80 bg-[#090909] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff8a35] hover:shadow-[0_0_24px_rgba(255,101,0,0.18)]"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                {/* LEFT: TEXT AND ICON */}
                <div className="relative z-10 flex w-[54%] min-w-0 flex-col p-4 sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#ff6500] bg-[#ff6500]/10 text-[#ff7800]">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <span className="text-2xl font-extrabold text-[#ff6500]">
                      {facility.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold leading-snug text-white">
                    {facility.title}
                  </h3>

                  <p className="mt-2 text-sm leading-[1.55] text-gray-300">
                    {facility.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedFacility(facility)}
                    className="mt-auto w-fit rounded border border-white/20 bg-white/[0.03] px-3 py-2 text-[11px] font-bold tracking-wider text-white transition hover:border-[#ff6500] hover:text-[#ff7800]"
                  >
                    PREVIEW
                  </button>
                </div>

                {/* RIGHT: UNIQUE VECTOR ART */}
                <div className="relative min-h-full w-[46%] overflow-hidden border-l border-white/10">
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                    <FacilityArt type={index} />
                  </div>

                  {/* Arrow is separate from the illustration */}
                  <button
                    type="button"
                    aria-label={`Preview ${facility.title}`}
                    onClick={() => setSelectedFacility(facility)}
                    className="absolute bottom-3 right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#ff6500] bg-[#080808] text-[#ff7800] shadow-[0_0_15px_rgba(255,101,0,0.18)] transition hover:bg-[#ff6500] hover:text-black"
                  >
                    <ArrowRight size={22} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-6 grid gap-6 rounded-xl border border-[#ff6500] bg-[#090909] p-5 shadow-[0_0_20px_rgba(255,101,0,0.10)] md:grid-cols-[1.1fr_1fr_auto] md:items-center md:gap-8 md:p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#ff6500] bg-[#ff6500]/10 text-[#ff6500]">
              <Play size={25} fill="currentColor" />
            </div>

            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-[#ff6500]">
                COMPLETE SOLUTION
              </p>
              <h3 className="mt-2 text-xl font-extrabold leading-tight sm:text-2xl">
                Everything You Need{" "}
                <span className="text-[#ff6500]">Under One Roof</span>
              </h3>
            </div>
          </div>

          <p className="border-l-2 border-[#ff6500] pl-4 text-sm leading-6 text-gray-300">
            Whether you need a TV commercial, corporate film, product shoot,
            music video, AI advertisement or complete digital marketing
            campaign, our team provides creative production solutions for
            your business.
          </p>

          <a
            href="https://wa.me/916204731481?text=Hello%20Sri%20Krishna%20Films%2C%20I%20want%20to%20discuss%20a%20production%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-lg border border-[#ff6500] bg-[#ff6500] px-5 py-3 text-sm font-bold text-black transition hover:bg-transparent hover:text-[#ff6500]"
          >
            DISCUSS YOUR PROJECT
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* PREVIEW MODAL */}
      {selectedFacility && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedFacility(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="facility-modal-title"
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-[#ff6500] bg-[#0a0a0a] shadow-[0_0_40px_rgba(255,101,0,0.15)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setSelectedFacility(null)}
              className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-black/80 p-2 text-white transition hover:border-[#ff6500] hover:text-[#ff6500]"
            >
              <X size={20} />
            </button>

            <div className="h-52 overflow-hidden">
              <FacilityArt
                type={facilities.findIndex(
                  (item) => item.number === selectedFacility.number
                )}
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3">
                <Sparkles className="text-[#ff6500]" size={21} />
                <span className="text-sm font-bold tracking-widest text-[#ff6500]">
                  FACILITY {selectedFacility.number}
                </span>
              </div>

              <h3
                id="facility-modal-title"
                className="mt-3 text-2xl font-extrabold"
              >
                {selectedFacility.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-300">
                {selectedFacility.details}
              </p>

              <a
                href={`https://wa.me/916204731481?text=${encodeURIComponent(
                  `Hello Sri Krishna Films, I want to enquire about ${selectedFacility.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#ff6500] px-5 py-3 font-bold text-black transition hover:bg-[#ff7a25]"
              >
                Enquire on WhatsApp
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
