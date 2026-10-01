
"use client";

import { motion } from "framer-motion";

const clients = [
  {
    name: "Kolkata Metro",
    category: "Government Infrastructure",
    highlight: "Organizational communication videos and professional production services.",
  },
  {
    name: "Indian Oil Corporation (IOCL)",
    category: "Corporate & Energy",
    highlight: "Corporate communication, branding and advertisement production.",
  },
  {
    name: "IIT Kharagpur",
    category: "Educational Institution",
    highlight: "Filming, video editing and institutional production services.",
  },
  {
    name: "DAV Model School",
    category: "Education",
    highlight: "Educational promotional videos and event-related content.",
  },
  {
    name: "Medica Hospital",
    category: "Healthcare",
    highlight: "Healthcare communication and hospital promotional content.",
  },
  {
    name: "Shree Height Builders",
    category: "Real Estate",
    highlight: "Property marketing videos and real estate advertisements.",
  },
  {
    name: "Herbal & Cosmetic Brands",
    category: "Beauty & Wellness",
    highlight: "Product advertisements and beauty brand communication.",
  },
  {
    name: "Mobile App & Tech Startups",
    category: "Technology",
    highlight: "App explainers, digital product videos and promotional content.",
  },
  {
    name: "Acadfinity",
    category: "Education Technology",
    highlight: "Educational platform promotion and digital video content.",
  },
  {
    name: "Right Real Estate Jhabua",
    category: "Real Estate",
    highlight: "Property promotion and real estate marketing videos.",
  },
  {
    name: "Basant Home Stay",
    category: "Hospitality & Tourism",
    highlight: "Hospitality promotion and property showcase videos.",
  },
  {
    name: "KinKeeper Mobile App",
    category: "Mobile Application",
    highlight: "Mobile app promotion and digital product communication.",
  },
  {
    name: "Izra Herbs",
    category: "Herbal Products",
    highlight: "Herbal product advertisements and brand promotion.",
  },
  {
    name: "Natraj Bag",
    category: "Bags & Accessories",
    highlight: "Product showcase videos and promotional advertising.",
  },
  {
    name: "Vet Sunrise Animal Food Products",
    category: "Animal Nutrition",
    highlight: "Animal food product promotion and commercial video content.",
  },
  {
    name: "Benefit Wellness",
    category: "Health & Wellness",
    highlight: "Wellness product promotion and digital advertising content.",
  },
  {
    name: "Luminexa",
    category: "Brand & Product Promotion",
    highlight: "Brand communication and product-focused video content.",
  },
  {
    name: "Maa Sarda Marble & Sanitation",
    category: "Marble & Sanitaryware",
    highlight: "Product showcases and showroom promotional videos.",
  },
  {
    name: "Ashmika Hair Oil",
    category: "Hair Care & Beauty",
    highlight: "Hair care product advertisements and brand promotion.",
  },
  {
    name: "Raylight",
    category: "Brand & Product Promotion",
    highlight: "Commercial video content and product advertising.",
  },
  {
    name: "Vaanchata Stone Decor",
    category: "Stone & Building Materials",
    highlight: "Laterite stone product promotion and brand showcase videos.",
  },
  {
    name: "Sumit Imported Korean Night Suits",
    category: "Fashion & Apparel",
    highlight: "Fashion product showcases and promotional video content.",
  },
  {
    name: "Fit & Glow Collagen Mix Coffee",
    category: "Beauty & Wellness Products",
    highlight: "Product advertisements and promotional brand communication.",
  },
  {
    name: "Vrumi Vedic",
    category: "Ayurvedic Products",
    highlight: "Ayurvedic product promotion and commercial advertising.",
  },
  {
    name: "Kerala Stone Factory",
    category: "Stone & Building Materials",
    highlight: "Stone product showcases and business promotional videos.",
  },
  {
    name: "Puja Lite",
    category: "Lighting Products",
    highlight: "Lighting product promotion and commercial advertising.",
  },
  {
    name: "MF Industries Pvt. Ltd.",
    category: "Manufacturing",
    highlight: "Product-focused promotional content for business communication.",
  },
  {
    name: "Baro Maa Multi-Speciality Hospital",
    category: "Healthcare",
    highlight: "Healthcare communication and hospital promotional content.",
  },
  {
    name: "NoticesInfo.com",
    category: "Digital Platform",
    highlight: "Digital platform awareness videos and promotional content.",
  },
  {
    name: "Kolkata Federation",
    category: "Industry & Organization",
    highlight: "Video production and creative communication services.",
  },
];

const cardStyles = [
  {
    border: "border-orange-500/40 hover:border-orange-400",
    accent: "bg-orange-500",
    icon: "text-orange-400",
    shape: "rounded-tl-3xl rounded-br-3xl",
  },
  {
    border: "border-white/15 hover:border-orange-400",
    accent: "bg-white",
    icon: "text-white",
    shape: "rounded-2xl",
  },
  {
    border: "border-orange-500/30 hover:border-orange-400",
    accent: "bg-orange-400",
    icon: "text-orange-300",
    shape: "rounded-2xl",
  },
  {
    border: "border-zinc-700 hover:border-orange-400",
    accent: "bg-orange-500",
    icon: "text-orange-400",
    shape: "rounded-t-3xl rounded-b-xl",
  },
  {
    border: "border-orange-500/40 hover:border-orange-400",
    accent: "bg-white",
    icon: "text-orange-400",
    shape: "rounded-2xl",
  },
  {
    border: "border-white/20 hover:border-orange-400",
    accent: "bg-orange-500",
    icon: "text-white",
    shape: "rounded-tl-2xl rounded-br-2xl",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-orange-600/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[2px] text-orange-400 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Our Clients & Brands
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Organizations We&apos;ve{" "}
            <span className="text-orange-500">Worked With</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            Exploring our range of video production and advertising
            services across corporate, education, healthcare, real estate,
            manufacturing, lifestyle and consumer brands.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-orange-500" />
        </motion.div>

        {/* Company cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {clients.map((client, index) => {
            const style = cardStyles[index % cardStyles.length];

            return (
              <motion.article
                key={client.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.4,
                  delay: (index % 3) * 0.07,
                }}
                whileHover={{ y: -5 }}
                className={`group relative flex min-w-0 flex-col overflow-hidden border bg-zinc-950/90 p-5 transition-all duration-300 hover:bg-zinc-900 sm:p-7 ${style.border} ${style.shape}`}
              >
                {/* Top accent */}
                <div
                  className={`absolute left-0 top-0 h-1 w-16 transition-all duration-300 group-hover:w-full ${style.accent}`}
                />

                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black text-xl font-extrabold ${style.icon}`}
                  >
                    {client.name.charAt(0)}
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400 sm:text-xs">
                    {client.category}
                  </span>
                </div>

                <h3 className="mt-5 break-words text-xl font-bold leading-snug text-white transition-colors group-hover:text-orange-400 sm:text-2xl">
                  {client.name}
                </h3>

                <div className="mt-4 flex items-center gap-2">
                  <span className="h-1 w-6 rounded-full bg-orange-500" />
                  <p className="text-xs font-bold uppercase tracking-[1.5px] text-orange-400">
                    Project Experience Highlights
                  </p>
                </div>

                <p className="mt-3 flex-1 break-words text-sm leading-7 text-zinc-400 sm:text-base">
                  {client.highlight}
                </p>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="text-xs font-medium text-zinc-500">
                    Sri Krishna Films
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 border-t border-white/10 pt-12 sm:mt-20 sm:pt-16"
        >
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Our Journey in Numbers
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Experience, creativity and video production.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {[
              { value: "1000+", label: "Happy Clients" },
              { value: "5000+", label: "Video Advertisements" },
              { value: "27+", label: "Years Experience" },
              { value: "Since 1999", label: "Creative Excellence" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-orange-500/25 bg-zinc-950 p-5 text-center transition-colors duration-300 hover:border-orange-500/70 sm:p-7"
              >
                <h4 className="break-words text-2xl font-extrabold text-orange-500 sm:text-3xl lg:text-4xl">
                  {stat.value}
                </h4>
                <p className="mt-3 text-xs leading-5 text-zinc-400 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
