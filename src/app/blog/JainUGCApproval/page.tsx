'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, TrendingUp, Award, Users, BookOpen, DollarSign, CheckCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const JainUGCApprovalBlog = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: "Is Jain University UGC approved?",
      answer: "Yes, 100% - Jain University is fully UGC (University Grants Commission) approved and recognized by the Government of India. You can verify this on the official UGC website at ugc.ac.in"
    },
    {
      question: "Can I transfer my credits if I studied at another university?",
      answer: "Yes, credit transfer is allowed with maximum 50% of credits from recognized institutions. Subject similarity and grade eligibility required. Approval from department HOD is needed. Process takes 2-4 weeks."
    },
    {
      question: "Are online degrees from Jain University as valuable as on-campus degrees?",
      answer: "Yes, both are equally valuable. Both carry the same UGC recognition. The difference is flexibility and learning style, not credibility. Placement data shows similar outcomes."
    },
    {
      question: "Does Jain University accept CAT/MAT scores for MBA admission?",
      answer: "Yes. Jain University accepts CAT (99 percentile), MAT (80%+ score), XAT (80%+ score), university's own entrance exam, or merit-based selection if 75%+ in graduation."
    },
    {
      question: "What's the faculty-to-student ratio at Jain University?",
      answer: "Approximately 1:20. This ensures personalized attention, mentorship opportunities, and better learning outcomes. Small class sizes allow more interaction with professors."
    },
    {
      question: "Can I do internship while studying?",
      answer: "Yes. Mandatory internship programs are part of most courses with 500+ partner companies. Duration: 8-12 weeks. Paid internships (₹20,000-50,000/month). 40% interns get full-time offers."
    },
    {
      question: "What is the hostel facility like?",
      answer: "Premium accommodation with AC rooms, 24/7 security with CCTV, 3 vegetarian + 2 non-vegetarian meals, WiFi, laundry, medical facilities. Cost: ₹1.5-2.5 L/year. Preferred for first-year students."
    },
    {
      question: "How are online exams conducted securely?",
      answer: "AI-enabled monitoring detects cheating. Webcam & screen recording required. Lock-down browser prevents alt-tab switching. 24/7 technical helpline. Results within 48 hours. Appeals process available."
    }
  ];

  const placementData = [
    { label: 'Engineering', placement: '96%', avgPackage: '₹6.5 LPA', highest: '₹35+ LPA' },
    { label: 'BBA', placement: '95%', avgPackage: '₹4.5-6 LPA', highest: '₹18 LPA' },
    { label: 'B.Com', placement: '92%', avgPackage: '₹3.5-5 LPA', highest: '₹12 LPA' },
    { label: 'MBA', placement: '99%', avgPackage: '₹12.5-15 LPA', highest: '₹50 LPA+' },
    { label: 'M.Tech', placement: '95%', avgPackage: '₹8-11 LPA', highest: '₹25 LPA+' },
  ];

  const programs = [
    { name: 'BCA', duration: '3 Years', fee: '₹5-6 L', placement: '96%' },
    { name: 'BBA', duration: '3 Years', fee: '₹2.5-3.5 L', placement: '95%' },
    { name: 'B.Com', duration: '3 Years', fee: '₹1.5-2.5 L', placement: '92%' },
    { name: 'MBA', duration: '2 Years', fee: '₹4-8 L', placement: '99%' },
    { name: 'MCA', duration: '2 Years', fee: '₹3-5 L', placement: '95%' },
    { name: 'Online MBA', duration: '2 Years', fee: '₹2.5-4 L', placement: '95%' },
  ];

  const facilities = [
    { icon: '🏫', title: 'Smart Classrooms', desc: 'Video conferencing & digital learning' },
    { icon: '📚', title: '5L+ Books', desc: '50,000+ e-books & digital journals' },
    { icon: '🔬', title: 'Modern Labs', desc: 'AI/ML, Electronics, Cybersecurity' },
    { icon: '🏊', title: 'Sports Complex', desc: 'Olympic pool, courts, grounds' },
    { icon: '🛏️', title: 'Premium Hostel', desc: '₹1.5-2.5 L/year with meals' },
    { icon: '💻', title: '100% WiFi', desc: 'High-speed internet throughout' },
  ];

  const scholarshipTypes = [
    { type: 'Merit-Based', amount: 'Up to 100%', description: 'Based on entrance exam or board scores' },
    { type: 'Need-Based', amount: 'Up to 100%', description: 'For family income below ₹5 lakhs annually' },
    { type: 'Category-Based', amount: '25-100%', description: 'SC/ST/OBC/Minority/PwD' },
    { type: 'Sports Scholarship', amount: 'Up to 100%', description: 'For national/state-level athletes' },
  ];

  const admissionSteps = [
    { step: 1, title: 'Check Eligibility', desc: '10+2 pass (Engineering: PCM 60%+)' },
    { step: 2, title: 'Prepare Documents', desc: 'Marksheets, ID, address proof, certificates' },
    { step: 3, title: 'Apply Online', desc: 'Visit jainuniversity.ac.in/admissions & submit form' },
    { step: 4, title: 'Entrance Exam', desc: 'JEE/CAT/MAT or merit-based (some programs)' },
    { step: 5, title: 'Interview', desc: 'Personal interview (online/offline) for selection' },
    { step: 6, title: 'Admission Offer', desc: 'Receive letter & pay admission fee (₹50-1L)' },
  ];

  const topRecruiters = [
    { category: 'Tech Giants', companies: 'Google, Microsoft, Amazon, Apple, Meta, IBM' },
    { category: 'Consulting', companies: 'McKinsey, BCG, Bain, Accenture, Deloitte' },
    { category: 'Finance', companies: 'Goldman Sachs, JPMorgan, ICICI, HDFC, Axis' },
    { category: 'IT Services', companies: 'TCS, Infosys, Wipro, HCL, Cognizant' },
  ];

  return (
    <main className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-blue-700/40 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-500/30">
                <Award className="w-4 h-4" />
                <span className="text-sm font-semibold">UGC Approved & NAAC A+ Accredited</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Jain University UGC Approved 2024-2025
              </h1>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Complete Guide for Admissions, Placements & Fees. Discover why 12,000+ students choose Jain University for their higher education journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition shadow-lg">
                  Download Brochure
                </button>
                <a href="#contact" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition border border-white/20">
                  Get More Info
                </a>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-lg">
                    <TrendingUp className="w-6 h-6 text-yellow-300" />
                    <span>98% Placement Rate</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <DollarSign className="w-6 h-6 text-yellow-300" />
                    <span>₹12.5 LPA Avg (MBA)</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <Users className="w-6 h-6 text-yellow-300" />
                    <span>12,000+ Students</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <BookOpen className="w-6 h-6 text-yellow-300" />
                    <span>50+ Programs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <article className="lg:col-span-2 space-y-8">
            {/* UGC Approval Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-3xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-500" />
                Is Jain University UGC Approved?
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Yes, 100% - Jain University is fully UGC (University Grants Commission) approved</strong> and recognized by the Government of India.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
                <p className="text-green-900 font-semibold">✓ Verified UGC Status</p>
                <p className="text-green-800 text-sm mt-1">All degrees are valid nationally and internationally. Eligible for government jobs, higher education, and employer recognition.</p>
              </div>
            </section>

            {/* Programs & Fees */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Programs & Fee Structure</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-blue-900 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Program</th>
                      <th className="px-4 py-3 text-left">Duration</th>
                      <th className="px-4 py-3 text-left">Total Fee</th>
                      <th className="px-4 py-3 text-left">Placement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {programs.map((prog, idx) => (
                      <tr key={idx} className="hover:bg-blue-50">
                        <td className="px-4 py-3 font-semibold text-gray-900">{prog.name}</td>
                        <td className="px-4 py-3 text-gray-700">{prog.duration}</td>
                        <td className="px-4 py-3 text-gray-700">{prog.fee}</td>
                        <td className="px-4 py-3">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-semibold text-xs">
                            {prog.placement}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Placement Data */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Placement & Salary Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {placementData.map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                    <h3 className="font-bold text-gray-900 mb-3">{item.label}</h3>
                    <div className="space-y-1 text-sm">
                      <p><span className="text-gray-600">Placement:</span> <strong className="text-green-600">{item.placement}</strong></p>
                      <p><span className="text-gray-600">Avg Package:</span> <strong className="text-blue-600">{item.avgPackage}</strong></p>
                      <p><span className="text-gray-600">Highest:</span> <strong className="text-purple-600">{item.highest}</strong></p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Top Recruiting Companies (500+)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topRecruiters.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900 mb-1">{item.category}</p>
                    <p className="text-sm text-gray-700">{item.companies}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Campus Facilities */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Campus Facilities & Infrastructure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {facilities.map((fac, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-4xl">{fac.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900">{fac.title}</h3>
                      <p className="text-sm text-gray-700 mt-1">{fac.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Admission Process */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Admission Process (Step-by-Step)</h2>
              <div className="space-y-3">
                {admissionSteps.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Scholarships */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Scholarships & Financial Aid</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {scholarshipTypes.map((sch, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                    <p className="font-bold text-purple-900 mb-1">{sch.type}</p>
                    <p className="text-sm text-purple-800 mb-2">{sch.amount}</p>
                    <p className="text-xs text-purple-700">{sch.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqItems.map((item, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                      className="w-full px-4 py-4 bg-blue-50 hover:bg-blue-100 transition flex justify-between items-center font-semibold text-gray-900"
                    >
                      <span>{item.question}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${expandedFAQ === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedFAQ === idx && (
                      <div className="px-4 py-4 bg-white text-gray-700 text-sm border-t border-gray-200">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold mb-6">Get More Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Contact Details</h3>
                  <div className="space-y-2 text-blue-100">
                    <p><strong>Email:</strong> admissions@jainuniversity.ac.in</p>
                    <p><strong>Phone:</strong> +91-8040919400</p>
                    <p><strong>Website:</strong> www.jainuniversity.ac.in</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Main Campus</h3>
                  <div className="text-blue-100">
                    <p>Jain University, Bangalore</p>
                    <p>Jakkasandra, Ramanagara District</p>
                    <p>Bangalore - 562112, Karnataka</p>
                  </div>
                </div>
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 sticky top-20">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>UGC Approved</strong> & NAAC A+</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>98% Placements</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>12,000+ Students</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>50+ Programs</strong></span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default JainUGCApprovalBlog;