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
            Project Hyperium was founded with a single goal: to build the most reliable and scalable enterprise infrastructure for modern software development.
          </p>
        </motion.div>

        <div className="space-y-20">
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Enterprise-Grade Security</h2>
            <p className="text-neutral-300">
              In an era of complex compliance requirements, security is our foundational pillar. We integrate industry-standard safeguards and robust compliance measures into the core of every product we deliver.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Scalable Infrastructure</h2>
            <p className="text-neutral-300">
              We engineer our systems to grow with your business. From startups to Fortune 500 enterprises, our highly available architecture ensures seamless performance during peak loads.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Reliability and Compliance</h2>
            <p className="text-neutral-300">
              We are committed to operational excellence. By adhering strictly to global compliance standards, we provide a stable, predictable, and fully audited foundation for mission-critical applications.
            </p>
          </section>
        </div>
      </div>
    </TracingBeam>
  );
}
