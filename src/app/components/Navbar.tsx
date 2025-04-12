'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navItems = [
  { text: 'About Us', href: '/about' },
  { text: 'Institutions', href: '/institutions' },
  { text: 'Portal', href: '/portal' },
  { text: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // Animation trigger on mount
  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      className={`${showNav ? 'animate-fadeSlideDown' : 'opacity-0 -translate-y-4'
        } transition-all duration-700 ease-in-out bg-gradient-to-r from-[#003B73] via-[#00509E] to-[#003B73] text-white shadow-lg fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-90 border-b border-blue-800`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 py-4">

          <Link href="/" className="flex items-center space-x-4 group">
            <Image
              src="/sindh-logo.png"
              alt="Sindh Government Logo"
              width={55}
              height={55}
              className="rounded-full shadow-md border-2 border-yellow-400 group-hover:scale-105 transition duration-300"
              priority
            />
            <span className="text-2xl font-bold tracking-wide text-white drop-shadow-sm group-hover:text-yellow-300 transition duration-300 ease-in-out animate-wiggle-slow">
              Universities &amp; Boards Department
            </span>
          </Link>


          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ text, href }, i) => (
              <Link
                key={i}
                href={href}
                className="relative group text-white font-semibold text-xl transition-all duration-300"
              >
                <span className="group-hover:text-yellow-300 transition-colors duration-300">{text}</span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all group-hover:w-full duration-500 ease-in-out"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-yellow-300 transition">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-[#003B73] bg-opacity-95 backdrop-blur-md text-white animate-slideDownMobile">
          {navItems.map(({ text, href }, i) => (
            <Link
              key={i}
              href={href}
              className="block hover:text-yellow-300 text-lg font-semibold transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
