"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Package, Users, ShieldCheck, Clock } from 'lucide-react';
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

  const stats = [
    { icon: Package, label: "Machines Delivered", val: "2,000+" },
    { icon: Globe, label: "Countries Exported To", val: "25+" },
    { icon: Users, label: "Happy Clients", val: "500+" },
    { icon: ShieldCheck, label: "Certified", val: "ISO · CE" },
    { icon: Clock, label: "After Sales Support", val: "24 × 7" }
  ];

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
        className="max-w-7xl relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="text-[10px] tracking-[0.5em] uppercase mb-10 text-primary font-black flex items-center gap-6"
        >
          <span className="w-16 h-[2px] bg-primary block"></span>
          Engineered in India. Running in 25+ Countries.
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-[8rem] font-black leading-[0.9] mb-12 text-white tracking-tighter uppercase"
        >
          Automatic Packing <br />
          <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>Machine Manufacturer</span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-16 text-white/50 font-medium max-w-4xl leading-relaxed"
        >
          SAM Robotics & Automation manufactures industrial packing machinery — VFFS pouch packing machines, auger fillers, bottle filling plants, and blending equipment — for FMCG, pharma, food, and chemical industries across India and in 25+ countries worldwide.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 mb-24"
        >
          <Button asChild size="lg" className="bg-primary text-white font-black h-20 px-16 rounded-none text-sm tracking-widest uppercase group relative overflow-hidden transition-all duration-500 border-none">
            <Link href="#contact" className="relative z-20 flex items-center justify-center gap-2">
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-2 border-white/10 text-white hover:bg-white hover:text-secondary font-black h-20 px-16 rounded-none text-sm tracking-widest bg-transparent transition-all duration-300 uppercase">
            <Link href="#products">
              Explore Our Machines
            </Link>
          </Button>
        </motion.div>

        {/* Quick Stats Banner */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-5 gap-8 pt-12 border-t border-white/5"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <stat.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-sm font-bold text-white/80 uppercase leading-none mb-1">{stat.val}</p>
                <p className="text-[10px] font-black tracking-widest text-white/40 uppercase leading-tight">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
