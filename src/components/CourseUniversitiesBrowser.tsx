'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ImageWithFallback from '@/components/ImageWithFallback';
import { FaSearch, FaMapMarkerAlt, FaBook, FaStar, FaClock, FaMoneyBillWave, FaArrowRight } from 'react-icons/fa';

export interface UniversityInfo {
  name: string;
  location: string;
  rating: number;
  image: string;
  specializations: string[];
  fee: string; // e.g. "₹1.2L - ₹3.5L"
  duration: string;
  accreditation?: string;
  features: string[];
}

interface Props {
  universities: UniversityInfo[];
  courseTitle: string;
}

function parseMinFeeLakhs(feeRange: string): number | null {
  if (!feeRange) return null;
  // Extract first number with optional decimal before 'L'
  const match = feeRange.match(/([0-9]+(?:\.[0-9]+)?)\s*L/i);
  if (match) {
    const val = Number(match[1]);
    return isNaN(val) ? null : val;
  }
  // Fallback: any number present
  const any = feeRange.match(/([0-9]+(?:\.[0-9]+)?)/);
  if (any) {
    const val = Number(any[1]);
    return isNaN(val) ? null : val;
  }
  return null;
}

export default function CourseUniversitiesBrowser({ universities, courseTitle }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');
  const [specializationFilter, setSpecializationFilter] = useState('All');
  const [sortBy, setSortBy] = useState<'rating-desc' | 'rating-asc' | 'fee-asc' | 'fee-desc'>('rating-desc');

  const locations = useMemo(() => ['All', ...Array.from(new Set(universities.map((u) => u.location.split(',')[0])))], [universities]);
  const specializations = useMemo(
    () => ['All', ...Array.from(new Set(universities.flatMap((u) => u.specializations)))],
    [universities]
  );

  const filtered = useMemo(() => {
    let list = universities;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      list = list.filter((u) => u.name.toLowerCase().includes(term) || u.location.toLowerCase().includes(term));
    }
    if (locationFilter !== 'All') {
      list = list.filter((u) => u.location.includes(locationFilter));
    }
    if (specializationFilter !== 'All') {
      const spec = specializationFilter.toLowerCase();
      list = list.filter((u) => u.specializations.some((s) => s.toLowerCase().includes(spec)));
    }

    // Sorting
    if (sortBy === 'rating-desc' || sortBy === 'rating-asc') {
      list = [...list].sort((a, b) => (sortBy === 'rating-desc' ? b.rating - a.rating : a.rating - b.rating));
    } else {
      list = [...list].sort((a, b) => {
        const fa = parseMinFeeLakhs(a.fee) ?? Number.POSITIVE_INFINITY;
        const fb = parseMinFeeLakhs(b.fee) ?? Number.POSITIVE_INFINITY;
        return sortBy === 'fee-asc' ? fa - fb : fb - fa;
      });
    }

    return list;
  }, [universities, searchTerm, locationFilter, specializationFilter, sortBy]);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Filters */}
      <Card className="p-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaSearch className="inline w-4 h-4 mr-2" />
              Search Universities
            </label>
            <input
              type="text"
              placeholder="Search by name or location"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ffe0] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaMapMarkerAlt className="inline w-4 h-4 mr-2" />
              Filter by Location
            </label>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ffe0] focus:border-transparent"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaBook className="inline w-4 h-4 mr-2" />
              Filter by Specialization
            </label>
            <select
              value={specializationFilter}
              onChange={(e) => setSpecializationFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ffe0] focus:border-transparent"
            >
              {specializations.slice(0, 20).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ffe0] focus:border-transparent"
            >
              <option value="rating-desc">Rating: High to Low</option>
              <option value="rating-asc">Rating: Low to High</option>
              <option value="fee-asc">Fee: Low to High</option>
              <option value="fee-desc">Fee: High to Low</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Heading */}
      <div className="mb-8 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{filtered.length} Universities Found</h2>
        <p className="text-gray-600">Showing results for {courseTitle} programs</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((university, index) => (
          <div key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#00ffe0] bg-white overflow-hidden">
            <Card className="h-full border-0 shadow-none">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <ImageWithFallback src={university.image} alt={university.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <Badge className="absolute top-3 left-3 bg-blue-600 text-white border-0">
                  <FaStar className="w-3 h-3 mr-1" />
                  {university.rating}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-[#001e3c] transition-colors">{university.name}</CardTitle>
                <CardDescription className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="w-4 h-4 mr-2 text-[#00ffe0]" />
                  {university.location}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Specializations:</p>
                    <div className="space-y-1">
                      {university.specializations.slice(0, 3).map((spec, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-[#00ffe0] rounded-full mr-2"></div>
                          {spec}
                        </div>
                      ))}
                      {university.specializations.length > 3 && (
                        <div className="text-sm text-[#00ffe0] font-medium">+{university.specializations.length - 3} more</div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-600">
                      <FaClock className="w-4 h-4 mr-2 text-[#00ffe0]" />
                      <span>{university.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaMoneyBillWave className="w-4 h-4 mr-2 text-[#00ffe0]" />
                      <span>{university.fee}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1">
                      {university.features.map((feature, fi) => (
                        <Badge key={fi} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button className="w-full bg-[#001e3c] hover:bg-[#003b6c] text-white group-hover:bg-[#00ffe0] group-hover:text-[#001e3c] transition-all duration-300" asChild>
                  <Link href={`/universities/${university.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    View Details
                    <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}


