'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function LazySection({ children, rootMargin = '200px 0px', className }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;

    const element = containerRef.current;
    if (!element) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
            }
          });
        },
        { root: null, rootMargin, threshold: 0.01 }
      );

      observer.observe(element);
      return () => observer.disconnect();
    } else {
      // Fallback: render immediately if IntersectionObserver not supported
      setIsVisible(true);
    }
  }, [isVisible, rootMargin]);

  return (
    <div ref={containerRef} className={className}>
      {isVisible ? children : null}
    </div>
  );
}


