"use client";

import { useState, useEffect } from "react";

const Contact = () => {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello! I want to contact NobelAirCon:
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Message: ${form.message}`;

    const whatsappLink = `https://wa.me/919324069633?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappLink, "_blank");

    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  if (!mounted) return null;

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-base sm:text-lg">
            Fill out the form below or contact us on WhatsApp.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-lg p-8 flex flex-col gap-6"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              className="border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info + Service Area */}
          <div className="flex flex-col gap-8">
            {/* Contact Info */}
            <div className="bg-white rounded-3xl shadow-lg p-8 space-y-4 text-gray-700">
              <h3 className="text-xl font-semibold text-gray-900">
                Contact Info
              </h3>
              <p>📍 Mumbai, India</p>
              <p>
                📞{" "}
                <a
                  href="tel:+919324069633"
                  className="text-blue-600 hover:underline"
                >
                  +91 93240 69633
                </a>
              </p>
              <p>
                ✉️{" "}
                <a
                  href="mailto:support@nobelaircon.com"
                  className="text-blue-600 hover:underline"
                >
                  nobelaircon1@gmail.com
                </a>
              </p>
              <p>⏰ Mon – Sat: 9:00 AM – 7:00 PM</p>
            </div>

            {/* Service Areas + Map */}
            <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Service Area Locations
              </h3>

              <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                <span>📍 Ghatkopar (10km)</span>
                <span>📍 Thane (10km)</span>
                <span>📍 Airoli (10km)</span>
                <span>📍 Vashi (10km)</span>
                <span>📍 Nerul</span>
                <span>📍 Belapur</span>
                <span>📍 Bhandup</span>
                <span>📍 Navi Mumbai</span>
                <span>📍 Kandivali</span>
                <span>📍 Borivali</span>
                <span>📍 Goregaon</span>
                <span>📍 Sion</span>
                <span>📍 Dombivli</span>
                <span>📍 Kalyan</span>
              </div>

              <div className="w-full h-64 rounded-2xl overflow-hidden border border-blue-100">
                <iframe
                  title="NobelAirCon Service Area Map"
                  src="https://www.google.com/maps?q=Mumbai&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Success Popup */}
        {submitted && (
          <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg animate-fade-in">
            Message sent successfully!
          </div>
        )}
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
