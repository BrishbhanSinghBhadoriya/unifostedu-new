"use client";

// /ignou_university/thanks/page.tsx
//
// Flow:
//   1. User submits form on /ignou_university
//   2. API call succeeds → sessionStorage.setItem("lead_source", "openai")
//   3. Router pushes to /ignou_university/thanks
//   4. This page fires: oaiq("measure", "lead_created", { type: "customer_action" })
//   5. sessionStorage is cleared so refresh doesn't re-fire

import Link from "next/link";
import { useEffect, useRef, Suspense } from "react";

function ThankYouContent() {
  const hasRun = useRef(false);

  useEffect(() => {
    // StrictMode double-invoke guard
    if (hasRun.current) return;
    hasRun.current = true;

    // Read & immediately clear the source flag set by the form submit handler
    let source = "";
    try {
      source = sessionStorage.getItem("lead_source") || "";
      if (source) sessionStorage.removeItem("lead_source");
    } catch (_) { /* sessionStorage blocked (private mode, etc.) */ }

    if (source !== "openai") {
      console.log("ℹ️ lead_source is not 'openai' — no conversion fired.");
      return;
    }

    // ── Fire OpenAI lead_created conversion ──────────────────────────────
    // oaiq is initialised by the layout script (afterInteractive).
    // Retry until the SDK is ready (usually < 500ms).
    const fire = () => {
      if (typeof (window as any).oaiq === "function") {
        (window as any).oaiq("measure", "lead_created", { type: "customer_action" });
        console.log("✅ OpenAI lead_created conversion fired");
      } else {
        // SDK not ready yet — retry after 500ms
        setTimeout(fire, 500);
      }
    };
    fire();
  }, []); // run once on mount

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      {/* Animated checkmark */}
      <div className="mb-8 relative">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-green-500 animate-ping opacity-25" />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
        Thank You!
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
        Your enquiry has been successfully submitted. Our admission counsellor will contact you shortly.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/ignou_university"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-full text-lg transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          Back to Home
        </Link>
        <a
          href="tel:7042646766"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-full text-lg transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
      </div>

      {/* Top progress bar decoration */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-green-500 to-blue-500" />

      <div className="mt-16 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Ignou University Online. All rights reserved.
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={null}>
      <ThankYouContent />
    </Suspense>
  );
}
