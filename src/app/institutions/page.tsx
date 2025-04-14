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

const Institutions = () => {
  const [colorToggle, setColorToggle] = useState(false);
  const [titleColorToggle, setTitleColorToggle] = useState(false);

  const [universities, setUniversities] = useState([
    { name: "Shaheed Benazir Bhutto University Lyari, Karachi", contact: "021-34255294, 32744026" },
    { name: "DOW University of Health Sciences, Karachi", contact: "021-99231195-6, 99230701, 021-2745824" },
    { name: "Institute of Business Administration, Karachi", contact: "021-38104700, Fax : 92-21-99261508" },
    { name: "Jinnah Sindh Medical University", contact: "021-99204776" },
    { name: "Liaquat University of Medical and Health Sciences, Jamshoro Sindh", contact: "022-9213301 -03" },
    { name: "Mehran University of Engineering & Technology, Jamshoro", contact: "022-2771197" },
    { name: "NED University of Engineering & Technology, Karachi", contact: "021-9926126-57" },
    { name: "Peoples University of Medical and Health Sciences for Women, Nawabshah (Shaheed Benazirabad)", contact: "0244-9370520" },
    { name: "Quaid-e-Awam University of Engineering, Sciences & Technology, Nawabshah", contact: "0244-9370366" },
    { name: "Shah Abdul Latif University, Khairpur", contact: "0243-9280061" },
    { name: "Shaheed Mohtarma Benazir Bhutto Medical University, Larkana", contact: "074-9410724" },
    { name: "Sindh Agriculture University, Tandojam", contact: "0222-765869" },
    { name: "Sukkur IBA University, Sukkur", contact: "071-5633491, 5630272" },
    { name: "Sindh Madresatul Islam University, Karachi", contact: "021-99211275, 99217501-3" },
    { name: "Shaheed Benazir Bhutto University Shaheed Benazirabad", contact: "0244-9370520, Fax. +92-244-9370521" },
    { name: "Shaheed Zulfiqar Ali Bhutto University of Law, Karachi", contact: "021-99206452-3" },
    { name: "University of Karachi, Karachi", contact: "021-99261336, 021-99261337" },
    { name: "University of Sindh, Jamshoro", contact: "022-9213150" },
    { name: "Shaheed Benazir Bhutto University of Veterinary And Animal Sciences Sakrand", contact: "0244 322150, 0244 322152" },
    { name: "Benazir Bhutto Shaheed University of Technology & Skill Development, Khairpur Mirs", contact: "+92-243-9280168" },
    { name: "The University of Sufism and Modern Sciences at Bhitshah", contact: "+92-22-2762415" },
    { name: "Dawood University of Engineering & Technology Karachi", contact: "+92-21-9923-1195/96/97/98" },
    { name: "Government College University, Hyderabad", contact: "+92-22-2111778" },
    { name: "Shaheed Allah Buksh University of Art, Design and Heritages, Jamshoro", contact: "-" },
    { name: "Begum Nusrat Bhutto Women University, Sukkur", contact: "+92-71-9311202, +92-317-3313100" },
    { name: "Shaikh Ayaz University, Shikarpur", contact: "+92-726-920369/512040" },
    { name: "Aror university of Art, Architecture, Design & Heritages Sukkur", contact: "-" },
  ]);

  const [educationalBoards, setEducationalBoards] = useState([
    { name: "Board of Intermediate Education, Karachi", contact: "+9221-99260211-13" },
    { name: "Board of Secondary Education, Karachi", contact: "+92-21-99260256" },
    { name: "Board of Intermediate & Secondary Education, Hyderabad", contact: "+9260277-78 +9260281-82-83" },
    { name: "Board of Intermediate & Secondary Education, Sukkur", contact: "+92-71-5630522" },
    { name: "Board of Intermediate & Secondary Education, Larkana", contact: "+92-74-9410532" },
    { name: "Board of Intermediate & Secondary Education, Mirpurkhas", contact: "+92-233-9290353, +92-233-9290351, +92-233-9290354" },
    { name: "Board of Intermediate & Secondary Education, Shaheed Benazirabad", contact: "-" },
    { name: "Sindh Board of Technical Education, Karachi", contact: "+92-21-99243329-30" },
  ]);

  const [newUniversity, setNewUniversity] = useState("");
  const [newUniversityContact, setNewUniversityContact] = useState("");
  const [newBoard, setNewBoard] = useState("");
  const [newBoardContact, setNewBoardContact] = useState("");

  const handleAddUniversity = () => {
    if (newUniversity && newUniversityContact) {
      const newEntry = {
        name: newUniversity,
        contact: newUniversityContact,
      };
      setUniversities([...universities, newEntry]);
      setNewUniversity("");
      setNewUniversityContact("");
    }
  };

  const handleAddBoard = () => {
    if (newBoard && newBoardContact) {
      const newEntry = {
        name: newBoard,
        contact: newBoardContact,
      };
      setEducationalBoards([...educationalBoards, newEntry]);
      setNewBoard("");
      setNewBoardContact("");
    }
  };

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
          Institutions in Karachi
        </motion.h1>

        <section className="mb-14">
          <motion.h2
            className={headingClass}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="text-indigo-500" /> Public Sector Universities
          </motion.h2>

          {/* Add new university */}
          <div className="mb-6 flex flex-wrap gap-3">
            <input
              type="text"
              placeholder="University Name"
              value={newUniversity}
              onChange={(e) => setNewUniversity(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg w-full sm:w-60"
            />
            <input
              type="text"
              placeholder="Contact Number"
              value={newUniversityContact}
              onChange={(e) => setNewUniversityContact(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg w-full sm:w-60"
            />
            <button
              onClick={handleAddUniversity}
              className="bg-indigo-500 text-white py-2 px-4 rounded-lg w-full sm:w-auto"
            >
              Add
            </button>
          </div>

          <ul className="space-y-3">
            {universities.map((item, i) => (
              <motion.li
                key={i}
                className="bg-indigo-100 p-4 rounded-lg shadow-sm"
                variants={getFadeInUp(i)}
                initial="hidden"
                animate="visible"
              >
                <strong>{item.name}</strong> <br />
                Contact: {item.contact}
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
            <Sparkles className="text-indigo-500" /> Educational Boards
          </motion.h2>

          {/* Add new educational board */}
          <div className="mb-6 flex flex-wrap gap-3">
            <input
              type="text"
              placeholder="Board Name"
              value={newBoard}
              onChange={(e) => setNewBoard(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg w-full sm:w-60"
            />
            <input
              type="text"
              placeholder="Contact Number"
              value={newBoardContact}
              onChange={(e) => setNewBoardContact(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg w-full sm:w-60"
            />
            <button
              onClick={handleAddBoard}
              className="bg-indigo-500 text-white py-2 px-4 rounded-lg w-full sm:w-auto"
            >
              Add
            </button>
          </div>

          <ul className="space-y-3">
            {educationalBoards.map((item, i) => (
              <motion.li
                key={i}
                className="bg-indigo-100 p-4 rounded-lg shadow-sm"
                variants={getFadeInUp(i)}
                initial="hidden"
                animate="visible"
              >
                <strong>{item.name}</strong> <br />
                Contact: {item.contact}
              </motion.li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Institutions;
