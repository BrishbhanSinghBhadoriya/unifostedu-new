'use client';

import React, { useState } from 'react';
import { demoAPI } from '@/lib/axios';
import { toast } from 'sonner';
import Image from 'next/image';
export default function BookDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    course: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedUniversities, setSelectedUniversities] = useState([]);


  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await demoAPI.bookDemo(formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        university: '',
        course: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl shadow-lg p-12">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Demo Request Submitted!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your interest! Our team will contact you within 24 hours to schedule your demo session.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#00ffe0] text-[#001e3c] px-8 py-3 rounded-full font-semibold hover:bg-[#00e6cc] transition-colors"
            >
              Book Another Demo
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your <span className="text-[#00ffe0]">Demo Session</span>
          </h1>
          <p className="text-xl text-gray-600">
            Experience online learning firsthand with a free demo session from our partner universities.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ffe0] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ffe0] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ffe0] focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interested Course *
                </label>
                <select
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ffe0] focus:border-transparent"
                >
                  <option value="">Select a course</option>
                  <option value="MBA">MBA</option>
                  <option value="BBA">BBA</option>
                  <option value="BCA">BCA</option>
                  <option value="MCA">MCA</option>
                  <option value="B.Com">B.Com</option>
                  <option value="M.Com">M.Com</option>
                  <option value="BA">BA</option>
                  <option value="MA">MA</option>
                  <option value="BAJMC">BAJMC</option>
                  <option value="MAJMC">MAJMC</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University Preference
              </label>
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ffe0] focus:border-transparent"
                placeholder="Any specific university in mind?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00ffe0] focus:border-transparent"
                placeholder="Tell us more about your requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#00ffe0] text-[#001e3c] py-3 px-6 rounded-lg font-semibold hover:bg-[#00e6cc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Book Demo Session'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
