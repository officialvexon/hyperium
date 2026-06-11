'use client';

import React from "react";
import { motion } from "framer-motion";

export default function ApiTesterPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-4 max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-2">API Tester</h1>
        <p className="text-neutral-400 mb-8">Test your API endpoints with a powerful and intuitive interface.</p>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <select className="w-32 bg-neutral-900 border border-white/10 rounded-xl p-4 text-rose-400 font-bold focus:outline-none">
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>DELETE</option>
            </select>
            <input 
              type="text"
              className="flex-1 bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-rose-500/50"
              placeholder="https://api.hyperium.dev/v1/resource"
            />
            <button className="px-8 py-4 rounded-xl bg-rose-600 text-white font-bold hover:bg-rose-500 transition-colors">
              Send
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <label className="block text-sm font-medium text-neutral-400 mb-4">Request Body</label>
              <textarea 
                className="w-full h-80 bg-black border border-white/10 rounded-xl p-4 text-mono text-rose-300 focus:outline-none"
                placeholder="{}"
              />
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <label className="block text-sm font-medium text-neutral-400 mb-4">Response</label>
              <div className="w-full h-80 bg-neutral-900 border border-white/10 rounded-xl p-4 text-mono text-neutral-500 overflow-auto">
                No response yet...
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
