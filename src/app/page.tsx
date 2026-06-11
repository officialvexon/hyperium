"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-950 flex flex-col items-center justify-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4">
            Project Hyperium <br /> 
            <span className="text-blue-500">Enterprise-Grade Developer Infrastructure</span>
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Experience the next evolution of developer tools and scalable solutions.
            We build the infrastructure for modern applications. Reliable, compliant, and highly available.
          </p>
          
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="/projects"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              Explore Solutions
            </Link>
            <Link
              href="/docs"
              className="px-8 py-3 rounded-full border border-neutral-700 text-neutral-300 hover:bg-neutral-900 transition-all"
            >
              Read Documentation
            </Link>
          </div>
        </motion.div>

        {/* Stats Section Placeholder */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: "Enterprise Clients", value: "500+" },
            { label: "Services Deployed", value: "24+" },
            { label: "Global Nodes", value: "1.2k" },
            { label: "Uptime SLA", value: "99.99%" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
              <span className="text-xs md:text-sm text-neutral-500 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      <BackgroundBeams />
      
      {/* Featured Bento Grid Placeholder Section */}
      <section className="py-20 w-full max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Scalable Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 h-64 rounded-3xl bg-neutral-900/50 border border-neutral-800 p-8 flex flex-col justify-end">
             <h3 className="text-xl font-bold text-white">Enterprise Compliance</h3>
             <p className="text-neutral-400 mt-2">Meet rigorous regulatory requirements with our certified infrastructure.</p>
          </div>
          <div className="h-64 rounded-3xl bg-neutral-900/50 border border-neutral-800 p-8 flex flex-col justify-end">
             <h3 className="text-xl font-bold text-white">Scalable Architecture</h3>
             <p className="text-neutral-400 mt-2">Seamlessly handle peak workloads with elastic provisioning.</p>
          </div>
          <div className="h-64 rounded-3xl bg-neutral-900/50 border border-neutral-800 p-8 flex flex-col justify-end">
             <h3 className="text-xl font-bold text-white">Global CDN</h3>
             <p className="text-neutral-400 mt-2">Deliver content securely at the edge with low latency.</p>
          </div>
          <div className="md:col-span-2 h-64 rounded-3xl bg-neutral-900/50 border border-neutral-800 p-8 flex flex-col justify-end">
             <h3 className="text-xl font-bold text-white">Secure Workspace</h3>
             <p className="text-neutral-400 mt-2">Empower your teams to collaborate safely within isolated environments.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
