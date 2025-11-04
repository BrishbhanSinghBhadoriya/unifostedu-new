'use client';

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';

export default function ApplyEnquiryModal({
  open,
  onOpenChange,
  title = 'Start Your Application',
  subtitle,
  imageSrc = '/images/amityForm.webp',



  
  universityName,
  defaultProgram = 'MBA',
  formType = 'general',
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl md:max-w-6xl p-0 max-h-[90vh] overflow-y-auto scrollbar-hide">
        <div className="block md:flex md:h-[90vh]">
          {/* Side Image */}
          <div className={`w-full md:w-2/5 bg-${universityName.toLowerCase() === 'manipal university online' ? '[#ff7a36]' : '[#f8c100]'} h-56 md:h-auto md:relative`}>
            <img src={imageSrc} alt={title} className="w-full h-full object-cover md:absolute md:inset-0" />
          </div>
          <div className="w-full md:w-3/5 p-5 sm:p-8 md:p-8 lg:p-10 md:overflow-y-auto scrollbar-hide">
            <DialogHeader className="mb-2">
              <DialogTitle className="text-xl sm:text-2xl font-bold">
                {title}
              </DialogTitle>
              {subtitle && (
                <p className="text-sm text-gray-500">{subtitle}</p>
              )}
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
      </DialogContent>
      <style jsx>{`
        :global(.scrollbar-hide) {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none;    /* Firefox */
        }
        :global(.scrollbar-hide::-webkit-scrollbar) {
          display: none;            /* Chrome, Safari */
        }
      `}</style>
    </Dialog>
  );
}


