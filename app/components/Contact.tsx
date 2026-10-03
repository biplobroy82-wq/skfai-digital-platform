
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  MessageCircle,
  UserRound,
  List,
  Send,
  ArrowRight,
  Clapperboard,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim()) return alert("Please enter your Name.");
    if (!form.phone.trim()) return alert("Please enter your Mobile Number.");
    if (!form.email.trim()) return alert("Please enter your Email.");
    if (!form.service) return alert("Please select a Service.");

    alert(
      "Contact form is ready.\n\nNext step: EmailJS integration so enquiries are sent directly to info.skfai@gmail.com."
    );
  };

  const inputClass =
    "w-full min-w-0 rounded-xl border border-zinc-700 bg-black/80 px-4 py-4 text-sm text-white placeholder:text-zinc-500 outline-none transition duration-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/40";

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#080808] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      {/* Cinematic background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,101,0,0.08),transparent_65%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 -z-10 h-80 w-80 rounded-full bg-orange-600/15 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]"
      />

      {/* Decorative film icon */}
      <Clapperboard
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-32 -z-10 hidden h-48 w-48 rotate-12 text-orange-500/[0.07] lg:block"
        strokeWidth={0.8}
      />

      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-5xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/60 bg-orange-500/10 px-5 py-2 text-[10px] font-semibold uppercase tracking-[3px] text-orange-400 sm:text-xs sm:tracking-[4px]">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Contact Us
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s Build Something
            <br className="hidden sm:block" />{" "}
            <span className="text-orange-500">
              Amazing Together
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            Contact Sri Krishna Films &amp; Advertisement Industry for
            Corporate Films, TV Commercials, AI Video Creation, Product
            Advertisements and Digital Marketing.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-orange-500" />
        </motion.div>

        {/* Contact details + enquiry form */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {/* LEFT: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-orange-500/50 bg-zinc-950/90 p-6 shadow-[0_0_35px_rgba(255,101,0,0.06)] sm:rounded-3xl sm:p-8 lg:p-10"
          >
            <div className="absolute left-0 top-0 h-1 w-24 bg-orange-500" />

            <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
              Get In <span className="text-orange-500">Touch</span>
            </h3>

            <p className="mt-3 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
              We are here to discuss your project, answer your questions
              and help bring your ideas to life.
            </p>

            <div className="mt-8 space-y-6 sm:mt-9 sm:space-y-7">
              {/* Address */}
              <div className="flex min-w-0 items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>

                <div className="min-w-0 pt-1">
                  <h4 className="font-bold text-white">
                    Office Address
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    Tollygunge, Kolkata
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex min-w-0 items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>

                <div className="min-w-0 pt-1">
                  <h4 className="font-bold text-white">Phone</h4>
                  <a
                    href="tel:+916204731481"
                    className="mt-1 inline-block break-words text-sm text-zinc-400 transition hover:text-orange-400"
                  >
                    +91 62047 31481
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex min-w-0 items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-green-500/20 bg-green-500/10">
                  <MessageCircle className="h-6 w-6 text-green-500" />
                </div>

                <div className="min-w-0 pt-1">
                  <h4 className="font-bold text-white">WhatsApp</h4>

                  <a
                    href="https://wa.me/916204731481"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-2 inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-500"
                  >
                    <MessageCircle size={17} />
                    Chat on WhatsApp
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex min-w-0 items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>

                <div className="min-w-0 pt-1">
                  <h4 className="font-bold text-white">Email</h4>
                  <a
                    href="mailto:info.skfai@gmail.com"
                    className="mt-1 inline-block break-all text-sm text-zinc-400 transition hover:text-orange-400"
                  >
                    info.skfai@gmail.com
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex min-w-0 items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10">
                  <Globe className="h-6 w-6 text-orange-500" />
                </div>

                <div className="min-w-0 pt-1">
                  <h4 className="font-bold text-white">Website</h4>
                  <a
                    href="https://skfai.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block break-all text-sm text-zinc-400 transition hover:text-orange-400"
                  >
                    https://skfai.online
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Enquiry form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="relative flex min-w-0 flex-col rounded-2xl border border-orange-500/50 bg-zinc-950/90 p-6 shadow-[0_0_35px_rgba(255,101,0,0.06)] sm:rounded-3xl sm:p-8 lg:p-10"
          >
            <div className="absolute left-0 top-0 h-1 w-24 rounded-tl-2xl bg-orange-500" />

            <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
              Send Us an <span className="text-orange-500">Enquiry</span>
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">
              Fill in the details below and our team will get back to you.
            </p>

            <div className="mt-7 space-y-4 sm:mt-8 sm:space-y-5">
              {/* Full name */}
              <label className="relative block">
                <UserRound
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500"
                />
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Full Name"
                  aria-label="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className={`${inputClass} pl-12`}
                />
              </label>

              {/* Mobile number */}
              <label className="relative block">
                <Phone
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500"
                />
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="Mobile Number"
                  aria-label="Mobile Number"
                  value={form.phone}
                  onChange={handleChange}
                  className={`${inputClass} pl-12`}
                />
              </label>

              {/* Email */}
              <label className="relative block">
                <Mail
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500"
                />
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className={`${inputClass} pl-12`}
                />
              </label>

              {/* Service */}
              <label className="relative block">
                <List
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500"
                />
                <select
                  name="service"
                  aria-label="Select Service"
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none pl-12 pr-10`}
                >
                  <option value="">Select Service</option>
                  <option value="TV Commercial">TV Commercial</option>
                  <option value="Corporate Film">Corporate Film</option>
                  <option value="Product Advertisement">
                    Product Advertisement
                  </option>
                  <option value="AI Video Creation">
                    AI Video Creation
                  </option>
                  <option value="Digital Marketing">
                    Digital Marketing
                  </option>
                  <option value="Lead Generation">Lead Generation</option>
                  <option value="Photography">Photography</option>
                  <option value="Other">Other</option>
                </select>

                <ArrowRight
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-zinc-400"
                />
              </label>

              {/* Message */}
              <label className="relative block">
                <MessageCircle
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-5 h-5 w-5 text-zinc-500"
                />
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  aria-label="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-y pl-12`}
                />
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl border border-orange-400 bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-4 font-bold text-white shadow-[0_0_20px_rgba(255,101,0,0.15)] transition duration-300 hover:-translate-y-0.5 hover:from-orange-500 hover:to-orange-400 hover:shadow-[0_0_30px_rgba(255,101,0,0.3)]"
              >
                <Send size={19} />
                Send Enquiry
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>

            <p className="mt-4 text-center text-xs leading-5 text-zinc-500">
              Your details will be used to respond to your enquiry.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
