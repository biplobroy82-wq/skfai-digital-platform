
"use client";

import { ArrowUpRight, FileText, Clapperboard } from "lucide-react";

export default function CelebrityBooking() {
  return (
    <section
      id="celebrity-booking"
      className="relative overflow-hidden bg-[#0b0d10] px-5 py-20 text-white sm:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#ff5a00]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-px w-10 bg-[#ff5a00]" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff8a45]">
            Celebrity Booking
          </span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-[var(--font-display)] text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              BOOK YOUR
              <br />
              <span className="text-[#ff5a00]">CELEBRITY</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
              Looking for a celebrity for your next advertisement,
              brand endorsement or promotional campaign?
              Explore our celebrity profile and remuneration chart.
            </p>

            <a
              href="/celebrity-rate-chart.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex min-h-14 items-center gap-3 rounded-sm bg-[#ff5a00] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#e94f00]"
            >
              <FileText size={19} />
              View Celebrity Rate Chart
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <p className="mt-4 text-xs leading-5 text-gray-500">
              Remuneration is indicative and subject to availability,
              final confirmation and booking terms.
            </p>
          </div>

          <div className="relative">
            <div className="border border-white/15 bg-white/[0.03] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#ff5a00]/50 bg-[#ff5a00]/10">
                  <Clapperboard
                    className="text-[#ff5a00]"
                    size={27}
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff8a45]">
                    Sri Krishna Films
                  </p>
                  <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                    Celebrity Profile & Rates
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Browse the available celebrity photos, names,
                    profiles and remuneration in our PDF catalogue.
                  </p>
                </div>
              </div>

              <div className="my-6 h-px bg-white/10" />

              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="text-gray-400">
                  Celebrity catalogue
                </span>
                <span className="text-[#ff8a45]">
                  PDF Document
                </span>
              </div>

              <a
                href="/celebrity-rate-chart.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 border border-white/20 px-4 py-3 text-sm font-semibold transition hover:border-[#ff5a00] hover:text-[#ff8a45]"
              >
                Open Catalogue
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="absolute -bottom-2 -right-2 -z-0 h-full w-full border border-[#ff5a00]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
