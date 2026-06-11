"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <TracingBeam className="px-6 py-20">
      <div className="max-w-2xl mx-auto antialiased relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">Our Mission</h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Project Hyperium was founded in 2024 with a single goal: to build the most secure and advanced AI-powered infrastructure for the next generation of digital pioneers.
          </p>
        </motion.div>

        <div className="space-y-20">
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Cybersecurity First</h2>
            <p className="text-neutral-300">
              In an era of autonomous agents and rapid AI development, security cannot be an afterthought. We integrate cryptographic security into the core of every tool we build.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Open Infrastructure</h2>
            <p className="text-neutral-300">
              We believe in the power of open-source and transparent development. While we build premium tools, the foundation of Hyperium remains accessible to developers worldwide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">The Future is Here</h2>
            <p className="text-neutral-300">
              From Mars-compatible networking protocols to post-quantum encryption, we are exploring the frontiers of what is possible in software engineering.
            </p>
          </section>
        </div>
      </div>
    </TracingBeam>
  );
}
