"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogCategoryPage() {
  const params = useParams();
  const category = params.category as string;

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 capitalize">{category}</h1>
        <p className="text-neutral-400">Articles categorized under {category}.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3].map((i) => (
          <Link href={`/blog/sample-post-${i}`} key={i} className="group">
            <div className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/50 transition-all">
              <div className="h-48 w-full bg-neutral-800 rounded-2xl mb-6 overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Enterprise Patterns in {category}</h2>
              <p className="text-neutral-400 mt-4 line-clamp-2">
                Discover how the latest advancements in {category} are shaping modern enterprise architecture and scalability.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-neutral-500">October 10, 2024</span>
                <span className="text-blue-500 text-sm font-semibold">Read More →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
