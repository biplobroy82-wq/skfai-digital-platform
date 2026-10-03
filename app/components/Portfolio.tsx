"use client";

import Link from "next/link";
import {
  Clapperboard,
  Film,
  Sparkles,
  Camera,
  Music,
  MonitorPlay,
  Users,
  Scan,
  Factory,
  ArrowRight,
} from "lucide-react";

const portfolioItems = [
  {
    number: "01",
    title: "TV Commercial",
    desc: "Creative television advertisements for powerful brand promotion.",
    icon: Clapperboard,
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85",
    href: "/tv-commercial-production",
  },
  {
    number: "02",
    title: "Corporate Film",
    desc: "Professional corporate films that build trust and brand identity.",
    icon: Film,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    href: "/#contact",
  },
  {
    number: "03",
    title: "AI Advertisement",
    desc: "Modern AI-powered video advertisements with cinematic quality.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    href: "/ai-video-production",
  },
  {
    number: "04",
    title: "Product Shoot",
    desc: "Premium product photography and commercial video production.",
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
    href: "/#contact",
  },
  {
    number: "05",
    title: "Music & Film Production",
    desc: "Music videos, short films and complete production solutions.",
    icon: Music,
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
    href: "/#contact",
  },
  {
    number: "06",
    title: "Digital Marketing",
    desc: "Facebook, Instagram and Google Ads with strategic campaigns.",
    icon: MonitorPlay,
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=85",
    href: "/digital-marketing",
  },
  {
    number: "07",
    title: "Customer Review Video",
    desc: "Professional customer testimonials that build trust and credibility.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
    href: "/#contact",
  },
  {
    number: "08",
    title: "Green Screen Video",
    desc: "Professional chroma-key production with cinematic editing and effects.",
    icon: Scan,
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=85",
    href: "/#contact",
  },
  {
    number: "09",
    title: "Industrial Shoot",
    desc: "Factory, manufacturing and industrial process video production.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=85",
    href: "/#contact",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="relative isolate w-full overflow-hidden bg-[#080a0e] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Cinematic background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      {/* Dark overlays for readable content */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/80" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#080a0e]/70 via-[#080a0e]/85 to-[#080a0e]" />

      {/* Orange cinematic glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-orange-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="mx-auto w-full max-w-[1550px] px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14 lg:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff6500] bg-black/40 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff9a32] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff6500]" />
            Our Expertise
          </span>

          <h2
            id="portfolio-heading"
            className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Our <span className="text-[#ff6500]">Portfolio</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-28 bg-gradient-to-r from-[#ff6500] to-yellow-400" />

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
            Delivering creative advertising, filmmaking, corporate branding,
            AI video creation and digital marketing solutions with innovation,
            quality and professionalism.
          </p>
        </div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {portfolioItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.number}
                href={item.href}
                aria-label={`Discuss a ${item.title} project`}
                className="group relative flex min-h-[210px] min-w-0 overflow-hidden rounded-xl border border-[#ff6500]/70 bg-[#111318] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6500] hover:shadow-[0_12px_35px_rgba(255,101,0,0.16)] sm:min-h-[220px] lg:min-h-[225px]"
              >
                {/* Card background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                  }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#08090c]/95 via-[#08090c]/80 to-[#08090c]/30 transition-colors duration-300 group-hover:from-[#08090c]/90 group-hover:via-[#08090c]/70" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                {/* Card content */}
                <div className="relative z-10 flex w-full items-start gap-4 p-5 sm:gap-5 sm:p-6">
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#ff6500] bg-black/50 text-[#ff8a00] backdrop-blur-sm transition-all duration-300 group-hover:bg-[#ff6500] group-hover:text-white sm:h-14 sm:w-14">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <div className="flex min-w-0 flex-1 flex-col pr-8">
                    <span className="mb-4 text-sm font-bold tracking-wider text-[#ff9a00]">
                      {item.number}
                    </span>

                    <h3 className="text-xl font-extrabold leading-snug text-white transition-colors group-hover:text-[#ff9a32] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-gray-300">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow button */}
                <span className="absolute bottom-5 right-5 z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#ff6500] bg-black/60 text-[#ff8a00] transition-all duration-300 group-hover:bg-[#ff6500] group-hover:text-white sm:bottom-6 sm:right-6">
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#ff6500] transition-all duration-500 group-hover:w-full" />
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:mt-14 sm:flex-row">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Let’s create a professional video for your brand.
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#ff6500] bg-[#ff6500] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-transparent hover:text-[#ff8a00]"
          >
            Discuss Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
