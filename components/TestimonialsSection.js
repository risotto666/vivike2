"use client";

import Image from "next/image";
import { Star, Linkedin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function TestimonialsSection({ onContactClick }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredLinkedIn, setHoveredLinkedIn] = useState(null);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const ctaRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechVision Inc.",
      image: "/vivi.JPG",
      rating: 5,
      testimonial:
        "Working with this CRM consultant transformed our customer engagement strategy. Our sales team now has a unified view of customer interactions, and our conversion rates have increased by 35% in just three months.",
      linkedin: "https://linkedin.com/in/sarah-johnson",
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "GrowthPath Solutions",
      image: "/vivi.JPG",
      rating: 5,
      testimonial:
        "The CRM implementation was seamless and the training provided to our team was exceptional. We've seen a dramatic improvement in customer retention and our team's productivity has increased significantly.",
      linkedin: "https://linkedin.com/in/michael-chen",
    },
    {
      name: "Jessica Williams",
      position: "Sales Manager",
      company: "Elevate Retail",
      image: "/vivi.JPG",
      rating: 4,
      testimonial:
        "The custom CRM strategy developed for our retail business helped us understand our customers better than ever before. The insights we've gained have been invaluable for our product development and marketing efforts.",
      linkedin: "https://linkedin.com/in/jessica-williams",
    },
    {
      name: "David Rodriguez",
      position: "Operations Director",
      company: "Innovate Financial",
      image: "/vivi.JPG",
      rating: 5,
      testimonial:
        "The data analysis and insights provided have completely changed how we approach our customer relationships. We now have actionable intelligence that drives our decision-making process.",
      linkedin: "https://linkedin.com/in/david-rodriguez",
    },
  ];

  // Set up intersection observer for CTA section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCtaVisible(true);
          observer.unobserve(ctaRef.current);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={18}
          className={`${
            i < rating ? "text-[#c9b18b] fill-[#c9b18b]" : "text-gray-300"
          } transition-transform duration-300`}
          style={{ transform: i < rating ? "scale(1.2)" : "scale(1)" }}
        />
      ));
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-4 md:px-6 bg-[#ebe5d9] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#5c4d3c] mb-4 text-center">
          Client Testimonials
        </h2>
        <p className="text-lg text-[#7a6c5d] mb-16 text-center max-w-3xl mx-auto">
          Don't just take my word for it. Here's what clients have to say about
          working together on their CRM initiatives.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 md:p-8 transition-all duration-500 h-full
                ${
                  hoveredIndex === index
                    ? "shadow-xl transform scale-[1.02]"
                    : "shadow-md transform scale-100"
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#d6c9b6] transition-all duration-500 transform hover:scale-110">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#5c4d3c]">
                      {testimonial.name}
                    </h3>
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      aria-label={`${testimonial.name}'s LinkedIn profile`}
                      onMouseEnter={() => setHoveredLinkedIn(index)}
                      onMouseLeave={() => setHoveredLinkedIn(null)}
                    >
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-[#0077b5] to-[#0e5a8a] text-white transition-all duration-300 transform ${
                          hoveredLinkedIn === index
                            ? "scale-110 shadow-md rotate-[360deg]"
                            : "scale-100 shadow-sm rotate-0"
                        }`}
                      >
                        <Linkedin
                          size={18}
                          className={`transition-all duration-300 ${
                            hoveredLinkedIn === index
                              ? "scale-110"
                              : "scale-100"
                          }`}
                        />
                      </div>
                      <span
                        className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#0077b5] text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-all duration-300 ${
                          hoveredLinkedIn === index
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                        }`}
                      >
                        View Profile
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full border-4 border-transparent border-t-[#0077b5]"></span>
                      </span>
                    </a>
                  </div>
                  <p className="text-sm text-[#7a6c5d]">
                    {testimonial.position}, {testimonial.company}
                  </p>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <blockquote className="relative">
                <div
                  className={`absolute -top-2 -left-2 text-5xl text-[#d6c9b6] opacity-30 transition-all duration-500 ${
                    hoveredIndex === index
                      ? "transform -translate-x-1 -translate-y-1"
                      : ""
                  }`}
                >
                  "
                </div>
                <p className="text-[#5c4d3c] italic relative z-10 pl-4">
                  {testimonial.testimonial}
                </p>
                <div
                  className={`absolute -bottom-6 -right-2 text-5xl text-[#d6c9b6] opacity-30 transform rotate-180 transition-all duration-500 ${
                    hoveredIndex === index
                      ? "transform rotate-180 translate-x-1 translate-y-1"
                      : "transform rotate-180"
                  }`}
                >
                  "
                </div>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" ref={ctaRef}>
          <div
            className={`bg-[#f5f2ea] rounded-lg shadow-md py-24 flex flex-col items-center text-center transition-all duration-1000 ease-out overflow-hidden ${
              isCtaVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-20"
            }`}
            style={{
              boxShadow: isCtaVisible
                ? "0 10px 25px -5px rgba(201, 177, 139, 0.3)"
                : "0 0 0 0 rgba(201, 177, 139, 0)",
            }}
          >
            <h2
              className={`text-gray-600 text-4xl md:text-5xl font-serif mb-8 transition-all duration-1000 delay-300 ease-out ${
                isCtaVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-10"
              }`}
            >
              Let's build your next CRM together.
            </h2>
            <button
              onClick={onContactClick}
              className={`bg-[#c9b18b] hover:bg-[#b09a76] text-white font-medium py-3 px-8 rounded-lg transition-all duration-1000 delay-600 ease-out hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 active:scale-95 ${
                isCtaVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-10"
              }`}
            >
              Book a consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
