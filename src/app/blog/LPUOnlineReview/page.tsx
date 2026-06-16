// File: src/app/blog/LPUOnlineReview/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from "next/link";

export const metadata = {
  title: "LPU Online MBA Review – Pros, Cons, and Admission Process | UniFost",
  description:
    "Get a detailed review of LPU Online MBA: Explore its pros, cons, fees, faculty, placement, and how to apply. Read before you choose!",
  keywords: [
    "LPU Online MBA Review",
    "LPU Online Pros and Cons",
    "LPU Online Admission Process",
    "LPU Online MBA",
    "UniFost Blog",
  ],
  alternates: {
    canonical: "https://unifostedu.com/blog/LPUOnlineReview",
  },
  openGraph: {
    title: "LPU Online MBA Review – Pros, Cons, and Admission Process",
    description:
      "Get a detailed review of LPU Online MBA: Explore its pros, cons, fees, faculty, placement, and how to apply. Read before you choose!",
    url: "https://unifostedu.com/blog/LPUOnlineReview",
    siteName: "UNIFOST",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327034/b1_xpmoe1.webp",
        width: 1200,
        height: 630,
        alt: "LPU Online MBA Review",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LPU Online MBA Review – Pros, Cons, and Admission Process",
    description:
      "Get a detailed review of LPU Online MBA: Explore its pros, cons, fees, faculty, placement, and how to apply. Read before you choose!",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327034/b1_xpmoe1.webp"],
  },
};

const LPUOnlineReview = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 text-gray-800">

      <div className="flex flex-col md:flex-row gap-10">
        {/* Main Content */}
        <article className="flex-1 prose prose-lg max-w-none leading-relaxed">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2 font-serif">
            LPU Online MBA – Pros, Cons & Admissions Process
          </h1>
          <p className="text-sm text-gray-500 mb-6">Published on June 15, 2026 • UniFost Blog</p>

          <p>
            Lovely Professional University (LPU) is one of India's largest private universities. Its online learning division is gaining popularity among working professionals
            and freshers looking for a flexible, affordable, and credible MBA option.
          </p>

          <h2 className="text-2xl text-blue-800 font-semibold mt-6">✅ Pros of LPU Online MBA</h2>
          <ul className="list-disc pl-6">
            <li>UGC Entitled & NAAC A++ Accreditation</li>
            <li>Modern curriculum aligned with industry trends</li>
            <li>Easy-to-use LMS with mobile access</li>
            <li>Live + recorded classes with 24/7 student support</li>
            <li>Mentorship, career assistance, and alumni network</li>
            <li>Affordable tuition fees and EMI options</li>
          </ul>

          <h2 className="text-2xl text-blue-800 font-semibold mt-6"> Cons of LPU Online MBA</h2>
          <ul className="list-disc pl-6">
            <li>Less international exposure compared to IIMs</li>
            <li>Fewer niche specializations compared to peers</li>
            <li>No global dual-degree options</li>
          </ul>

          <h2 className="text-2xl text-blue-800 font-semibold mt-6">💰 Fees & Duration</h2>
          <p>
            The total fee ranges from <strong>₹1.4 to ₹1.8 Lakh</strong> for the 2-year MBA, depending on specialization and available scholarships.
            EMI and financial assistance options are also available.
          </p>

          <h2 className="text-2xl text-blue-800 font-semibold mt-6">📋 Admission Process</h2>
          <ol className="list-decimal pl-6">
            <li>Visit the LPU Online official website</li>
            <li>Register and fill out the application form</li>
            <li>Upload documents (10th, 12th, Graduation, ID)</li>
            <li>Pay the application fee</li>
            <li>Get LMS access after successful enrollment</li>
          </ol>

          <h2 className="text-2xl text-blue-800 font-semibold mt-6">📈 Career Outcomes</h2>
          <p>
            LPU Online MBA grads get placed in marketing, HR, finance, and tech domains. Companies like <strong>Wipro, ICICI, HCL, Amazon, Infosys</strong> have recruited alumni.
          </p>

          <h2 className="text-2xl text-blue-800 font-semibold mt-6">🧾 Final Verdict</h2>
          <p>
            LPU Online MBA is a strong choice for students seeking <strong>flexibility, affordability, and recognized credentials</strong>.
            Though not a top-tier global brand, it offers excellent value for money and reliable student support.
          </p>

          <p className="mt-6">
            <a href="/bookdemo" className="text-blue-600 font-semibold underline">
              Book your free counseling now
            </a>{' '}
            and get guidance on LPU and other top UGC-approved online MBA programs.
          </p>
        </article>

        {/* Sidebar */}
        <aside className="w-full md:w-[38%] space-y-6">
          <img
            src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327035/b4_xo9eua.webp"
            alt="LPU Online Review"
            className="rounded-xl w-full object-cover shadow-md"
          />

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">More from UniFost</h2>
            <div className="grid gap-5">
              <a
                href="/blog/mba-online-vs-distance"
                className="group bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
              >
                <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327034/b1_xpmoe1.webp" alt="MBA Online vs Distance" className="h-36 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h3 className="font-bold text-blue-800 text-lg">MBA Online vs Distance</h3>
                  <p className="text-sm text-gray-600 mt-1">Compare flexibility, recognition & ROI.</p>
                </div>
              </a>

              <a
                href="/blog/how-to-choose-best-online-course"
                className="group bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
              >
                <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327034/b3_d52jqi.webp" alt="Choose Best Course" className="h-36 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h3 className="font-bold text-blue-800 text-lg">How to Choose the Best Online Course</h3>
                  <p className="text-sm text-gray-600 mt-1">What factors matter most when picking a course?</p>
                </div>
              </a>
            </div>
             <div className="flex justify-center mt-12 ">
        <Link href="/lpu-online">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition cursor-pointer">
            more Information about LPU
          </button>
        </Link>
      </div>
          </section>
        </aside>
      </div>
    </main>
  );
};

export default LPUOnlineReview;
