
"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Video,
  UserRound,
  Clapperboard,
  Film,
  Tv,
  Building2,
  Music,
  Camera,
  CheckCircle2,
  ArrowUpRight,
  Clock,
  Users,
  BadgeIndianRupee,
  CircleHelp,
} from "lucide-react";

const quickServices = [
  {
    title: "AI Video Ad",
    duration: "Up to 20 seconds",
    price: "₹400",
    icon: Sparkles,
  },
  {
    title: "AI Video Ad",
    duration: "30–40 seconds",
    price: "₹750",
    icon: Video,
  },
  {
    title: "AI Video Ad",
    duration: "1 min–1 min 10 sec",
    price: "₹1,200",
    icon: Clock,
  },
  {
    title: "Customer Review Video",
    duration: "Real artist",
    price: "₹1,500",
    icon: UserRound,
  },
  {
    title: "Green Screen Video",
    duration: "Real model",
    price: "₹2,500",
    icon: Camera,
  },
  {
    title: "Storyline Advertisement",
    duration: "Multiple artists",
    price: "₹15,000+",
    icon: Clapperboard,
  },
  {
    title: "Celebrity Advertisement",
    duration: "Celebrity casting included as per project",
    price: "₹40,000+",
    icon: Users,
  },
];

const bulkPackages = [
  {
    title: "6 UGC Videos",
    subtitle: "With 6 artists",
    price: "₹10,000",
    note: "Multiple faces for your brand",
  },
  {
    title: "6 UGC Videos",
    subtitle: "With 3 artists",
    price: "₹8,000",
    note: "Variety with a smaller artist team",
  },
  {
    title: "6 UGC Videos",
    subtitle: "With a single model",
    price: "₹6,000",
    note: "Consistent brand presentation",
  },
  {
    title: "Bulk Video Offer",
    subtitle: "Minimum 5 videos with 5 artists",
    price: "₹10,000",
    note: "For bulk promotional campaigns",
  },
];

const customProjects = [
  {
    title: "TVC / Television Commercial",
    icon: Tv,
  },
  {
    title: "Corporate & Industrial Ads",
    icon: Building2,
  },
  {
    title: "Film & Documentary",
    icon: Film,
  },
  {
    title: "Music Video",
    icon: Music,
  },
  {
    title: "Other Large Productions",
    icon: Clapperboard,
  },
];

export default function ServiceRateCard() {
  return (
    <section
      id="rate-card"
      className="relative overflow-hidden bg-[#090a0d] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-orange-600/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-orange-500/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-orange-500 sm:w-14" />
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-orange-400 sm:text-xs">
              Transparent Pricing
            </span>
            <span className="h-px w-9 bg-orange-500 sm:w-14" />
          </div>

          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Service <span className="text-orange-500">Rate Card</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            From affordable AI video ads to complete commercial productions,
            choose the right video solution for your business.
          </p>
        </motion.div>

        {/* Quick service pricing */}
        <div className="mb-16">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Section 01
              </p>
              <h3 className="text-2xl font-bold sm:text-3xl">
                Video Production <span className="text-orange-500">Rates</span>
              </h3>
            </div>
            <span className="text-xs text-gray-500">
              Starting prices · INR
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.a
                  key={`${service.title}-${service.duration}`}
                  href="#contact"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
                  className="group flex min-h-[150px] items-center gap-4 rounded-xl border border-white/10 bg-[#101115] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-[#15120f] sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/[0.07] text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-black">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold leading-snug text-white sm:text-base">
                      {service.title}
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-gray-400">
                      {service.duration}
                    </p>
                    <div className="mt-3 text-xl font-black text-orange-500 sm:text-2xl">
                      {service.price}
                    </div>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-gray-600 transition-colors group-hover:text-orange-500"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Bulk packages */}
        <div className="mb-16">
          <div className="mb-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Section 02
            </p>
            <h3 className="text-2xl font-bold sm:text-3xl">
              UGC & Bulk <span className="text-orange-500">Offers</span>
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Multiple videos for brands that need regular promotional content.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bulkPackages.map((item, index) => (
              <motion.div
                key={item.title + item.subtitle}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative flex flex-col rounded-xl border border-orange-500/25 bg-[#101115] p-5 sm:p-6"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <Users size={21} />
                </div>

                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="mt-1 min-h-10 text-sm text-gray-400">
                  {item.subtitle}
                </p>

                <div className="my-5 border-t border-white/10" />

                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Package Price
                </p>
                <p className="mt-1 text-3xl font-black text-orange-500">
                  {item.price}
                </p>

                <p className="mt-3 flex-1 text-xs leading-5 text-gray-400">
                  {item.note}
                </p>

                <a
                  href="#contact"
                  className="mt-5 flex items-center justify-center gap-2 rounded-md border border-orange-500/40 px-4 py-3 text-xs font-bold uppercase tracking-wider text-orange-400 transition-colors hover:bg-orange-500 hover:text-black"
                >
                  Enquire Now
                  <ArrowUpRight size={15} />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <CircleHelp
              size={19}
              className="mt-0.5 shrink-0 text-orange-500"
            />
            <p className="text-xs leading-6 text-gray-400 sm:text-sm">
              Bulk packages are subject to the agreed scope, artist
              availability and deliverables. Confirm the final package details
              with our team before booking.
            </p>
          </div>
        </div>

        {/* Large projects */}
        <div className="mb-12 rounded-2xl border border-white/10 bg-[#101115] p-5 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Section 03
              </p>
              <h3 className="text-2xl font-black uppercase leading-tight sm:text-4xl">
                Large-Scale
                <span className="block text-orange-500">Productions</span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Need a complete production? We plan projects according to your
                script, creative brief, location, cast and production
                requirements.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-orange-500/30 bg-orange-500/[0.06] px-4 py-3 text-sm font-semibold text-orange-400">
                <BadgeIndianRupee size={18} />
                Custom Project Quotation
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {customProjects.map((project) => {
                const Icon = project.icon;

                return (
                  <div
                    key={project.title}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-4"
                  >
                    <Icon
                      size={21}
                      className="shrink-0 text-orange-500"
                    />
                    <span className="text-sm font-semibold text-gray-200">
                      {project.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-sm leading-7 text-gray-400">
              <span className="font-bold text-white">Pricing:</span> TVC,
              films, documentaries, industrial advertisements, music videos
              and other large projects are quoted individually based on the
              script, duration, artist requirements, locations and production
              scope.
            </p>
          </div>
        </div>

        {/* Additional charges notice */}
        <div className="mb-10 flex items-start gap-4 rounded-xl border border-orange-500/30 bg-orange-500/[0.05] p-5 sm:p-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-black">
            <CircleHelp size={23} />
          </div>

          <div>
            <h4 className="font-bold text-white">
              Additional Production Requirements
            </h4>
            <p className="mt-2 text-sm leading-7 text-gray-400">
              Special sets, additional camera equipment, makeup artists,
              costumes, location rentals, travel and other specific
              requirements may incur additional charges. These will be
              discussed and quoted separately before the production begins.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-xl border border-white/10 bg-gradient-to-r from-[#17120e] via-[#151115] to-[#101115] px-5 py-8 text-center sm:px-10 sm:py-10">
          <CheckCircle2
            size={30}
            className="mx-auto mb-4 text-orange-500"
          />

          <h3 className="text-xl font-black uppercase sm:text-3xl">
            Have a Project in Mind?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400">
            Share your idea, script or requirements. We will help you choose
            the right production plan and provide a quotation.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-3 rounded-md bg-orange-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-orange-500"
          >
            Get a Project Quote
            <ArrowUpRight size={17} />
          </a>

          <p className="mt-4 text-xs text-gray-500">
            Sri Krishna Films & Advertisement Industry · Kolkata
          </p>
        </div>
      </div>
    </section>
  );
}
