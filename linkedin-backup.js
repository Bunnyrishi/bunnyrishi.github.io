// LinkedIn Backup Component - NOT IN USE
// This is the old LinkedIn clone component that was used to bypass authwall issues
// Keeping for reference but not actively used since we now link to real LinkedIn profile

import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';

const LinkedInProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <FaArrowLeft />
              <span>Back to Portfolio</span>
            </a>
            <FaLinkedin className="text-2xl text-blue-600" />
            <span className="text-xl font-semibold">LinkedIn Profile</span>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Notice Banner */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>Note:</strong> This is a profile clone created to bypass LinkedIn's authwall restrictions in certain regions. 
                For the most up-to-date information, please visit my actual LinkedIn profile.
              </p>
            </div>
          </div>
        </div>

        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-800"></div>
          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 mb-4">
              <img
                src="/assets/images/rishi_image.jpg"
                alt="Rishi Gupta"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4 md:mb-0"
              />
              <div className="md:ml-6 flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Rishi Kumar Gupta</h1>
                <p className="text-xl text-gray-700 mb-2">DevOps Engineer</p>
                <p className="text-gray-600 mb-2">Gurugram, Haryana, India</p>
                <p className="text-blue-600 font-medium">500+ connections</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">
            Experienced DevOps Engineer with 3+ years of expertise in cloud infrastructure, CI/CD automation, 
            and containerization. Specialized in AWS & Azure cloud platforms, Terraform infrastructure as code, 
            Kubernetes orchestration, and Jenkins/Azure DevOps pipelines. Passionate about building scalable, 
            reliable systems that accelerate software delivery and improve operational efficiency.
          </p>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
          
          <div className="border-l-2 border-gray-200 pl-4 ml-2">
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full -ml-6 mr-3"></div>
                <h3 className="text-lg font-semibold text-gray-900">DevOps Engineer</h3>
              </div>
              <p className="text-blue-600 font-medium mb-1">Mobifly</p>
              <p className="text-gray-600 text-sm mb-3">Aug 2023 - Present · Full-time</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Led CI/CD migration from Jenkins to Azure DevOps for PwC across AWS & Azure</li>
                <li>• Migrated 50+ applications with 60% deployment time reduction</li>
                <li>• Implemented Infrastructure as Code using Terraform</li>
                <li>• Managed multi-cloud environments and containerized deployments</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full -ml-6 mr-3"></div>
                <h3 className="text-lg font-semibold text-gray-900">DevOps Engineer</h3>
              </div>
              <p className="text-blue-600 font-medium mb-1">TechTree IT System</p>
              <p className="text-gray-600 text-sm mb-3">May 2022 - Jul 2023 · Full-time</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Managed AWS infrastructure and Kubernetes clusters</li>
                <li>• Enhanced monitoring with Prometheus and Grafana</li>
                <li>• Optimized CI/CD pipelines using Jenkins</li>
                <li>• Reduced infrastructure costs by 30%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'AWS', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'Jenkins', 
              'Azure DevOps', 'Prometheus', 'Grafana', 'Python', 'Bash', 'Git'
            ].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-gray-600" />
              <span className="text-gray-700">rishigupta1999.rg@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-gray-600" />
              <span className="text-gray-700">+91 7007509087</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-gray-600" />
              <span className="text-gray-700">Gurugram, Haryana, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInProfile;