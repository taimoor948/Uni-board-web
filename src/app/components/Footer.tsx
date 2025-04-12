'use client';

import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = ['Home', 'Departments', 'Admission', 'Contact'];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative bg-gradient-to-r from-[#003B73] via-[#3071b3] to-[#357abb] text-white pt-20 pb-10 mt-20 border-t border-b-blue-600 overflow-hidden shadow-inner backdrop-blur-md"
    >
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <motion.div variants={fadeIn} custom={1} className="space-y-4">
            <h3 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text drop-shadow-md">
              About Us
            </h3>
            <p className="text-white text-base leading-relaxed  tracking-wide drop-shadow-sm">
              The Universities & Boards Department is committed to strengthening academic institutions and promoting education in Sindh.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeIn} custom={2} className="space-y-4">
            <h3 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text drop-shadow-md">
              Quick Links
            </h3>
            <ul className="space-y-3 text-base font-medium">
              {footerLinks.map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.08, x: 6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="hover:pl-2"
                >
                  <Link
                    href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                    className="hover:text-yellow-300 text-white font-semibold transition-all duration-300 relative group"
                  >
                    <span className="group-hover:underline group-hover:underline-offset-4">
                      {item}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeIn} custom={3} className="space-y-4">
            <h3 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text drop-shadow-md">
              Contact Us
            </h3>
            <div className="text-base space-y-2 text-white font-medium">
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-yellow-300" />
                info@sindheducation.gov.pk
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-yellow-300" />
                +92 21 9999 8888
              </p>
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-yellow-300" />
                Karachi, Sindh, Pakistan
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 6 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="p-2 bg-white/10 hover:bg-yellow-300 hover:text-black rounded-full transition duration-300"
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-center mt-12 text-black text-lg italic font-semibold tracking-wide"
        >
          <span className="relative inline-block px-6 py-3">
            <span className="absolute inset-0 animate-pulse bg-white opacity-10 blur-sm rounded-full"></span>
            <span className="relative z-10 drop-shadow-lg">
              “Seek the beloved, wandering from door to door, for only those who seek shall find.”<br />
              — Shah Abdul Latif Bhittai
            </span>
          </span>
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-sm text-cyan-100 mt-6 tracking-wider font-semibold">
          &copy; {new Date().getFullYear()} Universities & Boards Department. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
