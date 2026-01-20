import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600">
              Nobel<span className="text-gray-900">AirCon</span>
            </h2>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Trusted AC repair, installation & maintenance services. Fast
              response, skilled technicians, and quality service guaranteed.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>AC Installation</li>
              <li>AC Repair</li>
              <li>Gas Refill</li>
              <li>AMC Maintenance</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-600 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-600 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>📍 Your City, India</li>
              <li>
                📞{" "}
                <a
                  href="tel:+919324069633"
                  className="hover:text-blue-600 transition"
                >
                  +919324069633
                </a>
              </li>
              <li>
                ✉️{" "}
                <a
                  href="mailto:support@nobelaircon.com"
                  className="hover:text-blue-600 transition"
                >
                  nobelaircon1@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-blue-100" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} NobelAirCon. All rights reserved.</p>
          <p>
            Designed & Developed by{" "}
            <a
              href="https://webxartist.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              webxartist.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
