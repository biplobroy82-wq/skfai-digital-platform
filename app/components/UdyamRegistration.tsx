import Image from "next/image";
import { ExternalLink, ShieldCheck } from "lucide-react";

export default function UdyamRegistration() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#050505] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#ff5a00]/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-[#ff5a00]" />

            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff5a00]">
              Trusted & Registered
            </span>

            <span className="h-px w-16 bg-[#ff5a00]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Certifications &{" "}
            <span className="text-[#ff5a00]">
              Registrations
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Our business is officially registered under the Udyam Registration
            system of the Ministry of Micro, Small & Medium Enterprises,
            Government of India.
          </p>
        </div>

        {/* Udyam Card */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="group relative overflow-hidden rounded-2xl border border-[#ff5a00]/70 bg-[#0b0b0b] p-6 shadow-[0_0_45px_rgba(255,90,0,0.08)] transition-all duration-500 hover:shadow-[0_0_55px_rgba(255,90,0,0.15)] sm:p-8">

            {/* Orange corner accents */}
            <div className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-[#ff5a00]" />
            <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-[#ff5a00]" />

            <div className="relative flex flex-col items-center gap-8 md:flex-row md:items-center">

              {/* Logo */}
              <div className="flex w-full shrink-0 items-center justify-center md:w-[280px]">
                <div className="flex h-36 w-full items-center justify-center rounded-xl border border-white/10 bg-black/40 p-5">
                  <Image
                    src="/udyam-msme-logo.png"
                    alt="MSME Udyam Registration"
                    width={260}
                    height={110}
                    className="h-auto max-h-28 w-auto max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="hidden h-28 w-px bg-white/10 md:block" />

              {/* Information */}
              <div className="flex-1 text-center md:text-left">

                <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
                  <ShieldCheck
                    className="h-5 w-5 text-[#ff5a00]"
                    strokeWidth={2}
                  />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff5a00]">
                    Official Registration
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                  Udyam Registered Enterprise
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Sri Krishna Films & Advertisement Industry
                </p>

                <div className="mt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                    Udyam Registration Number
                  </p>

                  <p className="mt-1 text-lg font-bold tracking-wide text-white">
                    UDYAM-JH-04-0018929
                  </p>
                </div>

                <a
                  href="https://udyamregistration.gov.in/PrintUdyamApplication.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#ff5a00] px-5 py-3 text-sm font-bold text-[#ff5a00] transition-all duration-300 hover:bg-[#ff5a00] hover:text-white"
                >
                  Verify Registration
                  <ExternalLink className="h-4 w-4" />
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Small verification note */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-6 text-gray-500">
          Registration details can be verified through the official Udyam
          Registration portal of the Ministry of Micro, Small & Medium
          Enterprises, Government of India.
        </p>

      </div>
    </section>
  );
}
