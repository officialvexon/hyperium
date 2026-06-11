"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-950 relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60" fill="blue" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10"
      >
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-neutral-400 mb-8">Node Disconnected</h2>
        <p className="text-neutral-500 max-w-md mx-auto mb-10">
          The coordinates you've requested do not exist in the Hyperium network.
          It might have been moved or phased out of existence.
        </p>
        <Link
          href="/"
          className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
        >
          Return to Nexus
        </Link>
      </motion.div>
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
}
