"use client";

import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Facebook } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    const navbarHeight = 80; // Approximate height of navbar
    const targetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#f5f2ea] shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="font-serif text-2xl font-bold tracking-wide relative group">
              <span className="bg-gradient-to-r from-[#c9b18b] to-[#5c4d3c] bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wider">
                Vivien
              </span>{" "}
              <span className="text-[#5c4d3c] transition-all duration-300 group-hover:tracking-wider">
                Szolik
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c9b18b] transition-all duration-500 group-hover:w-full"></span>
            </div>
            <div className="flex items-center ml-4 space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5c4d3c] hover:text-[#c9b18b] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={20}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5c4d3c] hover:text-[#c9b18b] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook
                  size={20}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#5c4d3c] hover:text-[#c9b18b] font-medium transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#5c4d3c] hover:text-[#c9b18b] transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f5f2ea] shadow-lg">
          <div className="flex flex-col space-y-4 px-4 py-6">
            {[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#5c4d3c] hover:text-[#c9b18b] font-medium py-2 transition-colors duration-300 text-left"
              >
                {item.name}
              </button>
            ))}

            {/* Social icons in mobile menu */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5c4d3c] hover:text-[#c9b18b] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={20}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5c4d3c] hover:text-[#c9b18b] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook
                  size={20}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
