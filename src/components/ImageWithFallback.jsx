'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaUniversity } from 'react-icons/fa';

export default function ImageWithFallback({ src, alt, className }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-[#00ffe0] to-[#00e6cc]">
        <FaUniversity className="w-16 h-16 text-white" />
      </div>
    );
  }

  return (
    <Image width={100} height={100} src={src} alt={alt} className={className} onError={() => setHasError(true)} />
  );
}


