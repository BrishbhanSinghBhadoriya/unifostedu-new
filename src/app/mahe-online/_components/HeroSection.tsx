import React from 'react'
import { OpenModalState } from '../../../../types/Modal'
const HeroSection = ({ setOpenModal, openModal }: { setOpenModal: (state: OpenModalState) => void; openModal: OpenModalState }) => {
     const heroAccreditationBadges = [
    { label: "NAAC A++", detail: "Top-tier accreditation" },
    { label: "UGC Entitled", detail: "Globally valid degrees" },
    { label: "AICTE Aligned", detail: "Industry-ready pedagogy" },
  ];
   const heroStats = [
    { value: "55K+", label: "Online Learners" },
    { value: "2200+", label: "Hiring Partners" },
    { value: "4.8/5", label: "Learner Satisfaction" },
    { value: "93%", label: "Positive ROI" },
  ];
   const openWhatsAppSupport = () => {
    if (typeof window === "undefined") return;
    window.open("https://wa.me/917042646766?text=Hi%20Unifost,%20I%20want%20to%20know%20more%20about%20courses.%20My%20Name%20is:%20", "_blank", "noopener,noreferrer");
  };
  return (
     <section
        id="HeroSection"
          className="relative min-h-[480px] sm:min-h-[480px] md:min-h-[480px] lg:min-h-[calc(100vh-60px)] overflow-hidden bg-[#030616]"
        >

          {/* Animated Background */}
          <div className="absolute inset-0">
            
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/85 to-purple-900/80"></div>
            <div className="absolute inset-0 -left-24 h-80 w-80 rounded-full bg-orange-500/25 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[160px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8 pb-8 pt-4 sm:pb-10 sm:pt-6 md:pb-14 md:pt-10 lg:pb-24 lg:pt-16 xl:pb-28 xl:pt-20">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-9">
                {/* Accreditation Badge */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {heroAccreditationBadges.map((badge) => (
                    <div
                      key={badge.label}
                      className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs backdrop-blur supports-[backdrop-filter]:bg-white/10"
                    >
                      <span className="font-semibold text-orange-200">{badge.label}</span>
                      <span className="text-[10px] text-white/70">{badge.detail}</span>
                    </div>
                  ))}
                </div>

                {/* Main Heading */}
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <h1 className="font-queens text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="block text-white/90">Transform Your</span>
                    <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-pink-500 bg-clip-text text-transparent">
                      Career with
                    </span>
                    <span className="block text-white/90 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                      Manipal Academy of Higher Education
                    </span>
                  </h1>
                  
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200/90 leading-relaxed max-w-2xl">
                    Earn globally recognized degrees from Manipal Academy of Higher Education with 100% online learning and placement assistance.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 max-w-lg">
                  {[
                    { icon: '🎓', text: 'UGC Entitled Degrees' },
                    { icon: '💼', text: 'Placement Support 1:1' },
                    { icon: '💰', text: 'Zero-Cost EMI Plans' },
                    { icon: '🌍', text: 'Global Alumni Network' }
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur supports-[backdrop-filter]:bg-white/10">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-xs sm:text-sm text-gray-200">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-1/2 group bg-gradient-to-r from-orange-500 via-rose-500 to-pink-600 hover:from-orange-500 hover:via-orange-600 hover:to-rose-600 text-white font-semibold px-5 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 shadow-[0_20px_45px_rgba(249,115,22,0.35)] flex items-center justify-center gap-3 text-sm sm:text-base lg:text-lg w-full sm:w-auto"
                  >
                    <span>Apply Now</span>
                    <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5m5-5H6" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={() => setOpenModal({ type: 'enquire' })}
                    className="w-1/2 border border-white/30 hover:border-white/60 text-white font-semibold px-5 sm:px-8 py-3 sm:py-3.5 rounded-2xl transition-all duration-300 hover:bg-white/10 backdrop-blur text-sm sm:text-base w-full sm:w-auto"
                  >
                    Download Brochure
                  </button>
                </div>

                {/* Hero Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur supports-[backdrop-filter]:bg-white/10">
                      <div className="text-xl sm:text-2xl font-bold text-orange-200">{stat.value}</div>
                      <p className="text-[10px] sm:text-xs text-gray-200 tracking-wider mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Stats Card */}
              <div className="lg:pl-4 xl:pl-8 mt-4 sm:mt-6 lg:mt-0">
                <div className="relative rounded-[32px] border border-white/10 bg-white/5 px-4 py-5 sm:p-6 md:p-8 backdrop-blur supports-[backdrop-filter]:bg-white/10 shadow-2xl">
                  <div className="absolute inset-x-6 top-0 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-5 py-2 text-center text-xs sm:text-sm font-semibold text-white shadow-lg">
                    Real-Time Program Snapshot
                  </div>

                  <div className="space-y-5 sm:space-y-6 pt-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center">
                      Why Learners Love MAHE Online
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { badge: 'Live', title: 'Interactive Classes', desc: 'Daily live sessions + recordings' },
                        { badge: '24/7', title: 'Smart LMS', desc: 'Unlimited access on all devices' },
                        { badge: 'Career+', title: 'Placement Studio', desc: 'Interview prep & hiring events' },
                        { badge: 'Global', title: 'Worldwide Alumni', desc: 'Network in 55+ countries' }
                      ].map((card) => (
                        <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white/90">
                          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-orange-200">
                            {card.badge}
                          </span>
                          <h4 className="mt-2 text-sm font-semibold">{card.title}</h4>
                          <p className="text-[11px] text-white/70">{card.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 text-white/90">
                      <p className="text-sm text-white">
                        “The refreshed interface makes it feel like you’re inside a premium learning platform from the moment you land on the page.”
                      </p>
                      <p className="mt-2 text-xs text-white/70">— Current MBA Learner, Class of 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center text-white/70 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
            </div>
            <span className="mt-2 text-xs tracking-widest uppercase">Scroll</span>
          </div>

           <div className="relative z-20 -mt-10 sm:-mt-14 lg:-mt-16 pb-6 sm:pb-8 md:pb-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {[
                {
                  title: "Speak to an Advisor",
                  desc: "Get a personalised roadmap in minutes",
                  action: () => setOpenModal({ type: "apply" }),
                  icon: "🤝",
                  cta: "Book a Call",
                },
                {
                  title: "WhatsApp Support",
                  desc: "Ask questions & get instant updates",
                  action: openWhatsAppSupport,
                  icon: "💬",
                  cta: "Chat Now",
                },
                {
                  title: "Download Program Kit",
                  desc: "Compare fees, eligibility & outcomes",
                  action: () => setOpenModal({ type: "enquire" }),
                  icon: "📄",
                  cta: "Get Brochure",
                },
              ].map((card) => (
                <button
                  key={card.title}
                  onClick={card.action}
                  className="group rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-left shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{card.icon}</span>
                    <div>
                      <h4 className="text-base font-semibold text-slate-900">{card.title}</h4>
                      <p className="text-xs text-slate-500">{card.desc}</p>
                    </div>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                    {card.cta}
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      
        </section>
  )
}

export default HeroSection