import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt, FaPhone } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-2">Rishi Gupta</h1>
        <p className="text-lg text-gray-600 mb-6">
          DevOps Engineer | Cloud | Automation | CI/CD | Terraform | Kubernetes
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="https://www.linkedin.com/in/devopsrishi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl shadow-md bg-white hover:bg-gray-100 flex items-center gap-2 border"
          >
            <FaLinkedin className="text-blue-600" /> LinkedIn
          </a>

          <a
            href="https://github.com/Bunnyrishi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl shadow-md bg-white hover:bg-gray-100 flex items-center gap-2 border"
          >
            <FaGithub className="text-gray-700" /> GitHub
          </a>

          <a
            href="#resume"
            className="px-6 py-3 rounded-2xl shadow-md bg-white hover:bg-gray-100 flex items-center gap-2 border"
          >
            <FaFileAlt className="text-green-600" /> Resume
          </a>
        </div>
      </motion.div>

      <motion.section
        id="resume"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 mb-16"
      >
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Resume</h2>
        <p className="mb-4">
          Dynamic <strong>DevOps Engineer</strong> with 3+ years of experience in managing migrations, deployments, and automation.
          Skilled in <strong>Azure DevOps, Jenkins, AWS, Terraform, Docker, Kubernetes</strong>, and CI/CD.
        </p>
        <p className="mb-4">
          <strong>Mobifly (Aug 2023 - Present):</strong> Led CI/CD migration from Jenkins to Azure DevOps for PwC across AWS & Azure.
          Automated infrastructure with Terraform and containerized deployments via Docker and Kubernetes.
        </p>
        <p className="mb-4">
          <strong>TechTree IT System (May 2022 - Jul 2023):</strong> Managed AWS infrastructure, Kubernetes clusters, and Jenkins CI/CD pipelines.
          Enhanced monitoring with Prometheus and Grafana.
        </p>
        <p>
          <strong>Certifications:</strong> AWS Cloud Essentials, LinkedIn DevOps Certifications (Terraform, Jenkins, Docker, DevSecOps)
        </p>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center"
      >
        <p className="text-lg font-medium mb-3">Contact</p>
        <div className="flex flex-col items-center gap-2">
          <a href="mailto:rishigupta1999.rg@gmail.com" className="flex items-center gap-2 text-blue-600 hover:underline">
            <FaEnvelope /> rishigupta1999.rg@gmail.com
          </a>
          <a href="tel:+917007509087" className="flex items-center gap-2 text-blue-600 hover:underline">
            <FaPhone /> +91 7007509087
          </a>
          <p className="text-gray-600">Gurugram, Haryana, India</p>
        </div>
        <p className="text-gray-400 mt-6">© 2025 Rishi Gupta. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
