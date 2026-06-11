'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function EncoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [format, setFormat] = useState("base64");

  const handleEncode = () => {
    try {
      if (!input) {
        setOutput("");
        return;
      }
      if (format === "base64") {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else if (format === "hex") {
        setOutput(Array.from(input).map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join(''));
      } else if (format === "uri") {
        setOutput(encodeURIComponent(input));
      }
    } catch (e) {
      setOutput("Error encoding data.");
    }
  };

  const handleDecode = () => {
    try {
      if (!input) {
        setOutput("");
        return;
      }
      if (format === "base64") {
        setOutput(decodeURIComponent(escape(atob(input))));
      } else if (format === "hex") {
        const hex = input.replace(/\s+/g, '');
        let str = '';
        for (let i = 0; i < hex.length; i += 2) {
          str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        setOutput(str);
      } else if (format === "uri") {
        setOutput(decodeURIComponent(input));
      }
    } catch (e) {
      setOutput("Error decoding data. Invalid format?");
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-4 max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Data Encoder</h1>
        <p className="text-neutral-400 mb-8">Encode and decode data in multiple formats (Base64, Hex, URL).</p>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <div className="flex justify-between items-center mb-4">
              <label className="block text-sm font-medium text-neutral-400">Input Data</label>
              <select 
                value={format} 
                onChange={(e) => setFormat(e.target.value)}
                className="bg-black border border-white/10 rounded-lg p-2 text-white focus:outline-none focus:border-purple-500/50"
              >
                <option value="base64">Base64</option>
                <option value="hex">Hexadecimal</option>
                <option value="uri">URL (URI)</option>
              </select>
            </div>
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-40 bg-black border border-white/10 rounded-xl p-4 text-purple-400 focus:outline-none focus:border-purple-500/50 font-mono"
              placeholder="Enter text to encode/decode..."
            />
          </div>
          
          <div className="flex gap-4 justify-center">
            <button 
              onClick={handleEncode}
              className="px-6 py-2 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-500 transition-colors"
            >
              Encode
            </button>
            <button 
              onClick={handleDecode}
              className="px-6 py-2 rounded-full border border-purple-500/50 text-purple-400 font-bold hover:bg-purple-500/10 transition-colors"
            >
              Decode
            </button>
          </div>
          
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Output</label>
            <textarea 
              readOnly
              value={output}
              className="w-full h-40 bg-neutral-900 border border-white/10 rounded-xl p-4 text-neutral-300 font-mono focus:outline-none"
              placeholder="Output will appear here..."
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
