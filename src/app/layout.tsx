import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { CommandPalette } from "@/components/command-palette";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Hyperium | Futuristic AI & Cybersecurity",
  description: "Next-generation developer tools, AI-powered cybersecurity, and futuristic digital experiences. Built by Project Hyperium.",
  keywords: ["AI", "Cybersecurity", "Developer Tools", "Next.js", "Hyperium", "Futuristic UI"],
  openGraph: {
    title: "Project Hyperium",
    description: "Futuristic AI & Cybersecurity Ecosystem",
    type: "website",
    locale: "en_US",
    url: "https://hyperium.org", // Placeholder
    siteName: "Project Hyperium",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased bg-slate-950 text-slate-50 selection:bg-blue-500 selection:text-white"
        )}
      >
        <Navbar />
        <CommandPalette />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        {/* Future Footer would go here */}
      </body>
    </html>
  );
}
