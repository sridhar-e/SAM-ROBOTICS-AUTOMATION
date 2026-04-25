
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] bg-secondary flex flex-col justify-center pt-32 pb-20 px-6 md:px-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="grid-lines w-full h-full"></div>
      </div>
      
      <div className="max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.4em] uppercase mb-6 text-primary font-black"
        >
          Precision Engineering for Industry 4.0
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black leading-[1] mb-8 text-white tracking-tight"
        >
          Advanced Packaging Machinery
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl mb-12 text-white/60 font-medium max-w-2xl leading-relaxed"
        >
          Complete turnkey solutions from filling to palletizing — empowering startups, MSMEs, and enterprises with cutting-edge automation.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-10 rounded-none text-base">
            <Link href="#contact">Enquire Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-secondary font-bold h-14 px-10 rounded-none text-base bg-transparent">
            <Link href="#products" className="flex items-center gap-2">
              Explore Products <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Tech line decorations */}
      <div className="absolute bottom-0 right-0 w-full h-[30%] pointer-events-none overflow-hidden">
        <div className="relative w-full h-full">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.1 }}
              transition={{ delay: 1 + i * 0.1, duration: 1 }}
              className="absolute w-full h-[1px] bg-white origin-left"
              style={{ bottom: `${i * 12 + 10}%` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
