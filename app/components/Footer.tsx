"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>

            <Image
              src="/og-image.jpg"
              alt="Sri Krishna Films"
              width={180}
              height={70}
            />

            <p className="text-gray-400 mt-6 leading-8">
              Sri Krishna Films & Advertisement Industry has been
              providing professional TV Commercials, Corporate Films,
              AI Video Creation, Digital Marketing and Product
              Advertisement services since 1999.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="space-y-3">

              <Link
                href="/"
                className="block text-gray-400 hover:text-yellow-400"
              >
                Home
              </Link>

              <Link
                href="/gallery"
                className="block text-gray-400 hover:text-yellow-400"
              >
                Gallery
              </Link>

              <a
                href="#services"
                className="block text-gray-400 hover:text-yellow-400"
              >
                Services
              </a>

              <a
                href="#about"
                className="block text-gray-400 hover:text-yellow-400"
              >
                About
              </a>

              <a
                href="#contact"
                className="block text-gray-400 hover:text-yellow-400"
              >
                Contact
              </a>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Our Services
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>TV Commercial</p>
              <p>Corporate Film</p>
              <p>AI Video Creation</p>
              <p>Digital Marketing</p>
              <p>Lead Generation</p>
              <p>Photography</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <MapPin className="text-yellow-400" />

                <span className="text-gray-400">
                  Tollygunge, Kolkata
                </span>

              </div>

              <div className="flex gap-3">

                <Phone className="text-yellow-400" />

                <a
                  href="tel:+916204731481"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  +91 62047 31481
                </a>

              </div>

              <div className="flex gap-3">

                <Mail className="text-yellow-400" />

                <a
                  href="mailto:info.skfai@gmail.com"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  info.skfai@gmail.com
                </a>

              </div>

              <div className="flex gap-3">

                <Globe className="text-yellow-400" />

                <a
                  href="https://skfai.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  skfai.online
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-yellow-500/20">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm text-center">
            © {year} Sri Krishna Films & Advertisement Industry.
            All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="text-gray-500 hover:text-yellow-400 text-sm"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-yellow-400 text-sm"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}