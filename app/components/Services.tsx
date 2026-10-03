
"use client";

import { motion } from "framer-motion";
import {
  Clapperboard,
  Cpu,
  Building2,
  BarChart3,
  Users,
  Video,
  Code2,
  Package,
  Monitor,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "TV Commercial",
    icon: Clapperboard,
    description: "Professional TV commercials and brand advertisements.",
  },
  {
    title: "AI Video Creation",
    icon: Cpu,
    description: "AI-powered promotional videos for brands and products.",
  },
  {
    title: "Corporate Film",
    icon: Building2,
    description: "Corporate profiles, company films and brand stories.",
  },
  {
    title: "Digital Marketing",
    icon: BarChart3,
    description: "Digital campaigns to increase your brand reach.",
  },
  {
    title: "Lead Generation",
    icon: Users,
    description: "Targeted campaigns to generate business enquiries.",
  },
  {
    title: "Documentary",
    icon: Video,
    description: "Documentary films for organisations and projects.",
  },
  {
    title: "Website Development",
    icon: Code2,
    description: "Professional, responsive and SEO-friendly websites.",
  },
  {
    title: "Product Video",
    icon: Package,
    description: "Creative product videos to showcase your brand.",
  },
  {
    title: "Green Screen Video",
    icon: Monitor,
    description: "Studio shoots with professional background replacement.",
  },
  {
    title: "UGC Video Production",
    icon: Smartphone,
    description: "Authentic promotional videos featuring real models.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#090a0d] text-white"
    >
      {/* Warm golden-lit film studio background */}
      <div
        className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-cover bg-center px-5 py-16 sm:min-h-[310px] md:min-h-[350px]"
        style={{
          backgroundImage: `
            linear-gradient(
              180deg,
              rgba(8,8,10,0.38) 0%,
              rgba(8,8,10,0.42) 55%,
              rgba(9,10,13,0.98) 100%
            ),
            linear-gradient(
              90deg,
              rgba(8,8,10,0.35),
              rgba(8,8,10,0.12),
              rgba(8,8,10,0.35)
            ),
            url("/services-studio-bg.png")
          `,
          backgroundPosition: "center 48%",
          backgroundSize: "cover",
        }}
      >
        {/* Warm cinematic glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,135,35,0.12),transparent_70%)]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-orange-500 sm:w-14" />

            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-400 sm:text-xs">
              Creative Solutions
            </span>

            <span className="h-px w-10 bg-orange-500 sm:w-14" />
          </div>

          <h2 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl md:text-7xl">
            Our <span className="text-orange-500">Services</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-100 sm:text-base sm:leading-7">
            From creative video production to digital marketing, we provide
            practical solutions to help your business communicate, connect
            and grow.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-3 rounded-md bg-orange-600 px-6 py-3.5 text-[10px] font-bold uppercase tracking-wider text-white transition duration-300 hover:bg-orange-500 sm:text-xs"
          >
            Discuss a Project
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Compact 10-service grid */}
      <div className="relative px-5 pb-16 pt-5 sm:px-8 sm:pb-20 sm:pt-8 md:px-10 lg:px-12">
        {/* Orange dot decoration */}
        <div className="pointer-events-none absolute left-3 top-4 grid grid-cols-6 gap-3 opacity-40 sm:left-8">
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={index}
              className="h-1 w-1 rounded-full bg-orange-500"
            />
          ))}
        </div>

        <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-orange-600/[0.05] blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.a
                key={service.title}
                href="#contact"
                aria-label={`Discuss ${service.title} service`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 5) * 0.06,
                }}
                className="group relative flex min-h-[170px] flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#101115] px-3 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/60 hover:bg-[#15120f] hover:shadow-[0_8px_30px_rgba(255,101,0,0.09)] sm:min-h-[180px]"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange-500/[0.07] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Orange service icon */}
                <div className="relative flex h-[66px] w-[66px] items-center justify-center rounded-full border border-orange-500/40 bg-[#171411] text-orange-500 transition-all duration-300 group-hover:border-orange-500 group-hover:shadow-[0_0_24px_rgba(255,101,0,0.18)]">
                  <Icon
                    size={30}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="relative mt-4 text-sm font-bold leading-snug text-gray-100 transition-colors duration-300 group-hover:text-orange-400 sm:text-[15px]">
                  {service.title}
                </h3>

                <span className="relative mt-3 h-[3px] w-7 rounded-full bg-orange-600 transition-all duration-300 group-hover:w-12" />

                <span className="sr-only">{service.description}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
