
"use client";

import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { X, Clapperboard, CheckCircle2 } from "lucide-react";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    business: "",
  });

  // Show popup once per browser tab session, after 5 seconds.
  useEffect(() => {
    if (sessionStorage.getItem("skfai_lead_popup_shown")) {
      return;
    }

    const timer = window.setTimeout(() => {
      sessionStorage.setItem("skfai_lead_popup_shown", "true");
      setOpen(true);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  // Prevent background scrolling while the popup is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closePopup = () => {
    setOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = form.name.trim();
    const phone = form.phone.trim();
    const business = form.business.trim();

    if (!name || !phone) {
      alert("Please enter your Name and Mobile Number.");
      return;
    }

    const digits = phone.replace(/\D/g, "");

    if (digits.length < 10 || digits.length > 13) {
      alert("Please enter a valid Mobile Number.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          business,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.message || "Failed to send enquiry. Please try again.");
        return;
      }

      setSuccess(true);

      // Meta Pixel Lead Event
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }

      window.setTimeout(() => {
        setSuccess(false);
        setOpen(false);
      }, 2500);
    } catch (error) {
      console.error("Lead form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  const inputClass =
    "w-full min-w-0 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closePopup();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-popup-title"
        className="relative my-auto max-h-[90dvh] w-full max-w-md overflow-y-auto rounded-2xl border border-[#d9a441]/30 bg-white p-5 shadow-2xl shadow-black/40 sm:p-7"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close consultation popup"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-black"
        >
          <X size={20} />
        </button>

        {/* Popup Heading */}
        <div className="flex flex-col items-center pt-2 text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#ff6a00]">
            <Clapperboard size={25} />
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#c47a16]">
            Sri Krishna Films
          </p>

          <h2
            id="lead-popup-title"
            className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl"
          >
            Free Video Consultation
          </h2>

          <p className="mt-2 max-w-xs text-sm leading-6 text-gray-600">
            Get expert advice for your video advertisements,
            product promotions and digital marketing.
          </p>
        </div>

        {success ? (
          <div className="mt-6 flex flex-col items-center rounded-xl border border-green-200 bg-green-50 p-6 text-center">
            <CheckCircle2
              size={42}
              className="mb-3 text-green-600"
            />

            <h3 className="text-lg font-bold text-green-800">
              Thank You!
            </h3>

            <p className="mt-2 text-sm leading-6 text-green-700">
              Your enquiry has been submitted successfully.
              Our team will contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="lead-name"
                className="mb-1.5 block text-sm font-semibold text-gray-800"
              >
                Your Name <span className="text-red-500">*</span>
              </label>

              <input
                id="lead-name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                maxLength={100}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="lead-phone"
                className="mb-1.5 block text-sm font-semibold text-gray-800"
              >
                Mobile Number <span className="text-red-500">*</span>
              </label>

              <input
                id="lead-phone"
                name="phone"
                type="tel"
                placeholder="Enter your mobile number"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
                inputMode="tel"
                maxLength={15}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="lead-business"
                className="mb-1.5 block text-sm font-semibold text-gray-800"
              >
                Business Name
                <span className="ml-1 font-normal text-gray-400">
                  (Optional)
                </span>
              </label>

              <input
                id="lead-business"
                name="business"
                type="text"
                placeholder="Enter your business name"
                value={form.business}
                onChange={handleChange}
                autoComplete="organization"
                maxLength={150}
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-gradient-to-r from-[#ff6a00] to-[#d9a441] px-4 py-3.5 text-sm font-bold text-black shadow-md transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Submitting Enquiry..." : "Get Free Consultation"}
            </button>

            <p className="text-center text-xs leading-5 text-gray-500">
              Share your details and our team will get in touch
              with you regarding your requirements.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
