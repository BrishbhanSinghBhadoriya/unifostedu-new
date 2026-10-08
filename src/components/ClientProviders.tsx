'use client';

import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

const LenisProvider = dynamic(() => import('@/components/LenisProvider'), {
  ssr: false,
});

const ChatBoxWrapper = dynamic(() => import('@/components/ChatBoxWrapper'), {
  ssr: false,
  loading: () => null,
});

const SonnerToaster = dynamic(() => import('@/components/SonnerToasterClient'), {
  ssr: false,
  loading: () => null,
});

type ClientProvidersProps = {
  children: ReactNode;
};

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <LenisProvider>
      {children}
      <ChatBoxWrapper />
      <SonnerToaster />
    </LenisProvider>
  );
}
