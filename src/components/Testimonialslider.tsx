"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { students } from "@/data/testimonials";

const WA_NUMBER = "917042646766";
const WA_LINK   = `https://wa.me/${WA_NUMBER}?text=Hi%20Unifost%20Edu.%20Pvt.%20Ltd.%2C%20I%20want%20to%20know%20more%20about%20university%20admissions.`;

const WhatsAppIcon = () => (
  <svg width="17" height="17" viewBox="0 0 32 32" fill="currentColor">
    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.48 2.031 7.782L0 32l8.418-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.766-1.847l-.485-.287-5.003 1.194 1.233-4.867-.317-.5A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.273-9.927c-.398-.199-2.355-1.162-2.72-1.295-.366-.133-.632-.199-.898.2-.266.398-1.03 1.295-1.263 1.561-.232.265-.465.299-.863.1-.398-.2-1.682-.62-3.204-1.977-1.184-1.057-1.983-2.362-2.215-2.76-.233-.398-.025-.613.175-.811.18-.18.398-.465.598-.698.199-.232.265-.398.398-.664.132-.265.066-.498-.033-.697-.1-.2-.898-2.163-1.23-2.961-.325-.778-.655-.672-.898-.685l-.764-.013c-.266 0-.698.1-1.064.498-.366.398-1.396 1.362-1.396 3.325s1.43 3.858 1.629 4.123c.2.266 2.815 4.296 6.82 6.026.953.411 1.697.656 2.277.84.957.303 1.828.26 2.517.158.767-.114 2.355-.963 2.688-1.893.332-.93.332-1.727.232-1.893-.099-.166-.365-.266-.764-.465z"/>
  </svg>
);

import Image from "next/image";

export default function TestimonialSlider() {
  const [current, setCurrent]     = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [visible, setVisible]     = useState(true);
  const [paused, setPaused]       = useState(false);
  const pausedRef                 = useRef(false);

  const goTo = useCallback((index: number, dir: "left" | "right") => {
    if (animating) return;
    setAnimating(true);
    setVisible(false);
    setDirection(dir);
    setTimeout(() => { setCurrent(index); setVisible(true); setAnimating(false); }, 320);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % students.length, "right"), [current, goTo]);

  useEffect(() => { pausedRef.current = paused; }, [paused]);
  useEffect(() => {
    const t = setInterval(() => { if (!pausedRef.current) next(); }, 5000);
    return () => clearInterval(t);
  }, [next]);

  const s = students[current];

  const cardStyle: React.CSSProperties = {
    transition: "opacity 0.32s ease, transform 0.32s ease",
    opacity:   visible ? 1 : 0,
    transform: visible ? "translateX(0)" : direction === "right" ? "translateX(32px)" : "translateX(-32px)",
  };

  return (
    <>
      <style>{`
        .ut2__wrap *, .ut2__wrap *::before, .ut2__wrap *::after { box-sizing: border-box; }

        .ut2__wrap {
          width: 100%;
          background: #F8F9FC;
          padding: 72px 24px 64px;
          position: relative;
          overflow: hidden;
        }
        .ut2__wrap::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, #1E3A8A, #2563EB, #1E3A8A);
        }
        .ut2__wrap::after {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .ut2__header { text-align: center; margin-bottom: 48px; position: relative; z-index: 2; }
        .ut2__tag {
          display: inline-flex; align-items: center; gap: 6px;
          background: #EFF6FF; border: 1px solid #BFDBFE; color: #1D4ED8;
          font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase;
          padding: 6px 16px; border-radius: 999px; margin: 0 0 16px;
        }
        .ut2__title {
          font-size: clamp(24px, 4vw, 42px); font-weight: 700; color: #0F172A;
          line-height: 1.2; letter-spacing: -0.5px; margin: 0 0 10px;
        }
        .ut2__title em { font-style: normal; color: #2563EB; }
        .ut2__sub { font-size: 14.5px; color: #64748B; max-width: 460px; margin: 0 auto; line-height: 1.7; }

        /* Card */
        .ut2__card {
          max-width: 900px; margin: 0 auto; background: #fff;
          border-radius: 20px; border: 1px solid #E2E8F0;
          box-shadow: 0 4px 6px rgba(15,23,42,0.04), 0 16px 48px rgba(15,23,42,0.10);
          display: grid; grid-template-columns: 220px 1fr;
          overflow: hidden; position: relative; z-index: 2; min-height: 340px;
        }

        /* LEFT */
        .ut2__left {
          background: linear-gradient(175deg, #1E3A8A 0%, #1e40af 55%, #1E3A8A 100%);
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; padding: 32px 20px 28px;
          text-align: center; position: relative; overflow: hidden;
        }
        .ut2__left::before {
          content: ''; position: absolute; width: 220px; height: 220px;
          border-radius: 50%; background: rgba(255,255,255,0.04); top: -60px; right: -60px;
        }
        .ut2__left::after {
          content: ''; position: absolute; width: 160px; height: 160px;
          border-radius: 50%; background: rgba(255,255,255,0.03); bottom: -40px; left: -40px;
        }

        /* Avatar frame */
        .ut2__img-wrap {
          width: 112px; height: 112px; border-radius: 50%;
          background: linear-gradient(135deg, #F5C842 0%, #E8A020 100%);
          padding: 3px; margin-bottom: 14px; flex-shrink: 0;
          position: relative; z-index: 1;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .ut2__img-inner {
          width: 100%; height: 100%; border-radius: 50%;
          overflow: hidden; background: #dbeafe;
          display: flex; align-items: flex-end; justify-content: center;
        }
        .ut2__img-inner img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top center; display: block;
        }

        .ut2__name { font-size: 15px; font-weight: 700; color: #fff; margin: 0 0 6px; line-height: 1.3; position: relative; z-index: 1; }
        .ut2__name-div { width: 32px; height: 2px; background: linear-gradient(90deg, #F5C842, #E8A020); border-radius: 2px; margin: 0 auto 8px; position: relative; z-index: 1; }
        .ut2__uni { font-size: 10.5px; font-weight: 600; color: #F5C842; line-height: 1.45; margin: 0 0 4px; position: relative; z-index: 1; }
        .ut2__course { font-size: 10.5px; font-weight: 400; color: rgba(255,255,255,0.6); margin: 0 0 12px; position: relative; z-index: 1; }

        .ut2__badge {
          display: inline-flex; align-items: center; gap: 5px;
          background: linear-gradient(135deg, #F5C842, #E8A020);
          color: #1E3A8A; font-size: 9px; font-weight: 700;
          letter-spacing: 1.8px; text-transform: uppercase;
          padding: 5px 14px; border-radius: 999px;
          position: relative; z-index: 1;
          box-shadow: 0 2px 8px rgba(232,160,32,0.35); margin-bottom: 14px;
        }

        /* WhatsApp */
        .ut2__wa-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 7px;
          background: #25D366; color: #fff; font-size: 11.5px; font-weight: 600;
          padding: 9px 18px; border-radius: 999px; text-decoration: none;
          position: relative; z-index: 1; border: none; cursor: pointer;
          transition: transform 0.18s ease, background 0.18s ease;
          white-space: nowrap;
        }
        .ut2__wa-btn:hover { background: #1ebe5d; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(37,211,102,0.5); }
        @keyframes ut2Pulse {
          0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
          70%  { box-shadow: 0 0 0 10px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
        .ut2__wa-btn { animation: ut2Pulse 2.5s infinite; }
        .ut2__wa-btn:hover { animation: none; }

        /* RIGHT */
        .ut2__right {
          padding: 38px 40px 34px; display: flex; flex-direction: column;
          justify-content: space-between; background: #fff; gap: 16px;
        }
        .ut2__quote-icon { font-size: 80px; line-height: 0.55; height: 30px; color: #DBEAFE; display: block; user-select: none; }
        .ut2__quote { font-style: italic; font-size: 15px; color: #334155; line-height: 1.9; margin: 10px 0 0; flex: 1; }
        .ut2__quote b { font-style: normal; color: #1E3A8A; font-weight: 700; }

        .ut2__footer {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 10px; padding-top: 16px;
          border-top: 1px solid #F1F5F9; margin-top: auto;
        }
        .ut2__stars { display: flex; gap: 2px; }
        .ut2__rlabel { font-size: 10.5px; color: #94A3B8; margin: 3px 0 0; }
        .ut2__verified {
          display: flex; align-items: center; gap: 6px; background: #F0FDF4;
          border: 1px solid #BBF7D0; padding: 5px 12px; border-radius: 999px;
          font-size: 10.5px; font-weight: 500; color: #166534;
        }
        .ut2__vdot { width: 6px; height: 6px; border-radius: 50%; background: #22C55E; box-shadow: 0 0 5px rgba(34,197,94,0.55); flex-shrink: 0; }

        /* Progress */
        .ut2__progress { max-width: 900px; margin: 18px auto 0; height: 3px; background: #E2E8F0; border-radius: 999px; overflow: hidden; position: relative; z-index: 2; }
        @keyframes ut2Bar { from { width: 0% } to { width: 100% } }
        .ut2__fill { height: 100%; background: linear-gradient(90deg, #1E3A8A, #2563EB); border-radius: 999px; animation: ut2Bar 5s linear; }
        .ut2__fill--paused { animation-play-state: paused; }

        /* Dots */
        .ut2__dots { display: flex; align-items: center; justify-content: center; gap: 7px; margin-top: 22px; position: relative; z-index: 2; }
        .ut2__pip { width: 7px; height: 7px; border-radius: 999px; background: #CBD5E1; cursor: pointer; transition: all 0.3s ease; border: none; padding: 0; }
        .ut2__pip--active { background: #2563EB; width: 26px; box-shadow: 0 0 8px rgba(37,99,235,0.4); }

        @media (max-width: 640px) {
          .ut2__card { grid-template-columns: 1fr; }
          .ut2__left { padding: 28px 20px 24px; }
          .ut2__left::before, .ut2__left::after { display: none; }
          .ut2__img-wrap { width: 90px; height: 90px; }
          .ut2__right { padding: 22px 20px; }
          .ut2__quote { font-size: 13.5px; }
        }
      `}</style>

      <div
        className="ut2__wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="ut2__header">
          <p className="ut2__tag">⭐ Student Testimonials</p>
          <h2 className="ut2__title">What Students Say About <em>Unifost</em></h2>
          <p className="ut2__sub">
            UG &amp; PG students admitted to India's top-rated online universities —{" "}
            <strong>Unifost Edu. Pvt. Ltd.</strong>
          </p>
        </div>

        <div className="ut2__card" style={cardStyle}>

          {/* LEFT */}
          <div className="ut2__left">
            <div className="ut2__img-wrap">
              <div className="ut2__img-inner">
                <Image 
                  src={s.image} 
                  alt={s.name} 
                  width={112} 
                  height={112} 
                  className="object-cover object-top"
                  loading="lazy"
                  sizes="112px"
                />
              </div>
            </div>
            <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
              <p className="ut2__name">{s.name}</p>
              <div className="ut2__name-div" />
              <p className="ut2__uni">{s.university}</p>
              <p className="ut2__course">{s.program}</p>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
                <span className="ut2__badge">
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#1E3A8A", display: "inline-block" }} />
                  {s.type} Program
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="ut2__wa-btn" aria-label="Chat on WhatsApp">
                  <WhatsAppIcon />
                  Chat with Us
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="ut2__right">
            <div>
              <span className="ut2__quote-icon">&ldquo;</span>
              <p className="ut2__quote">
                {s.quote.split(/(Unifost Edu\. Pvt\. Ltd\.)/).map((part, i) =>
                  part === "Unifost Edu. Pvt. Ltd."
                    ? <b key={i}>Unifost Edu. Pvt. Ltd.</b>
                    : <span key={i}>{part}</span>
                )}
              </p>
            </div>
            <div className="ut2__footer">
              <div>
                <div className="ut2__stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#E8A020">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="ut2__rlabel">Verified Student Review</p>
              </div>
              <div className="ut2__verified">
                <span className="ut2__vdot" />
                Admitted via Unifost Edu. Pvt. Ltd.
              </div>
            </div>
          </div>
        </div>

        <div className="ut2__progress">
          <div key={`${current}-${paused}`} className={`ut2__fill${paused ? " ut2__fill--paused" : ""}`} />
        </div>

        <div className="ut2__dots">
          {students.map((_, i) => (
            <button key={i}
              className={`ut2__pip${i === current ? " ut2__pip--active" : ""}`}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}