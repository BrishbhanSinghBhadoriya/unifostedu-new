'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';
import { optimizeCloudinary } from '@/utils/cloudinary';
import Footer from '@/components/Footer';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal'

type OpenModalState = { type: 'apply' | 'enquire'; program?: string } | null;
type MCAOnlineProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModalState>>;
};


const rankings = [
  { label: 'NAAC A+', sub: 'Accredited University' },
  { label: 'UGC Approved', sub: 'Online Degrees' },
  { label: 'Rank #1', sub: 'Top Private Univ. in NE India' },
  { label: 'Rank 151–200', sub: "India's Top Universities 2025" },
  { label: 'Rank 330', sub: "South Asia's Top Universities 2026" },
  { label: 'AICTE', sub: 'Norms Compliant' },
];

const programBenefits = [
  {
    icon: '💻',
    title: 'Boost Your Career in IT',
    desc: 'Gain in-depth knowledge of the IT domain by leveraging new-age technologies and acquire the technical expertise needed to excel in various IT roles.',
  },
  {
    icon: '🧠',
    title: 'Advanced Technical Knowledge',
    desc: 'Master subjects like bioinformatics, MIS, digital image processing, cloud computing, artificial intelligence and expert systems.',
  },
  {
    icon: '⚡',
    title: 'Cutting-Edge Skills',
    desc: 'Stay updated with the latest tools and trends — programming, software development, web development, AI, ML and more.',
  },
  {
    icon: '🌐',
    title: 'Robust Alumni Network',
    desc: 'Join 6 Lakh+ SMU alumni working across India, the Middle East, Southeast Asia and Europe in leading tech companies.',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Learning Platform',
    desc: 'SummarizeMe AI, QuizMe AI, AI Professor and Learning Path AI — intelligent tools for 24/7 personalised study support.',
  },
  {
    icon: '🎓',
    title: '100% Online — Zero Compromise',
    desc: 'Live + recorded classes, AI-proctored exams, e-library and placement support — all from home, without quitting your job.',
  },
];

const tools = [
  { name: 'Python', img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/ibm_ced3ir.webp' },
  { name: 'Java', img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/ibm_ced3ir.webp' },
  { name: 'JavaScript', img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/ibm_ced3ir.webp' },
  { name: 'Oracle', img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/ibm_ced3ir.webp' },
  { name: 'Visual Studio', img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/ibm_ced3ir.webp' },
  { name: 'Eclipse IDE', img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/ibm_ced3ir.webp' },
  { name: '.NET Framework', img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/ibm_ced3ir.webp' },
];

const semesterData: Record<number, { subjects: string[]; note?: string }> = {
  1: {
    subjects: [
      'Computational Mathematics',
      'Java Programming',
      'Operating Systems',
      'Database Management System',
      'Database Management System Lab',
      'Java Programming Lab',
      'Fundamentals of Computers & IT',
      'Fundamental of Mathematics',
    ],
  },
  2: {
    subjects: [
      'Python Programming',
      'Software Engineering and Unified Modelling Language',
      'Computer Organization and Architecture',
      'Data Structure and Algorithm',
      'Data Structure and Algorithm Lab',
      'Python Programming Lab',
    ],
  },
  3: {
    subjects: [
      '.NET Framework',
      'Computer Network',
      'IT Laws and Practices',
      '.NET Framework Lab',
      'Computer Network Lab',
    ],
    note: 'Elective I (Choose any one): Data Warehousing & Data Mining  OR  Cloud Computing',
  },
  4: {
    subjects: [
      'Mobile Application Development',
      'Angular JS, React JS, and VUE JS',
      'Project Work',
    ],
    note: 'Elective II (Choose any one): Machine Learning  OR  Distributed System and Grid Computing',
  },
};

const careerRoles = [
  'Software Developer', 'Web Developer', 'DevOps Engineer', 'QA Engineer',
  'UI/UX Designer', 'Software Architect', 'Network Engineer', 'IT Project Manager',
  'Database Administrator', 'IT Consultant', 'Cloud Engineer', 'AI/ML Developer',
];

const industries = [
  'Information Technology', 'Cybersecurity', 'Cloud Computing', 'E-Commerce',
  'Gaming', 'Telecommunication', 'R&D', 'Manufacturing & Retail',
];

const faculty = [
  { name: 'Dr. Sourav Dhar', qual: 'MTech, Ph.D.', role: 'Professor & Director', desc: 'Senior IEEE member. Research in 6G, cloud computing, IoT, WSN. 60+ SCI/Scopus papers. Heads CDOE, Sikkim Manipal University.' },
  { name: 'Dr. Kushal Pokhrel', qual: 'MTech, Ph.D.', role: 'Associate Professor & Deputy Director', desc: 'PhD from SMU in Computer Science. 19+ years of teaching. Expertise in computer networking and electronic devices.' },
  { name: 'Dr. Md Ruhul Islam', qual: 'MTech, PhD', role: 'Adjunct Faculty', desc: 'Senior Software Developer at NullPointer Corp., USA. 45+ research papers. Expertise in cloud computing, cybersecurity and 4G/mobile networking.' },
  { name: 'Mr. Arun Chaudhary', qual: 'B.E, MTech', role: 'Assistant Professor', desc: 'MTech from IIIT Allahabad in Wireless Communication. 13 years in distance education. Research in deep learning and causal reasoning.' },
  { name: 'Mr. Tirupati Bhattacharya', qual: 'BCA, MCA, MTech', role: 'Assistant Professor', desc: 'MTech from Jadavpur University. Former Group B Central Government researcher in ICT System Management.' },
  { name: 'Mrs. Joyashri Basak', qual: 'B.Tech, M.Tech', role: 'Assistant Professor', desc: 'Expert in .NET, PHP, SQL, Java, C/C++. Research in image processing and data analysis. MTech from SMIT.' },
];

const scholarships = [
  { icon: '🪖', title: 'Defence Personnel', pct: '20%', desc: 'Active and retired defence personnel and their families.' },
  { icon: '🧡', title: 'Differently-Abled', pct: '20%', desc: 'Students with differently-abled status as per government norms.' },
  { icon: '🎓', title: 'SMU Alumni', pct: '20%', desc: 'Previous SMU graduates enrolling for another program.' },
  { icon: '🏔️', title: 'NE Region Students', pct: '30%', desc: 'Students from Sikkim and other North-East states of India.' },
];

const faqs = [
  { q: 'What is the eligibility for SMU Online MCA?', a: 'Any graduate with minimum 50% marks (45% for reserved category) from a recognized university. CS/IT/BCA graduates are directly eligible. Graduates from other streams (Science, Commerce, Arts) are eligible with a compulsory bridge course in Fundamentals of Computers & IT and/or Mathematics in Semester 1.' },
  { q: 'Is the SMU Online MCA degree valid for government jobs?', a: 'Yes. SMU Online MCA is UGC-DEB approved and holds the same validity as a regular on-campus MCA degree for government jobs, promotions, higher education and competitive exams across India.' },
  { q: 'What is the total fee and EMI option for SMU MCA?', a: 'Total course fee is ₹98,000 (₹24,500 per semester). No-cost EMI starts at ₹4,083/month. Scholarships up to 30% available for NE students, defence personnel, differently-abled, and SMU alumni.' },
  { q: 'Does SMU MCA have a bridge course for non-CS graduates?', a: 'Yes. Students from non-CS/IT streams must complete compulsory bridge courses — Fundamentals of Computers & IT (if no prior CS background) and Fundamental of Mathematics (if no maths in 10+2 or graduation). These run alongside Semester 1 subjects.' },
  { q: 'What electives are available in SMU Online MCA?', a: 'Semester 3 offers Elective I: Data Warehousing & Data Mining OR Cloud Computing. Semester 4 offers Elective II: Machine Learning OR Distributed System and Grid Computing. Students choose one from each elective slot.' },
  { q: 'How are exams conducted for SMU Online MCA?', a: 'Exams are AI-proctored and conducted online from home. Students need a laptop/desktop with Windows OS and Google Chrome. Need 75% course completion to be eligible for term-end exams. Results are published on the student portal.' },
  { q: 'What tools and technologies are taught in SMU MCA?', a: 'The program covers Java, Python, .NET Framework, Angular JS, React JS, Vue JS, Oracle, SQL, Data Structures, Cloud Computing, Machine Learning, Mobile App Development, and more. Labs for DBMS, Java and Python are included.' },
  { q: 'Does SMU provide placement assistance for MCA students?', a: 'Yes. SMU offers career counseling, resume building, LinkedIn optimization, mock interviews, virtual job fairs and access to 150+ corporate hiring partners including EY, LTIMindtree, Accenture, HP, and more.' },
  { q: 'Can working professionals pursue SMU Online MCA?', a: 'Absolutely. The program is 100% online with live + recorded classes, AI-powered LMS and flexible study hours (15–20 hours/week). You can study and work simultaneously without any campus visits.' },
  { q: 'Is Semester 4 Project Work mandatory in SMU MCA?', a: 'Yes. Semester 4 includes a Project Work component which is evaluated by SMU faculty. The project allows students to apply their technical learnings to a real-world problem, strengthening their portfolio for placements.' },
];

const admissionSteps = [
  { num: '01', title: 'Fill Application', desc: 'Enter basic details, education background, and work experience. Pay the ₹500 application fee (non-refundable).' },
  { num: '02', title: 'Pay Semester Fee', desc: 'Pay ₹24,500 for the first semester or opt for full payment of ₹98,000. No-cost EMI available from ₹4,083/month.' },
  { num: '03', title: 'Upload Documents', desc: 'Upload graduation marksheets, ID proof, category certificate (if applicable), and other required documents.' },
  { num: '04', title: 'University Approval', desc: 'SMU evaluates your documents within 5 working days. Confirmed admission notified via email & SMS. LMS access in 48 hrs.' },
];

const aiTools = [
  { icon: '📄', title: 'SummarizeMe AI', desc: 'Instantly summarizes video lectures and PDF notes so you can revise efficiently before exams.' },
  { icon: '❓', title: 'QuizMe AI', desc: 'Generates course-specific MCQs and practice quizzes to test your knowledge anytime.' },
  { icon: '🤖', title: 'AI Professor', desc: 'A 24/7 conversational AI bot that answers your course content queries instantly.' },
  { icon: '🗺️', title: 'Learning Path AI', desc: 'Personalizes your study schedule based on your learning pace and upcoming exam dates.' },
];


const MCAOnline: React.FC<MCAOnlineProps> = ({ }) => {
  const [activeSem, setActiveSem] = useState<1 | 2 | 3 | 4>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
 const [openModal, setOpenModal] = useState<OpenModalState>(null);
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Online MCA — Master of Computer Applications from Sikkim Manipal University',
            description:
              'UGC-approved Online MCA from Sikkim Manipal University (SMU). 24 months, 80 credits, ₹98,000 total fee. NAAC A+ accredited. Covers Java, Python, AI, Cloud, ML.',
            provider: {
              '@type': 'EducationalOrganization',
              name: 'Sikkim Manipal University Online',
              sameAs: 'https://unifostedu.com/smu',
              telephone: '+91-7042646766',
            },
            offers: {
              '@type': 'Offer',
              price: '98000',
              priceCurrency: 'INR',
              availability: 'https://schema.org/InStock',
            },
            courseMode: 'online',
            timeToComplete: 'P24M',
            educationalCredentialAwarded: 'Master of Computer Applications (MCA)',
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'online',
              startDate: '2026-01-01',
            },
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
      <section
        id="mca-hero"
        className="relative min-h-[600px] mt-12 flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#030e1a]/95 via-[#030e1a]/82 to-[#030e1a]/45" />

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
              <nav className="flex items-center gap-2 text-xs text-white/55">
                <a href="/smu" className="hover:text-blue-400 transition">SMU Online</a>
                <span>/</span>
                <span className="text-blue-300 font-semibold">MCA Program</span>
              </nav>

              {/* badges */}
              <div className="flex flex-wrap gap-2">
                {['NAAC A+ Accredited', 'UGC Approved', '83% Seats Filled', 'Admissions Open'].map((b) => (
                  <span key={b} className="bg-white/10 border border-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-blue-200">
                    {b}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                Online MCA Degree<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Master of Computer Applications
                </span>
              </h1>

              <p className="text-base text-white/75 max-w-lg">
                Become a future-ready IT professional with an Online MCA from{' '}
                <strong className="text-white">Sikkim Manipal University (SMU)</strong> — NAAC A+ institution.
                Master Java, Python, AI, Cloud Computing, Machine Learning and more. Study 100% online without quitting your job.
              </p>

              {/* quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: '24', l: 'Months' },
                  { v: '₹24.5K', l: 'Per Semester' },
                  { v: '80', l: 'Credits' },
                  { v: '150+', l: 'Hiring Partners' },
                ].map((s) => (
                  <div key={s.l} className="bg-white/8 border border-white/15 rounded-xl p-3 text-center backdrop-blur">
                    <div className="text-xl font-bold text-blue-300">{s.v}</div>
                    <div className="text-xs text-white/60 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  onClick={() => setOpenModal({ type: 'apply', program: 'Online MCA' })}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold px-7 py-3 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now — Jan 2026 Batch
                </button>
                <button
                  onClick={() => setOpenModal({ type: 'enquire', program: 'Online MCA' })}
                  className="border border-white/40 text-white px-7 py-3 rounded-xl hover:bg-white/10 transition backdrop-blur"
                >
                  Download Brochure
                </button>
              </div>

              <p className="text-xs text-white/50">
                💳 No-cost EMI from <strong className="text-white/70">₹4,083/month</strong> &nbsp;|&nbsp; Scholarships up to 30% available
              </p>
            </motion.div>

            {/* RIGHT — info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 text-white space-y-4"
            >
              <div className="flex items-center gap-3 mb-1">
                <Image
                  src={optimizeCloudinary('https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipallogo_yduega.jpg')}
                  alt="Sikkim Manipal University Logo"
                  width={52} height={52}
                  className="rounded-xl object-cover"
                />
                <div>
                  <p className="font-bold text-lg leading-tight">Sikkim Manipal University</p>
                  <p className="text-xs text-blue-300">NAAC A+ · NIRF Ranked · UGC Approved</p>
                </div>
              </div>

              {[
                { label: 'Program', value: 'Online MCA (General)' },
                { label: 'Duration', value: '24 Months (4 Semesters)' },
                { label: 'Mode', value: '100% Online — Live + Recorded' },
                { label: 'Total Fee', value: '₹98,000 (₹24,500/semester)' },
                { label: 'EMI', value: 'Starting ₹4,083/month (no-cost)' },
                { label: 'Eligibility', value: 'Graduation with min. 50% marks' },
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
                onClick={() => setOpenModal({ type: 'apply', program: 'Online MCA' })}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Apply Now — Free Registration
              </button>
            </motion.div>
          </div>
        </div>
      </section>

     
      <section id="about-mca" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Online MCA from Sikkim Manipal University — Program Overview
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-7" />
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              The <strong>Online Master of Computer Applications (MCA) from Sikkim Manipal University (SMU)</strong> is a two-year postgraduate program designed to build future-ready IT professionals. Delivered through an AI-enabled Learning Management System, this program equips students with cutting-edge skills in computer applications, programming languages, artificial intelligence, cloud computing, and deep learning.
            </p>
            <p>
              Students can attend live and recorded classes, interact with peers and faculty through discussion forums, write online AI-proctored exams, and build a professional network — all without quitting their full-time jobs. The program is structured across 4 semesters covering 80 credits, with optional electives in Cloud Computing, Machine Learning, Data Warehousing, and Distributed Systems.
            </p>
            <p>
              Graduates from non-CS streams (Science, Commerce, Arts, BBA) are eligible with a compulsory <strong>bridge course</strong> in Fundamentals of Computers & IT and/or Mathematics run alongside Semester 1 — making this program accessible to learners from any academic background.
            </p>
            <p>
              Recognized by <strong>UGC-DEB</strong> and accredited with <strong>NAAC A+</strong>, the SMU Online MCA degree carries the same value as a regular on-campus MCA. Upon successful completion, students join the prestigious <strong>6 Lakh+ SMU alumni network</strong>.
            </p>
          </div>
          <button
            onClick={() => setOpenModal({ type: 'apply', program: 'Online MCA' })}
            className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
          >
            Apply Now — Jan 2026 Intake Open
          </button>
        </div>
      </section>
      <section className="bg-gradient-to-br from-slate-900 to-[#030e1a] py-14 px-4">
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
                className="bg-white/8 border border-white/15 rounded-2xl p-5 text-center backdrop-blur hover:border-blue-500/40 transition"
              >
                <div className="text-2xl font-extrabold text-blue-400 leading-tight">{r.label}</div>
                <div className="text-xs text-gray-400 mt-2 leading-snug">{r.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="mca-benefits" className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online MCA Program Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Why 83% of seats for the January 2026 batch are already filled
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {programBenefits.map((b, i) => (
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

    
      <section id="mca-syllabus" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SMU Online MCA Syllabus — Semester-Wise Curriculum
            </h2>
            <p className="text-gray-600">
              80 credits · 24 months · 4 semesters · 15–20 hours study per week
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
                    ? 'bg-blue-600 text-white shadow-md'
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
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {semesterData[activeSem].subjects.map((sub, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                  <span className="mt-0.5 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700">{sub}</span>
                </div>
              ))}
            </div>

            {semesterData[activeSem].note && (
              <div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-blue-700 text-sm font-semibold">
                  ⭐ {semesterData[activeSem].note}
                </p>
              </div>
            )}
          </div>

          <div className="text-center mt-7">
            <button
              onClick={() => setOpenModal({ type: 'enquire', program: 'Online MCA' })}
              className="border-2 border-blue-600 text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition"
            >
              Download Full Syllabus PDF
            </button>
          </div>
        </div>
      </section>

   
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Tools & Technologies You'll Master
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Java', 'Python', 'JavaScript', '.NET Framework',
              'Angular JS', 'React JS', 'Vue JS', 'Oracle/SQL',
              'Cloud Computing', 'Machine Learning', 'Android Dev', 'Data Structures',
            ].map((tool) => (
              <span
                key={tool}
                className="bg-white border border-gray-200 text-gray-700 font-semibold px-5 py-2 rounded-full shadow-sm hover:border-blue-400 hover:text-blue-600 transition text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

   
      <section id="mca-fees" className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            SMU Online MCA — Fee Structure 2025–26
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Fee card */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Course Fee Breakdown</h3>
              <div className="space-y-4">
                {[
                  { label: 'Total Program Fee', value: '₹98,000', highlight: true },
                  { label: 'Per Semester Fee', value: '₹24,500', highlight: false },
                  { label: 'EMI (No-Cost)', value: '₹4,083 / month', highlight: false },
                  { label: 'Application Fee', value: '₹500 (non-refundable)', highlight: false },
                  { label: 'Duration', value: '24 months (4 Semesters)', highlight: false },
                  { label: 'Credits', value: '80 Credits', highlight: false },
                ].map(({ label, value, highlight }) => (
                  <div key={label} className={`flex justify-between items-center py-3 border-b border-gray-100 last:border-0 ${highlight ? 'text-blue-600 font-bold text-lg' : ''}`}>
                    <span className="text-gray-600">{label}</span>
                    <span className={highlight ? 'text-blue-600 font-extrabold text-2xl' : 'font-semibold text-gray-800'}>{value}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setOpenModal({ type: 'apply', program: 'Online MCA' })}
                className="w-full mt-7 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                Apply Now — Seats Filling Fast
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">Fee inclusive of all taxes · No hidden charges</p>
            </div>

            {/* Scholarships */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Scholarships & EMI Options</h3>
              <p className="text-gray-500 text-sm mb-6">Exclusive Manipal scholarship scheme for eligible students</p>
              <div className="space-y-4">
                {scholarships.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <div className="text-2xl">{s.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">{s.title}</span>
                        <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{s.pct} OFF</span>
                      </div>
                      <p className="text-gray-500 text-xs mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-cyan-50 border border-cyan-100 rounded-xl p-4">
                <p className="text-cyan-700 text-sm font-semibold mb-1">💳 No-Cost EMI — Just ₹137/Day</p>
                <p className="text-cyan-600 text-xs">Stress-free learning. Pay annually with zero interest EMI at ₹4,083/month. Terms & conditions apply.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section id="mca-admission" className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Eligibility & Admission Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple 4-step online process. No entrance exam. Open to graduates from all streams.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Eligibility */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Eligibility Criteria</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: '🎓',
                    title: 'CS/IT Graduates (Direct)',
                    desc: 'Bachelor\'s in Computer Applications / Computer Science / IT from a recognized university. Min. 50% marks (45% for reserved category).',
                  },
                  {
                    icon: '📚',
                    title: 'Other Graduates (with Bridge Course)',
                    desc: 'Graduates from Science, Commerce, Arts, BBA, BMS etc. are eligible but must complete compulsory bridge courses in Computers & IT and/or Mathematics in Semester 1.',
                  },
                  {
                    icon: '📊',
                    title: 'Minimum Marks',
                    desc: 'Minimum 50% aggregate marks in graduation. Relaxation to 45% for SC/ST and other reserved category candidates.',
                  },
                  {
                    icon: '🌍',
                    title: 'NRI / Foreign Students',
                    desc: 'Eligible. AIU equivalence certificate required for non-Indian qualifications. Separate international fee structure applies.',
                  },
                ].map((e, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">{e.icon}</div>
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
              <div className="hidden lg:block absolute left-8 top-16 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 to-blue-100" />
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
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex flex-col items-center justify-center text-white shadow-lg flex-shrink-0 relative z-10">
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
                onClick={() => setOpenModal({ type: 'apply', program: 'Online MCA' })}
                className="w-full mt-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                Start Application — Free Registration
              </button>
            </div>
          </div>
        </div>
      </section>


      <section id="mca-career" className="bg-[#030e1a] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Career Scope After SMU Online MCA
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              MCA graduates from SMU are placed in top IT roles across IT services, cloud, cybersecurity, e-commerce and more — with strong salary growth and global opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-bold text-blue-400 mb-5 uppercase tracking-wider">Top Job Roles</h3>
              <div className="flex flex-wrap gap-3">
                {careerRoles.map((role, i) => (
                  <span key={i} className="bg-white/8 border border-white/15 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-blue-500/20 hover:border-blue-400/40 transition">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-blue-400 mb-5 uppercase tracking-wider">Hiring Industries</h3>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((ind, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center text-sm font-medium hover:border-blue-500/30 transition">
                    {ind}
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { v: '150+', l: 'Hiring Partners' },
                  { v: '85%+', l: 'Placement Rate' },
                  { v: '6L+', l: 'Alumni Network' },
                ].map((s) => (
                  <div key={s.l} className="bg-gradient-to-br from-blue-600/15 to-cyan-500/5 border border-blue-500/20 rounded-xl p-4 text-center">
                    <div className="text-2xl font-extrabold text-blue-400">{s.v}</div>
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
              Our Advanced Learning System Designed for Your Course
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Crafted to elevate your online learning experience with 4 intelligent AI tools.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTools.map((tool, i) => (
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

  
      <section id="mca-faculty" className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Your Expert Faculty
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from experienced professors, Ph.D. holders, and industry experts with decades of research and teaching experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mb-4">
                  {f.name.split(' ').pop()?.charAt(0)}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{f.name}</h3>
                <p className="text-blue-600 text-xs font-semibold mt-0.5">{f.qual}</p>
                <p className="text-gray-500 text-xs mt-0.5 mb-3">{f.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="bg-gray-50 py-14 px-4 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Why Choose SMU Online MCA?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: '30+', l: 'Years of Quality Education' },
              { v: '6 Lakh+', l: 'Alumni Worldwide' },
              { v: '530+', l: 'Expert Faculty & Staff' },
              { v: '2,500+', l: 'Towns & Cities Covered' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl lg:text-5xl font-extrabold text-blue-600">{s.v}</div>
                <p className="text-gray-600 text-sm mt-2">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section id="mca-faq" className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions — SMU Online MCA
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
                  className="w-full text-left px-7 py-5 flex justify-between items-center font-semibold text-gray-800 hover:bg-blue-50 transition text-base"
                >
                  <span className="pr-6">{faq.q}</span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 transition-colors ${openFaq === i ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
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

     
      <section className="bg-gradient-to-r from-blue-700 to-cyan-500 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Launch Your IT Career?
          </h2>
          <p className="text-blue-100 text-lg mb-3 max-w-2xl mx-auto">
            January 2026 batch — 83% seats already filled. Don't miss out. Get a UGC-approved MCA from NAAC A+ Sikkim Manipal University — starting just ₹137/day.
          </p>
          <p className="text-blue-200 text-sm mb-8">Last date: <strong className="text-white">17th February 2026</strong></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setOpenModal({ type: 'apply', program: 'Online MCA' })}
              className="bg-white text-blue-700 font-bold px-10 py-4 rounded-full hover:bg-blue-50 transition shadow-xl hover:scale-105"
            >
              Apply Now — Free Registration
            </button>
            <button
              onClick={() => setOpenModal({ type: 'enquire', program: 'Online MCA' })}
              className="border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white/15 transition hover:scale-105"
            >
              Download Brochure
            </button>
          </div>
          <div className="flex items-center justify-center gap-3 mt-7">
            <FaPhone className="rotate-90 text-blue-200" />
            <span className="text-blue-100">Talk to an advisor: </span>
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
  />)}
    </>
  );
};

export default MCAOnline;