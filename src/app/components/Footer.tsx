'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#0C4B33] via-[#0F5A3E] to-[#0C4B33] text-white pt-16 pb-10 mt-20 border-t border-green-700">

{/* Ajrak-inspired SVG pattern at top */}
<div className="absolute top-0 left-0 w-full overflow-hidden h-12">
  <svg viewBox="0 0 100 12" preserveAspectRatio="none" className="w-full h-full">
    <defs>
      <pattern id="ajrak" x="0" y="0" width="20" height="12" patternUnits="userSpaceOnUse">
        <rect width="20" height="12" fill="#0F5A3E" />
        <polygon points="10,0 12,6 10,12 8,6" fill="#E0B400" />
        <circle cx="10" cy="6" r="1.5" fill="#fff" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ajrak)" />
  </svg>
</div>




      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-200">
              The Universities & Boards Department is committed to strengthening academic institutions and promoting education in Sindh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['Home', 'Departments', 'Admission', 'Contact'].map((item, i) => (
                <li key={i}>
                  <Link href={item === 'Home' ? '/' : `#${item.toLowerCase()}`} className="hover:text-yellow-400 transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center text-sm mb-2">
              <Mail className="w-4 h-4 mr-2 text-yellow-400" /> info@sindheducation.gov.pk
            </p>
            <p className="flex items-center text-sm mb-4">
              <Phone className="w-4 h-4 mr-2 text-yellow-400" /> +92 21 9999 8888
            </p>

            <div className="flex space-x-4 mt-2">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-white hover:text-yellow-400 transition">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bhittai Quote */}
        <div className="text-center mt-10 text-sm italic text-white-600">
          “Seek the beloved, wandering from door to door, for only those who seek shall find.”<br />
          — Shah Abdul Latif Bhittai
        </div>

        <div className="text-center text-xs text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Universities & Boards Department. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
