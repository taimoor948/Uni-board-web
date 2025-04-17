'use client';

import { useEffect, useState } from 'react';
import { Target, BookOpenText, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const imageList = ['./Uni.jpeg', './universitypic.jpeg','./highschool.jpeg','./standford.jpeg'];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-0 pb-16 bg-white text-gray-800">

      {/* Scrolling Text Banner */}
      <div className="relative overflow-hidden bg-[#2d4e2f] py-3">
        <div className="animate-slide flex whitespace-nowrap font-semibold text-white text-base sm:text-lg">
          <span className="mx-6">📢 Admissions Open for Fall 2025</span>
          <span className="mx-6">🎓 Empowering Students Through Education</span>
          <span className="mx-6">📚 Sindh's Academic Vision for the Future</span>
          <span className="mx-6">🏛 27 Universities • 8 Boards • 2 Departments</span>
          <span className="mx-6">📢 Admissions Open for Fall 2025</span>
          <span className="mx-6">🎓 Empowering Students Through Education</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 25s linear infinite;
        }
      `}</style>

      {/* Background Image Slider */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl shadow-md mt-4">
        {imageList.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        ))}

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40 p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Empowering Education in Sindh
          </h1>
          <p className="text-base md:text-xl font-medium max-w-2xl drop-shadow-lg">
            Dedicated to academic excellence, accessibility, and student success across the province.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-6 text-center mt-20"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-6 text-[#0C4B33]"
        >
          Transforming Education Across Sindh
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed"
        >
          The Department of Universities & Boards is reshaping the educational landscape of Sindh — fostering academic excellence, transparency, and innovation in higher education.
        </motion.p>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="bg-[#e7f7ef] p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-3xl font-bold text-[#0C4B33]">27+</h3>
            <p className="mt-2 text-sm text-gray-600">Universities Governed</p>
          </div>
          <div className="bg-[#e7f7ef] p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-3xl font-bold text-[#0C4B33]">8</h3>
            <p className="mt-2 text-sm text-gray-600">Educational Boards</p>
          </div>
          <div className="bg-[#e7f7ef] p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-3xl font-bold text-[#0C4B33]">2</h3>
            <p className="mt-2 text-sm text-gray-600">Departments Attached</p>
          </div>
          <div className="bg-[#e7f7ef] p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <h3 className="text-3xl font-bold text-[#0C4B33]">100K+</h3>
            <p className="mt-2 text-sm text-gray-600">Students Impacted</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Mission / Objectives / Goals */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        <div className="bg-[#F5FDF8] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
          <div className="flex items-center mb-4 text-[#0F5A3E]">
            <Target className="w-6 h-6 mr-2" />
            <h3 className="text-xl font-bold">Our Mission</h3>
          </div>
          <p className="text-gray-600">
            To promote quality higher education and governance through dynamic policies and support systems.
          </p>
        </div>

        <div className="bg-[#F5FDF8] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
          <div className="flex items-center mb-4 text-[#0F5A3E]">
            <BookOpenText className="w-6 h-6 mr-2" />
            <h3 className="text-xl font-bold">Our Objectives</h3>
          </div>
          <p className="text-gray-600">
            Ensure transparency, student success, and equitable opportunities across all boards and institutions.
          </p>
        </div>

        <div className="bg-[#F5FDF8] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
          <div className="flex items-center mb-4 text-[#0F5A3E]">
            <Lightbulb className="w-6 h-6 mr-2" />
            <h3 className="text-xl font-bold">Our Goals</h3>
          </div>
          <p className="text-gray-600">
            Build a sustainable education system that nurtures future leaders, innovators, and scholars of Sindh.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;