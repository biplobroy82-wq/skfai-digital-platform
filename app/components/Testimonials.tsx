
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
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
  Landmark,
  Monitor,
  Film,
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
  icon: LucideIcon;
};

type SampleCompany = {
  name: string;
  category: string;
  icon?: string;
};

const BATCH_SIZE = 20;

const originalClients: Client[] = [
  { name: "Kolkata Metro", category: "Government Infrastructure", group: "Government", icon: Building2 },
  { name: "Indian Oil Corporation (IOCL)", category: "Energy & Corporate", group: "Corporate", icon: Factory },
  { name: "IIT Kharagpur", category: "Education", group: "Education", icon: GraduationCap },
  { name: "DAV Model School", category: "Education", group: "Education", icon: BookOpen },
  { name: "Medica Hospital", category: "Healthcare", group: "Healthcare", icon: Stethoscope },
  { name: "Shree Height Builders", category: "Real Estate", group: "Real Estate", icon: Building2 },
  { name: "Herbal & Cosmetic Brands", category: "Beauty & Wellness", group: "Retail & FMCG", icon: Sprout },
  { name: "Mobile App & Tech Startups", category: "Technology", group: "Others", icon: Smartphone },
  { name: "Acadfinity", category: "Education Technology", group: "Education", icon: School },
  { name: "Right Real Estate Jhabua", category: "Real Estate", group: "Real Estate", icon: House },
  { name: "Basant Home Stay", category: "Hospitality", group: "Hospitality", icon: Hotel },
  { name: "KinKeeper Mobile App", category: "Mobile Application", group: "Others", icon: Smartphone },
  { name: "Izra Herbs", category: "Herbal Products", group: "Retail & FMCG", icon: Leaf },
  { name: "Natraj Bag", category: "Bags & Accessories", group: "Retail & FMCG", icon: ShoppingBag },
  { name: "Vet Sunrise Animal Food Products", category: "Animal Nutrition", group: "Retail & FMCG", icon: PawPrint },
  { name: "Benefit Wellness", category: "Health & Wellness", group: "Retail & FMCG", icon: Heart },
  { name: "Luminexa", category: "Brand & Product Promotion", group: "Others", icon: Lightbulb },
  { name: "Maa Sarda Marble & Sanitation", category: "Marble & Sanitaryware", group: "Retail & FMCG", icon: Gem },
  { name: "Ashmika Hair Oil", category: "Hair Care & Beauty", group: "Retail & FMCG", icon: Sprout },
  { name: "Raylight", category: "Brand & Product Promotion", group: "Others", icon: Lightbulb },
  { name: "Vaanchata Stone Decor", category: "Construction Materials", group: "Others", icon: Gem },
  { name: "Sumit Imported Korean Night Suits", category: "Fashion & Apparel", group: "Retail & FMCG", icon: Shirt },
  { name: "Fit & Glow Collagen Mix Coffee", category: "Food & Wellness", group: "Retail & FMCG", icon: Coffee },
  { name: "Vrumi Vedic", category: "Ayurvedic Products", group: "Retail & FMCG", icon: Leaf },
  { name: "Kerala Stone Factory", category: "Construction Materials", group: "Others", icon: Gem },
  { name: "Puja Lite", category: "Lighting Products", group: "Retail & FMCG", icon: Lightbulb },
  { name: "MF Industries Pvt. Ltd.", category: "Manufacturing", group: "Corporate", icon: Factory },
  { name: "Baro Maa Multi-Speciality Hospital", category: "Healthcare", group: "Healthcare", icon: HeartPulse },
  { name: "NoticesInfo.com", category: "Digital Platform", group: "Others", icon: Monitor },
  { name: "Kolkata Federation", category: "Industry & Organization", group: "Government", icon: Landmark },
];

const filters: {
  label: string;
  group: Group | "All";
  icon: LucideIcon;
}[] = [
  { label: "All", group: "All", icon: Building2 },
  { label: "Government", group: "Government", icon: Landmark },
  { label: "Corporate", group: "Corporate", icon: Factory },
  { label: "Education", group: "Education", icon: GraduationCap },
  { label: "Healthcare", group: "Healthcare", icon: HeartPulse },
  { label: "Real Estate", group: "Real Estate", icon: House },
  { label: "Retail & FMCG", group: "Retail & FMCG", icon: ShoppingBag },
  { label: "Hospitality", group: "Hospitality", icon: Hotel },
  { label: "Others", group: "Others", icon: BriefcaseBusiness },
];

function getGroup(category: string): Group {
  const value = category.toLowerCase();

  if (value.includes("government") || value.includes("public infrastructure")) {
    return "Government";
  }

  if (
    value.includes("education") ||
    value.includes("edtech") ||
    value.includes("school")
  ) {
    return "Education";
  }

  if (
    value.includes("healthcare") ||
    value.includes("hospital") ||
    value.includes("pharma") ||
    value.includes("medical")
  ) {
    return "Healthcare";
  }

  if (value.includes("real estate") || value.includes("construction")) {
    return "Real Estate";
  }

  if (
    value.includes("hospitality") ||
    value.includes("tourism") ||
    value.includes("travel") ||
    value.includes("wedding") ||
    value.includes("event")
  ) {
    return "Hospitality";
  }

  if (
    value.includes("retail") ||
    value.includes("fmcg") ||
    value.includes("beauty") ||
    value.includes("cosmetic") ||
    value.includes("herbal") ||
    value.includes("ayurvedic") ||
    value.includes("wellness") ||
    value.includes("food") ||
    value.includes("beverage") ||
    value.includes("fashion") ||
    value.includes("apparel") ||
    value.includes("textile") ||
    value.includes("home decor") ||
    value.includes("furniture") ||
    value.includes("lifestyle")
  ) {
    return "Retail & FMCG";
  }

  if (
    value.includes("corporate") ||
    value.includes("business services") ||
    value.includes("manufacturing") ||
    value.includes("industrial") ||
    value.includes("finance") ||
    value.includes("banking") ||
    value.includes("insurance") ||
    value.includes("logistics") ||
    value.includes("transportation") ||
    value.includes("agriculture") ||
    value.includes("energy") ||
    value.includes("renewable") ||
    value.includes("automotive") ||
    value.includes("electronics") ||
    value.includes("electrical") ||
    value.includes("professional") ||
    value.includes("consulting")
  ) {
    return "Corporate";
  }

  return "Others";
}

function getIcon(group: Group): LucideIcon {
  const icons: Record<Group, LucideIcon> = {
    Government: Landmark,
    Corporate: Factory,
    Education: GraduationCap,
    Healthcare: HeartPulse,
    "Real Estate": Building2,
    "Retail & FMCG": ShoppingBag,
    Hospitality: Hotel,
    Others: BriefcaseBusiness,
  };

  return icons[group];
}

const accents = [
  "border-orange-500/80",
  "border-orange-500/60",
  "border-zinc-700",
  "border-orange-400/70",
  "border-zinc-700",
];

export default function Testimonials() {
  const [sampleCompanies, setSampleCompanies] = useState<Client[]>([]);
  const [activeFilter, setActiveFilter] = useState<Group | "All">("All");
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let active = true;

    fetch("/companies-directory-970.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load directory");
        }
        return response.json();
      })
      .then((data: SampleCompany[]) => {
        if (!Array.isArray(data)) {
          throw new Error("Invalid directory format");
        }

        const converted: Client[] = data
          .filter(
            (company) =>
              company &&
              typeof company.name === "string" &&
              typeof company.category === "string"
          )
          .map((company) => {
            const group = getGroup(company.category);

            return {
              name: company.name,
              category: company.category,
              group,
              icon: getIcon(group),
            };
          });

        if (active) {
          setSampleCompanies(converted);
          setLoading(false);
        }
      })
      .catch(() => {
        if (active) {
          setLoadError(true);
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const allClients = useMemo(
    () => [...originalClients, ...sampleCompanies],
    [sampleCompanies]
  );

  const filteredClients = useMemo(
    () =>
      activeFilter === "All"
        ? allClients
        : allClients.filter((client) => client.group === activeFilter),
    [allClients, activeFilter]
  );

  const visibleClients = filteredClients.slice(0, visibleCount);

  function selectFilter(group: Group | "All") {
    setActiveFilter(group);
    setVisibleCount(BATCH_SIZE);
  }

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#050505] px-4 py-10 sm:px-6 sm:py-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-10 -z-10 h-64 w-64 rounded-full bg-orange-600/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-20 -z-10 h-72 w-72 rounded-full bg-orange-500/10 blur-[110px]"
      />

      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-orange-500" />

            <span className="rounded-full border border-orange-500 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-orange-400 sm:text-xs">
              Our Clients & Brands
            </span>

            <span className="h-[2px] w-8 bg-orange-500" />
          </div>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-5xl">
            Our Clients &{" "}
            <span className="text-orange-500">Business Directory</span>
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-zinc-300 sm:text-base">
            Selected clients and a sample directory of businesses across industries.
          </p>
        </div>

        <div className="mt-7 rounded-full border border-orange-500/80 bg-[#111113] p-1.5 sm:mt-8">
          <div className="flex gap-1 overflow-x-auto scrollbar-none">
            {filters.map((filter) => {
              const FilterIcon = filter.icon;
              const selected = activeFilter === filter.group;

              const count =
                filter.group === "All"
                  ? allClients.length
                  : allClients.filter(
                      (client) => client.group === filter.group
                    ).length;

              return (
                <button
                  key={filter.label}
                  type="button"
                  onClick={() => selectFilter(filter.group)}
                  className={`flex shrink-0 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-xs font-medium transition-all duration-300 sm:flex-1 sm:px-4 sm:text-sm ${
                    selected
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "text-zinc-300 hover:bg-white/[0.06] hover:text-orange-400"
                  }`}
                >
                  <FilterIcon size={15} />
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

        {loading && (
          <p className="py-8 text-center text-sm text-zinc-400">
            Loading business directory...
          </p>
        )}

        {loadError && (
          <p className="py-8 text-center text-sm text-red-400">
            Directory could not be loaded. Please check the JSON file in the public folder.
          </p>
        )}

        {!loading && (
          <>
            <motion.div
              layout
              className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 xl:grid-cols-5"
            >
              {visibleClients.map((client, index) => {
                const Icon = client.icon;

                return (
                  <motion.article
                    layout
                    key={`${client.name}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: (index % 10) * 0.02,
                    }}
                    whileHover={{ y: -2 }}
                    className={`group relative flex min-h-[76px] min-w-0 items-center gap-2.5 overflow-hidden rounded-xl border bg-gradient-to-br from-[#191919] to-[#101012] p-2.5 transition-colors duration-300 hover:border-orange-400 hover:shadow-[0_0_18px_rgba(249,115,22,0.12)] sm:min-h-[84px] sm:gap-3 sm:p-3 ${accents[index % accents.length]}`}
                  >
                    <motion.div
                      animate={{ y: [0, -2, 0], rotate: [0, 2, 0, -2, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: (index % 6) * 0.12,
                      }}
                      className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-orange-500/20 via-zinc-800 to-black sm:h-12 sm:w-12"
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.8}
                        className="text-orange-400 drop-shadow-[0_0_5px_rgba(249,115,22,0.3)]"
                      />
                    </motion.div>

                    <h3 className="min-w-0 break-words text-xs font-semibold leading-snug text-white transition-colors group-hover:text-orange-300 sm:text-[13px]">
                      {client.name}
                    </h3>
                  </motion.article>
                );
              })}
            </motion.div>

            {filteredClients.length === 0 && (
              <p className="py-8 text-center text-sm text-zinc-400">
                No businesses found in this category.
              </p>
            )}

            {visibleCount < filteredClients.length && (
              <div className="mt-6 flex justify-center">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    setVisibleCount((count) => count + BATCH_SIZE)
                  }
                  className="rounded-full border border-orange-500 bg-[#101010] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                >
                  Load More (
                  {Math.min(visibleCount, filteredClients.length)} of{" "}
                  {filteredClients.length})
                  <span className="ml-2 text-orange-400">↓</span>
                </motion.button>
              </div>
            )}
          </>
        )}

        <p className="mt-5 text-center text-[10px] leading-5 text-zinc-500 sm:text-xs">
          Sample directory entries are for demonstration and are not verified client relationships.
        </p>
      </div>
    </section>
  );
}
