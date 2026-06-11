'use client';

import React from "react";
import { motion } from "framer-motion";

export default function StatusPage() {
  const services = [
    { name: "Core API", status: "Operational", uptime: "99.99%" },
    { name: "Auth Service", status: "Operational", uptime: "99.95%" },
    { name: "Edge Nodes", status: "Operational", uptime: "100%" },
    { name: "Database Cluster", status: "Operational", uptime: "99.99%" },
    { name: "CDN Content Delivery", status: "Operational", uptime: "99.98%" }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-4 max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-bold border border-green-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            All Systems Operational
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">System Status</h1>
          <p className="text-neutral-400">Current status and incident history for all Hyperium services.</p>
        </div>

        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-6">
          {services.map((service, i) => (
            <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
              <div>
                <h3 className="text-lg font-bold text-white">{service.name}</h3>
                <p className="text-neutral-500 text-sm">Uptime: {service.uptime}</p>
              </div>
              <div className="text-green-400 font-bold text-sm">
                {service.status}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
