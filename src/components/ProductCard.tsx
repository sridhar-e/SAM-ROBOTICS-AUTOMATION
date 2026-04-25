
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
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
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className="group bg-white border border-border overflow-hidden transition-all duration-500 flex flex-col relative"
    >
      <div className="relative h-[450px] w-full overflow-hidden bg-muted">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          data-ai-hint="machinery product"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-12">
           <div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
             <p className="text-white font-medium text-lg leading-relaxed">
               {description}
             </p>
           </div>
        </div>

        <div className="absolute top-0 right-0 bg-primary text-white font-black px-6 py-4 text-sm z-10">
          {index}
        </div>
      </div>
      
      <div className="p-10 flex flex-col relative bg-white">
        <div className="flex gap-3 mb-6">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] font-black tracking-[0.2em] uppercase border border-secondary/10 text-secondary/60 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-3xl font-black mb-8 tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="mt-auto">
          <Button asChild variant="outline" className="w-full rounded-none border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-black h-14 transition-all duration-300 uppercase tracking-widest text-xs">
            <Link href="#contact">Request Technical Specs</Link>
          </Button>
        </div>
      </div>
      
      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}
