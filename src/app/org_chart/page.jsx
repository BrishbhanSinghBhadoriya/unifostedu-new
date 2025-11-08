'use client';

import React from "react";

function OrganizationStructure() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      {/* Company Logo */}
      <div className="text-center mb-10">
        <img
          src="https://res.cloudinary.com/didkrwhbu/image/upload/v1762327863/uni_uyjow6.webp"
          alt="Company Logo"
          className="w-32 h-32 mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-indigo-700 mb-2">
          Organization Structure
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A visual representation of the company hierarchy from Directors to Team Members.
        </p>
      </div>

      {/* Directors Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-4xl mb-10">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4 text-center">
          Directors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="text-center p-4 border rounded-lg">
            <h3 className="text-lg font-bold">Mr. Aman Pawar</h3>
            <p className="text-gray-500">email</p>
            <p className="text-gray-500">phone</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <h3 className="text-lg font-bold">Mr. Priyansh Mishra</h3>
            <p className="text-gray-500">email</p>
            <p className="text-gray-500">phone</p>
          </div>
        </div>
      </div>

      {/* Managers Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-5xl mb-10">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4 text-center">
          Managers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-4 border rounded-lg">
            <h3 className="text-lg font-bold">Mr. Atul Kumar</h3>
            <p className="text-gray-500">Sales Manager</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <h3 className="text-lg font-bold">Mr. Shivam Kumar Jha</h3>
            <p className="text-gray-500">IT Manager</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <h3 className="text-lg font-bold">Ms. Aashtha Sharma</h3>
            <p className="text-gray-500">HR</p>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-6xl mb-10">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4 text-center">
          Team Members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          <div className="text-center p-4 border rounded-lg">
            <h3 className="text-lg font-bold">Rahul Mehta</h3>
            <p className="text-gray-500">Frontend Developer</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <h3 className="text-lg font-bold">Neha Gupta</h3>
            <p className="text-gray-500">Backend Developer</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <h3 className="text-lg font-bold">Karan Singh</h3>
            <p className="text-gray-500">UI/UX Designer</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <h3 className="text-lg font-bold">Pooja Nair</h3>
            <p className="text-gray-500">Marketing Executive</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </footer>
    </div>
  );
}

export default OrganizationStructure;
