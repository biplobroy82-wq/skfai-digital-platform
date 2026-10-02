
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Rate Card", href: "#rate-card" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Recognition", href: "#recognition" },
];

const moreItems = [
  { name: "About", href: "#about" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Production Facilities", href: "#production-facilities" },
  { name: "Brand Ambassador", href: "#brand-ambassador" },
  { name: "Celebrity Booking", href: "#celebrity-booking" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Founder Message", href: "#founder-message" },
  { name: "Contact", href: "#contact" },
];

const whatsappLink = "https://wa.me/916204731481";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setMoreOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090b]/95 text-white shadow-lg backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenus}
          className="flex shrink-0 items-center gap-3"
          aria-label="Sri Krishna Films Home"
        >
          <Image
            src="/og-image.jpg"
            alt="Sri Krishna Films & Advertisement Industry"
            width={54}
            height={54}
            priority
            className="h-11 w-11 rounded-lg object-contain sm:h-12 sm:w-12"
          />

          <div className="leading-tight">
            <span className="block text-sm font-extrabold tracking-wide sm:text-base">
              SRI KRISHNA FILMS
            </span>
            <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.15em] text-gray-400 sm:text-[10px]">
              Films & Advertisement Industry
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-4 xl:flex 2xl:gap-5"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="whitespace-nowrap text-[13px] font-medium text-gray-300 transition hover:text-orange-500 2xl:text-sm"
            >
              {item.name}
            </Link>
          ))}

          {/* More Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen(!moreOpen)}
              aria-expanded={moreOpen}
              className="flex items-center gap-1 whitespace-nowrap text-[13px] font-medium text-gray-300 transition hover:text-orange-500 2xl:text-sm"
            >
              More
              <ChevronDown
                size={15}
                className={`transition-transform ${
                  moreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {moreOpen && (
              <div className="absolute right-0 top-full mt-4 w-64 overflow-hidden rounded-xl border border-white/10 bg-[#111214] py-2 shadow-2xl">
                {moreItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenus}
                    className="block px-5 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-orange-500"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-lg border border-green-500/60 px-4 py-2.5 text-sm font-semibold text-green-400 transition hover:bg-green-500/10"
          >
            WhatsApp
          </a>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-500"
          >
            Get a Quote
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/5 xl:hidden"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile / Tablet Navigation */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="max-h-[75vh] overflow-y-auto border-t border-white/10 bg-[#08090b] px-5 py-4 xl:hidden"
        >
          {[...navItems, ...moreItems].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenus}
              className="block border-b border-white/5 py-3.5 text-sm font-medium text-gray-300 transition hover:text-orange-500"
            >
              {item.name}
            </Link>
          ))}

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenus}
              className="flex items-center justify-center rounded-lg border border-green-500/60 px-4 py-3 text-sm font-semibold text-green-400 transition hover:bg-green-500/10"
            >
              WhatsApp
            </a>

            <Link
              href="#contact"
              onClick={closeMenus}
              className="flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-500"
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
