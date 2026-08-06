"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Recognition", href: "#recognition" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-black/85 backdrop-blur-xl border-b border-yellow-500/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/og-image.jpg"
              alt="Sri Krishna Films"
              width={60}
              height={60}
              priority
              className="h-12 w-12 rounded-full object-cover sm:h-[70px] sm:w-[70px]"
            />

            <div>

              <h2 className="text-xl font-bold text-white">
                Sri Krishna Films
              </h2>

              <p className="text-xs tracking-widest text-yellow-400 uppercase">
                Advertisement Industry
              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 transition hover:text-yellow-400"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* Right Buttons */}

          <div className="hidden lg:flex items-center gap-4">

             <a (yani less-than sign aur 'a')
              href="https://wa.me/916204731481"
              className="rounded-xl border border-yellow-500 px-5 py-3 text-sm text-white transition hover:bg-yellow-500 hover:text-black"
            >
              WhatsApp
            </a>

            <Link
              href="#contact"
              className="rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
            >
              Get Quote
            </Link>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

        {/* Mobile Menu */}

        {mobileOpen && (
          <div className="border-t border-yellow-500/20 bg-black/95 lg:hidden">

            <div className="flex flex-col px-6 py-6">

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-gray-800 py-4 text-gray-300 hover:text-yellow-400"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="#contact"
                className="mt-6 rounded-xl bg-yellow-400 py-4 text-center font-bold text-black"
              >
                Get Quote
              </Link>

            </div>

          </div>
        )}

      </header>

      {/* Spacer */}

      <div className="h-24" />