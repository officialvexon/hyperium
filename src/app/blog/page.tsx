"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    title: "The Evolution of Edge Computing",
    excerpt: "How distributed edge networks are reducing latency and enabling enterprise scalability.",
    category: "Infrastructure",
    author: "Hyperium Engineering",
    date: "October 12, 2024",
    slug: "edge-computing-evolution",
  },
  {
    title: "Post-Quantum Cryptography in Enterprise Infrastructure",
    excerpt: "Preparing your organization's security posture for the next generation of cryptographic challenges.",
    category: "Security",
    author: "Alex Rivers",
    date: "September 28, 2024",
    slug: "post-quantum-cryptography",
  },
  {
    title: "Architecting Scalable AI Infrastructure",
    excerpt: "A deep dive into building highly available systems to support complex machine learning workloads.",
    category: "AI",
    author: "Sarah Chen",
    date: "September 15, 2024",
    slug: "ai-infrastructure",
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
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Engineering Blog</h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          Insights, updates, and deep dives into the enterprise technology powering Project Hyperium.
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
