'use client';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import PageContent from '@/components/PageContent/PageContent';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  FaAward, FaBars, FaBriefcase, FaBuilding,
  FaCertificate, FaChartLine, FaCircleCheck,
  FaClock, FaGraduationCap, FaLaptop,
  FaMoneyBillWave, FaPhone,
} from "react-icons/fa6";

type ModalState = { type: 'apply' | 'enquiry'; program?: string };

// ─── Static data (outside component to avoid re-renders) ─────────────────────

const SECTION_ITEMS = [
  { id: "overview",   label: "Overview" },
  { id: "highlights", label: "Why Choose" },
  { id: "eligibility",label: "Eligibility" },
  { id: "duration",   label: "Duration & Mode" },
  { id: "fees",       label: "Fees Structure" },
  { id: "syllabus",   label: "Syllabus" },
  { id: "career",     label: "Career Scope" },
  { id: "admission",  label: "Admission Process" },
  { id: "unifost",    label: "How UNIFOST Helps" },
  { id: "faq",        label: "FAQs" },
];

const FAQ_DATA = [
  {
    question: "Is Manipal Online BA degree valid?",
    answer:
      "Yes. Manipal University Jaipur is UGC-entitled and NAAC A+ accredited, and its online degrees are recognized at par with on-campus degrees in India.",
  },
  {
    question: "Can I do Manipal Online BA while working?",
    answer:
      "Yes. The entire programme is designed for flexible online learning, with recorded lectures and online assessments. Many learners are working professionals.",
  },
  {
    question: "What is the total fee for Manipal Online BA?",
    answer:
      "For Indian students, the total program fee is affordable with flexible payment options. You should always cross-check the latest fee on the official website before applying.",
  },
  {
    question: "Do I have to visit the campus for classes or exams?",
    answer:
      "No, it is a fully online programme, including classes and exams, conducted through the Online Manipal platform and proctored systems.",
  },
  {
    question: "Can I pursue an MA/MBA after Manipal Online BA?",
    answer:
      "Yes. Since it is a recognized bachelor's degree, you can appear for postgraduate entrance exams or apply for MA, MBA, MSW, B.Ed programs that accept UGC-recognized BA degrees.",
  },
];

const SPECIALIZATIONS = [
  { name: "English",           for: "Students interested in literature, writing, communication, and teaching careers" },
  { name: "Political Science", for: "Those aiming for civil services, public policy, law, or political analysis" },
  { name: "Economics",         for: "Students interested in economic analysis, policy-making, banking, and research" },
  { name: "Psychology",        for: "Learners interested in human behavior, counseling, HR, and social services" },
  { name: "Sociology",         for: "Those interested in social research, community development, and NGO work" },
];

const JOB_ROLES = [
  "Content Writer/Editor", "HR Executive", "Social Media Manager",
  "Public Relations Assistant", "Education & Training Coordinator",
  "Social Worker", "Research Assistant", "NGO Program Manager",
  "Customer Success Specialist", "Policy Analyst (entry level)",
  "Journalism roles (editorial, reporting)",
];

const INDUSTRIES = [
  "Education & Teaching", "Media & Journalism", "NGOs & Social Development",
  "Corporate Communications", "Public Administration",
  "Human Resources", "Content Creation & Digital Media",
];

const ADMISSION_STEPS = [
  { step: 1, title: "Fill Application Form",                     desc: "Provide basic details, academic history, and (if applicable) work experience." },
  { step: 2, title: "Pay Application / Registration Fee",        desc: "This creates your application profile." },
  { step: 3, title: "Upload Documents",                          desc: "10th & 12th marksheets, ID proof, photo, etc." },
  { step: 4, title: "Pay Programme Fee (Full or Semester-wise)", desc: "Choose your payment mode (EMI / semester)." },
  { step: 5, title: "Confirm Admission",                         desc: "Once documents & payment are verified, university issues enrolment confirmation and LMS access." },
];

const HIGHER_STUDIES = [
  { title: "MA Programs",        desc: "Specialize in your chosen field" },
  { title: "MBA",                desc: "Move into management roles" },
  { title: "MSW",                desc: "Social work and community development" },
  { title: "B.Ed",               desc: "Teaching and education careers" },
  { title: "Law (LLB)",          desc: "Legal profession" },
  { title: "Mass Communication", desc: "Media and journalism" },
  { title: "Competitive Exams",  desc: "UPSC, SSC, Banking" },
  { title: "Research Programs",  desc: "M.Phil, Ph.D opportunities" },
];

const ACCREDITATIONS = [
  { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac_sh5g6b.webp',  title: 'NAAC A+ Accredited University' },
  { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp',   title: 'UGC-entitled Online Degrees' },
  { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nirf_f5xen9.webp',  title: "Amongst India's top 60 Universities in 2025" },
  { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp', title: 'AICTE Norms Compliant' },
  { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wes_zuxwfs.webp',   title: 'Globally Recognized Online Degrees' },
  { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327034/acu_oyjzvj.webp',   title: 'Member of ACU' },
  { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327200/icas_wyryup.webp',  title: 'ICAS Canada' },
  { img: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327238/iqas_bieryy.webp',  title: 'IQAS' },
];

const COMPANY_LOGOS = [
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company_vjgouc.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company1_tktbp7.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327090/company9_p4pgg3.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/com10_cm37v8.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany4_h5nana.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company6_rnuajo.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany5_qs6bgc.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/adove_jtmiou.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/samsung_sosfqv.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327152/ey_ph2bsx.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327173/ibm_ced3ir.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327172/hp_b4ylow.webp",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327860/tata_n9jnwt.png",
  "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327171/hero_krubph.webp",
];

const FOOTER_PROGRAMS = [
  "BBA General - MUJ Online", "BBA Finance & Accounting - MUJ Online",
  "BBA Digital Marketing - MUJ Online", "BBA Marketing - MUJ Online",
  "BBA Entrepreneurship & Family Business - MUJ Online", "BBA Human Resource Management - MUJ Online",
  "BBA Data Analytics - MUJ Online", "BBA Retail & E-commerce Management - MUJ Online",
  "BCA General - MUJ Online", "BCA Data Science & Analytics - MUJ Online",
  "BCA Cyber Security - MUJ Online", "BCA Cloud Computing - MUJ Online",
  "B.Com General - MUJ Online", "MBA General - MUJ Online",
  "MBA HR & Finance - MUJ Online", "MBA Finance & Marketing - MUJ Online",
  "MBA Marketing & HR - MUJ Online", "MBA Marketing & Business Analytics - MUJ Online",
  "MBA Finance & Business Analytics - MUJ Online", "MBA Project Management - MUJ Online",
  "MBA Retail Management & Quick Commerce - MUJ Online",
  "MBA Artificial Intelligence in Banking & Finance - MUJ Online",
  "MCA AI & Data Science - MUJ Online", "MCA Cyber Security - MUJ Online",
  "MCA Cloud Computing - MUJ Online", "MCA Comprehensive Emerging Technologies - MUJ Online",
  "MCA Artificial Intelligence & Machine Learning - MUJ Online",
  "M.Com General - MUJ Online", "MA Economics - MUJ Online",
  "MA Journalism & Mass Communication - MUJ Online",
];

// ─── Component ────────────────────────────────────────────────────────────────

const ManipalBAPage = () => {
  const [activeSection, setActiveSection]     = useState(SECTION_ITEMS[0]?.id ?? "");
  const [openModal,     setOpenModal]         = useState<ModalState | null>(null);
  const [openIndex,     setOpenIndex]         = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Auto-popup after 3 s
  useEffect(() => {
    const t = setTimeout(() => setOpenModal({ type: 'apply' }), 3000);
    return () => clearTimeout(t);
  }, []);

  // IntersectionObserver for sidebar active section
  // Use a ref so the effect doesn't re-run when sectionItems "changes"
  const sectionIdsRef = useRef(SECTION_ITEMS.map((s) => s.id));
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, threshold: 0.25, rootMargin: "-45% 0px -45% 0px" }
    );
    sectionIdsRef.current.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []); // ← empty array: runs once, no stale-closure issue

  const toggleFAQ = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? null : idx));

  return (
    // ── ROOT ──
    // KEY RENDERING FIX:
    //   • The header is position:fixed (h-14/16/20).
    //   • Without pt-14/16/20 on the flex wrapper, the sidebar + main
    //     start at y=0 and render BEHIND the header → invisible.
    //   • Adding matching top-padding pushes all content below the header.
    <div
      className="poppins overflow-x-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* ── Fixed Header ── */}
      <header
        role="banner"
        aria-label="Site header"
        className="w-full fixed top-0 left-0 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 z-50 h-14 sm:h-16 lg:h-20"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <a href="/" aria-label="Manipal University Jaipur – home" className="flex items-center gap-2 flex-shrink-0">
              <img
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg"
                alt="Manipal University Jaipur logo"
                className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto"
                width={120}
                height={48}
              />
            </a>

            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4">
              {/* Mobile hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                className="lg:hidden p-2 border rounded-md hover:bg-gray-100 transition-colors"
              >
                <FaBars className="w-5 h-5 text-gray-700" aria-hidden="true" />
              </button>

              {/* Phone – desktop */}
              <a
                href="tel:+917042646766"
                aria-label="Call us: +91 7042646766"
                className="hidden sm:flex items-center gap-1.5 md:gap-2 text-gray-700 font-medium text-xs sm:text-sm md:text-base hover:text-orange-600 transition-colors"
              >
                <FaPhone className="text-base sm:text-lg" aria-hidden="true" />
                <span className="hidden lg:inline">+91 7042646766</span>
                <span className="lg:hidden">Call</span>
              </a>

              {/* Phone – mobile icon only */}
              <a
                href="tel:+917042646766"
                aria-label="Call us"
                className="sm:hidden flex items-center justify-center w-8 h-8 bg-orange-100 rounded-full text-orange-600 hover:bg-orange-200 transition-colors"
              >
                <FaPhone className="text-base" aria-hidden="true" />
              </a>

              <button
                onClick={() => setOpenModal({ type: 'apply' })}
                aria-label="Apply now for Manipal Online BA"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                <span className="hidden sm:inline">Apply Now</span>
                <span className="sm:hidden">Apply</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Body wrapper: flex row, pushed below fixed header ── */}
      <div className="pt-14 sm:pt-16 lg:pt-20">

        {/* ── Sidebar (PageContent handles its own fixed/sticky positioning) ── */}
        <PageContent
          sectionItems={SECTION_ITEMS}
          activeSection={activeSection}
          ismobilemenuopen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* ── Main content ── */}
        <main
          id="main-content"
          role="main"
          aria-label="Manipal Online BA program details"
          className="flex-1 min-w-0"
          // Schema.org microdata on the main content region
          itemScope
          itemType="https://schema.org/Course"
        >
          {/* Hidden microdata fields */}
          <meta itemProp="name"        content="Online BA – Bachelor of Arts" />
          <meta itemProp="description" content="UGC-approved 3-year online BA from Manipal University Jaipur (NAAC A+)" />
          <meta itemProp="courseMode"  content="online" />
          <meta itemProp="educationalLevel" content="Bachelor" />

          {/* ──────────────────── HERO ──────────────────── */}
          <section
            aria-label="Hero banner – Manipal Online BA"
            className="relative w-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] overflow-hidden"
          >
            <div className="absolute inset-0">
              <Image
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327058/bba-online-image_xxyvt0.webp"
                alt="A student learning with Manipal's Online BA Program"
                
                className="object-cover object-center"
                priority
                sizes="100vw"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] flex items-center">
              <div className="flex-1 max-w-2xl lg:max-w-3xl text-white py-6 sm:py-8 md:py-12 lg:py-20">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-3 sm:space-y-4 md:space-y-6"
                >
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                    <img
                      src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg"
                      alt="Manipal University Jaipur Logo"
                      className="h-6 sm:h-8 w-auto"
                      width={80}
                      height={32}
                    />
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <span className="block">Online BA Degree Program</span>
                    <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                      Manipal University Jaipur
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                    UGC-approved 3-year online BA program with flexible learning, multiple specializations,
                    and career-focused curriculum from NAAC A+ accredited Manipal University Jaipur.
                  </p>

                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <button
                      onClick={() => setOpenModal({ type: 'apply' })}
                      aria-label="Apply now for Manipal Online BA"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Apply Now
                    </button>
                    <a
                      href="tel:+917042646766"
                      aria-label="Call UNIFOST counselor"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 border border-white/30"
                    >
                      <FaPhone className="inline mr-2" aria-hidden="true" />
                      Call Now
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ──────────────────── OVERVIEW ──────────────────── */}
          <section
            id="overview"
            aria-labelledby="overview-heading"
            className="py-12 sm:py-16 md:py-20 bg-white"
            itemScope
            itemType="https://schema.org/CollegeOrUniversity"
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2
                  id="overview-heading"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                  itemProp="name"
                >
                  Manipal University Jaipur &amp; Online BA Overview
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                  <Image
                    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp"
                    alt="Manipal University Jaipur Campus"
                    width={600}
                    height={400}
                    className="w-full rounded-2xl shadow-lg"
                    itemProp="image"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed" itemProp="description">
                    <strong>MUJ</strong> belongs to the Manipal group and is recognized by <strong>UGC</strong>.
                    It has an <strong>A+ grade from NAAC</strong>. The online programs are entitled by UGC;
                    thus, these programs will carry the same academic value as any on-campus degree.
                  </p>
                  <p className="text-gray-700 leading-relaxed">The <strong>Online BA</strong> is:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700" aria-label="Online BA key facts">
                    <li>A 3-year undergraduate degree (6 semesters)</li>
                    <li>Offered fully online via the Online Manipal platform</li>
                    <li>Designed for students after 10+2 and working professionals who want structured arts education with flexibility</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed font-semibold mt-4">The programme focuses on:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Humanities and social sciences fundamentals</li>
                    <li>Critical thinking and analytical skills</li>
                    <li>Communication, research and writing abilities</li>
                    <li>Modern skill-building for contemporary careers</li>
                  </ul>
                </div>
              </div>

              {/* At a Glance */}
              <div
                className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 md:p-10 border border-orange-100"
                aria-label="Manipal Online BA at a glance"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Manipal Online BA at a Glance</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { icon: <FaGraduationCap className="text-orange-600 text-3xl mb-2" />, title: "Duration",    text: "3 Years (6 Semesters)",    itemprop: "timeRequired" },
                    { icon: <FaMoneyBillWave  className="text-orange-600 text-3xl mb-2" />, title: "Total Fee",  text: "Affordable with EMI options", itemprop: null },
                    { icon: <FaCircleCheck    className="text-orange-600 text-3xl mb-2" />, title: "Eligibility",text: "10+2 (40% minimum)",        itemprop: "coursePrerequisites" },
                    { icon: <FaAward          className="text-orange-600 text-3xl mb-2" />, title: "Recognition",text: "UGC Entitled, NAAC A+",      itemprop: null },
                  ].map(({ icon, title, text, itemprop }) => (
                    <div key={title} className="bg-white rounded-xl p-4 shadow-md">
                      {icon}
                      <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
                      <p className="text-gray-600 text-sm" {...(itemprop ? { itemProp: itemprop } : {})}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ──────────────────── WHY CHOOSE ──────────────────── */}
          <section
            id="highlights"
            aria-labelledby="highlights-heading"
            className="py-12 sm:py-16 md:py-20 bg-gray-50"
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 id="highlights-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Manipal Online BA?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {[
                  {
                    icon: <FaCertificate className="text-orange-600 text-4xl flex-shrink-0" />,
                    title: "1. Recognized & Trusted Degree",
                    content: (
                      <p className="text-gray-700 leading-relaxed">
                        The entitlement from UGC, combined with NAAC A+ accreditation, makes the degree valid for
                        higher studies, jobs in private and public sectors, and competitive exams where a recognized
                        bachelor's is required.
                      </p>
                    ),
                  },
                  {
                    icon: <FaBriefcase className="text-orange-600 text-4xl flex-shrink-0" />,
                    title: "2. Career-Focused Curriculum",
                    content: (
                      <>
                        <p className="text-gray-700 leading-relaxed mb-2">The syllabus encompasses subjects such as:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                          <li>Literature, political science, economics</li>
                          <li>Psychology, sociology, communication skills</li>
                          <li>Research methods and analytical thinking</li>
                        </ul>
                      </>
                    ),
                  },
                  {
                    icon: <FaLaptop className="text-orange-600 text-4xl flex-shrink-0" />,
                    title: "3. Flexible Learning for Students & Working Professionals",
                    content: (
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Learn anywhere, at your own pace</li>
                        <li>Access recorded lectures & e-content 24/7</li>
                        <li>Ideal for students wanting to work and study simultaneously</li>
                      </ul>
                    ),
                  },
                  {
                    icon: <FaChartLine className="text-orange-600 text-4xl flex-shrink-0" />,
                    title: "4. Multiple Specializations",
                    content: (
                      <>
                        <p className="text-gray-700 leading-relaxed mb-3">Students can choose specializations such as:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                          {SPECIALIZATIONS.map((s) => <li key={s.name}>{s.name}</li>)}
                        </ul>
                      </>
                    ),
                  },
                ].map(({ icon, title, content }) => (
                  <article key={title} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-start gap-4">
                      {icon}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                        {content}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ──────────────────── ELIGIBILITY ──────────────────── */}
          <section
            id="eligibility"
            aria-labelledby="eligibility-heading"
            className="py-12 sm:py-16 md:py-20 bg-white"
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 id="eligibility-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Eligibility Criteria for Manipal Online BA
                </h2>
              </div>

              <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 sm:p-8 border border-orange-100">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Basic Eligibility:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Completed 10+2 from a recognized national or state board in any stream</li>
                      <li>Minimum marks: 40% aggregate or above</li>
                      <li>Relaxation for reserved categories (as per university norms)</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-700">
                      <strong>No Age Limit:</strong> All age groups can apply. Foreign/NRI students are eligible
                      with equivalent qualifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ──────────────────── DURATION & MODE ──────────────────── */}
          <section
            id="duration"
            aria-labelledby="duration-heading"
            className="py-12 sm:py-16 md:py-20 bg-gray-50"
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 id="duration-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Duration &amp; Mode of Learning
                </h2>
              </div>

              <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FaClock className="text-orange-600" aria-hidden="true" />
                      Duration
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Standard Duration:</strong> 3 years (6 semesters)</li>
                      <li><strong>Maximum Duration:</strong> Up to 6 years (flexible completion)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <FaLaptop className="text-orange-600" aria-hidden="true" />
                      Learning Mode
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Online learning management system (LMS)</li>
                      <li>Recorded video lectures + e-texts</li>
                      <li>Live doubt-clearing sessions (as per schedule)</li>
                      <li>Online assignments and proctored exams</li>
                      <li>Access to e-books &amp; digital library</li>
                      <li>Dedicated student mentor support</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                    <p className="text-gray-700 font-semibold mb-2">This structure makes it ideal for:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Students who want to avoid relocation/hostel costs</li>
                      <li>Working professionals wanting a degree upgrade without quitting their job</li>
                      <li>UPSC/SSC aspirants preparing for competitive exams</li>
                      <li>Career switchers looking to formalize their education</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ──────────────────── FEES ──────────────────── */}
          <section
            id="fees"
            aria-labelledby="fees-heading"
            className="py-12 sm:py-16 md:py-20 bg-white"
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 id="fees-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Manipal Online BA Fees &amp; Payment Structure
                </h2>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden" aria-label="Manipal Online BA fee structure">
                    <thead>
                      <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                        <th scope="col" className="px-4 py-4 text-left font-semibold">Category</th>
                        <th scope="col" className="px-4 py-4 text-left font-semibold">Program Features</th>
                        <th scope="col" className="px-4 py-4 text-left font-semibold">Payment Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-gray-900">Indian Students</td>
                        <td className="px-4 py-4 text-gray-700">Affordable fee structure with quality education</td>
                        <td className="px-4 py-4 text-gray-700">Easy EMIs, Pay-per-semester mode</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-gray-900">Financial Aid</td>
                        <td className="px-4 py-4 text-gray-700">No-cost EMI plans available</td>
                        <td className="px-4 py-4 text-gray-700">Scholarships for eligible students</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-4 font-semibold text-gray-900">Value</td>
                        <td className="px-4 py-4 text-gray-700">High ROI with recognized degree</td>
                        <td className="px-4 py-4 text-gray-700">Flexible payment options</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 bg-orange-50 rounded-xl p-4 border border-orange-100">
                  <p className="text-gray-700 font-semibold mb-2">Additional Information:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Scholarship options (merit, defense, alumni, etc.)</li>
                    <li>EMI / instalment options on semester payments</li>
                    <li>No-cost EMI plans through partner financial institutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ──────────────────── SYLLABUS ──────────────────── */}
          <section
            id="syllabus"
            aria-labelledby="syllabus-heading"
            className="py-12 sm:py-16 md:py-20 bg-gray-50"
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 id="syllabus-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Manipal Online BA Syllabus &amp; Specializations (Overview)
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Core Subjects</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Foundation courses in humanities and social sciences</li>
                    <li>Communication and writing skills</li>
                    <li>Research methodology</li>
                    <li>Critical thinking and analytical skills</li>
                    <li>Contemporary social issues</li>
                    <li>Indian and world history/culture</li>
                    <li>Environmental studies</li>
                    <li>Computer applications</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Specializations</h3>
                  <div className="space-y-4">
                    {SPECIALIZATIONS.map((spec) => (
                      <div key={spec.name} className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">{spec.name}</h4>
                        <p className="text-sm text-gray-600">{spec.for}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white rounded-xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Semester-Wise Curriculum Overview</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((sem) => (
                    <div key={sem} className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                      <h4 className="font-bold text-orange-700 mb-3">Semester {sem}</h4>
                      <ul className="text-sm text-gray-700 space-y-1" aria-label={`Semester ${sem} topics`}>
                        <li>• Core discipline subjects</li>
                        <li>• Foundation courses</li>
                        <li>• Skill enhancement</li>
                        <li>• Elective subjects</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ──────────────────── CAREER ──────────────────── */}
          <section
            id="career"
            aria-labelledby="career-heading"
            className="py-12 sm:py-16 md:py-20 bg-white"
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 id="career-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Career Scope After Manipal Online BA
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 sm:p-8 border border-orange-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaBriefcase className="text-orange-600" aria-hidden="true" />
                    Job Roles After Online BA
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {JOB_ROLES.map((role) => <li key={role}>{role}</li>)}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 sm:p-8 border border-orange-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaBuilding className="text-orange-600" aria-hidden="true" />
                    Industries That Hire BA Graduates
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    {INDUSTRIES.map((ind) => <li key={ind}>{ind}</li>)}
                  </ul>
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <p className="text-gray-700 font-semibold mb-2">Online BA is especially useful for:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Students who want to pursue MA/MBA later</li>
                      <li>UPSC/SSC aspirants</li>
                      <li>Working professionals wanting to upgrade qualifications</li>
                      <li>Career switchers moving into education, media, or social work</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-200">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Higher Studies Options After BA</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {HIGHER_STUDIES.map((opt) => (
                    <div key={opt.title} className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <h4 className="font-bold text-blue-700 mb-2">{opt.title}</h4>
                      <p className="text-sm text-gray-600">{opt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ──────────────────── WHO SHOULD CHOOSE ──────────────────── */}
          <section
            aria-labelledby="who-heading"
            className="py-12 sm:py-16 md:py-20 bg-gray-50"
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 id="who-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Who Should Choose Manipal Online BA?
                </h2>
              </div>
              <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li><strong>Students who want flexibility</strong> – perfect for those who cannot relocate or attend full-time college</li>
                  <li><strong>UPSC/SSC aspirants</strong> – the subjects support competitive exam preparation</li>
                  <li><strong>Students aiming for MA/MBA</strong> – strong foundation for postgraduate studies</li>
                  <li><strong>Working professionals</strong> – upgrade your profile while keeping your job</li>
                  <li><strong>Career switchers</strong> – specializations give direction for new opportunities</li>
                  <li><strong>Those interested in humanities</strong> – build a career in writing, research, teaching, or social sciences</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ──────────────────── ADMISSION ──────────────────── */}
          <section
            id="admission"
            aria-labelledby="admission-heading"
            className="py-12 sm:py-16 md:py-20 bg-white"
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 id="admission-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  How Admission Works – Step-by-Step Process
                </h2>
              </div>

              <ol className="max-w-4xl mx-auto space-y-4" aria-label="Admission steps">
                {ADMISSION_STEPS.map((step, idx) => (
                  <motion.li
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100 shadow-md list-none"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        aria-label={`Step ${step.step}`}
                        className="flex-shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg"
                      >
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-700">{step.desc}</p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </section>

          {/* ──────────────────── UNIFOST ──────────────────── */}
          <section
            id="unifost"
            aria-labelledby="unifost-heading"
            className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-orange-50 to-yellow-50"
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 id="unifost-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  How UNIFOST Helps You with Manipal Online BA
                </h2>
              </div>
              <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Choosing a university is not just about clicking "Apply Now." Students often struggle with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                  <li>Comparing Manipal with other UGC-approved online BAs</li>
                  <li>Understanding which specialization fits their career goals</li>
                  <li>Evaluating fees vs ROI for arts degrees</li>
                  <li>Managing work + study balance</li>
                  <li>Planning higher studies after BA</li>
                </ul>
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">At UNIFOST, we help you:</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Check UGC & NAAC approvals", desc: "of universities you're considering (no confusion, only verified info)." },
                      { title: "Compare Manipal Online BA with other top online BA options", desc: "on Fees, Specializations, Career services, Flexibility." },
                      { title: "Choose the right specialization", desc: "(English, Political Science, Economics, Psychology, Sociology) based on your goals." },
                      { title: "Get step-by-step support in the admission process", desc: "from shortlisting to document upload and fee planning." },
                      { title: "Career counseling and roadmap planning", desc: "for higher studies or job opportunities after BA." },
                    ].map(({ title, desc }) => (
                      <div key={title} className="flex items-start gap-3">
                        <FaCircleCheck className="text-orange-600 text-xl flex-shrink-0 mt-1" aria-hidden="true" />
                        <div>
                          <p className="text-gray-700 font-semibold mb-1">{title}</p>
                          <p className="text-gray-600 text-sm">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ──────────────────── FAQs ──────────────────── */}
          <section
            id="faq"
            aria-labelledby="faq-heading"
            className="py-12 sm:py-16 md:py-20 bg-white"
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  FAQs About Manipal Online BA
                </h2>
              </div>

              <div
                className="max-w-4xl mx-auto space-y-4"
                itemScope
                itemType="https://schema.org/FAQPage"
              >
                {FAQ_DATA.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={openIndex === index}
                      aria-controls={`faq-answer-${index}`}
                      className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                    >
                      <span className="font-semibold text-gray-900 pr-4" itemProp="name">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-orange-600 flex-shrink-0" aria-hidden="true" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          id={`faq-answer-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                          itemScope
                          itemProp="acceptedAnswer"
                          itemType="https://schema.org/Answer"
                        >
                          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed" itemProp="text">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ──────────────────── FINAL CTA ──────────────────── */}
          <section
            aria-labelledby="cta-heading"
            className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white"
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Final Thoughts</h2>
                <p className="text-lg sm:text-xl leading-relaxed mb-6">
                  The Manipal Online BA is a strong choice for students and professionals who want:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg mb-8 text-left max-w-2xl mx-auto">
                  <li>A recognized, flexible arts degree</li>
                  <li>Humanities foundation + modern skill development</li>
                  <li>Reasonable fees compared to many private on-campus programs</li>
                  <li>The option to work, prepare for competitive exams, or pursue side projects while studying</li>
                  <li>Multiple specialization options for targeted career paths</li>
                </ul>
                <p className="text-xl sm:text-2xl font-semibold">
                  That's where platforms like UNIFOST make a difference – by helping you turn a confusing decision into a clear, confident one.
                </p>
                <div className="mt-8">
                  <button
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    aria-label="Apply now for Manipal Online BA"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ──────────────────── ACCREDITATIONS ──────────────────── */}
          <section
            aria-labelledby="accred-heading"
            className="py-12 sm:py-16 lg:py-20 bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 id="accred-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Rankings &amp; <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Accreditations</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                  Recognized by leading accreditation bodies and ranked among India's top universities
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {ACCREDITATIONS.map((item) => (
                  <div key={item.title} className="group">
                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-6">
                        <Image
                          src={item.img}
                          alt={`${item.title} Logo`}
                          width={400}
                          height={260}
                          className="w-full h-full max-h-24 sm:max-h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="px-3 py-4 sm:px-4 sm:py-5">
                        <p className="text-xs sm:text-sm font-medium text-gray-800 text-center leading-tight group-hover:text-orange-600 transition-colors duration-300">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ──────────────────── CITIES ──────────────────── */}
          <section
            aria-labelledby="cities-heading"
            className="py-16 bg-gradient-to-br from-blue-50 to-orange-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="cities-heading" className="text-3xl font-bold text-center mb-12">
                Online Manipal Programs <span className="text-orange-600">Available Across India</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {['Delhi NCR', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Chandigarh', 'Indore'].map((city) => (
                  <div key={city} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
                    <div className="text-2xl mb-2" aria-hidden="true">📍</div>
                    <h3 className="font-bold text-sm">{city}</h3>
                    <p className="text-xs text-gray-600">Online Programs</p>
                  </div>
                ))}
              </div>
              <p className="text-center mt-8 text-gray-600 max-w-3xl mx-auto">
                Manipal University Jaipur's online programs are accessible from anywhere in India.
                Students from Delhi, Mumbai, Bangalore, and 2000+ cities trust MUJ for quality online education.
              </p>
            </div>
          </section>

          {/* ──────────────────── COMPARISON TABLE ──────────────────── */}
          <section id="QuickComparison" aria-labelledby="compare-heading" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="compare-heading" className="text-3xl font-bold text-center mb-12">
                <span className="text-orange-600">Online vs Regular</span> Degree Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse" aria-label="Online vs regular degree comparison">
                  <thead>
                    <tr className="bg-orange-500 text-white">
                      <th scope="col" className="p-4 text-left">Feature</th>
                      <th scope="col" className="p-4 text-center">Online Manipal</th>
                      <th scope="col" className="p-4 text-center">Regular Campus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['UGC Recognition',   '✅ Yes',             '✅ Yes'],
                      ['Degree Validity',   '✅ Same as Campus',  '✅ Valid'],
                      ['Flexibility',       '✅ Study Anytime',   '❌ Fixed Schedule'],
                      ['Location',          '✅ From Anywhere',   '❌ Campus Only'],
                      ['Cost',              '✅ More Affordable', '❌ Higher Fees'],
                      ['Placement Support', '✅ 100% Assistance', '✅ Available'],
                    ].map(([feature, online, regular], i) => (
                      <tr key={feature} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="p-4 font-semibold">{feature}</td>
                        <td className="p-4 text-center">{online}</td>
                        <td className="p-4 text-center">{regular}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ──────────────────── PLACEMENT RECORD ──────────────────── */}
          <section id="PlacementRecord" aria-labelledby="placement-heading" className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 id="placement-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-orange-600">Placement Record</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Manipal Online has achieved impressive placement outcomes across domains. Graduates have secured roles in management, IT, consulting, finance, and marketing.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Placement Highlights</h3>
                  <div className="space-y-6">
                    {[
                      { pct: "90%",    color: "from-green-500 to-green-600",   title: "Employability Rate",      sub: "For postgraduates across all programs" },
                      { pct: "500+",   color: "from-blue-500 to-blue-600",     title: "Recruiters Associated",   sub: "With Manipal University Jaipur Online" },
                      { pct: "₹7 LPA", color: "from-orange-500 to-orange-600", title: "Average MBA Salary",     sub: "Competitive compensation packages" },
                      { pct: "24/7",   color: "from-purple-500 to-purple-600", title: "Placement Portal",       sub: "Real-time job listings and opportunities" },
                    ].map(({ pct, color, title, sub }) => (
                      <div key={title} className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 bg-gradient-to-r ${color} rounded-full flex items-center justify-center flex-shrink-0`} aria-hidden="true">
                            <span className="text-white text-lg font-bold">{pct}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg text-gray-900">{title}</h4>
                            <p className="text-gray-600 text-sm">{sub}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Domains</h3>
                  <div className="space-y-4 mb-6">
                    {[
                      { emoji: "💼", color: "bg-orange-500", label: "Management Roles" },
                      { emoji: "💻", color: "bg-blue-500",   label: "IT & Technology" },
                      { emoji: "📊", color: "bg-green-500",  label: "Consulting" },
                      { emoji: "💰", color: "bg-purple-500", label: "Finance & Banking" },
                      { emoji: "📈", color: "bg-red-500",    label: "Marketing & Sales" },
                    ].map(({ emoji, color, label }) => (
                      <div key={label} className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${color} rounded-full flex items-center justify-center`} aria-hidden="true">
                          <span className="text-white text-sm">{emoji}</span>
                        </div>
                        <span className="text-gray-700 font-semibold">{label}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setOpenModal({ type: 'enquiry' })}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                    aria-label="View Manipal placement statistics"
                  >
                    View Placement Statistics
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ──────────────────── PLACEMENT PARTNERS ──────────────────── */}
          <section id="PlacementPartners" aria-labelledby="partners-heading" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 id="partners-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-orange-600">Placement Partners</span>
                </h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Placement Partners</h3>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { emoji: "💼", color: "from-blue-50 to-blue-100",     name: "Infosys" },
                      { emoji: "🏢", color: "from-green-50 to-green-100",   name: "Wipro" },
                      { emoji: "🎯", color: "from-purple-50 to-purple-100", name: "Accenture" },
                      { emoji: "📊", color: "from-orange-50 to-orange-100", name: "TCS" },
                      { emoji: "🔍", color: "from-red-50 to-red-100",       name: "Deloitte" },
                      { emoji: "⚡", color: "from-yellow-50 to-yellow-100", name: "Capgemini" },
                    ].map(({ emoji, color, name }) => (
                      <div key={name} className={`bg-gradient-to-br ${color} rounded-xl p-4 text-center`}>
                        <div className="text-2xl mb-2" aria-hidden="true">{emoji}</div>
                        <div className="font-semibold text-gray-800">{name}</div>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-3" aria-label="Additional placement partners">
                    {["Cognizant", "Amazon", "EY", "HDFC Bank"].map((c) => (
                      <li key={c} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-700">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Services Division</h3>
                  <div className="space-y-4 mb-6">
                    {[
                      { emoji: "📝", color: "bg-orange-500", title: "Resume Building",        desc: "Professional resume crafting and optimization" },
                      { emoji: "🎤", color: "bg-blue-500",   title: "Mock Interviews",         desc: "Practice sessions with industry experts" },
                      { emoji: "🤝", color: "bg-green-500",  title: "Professional Networking", desc: "Connect with industry professionals and alumni" },
                      { emoji: "💼", color: "bg-purple-500", title: "Job Placements",          desc: "Direct placement opportunities with partner companies" },
                    ].map(({ emoji, color, title, desc }) => (
                      <div key={title} className="flex items-start gap-3">
                        <div className={`w-8 h-8 ${color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`} aria-hidden="true">
                          <span className="text-white text-sm">{emoji}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
                          <p className="text-gray-600 text-sm">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setOpenModal({ type: 'enquiry' })}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                    aria-label="Explore career opportunities at Manipal Online"
                  >
                    Explore Career Opportunities
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ──────────────────── COMPANY LOGOS ──────────────────── */}
          <section
            aria-labelledby="companies-heading"
            className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-100 to-gray-200"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 id="companies-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Our Students Work At{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Top Companies
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                  Join the ranks of successful graduates working at leading organizations worldwide
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                {COMPANY_LOGOS.map((src, i) => (
                  <div key={i} className="group">
                    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                      <div className="aspect-square flex items-center justify-center">
                        <Image
                          width={100}
                          height={100}
                          src={src}
                          alt={`Hiring partner logo ${i + 1}`}
                          className="h-12 sm:h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12 sm:mt-16">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 sm:p-12 text-white max-w-4xl mx-auto">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Join Them?</h3>
                  <p className="text-lg sm:text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                    Start your journey with Manipal University Online and unlock endless career opportunities
                  </p>
                  <button
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                    aria-label="Apply now for Manipal Online BA"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ──────────────────── FOOTER ──────────────────── */}
          <footer
            role="contentinfo"
            className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 pt-12 sm:pt-16 relative overflow-hidden mt-8"
          >
            <div
              className="absolute inset-0 opacity-50"
              aria-hidden="true"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
                {/* Brand */}
                <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg"
                      alt="Manipal University Jaipur"
                      className="h-10 w-auto"
                      width={80}
                      height={40}
                    />
                    <span className="text-xl font-bold text-white">Online Manipal</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    UGC-entitled, NAAC A+ accredited online degrees designed for modern learners.
                    Transform your career with globally recognized programs.
                  </p>
                  <div className="flex space-x-4" aria-label="Social media links">
                    {[{ icon: '📘', label: 'Facebook' }, { icon: '📷', label: 'Instagram' }, { icon: '🐦', label: 'Twitter' }, { icon: '💼', label: 'LinkedIn' }].map((s) => (
                      <button key={s.label} aria-label={s.label} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                        <span className="text-lg" aria-hidden="true">{s.icon}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Programs */}
                <nav aria-label="Programs navigation">
                  <h4 className="text-white font-bold mb-4 text-lg">Programs</h4>
                  <ul className="space-y-3 text-sm">
                    {['MBA', 'BBA', 'MCA', 'BCA', 'M.Com', 'B.Com', 'MAJMC'].map((p) => (
                      <li key={p}>
                        <button onClick={() => setOpenModal({ type: 'apply' })} className="hover:text-orange-400 transition-colors text-left">
                          {p}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Resources */}
                <nav aria-label="Resources navigation">
                  <h4 className="text-white font-bold mb-4 text-lg">Resources</h4>
                  <ul className="space-y-3 text-sm">
                    {[
                      { name: 'Admissions',       href: '#admission' },
                      { name: 'Scholarships',      href: '#fees' },
                      { name: 'Placements',        href: '#PlacementRecord' },
                      { name: 'FAQs',              href: '#faq' },
                      { name: 'Quick Comparison',  href: '#QuickComparison' },
                      { name: 'Fees Structure',    href: '#fees' },
                    ].map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="hover:text-orange-400 transition-colors">{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Contact */}
                <div className="space-y-4">
                  <h4 className="text-white font-bold mb-4 text-lg">Contact Us</h4>
                  <address className="not-italic space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <span className="text-orange-400">📞</span>
                      </div>
                      <a href="tel:+917042646766" className="text-sm hover:text-orange-400 transition-colors">+91 7042646766</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                        <span className="text-orange-400">✉️</span>
                      </div>
                      <a href="mailto:info@unifostedu.com" className="text-sm hover:text-orange-400 transition-colors">info@unifostedu.com</a>
                    </div>
                  </address>
                  <Button
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                    aria-label="Apply now for Manipal Online BA"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>

              {/* Keywords footer */}
              <div className="border-t border-white/10 pt-8 mb-8">
                <h4 className="text-lg font-bold mb-6 text-white text-center">
                  Popular Programs &amp; Specializations – Manipal University Jaipur (MUJ)
                </h4>
                <nav aria-label="Popular programs">
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {FOOTER_PROGRAMS.map((keyword) => (
                      <button
                        key={keyword}
                        title={keyword}
                        onClick={() => setOpenModal({ type: "apply" })}
                        className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 border border-white/20 hover:border-orange-500"
                      >
                        {keyword.length > 25 ? `${keyword.substring(0, 25)}…` : keyword}
                      </button>
                    ))}
                  </div>
                </nav>
              </div>

              {/* Copyright */}
              <div className="pt-8 pb-6 text-center text-sm text-gray-400 border-t border-white/10">
                <p>&copy; {new Date().getFullYear()} Manipal University Online. All rights reserved.</p>
                <p className="mt-2 text-xs">UGC-entitled | NAAC A+ Accredited | Globally Recognized</p>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* ── Single Modal instance (de-duplicated) ── */}
      {openModal && (
        <ApplyEnquiryModal
          open
          onOpenChange={(v) => !v && setOpenModal(null)}
          title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
          subtitle={openModal.type === 'apply'
            ? 'Fill the quick form to begin your admission process'
            : 'Share your details and our counselor will reach out'}
          imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp"
          universityName="Manipal University Jaipur"
          defaultProgram="BA"
          formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
        />
      )}
    </div>
  );
};

export default ManipalBAPage;