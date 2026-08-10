'use client';
import React from 'react';
import { OpenModalState } from 'types/Modal';
import { useUniversityModal } from './UniversityModalProvider';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  modal: NonNullable<OpenModalState>;
};

export default function OpenUniversityModalButton({ modal, onClick, ...props }: Props) {
  const { openUniversityModal } = useUniversityModal();

  return (
    <button
      {...props}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        openUniversityModal(modal);
      }}
    />
  );
}

