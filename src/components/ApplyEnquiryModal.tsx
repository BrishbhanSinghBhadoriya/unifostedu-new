'use client';
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';
import Image from 'next/image';
import { ModalProps } from 'types/ApplyEnquiryModalTypes';

export default function ApplyEnquiryModal({
  open,
  onOpenChange,
  title = 'Start Your Application',
  subtitle,
  imageSrc = 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/amityForm_xdbvvf.webp',
  mobileImageSrc,
  universityName,
  defaultProgram = 'MBA',
  formType = 'general',
  showImage = true,
}: ModalProps & { mobileImageSrc?: string }) {
  const isNmims = universityName?.toLowerCase()?.includes('nmims');
  const isManipal = universityName?.toLowerCase() === 'manipal university online';
  const bgColor = isManipal ? 'bg-[#ff7a36]' : (isNmims ? 'bg-white' : 'bg-[#f8c100]');

  // Force center positioning when modal opens
  React.useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        const modalElement = document.querySelector('.enquiry-modal [data-slot="dialog-content"]') as HTMLElement;
        if (modalElement) {
          modalElement.style.position = 'fixed';
          modalElement.style.top = '50vh';
          modalElement.style.left = '50vw';
          modalElement.style.transform = 'translate(-50%, -50%)';
          modalElement.style.margin = '0';
          modalElement.style.zIndex = '9999';
        }
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <div className="enquiry-modal">
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent 
          className="max-w-5xl md:max-w-6xl p-0 h-[95vh] md:h-[90vh] flex flex-col bg-white border-0 shadow-2xl"
          style={{
            position: 'fixed',
            top: '50vh',
            left: '50vw',
            transform: 'translate(-50%, -50%)',
            margin: 0,
            zIndex: 9999,
            borderRadius: '16px',
            overflow: 'hidden'
          }}
        >
          <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
            {/* Side Image Section */}
            {showImage && (
              <div className={`
                w-full md:w-2/5 
                ${bgColor}
                relative 
                h-[180px] sm:h-[200px] md:h-full
                flex-shrink-0
                overflow-hidden
              `}>
                <div className="hidden md:block w-full h-full relative">
                  <Image 
                    src={imageSrc} 
                    alt={title}
                    fill
                    className={`${isNmims ? 'object-contain' : 'object-cover'} object-center`}
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                </div>
                <div className="md:hidden w-full h-full relative flex items-center justify-center p-3">
                  <div className="relative w-full h-full max-w-sm mx-auto">
                    <Image 
                      src={mobileImageSrc || imageSrc} 
                      alt={title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent md:hidden" />
              </div>
            )}

            {/* Form Section - Scrollable */}
            <div className="w-full md:w-3/5 flex flex-col flex-1 overflow-hidden">
              <div className="flex-1 overflow-y-auto overflow-x-hidden" style={{ WebkitOverflowScrolling: 'touch' }}>
                <div className="p-4 sm:p-5 md:p-8 lg:p-10">
                  <DialogHeader className="mb-3 md:mb-5">
                    <DialogTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                      {title}
                    </DialogTitle>
                    <DialogDescription className="text-xs sm:text-sm md:text-base text-gray-600 mt-1.5 md:mt-2">
                      {subtitle || 'Please fill in the details below to enquire about the program.'}
                    </DialogDescription>
                  </DialogHeader>

                  <EnquiryForm
                    universityName={universityName}
                    defaultProgram={defaultProgram}
                    formType={formType}
                    autoCloseOnSuccess={true}
                    onSubmitted={() => onOpenChange(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        /* Professional Modal Styling */
        .enquiry-modal [data-slot="dialog-content"] {
          position: fixed !important;
          top: 50vh !important;
          left: 50vw !important;
          transform: translate(-50%, -50%) !important;
          margin: 0 !important;
          border-radius: 16px !important;
          overflow: hidden !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
          border: none !important;
        }

        /* Smooth animations */
        .enquiry-modal [data-state="open"] {
          animation: modalFadeIn 0.3s ease-out;
        }
        
        .enquiry-modal [data-state="closed"] {
          animation: modalFadeOut 0.2s ease-in;
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes modalFadeOut {
          from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.95);
          }
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .enquiry-modal [data-slot="dialog-content"] {
            width: 95vw !important;
            max-width: 95vw !important;
            height: 90vh !important;
            max-height: 90vh !important;
            margin: 0 !important;
          }
        }

        /* Scrollbar styling */
        .enquiry-modal .overflow-y-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .enquiry-modal .overflow-y-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}