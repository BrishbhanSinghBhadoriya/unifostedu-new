"use client";

import { useState } from "react";
import {
  Handshake,
  BookOpen,
  Clock,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const highlightsData = [
  {
    id: 1,
    title: "Strengthen your basics",
    description:
      "Build a solid base for your career and gain exposure to different facets of Commerce to apply in your professional journey.",
    icon: Handshake,
  },
  {
    id: 2,
    title: "Develop in-depth understanding",
    description:
      "Get a comprehensive understanding of Finance, Accounting, Taxation and Management to tackle the challenges of financial markets.",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Learn at your pace",
    description:
      "Get the best-in-class learning experience through an integrated learning platform that can be accessed from your device and study at your pace.",
    icon: Clock,
  },
  {
    id: 4,
    title: "Learn from distinguished faculty",
    description:
      "Get invaluable insights and mentorship from renowned academicians and industry veterans to excel in your career.",
    icon: GraduationCap,
  },
  {
    id: 5,
    title: "Foundation for your corporate career",
    description:
      "Get a holistic learning experience and build your knowledge and skills to become a successful future manager.",
    icon: Briefcase,
  },
];

const KeyHighlights = () => {
  const [activeId, setActiveId] = useState(1);

  const activeItem = highlightsData.find(
    (item) => item.id === activeId
  );

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Key Highlights
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          The program helps you build a strong foundation for a corporate career
          or pursue higher education in accounting, finance, and management.
        </p>

        {/* Cards */}
        <div className="flex gap-4 overflow-x-auto">
          {/* Active Card */}
          {activeItem && (
            <div className="min-w-[420px] bg-orange-500 text-white rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold opacity-40">
                    {activeItem.id}
                  </span>
                  <activeItem.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-semibold mt-6">
                  {activeItem.title}
                </h3>
                <p className="mt-4 text-white/90 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>
              <span className="self-end text-2xl mt-6">→</span>
            </div>
          )}

          {/* Number Cards */}
          {highlightsData
            .filter((item) => item.id !== activeId)
            .map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className="min-w-[160px] h-[260px] rounded-2xl bg-indigo-100 hover:bg-indigo-200 transition flex flex-col items-center justify-center gap-4"
                >
                  <Icon className="w-10 h-10 text-indigo-600" />
                  <span className="text-5xl font-bold text-white">
                    {item.id}
                  </span>
                </button>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
