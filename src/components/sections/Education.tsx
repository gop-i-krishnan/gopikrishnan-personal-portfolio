"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-20 z-10 bg-navy-800/30 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-10 max-w-6xl mx-auto md:grid-cols-2 md:gap-16">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-6 md:mb-10"
            >
              <h2 className="text-2xl font-bold flex items-center gap-3 sm:text-3xl">
                <GraduationCap className="text-electric-blue shrink-0" size={32} />
                Education
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass p-5 rounded-lg border border-white/10 relative overflow-hidden group sm:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-2 sm:text-xl">B.Tech in Electronics and Communication Engineering</h3>
                <p className="text-electric-blue text-sm mb-4 font-mono">Minor in Computer Science</p>
                <div className="flex flex-col gap-1 text-gray-400 text-sm">
                  <span className="text-white/80">Rajagiri School of Engineering and Technology (RSET)</span>
                  <span>2023 - 2027</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Achievements */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-6 md:mb-10"
            >
              <h2 className="text-2xl font-bold flex items-center gap-3 sm:text-3xl">
                <Award className="text-electric-purple shrink-0" size={32} />
                Achievements
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass p-5 rounded-lg border border-electric-purple/20 relative overflow-hidden group sm:p-8"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric-purple/10 rounded-full blur-2xl group-hover:bg-electric-purple/20 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 sm:gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-full border border-electric-purple/30 flex items-center justify-center text-electric-purple text-lg font-bold box-glow sm:h-12 sm:w-12 sm:text-xl">
                    #1
                  </div>
                  <h3 className="text-lg font-bold text-white">NTA B.Arch & B.Planning</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Secured high ranks in national entrance examinations, demonstrating strong spatial reasoning, analytical aptitude, and problem-solving capabilities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
