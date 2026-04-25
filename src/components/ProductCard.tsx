
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group bg-white border border-border hover:border-primary transition-all duration-500 flex flex-col"
    >
      <div className="relative h-80 w-full overflow-hidden bg-muted">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          data-ai-hint="machinery product"
        />
        <div className="absolute top-0 right-0 bg-primary text-white font-black px-4 py-3 text-sm transform translate-x-1 -translate-y-1">
          {index}
        </div>
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] font-black tracking-widest uppercase bg-secondary text-white px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-8 flex-1">
          {description}
        </p>
        
        <Button asChild variant="outline" className="w-full rounded-none border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold h-12 transition-all duration-300">
          <Link href="#contact">Request Quote</Link>
        </Button>
      </div>
    </motion.div>
  );
}
