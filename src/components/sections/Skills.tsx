"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Computer Vision",
    skills: [
      { name: "Python", level: 90 },
      { name: "OpenCV", level: 85 },
      { name: "FaceNet", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "FastAPI", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "JWT Auth", level: 90 },
    ],
  },
  {
    title: "Embedded & IoT",
    skills: [
      { name: "Embedded C", level: 85 },
      { name: "ESP32", level: 88 },
      { name: "FPGA", level: 75 },
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "Linux", level: 90 },
      { name: "Git", level: 95 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 z-10 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple text-glow">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-electric-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-5 max-w-6xl mx-auto md:grid-cols-2 md:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass p-5 rounded-lg border border-white/10 relative overflow-hidden group hover:border-electric-blue/40 transition-colors sm:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h3 className="text-xl font-bold text-white mb-6 relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-electric-blue box-glow" />
                {category.title}
              </h3>

              <div className="space-y-5 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-sm mb-2 text-gray-300">
                      <span>{skill.name}</span>
                      <span className="text-electric-blue font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-navy-800 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-electric-blue to-electric-purple relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
