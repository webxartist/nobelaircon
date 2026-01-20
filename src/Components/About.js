"use client";

const acTypes = [
  { title: "Split AC", img: "/hero.png" },
  { title: "Window AC", img: "/s2.png" },
  { title: "Cassette AC", img: "/s3.png" },
  { title: "VRV / VRF AC", img: "/s4.png" },
  { title: "Ductable AC", img: "/s5.png" },
];

const About = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
            <img
              src="/about.png"
              alt="NobelAirCon Team"
              className="relative rounded-3xl shadow-xl w-full"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              About <span className="text-blue-600">NobelAirCon</span>
            </h2>

            <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
              NobelAirCon delivers professional AC repair, installation, and
              maintenance services with a focus on quality, reliability, and
              customer satisfaction. Our certified technicians ensure fast and
              effective solutions.
            </p>

            <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
              From homes to commercial spaces, we provide tailored cooling
              solutions to keep your environment comfortable all year round.
            </p>

            <a
              href="/contact"
              className="inline-block px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* AC Types Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
            We Work On <span className="text-blue-600">All Types of AC</span>
          </h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Residential and commercial air conditioning systems handled by
            expert technicians.
          </p>
        </div>

        {/* Gallery */}
        <div className="max-w-full px-0">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {acTypes.map((ac, index) => (
              <div className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={ac.img}
                    alt={ac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {ac.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
