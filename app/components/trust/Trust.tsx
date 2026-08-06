import {
  Award,
  BriefcaseBusiness,
  Building2,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: <Award size={42} />,
    number: "27+",
    title: "Years Experience",
    desc: "Creative excellence since 1999.",
  },
  {
    icon: <BriefcaseBusiness size={42} />,
    number: "5000+",
    title: "Projects Completed",
    desc: "Advertising, films & digital campaigns.",
  },
  {
    icon: <Star size={42} />,
    number: "1000+",
    title: "Happy Clients",
    desc: "Businesses that trust our creativity.",
  },
  {
    icon: <Building2 size={42} />,
    number: "200+",
    title: "Brands Served",
    desc: "Companies across multiple industries.",
  },
];

export default function Trust() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden bg-[#050505] py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-yellow-500/5 blur-[120px]" />
        <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-yellow-400/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-yellow-500/40 bg-yellow-500/10 px-6 py-2 text-sm font-medium uppercase tracking-[4px] text-yellow-400 backdrop-blur">
            Trust & Experience
          </span>

          <h2 className="mt-7 text-4xl font-bold leading-tight text-white md:text-6xl">
            Trusted by Businesses
            <br />
            <span className="text-yellow-400">Since 1999</span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-400">
            With over{" "}
            <span className="font-semibold text-yellow-400">27+ Years</span> of
            experience,{" "}
            <span className="font-semibold text-yellow-400">5000+</span>{" "}
            successful projects,{" "}
            <span className="font-semibold text-yellow-400">1000+</span>{" "}
            satisfied clients and{" "}
            <span className="font-semibold text-yellow-400">200+</span> brands
            served, Sri Krishna Films & Advertisement Industry continues to
            deliver premium creative solutions across India.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-zinc-900/90 p-8 text-center backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:bg-zinc-950"
            >
              {/* Glow */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-70" />

              <div className="flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-black">
                  {item.icon}
                </div>
              </div>

              <h3 className="mt-6 text-5xl font-extrabold text-yellow-400">
                {item.number}
              </h3>

              <div className="mx-auto mt-4 h-px w-16 bg-yellow-500/40" />

              <h4 className="mt-5 text-xl font-semibold text-white">
                {item.title}
              </h4>

              <p className="mt-4 leading-7 text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}