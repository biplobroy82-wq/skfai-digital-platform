
"use client";

import {
  Factory,
  TrainFront,
  GraduationCap,
  School,
  Hospital,
  HardHat,
  Zap,
  ArrowUpRight,
  Building2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Organization = {
  name: string;
  category: string;
  focus: string;
  image: string;
  icon: LucideIcon;
  number: string;
  design: string;
};

const organizations: Organization[] = [
  {
    number: "01",
    name: "IOCL",
    category: "ENERGY & INDUSTRY",
    focus: "Energy sector and industrial communication.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=85",
    design: "border-t-2",
  },
  {
    number: "02",
    name: "Kolkata Metro",
    category: "PUBLIC TRANSPORT",
    focus: "Urban mobility and transport infrastructure.",
    icon: TrainFront,
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kolkata_Metro_at_Ravindra_Sadan_station.jpg?width=1200",
    design: "border-l-2",
  },
  {
    number: "03",
    name: "IIT Kharagpur",
    category: "HIGHER EDUCATION",
    focus: "Academic excellence, technology and research.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=85",
    design: "rounded-tl-3xl",
  },
  {
    number: "04",
    name: "DAV Model School",
    category: "SCHOOL EDUCATION",
    focus: "School education and student development.",
    icon: School,
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=85",
    design: "rounded-br-3xl",
  },
  {
    number: "05",
    name: "Medica Hospital",
    category: "HEALTHCARE",
    focus: "Healthcare services and patient awareness.",
    icon: Hospital,
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=85",
    design: "border-b-2",
  },
  {
    number: "06",
    name: "Acadfinity",
    category: "LEARNING & DEVELOPMENT",
    focus: "Learning, skill development and education.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=85",
    design: "border-r-2",
  },
  {
    number: "07",
    name: "Shree Height Builders",
    category: "REAL ESTATE",
    focus: "Property development and construction.",
    icon: HardHat,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85",
    design: "rounded-tr-3xl",
  },
  {
    number: "08",
    name: "HLC Electrical India",
    category: "ELECTRICAL & POWER",
    focus: "Electrical products and power solutions.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=85",
    design: "rounded-bl-3xl",
  },
];

export default function Trust() {
  return (
    <section
      id="trust"
      className="relative isolate overflow-hidden border-y border-white/10 bg-[#050505] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-[#ff6500]/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-80 w-80 rounded-full bg-[#ff6500]/[0.06] blur-[120px]" />

      <div className="mx-auto w-full max-w-[1450px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff6500]/70 bg-[#ff6500]/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff6500] sm:text-xs sm:tracking-[0.28em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff6500]" />
            Our Professional Network
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Organizations We&apos;ve
            <span className="block text-[#ff6500]">
              Worked With
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#ff6500]" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Our professional network spans energy, education, healthcare,
            infrastructure, construction and other industries.
          </p>
        </div>

        {/* Organization cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {organizations.map((organization) => {
            const Icon = organization.icon;

            return (
              <article
                key={organization.name}
                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] transition duration-300 hover:-translate-y-1.5 hover:border-[#ff6500] hover:shadow-[0_14px_40px_rgba(255,101,0,0.12)] ${organization.design}`}
              >
                {/* Image panel */}
                <div className="relative h-44 overflow-hidden sm:h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url("${organization.image}")`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/20 to-black/10" />

                  {/* Card number */}
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#ff6500]/70 bg-black/70 text-xs font-extrabold text-[#ff6500] backdrop-blur-sm">
                    {organization.number}
                  </div>

                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4 max-w-[80%] rounded-md border border-white/15 bg-black/65 px-3 py-1.5 text-[9px] font-bold tracking-[0.13em] text-white/90 backdrop-blur-sm">
                    {organization.category}
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-[#ff6500] opacity-80 transition-all duration-300 group-hover:h-16 group-hover:w-16" />
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#ff6500]/70 bg-[#ff6500]/[0.08] text-[#ff6500] transition duration-300 group-hover:bg-[#ff6500] group-hover:text-black">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-extrabold leading-snug text-white transition-colors group-hover:text-[#ff7a25]">
                        {organization.name}
                      </h3>

                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#ff6500]">
                        Industry Focus
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 min-h-[48px] text-sm leading-6 text-gray-400">
                    {organization.focus}
                  </p>

                  {/* Individual card accent */}
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-500">
                      Sri Krishna Films
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ff6500]/60 text-[#ff6500] transition duration-300 group-hover:bg-[#ff6500] group-hover:text-black">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </div>

                {/* Bottom animated accent */}
                <div className="h-[3px] w-full bg-white/[0.04]">
                  <div className="h-full w-1/4 bg-[#ff6500] transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Summary statistics */}
        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {[
            { value: "1000+", label: "Video Projects" },
            { value: "5000+", label: "Video Ad Creations" },
            { value: "27+", label: "Years of Experience" },
            { value: "Pan India", label: "Service Reach" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#ff6500]/40 bg-[#0b0b0b] px-4 py-5 text-center transition hover:border-[#ff6500] hover:bg-[#101010]"
            >
              <p className="text-xl font-extrabold text-[#ff6500] sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-8 flex items-center justify-center gap-3 text-center">
          <span className="h-px w-8 bg-[#ff6500]/70" />
          <p className="text-xs leading-5 text-gray-500 sm:text-sm">
            Professional video production and advertising solutions across industries.
          </p>
          <span className="h-px w-8 bg-[#ff6500]/70" />
        </div>
      </div>
    </section>
  );
}
