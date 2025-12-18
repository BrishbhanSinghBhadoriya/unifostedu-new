'use client';

import React, { useState } from 'react';
import EnquiryForm from '@/components/EnquiryForm';

interface enquiryFromProps {
  formType: string;
  onSubmitted: () => void;
}


export default function BookDemo() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl shadow-lg p-12">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Demo Request Submitted!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your interest! Our team will contact you within 24 hours to schedule your demo session.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#00ffe0] text-[#001e3c] px-8 py-3 rounded-full font-semibold hover:bg-[#00e6cc] transition-colors"
            >
              Book Another Demo
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your <span className="text-[#00ffe0]">Demo Session</span>
          </h1>
          <p className="text-xl text-gray-600">
            Experience online learning firsthand with a free demo session from our partner universities.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <EnquiryForm formType="general" onSubmitted={() => setSubmitted(true)} />
        </div>
      </div>
    </div>
  );
}
