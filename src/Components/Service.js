"use client";

const services = [
  {
    title: "AC Installation",
    desc: "Professional installation for all AC brands with safety and precision.",
    icon: "🧊",
  },
  {
    title: "AC Repair",
    desc: "Quick troubleshooting and repair to make your AC work like new.",
    icon: "🔧",
  },
  {
    title: "Gas Refill",
    desc: "Efficient refrigerant refill to maintain cooling efficiency.",
    icon: "❄️",
  },
  {
    title: "AMC Maintenance",
    desc: "Annual Maintenance Contracts for uninterrupted cooling service.",
    icon: "📅",
  },
  {
    title: "AC Cleaning",
    desc: "Deep cleaning and sanitization to keep your AC healthy and fresh.",
    icon: "🧹",
  },
  {
    title: "Emergency Services",
    desc: "24/7 support for urgent AC issues and breakdowns.",
    icon: "⚡",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-base sm:text-lg">
            We provide top-notch AC services to keep you cool, comfortable, and
            worry-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-white to-blue-50 rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:scale-[1.03] transition-all"
            >
              <div className="text-5xl mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
