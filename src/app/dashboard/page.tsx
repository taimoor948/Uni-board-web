"use client";

import React, { useState } from 'react';
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

const Dashboard = () => {
  const [secretaries, setSecretaries] = useState([
    {
      name: "Abbas Baloch",
      image: "/abbas.jpeg",
      role: "Secretary Sindh"
    },
    {
      name: "Farhan Akhtar",
      image: "/farhan.jpg",
      role: "Assistant Secretary"
    },
    {
      name: "Ms. Afshan Rubab",
      image: "/govt.jpg",
      role: "Additional Secretary (Admn, Boards, STEVTA)"
    },
    {
      name: "Mr. Zulfiqar Ali Kandhro",
      image: "/govt.jpg",
      role: "Director (P&D)"
    }
  ]);

  const [newSecretaryName, setNewSecretaryName] = useState("");
  const [newSecretaryRole, setNewSecretaryRole] = useState("");
  const [newSecretaryImage, setNewSecretaryImage] = useState<File | null>(null);

  const handleSecretaryAdd = () => {
    if (newSecretaryName && newSecretaryImage && newSecretaryRole) {
      const newSecretary = {
        name: newSecretaryName,
        role: newSecretaryRole,
        image: URL.createObjectURL(newSecretaryImage),
      };
      setSecretaries([...secretaries, newSecretary]);
      setNewSecretaryName("");
      setNewSecretaryRole("");
      setNewSecretaryImage(null);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setNewSecretaryImage(event.target.files[0]);
    }
  };

  const headingClass = `text-2xl md:text-3xl font-semibold transition-colors duration-500 text-blue-700 mb-6 flex items-center gap-2`;
  const titleClass = `text-4xl md:text-5xl font-bold text-center transition-colors duration-500 text-blue-700 mb-10`;

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
          Dashboard - Universities Vice Chancellor
        </motion.h1>

        <section className="mb-14">
          <motion.h2
            className={headingClass}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="text-indigo-500" /> Vice Chancellors List
          </motion.h2>

          {/* Add new secretary */}
          <div className="mb-10 flex flex-wrap items-center gap-4 w-full">
            <input
              type="text"
              placeholder="Name"
              value={newSecretaryName}
              onChange={(e) => setNewSecretaryName(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg w-full sm:w-56"
            />
            <input
              type="text"
              placeholder="Role"
              value={newSecretaryRole}
              onChange={(e) => setNewSecretaryRole(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg w-full sm:w-56"
            />
            <button
              className="bg-indigo-500 text-white py-2 px-4 rounded-lg w-full sm:w-auto"
              onClick={() => document.getElementById('file-input')?.click()}
            >
              Choose File
            </button>
            <input
              type="file"
              id="file-input"
              className="hidden"
              onChange={handleFileChange}
            />
            <button
              onClick={handleSecretaryAdd}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg shadow w-full sm:w-auto"
            >
              Add 
            </button>
          </div>

          {/* List of Secretaries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {secretaries.map((secretary, i) => (
              <motion.div
                key={i}
                className="bg-white bg-opacity-90 hover:shadow-xl transition-all duration-300 border border-indigo-100 p-6 rounded-2xl shadow-md flex flex-col items-center"
                variants={getFadeInUp(i)}
                initial="hidden"
                animate="visible"
              >
                <img
                  src={secretary.image}
                  alt={secretary.name}
                  className="w-24 h-24 rounded-full border-4 border-indigo-400 mb-4 object-cover shadow-md"
                />
                <h3 className="font-bold text-lg text-center text-indigo-700">{secretary.name}</h3>
                <p className="text-sm text-gray-500 mt-1 text-center">{secretary.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;