"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall, MessageCircle } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-blue-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide text-blue-600"
          >
            Nobel<span className="text-gray-900">AirCon</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <li className="hover:text-blue-600 transition">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link href="/Service">Services</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link href="/About">About</Link>
            </li>
            <li className="hover:text-blue-600 transition">
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919324069633"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500 text-green-600 text-sm font-medium hover:bg-green-50 transition"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            {/* Call */}
            <a
              href="tel:+919324069633"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <PhoneCall size={18} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-blue-600"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl px-6 py-6 space-y-5 border-t border-blue-100">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="/Service"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            Services
          </Link>
          <Link
            href="/About"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            href="/Contact"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </Link>

          {/* Mobile WhatsApp */}
          <a
            href="https://wa.me/919324069633"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full border border-green-500 text-green-600 font-medium"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          {/* Mobile Call */}
          <a
            href="tel:+919324069633"
            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 text-white font-medium shadow-md"
          >
            <PhoneCall size={18} />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
