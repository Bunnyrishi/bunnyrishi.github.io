import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt, FaPhone } from "react-icons/fa";

/* Your photo */
const PLACEHOLDER_IMG = "/assets/images/rishi_image.jpg";

export default function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <motion.div
        className="w-full max-w-2xl text-center"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="glass rounded-2xl p-8 shadow-lg">
          <img
            src={PLACEHOLDER_IMG}
            alt="Rishi Gupta"
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white shadow-md"
          />

          <h1 className="mt-4 text-3xl font-extrabold">Rishi Gupta</h1>
          <p className="text-gray-600 mt-1">DevOps Engineer</p>
          <p className="text-gray-500 mt-2">Cloud • Automation • CI/CD • Terraform • Kubernetes</p>

          <div className="mt-6 flex flex-col gap-3 px-6">
            <a
              href="https://www.linkedin.com/in/devopsrishi"
              target="_blank"
              rel="noreferrer"
              className="btn flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white border"
            >
              <FaLinkedin className="text-blue-600" /> LinkedIn
            </a>

            <a
              href="https://github.com/Bunnyrishi"
              target="_blank"
              rel="noreferrer"
              className="btn flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white border"
            >
              <FaGithub className="text-gray-800" /> GitHub
            </a>

            <button
              onClick={() => setShowResume(true)}
              className="btn flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white border"
            >
              <FaFileAlt className="text-green-600" /> View Resume
            </button>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <p>Gurugram, Haryana, India • Open to remote & Delhi/NCR roles</p>
          </div>
        </div>

        {/* Resume modal / panel */}
        {showResume && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-start justify-center p-6"
          >
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setShowResume(false)}
            />
            <div className="relative z-10 max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-auto"
                 style={{ maxHeight: "90vh" }}>
              <div className="p-6 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold">Resume — Rishi Gupta</h2>
                <button
                  onClick={() => setShowResume(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  Close
                </button>
              </div>

              <div className="p-6 space-y-4">
                {/* Summary */}
                <section>
                  <h3 className="text-lg font-semibold">Profile</h3>
                  <p className="text-gray-700">
                    Dynamic DevOps Engineer with over 3 years of hands-on experience in migrations,
                    deployments and automation. Skilled with AWS, Azure, Terraform, Docker, Kubernetes,
                    Azure DevOps and Jenkins.
                  </p>
                </section>

                {/* Experience */}
                <section>
                  <h3 className="text-lg font-semibold">Experience</h3>

                  <div className="mt-3 space-y-3">
                    <div>
                      <div className="flex justify-between">
                        <strong>DevOps Engineer — Mobifly</strong>
                        <span className="text-sm text-gray-500">Aug 2023 — Present</span>
                      </div>
                      <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>Migrated CI/CD pipelines from Jenkins to Azure DevOps for enterprise clients (PwC).</li>
                        <li>Automated infrastructure provisioning using Terraform across AWS & Azure.</li>
                        <li>Managed Docker & Kubernetes deployments and integrated security scans (SonarQube, Veracode).</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between">
                        <strong>Systems Administrator — TechTree IT System</strong>
                        <span className="text-sm text-gray-500">May 2022 — Jul 2023</span>
                      </div>
                      <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>Managed AWS infrastructure and Kubernetes clusters; monitoring with Prometheus & Grafana.</li>
                        <li>Built and maintained Jenkins pipelines for multiple applications.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Projects */}
                <section>
                  <h3 className="text-lg font-semibold">Selected Projects</h3>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li><strong>PwC Multi-Cloud Migration:</strong> CI/CD + Terraform across Azure & AWS.</li>
                    <li><strong>Tata Starbucks:</strong> CI/CD automation with Jenkins improving release velocity.</li>
                    <li><strong>Defense Travel System (DTS):</strong> Monitoring, scaling, and security improvements on AWS.</li>
                  </ul>
                </section>

                {/* Certifications */}
                <section>
                  <h3 className="text-lg font-semibold">Certifications</h3>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    <li>AWS Cloud Essentials — May 2023</li>
                    <li>LinkedIn Learning: Jenkins, Terraform, Docker, DevSecOps</li>
                  </ul>
                </section>

                {/* Contact */}
                <section>
                  <h3 className="text-lg font-semibold">Contact</h3>
                  <div className="mt-2 space-y-1">
                    <a href="mailto:rishigupta1999.rg@gmail.com" className="flex items-center gap-2 text-blue-600">
                      <FaEnvelope /> rishigupta1999.rg@gmail.com
                    </a>
                    <a href="tel:+917007509087" className="flex items-center gap-2 text-blue-600">
                      <FaPhone /> +91 7007509087
                    </a>
                    <div className="text-gray-600">Gurugram, Haryana, India</div>
                  </div>
                </section>

                <div className="pt-4 border-t flex justify-between">
                  <div className="text-gray-500 text-sm">© 2025 Rishi Gupta</div>
                  <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/devopsrishi" target="_blank" rel="noreferrer" className="text-blue-600">LinkedIn</a>
                    <a href="https://github.com/Bunnyrishi" target="_blank" rel="noreferrer" className="text-blue-600">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}