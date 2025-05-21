"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechVision Inc.",
      image: "/vivi.JPG",
      rating: 5,
      testimonial:
        "Working with this CRM consultant transformed our customer engagement strategy. Our sales team now has a unified view of customer interactions, and our conversion rates have increased by 35% in just three months.",
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "GrowthPath Solutions",
      image: "/vivi.JPG",
      rating: 5,
      testimonial:
        "The CRM implementation was seamless and the training provided to our team was exceptional. We've seen a dramatic improvement in customer retention and our team's productivity has increased significantly.",
    },
    {
      name: "Jessica Williams",
      position: "Sales Manager",
      company: "Elevate Retail",
      image: "/vivi.JPG",
      rating: 4,
      testimonial:
        "The custom CRM strategy developed for our retail business helped us understand our customers better than ever before. The insights we've gained have been invaluable for our product development and marketing efforts.",
    },
    {
      name: "David Rodriguez",
      position: "Operations Director",
      company: "Innovate Financial",
      image: "/vivi.JPG",
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
          }`}
        />
      ));
  };

  return (
    <section id="testimonials" className="py-20 px-4 md:px-6 bg-[#ebe5d9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#5c4d3c] mb-4 text-center animate-fadeIn">
          Client Testimonials
        </h2>
        <p className="text-lg text-[#7a6c5d] mb-16 text-center max-w-3xl mx-auto animate-fadeIn animation-delay-100">
          Don't just take my word for it. Here's what clients have to say about
          working together on their CRM initiatives.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#d6c9b6]">
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
                <div className="absolute -top-2 -left-2 text-5xl text-[#d6c9b6] opacity-30">
                  "
                </div>
                <p className="text-[#5c4d3c] italic relative z-10 pl-4">
                  {testimonial.testimonial}
                </p>
                <div className="absolute -bottom-6 -right-2 text-5xl text-[#d6c9b6] opacity-30 transform rotate-180">
                  "
                </div>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fadeIn animation-delay-400">
          <div className="inline-block bg-[#f5f2ea] px-6 py-3 rounded-lg border border-[#d6c9b6]">
            <p className="text-lg font-medium text-[#5c4d3c]">
              Ready to transform your customer relationships?{" "}
              <a
                href="#contact"
                className="text-[#c9b18b] hover:text-[#b09a76] underline transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let's talk about your CRM needs
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
