'use client';

import React, { useState } from 'react';
import { FaUniversity } from 'react-icons/fa';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageWithFallback({ src, alt, className }: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-[#00ffe0] to-[#00e6cc]">
        <FaUniversity className="w-16 h-16 text-white" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}


