
"use client";

import Image from "next/image";

const certificates = [
  {
    title: "AI Film Federation Union",
    subtitle: "Certificate of Recognition",
    image: "/ai-certificate.png",
    alt: "Sri Krishna Films AI Film Federation Union Certificate",
    description:
      "Recognition for contributions to the Indian film and advertisement industry.",
  },
  {
    title: "Udyam Registration",
    subtitle: "Government of India",
    image: "/udyam-certificate.png",
    alt: "Sri Krishna Films Udyam Registration Certificate",
    description:
      "Official Udyam registration of Sri Krishna Films & Advertisement Industry.",
  },
];

export default function Recognition() {
  return (
    <section
      id="certification"
      className="scroll-mt-24 bg-[#08090b] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#FF5A00]/40 bg-[#FF5A00]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF5A00]">
            Our Credentials
          </span>

          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="text-[#FF5A00]">Certifications</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            Our certifications reflect our business registration and
            professional recognition. Explore the official documents
            of Sri Krishna Films &amp; Advertisement Industry.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:gap-10">
          {certificates.map((certificate, index) => (
            <article
              key={certificate.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111316] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5A00]/60 hover:shadow-2xl hover:shadow-orange-950/20"
            >
              {/* Certificate Image */}
              <div className="relative flex min-h-[320px] items-center justify-center bg-white p-4 sm:min-h-[420px] sm:p-6">
                <Image
                  src={certificate.image}
                  alt={certificate.alt}
                  width={1000}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-auto max-h-[520px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />

                <span className="absolute left-5 top-5 rounded-md border border-[#FF5A00]/30 bg-black/85 px-3 py-1.5 text-xs font-bold tracking-wider text-white">
                  CERTIFICATE 0{index + 1}
                </span>
              </div>

              {/* Certificate Details */}
              <div className="p-6 sm:p-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FF5A00]">
                  {certificate.subtitle}
                </p>

                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {certificate.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  {certificate.description}
                </p>

                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#FF5A00]/50 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#FF5A00] hover:text-white"
                >
                  View Full Certificate
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-white/45">
            Sri Krishna Films &amp; Advertisement Industry · Kolkata
          </p>
        </div>
      </div>
    </section>
  );
}
