'use client';

import React, { useState, Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
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
    <motion.header
      className="bg-white shadow-sm fixed top-0 left-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <div className="w-20 sm:w-24 md:w-[122px] h-8 sm:h-9 md:h-10 relative">
            <Image
              src="/amity.svg"
              alt="Amity University Online"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center space-x-2 text-xs md:text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>+91 7042646766</span>
            </Button>

            <Button
              onClick={() => handleSetOpenModal({ type: 'enquire' })}
              size="sm"
              className="bg-yellow-400 text-black border border-black hover:text-white hover:bg-[#452971]"
            >
              Enquire Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <Button
              onClick={() => setIsMobileMenuOpen?.(true)}
              variant="ghost"
              size="icon"
              className="lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
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
    </motion.header>
  );
};

export default Headers;
