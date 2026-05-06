'use client';

import React, { useState } from 'react';
import { FaUser, FaChevronDown } from 'react-icons/fa6';

interface CareerFormProps {
  onSubmit?: (jobTitle: string) => Promise<void>;
  submitResult?: string;
  onResultChange?: (result: string) => void;
}

const FooterCareer: React.FC<CareerFormProps> = ({ 
  onSubmit, 
  submitResult = "", 
  onResultChange 
}) => {
  const [footerMenuOpen, setFooterMenuOpen] = useState(false);
  const [showSalesForm, setShowSalesForm] = useState(false);
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);
  const [showSeniorForm, setShowSeniorForm] = useState(false);
  const [careerSubmitResult, setCareerSubmitResult] = useState("");

  const submitApplication = async (
    event: React.FormEvent<HTMLFormElement>,
    jobTitle: string
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const fileElement = form.querySelector<HTMLInputElement>('input[name="resumeFile"]');
    let resumeLink = "";

    if (fileElement?.files?.length) {
      try {
        const formFile = new FormData();
        formFile.append("resume", fileElement.files[0]);

        const response = await fetch("/api/v1/upload", {
          method: "POST",
          body: formFile,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Upload failed");
        }

        resumeLink = result.url;
      } catch (error: any) {
        console.log("Upload error:", error);
        setCareerSubmitResult("Failed to upload resume");
        return;
      }
    }

    const nameInput = form.querySelector('input[name="name"]') as HTMLInputElement;
    const emailInput = form.querySelector('input[name="email"]') as HTMLInputElement;
    const phoneInput = form.querySelector('input[name="phone"]') as HTMLInputElement;

    const applicantName = nameInput.value;
    const applicantEmail = emailInput.value;
    const applicantPhone = phoneInput.value;

    const submissionData = new FormData();
    submissionData.append("access_key", "77f309ec-009f-44bc-9e7d-6c94beb50897");
    submissionData.append("email_to", "brishbhansinghraja@gmail.com, hr@unifostedu.com");
    submissionData.append("from_name", applicantName);
    submissionData.append("subject", "Job Application: " + jobTitle);

    const bodyText = "New Application\n\nApplicant Name: " + applicantName + "\nEmail: " + applicantEmail + "\nPhone: " + applicantPhone + "\nPosition: " + jobTitle + "\n\nResume: " + (resumeLink || "Not uploaded");

    submissionData.append("message", bodyText);

    try {
      const sendResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const sendResult = await sendResponse.json();

      if (sendResult.success) {
        setCareerSubmitResult("Application submitted successfully");
        form.reset();
      } else {
        setCareerSubmitResult("Failed to send application");
      }
    } catch (exception) {
      console.log("Submission error:", exception);
      setCareerSubmitResult("Network error occurred");
    }
  };

  const ApplicationForm = ({ 
    position, 
    requirement,
    isVisible, 
    toggleVisibility,
    themeColor = "blue"
  }: {
    position: string;
    requirement: string;
    isVisible: boolean;
    toggleVisibility: (state: boolean) => void;
    themeColor?: string;
  }) => {
    const borderClass = themeColor === "emerald" ? "border-emerald-500" : "border-blue-500";
    const labelClass = themeColor === "emerald" ? "text-emerald-800" : "text-blue-800";
    const buttonStyle = themeColor === "emerald" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-blue-600 hover:bg-blue-700";
    const focusStyle = themeColor === "emerald" ? "focus:ring-emerald-500" : "focus:ring-blue-500";

    return (
      <div className={`border-l-4 ${borderClass} pl-3`}>
        <p className={`font-bold ${labelClass} mb-1 text-xs`}>
          {position}
        </p>
        <p className="text-[10px] text-gray-600 mb-2">{requirement}</p>
        <button
          onClick={() => toggleVisibility(!isVisible)}
          className={`text-[10px] ${buttonStyle} text-white px-3 py-1 rounded-full transition-colors`}
        >
          Apply Now
        </button>

        {isVisible && (
          <form
            onSubmit={(e) => submitApplication(e, position)}
            className="mt-3 bg-gray-50 border p-3 rounded-xl space-y-2"
            encType="multipart/form-data"
          >
            <input 
              type="text" 
              name="name" 
              placeholder="Full Name" 
              required 
              className={`w-full border p-2 rounded-lg text-xs outline-none focus:ring-1 ${focusStyle}`}
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              required 
              className={`w-full border p-2 rounded-lg text-xs outline-none focus:ring-1 ${focusStyle}`}
            />
            <input 
              type="tel" 
              name="phone" 
              placeholder="Mobile Number" 
              required 
              className={`w-full border p-2 rounded-lg text-xs outline-none focus:ring-1 ${focusStyle}`}
            />

            <label className="text-[9px] uppercase font-bold text-gray-500">Resume (PDF/DOC)</label>
            <input
              type="file"
              name="resumeFile"
              required
              accept=".pdf,.doc,.docx"
              className="w-full text-[10px] text-gray-500"
            />

            <button 
              type="submit" 
              className={`w-full ${buttonStyle} text-white py-2 rounded-lg text-xs font-bold transition-colors`}
            >
              Submit
            </button>
            {careerSubmitResult && (
              <p className="text-[9px] text-center mt-2 text-blue-600 font-medium">
                {careerSubmitResult}
              </p>
            )}
          </form>
        )}
      </div>
    );
  };

  return (
    <div className="relative">
      <button
        onClick={() => setFooterMenuOpen(!footerMenuOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-sm font-medium text-white"
      >
        <FaUser className="text-blue-400" />
        <span>Careers</span>
        <FaChevronDown 
          className={`text-[10px] transition-transform duration-300 ${
            footerMenuOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {footerMenuOpen && (
        <div className="absolute bottom-full right-0 mb-3 w-72 sm:w-80 bg-white text-gray-800 p-5 rounded-2xl shadow-2xl border border-slate-200 z-50">
          <h4 className="text-center text-blue-800 font-bold mb-4 text-sm">
            Join Our Team
          </h4>

          <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 text-left">
            <ApplicationForm
              position="Sales Intern (0-1 Year)"
              requirement="Graduate (Passed or Pursuing)"
              isVisible={showSalesForm}
              toggleVisibility={setShowSalesForm}
              themeColor="blue"
            />

            <ApplicationForm
              position="Admission Counsellor"
              requirement="Min 45% in Graduation"
              isVisible={showAdmissionForm}
              toggleVisibility={setShowAdmissionForm}
              themeColor="blue"
            />

            <ApplicationForm
              position="Senior Counsellor (2+ Years)"
              requirement="Min 1 Year EdTech Experience"
              isVisible={showSeniorForm}
              toggleVisibility={setShowSeniorForm}
              themeColor="emerald"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterCareer;