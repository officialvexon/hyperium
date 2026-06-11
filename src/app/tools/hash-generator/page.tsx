'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HashGeneratorPage() {
  const [input, setInput] = useState("");
  const [algorithm, setAlgorithm] = useState("SHA-256");
  const [hashOutput, setHashOutput] = useState("");

  useEffect(() => {
    const generateHash = async () => {
      if (!input) {
        setHashOutput("");
        return;
      }

      try {
        if (algorithm === "MD5") {
          // A simple mock for MD5 since crypto.subtle doesn't support it directly.
          // In a real production app, we would use a library like 'crypto-js'.
          setHashOutput(`[MD5 mock] ${input.length * 12345}d8c4b2a19... (requires external lib)`);
          return;
        }

        const encoder = new TextEncoder();
        const data = encoder.encode(input);
        const hashBuffer = await crypto.subtle.digest(algorithm, data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        setHashOutput(hashHex);
      } catch (err) {
        setHashOutput("Error generating hash.");
      }
    };

    const timeoutId = setTimeout(() => {
      generateHash();
    }, 300); // Debounce to prevent lag while typing

    return () => clearTimeout(timeoutId);
  }, [input, algorithm]);

  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-4 max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Hash Generator</h1>
        <p className="text-neutral-400 mb-8">Generate secure SHA-256, SHA-512, and other cryptographic hashes.</p>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Input String</label>
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-black border border-white/10 rounded-xl p-4 text-blue-400 focus:outline-none focus:border-blue-500/50 font-mono"
              placeholder="Enter text to hash..."
            />
          </div>
          
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Algorithm</label>
            <select 
              value={algorithm}
              onChange={(e) => setAlgorithm(e.target.value)}
              className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500/50"
            >
              <option value="SHA-256">SHA-256</option>
              <option value="SHA-512">SHA-512</option>
              <option value="SHA-384">SHA-384</option>
              <option value="SHA-1">SHA-1</option>
              <option value="MD5">MD5</option>
            </select>
          </div>
          
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Generated Hash</label>
            <div className="w-full min-h-[56px] bg-neutral-900 border border-white/10 rounded-xl p-4 font-mono text-blue-400 break-all select-all">
              {hashOutput || <span className="text-neutral-600">Hash will appear here...</span>}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
