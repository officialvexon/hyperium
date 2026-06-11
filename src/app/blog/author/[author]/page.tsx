"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogAuthorPage() {
  const params = useParams();
  const author = params.author as string;

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center mb-16 text-center"
      >
        <div className="h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.5)]" />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 capitalize">{author.replace(/-/g, " ")}</h1>
        <p className="text-blue-400 font-medium mb-4">Senior Security Architect at Hyperium</p>
        <p className="text-neutral-400 max-w-lg">
          Expert in distributed systems, AI safety, and cryptographic protocols. Contributing to the future of the web.
        </p>
      </motion.div>

      <h2 className="text-2xl font-bold text-white mb-8">Articles by {author.replace(/-/g, " ")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2].map((i) => (
          <Link href={`/blog/article-${i}`} key={i} className="group">
             <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/50 transition-all h-full flex flex-col">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 mb-2">Architecting Secure LLMs</h3>
                <p className="text-neutral-500 text-sm flex-grow">A deep dive into the security boundaries of modern AI systems.</p>
                <span className="text-xs text-neutral-600 mt-4">June 11, 2026</span>
             </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
