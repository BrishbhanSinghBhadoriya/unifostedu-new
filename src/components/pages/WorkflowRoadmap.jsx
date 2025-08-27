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