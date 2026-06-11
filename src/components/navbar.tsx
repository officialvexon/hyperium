"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconUser, IconMessage, IconBriefcase, IconTerminal2, IconTool } from "@tabler/icons-react";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Tools",
      link: "/tools",
      icon: (
        <IconTool className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Blog",
      link: "/blog",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Docs",
      link: "/docs",
      icon: (
        <IconTerminal2 className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
