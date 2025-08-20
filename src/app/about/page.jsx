'use client';

import React from 'react';
import { 
  FaUsers, 
  FaUniversity, 
  FaMapMarkerAlt, 
  FaHeadset, 
  FaVideo, 
  FaHome, 
  FaCertificate, 
  FaGraduationCap, 
  FaUserTie, 
  FaRocket, 
  FaLightbulb, 
  FaBullseye,   // ✅ yeh sahi hai
  FaBookOpen, 
  FaShieldAlt, 
  FaTools, 
  FaStar, 
  FaQuoteLeft 
} from "react-icons/fa";


export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001e3c] to-[#003b6c] opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            About <span className="text-[#00ffe0]">Unifost</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Transforming <span className="text-[#00ffe0]">Education</span><br />
            One Student at a Time
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            UniFost is redefining how students discover and access quality education through personalized guidance and innovative technology.
          </p>
          <button className="bg-[#00ffe0] text-[#001e3c] px-8 py-4 rounded-full text-xl font-bold hover:bg-[#00d4c4] transform hover:scale-105 transition-all duration-300 shadow-2xl cursor-pointer">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-3xl text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#001e3c] mb-2">10,000+</h3>
              <p className="text-gray-600 font-medium">Students Guided</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUniversity className="text-3xl text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#001e3c] mb-2">200+</h3>
              <p className="text-gray-600 font-medium">Partner Institutions</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-3xl text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#001e3c] mb-2">50+</h3>
              <p className="text-gray-600 font-medium">Cities Covered</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeadset className="text-3xl text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#001e3c] mb-2">24/7</h3>
              <p className="text-gray-600 font-medium">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001e3c] mb-6">
              OUR SERVICES
            </h2>
            <h3 className="text-2xl text-gray-600 mb-8">
              Comprehensive Education Solutions
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end support for students at every stage of their academic journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FaVideo className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#001e3c] mb-4">Personalized Video Counseling</h3>
              <p className="text-gray-600 leading-relaxed">
                One-on-one sessions with our expert counselors to help you make informed decisions about your education and career path.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FaHome className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#001e3c] mb-4">Home Demo Sessions</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience learning firsthand with trial sessions conducted at your convenience before committing to any program.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FaCertificate className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#001e3c] mb-4">Certified Programs</h3>
              <p className="text-gray-600 leading-relaxed">
                Access to industry-recognized certifications and courses that enhance your employability and skills.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#001e3c] mb-4">Online Degree Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive support for selecting and enrolling in accredited online degree programs from top institutions.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FaUniversity className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#001e3c] mb-4">University Admissions</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert assistance in selecting and applying to traditional universities with high placement records.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FaTools className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#001e3c] mb-4">Skill Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Specialized courses and workshops to bridge the gap between academic learning and industry requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001e3c] mb-6">
              OUR APPROACH
            </h2>
            <h3 className="text-2xl text-gray-600 mb-8">
              Student-Centric Learning Philosophy
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe every student deserves personalized attention and guidance tailored to their unique needs and aspirations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUserTie className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#001e3c] mb-4">Mentorship First</h3>
              <p className="text-gray-600 leading-relaxed">
                Each student is paired with a dedicated mentor who provides continuous support throughout their academic journey.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaLightbulb className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#001e3c] mb-4">Holistic Development</h3>
              <p className="text-gray-600 leading-relaxed">
                We focus on both academic excellence and personal growth to prepare students for real-world challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaBullseye className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#001e3c] mb-4">Outcome Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Our programs are designed with clear career outcomes and measurable success metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#001e3c] to-[#003b6c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <FaRocket className="text-4xl text-[#00ffe0] mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold">
                WHY CHOOSE US
              </h2>
            </div>
            <h3 className="text-2xl text-gray-300 mb-8">
              The UniFost Advantage
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              What sets us apart in the world of educational guidance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <FaStar className="text-3xl text-[#00ffe0] mb-4" />
              <h3 className="text-xl font-bold mb-3">Personalized Guidance</h3>
              <p className="text-gray-300">
                Tailored recommendations based on your unique strengths, interests, and career aspirations.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <FaHeadset className="text-3xl text-[#00ffe0] mb-4" />
              <h3 className="text-xl font-bold mb-3">Live Support 24/7</h3>
              <p className="text-gray-300">
                Round-the-clock access to our team of education experts whenever you need guidance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <FaBullseye className="text-3xl text-[#00ffe0] mb-4" />
              <h3 className="text-xl font-bold mb-3">Career Focused</h3>
              <p className="text-gray-300">
                Programs selected based on industry demand and future job market trends.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <FaBookOpen className="text-3xl text-[#00ffe0] mb-4" />
              <h3 className="text-xl font-bold mb-3">Comprehensive Resources</h3>
              <p className="text-gray-300">
                Access to exclusive study materials, scholarship information, and admission tips.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <FaShieldAlt className="text-3xl text-[#00ffe0] mb-4" />
              <h3 className="text-xl font-bold mb-3">Verified Institutions</h3>
              <p className="text-gray-300">
                We only partner with accredited universities and recognized educational providers.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <FaTools className="text-3xl text-[#00ffe0] mb-4" />
              <h3 className="text-xl font-bold mb-3">Skill Development</h3>
              <p className="text-gray-300">
                Complementary skill-building workshops to enhance your employability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001e3c] mb-6">
              LEADERSHIP
            </h2>
            <h3 className="text-2xl text-gray-600 mb-8">
              Visionary Founders
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The driving force behind UniFost's mission to transform education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] p-2">
                  <img 
                    src="/priyansh.jpg" 
                    alt="Priyansh Mishra - Co-Founder & Director" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#00ffe0] text-[#001e3c] px-4 py-2 rounded-full text-sm font-bold">
                  Co-Founder & Director
                </div>
              </div>
              <h3 className="text-3xl font-bold text-[#001e3c] mb-4">Priyansh Mishra</h3>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                Priyansh Mishra, a visionary leader committed to revolutionizing education through innovation and accessibility, has poured his heart, energy, and vision into building UniFost with unwavering passion and dedication. With a background in educational technology and student psychology, he ensures UniFost remains student-centric.
            </p>
          </div>
          
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-[#00ffe0] to-[#00d4c4] p-2">
                  <img 
                    src="/aman.jpg" 
                    alt="Aman Pawar - Co-Founder & Director" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#00ffe0] text-[#001e3c] px-4 py-2 rounded-full text-sm font-bold">
                  Co-Founder & Director
                </div>
              </div>
              <h3 className="text-3xl font-bold text-[#001e3c] mb-4">Aman Pawar</h3>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                Aman Pawar is the driving force behind UniFost—blending vision with action, and passion with purpose. His tireless efforts and hands-on leadership have shaped a platform that puts students first. With expertise in business strategy and digital education, he bridges the gap between academia and industry needs.
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001e3c] mb-6">
            Ready to Transform Your Educational Journey?
          </h2>
          <p className="text-xl text-[#001e3c] mb-8 max-w-3xl mx-auto">
            Whether you're exploring online courses or traditional universities, our experts will guide you to the perfect path for your career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#001e3c] text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-[#003b6c] transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Book Free Counseling Session
            </button>
            <button className="bg-white text-[#001e3c] px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Explore Our Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
