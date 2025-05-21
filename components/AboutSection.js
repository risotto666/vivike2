"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section becomes visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once we've seen it, no need to keep observing
          observer.unobserve(sectionRef.current);
        }
      },
      {
        // Trigger when at least 20% of the element is visible
        threshold: 0.2,
        // Add a small margin to trigger slightly before the element is in view
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-6 bg-[#ebe5d9] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#5c4d3c] mb-12 text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div
              className={`relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-[#d6c9b6] shadow-lg hover:shadow-xl transition-all duration-1000 transform hover:scale-105 ${
                isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
              }`}
            >
              <Image
                src="/vivi.JPG"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-2/3 space-y-6">
            <p className="text-lg text-[#5c4d3c]">
              With over 10 years of experience in Customer Relationship
              Management, I've helped businesses of all sizes transform their
              customer interactions into meaningful relationships that drive
              growth and loyalty.
            </p>

            <p className="text-lg text-[#5c4d3c]">
              My approach combines strategic planning, cutting-edge technology
              implementation, and a deep understanding of human psychology to
              create CRM systems that truly work for your business.
            </p>

            <p className="text-lg text-[#5c4d3c]">
              I believe that effective CRM is not just about software—it's about
              creating a customer-centric culture that permeates every aspect of
              your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
