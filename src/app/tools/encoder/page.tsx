'use client';

import React from "react";
import { motion } from "framer-motion";

export default function EncoderPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-4 max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Data Encoder</h1>
        <p className="text-neutral-400 mb-8">Encode and decode data in multiple formats (Base64, Hex, URL, etc).</p>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Input Data</label>
            <textarea 
              className="w-full h-40 bg-black border border-white/10 rounded-xl p-4 text-purple-400 focus:outline-none focus:border-purple-500/50"
              placeholder="Enter text to encode/decode..."
            />
          </div>
          
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-2 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-500 transition-colors">
              Encode
            </button>
            <button className="px-6 py-2 rounded-full border border-purple-500/50 text-purple-400 font-bold hover:bg-purple-500/10 transition-colors">
              Decode
            </button>
          </div>
          
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Output</label>
            <textarea 
              readOnly
              className="w-full h-40 bg-neutral-900 border border-white/10 rounded-xl p-4 text-neutral-500"
              placeholder="Output will appear here..."
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
