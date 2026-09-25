"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Card = {
  title: string;
  img: string;
};

const cards: Card[] = [
  { title: "AICTE (where applicable)", img: "/AICTE .png" },
  { title: "NAAC Accredited",          img: "/NAAC.png"   },
  { title: "UGC Recognised",           img: "/UGC .png"   },
  { title: "AIU Recognised",           img: "/AIU.png"    },
];

const CARD_W = 300;
const GAP    = 56;
const STEP   = CARD_W + GAP;
const SPEED  = 1.5; // px per frame

// Triple the cards for a seamless infinite loop
const items  = [...cards, ...cards, ...cards];
const LOOP_W = cards.length * STEP;

export default function AccreditationSlider() {
  // Direct ref to the moving div — no React state involved
  const trackRef  = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      offsetRef.current += SPEED;
      // Reset seamlessly when one full set of cards has scrolled past
      if (offsetRef.current >= LOOP_W) {
        offsetRef.current -= LOOP_W;
      }
      // Write directly to the DOM — zero React re-renders
      if (trackRef.current) {
        trackRef.current.style.transform =
          `translateX(calc(40px - ${offsetRef.current}px))`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className="w-full py-14 bg-gray-100">
      {/* overflow-hidden clips cards; padding-left:40px prevents the
          half-circle on the leftmost card from being clipped */}
      <div className="overflow-hidden w-full">
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: `${GAP}px`,
            width: `${items.length * STEP}px`,
            willChange: "transform",
            paddingTop: "8px",
            paddingBottom: "8px",
            // Initial position so first card's circle isn't clipped
            transform: "translateX(40px)",
          }}
        >
          {items.map((card, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: `${CARD_W}px`,
                height: `128px`,
                position: "relative",
              }}
            >
              {/* Half-outside circle */}
              <div
                style={{
                  position: "absolute",
                  left: "-40px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  width: "80px",
                  height: "80px",
                  borderRadius: "9999px",
                  overflow: "hidden",
                  border: "2px solid #f97316",
                  background: "#fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Card body */}
              <div className="w-full h-full bg-white rounded-2xl shadow-md flex items-center pl-12 pr-5">
                <p className="text-gray-700 font-semibold text-base leading-snug">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
