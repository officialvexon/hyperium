"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10"
        >
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-4">Technology</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 capitalize">
            {slug.replace(/-/g, " ")}
          </h1>
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
            <div>
              <p className="text-white font-medium">Hyperium Team</p>
              <p className="text-neutral-500 text-sm">June 11, 2026 • 8 min read</p>
            </div>
          </div>
        </motion.div>

        <div className="prose prose-invert prose-blue max-w-none text-neutral-300">
          <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
            In this article, we explore the intricate details of {slug.replace(/-/g, " ")} and how it is revolutionizing the cybersecurity landscape.
          </p>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Evolution of AI</h2>
          <p className="mb-6">
            Cybersecurity has always been a cat-and-mouse game. With the advent of large language models and autonomous agents, the speed of attacks has increased exponentially.
          </p>
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl my-8">
            <pre className="text-blue-400 font-mono text-sm">
              <code>{`function secureChannel() {
  const entropy = Math.random();
  return hyperium.encrypt(entropy);
}`}</code>
            </pre>
          </div>
          <p className="mb-6">
            Project Hyperium provides the foundational layer to protect sensitive data while maintaining high-performance throughput for AI workloads.
          </p>
        </div>
      </div>
    </TracingBeam>
  );
}
