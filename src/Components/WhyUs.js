"use client";

const features = [
  {
    title: "Certified Technicians",
    desc: "Skilled and trained professionals for all AC brands and models.",
    icon: "👨‍🔧",
  },
  {
    title: "Quick Response",
    desc: "Same-day service and fast troubleshooting for emergencies.",
    icon: "⚡",
  },
  {
    title: "Affordable Pricing",
    desc: "Transparent and budget-friendly service plans for everyone.",
    icon: "💰",
  },
  {
    title: "Warranty & Support",
    desc: "All repairs come with service warranty for peace of mind.",
    icon: "🛡️",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Why Choose <span className="text-blue-600">NobelAirCon</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-base sm:text-lg">
            We provide reliable, fast, and affordable AC services. Your comfort
            is our priority.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition hover:scale-[1.03]"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
