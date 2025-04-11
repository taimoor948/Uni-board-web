'use client';

import Image from 'next/image';
import { Target, BookOpenText, Lightbulb } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="pt-0 pb-16 bg-white text-gray-800">

            {/* Text Slider Animation */}
            <div className="overflow-hidden bg-[#6A1414] py-4">
                <div className="animate-marquee whitespace-nowrap text-white font-semibold text-base sm:text-lg">
                    <span className="mx-6">📢 Admissions Open for Fall 2025</span>
                    <span className="mx-6">🎓 Empowering Students Through Education</span>
                    <span className="mx-6">📚 Sindh's Academic Vision for the Future</span>
                    <span className="mx-6">🏛️ 27 Universities • 8 Boards • 2 Departments</span>
                </div>
            </div>

            {/* Banner Image */}
            <div className="banner-container mt-4">
                <img
                    src="/banner.png"
                    alt="Sindh Educational Banner"
                    className="banner-image"
                />
            </div>


            {/* Overview */}
            <div className="max-w-5xl mx-auto px-6 text-center mt-12">
                <h2 className="text-3xl font-semibold mb-4 text-[#0C4B33]">Overview</h2>
                <div className="text-lg text-gray-600 leading-relaxed text-justify space-y-4">
                    <p>
                        The Universities and Boards Department of Sindh is responsible for managing educational, developmental, and administrative services across the province. It oversees both public and private academic institutions, along with the recruitment and regulation of faculty and staff.
                    </p>
                    <p>
                        We focus on innovation, research, and academic excellence happening throughout Sindh’s higher education institutions. Each week, we spotlight new ideas, share insights on evolving topics, and encourage meaningful discussions around education.
                    </p>
                    <p>
                        Our primary objective is to raise the standard of education in Sindh—benchmarking it against national and international institutions. We emphasize equal access to quality education for all social classes, contributing to the growth of the province and the nation.
                    </p>
                    <p>
                        The department supervises 27 universities, 8 educational boards, and 2 attached departments. With its headquarters in Karachi and branch offices across Sindh, it ensures strong governance and consistent educational progress province-wide.
                    </p>
                </div>
            </div>

            {/* Mission / Objectives / Goals */}
            <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Mission */}
                <div className="bg-[#F5FDF8] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                    <div className="flex items-center mb-4 text-[#0F5A3E]">
                        <Target className="w-6 h-6 mr-2" />
                        <h3 className="text-xl font-bold">Our Mission</h3>
                    </div>
                    <p className="text-gray-600">
                        To promote quality higher education and governance through dynamic policies and support systems.
                    </p>
                </div>

                {/* Objectives */}
                <div className="bg-[#F5FDF8] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                    <div className="flex items-center mb-4 text-[#0F5A3E]">
                        <BookOpenText className="w-6 h-6 mr-2" />
                        <h3 className="text-xl font-bold">Our Objectives</h3>
                    </div>
                    <p className="text-gray-600">
                        Ensure transparency, student success, and equitable opportunities across all boards and institutions.
                    </p>
                </div>

                {/* Goals */}
                <div className="bg-[#F5FDF8] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                    <div className="flex items-center mb-4 text-[#0F5A3E]">
                        <Lightbulb className="w-6 h-6 mr-2" />
                        <h3 className="text-xl font-bold">Our Goals</h3>
                    </div>
                    <p className="text-gray-600">
                        Build a sustainable education system that nurtures future leaders, innovators, and scholars of Sindh.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
