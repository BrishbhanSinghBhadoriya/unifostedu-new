'use client';

import React, { useEffect, useRef } from 'react';
import { FaGraduationCap, FaBook, FaLaptopCode } from 'react-icons/fa';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const steps = [
  { id: 1, title: 'Explore & Envision', position: 'top', color: 'bg-purple-500' },
  { id: 2, title: 'Connect & Clarify', position: 'bottom', color: 'bg-blue-500' },
  { id: 3, title: 'Apply & Succeed', position: 'top', color: 'bg-green-500' },
  { id: 4, title: 'Submit Application', position: 'bottom', color: 'bg-yellow-500' },
  { id: 5, title: 'Direct University Payment', position: 'top', color: 'bg-orange-500' },
  { id: 6, title: 'Enroll, Learn, Succeed', position: 'bottom', color: 'bg-pink-500' },
];

export default function WorkflowRoadmap() {
  const iconsRef = useRef([]);

  useEffect(() => {
    iconsRef.current.forEach((el, i) => {
      if (!el) return;

      gsap.to(el, {
        duration: 15,
        repeat: -1,
        ease: 'linear',
        motionPath: {
          path: '#roadPath', // link to the SVG path
          align: '#roadPath',
          alignOrigin: [0.5, 0.5],
          start: i * 0.2, // staggered start
          end: 1 + i * 0.2,
        },
      });
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 relative overflow-hidden">
      <div className="text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">
          Upskill with UniFost – Get, Set, Unifost
        </h2>
      </div>

      {/* Road Full Screen */}
      <div className="relative w-screen mt-16">
        <svg viewBox="0 0 2400 400" className="w-screen h-80 md:h-96" fill="none">
          {/* Road background */}
          <path
            id="roadPath"
            d="M 0 200 Q 600 50, 1200 200 T 2400 200"
            stroke="#1F2937"
            strokeWidth="24"
            strokeLinecap="round"
            fill="transparent"
          />
          {/* Road dashed line */}
          <path
            d="M 0 200 Q 600 50, 1200 200 T 2400 200"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="20 20"
            fill="transparent"
          />
        </svg>

        {/* Moving Icons (controlled by GSAP) */}
        <div
          ref={(el) => (iconsRef.current[0] = el)}
          className="absolute top-0 left-0 text-black"
        >
          <FaGraduationCap size={42} />
        </div>
        <div
          ref={(el) => (iconsRef.current[1] = el)}
          className="absolute top-0 left-0 text-blue-700"
        >
          <FaBook size={42} />
        </div>
        <div
          ref={(el) => (iconsRef.current[2] = el)}
          className="absolute top-0 left-0 text-green-700"
        >
          <FaLaptopCode size={42} />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center relative z-10">
        <a
          href="#enroll"
          className="inline-flex items-center justify-center rounded-2xl px-8 py-4 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xl"
        >
          Enroll Today
        </a>
      </div>
    </section>
  );
}
