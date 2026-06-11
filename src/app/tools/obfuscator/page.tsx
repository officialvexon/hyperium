'use client';

import React from "react";
import { motion } from "framer-motion";

export default function ObfuscatorPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="py-20 px-4 max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Code Obfuscator</h1>
        <p className="text-neutral-400 mb-8">Secure your JavaScript and TypeScript code with advanced obfuscation.</p>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Input Source Code</label>
            <textarea 
              className="w-full h-64 bg-black border border-white/10 rounded-xl p-4 text-mono text-cyan-400 focus:outline-none focus:border-cyan-500/50"
              placeholder="// Paste your code here..."
            />
          </div>
          
          <div className="flex justify-center">
            <button className="px-8 py-3 rounded-full bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              Obfuscate Code
            </button>
          </div>
          
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Output Result</label>
            <textarea 
              readOnly
              className="w-full h-64 bg-neutral-900 border border-white/10 rounded-xl p-4 text-mono text-neutral-500"
              placeholder="Result will appear here..."
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
