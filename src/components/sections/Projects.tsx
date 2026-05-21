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
    title: "Smart Attendance System",
    description: "Developed a secure attendance management system with JWT authentication, PostgreSQL architecture, duplicate attendance prevention, Docker deployment, and real-time dashboard.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    github: "#",
    live: "#",
    image: "/project1.jpg" // Placeholder path, can use CSS gradients if no image
  },
  {
    title: "Smart Face Attendance System",
    description: "Built a real-time AI-powered face recognition attendance system integrating OpenCV, FaceNet, cloud synchronization, and embedded AI experimentation workflows.",
    tech: ["Python", "OpenCV", "FaceNet", "Firebase"],
    github: "#",
    live: "#"
  },
  {
    title: "Smart Biometric Attendance",
    description: "Designed an IoT biometric attendance system using fingerprint authentication, Firebase cloud synchronization, LCD interfaces, and real-time attendance logging.",
    tech: ["ESP32", "Firebase", "Embedded C"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple text-glow">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-electric-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-electric-blue/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col"
            >
              {/* Image Placeholder / Gradient */}
              <div className="h-48 w-full bg-gradient-to-br from-navy-800 to-navy-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-electric-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-purple/20 via-transparent to-transparent" />
                
                {/* Simulated geometric design instead of real images for now */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/20 rounded-full group-hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center">
                  <div className="w-16 h-16 border border-electric-blue/40 rounded-full group-hover:rotate-90 transition-transform duration-1000" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
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
                  <a href={project.github} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                    <GithubIcon size={18} /> Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                    <ExternalLink size={18} /> Demo
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
