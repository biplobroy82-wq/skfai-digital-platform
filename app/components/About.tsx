
"use client";

import Image from "next/image";
import {
  Video,
  Users,
  CalendarDays,
  MapPinned,
  Clapperboard,
  Building2,
  Award,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    number: "5000+",
    label: "Video Advertisements",
    detail: "Creative campaigns produced",
    icon: Video,
  },
  {
    number: "1000+",
    label: "Happy Clients",
    detail: "Businesses and organizations",
    icon: Users,
  },
  {
    number: "27+",
    label: "Years Experience",
    detail: "Established in 1999",
    icon: CalendarDays,
  },
  {
    number: "PAN India",
    label: "Creative Services",
    detail: "Serving brands across India",
    icon: MapPinned,
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate w-full overflow-hidden border-y border-white/10 bg-[#08090c] py-16 text-white sm:py-20 lg:py-28"
    >
      {/* Cinematic background accents */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-yellow-500/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-orange-600/[0.06] blur-[120px]" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Main About Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
          {/* Left: Brand Visual */}
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -inset-3 rounded-2xl border border-yellow-500/20 sm:-inset-5" />

            <div className="absolute -left-3 -top-3 z-10 h-14 w-14 border-l-2 border-t-2 border-yellow-400 sm:-left-5 sm:-top-5 sm:h-20 sm:w-20" />

            <div className="absolute -bottom-3 -right-3 z-10 h-14 w-14 border-b-2 border-r-2 border-yellow-400 sm:-bottom-5 sm:-right-5 sm:h-20 sm:w-20" />

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111216] p-3 sm:p-5">
              <Image
                src="/og-image.jpg"
                alt="Sri Krishna Films & Advertisement Industry emblem"
                width={600}
                height={600}
                priority={false}
                className="h-auto w-full rounded-lg object-contain"
              />

              <div className="absolute inset-x-3 bottom-3 rounded-b-lg bg-gradient-to-t from-black/90 via-black/40 to-transparent px-5 pb-5 pt-16 sm:inset-x-5 sm:bottom-5 sm:px-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-yellow-400 sm:text-xs">
                  Our Legacy
                </p>
                <p className="mt-1 text-lg font-extrabold uppercase tracking-wide text-white sm:text-2xl">
                  Creativity Since 1999
                </p>
              </div>
            </div>

            {/* Floating experience badge */}
            <div className="absolute -right-2 top-6 flex items-center gap-3 border border-yellow-500/40 bg-[#15161a] px-4 py-3 shadow-xl sm:-right-6 sm:top-10 sm:px-5">
              <Award
                size={25}
                className="shrink-0 text-yellow-400"
                strokeWidth={1.6}
              />
              <div>
                <p className="text-lg font-black leading-tight text-yellow-400">
                  27+ Years
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-widest text-gray-400">
                  Of Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Right: Company Information */}
          <div className="min-w-0">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/[0.06] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-yellow-400 sm:text-xs sm:tracking-[0.22em]">
                Since 1999 • 27+ Years of Excellence
              </span>
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
              Who We Are
            </p>

            <h2
              id="about-heading"
              className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              About Sri Krishna{" "}
              <span className="text-yellow-400">Films</span>
            </h2>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-[3px] w-14 bg-yellow-400" />
              <span className="h-[3px] w-5 bg-orange-500" />
              <span className="h-[3px] w-2 bg-white/30" />
            </div>

            <p className="mt-7 text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
              Sri Krishna Films &amp; Advertisement Industry is one of
              Kolkata&apos;s trusted production houses, delivering creative
              visual solutions since{" "}
              <span className="font-bold text-yellow-400">1999</span>.
              We specialize in TV Commercials, Corporate Films,
              Documentary Production, AI Video Creation, Digital Marketing,
              Lead Generation, Product Advertisements, Brand Promotions,
              Music Videos, Government Projects, Industrial Films and
              Professional Photography.
            </p>

            <div className="my-7 border-l-2 border-yellow-500/70 bg-white/[0.03] py-4 pl-5 pr-4 sm:pl-6">
              <div className="flex items-start gap-3">
                <Sparkles
                  size={21}
                  className="mt-1 shrink-0 text-yellow-400"
                />
                <p className="text-sm leading-7 text-gray-300 sm:text-base">
                  With{" "}
                  <span className="font-bold text-yellow-400">
                    27+ years of experience
                  </span>
                  , we have successfully completed{" "}
                  <span className="font-bold text-yellow-400">
                    5000+ video advertisements
                  </span>{" "}
                  and served{" "}
                  <span className="font-bold text-yellow-400">
                    1000+ happy clients
                  </span>{" "}
                  across India.
                </p>
              </div>
            </div>

            {/* Client information */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Building2 size={18} className="text-yellow-400" />
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white sm:text-sm">
                  Organizations We Have Worked With
                </h3>
              </div>

              <p className="text-sm leading-7 text-gray-400">
                Our prestigious clients include{" "}
                <span className="font-semibold text-white">IOCL</span>,{" "}
                <span className="font-semibold text-white">
                  Kolkata Metro
                </span>
                ,{" "}
                <span className="font-semibold text-white">
                  IIT Kharagpur
                </span>
                ,{" "}
                <span className="font-semibold text-white">
                  DAV Model School
                </span>
                ,{" "}
                <span className="font-semibold text-white">
                  Medica Hospital
                </span>
                ,{" "}
                <span className="font-semibold text-white">Acadfinity</span>,{" "}
                <span className="font-semibold text-white">
                  Shree Height Builders
                </span>{" "}
                and many other government, corporate and private
                organizations.
              </p>
            </div>

            {/* Section footer */}
            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-3 border-b border-yellow-500/40 pb-2 text-xs font-bold uppercase tracking-[0.14em] text-yellow-400 transition-colors hover:border-yellow-400 hover:text-white"
            >
              Explore Our Services
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden border border-white/10 bg-[#15171c] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/60 hover:bg-[#1b1d22] sm:p-7"
              >
                <div className="absolute left-0 top-0 h-[2px] w-10 bg-yellow-400 transition-all duration-500 group-hover:w-full" />

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight text-yellow-400 sm:text-4xl">
                      {stat.number}
                    </h3>

                    <p className="mt-3 text-sm font-bold text-white sm:text-base">
                      {stat.label}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-yellow-500/25 bg-yellow-500/[0.07] text-yellow-400 transition-all duration-300 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>
                </div>

                <p className="mt-3 text-xs leading-5 text-gray-500">
                  {stat.detail}
                </p>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-[2px] w-7 bg-yellow-400" />
                  <span className="h-[2px] w-3 bg-orange-500/70" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
