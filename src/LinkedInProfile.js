import React from 'react';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';

export default function LinkedInProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <FaArrowLeft /> Back to Portfolio
          </button>
          <div className="text-xl font-semibold text-gray-900">LinkedIn Profile</div>
          <a
            href="/linkedin-profile.pdf"
            download="Rishi_Gupta_LinkedIn_Profile.pdf"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaDownload /> Download PDF
          </a>
        </div>
      </header>

      {/* PDF Viewer */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="/linkedin-profile.pdf"
            width="100%"
            height="800px"
            className="border-0"
            title="Rishi Gupta LinkedIn Profile"
          />
        </div>
      </div>
    </div>
  );
}