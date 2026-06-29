
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
import { Factory, ShieldCheck, Zap, ArrowRight, Box, Wrench, Microscope, Briefcase, Landmark } from 'lucide-react';
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
      title: "Liquid Filling Systems",
      description: "High-precision volumetric and gravity filling systems for beverages, oils, and chemicals. Automatic level control with minimal wastage.",
      tags: ["Precision", "SS-316L"],
      imageUrl: PlaceHolderImages.find(img => img.id === 'liquid-filling')?.imageUrl || "",
    },
    {
      id: "2",
      index: "02",
      title: "Capping Infrastructure",
      description: "Automated screw capping, ROPP capping, and press-on systems. Consistent torque control for all types of bottles and jars.",
      tags: ["Automated", "Torque-Ctrl"],
      imageUrl: PlaceHolderImages.find(img => img.id === 'capping-machine')?.imageUrl || "",
    },
    {
      id: "3",
      index: "03",
      title: "High-Speed Labeling",
      description: "Self-adhesive systems for round, flat, and oval containers. Front-back, wrap-around, and top labeling with precise placement.",
      tags: ["Fast", "Flexible"],
      imageUrl: PlaceHolderImages.find(img => img.id === 'labeling-machine')?.imageUrl || "",
    },
    {
      id: "4",
      index: "04",
      title: "Logistics Conveyors",
      description: "Customizable belt, slat, and chain conveyor systems. Designed for seamless material handling and line integration.",
      tags: ["Modular", "Heavy-Duty"],
      imageUrl: PlaceHolderImages.find(img => img.id === 'conveyor-system')?.imageUrl || "",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-white bg-background overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left" style={{ scaleX }} />
      
      <Navbar />
      
      <main ref={containerRef}>
        <Hero />

        {/* Who We Are Section */}
        <section id="who-we-are" className="py-32 md:py-64 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 dot-grid w-1/3 h-full opacity-[0.03] -z-10" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5"
              >
                <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-8 block">Who We Are</span>
                <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">
                  The Manufacturer India's Growing <span className="text-primary italic">Factories</span> Are Switching To
                </h2>
                <div className="w-24 h-2 bg-secondary mb-12" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-7"
              >
                <div className="space-y-8">
                  <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground">
                    SAM Robotics & Automation is an automatic packing machine manufacturer built in Coimbatore — trusted by factories across India and in 25+ countries. 
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We are a custom packaging machine manufacturer: every machine is engineered to your product, your speed, and your production floor — not pulled from a catalogue. Our commitment to bespoke engineering ensures that your production line is optimized for your specific operational needs.
                  </p>
                  
                  <div className="pt-8 flex items-center gap-8 border-t border-border">
                    <Link 
                      href="/about" 
                      className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] hover:text-primary transition-colors"
                    >
                      Learn Our Story <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Logo Strip / Partners Section */}
        <section className="py-24 bg-muted/30 border-y border-border overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[10px] font-black tracking-[0.5em] uppercase text-muted-foreground text-center mb-16">Trusted by industry giants & government bodies</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
               {['ITC', 'TVS', 'HINDUSTAN FOODS', 'TN GOVT'].map((brand, i) => (
                 <span key={i} className="text-2xl md:text-4xl font-black tracking-tighter flex items-center gap-2">
                   {brand === 'TN GOVT' && <Landmark className="w-6 h-6" />}
                   {brand}
                 </span>
               ))}
            </div>
          </div>
        </section>

        {/* Mission Section / Engineering Philosophy */}
        <section id="intro" className="py-32 md:py-64 px-6 md:px-24 max-w-7xl mx-auto relative">
          <div className="absolute top-0 right-0 dot-grid w-96 h-96 -z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative w-full aspect-square bg-muted">
                <div className="absolute -inset-8 border border-primary/20 -z-10 translate-x-4 translate-y-4" />
                <div className="absolute -inset-8 border border-secondary/10 -z-20 -translate-x-4 -translate-y-4" />
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                   <Factory className="w-40 h-40 text-white opacity-10" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-9xl font-black text-white/5 tracking-tighter">15YRS</span>
                   </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-10 block">Engineering Philosophy</span>
              <h2 className="text-6xl md:text-8xl font-black mb-12 leading-[0.85] tracking-tighter uppercase">
                Modular <br />
                <span className="text-primary italic">Systems.</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium mb-12 leading-relaxed max-w-lg">
                We believe in automation that scales. Our machines are designed with a modular architecture, allowing you to expand your production lines as your demand grows.
              </p>
              
              <div className="grid grid-cols-2 gap-16 pt-12 border-t border-border font-mono">
                <div>
                  <h4 className="text-5xl font-black mb-2 tracking-tighter">99.8%</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Uptime Record</p>
                </div>
                <div>
                  <h4 className="text-5xl font-black mb-2 tracking-tighter">24HR</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Tech Support</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-32 md:py-64 bg-secondary text-white px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-32">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-8 block">Execution Framework</span>
              <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">PROCESS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {[
                { icon: Briefcase, step: "01", title: "Consultation", desc: "Analyzing your production goals and site constraints." },
                { icon: Microscope, step: "02", title: "Engineering", desc: "Custom CAD design and electrical mapping of systems." },
                { icon: Wrench, step: "03", title: "Fabrication", desc: "Precision assembly and in-house FAT protocols." },
                { icon: Box, step: "04", title: "Commissioning", desc: "On-site installation and operator training." }
              ].map((item, idx) => (
                <div key={idx} className="bg-secondary p-12 group hover:bg-primary transition-all duration-500">
                  <span className="text-5xl font-black text-white/10 group-hover:text-white/20 transition-colors mb-12 block font-mono">{item.step}</span>
                  <item.icon className="w-10 h-10 text-primary group-hover:text-white mb-10 transition-colors" />
                  <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-white/40 text-sm font-medium group-hover:text-white/80 transition-colors leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-32 md:py-64 bg-white px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-32">
              <div className="max-w-3xl">
                <motion.span className="text-[10px] font-black tracking-[0.5em] uppercase text-muted-foreground mb-8 block">Product Range</motion.span>
                <motion.h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-none uppercase">Systems</motion.h2>
              </div>
              <motion.p className="mt-12 md:mt-0 text-muted-foreground font-medium max-w-sm text-lg italic border-l-4 border-primary pl-8">
                Performance-driven hardware built for 24/7 industrial cycles.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              {products.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-primary py-48 md:py-72 px-6 md:px-24 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-20" />
          <motion.div 
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap text-[25rem] font-black text-white/5 pointer-events-none select-none"
          >
            MODULAR • SCALABLE • PRECISE • MODULAR • SCALABLE • PRECISE •
          </motion.div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
             <div className="max-w-4xl mx-auto">
                <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter mb-16 uppercase">
                  Modernize <br />
                  Operations.
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                   <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-black rounded-none px-20 h-24 uppercase tracking-widest text-lg shadow-2xl">
                    <Link href="#contact">Get Technical Review</Link>
                  </Button>
                </div>
             </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section id="infrastructure" className="py-32 md:py-64 px-6 md:px-24 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-32 flex justify-between items-end">
              <div>
                <span className="text-[10px] font-black tracking-[0.5em] uppercase text-muted-foreground mb-8 block">Manufacturing</span>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">Facilities</h2>
              </div>
              <p className="max-w-xs text-xs font-bold uppercase tracking-widest text-muted-foreground text-right hidden md:block">
                ISO 9001:2015 Certified Production Center
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: ShieldCheck, title: "Precision Design", desc: "CAD/CAM specialized teams for custom hardware adaptation." },
                { icon: Zap, title: "Assembly Floor", desc: "Lean manufacturing setup for streamlined unit fabrication." },
                { icon: Factory, title: "FAT Lab", desc: "Rigorous stress testing in controlled industrial environments." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-white p-16 border border-border group hover:border-primary hover:shadow-2xl transition-all duration-500 relative"
                >
                  <div className="w-20 h-20 bg-muted flex items-center justify-center mb-12 group-hover:bg-secondary transition-colors duration-500">
                    <item.icon className="w-10 h-10 group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-black mb-6 tracking-tight uppercase">{item.title}</h3>
                  <p className="text-muted-foreground text-base font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 md:py-64 px-6 md:px-24 bg-white border-t border-border relative">
          <div className="absolute bottom-0 right-0 dot-grid w-1/2 h-full -z-10 opacity-[0.03]" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-muted-foreground mb-8 block">Partner with us</span>
              <h2 className="text-7xl md:text-9xl font-black mb-20 tracking-tighter leading-[0.8] uppercase">
                Let's <br /> Build.
              </h2>
              
              <div className="space-y-16">
                <div className="flex items-center gap-10 group cursor-pointer">
                  <div className="w-20 h-20 bg-primary flex items-center justify-center shrink-0 transition-all group-hover:bg-secondary">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-[10px] tracking-widest text-muted-foreground mb-2">Technical Sales</h4>
                    <p className="text-3xl font-black tracking-tight">+91 739 739 5665</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-10 group cursor-pointer">
                  <div className="w-20 h-20 bg-primary flex items-center justify-center shrink-0 transition-all group-hover:bg-secondary">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-[10px] tracking-widest text-muted-foreground mb-2">Project Inquiries</h4>
                    <p className="text-3xl font-black tracking-tight">info@samrobotics.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-24 p-12 border-4 border-secondary/5 bg-muted/20 relative">
                <div className="flex items-center gap-6 mb-8">
                  <ShieldCheck className="w-10 h-10 text-primary" />
                  <h4 className="font-black uppercase text-sm tracking-[0.2em]">Quality Verified</h4>
                </div>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                  All components undergo rigorous multi-stage verification before dispatch. MSME and ISO certified manufacturing.
                </p>
              </div>
            </div>

            <div className="relative">
               <div className="absolute -inset-4 border-4 border-primary/10 -z-10 translate-x-4 translate-y-4" />
               <InquiryForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

const Phone = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
