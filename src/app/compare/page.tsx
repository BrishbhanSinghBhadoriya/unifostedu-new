'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { Suspense } from "react";

import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from '@/components/ui/dialog';
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
import Image from 'next/image';

interface University {
  key: string;
  name: string;
  logo: string;
  location: string;
  established: string;
  fee: string;
  courses: string[];
  features: string[];
  approvals: string[];
  rating: number;
  eligibility: string;
  nirfRank: number | string;
  naacGrade: string;
  placementSupport: boolean;
  wesApproved: boolean;
  emiOption: boolean;
  examMode: string;
  classType: string;
}

// ---------- DATA ----------
const RAW_UNIVERSITIES: University[] = [
  {
    key: 'amity-university-online',
    name: 'Amity University Online',
    logo: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp',
    location: 'Noida, Uttar Pradesh',

    established: '2005',
    fee: '₹99K - ₹3.45L',
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
    classType: 'Live + Recorded',
  },
  {
    key: 'manipal-university-online',
    name: 'Online Manipal University',
    logo: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327389/manipal_nqk6jz.webp',
    location: 'jaipur, Rajastan',
    
    established: '1953',
    fee: '₹99K - ₹2.92L',
    courses: ['MBA', 'BBA', 'BCA', 'MCA', 'M.Com', 'B.Com'],
    features: ['UGC recognized', 'NAAC A+ accreditation', 'International partnerships', 'Career development'],
    approvals: ['UGC', 'NAAC A+'],
    rating: 4.6,
    eligibility: 'Graduation in any stream',
    nirfRank: 73,
    naacGrade: 'A+',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Recorded',
  },
  {
    key: 'sikkim-manipal-university',
    name: 'Sikkim Manipal University',
    logo: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327861/smu-uni_bfti15.webp',
    location: 'Gangtok, Sikkim',
    established: '1995',
    fee: '₹0.75L - ₹1.10L',
    courses: ['MBA', 'BBA', 'BCA', 'MCA', 'M.Com', 'B.Com'],
    features: ['UGC recognized', 'NAAC A+ accreditation', 'Industry partnerships', 'Placement assistance'],
    approvals: ['UGC', 'NAAC A+'],
    rating: 4.3,
    eligibility: 'Graduation in any stream',
    nirfRank: 'N/A',
    naacGrade: 'A+',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Rercorded',
  },
  {
    key: 'uttaranchal-university',
    name: 'Uttaranchal University',
    logo: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327868/uu-uni_j3budp.webp',
    location: 'Dehradun, Uttarakhand',
    established: '2002',
    fee: '₹0.72L - ₹1.40L',
    courses: ['MBA', 'BBA', 'BCA', 'MCA', 'M.Com', 'B.Com'],
    features: ['UGC recognized', 'NAAC accreditation', 'Industry partnerships', 'Placement assistance'],
    approvals: ['UGC', 'NAAC'],
    rating: 4.2,
    eligibility: 'Graduation in any stream',
    nirfRank: 'N/A',
    naacGrade: 'A',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Recorded',
  },
  {
    key: 'nmims',
    name: 'NMIMS University',
    logo: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327721/nmims_os8kn9.webp',
    location: 'Mumbai, Maharashtra',
    established: '1981',
    fee: '₹0.94L - ₹4.0L',
    courses: ['MBA', 'BBA', 'B.Com',  'Mba(WX)'],
    features: ['Industry connect', 'Placement assistance', 'Quality education', 'NAAC A+'],
    approvals: ['UGC', 'NAAC A++'],
    rating: 4.7,
    eligibility: '10+2,Graduation in any stream',
    nirfRank: 21,
    naacGrade: 'A++',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Recorded',
  },
  {
    key: 'lovely-professional-university-online',
    name: 'Lovely Professional University',
    logo: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327345/lpu_dj3dun.webp',
    location: 'Jalandhar, Punjab',
    established: '2005',
    fee: '₹0.80L - ₹2.0L',
    courses: ['MBA', 'BBA', 'MCA', 'BCA', 'M.Com', 'BA'],
    features: ['Placement assistance', 'EMI option', 'WES approved', 'NAAC A++'],
    approvals: ['UGC', 'NAAC A++'],
    rating: 4.1,
    eligibility: '10+2,Graduation in any stream',
    nirfRank: 38,
    naacGrade: 'A++',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Recorded',
  },
  {
    key: 'university-of-petroleum-and-energy-studies-online',
    name: 'Upes Online',
    logo: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/upes_uzkkmm.webp',
    location: 'Dehradun, Uttarakhand',
    established: '2003',
    fee: '₹1.50L - ₹2,20L',
    courses: ['MBA', 'BBA', 'MCA', 'BCA', 'M.Com'],
    features: ['Placement support', 'Industry focused', 'Energy sector expertise'],
    approvals: ['UGC', 'AICTE', 'NAAC'],
    rating: 4.4,
    eligibility: '10+2,Graduation in any stream',
    nirfRank: 41,
    naacGrade: 'A',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Recorded',
  },
  {
    key: 'dr-dy-patil-online',
    name: 'Dr. D Y Patil',
    logo: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327129/dypatil_tbbpf9.webp',
    location: 'Pune, Maharashtra',
    established: '2003',
    fee: '₹1.40L - ₹1.90L',
    courses: ['MBA', 'BBA', 'MCA', ],
    features: ['Placement support', 'EMI options', 'WES approved', 'Industry connect'],
    approvals: ['UGC', 'AICTE', 'NAAC'],
    rating: 4.4,
    eligibility: '10+2,Graduation in any stream',
    nirfRank: 63,
    naacGrade: 'A++',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Recorded',
  },
  {
    key: 'sharda-university-online',
    name: 'Sharda University Online',
    logo: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327855/sharda_mkidbt.webp',
    location: 'Greater Noida, Uttar Pradesh',
    established: '2009',
    fee: '₹1.05L - ₹1.60L',
    courses: ['MBA', 'BBA', 'MCA','BCA', 'BA'],
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
    classType: 'Live + Recorded',
  },
  {
    key: 'jain-university-online',
    name: 'Jain University',
    logo: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327239/jain_hn6im7.webp',
    location: 'Bengaluru, Karnataka',
    established: '1990',
    fee: '1.30L - ₹2.16L',
    courses: ['MBA', 'BBA', 'MCA', 'BCA'],
    features: ['Modern curriculum', 'Industry projects', 'Career services', 'NAAC A++'],
    approvals: ['UGC', 'NAAC A++'],
    rating: 4.5,
    eligibility: '10+2,Graduation in any stream',
    nirfRank: 77,
    naacGrade: 'A++',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Recorded',
  },
  {
    key: 'chandigarh-university-online',
    name: 'Chandigarh University Online',
    logo: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327089/chandigarh_w0uyzw.webp',
    location: 'Chandigarh, Punjab',
    established: '2012',
    fee: '₹1.0L - ₹2.10L',
    courses: ['MBA', 'BBA', 'MCA', 'BCA'],
    features: ['Modern curriculum', 'Industry projects', 'Career services', 'NAAC A+'],
    approvals: ['UGC', 'NAAC A+'],
    rating: 4.2,
    eligibility: '10+2,Graduation in any stream',
    nirfRank: 36,
    naacGrade: 'A+',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + recorded',
  },
  {
    key: 'op-jindal-university',
    name: 'OP Jindal University',
    logo: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327835/opjindal_jdl7az.webp',
    location: 'Sonipat, Haryana',
    established: '2009',
    fee: '₹2.0L - ₹3.0L',
    courses: ['MBA', 'BBA', 'BCA', 'MCA'],
    features: ['Global perspective', 'Industry partnerships', 'Career services', 'International focus'],
    approvals: ['UGC', 'NAAC'],
    rating: 4.6,
    eligibility: '10+2,Graduation in any stream',
    nirfRank: 'N/A',
    naacGrade: 'A',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Recorded',
  },
  {
    key: 'shoolini-university-online',
    name: 'Shoolini University Online',
    logo: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327856/shoolini_txvq6k.webp',
    location: 'Solan, Himachal Pradesh',
    established: '2009',
    fee: '₹0.75L - ₹1.40L',
    courses: ['MBA', 'BBA', 'BCA', 'MCA', 'M.Com', 'B.Com'],
    features: ['Research focus', 'Industry connect', 'Career guidance', 'NAAC A+'],
    approvals: ['UGC', 'NAAC A+'],
    rating: 4.2,
    eligibility: '10+2,Graduation in any stream',
    nirfRank: 'N/A',
    naacGrade: 'A+',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Recorded',
  },
  {
    key: 'vivekananda-global-university-online',
    name: 'Vivekananda Global University Online',
    logo: 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327869/vgu1_ieijw9.webp',
    location: 'Jaipur, Rajasthan',
    established: '2012',
    fee: '₹0.72L - ₹2.40L',
    courses: ['MBA', 'BBA', 'BCA', 'MCA', 'M.Com', 'B.Com'],
    features: ['Quality education', 'Research projects', 'Career support', 'Industry exposure'],
    approvals: ['UGC', 'NAAC'],
    rating: 4.1,
    eligibility: '10+2,Graduation in any stream',
    nirfRank: 'N/A',
    naacGrade: 'A',
    placementSupport: true,
    wesApproved: true,
    emiOption: true,
    examMode: 'Online',
    classType: 'Live + Recorded',
  },
];

// ---------- UTILS ----------
const slugify = (s: string) => s.toLowerCase().replace(/\s+/g, '-');

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
      ['sikkim-manipal', 'sikkim-manipal-university'],
      ['smu', 'sikkim-manipal-university'],
      ['uttaranchal', 'uttaranchal-university'],
      ['uu', 'uttaranchal-university'],
      ['op-jindal', 'op-jindal-university'],
      ['jindal', 'op-jindal-university'],
      ['shoolini', 'shoolini-university-online'],
      ['vivekananda-global', 'vivekananda-global-university-online'],
      ['vgu', 'vivekananda-global-university-online'],
      ['lovely-professional', 'lovely-professional-university-online'],
      ['lpu', 'lovely-professional-university-online'],
      ['upes', 'university-of-petroleum-and-energy-studies-online'],
      ['petroleum-energy', 'university-of-petroleum-and-energy-studies-online'],
      ['dy-patil', 'dr-dy-patil-online'],
      ['dypatil', 'dr-dy-patil-online'],
      ['amity', 'amity-university-online'],
      ['manipal', 'manipal-university-online'],
      ['chandigarh', 'chandigarh-university-online'],
      ['jain', 'jain-university-online'],
      ['sharda', 'sharda-university-online'],
    ]);

    const list: University[] = [];
    for (const raw of selectedKeys) {
      const k = raw.trim();
      const lower = k.toLowerCase();

      let found: University | undefined = candidates.find((u) => u.key === k);
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

  // Add this line to make selectedKeys available in the component
  const selectedKeysArray = selectedKeys;

  useEffect(() => {
    if (selectedUniversities.length < 2) {
      router.replace('/');
    }
  }, [selectedUniversities, router]);

  const noop = () => {};

  return (

    
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 md:mt-20 px-4 sm:px-6 lg:px-8">
             {/* Enquiry gating */}
              <Dialog open={!enquiryDone} onOpenChange={(open) => {
                if (!open) {
                  // Redirect to home when the enquiry modal is closed via cross/overlay
                  router.replace('/');
                }
              }}>
          <DialogContent
            className="w-[95vw] max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-auto my-6 md:my-12 p-4 sm:p-6"
            
          >
           <DialogHeader className="px-4 sm:px-6">
             <DialogTitle className="text-lg sm:text-xl font-bold text-center">Quick Enquiry before Comparison</DialogTitle>
           </DialogHeader>
           <div className="px-4 sm:px-6 pb-4">
             <EnquiryForm onSubmitted={() => setEnquiryDone(true)} />
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
               <p className="text-gray-600">Selected: {selectedUniversities.length} of {RAW_UNIVERSITIES.length} available</p>
             </div>
           </div>

           {/* All Available Universities Section */}
           <div className="mb-8">
             <div className="flex items-center justify-between mb-4">
               <h2 className="text-xl font-bold text-gray-800">Select Universities to Compare</h2>
               <div className="text-right">
                 <Badge className="bg-blue-100 text-blue-800 text-sm font-medium">
                   Total: {RAW_UNIVERSITIES.length} Universities Available
                 </Badge>
               </div>
             </div>
             <p className="text-gray-600 mb-4">Click on any university below to add it to your comparison. You can compare up to 4 universities at once.</p>
             
             {/* University Count Display */}
             <div className="mb-4 p-3 bg-gray-50 rounded-lg">
               <p className="text-sm text-gray-700">
                 <strong>Available Universities:</strong> {RAW_UNIVERSITIES.length} | 
                 <strong>Selected:</strong> {selectedUniversities.length} | 
                 <strong>Can Select:</strong> {4 - selectedUniversities.length} more
               </p>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
               {RAW_UNIVERSITIES.map((university, index) => {
                 const isSelected = selectedUniversities.some(u => u.key === university.key);
                 return (
                   <div
                     key={university.key}
                     onClick={() => {
                       if (isSelected) {
                         // Remove from selection
                         const newKeys = selectedKeysArray.filter(k => k !== university.key);
                         router.push(`/compare?u=${newKeys.join(',')}`);
                       } else if (selectedUniversities.length < 3) {
                         // Add to selection
                         const newKeys = [...selectedKeysArray, university.key];
                         router.push(`/compare?u=${newKeys.join(',')}`);
                       }
                     }}
                     className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md relative ${
                       isSelected 
                         ? 'border-[#00ffe0] bg-[#00ffe0]/10' 
                         : 'border-gray-200 hover:border-[#00ffe0]/50'
                     }`}
                   >
                     <div className="text-center">
                       {/* University Number */}
                       <div className="absolute top-2 left-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                         {index + 1}
                       </div>
                       
                       <div className="w-12 h-12 mx-auto mb-2 rounded-lg overflow-hidden">
                         <Image
                           src={university.logo} 
                           alt={university.name} 
                           width={100}
                           height={100}
                           loading='lazy'
                           className="w-full h-full object-contain"
                         />
                       </div>
                       <h3 className="font-semibold text-sm text-gray-800 mb-1 line-clamp-2">
                         {university.name}
                       </h3>
                       <div className="flex items-center justify-center gap-1 mb-2">
                         <FaStar className="text-yellow-500 text-xs" />
                         <span className="text-xs text-gray-600">{university.rating}</span>
                       </div>
                       <div className="text-xs text-gray-500 mb-2">{university.location}</div>
                       <div className="text-xs font-medium text-gray-700">{university.fee}</div>
                       {isSelected && (
                         <div className="mt-2">
                           <Badge className="bg-[#00ffe0] text-[#001e3c] text-xs">
                             Selected
                           </Badge>
                         </div>
                       )}
                     </div>
                   </div>
                 );
               })}
             </div>
             
             <div className="mt-4 text-center">
               <p className="text-sm text-gray-600">
                 <strong>Total Universities Displayed:</strong> {RAW_UNIVERSITIES.length} | 
                 <strong>Currently Selected:</strong> {selectedUniversities.length} | 
                 {selectedUniversities.length < 2 && ' Select at least 2 universities to compare.'}
               </p>
             </div>
           </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedUniversities.map((u) => (
              <Card key={u.key} className="border-2 hover:border-[#00ffe0] transition-all">
                <CardHeader className="pb-0">
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
