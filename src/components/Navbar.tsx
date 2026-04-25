"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-500 py-6 px-6 md:px-12 flex justify-between items-center",
        scrolled ? "bg-secondary/95 backdrop-blur-md shadow-lg py-4 border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary flex items-center justify-center transform rotate-45">
          <div className="w-3 h-3 bg-white"></div>
        </div>
        <div className="flex flex-col -space-y-1">
          <span className="text-lg font-black tracking-tighter uppercase text-white">
            Sam Robotics
          </span>
          <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-primary">
            Engineering Excellence
          </span>
        </div>
      </div>

      <div className="hidden lg:flex gap-10 text-[10px] tracking-[0.2em] uppercase font-black items-center">
        {['products', 'infrastructure', 'process', 'contact'].map((item) => (
          <Link
            key={item}
            href={`#${item}`}
            className="text-white/60 hover:text-primary transition-all duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
        
        <div className="flex items-center gap-6 ml-4 pl-6 border-l border-white/10">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none font-black h-10 px-6 text-[10px] tracking-widest uppercase transition-all duration-300">
            <Link href="#contact" className="flex items-center gap-2">
              Start Project <ArrowUpRight className="w-3 h-3" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="lg:hidden">
         <Button variant="ghost" size="icon" className="text-white">
           <div className="w-6 h-0.5 bg-white mb-1.5" />
           <div className="w-6 h-0.5 bg-white" />
         </Button>
      </div>
    </nav>
  );
}
