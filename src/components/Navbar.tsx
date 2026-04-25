
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        "fixed w-full top-0 z-50 transition-all duration-500 py-4 px-6 md:px-12 flex justify-between items-center",
        scrolled ? "bg-secondary/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-primary flex items-center justify-center transform rotate-45">
          <div className="w-2.5 h-2.5 bg-white"></div>
        </div>
        <span className={cn(
          "text-sm font-black tracking-tighter uppercase transition-colors duration-300",
          scrolled ? "text-white" : "text-white"
        )}>
          Sam Robotics
        </span>
      </div>

      <div className="hidden md:flex gap-8 text-[11px] tracking-widest uppercase font-bold items-center">
        {['products', 'infrastructure', 'updates', 'contact'].map((item) => (
          <Link
            key={item}
            href={`#${item}`}
            className="text-white/80 hover:text-primary transition-all duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
        
        <div className="flex items-center gap-6 ml-4 pl-6 border-l border-white/10">
          <Link 
            href="tel:+917397395665" 
            className="flex items-center gap-2 text-white/80 hover:text-primary transition-all duration-300"
          >
            <Phone className="w-3 h-3" />
            <span>+91 739 739 5665</span>
          </Link>
          <Link 
            href="https://wa.me/917397395665" 
            className="text-emerald-400 hover:text-emerald-300 transition-colors transform hover:scale-110"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
