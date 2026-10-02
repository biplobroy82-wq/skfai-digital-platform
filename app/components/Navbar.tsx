
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Certification", href: "#certification" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const WHATSAPP_URL = "https://wa.me/916204731481";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#0b0d10]/95 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "border-b border-white/[0.06] bg-[#0b0d10]/85 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex min-h-[76px] w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:min-h-[88px] lg:px-8">
          {/* Brand */}
          <Link
            href="/"
            aria-label="Sri Krishna Films home"
            onClick={() => setMobileOpen(false)}
            className="flex min-w-0 items-center gap-3"
          >
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#FF5A00]/70 sm:h-12 sm:w-12">
              <Image
                src="/og-image.jpg"
                alt="Sri Krishna Films logo"
                fill
                priority
                sizes="48px"
                className="object-cover"
              />
            </span>

            <span className="min-w-0">
              <span className="block truncate font-[var(--font-display)] text-base font-bold leading-tight tracking-wide text-white sm:text-xl">
                Sri Krishna Films
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 xl:flex 2xl:gap-7"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative whitespace-nowrap py-2 text-[13px] font-medium text-white/75 transition-colors hover:text-[#FF5A00]"
              >
                {item.name}

                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#FF5A00] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#FF5A00]/50 px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-[#FF5A00] hover:bg-[#FF5A00]/10"
            >
              WhatsApp
            </a>

            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#FF5A00] px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#E65000] hover:shadow-lg hover:shadow-orange-500/20"
            >
              Get a Quote

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:border-[#FF5A00]/60 hover:text-[#FF5A00] xl:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-white/10 bg-[#0b0d10] xl:hidden">
            <nav
              aria-label="Mobile navigation"
              className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-6 pt-3 sm:px-6"
            >
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between border-b border-white/[0.07] py-4 text-sm font-medium text-white/80 transition-colors hover:text-[#FF5A00]"
                >
                  <span>
                    <span className="mr-3 text-xs text-[#FF5A00]/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.name}
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-white/40"
                  />
                </Link>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg border border-[#FF5A00]/50 px-4 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#FF5A00]/10"
                >
                  WhatsApp Us
                </a>

                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF5A00] px-4 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#E65000]"
                >
                  Get a Quote
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Space reserved for fixed navbar */}
      <div className="h-[76px] w-full shrink-0 lg:h-[88px]" />
    </>
  );
}
