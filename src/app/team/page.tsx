'use client';

import React from "react";
import { motion } from "framer-motion";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 px-4 max-w-7xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
          Meet the Architects
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg mb-12">
          The brilliant minds behind Project Hyperium, dedicated to pushing the boundaries of technology.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-24 h-24 rounded-full bg-neutral-800 mx-auto mb-6 border-2 border-white/10 group-hover:border-cyan-500/50 transition-colors" />
              <h3 className="text-xl font-bold text-white mb-1">Architect {i}</h3>
              <p className="text-cyan-400 text-sm mb-4">Core Developer</p>
              <p className="text-neutral-400 text-sm">Specializing in distributed systems and AI integration.</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
