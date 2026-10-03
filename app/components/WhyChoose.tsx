
"use client";

import {
  Clapperboard,
  Users,
  Award,
  Rocket,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  {
    number: "01",
    title: "Proven Production Experience",
    description:
      "Over 27 years of experience in advertising, film production and creative communication.",
    icon: Clapperboard,
    tag: "ESTABLISHED 1999",
  },
  {
    number: "02",
    title: "A Wide Range of Clients",
    description:
      "Creative video solutions for businesses, institutions, brands and organizations across India.",
    icon: Users,
    tag: "1000+ CLIENTS",
  },
  {
    number: "03",
    title: "Creative Quality",
    description:
      "From concept development to final delivery, we focus on professional execution and brand communication.",
    icon: Award,
    tag: "QUALITY FOCUSED",
  },
  {
    number: "04",
    title: "Modern AI Solutions",
    description:
      "Cost-effective AI videos and digital advertising solutions for businesses of different sizes.",
    icon: Rocket,
    tag: "FUTURE READY",
  },
];

const stats = [
  { value: "5000+", label: "Video Advertisements" },
  { value: "1000+", label: "Clients Served" },
  { value: "27+", label: "Years of Experience" },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-heading"
      className="relative isolate overflow-hidden border-y border-white/10 bg-[#101216] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -right-40 top-10 -z-10 h-96 w-96 rounded-full bg-[#ff5a00]/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-96 w-96 rounded-full bg-orange-500/[0.05] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-[#ff5a00]" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#ff7a32]">
                The Sri Krishna Films Difference
              </span>
            </div>

            <h2
              id="why-choose-heading"
              className="font-[var(--font-display)] text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Why Choose
              <br />
              <span className="text-[#ff5a00]">Sri Krishna Films?</span>
            </h2>

            <div className="mt-6 h-1 w-20 bg-[#ff5a00]" />
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Since 1999, we have been helping brands communicate their
              stories through advertising, professional video production
              and digital solutions.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              Our approach combines production experience, creative
              thinking and practical solutions to meet different business
              requirements and budgets.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
          {/* Statistics panel */}
          <div className="relative flex flex-col justify-between overflow-hidden border border-white/10 bg-[#191c22] p-6 sm:p-8 lg:p-9">
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-[#ff5a00]/[0.08] blur-3xl" />

            <div className="relative">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff7a32]">
                Our Journey
              </span>

              <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                Experience that
                <br />
                <span className="text-gray-400">builds confidence.</span>
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
                A track record built through years of video production,
                client projects and creative advertising.
              </p>
            </div>

            <div className="relative mt-9 border-t border-white/10 pt-2">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex items-center justify-between gap-4 py-5 ${
                    index !== stats.length - 1
                      ? "border-b border-white/[0.07]"
                      : ""
                  }`}
                >
                  <div>
                    <p className="font-[var(--font-display)] text-3xl font-black text-white sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-gray-500 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={21}
                    className="shrink-0 text-[#ff5a00]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Reasons grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative flex min-w-0 flex-col overflow-hidden border border-white/[0.09] bg-[#191c22] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5a00]/60 hover:bg-[#202329] sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center border border-[#ff5a00]/30 bg-[#ff5a00]/[0.08] text-[#ff6a1a] transition-all duration-300 group-hover:bg-[#ff5a00] group-hover:text-white">
                      <Icon size={24} strokeWidth={1.7} />
                    </div>

                    <span className="font-[var(--font-display)] text-3xl font-black text-white/[0.12] transition-colors group-hover:text-[#ff5a00]/40">
                      {item.number}
                    </span>
                  </div>

                  <div className="mt-7">
                    <h3 className="text-lg font-bold leading-snug text-white transition-colors group-hover:text-[#ff7a32] sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 border-t border-white/[0.08] pt-4">
                    <CheckCircle2
                      size={14}
                      className="shrink-0 text-[#ff5a00]"
                    />
                    <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-gray-500 sm:text-[10px]">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff5a00] transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-gray-400">
            Creative production. Practical solutions. Professional delivery.
          </p>

          <a
            href="/#contact"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-[#ff7a32]"
          >
            Let&apos;s Discuss Your Project
            <ArrowUpRight size={18} className="text-[#ff5a00]" />
          </a>
        </div>
      </div>
    </section>
  );
}
