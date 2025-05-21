"use client";

import Image from "next/image";

export default function HeroSection({ onContactClick }) {
  return (
    <section className="relative h-screen flex items-center justify-center px-4 md:px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#e8e0d0] opacity-50"></div>
        <Image
          src="/crmBg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#5c4d3c] mb-6">
          Transforming Customer Relationships
        </h1>
        <p className="text-xl md:text-2xl text-[#7a6c5d] mb-8">
          Strategic CRM solutions that drive growth and enhance customer
          satisfaction
        </p>
        <button
          onClick={onContactClick}
          className="bg-[#c9b18b] hover:bg-[#b09a76] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
        >
          Let's Connect
        </button>
      </div>
    </section>
  );
}
