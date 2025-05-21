"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useState } from "react";

export default function TestimonialsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechVision Inc.",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      testimonial:
        "Working with this CRM consultant transformed our customer engagement strategy. Our sales team now has a unified view of customer interactions, and our conversion rates have increased by 35% in just three months.",
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "GrowthPath Solutions",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      testimonial:
        "The CRM implementation was seamless and the training provided to our team was exceptional. We've seen a dramatic improvement in customer retention and our team's productivity has increased significantly.",
    },
    {
      name: "Jessica Williams",
      position: "Sales Manager",
      company: "Elevate Retail",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4,
      testimonial:
        "The custom CRM strategy developed for our retail business helped us understand our customers better than ever before. The insights we've gained have been invaluable for our product development and marketing efforts.",
    },
    {
      name: "David Rodriguez",
      position: "Operations Director",
      company: "Innovate Financial",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      testimonial:
        "The data analysis and insights provided have completely changed how we approach our customer relationships. We now have actionable intelligence that drives our decision-making process.",
    },
  ];

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
                <div>
                  <h3 className="text-lg font-bold text-[#5c4d3c]">
                    {testimonial.name}
                  </h3>
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

        <div className="mt-16 text-center">
          <div className="inline-block bg-[#f5f2ea] px-6 py-3 rounded-lg border border-[#d6c9b6] hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-300">
            <p className="text-lg font-medium text-[#5c4d3c]">
              Ready to transform your customer relationships?{" "}
              <a
                href="#contact"
                className="text-[#c9b18b] hover:text-[#b09a76] underline transition-colors duration-300 relative overflow-hidden group"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let's talk about your CRM needs
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c9b18b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
