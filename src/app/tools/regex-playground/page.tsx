'use client';

import React from "react";
import { motion } from "framer-motion";

export default function RegexPlaygroundPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-4 max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Regex Playground</h1>
        <p className="text-neutral-400 mb-8">Test and debug your regular expressions in real-time.</p>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Regex Pattern</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">/</span>
              <input 
                type="text"
                className="w-full bg-black border border-white/10 rounded-xl p-4 pl-8 pr-12 text-orange-400 focus:outline-none focus:border-orange-500/50 font-mono"
                placeholder="[a-z]+"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500">/g</span>
            </div>
          </div>
          
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Test String</label>
            <textarea 
              className="w-full h-40 bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-orange-500/50"
              placeholder="Enter text to test against..."
            />
          </div>
          
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Matches</label>
            <div className="w-full min-h-[100px] bg-neutral-900 border border-white/10 rounded-xl p-4 text-neutral-500 italic">
              Matches will be highlighted here...
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
