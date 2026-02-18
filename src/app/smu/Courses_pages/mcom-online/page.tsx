'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';
import { optimizeCloudinary } from '@/utils/cloudinary';
import Footer from '@/components/Footer';

import ApplyEnquiryModal from '@/components/ApplyEnquiryModal'

type OpenModalState = { type: 'apply' | 'enquire'; program?: string } | null;
type MComOnlineProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};

/* ─────────────────────────────────────
   STATIC DATA
───────────────────────────────────── */
const rankings = [
  { label: 'NAAC A+', sub: 'Accredited University' },
  { label: 'UGC Approved', sub: 'Online Degrees' },
  { label: 'Rank #1', sub: 'Top Private Univ. in NE India' },
  { label: 'Rank 151–200', sub: "India's Top Universities 2025" },
  { label: 'Rank 330', sub: "South Asia's Top Universities 2026" },
  { label: 'Rank 601+', sub: 'Asia University Rankings 2025' },
];

const benefits = [
  {
    icon: '💹',
    title: 'Increased Earning Potential',
    desc: 'Unlock better career opportunities with lucrative salaries. Advance your knowledge in banking, taxation, auditing, and investment management to make a significant impact.',
  },
  {
    icon: '📊',
    title: 'Enhanced Financial Skills',
    desc: 'Develop expertise in investment analysis, financial decision-making, global business strategies, and essential competencies for a successful commerce career.',
  },
  {
    icon: '🚀',
    title: 'Better Career Opportunities',
    desc: 'Explore roles like investment manager, corporate analyst, cost accountant, financial risk analyst, and revenue manager across top industries.',
  },
  {
    icon: '🌐',
    title: 'Robust Alumni Network',
    desc: 'Join 6 Lakh+ SMU alumni and gain industry insights from professionals across Banking, Finance, Consulting, and more. Expand your professional network globally.',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Learning Platform',
    desc: 'SummarizeMe AI, QuizMe AI, AI Professor and Learning Path AI — 24/7 intelligent support for a personalised online learning experience.',
  },
  {
    icon: '🎓',
    title: '100% Online — No Compromise',
    desc: 'Live + recorded classes, AI-proctored exams, e-library, dedicated course mentors and 24×7 student support — study from anywhere without career disruption.',
  },
];

const semesterData: Record<number, { core: string[]; electives?: { label: string; subjects: string[] }[] }> = {
  1: {
    core: [
      'Management Concepts and Organizational Behavior',
      'Marketing Management',
      'Financial Accounting & Reporting',
      'Economics for Managers',
      'Corporate Financial Management',
    ],
  },
  2: {
    core: [
      'Advanced Corporate Accounting',
      'Business and Economic Laws',
      'Cost Analysis & Control',
      'Human Resource Management',
      'Audit & Assurance',
    ],
  },
  3: {
    core: [
      'Business Ethics and Corporate Governance',
      'Strategic Management',
      'Management Accounting',
    ],
    electives: [
      {
        label: 'Finance Elective',
        subjects: ['Management of Financial Services', 'Security Analysis and Portfolio Management'],
      },
      {
        label: 'Marketing Elective',
        subjects: ['E-Business', 'Consumer Behavior'],
      },
    ],
  },
  4: {
    core: [
      'Research Methodology and Statistical Analysis',
      'Project Work',
    ],
    electives: [
      {
        label: 'Finance Elective',
        subjects: ['Corporate Tax Laws & Planning', 'Merger & Acquisitions'],
      },
      {
        label: 'Marketing Elective',
        subjects: ['International Marketing', 'Advertising Management and Sales Promotion'],
      },
    ],
  },
};

const careerRoles = [
  'Corporate Analyst', 'Financial Operations Manager', 'Investment Manager',
  'Cost Accountant', 'Corporate Treasury Manager', 'Financial Risk Analyst',
  'Tax Consultant', 'Revenue Manager', 'Audit Manager', 'Financial Manager',
  'Portfolio Manager', 'Business Development Manager',
];

const industries = [
  'Accounting & Finance', 'Banking & Finance', 'Consulting',
  'E-Commerce', 'Manufacturing', 'Market Research & Analysis',
  'Services & Entrepreneurship', 'Sports Management',
];

const faculty = [
  { name: 'Dr. Madan Chettri', qual: 'M.Com, Ph.D.', role: 'Associate Professor', desc: '27 years of teaching experience. Author of 2 books, multiple UGC CARE/Scopus publications. Specializes in Finance, Banking and Research Methodology.' },
  { name: 'Dr. Anupam Kumar Pandey', qual: 'M.Com., Ph.D.', role: 'Associate Professor / Asst. Professor (SG)', desc: 'PhD from Banaras Hindu University. Expert in income tax, corporate accounting and business finance. 10+ years teaching experience.' },
  { name: 'Dr. Aditya Rai', qual: 'B.Com (Hons), M.Com, MBA, Ph.D.', role: 'Associate Professor', desc: 'PhD from Sikkim Central University. NET qualified in Commerce & Management. Author of 2 books. Ex-HDFC Life Certified Financial Consultant.' },
  { name: 'Dr. Ruchita Sharma', qual: 'B.Com (Hons), M.Com, Ph.D.', role: 'Assistant Professor', desc: 'Gold Medalist in M.Com (Accounting & Finance). PhD from Sikkim University. Research focus in finance, banking and microfinance.' },
  { name: 'Ms. Samu Kharel', qual: 'BBA, MBA', role: 'Assistant Professor', desc: 'Gold Medalist in MBA (Finance & Marketing). PhD scholar researching Indian stock market volatility, behavioural finance and geopolitical risk.' },
  { name: 'Dr. Manjari Sharma', qual: 'M.Com, MBA, PhD', role: 'Adjunct Faculty', desc: 'Gold Medalist in M.Com from Symbiosis. Distinguished Teachers Award (2018). PhD from Sikkim University. Core member of Institution Innovation Cell.' },
];

const scholarships = [
  { icon: '🪖', title: 'Defence Personnel', pct: '20%', desc: 'Active and retired defence personnel and their families.' },
  { icon: '🧡', title: 'Differently-Abled', pct: '20%', desc: 'Students with differently-abled status as per government norms.' },
  { icon: '🎓', title: 'SMU Alumni', pct: '20%', desc: 'Previous SMU graduates enrolling for another program.' },
  { icon: '🏔️', title: 'NE Region Students', pct: '30%', desc: 'Students from Sikkim and other North-East states of India.' },
];

const admissionSteps = [
  { num: '01', title: 'Fill Application', desc: 'Enter your basic details, educational background, and work experience. Pay the ₹500 application fee (non-refundable) to register.' },
  { num: '02', title: 'Pay Semester Fee', desc: 'Pay ₹18,750 for Semester 1 or opt for full course payment of ₹75,000. No-cost EMI available from just ₹3,125/month.' },
  { num: '03', title: 'Upload Documents', desc: 'Upload graduation marksheets, ID proof, category certificate (if applicable) and other required documents online.' },
  { num: '04', title: 'University Approval', desc: 'SMU evaluates your documents within 5 working days. Admission confirmed via email & SMS. LMS access granted within 48 hours.' },
];

const faqs = [
  { q: 'What is the eligibility for SMU Online MCom?', a: 'Any graduate with a 10+2+3-year bachelor\'s degree from a UGC-recognized university is eligible. There is no specific stream restriction — graduates from Commerce, Science, Arts, or any other stream can apply. No minimum percentage is explicitly stated for Indian students, though the university may apply standard norms.' },
  { q: 'Is the SMU Online MCom degree valid for government jobs and higher studies?', a: 'Yes. SMU Online MCom is fully approved by UGC-DEB and holds the same academic value as a regular on-campus MCom. It is recognized for government jobs, promotions, PhD admissions, and professional qualifications across India.' },
  { q: 'What is the total fee for SMU Online MCom and EMI option?', a: 'Total course fee is ₹75,000 (₹18,750 per semester). No-cost EMI starts at ₹3,125/month. Scholarships up to 30% available for NE students, defence personnel, differently-abled candidates, and SMU alumni.' },
  { q: 'What electives are available in SMU Online MCom?', a: 'In Semester 3 and Semester 4, students choose between two elective tracks: Finance (Security Analysis, Portfolio Management, Corporate Tax, M&A) or Marketing (E-Business, Consumer Behavior, International Marketing, Advertising Management).' },
  { q: 'Does the SMU MCom have a Finance or Marketing specialization?', a: 'The SMU MCom offers elective-based focus areas rather than fixed specializations. You choose Finance or Marketing electives in Semesters 3 and 4. The core subjects cover both finance and commerce throughout the program.' },
  { q: 'How are exams conducted for SMU Online MCom?', a: 'Exams are conducted online via an AI-proctored system from the comfort of your home. Students need a laptop/desktop with Windows OS and Google Chrome. A minimum 75% course completion is required to be eligible for term-end exams.' },
  { q: 'What is the assessment pattern for SMU MCom?', a: 'Assessment is split 70:30 between Term-End Examinations (TEE) and Continuous Assessment (CA) through assignments. Students must score at least 40% in each component separately to pass.' },
  { q: 'Does SMU provide placement assistance for MCom students?', a: 'Yes. SMU offers career support including resume building, LinkedIn optimization, mock interviews, virtual job fairs and access to 150+ corporate hiring partners including EY, Goldman Sachs, LTIMindtree, Accenture, HDFC Ergo, Bajaj Allianz, and more.' },
  { q: 'Can I pursue SMU MCom while working full-time?', a: 'Absolutely. The program is 100% online with live and recorded classes, flexible study hours (15–20 hours/week), and AI-powered learning tools. You can study and work simultaneously without any mandatory campus visits.' },
  { q: 'Is a Project Work mandatory in SMU MCom Semester 4?', a: 'Yes. Semester 4 includes a Research Methodology & Statistical Analysis subject and a Project Work component. The project is evaluated by SMU faculty and helps students apply theoretical knowledge to real-world commerce and finance problems.' },
];

const aiTools = [
  { icon: '📄', title: 'SummarizeMe AI', desc: 'Summarizes video lectures and PDF notes efficiently so you can revise quickly before exams.' },
  { icon: '❓', title: 'QuizMe AI', desc: 'Generates course-specific MCQs and practice quizzes to test your understanding anytime.' },
  { icon: '🤖', title: 'AI Professor', desc: 'A conversational AI bot that answers your course content queries 24/7 without any wait.' },
  { icon: '🗺️', title: 'Learning Path AI', desc: 'Personalizes your study schedule based on your learning pace and upcoming examination dates.' },
];


const MComOnline: React.FC<MComOnlineProps> = ({ }) => {
  const [activeSem, setActiveSem] = useState<1 | 2 | 3 | 4>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<OpenModalState>(null);

  return (
    <>
      {/* ── JSON-LD Course Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Online MCom — Master of Commerce from Sikkim Manipal University',
            description:
              'UGC-approved Online MCom from NAAC A+ Sikkim Manipal University. 24 months, 80 credits, ₹75,000 total fee. Covers corporate finance, accounting, taxation, investment management, and more.',
            provider: {
              '@type': 'EducationalOrganization',
              name: 'Sikkim Manipal University Online',
              sameAs: 'https://unifostedu.com/smu',
              telephone: '+91-7042646766',
            },
            offers: { '@type': 'Offer', price: '75000', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
            courseMode: 'online',
            timeToComplete: 'P24M',
            educationalCredentialAwarded: 'Master of Commerce (MCom)',
            hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', startDate: '2026-01-01' },
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
        id="mcom-hero"
        className="relative min-h-[600px] mt-12 flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/82 to-[#0a1628]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="space-y-5 text-white">
              <nav className="flex items-center gap-2 text-xs text-white/55">
                <a href="/smu" className="hover:text-emerald-400 transition">SMU Online</a>
                <span>/</span>
                <span className="text-emerald-300 font-semibold">MCom Program</span>
              </nav>

              <div className="flex flex-wrap gap-2">
                {['NAAC A+ Accredited', 'UGC Approved', '78% Seats Filled', 'Most Affordable'].map((b) => (
                  <span key={b} className="bg-white/10 border border-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-emerald-200">{b}</span>
                ))}
              </div>

              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                Online MCom Degree<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Master of Commerce
                </span>
              </h1>

              <p className="text-base text-white/75 max-w-lg">
                Build future-ready commerce expertise with an Online MCom from{' '}
                <strong className="text-white">Sikkim Manipal University (SMU)</strong> — NAAC A+ accredited.
                Master corporate finance, accounting, investment management, taxation and more. India's most affordable MCom at just ₹104/day.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: '24', l: 'Months' },
                  { v: '₹18.75K', l: 'Per Semester' },
                  { v: '80', l: 'Credits' },
                  { v: '₹3,125', l: 'EMI/Month' },
                ].map((s) => (
                  <div key={s.l} className="bg-white/8 border border-white/15 rounded-xl p-3 text-center backdrop-blur">
                    <div className="text-xl font-bold text-emerald-300">{s.v}</div>
                    <div className="text-xs text-white/60 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  onClick={() => setOpenModal({ type: 'apply', program: 'Online MCom' })}
                  className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-bold px-7 py-3 rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now — Jan 2026 Batch
                </button>
                <button
                  onClick={() => setOpenModal({ type: 'enquire', program: 'Online MCom' })}
                  className="border border-white/40 text-white px-7 py-3 rounded-xl hover:bg-white/10 transition backdrop-blur"
                >
                  Download Brochure
                </button>
              </div>

              <p className="text-xs text-white/50">
                💳 No-cost EMI from <strong className="text-white/70">₹3,125/month</strong> &nbsp;|&nbsp; Scholarships up to 30% available
              </p>
            </motion.div>

            {/* RIGHT — quick info card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 text-white space-y-4">
              <div className="flex items-center gap-3 mb-1">
                <Image
                  src={optimizeCloudinary('https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipallogo_yduega.jpg')}
                  alt="Sikkim Manipal University Logo"
                  width={52} height={52}
                  className="rounded-xl object-cover"
                />
                <div>
                  <p className="font-bold text-lg leading-tight">Sikkim Manipal University</p>
                  <p className="text-xs text-emerald-300">NAAC A+ · NIRF Ranked · UGC Approved</p>
                </div>
              </div>

              {[
                { label: 'Program', value: 'Online MCom (Master of Commerce)' },
                { label: 'Duration', value: '24 Months (4 Semesters)' },
                { label: 'Mode', value: '100% Online — Live + Recorded' },
                { label: 'Total Fee', value: '₹75,000 (₹18,750/semester)' },
                { label: 'EMI', value: 'Starting ₹3,125/month (no-cost)' },
                { label: 'Eligibility', value: 'Any Bachelor\'s Degree Graduate' },
                { label: 'Credits', value: '80 Credits · 15–20 hrs/week' },
                { label: 'Exam Mode', value: 'AI-Proctored Online Exams' },
                { label: 'Last Date', value: '17th February 2026' },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-sm border-b border-white/10 pb-2 last:border-0 last:pb-0">
                  <span className="text-white/60">{label}</span>
                  <span className="text-white font-semibold text-right max-w-[55%]">{value}</span>
                </div>
              ))}

              <button
                onClick={() => setOpenModal({ type: 'apply', program: 'Online MCom' })}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Apply Now — Free Registration
              </button>
            </motion.div>
          </div>
        </div>
      </section>

    
      <section id="about-mcom" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Online MCom from Sikkim Manipal University — Program Overview
          </h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full mb-7" />
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              The <strong>Online Master of Commerce (MCom) from Sikkim Manipal University (SMU)</strong> is a two-year postgraduate program designed to build future-ready finance and commerce professionals. Delivered through an AI-enabled learning management system, this program provides anytime, anywhere access to high-quality content, live and recorded classes by expert faculty, discussion forums, and online AI-proctored examinations.
            </p>
            <p>
              The curriculum covers essential commerce subjects including <strong>Corporate Financial Management, Advanced Corporate Accounting, Cost Analysis & Control, Audit & Assurance, Strategic Management, Security Analysis & Portfolio Management</strong>, and more. In Semesters 3 and 4, students choose elective tracks in either <strong>Finance</strong> (Corporate Tax, Mergers & Acquisitions) or <strong>Marketing</strong> (International Marketing, E-Business, Advertising Management).
            </p>
            <p>
              India's most affordable online MCom at just <strong>₹75,000 total</strong> (₹18,750 per semester), with no-cost EMI from ₹3,125/month. Exclusive scholarships up to 30% are available for NE region students, defence personnel, differently-abled candidates, and SMU alumni.
            </p>
            <p>
              Fully recognized by <strong>UGC-DEB</strong> and accredited with <strong>NAAC A+</strong>, the SMU Online MCom degree holds the same academic and professional value as a regular campus MCom. Graduates receive a prestigious degree certificate and join the <strong>6 Lakh+ SMU alumni network</strong> spanning top companies in Banking, Finance, Consulting, and more.
            </p>
          </div>
          <button
            onClick={() => setOpenModal({ type: 'apply', program: 'Online MCom' })}
            className="mt-8 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
          >
            Apply Now — Jan 2026 Intake Open
          </button>
        </div>
      </section>

   
      <section className="bg-gradient-to-br from-slate-900 to-[#0a1628] py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Rankings & Accreditations — Sikkim Manipal University
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {rankings.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white/8 border border-white/15 rounded-2xl p-5 text-center backdrop-blur hover:border-emerald-500/40 transition">
                <div className="text-2xl font-extrabold text-emerald-400 leading-tight">{r.label}</div>
                <div className="text-xs text-gray-400 mt-2 leading-snug">{r.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section id="mcom-benefits" className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Online MCom Program Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Why thousands of commerce professionals choose SMU Online MCom every year</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition border border-gray-100">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="mcom-syllabus" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SMU Online MCom Syllabus — Semester-Wise Curriculum
            </h2>
            <p className="text-gray-600">80 credits · 24 months · 4 semesters · 15–20 hours study per week</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {([1, 2, 3, 4] as const).map((sem) => (
              <button key={sem} onClick={() => setActiveSem(sem)}
                className={`px-6 py-2 rounded-xl font-semibold text-sm transition ${activeSem === sem ? 'bg-emerald-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                Semester {sem}
              </button>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-7">
            <h3 className="text-xl font-bold text-gray-800 mb-5">
              Semester {activeSem} — Core Subjects
              {(activeSem === 3 || activeSem === 4) && (
                <span className="ml-3 text-sm font-normal text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  + Choose Finance or Marketing Elective
                </span>
              )}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {semesterData[activeSem].core.map((sub, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                  <span className="mt-0.5 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                  <span className="text-sm text-gray-700">{sub}</span>
                </div>
              ))}
            </div>

            {semesterData[activeSem].electives && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                {semesterData[activeSem].electives!.map((el, ei) => (
                  <div key={ei} className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                    <p className="font-bold text-emerald-700 mb-3 text-sm uppercase tracking-wide">⭐ {el.label}</p>
                    {el.subjects.map((s, si) => (
                      <div key={si} className="flex items-start gap-2 mb-2">
                        <span className="w-5 h-5 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{si + 1}</span>
                        <span className="text-sm text-emerald-800">{s}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="text-center mt-7">
            <button
              onClick={() => setOpenModal({ type: 'enquire', program: 'Online MCom' })}
              className="border-2 border-emerald-600 text-emerald-600 font-semibold px-8 py-3 rounded-xl hover:bg-emerald-600 hover:text-white transition"
            >
              Download Full Syllabus PDF
            </button>
          </div>
        </div>
      </section>

      <section id="mcom-fees" className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            SMU Online MCom — Fee Structure 2025–26
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Course Fee Breakdown</h3>
              <div className="space-y-4">
                {[
                  { label: 'Total Program Fee', value: '₹75,000', highlight: true },
                  { label: 'Per Semester Fee', value: '₹18,750', highlight: false },
                  { label: 'EMI (No-Cost)', value: '₹3,125 / month', highlight: false },
                  { label: 'Application Fee', value: '₹500 (non-refundable)', highlight: false },
                  { label: 'Duration', value: '24 months (4 Semesters)', highlight: false },
                  { label: 'Credits', value: '80 Credits', highlight: false },
                  { label: 'International Fee', value: 'USD 980 (₹245/semester)', highlight: false },
                ].map(({ label, value, highlight }) => (
                  <div key={label} className={`flex justify-between items-center py-3 border-b border-gray-100 last:border-0 ${highlight ? 'text-emerald-600 font-bold' : ''}`}>
                    <span className="text-gray-600">{label}</span>
                    <span className={highlight ? 'text-emerald-600 font-extrabold text-2xl' : 'font-semibold text-gray-800'}>{value}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setOpenModal({ type: 'apply', program: 'Online MCom' })}
                className="w-full mt-7 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                Apply Now — Seats Filling Fast
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">Fee inclusive of all taxes · No hidden charges</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Scholarships & EMI Options</h3>
              <p className="text-gray-500 text-sm mb-6">Exclusive Manipal scholarship scheme for eligible students</p>
              <div className="space-y-4">
                {scholarships.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                    <div className="text-2xl">{s.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">{s.title}</span>
                        <span className="bg-emerald-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{s.pct} OFF</span>
                      </div>
                      <p className="text-gray-500 text-xs mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-teal-50 border border-teal-100 rounded-xl p-4">
                <p className="text-teal-700 text-sm font-semibold mb-1">💳 No-Cost EMI — Just ₹104/Day</p>
                <p className="text-teal-600 text-xs">India's most affordable MCom. Pay annually with zero-interest EMI at ₹3,125/month. Terms & conditions apply.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section id="mcom-admission" className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Eligibility & Admission Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple 4-step online process — no entrance exam, open to graduates from any stream.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Eligibility Criteria</h3>
              <div className="space-y-4">
                {[
                  { icon: '🎓', title: 'Any Graduate (All Streams)', desc: '10+2+3-year bachelor\'s degree from any recognized university — Commerce, Science, Arts, BBA, BCA or any other stream. All graduates are eligible.' },
                  { icon: '📊', title: 'No Minimum % Required', desc: 'Unlike many programs, SMU MCom does not mandate a minimum percentage in graduation. The focus is on your learning commitment.' },
                  { icon: '💼', title: 'Work Experience', desc: 'Not mandatory. Both freshers and working professionals are welcome. No entrance exam required for admission.' },
                  { icon: '🌍', title: 'NRI / Foreign Students', desc: 'Eligible with separate international fee (USD 980 total). AIU equivalence certificate required for non-Indian qualifications.' },
                ].map((e, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">{e.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-800">{e.title}</p>
                      <p className="text-gray-600 text-sm mt-0.5">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute left-8 top-16 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 to-emerald-100" />
              <div className="space-y-6">
                {admissionSteps.map((step, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="flex gap-5 items-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-full flex flex-col items-center justify-center text-white shadow-lg flex-shrink-0 relative z-10">
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
                onClick={() => setOpenModal({ type: 'apply', program: 'Online MCom' })}
                className="w-full mt-8 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                Start Application — Free Registration
              </button>
            </div>
          </div>
        </div>
      </section>

    
      <section id="mcom-career" className="bg-[#0a1628] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Scope After SMU Online MCom</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              SMU MCom graduates are sought after across Banking, Finance, Consulting, E-Commerce, and more — with strong career growth in senior commerce and finance roles.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-bold text-emerald-400 mb-5 uppercase tracking-wider">Top Job Roles</h3>
              <div className="flex flex-wrap gap-3">
                {careerRoles.map((role, i) => (
                  <span key={i} className="bg-white/8 border border-white/15 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-emerald-500/20 hover:border-emerald-400/40 transition">{role}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-emerald-400 mb-5 uppercase tracking-wider">Hiring Industries</h3>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((ind, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center text-sm font-medium hover:border-emerald-500/30 transition">{ind}</div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[{ v: '150+', l: 'Hiring Partners' }, { v: '78%', l: 'Seats Filled' }, { v: '6L+', l: 'Alumni Network' }].map((s) => (
                  <div key={s.l} className="bg-gradient-to-br from-emerald-600/15 to-teal-500/5 border border-emerald-500/20 rounded-xl p-4 text-center">
                    <div className="text-2xl font-extrabold text-emerald-400">{s.v}</div>
                    <div className="text-xs text-gray-400 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Advanced Learning System Designed for Your Course</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Crafted to elevate your online learning experience with 4 intelligent AI tools.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTools.map((tool, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition border border-emerald-50">
                <div className="text-3xl mb-4">{tool.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section id="mcom-faculty" className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Your Expert Faculty</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Learn from PhD holders, gold medalists and industry professionals with decades of expertise in commerce and finance.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-2xl font-bold text-emerald-700 mb-4">
                  {f.name.split(' ').pop()?.charAt(0)}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{f.name}</h3>
                <p className="text-emerald-600 text-xs font-semibold mt-0.5">{f.qual}</p>
                <p className="text-gray-500 text-xs mt-0.5 mb-3">{f.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="bg-gray-50 py-14 px-4 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">Why Choose SMU Online MCom?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ v: '30+', l: 'Years of Quality Education' }, { v: '6 Lakh+', l: 'Alumni Worldwide' }, { v: '530+', l: 'Expert Faculty & Staff' }, { v: '2,500+', l: 'Towns & Cities Covered' }].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl lg:text-5xl font-extrabold text-emerald-600">{s.v}</div>
                <p className="text-gray-600 text-sm mt-2">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section id="mcom-faq" className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions — SMU Online MCom</h2>
            <p className="text-gray-600">Everything you need to know before applying</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-7 py-5 flex justify-between items-center font-semibold text-gray-800 hover:bg-emerald-50 transition text-base">
                  <span className="pr-6">{faq.q}</span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 transition-colors ${openFaq === i ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-6 text-gray-700 text-base leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="bg-gradient-to-r from-emerald-700 to-teal-500 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Advance Your Commerce Career?</h2>
          <p className="text-emerald-100 text-lg mb-3 max-w-2xl mx-auto">
            January 2026 batch — 78% seats already filled. India's most affordable online MCom at ₹75,000 total. Get a UGC-approved degree from NAAC A+ Sikkim Manipal University.
          </p>
          <p className="text-emerald-200 text-sm mb-8">Admission last date: <strong className="text-white">17th February 2026</strong></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setOpenModal({ type: 'apply', program: 'Online MCom' })}
              className="bg-white text-emerald-700 font-bold px-10 py-4 rounded-full hover:bg-emerald-50 transition shadow-xl hover:scale-105">
              Apply Now — Free Registration
            </button>
            <button onClick={() => setOpenModal({ type: 'enquire', program: 'Online MCom' })}
              className="border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white/15 transition hover:scale-105">
              Download Brochure
            </button>
          </div>
          <div className="flex items-center justify-center gap-3 mt-7">
            <FaPhone className="rotate-90 text-emerald-200" />
            <span className="text-emerald-100">Talk to an advisor: </span>
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

export default MComOnline;