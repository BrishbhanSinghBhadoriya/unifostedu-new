'use client';

import EnquiryForm from '@/components/EnquiryForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import {
  FaArrowRight,
  FaBookOpen,
  FaChevronDown,
  FaChevronUp,
  FaClock,
  FaGraduationCap,
  FaMoneyBillWave
} from 'react-icons/fa6';

const EnquireCard = ({ 
  course, 
  duration, 
  eligibility, 
  fees, 
  
  specialization = [],  
  image, 
  universityName,
  
}:EnquireCardProps) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleEnquireClick = useCallback(() => setIsEnquiryOpen(true), []);
  const handleEnquirySubmitted = useCallback(() => setIsEnquiryOpen(false), []);
  
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  // Handle both 'fees' and 'fee' properties
  const displayFees = fees 

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
      <motion.div 
        className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
        whileHover={{ y: -8, scale: 1.02 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Image Container with Overlay */}
        <div className="relative h-40 overflow-hidden">
          <Image
            width={400}
            height={300}
            loading="lazy"
            src={image}
            alt={course}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col ">
          {/* Course Title */}
          <div className="mb-3">
            <h3 className="font-baskervville text-lg font-bold text-gray-900 mb-2 line-clamp-2 transition-colors duration-300">
              {course}
            </h3>
          </div>

          {/* Key Info Cards */}
          <div className="grid grid-cols-1 gap-2 mb-3">
            <div className="flex items-center bg-blue-50 p-2 rounded-lg">
              <div className="bg-blue-100 p-1.5 rounded-md mr-2">
                <FaClock className="text-blue-600 text-xs" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Duration</p>
                <p className="text-sm font-semibold text-gray-900">{duration}</p>
              </div>
            </div>
            
            <div className="flex items-center bg-green-50 p-2 rounded-lg">
              <div className="bg-green-100 p-1.5 rounded-md mr-2">
                <FaGraduationCap className="text-green-600 text-xs" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Eligibility</p>
                <p className="text-sm font-semibold text-gray-900 line-clamp-1">{eligibility}</p>
              </div>
            </div>
            
            {displayFees && (
              <div className="flex items-center bg-purple-50 p-2 rounded-lg">
                <div className="bg-purple-100 p-1.5 rounded-md mr-2">
                  <FaMoneyBillWave className="text-purple-600 text-xs" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Total Fees</p>
                  <p className="text-sm font-semibold text-gray-900">{displayFees}</p>
                </div>
              </div>
            )}
          </div>

          {/* Specializations */}
          {specializationList.length > 0 && (
            <div className="mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-gray-700 flex items-center">
                  <FaBookOpen className="mr-1 text-blue-600 text-xs" />
                  Specializations
                </span>
                {specializationList.length > 1 && (
                  <button
                    onClick={handleShowMore}
                    className="text-blue-600 text-xs font-medium hover:text-blue-800 transition-colors flex items-center gap-1"
                  >
                    {showMore ? 'Less' : 'More'}
                    {showMore ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
                  </button>
                )}
              </div>
              
              <div className="bg-gray-50 rounded-lg p-2">
                <div className="flex flex-wrap gap-1">
                  {visibleSpecializations.map((spec, idx) => (
                    <span 
                      key={idx}
                      className=" inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Enquire Button */}
          <div className="mt-auto pt-2">
            <motion.button
              onClick={handleEnquireClick}
              className="w-full bg-[#1a325d] text-white px-4 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Enquire Now</span>
              <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>
      </motion.div>

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
