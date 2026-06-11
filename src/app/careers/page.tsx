"use client";
import React from "react";
import { motion } from "framer-motion";

const positions = [
  { title: "Senior Security Researcher", department: "Cybersecurity", location: "Remote / Mars" },
  { title: "Frontend Engineer (Framer Motion Wizard)", department: "Product", location: "Remote" },
  { title: "AI Infrastructure Architect", department: "AI/ML", location: "San Francisco / Remote" },
  { title: "Developer Advocate", department: "Growth", location: "Global" },
];

export default function CareersPage() {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Build the Future</h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          Join Project Hyperium and help us build the next generation of developer tools and AI systems.
        </p>
      </motion.div>

      <div className="grid gap-6">
        {positions.map((pos, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex flex-col md:flex-row justify-between items-center hover:border-blue-500/50 transition-colors group"
          >
            <div>
              <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{pos.title}</h2>
              <p className="text-neutral-400">{pos.department} • {pos.location}</p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-2 rounded-full bg-neutral-800 text-white hover:bg-white hover:text-black transition-all">
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
