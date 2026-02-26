"use client";

const PrivacyPolicy = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Privacy <span className="text-blue-600">Policy</span>
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-gray-700 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, phone
              number, email address, and service address when you contact us,
              book a service, or fill out a form on our website.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              The information we collect is used to provide and improve our AC
              services, respond to inquiries, send service updates, generate
              invoices, and improve customer support.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. Data Protection
            </h2>
            <p>
              We implement appropriate security measures to protect your
              personal information from unauthorized access, misuse, or
              disclosure.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Sharing of Information
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. Your data is only shared when required to deliver
              services or comply with legal obligations.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Cookies
            </h2>
            <p>
              Our website may use cookies to enhance user experience and analyze
              website traffic. You can choose to disable cookies through your
              browser settings.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us via phone or email through our website.
            </p>
          </div>

          {/* Last Updated */}
          <div className="pt-6 border-t text-gray-500 text-sm">
            <p>Last Updated: {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
