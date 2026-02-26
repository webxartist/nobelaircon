"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Decorative Blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute top-40 -right-24 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-14 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
              Trusted AC Service Experts
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
              Reliable & Fast <br />
              <span className="text-blue-600">AC Repair</span> Services
            </h1>

            <p className="mt-6 max-w-xl text-gray-600 text-base sm:text-lg">
              Professional AC installation, repair, gas refilling and AMC
              maintenance with trained technicians and quick doorstep service.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+919999999999"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
              >
                Call Now
              </a>

              <Link
                href="/services"
                className="px-7 py-3 rounded-full border border-blue-200 text-blue-600 font-medium hover:bg-blue-50 transition"
              >
                Our Services
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <span>✔ Same Day Service</span>
              <span>✔ Certified Technicians</span>
              <span>✔ Affordable Pricing</span>
            </div>
          </div>

          {/* Right Image / Illustration */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-sky-100 rounded-3xl blur-xl" />
            <img
              src="/hero.png"
              alt="AC Service"
              className="relative w-full max-w-md mx-auto rounded-2xl drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
