'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import ApplyEnquiryModal from "@/components/ApplyEnquiryModal";

const BestOnlineMBA = () => {
  const [openModal, setOpenModal] = React.useState(false);
  
  return (
    <div className="bg-white min-h-screen w-full text-[#222]">
      {/* HERO SECTION */}
      <section className="px-4 pt-8 md:pt-16 pb-12 flex flex-col items-center gap-6 text-center bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mt-6 tracking-tight">
          Best Online MBA for Working Professionals in India 2025
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
          Boost your career without leaving your job! Compare India's top UGC-accredited online MBA programs for working professionals. Flexible, affordable, and high-quality options for 2025.
        </p>
        <button 
          onClick={() => setOpenModal(true)} 
          className="mt-4 inline-block btn-primary text-lg px-10 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Enquire Now
        </button>
      </section>

      {/* Test Content */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-slate-800 text-center">
          Page is working correctly!
        </h2>
        <p className="text-center text-lg text-slate-600">
          This is a test version to verify the page structure is working.
        </p>
      </section>

      {/* Apply / Enquiry Modal */}
      {openModal && (
        <ApplyEnquiryModal
          open={!!openModal}
          onOpenChange={(v) => !v && setOpenModal(false)}
          title="Enquire Now"
          subtitle="Share your details and our counselor will reach out"
          defaultProgram="MBA"
          formType="general"
          showImage={false}
        />
      )}
    </div>
  );
};

export default BestOnlineMBA;