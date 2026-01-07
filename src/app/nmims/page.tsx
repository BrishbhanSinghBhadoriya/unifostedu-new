"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Star, Users, Award, GraduationCap, Clock, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import Image from 'next/image';
import AboutMoreInfo from './_Componets/AboutMoreInfo';
import ApprovalsMoreInfo from './_Componets/ApprovalsMoreInfo';
import WhoCanApply from './_Componets/WhoCanApply';
import CertificatePrograms from './_Componets/CertificatePrograms';
import KeyHighlights from './_Componets/KeyHighlights';
import MagnifyCareer from './_Componets/MagnifyCareer';
import FeeNotes from './_Componets/FeeNotes';
import CareerAccelerationSlider from './_Componets/CareerAccelerationSlider';
import ExaminationPatternNMIMS from './_Componets/ExaminationPatternNMIMS';
import CoursesTable from './_Componets/CoursesTable';
import Link from 'next/link';
import Header from './_Componets/Header';
type OpenModalState = {
  type: "apply" | "enquire";
  program?: string;
  source?: string;
} | null;

  
const NMIMSLandingPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openModal, setOpenModal] = useState<OpenModalState | null>(null);

  // Auto-open modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setOpenModal({ type: 'enquire' }), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Image slider auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sliderImages = [
    'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327722/nmims_banner3_tatyhr.jpg',
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop'
  ];

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Admission', href: '#admission' },
    { name: 'Accreditation', href: '#accreditation' },
    { name: 'FAQ', href: '#faq' }
  ];

  const ugCourses = [
    {
      name: 'Bachelor of Business Administration (BBA)',
      duration: '3 Years',
      fees: '₹1,50,000',
      eligibility: 'HSC (10+2) in any discipline from a recognised board with minimum 50% (45% for SC/ST/OBC/PwD).',
      specializations: 'Finance Management, Marketing Management'
    },
    {
      name: 'Bachelor of Business Administration (BBA)',
      duration: '3 Years',
      fees: '₹1,80,000',
      eligibility: 'HSC (10+2) in any discipline from a recognised board with minimum 50% (45% for SC/ST/OBC/PwD).',
      specializations: 'Business Analytics'
    },
    {
      name: 'Bachelor of Commerce (B.Com)',
      duration: '3 Years',
      fees: '₹1,08,000',
      eligibility: 'HSC (10+2) in any discipline from a recognised board with minimum 50% (45% for SC/ST/OBC/PwD).',
      specializations: 'Accounting'
    }
  ];

  const pgCourses = [
    {
      name: 'Master of Business Administration (MBA)',
      duration: '2 Years',
      fees: '₹2,20,000',
      eligibility: 'Bachelor’s Degree (10+2+3) in any discipline from recognised University or an equivalent degree recognised by Association of Indian Universities (AIU) with minimum 50% marks at Graduation Level. (45% for SC/ST/OBC/PwD).',
      specializations: 'MBA In Marketing Management, MBA in Business Management, MBA in Finance Management, MBA in Human Resources Management, MBA in Operations and data Science Management'
    },
    {
      name: 'Master of Business Administration (MBA WX)',
      duration: '2 Years',
      fees: '₹4,00,000',
      eligibility: 'Bachelor’s Degree (10+2+3) in any discipline from recognised University or an equivalent degree recognised by Association of Indian Universities (AIU) with a minimum of 55% and 3 + years of Work Experience (50% for SC/ST/OBC/PwD).',
      specializations: 'Marketing Management, Leadership & Strategy, Operations & Supply Chain Management, Applied Finance, Digital Marketing'
    }
  ];

  const specializations = [
    'General Management', 'Finance & Applied Finance', 'Accounting, Taxation & Banking',
    'Marketing & Digital Marketing', 'Human Resources', 'Operations & Supply Chain Management',
    'Business Analytics', 'International Business', 'Leadership & Strategy'
  ];

  const faqs = [
    {
      q: 'What is NMIMS Online ?',
      a: 'NMIMS (Narsee Monjee Institute of Management Studies) Online offers flexible and career-focused education through Narsee Monjee Institute of Management Studies Online. Programs are delivered under NMIMS Distance & Online Education using the advanced NMIMS Online Learning Platform.'
    },
    {
      q: 'Are NMIMS online programs approved by UGC?',
      a: 'Yes, all programs offered through Narsee Monjee Institute of Management Studies Online are part of NMIMS online programs approved by UGC. This ensures that the degrees are valid, recognized, and accepted across India for jobs and higher education.'
    },
    {
      q: 'How are classes conducted in NMIMS Online programs?',
      a: 'Classes are conducted through the NMIMS Online Learning Platform. Students get access to live online sessions, recorded lectures, digital study material, assignments, and assessments. This system supports flexible learning under NMIMS Distance & Online Education.'
    },
    {
      q: 'Who can apply for NMIMS Online courses?',
      a: 'Students, fresh graduates, working professionals, and entrepreneurs can apply. Anyone looking for a flexible, recognized degree can Apply for NMIMS Online Course through NMIMS (Narsee Monjee Institute of Management Studies).'
    },
    {
      q: 'Is NMIMS Online suitable for working professionals?',
      a: 'Yes, NMIMS Distance & Online Education is designed especially for working professionals. The flexible schedule and self-paced learning through the NMIMS Online Learning Platform allow learners to study alongside work commitments'
    },

     {
      q: 'Does NMIMS Online provide placement assistance?',
      a: 'Yes, NMIMS online education with placement assistance offers career support such as resume building, interview preparation, and skill development to help learners improve job readiness.'
    },
    {
      q: 'How are exams conducted in NMIMS Online programs?',
      a: 'Exams are conducted online through the secure NMIMS Online Learning Platform. The examination pattern follows structured guidelines under NMIMS online programs approved by UGC and includes internal assessments and end-term examinations.'
    },
    {
      q: 'Is the NMIMS Online degree valid for government and private jobs?',
      a: 'Yes, degrees earned through Narsee Monjee Institute of Management Studies Online are valid and recognized since they come under NMIMS online programs approved by UGC.'
    },
    {
      q: 'What is the examination pattern?',
      a: 'The examination includes continuous internal assessment and end-term online examinations conducted through the secure NMIMS Online Learning Platform.'
    },
    {
      q: 'Can I study at my own pace in NMIMS Online programs?',
      a: 'Yes, the NMIMS Online Learning Platform allows learners to access recorded lectures and study materials anytime, making NMIMS Distance & Online Education highly flexible.'
    },
    {
      q: 'How can I apply for NMIMS Online courses?',
      a: 'You can easily Apply for NMIMS Online Course by completing the online application process. After applying, guidance is provided for admission, fees, and other steps.'
    },
    
    
  ];

 const accreditations = [
  {
    name: "UGC",
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327862/ugc_e5udyp.webp",
  },
  {
    name: "NAAC A++",
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327508/naac-logo_lg6jy5.png",
  },
  {
    name: "AICTE",
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327027/aicte_ipdzee.webp",
  },
  {
    name: "AIU",
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327029/aiu_yfa2is.webp",
  },
];


  return (
    <div className="font-sans bg-white">
      {/* Header */}
     <Header
        navigationLinks={navigationLinks}
        setOpenModal={setOpenModal}
      />

      {/* Hero Slider */}
      <section id="home" className="relative h-[500px] mt-16 overflow-hidden">
        <div className="absolute inset-0">
          {sliderImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-600/60" />
            </div>
          ))}
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Transform Your Future with NMIMS Online
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              UGC Approved | NAAC A++ Accredited | 1.25L+ Students
            </p>
            <button
              onClick={() => setOpenModal({ type: 'apply' })}
              className="bg-white text-purple-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all shadow-xl"
            >
              Start Your Journey
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {sliderImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        {/* FULL WIDTH CONTAINER */}
        <div className="w-full px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* LEFT CONTENT – TEXT (WIDER) */}
            <div className="lg:col-span-7">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
               <span className="text-orange-600">About</span> <span className="text-purple-600">NMIMS Global Online</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  NMIMS (Narsee Monjee Institute of Management Studies) is one of India’s most respected and well-established institutions, known for its academic excellence, innovation, and industry-focused education. Over the years, NMIMS has built a strong reputation by delivering high-quality education that prepares students for real-world challenges. With the introduction of Narsee Monjee Institute of Management Studies Online, the university has extended its legacy into the digital space, making quality education accessible to learners across India and beyond.
                </p>

                <p>
                  With the introduction of <strong>Narsee Monjee Institute of Management Studies Online</strong>,
                 Through NMIMS Distance & Online Education, the university offers flexible learning opportunities designed to suit the needs of modern students and working professionals. NMIMS Distance & Online Education allows learners to pursue higher education without disrupting their jobs, businesses, or personal responsibilities. This learning model reflects NMIMS’s commitment to inclusivity, accessibility, and lifelong learning, ensuring that education is no longer limited by location or time constraints
                </p>

                <p>
                 The foundation of online learning at NMIMS is the advanced NMIMS Online Learning Platform, which delivers a structured yet flexible academic experience. The NMIMS Online Learning Platform enables students to attend live lectures, access recorded sessions, download digital study materials, and participate in interactive discussions. With continuous academic support and regular assessments, the NMIMS Online Learning Platform ensures that learners remain engaged and academically motivated throughout their journey.
                </p>

              
              </div>


            </div>

            {/* RIGHT IMAGE – STICKY FEEL */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-28">
                <img
                  src="https://res.cloudinary.com/didkrwhbu/image/upload/v1767172316/nmims_about_nflafi.png"
                  alt="NMIMS Campus"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />

              </div>
            </div>

          </div>
        </div>
       <section className="w-full bg-white mb-1">
  <div className="max-w-6xl mx-auto">
    <AboutMoreInfo />
  </div>
</section>
      <MagnifyCareer/>
      </section>
      <section id="approvals" className="w-full bg-white mt-1">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900">
              Approvals & <span className="text-purple-600">Recognition</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              NMIMS Online programs are built on strong academic governance, regulatory
              compliance, and national-level recognition—ensuring your degree holds
              long-term value.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left Content */}
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                <strong>NMIMS (Narsee Monjee Institute of Management Studies)</strong> NMIMS  is a highly recognized and trusted institution in India’s higher education ecosystem. The university follows strict academic and regulatory standards to ensure that learners receive credible, valid, and industry-accepted qualifications. Through Narsee Monjee Institute of Management Studies Online, NMIMS extends this credibility to digital education, offering learners complete confidence in the authenticity of their degrees.
              </p>

              <p>
              All programs offered under NMIMS Distance & Online Education are structured in accordance with national education regulations. A major strength of NMIMS lies in its commitment to offering NMIMS online programs approved by UGC, which ensures that online degrees hold the same value and recognition as traditional on-campus programs. Choosing NMIMS online programs approved by UGC allows students to confidently use their qualifications for employment, higher education, and professional advancement across India.
              </p>
              
             
            </div>

            {/* Right Highlights */}
            {/* STATS */}
            <div className="bg-gray-50 border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-purple-700 mb-2">
                UGC Approved Programs
              </h4>
              <p className="text-gray-600">
                All NMIMS online programs are UGC-approved, ensuring national acceptance
                for jobs, higher education, and professional growth.
              </p>


              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
                {[
                  { icon: Users, value: "1.25L+", label: "Students" },
                  { icon: MapPin, value: "600+", label: "Cities" },
                  { icon: Star, value: "4.7/5", label: "Student Rating" },
                  { icon: Award, value: "NAAC A++", label: "Accreditation" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                  >
                    <item.icon className="text-purple-600 mb-3" size={34} />
                    <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                    <p className="text-gray-600 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
            <ApprovalsMoreInfo />
          {/* CTA */}
          <div className="text-center mt-6 mb-6">
            <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-xl transition" onClick={() => setOpenModal({ type: 'apply' })}>
              Apply for NMIMS Online Course
            </button>
          </div>

        </div>
      </section>
      <CareerAccelerationSlider/>
    <WhoCanApply setOpenModal={setOpenModal} openModal={openModal}/>

      {/* Specializations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
           <span className="text-orange-600">Choose Your</span> <span className="text-purple-600">Specialization</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Career-focused specializations designed for industry needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specializations.map((spec, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 p-6 rounded-xl hover:shadow-lg transition-all cursor-pointer group"
              >
                <GraduationCap className="text-purple-600 mb-3 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{spec}</h3>
                 <button onClick={() => setOpenModal({ type: 'apply' })} className="text-gray-600 text-sm cursor-pointer">Learn more about this specialization
                  </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="mt-2 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Our <span className="text-purple-600">Programs</span>
          </h2>
          <p className="text-center text-gray-600 mb-5 text-lg">
            UGC Approved & NAAC A++ Accredited Online Degree Programs
          </p>

          {/* Tabs */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
              {['all', 'ug', 'pg'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-semibold transition-all ${activeTab === tab
                      ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-md'
                      : 'text-gray-700 hover:text-purple-600'
                    }`}
                >
                  {tab === 'all' ? 'All Programs' : tab === 'ug' ? 'Undergraduate' : 'Postgraduate'}
                </button>
              ))}
            </div>
          </div>

          {/* UG Courses */}
          {(activeTab === 'all' || activeTab === 'ug') && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Undergraduate Programs</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {ugCourses.map((course, idx) => (
                  <CourseCard key={idx} course={course} setOpenModal={setOpenModal} />
                ))}
              </div>
            </div>
          )}

          {/* PG Courses */}
          {(activeTab === 'all' || activeTab === 'pg') && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Postgraduate Programs</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {pgCourses.map((course, idx) => (
                  <CourseCard key={idx} course={course} setOpenModal={setOpenModal} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <FeeNotes/>
      <CoursesTable
  ugCourses={ugCourses}
  pgCourses={pgCourses}
  setOpenModal={setOpenModal}
/>
      {/* Admission Process */}
      <section id="admission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Simple <span className="text-purple-600">Admission Process</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Start your journey in just 4 easy steps
          </p>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-800" style={{ width: '85%', margin: '0 auto' }} />

            {[
              { step: '01', title: 'Application Form', desc: 'Fill the online application form' },
              { step: '02', title: 'Documents & Fee', desc: 'Upload documents and pay fees' },
              { step: '03', title: 'Confirmation', desc: 'Receive login credentials' },
              { step: '04', title: 'Enrollment', desc: 'Begin your classes' }
            ].map((item, idx) => (
              <div key={idx} className="text-center relative z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-xl">
                  <span className="text-4xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CertificatePrograms/>
      <KeyHighlights/>
     
    <Link href="/enterprise">
      <div className="cursor-pointer">
        <Image
          src="https://res.cloudinary.com/didkrwhbu/image/upload/v1767597485/nmims_workforse_o2ylmu.png"   
          alt="Explore Programs"
          width={1600}
          height={800}
          className="rounded-xl hover:opacity-90 transition"
        />
      </div>
    </Link>


      <ExaminationPatternNMIMS/>
      {/* Accreditation */}
      <section id="accreditation" className="py-20 bg-gradient-to-br from-purple-900 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Recognized & Accredited
          </h2>
          <p className="text-center text-purple-100 mb-16 text-lg">
            Trusted by students, recognized by regulatory bodies
          </p>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
  {accreditations.map((acc, idx) => (
    <div
      key={idx}
      className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all"
    >
      <div className="flex justify-center mb-4">
        <Image
          src={acc.image}
          alt={acc.name}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      <h3 className="text-xl font-bold">{acc.name}</h3>
    </div>
  ))}
</div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Users size={40} />, title: '1.25L+ Students', desc: 'Across 600+ cities' },
              { icon: <Star size={40} />, title: '4.7/5 Rating', desc: 'Highly rated by students' },
              { icon: <Award size={40} />, title: 'NAAC A++', desc: 'Highest accreditation grade' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-purple-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Everything you need to know about NMIMS Online
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-purple-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`text-purple-600 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''
                      }`}
                    size={24}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-4 bg-purple-50 border-t border-purple-100">
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join 1.25L+ students learning with NMIMS Global Online
          </p>
          <button
            onClick={() => setOpenModal({ type: 'apply' })}
            className="bg-white text-purple-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all shadow-xl inline-flex items-center space-x-2"
          >
            <span>Apply for NMIMS Online Course</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid md:grid-cols-4 gap-8 mb-8">
      
      {/* Column 1 */}
      <div>
        <h3 className="text-white font-bold text-lg mb-4">NMIMS Global</h3>
        <p className="text-sm mb-4">
          UGC Approved & NAAC A++ Accredited Online Education
        </p>
        <div className="flex space-x-3">
          {['📘', '📷', '🐦', '💼'].map((icon, idx) => (
            <div
              key={idx}
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Column 2 - Programs */}
      <div>
        <h4 className="text-white font-bold mb-4">Programs</h4>
        <ul className="space-y-2 text-sm">
          {['MBA', 'MBA (WX)', 'BBA', 'B.Com'].map((prog, idx) => (
            <li
              key={idx}
              className="hover:text-purple-400 cursor-pointer"
              onClick={() =>
                setOpenModal({ type: "apply", source: prog })
              }
            >
              {prog}
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3 - Quick Links */}
      <div>
        <h4 className="text-white font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          {['About', 'Courses', 'Admissions', 'FAQ', 'Contact'].map(
            (link, idx) => (
              <li
                key={idx}
                className="hover:text-purple-400 cursor-pointer"
                onClick={() =>
                  setOpenModal({ type: "apply", source: link })
                }
              >
                {link}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Column 4 - Contact */}
      <div>
        <h4 className="text-white font-bold mb-4">Contact</h4>
        <div className="space-y-3 text-sm">
          <div className="flex items-center space-x-2">
            <Phone size={16} className="text-purple-400" />
            <span>+91 7042646766</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} className="text-purple-400" />
            <span>info@unifostedu.com</span>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom bar */}
    <div className="border-t border-gray-800 pt-8 text-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} NMIMS Global Online. All rights reserved.
      </p>
      <p className="mt-2 text-xs text-gray-500">
        UGC Entitled | NAAC A++ Accredited
      </p>
    </div>
  </div>
</footer>


      {/* Modal */}
      {openModal && (
        <ApplyEnquiryModal
          open={!!openModal}
          onOpenChange={(v) => !v && setOpenModal(null)}
          title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
          subtitle={openModal.type === 'apply' ? 'Fill the quick form to begin your admission process' : 'Share your details and our counselor will reach out'}
          imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1766467891/nmimsenquary_exxyyv.png"
          universityName="NMIMS Global Online"
          defaultProgram={openModal.program || "MBA"}
          formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
        />
      )}
    </div>
  );
};

// Course Card Component
const CourseCard = ({ course, setOpenModal }: { course: { name: string, duration: string, fees: string, eligibility: string, specializations: string }, setOpenModal: (value: OpenModalState) => void }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group">
    <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 text-white">
      <h3 className="text-xl font-bold mb-2">{course.name}</h3>
      <div className="flex items-center space-x-4 text-sm">
        <span className="flex items-center space-x-1">
          <Clock size={16} />
          <span>{course.duration}</span>
        </span>
        <span className="font-bold text-lg">{course.fees}</span>
      </div>
    </div>

    <div className="p-6">
      <div className="space-y-3 mb-6">
        <div className="flex items-start space-x-2">
          <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-gray-900">Eligibility</p>
            <p className="text-gray-600 text-sm">{course.eligibility}</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-gray-900">Specializations</p>
            <p className="text-gray-600 text-sm">{course.specializations}</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setOpenModal({ type: 'enquire', program: course.name })}
        className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all group-hover:scale-105"
      >
        Enquire Now
      </button>
    </div>
  </div>
);

export default NMIMSLandingPage;