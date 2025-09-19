"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { motion } from "framer-motion";
import Hero from "@/components/pages/landing/Hero";
import EnquiryForm from "@/components/EnquiryForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";



const courses = [
  { title: "MBA Online", desc: "Gain strategic skills from top universities", tag: "Popular" },
  { title: "MCA Online", desc: "Advance in tech with flexible learning", tag: "Top Rated" },
  { title: "M.Com Online", desc: "Deepen commerce expertise", tag: "Best Value" },
  { title: "MA Online", desc: "Explore diverse specializations", tag: "Literature" },
  { title: "MAJMC Online", desc: "Master journalism and mass communication", tag: "Media" },
  { title: "BBA Online", desc: "Management fundamentals for the digital age", tag: "Career Starter" },
  { title: "BCA Online", desc: "Build a career in software development", tag: "Trending" },
  { title: "B.Com Online", desc: "Commerce education for business world", tag: "Business" },
  { title: "BA Online", desc: "Liberal arts foundation for diverse careers", tag: "Arts" },
  { title: "BAJMC Online", desc: "Journalism and mass communication basics", tag: "Media" },
];


export default function CourseSearch() {
  const router = useRouter();
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [modalType, setModalType] = useState("getStarted");

  const openModal = (type) => {
    setModalType(type);
    setShowEnquiryModal(true);
  };

  return (
    <>
      {/* <Hero onOpenModal={openModal} /> */}

      <Head>
        <title>Search Online Courses | UniFost</title>
        <meta
          name="description"
          content="Find the perfect online course from top universities. Explore MBA, MCA, BBA, BCA, and more with career-oriented learning."
        />
        <meta
          name="keywords"
          content="Online Courses, MBA Online, MCA Online, BBA Online, BCA Online, UniFost, Study Online"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.unifost.com/courses" />
      </Head>

      {/* Unique Hero Section - Different from Search Page */}
      <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-24 overflow-hidden">
        {/* Unique Background Pattern - Hexagons */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23a7f3d0%22%20fill-opacity%3D%220.2%22%3E%3Cpath%20d%3D%22M40%200L60%2015v30L40%2060L20%2045V15z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Title - Different Style */}
            <div className="mb-10">
              <div className="inline-flex items-center px-6 py-3 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Explore Our Course Catalog
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Master Your Future with{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Expert-Led Courses
                </span>
              </h1>
            </div>

            {/* Subtitle - Different Content */}
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                Transform your career with industry-relevant programs designed by leading experts and top universities
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-emerald-200">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Industry Experts
                </span>
                <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-teal-200">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  Live Projects
                </span>
                <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-cyan-200">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Career Support
                </span>
              </div>
            </div>

            {/* Course Stats - Different Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-emerald-200 transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-emerald-600 mb-1">10+</div>
                <div className="text-gray-600 font-medium text-sm">Universities</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-teal-200 transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-teal-600 mb-1">25+</div>
                <div className="text-gray-600 font-medium text-sm">Courses</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-cyan-200 transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-cyan-600 mb-1">5K+</div>
                <div className="text-gray-600 font-medium text-sm">Students</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-emerald-200 transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-emerald-600 mb-1">95%</div>
                <div className="text-gray-600 font-medium text-sm">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Unique Course Cards - Different Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-emerald-100 overflow-hidden transform hover:-translate-y-3 hover:rotate-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Unique Card Header with Icon */}
                <div className="relative p-8">
                  {/* Course Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>

                  {/* Course Tag */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border border-emerald-200">
                      {course.tag}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {course.title}
                  </h3>
                  
                  {/* Course Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {course.desc}
                  </p>

                  {/* Course Features */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span>UGC Approved</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      <span>Industry Experts</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      <span>Live Projects</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer - Different Style */}
                <div className="px-8 pb-8">
                  <div className="space-y-3">
                    <Link
                      href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Explore Course
                    </Link>
                    <button
                      onClick={() => openModal("getStarted")}
                      className="block w-full bg-white border-2 border-emerald-200 text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300"
                    >
                      Get Free Consultation
                    </button>
                  </div>
                </div>

                {/* Unique Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-cyan-200/30 to-emerald-200/30 rounded-full blur-xl"></div>
              </motion.div>
            ))}
          </div>

          {/* Unique Course Benefits Section */}
          <div className="mt-32">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Why Students Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transform Your Career with{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Expert-Led Learning
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join thousands of successful professionals who have advanced their careers with our comprehensive online programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-lg border border-emerald-200 text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry-Relevant</h3>
                <p className="text-gray-600 text-sm">Curriculum designed by industry experts to match current market demands</p>
              </div>
              
              <div className="group bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 shadow-lg border border-teal-200 text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">UGC Approved</h3>
                <p className="text-gray-600 text-sm">All programs are UGC-DEB approved ensuring quality and recognition</p>
              </div>
              
              <div className="group bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-3xl p-8 shadow-lg border border-cyan-200 text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Faculty</h3>
                <p className="text-gray-600 text-sm">Learn from experienced professors and industry professionals</p>
              </div>

              <div className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-lg border border-emerald-200 text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Track</h3>
                <p className="text-gray-600 text-sm">Accelerated learning paths to help you achieve your goals faster</p>
              </div>
            </div>
          </div>

          {/* Unique CTA Section */}
          <motion.div
            className="text-center mt-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-16 shadow-2xl border-2 border-emerald-200 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23a7f3d0%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M40%200L60%2015v30L40%2060L20%2045V15z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
              
              <div className="relative">
                <div className="inline-flex items-center px-6 py-3 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-8">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Start Your Journey Today
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Ready to Transform Your{' '}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Career?
                  </span>
                </h3>
                
                <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join over 10,000 successful professionals who have advanced their careers with our expert-led online programs
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link
                    href="/"
                    className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Back to Home
                  </Link>
                  
                  <div className="text-gray-400 font-medium">or</div>
                  
                  <button
                    onClick={() => openModal("getStarted")}
                    className="group inline-flex items-center px-10 py-5 bg-white border-2 border-emerald-300 text-emerald-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-300 transform hover:scale-105"
                  >
                    <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Get Free Consultation
                  </button>
                </div>
                
                {/* Trust Indicators */}
                <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>UGC Approved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Expert Faculty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Career Support</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal} modal={false}>
            <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-2 lg:my-1 p-4 sm:p-6 z-[30001]">
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl font-bold text-[#001e3c] text-center">
                  {modalType === "getStarted" && "Get Started with Unifost"}
                  {modalType === "videoCall" && "Book a Video Call"}
                  {modalType === "homeDemo" && "Book a Home Demo"}
                </DialogTitle>
              </DialogHeader>
              <EnquiryForm
                onSubmitted={() => setShowEnquiryModal(false)}
                formType={modalType}
              />
            </DialogContent>
          </Dialog>
    </>
  );
}
