'use client';

import { Toaster } from 'sonner';

export default function SonnerToasterClient() {
  return (
    <Toaster
      position="top-center"
      richColors
      expand={false}
      duration={3500}
    />
  );
}
