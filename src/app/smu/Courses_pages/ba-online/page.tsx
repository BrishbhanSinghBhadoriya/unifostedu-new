'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';
import { optimizeCloudinary } from '@/utils/cloudinary';
import Footer from '@/components/Footer';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';

type OpenModalState = {
  type: 'apply' | 'enquire';
  program?: string;
} | null;

type BAPageProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};

const combinations = [
  {
    icon: '📚',
    title: 'English',
    desc: 'Indian & World Literature, Communicative English, Poetry, Novels, American Literature & more.',
  },
  {
    icon: '🏛️',
    title: 'Sociology',
    desc: 'Introduction to Sociology, Rural & Urban Sociology, Social Problems, Classical Thinkers & more.',
  },
  {
    icon: '🗳️',
    title: 'Political Science',
    desc: 'Foundations of Political Science, Political Theory, Comparative Analysis, IR, Public Policy & more.',
  },
];

const year1Sem1 = [
  'Indian English Literature',
  'Communicative English',
  'Foundations of Political Science',
  'Introduction to Sociology',
  'Natural Science',
];

const year1Sem2 = [
  'World Literature',
  'Functional English',
  'Political Theory',
  'Sociology in India',
  'Environmental Studies',
];

const year2Sem3 = [
  'Essays and Poetry',
  'Universal Human Values',
  'Comparative Political Analysis',
  'Rural Sociology',
  'Digital Fluency',
];

const year2Sem4 = [
  'New Literature in English',
  'Literary Terms, Forms & Movements',
  'Classical Indian Political Thought',
  'Urban Sociology',
  'Family, Kinship & Marriage',
  'Theories of International Relations',
];

const year3Sem5 = [
  'Victorian and Modern Literature',
  'Poetry: Evolution, Elements & Genres',
  'Children\'s Literature',
  'Human Rights',
  'Social Problems in India',
  'Classical Sociological Thinkers',
  'Political Processes in India',
  'India\'s Foreign Policy in a Globalized World',
];

const year3Sem6 = [
  'American Literature',
  'One Act Plays: Introduction & Studies',
  'Novels and Short Stories',
  'United Nations and Global Conflicts',
  'Sociology of Change and Development',
  'Sociology of Education',
  'Social Movements in India',
  'Public Policy and Administration in India',
  'Gender and Politics',
];

const benefits = [
  {
    icon: '🎓',
    title: 'UGC-Entitled Degree',
    desc: 'Same recognition as on-campus BA — accepted by employers and higher education institutions across India and globally. No mention of "Online" on certificate.',
  },
  {
    icon: '📖',
    title: '3 Subject Combinations',
    desc: 'Choose from English, Sociology, or Political Science to customize your BA path and align it with your career goals.',
  },
  {
    icon: '💼',
    title: 'Career Studio Support',
    desc: 'Resume building, LinkedIn optimization, mock interviews and virtual job fairs with 150+ hiring partners including EY, Accenture & more.',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Learning',
    desc: 'SummarizeMe AI, QuizMe AI, AI Professor & Learning Path AI — 24/7 intelligent support on LMS for a personalized experience.',
  },
  {
    icon: '📅',
    title: 'Flexible Schedule',
    desc: 'Live + recorded classes. Study 15–20 hrs/week at your own pace. 100% online — no campus visits required.',
  },
  {
    icon: '🌍',
    title: '6 Lakh+ Alumni Network',
    desc: 'Join a powerful professional community working across India, Middle East, Southeast Asia & Europe through SMU\'s prestigious alumni status.',
  },
];

const admissionSteps = [
  {
    num: '01',
    title: 'Fill Application',
    desc: 'Enter basic, education & work experience details. Pay the application fee to register on the portal.',
  },
  {
    num: '02',
    title: 'Pay Semester Fee',
    desc: 'Pay the first semester fee of ₹12,500 or opt for full course payment of ₹75,000 with EMI from ₹2,083/month.',
  },
  {
    num: '03',
    title: 'Upload Documents',
    desc: 'Upload Class 12 marksheets, ID proof, and other required documents through the online portal.',
  },
  {
    num: '04',
    title: 'University Approval',
    desc: 'SMU evaluates your documents and confirms admission. LMS access granted within 48 hours.',
  },
];

const rankings = [
  { label: 'NAAC A+', sub: 'Accredited University' },
  { label: 'UGC Approved', sub: 'Online Degrees' },
  { label: 'Rank #1', sub: 'Top Private Univ. in NE India' },
  { label: 'Rank 151–200', sub: "India's Top Universities 2025" },
  { label: 'Rank 330', sub: "South Asia's Top Universities 2026" },
  { label: 'Rank 601+', sub: 'Asia University Rankings 2025' },
];

const careerRoles = [
  'Public Administrator',
  'Content Writer',
  'Public Relations Specialist',
  'HR Executive',
  'Campaign Manager',
  'Policy Analyst',
  'Social Worker',
  'Urban Planner',
  'Researcher',
  'Journalist',
  'Teacher / Educator',
  'Community Outreach Officer',
];

const industries = [
  'Education',
  'Public Relations',
  'Marketing',
  'Retail',
  'Journalism',
  'Social Services',
  'EdTech',
  'Event Planning',
];

const scholarships = [
  {
    icon: '🪖',
    title: 'Defence Personnel',
    pct: '20%',
    desc: 'Active and retired defence personnel and their families.',
  },
  {
    icon: '🧡',
    title: 'Differently-Abled',
    pct: '20%',
    desc: 'Students with differently-abled status as per government norms.',
  },
  {
    icon: '🎓',
    title: 'SMU Alumni',
    pct: '20%',
    desc: 'Previous SMU graduates enrolling for another program.',
  },
  {
    icon: '🏔️',
    title: 'NE Region Students',
    pct: '30%',
    desc: 'Students from Sikkim and other North-East states of India.',
  },
];

const faqs = [
  {
    q: 'What is the eligibility for SMU Online BA?',
    a: 'Candidates must have completed 10+2 from a recognized national or state board institution or a 10+3 diploma from a recognized national or state institute. There is no minimum marks requirement and no entrance exam.',
  },
  {
    q: 'Is the SMU Online BA degree valid for government jobs?',
    a: 'Yes. The SMU Online BA is UGC-DEB approved and holds the same validity as a regular BA degree for government jobs, promotions, and competitive exams across India.',
  },
  {
    q: 'What subject combinations are available in the SMU BA?',
    a: 'The program offers three elective streams: English, Sociology, and Political Science. Students choose their preferred combination at the time of admission and study subjects from their chosen stream across all six semesters.',
  },
  {
    q: 'What is the total fee and EMI option?',
    a: 'Total fee is ₹75,000 (₹12,500 per semester). No-cost EMI starts at just ₹2,083/month (approximately ₹150/day). Scholarships up to 30% are available for NE students, defence personnel, differently-abled, and SMU alumni.',
  },
  {
    q: 'How are exams conducted for the SMU Online BA?',
    a: 'Exams are AI-proctored and conducted online from home. Students need a laptop/desktop with Windows OS and Google Chrome. Results are published on the student portal.',
  },
  {
    q: 'How many hours of study per week are required?',
    a: 'Approximately 15–20 hours per week. Students need to complete at least 75% of self-learning content (videos + reading material) to be eligible for the term-end exam.',
  },
  {
    q: 'Does SMU provide placement assistance for BA students?',
    a: 'Yes. SMU offers career counseling, resume building, LinkedIn optimization, mock interviews, virtual job fairs and access to 150+ corporate hiring partners including EY, Accenture, HP, LTIMindtree, and more.',
  },
  {
    q: 'What is the duration of the Online BA program?',
    a: 'The program is 3 years (6 semesters). Students can extend up to a maximum of 6 years to complete the degree at their own pace.',
  },
  {
    q: 'Can working professionals pursue this BA?',
    a: 'Absolutely. The program is designed for both freshers and working professionals — 100% online, flexible live + recorded classes, and AI-powered LMS ensure zero disruption to your career.',
  },
  {
    q: 'What AI tools are available on the SMU learning platform?',
    a: "SMU's LMS features SummarizeMe AI (summarizes PDFs/videos), QuizMe AI (generates practice quizzes), AI Professor (answers course queries), and Learning Path AI (helps plan your study schedule).",
  },
];

const BAPage: React.FC<BAPageProps> = () => {
  const [activeSem, setActiveSem] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<OpenModalState>(null);

  const semSubjects: Record<number, string[]> = {
    1: year1Sem1,
    2: year1Sem2,
    3: year2Sem3,
    4: year2Sem4,
    5: year3Sem5,
    6: year3Sem6,
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
            name: 'Online BA Degree (Bachelor of Arts) — Sikkim Manipal University',
            description:
              'UGC-approved Online BA from Sikkim Manipal University (SMU). 36 months, ₹75,000 total fee, NAAC A+ accredited. Choose English, Sociology, or Political Science.',
            provider: {
              '@type': 'EducationalOrganization',
              name: 'Sikkim Manipal University Online',
              sameAs: 'https://unifostedu.com/smu',
              telephone: '+91-7042646766',
            },
            offers: {
              '@type': 'Offer',
              price: '75000',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
            },
            courseMode: 'online',
            timeToComplete: 'P36M',
            educationalCredentialAwarded: 'Bachelor of Arts (BA)',
          }),
        }}
      />

      {/* ── HEADER ── */}
      <header className="w-full fixed bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 top-0 left-0 z-50 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-2 lg:gap-4">
              <img
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipallogo_yduega.jpg"
                alt="SMU Logo"
                className="h-8 w-auto sm:h-10 lg:h-12"
              />
              <h1 className="font-queens text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                <span className="text-[#f26722]">Online</span>{' '}
                <span className="text-gray-800">SMU</span>
              </h1>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="tel:+917042646766"
                className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm lg:text-base hover:text-[#f26722] transition-colors"
              >
                <FaPhone className="text-orange-500 rotate-90" />
                <span className="hidden lg:inline">+91 7042646766</span>
                <span className="lg:hidden">Call Now</span>
              </a>
              <a
                href="tel:+917042646766"
                className="sm:hidden flex items-center justify-center w-10 h-10 bg-[#f26722]/10 rounded-full text-[#f26722] hover:bg-[#f26722]/20 transition-colors cursor-pointer"
              >
                📞
              </a>
              <button
                onClick={() => setOpenModal({ type: 'apply' })}
                className="bg-[#f26722] hover:bg-orange-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base cursor-pointer"
              >
                <span className="hidden sm:inline">Apply Now</span>
                <span className="sm:hidden">Apply</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        id="ba-hero"
        className="relative min-h-[600px] mt-12 flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
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
              <nav className="flex items-center gap-2 text-xs text-white/60">
                <a href="/smu" className="hover:text-orange-400 transition">
                  SMU Online
                </a>
                <span>/</span>
                <span className="text-orange-300 font-semibold">BA Program</span>
              </nav>

              <div className="flex flex-wrap gap-2">
                {['NAAC A+ Accredited', 'UGC Approved', '3 Specializations', '81% Seats Filled'].map((b) => (
                  <span
                    key={b}
                    className="bg-white/10 border border-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-orange-200"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                Online BA Degree
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                  Bachelor of Arts
                </span>
              </h1>
              <p className="text-base text-white/75 max-w-lg">
                Bachelor of Arts from{' '}
                <strong className="text-white">Sikkim Manipal University</strong> — NAAC A+
                institution. Choose English, Sociology, or Political Science. Study 100% online and
                graduate with a UGC-entitled degree equivalent to a regular BA.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: '36', l: 'Months' },
                  { v: '₹12.5K', l: 'Per Semester' },
                  { v: '3 Streams', l: 'Choices' },
                  { v: '150+', l: 'Hiring Partners' },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="bg-white/8 border border-white/15 rounded-xl p-3 text-center backdrop-blur"
                  >
                    <div className="text-xl font-bold text-orange-300">{s.v}</div>
                    <div className="text-xs text-white/60 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  onClick={() => setOpenModal({ type: 'apply', program: 'Online BA' })}
                  className="bg-gradient-to-r from-orange-500 to-[#f26722] hover:from-[#f26722] hover:to-orange-600 text-white font-bold px-7 py-3 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now — Feb 2026 Batch
                </button>
                <button
                  onClick={() => setOpenModal({ type: 'enquire', program: 'Online BA' })}
                  className="border border-white/40 text-white px-7 py-3 rounded-xl hover:bg-white/10 transition backdrop-blur"
                >
                  Download Brochure
                </button>
              </div>

              <p className="text-xs text-white/50">
                💳 No-cost EMI from{' '}
                <strong className="text-white/70">₹2,083/month</strong>&nbsp;|&nbsp;Scholarships
                up to 30% available
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
                  src={optimizeCloudinary(
                    'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipallogo_yduega.jpg'
                  )}
                  alt="Sikkim Manipal University Logo"
                  width={52}
                  height={52}
                  className="rounded-xl object-cover"
                />
                <div>
                  <p className="font-bold text-lg leading-tight">Sikkim Manipal University</p>
                  <p className="text-xs text-orange-300">NAAC A+ · NIRF Ranked · UGC Approved</p>
                </div>
              </div>

              {[
                { label: 'Program', value: 'Online BA (Bachelor of Arts)' },
                { label: 'Duration', value: '36 Months (6 Semesters)' },
                { label: 'Mode', value: '100% Online — Live + Recorded' },
                { label: 'Total Fee', value: '₹75,000 (₹12,500/semester)' },
                { label: 'EMI', value: 'Starting ₹2,083/month (no-cost)' },
                { label: 'Eligibility', value: '10+2 from recognized board' },
                { label: 'Exam Mode', value: 'AI-Proctored Online Exams' },
                { label: 'Credits', value: '120 Credits · Study 15–20 hrs/week' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between text-sm border-b border-white/10 pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-white/60">{label}</span>
                  <span className="text-white font-semibold text-right max-w-[55%]">{value}</span>
                </div>
              ))}

              <button
                onClick={() => setOpenModal({ type: 'apply', program: 'Online BA' })}
                className="w-full bg-gradient-to-r from-orange-500 to-[#f26722] text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Apply Now — Free Registration
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about-ba" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Online BA from Sikkim Manipal University — Program Overview
          </h2>
          <div className="w-20 h-1 bg-[#f26722] rounded-full mb-7" />
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              The <strong>Online BA (Bachelor of Arts) from Sikkim Manipal University (SMU)</strong>{' '}
              is a three-year undergraduate program offered by one of India's most trusted NAAC A+
              accredited universities. Designed for school passouts and working professionals alike,
              this program combines rigorous humanities education with the flexibility of 100% online
              learning.
            </p>
            <p>
              Students can choose their preferred specialization stream — <strong>English</strong>,{' '}
              <strong>Sociology</strong>, or <strong>Political Science</strong> — and study a
              combination of core and elective subjects across six semesters, gaining in-depth
              knowledge in their chosen domain.
            </p>
            <p>
              The program is delivered through SMU's{' '}
              <strong>AI-enabled Learning Management System (LMS)</strong> featuring live and
              recorded classes, AI-proctored online exams, e-libraries, discussion forums, and
              intelligent tools like SummarizeMe AI, QuizMe AI, and an AI Professor for
              personalized learning support.
            </p>
            <p>
              Recognized by the{' '}
              <strong>UGC-Distance Education Bureau (UGC-DEB)</strong>, this online BA degree
              carries the same academic value and employer recognition as a regular on-campus BA.
              Graduates receive a university degree certificate without any mention of the "Online"
              or "Distance" mode of study.
            </p>
          </div>
          <button
            onClick={() => setOpenModal({ type: 'apply', program: 'Online BA' })}
            className="mt-8 bg-gradient-to-r from-orange-500 to-[#f26722] hover:from-[#f26722] hover:to-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
          >
            Apply Now — Admissions Open
          </button>
        </div>
      </section>

      {/* ── RANKINGS ── */}
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
                <div className="text-2xl font-extrabold text-orange-400 leading-tight">
                  {r.label}
                </div>
                <div className="text-xs text-gray-400 mt-2 leading-snug">{r.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBJECT COMBINATIONS ── */}
      <section id="ba-combinations" className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              3 Subject Combinations — Choose Your Stream
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Select your preferred specialization at the time of admission. Your chosen stream
              shapes your elective subjects across all six semesters, alongside core foundation
              courses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {combinations.map((s, i) => (
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
                  onClick={() => setOpenModal({ type: 'apply', program: `Online BA — ${s.title}` })}
                  className="mt-5 text-orange-600 text-sm font-semibold hover:text-orange-700 transition"
                >
                  Apply for BA {s.title} →
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-orange-50 border border-orange-100 rounded-2xl p-5 text-center max-w-2xl mx-auto">
            <p className="text-gray-700 text-sm">
              <strong>Note:</strong> Each combination includes both core subjects and stream-specific
              electives. Combination is selected at admission and continues throughout all 6
              semesters.
            </p>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose SMU Online BA?
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

      {/* ── SYLLABUS ── */}
      <section id="ba-syllabus" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SMU Online BA Syllabus — Semester-Wise Curriculum
            </h2>
            <p className="text-gray-600">
              120 credits · 36 months · 6 semesters · 15–20 hours study per week
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {([1, 2, 3, 4, 5, 6] as const).map((sem) => (
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
              <span className="ml-3 text-sm font-normal text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                Core + Stream Electives
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {semSubjects[activeSem].map((sub, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                  <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 bg-[#f26722] text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-7">
            <button
              onClick={() => setOpenModal({ type: 'enquire', program: 'Online BA' })}
              className="border-2 border-[#f26722] text-[#f26722] font-semibold px-8 py-3 rounded-xl hover:bg-[#f26722] hover:text-white transition"
            >
              Download Full Syllabus PDF
            </button>
          </div>
        </div>
      </section>

      {/* ── FEES ── */}
      <section id="ba-fees" className="bg-gradient-to-br from-gray-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            SMU Online BA — Fee Structure 2025–26
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Fee card */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Course Fee Breakdown</h3>
              <div className="space-y-4">
                {[
                  { label: 'Total Program Fee', value: '₹75,000', highlight: true },
                  { label: 'Per Semester Fee', value: '₹12,500', highlight: false },
                  { label: 'EMI (No-Cost)', value: '₹2,083 / month', highlight: false },
                  { label: 'Duration', value: '36 months (6 Semesters)', highlight: false },
                  { label: 'Program Credits', value: '120 Credits', highlight: false },
                ].map(({ label, value, highlight }) => (
                  <div
                    key={label}
                    className={`flex justify-between items-center py-3 border-b border-gray-100 last:border-0 ${
                      highlight ? 'text-[#f26722] font-bold text-lg' : ''
                    }`}
                  >
                    <span className="text-gray-600">{label}</span>
                    <span
                      className={
                        highlight
                          ? 'text-[#f26722] font-extrabold text-2xl'
                          : 'font-semibold text-gray-800'
                      }
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setOpenModal({ type: 'apply', program: 'Online BA' })}
                className="w-full mt-7 bg-gradient-to-r from-orange-500 to-[#f26722] text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                Apply Now — Seats Filling Fast
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">
                Fee inclusive of all taxes · No hidden charges
              </p>
            </div>

            {/* Scholarships */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Scholarships & EMI Options</h3>
              <p className="text-gray-500 text-sm mb-6">
                Exclusive scholarship scheme for eligible students
              </p>
              <div className="space-y-4">
                {scholarships.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-orange-50 rounded-xl p-4 border border-orange-100"
                  >
                    <div className="text-2xl">{s.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">{s.title}</span>
                        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          {s.pct} OFF
                        </span>
                      </div>
                      <p className="text-gray-500 text-xs mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-blue-700 text-sm font-semibold mb-1">
                  💳 No-Cost EMI — Just ₹150/Day
                </p>
                <p className="text-blue-600 text-xs">
                  Experience stress-free learning. Pay with zero interest EMI starting at
                  ₹2,083/month. Subject to T&C.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY & ADMISSION ── */}
      <section id="ba-admission" className="bg-white py-16 px-4">
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
                  {
                    icon: '🎓',
                    title: 'Education (Indian Students)',
                    desc: "Candidates must have completed 10+2 from a recognized national or state board institution or 10+3 diploma from a recognized national or state institute.",
                  },
                  {
                    icon: '🌍',
                    title: 'NRI / Foreign Students',
                    desc: 'Must have completed 10+2 or equivalent qualification. AIU equivalence certificate required for non-Indian qualifications. International fee structure applies.',
                  },
                  {
                    icon: '📊',
                    title: 'Minimum Marks',
                    desc: 'No minimum marks requirement in Class 12. The program is open to all 10+2 pass students regardless of stream (Arts, Science, Commerce).',
                  },
                  {
                    icon: '💼',
                    title: 'Work Experience',
                    desc: 'Not mandatory. Freshers directly after 12th and working professionals both welcome to apply.',
                  },
                ].map((e, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                      {e.icon}
                    </div>
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
                onClick={() => setOpenModal({ type: 'apply', program: 'Online BA' })}
                className="w-full mt-8 bg-gradient-to-r from-orange-500 to-[#f26722] text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                Start Application Now — Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREER SCOPE ── */}
      <section id="ba-career" className="bg-[#0B0B10] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Career Scope After SMU Online BA
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              SMU BA graduates pursue exciting careers across Education, Public Relations, Marketing,
              Journalism, Social Services, EdTech, and Government sectors with diverse and growing
              opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-bold text-orange-400 mb-5 uppercase tracking-wider">
                Top Job Roles
              </h3>
              <div className="flex flex-wrap gap-3">
                {careerRoles.map((role, i) => (
                  <span
                    key={i}
                    className="bg-white/8 border border-white/15 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-orange-500/20 hover:border-orange-500/40 transition"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-orange-400 mb-5 uppercase tracking-wider">
                Hiring Industries
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((ind, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 text-center text-sm font-medium hover:border-orange-500/30 transition"
                  >
                    {ind}
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gradient-to-br from-orange-500/15 to-orange-500/5 border border-orange-500/20 rounded-xl p-5">
                <p className="text-orange-300 font-bold text-lg mb-2">
                  💼 150+ Hiring Partners
                </p>
                <p className="text-gray-400 text-sm">
                  Access virtual job fairs and career counseling with top recruiters including EY,
                  Accenture, HP, LTIMindtree, Goldman Sachs and many more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI LEARNING ── */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Learning Management System
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              SMU's advanced LMS is built with 4 intelligent AI tools that ensure you never feel
              stuck — study smarter, not harder.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '📄',
                title: 'SummarizeMe AI',
                desc: 'Instantly summarizes video lectures and PDF notes so you can revise in minutes.',
              },
              {
                icon: '❓',
                title: 'QuizMe AI',
                desc: 'Generates course-specific practice quizzes to test your knowledge before exams.',
              },
              {
                icon: '🤖',
                title: 'AI Professor',
                desc: 'A conversational AI bot that answers your course content queries 24/7.',
              },
              {
                icon: '🗺️',
                title: 'Learning Path AI',
                desc: 'Personalizes your study schedule based on your pace and upcoming exam dates.',
              },
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

      {/* ── STATS ── */}
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

      {/* ── FAQ ── */}
      <section id="ba-faq" className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions — SMU Online BA
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
                  <span
                    className={`w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 transition-colors ${
                      openFaq === i ? 'bg-[#f26722] text-white' : 'text-gray-500'
                    }`}
                  >
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

      {/* ── CTA BANNER ── */}
      <section className="bg-gradient-to-r from-orange-500 to-[#f26722] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Start Your BA Journey?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Admissions are now open. Limited seats available. Get a UGC-approved BA from NAAC A+
            Sikkim Manipal University — starting just ₹150/day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setOpenModal({ type: 'apply', program: 'Online BA' })}
              className="bg-white text-orange-600 font-bold px-10 py-4 rounded-full hover:bg-orange-50 transition shadow-xl hover:scale-105"
            >
              Apply Now — Free Registration
            </button>
            <button
              onClick={() => setOpenModal({ type: 'enquire', program: 'Online BA' })}
              className="border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white/15 transition hover:scale-105"
            >
              Download Brochure
            </button>
          </div>
          <div className="flex items-center justify-center gap-3 mt-7">
            <FaPhone className="rotate-90 text-orange-200" />
            <span className="text-orange-100">Talk to an advisor: </span>
            <a href="tel:+917042646766" className="text-white font-bold hover:underline">
              +91 7042646766
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {openModal && (
        <ApplyEnquiryModal
          open={true}
          onOpenChange={(v) => {
            if (!v) setOpenModal(null);
          }}
          title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
          subtitle={
            openModal.type === 'apply'
              ? 'Fill the quick form to begin your admission process'
              : 'Share your details and our counselor will reach out'
          }
          imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp"
          universityName="Sikkim Manipal University"
          defaultProgram={openModal.program ?? 'BA'}
          formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
          showImage
        />
      )}
    </>
  );
};

export default BAPage;