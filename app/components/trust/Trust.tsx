
"use client";

import {
  Factory,
  TrainFront,
  GraduationCap,
  School,
  Hospital,
  Building2,
  HardHat,
  Zap,
} from "lucide-react";

const organizations = [
  {
    name: "IOCL",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Kolkata Metro",
    icon: TrainFront,
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "IIT Kharagpur",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "DAV Model School",
    icon: School,
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Medica Hospital",
    icon: Hospital,
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Acadfinity",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Shree Height Builders",
    icon: HardHat,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "HLC Electrical India",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=500&q=80",
  },
];

export default function Trust() {
  return (
    <section
      id="trust"
      className="relative isolate overflow-hidden border-y border-white/10 bg-[#080b10] py-12 sm:py-14 lg:py-16"
    >
      {/* Cinematic background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Dark cinematic overlays */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#05070b] via-[#080b10]/95 to-[#080b10]/75" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#080b10] via-transparent to-black/30" />

      {/* Warm studio lights */}
      <div className="pointer-events-none absolute right-[12%] top-0 -z-10 h-48 w-48 rounded-full bg-orange-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-40 w-40 -translate-y-1/2 rounded-full bg-orange-600/5 blur-[90px]" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-9">
        {/* Section heading */}
        <div className="mb-7 max-w-4xl sm:mb-9">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-[2px] w-7 bg-[#ff6500]" />
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#ff8a3d] sm:text-[10px] sm:tracking-[0.28em]">
              Recognized by Leading Organizations
            </p>
          </div>

          <h2 className="max-w-4xl text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
            Organizations That{" "}
            <span className="text-[#ff6500]">Trust</span>{" "}
            Sri Krishna Films
          </h2>

          <p className="mt-2 max-w-3xl text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
            For more than 27 years, we have worked across advertising,
            video production and creative campaigns for organizations
            in different sectors.
          </p>
        </div>

        {/* Organization cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3 lg:grid-cols-4 xl:grid-cols-8">
          {organizations.map((organization) => {
            const Icon = organization.icon;

            return (
              <div
                key={organization.name}
                className="group relative min-w-0 overflow-hidden rounded-lg border border-white/15 bg-[#151a21] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6500]/80 hover:shadow-[0_8px_28px_rgba(255,101,0,0.13)]"
              >
                {/* Organization image */}
                <div className="relative h-[86px] overflow-hidden sm:h-[92px] lg:h-[82px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${organization.image}')`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#080b10] via-[#080b10]/35 to-black/10" />

                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/25 bg-black/35 text-white/90 backdrop-blur-sm transition-all duration-300 group-hover:border-[#ff6500] group-hover:bg-[#ff6500] group-hover:text-white">
                      <Icon size={19} strokeWidth={1.6} />
                    </div>
                  </div>
                </div>

                {/* Organization name */}
                <div className="flex min-h-[48px] items-center justify-center px-2 py-2 text-center">
                  <h3 className="text-[10px] font-semibold leading-4 text-gray-200 transition-colors group-hover:text-white sm:text-[11px]">
                    {organization.name}
                  </h3>
                </div>

                {/* Orange bottom accent */}
                <div className="mx-auto mb-0 h-[2px] w-8 bg-[#ff6500] transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
