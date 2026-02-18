'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';
import { optimizeCloudinary } from '@/utils/cloudinary';
import Footer from '@/components/Footer';

import ApplyEnquiryModal from '@/components/ApplyEnquiryModal'
type OpenModalState = {
  type: 'apply' | 'enquire';
  program?: string;
} | null;

type MBAPageProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};



const specializations = [
  { icon: '📈', title: 'Marketing', desc: 'Consumer behaviour, brand management, digital marketing & retail strategy.' },
  { icon: '💰', title: 'Finance', desc: 'Security analysis, portfolio management, taxation & multinational finance.' },
  { icon: '👥', title: 'Human Resources', desc: 'Talent management, performance mapping, org. development & IR.' },
  { icon: '💻', title: 'Systems', desc: 'DBMS, OOP, e-commerce, technology management & strategy.' },
  { icon: '🔗', title: 'Operations & SCM', desc: 'Logistics, supply chain management, quality & materials management.' },
  { icon: '🏥', title: 'Healthcare', desc: 'Hospital core services, health communication & legal aspects in healthcare.' },
];

const semester1 = [
  'Principles of Management and Organizational Behavior',
  'Marketing Management',
  'Accounting for Managers',
  'Business Economics',
  'Business Communication',
  'Legal Aspects of Business',
  'Computer Application in Management',
];

const semester2 = [
  'Quantitative Methods in Management',
  'Human Resource Management',
  'Financial Management',
  'Productions and Operations Management',
  'Research Methodology and Statistical Techniques',
  'Global Economic Environment and Policy',
  'Management Information Systems',
];

const semester3Core = ['Project Management', 'Business Strategy'];
const semester4Core = ['Banking and Insurance Management', 'Project Work'];

const benefits = [
  { icon: '🎓', title: 'UGC-Entitled Degree', desc: 'Same value as an on-campus MBA — accepted by employers and higher education institutions across India and globally.' },
  { icon: '🤝', title: 'Dual Specialization', desc: 'Choose any two from 6 domains — Finance, Marketing, HR, Systems, Operations & SCM, Healthcare.' },
  { icon: '💼', title: 'Career Studio Support', desc: 'Resume building, LinkedIn optimization, mock interviews and virtual job fairs with 150+ hiring partners.' },
  { icon: '🤖', title: 'AI-Powered Learning', desc: 'SummarizeMe AI, QuizMe AI, AI Professor & Learning Path AI — 24/7 intelligent support on LMS.' },
  { icon: '📅', title: 'Flexible Schedule', desc: 'Live + recorded classes. Study 15–20 hrs/week at your own pace. No campus visits required.' },
  { icon: '🌍', title: '6 Lakh+ Alumni Network', desc: 'Join a powerful professional community working across India, Middle East, Southeast Asia & Europe.' },
];

const admissionSteps = [
  { num: '01', title: 'Fill Application', desc: 'Enter basic, education & work experience details. Pay the application fee to register on the portal.' },
  { num: '02', title: 'Pay Semester Fee', desc: 'Pay the first semester fee of ₹27,500 or opt for full course payment of ₹1,10,000 with EMI from ₹4,583/month.' },
  { num: '03', title: 'Upload Documents', desc: 'Upload graduation marksheets, ID proof, and other required documents through the online portal.' },
  { num: '04', title: 'University Approval', desc: 'SMU evaluates your documents and confirms admission. LMS access granted within 48 hours.' },
];

const rankings = [
  { label: 'NAAC A+', sub: 'Accredited University' },
  { label: 'UGC Approved', sub: 'Online Degrees' },
  { label: 'Rank #1', sub: 'Top Private Univ. in NE India' },
  { label: 'Rank 151–200', sub: "India's Top Universities 2025" },
  { label: 'Rank 330', sub: "South Asia's Top Universities 2026" },
  { label: 'AICTE', sub: 'Norms Compliant' },
];

const careerRoles = [
  'Marketing Manager', 'Brand Manager', 'Financial Analyst', 'Investment Banker',
  'HR Business Partner', 'Talent Acquisition Lead', 'IT Consultant', 'Supply Chain Manager',
  'Operations Director', 'Healthcare Administrator', 'Business Development Manager', 'Portfolio Manager',
];

const industries = ['BFSI', 'Information Technology', 'FMCG', 'Advertising', 'FinTech', 'Healthcare', 'Supply Chain', 'Retail'];

const faqs = [
  { q: 'What is the eligibility for SMU Online MBA?', a: 'Any graduate with minimum 50% marks (45% for reserved category) from a UGC-recognized university in any stream can apply. There is no entrance exam requirement.' },
  { q: 'Is the SMU Online MBA degree valid for government jobs?', a: 'Yes. SMU Online MBA is UGC-DEB approved and holds the same validity as a regular MBA degree for government jobs, promotions, and competitive exams across India.' },
  { q: 'What is dual specialization in SMU MBA?', a: 'Dual specialization lets you choose two domains (e.g., Finance + Marketing). Specializations are selected in Semester 3 and continue in Semester 4, so you graduate with expertise in both areas.' },
  { q: 'What is the total fee and EMI option?', a: 'Total fee is ₹1,10,000 (₹27,500 per semester). No-cost EMI starts at just ₹4,583/month. Scholarships up to 30% are available for NE students, defence personnel, differently-abled, and SMU alumni.' },
  { q: 'How are exams conducted for SMU Online MBA?', a: 'Exams are AI-proctored and conducted online from home. Students need a laptop/desktop with Windows OS and Google Chrome. Results are published on the student portal.' },
  { q: 'How many hours of study per week are required?', a: 'Approximately 15–20 hours per week. You need to complete at least 75% of self-learning content (videos + reading material) to be eligible for the term-end exam.' },
  { q: 'Does SMU provide placement assistance for MBA students?', a: 'Yes. SMU offers career counseling, resume building, LinkedIn optimization, mock interviews, virtual job fairs and access to 150+ corporate hiring partners including EY, Accenture, HP, LTIMindtree, and more.' },
  { q: 'What is the duration of the Online MBA program?', a: 'The program is 2 years (4 semesters). However, students can extend up to a maximum of 4 years to complete the degree at their own pace.' },
  { q: 'Can working professionals pursue this MBA?', a: 'Absolutely. The program is designed for working professionals — 100% online, flexible live + recorded classes, and AI-powered LMS ensure zero disruption to your career.' },
  { q: 'What AI tools are available on the SMU learning platform?', a: 'SMU\'s LMS features SummarizeMe AI (summarizes PDFs/videos), QuizMe AI (generates practice quizzes), AI Professor (answers course queries), and Learning Path AI (helps plan your study schedule).' },
];

const scholarships = [
  { icon: '🪖', title: 'Defence Personnel', pct: '20%', desc: 'Active and retired defence personnel and their families.' },
  { icon: '🧡', title: 'Differently-Abled', pct: '20%', desc: 'Students with differently-abled status as per government norms.' },
  { icon: '🎓', title: 'SMU Alumni', pct: '20%', desc: 'Previous SMU graduates enrolling for another program.' },
  { icon: '🏔️', title: 'NE Region Students', pct: '30%', desc: 'Students from Sikkim and other North-East states of India.' },
];


const MBAPage: React.FC<MBAPageProps> = ({  }) => {
  const [activeSem, setActiveSem] = useState<1 | 2 | 3 | 4>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSpec, setActiveSpec] = useState<string>('Marketing');
  const [openModal, setOpenModal] = useState<OpenModalState>(null);
  const semSubjects: Record<number, string[]> = {
    1: semester1,
    2: semester2,
    3: [...semester3Core, '+ Elective Subjects from Specialization I', '+ Elective Subjects from Specialization II'],
    4: [...semester4Core, '+ Elective Subjects from Specialization I', '+ Elective Subjects from Specialization II'],
  };

  return (
    <>
      {/* ── JSON-LD SCHEMA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Online MBA with Dual Specialization — Sikkim Manipal University',
            description:
              'UGC-approved Online MBA from Sikkim Manipal University (SMU) with dual specialization. 24 months, ₹1,10,000 total fee, NAAC A+ accredited.',
            provider: {
              '@type': 'EducationalOrganization',
              name: 'Sikkim Manipal University Online',
              sameAs: 'https://unifostedu.com/smu',
              telephone: '+91-7042646766',
            },
            offers: {
              '@type': 'Offer',
              price: '110000',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
            },
            courseMode: 'online',
            timeToComplete: 'P24M',
            educationalCredentialAwarded: 'Master of Business Administration (MBA)',
          }),
        }}
      />
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
                  href="tel:+917042867717"
                  className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm lg:text-base hover:text-[#f26722] transition-colors"
                >
                  <FaPhone className="text-orange-500 rotate-90" />
                  <span className="hidden lg:inline">+91 7042646766</span>
                  <span className="lg:hidden">Call Now</span>
                </a>

                {/* Phone (Mobile) */}
                <a
                  href="tel:+917042867717"
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
      
      <section
        id="mba-hero"
        className="relative min-h-[600px] mt-12 flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05082a]/92 via-[#05082a]/80 to-[#05082a]/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-5 text-white"
            >
              {/* breadcrumb */}
              <nav className="flex items-center gap-2 text-xs text-white/60">
                <a href="/smu" className="hover:text-orange-400 transition">SMU Online</a>
                <span>/</span>
                <span className="text-orange-300 font-semibold">MBA Program</span>
              </nav>

              {/* badges */}
              <div className="flex flex-wrap gap-2">
                {['NAAC A+ Accredited', 'UGC Approved', 'Dual Specialization', '84% Seats Filled'].map((b) => (
                  <span key={b} className="bg-white/10 border border-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-orange-200">
                    {b}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                Online MBA with<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                  Dual Specialization
                </span>
              </h1>
              <p className="text-base text-white/75 max-w-lg">
                Master of Business Administration from <strong className="text-white">Sikkim Manipal University</strong> — NAAC A+ institution.
                Choose any two from 6 specializations, study 100% online, and graduate with a UGC-entitled degree equivalent to a regular MBA.
              </p>

              {/* quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: '24', l: 'Months' },
                  { v: '₹27.5K', l: 'Per Semester' },
                  { v: '6 Spec.', l: 'Choices' },
                  { v: '150+', l: 'Hiring Partners' },
                ].map((s) => (
                  <div key={s.l} className="bg-white/8 border border-white/15 rounded-xl p-3 text-center backdrop-blur">
                    <div className="text-xl font-bold text-orange-300">{s.v}</div>
                    <div className="text-xs text-white/60 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  onClick={() => setOpenModal({ type: 'apply', program: 'Online MBA' })}
                  className="bg-gradient-to-r from-orange-500 to-[#f26722] hover:from-[#f26722] hover:to-orange-600 text-white font-bold px-7 py-3 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now — Jan 2026 Batch
                </button>
                <button
                  onClick={() => setOpenModal({ type: 'enquire', program: 'Online MBA' })}
                  className="border border-white/40 text-white px-7 py-3 rounded-xl hover:bg-white/10 transition backdrop-blur"
                >
                  Download Brochure
                </button>
              </div>

              {/* EMI note */}
              <p className="text-xs text-white/50">
                💳 No-cost EMI from <strong className="text-white/70">₹4,583/month</strong> &nbsp;|&nbsp; Scholarships up to 30% available
              </p>
            </motion.div>

            {/* RIGHT — quick info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 text-white space-y-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={optimizeCloudinary('https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipallogo_yduega.jpg')}
                  alt="Sikkim Manipal University Logo"
                  width={52} height={52}
                  className="rounded-xl object-cover"
                />
                <div>
                  <p className="font-bold text-lg leading-tight">Sikkim Manipal University</p>
                  <p className="text-xs text-orange-300">NAAC A+ · NIRF Ranked · UGC Approved</p>
                </div>
              </div>

              {[
                { label: 'Program', value: 'Online MBA (Dual Specialization)' },
                { label: 'Duration', value: '24 Months (4 Semesters)' },
                { label: 'Mode', value: '100% Online — Live + Recorded' },
                { label: 'Total Fee', value: '₹1,10,000 (₹27,500/semester)' },
                { label: 'EMI', value: 'Starting ₹4,583/month (no-cost)' },
                { label: 'Eligibility', value: 'Graduation with min. 50% marks' },
                { label: 'Exam Mode', value: 'AI-Proctored Online Exams' },
                { label: 'Credits', value: '102 Credits · Study 15–20 hrs/week' },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-sm border-b border-white/10 pb-2 last:border-0 last:pb-0">
                  <span className="text-white/60">{label}</span>
                  <span className="text-white font-semibold text-right max-w-[55%]">{value}</span>
                </div>
              ))}

              <button
                onClick={() => setOpenModal({ type: 'apply', program: 'Online MBA' })}
                className="w-full bg-gradient-to-r from-orange-500 to-[#f26722] text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Apply Now — Free Registration
              </button>
            </motion.div>
          </div>
        </div>
      </section>

     
  
      <section id="about-mba" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Online MBA from Sikkim Manipal University — Program Overview
          </h2>
          <div className="w-20 h-1 bg-[#f26722] rounded-full mb-7" />
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              The <strong>Online MBA with Dual Specialization from Sikkim Manipal University (SMU)</strong> is a two-year postgraduate program offered by one of India's most trusted NAAC A+ accredited universities. Designed for working professionals and fresh graduates alike, this program combines rigorous business management education with the flexibility of 100% online learning.
            </p>
            <p>
              Students can choose any <strong>two specializations</strong> from six domains — Marketing, Finance, Human Resources, Systems, Operations & Supply Chain Management, and Healthcare — gaining expertise in complementary areas and significantly broadening their career scope.
            </p>
            <p>
              The program is delivered through SMU's <strong>AI-enabled Learning Management System (LMS)</strong> featuring live and recorded classes, AI-proctored online exams, e-libraries, discussion forums, and intelligent tools like SummarizeMe AI, QuizMe AI, and an AI Professor for personalized learning support.
            </p>
            <p>
              Recognized by the <strong>UGC-Distance Education Bureau (UGC-DEB)</strong>, this online MBA degree carries the same academic value and employer recognition as a regular on-campus MBA. Graduates receive a university degree certificate without any mention of the "Online" or "Distance" mode of study.
            </p>
          </div>
          <button
            onClick={() => setOpenModal({ type: 'apply', program: 'Online MBA' })}
            className="mt-8 bg-gradient-to-r from-orange-500 to-[#f26722] hover:from-[#f26722] hover:to-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
          >
            Apply Now — Jan 2026 Intake Open
          </button>
        </div>
      </section>

     
      <section className="bg-gradient-to-br from-slate-900 to-[#0B0B10] py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Rankings & Accreditations — Sikkim Manipal University
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {rankings.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white/8 border border-white/15 rounded-2xl p-5 text-center backdrop-blur hover:border-orange-500/40 transition"
              >
                <div className="text-2xl font-extrabold text-orange-400 leading-tight">{r.label}</div>
                <div className="text-xs text-gray-400 mt-2 leading-snug">{r.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="mba-specializations" className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              6 Dual Specializations — Choose Your Path
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Select any <strong>two specializations</strong> in Semester 3 to graduate with expertise in two business domains. Specialization choices are locked at the start of Semester 3 and continue through Semester 4.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {specializations.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-100 rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-2xl mb-5">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                <button
                  onClick={() => setOpenModal({ type: 'apply', program: `Online MBA — ${s.title}` })}
                  className="mt-5 text-orange-600 text-sm font-semibold hover:text-orange-700 transition"
                >
                  Apply for MBA {s.title} →
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-orange-50 border border-orange-100 rounded-2xl p-5 text-center max-w-2xl mx-auto">
            <p className="text-gray-700 text-sm">
              <strong>Note:</strong> You can combine any two specializations — e.g., <em>Finance + Marketing</em>, <em>HR + Systems</em>, <em>Operations + Healthcare</em>. Learners select their dual specialization at the start of Semester 3.
            </p>
          </div>
        </div>
      </section>

    
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose SMU Online MBA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition border border-gray-100"
              >
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="mba-syllabus" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SMU Online MBA Syllabus — Semester-Wise Curriculum
            </h2>
            <p className="text-gray-600">
              102 credits · 24 months · 4 semesters · 15–20 hours study per week
            </p>
          </div>

          {/* Semester tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {([1, 2, 3, 4] as const).map((sem) => (
              <button
                key={sem}
                onClick={() => setActiveSem(sem)}
                className={`px-6 py-2 rounded-xl font-semibold text-sm transition ${
                  activeSem === sem
                    ? 'bg-[#f26722] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Semester {sem}
              </button>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-7">
            <h3 className="text-xl font-bold text-gray-800 mb-5">
              Semester {activeSem} — Subjects
              {(activeSem === 3 || activeSem === 4) && (
                <span className="ml-3 text-sm font-normal text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                  Core + Dual Specialization Electives
                </span>
              )}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {semSubjects[activeSem].map((sub, i) => (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${sub.startsWith('+') ? 'bg-orange-50 border border-orange-100' : 'bg-gray-50'}`}>
                  <span className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${sub.startsWith('+') ? 'bg-orange-200 text-orange-700' : 'bg-[#f26722] text-white'}`}>
                    {sub.startsWith('+') ? '★' : i + 1}
                  </span>
                  <span className={`text-sm ${sub.startsWith('+') ? 'text-orange-700 font-semibold' : 'text-gray-700'}`}>{sub}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-7">
            <button
              onClick={() => setOpenModal({ type: 'enquire', program: 'Online MBA' })}
              className="border-2 border-[#f26722] text-[#f26722] font-semibold px-8 py-3 rounded-xl hover:bg-[#f26722] hover:text-white transition"
            >
              Download Full Syllabus PDF
            </button>
          </div>
        </div>
      </section>

     
      <section id="mba-fees" className="bg-gradient-to-br from-gray-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            SMU Online MBA — Fee Structure 2025–26
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Fee card */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Course Fee Breakdown</h3>
              <div className="space-y-4">
                {[
                  { label: 'Total Program Fee', value: '₹1,10,000', highlight: true },
                  { label: 'Per Semester Fee', value: '₹27,500', highlight: false },
                  { label: 'EMI (No-Cost)', value: '₹4,583 / month', highlight: false },
                  { label: 'Duration', value: '24 months (4 Semesters)', highlight: false },
                  { label: 'Program Credits', value: '102 Credits', highlight: false },
                ].map(({ label, value, highlight }) => (
                  <div key={label} className={`flex justify-between items-center py-3 border-b border-gray-100 last:border-0 ${highlight ? 'text-[#f26722] font-bold text-lg' : ''}`}>
                    <span className="text-gray-600">{label}</span>
                    <span className={highlight ? 'text-[#f26722] font-extrabold text-2xl' : 'font-semibold text-gray-800'}>{value}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setOpenModal({ type: 'apply', program: 'Online MBA' })}
                className="w-full mt-7 bg-gradient-to-r from-orange-500 to-[#f26722] text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                Apply Now — Seats Filling Fast
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">Fee inclusive of all taxes · No hidden charges</p>
            </div>

            {/* Scholarships */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Scholarships & EMI Options</h3>
              <p className="text-gray-500 text-sm mb-6">Exclusive scholarship scheme for eligible students</p>
              <div className="space-y-4">
                {scholarships.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 bg-orange-50 rounded-xl p-4 border border-orange-100">
                    <div className="text-2xl">{s.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">{s.title}</span>
                        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{s.pct} OFF</span>
                      </div>
                      <p className="text-gray-500 text-xs mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-blue-700 text-sm font-semibold mb-1">💳 No-Cost EMI — Just ₹150/Day</p>
                <p className="text-blue-600 text-xs">Experience stress-free learning. Pay annually with zero interest EMI starting at ₹4,583/month. Subject to T&C.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mba-admission" className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Eligibility & Admission Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process — apply completely online. No entrance exam required.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Eligibility */}
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Eligibility Criteria</h3>
              <div className="space-y-4">
                {[
                  { icon: '🎓', title: 'Education', desc: 'Any bachelor\'s degree (10+2+3 or 10+2+4 or 10+3+3 years) from a UGC-recognized university.' },
                  { icon: '📊', title: 'Minimum Marks', desc: 'Minimum 50% aggregate marks in graduation. Relaxation to 45% for reserved category candidates.' },
                  { icon: '🌍', title: 'NRI / Foreign Students', desc: 'Eligible. Separate fee structure. AIU equivalence certificate required for non-Indian qualifications.' },
                  { icon: '💼', title: 'Work Experience', desc: 'Not mandatory. Freshers and working professionals both welcome.' },
                ].map((e, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-lg flex-shrink-0">{e.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-800">{e.title}</p>
                      <p className="text-gray-600 text-sm mt-0.5">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="relative">
              <div className="hidden lg:block absolute left-8 top-16 bottom-4 w-0.5 bg-gradient-to-b from-orange-400 to-orange-100" />
              <div className="space-y-6">
                {admissionSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="flex gap-5 items-start"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-[#f26722] rounded-full flex flex-col items-center justify-center text-white shadow-lg flex-shrink-0 relative z-10">
                      <span className="text-lg font-extrabold">{step.num}</span>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <button
                onClick={() => setOpenModal({ type: 'apply', program: 'Online MBA' })}
                className="w-full mt-8 bg-gradient-to-r from-orange-500 to-[#f26722] text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                Start Application Now — Free
              </button>
            </div>
          </div>
        </div>
      </section>

  
      <section id="mba-career" className="bg-[#0B0B10] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Career Scope After SMU Online MBA
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              SMU MBA graduates are placed in top roles across BFSI, IT, FMCG, Healthcare, FinTech, and Supply Chain with an average package of <strong className="text-orange-400">₹6–8 LPA</strong> and top packages up to <strong className="text-orange-400">₹18 LPA</strong>.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Job Roles */}
            <div>
              <h3 className="text-lg font-bold text-orange-400 mb-5 uppercase tracking-wider">Top Job Roles</h3>
              <div className="flex flex-wrap gap-3">
                {careerRoles.map((role, i) => (
                  <span key={i} className="bg-white/8 border border-white/15 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-orange-500/20 hover:border-orange-500/40 transition">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-lg font-bold text-orange-400 mb-5 uppercase tracking-wider">Hiring Industries</h3>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((ind, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center text-sm font-medium hover:border-orange-500/30 transition">
                    {ind}
                  </div>
                ))}
              </div>

              {/* Salary stats */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { v: '₹6–8 LPA', l: 'Avg. Package' },
                  { v: '₹18 LPA', l: 'Top Package' },
                  { v: '85%+', l: 'Placement Rate' },
                ].map((s) => (
                  <div key={s.l} className="bg-gradient-to-br from-orange-500/15 to-orange-500/5 border border-orange-500/20 rounded-xl p-4 text-center">
                    <div className="text-2xl font-extrabold text-orange-400">{s.v}</div>
                    <div className="text-xs text-gray-400 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Learning Management System
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              SMU's advanced LMS is built with 4 intelligent AI tools that ensure you never feel stuck — study smarter, not harder.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📄', title: 'SummarizeMe AI', desc: 'Instantly summarizes video lectures and PDF notes so you can revise in minutes.' },
              { icon: '❓', title: 'QuizMe AI', desc: 'Generates course-specific practice quizzes to test your knowledge before exams.' },
              { icon: '🤖', title: 'AI Professor', desc: 'A conversational AI bot that answers your course content queries 24/7.' },
              { icon: '🗺️', title: 'Learning Path AI', desc: 'Personalizes your study schedule based on your pace and upcoming exam dates.' },
            ].map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition border border-blue-50"
              >
                <div className="text-3xl mb-4">{tool.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="bg-white py-14 px-4 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Sikkim Manipal University — By the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: '30+', l: 'Years of Quality Education' },
              { v: '6 Lakh+', l: 'Alumni Worldwide' },
              { v: '530+', l: 'Expert Faculty & Staff' },
              { v: '2,500+', l: 'Learners Across Cities' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl lg:text-5xl font-extrabold text-[#f26722]">{s.v}</div>
                <p className="text-gray-600 text-sm mt-2">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section id="mba-faq" className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions — SMU Online MBA
            </h2>
            <p className="text-gray-600">Everything you need to know before applying</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-7 py-5 flex justify-between items-center font-semibold text-gray-800 hover:bg-orange-50 transition text-base"
                >
                  <span className="pr-6">{faq.q}</span>
                  <span className={`w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 transition-colors ${openFaq === i ? 'bg-[#f26722] text-white' : 'text-gray-500'}`}>
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-6 text-gray-700 text-base leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="bg-gradient-to-r from-orange-500 to-[#f26722] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Start Your MBA Journey?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            January 2026 batch is now open. Limited seats available. Get a UGC-approved MBA from NAAC A+ Sikkim Manipal University — starting just ₹150/day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setOpenModal({ type: 'apply', program: 'Online MBA' })}
              className="bg-white text-orange-600 font-bold px-10 py-4 rounded-full hover:bg-orange-50 transition shadow-xl hover:scale-105"
            >
              Apply Now — Free Registration
            </button>
            <button
              onClick={() => setOpenModal({ type: 'enquire', program: 'Online MBA' })}
              className="border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white/15 transition hover:scale-105"
            >
              Download Brochure
            </button>
          </div>
          <div className="flex items-center justify-center gap-3 mt-7">
            <FaPhone className="rotate-90 text-orange-200" />
            <span className="text-orange-100">Talk to an advisor: </span>
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

export default MBAPage;