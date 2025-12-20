'use client';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FaAward,
  FaBars,
  FaBookOpen,
  FaBriefcase,
  FaBuilding,
  FaChartLine,
  FaClipboardCheck,
  FaClock,
  FaComments,
  FaGlobe,
  FaGraduationCap,
  FaInfoCircle,
  FaMoneyBillWave,
  FaQuestionCircle,
  FaQuoteLeft,
  FaRobot,
  FaRupeeSign,
  FaStar,
  FaTimes,
  FaUniversity,
  FaUserFriends,
  FaUserGraduate,
  FaUserTie
} from "react-icons/fa";
import { motion } from 'framer-motion';

type ModalState = { type: 'apply' | 'Enquire Now', program?: string } | null;

const menuItems = [
  { id: "introduction", icon: <FaInfoCircle className="mr-2" />, text: "Introduction", link: "#introduction" },
  { id: "campus-tour", icon: <FaUniversity className="mr-2" />, text: "Campus Tour", link: "#campus-tour" },
  { id: "explore-courses", icon: <FaBookOpen className="mr-2" />, text: "Explore Online Courses", link: "#explore-courses" },
  { id: "key-highlights", icon: <FaStar className="mr-2" />, text: "Key Highlights", link: "#key-highlights" },
  { id: "fee-structure", icon: <FaRupeeSign className="mr-2" />, text: "Fee Structure", link: "#fee-structure" },
  { id: "admission-process", icon: <FaClipboardCheck className="mr-2" />, text: "Admission Process", link: "#admission-process" },
  { id: "upcoming-sessions", icon: <FaClock className="mr-2" />, text: "Upcoming Sessions", link: "#upcoming-sessions" },
  { id: "placement-partners", icon: <FaBuilding className="mr-2" />, text: "Placement Partners", link: "#placement-partners" },
  { id: "placement-records", icon: <FaChartLine className="mr-2" />, text: "Placement Records", link: "#placement-records" },
  { id: "student-reviews", icon: <FaUserGraduate className="mr-2" />, text: "Student Reviews", link: "#student-reviews" },
  { id: "faq", icon: <FaQuestionCircle className="mr-2" />, text: "FAQs", link: "#faq" },
  { id: "shoolini-reviews", icon: <FaComments className="mr-2" />, text: "Shoolini University Reviews", link: "#shoolini-reviews" }
];

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  onApplyNowClick: () => void;
}
 
// Sidebar Component
const Sidebar = ({ isOpen, toggleSidebar, onApplyNowClick }: SidebarProps) => {

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:fixed lg:top-20 lg:h-[calc(100vh-5rem)] lg:translate-x-0 flex flex-col overflow-y-auto border-r border-gray-200`}>
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center">

            <span className="font-bold text-lg">page Content</span>
          </div>
          <button 
            className="text-gray-500 hover:text-gray-700 lg:hidden"
            onClick={toggleSidebar}
          >
            <FaTimes size={20} />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link 
                  href={item.link}
                  className="flex items-center p-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors"
                  onClick={toggleSidebar}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 mt-auto border-t">
          <Button  className="w-full bg-red-600 hover:bg-red-700 text-white cursor-pointer" onClick={() => {
            onApplyNowClick();
            toggleSidebar();
          }} >
            Apply Now
          </Button>
        </div>
      </div>
    </>
  );
};

// Introduction Section Component
const ShooliniIntroduction = () => {
  return (
    <section id="introduction" className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shoolini University <span className="text-red-600">Online</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Shoolini University Online is one of India's most trusted and innovative digital learning institutions, offering UGC-approved online degree programs that empower students to achieve academic and professional excellence from anywhere in the world. Recognized as a NAAC A+ accredited university, Shoolini University Online blends academic rigor, cutting-edge technology, and global exposure to make quality higher education accessible to everyone.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded with a vision to redefine online education in India, Shoolini University Online offers a flexible and engaging platform for learners who aspire to pursue online MBA, online BBA, online MCA, online M.Com, and other online programs. As one of the best online universities in India, the institution focuses on developing job-ready graduates equipped with industry-relevant skills, critical thinking, and leadership qualities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-3 rounded-full mr-3">
                    <FaUniversity className="text-red-600 text-xl" />
                  </div>
                  <h3 className="font-semibold text-lg">UGC-DEB Approved</h3>
                </div>
                <p className="text-gray-600">Globally recognized degrees valid for jobs and higher education</p>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-3 rounded-full mr-3">
                    <FaGraduationCap className="text-red-600 text-xl" />
                  </div>
                  <h3 className="font-semibold text-lg">NAAC A+ Accredited</h3>
                </div>
                <p className="text-gray-600">Mark of academic excellence and quality education</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-6">
                To empower learners through technology-enabled education that fosters creativity, innovation, and leadership, making Shoolini University Online a global symbol of quality and excellence in online education.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-red-600 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">To provide affordable online education accessible to students across India and abroad.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-red-600 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">To deliver UGC-approved online degree programs aligned with current industry demands.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-red-600 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">To promote lifelong learning and skill development through innovative teaching methods.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-red-600 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">To establish Shoolini Online as one of the best online universities in India by maintaining academic integrity, research excellence, and career-focused education.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface WhyChooseShooliniProps {
  setOpenModal: (state: ModalState) => void;
}

// Why Choose Shoolini University Online Section
const WhyChooseShoolini = ({ setOpenModal }: WhyChooseShooliniProps) => {
  return (
    <section id="why-choose" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" >
            Why Choose <span className="text-red-600">Shoolini University Online</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choosing Shoolini University Online means choosing quality, credibility, and innovation. Whether you're a working professional, a recent graduate, or someone seeking career advancement, Shoolini Online offers the flexibility and recognition you need to succeed.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Reason 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaAward className="text-red-600 text-xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">UGC-Approved and NAAC A+ Accredited University</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Shoolini University Online is a UGC-DEB approved online university, ensuring that every online degree is recognized for both government and private sector employment. The university's NAAC A+ accreditation reflects its commitment to academic excellence and global quality standards, making it one of the top online universities in India.
              </p>
              <p className="text-gray-700">
                By enrolling in Shoolini Online courses, students receive degrees equivalent in value and recognition to on-campus programs. This credibility helps graduates pursue higher education abroad or secure reputable positions in the corporate sector.
              </p>
            </div>
          </div>
          
          {/* Reason 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaGraduationCap className="text-red-600 text-xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Wide Range of Industry-Relevant Online Degrees</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Shoolini University Online offers a diverse portfolio of UGC-approved online programs, including:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-red-600 text-sm font-bold">•</span>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Online MBA (Master of Business Administration)</span> – Designed to build leadership, strategic thinking, and managerial excellence.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-red-600 text-sm font-bold">•</span>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Online BBA (Bachelor of Business Administration)</span> – A foundation for future business leaders and entrepreneurs.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-red-600 text-sm font-bold">•</span>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Online MCA (Master of Computer Applications)</span> – Focused on software, AI, and data-driven technologies.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-red-600 text-sm font-bold">•</span>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Online M.Com (Master of Commerce)</span> – Tailored for finance, accounting, and business analytics enthusiasts.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-red-600 text-sm font-bold">•</span>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Online BA & B.Com</span> – For learners who wish to strengthen their theoretical and analytical foundations.</p>
                </li>
              </ul>
              <p className="text-gray-700">
                Every program under Shoolini University Online combines academic theory with real-world applications, preparing students for the demands of the digital economy.
              </p>
            </div>
          </div>
          
          {/* Reason 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaClock className="text-red-600 text-xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Flexible and Self-Paced Learning</h3>
              </div>
              <p className="text-gray-700 mb-4">
                The hallmark of Shoolini University Online is flexibility. The AI-enabled LMS platform allows students to study at their own pace, attend live interactive classes, or watch recorded sessions as per convenience.
              </p>
              <p className="text-gray-700">
                This self-paced learning environment ensures that Shoolini Online students can balance education with work, family, or entrepreneurial responsibilities. The platform promotes 24/7 accessibility, making it one of the most student-friendly online universities in India.
              </p>
            </div>
          </div>
          
          {/* Reason 4 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaUserTie className="text-red-600 text-xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Experienced Faculty and Global Learning Resources</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Students of Shoolini University Online learn from experienced professors, industry experts, and global mentors. The faculty bring a wealth of experience from academia and corporate industries, ensuring that each course is practical, relevant, and up to date.
              </p>
              <p className="text-gray-700">
                The online library provides thousands of e-books, research papers, and journals, while online discussion forums encourage collaboration among learners worldwide. This unique blend of global resources and Indian education values gives Shoolini Online an edge in quality learning.
              </p>
            </div>
          </div>
          
          {/* Reason 5 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaMoneyBillWave className="text-red-600 text-xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Affordable Fee Structure and EMI Options</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Education should be accessible to everyone, and Shoolini University Online upholds this belief through an affordable fee structure and easy installment options. Students can pay tuition in flexible EMIs, making it easier to pursue online degrees without financial stress.
              </p>
              <p className="text-gray-700">
                Scholarships are also available for meritorious and deserving candidates, ensuring that quality education remains within reach for all.
              </p>
            </div>
          </div>
          
          {/* Reason 6 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaBriefcase className="text-red-600 text-xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Excellent Placement Assistance</h3>
              </div>
              <p className="text-gray-700 mb-4">
                One of the strongest aspects of Shoolini University Online is its dedicated placement support. The university partners with top recruiters such as Deloitte, Wipro, TCS, HCL, and HDFC Bank to provide job opportunities to online learners.
              </p>
              <p className="text-gray-700">
                Through personalized career counseling, resume-building workshops, and interview preparation sessions, Shoolini Online ensures that every student graduates job-ready and confident.
              </p>
            </div>
          </div>
          
          {/* Reason 7 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaGlobe className="text-red-600 text-xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Global Recognition and Alumni Success</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Shoolini University Online degrees are globally recognized and accepted by employers and institutions across the world. The growing alumni network is a testament to the university's quality and impact. Graduates have secured roles in leading multinational companies, startups, and government sectors.
              </p>
              <p className="text-gray-700">
                The credibility of a UGC-approved online degree from Shoolini University provides long-term career stability and recognition.
              </p>
            </div>
          </div>
          
          {/* Reason 8 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaRobot className="text-red-600 text-xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Technology-Driven Learning Experience</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Shoolini Online integrates AI, data analytics, and virtual simulations to create an engaging and modern learning environment. From gamified assessments to real-time performance tracking, students experience a fully digitized academic journey that aligns with the latest global standards.
              </p>
              <p className="text-gray-700">
                The platform's mobile-friendly LMS ensures that students can learn from anywhere, anytime, on any device — a true mark of modern online education in India.
              </p>
            </div>
          </div>
          
          {/* Reason 9 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaUserFriends className="text-red-600 text-xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Personalized Student Support</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Every learner at Shoolini University Online is assigned a dedicated support mentor who assists with academic, technical, and career-related queries. The 24/7 student helpline ensures that help is always available.
              </p>
              <p className="text-gray-700">
                This personalized approach has earned Shoolini Online high student satisfaction rates and positive feedback across all programs.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
  <div className="max-w-6xl mx-auto space-y-16">

    {/* Future-Ready Curriculum Section */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Future-Ready Curriculum
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        <strong>Shoolini University Online</strong> focuses on developing future skills such as 
        <strong> Data Analytics, Artificial Intelligence (AI), Entrepreneurship,</strong> and 
        <strong> Sustainability.</strong> The curriculum is regularly updated to align with 
        global industry standards, ensuring graduates remain competitive and employable 
        in fast-changing job markets.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed text-justify">
        Whether it’s an <strong>Online MBA</strong> in Digital Marketing or an 
        <strong> Online MCA</strong> with AI integration, 
        <strong> Shoolini Online</strong> ensures that each learner is equipped to tackle 
        tomorrow’s challenges with practical knowledge and confidence.
      </p>
    </div>

    {/* The Shoolini Online Advantage Section */}
    <div className="bg-white p-8 rounded-2xl shadow-md">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
        The Shoolini Online Advantage
      </h2>
      <div className="max-w-4xl mx-auto space-y-4 text-gray-700 text-lg leading-relaxed">
        <p>✅ A <strong>UGC-approved</strong> online degree recognized worldwide</p>
        <p>✅ A <strong>NAAC A+</strong> accredited institution with a proven academic record</p>
        <p>✅ <strong>Affordable</strong> and flexible online learning options</p>
        <p>✅ 24/7 access to <strong>learning materials</strong> and expert guidance</p>
        <p>✅ Real-world exposure through <strong>internships</strong> and virtual industry projects</p>
        <p>✅ <strong>100% placement assistance</strong> and global career support</p>
      </div>
    </div>
  </div>
</div>

        <div className="mt-12 text-center">
          <button 
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 cursor-pointer" 
            onClick={() => setOpenModal({ type: 'apply' })}
          >
            Apply Now for Shoolini Online Programs
          </button>
        </div>
      </div>
    </section>
  );
};

const ShooliniFAQ = () => {
const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "Is Shoolini University UGC approved for online degrees?",
      answer: "Yes, Shoolini University is fully recognized by UGC and approved to offer online degree programs. All online degrees are equivalent to regular degrees and are valid for higher education and employment."
    },
    {
      question: "What is the fee structure for Shoolini University online courses?",
      answer: "The fee varies by program: BBA/BCA costs ₹90,000 (₹63,000 upfront + ₹27,000 after placement), B.Com costs ₹75,000, MBA costs ₹1,40,000 (₹98,000 upfront + ₹42,000 after placement), Executive MBA costs ₹1,80,000, MSc Data Science costs ₹1,20,000, and MA programs range from ₹42,000 to ₹1,00,000."
    },
    {
      question: "What are the eligibility criteria for Shoolini University online MBA?",
      answer: "Candidates must have a Bachelor's degree of minimum 3 years duration from a recognized university with at least 50% marks. Work experience is preferred but not mandatory for regular MBA. Executive MBA typically requires work experience."
    },
    {
      question: "Does Shoolini University provide placement assistance for online students?",
      answer: "Yes, Shoolini University offers dedicated placement support for online students. Top recruiters include Nestle, ICICI, L&T, Decathlon, Hindustan Unilever, and LG. The university has a unique payment model where a portion of fees is paid only after placement."
    },
    {
      question: "How is Shoolini University ranked globally?",
      answer: "Shoolini University is ranked among the top 200 universities globally by QS World Rankings. It is also recognized as one of India's top innovators and patent filers, with strong emphasis on research and innovation."
    },
    {
      question: "What specializations are available in Shoolini University online MBA?",
      answer: "Shoolini offers 16+ MBA specializations including Marketing Management, Finance, HR, Operations & Supply Chain, IT Management, Digital Marketing, Data Science & Business Analytics, Banking & Insurance, Tourism Management, Pharma & Healthcare, Retail Management, and Direct Selling Management."
    },
    {
      question: "Can I pursue Shoolini University online degree while working?",
      answer: "Absolutely! Shoolini's online programs are designed for working professionals with flexible learning schedules, weekend classes, recorded lectures, and industry-relevant curriculum that allows you to balance work and studies effectively."
    },
    {
      question: "What is the duration of online programs at Shoolini University?",
      answer: "Undergraduate programs (BBA, BCA, B.Com) are 3 years duration, while postgraduate programs (MBA, MSc, MA) are 2 years duration. The courses follow a semester-based system with regular assessments and project work."
    },
    {
      question: "Are Shoolini University online degrees valid for government jobs?",
      answer: "Yes, Shoolini University online degrees are UGC-approved and are valid for all government job applications, higher education, and competitive examinations where a recognized degree is required."
    },
    {
      question: "What documents are required for admission to Shoolini University online courses?",
      answer: "Required documents include: 10th and 12th mark sheets, graduation mark sheet and degree certificate (for PG courses), passport-sized photographs, Aadhar card, category certificate (if applicable), transfer/migration certificate, and work experience letters (for Executive MBA)."
    },
    {
      question: "Does Shoolini University offer scholarships for online students?",
      answer: "Yes, Shoolini University provides merit-based scholarships for deserving students. Scholarships are awarded based on academic performance, entrance test scores, and other criteria. Contact the admission team for detailed scholarship information."
    },
    {
      question: "What is the admission process for Shoolini University online programs?",
      answer: "The admission process involves 4 simple steps: 1) Fill the online application form, 2) Upload required documents and pay application fee, 3) Receive confirmation and student login credentials, 4) Complete fee payment and begin classes."
    },
    {
      question: "How are classes conducted in Shoolini University online programs?",
      answer: "Classes are conducted through a combination of live interactive sessions and recorded lectures. Students get access to a learning management system (LMS) with study materials, assignments, quizzes, and project work. Live doubt-clearing sessions are also conducted regularly."
    },
    {
      question: "What makes Shoolini University different from other online universities?",
      answer: "Shoolini stands out with its global QS ranking, research-driven curriculum, unique payment model (pay after placement option), 50+ industry partners, experienced faculty with international exposure, and strong focus on innovation with top patent filings in India."
    },
    {
      question: "Can I get study materials and books for Shoolini University online courses?",
      answer: "Yes, all students receive comprehensive digital study materials, e-books, video lectures, case studies, and reference materials through the LMS. Additional physical books may be provided for certain courses based on program requirements."
    }
  ];

   const toggleFAQ = (index: number) => {
       setOpenIndex(prev => (prev === index ? null : index));
     };

  return (
    <section id="faq" className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <FaQuestionCircle className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about Shoolini University online programs, admissions, fees, and more.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUpIcon className="w-6 h-6 text-red-500" />
                  ) : (
                    <ChevronDownIcon className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our admission counselors are here to help you. Get personalized guidance for your career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917042867717"
              className="inline-flex items-center justify-center px-8 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📞 Call: +91 7042646766
            </a>
            <a href="https://wa.me/917042867717" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-500 font-semibold rounded-full border-2 border-red-500 hover:bg-red-50 transition-all duration-300">
              💬 Chat with Counselor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChevronUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

type ActiveTab = 'all' | 'ug' | 'pg';

const Shoolini = () => {
  const [openModal, setOpenModal] = useState<ModalState>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ActiveTab>("all");
  const [expandedCourses, setExpandedCourses] = useState<Record<number, boolean>>({});
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const handleTabChange = (value: string) => {
    setActiveTab(value as ActiveTab);
  };

  const ugCourses = [
    {
      course: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      eligibility: "10+2 pass with Commerce",
      fees: "₹1,00,000/-",
      specialization: "Accounting, Finance , Taxation",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327069/bcom_ra3yam.webp",
      alt: "Bachelor of Commerce at Shoolini University",
      universityShort: "shoolini"
    },
    {
      course: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      eligibility: "10+2 in any discipline with 40% marks in last qualifying examination",
      fees: "₹ 1,20,000",
      specialization: "HR, Marketing, Finance, Digital Marketing, Computer Science, Direct Selling",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327856/shoolini-bba_gqzjmi.webp",
      alt: "Bachelor of Business Administration at Shoolini University",
      universityShort: "shoolini"
    },
    {
      course: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      eligibility: "10+2 in any discipline with 40% marks in last qualifying examination. Reservation of seats as per government policies. ",
      fees: "₹ 1,20,000",
      specialization: "Machine Learning & Artificial Intelligence, Data Science, Cyber Secruity, Full Stack Development",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327857/shoolini-bca_zwvncy.webp",
      alt: "Bachelor of Computer Applications at Shoolini University",
      universityShort: "shoolini"
    }
  ];

  const pgCourses = [
    {
      course: "Master of Business Administration (MBA)",
      duration: "2 Years",
      eligibility: "Passed Bachelor degree of minimum 3 years duration. Obtained atleast 50% marks.",
      fees: "(98,000/- + 42,000/-) = ₹1,40,000/- [ ₹42,000/-(Only to be paid after Placement)]",
      specialization: "Marketing Management, Operation & Supply Chain Management, Agri Business Management, Human Resource Management, IT Management, Biotechnology Management, Financial Management, Tourism Management, Food Technology Management, Digital Marketing, Real Estate Management, Pharma & Health Care Management,Retail Management,Direct Selling Management,Banking & Insurance,Data Science & Business Analytics",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327859/shoolini-mba_dpoger.webp",
      alt: "Master of Business Administration at Shoolini University",
      universityShort: "shoolini"
    },
    {
      course: "Executive MBA",
      duration: "2 Years",
      eligibility: "Passed Bachelor degree of minimum 3 years duration. Obtained atleast 50% marks.",
      fees: "₹1,80,000/-",
      specialization: "Marketing Management, Operation & Supply Chain Management, Agri Business Management, Human Resource Management, IT Management, Biotechnology Management, Financial Management, Tourism Management, Food Technology Management, Digital Marketing, Real Estate Management, Pharma & Health Care Management,Retail Management,Direct Selling Management,Banking & Insurance,Data Science & Business Analytics",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327391/mba_ju1pxv.webp",
      alt: "Executive MBA at Shoolini University",
      universityShort: "shoolini"
    },
    {
      course: "MSC in Data science ",
      duration: "2 Years",
      eligibility: "Graduation in Life Sciences",
      fees: "₹1,20,000/-",
      specialization: "Data Science",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327859/shoolini-mca_pxpsfz.webp",
      alt: "Master of Science in Data Science at Shoolini University",
      universityShort: "shoolini"
    },
    {
      course: "MCA ",
      duration: "2 Years",
      eligibility: "Bachelor's degree in 3 years with at least 50% marks (45% for reserved category candidates,) ",
      fees: "₹2,00,000/-",
      specialization: "AI & ML, Data Science and Analytics, Full Stack Development",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327468/mca1_ilvxyr.webp",
      alt: "Master of Science in Data Science at Shoolini University",
      universityShort: "shoolini"
    },
    {
      course: "Master of Arts (M.A) ",
      duration: "2 Years",
      eligibility: "Bachelor's degree with any discipline with minimum of 40% marks. 60% marks in case of International Students in the qualifying examination.",
      fees: "84,000-1,00,000",
      specialization: "English Literature, journalism and Mass Communication",
      image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327858/shoolini-ma_uokqan.webp",
      alt: "Master of Arts in shoolini University",
      universityShort: "shoolini"
    }
  ];

  useEffect(() => {
         
   
    const timer= setTimeout(()=>{
    setOpenModal({ type: 'apply' } as any)
    },3000)
    return () => clearTimeout(timer);
   
          
   },[])

  return (
    <>
      {/* Page-specific fonts can be loaded in layout.tsx using next/font */}
      <div className="overflow-x-hidden flex flex-col min-h-screen">
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 fixed top-0 left-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Left Logo and Menu Button */}
              <div className="flex items-center gap-2 lg:gap-4">
                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-red-600"
                  onClick={toggleSidebar}
                >
                  <FaBars size={20} />
                </button>
                
                <img 
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327282/logo_shoolini_cgz1an.webp" 
                  alt="Logo_shoolini" 
                  className="h-12 w-50 sm:h-10 lg:h-12" 
                />
              </div>

              {/* Right Side - Responsive */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Phone - Hidden on small screens */}
                <a
                  href="tel:+917042867717"
                  className="hidden sm:flex items-center gap-2 text-gray-700 font-medium text-sm lg:text-base hover:text-orange-600 transition-colors"
                > 
                  {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                  <span className="text-lg">📞</span>
                  <span className="hidden lg:inline">+91 7042646766</span>
                  <span className="lg:hidden">Call Now</span>
                </a>
                
                {/* Mobile Phone Icon */}
                <a
                  href="tel:+917042867717"
                  className="sm:hidden flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full text-orange-600 hover:bg-orange-200 transition-colors"
                  aria-label="Call Now"
                >
                  {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                  <span role="img" aria-label="phone">📞</span>
                </a>
                
                {/* Apply Button */}
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-black-500/25 text-sm sm:text-base cursor-pointer"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </header>
 
        {/* Main Content with Sidebar */}
         <div className="flex flex-col lg:flex-row pt-16 lg:pt-20">
           <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} onApplyNowClick={() => setOpenModal({ type: 'apply' })} />           
            {/* Main Content - Scrollable */}
            <main className="flex-1 overflow-x-hidden px-4 lg:px-8 pb-10 lg:pl-64">

        <section id="About" className="relative w-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] overflow-hidden">
  {/* Background Image with Gradient Overlay */}
  <div className="absolute inset-0">
    <Image
      src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327859/shoolini_banner_vrgomm.png"
      alt="Shoolini University Campus"
      fill
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden mt-0"
      priority={true}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
  </div>
  {/* Content Container */}
  <div className="relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
  <div className="flex flex-col lg:flex-row items-center justify-between h-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px]">

    {/* Left Content */}
    <div className="flex-1 max-w-2xl lg:max-w-3xl text-white py-8 sm:py-12 lg:py-24 w-full">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4 sm:space-y-6"
      >
       
      </motion.div>
    </div>
  </div>

  {/* Buttons at the bottom of the hero section */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-4 px-4 z-10">
      <Button
        size="lg"
        className="bg-red-500 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full shadow-xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300"
        onClick={() => setOpenModal({ type: 'apply' })}
      >
        Apply Now
      </Button>

      <Button
        size="lg"
        variant="secondary"
        className="bg-white text-red-600 border border-red-500 hover:bg-red-50 font-bold px-8 py-3 rounded-full shadow-xl backdrop-blur-sm transition-all duration-300"
        onClick={() => setOpenModal({ type: 'Enquire Now' })}
      >
        Enquire Now
      </Button>
  </div>
  </div>

</section>

   {/* Shoolini Introduction Section */}
   <ShooliniIntroduction />
   
   {/* Why Choose Shoolini University Online Section */}
   <WhyChooseShoolini setOpenModal={setOpenModal} />
   
   { /* About Shoolini University Hero Section */}
   <section id='campus-tour'></section>
   <HeroSection 
  universityName=" About Shoolini University Online"
  universityNameClass="text-red-500"
  location="Solan, Himachal Pradesh, India"
  type="Private University"
  nirfRank="Top 200 "
  rating="4.3"
  description="Research-Oriented Programs | Flexible Online & Hybrid Learning | Globally Recognized Degrees"
  description2={`
    Shoolini University is a top-ranked research-oriented university offering globally recognized programs in science, management, agriculture, and technology — with the flexibility of online and hybrid learning.
    
    Ranked among the top 200 universities globally by QS, Shoolini University focuses on research, innovation, and student success.
    Our online degree programs are designed to secure your future, give your career a competitive edge, and ensure great placements or selection in leading international universities. You only pay once your desired outcome is achieved.
  `}
  badgeText="Flexible Learning | Research-Focused | Career-Oriented Programs"
  imgSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327860/shoolini-uni_rqkaii.webp"
  imgAlt="Shoolini University Campus"
  students="20K+" 
  partners="50+"
  campus="Solan Campus"
  highlights={[
    { icon: <FaBookOpen className="text-blue-600" />, text: "Flexible Programs" },
    { icon: <FaUserTie className="text-blue-600" />, text: "Career-Oriented" },
    { icon: <FaGraduationCap className="text-blue-600" />, text: "Academic Excellence" },
    { icon: <FaGlobe className="text-blue-600" />, text: "Global Recognition" },
  ]}
/>

   

      {/* UG & PG Courses */}
        {/* Courses Section */}
             <section id="explore-courses" className="py-20 bg-white">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                   <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                     Explore <span className="bg-red-500 bg-clip-text text-transparent">Online Programs</span>
                   </h2>
                   <p className="text-xl text-gray-600 max-w-3xl mx-auto ">
                     Choose from industry-relevant programs designed for working professionals and fresh graduates
                   </p>
                 </div>
     
                 <Tabs.Root
                           value={activeTab}
                           onValueChange={handleTabChange}
                            className="space-y-12"
                             >

                   {/* Tab Buttons */}
                   <div className="flex justify-center">
                     <Tabs.List className="inline-flex bg-gray-100/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200">
                       {[
                         { value: 'all', label: 'All Programs' },
                         { value: 'ug', label: 'Undergraduate' },
                         { value: 'pg', label: 'Postgraduate' }
                       ].map((tab) => (
                         <Tabs.Trigger
                           key={tab.value}
                           value={tab.value}
                           className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                             activeTab === tab.value
                               ? 'bg-red-500 text-white shadow-lg'
                               : 'text-gray-700 hover:text-[#f7188b] hover:bg-white'
                           }`}
                         >
                           {tab.label}
                         </Tabs.Trigger>
                       ))}
                     </Tabs.List>
                   </div>
     
                   {/* Course Grid */}
                   <Tabs.Content value={activeTab} className="outline-none">
                     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                       {(activeTab === 'all' ? [...ugCourses, ...pgCourses] : 
                         activeTab === 'ug' ? ugCourses : pgCourses).map((course, idx) => (
                         <div key={idx} className="group">
                           <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                             {/* Course Image */}
                             <div className="relative h-48 overflow-hidden">
                               <Image
                                 src={course.image}
                                 alt={course.alt}
                                 fill
                                 className="object-cover group-hover:scale-110 transition-transform duration-500"
                               />
                               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                               <div className="absolute bottom-4 left-4">
                                 <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                   {course.universityShort}
                                 </span>
                               </div>
                             </div>
     
                             {/* Course Content */}
                             <div className="p-6 space-y-4">
                               <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{course.course}</h3>
                               
                               <div className="space-y-2">
                                 <div className="flex items-center gap-2 text-gray-600">
                                   <span>⏱️</span>
                                   <span className="text-sm">{course.duration}</span>
                                 </div>
                                 <div className="flex items-center gap-2 text-gray-600">
                                   <span>🎓</span>
                                   <span className="text-sm">{course.eligibility}</span>
                                 </div>
                                 <div className="flex items-center gap-2 text-gray-600">
                                   <span>💰</span>
                                   <span className="text-sm">₹{course.fees}</span>
                                 </div>
                                 <div className="flex items-start gap-2 text-gray-600">
                                   <span className="mt-1">⭐</span>
                                   <div className="text-sm">
                                    <strong>Specialization:</strong> 
                                    {course.specialization.split(',').length > 1 ? (
                                      <>
                                        {' '}{course.specialization.split(',')[0]}
                                        <button
                                          onClick={() => setExpandedCourses(prev => ({...prev, [idx]: !prev[idx]}))}
                                          className="text-red-500 text-xs ml-1 cursor-pointer focus:outline-none"
                                        >
                                          {expandedCourses[idx] ? '...less' : '...more'}
                                        </button>
                                        {expandedCourses[idx] && (
                                          <p className="mt-1">
                                            {course.specialization.split(',').slice(1).join(', ')}
                                          </p>
                                        )}
                                      </>
                                    ) : (
                                      ` ${course.specialization}`
                                    )}
                                  </div>
                                 </div>
                               </div>
     
                               <button 
                                 onClick={() => setOpenModal({ type: 'apply', program: course.course })}
                                 className="w-full bg-red-500 hover:from-[#ec027c] hover:to-[#d40270] text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                               >
                                 Apply Now
                               </button>
                             </div>
                           </div>
                         </div>
                       ))}
                     </div>
                   </Tabs.Content>
                 </Tabs.Root>
               </div>
             </section>
         

         <section id='Fees' className="py-10 px-4 md:px-12 bg-gray-50">
  <h1 className="text-3xl font-bold text-center mb-10 text-blue-800">
    Shoolini University Courses
  </h1>

  {/* UG Courses Table */}
  <div className="mb-12">
    <h2 className="text-2xl font-semibold text-center mb-4 text-blue-700">
      Undergraduate (UG) Courses
    </h2>
    <div id='fee-structure' className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm md:text-base">
        <thead className="bg-blue-100 text-gray-800">
          <tr>
            <th className="border p-3 text-left">Course Name</th>
            <th className="border p-3 text-left">Duration</th>
            <th className="border p-3 text-left">Eligibility</th>
            <th className="border p-3 text-left">Fees</th>
            <th className="border p-3 text-left">Specialization</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50 hover:bg-blue-50">
            <td className="border p-3 font-medium">
              Bachelor of Commerce (B.Com)
            </td>
            <td className="border p-3">3 Years</td>
            <td className="border p-3">10+2 pass with Commerce</td>
            <td className="border p-3 text-blue-700 font-semibold">
              ₹75,000/-
            </td>
            <td className="border p-3">
              Accounting, Finance and Taxation
            </td>
          </tr>
          <tr className="bg-white hover:bg-blue-50">
            <td className="border p-3 font-medium">
              Bachelor of Business Administration (BBA)
            </td>
            <td className="border p-3">3 Years</td>
            <td className="border p-3">
              10+2 in any discipline with 40% marks in last qualifying
              examination
            </td>
            <td className="border p-3 text-blue-700 font-semibold">
              (63,000/- + 27,000/-) = ₹90,000/- [ ₹27,000/-(Only to be paid
              after Placement)]
            </td>
            <td className="border p-3">
              HR, Marketing, Finance, Digital Marketing, Computer Science,
              Direct Selling
            </td>
          </tr>
          <tr className="bg-gray-50 hover:bg-blue-50">
            <td className="border p-3 font-medium">
              Bachelor of Computer Applications (BCA)
            </td>
            <td className="border p-3">3 Years</td>
            <td className="border p-3">
              10+2 in any discipline with 40% marks in last qualifying
              examination. Reservation of seats as per government policies.
            </td>
            <td className="border p-3 text-blue-700 font-semibold">
              (63,000/- + 27,000/-) = ₹90,000/- [ ₹27,000/-(Only to be paid
              after Placement)]
            </td>
            <td className="border p-3">
              Machine Learning, Data Science, Cyber Security and Artificial
              Intelligence
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="flex justify-center mt-10">
      <Button 
        onClick={() => setOpenModal({ type: 'apply' })}
        className="w-20px bg-red-500 h text-white font-bold px-6 py-3 rounded-full shadow-lg  transform duration-300 cursor-pointer"
         >
         Apply Now
       </Button>
       </div>
  </div>
 

  {/* PG Courses Table */}
  <div className="mb-20">
    <h2 className="text-2xl font-semibold text-center mb-4 text-blue-700">
      Postgraduate (PG) Courses
    </h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm md:text-base">
        <thead className="bg-blue-100 text-gray-800">
          <tr>
            <th className="border p-3 text-left">Course Name</th>
            <th className="border p-3 text-left">Duration</th>
            <th className="border p-3 text-left">Eligibility</th>
            <th className="border p-3 text-left">Fees</th>
            <th className="border p-3 text-left">Specialization</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50 hover:bg-blue-50">
            <td className="border p-3 font-medium">
              Master of Business Administration (MBA)
            </td>
            <td className="border p-3">2 Years</td>
            <td className="border p-3">
              Passed Bachelor degree of minimum 3 years duration. Obtained atleast 50% marks.
            </td>
            <td className="border p-3 text-blue-700 font-semibold">
              (98,000/- + 42,000/-) = ₹1,40,000/- [ ₹42,000/-(Only to be paid
              after Placement)]
            </td>
            <td className="border p-3">
              Marketing, Operations, HR, IT, Biotech, Finance, Tourism, Food
              Tech, Digital Marketing, Data Science & Business Analytics
            </td>
          </tr>
          <tr className="bg-white hover:bg-blue-50">
            <td className="border p-3 font-medium">Executive MBA</td>
            <td className="border p-3">2 Years</td>
            <td className="border p-3">
              Passed Bachelor degree of minimum 3 years duration. Obtained atleast 50% marks.
            </td>
            <td className="border p-3 text-blue-700 font-semibold">
              ₹1,80,000/-
            </td>
            <td className="border p-3">
              Marketing, HR, Operations, IT, Digital Marketing, Finance, Data
              Science, etc.
            </td>
          </tr>
          <tr className="bg-gray-50 hover:bg-blue-50">
            <td className="border p-3 font-medium">MSc in Data Science</td>
            <td className="border p-3">2 Years</td>
            <td className="border p-3">Graduation in Life Sciences</td>
            <td className="border p-3 text-blue-700 font-semibold">
              ₹1,20,000/-
            </td>
            <td className="border p-3">Data Science</td>
          </tr>
          <tr className="bg-white hover:bg-blue-50">
            <td className="border p-3 font-medium">Master of Arts (M.A)</td>
            <td className="border p-3">2 Years</td>
            <td className="border p-3">
              Bachelor's degree with any discipline with minimum of 40% marks.
              (60% for International Students)
            </td>
            <td className="border p-3 text-blue-700 font-semibold">
              ₹42,000 - ₹1,00,000
            </td>
            <td className="border p-3">
              English Literature, Journalism and Mass Communication
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="flex justify-center mt-10">
      <Button 
        onClick={() => setOpenModal({ type: 'apply' })}
        className="w-20px bg-red-500 h text-white font-bold px-6 py-3 rounded-full shadow-lg  transform duration-300 cursor-pointer"
         >
         Apply Now
       </Button>
       </div>
</section>


            {/*  Add Quick Comparison Table */}
<section id='QuickComparison' className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">
      <span className="text-red-600">Online vs Regular</span> Degree Comparison
    </h2>
    
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-red-500 text-white">
            <th className="p-4 text-left">Feature</th>
            <th className="p-4 text-center">shoolini university online</th>
            <th className="p-4 text-center">Regular Campus</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['UGC Recognition', '✅ Yes', '✅ Yes'],
            ['Degree Validity', '✅ Same as Campus', '✅ Valid'],
            ['Flexibility', '✅ Study Anytime', '❌ Fixed Schedule'],
            ['Location', '✅ From Anywhere', '❌ Campus Only'],
            ['Cost', '✅ More Affordable', '❌ Higher Fees'],
            ['Placement Support', '✅ 100% Assistance', '✅ Available']
          ].map(([feature, online, regular], i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="p-4 font-semibold">{feature}</td>
              <td className="p-4 text-center">{online}</td>
              <td className="p-4 text-center">{regular}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
        <div className="flex justify-center mt-10">
      <Button 
        onClick={() => setOpenModal({ type: 'apply' })}
        className="w-20px bg-red-500 h text-white font-bold px-6 py-3 rounded-full shadow-lg  transform duration-300 cursor-pointer"
         >
         Apply Now
       </Button>
       </div>
      </section>
    

        <section id='key-highlights' className="py-12 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
      Key Highlights of Shoolini University Online
    </h2>

    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-lg shadow-sm bg-white">
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="p-4 font-semibold text-gray-700 w-1/3">University Type</td>
            <td className="p-4 text-gray-600">Private, NAAC A+ Accredited</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="p-4 font-semibold text-gray-700">Recognition</td>
            <td className="p-4 text-gray-600">UGC, AICTE, ISO Certified</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="p-4 font-semibold text-gray-700">Mode of Learning</td>
            <td className="p-4 text-gray-600">100% Online</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="p-4 font-semibold text-gray-700">Learning Tools</td>
            <td className="p-4 text-gray-600">LMS, Recorded Lectures, E-Library</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="p-4 font-semibold text-gray-700">Student Support</td>
            <td className="p-4 text-gray-600">24/7 Assistance, Career Counselling</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="p-4 font-semibold text-gray-700">Placement Support</td>
            <td className="p-4 text-gray-600">Dedicated Career Cell</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="p-4 font-semibold text-gray-700">Flexibility</td>
            <td className="p-4 text-gray-600">Learn Anytime, Anywhere</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="p-4 font-semibold text-gray-700">Specializations</td>
            <td className="p-4 text-gray-600">
              Marketing, HR, Finance, Data Science, Entrepreneurship
            </td>
          </tr>
          <tr>
            <td className="p-4 font-semibold text-gray-700">Global Recognition</td>
            <td className="p-4 text-gray-600">
              Acceptable for Higher Education & Jobs Abroad
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="flex justify-center mt-10">
      <Button 
        onClick={() => setOpenModal({ type: 'apply' })}
        className="w-20px bg-red-500 h text-white font-bold px-6 py-3 rounded-full shadow-lg  transform duration-300 cursor-pointer"
         >
         Apply Now
       </Button>
       </div>
</section>
     
         {/* Admission Procedure */} 
               <section id='admission-process' className="relative py-20 bg-white">
                 {/* Decorative Blobs */}
                 <div className="absolute -top-20 -left-20 w-72 h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>
                 <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gray-100 rounded-full blur-3xl animate-pulse"></div>
             
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                   {/* Section Header */}
                   <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                     className="text-center mb-16"
                   >
                     <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                       Admission Procedure
                     </h2>
                     <div className="w-24 h-1 bg-red-500 mx-auto mb-8 rounded-full"></div>
                     <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                       A simple, transparent, and student-friendly admission process
                       designed to help you begin your learning journey smoothly.
                     </p>
                   </motion.div>
             
                   {/* 4-Step Process */}
                   <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                     className="mt-20 bg-white p-10 rounded-3xl shadow-xl border border-gray-200"
                   >
                     <h3 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
                       Easy 4-Step Admission Process
                     </h3>
             
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
                       {/* Connecting Line */}
                       <div className="hidden md:block absolute top-28 left-[10%] right-[10%] h-1 bg-gradient-to-r from-red-400 to-red-500 z-0 rounded-full"></div>
             
                       {[
                         {
                           number: "01",
                           title: "Application Form",
                           desc: "Fill the online application form on the university portal.",
                         },
                         {
                           number: "02",
                           title: "Documents & Fee",
                           desc: "Upload required documents and pay the application fee.",
                         },
                         {
                           number: "03",
                           title: "Confirmation",
                           desc: "Receive confirmation and student login credentials.",
                         },
                         {
                           number: "04",
                           title: "Enrollment",
                           desc: "Complete fee payment and begin your classes.",
                         },
                       ].map((step, index) => (
                         <motion.div
                           key={index}
                           className="text-center relative z-10"
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.6, delay: index * 0.3 }}
                         >
                           <div className="bg-gradient-to-br from-red-400 to-red-500 w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-2xl">
                             <span className="text-3xl md:text-4xl font-bold">{step.number}</span>
                             <span className="text-xs md:text-sm uppercase font-semibold mt-1">Step</span>
                           </div>
                           <h4 className="text-lg md:text-xl font-bold text-black mb-2">
                             {step.title}
                           </h4>
                           <p className="text-gray-700 text-sm md:text-base">{step.desc}</p>
                         </motion.div>
                       ))}
                     </div>
                   </motion.div>
                 </div>
                 <div className="flex justify-center mt-10">
      <Button 
        onClick={() => setOpenModal({ type: 'apply' })}
        className="w-20px bg-red-500 h text-white font-bold px-6 py-3 rounded-full shadow-lg  transform duration-300 cursor-pointer"
         >
         Apply Now
       </Button>
       </div>
               </section> 


      {/* Certificate + Benefits */}
      <section className="bg-[#003366] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1"> 
            <Image width={100} height={100} loading="lazy" src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327858/shoolini-ccertificate_hw3lvb.webp" alt="Shoolini Certificate" className="w-full max-w-md mx-auto rounded shadow-lg" />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get Certified from Shoolini University</h2>
            <p className="mb-6 text-lg">Boost your skills with online degrees from a globally ranked university.</p>
            <h3 className="text-xl font-semibold mb-2">Key Highlights</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Global QS Rankings</li>
              <li>Live + Recorded Classes</li>
              <li>Placement & Research Focus</li>
              <li>Scholarships for Meritorious Students</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-10">
      <Button 
        onClick={() => setOpenModal({ type: 'apply' })}
        className="w-20px bg-red-500 h text-white font-bold px-6 py-3 rounded-full shadow-lg  transform duration-300 cursor-pointer"
         >
         Apply Now
       </Button>
       </div>
      </section>
      <section className="py-12 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
      Admission Dates for Various UG & PG Programs
    </h2>

    <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
      Shoolini University Online admissions open three times a year — <span className="font-semibold">January</span>, <span className="font-semibold">May</span>, and <span className="font-semibold">September</span> sessions.
    </p>

    <div className="grid md:grid-cols-3 gap-6 mb-10">
      <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">January Session</h3>
        <p className="text-gray-600">Application opens in <span className="font-medium">November</span></p>
      </div>

      <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">May Session</h3>
        <p className="text-gray-600">Application opens in <span className="font-medium">March</span></p>
      </div>

      <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">September Session</h3>
        <p className="text-gray-600">Application opens in <span className="font-medium">July</span></p>
      </div>
    </div>

    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Important Dates</h3>
      <ul className="space-y-2 text-gray-700">
        <li>• <span className="font-semibold">Application Deadline:</span> One week before session start</li>
        <li>• <span className="font-semibold">Orientation Program:</span> Conducted online via LMS</li>
        <li>• <span className="font-semibold">Classes Commence:</span> First week of the new session</li>
      </ul>
    </div>

    <p className="text-gray-700 mt-8 text-center leading-relaxed">
      Students can apply anytime on this <span className="font-semibold"><div className="flex justify-center mt-10">
   
       </div></span> and receive timely updates via <span className="font-semibold">email or SMS</span>.
    </p>
       <Button 
        onClick={() => setOpenModal({ type: 'apply' })}
        className="w-20px bg-red-500 h text-white font-bold px-6 py-3 rounded-full shadow-lg  transform duration-300 cursor-pointer"
         >
         Apply Now
       </Button>
  </div>
  
</section>

    <section id='upcoming-sessions' className="py-12 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
      Details of Upcoming and Ongoing Sessions
    </h2>

    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left py-3 px-6 text-gray-800 font-semibold border-b">Session</th>
            <th className="text-left py-3 px-6 text-gray-800 font-semibold border-b">Application Period</th>
            <th className="text-left py-3 px-6 text-gray-800 font-semibold border-b">Commencement</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="py-3 px-6 border-b text-gray-700">January 2025</td>
            <td className="py-3 px-6 border-b text-gray-700">Nov – Jan</td>
            <td className="py-3 px-6 border-b text-gray-700">Jan 15, 2025</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-3 px-6 border-b text-gray-700">May 2025</td>
            <td className="py-3 px-6 border-b text-gray-700">Mar – May</td>
            <td className="py-3 px-6 border-b text-gray-700">May 10, 2025</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-3 px-6 border-b text-gray-700">September 2025</td>
            <td className="py-3 px-6 border-b text-gray-700">Jul – Sep</td>
            <td className="py-3 px-6 border-b text-gray-700">Sep 5, 2025</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-gray-700 text-lg leading-relaxed mt-6 text-center">
      Each session includes orientation programs, interactive faculty webinars, and career mentorships 
      to keep learners engaged and connected with the academic community.
    </p>
  </div>
</section>
         <section id='student-reviews' className="py-16 bg-white"> 
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
      Student Reviews
    </h2>

    <div className="space-y-8">
      {/* Review 1 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
        <p className="text-lg text-gray-700 italic">
           “The best thing about Shoolini University Online is flexibility. I could balance work and study easily.”
        </p>
        <p className="mt-3 text-gray-900 font-semibold">— Ananya, Online MBA Student</p>
      </div>

      {/* Review 2 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
        <p className="text-lg text-gray-700 italic">
           “Top-notch faculty and excellent online support. The LMS is smooth and easy to use.”
        </p>
        <p className="mt-3 text-gray-900 font-semibold">— Rahul, Online MCA Student</p>
      </div>

      {/* Review 3 */}
      <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
        <p className="text-lg text-gray-700 italic">
           “Affordable online degree with global recognition. Totally worth it.”
        </p>
        <p className="mt-3 text-gray-900 font-semibold">— Priya, Online BBA Student</p>
      </div>
    </div>

    <p className="text-gray-700 text-lg leading-relaxed mt-10 text-justify">
      <strong>Shoolini University Online</strong> has earned a reputation for student satisfaction, 
      academic innovation, and employability, making it one of the top-rated online universities in India.
    </p>
  </div>

  <div className="flex justify-center mt-10">
      <Button 
        onClick={() => setOpenModal({ type: 'apply' })}
        className="w-20px bg-red-500 h text-white font-bold px-6 py-3 rounded-full shadow-lg  transform duration-300 cursor-pointer"
         >
         Apply Now
       </Button>
       </div>
</section>

        <ShooliniFAQ />

      <section id='placement-records' className="py-12 bg-gray-50">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
      Placement Record
    </h2>

    <div className="bg-white p-8 rounded-2xl shadow-md">
      <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
        With a proven track record, <strong>Shoolini University Online</strong> graduates are placed 
        in reputed organizations with competitive salary packages. The university’s career cell 
        ensures that every learner receives complete professional guidance and industry exposure.
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6 text-lg">
        <li><strong>Average Package:</strong> ₹5–6 LPA</li>
        <li><strong>Highest Package:</strong> ₹18 LPA</li>
        <li><strong>Placement Rate:</strong> 95%+ for MBA and MCA graduates</li>
      </ul>

      <p className="text-gray-700 text-lg leading-relaxed text-justify">
        Dedicated <strong>career support mentors</strong> assist students with resume building, 
        LinkedIn optimization, mock interviews, and professional networking — helping them secure 
        roles in leading companies across diverse industries.
      </p>
    </div>
  </div>
</section>

      {/* Hiring Companies */}
      <section id='placement-partners' className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Top Recruiters at Shoolini</h2>
          <p className="text-xl text-gray-600">Trusted by global companies</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327720/nestle_bibwqx.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327108/decathlon_zp87ip.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327200/icici_1_quita6.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company_vjgouc.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/company1_tktbp7.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327090/company9_p4pgg3.webp", 
              "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327088/com10_cm37v8.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany4_h5nana.webp", 
              "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/companany5_qs6bgc.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/adove_jtmiou.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327854/samsung_sosfqv.webp",
              "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/3_qmk7vp.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327026/4_jdqypx.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327026/5_mcevmm.webp", 
              "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/6_wioxuw.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/7_eilzgq.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327028/9_eqrytp.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327362/lt_akwpfk.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327172/hindustanunilever_qrh10l.webp", "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327282/lg_luyozv.webp"].map((src, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform">
              <Image width={100} height={100} loading="lazy" src={src} alt="Recruiter" className="h-12 object-contain" />
            </div>
          ))}
          
        </div>
        <div className="flex justify-center mt-10">
      <Button 
        onClick={() => setOpenModal({ type: 'apply' })}
        className="w-20px bg-red-500 h text-white font-bold px-6 py-3 rounded-full shadow-lg  transform duration-300 cursor-pointer"
         >
         Apply Now
       </Button>
       </div>
      </section>
       <section id='shoolini-reviews' className="bg-gray-50 py-16 px-6 lg:px-20" >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Shoolini University <span className="text-blue-600">Reviews</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Shoolini University Online stands among India’s top online universities,
          praised for its academic excellence, research-driven approach, and digital
          innovation.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
          <p className="text-gray-700 mb-6">
            “The interactive learning methods at Shoolini University make studying online
            engaging and effective. I love how flexible the courses are!”
          </p>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-800">Amit Sharma</h4>
              <p className="text-sm text-gray-500">MBA Student (Online)</p>
            </div>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
          <p className="text-gray-700 mb-6">
            “Affordable fee structure and a truly industry-oriented curriculum! The faculty
            support has been outstanding throughout my journey.”
          </p>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-800">Priya Mehta</h4>
              <p className="text-sm text-gray-500">BBA Online Student</p>
            </div>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-600 text-lg leading-relaxed">
          With a growing global alumni network, <span className="font-semibold text-blue-600">
            Shoolini University Online
          </span>{" "}
          continues to redefine online education standards in India — combining flexibility,
          innovation, and academic excellence.
        </p>
      </div>
      <div className="flex justify-center mt-10">
      <Button 
        onClick={() => setOpenModal({ type: 'apply' })}
        className="w-20px bg-red-500 h text-white font-bold px-6 py-3 rounded-full shadow-lg  transform duration-300 cursor-pointer"
         >
         Apply Now
       </Button>
       </div>
    </section>
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 pt-12 sm:pt-16 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-50" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
                  {/* Company Info */}
                  <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327282/logo_shoolini_cgz1an.webp" alt="Shoolini University Logo" className="h-10 w-auto bg-white" />
                        <span className="text-xl font-bold text-red">shoolini</span>
                      </div> 
                      <p className="text-sm text-gray-400 leading-relaxed">
                        UGC-entitled, NAAC A+ accredited online degrees designed for modern learners. 
                        Transform your career with globally recognized programs.
                      </p>
                      
                      {/* Social Media */}
                      <div className="flex space-x-4">
                        {[
                          { icon: '📘', label: 'Facebook' },
                          { icon: '📷', label: 'Instagram' },
                          { icon: '🐦', label: 'Twitter' },
                          { icon: '💼', label: 'LinkedIn' }
                        ].map((social, i) => (
                          <div key={i} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                            <span className="text-lg">{social.icon}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
    
                  {/* Programs */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-white font-bold mb-4 text-lg">Programs</h4>
                      <ul className="space-y-3 text-sm">
                        {['MBA', 'BBA',  'BCA', 'M.Com', 'B.Com','M.Sc.', 'MA'].map((program, i) => (
                          <li key={i} onClick = {() => setOpenModal({ type: 'apply',})} className="hover:text-orange-400 transition-colors cursor-pointer">
                            {program}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
    
                  {/* Resources */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-white font-bold mb-4 text-lg">Resources</h4>
                      <ul className="space-y-3 text-sm">
                        {[
                          { name: 'Admissions', href: '#Admission' },
                          { name: 'About', href: '#About' },
                          { name: 'Placements', href: '#Placement' },
                          { name: 'FAQs', href: '#Faq' },
                          { name: 'Quick Comparison', href: '#QuickComparison' },
                          { name: 'Fees Structure', href: '#Fees' }
                        ].map((link, i) => (
                          <li key={i}>
                            <a href={link.href} className="hover:text-orange-400 transition-colors">
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
    
                  {/* Contact */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      <h4 className="text-white font-bold mb-4 text-lg">Contact Us</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          
                          <a href="tel:+917042867717" className="p-2 rounded-lg hover:bg-slate-100 transition-all duration-200" title="Call us"  aria-label="Call us at +91 7042646766">
                                       
                                       <span className="text-orange-400">📞</span>
                                      </a>
                          <span className="text-sm">+91 7042646766</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center" aria-hidden="true">
                            <span className="text-orange-400">✉️</span> 
                          </div>
                          <a href="mailto:info@unifostedu.com" className='p-2 rounded-lg hover:bg-slate-100 transition-all duration-200' title='Email us' aria-label='Email us at info@unifostedu.com'>
                          <span className="text-sm">info@unifostedu.com</span>
                          </a>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={() => setOpenModal({ type: 'apply' })}
                        className="w-full bg-red-500 hover:from-red-600 hover:to-red-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        Apply Now
                      </Button>
                    </motion.div>
                  </div>
                </div>
              
                {/* Popular Programs Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="border-t border-white/10 pt-8 mb-8"
                >
                  <h4 className="text-lg font-bold mb-6 text-white text-center">
                    Popular Programs & Specializations – Shoolini University Online  
                  </h4>
    
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {[
                     "BBA General - Shoolini Online",
                     "BBA HR, Marketing, Finance - Shoolini Online",
                     "BBA Digital Marketing - Shoolini Online",
                     "BBA Computer Science - Shoolini Online",
                     "BBA Direct Selling - Shoolini Online",
                     "BCA General - Shoolini Online",
                     "BCA Machine Learning - Shoolini Online",
                     "BCA Data Science - Shoolini Online",
                     "BCA Cyber Security - Shoolini Online",
                     "BCA Artificial Intelligence - Shoolini Online",
                     "B.Com Accounting, Finance & Taxation - Shoolini Online",

                     // PG Courses
                     "MBA Marketing Management - Shoolini Online",
                     "MBA Operation & Supply Chain Management - Shoolini Online",
                     "MBA Agri Business Management - Shoolini Online",
                     "MBA Human Resource Management - Shoolini Online",
                     "MBA IT Management - Shoolini Online",
                     "MBA Biotechnology Management - Shoolini Online",
                     "MBA Financial Management - Shoolini Online",
                     "MBA Tourism Management - Shoolini Online",
                     "MBA Food Technology Management - Shoolini Online",
                     "MBA Digital Marketing - Shoolini Online",
                     "MBA Real Estate Management - Shoolini Online",
                     "MBA Pharma & Health Care Management - Shoolini Online",
                     "MBA Retail Management - Shoolini Online",
                     "MBA Direct Selling Management - Shoolini Online",
                     "MBA Banking & Insurance - Shoolini Online",
                     "MBA Data Science & Business Analytics - Shoolini Online",
                     "Executive MBA - Shoolini Online",
                     "M.Sc Data Science - Shoolini Online",
                     "MA English Literature - Shoolini Online",
                     "MA Journalism & Mass Communication - Shoolini Online",
                    ].map((keyword, index) => (
                      <span
                        key={index} onClick = {() => setOpenModal({ type: 'apply',})}
                        className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-500"
                        title={keyword}
                      >
                        {keyword.length > 25 ? `${keyword.substring(0, 25)}...` : keyword}
                      </span>
                    ))}
                  </div>
                </motion.div>
    
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="pt-8 pb-6 text-center text-sm text-gray-400 border-t border-white/10"
                >
                  <p>&copy; {new Date().getFullYear()} shoolini University Online. All rights reserved.</p>
                  <p className="mt-2 text-xs">UGC-entitled | NAAC A+ Accredited | Globally Recognized</p>
                </motion.div>
              </div>
            </footer>          
            </main>
        </div> 
       {openModal && (
              <ApplyEnquiryModal
                open={!!openModal}
                onOpenChange={(v) => !v && setOpenModal(null)}
                title={openModal?.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
                subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
                imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327859/shoolini_form1_lsfmyo.png"
                universityName="Shoolini Online University"
                defaultProgram="MBA"
                formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
              />
            )}
       </div>
    </>
  );
};

export default Shoolini;
