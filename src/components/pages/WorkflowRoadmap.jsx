'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const steps = [
  { id: 1, title: 'Explore & Envision', position: 'top', color: 'bg-purple-500' },
  { id: 2, title: 'Connect & Clarify', position: 'bottom', color: 'bg-blue-500' },
  { id: 3, title: 'Apply & Succeed', position: 'top', color: 'bg-green-500' },
  { id: 4, title: 'Submit Application', position: 'bottom', color: 'bg-yellow-500' },
  { id: 5, title: 'Direct University Payment', position: 'top', color: 'bg-orange-500' },
  { id: 6, title: 'Enroll, Learn, Succeed', position: 'bottom', color: 'bg-pink-500' },
];

// Animated Cap Component
const AnimatedCap = ({ start }) => (
  <motion.div
    className="absolute top-0 left-0"
    initial={{ offsetDistance: `${start}%` }}
    animate={{ offsetDistance: [`${start}%`, `${start + 100}%`] }}
    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
    style={{
      offsetPath: "path('M 0 200 Q 300 50, 600 200 T 1200 200')",
      offsetRotate: '0deg',
    }}
  >
    <FaGraduationCap size={30} className="drop-shadow-xl text-black" />
  </motion.div>
);

export default function WorkflowRoadmap() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Tagline - Enhanced, professional, animated */}
        <div className="relative py-2 md:py-3">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ffe0]/20 via-transparent to-[#00d4c4]/20 blur-xl opacity-60 pointer-events-none" />
          <div className="relative inline-flex items-center gap-3 rounded-full px-4 py-2 bg-white/60 backdrop-blur border border-slate-200 shadow-sm">
            <span aria-hidden className="absolute -left-2 -top-2 h-2 w-2 rounded-full bg-cyan-400 blur-[1px] animate-pulse" />
            <span aria-hidden className="absolute -right-2 -bottom-2 h-2 w-2 rounded-full bg-emerald-400 blur-[1px] animate-pulse" />
            <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight whitespace-normal break-words">
              <span className="bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] bg-clip-text text-transparent">Upskill with UniFost</span>
              <span className="mx-2 text-slate-500">–</span>
              <span className="text-slate-800">Get, Set,</span>
              <span className="ml-2 bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">Unifost</span>
            </h2>
          </div>
          <div className="mt-2 h-1 w-40 sm:w-52 md:w-56 mx-auto bg-gradient-to-r from-[#00ffe0] via-cyan-300 to-emerald-300 rounded-full opacity-90 animate-pulse" />
        </div>

        {/* Road */}
        <div className="relative mt-16">
          <svg viewBox="0 0 1200 400" className="w-full h-72 md:h-96" fill="none">
            {/* Road background */}
            <path
              d="M 0 200 Q 300 50, 600 200 T 1200 200"
              stroke="#1F2937"
              strokeWidth="22"
              strokeLinecap="round"
              fill="transparent"
            />
            {/* Road dashed line */}
            <path
              d="M 0 200 Q 300 50, 600 200 T 1200 200"
              stroke="#ffffff"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="20 20"
              fill="transparent"
            />
          </svg>

          {/* Moving Graduation Caps */}
          <AnimatedCap start={0} />
          <AnimatedCap start={25} />
          <AnimatedCap start={50} />
          <AnimatedCap start={75} />

          {/* Milestones */}
          <div className="absolute inset-0 px-10 flex justify-between items-center">
            {steps.map((s) => (
              <div
                key={s.id}
                className={`flex flex-col items-center ${
                  s.position === 'top' ? 'mb-40' : 'mt-40'
                }`}
              >
                {/* Line connector */}
                <div className="w-px h-10 bg-gray-400"></div>

                {/* Circle with step number */}
                <div
                  className={`w-14 h-14 ${s.color} text-white rounded-full flex items-center justify-center shadow-lg text-lg font-bold`}
                >
                  {s.id}
                </div>

                {/* Step Title */}
                <p className="mt-2 text-sm font-semibold text-slate-800 w-32 text-center">
                  {s.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="#enroll"
            className="inline-flex items-center justify-center rounded-2xl px-8 py-4 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xl"
          >
            Enroll Today
          </a>
        </div>
      </div>
    </section>
  );
}
