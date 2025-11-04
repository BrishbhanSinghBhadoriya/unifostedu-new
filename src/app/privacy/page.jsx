"use client";
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-16 lg:px-32 text-gray-800">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10 border border-gray-200">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-2">
          Privacy Policy
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>

        <p className="text-gray-600 text-center mb-12">
          <strong>Effective Date:</strong> October 2025
        </p>

        <p className="text-lg mb-6">
          Welcome to <strong>Unifost Education Pvt. Ltd.</strong> (“Unifost”, also referred
          to as “University for Students”). We value your trust and are committed
          to protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your personal information when you access
          or use our website, mobile application, or any other online education
          services (collectively referred to as the “Platform”).
        </p>

        <p className="text-lg mb-8">
          By using Unifost’s services, you agree to the terms outlined in this Privacy Policy.
          If you do not agree, please refrain from using our Platform.
        </p>

        {/* Section 1 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            1. Information We Collect
          </h2>
          <div className="w-78 h-1 bg-blue-500 mb-4 rounded-full"></div>

          <h3 className="text-xl font-semibold mb-2">a. Personal Information</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Mobile Number</li>
            <li>Gender (optional)</li>
            <li>Address (City, State, Country)</li>
            <li>Educational Qualification</li>
            <li>Payment Information (processed securely via third-party payment gateways)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">b. Non-Personal Information</h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Device type and browser details</li>
            <li>IP address and approximate location</li>
            <li>Date and time of access</li>
            <li>Usage patterns and clickstream data</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">c. Cookies and Tracking Technologies</h3>
          <p className="text-lg mb-6">
            We use cookies and similar technologies to enhance your user experience,
            remember your preferences, and analyze Platform performance.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            2. How We Use Your Information
          </h2>
          <div className="w-100 h-1 bg-blue-500 mb-4 rounded-full"></div>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>To create and manage your user or student account</li>
            <li>To provide access to courses, educational materials, and other resources</li>
            <li>To process enrollments and payments</li>
            <li>To send confirmation emails, updates, and notifications</li>
            <li>To respond to your queries, feedback, or support requests</li>
            <li>To improve our website, courses, and overall user experience</li>
            <li>To comply with applicable legal and regulatory obligations</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            3. Sharing of Information
          </h2>
          <div className="w-78 h-1 bg-blue-500 mb-4 rounded-full"></div>
          <p className="text-lg mb-6">
            We do not sell, rent, or trade your personal data. However, we may share
            limited information with:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Trusted Service Providers (payment processors, hosting providers, etc.)</li>
            <li>Government or Regulatory Authorities, if required by law</li>
            <li>Affiliated Institutions or Academic Partners for certification or accreditation</li>
          </ul>
          <p className="text-lg mb-8">
            All third-party partners are contractually bound by strict confidentiality
            and data protection obligations.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">4. Data Security</h2>
          <div className="w-50 h-1 bg-blue-500 mb-4 rounded-full"></div>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Secure Sockets Layer (SSL) encryption</li>
            <li>Firewalls and secure server infrastructure</li>
            <li>Restricted internal access to personal data</li>
          </ul>
          <p className="text-lg mb-8">
            While we take all reasonable precautions, no online platform is completely secure.
            Please protect your account credentials and use strong passwords.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">5. Your Rights</h2>
          <div className="w-45 h-1 bg-blue-500 mb-4 rounded-full"></div>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Access and review your personal data</li>
            <li>Request correction or deletion of your information</li>
            <li>Withdraw consent for data processing</li>
            <li>Request details on how your data is being used</li>
          </ul>
          <p className="text-lg mb-8">
            To exercise these rights, contact us at{" "}
            <a href="mailto:info@unifostedu.com" className="text-blue-600 underline">
              info@unifostedu.com
            </a>
            .
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">6. Data Retention</h2>
          <div className="w-55 h-1 bg-blue-500 mb-4 rounded-full"></div>
          <p className="text-lg mb-8">
            We retain your personal data only for as long as necessary to fulfill educational,
            administrative, and legal obligations. Once expired, your data will be securely
            deleted or anonymized.
          </p>
        </div>

        {/* Section 7 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">7. Children’s Privacy</h2>
          <div className="w-60 h-1 bg-blue-500 mb-4 rounded-full"></div>
          <p className="text-lg mb-8">
            Our Platform is intended for users aged 16 years and above. We do not knowingly
            collect information from children below this age. If discovered, such data will
            be deleted promptly.
          </p>
        </div>

        {/* Section 8 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">8. Third-Party Links</h2>
          <div className="w-60 h-1 bg-blue-500 mb-4 rounded-full"></div>
          <p className="text-lg mb-8">
            Our Platform may include links to third-party websites or educational institutions.
            Unifost is not responsible for their privacy practices or content. Please review
            their respective privacy policies before interacting.
          </p>
        </div>

        {/* Section 9 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">9. Updates to This Policy</h2>
          <div className="w-75 h-1 bg-blue-500 mb-4 rounded-full"></div>
          <p className="text-lg mb-8">
            We may update this Privacy Policy periodically to reflect new practices or legal
            changes. The latest version will always be available on this page.
          </p>
        </div>

        {/* Section 10 */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">10. Contact Us</h2>
          <div className="w-45 h-1 bg-blue-500 mb-4 rounded-full"></div>
          <div className="text-lg space-y-1">
            <p>📍 A Block, Sector 16, Noida (U.P.), India</p>
            <p>
              📧{" "}
              <a href="mailto:info@unifostedu.com" className="text-blue-600 underline">
                info@unifostedu.com
              </a>
            </p>
            <p>
              🌐{" "}
              <a href="https://www.unifost.com" className="text-blue-600 underline">
                www.unifost.com
              </a>
            </p>
            <p>📞 +91 70428 67717</p>
          </div>
        </div>
      </div>
    </div>
  );
}
