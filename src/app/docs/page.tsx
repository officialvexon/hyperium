'use client';

import React from "react";
import { motion } from "framer-motion";

export default function DocsPage() {
  const sections = [
    { title: "Getting Started", items: ["Installation", "Project Structure", "Core Concepts"] },
    { title: "Advanced", items: ["Custom Hooks", "Theme Provider", "State Management"] },
    { title: "API Reference", items: ["Hyperium Client", "Data Fetching", "Utilities"] }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-4 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Documentation</h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about building with Project Hyperium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {sections.map((section, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold text-cyan-400 mb-6 font-mono">{section.title}</h3>
              <ul className="space-y-4">
                {section.items.map((item, j) => (
                  <li key={j} className="text-neutral-500 hover:text-white transition-colors cursor-pointer flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
