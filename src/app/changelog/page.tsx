'use client';

import React from "react";
import { motion } from "framer-motion";

export default function ChangelogPage() {
  const logs = [
    { version: "v1.2.0", date: "Mar 15, 2025", changes: ["Added new API Tester tool", "Improved obfuscation engine", "Updated documentation"] },
    { version: "v1.1.5", date: "Mar 02, 2025", changes: ["Fixed JSON formatter bug", "Reduced bundle size by 15%", "Security patches"] },
    { version: "v1.1.0", date: "Feb 20, 2025", changes: ["Initial release of Tools Dashboard", "Alpha version of Hyperium OS", "New team member onboarded"] }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-4 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">Changelog</h1>
        
        <div className="space-y-12 relative before:absolute before:inset-y-0 before:left-8 before:w-px before:bg-white/10">
          {logs.map((log, i) => (
            <div key={i} className="relative pl-20 group">
              <div className="absolute left-7 top-2 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                <h3 className="text-2xl font-bold text-white">{log.version}</h3>
                <span className="text-neutral-500 font-mono text-sm">— {log.date}</span>
              </div>
              <ul className="space-y-3">
                {log.changes.map((change, j) => (
                  <li key={j} className="text-neutral-400 flex items-center">
                    <span className="w-1 h-1 rounded-full bg-neutral-600 mr-3" />
                    {change}
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
