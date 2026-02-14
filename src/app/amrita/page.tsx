"use client";

import React, { useState } from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaChevronUp,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaBars,
  FaPlay,
  FaGraduationCap,
  FaGlobe,
  FaBriefcase,
  FaAward
} from 'react-icons/fa';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import { OpenModalState } from '../../../types/Modal';
import EnquiryForm from '@/components/EnquiryForm';
import UniversityDateSlider from '@/components/UniversityDateSlider';
export default function AmritaOnlinePage() {
  const [activeTab, setActiveTab] = useState('general');
   
   const [open, setOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeCourseSlide, setActiveCourseSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStudyAbroadTab, setActiveStudyAbroadTab] = useState<'exchange' | 'abroad' | 'integrated' | 'summer'>('exchange');
  const [openModal, setOpenModal] = useState<OpenModalState>(null);
  const studyAbroadContent = {
    exchange: {
      title: "Student Exchange",
      description: "Student exchange programs that enable students to complete their final year projects at the host university abroad. This program is for one semester or 6 months. Students can apply during their pre-final semester and have the opportunity to complete their final year project/courses at the host university. No tuition fees at the host university during exchange programs, making global exposure affordable.",
      images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1770023266/u5_krydrf.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023264/u6_s2wxmw.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023264/u7_uo1ia5.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u3_zuoxo2.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u1_u0cuqy.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u4_qimyhn.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023262/u8_i4r9cz.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u2_d3q36u.svg","https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u9_ezzorf.svg"]
    },
    abroad: {
      title: "Study Abroad",
      description: "Study abroad and exchange programs with top universities in the USA and Europe. Experience global education with our Study Abroad programs. Immerse yourself in new cultures while earning credits towards your degree. Our partner universities offer a wide range of courses suitable for various disciplines.",
      images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1770023266/u5_krydrf.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023264/u6_s2wxmw.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023264/u7_uo1ia5.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u3_zuoxo2.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u1_u0cuqy.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u4_qimyhn.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023262/u8_i4r9cz.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u2_d3q36u.svg","https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u9_ezzorf.svg"]
    },
    integrated: {
      title: "3+1+X Integrated Masters Program",
      description: "3+1+X Integrated Master's programs that offer opportunities for global higher education. Fast-track your education with our Integrated Masters Program. Complete your Bachelor's and Master's degrees in a shorter timeframe through our international partnerships. Partnerships with top universities such as UC Davis, University of Barcelona, Oakland University, and UC San Diego.",
      images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1770023266/u5_krydrf.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023264/u6_s2wxmw.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023264/u7_uo1ia5.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u3_zuoxo2.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u1_u0cuqy.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u4_qimyhn.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023262/u8_i4r9cz.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u2_d3q36u.svg","https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u9_ezzorf.svg"]
    },
    summer: {
      title: "Summer Program",
      description: "Summer programs at international partner universities for cultural immersion and academic enrichment. Make the most of your summer break with our short-term international programs. Gain valuable international exposure and skills in just a few weeks. Perfect for students looking for a quick but impactful global experience.",
      images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1770023266/u5_krydrf.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023264/u6_s2wxmw.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023264/u7_uo1ia5.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u3_zuoxo2.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u1_u0cuqy.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u4_qimyhn.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023262/u8_i4r9cz.svg", "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u2_d3q36u.svg","https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u9_ezzorf.svg"]
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const testimonials = [
    {
      name: "Sonal T.",
      text: "Enrolling in Amrita's online BCA program in June 2022 was one of the best decisions of my life. As an international student from Nigeria, I was impressed by its practical, hands-on approach and comprehensive instructor guidance. Their support helped me gain confidence in programming and secure a job as a Data Certification Executive. The program's Communicative English course also helped me build a stronger resume and LinkedIn profile. Its flexibility and comprehensive online format empowered me to live out my professional aspirations, and I highly recommend it.",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763102289/sonal_c8xgej.jpg"
    },
    {
      name: "Sneha Das",
      text: "Enrolling in Amrita's online BCA program in June 2022 was one of the best decisions of my life. As an international student from Nigeria, I was impressed by its practical, hands-on approach and comprehensive instructor guidance. Their support helped me gain confidence in programming and secure a job as a Data Certification Executive. The program's Communicative English course also helped me build a stronger resume and LinkedIn profile. Its flexibility and comprehensive online format empowered me to live out my professional aspirations, and I highly recommend it.",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1763101215/Sneha_tmk0yf.jpg"
    },
  ];

  const courses = [
    {
      title: "Online BCA",
      duration: "3 years",
      fees: "Rs. 1,35,000-1,65,000",
      description: "Online BCA courses for those interested in IT with latest specializations in Artificial Intelligence and Data Science",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bcom_ra3yam.webp"
    },
    {
      title: "Online BBA",
      duration: "3 years",
      fees: "Rs. 1,35,000-2,50,000",
      description: "Online BBA courses for those interested in business management and entrepreneurship with thease specializations in Data Analytics, Digital Marketing & Sales",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327056/bba_qnepdk.webp"
    },
    {
      title: "Online MBA",
      duration: "2 years",
      fees: "Rs. 1,70,000-2,60,000",
      description: "Online MBA courses with specializations in AI, ESG, Finance, Marketing, and HR",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp"
    },
    {
      title: "Online MCA",
      duration: "2 years",
      fees: "Rs. 1,40,000 -1,95,000",
      description: "Online MCA courses with the latest specializations in Artificial Intelligence and Cybersecurity",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp"
    },
    {
      title: "Online B.Com",
      duration: "3 years",
      fees: "Rs. 1,20,000 - 2,85,000",
      description: "Online B.Com with ACCA for commerce students And specilizations are Taxation and Finance – Integrated with CA subjects ",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bcom_ra3yam.webp"
    },
    {
      title: "Online M.Com",
      duration: "2 years",
      fees: "Rs. 90,000 - 1,20,000",
      description: "Online M.Com with CPA for commerce students",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bcom_ra3yam.webp"
    }
  ];

  const faqData = {
    general: [
      {
        question: "What is Amrita Online?",
        answer: "Amrita Online, formerly known as Amrita AHEAD (Amrita Higher Education for All through Distance) is the online learning initiative of Amrita Vishwa Vidyapeetham offering UGC entitled online programs. It was founded on the noble idea of providing quality education to all. The online university degree programs offered by Amrita Online are set at the same high academic standards as their on-campus counterparts."
      },
      {
        question: "Is Amrita Online part of Amrita Vishwa Vidyapeetham?",
        answer: "Yes, Amrita Online is an integral part of Amrita Vishwa Vidyapeetham. It operates under the same university framework and maintains the same academic standards as on-campus programs."
      },
      {
        question: "Is the Amrita Vishwa Vidyapeetham online degree valid and recognized?",
        answer: "Absolutely. Amrita Online degrees are UGC-entitled, which means they are officially recognized by India's University Grants Commission. These degrees hold the same legal validity as traditional on-campus degrees. The programs also have AICTE approval for technical subjects, WES equivalence for USA and Canada, and are globally recognized."
      },
      {
        question: "Is Amrita Online UGC-approved?",
        answer: "Yes, Amrita Online programs are UGC-entitled. The UGC has granted Amrita Vishwa Vidyapeetham the authority to offer online degree programs that carry full academic recognition."
      },
      {
        question: "Who can apply for Amrita Online programs?",
        answer: "Undergraduate programs are open to students who have completed Class 12th from any recognized board. Postgraduate programs require completion of a relevant bachelor's degree. Both fresh graduates and working professionals can apply."
      },
      {
        question: "Why should I choose Amrita Online degree programs from Amrita Vishwa Vidyapeetham?",
        answer: "Amrita Online offers India's #8 ranked university credentials (NIRF 2025), NAAC A++ accreditation (the highest grade), flexible learning schedules designed for working professionals, study abroad opportunities in USA and Europe, expert faculty with 800+ PhD holders, comprehensive placement assistance with 50% average salary growth, and proven student outcomes. Students from 50+ countries and all 28 Indian states trust Amrita Online."
      },
      {
        question: "Is Amrita Online good for working professionals?",
        answer: "Yes, Amrita Online is specifically designed with working professionals in mind. The programs feature weekend live classes, flexible recorded content for self-paced learning, proctored online exams from home, industry-aligned curriculum, and specially designed schedules that allow you to balance professional and personal commitments."
      },
      {
        question: "Is the Amrita online degree equivalent to an on-campus degree?",
        answer: "Yes, Amrita Online degrees are fully equivalent to on-campus degrees. The UGC entitlement ensures that online degrees are treated equally with traditional degrees for all purposes including government jobs, higher education, and professional certifications. This overcomes the usual stigma associated with distance learning."
      },
      {
        question: "Is Amrita Vishwa Vidyapeetham online accredited by NAAC?",
        answer: "Yes, Amrita Vishwa Vidyapeetham has received NAAC A++ accreditation, the highest grade awarded by the National Assessment and Accreditation Council. This applies to the entire university including its online programs."
      },
      {
        question: "Can international students apply to Amrita Online programs?",
        answer: "Yes, Amrita Online welcomes international students from all countries. The programs are designed to be accessible globally, with students currently enrolled from over 50 countries."
      }
    ],
    academic: [
      {
        question: "What are the learning methods at Amrita Online?",
        answer: "Amrita Online offers a comprehensive learning experience with Live Classes (real-time interactive LIVE sessions held on weekends), Recorded Content (structured e-learning content including video lectures, whitepapers, quizzes for flexible, self-paced study), Proctored Online Exams (secure, proctored online environment from your home), and Discussion Forums (LMS-based forums for collaborative and flexible interaction)."
      },
      {
        question: "What support systems are available?",
        answer: "Students get access to a robust Learning Management System (LMS) platform that brings together live classes, recorded content, assignments, and forums. Academic support, career counseling, and personalized guidance are available whenever needed. There's also a dedicated placement support team working towards getting alumni in touch with potential employers."
      },
      {
        question: "What is the faculty quality at Amrita Online?",
        answer: "Amrita Online has more than 2,000 faculty members in the Amrita network, including 800+ PhD holders. Faculty members have decades of teaching experience, industry mentorship bringing real-world perspectives, and actively participate in research to stay updated with latest developments. Guest lectures by international experts and industry leaders are also conducted regularly."
      },
      {
        question: "How does industry integration work?",
        answer: "The curriculum is industry-aligned with industry-driven case studies, industry sessions, and projects that prepare you for real-world challenges. The programs are designed to meet the needs of different learners while ensuring educational standards are of the highest order."
      }
    ],
    admissions: [
      {
        question: "How do I ensure that my degree from Amrita Online is recognized internationally?",
        answer: "Amrita Online degrees have WES (World Education Services) equivalence for USA and Canada, making it easy to find jobs abroad. The university's global rankings (Top 50 in THE Impact Rankings 2025) provide additional credibility. Students can obtain official degree verification and apostille services for specific countries."
      },
      {
        question: "Does Amrita Online provide placement support?",
        answer: "Yes, Amrita Online provides comprehensive placement assistance including: One-on-one mentoring, Full-fledged career services, Resume development and building, Mock interviews conducted by industry experts, Interview preparation, Soft skills training, Aptitude and reasoning training, Group discussion handling, SWOT analysis and skill mapping, and direct placement assistance. Many graduates have secured positions in top IT companies, multinational finance companies, and top consulting firms with 50% average salary increase."
      },
      {
        question: "What is the ranking of Amrita Vishwa Vidyapeetham?",
        answer: "Amrita Vishwa Vidyapeetham is ranked #8 in India by NIRF 2025 (National Institutional Ranking Framework), Top 50 globally in THE Impact Rankings 2025 for contributions to UN Sustainable Development Goals, #1 private university in India for research contributions, and holds NAAC A++ accreditation (highest grade). It also ranks #1 for International faculty."
      },
      {
        question: "What is the application deadline?",
        answer: "The deadline is January 31, 2026, with limited seats available. If you're ready to advance your career without putting life on hold, it's recommended to apply soon."
      },
      {
        question: "What are the fees for programs?",
        answer: "Amrita Online offers affordable online master's degrees and undergraduate programs. For example, BCA/BBA/B.Com programs are Rs. 1,35,000 for 3 years, while MBA/MCA/M.Com programs are Rs. 2,40,000 for 2 years. These are competitive rates for UGC-approved degrees from India's #8 ranked university."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1769599002/amiritalogo_th3oxg.png" 
                alt="Amrita Online Logo" 
                className="h-12"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button className="flex items-center text-gray-700 hover:text-[#B8164A] transition">
                Programs <FaChevronUp className="ml-2 text-xs" />
              </button>
              <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="outline-none text-sm w-40"
                />
                <FaSearch className="text-gray-400 ml-2" />
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-[#B8164A]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaBars size={24} />
            </button>

            {/* Apply Now Button */}
            <button 
              onClick={() => setOpenModal({ type: 'apply' })}
              className="hidden lg:block bg-[#B8164A] text-white px-6 py-2 rounded-full hover:bg-[#9a1240] transition"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <button className="text-gray-700 hover:text-[#B8164A] transition text-left">
                  Programs
                </button>
                <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="outline-none text-sm flex-1"
                  />
                  <FaSearch className="text-gray-400 ml-2" />
                </div>
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-[#B8164A] text-white px-6 py-2 rounded-full hover:bg-[#9a1240] transition"
                >
                  Apply Now
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
       <UniversityDateSlider
        currentDate="January 2026 Session"
        nextUpdateDate="Applications Closing on 14 Feb 2026"
        information="Limited Seats Available - Apply Now!"
        special="Average of 50% salary growth"
        color="#dc2626"
        backgroundColor="#fee2e2"
        textColor="#991b1b"
      />
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/didkrwhbu/image/upload/v1769666385/amirita-hero2_vph9wy.png"   
            alt="Amrita Online"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Content */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Real Outcomes. Real Growth
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 mb-6">
                Amrita Online graduates report an average of 50% salary growth. UGC-approved online degrees from India's #8 ranked university.
              </p>

              {/* Courses with Links */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { name: 'MBA', link: '/courses/mba' },
                  { name: 'MCA', link: '/courses/mca' },
                  { name: 'M.COM', link: '/courses/mcom' },
                  { name: 'BBA', link: '/courses/bba' },
                  { name: 'BCA', link: '/courses/bca' },
                  { name: 'B.COM', link: '/courses/bcom' }
                ].map((course) => (
                  <a
                    key={course.name}
                    href={course.link}
                    className="bg-white/90 backdrop-blur border-2 border-[#B8164A] text-[#B8164A] px-4 py-2 rounded font-semibold hover:bg-[#B8164A] hover:text-white transition"
                  >
                    {course.name}
                  </a>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/courses"
                  className="bg-[#B8164A] text-white px-8 py-3 rounded font-semibold hover:bg-[#9a1240] transition"
                >
                  Explore our courses
                </a>
                <a
                  href="/about"
                  className="bg-white text-[#B8164A] border-2 border-[#B8164A] px-8 py-3 rounded font-semibold hover:bg-gray-100 transition"
                >
                  About
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#B8164A] mb-2">20+</h3>
              <p className="text-gray-600">Years of Academic Excellence</p>
            </div>
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#B8164A] mb-2">30+</h3>
              <p className="text-gray-600">Programs and Specializations</p>
            </div>
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#B8164A] mb-2">50+</h3>
              <p className="text-gray-600">Student's Countries</p>
            </div>
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#B8164A] mb-2">28</h3>
              <p className="text-gray-600">Indian State's Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Amrita Online Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1769766199/amrita_global_diflmj.png"   
                  alt="Amrita Online Programs"
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 bg-[#B8164A] text-white px-6 py-3 rounded">
                <p className="text-sm">Salary CTC: 17,50,000</p>
                <p className="text-xs">AI Data Science Manager</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                About Amrita Vishwa Vidyapeetham Online Degree
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Amrita Vishwa Vidyapeetham is one of India’s most respected institutions, and the Amrita Vishwa Vidyapeetham online degree is designed to bring the same academic excellence to learners across the country. The Amrita online university offers flexible, career-focused programs that allow students to earn an online degree from Amrita University without relocating or leaving their current job or responsibilities. With a strong academic foundation, modern digital learning tools, and national recognition, the Amrita online university has become a preferred choice for students seeking quality higher education.              
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
               The Amrita Vishwa Vidyapeetham online degree programs are ideal for students, working professionals, and learners who want a trusted and recognized qualification. These programs are delivered through an advanced online learning platform that includes live lectures, recorded sessions, digital study materials, assignments, and assessments. By choosing an online degree from Amrita University, students receive the same academic standards, curriculum depth, and evaluation quality as on-campus programs. </p>
              <a href="#" className="text-[#B8164A] font-semibold underline hover:text-[#9a1240] transition">
                Explore our Online MBA, MCA, BCA, BBA, B.Com, M.Com and more
              </a>
            </div>
          </div>
        </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-gray-700 leading-relaxed">
      
      {/* Always Visible Short Intro */}
      <p>
        As a leading Amrita online university, Amrita ensures that every learner gets access to experienced faculty members, structured learning paths, and continuous academic support.
      </p>

      {/* Hidden Content */}
      {open && (
        <div className="mt-4 space-y-4">
          <p>
            Students enrolled in the Amrita Vishwa Vidyapeetham online degree benefit from industry-aligned curriculum that focuses on practical skills, analytical thinking, and real-world application. This makes an online degree from Amrita University valuable for career growth, promotions, and higher education opportunities.
          </p>

          <p>
            The UGC approved Amrita online degree assures students that the qualification is valid and recognized across India. In addition, the NAAC A++ Amrita online degree status highlights the institution’s academic quality, infrastructure, and teaching standards.
          </p>

          <p>
            With AICTE approved Amrita online programs, students can be confident that the courses meet national technical and professional education guidelines. The Amrita online admission process is simple, transparent, and student-friendly.
          </p>

          <p>
            Learners looking for distance education Coimbatore options often choose Amrita because of its national reputation. Students can study from anywhere while earning an online degree from Amrita University that carries the value of a top-ranked institution.
          </p>

          <p>
            As an online degree from top university in India, the Amrita Vishwa Vidyapeetham online degree opens doors to better opportunities, professional growth, and lifelong learning.
          </p>
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="mt-4 text-blue-600 font-semibold hover:underline"
      >
        {open ? 'Read Less ▲' : 'Read More ▼'}
      </button>
    </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-4">
            Why Choose Amrita Online?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Choosing the right online university is a very important step that shapes your career path and development. Amrita Online is one of the best online universities in India, and there are many reasons why it stands out from the rest.
          </p>
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              {[
                { title: 'Top Ranked University', icon: <FaAward /> },
                { title: 'Accredited Online Degrees', icon: <FaGraduationCap /> },
                { title: 'Student Success Outcomes', icon: <FaBriefcase /> },
                { title: 'Global Opportunities', icon: <FaGlobe /> },
                { title: 'Expert Faculty', icon: <FaGraduationCap /> }
              ].map((item, index) => (
                <div key={index} className="hidden lg:flex flex-col items-center flex-1">
                  <div className="w-16 h-16 rounded-full border-4 border-[#B8164A] bg-white flex items-center justify-center mb-2 text-[#B8164A] text-2xl">
                    {item.icon}
                  </div>
                  <p className="text-sm text-center text-gray-700 font-semibold">{item.title}</p>
                </div>
              ))}
            </div>
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-300 -z-10 hidden lg:block"></div>
          </div>

          {/* Detailed Why Choose Points */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#B8164A] mb-3">Top-Ranked University</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong className='text-[#B8164A]'>Ranked 8</strong> in India by NIRF 2025</li>
                <li>• <strong className='text-[#B8164A]'>NAAC A++ </strong>accreditation (Highest Grade)</li>
                <li>• Global Top 50 (THE Impact Rankings 2025)</li>
                <li>• <strong className='text-[#B8164A]'>1 private university </strong>in India for research</li>
                <li>• Trusted by students from <strong className='text-[#B8164A]'> 50+ countries</strong></li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#B8164A] mb-3">Accredited Online Degrees</h3>
              <ul className="space-y-2 text-gray-600">
                <li>•<strong className='text-[#B8164A]'>UGC-entitled</strong>  programs (Recognized Nationwide)</li>
                <li>• <strong className='text-[#B8164A]'>AICTE</strong> approved technical programs</li>
                <li>• <strong className='text-[#B8164A]'>WES</strong> equivalent for USA and Canada</li>
               
                <li>• Globally recognized degrees</li>
                <li>• Same status as regular campus-based degrees</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#B8164A] mb-3">Student Success Outcomes</h3>
              <ul className="space-y-2 text-gray-600">
                <li>•<strong className='text-[#B8164A]'> 50% average salary increase </strong>post-graduation</li>
                <li>• Alumni in top IT & finance companies</li>
                <li>• Full-fledged career services</li>
                <li>• Mock interviews by industry experts</li>
                <li>• Dedicated placement support team</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#B8164A] mb-3">Global Opportunities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Study abroad programs in USA & Europe</li>
                <li>• 3+1+X Integrated Master's programs</li>
                <li>• Partner universities: UC Davis, Barcelona</li>
                <li>• Summer programs for cultural immersion</li>
                <li>• No tuition fees during exchange programs</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#B8164A] mb-3">Expert Faculty</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 2,000+ faculty members across Amrita</li>
                <li>• 800+ PhD holders in their departments</li>
                <li>• Industry mentors with real-world experience</li>
                <li>• Guest lectures by international experts</li>
                <li>• Faculty actively involved in research</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#B8164A] mb-3">Flexible Learning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Weekend live interactive classes</li>
                <li>• Self-paced recorded content</li>
                <li>• Proctored online exams from home</li>
                <li>• Industry-aligned curriculum</li>
                <li>• Designed for working professionals</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
      <section className="bg-gradient-to-b from-blue-50 to-white py-14 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Who Can Apply for Amrita Vishwa Vidyapeetham Online Degree
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Amrita Vishwa Vidyapeetham offers inclusive and flexible eligibility criteria through its 
            online degree programs. With UGC approval, NAAC A++ accreditation, and AICTE recognition, 
            learners from diverse backgrounds can confidently pursue a career-focused qualification.
          </p>
        </div>

        {/* Intro Box */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-10 border-l-4 border-blue-600">
          <p className="text-gray-700 leading-relaxed">
            The Amrita online university welcomes students, professionals, and lifelong learners who 
            want a recognized and flexible academic path. With a simple and transparent admission process, 
            students from anywhere can earn an online degree from one of the top universities in India.
          </p>
        </div>

        {/* Eligibility Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            "Undergraduate aspirants who have completed higher secondary education and want to begin their academic journey with an online degree from Amrita.",
            "Graduates seeking higher education to improve career prospects through a recognized online degree from Amrita University.",
            "Working professionals aiming to upskill, gain promotions, or switch careers while continuing their jobs.",
            "Learners looking for distance education options with national-level recognition and academic credibility.",
            "Entrepreneurs and freelancers who want to strengthen their academic profile with a UGC-approved qualification.",
            "Students preparing for competitive exams or higher studies who require a valid NAAC A++ accredited degree."
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-6 border border-gray-100"
            >
              <div className="flex items-start gap-3">
                <div className="text-blue-600 text-xl">✔</div>
                <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
              </div>
            </div>
          ))}

        </div>

        {/* Closing Highlight */}
        <div className="mt-12 bg-blue-600 text-white rounded-xl p-8 text-center shadow-lg">
          <h3 className="text-xl font-semibold mb-2">
            Study from Anywhere with Confidence
          </h3>
          <p className="text-blue-100 max-w-3xl mx-auto">
            The flexible structure of Amrita’s online programs allows learners from any location to 
            enroll and study at their convenience. With strong academic support and national approvals, 
            choosing Amrita means investing in a future backed by quality, recognition, and long-term career growth.
          </p>
        </div>

      </div>
    </section>
      {/* Accreditations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Amrita Vishwa Vidyapeetham's Accreditations & Rankings
          </h2>
          <p className="text-gray-600 mb-4">
            Amrita Vishwa Vidyapeetham, the parent university of Amrita Online, is a multidisciplinary, research-intensive institution with:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
            <li>10 campuses strategically located across India, creating a strong national presence</li>
            <li>2,000+ faculty members bringing diverse expertise across disciplines</li>
            <li>300+ academic programs spanning engineering, management, health sciences, arts, and sciences</li>
            <li>19 specialized schools fostering innovation and excellence in diverse fields</li>
            <li>Strong global presence with international collaborations and research partnerships</li>
          </ul>
          <p className="text-gray-600 mb-8">
            Amrita provides the same world-class academic ecosystem for its Online Learners.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1770013884/ranking-group-naac_oape2r.svg" alt="NAAC A++ Accredited" className="h-20" />
              </div>
              <p className="font-semibold">NAAC A++ Grade</p>
              <p className="text-sm text-gray-600">Highest Accreditation</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1770014184/nirf-logo-2025_i2ftca.svg" alt="NIRF Ranking" className="h-20" />
              </div>
              <p className="font-semibold">NIRF Ranking 8</p>
              <p className="text-sm text-gray-600">Top Private University in India</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1770014184/global_xoo0ud.svg" alt="Global Top 50" className="h-20" />
              </div>
              <p className="font-semibold">Global Top 50</p>
              <p className="text-sm text-gray-600">THE Impact Rankings 2025</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1770014185/wur_yt2xei.svg" alt="#1 for International faculty" className="h-20" />
              </div>
              <p className="font-semibold">1 International Faculty</p>
              <p className="text-sm text-gray-600">Leading in Global Expertise</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1770014184/ugc_dfjvyk.svg" alt="#1 for International faculty" className="h-20" />
              </div>
              <p className="font-semibold">By UGC for highest Standards</p>
              <p className="text-sm text-gray-600">UGC Grant</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1770014184/private_r0jlvw.svg" alt="#1 for International faculty" className="h-20" />
              </div>
              <p className="font-semibold">World University Ranking 2020</p>
              <p className="text-sm text-gray-600"> No-1 in Private university</p>
              
            </div>
          </div>
        </div>
         <div className="bg-white rounded-xl shadow-md p-6 text-gray-700 leading-relaxed mt-8">
      
      {/* Always Visible Intro */}
      <p>
        Amrita Vishwa Vidyapeetham is widely recognized for its academic excellence, and the Amrita Vishwa Vidyapeetham online degree carries the same approvals and recognitions as its on-campus programs.
      </p>

      {/* Hidden Detailed Content */}
      {open && (
        <div className="mt-4 space-y-4">
          <p>
            The UGC approved Amrita online degree confirms that the qualification is legally valid and recognized across India. A UGC approved Amrita online degree is accepted for government jobs, private sector employment, competitive exams, and higher education.
          </p>

          <p>
            Another major highlight is the NAAC A++ Amrita online degree recognition. This top accreditation reflects excellence in teaching quality, research, curriculum design, and student support. The NAAC A++ Amrita online degree significantly improves the credibility of an online degree from Amrita University.
          </p>

          <p>
            Amrita also offers AICTE approved Amrita online programs, especially for technical and professional courses. AICTE approval ensures that the Amrita Vishwa Vidyapeetham online degree aligns with industry standards and national technical education requirements.
          </p>

          <p>
            For learners searching for distance education Coimbatore, Amrita stands out as a trusted name with national and international recognition. The distance education Coimbatore model ensures flexibility while maintaining strong academic approvals.
          </p>

          <p>
            The transparent Amrita online admission process further builds trust. During Amrita online admission, all approvals and recognitions are clearly communicated so students can confidently choose an online degree from top university in India.
          </p>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="mt-4 text-blue-600 font-semibold hover:underline"
      >
        {open ? 'Read Less ▲' : 'Read More ▼'}
      </button>
    </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Explore Amrita Online Programs
          </h2>
          <p className="text-gray-600 mb-8">
            Explore 30+ UG, PG, and Certificate programs chosen by learners from across the globe. 
            Advance your career without putting life on hold—take your first step and{' '}
            <button onClick={() => setOpenModal({ type: 'apply' })} className="text-[#B8164A] underline">Apply Today</button>.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#B8164A] transition">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🎓</div>
                <div>
                  <h3 className="text-xl font-bold text-[#B8164A]">UGC Entitled Programmes</h3>
                  <p className="text-gray-600">Officially recognized by India's UGC</p>
                </div>
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#B8164A] transition">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🌍</div>
                <div>
                  <h3 className="text-xl font-bold text-[#B8164A]">Study Abroad</h3>
                  <p className="text-gray-600">In USA & Europe partner universities</p>
                </div>
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#B8164A] transition">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">📚</div>
                <div>
                  <h3 className="text-xl font-bold text-[#B8164A]">Industry Aligned Curriculum</h3>
                  <p className="text-gray-600">Real-world case studies and projects</p>
                </div>
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#B8164A] transition">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">💼</div>
                <div>
                  <h3 className="text-xl font-bold text-[#B8164A]">Career Placement Assistance</h3>
                  <p className="text-gray-600">50% average salary growth</p>
                </div>
              </div>
            </div>
          </div>
         
          {/* Courses Carousel */}
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-600">RECOMMENDED COURSES</h3>
              <p className="text-gray-500">{courses.length} results found</p>
            </div>
            
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${activeCourseSlide * (100/3)}%)` }}
              >
                {courses.map((course, index) => (
                  <div key={index} className="min-w-full lg:min-w-[33.333%] px-4">
                    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                      <div className="relative h-48">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <h3 className="absolute bottom-4 left-4 text-4xl font-bold text-white">
                          {course.title.split(' ')[1]}
                        </h3>
                        <button className="absolute bottom-4 right-4 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition">
                          →
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between text-sm text-gray-600 mb-4">
                          <span>Duration: {course.duration}</span>
                          <span>Fees: {course.fees}</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h4>
                        <p className="text-sm text-gray-600">{course.description}</p>
                        <button
                          onClick={() => setOpenModal({ type: 'apply' })}
                          className="w-full bg-[#B8164A] text-white py-2 rounded-md hover:bg-[#a11440] transition font-semibold"
                             >
                           Enquiry Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center mt-6 space-x-2">
              {courses.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCourseSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    activeCourseSlide === index ? 'bg-[#B8164A]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

         <section className="py-16 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Specialisations & Programmes Offered
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Explore industry-relevant undergraduate and postgraduate programmes under the 
            Amrita Vishwa Vidyapeetham Online Degree with UGC approval and NAAC A++ accreditation.
          </p>
        </div>

        {/* ============ PROGRAMMES OVERVIEW ============ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            "MBA – Leadership, management & corporate careers",
            "M.Com – Advanced finance, accounting & taxation",
            "MCA – IT, software & digital technologies",
            "BBA – Business management & marketing foundation",
            "B.Com – Commerce, finance & corporate careers",
            "BCA – Computer applications & IT fundamentals"
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>

        {/* ============ SPECIALISATIONS ============ */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          
          {/* UG */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Undergraduate Programmes</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>BCA</li>
              <li>BCA with AI & Data Science</li>
              <li>BBA</li>
              <li>BBA in Data Analytics</li>
              <li>BBA in Digital Marketing & Sales</li>
              <li>BBA in Banking & FinTech</li>
              <li>B.Com</li>
              <li>B.Com with ACCA</li>
            </ul>
          </div>

          {/* PG */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4 text-purple-700">Postgraduate Programmes</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>MBA (General, HR, Marketing, Finance, Operations)</li>
              <li>MBA in AI, FinTech, Business Analytics, ESG</li>
              <li>MBA with ACCA</li>
              <li>MCA, MCA in AI & ML, MCA in Cybersecurity</li>
              <li>M.Com, M.Com with CPA</li>
            </ul>
          </div>
        </div>

        {/* ============ FEES TABLE ============ */}
        <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Course Duration & Fees
          </h3>

          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left">Programme</th>
                <th className="p-3 text-left">Duration</th>
                <th className="p-3 text-left">Total Fees</th>
                <th className="p-3 text-left">Enquiry Now</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                ["Online BCA", "3 Years", "₹1,35,000"],
                ["BCA AI & Data Science", "3 Years", "₹1,65,000"],
                ["Online BBA", "3 Years", "₹1,35,000"],
                ["BBA Data Analytics", "3 Years", "₹1,65,000"],
                ["BBA Digital Marketing", "3 Years", "₹1,65,000"],
                ["BBA Banking & FinTech", "3 Years", "₹1,65,000"],
                ["BBA With ACCA", "3 Years", "₹2,50,000"],
                ["B.Com Taxation And Finance", "3 Years", "₹1,20,000"],
                ["B.Com with ACCA", "3 Years", "₹2,85,000"],
                ["MBA (General)", "2 Years", "₹1,70,000"],
                 ["MBA in AI", "2 Years", "₹2,40,000"],
                ["MBA  HR / Marketing / Finance", "2 Years", "₹2,20,000"],
                ["MBA FinTech / Analytics ", "2 Years", "₹2,20,000"],
                 ["MBA in ESG", "2 Years", "₹1,90,000"],
                ["MBA with ACCA", "2 Years", "₹2,60,000"],
                ["Online MCA", "2 Years", "₹1,40,000"],
                ["MCA AI & ML / Cybersecurity", "2 Years", "₹1,95,000"],
                ["M.Com with Finanace & System", "2 Years", "₹90,000"],
                ["M.Com with CPA", "2 Years", "₹1,20,000"],
              ].map((course, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="p-3">{course[0]}</td>
                  <td className="p-3">{course[1]}</td>
                  <td className="p-3 font-semibold text-blue-700">{course[2]}</td>
                  <td className="p-3 text-center">
          <button
            onClick={() => setOpenModal({ type: 'apply' })} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-xs font-semibold transition"
          >
            Enquire Now
          </button>
        </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Enquiry Button */}
          <div className="text-center mt-8">
            <button onClick={() => setOpenModal({ type: 'apply' })}
             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition">
              Enquire Now
            </button>
          </div>
        </div>

      </div>
    </section>
      </section>

      {/* Study Abroad Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
            Study Abroad in Universities in USA & Europe
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(studyAbroadContent).map(([key, content]) => (
              <button
                key={key}
                onClick={() => setActiveStudyAbroadTab(key as any)}
                className={`px-4 sm:px-6 py-2 text-sm sm:text-base border-b-4 font-semibold transition-all duration-300 ${
                  activeStudyAbroadTab === key
                    ? 'border-[#B8164A] text-gray-800'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                {content.title}
              </button>
            ))}
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg mb-12 transition-all duration-300 min-h-[150px] flex items-center justify-center">
            <p className="text-gray-600 text-center leading-relaxed">
              {studyAbroadContent[activeStudyAbroadTab].description}
            </p>
          </div>

          <div className="border-2 border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Go global through our international university partners
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {(studyAbroadContent[activeStudyAbroadTab] as any).images?.map((imgSrc: string, index: number) => (
                <div key={index} className="w-32 h-16 bg-white rounded flex items-center justify-center hover:shadow-md transition-shadow p-2 border border-gray-100">
                  <img src={imgSrc} alt="Partner University" className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Experience Section */}
      <section className="py-16 bg-[#B8164A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Amrita Vishwa Vidyapeetham's Innovative Online Learning Experience
          </h2>
          <p className="text-center mb-12 text-lg">
            Learn at your pace, connect in real time, and grow with the support of India's top-ranked university — wherever you are.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-gray-800">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Live Classes</h3>
              <p className="text-gray-600">
                Real-time Interactive LIVE sessions held on weekends for working professionals
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-gray-800">
              <div className="text-4xl mb-4">▶️</div>
              <h3 className="text-xl font-bold mb-2">Recorded Content</h3>
              <p className="text-gray-600">
                Structured e-learning content (video lectures, whitepapers, quizzes etc.) for flexible, self-paced study
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-gray-800">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">Proctored Online Exams</h3>
              <p className="text-gray-600">
                Exams from your home through a secure, proctored online environment
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-gray-800">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">Discussion Forums</h3>
              <p className="text-gray-600">
                Engage through LMS-based forums for collaborative and flexible interaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#B8164A] transition">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Learning Management System</h3>
              <p className="text-gray-600">
                A robust LMS platform that brings together live classes, recorded content, assignments, and forums—all in one place for seamless learning.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#B8164A] transition">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Support System</h3>
              <p className="text-gray-600">
                Get academic support, career counseling, and personalized guidance whenever you need it. Dedicated support team available to help you succeed.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-[#B8164A] transition">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Industry Integration</h3>
              <p className="text-gray-600">
                Learn with industry-driven case studies, industry sessions, and projects that prepare you for real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Placement Partners & Career Support
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            The Amrita Vishwa Vidyapeetham online degree is designed with a strong focus on 
            employability, career readiness, and long-term professional growth.
          </p>
        </div>

        {/* Main Points */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            "Structured career and placement support to prepare learners for the job market",
            "Career guidance, resume-building assistance, and interview preparation",
            "Industry-aligned curriculum under a UGC-approved academic framework",
            "Strong employer trust backed by NAAC A++ accreditation",
            "Technical and professional programs aligned with AICTE standards",
            "National credibility for learners pursuing flexible distance education options"
          ].map((point, index) => (
            <div key={index} className="flex items-start gap-3 bg-gray-50 p-5 rounded-lg shadow-sm">
              <span className="text-blue-600 text-lg">✔</span>
              <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        {/* Key Highlights Box */}
        <div className="bg-blue-600 text-white rounded-xl p-8 shadow-lg mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Key Placement & Career Highlights
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 text-sm text-blue-100">
            <li>• Career support sessions & employability skill development</li>
            <li>• Resume writing & interview preparation workshops</li>
            <li>• Industry exposure through case studies & live projects</li>
            <li>• Hiring opportunities across IT, management, finance & analytics</li>
            <li>• Strong recognition for flexible distance education learners</li>
            <li>• Degree from a top university in India enhancing career mobility</li>
          </ul>
        </div>

        {/* Placement Partners Image */}
        <div className="text-center">
          <img
            src="https://res.cloudinary.com/didkrwhbu/image/upload/v1770446440/company_wux9fz.png"
            alt="Placement Partners"
            className="mx-auto w-full max-w-5xl rounded-lg shadow-md"
          />
        </div>

      </div>
    </section>
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Student Testimonials
          </h2>
          <p className="text-gray-600 mb-12">Experiences with Amrita Online - Real Stories, Real Growth</p>

          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-full max-w-sm mx-auto rounded-lg"
                />
              </div>
              <div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </p>
                <p className="font-bold text-gray-800">
                  {testimonials[currentTestimonial].name}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={() => setCurrentTestimonial(Math.max(0, currentTestimonial - 1))}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#B8164A] transition"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={() => setCurrentTestimonial(Math.min(testimonials.length - 1, currentTestimonial + 1))}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#B8164A] transition"
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-full border-2 overflow-hidden cursor-pointer ${
                    currentTestimonial === index ? 'border-[#B8164A]' : 'border-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                >
                 
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center">
            Comprehensive Career Support & Placement Assistance
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Full-fledged career services including one-on-one mentoring, resume development, mock interviews by industry experts, and special placement support team working towards getting alumni in touch with potential employers.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1769848198/softskills_zskdyd.png" 
                alt="Soft Skills Training"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Soft Skills Training</h3>
              <p className="text-gray-600">
                Soft Skills, Aptitude, Reasoning, Group Discussions & Handling Interview sessions to boost confidence
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1769848197/resume-building_rhwobv.png" 
                alt="Resume Building"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Resume Building & Mock Interviews</h3>
              <p className="text-gray-600">
                Get ahead of the curve with tailored resumes and mock interviews conducted by industry professionals
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1769848198/swat_mkcleq.png" 
                alt="SWOT Analysis"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">SWOT Analysis & Skills Mapping</h3>
              <p className="text-gray-600">
                Comprehensive mapping of skills and understanding student strengths for career development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
                Frequently Asked Questions
              </h2>
              <img 
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762583776/faq-hero_tz5w2b.webp" 
                alt="FAQ"
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <div className="flex space-x-4 mb-8">
                <button
                  onClick={() => setActiveTab('general')}
                  className={`px-6 py-2 rounded border-2 transition ${
                    activeTab === 'general' 
                      ? 'border-[#B8164A] text-[#B8164A]' 
                      : 'border-gray-300 text-gray-600'
                  }`}
                >
                  General
                </button>
                <button
                  onClick={() => setActiveTab('academic')}
                  className={`px-6 py-2 rounded border-2 transition ${
                    activeTab === 'academic' 
                      ? 'border-[#B8164A] text-[#B8164A]' 
                      : 'border-gray-300 text-gray-600'
                  }`}
                >
                  Academic
                </button>
                <button
                  onClick={() => setActiveTab('admissions')}
                  className={`px-6 py-2 rounded border-2 transition ${
                    activeTab === 'admissions' 
                      ? 'border-[#B8164A] text-[#B8164A]' 
                      : 'border-gray-300 text-gray-600'
                  }`}
                >
                  Admissions
                </button>
              </div>

              <div className="space-y-4">
                {faqData[activeTab as keyof typeof faqData].map((faq, index) => (
                  <details key={index} className="border-b-2 border-gray-200 pb-4">
                    <summary className="font-semibold text-gray-800 cursor-pointer flex justify-between items-center">
                      {faq.question}
                      <FaChevronUp className="transform transition-transform" />
                    </summary>
                    <p className="text-gray-600 mt-4">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Ready to Take the Next Step?
              </h2>
              <p className="text-xl text-gray-600 mb-2">Enroll Now with Amrita Online!</p>
              <p className="text-gray-600 mb-8">Our team is ready to assist you. Connect with our expert advisors to find the perfect program for your goals.</p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-[#B8164A] mr-4" size={20} />
                  <span className="text-gray-700">info@unifostedu.com</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-[#B8164A] mr-4" size={20} />
                  <span className="text-gray-700">+91 7042646766</span>
                </div>
                <div className="flex items-center">
                  <FaWhatsapp className="text-[#B8164A] mr-4" size={20} />
                  <span className="text-gray-700">7042646766</span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-8">
                Please note: The above contact details are only for Amrita AHEAD - Amrita's Online programs. For on-campus queries, please contact the number listed here: amrita.edu/admissions (044-462 76066).
              </p>

              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-sm font-semibold text-gray-800">Important Deadline</p>
                <p className="text-sm text-gray-600">Application deadline: <strong className='text'>Closing Soon</strong> Limited seats available!</p>
              </div>
            </div>

            <div className="bg-[#B8164A] rounded-lg p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
                Connect With Our Experts
              </h3>
              <div className="bg-white rounded-lg p-6">
                <EnquiryForm 
                  universityName="Amrita Vishwa Vidyapeetham"
                  defaultProgram="MBA"
                  formType="general"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <img 
                src="https://res.cloudinary.com/didkrwhbu/image/upload/v1769599002/amiritalogo_th3oxg.png" 
                alt="Amrita Online Logo" 
                className="h-12 mb-4"
              />
              <h3 className="font-bold text-gray-700 mb-2">Toll Free Numbers</h3>
              <div className="space-y-1 text-gray-600">
                <div className="flex items-center">
                  <FaPhone className="mr-2" size={14} />
                  <span>+91 7042143820</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-2" size={14} />
                  <span>+91 7042646766</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-2" size={14} />
                  <span>info@unifostedu.com</span>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <button 
                onClick={() => setOpenModal({ type: 'apply' })}
                className="bg-[#B8164A] text-white px-8 py-3 rounded-full hover:bg-[#9a1240] transition mb-4"
              >
                Apply Now
              </button>
              <div>
                <p className="text-gray-700 font-semibold mb-2">Follow Us</p>
                <div className="flex justify-center lg:justify-end space-x-4">
                  <a href="#" className="text-gray-600 hover:text-[#B8164A] transition">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#B8164A] transition">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#B8164A] transition">
                    <FaLinkedinIn size={20} />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#B8164A] transition">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-gray-600">
            <p>2025 © Amrita Vishwa Vidyapeetham | <a href="#" className="hover:text-[#B8164A]">Privacy Policy</a></p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition shadow-lg"
        >
          <FaChevronUp />
        </button>
        <a 
          href="https://wa.me/917042646766"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition shadow-lg"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

     {openModal && (
                   <ApplyEnquiryModal
                     open={!!openModal}
                     onOpenChange={(v) => !v && setOpenModal( null)}
                     title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
                     subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
                     imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1770012859/amrita-form_w23fua.png"
                     mobileImageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1770013370/amrita-mobile-form_ionz1d.png"
                     universityName="Amrita Vishwa Vidyapeetham"
                     defaultProgram="MBA"
                     formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
                   />
                 )}
    </div>
  );
}