"use client";

import { Film, Users, Award, Rocket } from "lucide-react";

const features = [
  {
    icon: <Film size={40} />,
    title: "5000+",
    desc: "Video Advertisements Delivered",
  },
  {
    icon: <Users size={40} />,
    title: "1000+",
    desc: "Happy Clients Across India",
  },
  {
    icon: <Award size={40} />,
    title: "27+",
    desc: "Years of Excellence Since 1999",
  },
  {
    icon: <Rocket size={40} />,
    title: "Lead Focused",
    desc: "AI Videos & Digital Marketing",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="border border-yellow-500 text-yellow-400 px-5 py-2 rounded-full text-sm uppercase tracking-[3px]">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold text-yellow-400 mt-6">
            Why Choose Sri Krishna Films?
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            Since 1999, we have been helping brands grow through premium
            advertisements, corporate films, AI video creation and digital
            marketing solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-400 hover:scale-105 transition duration-300"
            >
              <div className="text-yellow-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold text-yellow-400">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}