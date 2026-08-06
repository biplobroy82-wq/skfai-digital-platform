import {
  Clapperboard,
  Camera,
  Scan,
  Lightbulb,
  Mic2,
  MonitorPlay,
  Plane,
  Sparkles,
} from "lucide-react";

const facilities = [
  {
    icon: <Clapperboard size={46} />,
    title: "Film Studio",
    description:
      "Professional indoor studio for commercials, interviews, reels and cinematic productions.",
  },
  {
    icon: <Scan size={46} />,
    title: "Green Screen Studio",
    description:
      "Premium chroma setup for virtual backgrounds, VFX and creative video production.",
  },
  {
    icon: <Camera size={46} />,
    title: "4K Camera Setup",
    description:
      "Professional cameras with cinematic lenses for high-quality video production.",
  },
  {
    icon: <Lightbulb size={46} />,
    title: "Professional Lighting",
    description:
      "Studio lighting setup for balanced, soft and premium cinematic visuals.",
  },
  {
    icon: <Mic2 size={46} />,
    title: "Audio Recording",
    description:
      "Crystal-clear voice recording with professional microphones and audio equipment.",
  },
  {
    icon: <MonitorPlay size={46} />,
    title: "Video Editing & VFX",
    description:
      "Creative editing, color grading, motion graphics and cinematic visual effects.",
  },
  {
    icon: <Plane size={46} />,
    title: "Drone Shoot",
    description:
      "Aerial photography and cinematic drone videography for events and commercial projects.",
  },
  {
    icon: <Sparkles size={46} />,
    title: "Creative Production",
    description:
      "Complete concept development, scripting, direction and post-production under one roof.",
  },
];

export default function ProductionFacilities() {
  return (
    <section
      id="production-facilities"
      className="bg-[#080808] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-yellow-500/40 px-5 py-2 text-sm uppercase tracking-[4px] text-yellow-400">
            Production Facilities
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Professional Studio Infrastructure
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-yellow-500" />

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            From pre-production to final delivery, Sri Krishna Films &
            Advertisement Industry offers complete filmmaking, photography,
            editing and digital production services with modern equipment and
            experienced professionals.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-yellow-500/20 bg-zinc-900 p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:bg-yellow-500"
            >
              <div className="mb-6 flex justify-center text-yellow-400 transition-all duration-500 group-hover:scale-110 group-hover:text-black">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white transition-colors duration-500 group-hover:text-black">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-300 transition-colors duration-500 group-hover:text-black">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-transparent p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Everything You Need Under One Roof
          </h3>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-gray-300">
            Whether you need a TV commercial, corporate film, product shoot,
            music video, AI advertisement, drone shoot or complete digital
            marketing campaign, our experienced team delivers high-quality
            creative solutions tailored to your business goals.
          </p>
        </div>
      </div>
    </section>
  );
}