'use client';

import EnquiryForm from '@/components/EnquiryForm';
import ImageWithFallback from '@/components/ImageWithFallback';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import UniversityDetailsModal from '@/components/UniversityDetailsModal';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { FaArrowRight, FaBook, FaCircleCheck, FaClock, FaLocationDot, FaMoneyBillWave, FaRegEye, FaMagnifyingGlass, FaStar } from 'react-icons/fa6';

// Type Definitions
type University = {
  name: string;
  location: string;
  image: string;
  rating: number;
  specializations: string | string[];
  duration: string;
  fee: string;
  features: string[];
};

type CourseUniversitiesBrowserProps = {
  universities: University[];
  courseTitle: string;
};

type SortOption = 'rating-desc' | 'rating-asc' | 'fee-asc' | 'fee-desc';

// Helper Functions
function normalizeSpecializations(raw: string | string[] | undefined | null): string[] {
  if (!raw) return [];
  const toArray = Array.isArray(raw) ? raw : [raw];
  return toArray
    .flatMap((item) => (typeof item === 'string' ? item.split(',') : [item]))
    .map((s) => (typeof s === 'string' ? s.trim() : s))
    .filter((s): s is string => typeof s === 'string' && s.length > 0);
}

function parseMinFeeLakhs(feeRange: string | undefined | null): number | null {
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

function mapCourse(title: string): string {
  const t = (title || '').toLowerCase();
  if (t.includes('mba')) return 'MBA';
  if (t.includes('mca')) return 'MCA';
  if (t.includes('bba')) return 'BBA';
  if (t.includes('m.com') || t.includes('mcom')) return 'MCOM';
  if (t.includes('b.com') || t.includes('bcom')) return 'BCOM';
  if (t.includes('ma ') || t === 'ma' || t.includes(' master of arts')) return 'MA';
  if (t.includes('ba ') || t === 'ba' || t.includes(' bachelor of arts')) return 'BA';
  return 'MBA';
}

export default function CourseUniversitiesBrowser({ universities, courseTitle,}: CourseUniversitiesBrowserProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [locationFilter, setLocationFilter] = useState<string>('All');
  const [specializationFilter, setSpecializationFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<SortOption>('rating-desc');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [submittedUniversities, setSubmittedUniversities] = useState<Set<string>>(new Set());

  // Load submitted universities from localStorage on component mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('submittedUniversities');
      if (stored) {
        setSubmittedUniversities(new Set(JSON.parse(stored)));
      }
    } catch (error) {
      console.error('Error loading submitted universities from localStorage:', error);
    }
  }, []);

  // Save submitted universities to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('submittedUniversities', JSON.stringify([...submittedUniversities]));
    } catch (error) {
      console.error('Error saving submitted universities to localStorage:', error);
    }
  }, [submittedUniversities]);

  const locations = useMemo<string[]>(
    () => ['All', ...Array.from(new Set(universities.map((u) => u.location.split(',')[0])))],
    [universities]
  );

  const specializations = useMemo<string[]>(
    () => ['All', ...Array.from(new Set(universities.flatMap((u) => {
      return normalizeSpecializations(u.specializations);
    })))],
    [universities]
  );

  const filtered = useMemo<University[]>(() => {
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
      list = list.filter((u) => {
        const specs = normalizeSpecializations(u.specializations);
        return specs.some((s) => s && s.toLowerCase().includes(spec));
      });
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

  const handleEnquirySubmitted = (universityIndex: number): void => {
    const university = filtered[universityIndex];
    setSubmittedUniversities(prev => new Set([...prev, university.name]));
    setOpenIndex(null);
    
    // Show university details modal
    setSelectedUniversity(university);
    setShowDetailsModal(true);
  };

  const handleViewDetails = (university: University): void => {
    setSelectedUniversity(university);
    setShowDetailsModal(true);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setLocationFilter(e.target.value);
  };

  const handleSpecializationChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSpecializationFilter(e.target.value);
  };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSortBy(e.target.value as SortOption);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Filters */}
      <div className="p-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <label htmlFor="search-universities" className="block text-sm font-medium text-gray-700 mb-2">
              <FaMagnifyingGlass className="inline w-4 h-4 mr-2" />
              Search Universities
            </label>
            <input
              id="search-universities"
              type="text"
              placeholder="Search by name or location"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ffe0] focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="filter-location" className="block text-sm font-medium text-gray-700 mb-2">
              <FaLocationDot className="inline w-4 h-4 mr-2" />
              Filter by Location
            </label>
            <select
              id="filter-location"
              value={locationFilter}
              onChange={handleLocationChange}
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
            <label htmlFor="filter-specialization" className="block text-sm font-medium text-gray-700 mb-2">
              <FaBook className="inline w-4 h-4 mr-2" />
              Filter by Specialization
            </label>
            <select
              id="filter-specialization"
              value={specializationFilter}
              onChange={handleSpecializationChange}
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
            <label htmlFor="sort-universities" className="block text-sm font-medium text-gray-700 mb-2">Sort</label>
            <select
              id="sort-universities"
              value={sortBy}
              onChange={handleSortChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ffe0] focus:border-transparent"
            >
              <option value="rating-desc">Rating: High to Low</option>
              <option value="rating-asc">Rating: Low to High</option>
              <option value="fee-asc">Fee: Low to High</option>
              <option value="fee-desc">Fee: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className="mb-8 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{filtered.length} Universities Found</h2>
        <p className="text-gray-600">Showing results for {courseTitle} programs</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {filtered.map((university, index) => {
          const hasSubmitted = submittedUniversities.has(university.name);
          
          return (
            <div key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#00ffe0] bg-white overflow-hidden p-5">
              <div className="h-full border-0 shadow-none flex flex-col">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-5">
                    <ImageWithFallback src={university.image} alt={university.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <Badge className="absolute top-3 left-3 bg-blue-600 text-white border-0">
                    <FaStar className="w-3 h-3 mr-1" />
                    {university.rating}
                  </Badge>
                  {hasSubmitted && (
                    <Badge className="absolute top-3 right-3 bg-green-600 text-white border-0">
                      <FaCircleCheck className="w-3 h-3 mr-1" />
                      Submitted
                    </Badge>
                  )}
                </div>

                <div className="pb-3">
                  <div className="text-lg font-bold text-gray-900 group-hover:text-[#001e3c] transition-colors">{university.name}</div>
                  <div className="flex items-center text-gray-600">
                    <FaLocationDot className="w-4 h-4 mr-2 text-[#00ffe0]" />
                    {university.location}
                  </div>
                </div>

                <div className="pb-4 flex-1">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Specializations:</p>
                      <div className="space-y-1">
                        {normalizeSpecializations(university.specializations).slice(0, 5).map((spec, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-[#00ffe0] rounded-full mr-2"></div>
                            {spec}
                          </div>
                        ))}
                        {normalizeSpecializations(university.specializations).length > 5 && (
                          <button
                            type="button"
                            onClick={() => handleViewDetails(university)}
                            className="text-sm text-[#00ffe0] font-medium underline underline-offset-2 cursor-pointer"
                          >
                            View more
                          </button>
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
                </div>

                <div className="pt-0 mt-auto">
                  {hasSubmitted ? (
                    <Button 
                      className="w-full rounded-xl bg-gradient-to-r from-[#00e6cc] to-[#00d4c4] text-white font-semibold shadow-md hover:shadow-lg hover:from-[#00d4c4] hover:to-[#00e6cc] transition-all duration-300 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e6cc]"
                      onClick={() => handleViewDetails(university)}
                    >
                      <FaRegEye className="text-white" />
                      View Details
                    </Button>
                  ) : (
                    <Button 
                      className="w-full rounded-xl bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] font-semibold shadow-md hover:shadow-lg hover:from-[#00d4c4] hover:to-[#00ffe0] transition-all duration-300 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00e6cc]"
                      onClick={() => setOpenIndex(index)}
                    >
                      Enquiry Now
                      <FaArrowRight className="text-[#007a71]" />
                    </Button>
                  )}
                  
                  <Dialog open={openIndex === index} onOpenChange={(v) => setOpenIndex(v ? index : null)}>
                    <DialogContent 
                      className="sm:max-w-[560px]"
                      style={{
                        position: 'fixed',
                        top: '50vh',
                        left: '50vw',
                        transform: 'translate(-50%, -50%)',
                        margin: 0
                      }}
                    >
                      <DialogHeader>
                        <DialogTitle>Enquiry for {university.name}</DialogTitle>
                      </DialogHeader>
                      <EnquiryForm 
                        formType="getStarted"
                        universityName={university.name}
                        defaultProgram={mapCourse(courseTitle)}
                        onSubmitted={() => handleEnquirySubmitted(index)}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* University Details Modal */}
      <UniversityDetailsModal
        university={selectedUniversity}
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        courseTitle={courseTitle}
      />
    </div>
  );
}