// File: src/pages/blogs/WorkingMBA.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const WorkingMBA = () => {
  return (
    <main className="max-w-6xl mx-auto px-5 py-12 font-sans text-gray-800 leading-relaxed">
      <Helmet>
        <title>Can I Do MBA While Working? Here's How | UniFost Blog</title>
        <meta name="description" content="Learn how to successfully pursue an MBA while working full-time. Explore flexible MBA formats, tips, and tools for working professionals." />
        <meta name="keywords" content="MBA while working, Online MBA, Working professionals MBA, Flexible MBA, Part-time MBA India, UniFost Blog" />
        <link rel="canonical" href="https://www.unifostedu.com/blog/mba-while-working" />
        <meta property="og:title" content="Can I Do MBA While Working? Here's How" />
        <meta property="og:description" content="Explore flexible MBA options and tips to manage work and studies together." />
        <meta property="og:image" content="https://www.unifostedu.com/images/blogs/mba-while-working.jpg" />
        <meta property="og:url" content="https://www.unifostedu.com/blog/mba-while-working" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Can I Do MBA While Working? Here's How" />
        <meta name="twitter:description" content="Explore flexible MBA options and tips to manage work and studies together." />
        <meta name="twitter:image" content="https://www.unifostedu.com/images/blogs/mba-while-working.jpg" />
      </Helmet>

      <div className="flex flex-col md:flex-row gap-10">
        <article className="prose prose-lg max-w-none flex-1">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Can I Do MBA While Working? Here's How</h1>
          <p className="text-sm text-gray-500 mb-8">Published on June 25, 2025 • UniFost Blog</p>

          <p>Yes, you can absolutely pursue an MBA while working full-time. In fact, many professionals choose to upskill without leaving their jobs by enrolling in flexible MBA programs tailored for working individuals.</p>

          <h2 className="text-2xl text-blue-800 font-semibold mt-10 mb-3">📘 1. Choose the Right Format</h2>
          <ul className="list-disc pl-6">
            <li><strong>Online MBA:</strong> Flexible with weekend/evening classes, live sessions, and recordings</li>
            <li><strong>Part-Time MBA:</strong> Offline or hybrid format, typically on weekends</li>
            <li><strong>Executive MBA:</strong> For professionals with 5–10 years of experience, often company-sponsored</li>
          </ul>

          <h2 className="text-2xl text-blue-800 font-semibold mt-10 mb-3">🕒 2. Master Time Management</h2>
          <p>Plan your week in advance, assign fixed study hours, and use tools like calendars and task lists. Avoid multitasking while studying to stay focused.</p>

          <h2 className="text-2xl text-blue-800 font-semibold mt-10 mb-3">📲 3. Use Smart Tech Tools</h2>
          <p>Utilize apps like Notion, Trello, or Google Calendar. Access classes on-the-go through university mobile apps. Store notes in the cloud to stay organized across devices.</p>

          <h2 className="text-2xl text-blue-800 font-semibold mt-10 mb-3">🤝 4. Inform Your Employer</h2>
          <p>Let your manager know if your studies may affect work. Some companies offer sponsorship or flexible hours. Transparency builds trust and support.</p>

          <h2 className="text-2xl text-blue-800 font-semibold mt-10 mb-3">💼 5. Apply Learning at Work</h2>
          <p>Use your coursework in real-life scenarios. It strengthens your understanding and demonstrates your growing skill set to leadership.</p>

          <h2 className="text-2xl text-blue-800 font-semibold mt-10 mb-3">🎯 Top MBA Specializations for Working Professionals</h2>
          <ul className="list-disc pl-6">
            <li>MBA in Business Analytics</li>
            <li>MBA in Finance</li>
            <li>MBA in Marketing</li>
            <li>MBA in Human Resource Management (HRM)</li>
            <li>MBA in Operations Management</li>
          </ul>

          <h2 className="text-2xl text-blue-800 font-semibold mt-10 mb-3">✅ Final Thoughts</h2>
          <p>Pursuing an MBA while working demands dedication and smart planning. But with flexible formats and good time management, it’s absolutely achievable—and worth the investment for long-term growth.</p>

          <p className="mt-6">
            <a href="/bookdemo" className="text-blue-600 font-semibold underline">
              Book a free counseling session
            </a>{' '}
            with UniFost to find the right MBA that fits your work schedule.
          </p>
        </article>

        {/* Sidebar (Optional: You can add related blogs/images here later) */}
        <aside className="w-full md:w-[40%] flex flex-col gap-6">
          <img
            src="/b8.png"
            alt="Working Professionals MBA"
            className="rounded-xl w-full object-cover shadow-md"
          />

          <section>
            <h2 className="text-xl font-semibold mb-4 text-blue-900">You may also like</h2>
            <div className="grid gap-4">
              <a href="/blog/scholarship-emi-options-online-degrees" className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                <img src="/b5.png" alt="Scholarship and EMI" className="h-32 w-full object-cover" />
                <div className="p-3">
                  <h3 className="font-bold text-blue-800 text-md">Scholarship & EMI Options</h3>
                  <p className="text-sm text-gray-600 mt-1">Make your MBA affordable with smart financing options.</p>
                </div>
              </a>

              <a href="/blog/lpu-online-review" className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                <img src="/b4.png" alt="LPU Review" className="h-32 w-full object-cover" />
                <div className="p-3">
                  <h3 className="font-bold text-blue-800 text-md">LPU Online MBA Review</h3>
                  <p className="text-sm text-gray-600 mt-1">Pros, cons, fees, and placement insights.</p>
                </div>
              </a>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
};

export default WorkingMBA;
