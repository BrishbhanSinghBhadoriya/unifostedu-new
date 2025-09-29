'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import EnquiryForm from '@/components/EnquiryForm';
import Hero from '@/components/pages/landing/Hero';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/* ------------------ CHILD ------------------ */
function SearchContent({ onOpenModal }) {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const allResults = [
    { type: 'course', title: 'MBA Online', description: 'Master of Business Administration program with specializations in Finance, HR, Marketing, and IT.', tag: "Popular" },
    { type: 'course', title: 'MCA Online', description: 'Master of Computer Applications with AI, Cloud, and Data Science electives.', tag: "Top Rated" },
    { type: 'course', title: 'M.Com Online', description: 'Deepen commerce expertise with advanced finance and accounting modules.', tag: "Best Value" },
    { type: 'course', title: 'MA Online', description: 'Explore diverse arts and humanities specializations through flexible learning.', tag: "Literature" },
    { type: 'course', title: 'MAJMC Online', description: 'Master journalism and mass communication skills for media careers.', tag: "Media" },
    { type: 'course', title: 'BBA Online', description: 'Learn management fundamentals tailored for the digital business age.', tag: "Career Starter" },
    { type: 'course', title: 'BCA Online', description: 'Build a career in software development with industry-ready curriculum.', tag: "Trending" },
    { type: 'course', title: 'B.Com Online', description: 'Commerce foundation covering business, accounting, and finance basics.', tag: "Business" },
    { type: 'course', title: 'BA Online', description: 'Liberal arts education offering a foundation for multiple career paths.', tag: "Arts" },
    { type: 'course', title: 'BAJMC Online', description: 'Learn journalism and mass communication essentials for modern media.', tag: "Media" },
  ];

  useEffect(() => {
    if (query) {
      performSearch(query);
    } else {
      setSearchResults(allResults.slice(0, 15));
    }
  }, [query]);

  const performSearch = (searchQuery) => {
    setLoading(true);
    const results = allResults.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>
          {query
            ? `Search results for "${query}" | UniFost`
            : 'Search Online Courses & Universities | UniFost'}
        </title>
        <meta
          name="description"
          content={
            query
              ? `Find online courses and universities related to "${query}". Compare MBA, BBA, MCA, BCA, and more programs with UniFost.`
              : 'Explore top online universities and courses. Discover MBA, BBA, MCA, BCA, and other online degrees for your career goals.'
          }
        />
      </Head>

      {/* <Hero onOpenModal={onOpenModal} /> */}
      
      {/* Professional Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e0e7ff%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main Title */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                {query ? (
                  <>
                    Search Results for{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      "{query}"
                    </span>
                  </>
                ) : (
                  <>
                    Find Your Perfect{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Courses & Universities
                    </span>
                  </>
                )}
              </h1>
            </div>

            {/* Subtitle */}
            {!query && (
              <div className="max-w-3xl mx-auto mb-12">
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-6">
                  Discover top-tier online education programs from India's leading universities
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    UGC Approved
                  </span>
                  <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    10+ Universities
                  </span>
                  <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    20+ Courses
                  </span>
                </div>
              </div>
            )}

            {/* Search Stats */}
            {!query && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600 font-medium">Universities</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                  <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                  <div className="text-gray-600 font-medium">Online Courses</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                  <div className="text-3xl font-bold text-purple-600 mb-2">5K+</div>
                  <div className="text-gray-600 font-medium">Students</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Enhanced Search Results */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <span className="ml-4 text-gray-600 text-lg">Searching courses...</span>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2"
                >
                  {/* Card Header */}
                  <div className="relative p-8 pb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {result.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {result.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200">
                          {result.tag}
                        </span>
                      </div>
                    </div>
                    
                    {/* Course Type Badge */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-500 capitalize">
                        {result.type} Program
                      </span>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-8 pb-8">
                    <div className="flex gap-3">
                      <Link
                        href={`/${result.type === 'course' ? 'courses' : 'universities'}/${result.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold text-center shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                      >
                        View Details
                      </Link>
                      <button
                        onClick={() => onOpenModal("getStarted")}
                        className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Info
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No results found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any courses matching <span className="font-semibold text-blue-600">"{query}"</span>
                </p>
                <div className="space-y-3">
                  <p className="text-sm text-gray-500">Try searching for:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['MBA', 'BBA', 'MCA', 'BCA', 'M.Com', 'B.Com'].map((term) => (
                      <button
                        key={term}
                        onClick={() => performSearch(term)}
                        className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Popular Universities Section */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Top <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Universities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore India's leading universities offering world-class online education programs
              </p>
              <div className="mt-6">
                <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  UGC Approved & Trusted
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[
                { name: 'Amity University', href: '/Amity-University-Online', img: '/images/amity.webp', rating: '4.8' },
                { name: 'Manipal University', href: '/manipal', img: '/images/manipal.webp', rating: '4.7' },
                { name: 'NMIMS University', href: '/nmims', img: '/images/nmims.webp', rating: '4.9' },
                { name: 'Dr. D Y Patil University', href: '/dypatil', img: '/images/dypatil.webp', rating: '4.6' },
                { name: 'Jain University', href: '/jain', img: '/images/jain.webp', rating: '4.5' },
                { name: 'Lovely Professional University', href: '/lpu', img: '/images/lpu.webp', rating: '4.4' },
                { name: 'Manipal Academy of Higher Education', href: '/mahe', img: '/images/mahe-uni.webp', rating: '4.8' },
                { name: 'Sharda University', href: '/sharda', img: '/images/sharda.webp', rating: '4.3' },
                { name: 'Shoolini University', href: '/shoolini', img: '/images/shoolini.webp', rating: '4.2' },
                { name: 'Sikkim Manipal University', href: '/smu', img: '/images/smu-uni.webp', rating: '4.5' },
                { name: 'UPES University', href: '/upes', img: '/images/upes.webp', rating: '4.7' },
                { name: 'Uttaranchal University', href: '/uu', img: '/images/uu-uni.webp', rating: '4.1' },
                { name: 'VGU University', href: '/vgu', img: '/images/vgu1.webp', rating: '4.0' },
                { name: 'Kurukshetra University', href: '/ku', img: '/images/ku.webp', rating: '4.3' },
                { name: 'OP Jindal University', href: '/opjindal', img: '/images/opjindal.webp', rating: '4.6' },
                { name: 'Chandigarh University', href: '/chandigarh', img: '/images/chandigarh.webp', rating: '4.4' },
              ].map((university, idx) => (
                <div key={idx} className="group">
                  <Link 
                    href={university.href} 
                    className="relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
                  >
                    {/* University Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={university.img} 
                        alt={university.name} 
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm font-semibold text-gray-900">{university.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* University Info */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {university.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">UGC Approved</span>
                        <div className="flex items-center text-blue-600 text-sm font-semibold">
                          Explore
                          <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </Link>
                </div>
              ))}
            </div>

            {/* View All Universities CTA */}
            <div className="text-center mt-12">
              <Link
                href="/listofcollege"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                View All Universities
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Enhanced SEO Info Section */}
          <div className="mt-24">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 shadow-xl border border-gray-100">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Unifost Search</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  The Unifost course and university search tool helps students and professionals quickly explore accredited online programs. Our comprehensive database includes MBA, BBA, MCA, and BCA programs from top universities like Amity, Manipal, and Jain.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">UGC Approved</h3>
                    <p className="text-gray-600 text-sm">All programs are UGC-DEB approved ensuring quality education</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Search</h3>
                    <p className="text-gray-600 text-sm">Find your perfect course or university in seconds</p>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                    <p className="text-gray-600 text-sm">Get personalized career counseling and support</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you're seeking a Finance MBA, Data Science MCA, or affordable BBA, Unifost ensures transparency and credibility with UGC-DEB approved universities. Discover trending online degrees, compare institutions, and shape your career path with confidence using Unifost's trusted platform.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

/* ------------------ PARENT ------------------ */
export default function Search() {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleOpenModal = (type) => {
    setModalType(type);
    setShowEnquiryModal(true);
  };

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SearchContent onOpenModal={handleOpenModal} />

      {/* ✅ Enquiry Modal */}
      <Dialog open={showEnquiryModal} onOpenChange={setShowEnquiryModal} modal={false}>
        <DialogContent className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-4 p-4 sm:p-6 z-[30001]">
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
    </Suspense>
  );
}
