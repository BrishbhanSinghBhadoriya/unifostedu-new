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
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">
          Upskill with UniFost – Get, Set, Unifost
        </h2>

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
