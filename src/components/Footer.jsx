import React, { useState, useEffect } from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const footer = e.currentTarget;
    const rect = footer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <footer 
      className="bg-n-8 text-white p-10 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Interactive Background */}
      <div 
        className={`absolute inset-0 transition-opacity duration-300 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(172, 106, 255, 0.15) 0%, rgba(26, 26, 50, 0) 50%)`,
          pointerEvents: 'none'
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-[#AC6AFF] text-xl font-bold mb-4">BriskLogix</h3>
            <p className="text-n-3 mb-4">
              Empowering businesses with purpose-driven tech solutions since 2024
            </p>
            <p className="text-n-3">
              Plot 5/6 Kalamkaar Road, 17km Ferozpur road Lahore
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#AC6AFF] text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-n-3">Staff Augmentation</li>
              <li className="text-n-3">Custom Software Solutions</li>
              <li className="text-n-3">AI & Generative AI Services</li>
              <li className="text-n-3">E-commerce Solutions</li>
              <li className="text-n-3">Digital Marketing</li>
              <li className="text-n-3">Microsoft Dynamics ERP</li>
              <li className="text-n-3">AR/VR Development</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#AC6AFF] text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-n-3 hover:text-[#AC6AFF] transition-colors">Home</a></li>
              <li><a href="/staff-augmentation" className="text-n-3 hover:text-[#AC6AFF] transition-colors">Staff Augmentation</a></li>
              <li><a href="/custom-software-solutions" className="text-n-3 hover:text-[#AC6AFF] transition-colors">Custom Software</a></li>
              <li><a href="/ai-services" className="text-n-3 hover:text-[#AC6AFF] transition-colors">AI Services</a></li>
              <li><a href="/ecommerce-solutions" className="text-n-3 hover:text-[#AC6AFF] transition-colors">E-commerce</a></li>
              <li><a href="/microsoft-dynamics-erp" className="text-n-3 hover:text-[#AC6AFF] transition-colors">Microsoft Dynamics ERP</a></li>
              <li><a href="/digital-marketing" className="text-n-3 hover:text-[#AC6AFF] transition-colors">Digital Marketing</a></li>
              <li><a href="/#welcome" className="text-n-3 hover:text-[#AC6AFF] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#AC6AFF] text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-n-3">
                Email: contact@brisklogix.com
              </li>
              <li className="text-n-3">
                Phone: +92 345 4444333
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-[#AC6AFF] text-lg font-bold mb-4">Stay Connected</h4>
              <div className="flex space-x-6">
                <a 
                  href="https://linkedin.com/company/brisklogix" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-n-3 hover:text-[#AC6AFF] transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/brisklogix" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-n-3 hover:text-[#AC6AFF] transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a 
                  href="mailto:contact@brisklogix.com"
                  className="text-n-3 hover:text-[#AC6AFF] transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </a>
                <a 
                  href="tel:+923454444333"
                  className="text-n-3 hover:text-[#AC6AFF] transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-n-6 mt-8 pt-8 text-center text-n-3">
          <p>&copy; {new Date().getFullYear()} BriskLogix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
