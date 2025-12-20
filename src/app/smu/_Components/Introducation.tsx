import React from 'react';
type OpenModalState = {
  type: 'apply' | 'enquire';
  program?: string;
} | null;

type IntroducationProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};

const Introducation: React.FC<IntroducationProps> = ({ setOpenModal }) => {
  const heroBadges = [
    { label: 'UGC Entitled', detail: 'Globally valid degrees' },
    { label: 'NAAC A+', detail: 'Trusted academic legacy' },
    { label: 'AI-Proctored', detail: 'Secure online exams' },
  ];

  const heroFeatureChips = [
    { icon: '🎓', text: 'UGC-Entitled Degrees' },
    { icon: '💼', text: 'Career Studio Support' },
    { icon: '💰', text: 'Flexible Fee Plans' },
    { icon: '🌍', text: 'Global Recognition' },
  ];

  const heroStats = [
    { value: '30+', label: 'Years of Excellence' },
    { value: '50K+', label: 'Alumni Network' },
    { value: '150+', label: 'Hiring Partners' },
    { value: '4.7/5', label: 'Learner Score' },
  ];

  const openWhatsAppSupport = () => {
    if (typeof window === 'undefined') return;
    window.open('https://wa.me/917042646766', '_blank', 'noopener,noreferrer');
  };

  const quickActionCards = [
    {
      title: 'Talk to an Advisor',
      desc: 'Get a personalised roadmap in minutes',
      icon: '🤝',
      cta: 'Book a Call',
      action: () => setOpenModal({ type: 'apply' }),
    },
    {
      title: 'WhatsApp Support',
      desc: 'Ask questions & get instant updates',
      icon: '💬',
      cta: 'Chat Now',
      action: openWhatsAppSupport,
    },
    {
      title: 'Download Program Kit',
      desc: 'Compare fees, eligibility & outcomes',
      icon: '📄',
      cta: 'Get Brochure',
      action: () => setOpenModal({ type: 'enquire' }),
    },
  ];

  return (
    <section
      id="introduction"
      className="relative min-h-[560px] overflow-hidden bg-[#050817] pt-20"
    >
      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center text-white">

          {/* LEFT */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {heroBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs"
                >
                  <strong className="text-orange-300">{badge.label}</strong>{' '}
                  <span className="text-white/70">{badge.detail}</span>
                </span>
              ))}
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold">
              Unlock a future-ready career with premium online degrees.
            </h1>

            <p className="text-white/80 max-w-xl">
              Study live + on-demand, get mentored by industry experts, and
              graduate with UGC-entitled credentials.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {heroFeatureChips.map((chip) => (
                <div
                  key={chip.text}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2"
                >
                  <span>{chip.icon}</span>
                  <span className="text-sm text-white/80">{chip.text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setOpenModal({ type: 'apply' })}
                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold"
              >
                Apply Now
              </button>

              <button
                onClick={() => setOpenModal({ type: 'enquire' })}
                className="border border-white/40 px-6 py-3 rounded-xl"
              >
                Download Brochure
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-3 text-center"
                >
                  <div className="text-xl font-bold text-orange-300">
                    {stat.value}
                  </div>
                  <p className="text-xs text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/80 text-sm">
              “The new SMU interface feels premium—like stepping into a digital
              campus.”
            </p>
            <p className="mt-2 text-xs text-white/60">
              — Online MBA Student
            </p>
          </div>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="relative z-20 -mt-10 pb-10">
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-3 gap-4">
          {quickActionCards.map((card) => (
            <button
              key={card.title}
              onClick={card.action}
              className="rounded-2xl bg-white p-4 shadow-lg text-left hover:-translate-y-1 transition"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{card.icon}</span>
                <div>
                  <h4 className="font-semibold">{card.title}</h4>
                  <p className="text-xs text-gray-500">{card.desc}</p>
                </div>
              </div>
              <span className="text-orange-600 font-semibold text-sm mt-2 inline-block">
                {card.cta} →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introducation;
