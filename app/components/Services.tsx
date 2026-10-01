
import Link from "next/link";
import {
  Clapperboard,
  Bot,
  Film,
  Smartphone,
  TrendingUp,
  Globe,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "TV Commercial",
    desc: "High-impact TV ads that build brand trust and reach customers.",
    icon: Clapperboard,
    href: "/tv-commercial-production",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "AI Video Creation",
    desc: "AI-powered promotional videos for products, brands and businesses.",
    icon: Bot,
    href: "/ai-video-production",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Corporate Film",
    desc: "Company profiles, corporate films and professional brand stories.",
    icon: Film,
    href: "/#contact",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Digital Marketing",
    desc: "Facebook, Instagram and Google Ads campaigns focused on growth.",
    icon: Smartphone,
    href: "/digital-marketing",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Lead Generation",
    desc: "Targeted business enquiries through strategic digital campaigns.",
    icon: TrendingUp,
    href: "/lead-generation",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Documentary",
    desc: "Documentary films for organisations, institutions and projects.",
    icon: Clapperboard,
    href: "/#contact",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Website Development",
    desc: "Responsive, professional and SEO-friendly websites built for business growth.",
    icon: Globe,
    href: "/website-development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=85",
    wide: true,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate w-full overflow-hidden bg-[#080b10] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Cinematic background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 95% 0%, rgba(255,90,0,0.30), transparent 28%), radial-gradient(circle at 0% 100%, rgba(255,90,0,0.10), transparent 25%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-9 grid grid-cols-1 gap-6 md:mb-12 md:grid-cols-12 md:items-end md:gap-8">
          <div className="md:col-span-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[3px] w-9 bg-[#ff6500]" />
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#ff792e]">
                What We Do
              </p>
            </div>

            <h2
              id="services-heading"
              className="font-[var(--font-display)] text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Our Services
            </h2>

            <div className="mt-4 h-[3px] w-16 bg-[#ff6500]" />
          </div>

          <div className="md:col-span-4">
            <p className="max-w-md text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
              From creative video production to digital marketing, we
              provide practical solutions to help your business
              communicate, connect and grow.
            </p>
          </div>

          <div className="md:col-span-2 md:justify-self-end">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:text-[#ff792e]"
            >
              Discuss a Project
              <ArrowRight size={17} className="text-[#ff6500]" />
            </Link>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                aria-label={`Explore ${service.title} services`}
                className={`group relative isolate flex min-h-[265px] min-w-0 flex-col justify-between overflow-hidden rounded-lg border border-white/15 bg-[#10141b] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6500]/80 hover:shadow-[0_14px_40px_rgba(255,101,0,0.12)] sm:min-h-[275px] sm:p-6 ${
                  service.wide
                    ? "lg:col-span-3 lg:min-h-[235px] lg:flex-row lg:items-center lg:px-8 lg:py-7"
                    : ""
                }`}
              >
                {/* Background image */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                  }}
                />

                {/* Dark overlay for readable text */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 -z-10 ${
                    service.wide
                      ? "bg-gradient-to-r from-[#080b10] via-[#080b10]/95 to-[#080b10]/20"
                      : "bg-gradient-to-r from-[#080b10]/95 via-[#080b10]/80 to-[#080b10]/25"
                  }`}
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#080b10]/75 via-transparent to-black/10"
                />

                {/* Orange hover accent */}
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#ff6500] transition-all duration-500 group-hover:w-full" />

                {/* Service content */}
                <div
                  className={`flex min-w-0 flex-1 flex-col ${
                    service.wide ? "lg:max-w-[52%]" : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-[#ff6500]/60 bg-[#ff6500]/10 text-[#ff792e] backdrop-blur-sm transition-all duration-300 group-hover:bg-[#ff6500] group-hover:text-white">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff792e]">
                    Service {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-[var(--font-display)] text-xl font-bold uppercase leading-tight text-white transition-colors group-hover:text-[#ff8a3d] sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-gray-300">
                    {service.desc}
                  </p>
                </div>

                {/* Explore link */}
                <div
                  className={`mt-5 flex items-center justify-between border-t border-white/20 pt-3 ${
                    service.wide
                      ? "lg:mt-0 lg:w-[42%] lg:self-end"
                      : ""
                  }`}
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors group-hover:text-[#ff8a3d]">
                    Explore Service
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center border border-white/20 text-[#ff6500] transition-all duration-300 group-hover:border-[#ff6500] group-hover:bg-[#ff6500] group-hover:text-white">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-gray-400">
            Creative production and digital solutions for businesses
            and brands.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff792e] transition-colors hover:text-white"
          >
            Have a project in mind?
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
