"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function HowIHelpSection({ onContactClick }) {
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
    {
      title: "Customer Experience Design",
      description:
        "I help you design exceptional customer experiences that build loyalty and drive repeat business.",
      features: [
        "Experience audits",
        "Personalization strategies",
        "Feedback implementation",
      ],
      image: "/Unknown-5.jpg",
    },
    {
      title: "Data Analysis & Insights",
      description:
        "I transform your customer data into actionable insights that drive strategic decision-making.",
      features: [
        "Custom reporting",
        "Trend identification",
        "Predictive analytics",
      ],
      image: "/Unknown.jpg",
    },
    {
      title: "Ongoing Optimization",
      description:
        "I provide continuous improvement services to ensure your CRM strategy evolves with your business.",
      features: [
        "Regular performance reviews",
        "Process refinement",
        "Technology updates",
      ],
      image: "/Unknown-2.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-6 bg-[#f5f2ea]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#5c4d3c] mb-16 text-center">
          How I Help Companies
        </h2>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
            >
              {/* Text content - always on the left for mobile, alternates on desktop */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                } space-y-6`}
              >
                <h3 className="text-2xl font-bold text-[#5c4d3c]">
                  {service.title}
                </h3>
                <p className="text-lg text-[#7a6c5d]">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
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
                } mt-8 md:mt-0`}
              >
                <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg shadow-lg">
                  <div className="absolute inset-0 bg-[#e8e0d0] opacity-20"></div>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <button
            onClick={onContactClick}
            className="bg-[#c9b18b] hover:bg-[#b09a76] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Discuss Your CRM Needs
          </button>
        </div>
      </div>
    </section>
  );
}
