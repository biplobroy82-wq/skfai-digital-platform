"use client";

import { useEffect, useState } from "react";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    business: "",
  });

  // Popup after 3 seconds on every page
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Please enter your Name and Mobile Number.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);

        setForm({
          name: "",
          phone: "",
          business: "",
        });

        // Meta Pixel Lead Event
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq("track", "Lead");
        }

        setTimeout(() => {
          setSuccess(false);
          setOpen(false);
        }, 2500);
      } else {
        alert("Failed to send enquiry.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4">

      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

        <button
          onClick={closePopup}
          className="absolute right-4 top-3 text-3xl font-bold"
        >
          ×
        </button>

        <h2 className="text-center text-2xl font-bold">
          🎬 FREE Consultation
        </h2>

        <p className="mt-2 text-center text-gray-600">
          Get Free Video Marketing Advice
        </p>

        {success ? (
          <div className="mt-6 rounded-xl bg-green-100 p-4 text-center font-semibold text-green-700">
            ✅ Thank you!
            <br />
            Our team will contact you shortly.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-4"
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />

            <input
              name="business"
              type="text"
              placeholder="Business Name"
              value={form.business}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Get Free Consultation"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}