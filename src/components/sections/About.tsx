"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code, Cpu, LineChart } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative py-32 z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple text-glow">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-electric-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              I am an <strong className="text-white">Electronics and Communication Engineering</strong> student with a Computer Science minor, driven by a curious and experimental mindset.
            </p>
            <p>
              My passion lies in <strong className="text-white">AI-powered intelligent systems</strong>, backend development, and embedded automation. I love solving complex, real-world problems by bridging the gap between hardware and software.
            </p>
            <p>
              With strong visual and analytical thinking, I focus on practical learning, building scalable systems, and constantly exploring future technologies to create impactful solutions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: BrainCircuit, title: "AI & ML", desc: "Computer Vision & Models" },
              { icon: Cpu, title: "IoT & Embedded", desc: "ESP32 & FPGA Architecture" },
              { icon: Code, title: "Backend", desc: "Scalable APIs & DBs" },
              { icon: LineChart, title: "Automation", desc: "Intelligent Workflows" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass p-6 rounded-2xl border border-white/10 hover:border-electric-blue/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <item.icon className="w-8 h-8 text-electric-blue mb-4" />
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
