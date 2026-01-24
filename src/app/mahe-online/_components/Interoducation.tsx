import React from 'react';
import Link from 'next/link';
import { OpenModalState } from '../../../../types/Modal';

const Interoducation = ({
  setOpenModal,
  openModal,
}: {
  setOpenModal: (state: OpenModalState) => void;
  openModal: OpenModalState;
}) => {
  return (
    <section
      id="Introduction"
      className="bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 font-queens">
            Introduction to{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              MAHE University Online
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            MAHE University Online is one of the most trusted and recognized
            online education platforms in India. It offers a wide range of
            high-quality MAHE Online Courses, industry-focused{' '}
           MAHE Online Programs, and fully approved{' '}
            MAHE Online Degrees for students across the country.
            With the growing demand for flexible and digital education, MAHE
            University Online has become one of the{' '}
            Best online universities in India.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            As a top UGC-approved university, MAHE University Online brings real
            university-level education directly to your home through{' '}
            UG & PG online courses by MAHE. These include popular
            programs such as{' '}
            <Link
              href="/mahe-online/online-mba-mahe"
              className="text-orange-600 font-semibold hover:underline"
            >
              MAHE Online MBA
            </Link>
            ,{' '}
            <Link
              href="/mahe-online/online-mca-mahe"
              className="text-orange-600 font-semibold hover:underline"
            >
              MAHE Online MCA
            </Link>
            ,{' '}
            <Link
              href="/mahe-online/online-bba-mahe"
              className="text-orange-600 font-semibold hover:underline"
            >
              MAHE Online BBA
            </Link>
            ,{''}
             <Link
              href="/mahe-online/online-bba-honors-mahe"
              className="text-orange-600 font-semibold hover:underline"
            >
              MAHE Online BBA(Hons.)
            </Link>
            ,{' '}
            <Link
              href="/mahe-online/online-msc-data-science-mahe"
              className="text-orange-600 font-semibold hover:underline"
            >
              MAHE Online MSc.(Data Science)
            </Link>{' '}
            <Link
              href="/mahe-online/online-msc-business-analytics-mahe"
              className="text-orange-600 font-semibold hover:underline"
            >
              MAHE Online MSc.(Data Science)
            </Link>{' '}
            and{' '}
            <Link
              href="/mahe-online/online-bcom-professional-mahe"
              className="text-orange-600 font-semibold hover:underline"
            >
              MAHE Online BCom (Professional)
            </Link>
            .
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            The mission of MAHE University Online is to offer flexible,
            student-friendly, and industry-relevant education. Although courses
            are delivered online, the quality and credibility remain the same as
            MAHE on-campus degrees.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Whether you are a working professional, a student looking for a
            recognised degree, or planning a career change,{' '}
            MAHE Online Programs provide everything needed to
            build a successful future.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={() => setOpenModal({ type: 'apply' })}
            className="w-1/2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-2.5 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap"
          >
            <span className="hidden sm:inline">Apply Now</span>
            <span className="sm:hidden">Apply</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Interoducation;
