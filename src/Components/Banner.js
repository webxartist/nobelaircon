"use client";

import { Phone, MessageCircle } from "lucide-react";

const ContactBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-sky-500 py-16">
      {/* Background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
          {/* Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Need AC Service <span className="text-yellow-300">Today?</span>
            </h2>
            <p className="text-blue-100 max-w-xl text-base sm:text-lg">
              Get fast, reliable & professional AC repair, installation, gas
              refill & maintenance services from NobelAirCon experts.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+919324069633"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-blue-600 font-semibold shadow-lg hover:scale-105 transition"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>

            <a
              href="https://wa.me/919324069633"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
