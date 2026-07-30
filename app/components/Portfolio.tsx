import {
  Film,
  Tv,
  Camera,
  Clapperboard,
  MonitorPlay,
  Sparkles,
  Users,
  Scan,
  Factory,
} from "lucide-react";

const services = [
  {
    icon: <Tv size={40} />,
    title: "TV Commercial",
    description:
      "Creative television advertisements for powerful brand promotion.",
  },
  {
    icon: <Film size={40} />,
    title: "Corporate Film",
    description:
      "Professional corporate films that build trust and brand identity.",
  },
  {
    icon: <Sparkles size={40} />,
    title: "AI Advertisement",
    description:
      "Modern AI-powered video advertisements with cinematic quality.",
  },
  {
    icon: <Camera size={40} />,
    title: "Product Shoot",
    description:
      "Premium product photography and commercial video production.",
  },
  {
    icon: <Clapperboard size={40} />,
    title: "Music & Film Production",
    description:
      "Music videos, short films and complete production solutions.",
  },
  {
    icon: <MonitorPlay size={40} />,
    title: "Digital Marketing",
    description:
      "Facebook, Instagram, Google Ads and complete digital campaigns.",
  },

  // NEW SERVICES

  {
    icon: <Users size={40} />,
    title: "Customer Review Video",
    description:
      "Professional customer testimonial videos that build trust and improve business credibility.",
  },
  {
    icon: <Scan size={40} />,
    title: "Green Screen Video",
    description:
      "Professional chroma key video production with cinematic editing and visual effects.",
  },
  {
    icon: <Factory size={40} />,
    title: "Industrial Shoot",
    description:
      "Factory, manufacturing unit and industrial process videography with premium cinematic production.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-block border border-yellow-500 rounded-full px-5 py-2 text-yellow-400 uppercase tracking-[4px] text-sm">
            Our Expertise
          </span>

          <h2 className="text-5xl font-bold text-yellow-400 mt-6">
            Our Portfolio
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-8">
            Delivering creative advertising, filmmaking, corporate branding,
            AI video creation and digital marketing solutions with innovation,
            quality and professionalism.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-yellow-500/30 rounded-2xl p-8 text-center hover:bg-yellow-500 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center text-yellow-400 group-hover:text-black mb-6 transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-black transition-colors duration-300">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-300 group-hover:text-black leading-7 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}