'use client';

import React from "react";
import { motion } from "framer-motion";

export default function HashGeneratorPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-4 max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Hash Generator</h1>
        <p className="text-neutral-400 mb-8">Generate secure SHA-256, MD5, and other cryptographic hashes.</p>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Input String</label>
            <input 
              type="text"
              className="w-full bg-black border border-white/10 rounded-xl p-4 text-blue-400 focus:outline-none focus:border-blue-500/50"
              placeholder="Enter text to hash..."
            />
          </div>
          
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Algorithm</label>
            <select className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none">
              <option>SHA-256</option>
              <option>SHA-512</option>
              <option>MD5</option>
              <option>SHA-1</option>
            </select>
          </div>
          
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Generated Hash</label>
            <div className="w-full bg-neutral-900 border border-white/10 rounded-xl p-4 font-mono text-blue-500 break-all">
              e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
