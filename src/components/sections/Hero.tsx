"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Terminal } from "lucide-react";

const roles = [
  "AI Systems Developer",
  "Backend Engineer",
  "IoT Innovator",
  "Computer Vision Explorer",
  "Future Tech Builder",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 pb-16 pt-28 z-10 sm:px-6 md:pt-24">
      
      {/* Ambient glowing blobs */}
      <div className="absolute top-1/4 left-0 h-64 w-64 rounded-full bg-electric-purple/20 blur-[100px] mix-blend-screen animate-blob sm:left-1/4 sm:h-96 sm:w-96" />
      <div className="absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-electric-blue/20 blur-[100px] mix-blend-screen animate-blob animation-delay-2000 sm:right-1/4 sm:h-96 sm:w-96" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border-electric-blue/30 px-4 py-2 text-xs font-mono text-electric-blue glass mb-8 sm:text-sm"
          >
            <Terminal size={16} />
            <span>Initializing system...</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white mb-6 sm:text-5xl md:text-7xl lg:text-8xl"
          >
            Gopikrishnan D
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="min-h-16 mb-6 sm:min-h-12 md:min-h-16"
          >
            <motion.p
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-xl font-semibold text-transparent text-glow sm:text-2xl md:text-4xl"
            >
              {roles[currentRoleIndex]}
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto max-w-2xl text-base leading-relaxed text-gray-400 mb-10 sm:text-lg md:text-xl md:mb-12"
          >
            Building intelligent systems at the intersection of AI, embedded technology, and scalable software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group relative w-full overflow-hidden rounded-full bg-white px-7 py-4 text-center font-bold text-navy-900 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] sm:w-auto sm:px-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-electric-purple opacity-0 group-hover:opacity-20 transition-opacity" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Projects
              </span>
            </a>
            <a
              href="/Gopikrishnan_Resume_7_5_2026_.pdf"
              download="Gopikrishnan-D-Resume.pdf"
              className="group relative w-full overflow-hidden rounded-full border-white/20 px-7 py-4 text-center font-bold text-white glass transition-all hover:bg-white/10 sm:w-auto sm:px-8"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 sm:flex md:bottom-10"
      >
        <span className="text-sm font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-electric-blue" />
        </motion.div>
      </motion.div>
    </section>
  );
}
