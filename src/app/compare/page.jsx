'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';
import { FaUniversity, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaMoneyBillWave, FaCheckCircle, FaTimes, FaArrowLeft } from 'react-icons/fa';

const RAW_UNIVERSITIES = [
  {
    key: 'amity-university-online',
    name: 'Amity University Online',
    logo: '/amitylogo.jpg',
    location: 'Noida, Uttar Pradesh',
    ranking: 'Top 10',
    established: '2005',
    fee: '₹1.2L - ₹2.5L',
    courses: ['MBA', 'BBA', 'BCA', 'MCA', 'M.Com', 'B.Com'],
    features: ['UGC recognized', 'NAAC A+ accreditation', 'Industry partnerships', 'Placement assistance'],
    approvals: ['UGC', 'NAAC A+'],
    rating: 4.2,
    eligibility: 'Graduation in any stream',
    nirfRank: 27,
    naacGrade: 'A++',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Self-paced'
  },
  {
    key: 'manipal-university-online',
    name: 'Manipal University Online',
    logo: '/manipallogo.jpg',
    location: 'Manipal, Karnataka',
    ranking: 'Top 5',
    established: '1953',
    fee: '₹1.5L - ₹3L',
    courses: ['MBA', 'BBA', 'BCA', 'MCA', 'MA', 'BA'],
    features: ['UGC recognized', 'NAAC A++ accreditation', 'International partnerships', 'Career development'],
    approvals: ['UGC', 'NAAC A++'],
    rating: 4.6,
    eligibility: 'Graduation in any stream',
    nirfRank: 18,
    naacGrade: 'A++',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Self-paced'
  },
  {
    key: 'nmims',
    name: 'NMIMS',
    logo: '/nmims.png',
    location: 'Mumbai, Maharashtra',
    ranking: 'Top 8',
    established: '1981',
    fee: '₹2L - ₹3.5L',
    courses: ['MBA', 'BBA', 'M.Com'],
    features: ['Industry connect', 'Placement assistance', 'Quality education'],
    approvals: ['UGC', 'NAAC A+'],
    rating: 4.5,
    eligibility: 'Graduation in any stream',
    nirfRank: 39,
    naacGrade: 'A+',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + LMS Access'
  },
  {
    key: 'lovely-professional-university-online',
    name: 'Lovely Professional University Online',
    logo: '/lpu.png',
    location: 'Punjab',
    ranking: 'Top 20',
    established: '2005',
    fee: '₹0.9L - ₹1.8L',
    courses: ['MBA', 'BBA', 'MCA', 'BCA', 'M.Com', 'BA'],
    features: ['Placement assistance', 'EMI option', 'WES approved'],
    approvals: ['UGC', 'NAAC'],
    rating: 3.5,
    eligibility: 'Graduation in any stream',
    nirfRank: 27,
    naacGrade: 'A++',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Self-paced'
  },
  {
    key: 'university-of-petroleum-and-energy-studies-online',
    name: 'University of Petroleum and Energy Studies Online',
    logo: '/upes.png',
    location: 'Dehradun, Uttarakhand',
    ranking: 'Top 15',
    established: '2003',
    fee: '₹1.45L - ₹2.20L',
    courses: ['MBA', 'BBA', 'MCA', 'BCA', 'M.Com'],
    features: ['Placement support', 'Industry focused'],
    approvals: ['UGC', 'AICTE', 'NAAC'],
    rating: 3.9,
    eligibility: 'Graduation in any stream',
    nirfRank: 46,
    naacGrade: 'A',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Self-paced'
  },
  {
    key: 'dr-dy-patil-online',
    name: 'Dr. DY Patil Online',
    logo: '/dypatil.png',
    location: 'Pune, Maharashtra',
    ranking: 'Top 25',
    established: '2003',
    fee: '₹0.85L - ₹1.7L',
    courses: ['MBA', 'BBA', 'MCA', 'BCA', 'M.Com'],
    features: ['Placement support', 'EMI options', 'WES approved'],
    approvals: ['UGC', 'AICTE', 'NAAC'],
    rating: 4.5,
    eligibility: 'Graduation in any stream',
    nirfRank: 63,
    naacGrade: 'A',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + LMS Access'
  }
];

const slugify = (s) => s.toLowerCase().replace(/\s+/g, '-');

// Extend dataset to include commonly selected partners from landing page
RAW_UNIVERSITIES.push(
  {
    key: 'sharda-university-online',
    name: 'Sharda University Online',
    logo: '/sharda.png',
    location: 'Greater Noida, Uttar Pradesh',
    ranking: 'Top 30',
    established: '2009',
    fee: '₹0.8L - ₹1.5L',
    courses: ['MBA', 'BBA', 'MA', 'BA'],
    features: ['Quality education', 'Industry connect', 'Career support'],
    approvals: ['UGC', 'NAAC'],
    rating: 4.1,
    eligibility: 'Graduation in any stream',
    naacGrade: 'A',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Self-paced'
  },
  {
    key: 'jain-university-online',
    name: 'Jain University Online',
    logo: '/jain.png',
    location: 'Bengaluru, Karnataka',
    ranking: 'Top 12',
    established: '1990',
    fee: '₹1.3L - ₹2.6L',
    courses: ['MBA', 'BBA', 'MCA', 'BCA'],
    features: ['Modern curriculum', 'Industry projects', 'Career services'],
    approvals: ['UGC', 'NAAC A+'],
    rating: 4.4,
    eligibility: 'Graduation in any stream',
    naacGrade: 'A+',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Self-paced'
  }
);

export default function ComparePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [enquiryDone, setEnquiryDone] = useState(false);

  const selectedKeys = useMemo(() => {
    const param = searchParams.get('u') || '';
    return param
      .split(',')
      .map((p) => decodeURIComponent(p.trim()))
      .filter(Boolean);
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

      // 1) Exact key match
      let found = candidates.find((u) => u.key === k);
      if (!found) {
        // 2) Alias mapping
        const alias = aliasMap.get(lower);
        if (alias) {
          found = candidates.find((u) => u.key === alias);
        }
      }
      if (!found) {
        // 3) Exact name-slug match
        found = candidates.find((u) => slugify(u.name) === lower);
      }
      if (!found) {
        // 4) Partial fuzzy: param includes name-slug OR name-slug includes param
        found = candidates.find((u) => lower.includes(slugify(u.name)) || slugify(u.name).includes(lower));
      }

      if (found) {
        // Avoid duplicates
        if (!list.some((x) => x.key === found.key)) list.push(found);
      }
    }
    return list;
  }, [selectedKeys]);

  useEffect(() => {
    if (selectedUniversities.length < 2) {
      // Not enough selection; redirect back
      router.replace('/');
    }
  }, [selectedUniversities, router]);

  const noop = () => {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 md:mt-20 px-4 sm:px-6 lg:px-8 ">
      {/* Enquiry gating (hard block) */}
      <Dialog open={!enquiryDone} onOpenChange={noop}>
        <DialogContent
          className="sm:max-w-[560px] md:mt-10"
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle>Quick Enquiry before Comparison</DialogTitle>
          </DialogHeader>
          <EnquiryForm
            onSubmitted={() => {
              setEnquiryDone(true);
            }}
          />
          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              onClick={() => router.replace('/')}
              className="border-[#00ffe0] text-[#001e3c] hover:bg-[#00ffe0] hover:text-[#001e3c]"
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {enquiryDone && (
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <Button variant="outline" onClick={() => router.back()} className="flex items-center gap-2 border-[#00ffe0] text-[#00ffe0] hover:bg-[#00ffe0] hover:text-[#001e3c]">
              <FaArrowLeft /> Back
            </Button>
            <div className="text-right">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Compare Online Universities</h1>
              <p className="text-gray-600">Selected: {selectedUniversities.length}</p>
            </div>
          </div>

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
                  {u.rating && (
                    <div className="flex items-center gap-2 text-sm">
                      <FaStar className="text-yellow-400" />
                      <span className="font-semibold">{u.rating.toFixed(1)}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-sm">
                    <FaStar className="text-yellow-400" />
                    <span className="font-medium">{u.ranking}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FaCalendarAlt className="text-[#00ffe0]" />
                    <span>Established: {u.established}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FaMoneyBillWave className="text-[#00ffe0]" />
                    <span>Fee: {u.fee}</span>
                  </div>
                  {u.eligibility && (
                    <div className="text-sm text-gray-700"><span className="font-semibold">Eligibility:</span> {u.eligibility}</div>
                  )}
                  {u.nirfRank !== undefined && (
                    <div className="text-sm text-gray-700"><span className="font-semibold">NIRF Ranking:</span> {u.nirfRank}</div>
                  )}
                  {u.naacGrade && (
                    <div className="text-sm text-gray-700"><span className="font-semibold">NAAC Grade:</span> {u.naacGrade}</div>
                  )}
                  {u.approvals && (
                    <div className="flex flex-wrap gap-2">
                      {u.approvals.map((a, i) => (
                        <Badge key={i} variant="outline">
                          {a}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      {u.placementSupport ? <FaCheckCircle className="text-green-500" /> : <FaTimes className="text-red-500" />}
                      <span>Placement Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {u.wesApproved ? <FaCheckCircle className="text-green-500" /> : <FaTimes className="text-red-500" />}
                      <span>WES Approved</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {u.emiOption ? <FaCheckCircle className="text-green-500" /> : <FaTimes className="text-red-500" />}
                      <span>EMI Option</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      <span>Examination Mode: {u.examMode ?? 'Online'}</span>
                    </div>
                  </div>
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
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-2">Key Features</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      {u.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  {u.classType && (
                    <div className="text-sm text-gray-700"><span className="font-semibold">Class Type:</span> {u.classType}</div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button onClick={() => router.push('/')} variant="outline" className="border-[#00ffe0] text-[#00ffe0] hover:bg-[#00ffe0] hover:text-[#001e3c]">
              Back to Home
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}


