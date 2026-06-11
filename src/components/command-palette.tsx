"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconSearch, IconCommand } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const actions = [
    { name: "Go to Home", link: "/" },
    { name: "Explore Projects", link: "/projects" },
    { name: "Tools Dashboard", link: "/tools" },
    { name: "Read Blog", link: "/blog" },
    { name: "Documentation", link: "/docs" },
    { name: "System Status", link: "/status" },
  ].filter((action) => action.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-[10000]"
      >
        <IconCommand size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[10001] flex items-start justify-center pt-[20vh] px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center px-4 py-3 border-b border-neutral-800">
                <IconSearch className="text-neutral-500 mr-3" size={20} />
                <input
                  autoFocus
                  placeholder="Search commands... (e.g. 'tools')"
                  className="bg-transparent border-none outline-none text-white w-full text-lg"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-xs font-semibold text-neutral-500 bg-neutral-800 border border-neutral-700 rounded-md">
                  ESC
                </kbd>
              </div>
              <div className="max-h-[300px] overflow-y-auto p-2">
                {actions.length > 0 ? (
                  actions.map((action, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        router.push(action.link);
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors flex justify-between items-center group"
                    >
                      <span>{action.name}</span>
                      <span className="text-xs text-neutral-600 group-hover:text-blue-500">{action.link}</span>
                    </button>
                  ))
                ) : (
                  <div className="p-8 text-center text-neutral-500">No results found.</div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
