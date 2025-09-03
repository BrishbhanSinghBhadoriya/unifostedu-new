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
  specialization, 
  image, 
  universityName 
}) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const handleEnquireClick = () => {
    setIsEnquiryOpen(true);
  };

  const handleEnquirySubmitted = () => {
    setIsEnquiryOpen(false);
  };

  // Handle both 'fees' and 'fee' properties
  const displayFees = fees || fee;

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition duration-300">
        <Image width={100} height={100} src={image} alt={course} className="h-40 w-full object-cover sm:h-48" />
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{course}</h3>
            <p className="text-sm text-gray-600 mb-1"><strong>Duration:</strong> {duration}</p>
            <p className="text-sm text-gray-600"><strong>Eligibility:</strong> {eligibility}</p>
            {displayFees && <p className="text-sm text-gray-600"><strong>Fees:</strong> {displayFees}</p>}
            {specialization && <p className="text-sm text-gray-600"><strong>Specialization:</strong> {specialization}</p>}
          </div>
          <div className="mt-4">
            <button
              onClick={handleEnquireClick}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-center block font-semibold hover:opacity-90 transition w-full"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>

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
