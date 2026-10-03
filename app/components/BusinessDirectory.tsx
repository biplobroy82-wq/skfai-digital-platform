
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Company = {
  name: string;
  category: string;
  icon: string;
};

const BATCH_SIZE = 30;

function CompanyIcon({ icon }: { icon: string }) {
  return (
    <motion.div
      className="relative flex h-12 w-12 shrink-0 items-center justify-center"
      animate={{ y: [0, -3, 0], rotate: [0, 2, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-1 rounded-2xl bg-orange-500/20 blur-md" />

      <svg
        viewBox="0 0 48 48"
        className="relative h-11 w-11 drop-shadow-lg"
        fill="none"
      >
        <defs>
          <linearGradient id="companyOrange" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF9A45" />
            <stop offset="100%" stopColor="#FF5A00" />
          </linearGradient>
          <linearGradient id="companyBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#172554" />
          </linearGradient>
        </defs>

        <path
          d="M5 18 24 7l19 11v23H5V18Z"
          fill="url(#companyBlue)"
          stroke="#94A3B8"
          strokeWidth="1"
        />
        <path d="M11 20h26v21H11V20Z" fill="#0F172A" />
        <path d="m8 18 16-9 16 9H8Z" fill="url(#companyOrange)" />
        <path
          d="M17 25h5v5h-5zM26 25h5v5h-5zM17 33h5v5h-5zM26 33h5v5h-5z"
          fill="#FDBA74"
        />
        <path d="M22 15h4v3h-4z" fill="#FFF7ED" />
      </svg>
    </motion.div>
  );
}

export default function BusinessDirectory() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let active = true;

    fetch("/companies-directory-970.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load company directory");
        }
        return response.json();
      })
      .then((data: Company[]) => {
        if (active) {
          setCompanies(data);
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

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(companies.map((c) => c.category)))],
    [companies]
  );

  const filteredCompanies = useMemo(() => {
    if (selectedCategory === "All") return companies;

    return companies.filter(
      (company) => company.category === selectedCategory
    );
  }, [companies, selectedCategory]);

  const visibleCompanies = filteredCompanies.slice(0, visibleCount);

  function changeCategory(category: string) {
    setSelectedCategory(category);
    setVisibleCount(BATCH_SIZE);
  }

  return (
    <section
      id="business-directory"
      className="relative overflow-hidden bg-[#080808] px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
            Business Directory
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Explore Businesses{" "}
            <span className="text-orange-500">by Industry</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base">
            A sample directory of businesses across different industries.
          </p>
        </div>

        {!loading && !loadError && (
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => changeCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                  selectedCategory === category
                    ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "border-white/10 bg-white/[0.03] text-gray-300 hover:border-orange-500/60 hover:text-orange-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {loading && (
          <p className="py-12 text-center text-gray-400">
            Loading directory...
          </p>
        )}

        {loadError && (
          <p className="py-12 text-center text-red-400">
            Directory could not be loaded. Please check the JSON file path.
          </p>
        )}

        {!loading && !loadError && (
          <>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
              {visibleCompanies.map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (index % 10) * 0.025 }}
                  className="group flex min-h-[88px] items-center gap-3 rounded-xl border border-white/[0.09] bg-gradient-to-br from-[#171717] to-[#0D0D0D] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/[0.08] sm:min-h-[96px] sm:gap-3 sm:p-4"
                >
                  <CompanyIcon icon={company.icon} />

                  <h3 className="min-w-0 break-words text-sm font-bold leading-snug text-gray-100 transition-colors group-hover:text-orange-400 sm:text-base">
                    {company.name}
                  </h3>
                </motion.div>
              ))}
            </div>

            {filteredCompanies.length === 0 && (
              <p className="py-10 text-center text-gray-400">
                No businesses found in this category.
              </p>
            )}

            {visibleCount < filteredCompanies.length && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() =>
                    setVisibleCount((count) => count + BATCH_SIZE)
                  }
                  className="rounded-full bg-orange-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
