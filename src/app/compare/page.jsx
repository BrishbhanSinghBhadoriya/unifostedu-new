'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { Suspense } from "react";

import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';
import {
  FaUniversity,
  FaMapMarkerAlt,
  FaStar,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaCheckCircle,
  FaTimes,
  FaArrowLeft,
} from 'react-icons/fa';

// ---------- DATA ----------
const RAW_UNIVERSITIES = [
  {
    key: 'amity-university-online',
    name: 'Amity University Online',
    logo: '/amitylogo.jpg',
    location: 'Noida, Uttar Pradesh',
    ranking: 'Top 10',
    established: '2005',
    fee: '₹99K - ₹2.0L',
    courses: ['MBA', 'BBA', 'BCA', 'MCA', 'M.Com', 'B.Com'],
    features: ['UGC recognized', 'NAAC A+ accreditation', 'Industry partnerships', 'Placement assistance'],
    approvals: ['UGC', 'NAAC A+'],
    rating: 4.8,
    eligibility: 'Graduation in any stream',
    nirfRank: 29,
    naacGrade: 'A+',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Self-paced',
  },
  {
    key: 'manipal-university-online',
    name: 'Manipal University Online',
    logo: '/manipallogo.jpg',
    location: 'Manipal, Karnataka',
    ranking: 'Top 5',
    established: '1953',
    fee: '₹99K - ₹1.8L',
    courses: ['MBA', 'BBA', 'BCA', 'MCA', 'M.Com', 'B.Com'],
    features: ['UGC recognized', 'NAAC A++ accreditation', 'International partnerships', 'Career development'],
    approvals: ['UGC', 'NAAC A++'],
    rating: 4.6,
    eligibility: 'Graduation in any stream',
    nirfRank: 73,
    naacGrade: 'A++',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Self-paced',
  },
  {
    key: 'nmims',
    name: 'NMIMS',
    logo: '/nmims.png',
    location: 'Mumbai, Maharashtra',
    established: '1981',
    fee: '₹0.94L - ₹2.20L',
    courses: ['MBA', 'BBA', 'M.Com'],
    features: ['Industry connect', 'Placement assistance', 'Quality education'],
    approvals: ['UGC', 'NAAC A+'],
    rating: 4.5,
    eligibility: '10+2,Graduation in any stream',
    nirfRank: 21,
    naacGrade: 'A+',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + LMS Access',
  },
  {
    key: 'lovely-professional-university-online',
    name: 'Lovely Professional University Online',
    logo: '/lpu.png',
    location: 'Jalandhar,Punjab',
    established: '2005',
    fee: '₹0.80L - ₹2.0L',
    courses: ['MBA', 'BBA', 'MCA', 'BCA', 'M.Com', 'BA'],
    features: ['Placement assistance', 'EMI option', 'WES approved'],
    approvals: ['UGC', 'NAAC A++'],
    rating: 4.1,
    eligibility: '10+2,Graduation in any stream',
    nirfRank: 38,
    naacGrade: 'A++',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Self-paced',
  },
  {
    key: 'university-of-petroleum-and-energy-studies-online',
    name: 'University of Petroleum and Energy Studies Online',
    logo: '/upes.png',
    location: 'Dehradun, Uttarakhand',
    established: '2003',
    fee: '₹1.50L - ₹1.75L',
    courses: ['MBA', 'BBA', 'MCA', 'BCA', 'M.Com'],
    features: ['Placement support', 'Industry focused'],
    approvals: ['UGC', 'AICTE', 'NAAC'],
    rating: 4.4,
    eligibility: '10+2,Graduation in any stream',
    nirfRank: 41,
    naacGrade: 'A',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Self-paced',
  },
  {
    key: 'dr-dy-patil-online',
    name: 'Dr. DY Patil Online',
    logo: '/dypatil.png',
    location: 'Pune, Maharashtra',
    established: '2003',
    fee: '₹1.45L - ₹1.90L',
    courses: ['MBA', 'BBA', 'MCA', 'BCA', 'M.Com'],
    features: ['Placement support', 'EMI options', 'WES approved'],
    approvals: ['UGC', 'AICTE', 'NAAC'],
    rating: 4.4,
    eligibility: '10+2,Graduation in any stream',
    nirfRank: 63,
    naacGrade: 'A++',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + LMS Access',
  },
  {
    key: 'sharda-university-online',
    name: 'Sharda University Online',
    logo: '/sharda.png',
    location: 'Greater Noida, Uttar Pradesh',
    established: '2009',
    fee: '₹0.8L - ₹1.30L',
    courses: ['MBA', 'BBA', 'MA', 'BA'],
    features: ['Quality education', 'Industry connect', 'Career support'],
    approvals: ['UGC', 'NAAC'],
    rating: 4.1,
    eligibility: '10+2,Graduation in any stream',
    nirfRank: 87,
    naacGrade: 'A+',
    placementSupport: true,
    wesApproved: false,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Self-paced',
  },
  {
    key: 'jain-university-online',
    name: 'Jain University Online',
    logo: '/jain.png',
    location: 'Bengaluru, Karnataka',
    established: '1990',
    fee: '1.05L - ₹2.98L',
    courses: ['MBA', 'BBA', 'MCA', 'BCA'],
    features: ['Modern curriculum', 'Industry projects', 'Career services'],
    approvals: ['UGC', 'NAAC A++'],
    rating: 4.5,
    eligibility: '10+2,Graduation in any stream',
    nirfRank: 77,
    naacGrade: 'A++',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Self-paced',
  },
  {
    key: 'chandigarh-university-online',
    name: 'Chandigarh University Online',
    logo: '/cu-online.png',
    location: 'Chandigarh, Punjab',
    established: '2012',
    fee: '0.75L - ₹1.58L',
    courses: ['MBA', 'BBA', 'MCA', 'BCA'],
    features: ['Modern curriculum', 'Industry projects', 'Career services'],
    approvals: ['UGC', 'NAAC A+'],
    rating: 4.1,
    eligibility: '10+2,Graduation in any stream',
    nirfRank: 36,
    naacGrade: 'A+',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Self-paced',
  },
];

// ---------- UTILS ----------
const slugify = (s) => s.toLowerCase().replace(/\s+/g, '-');

// ---------- COMPONENT WITH SEARCH PARAMS ----------
function CompareContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [enquiryDone, setEnquiryDone] = useState(false);

  const selectedKeys = useMemo(() => {
    const param = searchParams.get('u') || '';
    return param.split(',').map((p) => decodeURIComponent(p.trim())).filter(Boolean);
  }, [searchParams]);

  const selectedUniversities = useMemo(() => {
    const candidates = RAW_UNIVERSITIES;
    const aliasMap = new Map([
      ['narsee-monjee-institute-of-management-studies-online', 'nmims'],
      ['narsee-monjee-institute-of-management-studies', 'nmims'],
      ['narsee-monjee', 'nmims'],
      ['nmims-online', 'nmims'],
    ]);

    const list = [];
    for (const raw of selectedKeys) {
      const k = raw.trim();
      const lower = k.toLowerCase();

      let found = candidates.find((u) => u.key === k);
      if (!found) {
        const alias = aliasMap.get(lower);
        if (alias) found = candidates.find((u) => u.key === alias);
      }
      if (!found) found = candidates.find((u) => slugify(u.name) === lower);
      if (!found) found = candidates.find((u) => lower.includes(slugify(u.name)) || slugify(u.name).includes(lower));
      if (found && !list.some((x) => x.key === found.key)) list.push(found);
    }
    return list;
  }, [selectedKeys]);

  useEffect(() => {
    if (selectedUniversities.length < 2) {
      router.replace('/');
    }
  }, [selectedUniversities, router]);

  const noop = () => {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 md:mt-20 px-4 sm:px-6 lg:px-8">
             {/* Enquiry gating */}
               <Dialog open={!enquiryDone} onOpenChange={noop}>
          <DialogContent
            className="w-[95vw] max-w-[560px] max-h-[90vh] overflow-y-auto mx-auto my-4 md:my-10"
            onInteractOutside={(e) => e.preventDefault()}
            onEscapeKeyDown={(e) => e.preventDefault()}
          >
           <DialogHeader className="px-4 sm:px-6">
             <DialogTitle className="text-lg sm:text-xl font-bold text-center">Quick Enquiry before Comparison</DialogTitle>
           </DialogHeader>
           <div className="px-4 sm:px-6 pb-4">
             <EnquiryForm onSubmitted={() => setEnquiryDone(true)} />
           </div>
           <div className="mt-4 px-4 sm:px-6 pb-4 flex flex-col sm:flex-row gap-3 justify-end">
             <Button
               variant="outline"
               onClick={() => router.replace('/')}
               className="w-full sm:w-auto border-[#00ffe0] text-[#001e3c] hover:bg-[#00ffe0] hover:text-[#001e3c] py-2.5"
             >
               Cancel
             </Button>
           </div>
         </DialogContent>
       </Dialog>

      {enquiryDone && (
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => router.back()}
              className="flex items-center gap-2 border-[#00ffe0] text-[#00ffe0] hover:bg-[#00ffe0] hover:text-[#001e3c]"
            >
              <FaArrowLeft /> Back
            </Button>
            <div className="text-right">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Compare Online Universities</h1>
              <p className="text-gray-600">Selected: {selectedUniversities.length}</p>
            </div>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedUniversities.map((u) => (
              <Card key={u.key} className="border-2 hover:border-[#00ffe0] transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00ffe0] to-[#00e6cc] flex items-center justify-center">
                      <FaUniversity className="w-6 h-6 text-[#001e3c]" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{u.name}</CardTitle>
                      <div className="text-sm text-gray-600 flex items-center gap-2">
                        <FaMapMarkerAlt className="w-3.5 h-3.5 text-[#00ffe0]" /> {u.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                 {/* Aligned Parameters */}
                 {/* Parameters Section */}
<div className="space-y-3 text-sm">
  {u.rating && (
    <div className="flex justify-between items-center">
     <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-800 font-medium shadow-sm">
       ⭐ Rating
     </span>

      <span className="font-semibold">{u.rating.toFixed(1)} ★</span>
    </div>
  )}

  <div className="flex justify-between items-center">
    <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-orange-100 text-orange-800 font-bold shadow-sm">
      📅 Established
    </span>
    <span>{u.established}</span>
  </div>

  <div className="flex justify-between items-center">
    <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-green-100 text-green-800 font-bold shadow-sm">
      💰 Fee
    </span>
    <span>{u.fee}</span>
  </div>

  {u.eligibility && (
    <div className="flex justify-between items-center">
      <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-800 font-bold shadow-sm">
        🎓 Eligibility
      </span>
      <span>{u.eligibility}</span>
    </div>
  )}

  {u.nirfRank !== undefined && (
    <div className="flex justify-between items-center">
      <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-pink-100 text-pink-800 font-bold shadow-sm">
        🏆 NIRF Ranking
      </span>
      <span>{u.nirfRank}</span>
    </div>
  )}

  {u.naacGrade && (
    <div className="flex justify-between items-center">
      <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-100 text-indigo-800 font-bold shadow-sm">
        🥇 NAAC Grade
      </span>
      <span>{u.naacGrade}</span>
    </div>
  )}

  {u.classType && (
    <div className="flex justify-between items-center">
      <span className="flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-100 text-cyan-800 font-bold shadow-sm">
        🖥️ Class Type
      </span>
      <span>{u.classType}</span>
    </div>
  )}
</div>



                  {/* Approvals */}
                  {u.approvals && (
                    <div>
                      <span className="font-medium text-gray-600">Accreditations:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {u.approvals.map((a, i) => (
                          <Badge key={i} variant="outline">
                            {a}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Checkpoints */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      {u.placementSupport ? (
                        <FaCheckCircle className="text-green-500" />
                      ) : (
                        <FaTimes className="text-red-500" />
                      )}
                      <span>Placement Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {u.wesApproved ? (
                        <FaCheckCircle className="text-green-500" />
                      ) : (
                        <FaTimes className="text-red-500" />
                      )}
                      <span>WES Approved</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {u.emiOption ? (
                        <FaCheckCircle className="text-green-500" />
                      ) : (
                        <FaTimes className="text-red-500" />
                      )}
                      <span>EMI Option</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      <span>Examination Mode: {u.examMode ?? 'Online'}</span>
                    </div>
                  </div>

                  {/* Courses */}
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-2">Popular Courses</p>
                    <div className="flex flex-wrap gap-2">
                      {u.courses.map((c, i) => (
                        <Badge key={i} variant="secondary" className="bg-[#00ffe0] text-[#001e3c]">
                          {c}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-2">Key Features</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      {u.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-10">
            <Button
              onClick={() => router.push('/')}
              variant="outline"
              className="border-[#00ffe0] text-[#00ffe0] hover:bg-[#00ffe0] hover:text-[#001e3c]"
            >
              Back to Home
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- MAIN COMPONENT ----------
export default function ComparePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 md:mt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00ffe0] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading comparison...</p>
        </div>
      </div>
    }>
      <CompareContent />
    </Suspense>
  );
}
