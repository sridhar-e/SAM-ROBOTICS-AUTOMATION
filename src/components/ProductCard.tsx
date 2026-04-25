"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface ProductProps {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export function ProductCard({ id, index, title, description, tags, imageUrl }: ProductProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white border border-border overflow-hidden transition-all duration-700 flex flex-col relative"
    >
      <div className="relative h-[500px] w-full overflow-hidden bg-muted">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
          data-ai-hint="industrial machine"
        />
        
        {/* Technical Data Overlay (Visible on Hover) */}
        <div className="absolute inset-0 bg-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-12 flex flex-col justify-end">
           <div className="space-y-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
             <div className="space-y-2">
                <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase">Core Features</span>
                <ul className="grid grid-cols-1 gap-3">
                  {['Automated cycle control', 'Stainless steel 316L', 'IP65 Rated electronics'].map(feat => (
                    <li key={feat} className="flex items-center gap-3 text-white/70 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {feat}
                    </li>
                  ))}
                </ul>
             </div>
             <p className="text-white/60 font-medium text-base leading-relaxed border-t border-white/10 pt-6">
               {description}
             </p>
           </div>
        </div>

        <div className="absolute top-0 right-0 bg-secondary text-white font-black px-8 py-6 text-xs z-10 font-mono tracking-widest">
          MOD-{index}
        </div>
      </div>
      
      <div className="p-10 flex flex-col relative bg-white">
        <div className="flex gap-4 mb-8">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] font-black tracking-[0.2em] uppercase text-muted-foreground border-b-2 border-primary/20">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-4xl font-black mb-10 tracking-tighter uppercase leading-none group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="grid grid-cols-2 gap-4 mt-auto">
          <Button asChild variant="outline" className="rounded-none border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-black h-14 transition-all duration-300 uppercase tracking-widest text-[10px]">
            <Link href="#contact" className="flex items-center gap-2">Specs <ArrowUpRight className="w-3 h-3" /></Link>
          </Button>
          <Button asChild className="bg-primary rounded-none font-black h-14 text-[10px] tracking-widest uppercase hover:bg-secondary">
             <Link href="#contact">Inquire</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
