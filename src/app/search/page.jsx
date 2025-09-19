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

      <Hero onOpenModal={onOpenModal} />
      <div className="bg-gray rounded-2xl shadow-md hover:shadow-xl transition-all p-6 
             border-2 border-transparent hover:border-blue-500 
             hover:shadow-blue-200  duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ✅ Title */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              {query
                ? <>Search Results for <span className="text-blue-600">"{query}"</span></>
                : <>Find <span className="text-blue-600">Courses & Universities</span></>
              }
            </h1>
            {!query && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Explore our curated list of online programs like MBA, BBA, MCA, and BCA.
                Compare universities, admission details, and program fees in one place.
              </p>
            )}
          </div>

          {/* ✅ Search Results */}
          {loading ? (
            <p className="text-center text-gray-600 animate-pulse">Searching...</p>
          ) : searchResults.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="bg-teal-100 rounded-2xl shadow-md  hover:shadow-xl transition-all p-6 border border-gray-100"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">{result.title}</h2>
                      <p className="text-gray-600 mb-4">{result.description}</p>
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {result.type}
                      </span>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <Link
                        href={`/${result.type === 'course' ? 'courses' : 'universities'}/${result.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-block text-center bg-blue-600 text-white px-6 py-2 rounded-full font-[Inter] shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
                      >
                        View Details
                      </Link>
                      {/* 👇 Modal Trigger */}
                      <button
                        onClick={() => onOpenModal("getStarted")}
                        className="inline-block bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 hover:scale-105 transition-transform duration-300"
                      >
                        Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center bg-blue p-10 rounded-2xl shadow-md">
              <p className="text-gray-700 text-lg mb-4">😕 No results found for <strong>{query}</strong></p>
              <p className="text-gray-500">Try different keywords, or explore featured programs below.</p>
            </div>
          )}

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
