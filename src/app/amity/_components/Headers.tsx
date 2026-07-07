'use client';

import React, { useState, Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import { OpenModalState } from 'types/Modal';

interface HeadersProps {
  setOpenModal?: Dispatch<SetStateAction<OpenModalState | null>>;
  setIsMobileMenuOpen?: Dispatch<SetStateAction<boolean>>;
}

const Headers: React.FC<HeadersProps> = ({
  setOpenModal: setOpenModalProp,
  setIsMobileMenuOpen,
}) => {
  const [openModal, setOpenModal] = useState<OpenModalState | null>(null);

  const handleSetOpenModal = (modal: OpenModalState) => {
    setOpenModal(modal);
    if (setOpenModalProp) {
      setOpenModalProp(modal);
    }
  };

  return (
    /* Replaced motion.header with plain header + CSS transition for better performance (no framer-motion JS needed) */
    <header
      className="bg-white shadow-sm fixed top-0 left-0 w-full z-50 animate-[slideDown_0.4s_ease-out]"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <a href="/amity" aria-label="Amity University Online — Go to homepage">
            <div className="w-20 sm:w-24 md:w-[122px] h-8 sm:h-9 md:h-10 relative">
              <Image
                src="/amity.svg"
                alt="Amity University Online logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 122px"
              />
            </div>
          </a>

          {/* Actions */}
          <nav aria-label="Header actions">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <a
                href="tel:+917042646766"
                aria-label="Call Amity admissions at +91 7042646766"
                className="hidden sm:flex items-center space-x-2 text-xs md:text-sm border border-gray-300 rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors text-gray-700"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>+91 7042646766</span>
              </a>

              <Button
                type="button"
                onClick={() => handleSetOpenModal({ type: 'enquire' })}
                size="sm"
                aria-label="Enquire now about Amity University online programs"
                className="bg-yellow-400 text-black border border-black hover:text-white hover:bg-[#452971]"
              >
                Enquire Now
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Button>

              <Button
                type="button"
                onClick={() => setIsMobileMenuOpen?.(true)}
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                aria-expanded={false}
                className="md:hidden"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {openModal && (
        <ApplyEnquiryModal
          open={!!openModal}
          onOpenChange={(v: boolean) => !v && setOpenModal(null)}
          title={
            openModal.type === 'apply'
              ? 'Start Your Application'
              : 'Enquire Now'
          }
          subtitle={
            openModal.type === 'apply'
              ? 'Fill the quick form to begin your admission process'
              : 'Share your details and our counselor will reach out'
          }
          imageSrc="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/amityForm_xdbvvf.webp"
          universityName="Amity University Online"
          defaultProgram="MBA"
          formType={openModal.type === 'apply' ? 'getStarted' : 'general'}
        />
      )}
    </header>
  );
};

export default Headers;
