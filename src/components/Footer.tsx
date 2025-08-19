'use client';

import React, { useState, useEffect } from "react";
import { demoAPI } from "@/lib/axios";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Footer = () => {
  const [showHiringInfo, setShowHiringInfo] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const searchParams = useSearchParams();

   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      university: "",
      course: "",
      message: "",
    });
  
    const [submitted, setSubmitted] = useState(false);
  
    useEffect(() => {
      const university = searchParams.get("university") || "";
      const course = searchParams.get("course") || "";
  
      setFormData((prev) => ({
        ...prev,
        university,
        course,
      }));
    }, [searchParams]);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      try {
        const res = await demoAPI.bookDemo(formData);
        console.log("✅ Enquiry Submitted:", res.data);
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          university: "",
          course: "",
          message: "",
        });
      } catch (error) {
        console.error("❌ Error submitting enquiry:", error);
        alert("Something went wrong while submitting. Please try again.");
      }
    };

  return (
    <footer className="bg-gradient-to-r from-[#001d3a] to-[#003b59] text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

        {/* Column 1: Info */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
          <h1 className="text-3xl font-bold text-cyan-400 mb-3">UNIFOST</h1>
          <p className="text-gray-200 text-[15px] leading-relaxed">
            UNIFOST is a premier <span className="text-sky-300 font-semibold">EdTech platform</span> helping students choose the right path through <span className="text-sky-300 font-semibold">online education</span>, expert counseling, and demo sessions.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={() => setShowContactInfo(!showContactInfo)}
              className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-[#003b59] transition"
            >
              {showContactInfo ? "Hide Contact Info" : "Show Contact Info"}
            </button>
            <button
              onClick={() => setShowHiringInfo(!showHiringInfo)}
              className="text-white font-bold border border-white px-4 py-2 rounded-full hover:bg-white hover:text-[#003b59] transition"
            >
              We Are Hiring
            </button>
          </div>

          {showContactInfo && (
            <ul className="mt-4 space-y-3 text-gray-200 text-sm">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-sky-400" />
                <a href="mailto:uni.fostedu@gmail.com" className="hover:text-white transition">
                  info@unifostedu.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-sky-400" /> ‪+91 93547 35410‬
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-sky-400" /> Noida, Uttar Pradesh, India
              </li>
            </ul>
          )}

          {showHiringInfo && (
            <div className="mt-6 bg-white text-gray-800 p-4 rounded-xl shadow text-sm space-y-4">
              <div>
                <p className="font-semibold text-blue-800">Freshers (0–1 year)</p>
                <p>Eligibility — Graduate with strong communication skills</p>
                <p className="flex items-center gap-2 text-blue-600">
                  <MdEmail className="text-lg" /> info@unifostedu.com
                </p>
                <p className="flex items-center gap-2 text-green-600">
                  <FaWhatsapp className="text-lg" /> 7303725297
                </p>
              </div>
              <hr className="border-gray-300" />
              <div>
                <p className="font-semibold text-blue-800">Senior Career Counsellor (2+ years)</p>
                <p>Eligibility — Minimum 2 years of experience in the EdTech industry</p>
                <p className="flex items-center gap-2 text-blue-600">
                  <MdEmail className="text-lg" /> info@unifostedu.com
                </p>
                <p className="flex items-center gap-2 text-green-600">
                  <FaWhatsapp className="text-lg" /> 7303725297
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Column 2: Contact Form */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
          <h3 className="text-center text-cyan-400 uppercase tracking-wide text-sm mb-2">
            Contact With Us
          </h3>
          <h2 className="text-center text-2xl font-bold text-white mb-6">
            Don't Hesitate, Tell Us About Your Requirement
          </h2>

          {submitted ? (
            <div className="text-green-400 text-center text-lg font-semibold py-6">
              🎉 Thank you! Our team will connect with you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-2 rounded-md bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-2 rounded-md bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 rounded-md bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="">Interested Course</option>
                  <option value="BBA">BBA</option>
                  <option value="BCA">BCA</option>
                  <option value="B.Com">B.Com</option>
                  <option value="MBA">MBA</option>
                  <option value="MCA">MCA</option>
                  <option value="MA">MA</option>
                  <option value="BA">BA</option>
                  <option value="M.Com">M.Com</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your message (optional)"
                className="w-full px-4 py-2 rounded-md bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Column 3: Links */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
          <div className="grid grid-cols-2 gap-10 text-sm text-white">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-sky-400">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link href="/listofcollege" className="hover:text-white transition">Explore Colleges</Link></li>
                <li><Link href="/blog/blog-page" className="hover:text-white transition">Blogs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Popular Courses</h3>
              <ul className="space-y-2 text-sky-400">
                <li><Link href="/mba-online" className="hover:text-white transition">MBA</Link></li>
                <li><Link href="/bba-online" className="hover:text-white transition">BBA</Link></li>
                <li><Link href="/bca-online" className="hover:text-white transition">BCA</Link></li>
                <li><Link href="/mca-online" className="hover:text-white transition">MCA</Link></li>
                <li><Link href="/ba-online" className="hover:text-white transition">BA</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} UNIFOST. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
