"use client";

import React from "react";
import Image from "next/image";
import { UniversityLogo } from "types/LandingPageTypes";

interface UniversityLogoSliderProps {
  universityLogos?: UniversityLogo[];
}

const UniversityLogoSlider = ({ universityLogos = [] }: UniversityLogoSliderProps) => {
  if (!universityLogos.length) return null;

  // Use a simple CSS-based slider for better performance
  return (
    <section className="py-1 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-1">
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-scroll whitespace-nowrap py-4 group-hover:pause-animation">
            {[...universityLogos, ...universityLogos, ...universityLogos].map((university, index) => (
              <div
                key={`${university.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-4 sm:px-8"
              >
                <div className="h-20 w-32 sm:w-40 flex items-center justify-center">
                  <Image
                    src={university.logo}
                    alt={`${university.name} logo`}
                    width={140}
                    height={60}
                    loading="lazy"
                    sizes="(max-width: 640px) 100px, 140px"
                    className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: flex;
          width: max-content;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default UniversityLogoSlider;
