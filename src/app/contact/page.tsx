"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-10 md:px-16 lg:px-32 font-sans">
      <Navbar />

      <div className="max-w-6xl mx-auto pt-24">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-indigo-700 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>

        {/* Contact Information Table Style */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg text-sm md:text-base">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">
            UNIVERSITIES & BOARDS DEPARTMENT
          </h2>
          <p className="mb-2 text-gray-700">Government of Sindh</p>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-left">
              <thead className="bg-indigo-100 text-indigo-800 font-semibold">
                <tr>
                  <th className="border px-4 py-2">S.No</th>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Designation</th>
                  <th className="border px-4 py-2">Telephone Number</th>
                  <th className="border px-4 py-2">E-Mail</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">Mr. Muhammad Abbas Baloch</td>
                  <td className="border px-4 py-2">Secretary</td>
                  <td className="border px-4 py-2">021-99210019-20</td>
                  <td className="border px-4 py-2">-</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">Mr. Muhammad Saleem</td>
                  <td className="border px-4 py-2">Personal Staff Officer</td>
                  <td className="border px-4 py-2">021-99210014</td>
                  <td className="border px-4 py-2">
                    <a
                      href="mailto:pso.secretary.ub@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      pso.secretary.ub@gmail.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Address Section */}
          <div className="mt-6">
            <h3 className="font-semibold text-indigo-600 mb-1">Address:</h3>
            <p className="text-gray-700">
              Universities & Boards Department, 7th Floor, Pakistan Re-Insurance Company Ltd. (PRC) Towers, Near PNSC Building, 32 - A, Street Number 1, Moulvi Tamizuddin Khan Rd, Lalazar, Karachi.
            </p>
          </div>
        </div>

        {/* Map Image */}
        <div className="mt-10">
          <Image
            src="/map.png"
            alt="PRC Towers Map"
            width={1200}
            height={600}
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
