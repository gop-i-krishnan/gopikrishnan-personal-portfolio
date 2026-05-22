"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type NodePos = { top: string; left: string };

export default function Vision() {
  const [nodes, setNodes] = useState<NodePos[]>([]);

  useEffect(() => {
    const positions: NodePos[] = Array.from({ length: 5 }, (_, i) => ({
      top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 5)}%`,
      left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 5)}%`,
    }));
    const timer = window.setTimeout(() => setNodes(positions), 0);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section id="vision" className="relative py-20 z-10 overflow-hidden min-h-[80svh] flex items-center md:py-32 md:min-h-screen">
      {/* Background radial glow for vision */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[800px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-10 relative inline-block md:mb-12"
          >
            {/* Animated network / globe abstraction */}
            <div className="w-40 h-40 mx-auto relative flex items-center justify-center sm:w-48 sm:h-48 md:w-64 md:h-64">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0 border border-electric-blue/30 rounded-full border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute inset-4 border border-electric-purple/30 rounded-full border-dashed"
              />
              <div className="w-12 h-12 bg-gradient-to-tr from-electric-blue to-electric-purple rounded-full shadow-[0_0_40px_rgba(0,240,255,0.6)] animate-pulse sm:w-16 sm:h-16" />
              
              {/* Nodes */}
              {nodes.map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full box-glow"
                  style={{ top: pos.top, left: pos.left }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
                />
              ))}
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight tracking-tight"
          >
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-purple">Intelligent Future</span>
          </motion.h2>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-3xl text-gray-300 font-medium italic border-l-4 border-electric-blue pl-4 sm:pl-6 md:pl-10 text-left mx-auto max-w-3xl"
          >
            &ldquo;To build intelligent technologies that combine innovation, automation, and meaningful real-world impact.&rdquo;
          </motion.blockquote>

        </div>
      </div>
    </section>
  );
}
