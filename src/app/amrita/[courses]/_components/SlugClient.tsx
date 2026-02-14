"use client";
import { FaChevronUp, FaSearch, FaBars, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope ,FaWhatsapp} from 'react-icons/fa';
import { i } from 'node_modules/framer-motion/dist/types.d-DagZKalS';
import React, { useState } from 'react';
import ApplyEnquiryModal from "@/components/ApplyEnquiryModal";
type ModalType = "apply" | "enquire";

interface ModalState {
  type: ModalType;
  course?: string;
};
// Types
interface Course {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  deadline: string;
  seatsLeft: boolean;
  emiPerMonth: number;
  totalFee: number;
  semesterFee: number;
  yearFee: number;
  studentsCountries: string;
  indianStates: string;
  ranking: {
    position: string;
    type: string;
    description: string;
  };
  accreditations: Array<{
    name: string;
    description: string;
  }>;
  highlights: Array<{
    icon: string;
    number: string;
    title: string;
    description: string;
  }>;
  specializations: Array<{
    name: string;
    link: string;
  }>;
  syllabus: {
    [key: string]: string[];
  };
  eligibility: {
    ugMarks: string;
    education: string;
    finalYear: string;
    workExperience: string;
  };
  duration: {
    minimum: string;
    maximum: string;
  };
  fees: {
    indian: {
      emi: number;
      semesterFee: number;
      yearFee: number;
      totalFee: number;
    };
    foreign: {
      semesterFee: number;
      yearFee: number;
      totalFee: number;
    };
    additional: {
      registration: number;
      examination: number;
    };
  };
  studyAbroad: {
    programs: string[];
    recognition: string;
  };
  internationalPartners: Array<{
    name: string;
    logo: string;
  }>;
  placementAssistance: {
    mentorship: string;
    softSkills: string;
    resumeBuilding: string;
  };
  hiringPartners: string[];
}

const CourseSlugPage = ({ course }: { course: Course }) => {
  const [activeSemester, setActiveSemester] = useState<string>('semester4');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    course: course?.shortTitle || '',
    state: '',
    city: ''
  });
const [openModal, setOpenModal] = useState<ModalState | null>(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const scrollToTop = () => {
 window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      
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
   {/* Hero Section */}
<section className="relative text-white overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://res.cloudinary.com/didkrwhbu/image/upload/v1771063861/courseAmrita_k9sfgb.png"   
      alt="MBA Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60"></div>
  </div>

  <div className="container mx-auto px-6 py-20 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {course.title}
        </h1>

        {/* Accreditation Images */}
        <div className="flex items-center gap-6 mb-6 flex-wrap">
          <img src="/images/nirf.png" alt="nirf" className="h-12 bg-white p-1 rounded" />
          <img src="/images/naac.png" alt="naac" className="h-12 bg-white p-1 rounded" />
          <img src="/images/wes.webp" alt="wes" className="h-12 bg-white p-1 rounded" />
        </div>

        <p className="text-xl mb-6">
          {course.tagline}
        </p>

        {/* Deadline */}
        <p className="text-yellow-400 font-semibold text-lg mb-2">
          Deadline: {course.deadline}
        </p>

        {course.seatsLeft && (
          <p className="text-yellow-300 font-semibold text-lg mb-6">
            Few Seats Left!
          </p>
        )}

        {/* Buttons */}
          <div className="flex gap-4 flex-wrap">

            <button
             onClick={() => setOpenModal({ type: 'apply' })}
             className="bg-[#B8164A] px-8 py-3 rounded-lg font-semibold transition cursor-pointer text-white"
            >
            Apply Now
            </button>

              <a
              href="/brochure/amrita/mba-brochure-amrita-ahead.pdf"
              download
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition inline-flex items-center justify-center"
              >
              Download Brochure
              </a>

               </div>

      </div>

      
    </div>
  </div>

  {/* STATS BAR */}
  <div className="bg-white py-8">
    <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 text-center gap-6">

      <div>
        <p className="text-3xl font-bold text-pink-700">₹{course.emiPerMonth.toLocaleString()}</p>
        <p className="text-gray-600 text-sm">per month - Zero Cost EMI</p>
      </div>

      <div>
        <p className="text-3xl font-bold text-pink-700">₹{course.totalFee.toLocaleString()}</p>
        <p className="text-gray-600 text-sm">2-Year Tuition Fee</p>
      </div>

      <div>
        <p className="text-3xl font-bold text-pink-700">{course.studentsCountries}</p>
        <p className="text-gray-600 text-sm">Student's Countries</p>
      </div>

      <div>
        <p className="text-3xl font-bold text-pink-700">{course.indianStates}</p>
        <p className="text-gray-600 text-sm">Indian States' Students</p>
      </div>

    </div>
  </div>

</section>


  {/* Overview Section */}
<section className="py-20 bg-gradient-to-b from-white to-purple-50">
  <div className="container mx-auto px-6">

    <h2 className="text-5xl font-bold text-center mb-16 text-[#B8164A]">
      Online MBA Overview
    </h2>

    <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-2xl p-12">

      {/* Left Image */}
      <div className="w-full">
        <img
          src="https://res.cloudinary.com/didkrwhbu/image/upload/v1771066433/amrita_overview_t6ofin.png"   
          alt="MBA Overview"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>

      {/* Right Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          <span className="font-bold text-[#B8164A]">
            33.94% Average Salary Growth
          </span> (Recent Graduate Survey)
        </p>

        <p className="text-lg leading-relaxed text-gray-600">
          The Online MBA (Master of Business Administration) from Amrita Online is designed for ambitious professionals who want to lead with impact. Over two years (with flexibility to stretch up to four), you will gain a solid foundation in core management areas—finance, marketing, operations, human resources—while choosing one of 10 industry-ready specializations like AI, FinTech, ESG, or Business Analytics. The degree is UGC-entitled and AICTE-approved, offered by a top-ranked, NAAC A++ accredited university in India (NIRF Rank #8), and recognized globally through WES. Classes are delivered live on weekends, allowing you to balance work and study effectively while pursuing an online MBA in India.
        </p>
      </div>

    </div>

  </div>
</section>


      {/* Key Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Key Program Highlights & Advantages</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {course.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover-lift border border-purple-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-white">{highlight.number}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>

          {/* Accreditation Badges */}
<div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8 items-center">

  {/* Times Higher Education */}
  <div className="text-center">
    <div className="bg-purple-100 rounded-2xl p-6 mb-4 flex items-center justify-center h-28">
      <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1770014184/global_xoo0ud.svg" alt="Times Higher Education" className="h-16 object-contain" />
    </div>
    <p className="text-sm text-gray-600">No. 1 in India</p>
  </div>

  {/* THE World University */}
  <div className="text-center">
    <div className="bg-blue-100 rounded-2xl p-6 mb-4 flex items-center justify-center h-28">
      <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1770014185/wur_yt2xei.svg" alt="THE Ranking" className="h-16 object-contain" />
    </div>
    <p className="text-sm text-gray-600">No 1 Private University in India</p>
  </div>

  {/* NAAC */}
  <div className="text-center">
    <div className="bg-red-100 rounded-2xl p-6 mb-4 flex items-center justify-center h-28">
      <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1770013884/ranking-group-naac_oape2r.svg" alt="NAAC" className="h-16 object-contain" />
    </div>
    <p className="text-sm text-gray-600">Highest Grade</p>
  </div>

  {/* NIRF */}
  <div className="text-center">
    <div className="bg-orange-100 rounded-2xl p-6 mb-4 flex items-center justify-center h-28">
      <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1770014184/nirf-logo-2025_i2ftca.svg" alt="NIRF" className="h-16 object-contain" />
    </div>
    <p className="text-sm text-gray-600">8th Ranked by Govt. Of India</p>
  </div>

  {/* WES */}
  <div className="text-center">
    <div className="bg-green-100 rounded-2xl p-6 mb-4 flex items-center justify-center h-28">
      <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327870/wes_zuxwfs.webp" alt="WES" className="h-16 object-contain" />
    </div>
    <p className="text-sm text-gray-600">In USA & Canada</p>
  </div>

</div>

        </div>
      </section>

      {/* Why Amrita */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Discover Why Amrita Online Offers the <span className="gradient-text">Best Online MBA Course in India</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Specializations */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover-lift">

  {/* Top Image */}
  <img
    src="https://res.cloudinary.com/didkrwhbu/image/upload/v1771070649/specialization_rczejc.png"   
    alt="MBA Specializations"
    className="w-full h-56 object-cover"
  />

  <div className="p-10">

    <div className="mb-8">
      

      <h3 className="text-3xl font-bold mb-4 text-gray-800">
        Industry-Ready MBA Specializations:
      </h3>

      <p className="text-gray-600 mb-6">
        Ten Industry-ready MBA specializations:
      </p>
    </div>

    <ul className="space-y-3">
      {course.specializations.map((spec, index) => (
        <li key={index} className="flex items-start group">
          <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform"></span>
          <a href={spec.link} className="text-purple-900 hover:text-purple-600 font-medium transition-colors">
            {spec.name}
          </a>
        </li>
      ))}
    </ul>

  </div>
</div>


            {/* Right - Career Growth */}
            <div className="space-y-8">

  {/* Card 1 */}
  <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 hover-lift">
    
    {/* Left Image */}
    <div className="w-full md:w-1/3">
      <img 
        src="https://res.cloudinary.com/didkrwhbu/image/upload/v1771071559/carrer_grouth1_haxshw.png" 
        alt="University" 
        className="w-full h-56 object-cover rounded-2xl"
      />
    </div>

    {/* Right Content */}
    <div className="w-full md:w-2/3">
      <h3 className="text-3xl font-bold mb-4 text-gray-800">
        Top Ranked University in India
      </h3>
      <p className="text-lg leading-relaxed text-gray-600">
        Boost your career with an Online MBA from Amrita Online, Amrita Vishwa Vidyapeetham, one of India's top-ranked university (Rank#8, NIRF- UGC). We also hold an NAAC A++ accreditation, ensuring you receive a globally recognized and respected degree.
      </p>
    </div>
  </div>


  {/* Card 2 */}
  <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 hover-lift">
    
    {/* Left Image */}
    <div className="w-full md:w-1/3">
      <img 
        src="https://res.cloudinary.com/didkrwhbu/image/upload/v1771071559/carrer_grouth2_i2p69h.png" 
        alt="Career Growth" 
        className="w-full h-56 object-cover rounded-2xl"
      />
    </div>

    {/* Right Content */}
    <div className="w-full md:w-2/3">
      <h3 className="text-3xl font-bold mb-6 text-gray-800">Career Growth</h3>

      <div className="space-y-4">
        <div className="border-l-4 border-purple-500 pl-4">
          <p className="font-semibold text-gray-800">Top Faculty & Mentorship:</p>
          <p className="text-gray-600">{course.placementAssistance.mentorship}</p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <p className="font-semibold text-gray-800">Placement Assistance:</p>
          <p className="text-gray-600">
            Comprehensive career guidance and placement assistance, ensuring you secure the right opportunities.
          </p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <p className="font-semibold text-gray-800">Global audience:</p>
          <p className="text-gray-600">
            Build a global network by connecting with peers from over {course.studentsCountries} countries.
          </p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <p className="font-semibold text-gray-800">Flexibility:</p>
          <p className="text-gray-600">
            Access course materials anytime, from anywhere with Live weekend sessions allowing you to balance work and study effectively while pursuing an online MBA in India.
          </p>
        </div>
      </div>
    </div>

  </div>

</div>

          </div>
        </div>
      </section>

      {/* International Opportunities */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
  <div className="container mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left Image Grid */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-2 border border-white/20">
        <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl p-8">
          
          <div className="grid grid-cols-2 gap-4">

            {[
              "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023266/u5_krydrf.svg",
              "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023264/u6_s2wxmw.svg",
              "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u1_u0cuqy.svg",
              "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u2_d3q36u.svg",
              "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023263/u9_ezzorf.svg",
              "https://res.cloudinary.com/didkrwhbu/image/upload/v1770023264/u7_uo1ia5.svg"
            ].map((url, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-square">
                <img
                  src={url}
                  alt={`International opportunity ${i + 1}`}
                  className="w-full h-full object-cover rounded-xl hover:scale-105 transition duration-300"
                />
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-5xl font-bold mb-8">
          International Opportunities for our Online MBA
        </h2>

        <div className="space-y-6">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-3">Study Abroad:</h3>
            <p className="text-lg">
              Go Global through our International University partners – Student Exchange program, Study Abroad Program.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-3">WES-recognized:</h3>
            <p className="text-lg">
              {course.studyAbroad.recognition}
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


      {/* Curriculum */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl font-bold mb-8">
                Online MBA Courses List and <span className="gradient-text">Details</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Best-in-class content by leading faculty and industry leaders in the form of videos, case studies and projects.
              </p>

              <h3 className="text-3xl font-bold mb-6 text-gray-800">Online MBA Syllabus</h3>

              <div className="space-y-4">
                {Object.keys(course.syllabus).map((semester, index) => (
                  <div key={semester} className="border-b border-gray-200">
                    <button
                      onClick={() => setActiveSemester(semester)}
                      className="w-full flex justify-between items-center py-4 text-left hover:text-purple-600 transition-colors"
                    >
                      <span className="text-xl font-semibold capitalize">
                        {semester.replace('semester', 'Semester ')}
                      </span>
                      <svg
                        className={`w-6 h-6 transform transition-transform ${
                          activeSemester === semester ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeSemester === semester && (
                      <ul className="pb-4 space-y-2 animate-fade-in">
                        {course.syllabus[semester].map((subject, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></span>
                            <span className="text-gray-700">{subject}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10">
              <h3 className="text-3xl font-bold mb-8 text-gray-800">Online MBA Eligibility Criteria</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <p className="text-gray-700">
                    Candidates must have a minimum of <span className="font-bold text-purple-900">{course.eligibility.ugMarks}</span> marks in UG.
                  </p>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start bg-white rounded-2xl p-4 shadow-md">
                    <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">Candidates must have passed 10 + 2</span>
                  </li>
                  <li className="flex items-start bg-white rounded-2xl p-4 shadow-md">
                    <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">{course.eligibility.education}</span>
                  </li>
                  <li className="flex items-start bg-white rounded-2xl p-4 shadow-md">
                    <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">{course.eligibility.finalYear}</span>
                  </li>
                </ul>

                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-6 mt-6">
                  <p className="font-bold text-lg">{course.eligibility.workExperience}</p>
                </div>

                <div className="flex items-center gap-4 mt-8 bg-white rounded-2xl p-6 shadow-md">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">ONLINE COURSE DURATION</p>
                    <p className="text-lg font-bold text-gray-800">
                      Minimum: {course.duration.minimum}
                    </p>
                    <p className="text-lg font-bold text-gray-800">
                      Maximum: {course.duration.maximum}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specializations Grid */}
          <div className="mt-20">
            <h3 className="text-4xl font-bold text-center mb-12">
              <span className="gradient-text">MBA Specializations</span>
            </h3>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10">
              <h4 className="text-2xl font-bold mb-6 text-gray-800">General Management Electives</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 hover-lift border border-purple-100">
                  <h5 className="font-bold text-purple-900 mb-2">Management Consulting</h5>
                </div>
                <div className="bg-white rounded-xl p-6 hover-lift border border-purple-100">
                  <h5 className="font-bold text-purple-900 mb-2">Leadership Management</h5>
                </div>
                <div className="bg-white rounded-xl p-6 hover-lift border border-purple-100">
                  <h5 className="font-bold text-purple-900 mb-2">Financial Statement Analysis and Business Valuation</h5>
                </div>
                <div className="bg-white rounded-xl p-6 hover-lift border border-purple-100">
                  <h5 className="font-bold text-purple-900 mb-2">Business Ethics and Corporate Governance</h5>
                </div>
                <div className="bg-white rounded-xl p-6 hover-lift border border-purple-100">
                  <h5 className="font-bold text-purple-900 mb-2">Research Methodology</h5>
                </div>
                <div className="bg-white rounded-xl p-6 hover-lift border border-purple-100">
                  <h5 className="font-bold text-purple-900 mb-2">Mergers and Acquisitions</h5>
                </div>
                <div className="bg-white rounded-xl p-6 hover-lift border border-purple-100">
                  <h5 className="font-bold text-purple-900 mb-2">Intellectual Property Rights (IPR)</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Degree Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">
                Earn your Online MBA Degree from a NAAC A++ University
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-3">Universally Accepted & Recognized Degree</h3>
                  <p className="text-lg">
                    Earn a globally recognized Online MBA degree that is UGC entitled and WES recognized (valid in the USA & Canada), opening doors to careers and further education worldwide.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-3">Same as an On-Campus Degree</h3>
                  <p className="text-lg">
                    The curriculum, faculty, and academic standards for the online program are similar to those of the on-campus course. The mode of education i.e. Online is listed only at the back of the certificate.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20">
              <div className="bg-white rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">A</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">AMRITA</h3>
                  <p className="text-sm text-gray-600">VISHWA VIDYAPEETHAM</p>
                </div>
                <div className="border-t-4 border-purple-600 pt-6">
                  <h4 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    Master of Business Administration
                  </h4>
                  <p className="text-center text-gray-600 italic mb-6">
                    under the Faculty of Management
                  </p>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-700">Senthil K</p>
                    <p className="text-sm text-gray-500">in recognition of the successful completion of all the requirements for the award</p>
                    <p className="text-sm text-gray-500">the said Degree with First Class during March 2027.</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-xs text-center text-gray-500">
                      Given on this day, the 30th of September 2027, under the seal of the University
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fees Structure */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Online MBA <span className="gradient-text">Fees Structure</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Indian Students */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 hover-lift border-2 border-purple-100">
              <h3 className="text-3xl font-bold mb-8 text-purple-900">For Indian Students:</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">per month*</p>
                      <p className="text-sm text-gray-600">Zero Cost EMI</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-purple-900">₹{course.fees.indian.emi.toLocaleString()}</p>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Semester Fee</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-gray-800">₹{course.fees.indian.semesterFee.toLocaleString()}</p>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">1-Year Fee (5% discount)</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-gray-800">₹{course.fees.indian.yearFee.toLocaleString()}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Tuition Fee</p>
                    </div>
                  </div>
                  <p className="text-4xl font-bold text-purple-900">₹{course.fees.indian.totalFee.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Foreign Students */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-3xl shadow-2xl p-10 hover-lift">
              <h3 className="text-3xl font-bold mb-8">For Foreign Nationals:</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm">Semester Fee</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold">₹{course.fees.foreign.semesterFee.toLocaleString()}</p>
                </div>

                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm">1-Year Fee (5% discount)</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold">₹{course.fees.foreign.yearFee.toLocaleString()}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm">Total Tuition Fee</p>
                    </div>
                  </div>
                  <p className="text-4xl font-bold">₹{course.fees.foreign.totalFee.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center space-y-2">
            <p className="text-gray-600">* Registration fee - Rs. {course.fees.additional.registration}</p>
            <p className="text-gray-600">* Examination Fee - Rs.{course.fees.additional.examination} Per Semester</p>
          </div>
        </div>
      </section>

      {/* Study Abroad */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Study Abroad in <span className="gradient-text">USA & Europe</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="flex border-b border-gray-200 mb-8">
              {course.studyAbroad.programs.map((program, index) => (
                <button
                  key={index}
                  className={`px-8 py-4 font-semibold transition-all ${
                    index === 0
                      ? 'border-b-4 border-purple-600 text-purple-900'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {program}
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10">
              <p className="text-xl leading-relaxed text-gray-700">
                This program is for one semester or 6 months. Students can apply during their pre-final semester and have the opportunity to complete their final year project / courses at the host university. The students are not required to pay the tuition fee at the host university. You only pay your normal tuition fee to Amrita Online MBA.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-4xl font-bold text-center mb-12">
              Go Global through our <span className="gradient-text">International University Partners</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {course.internationalPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover-lift flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-xl mx-auto mb-3"></div>
                    <p className="text-sm font-semibold text-gray-700">{partner.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Online MBA <span className="gradient-text">Admission Process</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl p-10 text-white hover-lift">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Choose a Program</h3>
              <p className="text-lg">Select the specialization that aligns with your career goals</p>
            </div>

            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-10 text-white hover-lift">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Apply Online</h3>
              <p className="text-lg">Fill out the application form with your details and documents</p>
            </div>

            <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-3xl p-10 text-white hover-lift">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Join the Program</h3>
              <p className="text-lg">Start your MBA journey with expert faculty and global peers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Assistance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="gradient-text">Placement Assistance</span>
            </h2>
            <p className="text-xl text-gray-600">@ Amrita Vishwa Vidyapeetham</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover-lift">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Mentorship</h3>
              <p className="text-gray-600">{course.placementAssistance.mentorship}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 hover-lift">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Soft Skills Training</h3>
              <p className="text-gray-600">{course.placementAssistance.softSkills}</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 hover-lift">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Resume Building & Mock Interviews</h3>
              <p className="text-gray-600">{course.placementAssistance.resumeBuilding}</p>
            </div>
          </div>

          {/* Hiring Partners */}
          <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold text-center mb-12">Our Hiring Partners</h3>
            <p className="text-center text-xl mb-12">Hiring partners of Amrita University, Empowering your future</p>
            
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-8">
              {course.hiringPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition-all hover:scale-110"
                >
                  <div className="aspect-square bg-white/20 rounded-lg flex items-center justify-center">
                    <p className="text-xs font-semibold text-center px-2">{partner}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Student <span className="gradient-text">Testimonials & Reviews</span>
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12">Experiences with Amrita Online</p>

          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-12 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
              </div>
              
              <div className="p-12 flex flex-col justify-center">
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                  "As a working professional in the UAE, I was looking to transition into a managerial role. I chose the Amrita online program because of its flexibility, which allows me to continue working while pursuing my MBA. The university's global recognition and the program's structured curriculum were major factors in my decision. The supportive faculty and reasonable fee structure have made my journey seamless. I'm also eligible for the Global Exchange program, which makes this an incredibly satisfying experience."
                </p>
                <p className="text-2xl font-bold text-purple-900">Vishal</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button className="w-3 h-3 bg-purple-600 rounded-full"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Transform Your Career?
          </h2>
          <p className="text-2xl mb-12 font-light">
            Join thousands of professionals advancing their careers with Amrita Online MBA
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-900 px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-purple-900 transition-all duration-300">
              Download Brochure
            </button>
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
 </div>
  );
};

export default CourseSlugPage;