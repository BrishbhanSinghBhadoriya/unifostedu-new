'use client';
import React from 'react';

interface UniversityDateSliderProps {
  currentDate: string;      // From page
  nextUpdateDate?: string;
  information?: string;
  special?: string;
  color?: string;
  backgroundColor?: string;
  textColor?: string;
}

export default function UniversityDateSlider({
  currentDate,
  nextUpdateDate,
  information,
  special,
  color = '#061e45ff',
  backgroundColor = '#eff6ff',
  textColor = '#0a122bff',
}: UniversityDateSliderProps) {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        backgroundColor,
        borderBottom: `2px solid ${color}`,
      }}
    >
      <div className="animate-slide">
        <div className="flex items-center justify-center py-2 px-4 whitespace-nowrap">
          <div className="flex items-center gap-10 text-sm">
            <span className="font-semibold" style={{ color: textColor }}>
              📅 Admission Session: {currentDate}
            </span>

            {nextUpdateDate && (
              <span className="font-bold" style={{ color: textColor }}>
                Next Deadline: {nextUpdateDate}
              </span>
            )}

            {information && (
              <span className="font-semibold" style={{ color: textColor }}>
                Note: {information}
              </span>
            )}

             {special && (
              <span className="font-semibold" style={{ color: textColor }}>
                Note: {special}
              </span>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-slide {
          animation: slide 15s linear infinite;
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
