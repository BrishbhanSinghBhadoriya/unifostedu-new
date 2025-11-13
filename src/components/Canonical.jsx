'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Canonical() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    // Check if canonical already exists (set by Next.js metadata API)
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    
    // Only set canonical if it doesn't exist (metadata API takes precedence)
    if (!existingCanonical) {
      const base = 'https://unifostedu.com';
      const normalizedPath = (pathname || '/').replace(/\/$/, ''); // Remove trailing slash
      const href = normalizedPath === '/' ? base : `${base}${normalizedPath}`;
      
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', href);
      document.head.appendChild(link);
    }
  }, [pathname]);

  return null;
}


