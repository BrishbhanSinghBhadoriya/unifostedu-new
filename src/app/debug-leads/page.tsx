'use client';

import { useState } from 'react';

export default function DebugLeadsPage() {
  const [testResult, setTestResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Test User',
    mobile: '9876543210',
    email: 'test@unifost.com',
    location: 'Delhi',
    university: 'Amity University Online',
    course: 'MBA'
  });

  const testCRMConnectivity = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/test-crm');
      const data = await response.json();
      setTestResult(data);
    } catch (error) {
      setTestResult({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    }
    setLoading(false);
  };

  const testEnquirySubmission = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/v1/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setTestResult(data);
    } catch (error) {
      setTestResult({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Unifost Leads Debug Panel
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CRM Connectivity Test */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              CRM Connectivity Test
            </h2>
            <p className="text-gray-600 mb-4">
              Test if the CRM API is reachable and accepting leads.
            </p>
            <button
              onClick={testCRMConnectivity}
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Testing...' : 'Test CRM Connection'}
            </button>
          </div>

          {/* Enquiry Form Test */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Enquiry Form Test
            </h2>
            <div className="space-y-3 mb-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="University"
                value={formData.university}
                onChange={(e) => setFormData({...formData, university: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Course"
                value={formData.course}
                onChange={(e) => setFormData({...formData, course: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              onClick={testEnquirySubmission}
              disabled={loading}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Test Enquiry Submission'}
            </button>
          </div>
        </div>

        {/* Results */}
        {testResult && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Test Results
            </h2>
            <div className={`p-4 rounded-md ${testResult.success ? 'bg-green-100 border border-green-300' : 'bg-red-100 border border-red-300'}`}>
              <div className="flex items-center mb-2">
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${testResult.success ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className="font-semibold">
                  {testResult.success ? 'Success' : 'Failed'}
                </span>
              </div>
              <pre className="text-sm overflow-auto">
                {JSON.stringify(testResult, null, 2)}
              </pre>
            </div>
          </div>
        )}

        {/* Environment Info */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Environment Information
          </h2>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-semibold">Primary CRM API URL:</span> 
              <span className="ml-2 font-mono bg-gray-100 px-2 py-1 rounded">
                {process.env.NEXT_PUBLIC_CRM_API_URL || 'Not configured'}
              </span>
            </div>
            <div>
              <span className="font-semibold">Environment:</span> 
              <span className="ml-2">{process.env.NODE_ENV}</span>
            </div>
            <div>
              <span className="font-semibold">MongoDB:</span> 
              <span className="ml-2 text-green-600">Configured</span>
            </div>
          </div>
        </div>

        {/* CRM Status */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            CRM Integration Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-2">Primary CRM</h3>
              <div className="text-sm">
                <div className="flex items-center mb-1">
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 ${process.env.NEXT_PUBLIC_CRM_API_URL ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span>{process.env.NEXT_PUBLIC_CRM_API_URL ? 'Configured' : 'Not Configured'}</span>
                </div>
                <div className="text-gray-600 font-mono text-xs">
                  {process.env.NEXT_PUBLIC_CRM_API_URL || 'No URL set'}
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-2">NeoDove (Backup)</h3>
              <div className="text-sm">
                <div className="flex items-center mb-1">
                  <span className="inline-block w-2 h-2 rounded-full mr-2 bg-green-500"></span>
                  <span>Configured</span>
                </div>
                <div className="text-gray-600 text-xs">
                  Backup CRM system
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">
            Debugging Instructions
          </h2>
          <div className="text-blue-700 space-y-2">
            <p>1. <strong>Test CRM Connection:</strong> Click the "Test CRM Connection" button to verify if your CRM API is reachable.</p>
            <p>2. <strong>Test Enquiry Form:</strong> Fill the form and submit to test the complete lead flow.</p>
            <p>3. <strong>Check Console:</strong> Open browser developer tools to see detailed logs.</p>
            <p>4. <strong>Check Database:</strong> Verify if leads are being saved to MongoDB.</p>
            <p>5. <strong>Check CRM:</strong> Login to your CRM system to see if leads are appearing there.</p>
          </div>
        </div>
      </div>
    </div>
  );
}