"use client";

import { Phone } from "lucide-react";

const CallButton = () => {
  return (
    <a
      href="tel:+919324069633" // 👈 replace with your number
      className="fixed bottom-24 right-6 z-50"
    >
      <div className="relative flex items-center justify-center">
        {/* Pulse Animation */}
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-400 opacity-75 animate-ping"></span>

        {/* Button */}
        <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 shadow-xl transition-all duration-300 hover:scale-110">
          <Phone className="text-white w-7 h-7" />
        </div>
      </div>
    </a>
  );
};

export default CallButton;
