
"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { InquiryForm } from '@/components/InquiryForm';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Factory, ShieldCheck, Zap, ArrowRight, Quote, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const products = [
    {
      id: "1",
      index: "01",
      title: "Liquid Filling Machines",
      description: "High-precision volumetric and gravity filling systems for beverages, oils, and chemicals. Automatic level control with minimal wastage.",
      tags: ["Volumetric", "Precision"],
      imageUrl: PlaceHolderImages.find(img => img.id === 'liquid-filling')?.imageUrl || "",
    },
    {
      id: "2",
      index: "02",
      title: "Capping Machines",
      description: "Automated screw capping, ROPP capping, and press-on systems. Consistent torque control for all types of bottles and jars.",
      tags: ["Automated", "Versatile"],
      imageUrl: PlaceHolderImages.find(img => img.id === 'capping-machine')?.imageUrl || "",
    },
    {
      id: "3",
      index: "03",
      title: "Labeling Machines",
      description: "Self-adhesive systems for round, flat, and oval containers. Front-back, wrap-around, and top labeling with precise placement.",
      tags: ["Precise", "Flexible"],
      imageUrl: PlaceHolderImages.find(img => img.id === 'labeling-machine')?.imageUrl || "",
    },
    {
      id: "4",
      index: "04",
      title: "Conveyor Systems",
      description: "Customizable belt, slat, and chain conveyor systems. Designed for seamless material handling and line integration.",
      tags: ["Modular", "Durable"],
      imageUrl: PlaceHolderImages.find(img => img.id === 'conveyor-system')?.imageUrl || "",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-white bg-background overflow-x-hidden">
      {/* Smooth Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left" style={{ scaleX }} />
      
      <Navbar />
      
      <main ref={containerRef}>
        <Hero />

        {/* Parallax Intro Section */}
        <section id="intro" className="py-32 md:py-56 px-6 md:px-24 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              className="relative"
            >
              <div className="relative w-full aspect-[4/5] bg-secondary p-1">
                <div className="absolute -inset-4 border-2 border-primary/20 pointer-events-none -z-10 transform translate-x-8 translate-y-8" />
                <div className="w-full h-full bg-white flex items-center justify-center">
                  <Factory className="w-32 h-32 text-primary" />
                </div>
              </div>
              
              <div className="absolute -bottom-12 -right-12 bg-primary p-12 hidden lg:block">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-12 h-12 text-white" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
            >
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-8 block">Our Mission</span>
              <h2 className="text-5xl md:text-7xl font-black mb-12 leading-[0.9] tracking-tighter">
                Engineering <br />
                <span className="text-primary italic">Excellence</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium mb-12 leading-relaxed max-w-lg">
                Sam Robotics specializes in high-performance packaging machinery. From individual filling systems to fully automated turnkey production lines.
              </p>
              
              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-border">
                <div>
                  <h4 className="text-4xl font-black mb-2">500+</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Units Exported</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black mb-2">15+</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Countries Served</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Section with Reveal */}
        <section id="products" className="py-32 md:py-56 bg-white px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-32">
              <div className="max-w-3xl">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[10px] font-black tracking-[0.5em] uppercase text-muted-foreground mb-8 block"
                >
                  Industrial Solutions
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-9xl font-black tracking-tighter leading-none"
                >
                  CATALOGUE
                </motion.h2>
              </div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12 md:mt-0 text-muted-foreground font-medium max-w-sm text-lg"
              >
                Industry-leading machinery engineered for seamless integration and maximum uptime.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
              {products.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Banner Section */}
        <section className="bg-primary py-40 md:py-64 px-6 md:px-24 relative overflow-hidden group">
          <motion.div 
            initial={{ x: '100%' }}
            whileInView={{ x: '-100%' }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap text-[20rem] font-black text-white/5 pointer-events-none select-none"
          >
            PRECISION • AUTOMATION • SCALE •
          </motion.div>
          
          <div className="max-w-7xl mx-auto relative z-10">
             <div className="max-w-4xl">
                <motion.h2 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-16"
                >
                  READY TO <br />
                  EVOLVE?
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl text-white/80 font-medium mb-16 leading-relaxed max-w-2xl"
                >
                  We design cost-effective, scalable automation that grows with your business—offering high performance without enterprise-level complexity.
                </motion.p>
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 }}
                >
                   <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-black rounded-none px-16 h-20 uppercase tracking-widest text-lg">
                    <Link href="#contact">Start a Consultation</Link>
                  </Button>
                </motion.div>
             </div>
          </div>
        </section>

        {/* Infrastructure with Hover States */}
        <section id="infrastructure" className="py-32 md:py-56 px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-32">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-muted-foreground mb-8 block">Manufacturing</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">FACILITIES</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: ShieldCheck, title: "R&D LAB", desc: "Expert CAD/CAM teams developing custom mechanical and electrical solutions." },
                { icon: Zap, title: "FABRICATION", desc: "Modern shop floor with precision CNC machining and high-grade stainless steel fabrication." },
                { icon: Factory, title: "VAL-TECH", desc: "Dedicated facility for rigorous FAT (Factory Acceptance Testing) protocols." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-12 border border-border group hover:border-primary transition-all duration-500 relative overflow-hidden"
                >
                  <div className="w-20 h-20 bg-muted flex items-center justify-center mb-12 group-hover:bg-primary transition-colors duration-500">
                    <item.icon className="w-10 h-10 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-black mb-6 tracking-tight uppercase">{item.title}</h3>
                  <p className="text-muted-foreground text-base font-medium leading-relaxed">{item.desc}</p>
                  
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 -translate-y-1/2 translate-x-1/2 rounded-full group-hover:scale-[10] transition-transform duration-700 -z-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 md:py-56 px-6 md:px-24 bg-white border-t border-border">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10px] font-black tracking-[0.5em] uppercase text-muted-foreground mb-8 block"
              >
                Connect
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-9xl font-black mb-20 tracking-tighter leading-[0.85]"
              >
                LET'S <br /> BUILD.
              </motion.h2>
              
              <div className="space-y-12 mb-20">
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 bg-primary flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-[10px] tracking-widest text-muted-foreground mb-1">Direct Line</h4>
                    <p className="text-2xl font-bold">+91 739 739 5665</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-16 h-16 bg-primary flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-[10px] tracking-widest text-muted-foreground mb-1">Engineering</h4>
                    <p className="text-2xl font-bold">info@samrobotics.com</p>
                  </div>
                </div>
              </div>

              <div className="p-12 border-4 border-secondary/5 inline-block relative overflow-hidden">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-black uppercase text-sm tracking-[0.2em]">MSME Registered</h4>
                </div>
                <p className="text-base font-medium text-muted-foreground max-w-xs">Certified by the Government of India for machinery manufacturing excellence.</p>
              </div>
            </div>

            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <InquiryForm />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
