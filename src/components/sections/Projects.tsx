"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    <path d="M12 18h-.01"></path>
  </svg>
);

const projects = [
  {
    title: "DriveMind AI",
    description: "AI-powered Google Drive discovery assistant built with FastAPI, LangChain, Streamlit, and the Google Drive API.",
    tech: ["Python", "FastAPI", "LangChain", "Streamlit"],
    github: "https://github.com/gop-i-krishnan/DriveMind-AI",
    accent: "rgba(0, 240, 255, 0.24)",
  },
  {
    title: "Smart Task Manager",
    description: "Full-stack productivity app with Flask, PostgreSQL, REST APIs, analytics tooling, and real-time SocketIO updates.",
    tech: ["Flask", "PostgreSQL", "REST APIs", "SocketIO"],
    github: "https://github.com/gop-i-krishnan/smart-task-manager",
    accent: "rgba(112, 0, 255, 0.24)",
  },
  {
    title: "Smart Attendance",
    description: "Attendance management platform focused on secure records, duplicate prevention, and practical backend workflows.",
    tech: ["Python", "Backend", "Auth", "Dashboard"],
    github: "https://github.com/gop-i-krishnan/smart-attendance",
    accent: "rgba(0, 255, 255, 0.2)",
  },
  {
    title: "Smart Face Attendance",
    description: "Computer-vision attendance system using face recognition workflows for real-time identity-based attendance capture.",
    tech: ["Python", "OpenCV", "Face Recognition", "AI"],
    github: "https://github.com/gop-i-krishnan/smart-face-attendance-pc-version",
    accent: "rgba(0, 240, 255, 0.2)",
  },
  {
    title: "Smart Biometric Attendance",
    description: "ESP32 biometric attendance system with fingerprint authentication, Firebase sync, Google Sheets, and device feedback.",
    tech: ["ESP32", "Firebase", "C++", "Google Sheets"],
    github: "https://github.com/gop-i-krishnan/SmartBiometricAttendanceSystem",
    accent: "rgba(112, 0, 255, 0.2)",
  },
  {
    title: "Music Institute Management",
    description: "Management system for music institute operations, built around practical admin workflows and backend data handling.",
    tech: ["Python", "Management System", "Web App"],
    github: "https://github.com/gop-i-krishnan/music-institute-management",
    accent: "rgba(255, 255, 255, 0.1)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 z-10 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple text-glow">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-electric-purple mx-auto rounded-full" />
          <a
            href="https://github.com/gop-i-krishnan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-white/70 transition-colors hover:border-electric-blue hover:text-white"
          >
            <GithubIcon size={18} /> GitHub Profile
          </a>
        </motion.div>

        <div className="grid gap-6 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group glass rounded-lg overflow-hidden border border-white/10 hover:border-electric-blue/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col"
            >
              {/* Image Placeholder / Gradient */}
              <div className="h-40 w-full bg-gradient-to-br from-navy-800 to-navy-900 relative overflow-hidden sm:h-48">
                <div className="absolute inset-0 bg-electric-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <div
                  className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at center, ${project.accent}, transparent 68%)`,
                  }}
                />
                
                {/* Simulated geometric design instead of real images for now */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/20 rounded-full group-hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center">
                  <div className="w-16 h-16 border border-electric-blue/40 rounded-full group-hover:rotate-90 transition-transform duration-1000" />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col sm:p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors sm:text-2xl">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-electric-blue/90 font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                    <GithubIcon size={18} /> Code
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                    <ExternalLink size={18} /> Repository
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
