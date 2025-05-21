"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function HowIHelpSection({ onContactClick }) {
  const [visibleItems, setVisibleItems] = useState({});

  const services = [
    {
      title: "CRM Strategy Development",
      description:
        "I create comprehensive CRM strategies tailored to your business goals, customer base, and industry challenges.",
      features: [
        "Customer journey mapping",
        "Touchpoint optimization",
        "ROI-focused planning",
      ],
      image: "/Unknown-2.jpg",
    },
    {
      title: "CRM Implementation",
      description:
        "I guide your team through the selection, customization, and implementation of the right CRM platform for your needs.",
      features: [
        "Software selection assistance",
        "Custom configuration",
        "Data migration & integration",
      ],
      image: "/Unknown-3.jpg",
    },
    {
      title: "Team Training & Adoption",
      description:
        "I ensure your team embraces your CRM system through comprehensive training and adoption strategies.",
      features: [
        "Customized training programs",
        "Change management",
        "Ongoing support & coaching",
      ],
      image: "/Unknown-4.jpg",
    },
  ];

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-id");
          if (id) {
            setVisibleItems((prev) => ({
              ...prev,
              [id]: true,
            }));
            observer.unobserve(entry.target);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    });

    document.querySelectorAll(".service-item").forEach((item) => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll(".service-item").forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="py-20 px-4 md:px-6 bg-[#f5f2ea] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#5c4d3c] mb-16 text-center">
          How I Help Companies
        </h2>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              data-id={index}
              className="service-item flex flex-col md:flex-row items-center gap-8 md:gap-16"
            >
              {/* Text content - always on the left for mobile, alternates on desktop */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                } space-y-6 hover:scale-102 transition-transform duration-500`}
              >
                <h3 className="text-2xl font-bold text-[#5c4d3c]">
                  {service.title}
                </h3>
                <p className="text-lg text-[#7a6c5d]">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start transition-all duration-500"
                    >
                      <CheckCircle className="h-5 w-5 text-[#c9b18b] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-[#7a6c5d]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image - always on the right for mobile, alternates on desktop */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                } mt-8 md:mt-0 hover:scale-103 transition-transform duration-500`}
              >
                <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg shadow-lg group">
                  <div className="absolute inset-0 bg-[#e8e0d0] opacity-20 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div
                    className={`relative w-full h-full transition-all duration-1000 transform ${
                      visibleItems[index]
                        ? "scale-100 opacity-100"
                        : "scale-80 opacity-0"
                    }`}
                  >
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button
            onClick={onContactClick}
            className="bg-[#c9b18b] hover:bg-[#b09a76] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 active:scale-95"
          >
            Discuss Your CRM Needs
          </button>
        </div>
      </div>
    </section>
  );
}
