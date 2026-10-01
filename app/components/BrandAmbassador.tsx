
import Image from "next/image";

export default function BrandAmbassador() {
  return (
    <section
      id="brand-ambassador"
      className="relative overflow-hidden bg-[#050505] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-[#ff6500]/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#ff6500]/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff6500]/70 bg-[#ff6500]/[0.06] px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#ff6500] shadow-[0_0_20px_rgba(255,101,0,0.08)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff6500]" />
            Brand Ambassador
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            A Legacy of Cinema,
            <span className="block text-[#ff6500]">
              A Partnership of Excellence
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#ff6500]" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Proudly associated with one of the most respected personalities
            of Bengali cinema.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* Left: Existing Ambassador Image */}
          <div className="mx-auto w-full max-w-[540px]">
            <div className="group relative">
              {/* Orange Glow */}
              <div className="absolute -inset-2 rounded-[26px] bg-[#ff6500]/20 opacity-50 blur-2xl transition duration-500 group-hover:opacity-80" />

              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-2xl border border-[#ff6500] bg-[#0b0b0b] p-1.5 shadow-[0_0_30px_rgba(255,101,0,0.10)] sm:rounded-3xl sm:p-2">
                <Image
                  src="/brand-ambassador.png"
                  alt="Brand Ambassador of Sri Krishna Films"
                  width={650}
                  height={850}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 540px"
                  className="relative h-auto w-full rounded-xl object-contain sm:rounded-2xl"
                />
              </div>

              {/* Bottom Label */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#ff6500]/70 bg-[#0a0a0a] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff6500] shadow-lg sm:text-xs">
                Sri Krishna Films
              </div>
            </div>
          </div>

          {/* Right: Ambassador Details */}
          <div className="pt-5 lg:pt-0">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#ff6500]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff6500]">
                Sri Krishna Films
              </span>
            </div>

            <h3 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Biswajit
              <span className="block text-[#ff6500]">
                Chatterjee
              </span>
            </h3>

            <p className="mt-4 text-lg font-medium text-gray-200 sm:text-xl">
              Legendary Bengali Film Actor
            </p>

            <div className="mt-6 h-1 w-16 rounded-full bg-[#ff6500]" />

            <p className="mt-7 text-base leading-8 text-gray-300 sm:text-lg">
              Sri Krishna Films &amp; Advertisement Industry is proud to be
              associated with legendary actor Biswajit Chatterjee. His
              remarkable contribution to Indian cinema represents excellence,
              professionalism and timeless artistic values, inspiring our
              creative journey.
            </p>

            {/* Statistics */}
            <div className="mt-9 grid grid-cols-2 gap-4 sm:gap-5">
              <div className="group rounded-xl border border-[#ff6500]/70 bg-gradient-to-br from-[#151515] to-[#090909] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ff6500] hover:shadow-[0_0_22px_rgba(255,101,0,0.10)] sm:p-6">
                <div className="text-3xl font-extrabold tracking-tight text-[#ff6500] sm:text-4xl">
                  400+
                </div>
                <div className="mt-2 text-sm text-gray-300 sm:text-base">
                  Films
                </div>
                <div className="mt-4 h-0.5 w-10 rounded-full bg-[#ff6500]/70 transition-all group-hover:w-16" />
              </div>

              <div className="group rounded-xl border border-[#ff6500]/70 bg-gradient-to-br from-[#151515] to-[#090909] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ff6500] hover:shadow-[0_0_22px_rgba(255,101,0,0.10)] sm:p-6">
                <div className="text-3xl font-extrabold tracking-tight text-[#ff6500] sm:text-4xl">
                  60+
                </div>
                <div className="mt-2 text-sm text-gray-300 sm:text-base">
                  Years of Excellence
                </div>
                <div className="mt-4 h-0.5 w-10 rounded-full bg-[#ff6500]/70 transition-all group-hover:w-16" />
              </div>
            </div>

            {/* Closing Statement */}
            <div className="mt-7 border-l-2 border-[#ff6500] pl-4">
              <p className="text-sm leading-6 text-gray-400">
                Celebrating cinematic heritage, creative collaboration and
                our commitment to professional film and advertising production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
