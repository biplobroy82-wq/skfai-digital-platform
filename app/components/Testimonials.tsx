
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  Factory,
  GraduationCap,
  School,
  HeartPulse,
  House,
  Leaf,
  Smartphone,
  Hotel,
  ShoppingBag,
  PawPrint,
  Heart,
  Lightbulb,
  Gem,
  Shirt,
  Coffee,
  Globe,
  Landmark,
  Monitor,
  Video,
  Film,
  Clapperboard,
  BriefcaseBusiness,
  Stethoscope,
  BookOpen,
  Sprout,
  type LucideIcon,
} from "lucide-react";

type Group =
  | "Government"
  | "Corporate"
  | "Education"
  | "Healthcare"
  | "Real Estate"
  | "Retail & FMCG"
  | "Hospitality"
  | "Others";

type Client = {
  name: string;
  category: string;
  group: Group;
  highlight: string;
  icon: LucideIcon;
};

const clients: Client[] = [
  {
    name: "Kolkata Metro",
    category: "Government Infrastructure",
    group: "Government",
    highlight: "Organizational communication and professional video production.",
    icon: Building2,
  },
  {
    name: "Indian Oil Corporation (IOCL)",
    category: "Energy & Corporate",
    group: "Corporate",
    highlight: "Corporate communication, branding and advertising production.",
    icon: Factory,
  },
  {
    name: "IIT Kharagpur",
    category: "Education",
    group: "Education",
    highlight: "Institutional filming, video editing and production services.",
    icon: GraduationCap,
  },
  {
    name: "DAV Model School",
    category: "Education",
    group: "Education",
    highlight: "Educational promotional videos and event-related content.",
    icon: BookOpen,
  },
  {
    name: "Medica Hospital",
    category: "Healthcare",
    group: "Healthcare",
    highlight: "Healthcare communication and hospital promotional content.",
    icon: Stethoscope,
  },
  {
    name: "Shree Height Builders",
    category: "Real Estate",
    group: "Real Estate",
    highlight: "Property marketing videos and real estate advertisements.",
    icon: Building2,
  },
  {
    name: "Herbal & Cosmetic Brands",
    category: "Beauty & Wellness",
    group: "Retail & FMCG",
    highlight: "Product advertisements and beauty brand communication.",
    icon: Sprout,
  },
  {
    name: "Mobile App & Tech Startups",
    category: "Technology",
    group: "Others",
    highlight: "App explainers, digital product videos and promotional content.",
    icon: Smartphone,
  },
  {
    name: "Acadfinity",
    category: "Education Technology",
    group: "Education",
    highlight: "Educational platform promotion and digital video content.",
    icon: School,
  },
  {
    name: "Right Real Estate Jhabua",
    category: "Real Estate",
    group: "Real Estate",
    highlight: "Property promotion and real estate marketing videos.",
    icon: House,
  },
  {
    name: "Basant Home Stay",
    category: "Hospitality",
    group: "Hospitality",
    highlight: "Hospitality promotion and property showcase videos.",
    icon: Hotel,
  },
  {
    name: "KinKeeper Mobile App",
    category: "Mobile Application",
    group: "Others",
    highlight: "Mobile app promotion and digital product communication.",
    icon: Smartphone,
  },
  {
    name: "Izra Herbs",
    category: "Herbal Products",
    group: "Retail & FMCG",
    highlight: "Herbal product advertisements and brand promotion.",
    icon: Leaf,
  },
  {
    name: "Natraj Bag",
    category: "Bags & Accessories",
    group: "Retail & FMCG",
    highlight: "Product showcases and promotional advertising content.",
    icon: ShoppingBag,
  },
  {
    name: "Vet Sunrise Animal Food Products",
    category: "Animal Nutrition",
    group: "Retail & FMCG",
    highlight: "Animal food product promotion and commercial video content.",
    icon: PawPrint,
  },
  {
    name: "Benefit Wellness",
    category: "Health & Wellness",
    group: "Retail & FMCG",
    highlight: "Wellness product promotion and digital advertising content.",
    icon: Heart,
  },
  {
    name: "Luminexa",
    category: "Brand & Product Promotion",
    group: "Others",
    highlight: "Brand communication and product-focused video content.",
    icon: Lightbulb,
  },
  {
    name: "Maa Sarda Marble & Sanitation",
    category: "Marble & Sanitaryware",
    group: "Retail & FMCG",
    highlight: "Product showcases and showroom promotional videos.",
    icon: Gem,
  },
  {
    name: "Ashmika Hair Oil",
    category: "Hair Care & Beauty",
    group: "Retail & FMCG",
    highlight: "Hair care product advertisements and brand promotion.",
    icon: Sprout,
  },
  {
    name: "Raylight",
    category: "Brand & Product Promotion",
    group: "Others",
    highlight: "Commercial video content and product advertising.",
    icon: Lightbulb,
  },
  {
    name: "Vaanchata Stone Decor",
    category: "Construction Materials",
    group: "Others",
    highlight: "Laterite stone product promotion and brand showcase content.",
    icon: Gem,
  },
  {
    name: "Sumit Imported Korean Night Suits",
    category: "Fashion & Apparel",
    group: "Retail & FMCG",
    highlight: "Fashion product showcases and promotional video content.",
    icon: Shirt,
  },
  {
    name: "Fit & Glow Collagen Mix Coffee",
    category: "Food & Wellness",
    group: "Retail & FMCG",
    highlight: "Product advertisements and promotional brand communication.",
    icon: Coffee,
  },
  {
    name: "Vrumi Vedic",
    category: "Ayurvedic Products",
    group: "Retail & FMCG",
    highlight: "Ayurvedic product promotion and commercial advertising.",
    icon: Leaf,
  },
  {
    name: "Kerala Stone Factory",
    category: "Construction Materials",
    group: "Others",
    highlight: "Stone product showcases and business promotional videos.",
    icon: Gem,
  },
  {
    name: "Puja Lite",
    category: "Lighting Products",
    group: "Retail & FMCG",
    highlight: "Lighting product promotion and commercial advertising.",
    icon: Lightbulb,
  },
  {
    name: "MF Industries Pvt. Ltd.",
    category: "Manufacturing",
    group: "Corporate",
    highlight: "Product-focused promotional content for business communication.",
    icon: Factory,
  },
  {
    name: "Baro Maa Multi-Speciality Hospital",
    category: "Healthcare",
    group: "Healthcare",
    highlight: "Healthcare communication and hospital promotional content.",
    icon: HeartPulse,
  },
  {
    name: "NoticesInfo.com",
    category: "Digital Platform",
    group: "Others",
    highlight: "Digital platform awareness videos and promotional content.",
    icon: Monitor,
  },
  {
    name: "Kolkata Federation",
    category: "Industry & Organization",
    group: "Government",
    highlight: "Video production and creative communication services.",
    icon: Landmark,
  },
];

const filters: { label: string; group: Group | "All"; icon: LucideIcon }[] = [
  { label: "All", group: "All", icon: Building2 },
  { label: "Government", group: "Government", icon: Landmark },
  { label: "Corporate", group: "Corporate", icon: Building2 },
  { label: "Education", group: "Education", icon: GraduationCap },
  { label: "Healthcare", group: "Healthcare", icon: HeartPulse },
  { label: "Real Estate", group: "Real Estate", icon: House },
  { label: "Retail & FMCG", group: "Retail & FMCG", icon: ShoppingBag },
  { label: "Hospitality", group: "Hospitality", icon: Hotel },
  { label: "Others", group: "Others", icon: BriefcaseBusiness },
];

const accents = [
  "border-orange-500/80",
  "border-orange-500/60",
  "border-zinc-700",
  "border-orange-400/70",
  "border-zinc-700",
];

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState<Group | "All">("All");
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const filteredClients =
    activeFilter === "All"
      ? clients
      : clients.filter((client) => client.group === activeFilter);

  const visibleClients =
    activeFilter === "All" && !showAll
      ? filteredClients.slice(0, 15)
      : filteredClients;

  const selectFilter = (group: Group | "All") => {
    setActiveFilter(group);
    setExpanded(null);
  };

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#050505] px-4 py-14 sm:px-6 sm:py-20"
    >
      {/* Cinematic background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-10 -z-10 h-64 w-64 rounded-full bg-orange-600/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-20 -z-10 h-72 w-72 rounded-full bg-orange-500/10 blur-[110px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-24 top-12 -z-10 hidden opacity-[0.06] lg:block"
      >
        <Film size={300} strokeWidth={0.7} className="text-orange-500" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-10 top-20 -z-10 hidden opacity-[0.07] lg:block"
      >
        <Video size={220} strokeWidth={0.7} className="text-orange-500" />
      </motion.div>

      <div className="mx-auto max-w-[1500px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <motion.span
              animate={{ width: [20, 45, 20] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-[2px] bg-orange-500"
            />

            <motion.span
              animate={{
                boxShadow: [
                  "0 0 0px rgba(249,115,22,0)",
                  "0 0 14px rgba(249,115,22,0.3)",
                  "0 0 0px rgba(249,115,22,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="rounded-full border border-orange-500 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-orange-400 sm:text-xs"
            >
              Our Clients & Brands
            </motion.span>

            <motion.span
              animate={{ width: [20, 45, 20] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-[2px] bg-orange-500"
            />
          </div>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Organizations We&apos;ve{" "}
            <motion.span
              animate={{ color: ["#FFFFFF", "#FF6500", "#FFFFFF"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block"
            >
              Worked With
            </motion.span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7">
            We have had the privilege of working with organizations
            across different industries, helping them create impactful
            video content and marketing solutions.
          </p>

          <motion.div
            animate={{
              width: [45, 85, 45],
              boxShadow: [
                "0 0 4px rgba(249,115,22,0.3)",
                "0 0 16px rgba(249,115,22,0.8)",
                "0 0 4px rgba(249,115,22,0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mx-auto mt-5 h-[2px] bg-orange-500"
          />
        </motion.div>

        {/* Category filters */}
        <div className="mt-8 rounded-full border border-orange-500/80 bg-[#111113] p-1.5 shadow-[0_0_20px_rgba(249,115,22,0.07)] sm:mt-10">
          <div className="flex gap-1 overflow-x-auto scrollbar-none">
            {filters.map((filter) => {
              const FilterIcon = filter.icon;
              const selected = activeFilter === filter.group;

              const count =
                filter.group === "All"
                  ? clients.length
                  : clients.filter((c) => c.group === filter.group).length;

              return (
                <button
                  key={filter.label}
                  type="button"
                  onClick={() => selectFilter(filter.group)}
                  className={`flex shrink-0 items-center justify-center gap-2 rounded-full px-3 py-3 text-xs font-medium transition-all duration-300 sm:flex-1 sm:px-4 sm:text-sm ${
                    selected
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-[0_0_16px_rgba(249,115,22,0.2)]"
                      : "text-zinc-300 hover:bg-white/[0.06] hover:text-orange-400"
                  }`}
                >
                  <FilterIcon size={16} />
                  <span>{filter.label}</span>
                  {selected && (
                    <span className="text-[10px] opacity-80">
                      ({count})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Client cards */}
        <motion.div
          layout
          className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-3.5"
        >
          <AnimatePresence mode="popLayout">
            {visibleClients.map((client, index) => {
              const Icon = client.icon;
              const isExpanded = expanded === client.name;

              return (
                <motion.article
                  layout
                  key={client.name}
                  initial={{ opacity: 0, y: 14, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{
                    duration: 0.3,
                    delay: (index % 5) * 0.025,
                  }}
                  whileHover={{ y: -3 }}
                  className={`group relative min-w-0 overflow-hidden rounded-xl border bg-gradient-to-br from-[#191919] to-[#101012] p-3 transition-colors duration-300 hover:border-orange-400 hover:shadow-[0_0_18px_rgba(249,115,22,0.12)] sm:p-3.5 ${accents[index % accents.length]}`}
                >
                  {/* Animated orange top accent */}
                  <motion.div
                    animate={{ opacity: [0.65, 1, 0.65] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      delay: (index % 5) * 0.15,
                    }}
                    className="absolute left-0 top-0 h-[2px] w-10 bg-orange-500 group-hover:w-full"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setExpanded(isExpanded ? null : client.name)
                    }
                    aria-expanded={isExpanded}
                    className="flex w-full min-w-0 items-center gap-3 text-left"
                  >
                    {/* Industry icon */}
                    <motion.div
                      animate={{
                        y: [0, -2, 0],
                        rotate: [0, 2, 0, -2, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: (index % 6) * 0.12,
                      }}
                      className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-orange-500/20 via-zinc-800 to-black shadow-inner sm:h-[54px] sm:w-[54px]"
                    >
                      <div className="absolute inset-0 rounded-xl bg-orange-500/[0.04]" />
                      <Icon
                        size={27}
                        strokeWidth={1.8}
                        className="relative text-orange-400 drop-shadow-[0_0_5px_rgba(249,115,22,0.3)]"
                      />
                    </motion.div>

                    {/* Name and category */}
                    <div className="min-w-0 flex-1">
                      <h3 className="break-words text-sm font-semibold leading-snug text-white transition-colors group-hover:text-orange-300 sm:text-[13px]">
                        {client.name}
                      </h3>

                      <p className="mt-1 break-words text-[11px] leading-4 text-orange-400 sm:text-xs">
                        {client.category}
                      </p>
                    </div>

                    {/* Arrow */}
                    <motion.span
                      animate={{ x: isExpanded ? 2 : [0, 2, 0] }}
                      transition={{
                        duration: 2,
                        repeat: isExpanded ? 0 : Infinity,
                      }}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-zinc-600 text-zinc-300 transition-colors group-hover:border-orange-400 group-hover:text-orange-400"
                    >
                      <span className="text-lg leading-none">
                        {isExpanded ? "−" : "›"}
                      </span>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 border-t border-white/10 pt-3">
                          <p className="text-xs leading-5 text-zinc-300">
                            {client.highlight}
                          </p>
                          <div className="mt-2 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-orange-400">
                            <Clapperboard size={12} />
                            Project Highlights
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View all clients */}
        {activeFilter === "All" && (
          <div className="mt-7 flex items-center justify-center gap-3 sm:mt-8 sm:gap-6">
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-orange-500 to-orange-500/20 sm:block"
            />

            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setShowAll(!showAll);
                setExpanded(null);
              }}
              className="flex items-center gap-3 rounded-full border border-orange-500 bg-[#101010] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_18px_rgba(249,115,22,0.12)] transition-colors hover:bg-orange-500 hover:text-white"
            >
              {showAll ? "Show Less" : `View All Clients (${clients.length})`}
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-orange-400 text-base">
                {showAll ? "↑" : "→"}
              </span>
            </motion.button>

            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="hidden h-px flex-1 bg-gradient-to-l from-transparent via-orange-500 to-orange-500/20 sm:block"
            />
          </div>
        )}

        <p className="mt-6 text-center text-[10px] leading-5 text-zinc-500 sm:text-xs">
          Creative video production and advertising solutions across
          multiple industries.
        </p>
      </div>
    </section>
  );
}
