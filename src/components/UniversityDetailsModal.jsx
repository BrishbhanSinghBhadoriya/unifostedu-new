'use client';

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ImageWithFallback from '@/components/ImageWithFallback';
import { 
  FaMapMarkerAlt, 
  FaStar, 
  FaClock, 
  FaMoneyBillWave, 
  FaGraduationCap,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaTimes
} from 'react-icons/fa';

export default function UniversityDetailsModal({ 
  university, 
  isOpen, 
  onClose, 
  courseTitle 
}) {
  if (!university) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 p-2 hover:bg-gray-100"
            onClick={onClose}
          >
            <FaTimes className="w-4 h-4" />
          </Button>
          <DialogTitle className="text-2xl font-bold text-gray-900 pr-8">
            {university.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* University Header */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                  <ImageWithFallback 
                    src={university.image} 
                    alt={university.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <Badge className="absolute top-3 left-3 bg-blue-600 text-white border-0">
                  <FaStar className="w-3 h-3 mr-1" />
                  {university.rating}
                </Badge>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 space-y-4">
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 text-[#00ffe0]" />
                <span className="text-lg">{university.location}</span>
              </div>
              
              {university.NIRF && (
                <div className="flex items-center text-gray-600">
                  <FaGraduationCap className="w-5 h-5 mr-3 text-[#00ffe0]" />
                  <span className="text-lg">NIRF Rank: {university.NIRF}</span>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <FaClock className="w-5 h-5 mr-3 text-[#00ffe0]" />
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">{university.duration}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaMoneyBillWave className="w-5 h-5 mr-3 text-[#00ffe0]" />
                  <div>
                    <p className="text-sm text-gray-500">Fee Range</p>
                    <p className="font-semibold">{university.fee}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center text-gray-600">
                <FaCheckCircle className="w-5 h-5 mr-3 text-[#00ffe0]" />
                <span className="text-lg">{university.accreditation}</span>
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Available Specializations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(Array.isArray(university.specializations) ? university.specializations : [university.specializations]).map((spec, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-[#00ffe0] rounded-full mr-3"></div>
                  <span className="text-gray-700">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {university.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <FaCheckCircle className="w-4 h-4 text-[#00ffe0] mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Course Information */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">About {courseTitle}</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                {university.name} offers a comprehensive {courseTitle} program designed to provide students with 
                industry-relevant knowledge and practical skills. The program features expert faculty, 
                modern curriculum, and excellent placement support to help students achieve their career goals.
              </p>
            </div>
          </div>

          

          {/* Action Buttons */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="flex-1 bg-gradient-to-r from-[#00ffe0] to-[#00d4c4] text-[#001e3c] hover:from-[#00d4c4] hover:to-[#00ffe0] font-semibold"
                onClick={onClose}
              >
                Close
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-[#00ffe0] text-[#00ffe0] hover:bg-[#00ffe0] hover:text-[#001e3c]"
                onClick={() => {
                  // You can add navigation to university page here
                  onClose();
                }}
              >
                Visit University Page
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
