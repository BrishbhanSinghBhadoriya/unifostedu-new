'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EnquiryForm from '@/components/EnquiryForm';

interface TestModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalType?: string;
}

export default function TestModal({ isOpen, onClose, modalType = "getStarted" }: TestModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] max-w-2xl max-h-[90vh] overflow-y-auto">
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