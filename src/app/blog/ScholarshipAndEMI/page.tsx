import React from 'react';
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Scholarship and EMI Options for Online Degrees | UniFost Blog",
  description:
    "Learn about available scholarship and EMI financing options for online degrees in India. Discover how to make higher education affordable and accessible.",
  keywords: [
    "Scholarship for Online Degree",
    "EMI Options Online Education",
    "Affordable Online Degrees",
    "Finance Online Courses India",
    "UniFost Blog",
  ],
  alternates: {
    canonical: "https://unifostedu.com/blog/ScholarshipAndEMI",
  },
  openGraph: {
    title: "Scholarship and EMI Options for Online Degrees",
    description:
      "Explore various scholarships and flexible EMI options to pursue your online degree without financial burden.",
    url: "https://unifostedu.com/blog/ScholarshipAndEMI",
    siteName: "UNIFOST",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327035/b7_vymjqj.webp",
        width: 1200,
        height: 630,
        alt: "Scholarship and EMI Options for Online Degrees",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scholarship and EMI Options for Online Degrees",
    description:
      "Explore various scholarships and flexible EMI options to pursue your online degree without financial burden.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327035/b7_vymjqj.webp"],
  },
};

const ScholarshipAndEMI = () => {
  return (
    <main className="max-w-6xl mx-auto px-5 py-12 font-sans text-gray-800 leading-relaxed">

      <div className="flex flex-col md:flex-row gap-10">
        {/* Blog Article */}
        <article className="prose prose-lg max-w-none flex-1">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Scholarship and EMI Options for Online Degrees</h1>
          <p className="text-sm text-gray-500 mb-8">Published on June 25, 2025 • UniFost Blog</p>

          <p>
            With UGC-approved online degrees now widely available, higher education is more accessible than ever. But for many, financial constraints are still a concern. Fortunately, many universities now offer <strong>scholarships</strong> and <strong>EMI (Equated Monthly Installment)</strong> options to ease the burden.
          </p>

          <h2 className="text-2xl text-blue-800 font-semibold mt-10 mb-3">🎓 Scholarship Options</h2>
          <p>Scholarships are offered based on different eligibility categories:</p>
          <ul className="list-disc pl-6">
            <li><strong>Merit-based:</strong> For students with academic excellence</li>
            <li><strong>Need-based:</strong> For students from economically weaker sections</li>
            <li><strong>Special categories:</strong> For women, SC/ST, armed forces, and differently-abled students</li>
            <li><strong>Corporate tie-ups:</strong> Scholarships through employer partnerships or CSR programs</li>
          </ul>

          <h2 className="text-2xl text-blue-800 font-semibold mt-10 mb-3">💳 EMI and Financing Options</h2>
          <p>Many online universities partner with banks and fintech companies to offer EMI plans such as:</p>
          <ul className="list-disc pl-6">
            <li>0% EMI for 6, 9, or 12 months</li>
            <li>Monthly payments starting as low as ₹3,000</li>
            <li>Instant digital approval with minimal documents</li>
            <li>Online KYC and quick disbursement process</li>
          </ul>

          <h2 className="text-2xl text-blue-800 font-semibold mt-10 mb-3">🏫 Universities Offering Financial Aid</h2>
          <p>Top online universities like Amity Online, Manipal Online, LPU Online, and NMIMS Global offer scholarships and financing plans to support eligible students.</p>

          <h2 className="text-2xl text-blue-800 font-semibold mt-10 mb-3">📌 How to Avail These Benefits</h2>
          <ol className="list-decimal pl-6">
            <li>Check the university’s website or consult UniFost for current scholarship offers</li>
            <li>Keep academic and income documents ready</li>
            <li>Apply early to increase your chances of approval</li>
            <li>Select an EMI plan that fits your budget and repayment ability</li>
          </ol>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-8 rounded-md">
            <p className="font-semibold mb-1">💡 Expert Advice:</p>
            <p>Read all EMI terms carefully. Some offers are 0% EMI, but others may include hidden charges. If in doubt, talk to a UniFost expert for free personalized guidance.</p>
          </div>

          <h2 className="text-2xl text-blue-800 font-semibold mt-10">🧾 Conclusion</h2>
          <p>Don’t let financial limitations stop your education. With the right scholarship and EMI support, you can earn a quality online degree that sets you up for future success.</p>

          <p className="mt-6">
            <a href="/bookdemo" className="text-blue-600 font-semibold underline">
              Book a free counseling session
            </a>{' '}
            to explore universities that offer financial aid and EMI plans.
          </p>
        </article>

        {/* Sidebar */}
        <aside className="w-full md:w-[40%] flex flex-col gap-6">
          <img
            src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327035/b7_vymjqj.webp"
            alt="Scholarship & EMI Options"
            className="rounded-xl w-full object-cover shadow-md"
          />

          <section>
            <h2 className="text-xl font-semibold mb-4 text-blue-900">You may also like</h2>
            <div className="grid gap-4">
              <a
                href="/blog/lpu-online-review"
                className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327035/b4_xo9eua.webp" alt="LPU Online Review" className="h-32 w-full object-cover" />
                <div className="p-3">
                  <h3 className="font-bold text-blue-800 text-md">LPU Online MBA Review</h3>
                  <p className="text-sm text-gray-600 mt-1">Pros, cons, fee structure, and placements.</p>
                </div>
              </a>

              <a
                href="/blog/mba-online-vs-distance"
                className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327034/b1_xpmoe1.webp" alt="MBA Online vs Distance" className="h-32 w-full object-cover" />
                <div className="p-3">
                  <h3 className="font-bold text-blue-800 text-md">Online vs Distance MBA</h3>
                  <p className="text-sm text-gray-600 mt-1">Compare flexibility, support, and ROI.</p>
                </div>
              </a>
              
            </div>
          </section>
        </aside>
      </div>
       <div className="flex justify-center mt-12">
        <Link href="/">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition">
            more Information
          </button>
        </Link>
      </div>
    </main>
  );
};

export default ScholarshipAndEMI;
