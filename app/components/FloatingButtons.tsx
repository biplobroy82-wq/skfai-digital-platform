"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, ChevronUp } from "lucide-react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Floating Buttons */}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

        {/* WhatsApp */}

        <a
          href="https://wa.me/916204731481"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
        >
          <MessageCircle size={30} />
        </a>

        {/* Call */}

        <a
          href="tel:+916204731481"
          aria-label="Call Now"
          className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-yellow-400 bg-black text-yellow-400 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-yellow-400 hover:text-black"
        >
          <Phone size={28} />
        </a>

        {/* Back To Top */}

        {showTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back To Top"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <ChevronUp size={28} />
          </button>
        )}
      </div>
    </>
  );
}