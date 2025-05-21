"use client";

import { X, CheckCircle } from "lucide-react";

export default function ContactForm({ onClose, onSubmit, formSubmitted }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-[#5c4d3c] mb-6">
            Let's Connect
          </h3>

          {formSubmitted ? (
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h4 className="text-xl font-medium text-[#5c4d3c] mb-2">
                Thank You!
              </h4>
              <p className="text-[#7a6c5d]">
                Your message has been sent successfully. I'll get back to you
                soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#5c4d3c] mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-3 py-2 border border-[#d6c9b6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c9b18b]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#5c4d3c] mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-3 py-2 border border-[#d6c9b6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c9b18b]"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-[#5c4d3c] mb-1"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-3 py-2 border border-[#d6c9b6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c9b18b]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#5c4d3c] mb-1"
                >
                  How can I help you?
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  className="w-full px-3 py-2 border border-[#d6c9b6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c9b18b]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#c9b18b] hover:bg-[#b09a76] text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
