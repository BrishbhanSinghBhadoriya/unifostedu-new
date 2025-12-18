import React from 'react'

const Introducation = ({setOpenModal, openModal}) => {
    const heroBadges = [
  { label: "UGC Entitled", detail: "Globally valid degrees" },
  { label: "NAAC A+", detail: "Trusted academic legacy" },
  { label: "AI-Proctored", detail: "Secure online exams" },
    ];
  const heroFeatureChips = [
  { icon: "🎓", text: "UGC-Entitled Degrees" },
  { icon: "💼", text: "Career Studio Support" },
  { icon: "💰", text: "Flexible Fee Plans" },
  { icon: "🌍", text: "Global Recognition" },
];
const heroStats = [
  { value: "30+", label: "Years of Excellence" },
  { value: "50K+", label: "Alumni Network" },
  { value: "150+", label: "Hiring Partners" },
  { value: "4.7/5", label: "Learner Score" },
];
 const openWhatsAppSupport = () => {
    if (typeof window === "undefined") return;
    window.open("https://wa.me/917042646766", "_blank", "noopener,noreferrer");
  };
  const quickActionCards = [
    {
      title: "Talk to an Advisor",
      desc: "Get a personalised roadmap in minutes",
      icon: "🤝",
      cta: "Book a Call",
      action: () => setOpenModal({ type: "apply" }),
    },
    {
      title: "WhatsApp Support",
      desc: "Ask questions & get instant updates",
      icon: "💬",
      cta: "Chat Now",
      action: openWhatsAppSupport,
    },
    {
      title: "Download Program Kit",
      desc: "Compare fees, eligibility & outcomes",
      icon: "📄",
      cta: "Get Brochure",
      action: () => setOpenModal({ type: "enquire" }),
    },
  ];
  
  return (
    <section
          id="introduction"
          className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[720px] overflow-hidden bg-[#050817] pt-20"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/didkrwhbu/image/upload/v1762327861/smu-uni_bfti15.webp')] bg-cover bg-center opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/85 to-purple-900/75" />
            <div className="absolute -top-32 -left-28 h-80 w-80 rounded-full bg-orange-500/25 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[160px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              {/* Left Content */}
              <div className="text-white space-y-6 sm:space-y-7">
                <div className="flex flex-wrap gap-2">
                  {heroBadges.map((badge) => (
                    <div
                      key={badge.label}
                      className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs backdrop-blur supports-[backdrop-filter]:bg-white/10"
                    >
                      <span className="font-semibold text-orange-200">{badge.label}</span>
                      <span className="text-[10px] text-white/70">{badge.detail}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <p className="text-[11px] uppercase tracking-[0.4em] text-white/70">Sikkim Manipal University Online</p>
                  <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    Unlock a future-ready career with premium online degrees.
                  </h1>
                  <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl">
                    Study live + on-demand, get mentored by industry experts, and graduate with UGC-entitled credentials
                    accepted worldwide—all without pausing your life.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 max-w-lg">
                  {heroFeatureChips.map((item) => (
                    <div key={item.text} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-xs sm:text-sm text-white/80">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button
                    onClick={() => setOpenModal({ type: "apply" })}
                    className="group bg-gradient-to-r from-orange-500 via-rose-500 to-pink-600 hover:from-orange-500 hover:via-orange-600 hover:to-rose-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 shadow-[0_20px_45px_rgba(249,115,22,0.35)] flex items-center justify-center gap-3 text-sm sm:text-base cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5m5-5H6" />
                    </svg>
                  </button>

                  <button
                    onClick={() => setOpenModal({ type: "enquire" })}
                    className="border border-white/30 hover:border-white/60 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl transition-all duration-300 hover:bg-white/10 backdrop-blur text-sm sm:text-base"
                  >
                    Download Brochure
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur supports-[backdrop-filter]:bg-white/10">
                      <div className="text-xl sm:text-2xl font-bold text-orange-200">{stat.value}</div>
                      <p className="text-[10px] sm:text-xs text-gray-200 tracking-wide mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:pl-8">
                <div className="relative rounded-[32px] border border-white/10 bg-white/5 px-5 py-6 sm:p-8 backdrop-blur supports-[backdrop-filter]:bg-white/10 shadow-2xl">
                  <div className="absolute inset-x-6 top-0 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-5 py-2 text-center text-xs font-semibold text-white shadow-lg">
                    Real-time learning snapshot
                  </div>

                  <div className="space-y-5 pt-4">
                    <div className="text-center space-y-2">
                      <p className="text-xs uppercase tracking-[0.4em] text-white/60">SMU Advantage</p>
                      <h3 className="text-lg sm:text-2xl font-bold text-white">A campus experience, reimagined for online</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { badge: "Live", title: "Interactive classes", desc: "Attend or replay anytime" },
                        { badge: "24/7", title: "Smart LMS", desc: "AI-guided study coach" },
                        { badge: "Career+", title: "Placement studio", desc: "Resume, LinkedIn & mock interviews" },
                        { badge: "Global", title: "Worldwide alumni", desc: "Network across 50+ countries" },
                      ].map((card) => (
                        <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white/90">
                          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-orange-200">{card.badge}</span>
                          <h4 className="mt-2 text-sm font-semibold">{card.title}</h4>
                          <p className="text-[11px] text-white/70">{card.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 text-white/90">
                      <p className="text-sm">
                        “The new SMU interface feels premium—like stepping into a digital campus the moment the page loads.”
                      </p>
                      <p className="mt-2 text-xs text-white/70">— Working professional, Online MBA '25</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center text-white/70 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
            </div>
            <span className="mt-2 text-[10px] tracking-[0.5em] uppercase">Scroll</span>
          </div>

          <div className="relative z-20 -mt-10 sm:-mt-14 lg:-mt-16 pb-6 sm:pb-8 md:pb-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {quickActionCards.map((card) => (
                <button
                  key={card.title}
                  onClick={card.action}
                  className="group rounded-2xl border border-slate-200/70 bg-white/85 p-4 text-left shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-2xl"
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

export default Introducation