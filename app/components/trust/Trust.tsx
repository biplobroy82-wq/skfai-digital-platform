
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
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Kolkata Metro",
    icon: TrainFront,
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kolkata_Metro_at_Ravindra_Sadan_station.jpg?width=1200",
  },
  {
    name: "IIT Kharagpur",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "DAV Model School",
    icon: School,
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Medica Hospital",
    icon: Hospital,
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Acadfinity",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Shree Height Builders",
    icon: HardHat,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "HLC Electrical India",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=85",
  },
];

export default function Trust() {
  return (
    <section
      id="trust"
      className="relative isolate overflow-hidden border-y border-white/10 bg-[#080b10] py-16 sm:py-20 lg:py-24"
    >
      {/* Cinematic background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#05070b]/95 via-[#080b10]/85 to-[#080b10]/75" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#080b10] via-transparent to-black/30" />

      {/* Studio light effects */}
      <div className="pointer-events-none absolute right-[10%] top-0 -z-10 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-orange-600/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-10 max-w-5xl sm:mb-12 lg:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[3px] w-10 bg-[#ff6500]" />

            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#ff8a3d] sm:text-xs sm:tracking-[0.3em]">
              Recognized by Leading Organizations
            </p>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Organizations That{" "}
            <span className="text-[#ff6500]">Trust</span>
            <br className="hidden sm:block" /> Sri Krishna Films
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8 lg:text-lg">
            For more than 27 years, we have delivered advertising,
            video production and creative campaigns across different
            sectors and industries.
          </p>
        </div>

        {/* Organization cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7">
          {organizations.map((organization) => {
            const Icon = organization.icon;

            return (
              <article
                key={organization.name}
                className="group relative min-w-0 overflow-hidden rounded-xl border border-white/15 bg-[#131820] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff6500]/80 hover:shadow-[0_14px_40px_rgba(255,101,0,0.14)]"
              >
                {/* Image area */}
                <div className="relative h-40 overflow-hidden sm:h-44 lg:h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${organization.image}')`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#080b10] via-black/20 to-black/10" />

                  {/* Organization icon */}
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg border border-white/30 bg-black/50 text-white backdrop-blur-md transition-colors duration-300 group-hover:border-[#ff6500] group-hover:bg-[#ff6500]">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <span className="absolute right-4 top-4 rounded border border-white/20 bg-black/40 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
                    Our Network
                  </span>
                </div>

                {/* Organization name */}
                <div className="flex min-h-[76px] items-center justify-between gap-3 px-4 py-4 sm:px-5">
                  <h3 className="text-base font-bold leading-snug text-white transition-colors group-hover:text-[#ff8a3d] sm:text-lg">
                    {organization.name}
                  </h3>

                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff6500] shadow-[0_0_12px_rgba(255,101,0,0.65)]" />
                </div>

                {/* Bottom accent */}
                <div className="h-[3px] w-full bg-white/5">
                  <div className="h-full w-1/4 bg-[#ff6500] transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
