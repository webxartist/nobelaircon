import {
  Wind,
  Snowflake,
  Fan,
  ThermometerSun,
  Zap,
  AirVent,
} from "lucide-react";

const brands = [
  { name: "LG", icon: Wind },
  { name: "DAIKIN", icon: Snowflake },
  { name: "SAMSUNG", icon: Fan },
  { name: "HITACHI", icon: ThermometerSun },
  { name: "GENERAL", icon: AirVent },
  { name: "LLOYD", icon: Zap },
];

const TrustedBrands = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Trusted by <span className="text-blue-600">Premium Brands</span>
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg">
            Working with industry-leading air conditioning brands
          </p>
        </div>

        {/* Brands */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => {
            const Icon = brand.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center h-28 rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Icon
                  size={34}
                  className="text-gray-400 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110"
                />
                <span className="mt-3 text-gray-400 font-semibold tracking-wide transition-all duration-300 group-hover:text-blue-600">
                  {brand.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
