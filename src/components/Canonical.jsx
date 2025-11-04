'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Canonical() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const base = 'https://unifostedu.com';
    const href = base + (pathname || '/');
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', href.endsWith('/') ? href : href + '/');
  }, [pathname]);

  return null;
}


