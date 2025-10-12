import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Resume({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-cyan-400 hover:text-white transition-colors"
        >
          <FaArrowLeft /> Back to Portfolio
        </motion.button>

        {/* Header with Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="relative w-32 h-32 mx-auto mb-4">
            <img
              src="/assets/images/rishi_image.jpg"
              alt="Rishi Gupta"
              className="w-full h-full object-cover rounded-full border-4 border-cyan-400 shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Rishi Gupta
          </h1>
          <p className="text-xl text-gray-300 mb-4">DevOps Engineer</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1"><FaEnvelope /> rishigupta1999.rg@gmail.com</span>
            <span className="flex items-center gap-1"><FaPhone /> +91 7007509087</span>
            <span className="flex items-center gap-1"><FaMapMarkerAlt /> Gurugram, Haryana, India</span>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://www.linkedin.com/in/devopsrishi" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://github.com/Bunnyrishi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
              <FaGithub className="text-xl" />
            </a>
          </div>
        </motion.div>

        {/* Resume Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          {/* Summary */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-400/30 pb-2">Professional Summary</h2>
            <p className="text-gray-300 leading-relaxed">
              Dynamic DevOps Engineer with 3+ years of experience in managing migrations, deployments, and automation.
              Skilled in Azure DevOps, Jenkins, AWS, Terraform, Docker, Kubernetes, and CI/CD pipelines.
              Proven track record of reducing deployment times, optimizing costs, and implementing robust monitoring solutions.
            </p>
          </motion.section>

          {/* Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-purple-400 mb-4 border-b border-purple-400/30 pb-2">Professional Experience</h2>
            
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">DevOps Engineer</h3>
                  <p className="text-cyan-300">Mobifly</p>
                </div>
                <span className="text-gray-400 text-sm">Aug 2023 - Present</span>
              </div>
              <p className="text-gray-300 mb-3">
                Led CI/CD migration from Jenkins to Azure DevOps for PwC across AWS & Azure. 
                Automated infrastructure with Terraform and containerized deployments via Docker and Kubernetes.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Migrated 50+ applications from Jenkins to Azure DevOps</li>
                <li>Reduced deployment time by 60% through automation</li>
                <li>Implemented Infrastructure as Code using Terraform</li>
                <li>Managed multi-cloud environments (AWS & Azure)</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">DevOps Engineer</h3>
                  <p className="text-cyan-300">TechTree IT System</p>
                </div>
                <span className="text-gray-400 text-sm">May 2022 - Jul 2023</span>
              </div>
              <p className="text-gray-300 mb-3">
                Managed AWS infrastructure, Kubernetes clusters, and Jenkins CI/CD pipelines. 
                Enhanced monitoring with Prometheus and Grafana.
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Managed 20+ Kubernetes clusters across environments</li>
                <li>Implemented comprehensive monitoring solutions</li>
                <li>Optimized CI/CD pipelines for faster deployments</li>
                <li>Reduced infrastructure costs by 30%</li>
              </ul>
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-emerald-400 mb-4 border-b border-emerald-400/30 pb-2">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cloud Platforms</h3>
                <p className="text-gray-300">AWS, Microsoft Azure</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Containerization</h3>
                <p className="text-gray-300">Docker, Kubernetes, Helm</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">CI/CD Tools</h3>
                <p className="text-gray-300">Jenkins, Azure DevOps, GitLab CI</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Infrastructure as Code</h3>
                <p className="text-gray-300">Terraform, CloudFormation</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Monitoring</h3>
                <p className="text-gray-300">Prometheus, Grafana, ELK Stack</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Programming</h3>
                <p className="text-gray-300">Python, Bash, PowerShell, YAML</p>
              </div>
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-pink-400 mb-4 border-b border-pink-400/30 pb-2">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Master of Computer Applications (MCA)</h3>
                <p className="text-gray-300">Computer Science & Engineering</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Bachelor's Degree</h3>
                <p className="text-gray-300">Information Technology</p>
              </div>
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 border-b border-yellow-400/30 pb-2">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-2">
              <p className="text-gray-300">• AWS Cloud Essentials</p>
              <p className="text-gray-300">• LinkedIn DevOps Certifications</p>
              <p className="text-gray-300">• Docker & Kubernetes</p>
              <p className="text-gray-300">• Terraform Infrastructure</p>
              <p className="text-gray-300">• Jenkins CI/CD</p>
              <p className="text-gray-300">• DevSecOps Fundamentals</p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}