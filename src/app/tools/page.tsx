"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { 
  IconLock, 
  IconCode, 
  IconHash, 
  IconBraces, 
  IconRegex, 
  IconKey, 
  IconApi 
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function ToolsDashboard() {
  const tools = [
    {
      title: "Code Obfuscator",
      description: "Advanced protection for your JavaScript/TypeScript code.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20" />,
      icon: <IconLock className="h-4 w-4 text-neutral-500" />,
      link: "/tools/obfuscator",
    },
    {
      title: "Data Encoder",
      description: "Encode/decode data between various formats (Base64, Hex, etc.).",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-20" />,
      icon: <IconCode className="h-4 w-4 text-neutral-500" />,
      link: "/tools/encoder",
    },
    {
      title: "Hash Generator",
      description: "Securely generate MD5, SHA-256, and SHA-512 hashes.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 opacity-20" />,
      icon: <IconHash className="h-4 w-4 text-neutral-500" />,
      link: "/tools/hash-generator",
    },
    {
      title: "JSON Formatter",
      description: "Prettify, validate, and minify your JSON data.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 opacity-20" />,
      icon: <IconBraces className="h-4 w-4 text-neutral-500" />,
      link: "/tools/json-formatter",
    },
    {
      title: "Regex Playground",
      description: "Test and debug your regular expressions in real-time.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-red-500 to-rose-500 opacity-20" />,
      icon: <IconRegex className="h-4 w-4 text-neutral-500" />,
      link: "/tools/regex-playground",
    },
    {
      title: "Password Generator",
      description: "Create cryptographically strong passwords.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 opacity-20" />,
      icon: <IconKey className="h-4 w-4 text-neutral-500" />,
      link: "/tools/password-generator",
    },
    {
      title: "API Tester",
      description: "Test your REST endpoints with ease.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 opacity-20" />,
      icon: <IconApi className="h-4 w-4 text-neutral-500" />,
      link: "/tools/api-tester",
    },
  ];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Developer Toolkit</h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          A suite of essential tools for modern developers and security researchers.
        </p>
      </motion.div>

      <BentoGrid>
        {tools.map((item, i) => (
          <a key={i} href={item.link}>
            <BentoGridItem
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          </a>
        ))}
      </BentoGrid>
    </div>
  );
}
