"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowIHelpSection from "@/components/HowIHelpSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOpenContact = () => {
    setShowContactForm(true);
  };

  const handleCloseContact = () => {
    setShowContactForm(false);
  };

  const handleSubmitForm = () => {
    // Here you would typically handle the form submission
    // For demo purposes, we'll just show a success message
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowContactForm(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-[#f5f2ea]">
      <Navbar />

      <div id="hero">
        <HeroSection onContactClick={handleOpenContact} />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="services">
        <HowIHelpSection onContactClick={handleOpenContact} />
      </div>

      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <div id="contact">
        {showContactForm && (
          <ContactForm
            onClose={handleCloseContact}
            onSubmit={handleSubmitForm}
            formSubmitted={formSubmitted}
          />
        )}
      </div>

      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
