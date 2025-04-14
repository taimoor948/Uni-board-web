"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Navbar from './../components/Navbar';

const getFadeInUp = (i: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
});

const AboutUs = () => {
  const [colorToggle, setColorToggle] = useState(false);
  const [titleColorToggle, setTitleColorToggle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorToggle((prev) => !prev);
      setTitleColorToggle((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const headingClass = `text-2xl md:text-3xl font-semibold transition-colors duration-500 ${
    colorToggle ? 'text-blue-700' : 'text-blue-300'
  } mb-6 flex items-center gap-2`;

  const titleClass = `text-4xl md:text-5xl font-bold text-center transition-colors duration-500 ${
    titleColorToggle ? 'text-blue-700' : 'text-black'
  } mb-10`;

  const functions = [
    'Education from Matric to Postgraduate Level',
    'Coordination in International Educational Programs',
    'Grant of Scholarships and Aid',
    'Scientific Research Facilitation',
    'Handling of Public Libraries and Libraries in Schools',
    'Maintaining of Historical Records and Archives',
    'Promotion of Extracurricular Activities',
    'All Educational Service Matters with Cooperation of the Government Entities',
    'Budget Approvals and Audits',
    'Improvement of Infrastructure and Structural/Academic Development',
  ];

  const milestones = [
    'Establishment of Knowledge-Based Learning Centers',
    'Establishment of Vocation Centers',
    'Organizing International Expos and Seminars',
    'Universities inspections and Quality Checks',
    'Universities Teaching Internship Programme',
    'Reforming the Educational Delivery in Both Paper and E-format for Globalized, Flexible Learning',
    'Faculty Research and Development Workshops Program',
    'Celebration of Historically Important Holidays',
    'Reducing the Barriers in Education and Enforcing',
    'Improving Quality Assurance Experience',
    'Making Universities and Boards Department Sindh a Citizen Centric Portal',
    'Building Skill Centers and Extracurricular Activities Locations for Physical Activities in Students and Faculty/Staff',
  ];

  const challenges = [
    'To Improve quality of higher education in remote areas of Sindh',
    'To provide qualified faculty/staff members to rural areas',
    'Aid vocational programs in backward areas to motivate the local populace',
    'Increase skill-based education to help graduates find potential jobs',
    'To tackle low enrollment rates in both rural and urban settings',
    'Increase job after graduation rates',
    'Provide rural areas high quality of education for national and international career progression',
    'Providing skill diplomas and degrees to increase market supply of skilled labor and for overseas skilled human capital',
    'To Develop Research Oriented Education',
    'Provide research labs to students for creative and innovating mindset',
    'Allow a competitive but contributing environment to the students in their field of study',
    'Create opportunities for remote areas and facilitate invention-based learning',
    'To build research centers across the province to instill researcher roles in our youth',
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white text-gray-800 font-sans px-6 py-10 md:px-16 lg:px-32">
      <Navbar />

      <div className="max-w-7xl mx-auto pt-24">
        <motion.h1
          className={titleClass}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>

        <section className="mb-14">
          <motion.h2
            className={headingClass}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="text-indigo-500" /> Functions
          </motion.h2>
          <ul className="space-y-3">
            {functions.map((item, i) => (
              <motion.li
                key={i}
                className="bg-indigo-100 p-4 rounded-lg shadow-sm"
                variants={getFadeInUp(i)}
                initial="hidden"
                animate="visible"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <motion.h2
            className={headingClass}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="text-indigo-500" /> Our Milestones
          </motion.h2>
          <ul className="space-y-3">
            {milestones.map((item, i) => (
              <motion.li
                key={i}
                className="bg-indigo-100 p-4 rounded-lg shadow-sm"
                variants={getFadeInUp(i)}
                initial="hidden"
                animate="visible"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </section>

        <section>
          <motion.h2
            className={headingClass}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Sparkles className="text-indigo-500" /> Our Challenges
          </motion.h2>
          <ul className="space-y-3">
            {challenges.map((item, i) => (
              <motion.li
                key={i}
                className="bg-indigo-100 p-4 rounded-lg shadow-sm"
                variants={getFadeInUp(i)}
                initial="hidden"
                animate="visible"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
