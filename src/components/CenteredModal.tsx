'use client';

import React, { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';

interface CenteredModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalType?: string;
}

export default function CenteredModal({ isOpen, onClose, modalType = "getStarted" }: CenteredModalProps) {
  
  // Force center positioning when modal opens
  useEffect(() => {
    if (isOpen) {
      // Add styles to ensure center positioning
      const style = document.createElement('style');
      style.textContent = `
        [data-slot="dialog-content"] {
          position: fixed !important;
          top: 50vh !important;
          left: 50vw !important;
          transform: translate(-50%, -50%) !important;
          margin: 0 !important;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{
          position: 'fixed',
          top: '50vh',
          left: '50vw',
          transform: 'translate(-50%, -50%)',
          margin: 0,
          zIndex: 9999
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-[#001e3c] text-center">
            {modalType === "getStarted" && "Get Started with Unifost"}
            {modalType === "videoCall" && "Book a Video Call"}
            {modalType === "homeDemo" && "Book a Home Demo"}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <EnquiryForm
            onSubmitted={onClose}
            formType={modalType}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}