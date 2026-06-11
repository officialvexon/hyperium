'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleFormat = () => {
    try {
      if (!input.trim()) return;
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Invalid JSON");
      }
    }
  };

  const handleMinify = () => {
    try {
      if (!input.trim()) return;
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Invalid JSON");
      }
    }
  };

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
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Raw JSON</label>
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full flex-1 min-h-[400px] bg-black border border-white/10 rounded-xl p-4 font-mono text-sm text-cyan-400 focus:outline-none focus:border-cyan-500/50 resize-y"
              placeholder='{"key": "value"}'
            />
            {error && (
              <div className="mt-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}
          </div>
          
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Formatted Output</label>
            <textarea 
              readOnly
              value={output}
              className="w-full flex-1 min-h-[400px] bg-neutral-900 border border-white/10 rounded-xl p-4 font-mono text-sm text-neutral-300 focus:outline-none resize-y"
              placeholder="Result will appear here..."
            />
          </div>
        </div>
        
        <div className="mt-8 flex gap-4 justify-center">
          <button 
            onClick={handleFormat}
            className="px-8 py-3 rounded-full bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-colors"
          >
            Format JSON
          </button>
          <button 
            onClick={handleMinify}
            className="px-8 py-3 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 transition-colors"
          >
            Minify
          </button>
        </div>
      </motion.div>
    </div>
  );
}
