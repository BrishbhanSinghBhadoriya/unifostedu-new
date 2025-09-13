'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';
import Image from 'next/image';

const EnquireCard = ({ 
  course, 
  duration, 
  eligibility, 
  fees, 
  fee,
  specialization = [],  
  image, 
  universityName 
}) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleEnquireClick = () => setIsEnquiryOpen(true);
  const handleEnquirySubmitted = () => setIsEnquiryOpen(false);

  // Handle both 'fees' and 'fee' properties
  const displayFees = fees || fee;

  // Normalize specialization → always array
  const specializationList = Array.isArray(specialization)
    ? specialization
    : specialization 
      ? specialization.split(',').map(s => s.trim()) 
      : [];

  // Default: show only 1 specialization
  const visibleSpecializations = showMore 
    ? specializationList 
    : specializationList.slice(0, 1);

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition duration-300">
        {/* Image */}
        <Image
          width={100}
          height={100}
          loading="lazy"
          src={image}
          alt={course}
          className="h-44 w-full object-cover sm:h-52"
        />

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{course}</h3>

            <p className="text-sm text-gray-700 mb-1">
              <span className="font-semibold">Duration:</span> {duration}
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-semibold">Eligibility:</span> {eligibility}
            </p>
            {displayFees && (
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-semibold">Fees:</span> {displayFees}
              </p>
            )}

            {/* Specializations */}
            {specializationList.length > 0 && (
              <div className="text-sm text-gray-700 mt-2">
                <span className="font-semibold">Specializations:</span>
                <ul className="list-disc list-inside mt-1">
                  {visibleSpecializations.map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                  ))}
                </ul>

                {specializationList.length > 1 && (
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="text-blue-600 mt-1 font-medium hover:underline"
                  >
                    {showMore ? 'See Less' : 'See More'}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Enquire Button (Always at bottom) */}
          <div className="mt-auto pt-4">
            <button
              onClick={handleEnquireClick}
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-5 py-2.5 rounded-full font-semibold shadow hover:opacity-90 transition"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      {/* Enquiry Dialog */}
      <Dialog open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enquire About {course}</DialogTitle>
          </DialogHeader>
          <EnquiryForm
            universityName={universityName}
            defaultProgram={course}
            onSubmitted={handleEnquirySubmitted}
            formType="getStarted"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EnquireCard;
