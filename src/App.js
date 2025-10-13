import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaDownload, FaExternalLinkAlt, FaTimes, FaBars, FaMapMarkerAlt } from "react-icons/fa";
import { SiAmazonaws, SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiAzuredevops, SiPrometheus, SiGrafana } from "react-icons/si";
import emailjs from '@emailjs/browser';

export default function App() {
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
      github: "https://github.com/Bunnyrishi",
      live: "#"
    },
    {
      title: "CI/CD Pipeline Migration",
      description: "Migrated legacy Jenkins pipelines to Azure DevOps with enhanced security, achieving 60% faster deployments.",
      technologies: ["Azure DevOps", "Jenkins", "Docker", "Kubernetes"],
      github: "https://github.com/Bunnyrishi",
      live: "#"
    },
    {
      title: "Kubernetes Monitoring Stack",
      description: "Implemented comprehensive monitoring and alerting for Kubernetes clusters with real-time dashboards.",
      technologies: ["Prometheus", "Grafana", "Kubernetes", "Helm"],
      github: "https://github.com/Bunnyrishi",
      live: "#"
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Rishi Gupta
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaBars className="text-xl text-gray-700" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 py-4 border-t"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
            </motion.nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Rishi Gupta</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">DevOps Engineer</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transforming infrastructure with cloud automation, CI/CD excellence, and scalable solutions. 
                3+ years of experience in AWS, Azure, Kubernetes, and modern DevOps practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Contact Me
                </button>
                <a
                  href="/assets/resume.pdf"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <FaDownload /> Download CV
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
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-2">
                  <img
                    src="/assets/images/rishi_image.jpg"
                    alt="Rishi Gupta"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-2xl">👋</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
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
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h4 className="text-2xl font-bold text-blue-600">50+</h4>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <h4 className="text-2xl font-bold text-purple-600">3+</h4>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-lg text-gray-600">Technologies I work with</p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">Some of my recent work</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
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
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
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
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
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
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">Let's discuss your next project</p>
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
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <a href="mailto:rishigupta1999.rg@gmail.com" className="text-gray-600 hover:text-blue-600">
                    rishigupta1999.rg@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FaPhone className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <a href="tel:+917007509087" className="text-gray-600 hover:text-green-600">
                    +91 7007509087
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-purple-600" />
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
                  className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Bunnyrishi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
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
              className="bg-white rounded-xl shadow-lg p-8"
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
                  <div className={`text-center p-3 rounded-lg ${
                    submitStatus.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {submitStatus}
                  </div>
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