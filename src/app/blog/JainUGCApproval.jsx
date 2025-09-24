// File: src/pages/blogs/JainUGCApproval.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const JainUGCApproval = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      <Helmet>
        <title>Is Jain Online University UGC Approved? | UniFost Blog</title>
        <meta name="description" content="Wondering if Jain Online University is UGC approved? Explore its accreditations, recognitions, and what it means for your degree value and career." />
        <meta name="keywords" content="Jain University Online, UGC approved online universities, NAAC A+ University, Jain online degree value" />
        <link rel="canonical" href="https://www.unifostedu.com/blog/jain-online-ugc-approved" />
        <meta property="og:title" content="Is Jain Online University UGC Approved?" />
        <meta property="og:description" content="Explore if Jain Online University is UGC approved and understand its accreditations, recognition, and what it means for students." />
        <meta property="og:image" content="https://www.unifostedu.com/images/blogs/jain-online-ugc.jpg" />
        <meta property="og:url" content="https://www.unifostedu.com/blog/jain-online-ugc-approved" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Is Jain Online University UGC Approved?" />
        <meta name="twitter:description" content="Explore if Jain Online University is UGC approved and understand its accreditations, recognition, and what it means for students." />
        <meta name="twitter:image" content="https://www.unifostedu.com/images/blogs/jain-online-ugc.jpg" />
      </Helmet>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Main Content */}
        <article className="flex-1 prose prose-lg max-w-none leading-relaxed">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-3 font-serif">
            Is Jain Online University UGC Approved?
          </h1>
          <p className="text-sm text-gray-500 mb-6">Published on June 25, 2025 • UniFost Blog</p>

          <p>
            Jain Online University has gained significant popularity for its career-ready programs and flexible online learning experience. One common
            question students ask is whether Jain Online is <strong>UGC approved</strong> and what that means for their degree’s value.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-6">UGC Approval Status</h2>
          <p>
            Yes, <strong>Jain (Deemed-to-be University)</strong> is recognized by the <strong>University Grants Commission (UGC)</strong> to offer online degree programs.
            It is listed on the UGC-DEB portal as an approved institution eligible to conduct fully online education in India.
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 mt-6">Additional Accreditations</h2>
          <ul className="list-disc pl-6">
            <li><strong>NAAC A++ Grade:</strong> Accredited with the highest NAAC grade, ensuring top academic quality.</li>
            <li><strong>NIRF Ranking:</strong> Ranked among the top private universities in India.</li>
            <li><strong>AICTE Approval:</strong> Technical programs are approved by AICTE where applicable.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-800 mt-6">Why Does UGC Approval Matter?</h2>
          <p>
            UGC approval ensures academic credibility. A UGC-approved online degree is valid for government jobs, higher education, and global employer acceptance.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-md mt-6">
            <p className="font-semibold text-blue-800 mb-1">📘 Quick Tip:</p>
            <p>
              Always verify the status on the{' '}
              <a href="https://deb.ugc.ac.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                official UGC-DEB website
              </a>{' '}
              before applying to any online university.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-blue-800 mt-6">Popular Courses at Jain Online</h2>
          <ul className="list-disc pl-6">
            <li>MBA (Finance, Marketing, HR, Analytics, etc.)</li>
            <li>BBA and B.Com</li>
            <li>MCA and BCA</li>
            <li>MA and BA in Journalism, Psychology, and more</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-800 mt-6">Conclusion</h2>
          <p>
            If you’re considering enrolling in Jain Online, rest assured that the university is fully <strong>UGC approved</strong>. With NAAC A++ accreditation and
            strong national rankings, Jain Online is a reliable choice for online education.
          </p>

          <p className="mt-6">
            <a href="/bookdemo" className="text-blue-600 font-semibold underline">
              Book a free counseling session
            </a>{' '}
            to find out if Jain Online matches your academic and career aspirations.
          </p>
        </article>

        {/* Sidebar */}
        <aside className="w-full md:w-[38%] space-y-6">
          <img
            src="/b5.png"
            alt="Jain Online UGC Approval"
            className="rounded-xl w-full object-cover shadow-md"
          />

          <section>
            <h2 className="text-xl font-semibold text-blue-900 mb-4">You Might Also Like</h2>
            <div className="grid gap-5">
              <a href="/blog/mba-online-vs-distance" className="group bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
                <img src="/b1.png" alt="MBA Online vs Distance" className="h-36 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h3 className="font-bold text-blue-800 text-lg">Online vs Distance MBA</h3>
                  <p className="text-sm text-gray-600 mt-1">Compare flexibility, recognition & ROI.</p>
                </div>
              </a>

              <a href="/blog/lpu-online-review" className="group bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
                <img src="/b4.png" alt="LPU Online Review" className="h-36 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                  <h3 className="font-bold text-blue-800 text-lg">LPU Online Review</h3>
                  <p className="text-sm text-gray-600 mt-1">Understand pros, cons, and admissions process.</p>
                </div>
              </a>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
};

export default JainUGCApproval;
