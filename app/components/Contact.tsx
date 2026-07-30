"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  MessageCircle,
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name) return alert("Please enter your Name.");
    if (!form.phone) return alert("Please enter your Mobile Number.");
    if (!form.email) return alert("Please enter your Email.");
    if (!form.service) return alert("Please select a Service.");

    alert(
      "Contact form is ready.\n\nNext step: EmailJS integration so enquiries are sent directly to info.skfai@gmail.com."
    );
  };

  return (
    <section
      id="contact"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block border border-yellow-500 rounded-full px-5 py-2 text-yellow-400 uppercase tracking-[4px] text-sm">
            Contact Us
          </span>

          <h2 className="text-5xl font-bold text-white mt-6">
            Let's Build Something Amazing Together
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            Contact Sri Krishna Films & Advertisement Industry for
            Corporate Films, TV Commercials, AI Video Creation,
            Product Advertisements and Digital Marketing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-yellow-500/30 rounded-3xl p-10"
          >
            <h3 className="text-3xl font-bold text-yellow-400 mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5">
                <MapPin className="text-yellow-400" size={28} />
                <div>
                  <h4 className="text-white font-semibold">
                    Office Address
                  </h4>
                  <p className="text-gray-400">
                    Tollygunge, Kolkata
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Phone className="text-yellow-400" size={28} />
                <div>
                  <h4 className="text-white font-semibold">
                    Phone
                  </h4>

                  <a
                    href="tel:+916204731481"
                    className="text-gray-400 hover:text-yellow-400"
                  >
                    +91 62047 31481
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <MessageCircle
                  className="text-green-500"
                  size={28}
                />

                <div>
                  <h4 className="text-white font-semibold">
                    WhatsApp
                  </h4>

                  <a
                    href="https://wa.me/916204731481"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex mt-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <Mail className="text-yellow-400" size={28} />

                <div>
                  <h4 className="text-white font-semibold">
                    Email
                  </h4>

                  <a
                    href="mailto:info.skfai@gmail.com"
                    className="text-gray-400 hover:text-yellow-400"
                  >
                    info.skfai@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <Globe className="text-yellow-400" size={28} />

                <div>
                  <h4 className="text-white font-semibold">
                    Website
                  </h4>

                  <a
                    href="https://skfai.online"
                    target="_blank"
                    className="text-gray-400 hover:text-yellow-400"
                  >
                    https://skfai.online
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-yellow-500/30 rounded-3xl p-10 space-y-6"
          >

            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-yellow-400"
            />

            <input
              name="phone"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-yellow-400"
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-yellow-400"
            >
              <option value="">Select Service</option>
              <option>TV Commercial</option>
              <option>Corporate Film</option>
              <option>Product Advertisement</option>
              <option>AI Video Creation</option>
              <option>Digital Marketing</option>
              <option>Lead Generation</option>
              <option>Photography</option>
              <option>Other</option>
            </select>

            <textarea
              rows={5}
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-yellow-400"
            />

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-xl transition"
            >
              Send Enquiry
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}