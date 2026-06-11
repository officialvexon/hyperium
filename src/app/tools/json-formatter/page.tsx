'use client';

import React from "react";
import { motion } from "framer-motion";

export default function JsonFormatterPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-4 max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-2">JSON Formatter</h1>
        <p className="text-neutral-400 mb-8">Prettify, minify, and validate your JSON data.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Raw JSON</label>
            <textarea 
              className="w-full h-[500px] bg-black border border-white/10 rounded-xl p-4 text-mono text-cyan-400 focus:outline-none focus:border-cyan-500/50"
              placeholder='{"key": "value"}'
            />
          </div>
          
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Formatted Output</label>
            <textarea 
              readOnly
              className="w-full h-[500px] bg-neutral-900 border border-white/10 rounded-xl p-4 text-mono text-neutral-500"
              placeholder="Result will appear here..."
            />
          </div>
        </div>
        
        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-8 py-3 rounded-full bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-colors">
            Format JSON
          </button>
          <button className="px-8 py-3 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 transition-colors">
            Minify
          </button>
        </div>
      </motion.div>
    </div>
  );
}
