'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import { optimizeCloudinary } from '@/utils/cloudinary';
import Image from 'next/image';
import Footer from '@/components/Footer';

import ApplyEnquiryModal from '@/components/ApplyEnquiryModal'

type OpenModalState = { type: 'apply' | 'enquire'; program?: string } | null;
type MAOnlineProps = { setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>> };
type ProgramKey = 'english' | 'polsci' | 'sociology';


const programs: Record<ProgramKey, {
  name: string; fullName: string; color: string; accent: string; bg: string;
  darkBg: string; icon: string; tagline: string; desc: string;
  fee: string; semFee: string; emi: string; seats: string; credits: string;
  sem1: string[]; sem2: string[]; sem3: string[]; sem4: string[];
  careerRoles: string[]; industries: string[];
  faqs: { q: string; a: string }[];
}> = {
  english: {
    name: 'MA English',
    fullName: 'Master of Arts in English',
    color: 'from-violet-600 to-purple-600',
    accent: 'violet-600',
    bg: 'bg-violet-50',
    darkBg: 'bg-violet-600',
    icon: '✍️',
    tagline: 'Master Language, Literature & Communication',
    desc: 'The Online MA in English from Sikkim Manipal University (SMU) is a 2-year postgraduate program covering British, American and Indian literature, linguistics, critical theory, ELT and academic writing. Ideal for graduates aspiring to careers in education, content, media, publishing, and communication.',
    fee: '₹72,000', semFee: '₹18,000', emi: '₹3,000', seats: '75%', credits: '80',
    sem1: ['Indian Writing in English', 'British Literature', 'Linguistics and Phonetics', 'Literary Theory and Criticism', 'Communication Skills'],
    sem2: ['American Literature', 'Post-Colonial Literature', 'Stylistics and Discourse Analysis', 'Language and Society', 'Research Methodology'],
    sem3: ['Modern Indian Literature in Translation', 'Comparative Literature', 'ELT Methods and Approaches', 'Gender Studies in Literature', 'Academic and Creative Writing'],
    sem4: ['Contemporary Literature', 'World Literature', 'Dissertation / Project Work', 'Media and Communication Studies'],
    careerRoles: ['Content Writer', 'English Teacher / Lecturer', 'Editor', 'Copywriter', 'Translator', 'Academic Researcher', 'Communication Manager', 'ELT Trainer', 'Journalist', 'PR Executive'],
    industries: ['Education & Academia', 'Publishing & Media', 'Content & Digital Marketing', 'Government / Civil Services', 'Journalism', 'NGOs & Development'],
    faqs: [
      { q: 'Who can apply for SMU Online MA English?', a: 'Any graduate with a 10+2+3 bachelor\'s degree from a recognized university. Graduates from any stream (Arts, Commerce, Science) are eligible. No minimum percentage is mandated.' },
      { q: 'Is the SMU MA English degree valid for teaching jobs?', a: 'Yes. SMU Online MA English is UGC-DEB approved and equivalent to a regular on-campus MA. It is accepted for school/college teaching posts, NET eligibility, and government jobs across India.' },
      { q: 'Can I appear for UGC-NET after SMU MA English?', a: 'Yes. As a UGC-recognized postgraduate degree, it qualifies you to appear for UGC-NET in English, which opens doors to college-level teaching and research fellowships.' },
      { q: 'What is the total fee for SMU MA English?', a: 'Total course fee is ₹72,000 (₹18,000 per semester). No-cost EMI starts at ₹3,000/month. Scholarships up to 30% available for eligible categories.' },
      { q: 'How are exams conducted?', a: 'Exams are AI-proctored and conducted online from home. 75% course completion is required to appear for term-end exams. Assessment is 70% TEE + 30% Continuous Assessment.' },
    ],
  },
  polsci: {
    name: 'MA Political Science',
    fullName: 'Master of Arts in Political Science',
    color: 'from-rose-600 to-red-600',
    accent: 'rose-600',
    bg: 'bg-rose-50',
    darkBg: 'bg-rose-600',
    icon: '🏛️',
    tagline: 'Understand Power, Governance & Global Affairs',
    desc: 'The Online MA in Political Science from Sikkim Manipal University (SMU) is a 2-year postgraduate program covering political theory, Indian government, international relations, public administration, comparative politics and electoral studies. Perfect for UPSC aspirants, policy analysts and public sector professionals.',
    fee: '₹72,000', semFee: '₹18,000', emi: '₹3,000', seats: '72%', credits: '80',
    sem1: ['Political Theory', 'Indian Government and Politics', 'International Relations', 'Comparative Politics', 'Research Methodology in Social Sciences'],
    sem2: ['Indian Political Thought', 'Public Administration', 'International Organizations', 'Electoral Politics in India', 'Political Sociology'],
    sem3: ['Public Policy and Governance', 'Foreign Policy of India', 'Human Rights and Politics', 'Political Economy', 'Gender and Politics'],
    sem4: ['South Asian Politics', 'Geopolitics and Security Studies', 'Contemporary Global Issues', 'Dissertation / Project Work'],
    careerRoles: ['IAS / UPSC Officer', 'Policy Analyst', 'Political Analyst', 'Diplomat', 'Public Administrator', 'Journalist / Political Reporter', 'NGO Program Manager', 'Academic Researcher', 'Civil Services Aspirant', 'Think Tank Associate'],
    industries: ['Government & Public Sector', 'Think Tanks & Research', 'NGOs & Development', 'Media & Journalism', 'International Organizations', 'Education & Academia'],
    faqs: [
      { q: 'Is SMU MA Political Science useful for UPSC preparation?', a: 'Absolutely. The curriculum directly aligns with UPSC Civil Services syllabus — Indian polity, governance, international relations, public policy and political theory are all core subjects, making this ideal for UPSC aspirants.' },
      { q: 'Who is eligible for SMU Online MA Political Science?', a: 'Any graduate with a 10+2+3 bachelor\'s degree from any recognized university. No stream restriction. Graduates from Arts, Commerce, Science and any field can apply.' },
      { q: 'Is this degree valid for government jobs and NET?', a: 'Yes. Being UGC-DEB approved, this degree is equivalent to a regular campus MA and is valid for government jobs, teaching posts, UGC-NET in Political Science, and higher education admissions.' },
      { q: 'What is the fee for SMU MA Political Science?', a: 'Total fee is ₹72,000 (₹18,000/semester). No-cost EMI ₹3,000/month. Scholarships up to 30% for NE students, defence personnel, differently-abled and SMU alumni.' },
      { q: 'Can working professionals pursue this course?', a: 'Yes, it is 100% online with live and recorded classes. Study 15–20 hours per week at your own pace without leaving your job or current city.' },
    ],
  },
  sociology: {
    name: 'MA Sociology',
    fullName: 'Master of Arts in Sociology',
    color: 'from-amber-600 to-orange-600',
    accent: 'amber-600',
    bg: 'bg-amber-50',
    darkBg: 'bg-amber-600',
    icon: '🌍',
    tagline: 'Decode Society, Culture & Human Behaviour',
    desc: 'The Online MA in Sociology from Sikkim Manipal University (SMU) is a 2-year postgraduate program covering sociological theory, Indian society, social research methods, gender studies, rural/urban sociology and social stratification. Ideal for social workers, researchers, NGO professionals and civil services aspirants.',
    fee: '₹72,000', semFee: '₹18,000', emi: '₹3,000', seats: '70%', credits: '80',
    sem1: ['Sociological Theory', 'Indian Society and Social Structure', 'Sociology of Family, Kinship and Marriage', 'Social Research Methods', 'Communication and Presentation Skills'],
    sem2: ['Contemporary Sociological Theory', 'Social Stratification and Mobility', 'Sociology of Religion', 'Gender and Society', 'Statistics for Social Sciences'],
    sem3: ['Urban and Rural Sociology', 'Development and Social Change', 'Sociology of Education', 'Environmental Sociology', 'Qualitative Research Methods'],
    sem4: ['Political Sociology', 'Sociology of Work and Professions', 'Globalization and Society', 'Dissertation / Project Work'],
    careerRoles: ['Social Worker / Welfare Officer', 'Sociologist / Researcher', 'NGO Program Manager', 'HR Specialist', 'Journalist', 'Policy Analyst', 'Community Development Officer', 'Lecturer / Academic', 'Civil Services Officer', 'Corporate CSR Manager'],
    industries: ['Government & Public Sector', 'NGOs & Social Work', 'Education & Academia', 'Healthcare', 'Corporate CSR', 'Media & Journalism'],
    faqs: [
      { q: 'Who is eligible for SMU Online MA Sociology?', a: 'Any graduate with a 10+2+3 bachelor\'s degree from a recognized university. Graduates from any academic stream are eligible. No minimum percentage restriction for Indian students.' },
      { q: 'What career opportunities does MA Sociology open?', a: 'MA Sociology graduates pursue careers in social work, NGOs, government welfare departments, HR, journalism, research, teaching, corporate CSR and civil services. It also qualifies for UGC-NET in Sociology.' },
      { q: 'Is this degree recognized for government and teaching jobs?', a: 'Yes. SMU Online MA Sociology is UGC-DEB approved, equivalent to a regular on-campus MA. It is valid for government employment, college teaching positions, and UGC-NET eligibility.' },
      { q: 'What is the total fee for SMU MA Sociology?', a: 'Total course fee is ₹72,000 (₹18,000/semester). No-cost EMI starts at ₹3,000/month. Scholarships up to 30% available for NE region students, defence personnel, differently-abled and SMU alumni.' },
      { q: 'Can I study MA Sociology while working?', a: 'Yes. The program is 100% online with flexible live and recorded classes, AI learning tools, and 24/7 student support. Study 15–20 hours per week from anywhere without leaving your job.' },
    ],
  },
};

const rankings = [
  { label: 'NAAC A+', sub: 'Accredited University' },
  { label: 'UGC Approved', sub: 'Online Degrees' },
  { label: 'Rank #1', sub: 'Top Private Univ. in NE India' },
  { label: 'NIRF 151–200', sub: "India's Top Universities 2025" },
  { label: 'QS Asia 330', sub: "South Asia's Top 2026" },
  { label: '30+ Years', sub: 'Quality Education Legacy' },
];

const commonBenefits = [
  { icon: '🎓', title: 'UGC-Approved Degree', desc: 'Same academic value as a regular on-campus MA — valid for teaching, government jobs, NET, higher education and more.' },
  { icon: '🤖', title: 'AI-Powered LMS', desc: 'SummarizeMe AI, QuizMe AI, AI Professor and Learning Path AI — intelligent tools for smarter, faster learning.' },
  { icon: '📱', title: '100% Online Flexibility', desc: 'Live + recorded classes, AI-proctored exams, 24×7 student support — study from anywhere without leaving your job.' },
  { icon: '💰', title: 'Most Affordable MA', desc: 'Just ₹18,000/semester — India\'s most affordable online MA program with no-cost EMI from ₹3,000/month.' },
  { icon: '🏛️', title: 'NAAC A+ Institution', desc: 'Degree from Sikkim Manipal University — 30+ years of academic excellence, NIRF ranked, with 6 Lakh+ alumni.' },
  { icon: '🌐', title: 'Career Support', desc: '150+ hiring partners, career mentoring, resume building, mock interviews and virtual job fairs.' },
];

const admissionSteps = [
  { num: '01', title: 'Fill Application', desc: 'Enter basic details, educational background and pay ₹500 application fee (non-refundable).' },
  { num: '02', title: 'Pay Semester Fee', desc: 'Pay ₹18,000 for Semester 1 or full ₹72,000. No-cost EMI from ₹3,000/month.' },
  { num: '03', title: 'Upload Documents', desc: 'Upload graduation marksheets, ID proof and other required documents online.' },
  { num: '04', title: 'University Approval', desc: 'SMU reviews your documents within 5 working days. LMS access within 48 hours of confirmation.' },
];

const scholarships = [
  { icon: '🪖', label: 'Defence Personnel', pct: '20%' },
  { icon: '🧡', label: 'Differently-Abled', pct: '20%' },
  { icon: '🎓', label: 'SMU Alumni', pct: '20%' },
  { icon: '🏔️', label: 'NE Region Students', pct: '30%' },
];

const aiTools = [
  { icon: '📄', name: 'SummarizeMe AI', desc: 'Summarizes video lectures & PDFs for quick revision.' },
  { icon: '❓', name: 'QuizMe AI', desc: 'Generates course-specific quizzes to test understanding.' },
  { icon: '🤖', name: 'AI Professor', desc: '24/7 conversational bot for course content queries.' },
  { icon: '🗺️', name: 'Learning Path AI', desc: 'Personalizes your study schedule for better outcomes.' },
];

const MAOnline: React.FC<MAOnlineProps> = ({ }) => {
  const [activeProgram, setActiveProgram] = useState<ProgramKey>('english');
  const [activeSem, setActiveSem] = useState<1 | 2 | 3 | 4>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
 const [openModal, setOpenModal] = useState<OpenModalState>(null);
  const prog = programs[activeProgram];

  const semSubjects: Record<number, string[]> = {
    1: prog.sem1, 2: prog.sem2, 3: prog.sem3, 4: prog.sem4,
  };

  const accentColorMap: Record<ProgramKey, string> = {
    english: '#7c3aed',
    polsci: '#e11d48',
    sociology: '#d97706',
  };
  const accentColor = accentColorMap[activeProgram];

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'SMU Online MA Programs — English, Political Science, Sociology',
          itemListElement: [
            { '@type': 'Course', position: 1, name: 'Online MA English — Sikkim Manipal University', description: 'UGC-approved Online MA in English. ₹72,000 total, NAAC A+ accredited.', provider: { '@type': 'EducationalOrganization', name: 'Sikkim Manipal University' }, offers: { '@type': 'Offer', price: '72000', priceCurrency: 'INR' } },
            { '@type': 'Course', position: 2, name: 'Online MA Political Science — Sikkim Manipal University', description: 'UGC-approved Online MA in Political Science. ₹72,000 total, NAAC A+ accredited.', provider: { '@type': 'EducationalOrganization', name: 'Sikkim Manipal University' }, offers: { '@type': 'Offer', price: '72000', priceCurrency: 'INR' } },
            { '@type': 'Course', position: 3, name: 'Online MA Sociology — Sikkim Manipal University', description: 'UGC-approved Online MA in Sociology. ₹72,000 total, NAAC A+ accredited.', provider: { '@type': 'EducationalOrganization', name: 'Sikkim Manipal University' }, offers: { '@type': 'Offer', price: '72000', priceCurrency: 'INR' } },
          ],
        }),
      }} />

     <header className="w-full fixed bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 top-0 left-0 z-50 mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Left Logo */}
              <div className="flex items-center gap-2 lg:gap-4">
                <img
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipallogo_yduega.jpg"
                  alt="SMU Logo"
                  className="h-8 w-auto sm:h-10 lg:h-12"
                />
                <h1 className="font-queens text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                  <span className="text-[#f26722]">Online</span>{" "}
                  <span className="text-gray-800">SMU</span>
                </h1>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-2 sm:gap-4">

                {/* Phone (Desktop) */}
                <a
                  href="tel:+917042646766"
                  className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm lg:text-base hover:text-[#f26722] transition-colors"
                >
                  <FaPhone className="text-orange-500 rotate-90" />
                  <span className="hidden lg:inline">+91 7042646766</span>
                  <span className="lg:hidden">Call Now</span>
                </a>

                {/* Phone (Mobile) */}
                <a
                  href="tel:+917042646766"
                  className="sm:hidden flex items-center justify-center w-10 h-10 bg-[#f26722]/10 rounded-full text-[#f26722] hover:bg-[#f26722]/20 transition-colors cursor-pointer"
                >
                  📞
                </a>

                {/* Apply Button */}
                <button
                  onClick={() => setOpenModal({ type: "apply" })}
                  className="bg-[#f26722] hover:bg-orange-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer"
                >
                  <span className="hidden sm:inline">Apply Now</span>

                  <span className="sm:hidden">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      <section className="relative min-h-[680px] mt-12 flex items-center overflow-hidden bg-[#080c1a]">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff22 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className={`absolute inset-0 bg-gradient-to-br ${prog.color} opacity-20 transition-all duration-700`} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 transition-all duration-700"
          style={{ background: accentColor }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="space-y-6 text-white">
              <nav className="flex items-center gap-2 text-xs text-white/50">
                <a href="/smu" className="hover:text-white/80 transition">SMU Online</a>
                <span>/</span>
                <span style={{ color: accentColor }} className="font-semibold">Online MA Programs</span>
              </nav>

              {/* Program Selector Tabs */}
              <div className="flex flex-wrap gap-2">
                {(Object.keys(programs) as ProgramKey[]).map((key) => (
                  <button key={key} onClick={() => { setActiveProgram(key); setActiveSem(1); setOpenFaq(null); }}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 border ${activeProgram === key
                      ? `bg-gradient-to-r ${programs[key].color} text-white border-transparent shadow-lg scale-105`
                      : 'bg-white/8 border-white/20 text-white/70 hover:bg-white/15'}`}>
                    {programs[key].icon} {programs[key].name}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div key={activeProgram} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {['NAAC A+ Accredited', 'UGC Approved', `${prog.seats} Seats Filled`, 'Admissions Open'].map((b) => (
                      <span key={b} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold" style={{ color: accentColor }}>{b}</span>
                    ))}
                  </div>

                  <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                    Online{' '}
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${prog.color}`}>
                      {prog.name}
                    </span>
                    <br />
                    <span className="text-2xl font-semibold text-white/70">{prog.fullName}</span>
                  </h1>

                  <p className="text-base text-white/70 max-w-lg leading-relaxed">{prog.tagline} —{' '}
                    <strong className="text-white">Sikkim Manipal University (SMU)</strong>, NAAC A+ accredited. 100% online, UGC-approved, AI-powered learning.
                  </p>

                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { v: '24', l: 'Months' },
                      { v: prog.semFee, l: 'Per Sem' },
                      { v: prog.credits, l: 'Credits' },
                      { v: prog.emi, l: 'EMI/Month' },
                    ].map((s) => (
                      <div key={s.l} className="bg-white/8 border border-white/15 rounded-xl p-3 text-center">
                        <div className="text-base font-bold" style={{ color: accentColor }}>{s.v}</div>
                        <div className="text-xs text-white/50 mt-0.5">{s.l}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setOpenModal({ type: 'apply', program: prog.fullName })}
                      className={`bg-gradient-to-r ${prog.color} text-white font-bold px-7 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                      Apply Now — Jan 2026 Batch
                    </button>
                    <button onClick={() => setOpenModal({ type: 'enquire', program: prog.fullName })}
                      className="border border-white/40 text-white px-7 py-3 rounded-xl hover:bg-white/10 transition">
                      Download Brochure
                    </button>
                  </div>
                  <p className="text-xs text-white/40">💳 No-cost EMI {prog.emi}/month · Scholarships up to 30% · Last date: 17th Feb 2026</p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* RIGHT — Info Card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <AnimatePresence mode="wait">
                <motion.div key={activeProgram} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.3 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 text-white space-y-3">
                  <div className="flex items-center gap-3 pb-3 border-b border-white/15">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prog.color} flex items-center justify-center text-2xl shadow-lg`}>{prog.icon}</div>
                    <div>
                      <p className="font-bold text-lg leading-tight">Sikkim Manipal University</p>
                      <p className="text-xs text-white/50">NAAC A+ · NIRF Ranked · UGC-DEB</p>
                    </div>
                  </div>
                  {[
                    { label: 'Program', value: prog.fullName },
                    { label: 'Duration', value: '24 Months · 4 Semesters' },
                    { label: 'Mode', value: '100% Online — Live + Recorded' },
                    { label: 'Total Fee', value: `${prog.fee} (${prog.semFee}/semester)` },
                    { label: 'EMI', value: `Starting ${prog.emi}/month (no-cost)` },
                    { label: 'Eligibility', value: "Any Bachelor's Degree Graduate" },
                    { label: 'Credits', value: `${prog.credits} Credits · 15–20 hrs/week` },
                    { label: 'Exam Mode', value: 'AI-Proctored Online Exams' },
                    { label: 'Last Date', value: '17th February 2026' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-sm border-b border-white/10 pb-2 last:border-0">
                      <span className="text-white/55">{label}</span>
                      <span className="text-white font-semibold text-right max-w-[55%] leading-tight">{value}</span>
                    </div>
                  ))}
                  <button onClick={() => setOpenModal({ type: 'apply', program: prog.fullName })}
                    className={`w-full bg-gradient-to-r ${prog.color} text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02] mt-2`}>
                    Apply Now — Free Registration
                  </button>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

   
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            {(Object.keys(programs) as ProgramKey[]).map((key) => (
              <button key={key} onClick={() => { setActiveProgram(key); setActiveSem(1); setOpenFaq(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeProgram === key ? `bg-gradient-to-r ${programs[key].color} text-white shadow` : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                {programs[key].icon} {programs[key].name}
              </button>
            ))}
          </div>
          <button onClick={() => setOpenModal({ type: 'apply', program: prog.fullName })}
            className={`bg-gradient-to-r ${prog.color} text-white font-bold px-5 py-2 rounded-lg text-xs hover:shadow-md transition`}>
            Apply Now →
          </button>
        </div>
      </div>

      
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={activeProgram} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {prog.fullName} from SMU — Program Overview
              </h2>
              <div className="w-20 h-1 rounded-full mb-7" style={{ background: accentColor }} />
              <p className="text-gray-700 text-lg leading-relaxed mb-5">{prog.desc}</p>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                Delivered through an <strong>AI-enabled Learning Management System</strong>, the program provides live and recorded classes by expert faculty, discussion forums, AI-proctored online examinations, and 24×7 student support — all from the comfort of your home. Study 15–20 hours per week without quitting your job or relocating.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                At just <strong>{prog.semFee} per semester</strong>, this is India's most affordable online MA from a NAAC A+ accredited university. Exclusive scholarships up to 30% are available for NE region students, defence personnel, differently-abled candidates, and SMU alumni. The degree is fully recognized by <strong>UGC-DEB</strong> and is valid for government jobs, NET/SET qualification, and higher education across India.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Graduates earn a prestigious <strong>SMU degree certificate</strong> identical to an on-campus postgraduate degree and join the esteemed <strong>6 Lakh+ SMU alumni network</strong> spanning education, government, media, research and development sectors worldwide.
              </p>
              <button onClick={() => setOpenModal({ type: 'apply', program: prog.fullName })}
                className={`mt-8 bg-gradient-to-r ${prog.color} text-white font-bold px-8 py-3 rounded-xl transition-all hover:scale-105 shadow-md`}>
                Apply Now — Jan 2026 Intake Open
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

     
      <section className="bg-[#080c1a] py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">Rankings & Accreditations — Sikkim Manipal University</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {rankings.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white/6 border border-white/12 rounded-2xl p-5 text-center hover:border-white/25 transition">
                <div className="text-xl font-extrabold" style={{ color: accentColor }}>{r.label}</div>
                <div className="text-xs text-gray-400 mt-2 leading-snug">{r.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


  
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose SMU Online MA?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Common advantages across all 3 MA programs — English, Political Science & Sociology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonBenefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {prog.name} — Semester-Wise Syllabus
            </h2>
            <p className="text-gray-600">{prog.credits} credits · 24 months · 4 semesters · 15–20 hrs/week</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {([1, 2, 3, 4] as const).map((sem) => (
              <button key={sem} onClick={() => setActiveSem(sem)}
                className={`px-6 py-2 rounded-xl font-semibold text-sm transition ${activeSem === sem ? 'text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                style={activeSem === sem ? { background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` } : {}}>
                Semester {sem}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={`${activeProgram}-sem${activeSem}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="bg-white border border-gray-100 rounded-2xl shadow-md p-7">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Semester {activeSem} — Subjects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {semSubjects[activeSem].map((sub, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5"
                      style={{ background: accentColor }}>{i + 1}</span>
                    <span className="text-sm text-gray-700 leading-snug">{sub}</span>
                  </div>
                ))}
              </div>
              {activeSem === 4 && (
                <div className="mt-4 p-4 rounded-xl border" style={{ background: `${accentColor}10`, borderColor: `${accentColor}30` }}>
                  <p className="text-sm font-semibold" style={{ color: accentColor }}>⭐ Semester 4 includes a Dissertation / Project Work — evaluated by SMU faculty on a real-world research topic of your choice.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="text-center mt-7">
            <button onClick={() => setOpenModal({ type: 'enquire', program: prog.fullName })}
              className="border-2 font-semibold px-8 py-3 rounded-xl transition"
              style={{ borderColor: accentColor, color: accentColor }}
              onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = accentColor; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; }}
              onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = accentColor; }}>
              Download Full Syllabus PDF
            </button>
          </div>
        </div>
      </section>

     
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            SMU Online MA — Fee Structure 2025–26
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Fee Table */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Course Fee Breakdown</h3>
              <div className="space-y-4">
                {[
                  { label: 'Total Program Fee', value: prog.fee, hi: true },
                  { label: 'Per Semester Fee', value: prog.semFee, hi: false },
                  { label: 'No-Cost EMI', value: `${prog.emi} / month`, hi: false },
                  { label: 'Application Fee', value: '₹500 (non-refundable)', hi: false },
                  { label: 'Duration', value: '24 months (4 Semesters)', hi: false },
                  { label: 'Credits', value: `${prog.credits} Credits`, hi: false },
                ].map(({ label, value, hi }) => (
                  <div key={label} className={`flex justify-between items-center py-3 border-b border-gray-100 last:border-0`}>
                    <span className="text-gray-600">{label}</span>
                    <span className={`font-bold ${hi ? 'text-2xl' : 'text-gray-800'}`} style={hi ? { color: accentColor } : {}}>{value}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => setOpenModal({ type: 'apply', program: prog.fullName })}
                className={`w-full mt-7 bg-gradient-to-r ${prog.color} text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02]`}>
                Apply Now — Secure Your Seat
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">Fee inclusive of all taxes · No hidden charges</p>
            </div>

            {/* Scholarships */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Scholarships & Easy Payment</h3>
              <p className="text-gray-500 text-sm mb-6">Exclusive Manipal scholarship scheme for eligible students</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {scholarships.map((s, i) => (
                  <div key={i} className="rounded-2xl p-4 border text-center" style={{ background: `${accentColor}08`, borderColor: `${accentColor}25` }}>
                    <div className="text-2xl mb-2">{s.icon}</div>
                    <div className="font-bold text-lg" style={{ color: accentColor }}>{s.pct}</div>
                    <div className="text-xs text-gray-600 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl p-4 border" style={{ background: `${accentColor}08`, borderColor: `${accentColor}25` }}>
                <p className="font-semibold text-sm mb-1" style={{ color: accentColor }}>💳 No-Cost EMI — Just ₹100/Day</p>
                <p className="text-gray-500 text-xs leading-relaxed">India's most affordable online MA. Zero-interest EMI from {prog.emi}/month paid annually. Full fee just {prog.fee} for a UGC-approved postgraduate degree.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="bg-[#080c1a] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Career Scope After {prog.name}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{prog.fullName} graduates find rewarding careers across government, education, research, NGOs, media and corporate sectors.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-base font-bold uppercase tracking-wider mb-5" style={{ color: accentColor }}>Top Job Roles</h3>
              <div className="flex flex-wrap gap-3">
                {prog.careerRoles.map((role, i) => (
                  <span key={i} className="bg-white/8 border border-white/15 text-gray-300 px-4 py-2 rounded-full text-sm hover:border-white/30 transition">{role}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold uppercase tracking-wider mb-5" style={{ color: accentColor }}>Key Industries</h3>
              <div className="grid grid-cols-2 gap-3">
                {prog.industries.map((ind, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm font-medium text-gray-300 text-center hover:border-white/20 transition">{ind}</div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3 mt-5">
                {[{ v: '6L+', l: 'SMU Alumni' }, { v: 'UGC', l: 'NET Eligible' }, { v: '150+', l: 'Hiring Partners' }].map((s) => (
                  <div key={s.l} className="rounded-xl p-4 text-center border" style={{ background: `${accentColor}15`, borderColor: `${accentColor}30` }}>
                    <div className="text-xl font-extrabold" style={{ color: accentColor }}>{s.v}</div>
                    <div className="text-xs text-gray-400 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Advanced AI Learning System</h2>
            <p className="text-gray-600">4 intelligent tools designed to elevate your online learning experience</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTools.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6 border hover:shadow-lg transition" style={{ background: `${accentColor}06`, borderColor: `${accentColor}20` }}>
                <div className="text-3xl mb-4">{t.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{t.name}</h3>
                <p className="text-gray-600 text-sm">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Eligibility & Admission Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple 4-step online process — no entrance exam, open to all graduates</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Eligibility Criteria</h3>
              {[
                { icon: '🎓', title: 'Any Graduate — All Streams Eligible', desc: '10+2+3-year bachelor\'s degree from any recognized university. Arts, Commerce, Science, BBA, BCA, B.Tech — all streams welcome.' },
                { icon: '📊', title: 'No Minimum Percentage Required', desc: 'SMU Online MA programs have no mandatory minimum marks. Focus on your learning journey, not just past scores.' },
                { icon: '💼', title: 'No Entrance Exam', desc: 'Direct admission based on graduation qualification. No written test, no group discussion, no interview required.' },
                { icon: '🌍', title: 'NRI / Foreign Students Eligible', desc: 'Non-Indian applicants welcome with AIU equivalence certificate. Separate international fee structure applies.' },
              ].map((e, i) => (
                <div key={i} className="flex gap-4 items-start mb-5 last:mb-0">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: `${accentColor}15` }}>{e.icon}</div>
                  <div>
                    <p className="font-semibold text-gray-800">{e.title}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              {admissionSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-extrabold shadow-lg flex-shrink-0 text-lg"
                    style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}bb)` }}>{step.num}</div>
                  <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
              <button onClick={() => setOpenModal({ type: 'apply', program: prog.fullName })}
                className={`w-full bg-gradient-to-r ${prog.color} text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02]`}>
                Start Application — Free Registration
              </button>
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-white py-14 px-4 border-y border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Sikkim Manipal University — By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ v: '30+', l: 'Years of Education Excellence' }, { v: '6L+', l: 'Alumni Worldwide' }, { v: '530+', l: 'Expert Faculty & Staff' }, { v: '2,500+', l: 'Towns & Cities Reached' }].map((s, i) => (
              <div key={i}>
                <div className="text-4xl lg:text-5xl font-extrabold" style={{ color: accentColor }}>{s.v}</div>
                <p className="text-gray-500 text-sm mt-2">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions — {prog.name}</h2>
            <p className="text-gray-600">Everything you need to know before applying</p>
          </div>
          <div className="space-y-4">
            {prog.faqs.map((faq, i) => (
              <div key={`${activeProgram}-${i}`} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-7 py-5 flex justify-between items-center font-semibold text-gray-800 text-base hover:bg-gray-50 transition">
                  <span className="pr-6">{faq.q}</span>
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 text-white transition-all"
                    style={{ background: openFaq === i ? accentColor : '#e5e7eb', color: openFaq === i ? '#fff' : '#6b7280' }}>
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                      className="overflow-hidden">
                      <div className="px-7 pb-6 text-gray-700 text-base leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Compare All 3 SMU Online MA Programs</h2>
            <p className="text-gray-600">Choose the program that aligns with your passion and career goals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(Object.entries(programs) as [ProgramKey, typeof programs.english][]).map(([key, p]) => (
              <motion.div key={key} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className={`rounded-3xl border-2 p-7 transition-all cursor-pointer ${activeProgram === key ? 'shadow-xl scale-[1.02]' : 'shadow-sm hover:shadow-md'}`}
                style={{ borderColor: activeProgram === key ? accentColorMap[key] : '#e5e7eb', background: activeProgram === key ? `${accentColorMap[key]}06` : '#fff' }}
                onClick={() => { setActiveProgram(key); setActiveSem(1); setOpenFaq(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{p.fullName}</h3>
                <p className="text-sm text-gray-500 mb-4 font-medium italic">{p.tagline}</p>
                <div className="space-y-2 mb-5">
                  {[{ l: 'Total Fee', v: p.fee }, { l: 'Per Semester', v: p.semFee }, { l: 'Duration', v: '24 Months' }, { l: 'Credits', v: p.credits }].map(({ l, v }) => (
                    <div key={l} className="flex justify-between text-sm">
                      <span className="text-gray-500">{l}</span>
                      <span className="font-semibold text-gray-800">{v}</span>
                    </div>
                  ))}
                </div>
                <button onClick={(e) => { e.stopPropagation(); setOpenModal({ type: 'apply', program: p.fullName }); }}
                  className={`w-full bg-gradient-to-r ${p.color} text-white font-bold py-2.5 rounded-xl text-sm hover:shadow-md transition`}>
                  Apply for {p.name} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section className={`bg-gradient-to-r ${prog.color} py-16 px-4`}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Start Your {prog.name} Journey Today</h2>
          <p className="text-white/85 text-lg mb-3 max-w-2xl mx-auto">
            January 2026 batch — {prog.seats} seats already filled. India's most affordable online MA at {prog.fee} total. UGC-approved degree from NAAC A+ Sikkim Manipal University.
          </p>
          <p className="text-white/70 text-sm mb-8">Admission last date: <strong className="text-white">17th February 2026</strong></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button onClick={() => setOpenModal({ type: 'apply', program: prog.fullName })}
              className="bg-white font-bold px-10 py-4 rounded-full hover:bg-gray-50 transition shadow-xl hover:scale-105" style={{ color: accentColor }}>
              Apply Now — Free Registration
            </button>
            <button onClick={() => setOpenModal({ type: 'enquire', program: prog.fullName })}
              className="border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white/15 transition hover:scale-105">
              Download Brochure
            </button>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaPhone className="rotate-90 text-white/70" />
            <span className="text-white/80">Talk to an advisor:</span>
            <a href="tel:+917042646766" className="text-white font-bold hover:underline">+91 7042646766</a>
          </div>
        </div>
      </section>
    
     {/* Premium Footer */}
              <Footer />
       {openModal && (
  <ApplyEnquiryModal
    open={true}
    onOpenChange={(v) => {
      if (!v) setOpenModal(null);
    }}
    title={
      openModal.type === 'apply'
        ? 'Start Your Application'
        : 'Enquire Now'
    }
    subtitle={
      openModal.type === 'apply'
        ? 'Fill the quick form to begin your admission process'
        : 'Share your details and our counselor will reach out'
    }
    imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp"
    universityName="Sikkim Manipal University"
    defaultProgram={openModal.program ?? 'MBA'}
    formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
    showImage
  />
)}
</>
  );
};

export default MAOnline;