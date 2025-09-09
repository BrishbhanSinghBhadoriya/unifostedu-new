'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Expanded dataset
  const allResults = [
    { type: 'course', title: 'MBA Online', description: 'Master of Business Administration program with specializations in Finance, HR, Marketing, and IT.' },
    { type: 'course', title: 'BBA Online', description: 'Bachelor of Business Administration with flexible online modules.' },
    { type: 'course', title: 'MCA Online', description: 'Master of Computer Applications with AI, Cloud, and Data Science electives.' },
    { type: 'course', title: 'BCA Online', description: 'Bachelor of Computer Applications with industry-ready curriculum.' },
    { type: 'university', title: 'Amity University', description: 'Leading private university offering online degrees approved by UGC-DEB.' },
    { type: 'university', title: 'Manipal University Online', description: 'Renowned for its global online programs and industry partnerships.' },
    { type: 'university', title: 'Jain University Online', description: 'NAAC A+ accredited online programs for UG and PG courses.' },
  ];

  useEffect(() => {
    if (query) {
      performSearch(query);
    } else {
      // ✅ Show default featured results
      setSearchResults(allResults.slice(0, 5));
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ✅ Always render an H1 */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {query 
                ? <>Search Results for <span className="text-[#00ffe0]">"{query}"</span></>
                : <>Find <span className="text-[#00ffe0]">Courses & Universities</span></>
              }
            </h1>
            {!query && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Search through our extensive database of online programs, including MBA, BBA, MCA, BCA, and more.
                Compare universities, admission details, and program fees in one place.
              </p>
            )}
          </div>

          {/* ✅ Search Results */}
          {loading ? (
            <p className="text-center text-gray-600">Searching...</p>
          ) : searchResults.length > 0 ? (
            <div className="space-y-6">
              {searchResults.map((result, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">{result.title}</h2>
                      <p className="text-gray-600 mb-4">{result.description}</p>
                      <span className="bg-[#00ffe0] text-[#001e3c] px-3 py-1 rounded-full text-sm font-semibold">
                        {result.type}
                      </span>
                    </div>
                    <Link 
                      href={`/${result.type === 'course' ? 'courses' : 'universities'}/${result.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-[#001e3c] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#003b6c] transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-6">No results found for <strong>{query}</strong></p>
              <p className="text-gray-500">Try searching with different keywords, or browse our featured programs below.</p>
              <div className="mt-8">
                {allResults.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow p-4 mb-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ✅ Related Searches / FAQs */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-4">Popular Searches</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-blue-700">
              <li><Link href="/courses/mba-online">MBA Online</Link></li>
              <li><Link href="/courses/mca-online">MCA Online</Link></li>
              <li><Link href="/courses/bca-online">BCA Online</Link></li>
              <li><Link href="/universities/amity-university">Amity University</Link></li>
              <li><Link href="/universities/manipal-university-online">Manipal University Online</Link></li>
            </ul>
          </div>

          {/* ✅ SEO Descriptive Section */}
          <div className="mt-20 max-w-3xl mx-auto text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold mb-4">About UniFost Search</h2>
            <p>
              The UniFost course and university search tool is designed to help students and
              professionals quickly explore accredited online programs. Our database includes
              popular degrees such as MBA, BBA, MCA, and BCA, along with details about
              universities like Amity, Manipal, and Jain. Each program listing highlights
              admission requirements, course fees, and career prospects, making it easier for
              you to compare options side by side.
            </p>
            <p className="mt-4">
              Whether you are looking for a flexible MBA specialization in Finance, a career-
              focused MCA in Data Science, or an affordable BBA program, UniFost provides
              transparent information so you can make confident decisions. Our platform
              emphasizes UGC-DEB approved universities to ensure that your chosen degree
              carries both credibility and career value.
            </p>
            <p className="mt-4">
              Use this page not only to search, but also to discover trending online degrees,
              compare institutions, and explore the future of online education in India.
              UniFost bridges the gap between students and top universities, guiding you
              toward the right path for your professional growth.
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
