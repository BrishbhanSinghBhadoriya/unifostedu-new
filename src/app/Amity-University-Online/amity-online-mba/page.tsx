"use client";
import React from 'react';
import Image from 'next/image';
import { 
  GraduationCap, 
  CheckCircle, 
  Award, 
  Users, 
  BookOpen, 
  TrendingUp, 
  IndianRupee, 
  Clock, 
  Star, 
  Building2,
  Globe,
  Target,
  Briefcase,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const ApplyButton = ({ text = "Apply Now - Limited Seats" }) => (
  <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg">
    {text}
  </button>
);

export default function AmityOnlineMBA() {
  return (
    
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Amity Online MBA: UGC Approved Distance MBA Degree for Working Professionals 2025
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Advance your career with India's most trusted online MBA program. Study from anywhere, no career break needed. 100% UGC-DEB approved degree equivalent to regular MBA.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5" />
                  <span>2 Years Program</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5" />
                  <span>NAAC A+ Accredited</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <IndianRupee className="w-5 h-5" />
                  <span>₹1,99,000 Total Fee</span>
                </div>
              </div>
              <ApplyButton />
            </div>
            <div className="hidden md:block">
              <Image 
                src="/images/amity/mbaherosection.jpeg" 
                alt="Amity Online MBA for Working Professionals" 
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5L+</div>
              <div className="text-gray-600">Alumni Network</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">18+</div>
              <div className="text-gray-600">Specializations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Online Learning</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.6★</div>
              <div className="text-gray-600">Student Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Program */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src="/images/amity/mba1.png" 
                alt="UGC Approved Online MBA Program" 
                width={400}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Amity Online MBA? India's Premier Distance Learning MBA Program
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Amity Online MBA is a UGC-DEB approved postgraduate management degree designed specifically for working professionals, fresh graduates, and entrepreneurs who want to advance their careers without taking a break. This distance learning MBA offers the same academic quality as a regular campus MBA with complete flexibility.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The program spans 2 years across 4 semesters, delivering industry-relevant curriculum through live interactive sessions, recorded lectures, case studies, and hands-on projects. Whether you're in Delhi, Mumbai, Bangalore, or any remote location, you can earn a prestigious MBA degree from home.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">No entrance exam required</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Study while working</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Affordable fee structure</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Valid for govt jobs</span>
                </div>
              </div>
              <ApplyButton text="Get Free Admission Counseling" />
            </div>
          </div>
        </div>
      </section>

      {/* Approvals & Recognition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              UGC Approved Online MBA | NAAC A+ Accredited Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Amity Online MBA is fully approved and recognized by all major education bodies in India. Your degree is valid for government jobs, private sector, PSUs, and higher education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            <div>
              <Image 
                src="/images/amity/mba2.png" 
                alt="UGC DEB Approved Distance MBA" 
                width={400}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <Award className="w-10 h-10 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">UGC-DEB Approved</h3>
                  </div>
                  <p className="text-gray-700">
                    Approved by University Grants Commission – Distance Education Bureau. This online MBA degree is equivalent to a regular MBA from any recognized university.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <Star className="w-10 h-10 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">NAAC A+ Accredited</h3>
                  </div>
                  <p className="text-gray-700">
                    Amity University holds NAAC A+ grade accreditation, ensuring world-class academic standards and quality education delivery.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-3">
                    <Building2 className="w-10 h-10 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">AICTE Recognized</h3>
                  </div>
                  <p className="text-gray-700">
                    Recognized by All India Council for Technical Education and member of Association of Indian Universities (AIU).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Degree Valid For:</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 mb-2" />
                <span>Government Jobs</span>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 mb-2" />
                <span>Private Jobs</span>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 mb-2" />
                <span>PSU Recruitment</span>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 mb-2" />
                <span>Higher Studies</span>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 mb-2" />
                <span>International Jobs</span>
              </div>
            </div>
            <ApplyButton text="Apply for Recognized MBA Degree" />
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who Can Apply for Amity Online MBA? Eligibility Criteria 2025
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The eligibility for Amity distance MBA is simple and accessible. Whether you're a fresh graduate, working professional, or entrepreneur, you can pursue this program without any entrance exam hassle.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Basic Requirements:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Graduation degree from any recognized university</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Minimum 50% marks (45% for SC/ST candidates)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">No entrance exam required</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">No age limit or work experience mandatory</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ideal Candidates:</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Working Professionals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Fresh Graduates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Entrepreneurs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Career Switchers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Homemakers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Remote Location Students</span>
                  </div>
                </div>
              </div>

              <ApplyButton text="Check Your Eligibility Now" />
            </div>
            <div>
              <Image 
                src="/images/amity/mba3.png" 
                alt="Online MBA Eligibility Criteria" 
                width={400}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              18+ MBA Specializations | Choose Your Career Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from India's widest range of online MBA specializations. From Digital Marketing to Finance, HR to Data Science - find your perfect fit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <Image 
                src="/images/amity/mba4.png" 
                alt="MBA Specializations Available" 
                width={400}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Single Specialization</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">₹1,99,000</div>
                <p className="text-gray-700 mb-4">Master one domain with focused expertise</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>General Management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Digital Marketing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Finance & Accounting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Human Resource Analytics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Business Analytics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Data Science</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>IT Management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>International Business</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Hospital Management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Digital Entrepreneurship</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Operations Management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Retail Management</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dual Specialization</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">₹2,99,000</div>
                <p className="text-gray-700 mb-4">International Finance - Learn two domains and boost global career opportunities</p>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Best for aspiring CFOs and finance leaders</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <ApplyButton text="Explore All Specializations" />
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Affordable Online MBA Fee Structure | EMI & Loan Options Available
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Amity Online MBA offers one of the most affordable fee structures in India for a UGC-approved program. Multiple payment options make it accessible for everyone.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Total Program Fee:</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Single Specialization</span>
                    <span className="text-2xl font-bold text-blue-600">₹1,99,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Dual Specialization</span>
                    <span className="text-2xl font-bold text-purple-600">₹2,99,000</span>
                  </div>
                  <div className="text-gray-600 text-sm">
                    Semester-wise: ₹37,500 – ₹62,500 approximately
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Options:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">One-Time Payment</p>
                      <p className="text-sm text-gray-600">Get additional discount on full payment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Semester-Wise Payment</p>
                      <p className="text-sm text-gray-600">Pay every 6 months flexibly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">No-Cost EMI</p>
                      <p className="text-sm text-gray-600">Zero interest monthly installments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Education Loan</p>
                      <p className="text-sm text-gray-600">HDFC Credila, Axis, ICICI, Avanse, InCred</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fee Includes:</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>LMS Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>Live Classes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>Study Materials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>Online Exams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>Placement Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>Degree Certificate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>Alumni Network</span>
                  </div>
                </div>
              </div>

              <ApplyButton text="Get Fee Breakup & Discounts" />
            </div>
            <div>
              <Image 
                src="/images/amity/mba5.png" 
                alt="Online MBA Fee Structure and Payment Options" 
                width={400}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online MBA Syllabus & Curriculum | Industry-Relevant Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 2-year curriculum covering all aspects of modern business management with practical case studies and live projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <Image 
                src="/images/amity/mba6.png" 
                alt="MBA Syllabus and Course Structure" 
                width={400}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                    Semester 1 - Foundation
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Principles of Management</li>
                    <li>• Managerial Economics</li>
                    <li>• Accounting for Managers</li>
                    <li>• Business Statistics</li>
                    <li>• Organizational Behavior</li>
                    <li>• Business Communication</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-green-600" />
                    Semester 2 - Core Management
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Marketing Management</li>
                    <li>• Human Resource Management</li>
                    <li>• Financial Management</li>
                    <li>• Operations Management</li>
                    <li>• Management Information Systems</li>
                    <li>• Business Research Methods</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                    Semester 3 - Strategic
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Strategic Management</li>
                    <li>• Entrepreneurship Development</li>
                    <li>• Business Ethics & Corporate Governance</li>
                    <li>• Specialization Electives</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-orange-600" />
                    Semester 4 - Advanced
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• International Business</li>
                    <li>• Project Management</li>
                    <li>• Advanced Specialization Subjects</li>
                    <li>• Dissertation / Final Project</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Evaluation Pattern</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">30%</div>
                <div className="text-gray-700">Internal Assessment</div>
                <p className="text-sm text-gray-600 mt-2">Assignments, Quizzes, Projects</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">70%</div>
                <div className="text-gray-700">Final Exam</div>
                <p className="text-sm text-gray-600 mt-2">Online Proctored Exams</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-600 mb-2">100%</div>
                <div className="text-gray-700">Online Mode</div>
                <p className="text-sm text-gray-600 mt-2">No Physical Attendance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Career Support & Top Placement Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with India's leading companies through our dedicated placement cell and career support services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <Image 
                src="/images/amity/mba8.png" 
                alt="MBA Placement Partners and Career Support" 
                width={400}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Top Recruiting Companies:</h3>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>• TCS</div>
                  <div>• Infosys</div>
                  <div>• Wipro</div>
                  <div>• Accenture</div>
                  <div>• Deloitte</div>
                  <div>• PwC</div>
                  <div>• EY</div>
                  <div>• KPMG</div>
                  <div>• ICICI Bank</div>
                  <div>• HDFC Bank</div>
                  <div>• Amazon</div>
                  <div>• Flipkart</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expected Salary Range:</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">₹5 - 12 LPA</div>
                <p className="text-gray-700">Average salary for MBA graduates from Amity Online</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Career Services Include:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Resume Building & Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Mock Interviews & HR Rounds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">LinkedIn Profile Enhancement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Job Portal Access & Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Marketing Manager</h4>
              <p className="text-gray-600">Brand Strategy, Digital Marketing, Campaign Management</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Financial Analyst</h4>
              <p className="text-gray-600">Investment Banking, Financial Planning, Risk Analysis</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">HR Manager</h4>
              <p className="text-gray-600">Talent Acquisition, Employee Relations, HR Analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say | 4.6★ Student Rating
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from working professionals who transformed their careers with Amity Online MBA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Completing my MBA while working full-time seemed impossible until I found Amity Online. The flexible schedule and quality education helped me get promoted to a manager role!"
              </p>
              <div className="font-semibold text-gray-900">Priya Sharma</div>
              <div className="text-sm text-gray-600">Marketing Professional, Delhi</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The UGC-approved degree gave me the confidence to apply for government positions. The faculty support and live sessions made complex subjects easy to understand."
              </p>
              <div className="font-semibold text-gray-900">Rajesh Kumar</div>
              <div className="text-sm text-gray-600">Finance Analyst, Mumbai</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5" />
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "As a mother returning to the workforce, this online MBA was perfect. The affordable fees with EMI options and flexible learning helped me restart my career in HR."
              </p>
              <div className="font-semibold text-gray-900">Anita Desai</div>
              <div className="text-sm text-gray-600">HR Manager, Bangalore</div>
            </div>
          </div>

          <div className="text-center">
            <Image 
              src="/images/amity/mba7.png" 
              alt="Student Success Stories and Reviews" 
              width={400}
              height={200}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions About Amity Online MBA
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about admission, fees, recognition, and more
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is Amity Online MBA valid and recognized?
              </h3>
              <p className="text-gray-700">
                Yes, absolutely! Amity Online MBA is fully approved by UGC-DEB (University Grants Commission - Distance Education Bureau) and is equivalent to a regular MBA degree. The degree is valid for government jobs, private sector positions, PSU recruitments, and higher education like PhD programs. The university also holds NAAC A+ accreditation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is work experience mandatory for admission?
              </h3>
              <p className="text-gray-700">
                No, work experience is not mandatory for Amity Online MBA admission. Fresh graduates with a bachelor's degree and 50% marks can directly apply. However, working professionals find this program especially beneficial as they can apply their learning immediately in their jobs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How are exams conducted for online MBA?
              </h3>
              <p className="text-gray-700">
                All exams are conducted online with remote proctoring technology. You can take your semester exams from the comfort of your home. The evaluation is based on 30% internal assessments (assignments, quizzes, projects) and 70% end-semester examinations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Does the degree certificate mention 'online' or 'distance' mode?
              </h3>
              <p className="text-gray-700">
                No, the MBA degree certificate issued by Amity University does not mention "online" or "distance" mode. It's a regular MBA degree that holds the same value as a campus-based program.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What are the payment options available for fees?
              </h3>
              <p className="text-gray-700">
                Amity offers multiple flexible payment options: one-time payment with discount, semester-wise payments, no-cost EMI options, and education loans through partner banks like HDFC Credila, Axis Bank, ICICI, Avanse, and InCred.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I pursue MBA while working full-time?
              </h3>
              <p className="text-gray-700">
                Yes! That's the biggest advantage of Amity Online MBA. The program is specifically designed for working professionals. All classes are conducted through live sessions and recorded lectures that you can access anytime. You don't need to quit your job or take a career break.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What is the duration of the online MBA program?
              </h3>
              <p className="text-gray-700">
                The program duration is 2 years divided into 4 semesters. Each semester is approximately 6 months long. You'll complete all coursework, projects, and examinations within this timeframe.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is there any entrance exam required for admission?
              </h3>
              <p className="text-gray-700">
                No entrance exam is required. Admission is merit-based on your graduation marks. You just need a bachelor's degree from a recognized university with minimum 50% marks (45% for SC/ST candidates).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career with Amity Online MBA?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join 5 lakh+ successful alumni who advanced their careers without taking a break. Limited seats available for 2025 batch. Apply now!
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm text-gray-300">Call us now</div>
                <div className="text-xl font-bold">+917042646766</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm text-gray-300">Email us</div>
                <div className="text-xl font-bold">info@unifostedu.com</div>
              </div>
            </div>
          </div>

          <ApplyButton text="Apply Now - Get Free Counseling" />

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>100% UGC Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No Entrance Exam</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>EMI Available</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Study While Working</span>
            </div>
          </div>
        </div>
      </section>
 
     
    </div>
  );
}