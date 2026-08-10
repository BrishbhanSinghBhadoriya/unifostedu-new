'use client';
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import ApplyEnquiryModal from '@/components/ApplyEnquiryModal';
import { OpenModalState } from 'types/Modal';

type UniversityModalContextValue = {
  openUniversityModal: (next: OpenModalState) => void;
  closeUniversityModal: () => void;
};

const UniversityModalContext = createContext<UniversityModalContextValue | null>(null);

export function useUniversityModal() {
  const value = useContext(UniversityModalContext);
  if (!value) {
    throw new Error('useUniversityModal must be used within UniversityModalProvider');
  }
  return value;
}

type UniversityModalProviderProps = {
  children: React.ReactNode;
  universityName: string;
  imageSrc: string;
  defaultProgram?: string;
  applyFormType?: 'getStarted' | 'general';
  enquireFormType?: 'getStarted' | 'general';
  showImage?: boolean;
};

export default function UniversityModalProvider({
  children,
  universityName,
  imageSrc,
  defaultProgram = 'MBA',
  applyFormType = 'getStarted',
  enquireFormType = 'general',
  showImage = true,
}: UniversityModalProviderProps) {
  const [openModal, setOpenModal] = useState<OpenModalState>(null);

  const openUniversityModal = useCallback((next: OpenModalState) => {
    setOpenModal(next);
  }, []);

  const closeUniversityModal = useCallback(() => {
    setOpenModal(null);
  }, []);

  const contextValue = useMemo(
    () => ({ openUniversityModal, closeUniversityModal }),
    [closeUniversityModal, openUniversityModal],
  );

  return (
    <UniversityModalContext.Provider value={contextValue}>
      {children}
      {openModal && (
        <ApplyEnquiryModal
          open={true}
          onOpenChange={(v) => {
            if (!v) closeUniversityModal();
          }}
          title={openModal.type === 'apply' ? 'Start Your Application' : 'Enquire Now'}
          subtitle={
            openModal.type === 'apply'
              ? 'Fill the quick form to begin your admission process'
              : 'Share your details and our counselor will reach out'
          }
          imageSrc={imageSrc}
          universityName={universityName}
          defaultProgram={openModal.program ?? defaultProgram}
          formType={openModal.type === 'apply' ? applyFormType : enquireFormType}
          showImage={showImage}
        />
      )}
    </UniversityModalContext.Provider>
  );
}

