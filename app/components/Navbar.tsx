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
            ? "bg-black/90 backdrop-blur-xl border-b border-yellow-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-black/70 backdrop-blur-md border-b border-yellow-500/10"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/og-image.jpg"
              alt="Sri Krishna Films"
              width={60}
              height={60}
              priority
              className="h-12 w-12 rounded-full object-cover sm:h-[70px] sm:w-[70px] ring-2 ring-yellow-500/60 transition-all duration-300 group-hover:ring-yellow-400 group-hover:shadow-[0_0_18px_rgba(250,204,21,0.5)]"
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

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-300 text-sm font-medium transition-colors duration-300 hover:text-yellow-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="rounded-xl border border-yellow-500/70 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_15px_rgba(250,204,21,0.4)]"
            >
              WhatsApp
            </a>
            <Link
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.6)] hover:scale-[1.03]"
            >
              Get Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

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
                onClick={() => setMobileOpen(false)}
                className="mt-6 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-400 py-4 text-center font-bold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.6)]"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <div className="h-24" />
    </>
  );
}