import Image from "next/image";

const teamMembers = [
  {
    name: "Mr. Swarup Roy",
    designation: "Co-Founder",
    image: "/team-03.png",
  },
  {
    name: "Miss. Margaret Cornallius",
    designation: "Marketing Head",
    image: "/team-01.png",
  },
  {
    name: "Mr. Sasanka Hore",
    designation: "Production Manager",
    image: "/team-02.png",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#050505] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[#ff6500]/[0.05] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#ff6500]/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff6500]/70 bg-[#ff6500]/[0.06] px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#ff6500]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff6500]" />
            Our Team
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            The People Behind
            <span className="block text-[#ff6500]">
              Sri Krishna Films
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#ff6500]" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Meet the key members of our team who contribute to our creative,
            production and marketing operations.
          </p>
        </div>

        {/* Team Members */}
        <div className="mt-12 grid gap-7 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] transition-all duration-500 hover:-translate-y-2 hover:border-[#ff6500]/70 hover:shadow-[0_0_35px_rgba(255,101,0,0.12)]"
            >

              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">

                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.designation}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bottom Image Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Orange Bottom Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#ff6500] transition-all duration-500 group-hover:w-full" />
              </div>

              {/* Information */}
              <div className="px-6 pb-7 pt-6">

                {/* Company Label */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-9 bg-[#ff6500]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ff6500]">
                    Sri Krishna Films
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-white">
                  {member.name}
                </h3>

                {/* Designation */}
                <p className="mt-3 text-base font-semibold text-[#ff6500]">
                  {member.designation}
                </p>

                {/* Divider */}
                <div className="mt-5 h-px w-full bg-white/10" />

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  A key member of the Sri Krishna Films team, contributing to
                  the professional growth and execution of our film,
                  advertising and creative projects.
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* Closing Statement */}
        <div className="mx-auto mt-12 max-w-3xl border-l-2 border-[#ff6500] pl-5 sm:mt-14">
          <p className="text-sm leading-7 text-gray-400 sm:text-base">
            Together, our team brings creative vision, production expertise
            and marketing experience to every project we undertake.
          </p>
        </div>

      </div>
    </section>
  );
}
