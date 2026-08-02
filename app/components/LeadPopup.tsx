"use client";

import { useEffect, useState } from "react";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const alreadyClosed = localStorage.getItem("lead-popup");

    if (!alreadyClosed) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 15000); // 15 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    localStorage.setItem("lead-popup", "closed");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl relative">

        <button
          onClick={closePopup}
          className="absolute right-4 top-3 text-2xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-center text-black">
          🎬 FREE Consultation
        </h2>

        <p className="text-center text-gray-600 mt-2">
          Get Free Video Marketing Advice
        </p>

        <form className="mt-6 space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Business Name"
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-black text-white py-3 font-semibold"
          >
            Get Free Consultation
          </button>

        </form>
      </div>
    </div>
  );
}