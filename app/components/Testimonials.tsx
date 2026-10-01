
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
  Sprout,
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
  Camera,
  Clapperboard,
  Video,
  Package,
  BookOpen,
  Stethoscope,
  BriefcaseBusiness,
  ChevronDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const clients = [
  {
    name: "Kolkata Metro",
    category: "Government Infrastructure",
    highlight:
      "Organizational communication videos and professional production services.",
  },
  {
    name: "Indian Oil Corporation (IOCL)",
    category: "Corporate & Energy",
    highlight:
      "Corporate communication, branding and advertisement production.",
  },
  {
    name: "IIT Kharagpur",
    category: "Educational Institution",
    highlight:
      "Filming, video editing and institutional production services.",
  },
  {
    name: "DAV Model School",
    category: "Education",
    highlight:
      "Educational promotional videos and event-related content.",
  },
  {
    name: "Medica Hospital",
    category: "Healthcare",
    highlight:
      "Healthcare communication and hospital promotional content.",
  },
  {
    name: "Shree Height Builders",
    category: "Real Estate",
    highlight:
      "Property marketing videos and real estate advertisements.",
  },
  {
    name: "Herbal & Cosmetic Brands",
    category: "Beauty & Wellness",
    highlight:
      "Product advertisements and beauty brand communication.",
  },
  {
    name: "Mobile App & Tech Startups",
    category: "Technology",
    highlight:
      "App explainers, digital product videos and promotional content.",
  },
  {
    name: "Acadfinity",
    category: "Education Technology",
    highlight:
      "Educational platform promotion and digital video content.",
  },
  {
    name: "Right Real Estate Jhabua",
    category: "Real Estate",
    highlight:
      "Property promotion and real estate marketing videos.",
  },
  {
    name: "Basant Home Stay",
    category: "Hospitality & Tourism",
    highlight:
      "Hospitality promotion and property showcase videos.",
  },
  {
    name: "KinKeeper Mobile App",
    category: "Mobile Application",
    highlight:
      "Mobile app promotion and digital product communication.",
  },
  {
    name: "Izra Herbs",
    category: "Herbal Products",
    highlight:
      "Herbal product advertisements and brand promotion.",
  },
  {
    name: "Natraj Bag",
    category: "Bags & Accessories",
    highlight:
      "Product showcase videos and promotional advertising.",
  },
  {
    name: "Vet Sunrise Animal Food Products",
    category: "Animal Nutrition",
    highlight:
      "Animal food product promotion and commercial video content.",
  },
  {
    name: "Benefit Wellness",
    category: "Health & Wellness",
    highlight:
      "Wellness product promotion and digital advertising content.",
  },
  {
    name: "Luminexa",
    category: "Brand & Product Promotion",
    highlight:
      "Brand communication and product-focused video content.",
  },
  {
    name: "Maa Sarda Marble & Sanitation",
    category: "Marble & Sanitaryware",
    highlight:
      "Product showcases and showroom promotional videos.",
  },
  {
    name: "Ashmika Hair Oil",
    category: "Hair Care & Beauty",
    highlight:
      "Hair care product advertisements and brand promotion.",
  },
  {
    name: "Raylight",
    category: "Brand & Product Promotion",
    highlight:
      "Commercial video content and product advertising.",
  },
  {
    name: "Vaanchata Stone Decor",
    category: "Stone & Building Materials",
    highlight:
      "Laterite stone product promotion and brand showcase videos.",
  },
  {
    name: "Sumit Imported Korean Night Suits",
    category: "Fashion & Apparel",
    highlight:
      "Fashion product showcases and promotional video content.",
  },
  {
    name: "Fit & Glow Collagen Mix Coffee",
    category: "Beauty & Wellness Products",
    highlight:
      "Product advertisements and promotional brand communication.",
  },
  {
    name: "Vrumi Vedic",
    category: "Ayurvedic Products",
    highlight:
      "Ayurvedic product promotion and commercial advertising.",
  },
  {
    name: "Kerala Stone Factory",
    category: "Stone & Building Materials",
    highlight:
      "Stone product showcases and business promotional videos.",
  },
  {
    name: "Puja Lite",
    category: "Lighting Products",
    highlight:
      "Lighting product promotion and commercial advertising.",
  },
  {
    name: "MF Industries Pvt. Ltd.",
    category: "Manufacturing",
    highlight:
      "Product-focused promotional content for business communication.",
  },
  {
    name: "Baro Maa Multi-Speciality Hospital",
    category: "Healthcare",
    highlight:
      "Healthcare communication and hospital promotional content.",
  },
  {
    name: "NoticesInfo.com",
    category: "Digital Platform",
    highlight:
      "Digital platform awareness videos and promotional content.",
  },
  {
    name: "Kolkata Federation",
    category: "Industry & Organization",
    highlight:
      "Video production and creative communication services.",
  },
];

function getClientIcon(
  name: string,
  category: string
): LucideIcon {
  const text = `${name} ${category}`.toLowerCase();

  if (text.includes("metro")) return Building2;
  if (text.includes("oil") || text.includes("energy")) return Factory;
  if (text.includes("iit")) return GraduationCap;
  if (text.includes("school") || text.includes("education")) {
    return School;
  }
  if (text.includes("hospital") || text.includes("healthcare")) {
    return Stethoscope;
  }
  if (text.includes("real estate") || text.includes("builder")) {
    return House;
  }
  if (text.includes("herb") || text.includes("ayurvedic")) {
    return Sprout;
  }
  if (text.includes("wellness") || text.includes("collagen")) {
    return Heart;
  }
  if (text.includes("app") || text.includes("technology")) {
    return Smartphone;
  }
  if (text.includes("home stay") || text.includes("tourism")) {
    return Hotel;
  }
  if (text.includes("animal") || text.includes("vet ")) {
    return PawPrint;
  }
  if (text.includes("bag")) return ShoppingBag;
  if (text.includes("marble") || text.includes("stone")) {
    return Gem;
  }
  if (text.includes("hair care") || text.includes("hair oil")) {
    return Leaf;
  }
  if (text.includes("fashion") || text.includes("apparel")) {
    return Shirt;
  }
  if (text.includes("coffee")) return Coffee;
  if (text.includes("lighting")) return Lightbulb;
  if (text.includes("manufacturing")) return Factory;
  if (text.includes("digital platform")) return Globe;
  if (text.includes("federation") || text.includes("organization")) {
    return Landmark;
  }
  if (text.includes("brand") || text.includes("product")) {
    return Package;
  }
  if (text.includes("mobile")) return Smartphone;

  return BriefcaseBusiness;
}

const cardThemes = [
  {
    border: "border-orange-500/40",
    glow: "group-hover:shadow-orange-500/10",
    iconBg: "from-orange-500/20 to-orange-500/5",
    iconColor: "text-orange-400",
    shape: "rounded-tl-2xl rounded-br-2xl",
  },
  {
    border: "border-white/15",
    glow: "group-hover:shadow-white/5",
    iconBg: "from-white/10 to-zinc-800/20",
    iconColor: "text-white",
    shape: "rounded-2xl",
  },
  {
    border: "border-orange-500/25",
    glow: "group-hover:shadow-orange-500/10",
    iconBg: "from-orange-400/15 to-transparent",
    iconColor: "text-orange-300",
    shape: "rounded-xl",
  },
  {
    border: "border-zinc-700",
    glow: "group-hover:shadow-orange-500/10",
    iconBg: "from-zinc-700/60 to-black",
    iconColor: "text-orange-400",
    shape: "rounded-t-2xl rounded-b-lg",
  },
];

export default function Testimonials() {
  const [expandedClient, setExpandedClient] = useState<string | null>(
    null
  );

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#070707] px-4 py-14 sm:px-6 sm:py-20"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-orange-600/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-72 w-72 rounded-full bg-orange-500/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Animated heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            animate={{ borderColor: [
              "rgba(249,115,22,0.35)",
              "rgba(249,115,22,0.8)",
              "rgba(249,115,22,0.35)",
            ] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-2 rounded-full border bg-orange-500/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[2px] text-orange-400 sm:text-xs"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.85, 1.15, 0.85] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-orange-500"
            />
            Our Clients & Brands
          </motion.span>

          <h2 className="mt-5 text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Organizations We&apos;ve{" "}
            <motion.span
              animate={{ color: ["#F97316", "#FDBA74", "#F97316"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block"
            >
              Worked With
            </motion.span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-zinc-400 sm:mt-4 sm:text-sm sm:leading-7">
            Explore our work across corporate, education, healthcare,
            real estate, technology, manufacturing and consumer brands.
          </p>

          <motion.div
            animate={{ width: [38, 68, 38], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mx-auto mt-5 h-0.5 rounded-full bg-orange-500"
          />
        </motion.div>

        {/* Compact client directory */}
        <div className="mt-9 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4 xl:gap-5">
          {clients.map((client, index) => {
            const theme = cardThemes[index % cardThemes.length];
            const Icon = getClientIcon(client.name, client.category);
            const isExpanded = expandedClient === client.name;

            return (
              <motion.article
                key={client.name}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.4,
                  delay: (index % 4) * 0.045,
                }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`group relative flex min-w-0 flex-col overflow-hidden border bg-zinc-950/90 p-3 shadow-lg transition-colors duration-300 hover:border-orange-400 hover:bg-zinc-900 sm:p-4 ${theme.border} ${theme.shape} ${theme.glow}`}
              >
                {/* Animated top accent */}
                <motion.div
                  animate={{ opacity: [0.65, 1, 0.65] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    delay: (index % 5) * 0.15,
                  }}
                  className="absolute left-0 top-0 h-0.5 w-10 bg-orange-500 transition-all duration-300 group-hover:w-full"
                />

                {/* Icon + animated category */}
                <div className="flex min-w-0 items-start justify-between gap-2">
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                      rotate: [0, 2, 0, -2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: (index % 6) * 0.12,
                    }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${theme.iconBg} sm:h-10 sm:w-10`}
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.7}
                      className={theme.iconColor}
                    />
                  </motion.div>

                  <span className="max-w-[65%] break-words rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[8px] leading-3 text-zinc-400 sm:text-[9px] sm:leading-4">
                    {client.category}
                  </span>
                </div>

                {/* Animated company name */}
                <motion.h3
                  whileHover={{ x: 2 }}
                  className="mt-3 break-words text-sm font-bold leading-snug text-white transition-colors duration-300 group-hover:text-orange-400 sm:text-base"
                >
                  {client.name}
                </motion.h3>

                <div className="mt-2 flex items-center gap-1.5">
                  <motion.span
                    animate={{ width: [12, 22, 12] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-0.5 shrink-0 rounded-full bg-orange-500"
                  />
                  <span className="text-[8px] font-semibold uppercase tracking-wider text-orange-400 sm:text-[9px]">
                    Project Highlights
                  </span>
                </div>

                {/* Expandable project details */}
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() =>
                    setExpandedClient(isExpanded ? null : client.name)
                  }
                  className="mt-3 flex w-full items-center justify-between gap-2 border-t border-white/10 pt-3 text-left text-[10px] font-medium text-zinc-400 transition hover:text-orange-400 sm:text-xs"
                >
                  <span>
                    {isExpanded ? "Hide details" : "View details"}
                  </span>
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <ChevronDown size={14} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, y: -5 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -5 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-xs leading-5 text-zinc-400">
                        {client.highlight}
                      </p>
                      <p className="mt-2 text-[10px] font-medium text-orange-400/80">
                        Sri Krishna Films
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        {/* Compact footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 text-center text-[10px] leading-5 text-zinc-500 sm:mt-10 sm:text-xs"
        >
          Creative video production and advertising solutions across
          multiple industries.
        </motion.p>
      </div>
    </section>
  );
}
