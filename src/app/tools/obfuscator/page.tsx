'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ObfuscatorPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [method, setMethod] = useState("base64");

  const handleObfuscate = () => {
    if (!input) {
      setOutput("");
      return;
    }

    try {
      if (method === "base64") {
        // A simple mock of obfuscation using eval and base64
        const encoded = btoa(unescape(encodeURIComponent(input)));
        const mockObfuscated = `// Obfuscated snippet\neval(decodeURIComponent(escape(atob("${encoded}"))));`;
        setOutput(mockObfuscated);
      } else if (method === "hex") {
        const hex = Array.from(input).map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
        const mockObfuscated = `// Obfuscated snippet\nconst h="${hex}";let s="";for(let i=0;i<h.length;i+=2)s+=String.fromCharCode(parseInt(h.substr(i,2),16));eval(s);`;
        setOutput(mockObfuscated);
      } else if (method === "reverse") {
        const reversed = input.split('').reverse().join('');
        const mockObfuscated = `// Obfuscated snippet\neval("${reversed}".split('').reverse().join(''));`;
        setOutput(mockObfuscated);
      }
    } catch (e) {
      setOutput("Error processing source code.");
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="py-20 px-4 max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Code Obfuscator</h1>
        <p className="text-neutral-400 mb-8">Quickly secure JavaScript code blocks using simple encoding wrappers.</p>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-neutral-400">Input Source Code</label>
              <select 
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="bg-black border border-white/10 rounded-lg p-2 text-white focus:outline-none focus:border-cyan-500/50 text-sm"
              >
                <option value="base64">Base64 Eval Wrapper</option>
                <option value="hex">Hex Eval Wrapper</option>
                <option value="reverse">Reverse String Eval Wrapper</option>
              </select>
            </div>
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-64 bg-black border border-white/10 rounded-xl p-4 font-mono text-sm text-cyan-400 focus:outline-none focus:border-cyan-500/50"
              placeholder="console.log('Hello, World!');"
            />
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={handleObfuscate}
              className="px-8 py-3 rounded-full bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              Obfuscate Code
            </button>
          </div>
          
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Output Result</label>
            <textarea 
              readOnly
              value={output}
              className="w-full h-64 bg-neutral-900 border border-white/10 rounded-xl p-4 font-mono text-sm text-neutral-300 focus:outline-none"
              placeholder="Result will appear here..."
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
