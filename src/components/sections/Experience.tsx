"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 z-10 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple text-glow">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-electric-purple mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue via-electric-purple to-transparent opacity-30 transform md:-translate-x-1/2" />

          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-start mb-12 md:flex-row md:items-center md:justify-between md:mb-16"
          >
            {/* Timeline Node */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-navy-900 border-2 border-electric-blue rounded-full transform -translate-x-1/2 mt-6 md:mt-0 z-10 box-glow" />

            <div className="w-full pl-12 md:w-5/12 md:pl-0 md:text-right md:pr-12">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Embedded Systems & IoT Intern</h3>
              <div className="flex items-center gap-2 md:justify-end text-electric-blue text-sm mb-2 font-mono">
                <Briefcase size={14} /> NeST Digital
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:justify-end text-gray-400 text-sm mb-4">
                <span className="flex items-center gap-1"><Calendar size={14} /> May 2025 - July 2025</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> Kochi</span>
              </div>
            </div>

            <div className="w-full pl-12 mt-4 md:w-5/12 md:pl-12 md:mt-0">
              <div className="glass p-5 rounded-lg border border-white/10 hover:border-electric-purple/40 transition-colors sm:p-6">
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-electric-blue mt-1">&rsaquo;</span>
                    Developed biometric attendance systems using ESP32.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-electric-blue mt-1">&rsaquo;</span>
                    Integrated Firebase cloud synchronization.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-electric-blue mt-1">&rsaquo;</span>
                    Designed embedded hardware/software systems.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-electric-blue mt-1">&rsaquo;</span>
                    Performed debugging and protocol testing.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
