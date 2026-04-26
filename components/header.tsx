"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="border-b-4 border-foreground bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-extrabold font-heading text-[1.35rem] sm:text-[1.6rem] text-foreground ml-1 group-hover:text-accent transition-colors">
  Taufik Ramlan Alfiansyah
</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-base font-bold text-foreground hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1">
              Home
            </Link>
            <Link href="/projects" className="text-base font-bold text-foreground hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1">
              Projects
            </Link>
            <Link href="/contact" className="text-base font-bold text-foreground hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1">
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <a href="https://github.com/Gateofheaven07" target="_blank" rel="noopener noreferrer">
              <Button className="border-2 border-foreground shadow-pop bg-white text-foreground hover:-translate-y-1 hover:shadow-pop-hover transition-all font-bold">
                GitHub
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="w-8 h-8 text-foreground" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 md:hidden" onClick={() => setIsSidebarOpen(false)}>
          <div 
            className="fixed inset-y-0 right-0 w-64 bg-white border-l-4 border-foreground shadow-pop p-6 flex flex-col gap-8 transform transition-transform" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <span className="font-extrabold font-heading text-xl text-foreground">Menu</span>
              <button onClick={() => setIsSidebarOpen(false)}>
                <X className="w-8 h-8 text-foreground" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              <Link href="/" onClick={() => setIsSidebarOpen(false)} className="text-xl font-bold text-foreground hover:text-accent border-b-4 border-transparent hover:border-foreground w-fit pb-1 transition-all">
                Home
              </Link>
              <Link href="/projects" onClick={() => setIsSidebarOpen(false)} className="text-xl font-bold text-foreground hover:text-accent border-b-4 border-transparent hover:border-foreground w-fit pb-1 transition-all">
                Projects
              </Link>
              <Link href="/contact" onClick={() => setIsSidebarOpen(false)} className="text-xl font-bold text-foreground hover:text-accent border-b-4 border-transparent hover:border-foreground w-fit pb-1 transition-all">
                Contact
              </Link>
              <div className="pt-6 border-t-4 border-foreground">
                <a href="https://github.com/Gateofheaven07" target="_blank" rel="noopener noreferrer" onClick={() => setIsSidebarOpen(false)}>
                  <Button className="w-full justify-center border-2 border-foreground shadow-pop bg-secondary text-foreground hover:-translate-y-1 hover:shadow-pop transition-all font-bold text-lg py-6">
                    GitHub
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
