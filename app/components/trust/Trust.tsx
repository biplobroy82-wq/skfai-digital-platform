
import {
  Award,
  BriefcaseBusiness,
  Building2,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: Award,
    number: "27+",
    title: "Years of Experience",
    desc: "Creative excellence since 1999.",
  },
  {
    icon: BriefcaseBusiness,
    number: "5000+",
    title: "Projects Completed",
    desc: "Advertising, films and digital campaigns.",
  },
  {
    icon: Star,
    number: "1000+",
    title: "Happy Clients",
    desc: "Businesses that trust our creativity.",
  },
  {
    icon: Building2,
    number: "200+",
    title: "Brands Served",
    desc: "Brands across multiple industries.",
  },
];

export default function Trust() {
  return (
    <section
      id="trust"
      className="relative isolate overflow-hidden bg-[#0B0D10] py-16 sm:py-20 lg:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#FF5A00]/10 blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#FF5A00]/5 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-orange-600/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#FF5A00]/40 bg-[#FF5A00]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#FF7A33] sm:px-6 sm:text-sm sm:tracking-[4px]">
            Trust &amp; Experience
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Trusted by Businesses
            <br />
            <span className="text-[#FF5A00]">
              Since 1999
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
            With over{" "}
            <span className="font-semibold text-[#FF7A33]">27+ years</span>{" "}
            of experience,{" "}
            <span className="font-semibold text-[#FF7A33]">5000+</span>{" "}
            projects,{" "}
            <span className="font-semibold text-[#FF7A33]">1000+</span>{" "}
            clients and{" "}
            <span className="font-semibold text-[#FF7A33]">200+</span>{" "}
            brands served, Sri Krishna Films &amp; Advertisement Industry
            delivers creative video production and advertising solutions.
          </p>
        </div>

        {/* Statistics cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#25282E] p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#FF5A00]/60 hover:bg-[#292D33] sm:p-8"
              >
                {/* Orange top accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#FF5A00] to-transparent opacity-80" />

                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl border border-[#FF5A00]/30 bg-[#FF5A00]/10 text-[#FF5A00] transition-all duration-300 group-hover:bg-[#FF5A00] group-hover:text-white sm:h-20 sm:w-20">
                  <Icon size={36} strokeWidth={1.7} />
                </div>

                {/* Number */}
                <h3 className="mt-6 text-4xl font-extrabold tracking-tight text-[#FF5A00] sm:text-5xl">
                  {item.number}
                </h3>

                <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#FF5A00]/70" />

                {/* Title */}
                <h4 className="mt-5 text-lg font-bold text-white sm:text-xl">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
