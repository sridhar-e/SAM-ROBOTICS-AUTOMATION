
"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } },
  };

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-screen bg-secondary flex flex-col justify-center pt-32 pb-20 px-6 md:px-24 overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid-lines w-full h-full"></div>
      </motion.div>
      
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute -right-20 top-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="text-xs tracking-[0.5em] uppercase mb-8 text-primary font-black flex items-center gap-4"
        >
          <span className="w-12 h-[1px] bg-primary block"></span>
          Precision Engineering for Industry 4.0
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-[10rem] font-black leading-[0.85] mb-12 text-white tracking-tighter"
        >
          FUTURE<br />
          <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>ROBOTICS</span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl mb-16 text-white/60 font-medium max-w-2xl leading-relaxed"
        >
          Complete turnkey solutions from filling to palletizing — empowering startups, MSMEs, and enterprises with cutting-edge automation.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Button asChild size="lg" className="bg-primary text-white font-black h-16 px-12 rounded-none text-base tracking-widest uppercase group overflow-hidden relative border-none hover:bg-primary/90 transition-colors">
            <Link href="#contact" className="relative z-10 flex items-center justify-center w-full h-full">
              <span className="relative z-20 group-hover:text-black transition-colors duration-300">Enquire Now</span>
              <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-2 border-white/20 text-white hover:bg-white hover:text-secondary font-black h-16 px-12 rounded-none text-base bg-transparent transition-all duration-300">
            <Link href="#products" className="flex items-center gap-3">
              Explore Products <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Animated bottom bar */}
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 h-1 bg-primary/20"
      />
    </section>
  );
}
