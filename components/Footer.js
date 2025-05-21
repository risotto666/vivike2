"use client";

import { Phone, Mail, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function Footer() {
  return (
    <footer className="bg-[#e8e0d0] py-8 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <AnimatedSection animation="fade-right" className="mb-6 md:mb-0">
            <div className="font-serif text-2xl font-bold tracking-wide relative group">
              <span className="bg-gradient-to-r from-[#c9b18b] to-[#5c4d3c] bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wider">
                Vivien
              </span>{" "}
              <span className="text-[#5c4d3c] transition-all duration-300 group-hover:tracking-wider">
                Szolik
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c9b18b] transition-all duration-500 group-hover:w-full"></span>
            </div>
          </AnimatedSection>

          <AnimatedSection
            animation="fade-left"
            className="flex flex-col sm:flex-row gap-4 sm:gap-8"
          >
            <div className="flex items-center hover:translate-x-1 transition-transform duration-300 group">
              <Phone className="h-5 w-5 text-[#c9b18b] mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-[#5c4d3c]">(555) 123-4567</span>
            </div>

            <div className="flex items-center hover:translate-x-1 transition-transform duration-300 group">
              <Mail className="h-5 w-5 text-[#c9b18b] mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-[#5c4d3c]">contact@crmportfolio.com</span>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection
          animation="fade-up"
          delay={0.3}
          className="mt-8 pt-6 border-t border-[#d6c9b6] text-center"
        >
          <p className="text-sm text-[#7a6c5d] flex items-center justify-center">
            © {new Date().getFullYear()} CRM Portfolio. All rights reserved.
            Made with
            <Heart className="h-4 w-4 text-[#c9b18b] mx-1 animate-pulse" />
            for customer relationships.
          </p>
        </AnimatedSection>
      </div>
    </footer>
  );
}
