
import Link from "next/link";
import {
  Clapperboard,
  Bot,
  Film,
  Smartphone,
  TrendingUp,
  Monitor,
  Globe,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "TV Commercial",
    desc: "Creative TV advertisements that build brand trust and help businesses reach more customers.",
    icon: Clapperboard,
    href: "/tv-commercial-production",
  },
  {
    title: "AI Video Creation",
    desc: "AI-powered promotional videos for products, brands and businesses at affordable prices.",
    icon: Bot,
    href: "/ai-video-production",
  },
  {
    title: "Corporate Film",
    desc: "Professional company profiles, corporate films and documentary production.",
    icon: Film,
    href: "/#contact",
  },
  {
    title: "Digital Marketing",
    desc: "Facebook, Instagram and Google Ads campaigns focused on business enquiries and growth.",
    icon: Smartphone,
    href: "/digital-marketing",
  },
  {
    title: "Lead Generation",
    desc: "Targeted business leads supported by strategic digital advertising and campaign planning.",
    icon: TrendingUp,
    href: "/lead-generation",
  },
  {
    title: "Documentary",
    desc: "Documentary filmmaking for corporate organisations, institutions and other projects.",
    icon: Clapperboard,
    href: "/#contact",
  },
  {
    title: "Website Development",
    desc: "Professional, responsive and SEO-friendly websites for businesses and brands.",
    icon: Globe,
    href: "/website-development",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full overflow-hidden bg-[#191b20] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="mb-9 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ff5a00]">
              What We Do
            </p>

            <h2
              id="services-heading"
              className="font-[var(--font-display)] text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Our Services
            </h2>

            <div className="mt-4 h-1 w-16 bg-[#ff5a00]" />
          </div>

          <div className="flex max-w-lg flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:gap-8">
            <p className="max-w-md text-sm leading-6 text-gray-400 sm:text-base">
              From creative video production to digital marketing,
              we provide practical solutions to help your business
              communicate, connect and grow.
            </p>

            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:text-[#ff5a00]"
            >
              Discuss a Project
              <ArrowRight size={17} className="text-[#ff5a00]" />
            </Link>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                aria-label={`Learn more about ${service.title}`}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-sm border border-white/[0.08] bg-[#25282e] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5a00]/70 hover:bg-[#2b2e34] sm:p-6 lg:p-7"
              >
                {/* Orange top accent */}
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#ff5a00] transition-all duration-300 group-hover:w-full" />

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[#ff5a00]/35 bg-[#ff5a00]/10 text-[#ff6a1a] transition-colors duration-300 group-hover:bg-[#ff5a00] group-hover:text-white">
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#ff7a32]">
                    Service {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="font-[var(--font-display)] text-xl font-bold uppercase leading-tight text-white transition-colors group-hover:text-[#ff7a32] sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-gray-400">
                    {service.desc}
                  </p>

                  {/* Learn More */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-300 transition-colors group-hover:text-white">
                      Learn More
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center border border-white/10 text-[#ff5a00] transition-all group-hover:border-[#ff5a00] group-hover:bg-[#ff5a00] group-hover:text-white">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-gray-500">
            Tailored video production and digital solutions for businesses.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff7a32] transition-colors hover:text-white"
          >
            Have a project in mind?
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
