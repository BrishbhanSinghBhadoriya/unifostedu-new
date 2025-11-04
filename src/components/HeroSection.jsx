"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaUniversity, FaAward, FaGlobe, FaUserTie, FaClipboardCheck, FaRobot, FaBookOpen, FaGraduationCap, FaBriefcase } from "react-icons/fa";

const HeroSection = ({
  universityName,
  universityNameClass,  
  highlightColor = "text-yellow-500",
  location,
  type,
  nirfRank,
  rating,
  description,
  description2,
  highlights,
  badgeText,
  imgSrc,
  imgAlt,
  students,
  partners,
  campus,
}) => {
  return (
    <section className="relative py-12 px-6 font-[Inter] border-b border-gray-100">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMDc3ZmYiIHN0cm9rZS13aWR0aD0iMC41Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxNSIvPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          {/* University Badge */}
          <div className="flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-full w-fit shadow-sm border border-blue-100">
            <FaUniversity className="text-sm" />
            <span className="text-sm font-medium">{badgeText}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight font-[Poppins]">
            <span className={universityNameClass || highlightColor}>
              {universityName}
            </span>
          </h1>

          {/* Location and Basic Info */}
          <div className="flex items-center gap-3 text-gray-600">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1 text-blue-600"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              <span className="text-sm">{location}</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="text-sm">{type}</div>
          </div>

          {/* NIRF Ranking and Rating */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm border border-blue-100">
              <FaAward className="text-yellow-500 mr-1.5 text-sm" />
              <span className="text-gray-700 font-semibold text-sm">
                NIRF Rank: {nirfRank}
              </span>
            </div>
            <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-sm border border-blue-100">
              {[1, 2, 3, 4].map((star) => (
                <svg
                  key={star}
                  className="w-3.5 h-3.5 text-yellow-400 fill-current mr-0.5"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 text-gray-700 font-medium text-sm">
                {rating}
              </span>
            </div>
          </div>

          <p className="text-base font-medium text-gray-600">{description}</p>
              
          {description2 && (
            <p className="text-gray-600 leading-relaxed text-sm">{description2}</p>
          )}
          {/* Key Highlights */}
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                  {item.icon}
                </div>
                <span className="text-gray-700 text-xs">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r">
            <p className="text-blue-700 text-sm flex items-start">
              <FaBookOpen className="mt-0.5 mr-2 text-blue-600 flex-shrink-0" />
              <span>
                India's Tops university recognised by UGC for providing online
                degree programs by expert faculty.
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="bg-gradient-to-r from-gray-800 to-purple-800 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all flex items-center text-sm">
              <FaGraduationCap className="mr-2" />
              Explore Programs
            </button>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl blur-md opacity-70"></div>

          <div className="relative rounded-xl shadow-md overflow-hidden border border-gray-200">
            <Image
              src={imgSrc}
              alt={imgAlt}
              width={600}
              height={1200}
              loading="lazy"
              className="w-full h-auto"
            />

            {/* Floating Badges */}
            <div className="absolute -top-2 -right-2 bg-white rounded-md shadow-md p-2 w-20 h-20 flex flex-col items-center justify-center border border-gray-100">
              <FaGraduationCap className="text-blue-600 text-xl mb-1" />
              <span className="text-xs font-bold text-gray-800 text-center">
                {students}+ Students
              </span>
            </div>

            <div className="absolute -bottom-2 -left-2 bg-white rounded-md shadow-md p-2 w-20 h-20 flex flex-col items-center justify-center border border-gray-100">
              <FaBriefcase className="text-blue-600 text-xl mb-1" />
              <span className="text-xs font-bold text-gray-800 text-center">
                {partners}+ Partners
              </span>
            </div>

            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center shadow-sm">
              <svg
                className="w-3.5 h-3.5 mr-1.5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              <span className="text-xs font-medium text-gray-700">{campus}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;