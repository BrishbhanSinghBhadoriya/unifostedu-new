'use client';

import { FaArrowRight, FaCircleCheck } from 'react-icons/fa6';

const steps = [
  { id: 1, title: 'Explore & Envision',         subtitle: 'Discover your path',       position: 'top',    color: 'from-purple-500 to-purple-600', icon: '🎯' },
  { id: 2, title: 'Connect & Clarify',           subtitle: 'Get expert guidance',      position: 'bottom', color: 'from-blue-500 to-blue-600',     icon: '💬' },
  { id: 3, title: 'Apply & Succeed',             subtitle: 'Submit your application',  position: 'top',    color: 'from-green-500 to-green-600',   icon: '📝' },
  { id: 4, title: 'Submit Application',          subtitle: 'Complete formalities',     position: 'bottom', color: 'from-yellow-500 to-yellow-600', icon: '📋' },
  { id: 5, title: 'Direct University Payment',   subtitle: 'Secure payment process',   position: 'top',    color: 'from-orange-500 to-orange-600', icon: '💳' },
  { id: 6, title: 'Enroll, Learn, Succeed',      subtitle: 'Begin your journey',       position: 'bottom', color: 'from-pink-500 to-pink-600',     icon: '🎓' },
];

export default function WorkflowRoadmap({ onGetStartedClick }: { onGetStartedClick: () => void }) {
  return (
    <section
      className="mt-8 sm:mt-12 lg:mt-16 py-12 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
      aria-label="How Unifost works"
    >
      {/* Background decorative elements - hidden on mobile for perf */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hidden lg:block absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-20 blur-3xl" />
        <div className="hidden lg:block absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Tagline */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="relative inline-block">
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

        {/* Road Container */}
        <div className="relative">
          <div className="relative h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem]" aria-hidden="true">
            <svg viewBox="0 0 1200 400" className="w-full h-full" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1F2937" />
                  <stop offset="50%" stopColor="#374151" />
                  <stop offset="100%" stopColor="#1F2937" />
                </linearGradient>
              </defs>
              <path d="M 0 200 Q 300 50, 600 200 T 1200 200" stroke="url(#roadGradient)" strokeWidth="20" strokeLinecap="round" fill="transparent" />
              <path d="M 0 200 Q 300 50, 600 200 T 1200 200" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeDasharray="25 15" fill="transparent" />
            </svg>
          </div>

          {/* Milestones - CSS transitions only, no framer-motion */}
          <div className="absolute inset-0 px-2 sm:px-4 md:px-8 lg:px-12 flex justify-between items-center">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col items-center ${
                  step.position === 'top'
                    ? 'mb-48 sm:mb-56 md:mb-64 lg:mb-72 xl:mb-80'
                    : 'mt-48 sm:mt-56 md:mt-64 lg:mt-72 xl:mt-80'
                } ${step.id === 1 || step.id === 3 || step.id === 5 ? 'rotate-180' : ''}`}
                aria-label={`Step ${step.id}: ${step.title}`}
              >
                <div className={`w-0.5 bg-gradient-to-b ${
                  step.position === 'top'
                    ? 'from-transparent via-slate-400 to-slate-600'
                    : 'from-slate-600 via-slate-400 to-transparent'
                } ${step.id === 2 || step.id === 5 ? 'h-12 sm:h-16 md:h-20 lg:h-24' : 'h-8 sm:h-12 md:h-16'}`} />

                <div className="relative group">
                  <div className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-r ${step.color} rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`} aria-hidden="true" />
                  <div className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${step.color} text-white rounded-full flex items-center justify-center shadow-xl text-sm sm:text-base md:text-lg lg:text-xl font-bold border-2 sm:border-4 border-white group-hover:scale-110 transition-transform duration-300 ${step.id === 1 || step.id === 3 || step.id === 5 ? '-rotate-180' : ''}`}>
                    {step.id}
                  </div>
                  <div className={`absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center shadow-md text-xs sm:text-sm md:text-base ${step.id === 1 || step.id === 3 || step.id === 5 ? '-rotate-180' : ''}`} aria-hidden="true">
                    {step.icon}
                  </div>
                </div>

                <div className={`mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-center max-w-20 sm:max-w-24 md:max-w-28 lg:max-w-32 xl:max-w-36 ${step.id === 1 || step.id === 3 || step.id === 5 ? '-rotate-180' : ''}`}>
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-800 leading-tight mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-tight">{step.subtitle}</p>
                </div>

                <div className={`mt-2 sm:mt-3 md:mt-4 ${step.id === 1 || step.id === 3 || step.id === 5 ? '-rotate-180' : ''}`} aria-hidden="true">
                  <FaCircleCheck className="text-green-500 text-sm sm:text-base md:text-lg lg:text-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl md:rounded-2xl blur-lg opacity-30" aria-hidden="true" />
            <button
              onClick={onGetStartedClick}
              aria-label="Start your journey with Unifost"
              className="relative mt-20 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 shadow-lg hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <span>Start Your Journey Today</span>
              <FaArrowRight className="text-xs" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-sm md:text-base">
            Join thousands of students who have transformed their careers with UniFost
          </p>
        </div>
      </div>
    </section>
  );
}
