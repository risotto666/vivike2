import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#e8e0d0] py-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-[#5c4d3c]">Vivien Szolik</h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-[#c9b18b] mr-2" />
              <span className="text-[#5c4d3c]">(555) 123-4567</span>
            </div>

            <div className="flex items-center">
              <Mail className="h-5 w-5 text-[#c9b18b] mr-2" />
              <span className="text-[#5c4d3c]">contact@crmportfolio.com</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#d6c9b6] text-center">
          <p className="text-sm text-[#7a6c5d]">
            © {new Date().getFullYear()} CRM Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
