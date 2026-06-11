'use client';

import React from "react";
import { motion } from "framer-motion";

export default function PasswordGeneratorPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-4 max-w-2xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Password Generator</h1>
        <p className="text-neutral-400 mb-12">Generate strong, cryptographically secure passwords.</p>
        
        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-6">
          <div className="relative group">
            <input 
              readOnly
              type="text"
              className="w-full bg-black border-2 border-indigo-500/30 rounded-2xl p-6 text-2xl font-mono text-white text-center group-hover:border-indigo-500/60 transition-all"
              value="Kj9#fL2$vP9!mN1*"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-400 hover:text-indigo-300">
              Copy
            </button>
          </div>
          
          <div className="space-y-4 text-left">
            <div className="flex items-center justify-between">
              <label className="text-white font-medium">Length</label>
              <input type="range" className="w-40" min="8" max="64" />
            </div>
            
            {[
              { label: "Include Uppercase", checked: true },
              { label: "Include Numbers", checked: true },
              { label: "Include Symbols", checked: true },
            ].map((opt, i) => (
              <div key={i} className="flex items-center justify-between">
                <label className="text-neutral-400">{opt.label}</label>
                <input type="checkbox" checked={opt.checked} className="w-5 h-5 accent-indigo-500" readOnly />
              </div>
            ))}
          </div>
          
          <button className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">
            Generate New Password
          </button>
        </div>
      </motion.div>
    </div>
  );
}
