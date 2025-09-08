'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const steps = [
  { 
    id: 1, 
    title: 'Explore & Envision', 
    subtitle: 'Discover your path',
    position: 'top', 
    color: 'from-purple-500 to-purple-600',
    icon: '🎯'
  },
  { 
    id: 2, 
    title: 'Connect & Clarify', 
    subtitle: 'Get expert guidance',
    position: 'bottom', 
    color: 'from-blue-500 to-blue-600',
    icon: '💬'
  },
  { 
    id: 3, 
    title: 'Apply & Succeed', 
    subtitle: 'Submit your application',
    position: 'top', 
    color: 'from-green-500 to-green-600',
    icon: '📝'
  },
  { 
    id: 4, 
    title: 'Submit Application', 
    subtitle: 'Complete formalities',
    position: 'bottom', 
    color: 'from-yellow-500 to-yellow-600',
    icon: '📋'
  },
  { 
    id: 5, 
    title: 'Direct University Payment', 
    subtitle: 'Secure payment process',
    position: 'top', 
    color: 'from-orange-500 to-orange-600',
    icon: '💳'
  },
  { 
    id: 6, 
    title: 'Enroll, Learn, Succeed', 
    subtitle: 'Begin your journey',
    position: 'bottom', 
    color: 'from-pink-500 to-pink-600',
    icon: '🎓'
  },
];

// Animated Cap Component with better positioning
const AnimatedCap = ({ start, delay = 0 }) => (
  <motion.div
    className="absolute top-0 left-0 z-10"
    initial={{ offsetDistance: `${start}%` }}
    animate={{ offsetDistance: [`${start}%`, `${start + 100}%`] }}
    transition={{ 
      duration: 20, 
      repeat: Infinity, 
      ease: 'linear',
      delay: delay 
    }}
    style={{
      offsetPath: "path('M 0 200 Q 300 50, 600 200 T 1200 200')",
      offsetRotate: '0deg',
    }}
  >
    <div className="relative">
      <FaGraduationCap size={24} className="text-black drop-shadow-lg" />
      <div className="absolute -inset-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-sm opacity-30 animate-pulse" />
    </div>
  </motion.div>
);

export default function WorkflowRoadmap({ onGetStartedClick }) {
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
    <section className="py-12   md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 md:w-80 h-60 md:h-80 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-60 md:w-80 h-60 md:h-80 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Enhanced Tagline */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-emerald-400/20 blur-2xl opacity-60" />
            <div className="relative bg-white/70 mb-20 md:mb-10 backdrop-blur-sm rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 border border-white/50 shadow-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  Upskill with UniFost
                </span>
                <span className="mx-2 md:mx-3 text-slate-600">–</span>
                <span className="text-slate-800">Get, Set,</span>
                <span className="ml-2 md:ml-3 bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  Unifost
                </span>
              </h2>
              <div className="mt-2 md:mt-3 h-0.5 md:h-1 w-24 sm:w-32 md:w-40 mx-auto bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 rounded-full opacity-80" />
            </div>
          </div>
        </div>

        {/* Road Container with better spacing */}
        <div className="relative">
          {/* Road SVG with improved dimensions */}
          <div className="relative h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem]">
            <svg viewBox="0 0 1200 400" className="w-full h-full" fill="none">
              {/* Road background with gradient */}
              <defs>
                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1F2937" />
                  <stop offset="50%" stopColor="#374151" />
                  <stop offset="100%" stopColor="#1F2937" />
                </linearGradient>
              </defs>
              
              <path
                d="M 0 200 Q 300 50, 600 200 T 1200 200"
                stroke="url(#roadGradient)"
                strokeWidth="20"
                strokeLinecap="round"
                fill="transparent"
              />
              
              {/* Road dashed line */}
              <path
                d="M 0 200 Q 300 50, 600 200 T 1200 200"
                stroke="#ffffff"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="25 15"
                fill="transparent"
              />
            </svg>

            {/* Moving Graduation Caps with staggered timing */}
            <AnimatedCap start={0} delay={0} />
            <AnimatedCap start={10} delay={2} />
            <AnimatedCap start={20} delay={5} />
            <AnimatedCap start={30} delay={8} />
            <AnimatedCap start={40} delay={10} />
            <AnimatedCap start={50} delay={12} />
            <AnimatedCap start={60} delay={15} />
            <AnimatedCap start={70} delay={18} />
            <AnimatedCap start={80} delay={20} />
            <AnimatedCap start={90} delay={22} />

            {/* Start Image - University Building */}
            <div className="absolute left-[-1.2rem] sm:left-[-5rem] md:left-[-6rem] lg:left-[-7rem] bottom-24 sm:bottom-40 md:bottom-40 z-20">
              <div className="relative">
                <Image width={100} height={100} src="/images/university.webp" alt="University Start" className="w-16 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 object-cover rounded-full" />
              </div>
            </div>

            {/* Destination Image - Marshmallow Graduation */}
            <div className="absolute right-2 sm:right-[-5rem] md:right-[-6rem] lg:right-[-7rem] bottom-24 sm:bottom-40 md:bottom-40 z-20">
              <div className="relative">
                <Image width={100} height={100} src="/images/marshmallo1.webp" alt="Graduation Success" className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-cover rounded-full" />
              </div>
            </div>
          </div>

          {/* Milestones with improved positioning and spacing */}
          <div className="absolute inset-0 px-2 sm:px-4 md:px-8 lg:px-12 flex justify-between items-center">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: step.position === 'top' ? 50 : -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center ${
                  step.position === 'top' ? 'mb-48 sm:mb-56 md:mb-64 lg:mb-72 xl:mb-80' : 'mt-48 sm:mt-56 md:mt-64 lg:mt-72 xl:mt-80'
                } ${step.id === 1 || step.id === 3 || step.id === 5 ? 'rotate-180' : ''}`}
              >
                {/* Connector line - increased height */}
                <div className={`w-0.5 bg-gradient-to-b ${
                  step.position === 'top' 
                    ? 'from-transparent via-slate-400 to-slate-600' 
                    : 'from-slate-600 via-slate-400 to-transparent'
                } ${step.id === 2 || step.id === 5 ? 'h-12 sm:h-16 md:h-20 lg:h-24' : 'h-8 sm:h-12 md:h-16'}`} />

                {/* Step circle with enhanced design */}
                <div className="relative group">
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-r ${step.color} rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                  
                  {/* Main circle */}
                  <div className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${step.color} text-white rounded-full flex items-center justify-center shadow-xl text-sm sm:text-base md:text-lg lg:text-xl font-bold border-2 sm:border-4 border-white transform group-hover:scale-110 transition-all duration-300 ${step.id === 1 || step.id === 3 || step.id === 5 ? '-rotate-180' : ''}`}>
                    {step.id}
                  </div>
                  
                  {/* Icon overlay */}
                  <div className={`absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center shadow-md text-xs sm:text-sm md:text-base ${step.id === 1 || step.id === 3 || step.id === 5 ? '-rotate-180' : ''}`}>
                    {step.icon}
                  </div>
                </div>

                {/* Step content with better spacing - increased margin */}
                <div className={`mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-center max-w-20 sm:max-w-24 md:max-w-28 lg:max-w-32 xl:max-w-36 ${step.id === 1 || step.id === 3 || step.id === 5 ? '-rotate-180' : ''}`}>
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-800 leading-tight mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-tight">
                    {step.subtitle}
                  </p>
                </div>

                {/* Progress indicator */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className={`mt-2 sm:mt-3 md:mt-4 ${step.id === 1 || step.id === 3 || step.id === 5 ? '-rotate-180' : ''}`}
                >
                  <FaCheckCircle className="text-green-500 text-sm sm:text-base md:text-lg lg:text-xl" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl md:rounded-2xl blur-lg opacity-30" />
            <button

              onClick={onGetStartedClick}
              className="relative mt-20 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 shadow-lg transform hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <span>Start Your Journey Today</span>
              <FaArrowRight className="text-xs" />
            </button>
          </motion.div>
          
          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-sm md:text-base">
            Join thousands of students who have transformed their careers with UniFost
          </p>
        </div>
      </div>
    </section>
    

  );
}