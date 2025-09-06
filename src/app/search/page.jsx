'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  const performSearch = async (searchQuery) => {
    setLoading(true);
    // Simulate search results
    const results = [
      { type: 'course', title: 'MBA Online', description: 'Master of Business Administration online program' },
      { type: 'university', title: 'Amity University', description: 'Leading private university with online programs' },
      { type: 'course', title: 'BBA Online', description: 'Bachelor of Business Administration online program' },
    ].filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(results);
    setLoading(false);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Search <span className="text-[#00ffe0]">Results</span>
            </h1>
            {query && (
              <p className="text-xl text-gray-600">
                Results for: <span className="font-semibold">{query}</span>
              </p>
            )}
          </div>

          {loading ? (
            <div className="text-center">
              <p className="text-gray-600">Searching...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="space-y-6">
              {searchResults.map((result, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{result.title}</h3>
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
          ) : query ? (
            <div className="text-center">
              <p className="text-gray-600 mb-6">No results found for {query}</p>
              <p className="text-gray-500">Try searching with different keywords or browse our courses and universities.</p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-6">Enter a search query to find courses and universities.</p>
            </div>
          )}

          <div className="text-center mt-16">
            <Link 
              href="/"
              className="bg-[#001e3c] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#003b6c] transition-colors"
            >
              Back to Home
            </Link>
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
