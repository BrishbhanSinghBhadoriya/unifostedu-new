'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ImageWithFallback from '@/components/ImageWithFallback';
import { FaSearch, FaMapMarkerAlt, FaBook, FaStar, FaClock, FaMoneyBillWave, FaArrowRight } from 'react-icons/fa';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';

function parseMinFeeLakhs(feeRange) {
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

export default function CourseUniversitiesBrowser({ universities, courseTitle }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');
  const [specializationFilter, setSpecializationFilter] = useState('All');
  const [sortBy, setSortBy] = useState('rating-desc');
  const [openIndex, setOpenIndex] = useState(null);

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
              onChange={(e) => setSortBy(e.target.value)}
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
                <Button 
                  className="w-full rounded-xl bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] font-semibold shadow-md hover:shadow-lg hover:from-[#00d4c4] hover:to-[#00ffe0] transition-all duration-300 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e6cc]"
                  onClick={() => setOpenIndex(index)}
                >
                  Enquiry Now
                  <FaArrowRight className="text-[#007a71]" />
                </Button>
                <Dialog open={openIndex === index} onOpenChange={(v) => setOpenIndex(v ? index : null)}>
                  <DialogContent className="sm:max-w-[560px]">
                    <DialogHeader>
                      <DialogTitle>Enquiry for {university.name}</DialogTitle>
                    </DialogHeader>
                    <EnquiryForm 
                      formType="getStarted"
                      universityName={university.name}
                      defaultProgram={(function mapCourse(title){
                        const t = (title || '').toLowerCase();
                        if (t.includes('mba')) return 'MBA';
                        if (t.includes('mca')) return 'MCA';
                        if (t.includes('bba')) return 'BBA';
                        if (t.includes('m.com') || t.includes('mcom')) return 'MCOM';
                        if (t.includes('b.com') || t.includes('bcom')) return 'BCOM';
                        if (t.includes('ma ' ) || t === 'ma' || t.includes(' master of arts')) return 'MA';
                        if (t.includes('ba ' ) || t === 'ba' || t.includes(' bachelor of arts')) return 'BA';
                        return 'MBA';
                      })(courseTitle)}
                      onSubmitted={() => setOpenIndex(null)}
                    />
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}


