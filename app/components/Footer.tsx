
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowUpRight,
  Clapperboard,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "TV Commercials",
    "Corporate Films",
    "AI Video Creation",
    "Product Advertisements",
    "Digital Marketing",
    "Lead Generation",
    "Photography",
  ];

  return (
    <footer className="relative isolate overflow-hidden border-t border-orange-500/30 bg-[#080808]">
      {/* Cinematic background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,101,0,0.08),transparent_55%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 -z-10 h-80 w-80 rounded-full bg-orange-600/10 blur-[130px]"
      />

      {/* Top orange accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/80 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Company information */}
          <div className="min-w-0 lg:col-span-4">
            <Link
              href="/"
              aria-label="Sri Krishna Films Home"
              className="inline-flex items-center rounded-xl bg-white/[0.03] p-2 transition hover:bg-white/[0.06]"
            >
              <Image
                src="/og-image.jpg"
                alt="Sri Krishna Films & Advertisement Industry"
                width={180}
                height={100}
                className="h-auto w-36 object-contain sm:w-44"
              />
            </Link>

            <h3 className="mt-6 text-xl font-extrabold leading-snug text-white sm:text-2xl">
              Sri Krishna Films
              <span className="block text-orange-500">
                & Advertisement Industry
              </span>
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
              Sri Krishna Films &amp; Advertisement Industry provides
              professional TV Commercials, Corporate Films, AI Video
              Creation, Digital Marketing and Product Advertisement
              services.
            </p>

            <a
              href="https://wa.me/916204731481"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition hover:text-orange-300"
            >
              Discuss Your Project
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Quick Links */}
          <div className="min-w-0 lg:col-span-2">
            <h3 className="mb-6 flex items-center gap-3 text-lg font-bold text-white">
              <span className="h-6 w-1 rounded-full bg-orange-500" />
              Quick Links
            </h3>

            <nav aria-label="Footer navigation" className="space-y-4">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 text-sm text-zinc-400 transition hover:text-orange-400"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="min-w-0 lg:col-span-3">
            <h3 className="mb-6 flex items-center gap-3 text-lg font-bold text-white">
              <span className="h-6 w-1 rounded-full bg-orange-500" />
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="group flex items-center gap-2 text-sm text-zinc-400 transition hover:text-orange-400"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500/70 transition group-hover:scale-125 group-hover:bg-orange-400" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div className="min-w-0 lg:col-span-3">
            <h3 className="mb-6 flex items-center gap-3 text-lg font-bold text-white">
              <span className="h-6 w-1 rounded-full bg-orange-500" />
              Contact Info
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tollygunge%2C+Kolkata"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-start gap-3"
              >
                <MapPin
                  size={21}
                  className="mt-0.5 shrink-0 text-orange-500"
                />
                <span className="min-w-0 text-sm leading-6 text-zinc-400 transition group-hover:text-orange-400">
                  Tollygunge, Kolkata
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+916204731481"
                className="group flex min-w-0 items-start gap-3"
              >
                <Phone
                  size={21}
                  className="mt-0.5 shrink-0 text-orange-500"
                />
                <span className="min-w-0 break-words text-sm leading-6 text-zinc-400 transition group-hover:text-orange-400">
                  +91 62047 31481
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info.skfai@gmail.com"
                className="group flex min-w-0 items-start gap-3"
              >
                <Mail
                  size={21}
                  className="mt-0.5 shrink-0 text-orange-500"
                />
                <span className="min-w-0 break-all text-sm leading-6 text-zinc-400 transition group-hover:text-orange-400">
                  info.skfai@gmail.com
                </span>
              </a>

              {/* Website */}
              <a
                href="https://skfai.online"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-start gap-3"
              >
                <Globe
                  size={21}
                  className="mt-0.5 shrink-0 text-orange-500"
                />
                <span className="min-w-0 break-all text-sm leading-6 text-zinc-400 transition group-hover:text-orange-400">
                  skfai.online
                </span>
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/916204731481"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-orange-500/60 bg-orange-500/10 px-4 py-3 text-sm font-bold text-orange-400 transition hover:bg-orange-500 hover:text-white sm:w-auto"
            >
              <Clapperboard size={17} />
              Contact Our Team
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom decorative strip */}
        <div className="mt-14 flex items-center gap-3 sm:mt-16">
          <div className="h-px flex-1 bg-zinc-800" />
          <Clapperboard
            size={18}
            className="shrink-0 text-orange-500"
          />
          <div className="h-px flex-1 bg-zinc-800" />
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/[0.08] bg-black/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:px-6 md:flex-row md:text-left">
          <p className="text-xs leading-6 text-zinc-500 sm:text-sm">
            © {year}{" "}
            <span className="font-semibold text-zinc-300">
              Sri Krishna Films &amp; Advertisement Industry.
            </span>{" "}
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/privacy-policy"
              className="text-xs text-zinc-500 transition hover:text-orange-400 sm:text-sm"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="text-xs text-zinc-500 transition hover:text-orange-400 sm:text-sm"
            >
              Terms &amp; Conditions
            </Link>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xs text-zinc-500 transition hover:text-orange-400 sm:text-sm"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
