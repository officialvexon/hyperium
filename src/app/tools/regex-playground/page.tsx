'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function RegexPlaygroundPage() {
  const [pattern, setPattern] = useState("[a-z]+");
  const [flags, setFlags] = useState("g");
  const [testString, setTestString] = useState("Hello world! This is a test string 123.");

  let matches: string[] = [];
  let error = "";

  try {
    if (pattern) {
      const regex = new RegExp(pattern, flags);
      
      if (!flags.includes("g")) {
        const match = testString.match(regex);
        matches = match ? [match[0]] : [];
      } else {
        const found = Array.from(testString.matchAll(regex), m => m[0]);
        matches = found;
      }
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      error = e.message;
    } else {
      error = "Invalid regular expression";
    }
    matches = [];
  }

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
            <div className="flex gap-2">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-mono text-lg">/</span>
                <input 
                  type="text"
                  value={pattern}
                  onChange={(e) => setPattern(e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-xl p-4 pl-8 pr-4 text-orange-400 focus:outline-none focus:border-orange-500/50 font-mono text-lg"
                  placeholder="pattern"
                />
              </div>
              <div className="relative w-24">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 font-mono text-lg">/</span>
                <input 
                  type="text"
                  value={flags}
                  onChange={(e) => setFlags(e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-xl p-4 pl-6 pr-4 text-orange-400 focus:outline-none focus:border-orange-500/50 font-mono text-lg"
                  placeholder="gmi"
                />
              </div>
            </div>
            {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
          </div>
          
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Test String</label>
            <textarea 
              value={testString}
              onChange={(e) => setTestString(e.target.value)}
              className="w-full h-40 bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-orange-500/50 font-mono"
              placeholder="Enter text to test against..."
            />
          </div>
          
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">
              Matches ({matches.length})
            </label>
            <div className="w-full min-h-[100px] bg-neutral-900 border border-white/10 rounded-xl p-4 text-neutral-300 font-mono flex flex-wrap gap-2">
              {matches.length > 0 ? (
                matches.map((m, i) => (
                  <span key={i} className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded border border-orange-500/30 break-all">
                    {m === "" ? "<empty match>" : m}
                  </span>
                ))
              ) : (
                <span className="text-neutral-600 italic">No matches found.</span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
