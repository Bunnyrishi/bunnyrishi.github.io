import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaDownload, FaExternalLinkAlt, FaTimes, FaBars, FaMapMarkerAlt } from "react-icons/fa";
import { SiAmazonaws, SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiAzuredevops, SiPrometheus, SiGrafana } from "react-icons/si";
import emailjs from '@emailjs/browser';
import LinkedInProfile from './LinkedInProfile';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCert, setSelectedCert] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const form = useRef();

  const certificates = [
    { name: "AWS Cloud Essentials", image: "/assets/certificates/AWS_CloudEssentials-Badge.jpg" },
    { name: "AWS Solutions Architect", image: "/assets/certificates/AWS_Solution-virtualExperience.jpg" },
    { name: "DevSecOps Fundamentals", image: "/assets/certificates/LinkedIn-DevSecOps.jpg" },
    { name: "Docker Mastery", image: "/assets/certificates/LinkedIn-Docker.jpg" },
    { name: "Jenkins CI/CD", image: "/assets/certificates/LinkedIn-Jenkins.jpg" },
    { name: "Kubernetes Administration", image: "/assets/certificates/LinkedIn-Kubernetes.jpg" },
    { name: "Terraform Infrastructure", image: "/assets/certificates/LinkedIn-Terraform.jpg" },
    { name: "Helm Package Manager", image: "/assets/certificates/LinkedIn-Helm.jpg" },
    { name: "DevOps Complete Course", image: "/assets/certificates/Udemy_DevOps-BeginnerToAdvance.jpg" },
    { name: "Accenture Developer Program", image: "/assets/certificates/Accenture_Developer-VirtualExperience.jpg" },
    { name: "CloudThat Custom ADO", image: "/assets/certificates/CloudThat-CustomADO.jpg" },
    { name: "AWS Event Attendance", image: "/assets/certificates/AWS_Awesome_Atttendance.jpg" }
  ];

  const skills = [
    { name: "AWS", icon: SiAmazonaws, level: 90, color: "#FF9900" },
    { name: "Docker", icon: SiDocker, level: 95, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, level: 85, color: "#326CE5" },
    { name: "Terraform", icon: SiTerraform, level: 90, color: "#7B42BC" },
    { name: "Jenkins", icon: SiJenkins, level: 88, color: "#D33833" },
    { name: "Azure DevOps", icon: SiAzuredevops, level: 85, color: "#0078D4" },
    { name: "Prometheus", icon: SiPrometheus, level: 80, color: "#E6522C" },
    { name: "Grafana", icon: SiGrafana, level: 82, color: "#F46800" }
  ];

  const projects = [
    {
      title: "Multi-Cloud Infrastructure Automation",
      description: "Automated infrastructure provisioning across AWS and Azure using Terraform modules with 99.9% uptime and 50% cost reduction.",
      technologies: ["Terraform", "AWS", "Azure", "Docker"],
      github: "https://github.com/Bunnyrishi/terraform-multi-cloud",
      live: "/demo-infra.html",
      duration: "3 months",
      team: "Solo Project",
      metrics: "99.9% uptime, 50% cost reduction"
    },
    {
      title: "CI/CD Pipeline Migration",
      description: "Migrated legacy Jenkins pipelines to Azure DevOps with enhanced security, achieving 60% faster deployments.",
      technologies: ["Azure DevOps", "Jenkins", "Docker", "Kubernetes"],
      github: "https://github.com/Bunnyrishi/cicd-migration",
      live: "/pipeline-demo.html",
      duration: "2 months",
      team: "Solo Project",
      metrics: "87% faster deployments, 50+ apps migrated"
    },
    {
      title: "Kubernetes Monitoring Stack",
      description: "Implemented comprehensive monitoring and alerting for Kubernetes clusters with real-time dashboards.",
      technologies: ["Prometheus", "Grafana", "Kubernetes", "Helm"],
      github: "https://github.com/Bunnyrishi/k8s-monitoring",
      live: "/monitoring-demo.html",
      duration: "1 month",
      team: "Solo Project",
      metrics: "20+ clusters monitored, 99.5% alert accuracy"
    },
    {
      title: "Server Migration Project",
      description: "Migrated 20+ applications from non-prod to prod Linux servers (x86 to ARM64) and Windows 2019 to 2022. Zero downtime migration with performance optimization.",
      technologies: ["Linux", "ARM64", "Windows Server 2022", "Docker", "PowerShell"],
      github: "https://github.com/Bunnyrishi/server-migration",
      live: "/migration-demo.html",
      duration: "2 months",
      team: "Solo Project",
      metrics: "20+ servers migrated, 0% downtime, 30% performance boost, 25% cost reduction"
    },
    {
      title: "DevOps Portfolio Website",
      description: "Modern React portfolio with LinkedIn clone to bypass authwall issues. Features EmailJS integration and GitHub Pages deployment.",
      technologies: ["React", "Tailwind CSS", "EmailJS", "GitHub Pages"],
      github: "https://github.com/Bunnyrishi/bunnyrishi.github.io",
      live: "https://bunnyrishi.github.io",
      duration: "1 week",
      team: "Solo Project",
      metrics: "100% responsive, LinkedIn authwall bypass"
    }
  ];

  const experiences = [
    {
      company: "Mobifly",
      position: "DevOps Engineer",
      duration: "Aug 2023 - Present",
      description: "Led CI/CD migration from Jenkins to Azure DevOps for PwC across AWS & Azure. Automated infrastructure with Terraform and containerized deployments.",
      achievements: [
        "Migrated 50+ applications from Jenkins to Azure DevOps",
        "Reduced deployment time by 60% through automation",
        "Implemented Infrastructure as Code using Terraform",
        "Managed multi-cloud environments (AWS & Azure)"
      ]
    },
    {
      company: "TechTree IT System",
      position: "DevOps Engineer",
      duration: "May 2022 - Jul 2023",
      description: "Managed AWS infrastructure, Kubernetes clusters, and Jenkins CI/CD pipelines. Enhanced monitoring with Prometheus and Grafana.",
      achievements: [
        "Managed 20+ Kubernetes clusters across environments",
        "Implemented comprehensive monitoring solutions",
        "Optimized CI/CD pipelines for faster deployments",
        "Reduced infrastructure costs by 30%"
      ]
    }
  ];

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getProjectImage = (title) => {
    const images = {
      'Multi-Cloud Infrastructure Automation': 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop&crop=center")', // Cloud/Tech
      'CI/CD Pipeline Migration': 'url("https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=200&fit=crop&crop=center")', // Code/Pipeline
      'Kubernetes Monitoring Stack': 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center")', // Monitoring/Dashboard
      'Server Migration Project': 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop&crop=center")', // Server/Infrastructure
      'DevOps Portfolio Website': 'url("https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=200&fit=crop&crop=center")' // Web Development
    };
    return images[title] || 'none';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await emailjs.sendForm(
        'service_ir3suz9',
        'template_czxij9q',
        form.current,
        '1bhY8-ykAwGVZNtXN'
      );
      setSubmitStatus('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('Failed to send message. Please try again or contact me directly.');
    }
    
    setIsSubmitting(false);
  };

  const SkillCircle = ({ skill }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (skill.level / 100) * circumference;

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="transparent"
            />
            <motion.circle
              cx="50"
              cy="50"
              r={radius}
              stroke={skill.color}
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <skill.icon className="text-3xl" style={{ color: skill.color }} />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-800">{skill.name}</h3>
        <p className="text-sm text-gray-600">{skill.level}%</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-xl border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 border ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-white shadow-inner border-blue-200'
                      : 'text-gray-700 bg-white hover:text-blue-600 hover:bg-white border-gray-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 bg-white rounded-lg border border-gray-200 shadow-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaBars className="text-xl text-gray-800" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 py-4 border-t border-gray-200 bg-white"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-700 bg-white border border-gray-200 hover:text-blue-600 hover:bg-blue-50 rounded-lg mb-2"
                >
                  {item.label}
                </button>
              ))}
            </motion.nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 pt-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/15 rounded-full blur-2xl animate-ping"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 relative z-10">
                Hi, I'm <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent animate-pulse">Rishi Gupta</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-cyan-200 mb-6 font-semibold animate-bounce">⚙️ DevOps Engineer</h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed relative z-10">
                🚀 Transforming infrastructure with cloud automation, CI/CD excellence, and scalable solutions. 
                ☁️ 3+ years of experience in AWS, Azure, Kubernetes, and modern DevOps practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-2xl transform hover:scale-110 transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 relative z-10"
                >
                  💬 Contact Me
                </button>
                <a
                  href="/Rishi_Gupta_Resume.pdf"
                  download="Rishi_Gupta_Resume.pdf"
                  className="border-2 border-cyan-300 text-cyan-300 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 hover:text-blue-900 transition-all duration-300 flex items-center gap-2 relative z-10 hover:shadow-xl transform hover:scale-105"
                >
                  <FaDownload /> 📄 Download Resume
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-2 hover:scale-105 transition-all duration-500">
                  <img
                    src="/assets/images/rishi_image.jpg"
                    alt="Rishi Gupta"
                    className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <span className="text-2xl">👋</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent mb-4">🚀 About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dynamic DevOps Engineer with 3+ years of hands-on experience in cloud infrastructure, 
              automation, and CI/CD pipeline management. Passionate about transforming traditional 
              development workflows into efficient, scalable, and secure cloud-native solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/assets/images/rishi_image.jpg"
                alt="Rishi Gupta"
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Journey</h3>
                <p className="text-gray-600 leading-relaxed">
                  Specialized in multi-cloud environments (AWS & Azure), container orchestration with 
                  Kubernetes, and Infrastructure as Code using Terraform. Proven track record of reducing 
                  deployment times, optimizing costs, and implementing robust monitoring solutions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-slate-600 to-blue-600 rounded-lg text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <h4 className="text-2xl font-bold">🚀 50+</h4>
                  <p className="text-slate-100">Successful Deployments</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <h4 className="text-2xl font-bold">⚡ 99.9%</h4>
                  <p className="text-blue-100">Uptime Achieved</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <h4 className="text-2xl font-bold">📈 60%</h4>
                  <p className="text-emerald-100">Faster CI/CD Pipelines</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <h4 className="text-2xl font-bold text-white">⚓ 20+</h4>
                  <p className="text-white font-medium">K8s Clusters Managed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-800 via-gray-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 relative z-10">⚡ Technical Skills</h2>
            <p className="text-lg text-slate-300 relative z-10">🛠️ Technologies I work with</p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-blue-300 relative z-10"
              >
                <SkillCircle skill={skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent mb-4">🚀 Featured Projects</h2>
            <p className="text-lg text-gray-600">Some of my recent work</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1 overflow-hidden border-2 border-transparent hover:border-gradient-to-r hover:border-cyan-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 relative" style={{
                  backgroundImage: getProjectImage(project.title),
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay'
                }}>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded text-xs font-medium text-gray-700">
                    {project.duration}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs opacity-90">{project.team}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-2 mb-4">
                    <p className="text-sm text-green-700 font-medium">📊 {project.metrics}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors text-sm"
                    >
                      <FaGithub /> View Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent mb-4">💼 Work Experience</h2>
            <p className="text-lg text-gray-600">My professional journey</p>
          </motion.div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 transform hover:scale-102 border-l-4 border-blue-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                    <h4 className="text-xl text-blue-600">{exp.company}</h4>
                  </div>
                  <span className="text-gray-500 font-medium bg-gray-100 px-4 py-2 rounded-full">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="text-green-500 mt-1">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Colleagues Say</h2>
            <p className="text-lg text-gray-600">Professional recommendations and feedback</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">TL</div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Team Lead</h4>
                  <p className="text-gray-600 text-sm">Mobifly Technologies</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Rishi's expertise in Azure DevOps migration was exceptional. He successfully migrated 50+ applications 
                with zero downtime and improved our deployment efficiency by 60%. His attention to detail and 
                problem-solving skills are outstanding."
              </p>
              <div className="flex text-yellow-400">
                {'★'.repeat(5)}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-600">PM</div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Project Manager</h4>
                  <p className="text-gray-600 text-sm">TechTree IT System</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Working with Rishi on Kubernetes infrastructure was a game-changer. He managed 20+ clusters 
                flawlessly and implemented monitoring solutions that gave us complete visibility. 
                His DevOps knowledge is truly impressive."
              </p>
              <div className="flex text-yellow-400">
                {'★'.repeat(5)}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <p className="text-lg text-gray-600">Professional achievements and credentials</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="aspect-square bg-gray-100">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 text-center">
                    {cert.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-700 via-blue-800 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-slate-400/10 rounded-full blur-2xl animate-bounce"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 relative z-10">💬 Get In Touch</h2>
            <p className="text-lg text-white/90 relative z-10">🚀 Let's discuss your next project</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <a href="mailto:rishigupta1999.rg@gmail.com" className="text-gray-600 hover:text-blue-600">
                    rishigupta1999.rg@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <a href="tel:+917007509087" className="text-gray-600 hover:text-green-600">
                    +91 7007509087
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Gurugram, Haryana, India</p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/devopsrishi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg animate-bounce"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Bunnyrishi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg animate-bounce"
                >
                  <FaGithub />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white/20 relative z-10"
            >
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center p-4 rounded-lg border ${
                      submitStatus.includes('success') 
                        ? 'bg-green-50 text-green-700 border-green-200' 
                        : 'bg-red-50 text-red-700 border-red-200'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg">
                        {submitStatus.includes('success') ? '✓' : '⚠'}
                      </span>
                      {submitStatus}
                    </div>
                  </motion.div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">{selectedCert.name}</h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <img
              src={selectedCert.image}
              alt={selectedCert.name}
              className="w-full rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2025 Rishi Gupta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/linkedin" element={<LinkedInProfile />} />
      </Routes>
    </Router>
  );
}