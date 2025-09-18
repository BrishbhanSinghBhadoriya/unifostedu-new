'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import EnquiryForm from '@/components/EnquiryForm';
import Hero from '@/components/pages/landing/Hero';

function SearchContent() {
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

    
    <Suspense fallback={<div>Loading...</div>}>
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
 
      <Hero />
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
                    <div className="mt-6">
                      <Link 
                        href={`/${result.type === 'course' ? 'courses' : 'universities'}/${result.title.toLowerCase().replace(/\s+/g, '-')}`}
                       className="inline-block text-center bg-blue-600 text-white px-6 py-2 rounded-full font-[Inter] shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300"

                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center bg-blue p-10 rounded-2xl shadow-md">
              <p className="text-gray-700 text-lg mb-4">😕 No results found for <strong>{query}</strong></p>
              <p className="text-gray-500">Try different keywords, or explore featured programs below.</p>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {allResults.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl shadow p-4 hover:shadow-md transition">
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ✅ Popular Searches */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Popular University</h2>
            <h3 className='text-green-500 text-left mb-4'> Click it</h3>
      <ul className="flex flex-wrap gap-6 justify-center">
  {[
    { name: 'Amity University', href: '/amity', img: '/images/amity.webp' },
    { name: 'Manipal University Online', href: '/manipal', img: '/images/manipal.webp' },
    { name: 'NMIMS University', href: '/nmims', img: '/images/nmims.webp' },
    { name: 'Dr. D Y Patil University', href: '/dypatil', img: '/images/dypatil.webp' },
    { name: 'Jain University', href: '/jain', img: '/images/jain.webp' },
    { name: 'Lovely Professional University', href: '/lpu', img: '/images/lpu.webp' },
    { name: 'Manipal Academy of Higher Education', href: '/mahe', img: '/images/mahe-uni.webp' },
    { name: 'Sharda University', href: '/sharda', img: '/images/sharda.webp' },
    { name: 'Shoolini University', href: '/shoolini', img: '/images/shoolini.webp' },
    { name: 'Sikkim Manipal University', href: '/smu', img: '/images/smu-uni.webp' },
    { name: 'UPES University', href: '/upes', img: '/images/upes.webp' },
    { name: 'Uttaranchal University', href: '/uu', img: '/images/uu-uni.webp' },
    { name: 'VGU University', href: '/vgu', img: '/images/vgu1.webp' },
    { name: 'Kurukshetra University', href: '/ku', img: '/images/ku.webp' },
    { name: 'OP Jindal University', href: '/opjindal', img: '/images/opjindal.webp' },
    { name: 'Chandigarh University', href: '/chandigarh', img: '/images/chandigarh.webp' },
  ].map((university, idx) => (
    <li key={idx} className="w-70 h-60">
      <Link 
        href={university.href} 
        className="relative w-full h-full block rounded-xl overflow-hidden shadow-lg group"
      >
        <Image 
          src={university.img} 
          alt={university.name} 
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <span className="text-white font-bold text-lg text-center px-2">
            {university.name}
          </span>
        </div>
      </Link>
    </li>
  ))}
</ul>


          </div>

          {/* ✅ SEO Info */}
          <div className="mt-20 max-w-3xl mx-auto text-gray-700 leading-relaxed bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">About UniFost Search</h2>
            <p>
              The UniFost course and university search tool helps students and professionals
              quickly explore accredited online programs. Our database includes MBA, BBA, MCA,
              and BCA, along with top universities like Amity, Manipal, and Jain.
            </p>
            <p className="mt-4">
              Whether you’re seeking a Finance MBA, Data Science MCA, or affordable BBA, UniFost
              ensures transparency and credibility with UGC-DEB approved universities.
            </p>
            <p className="mt-4">
              Discover trending online degrees, compare institutions, and shape your career path
              with confidence using UniFost’s trusted platform.
            </p>
          </div>

        </div>
      </div>
    </Suspense>
  );
}

export default function Search() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
