"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";


const CareerAccelerationSlider = () => {
 const careerFormulaData = [
  {
    id: 1,
    title: "Highly acclaimed career-led programs",
    points: [
      "A two-decade legacy of providing career-focused education",
      "Bringing the Excellence, Ethos and Pedagogy of Classroom Programs to the Online Learning Environment",
    ],
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1767418208/n1_qnefxu.png",
  },
  {
    id: 2,
    title: "Integrated industry and academic best practices",
    points: [
      "Industry-focused curriculum taught by doctorates and industry veterans",
      "A distinguished faculty comprising leading scholars, researchers, and industry professionals",
    ],
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1767416057/n2_l61yla.png",
  },
  {
    id: 3,
    title: "Programs valued by top employers",
    points: [
      "In-demand programs for career success in the corporate and startup world",
      "Graduates employed by top companies in India and globally",
    ],
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1767416057/n3_qrfl0y.png",
  },
  {
    id: 4,
    title: "The NMIMS Online digital campus",
    points: [
      "Study anytime, anywhere with desktop & mobile app",
      "Personalised learning paths and massive e-library access",
    ],
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1767416057/n4_q3a1yv.png",
  },
  {
    id: 5,
    title: "Rich and holistic learning experiences",
    points: [
      "Live online interactive lectures",
      "On-campus immersion program & bootcamp",
    ],
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1767416057/n5_a5oamt.png",
  },
  {
    id: 6,
    title: "Dedicated student excellence team",
    points: [
      "Personalised guidance and support",
      "iConnect tool for seamless query resolution",
    ],
    image: "https://res.cloudinary.com/didkrwhbu/image/upload/v1767416057/n6_iplnmu.png",
  },
];
  return (
    <section className="w-full bg-[#7357F6] py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-center text-white text-3xl md:text-4xl xl:text-5xl font-bold mb-12">
          NMIMS Online: Career Acceleration Formula
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {careerFormulaData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-2xl p-6 h-full shadow-lg">
                
                {/* Number + Title */}
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-orange-500 text-2xl font-bold">
                    {item.id}
                  </span>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.title}
                  </h3>
                </div>

                {/* Image */}
                <div className="bg-gray-100 rounded-xl p-4 mb-4 flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={160}
                    height={120}
                    className="object-contain"
                  />
                </div>

                {/* Points */}
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CareerAccelerationSlider;
