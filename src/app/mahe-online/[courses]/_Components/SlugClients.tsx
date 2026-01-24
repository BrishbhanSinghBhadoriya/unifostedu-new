'use client';

import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion";
import { ChevronRight, Star, Calendar, Users, BookOpen, CreditCard, GraduationCap, Clock, TrendingUp, Award, Globe, Check, Download, Play } from 'lucide-react';
import { OpenModalState } from 'types/Modal';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
export interface CourseData {
  id: string;
  title: string;
  subtitle: string;
  rating: number;
  duration: string;
  semesters: number;
  eligibility: string | {
    indian: {
      education: { title: string; description: string };
      grades: { title: string; description: string };
      experience: { title: string; description: string };
    };
    international: {
      education: { title: string; description: string };
      grades: { title: string; description: string };
      experience: { title: string; description: string };
    };
  };
  semesterFee: number;
  courseFee: number;
  emiStarting: number;
  seatsFilledPercent: number;
  lastAdmissionDate: string;
  nirf: {
    rank: number;
    year: number;
  };
  university: {
    name: string;
    logo: string;
    description: string;
    established: number;
    studentNationalities: number;
    facultyCount: number;
    studentsWorldwide: number;
    yearsOfExcellence: number;
  };
  specializations: string[];
  accreditations: Array<{
    name: string;
    description: string;
  }>;
  benefits: Array<{
    image: string;
    title: string;
    description: string;
  }>;
  courseraPartners: Array<{
  image: string;
  name: string;
  }>;
  essentialDomains: Array<{
    title: string;
    description: string;
  }>;
  learnSkills: Array<{
    title: string;
    description: string;
  }>;
  skills: string[];
  curriculum: Record<string, {
    semester1: string[];
    semester2: string[];
  }>;
  hiringPartners: Array<{
    images: string;
    alt: string;
  }>;
  careerOptions: {
    jobProfiles: string[];
    industries: string[];
  };
  features: Array<{
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}


interface SlugClientsProps {
  courseData: CourseData;
}

const CourseSlugPage: React.FC<SlugClientsProps> = ({ courseData }) => {
  const [activeTab, setActiveTab] = useState('year1');
  const [activeFeeTab, setActiveFeeTab] = useState('indian');
  const [activeEligibilityTab, setActiveEligibilityTab] = useState('indian');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<OpenModalState>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const course = courseData;

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero', 'specializations', 'rankings', 'benefits', 'coursera', 
        'curriculum', 'hiring-partners', 'career-options', 'features', 
        'certificate', 'university-stats', 'fees', 'eligibility', 
        'admission', 'quick-info', 'faqs'
      ];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionLabels: Record<string, string> = {
    'hero': 'Overview',
    'specializations': 'Specializations',
    'rankings': 'Rankings',
    'benefits': 'Benefits',
    'coursera': 'Coursera',
    'curriculum': 'Curriculum',
    'hiring-partners': 'Hiring Partners',
    'career-options': 'Career Options',
    'features': 'Features',
    'certificate': 'Certificate',
    'university-stats': 'University Stats',
    'fees': 'Fees',
    'eligibility': 'Eligibility',
    'admission': 'Admission',
    'quick-info': 'Quick Info',
    'faqs': 'FAQs',
  };

  if (!course) return null;

  return (
    <div className="font-manrope min-h-screen bg-white">
      {/* Professional Responsive Header - Optimized */}
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 fixed top-0 z-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
              {/* Left Logo */}
              <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-4 flex-shrink-0">
                <img 
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg" 
                  alt="Mahe Logo" 
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" 
                />
              </div>

              {/* Right Side - Responsive */}
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4 flex-1 justify-end">
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                  aria-expanded={isMobileMenuOpen}
                  className="lg:hidden inline-flex items-center p-2 rounded-md border hover:bg-gray-50 cursor-pointer mr-2"
                >
                  <span className="text-xl">☰</span>
                </button>

                {/* Phone - Hidden on small screens */}
                <a
                  href="tel:+917042867717"
                  className="hidden sm:flex items-center gap-1.5 md:gap-2 text-gray-700 font-medium text-xs sm:text-sm md:text-base hover:text-orange-600 transition-colors"
                > 
                  <span className="text-base sm:text-lg">📞</span>
                  <span className="hidden lg:inline">+91 7042646766</span>
                  <span className="lg:hidden">Call</span>
                </a>
                
                {/* Mobile Phone Icon */}
                <a
                  href="tel:+917042867717"
                  className="sm:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full text-orange-600 hover:bg-orange-200 transition-colors"
                >
                  <span className="text-base">📞</span>
                </a>
                
                {/* Apply Button */}
                <button 
                  onClick={() => setOpenModal({ type: 'apply' })}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
                >
                  <span className="hidden sm:inline">Apply Now</span>
                  <span className="sm:hidden">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </header>

      <main className="pt-16 lg:pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 px-4 py-3 sticky top-[56px] sm:top-[64px] lg:top-[80px] z-40 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-600 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <span>Home</span>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <span>Courses</span>
          <ChevronRight className="w-4 h-4 flex-shrink-0" /> 
          <span className={activeSection === 'hero' ? "text-gray-900 font-semibold" : "text-gray-600"}>
            {course.title}
          </span>
          {activeSection && activeSection !== 'hero' && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
              <span className="text-orange-600 font-semibold">{sectionLabels[activeSection]}</span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div id="hero" className="bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <img src="/images/manipallogo.jpg" alt="MANIPAL" className="w-30 h-30" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      <Award className="w-4 h-4 inline mr-1" />
                      Rank {course.nirf.rank}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      TOP UNIVERSITY IN INDIA
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">NIRF {course.nirf.year}</p>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                {course.title}
              </h1>
              <p className="text-2xl text-gray-700 mb-4">{course.subtitle}</p>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-2xl font-bold text-gray-900">{course.rating}</span>
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 ml-1" />
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                {isDescriptionExpanded
                  ? course.university.description
                  : `${course.university.description.substring(0, 200)}...`}
                {course.university.description.length > 200 && (
                  <button
                    onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                    className="text-blue-600 font-semibold ml-2"
                  >
                    {isDescriptionExpanded ? 'Read less' : 'Read more'}
                  </button>
                )}
              </p>

              <button  onClick={() => setOpenModal({ type: 'apply' })} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                <Download className="w-5 h-5 inline mr-2" />
                Download Brochure
              </button>
            </div>

            {/* Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4 inline-block">
                Admissions Open
              </div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="text-2xl font-bold text-blue-600">{course.seatsFilledPercent}%</div>
                </div>
                <span className="text-gray-700">Of Seats Filled</span>
                <div className="ml-auto text-sm text-gray-600">
                  Exclusive Access: <span className="font-semibold text-blue-600">Coursera</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <Clock className="w-6 h-6 text-gray-600 mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Course duration</p>
                  <p className="font-bold text-gray-900">{course.duration} • {course.semesters} Sem</p>
                </div>
                <div>
                  <Users className="w-6 h-6 text-gray-600 mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Eligibility</p>
                  <p className="font-bold text-gray-900">
                    {typeof course.eligibility === 'string' 
                      ? course.eligibility 
                      : "Graduation / 10+2 (Check details below)"}
                  </p>
                </div>
                <div>
                  <CreditCard className="w-6 h-6 text-gray-600 mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Semester Fee</p>
                  <p className="font-bold text-gray-900">INR {course.semesterFee.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">INR {course.courseFee.toLocaleString()} Course Fee</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold">Limited period offer.</span> <a href="#" className="text-blue-600">Know More</a>
                </p>
                <p className="text-blue-600 font-semibold">
                  Avail a 15% scholarship on this program
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specializations */}
      <section id="specializations" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Specializations Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.specializations.map((spec, index) => (
              <div key={index} className="bg-gray-50 hover:bg-gray-100 p-6 rounded-xl transition-colors cursor-pointer border border-gray-200">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" />
                  <h3 className="font-bold text-lg text-gray-900">{spec}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings & Accreditations */}
      <section id="rankings" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Rankings & Accreditations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {course.accreditations.map((acc, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Award className="w-10 h-10 text-orange-500" />
                </div>
                <p className="font-bold text-gray-900 mb-2">{acc.name}</p>
                <p className="text-sm text-gray-600">{acc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section id="benefits" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Online MBA Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {course.benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coursera Benefits */}
      <section id="coursera" className="py-16 px-4 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-black-500 mb-4">
      Get Access To Exclusive Coursera Benefits
    </h2>
    <p className="text-black-600 mb-12 text-lg">
      Choose from 10,000+ courses & professional certifications from leading global universities while pursuing your degree.
    </p>
 <Tabs defaultValue="Top Universities" className="flex flex-col gap-4 mb-8">

  <TabsList className="bg-transparent p-0 w-full justify-start border-b rounded-none h-auto">
    
    <TabsTrigger
      value="Top Universities"
      className="
        px-10 py-5 font-semibold rounded-none mr-4
        border-b-2 border-transparent
        bg-white text-black
        hover:bg-gray-100
        data-[state=active]:bg-black
        data-[state=active]:text-white
        data-[state=active]:border-orange-500
      "
    >
      Top Universities
    </TabsTrigger>

    <TabsTrigger
      value="Essential Domains"
      className="
        px-10 py-5 font-semibold rounded-none mr-4
        border-b-2 border-transparent
        bg-white text-black
        hover:bg-gray-100
        data-[state=active]:bg-black
        data-[state=active]:text-white
        data-[state=active]:border-orange-500
      "
    >
      Essential Domains
    </TabsTrigger>

    <TabsTrigger
      value="Skills You'll Learn"
      className="
        px-10 py-5 font-semibold rounded-none
        border-b-2 border-transparent
        bg-white text-black
        hover:bg-gray-100
        data-[state=active]:bg-black
        data-[state=active]:text-white
        data-[state=active]:border-orange-500
      "
    >
      Skills You'll Learn
    </TabsTrigger>

  </TabsList>

  {/* -------- Top Universities -------- */}
  <TabsContent value="Top Universities">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
      {(course.courseraPartners ?? []).map((partner, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center"
        >
          <img
            src={partner.image}
            alt={partner.name}
            className="max-w-full h-auto object-contain"
          />
        </div>
      ))}
    </div>
  </TabsContent>

  {/* -------- Essential Domains -------- */}
  <TabsContent value="Essential Domains">
    <div className="bg-gray-50 rounded-2xl p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {[1, 2, 3].map((col) => (
          <div key={col} className="space-y-6">
            {(course.essentialDomains ?? [])
              .filter((_, index) => index % 3 === col - 1)
              .map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-lime-400 flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-lg font-medium text-gray-900">
                    {item.title}
                  </span>
                </div>
              ))}
          </div>
        ))}

      </div>
    </div>
  </TabsContent>

  {/* -------- Skills You'll Learn -------- */}
  <TabsContent value="Skills You'll Learn">
    <div className="bg-gray-50 rounded-2xl p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {[1, 2, 3].map((col) => (
          <div key={col} className="space-y-6">
            {(course.learnSkills ?? [])
              .filter((_, index) => index % 3 === col - 1)
              .map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-lime-400 flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-lg font-medium text-gray-900">
                    {item.title}
                  </span>
                </div>
              ))}
          </div>
        ))}

      </div>
    </div>
  </TabsContent>

</Tabs>

   
  </div>
</section>


      {/* Curriculum */}
      <section id="curriculum" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Online MBA Course curriculum</h2>
            <p className="text-gray-600 mb-6">
              Explore list of all subjects (semester wise) covered in our MBA program
            </p>
            <div className="flex gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>15 to 20 hours per week</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>{course.semesters} Sem</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>102 Credits</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            {Object.keys(course.curriculum).sort().map((yearKey) => (
              <button
                key={yearKey}
                onClick={() => setActiveTab(yearKey)}
                className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                  activeTab === yearKey
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'bg-transparent text-gray-600'
                }`}
              >
                {yearKey.replace('year', 'Year ')}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">

  {Object.entries(course.curriculum[activeTab] ?? {}).map(
    ([semesterName, subjects], index) => (
      <div
        key={semesterName}
        className={`rounded-2xl p-8 ${
          index % 2 === 0
            ? "bg-gray-50 text-gray-900"
            : "bg-gray-900 text-white"
        }`}
      >
        <div
          className={`inline-block px-6 py-2 rounded-full font-bold mb-6 ${
            index % 2 === 0
              ? "bg-blue-200 text-gray-900"
              : "bg-green-400 text-gray-900"
          }`}
        >
          {semesterName}
        </div>

        <ul className="space-y-4">
          {subjects.map((subject: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <div
                className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  index % 2 === 0 ? "bg-gray-900" : "bg-white"
                }`}
              ></div>
              <span className="text-lg">{subject}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  )}

</div>


          <div className="text-center mt-8">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
              View Detailed Curriculum
            </button>
          </div>
        </div>
      </section>

    {/* Hiring Partners */}
<section id="hiring-partners" className="py-16 px-4 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Reputed Hiring Partners</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {course.hiringPartners.map((partner, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center ">
          <img 
            src={partner.images} 
            alt={partner.alt} 
            className="max-w-full h-auto max-h-12 object-contain " 
          />
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Career Options */}
      <section id="career-options" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Potential Career Options For MBA Graduates
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Job Profiles</h3>
            <div className="flex flex-wrap gap-4">
              {course.careerOptions.jobProfiles.map((job, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-full px-6 py-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-gray-900">{job}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {course.careerOptions.industries.map((industry, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-gray-900" />
                  </div>
                  <p className="font-semibold text-gray-900">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section id="features" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Degree Certificate */}
      <section id="certificate" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Get a Prestigious MBA Degree
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Globe className="w-8 h-8 text-gray-900 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Globally recognized</h3>
                    <p className="text-gray-600">
                      Graduate with UGC-entitled and internationally accepted online degrees.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Award className="w-8 h-8 text-gray-900 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">At par with on-campus degrees</h3>
                    <p className="text-gray-600">
                      Gain the same academic rigor, recognition, and career advantages of an on-campus degree—all while enjoying the flexibility of online learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-8 rounded-2xl">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/mahe-uni_dvnm1d.webp" alt="MANIPAL" className="w-20 h-20" />
                    <div>
                      <h4 className="font-bold text-lg">MANIPAL</h4>
                      <p className="text-sm text-gray-600">ACADEMY OF HIGHER EDUCATION</p>
                      <p className="text-xs text-gray-500">(Institution of Eminence Deemed to be University)</p>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <p className="text-sm text-gray-600 mb-2">This is to certify that</p>
                    <p className="text-xl font-bold text-gray-900 mb-4">SAMPLE NAME</p>
                    <p className="text-sm text-gray-600 mb-2">has been conferred</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">
                      Master of Business Administration (MBA)
                    </p>
                    <p className="text-sm text-gray-600 mb-1">Specialization - XXXXXXXXXXXXX</p>
                    <p className="text-xs text-gray-500 mb-4">(Duration: 2 Years - Online mode)</p>
                    <p className="text-sm text-gray-600">
                      having fulfilled the prescribed requirements in August 2026
                    </p>
                  </div>
                  <div className="flex justify-between items-end mt-8 pt-6 border-t">
                    <div className="w-20 h-20 bg-red-600 rounded-full"></div>
                    <div className="text-right">
                      <p className="font-semibold text-sm">Vice-Chancellor</p>
                      <p className="text-xs text-gray-500">Given under the seal of Manipal Academy of Higher Education</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 bg-orange-100 px-4 py-2 rounded-bl-2xl rounded-tr-2xl">
                  <span className="text-sm font-semibold text-orange-800">Sample</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Stats */}
      <section id="university-stats" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Online MBA From MAHE?
          </h2>
          <p className="text-gray-600 mb-12 max-w-4xl">
            {course.university.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {course.university.yearsOfExcellence}+
              </div>
              <p className="text-gray-600">Years of Academic Excellence</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {course.university.studentNationalities}+
              </div>
              <p className="text-gray-600">Student Nationalities</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {course.university.facultyCount.toLocaleString()}+
              </div>
              <p className="text-gray-600">Faculty and Staff</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {course.university.studentsWorldwide.toLocaleString()}+
              </div>
              <p className="text-gray-600">Students from Across the World</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section id="fees" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Online MBA Course Fee</h2>

          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveFeeTab('indian')}
              className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                activeFeeTab === 'indian'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Indian Nationals
            </button>
            <button
              onClick={() => setActiveFeeTab('international')}
              className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                activeFeeTab === 'international'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              International students
            </button>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-gray-700 mb-2">Full course fee </p>
                <p className="text-5xl font-bold text-gray-900 mb-2">
                  INR {course.courseFee.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">Inclusive of all taxes</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <p className="text-gray-700 mb-2">Each semester fee</p>
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  INR {course.semesterFee.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">Inclusive of all taxes</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <p className="text-gray-700 mb-2">EMI starting at</p>
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  INR {course.emiStarting.toLocaleString()} <span className="text-xl">/Month</span>
                </p>
                <p className="text-sm text-gray-600">Terms & conditions apply</p>
              </div>
            </div>
            <div className="mt-6 bg-white rounded-lg p-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm">!</span>
              </div>
              <p className="text-sm text-gray-700">Note for online payments</p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Easy EMI & Scholarships</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Flexible EMI Options</h4>
                <p className="text-gray-600">
                  Pay your course fee in easy monthly installments with flexible EMI plans.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Scholarship Programs</h4>
                <p className="text-gray-600">
                  Merit-based scholarships available for eligible candidates.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">No Cost EMI</h4>
                <p className="text-gray-600">
                  Zero-interest EMI options available from select partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Eligibility For {course.title}</h2>

          <div className="bg-green-50 rounded-2xl p-8 mb-8">
            {typeof course.eligibility === 'string' ? (
               <div className="bg-white rounded-xl p-6">
                 <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                   <GraduationCap className="w-8 h-8 text-yellow-600" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">Eligibility Criteria</h3>
                 <p className="text-gray-700">{course.eligibility}</p>
               </div>
            ) : (
              <>
                <div className="flex gap-4 mb-6">
                  <button 
                    onClick={() => setActiveEligibilityTab('indian')}
                    className={`px-6 py-2 rounded-lg font-semibold shadow-sm transition-colors ${
                      activeEligibilityTab === 'indian' ? 'bg-white text-gray-900' : 'text-gray-600 hover:bg-white'
                    }`}
                  >
                    Indian students
                  </button>
                  <button 
                    onClick={() => setActiveEligibilityTab('international')}
                    className={`px-6 py-2 rounded-lg font-semibold shadow-sm transition-colors ${
                      activeEligibilityTab === 'international' ? 'bg-white text-gray-900' : 'text-gray-600 hover:bg-white'
                    }`}
                  >
                    NRI & Foreign students
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl p-6">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                      <GraduationCap className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {activeEligibilityTab === 'indian' 
                        ? course.eligibility.indian.education.title 
                        : course.eligibility.international.education.title}
                    </h3>
                    <p className="text-gray-700">
                      {activeEligibilityTab === 'indian' 
                        ? course.eligibility.indian.education.description 
                        : course.eligibility.international.education.description}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Award className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {activeEligibilityTab === 'indian' 
                        ? course.eligibility.indian.grades.title 
                        : course.eligibility.international.grades.title}
                    </h3>
                    <p className="text-gray-700">
                      {activeEligibilityTab === 'indian' 
                        ? course.eligibility.indian.grades.description 
                        : course.eligibility.international.grades.description}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {activeEligibilityTab === 'indian' 
                        ? course.eligibility.indian.experience.title 
                        : course.eligibility.international.experience.title}
                    </h3>
                    <p className="text-gray-700">
                      {activeEligibilityTab === 'indian' 
                        ? course.eligibility.indian.experience.description 
                        : course.eligibility.international.experience.description}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section id="admission" className="py-16 px-4 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">Admission Process For Online MBA Program</h2>
            
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="bg-gray-900 rounded-xl p-6">
                <div className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Application</h3>
                <p className="text-gray-400">
                  Submit your basic, education, and work experience details or SOP video (for fresh graduates) and pay the application fee to register.
                </p>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-6 left-full w-6 h-0.5 bg-gray-700"></div>
            </div>

            <div className="relative">
              <div className="bg-gray-900 rounded-xl p-6">
                <div className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Fee payment</h3>
                <p className="text-gray-400">
                  Pay the admission fee for the first semester/year or full program.
                </p>
              </div>
              <div className="hidden md:block absolute top-6 left-full w-6 h-0.5 bg-gray-700"></div>
            </div>

            <div className="relative">
              <div className="bg-gray-900 rounded-xl p-6">
                <div className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Document upload</h3>
                <p className="text-gray-400">
                  Upload supporting documents & submit your application.
                </p>
              </div>
              <div className="hidden md:block absolute top-6 left-full w-6 h-0.5 bg-gray-700"></div>
            </div>

            <div>
              <div className="bg-gray-900 rounded-xl p-6">
                <div className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">University approval</h3>
                <p className="text-gray-400">
                  The university will evaluate your documents to confirm your admission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section id="quick-info" className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">MBA Degree At A Glance</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Clock className="w-8 h-8 text-yellow-400 mb-3" />
              <p className="text-gray-400 text-sm mb-2">Course Duration</p>
              <p className="text-3xl font-bold">{course.duration} • {course.semesters} Sem</p>
            </div>

            <div>
              <CreditCard className="w-8 h-8 text-yellow-400 mb-3" />
              <p className="text-gray-400 text-sm mb-2">EMI Starting At</p>
              <p className="text-3xl font-bold">INR {course.emiStarting.toLocaleString()}*</p>
            </div>

            <div>
              <Calendar className="w-8 h-8 text-yellow-400 mb-3" />
              <p className="text-gray-400 text-sm mb-2">Last Admission Date</p>
              <p className="text-3xl font-bold">{course.lastAdmissionDate}</p>
            </div>

            <div>
              <Users className="w-8 h-8 text-yellow-400 mb-3" />
              <p className="text-gray-400 text-sm mb-2">Seats Filled</p>
              <p className="text-3xl font-bold">{course.seatsFilledPercent}% Filled</p>
            </div>

            <div>
              <CreditCard className="w-8 h-8 text-yellow-400 mb-3" />
              <p className="text-gray-400 text-sm mb-2">Fee</p>
              <p className="text-3xl font-bold">INR {course.semesterFee.toLocaleString()} <span className="text-lg">per semester</span></p>
            </div>

            <div>
              <Globe className="w-8 h-8 text-yellow-400 mb-3" />
              <p className="text-gray-400 text-sm mb-2">Exclusive Access</p>
              <p className="text-3xl font-bold">Coursera</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button onClick={() => setOpenModal({ type: 'apply' })} className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Learn More About Our MBA Program (FAQs)
          </h2>

          <div className="flex gap-4 mb-8">
            <button className="px-6 py-2 bg-gray-900 text-white rounded-full font-semibold">
              Program
            </button>
            <button className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-full">
              Admission
            </button>
            <button className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-full">
              Fee
            </button>
            <button className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-full">
              Academics
            </button>
          </div>

          <div className="space-y-4">
            {course.faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-left text-gray-900">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-600 transition-transform ${
                      expandedFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of professionals who have advanced their careers with our Online MBA program
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
      </main>

        {/* Premium Footer */}
        <footer className="bg-gradient-to-br from-gray-900 to-slate-900 text-gray-300 pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
              {/* Brand */}
              <div className="lg:col-span-1">
                <div className=" bg-white flex items-center gap-4 mb-6">
                  <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327390/manipallogo_r6lssy.svg" alt="Manipal" className="h-12 w-auto" />
                 
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  UGC-entitled, NAAC A+ accredited online degrees designed for modern learners seeking career advancement.
                </p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                    <span className="text-lg">📞</span>
                  </div>
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                    <span className="text-lg">💬</span>
                  </div>
                </div>
              </div>

              {/* Programs */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Programs</h4>
                <ul className="space-y-3">
                  {['Online MBA', 'MCA', 'BBA', 'M.Com', 'B.Com', 'MA JMC'].map((program, i) => (
                    <li key={i}>
                      <a onClick={() => setOpenModal ({ type: 'apply' })} className="text-gray-400 hover:text-orange-400 transition-colors cursor pointer">
                        {program}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Support</h4>
                <ul className="space-y-3">
                  {['Admissions', 'Scholarships', 'Placements', 'FAQs', 'Contact Us'].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact CTA */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Get Started</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white">📞</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Call Us</p>
                      <p className="text-white font-semibold">+91 7042646766</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setOpenModal({ type: 'apply' })}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Apply Now
                  </button>
                </div>
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
                                      Popular Programs & Specializations –Manipal Academy of Higher Education Online(MAHE) "  
                                    </h4>
                      
                                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                                      {[
                                         "BBA Finance & Accounting - MAHE Online",
                                         "BBA Digital Marketing - MAHE Online",
                                         "BBA Enterepreneurship Management & Family Business - MAHE Online",
                                         "BBA Human Resource Management - MAHE Online",
                                         "BBA Data Analytics - MAHE Online",
                                         "BBA Retail & E-commerce Management - MAHE Online",
                                      
                                         "B.Com General - MAHE Online",

                                         "MBA Human Resource Management and Finance - MAHE Online",
                                         "MBA Finance and Marketing - MAHE Online",
                                         "MBA Marketing and Human Resource Management - MAHE Online",
                                         "MBA Marketing and Business Analytics - MAHE Online",
                                         "MBA Finance and Business Analytics - MAHE Online",
                                         "MBA Human Resource and Business Analytics - MAHE Online",
                                         "MBA Project Management - MAHE Online",
                                         "MBA Retail Management and Quick Commerce - MAHE Online",
                                         "MBA Artificial Intelligence Banking and Finance - MAHE Online",
                                         "MBA Other Fields (15+) - MAHE Online",

                                         "MCA AI & Data Science - MAHE Online",
                                        "MCA Cyber Security - MAHE Online",
                                          "MCA Cloud Computing - MAHE Online",
                                        "MCA Comprehensive Emerging Technologies - MAHE Online",
                                        "MCA AI & ML - MAHE Online",

                                         "M.Com General - MAHE Online",

                                         "MA Economics - MAHE Online",
                                         "MA Journalism and Mass Communication - MAHE Online"
                                         ]

                                    .map((keyword, index) => (
                                        <span
                                          key={index} onClick = {() => setOpenModal({ type: 'apply',})}
                                          className="bg-white/10 backdrop-blur-sm text-gray-300 px-3 py-2 rounded-full text-xs sm:text-sm hover:bg-[#821812] hover:text-white transition-all duration-300 cursor-pointer border border-white/20 hover:border-orange-500"
                                          title={keyword}
                                        >
                                          {keyword.length > 25 ? `${keyword.substring(0, 25)}...` : keyword}
                                        </span>
                                      ))}
                                    </div>
                                  </motion.div>
                      

            {/* Bottom */}
            <div className="pt-8 text-center">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Manipal Academy of Higher Education Online. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
         {openModal && (
            <ApplyEnquiryModal
              open={!!openModal}
              onOpenChange={(v) => !v && setOpenModal(null)}
              title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
              subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
              imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327725/online-manipal-form_nz7yft.webp"
              universityName="Manipal Academy of Higher Education"
              defaultProgram="MBA"
              formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
            />
         )}
    </div>
  );
};

export default CourseSlugPage;