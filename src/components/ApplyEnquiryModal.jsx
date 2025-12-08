'use client';
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';
import Image from 'next/image';

export default function ApplyEnquiryModal({
  open,
  onOpenChange,
  title = 'Start Your Application',
  subtitle,
  imageSrc = 'https://res.cloudinary.com/didkrwhbu/image/upload/v1762327032/amityForm_xdbvvf.webp',
  universityName,
  defaultProgram = 'MBA',
  formType = 'general',
  showImage = true,
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl md:max-w-6xl p-0 h-[95vh] md:h-[90vh] flex flex-col">
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Side Image Section */}
          {showImage && (
            <div className={`
              w-full md:w-2/5 
              ${universityName?.toLowerCase() === 'manipal university online' ? 'bg-[#ff7a36]' : 'bg-[#f8c100]'}
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
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
              <div className="md:hidden w-full h-full relative flex items-center justify-center p-3">
                <div className="relative w-full h-full max-w-sm mx-auto">
                  <Image 
                    src={imageSrc} 
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
            {/* Scrollable Content */}
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

      <style jsx global>{`
        /* Scrollbar hide karo but functionality maintain karo */
        .overflow-y-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .overflow-y-auto::-webkit-scrollbar {
          display: none;
        }

        /* Mobile touch scrolling optimize karo */
        @media (max-width: 768px) {
          [role="dialog"] {
            overflow: hidden !important;
          }
          
          .overflow-y-auto {
            -webkit-overflow-scrolling: touch;
            overscroll-behavior: contain;
          }
        }

        /* Dialog animation smooth karo */
        [data-state="open"] {
          animation-duration: 200ms;
        }
        [data-state="closed"] {
          animation-duration: 200ms;
        }
      `}</style>
    </Dialog>
  );
}
