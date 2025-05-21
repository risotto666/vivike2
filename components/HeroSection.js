"use client";

import { useEffect, useState } from "react";

export default function HeroSection({ onContactClick }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden">
      {/* Background image using CSS background properties */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/crmBg.jpg')",
          transition: "transform 2s ease-out",
          transform: isLoaded ? "scale(1)" : "scale(0.5)",
        }}
      >
        {/* Overlay to darken the image and add color tint */}
        <div className="absolute inset-0 bg-[#e8e0d0] opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1
          className={`text-4xl md:text-6xl font-bold text-[#5c4d3c] mb-6 transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Transforming Customer Relationships
        </h1>
        <p
          className={`text-xl md:text-2xl text-[#7a6c5d] mb-8 transition-all duration-1000 delay-300 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Strategic CRM solutions that drive growth and enhance customer
          satisfaction
        </p>
        <div
          className={`transition-all duration-1000 delay-600 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <button
            onClick={onContactClick}
            className="bg-[#c9b18b] hover:bg-[#b09a76] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
}
