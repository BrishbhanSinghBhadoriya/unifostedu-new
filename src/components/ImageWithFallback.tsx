'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaUniversity } from 'react-icons/fa';
type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  aspectRatio?: string;
  fill?: boolean;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
};

export default function ImageWithFallback({ 
  src, 
  alt, 
  className, 
  width = 100, 
  height = 100, 
  aspectRatio, 
  fill, 
  priority, 
  loading = "lazy" 
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`flex items-center justify-center w-full h-full bg-gradient-to-br from-[#00ffe0] to-[#00e6cc] ${className}`} style={aspectRatio ? { aspectRatio } : undefined}>
        <FaUniversity className="w-16 h-16 text-white" />
      </div>
    );
  }

  return (
    <Image 
      width={fill ? undefined : Number(width)} 
      height={fill ? undefined : Number(height)} 
      fill={fill}
      priority={priority}
      loading={loading} 
      src={src} 
      alt={alt} 
      className={className} 
      style={aspectRatio ? { aspectRatio } : undefined}
      onError={() => setHasError(true)} 
    />
  );
}


