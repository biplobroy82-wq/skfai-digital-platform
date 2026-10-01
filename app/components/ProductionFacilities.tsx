
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
  Sparkles,
  ArrowRight,
  X,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

type Facility = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string;
  services: string[];
  suitableFor: string;
};

const facilities: Facility[] = [
  {
    number: "01",
    title: "Film Studio",
    description: "Indoor shooting space for professional video production.",
    icon: Clapperboard,
    details:
      "An indoor production setup for planned video shoots, advertisements, interviews and branded content.",
    services: [
      "Commercial and promotional shoots",
      "Corporate films and interviews",
      "Reels and short-form videos",
      "Indoor scene production",
    ],
    suitableFor: "Brands, businesses, creators and production teams.",
  },
  {
    number: "02",
    title: "Green Screen Studio",
    description: "Chroma shooting for virtual backgrounds and VFX.",
    icon: Scan,
    details:
      "Green screen shooting allows the background to be replaced during editing, subject to the requirements of the footage.",
    services: [
      "Virtual background replacement",
      "Presenter and spokesperson videos",
      "Product presentation videos",
      "VFX and creative compositions",
    ],
    suitableFor: "Advertisements, explainers, training videos and digital campaigns.",
  },
  {
    number: "03",
    title: "Camera & Cinematography",
    description: "Camera-based filming for commercial projects.",
    icon: Camera,
    details:
      "Camera and cinematography services planned according to the script, framing, lighting and visual requirements of the project.",
    services: [
      "Advertisement filming",
      "Interviews and corporate videos",
      "Product video recording",
      "Planned camera shots and compositions",
    ],
    suitableFor: "Businesses, brands, agencies and filmmakers.",
  },
  {
    number: "04",
    title: "Professional Lighting",
    description: "Lighting arrangements for clear, balanced visuals.",
    icon: Lightbulb,
    details:
      "Lighting is arranged according to the subject, background and desired visual mood for the shoot.",
    services: [
      "Indoor shoot lighting",
      "Product lighting",
      "Portrait and interview lighting",
      "Soft and creative lighting setups",
    ],
    suitableFor: "Product shoots, interviews, green screen and advertisements.",
  },
  {
    number: "05",
    title: "Audio Recording",
    description: "Voice-over, narration and dialogue recording.",
    icon: Mic,
    details:
      "Audio recording and voice-over support for video advertisements and other production projects.",
    services: [
      "Advertisement voice-overs",
      "Hindi, Bengali and English narration",
      "Dialogue recording",
      "Basic audio cleanup and editing",
    ],
    suitableFor: "Commercials, explainers, corporate videos and promotional content.",
  },
  {
    number: "06",
    title: "Video Editing & VFX",
    description: "Editing, colour correction, graphics and visual effects.",
    icon: MonitorPlay,
    details:
      "Post-production services turn recorded footage and supplied assets into a finished video for the intended platform.",
    services: [
      "Video editing and trimming",
      "Colour correction",
      "Motion graphics and visual effects",
      "Green screen background removal",
      "Social media video formatting",
    ],
    suitableFor: "Advertisements, reels, corporate films and product videos.",
  },
  {
    number: "07",
    title: "Drone Shoot",
    description: "Aerial footage for suitable outdoor projects.",
    icon: Plane,
    details:
      "Aerial photography and videography can provide wider views of locations, properties and events. Availability depends on location, weather and applicable permissions.",
    services: [
      "Real estate aerial visuals",
      "Location and property footage",
      "Outdoor event coverage",
      "Aerial establishing shots",
    ],
    suitableFor: "Real estate, venues, tourism and outdoor productions.",
  },
  {
    number: "08",
    title: "Creative Production",
    description: "Concept, scripting, direction and production planning.",
    icon: Settings,
    details:
      "Creative production support helps organise a video project from the initial idea through shooting and final delivery.",
    services: [
      "Advertising concepts and storylines",
      "Script and scene planning",
      "Shoot coordination",
      "Direction and production planning",
      "Final delivery planning",
    ],
    suitableFor: "Brands, companies, agencies and promotional campaigns.",
  },
  {
    number: "09",
    title: "Product Shoot",
    description: "Product photography and promotional videos.",
    icon: Package,
    details:
      "Product-focused visuals are planned to present product features, packaging and appearance for marketing use.",
    services: [
      "Product photography",
      "Product demonstration videos",
      "Packaging and feature shots",
      "E-commerce and social media creatives",
    ],
    suitableFor: "FMCG, cosmetics, herbal products, fashion and retail brands.",
  },
  {
    number: "10",
    title: "AI Video Production",
    description: "AI-assisted video advertisements and creative visuals.",
    icon: Sparkles,
    details:
      "AI-assisted production can help create promotional videos from a script, concept, reference images and suitable generated visuals.",
    services: [
      "AI-generated promotional videos",
      "Script-based visual storytelling",
      "Product and brand advertisements",
      "Short-form social media videos",
      "AI-assisted scenes and animation",
    ],
    suitableFor: "Small businesses, local brands, product sellers and digital marketers.",
  },
];

export default function ProductionFacilities() {
  const [selectedFacility, setSelectedFacility] =
    useState<Facility | null>(null);

  return (
    <section
      id="production-facilities"
      className="bg-[#050505] px-4 py-12 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* SECTION HEADING */}
        <div className="mx-auto mb-7 max-w-3xl text-center">
          <span className="text-xs font-bold tracking-[0.25em] text-[#ff6500]">
            OUR PRODUCTION SERVICES
          </span>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Professional Studio{" "}
            <span className="text-[#ff6500]">Infrastructure</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400">
            Explore our production services. Click Details Here to learn
            about each service, its uses and available options.
          </p>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#ff6500]" />
        </div>

        {/* COMPACT SERVICE ROWS */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {facilities.map((facility) => {
            const Icon = facility.icon;

            return (
              <article
                key={facility.number}
                className="flex min-w-0 items-center gap-3 rounded-lg border border-white/10 bg-[#101012] p-3 transition-colors duration-200 hover:border-[#ff6500]/70 sm:gap-4 sm:p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#ff6500]/60 bg-[#ff6500]/10 text-[#ff6500]">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#ff6500]">
                      {facility.number}
                    </span>

                    <h3 className="text-sm font-bold leading-5 text-white sm:text-base">
                      {facility.title}
                    </h3>
                  </div>

                  <p className="mt-1 text-xs leading-5 text-gray-400">
                    {facility.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedFacility(facility)}
                  className="inline-flex shrink-0 items-center gap-1 rounded-md border border-[#ff6500] px-2.5 py-2 text-[10px] font-bold text-[#ff6500] transition hover:bg-[#ff6500] hover:text-black sm:px-3 sm:text-xs"
                  aria-label={`Details here: ${facility.title}`}
                >
                  Details Here
                  <ArrowRight size={13} />
                </button>
              </article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-5 flex flex-col justify-between gap-4 rounded-lg border border-[#ff6500]/60 bg-[#101012] p-4 sm:flex-row sm:items-center sm:p-5">
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] text-[#ff6500]">
              HAVE A PROJECT IN MIND?
            </p>
            <h3 className="mt-1 text-lg font-bold">
              Let&apos;s Create Something Professional
            </h3>
            <p className="mt-1 text-xs leading-5 text-gray-400">
              Tell us your requirement and discuss a suitable production plan.
            </p>
          </div>

          <a
            href="https://wa.me/916204731481?text=Hello%20Sri%20Krishna%20Films%2C%20I%20want%20to%20discuss%20a%20production%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#ff6500] px-4 py-3 text-xs font-bold text-black transition hover:bg-[#ff7a25]"
          >
            DISCUSS YOUR PROJECT
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* SERVICE DETAILS MODAL */}
      {selectedFacility && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedFacility(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="facility-modal-title"
            className="relative my-auto w-full max-w-xl rounded-xl border border-[#ff6500]/70 bg-[#101012] shadow-[0_0_35px_rgba(255,101,0,0.12)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start gap-3 border-b border-white/10 p-5 sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#ff6500]/60 bg-[#ff6500]/10 text-[#ff6500]">
                <selectedFacility.icon size={25} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold tracking-widest text-[#ff6500]">
                  SERVICE {selectedFacility.number}
                </p>

                <h3
                  id="facility-modal-title"
                  className="mt-1 text-xl font-extrabold sm:text-2xl"
                >
                  {selectedFacility.title}
                </h3>
              </div>

              <button
                type="button"
                aria-label="Close details"
                onClick={() => setSelectedFacility(null)}
                className="rounded-md border border-white/15 p-2 text-gray-300 transition hover:border-[#ff6500] hover:text-[#ff6500]"
              >
                <X size={19} />
              </button>
            </div>

            <div className="p-5 sm:p-6">
              <h4 className="text-sm font-bold text-white">
                About This Service
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-300">
                {selectedFacility.details}
              </p>

              <h4 className="mt-5 text-sm font-bold text-white">
                Service Types & Options
              </h4>

              <ul className="mt-3 space-y-2">
                {selectedFacility.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-2 text-sm leading-5 text-gray-300"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-[#ff6500]"
                    />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <p className="text-xs font-bold text-[#ff6500]">
                  SUITABLE FOR
                </p>
                <p className="mt-1 text-sm leading-5 text-gray-300">
                  {selectedFacility.suitableFor}
                </p>
              </div>

              <a
                href={`https://wa.me/916204731481?text=${encodeURIComponent(
                  `Hello Sri Krishna Films, I want to enquire about ${selectedFacility.title}. Please share the details and pricing.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#ff6500] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#ff7a25]"
              >
                Enquire on WhatsApp
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
