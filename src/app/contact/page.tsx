'use client';

import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-4 max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-neutral-400 text-lg">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Send a Message</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500/50" />
              <input type="email" placeholder="Email Address" className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500/50" />
              <textarea placeholder="Your Message" className="w-full h-40 bg-black border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500/50" />
              <button className="w-full py-4 rounded-xl bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-colors">
                Send Message
              </button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-neutral-400">Cyber City, District 7<br />Neo-Tokyo, 2077</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-neutral-400">support@hyperium.dev<br />media@hyperium.dev</p>
            </div>
            <div className="pt-8 flex gap-4">
              <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center hover:border-cyan-500/50 cursor-pointer transition-colors" />
              <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center hover:border-cyan-500/50 cursor-pointer transition-colors" />
              <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center hover:border-cyan-500/50 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
