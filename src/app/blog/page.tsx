"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    title: "The Rise of Autonomous Security Agents",
    excerpt: "How AI is changing the landscape of threat detection and response.",
    category: "AI",
    author: "Hyperium Team",
    date: "June 11, 2026",
    slug: "autonomous-security-agents",
  },
  {
    title: "Post-Quantum Cryptography: Are We Ready?",
    excerpt: "Exploring the next generation of encryption in a world of quantum computing.",
    category: "Security",
    author: "Alex Rivers",
    date: "June 08, 2026",
    slug: "post-quantum-cryptography",
  },
  {
    title: "Building Hyper-Fast Edge Networks",
    excerpt: "Optimizing global content delivery for AI workloads.",
    category: "Infrastructure",
    author: "Sarah Chen",
    date: "June 05, 2026",
    slug: "edge-networks-ai",
  },
];

export default function BlogPage() {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Hyperium Blog</h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          Insights, updates, and deep dives into the technology powering Project Hyperium.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <Link key={idx} href={`/blog/${post.slug}`} className="group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="h-full p-8 rounded-3xl bg-neutral-900/30 border border-neutral-800 hover:border-blue-500/50 transition-all flex flex-col"
            >
              <span className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">{post.category}</span>
              <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-4 leading-tight">
                {post.title}
              </h2>
              <p className="text-neutral-500 mb-8 flex-grow">
                {post.excerpt}
              </p>
              <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
                <div className="text-sm">
                   <p className="text-neutral-300">{post.author}</p>
                   <p className="text-neutral-600">{post.date}</p>
                </div>
                <span className="text-blue-500">→</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
