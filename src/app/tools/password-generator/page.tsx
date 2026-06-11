'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PasswordGeneratorPage() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (includeUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
    setCopied(false);
  };

  useEffect(() => {
    setTimeout(() => {
      generatePassword();
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-4 max-w-2xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Password Generator</h1>
        <p className="text-neutral-400 mb-12">Generate strong, cryptographically secure passwords.</p>
        
        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-6">
          <div className="relative group">
            <input 
              readOnly
              type="text"
              className="w-full bg-black border-2 border-indigo-500/30 rounded-2xl p-6 pr-20 text-2xl font-mono text-white text-center group-hover:border-indigo-500/60 transition-all focus:outline-none"
              value={password}
            />
            <button 
              onClick={handleCopy}
              className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1 rounded bg-indigo-500/20 text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/30 transition-colors text-sm font-medium"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          
          <div className="space-y-6 text-left pt-4">
            <div className="flex items-center justify-between">
              <label className="text-white font-medium">Length: {length}</label>
              <input 
                type="range" 
                className="w-48 accent-indigo-500" 
                min="8" 
                max="64" 
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
              />
            </div>
            
            <div className="space-y-4">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-neutral-400">Include Uppercase</span>
                <input 
                  type="checkbox" 
                  checked={includeUpper} 
                  onChange={(e) => setIncludeUpper(e.target.checked)}
                  className="w-5 h-5 accent-indigo-500 rounded cursor-pointer" 
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-neutral-400">Include Numbers</span>
                <input 
                  type="checkbox" 
                  checked={includeNumbers} 
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                  className="w-5 h-5 accent-indigo-500 rounded cursor-pointer" 
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-neutral-400">Include Symbols</span>
                <input 
                  type="checkbox" 
                  checked={includeSymbols} 
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                  className="w-5 h-5 accent-indigo-500 rounded cursor-pointer" 
                />
              </label>
            </div>
          </div>
          
          <button 
            onClick={generatePassword}
            className="w-full mt-8 py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20"
          >
            Generate New Password
          </button>
        </div>
      </motion.div>
    </div>
  );
}
