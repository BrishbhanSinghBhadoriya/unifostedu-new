'use client';

import React from 'react';

const defaultSteps = [
  'Fill registration form',
  'Enter details & pay fees',
  'Upload documents',
  'Submit form'
];

export default function AdmissionProcess({ steps = defaultSteps, title = 'Admission Process' }) {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((desc, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Connector for md+ only */}
              {index !== 0 && (
                <div className="hidden md:block absolute -left-1/2 top-5 w-full h-0.5 bg-blue-900 z-0" />
              )}

              {/* Step bullet */}
              <div className="z-10 w-8 h-8 md:w-6 md:h-6 rounded-full border-4 border-blue-900 bg-white flex items-center justify-center">
                <div className="w-3.5 h-3.5 md:w-2.5 md:h-2.5 bg-blue-900 rounded-full" />
              </div>

              <h4 className="mt-3 md:mt-4 font-semibold text-lg">Step {index + 1}</h4>
              <p className="mt-1 md:mt-2 text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


