import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Privacy <span className="text-[#00ffe0]">Policy</span>
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              At UNIFOST, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, such as when you:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Fill out forms on our website</li>
              <li>Contact us for support or information</li>
              <li>Book demo sessions</li>
              <li>Subscribe to our newsletters</li>
              <li>Apply for courses or programs</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide and improve our services</li>
              <li>Communicate with you about our offerings</li>
              <li>Process your requests and applications</li>
              <li>Send you relevant information and updates</li>
              <li>Ensure the security of our platform</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with relevant authorities</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> info@unifostedu.com<br />
                <strong>Phone:</strong> +91 93547 35410<br />
                <strong>Address:</strong> Noida, Uttar Pradesh, India
              </p>
            </div>

            <p className="text-gray-600 mt-6 text-sm">
              This Privacy Policy was last updated on {new Date().toLocaleDateString()}. We may update this policy from time to time, and we will notify you of any material changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
