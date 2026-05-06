'use client';

import React, { useState, ChangeEvent, useEffect } from "react";
import { toast } from "sonner";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaUser,
  FaGraduationCap,
  FaBuildingColumns,
} from "react-icons/fa6";

type FormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  university: string;
  program: string;
  qualification: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  university?: string;
  program?: string;
  qualification?: string;
};

const FooterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    university: "",
    program: "",
    qualification: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  // Mock search params functionality
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const university = urlParams.get("university") || "";
    const course = urlParams.get("course") || "";

    setFormData((prev) => ({
      ...prev,
      university,
      program: course,
    }));
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !phoneRegex.test(formData.phone.replace(/\D/g, "").slice(-10))
    ) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    // City validation
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    // University validation
    if (!formData.university.trim()) {
      newErrors.university = "University is required";
    }

    // Program validation
    if (!formData.program.trim()) {
      newErrors.program = "Program is required";
    }

    // Qualification validation
    if (!formData.qualification.trim()) {
      newErrors.qualification = "Highest qualification is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (): Promise<void> => {
    if (!validateForm()) {
      return;
    }

    try {
      // Use the same API call as "Get Started Today"
      const { enquiryAPI } = await import("@/lib/axios");

      const requestBody = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        course: formData.program,
        university: formData.university,
        qualification: formData.qualification,
        message: "",
      };

      await enquiryAPI.general(requestBody);

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        university: "",
        program: "",
        qualification: "",
      });
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("❌ Error submitting enquiry:", error);
      toast.error("Something went wrong while submitting. Please try again.");
    }
  };

  return (
    <div className="lg:col-span-6 group">
      <div className="h-full bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
        <div className="text-center mb-6">
          <h3 className="text-cyan-400 uppercase tracking-wider text-xs font-semibold mb-2">
            Contact With Us
          </h3>
          <h2 className="text-xl font-bold text-white leading-tight">
            Don't Hesitate, Tell Us About Your
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Requirement
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {submitted ? (
          <div className="text-center py-6">
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white p-5 rounded-2xl shadow-lg">
              <div className="text-5xl mb-3">🎉</div>
              <h3 className="text-lg font-bold mb-2">Thank You!</h3>
              <p className="text-green-100 text-sm">
                Our team will connect with you soon.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="group/input relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  className={`w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-md hover:shadow-lg text-sm ${
                    errors.name ? "ring-2 ring-red-400" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div className="group/input">
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    className={`w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-md hover:shadow-lg text-sm ${
                      errors.email ? "ring-2 ring-red-400" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Row 2: Phone and City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  className={`w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-md hover:shadow-lg text-sm ${
                    errors.phone ? "ring-2 ring-red-400" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
              <div className="relative">
                <label htmlFor="footer-city" className="sr-only">
                  Select City
                </label>
                <FaLocationDot className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <select
                  name="city"
                  id="footer-city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2.5 appearance-none rounded-xl bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-md hover:shadow-lg text-sm ${
                    errors.city ? "ring-2 ring-red-400" : ""
                  }`}
                >
                  <option value="">Select City *</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Pune">Pune</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Bhopal">Bhopal</option>
                  <option value="Indore">Indore</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Surat">Surat</option>
                  <option value="Kochi">Kochi</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Visakhapatnam">Visakhapatnam</option>
                  <option value="Patna">Patna</option>
                  <option value="Bhubaneswar">Bhubaneswar</option>
                  <option value="Other">Other</option>
                </select>
                {errors.city && (
                  <p className="text-red-400 text-xs mt-1">{errors.city}</p>
                )}
              </div>
            </div>

            {/* Row 3: University and Program */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative">
                <label htmlFor="footer-university" className="sr-only">
                  Select University
                </label>
                <FaBuildingColumns className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <select
                  name="university"
                  id="footer-university"
                  value={formData.university}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2.5 appearance-none rounded-xl bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-md hover:shadow-lg text-sm ${
                    errors.university ? "ring-2 ring-red-400" : ""
                  }`}
                >
                  <option value="">Select University *</option>
                  <option value="Amity University Online">
                    Amity University Online
                  </option>
                  <option value="Manipal University Online">
                    Manipal University Online
                  </option>
                  <option value="Lovely Professional University Online">
                    Lovely Professional University Online
                  </option>
                  <option value="Chandigarh University Online">
                    Chandigarh University Online
                  </option>
                  <option value="Jain University Online">
                    Jain University Online
                  </option>
                  <option value="Dr. DY Patil Online">Dr. DY Patil Online</option>
                  <option value="OP Jindal University">
                    OP Jindal University
                  </option>
                  <option value="Shoolini University Online">
                    Shoolini University Online
                  </option>
                  <option value="Vivekananda Global University Online">
                    Vivekananda Global University Online
                  </option>
                  <option value="UPES Online">UPES Online</option>
                  <option value="Sharda University Online">
                    Sharda University Online
                  </option>
                  <option value="NMIMS">NMIMS</option>
                  <option value="Other">Other</option>
                </select>
                {errors.university && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.university}
                  </p>
                )}
              </div>
              <div className="relative">
                <label htmlFor="footer-program" className="sr-only">
                  Select Program
                </label>
                <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <select
                  name="program"
                  id="footer-program"
                  value={formData.program}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2.5 appearance-none rounded-xl bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-md hover:shadow-lg text-sm ${
                    errors.program ? "ring-2 ring-red-400" : ""
                  }`}
                >
                  <option value="">Select Program *</option>
                  <option value="MBA">
                    MBA - Master of Business Administration
                  </option>
                  <option value="BBA">
                    BBA - Bachelor of Business Administration
                  </option>
                  <option value="MCA">
                    MCA - Master of Computer Applications
                  </option>
                  <option value="BCA">
                    BCA - Bachelor of Computer Applications
                  </option>
                  <option value="M.Com">M.Com - Master of Commerce</option>
                  <option value="B.Com">B.Com - Bachelor of Commerce</option>
                  <option value="MA">MA - Master of Arts</option>
                  <option value="BA">BA - Bachelor of Arts</option>
                  <option value="MAJMC">MAJMC - Master of Journalism</option>
                  <option value="BAJMC">BAJMC - Bachelor of Journalism</option>
                </select>
                {errors.program && (
                  <p className="text-red-400 text-xs mt-1">{errors.program}</p>
                )}
              </div>
            </div>

            {/* Row 4: Highest Qualification */}
            <div className="relative">
              <label htmlFor="footer-qualification" className="sr-only">
                Select Highest Qualification
              </label>
              <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <select
                name="qualification"
                id="footer-qualification"
                value={formData.qualification}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2.5 appearance-none rounded-xl bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white transition-all duration-300 shadow-md hover:shadow-lg text-sm ${
                  errors.qualification ? "ring-2 ring-red-400" : ""
                }`}
              >
                <option value="">Select Highest Qualification *</option>
                <option value="12th">12th (Senior Secondary)</option>
                <option value="Diploma">Diploma</option>
                <option value="Graduate">Graduate (Bachelor's Degree)</option>
                <option value="Post Graduate">Post Graduate (Master's Degree)</option>
                <option value="Other">Other</option>
              </select>
              {errors.qualification && (
                <p className="text-red-400 text-xs mt-1">{errors.qualification}</p>
              )}
            </div>

            <div className="text-center">
              <button
                onClick={handleSubmit}
                type="button"
                className="group/submit relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform text-sm"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Submit Enquiry
                  <span className="group-hover/submit:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-700 opacity-0 group-hover/submit:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FooterForm;