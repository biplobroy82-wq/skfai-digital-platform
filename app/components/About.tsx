
import Image from "next/image";
import {
  Video,
  Users,
  Trophy,
  MapPinned,
  Building2,
} from "lucide-react";

const stats = [
  {
    number: "5000+",
    label: "VIDEO ADVERTISEMENTS",
    icon: Video,
  },
  {
    number: "1000+",
    label: "HAPPY CLIENTS",
    icon: Users,
  },
  {
    number: "27+",
    label: "YEARS EXPERIENCE",
    icon: Trophy,
  },
  {
    number: "PAN INDIA",
    label: "CREATIVE SERVICES",
    icon: MapPinned,
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate w-full overflow-hidden bg-[#08090c] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Cinematic film-studio background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-[#08090c]/95 to-black/80" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/35" />

      {/* Orange cinematic light */}
      <div className="pointer-events-none absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-orange-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-orange-500/10 blur-[130px]" />

      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* Main content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
          {/* LEFT: Founder photo */}
          <div className="relative mx-auto w-full max-w-[590px]">
            {/* Decorative orange diagonal */}
            <div className="pointer-events-none absolute -left-8 -top-10 h-32 w-32 -rotate-45 border-l-[22px] border-orange-600/90 sm:-left-12 sm:-top-12 sm:h-44 sm:w-44 sm:border-l-[30px]" />

            <div className="pointer-events-none absolute -bottom-8 -right-5 h-28 w-28 -rotate-45 border-r-[20px] border-orange-600/90 sm:-bottom-10 sm:-right-10 sm:h-40 sm:w-40 sm:border-r-[28px]" />

            {/* Founder photo panel */}
            <div className="relative overflow-hidden rounded-xl border border-orange-500/80 bg-black/80 p-3 shadow-[0_0_45px_rgba(255,90,0,0.12)] sm:p-5">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-500/[0.07] via-transparent to-transparent" />

              <Image
                src="/biplob-roy-founder.png"
                alt="Biplob Roy, Founder and Director of Sri Krishna Films"
                width={1024}
                height={1536}
                className="relative z-10 h-auto w-full rounded-lg object-contain"
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
              />

              {/* Frame corner accents */}
              <span className="absolute left-0 top-0 z-20 h-12 w-12 border-l-2 border-t-2 border-orange-500 sm:h-16 sm:w-16" />
              <span className="absolute bottom-0 right-0 z-20 h-12 w-12 border-b-2 border-r-2 border-orange-500 sm:h-16 sm:w-16" />
            </div>
          </div>

          {/* RIGHT: About information */}
          <div className="min-w-0">
            {/* Experience label */}
            <div className="inline-flex max-w-full items-center rounded-full border border-orange-500 px-4 py-2 sm:px-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-400 sm:text-xs sm:tracking-[0.22em]">
                Since 1999 <span className="px-1">•</span> 27+ Years of
                Excellence
              </span>
            </div>

            {/* Heading */}
            <div className="mt-7">
              <span className="mb-1 block text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                About
              </span>

              <h2
                id="about-heading"
                className="text-4xl font-black leading-tight tracking-tight text-orange-500 sm:text-5xl lg:text-6xl"
              >
                Sri Krishna Films
              </h2>
            </div>

            {/* Intro paragraph */}
            <p className="mt-5 text-sm leading-7 text-gray-300 sm:text-base sm:leading-[1.65]">
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

            {/* Experience and achievements */}
            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base sm:leading-7">
              With{" "}
              <span className="font-semibold text-yellow-400">
                27+ years of experience
              </span>
              , we have successfully completed{" "}
              <span className="font-semibold text-yellow-400">
                5000+ video advertisements
              </span>{" "}
              and served{" "}
              <span className="font-semibold text-yellow-400">
                1000+ happy clients
              </span>{" "}
              across India.
            </p>

            {/* Client list */}
            <div className="mt-5 flex items-start gap-3">
              <Building2
                size={20}
                strokeWidth={1.7}
                className="mt-1 shrink-0 text-orange-500"
              />

              <p className="text-sm leading-7 text-gray-400 sm:text-base">
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
          </div>
        </div>

        {/* Bottom achievement cards */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:mt-20 xl:grid-cols-4 xl:gap-5">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group flex min-h-[135px] min-w-0 items-center gap-5 rounded-xl border border-orange-500/80 bg-[#111216]/90 px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#191a1e] hover:shadow-[0_8px_30px_rgba(255,90,0,0.10)] sm:px-6"
              >
                {/* Individual icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center text-orange-500 transition-transform duration-300 group-hover:scale-110 sm:h-[72px] sm:w-[72px]">
                  <Icon
                    size={54}
                    strokeWidth={1.8}
                    className="max-h-full max-w-full"
                  />
                </div>

                {/* Vertical divider */}
                <div className="h-[70px] w-px shrink-0 bg-orange-500/70" />

                {/* Statistic text */}
                <div className="min-w-0">
                  <h3 className="break-words text-2xl font-black leading-tight text-white sm:text-3xl">
                    {stat.number}
                  </h3>

                  <p className="mt-2 text-[11px] font-medium leading-5 tracking-wide text-gray-200 sm:text-xs sm:tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
