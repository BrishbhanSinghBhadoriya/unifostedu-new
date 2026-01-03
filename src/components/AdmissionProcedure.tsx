"use client";
import React from 'react'
import { motion } from "framer-motion";


const AdmissionProcedure = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
  {/* Decorative Blobs */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-[#00ffe0]/20 to-[#00d4c4]/20 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gradient-to-br from-[#00d4c4]/20 to-[#00ffe0]/20 rounded-full blur-3xl animate-pulse"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-[#001e3c] mb-6">
        Admission Procedure
      </h2>
      <div className="w-24 h-1 bg-[#00ffe0] mx-auto mb-8 rounded-full"></div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        A simple, transparent, and student-friendly admission process
        designed to help you begin your learning journey smoothly.
      </p>
    </motion.div>

    

    {/* 4-Step Process */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-20 bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-[#001e3c] mb-12 text-center">
        Easy 4-Step Admission Process
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] z-0 rounded-full"></div>

        {[
          {
            number: "01",
            title: "Application Form",
            desc: "Fill the online application form on the university portal.",
          },
          {
            number: "02",
            title: "Documents & Fee",
            desc: "Upload required documents and pay the application fee.",
          },
          {
            number: "03",
            title: "Confirmation",
            desc: "Receive confirmation and student login credentials.",
          },
          {
            number: "04",
            title: "Enrollment",
            desc: "Complete fee payment and begin your classes.",
          },
        ].map((step, index) => (
          <motion.div
            key={index}
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
              <span className="text-3xl md:text-4xl font-bold">{step.number}</span>
              <span className="text-xs md:text-sm uppercase font-semibold mt-1">Step</span>
            </div>
            <h4 className="text-lg md:text-xl font-bold text-[#001e3c] mb-2">
              {step.title}
            </h4>
            <p className="text-gray-600 text-sm md:text-base">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>
    </div>
  )
}

export default AdmissionProcedure
