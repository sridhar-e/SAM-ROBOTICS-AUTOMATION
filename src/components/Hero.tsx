"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Cpu, Settings } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-screen bg-secondary flex flex-col justify-center pt-32 pb-20 px-6 md:px-24 overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="grid-lines w-full h-full"></div>
      </motion.div>
      
      <div className="absolute inset-0 dot-grid opacity-10" />
      
      <motion.div 
        style={{ opacity }}
        className="absolute -right-20 top-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="text-[10px] tracking-[0.5em] uppercase mb-10 text-primary font-black flex items-center gap-6"
        >
          <span className="w-16 h-[2px] bg-primary block"></span>
          Industry 4.0 Pioneers
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-[11rem] font-black leading-[0.8] mb-12 text-white tracking-tighter"
        >
          ENGINEERED<br />
          <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>FOR SCALE</span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl mb-16 text-white/50 font-medium max-w-2xl leading-relaxed"
        >
          Developing modular, high-performance packaging systems for the global manufacturing sector. 500+ systems commissioned worldwide.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 mb-24"
        >
          <Button asChild size="lg" className="bg-primary text-white font-black h-20 px-16 rounded-none text-sm tracking-widest uppercase group relative overflow-hidden transition-all duration-500 border-none">
            <Link href="#contact" className="relative z-20 flex items-center justify-center">
              <span>Request Quote</span>
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-2 border-white/10 text-white hover:bg-white hover:text-secondary font-black h-20 px-16 rounded-none text-sm tracking-widest bg-transparent transition-all duration-300 uppercase">
            <Link href="#products" className="flex items-center gap-3">
              Catalogue <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>

        {/* Quick Stats Banner */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5"
        >
          {[
            { icon: Globe, label: "Global Reach", val: "15+ Countries" },
            { icon: Cpu, label: "Tech Stack", val: "Industry 4.0" },
            { icon: Settings, label: "Turnkey", val: "End-to-End" },
            { icon: Globe, label: "Support", val: "24/7 Service" }
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <stat.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-[10px] font-black tracking-widest text-white/40 uppercase">{stat.label}</p>
                <p className="text-sm font-bold text-white/80 uppercase">{stat.val}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
