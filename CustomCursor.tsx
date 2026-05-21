"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-32 z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
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
            className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between mb-12 sm:mb-16 pl-10 md:pl-0"
          >
            {/* Timeline Node */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-navy-900 border-2 border-electric-blue rounded-full transform -translate-x-1/2 mt-1.5 md:mt-0 z-10 box-glow" />

            <div className="w-full md:w-5/12 md:text-right md:pr-12 mb-4 md:mb-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">Embedded Systems & IoT Intern</h3>
              <div className="flex items-center gap-2 md:justify-end text-electric-blue text-xs sm:text-sm mb-1 sm:mb-2 font-mono">
                <Briefcase size={13} /> NeST Digital
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:justify-end text-gray-400 text-xs sm:text-sm">
                <span className="flex items-center gap-1"><Calendar size={12} /> May 2025 – July 2025</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> Kochi</span>
              </div>
            </div>

            <div className="w-full md:w-5/12 md:pl-12">
              <div className="glass p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-electric-purple/40 transition-colors">
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-electric-blue mt-0.5 shrink-0">▹</span>
                    Developed biometric attendance systems using ESP32.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-electric-blue mt-0.5 shrink-0">▹</span>
                    Integrated Firebase cloud synchronization.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-electric-blue mt-0.5 shrink-0">▹</span>
                    Designed embedded hardware/software systems.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-electric-blue mt-0.5 shrink-0">▹</span>
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
