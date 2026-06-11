'use client';

import React from "react";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    { title: "Hyperium OS", desc: "A decentralized operating system for the edge.", tag: "Core" },
    { title: "Quantum SDK", desc: "Next-gen development toolkit for quantum-inspired logic.", tag: "Tools" },
    { title: "Neural Link", desc: "AI bridge for seamless human-machine collaboration.", tag: "AI" }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 px-4 max-w-7xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
          The Hyperium Collection
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg mb-12">
          Explore our portfolio of cutting-edge technology and innovative solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {projects.map((project, i) => (
            <div key={i} className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-purple-500/50 transition-all duration-300">
              <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-mono mb-4 border border-purple-500/20">
                {project.tag}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{project.title}</h3>
              <p className="text-neutral-400 mb-6">{project.desc}</p>
              <div className="w-full h-40 rounded-xl bg-neutral-900 border border-white/5 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/5 to-cyan-500/5 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
