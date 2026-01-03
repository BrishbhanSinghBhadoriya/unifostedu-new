"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const useCountUp = (end: number, startWhenVisible: boolean) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (!startWhenVisible) return;

    let current = 1;
    const duration = 1500; // animation duration (ms)
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= end) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, [end, startWhenVisible]);

  return count;
};

const MagnifyCareer = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const yearsCount = useCountUp(40, visible);
  const programsCount = useCountUp(30, visible);

  return (
    <section ref={sectionRef} className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">
          <div className="absolute w-64 h-64 bg-orange-500 rounded-full -top-10 -left-10 z-0" />
          <Image
            src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327721/nmims_os8kn9.webp"
            alt="NMIMS Building"
            width={420}
            height={520}
            className="relative z-10"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-serif font-bold mb-4">
            Magnify your Career
          </h2>
          <p className="text-xl mb-10">
            Upskill and Succeed with <strong>NMIMS</strong>
          </p>

          {/* BLOCK 1 */}
          <div className="flex items-center gap-6 mb-10">
            <div className="text-orange-500 text-6xl font-bold">
              {yearsCount}+
            </div>
            <p className="text-lg text-gray-700 max-w-sm">
              Years of Excellence in Multidisciplinary Education.
            </p>
          </div>

          {/* BLOCK 2 */}
          <h3 className="text-3xl font-serif font-semibold mb-6">
            Upgrade Without Interruptions
          </h3>

          <div className="flex items-center gap-6">
            <div className="text-orange-500 text-6xl font-bold">
              {programsCount}+
            </div>
            <p className="text-lg text-gray-700 max-w-sm">
              Programs designed for working professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagnifyCareer;
