"use client";

import React from 'react';
import { motion } from 'framer-motion';
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
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Intro Section */}
        <section id="intro" className="py-24 md:py-40 px-6 md:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full aspect-square bg-primary flex items-center justify-center shadow-[40px_-40px_0_rgba(0,0,0,0.05)]">
                <Factory className="w-32 h-32 text-white" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-6 block">Our Mission</span>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
                Engineered for <span className="text-primary">Performance</span>, Built for Reliability.
              </h2>
              <p className="text-lg text-muted-foreground font-medium mb-10 leading-relaxed">
                Sam Robotics specializes in high-performance packaging machinery. From individual filling systems to fully automated turnkey production lines, we deliver solutions that drive efficiency, precision, and scalability across diverse industries.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-black mb-1">500+</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Machines Delivered</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black mb-1">15+</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Countries Served</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 md:py-40 bg-white px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-muted-foreground mb-6 block">Our Catalog</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">Comprehensive Packaging Solutions</h2>
              </div>
              <p className="mt-8 md:mt-0 text-muted-foreground font-medium max-w-sm">
                Industry-leading machinery engineered for seamless integration and maximum uptime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>

            <div className="mt-20 text-center">
              <Button asChild variant="outline" size="lg" className="rounded-none border-2 border-secondary text-secondary font-black tracking-widest uppercase hover:bg-secondary hover:text-white transition-all h-14 px-12">
                <Link href="#contact" className="flex items-center gap-3">
                  View Full Product Range <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* MSME Banner */}
        <section className="bg-primary py-24 md:py-32 px-6 md:px-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 transform skew-x-12 translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60 mb-6 block">Empowering Growth</span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
                Tailored Solutions for Startups & MSMEs
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <p className="text-xl text-white/80 font-medium mb-10 md:text-right leading-relaxed max-w-md">
                We design cost-effective, scalable automation that grows with your business—offering high performance without enterprise-level complexity.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-black rounded-none px-10 h-14 uppercase tracking-widest text-sm">
                <Link href="#contact">Consult with Experts</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section id="infrastructure" className="py-24 md:py-40 px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-muted-foreground mb-6 block">Manufacturing Power</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">World-Class Infrastructure</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: "Design & Engineering", desc: "Expert CAD/CAM teams developing custom mechanical and electrical solutions." },
                { icon: Zap, title: "Fabrication & Assembly", desc: "Modern shop floor with precision CNC machining and high-grade stainless steel fabrication." },
                { icon: Factory, title: "Testing & Validation", desc: "Dedicated facility for rigorous FAT (Factory Acceptance Testing) protocols." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-10 border border-border group hover:border-primary transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-muted flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                    <item.icon className="w-8 h-8 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-black mb-4 tracking-tight uppercase">{item.title}</h3>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 md:py-40 bg-secondary text-white px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              {[
                { text: "Sam Robotics delivered a filling line that exceeded our expectations. The precision is unmatched in the MSME segment.", author: "Rajesh Kumar", role: "Plant Head, BevCorp" },
                { text: "Their turnkey approach saved us months of integration headaches. High quality engineering and great support.", author: "Priya Sharma", role: "Ops Director, PharmaTech" }
              ].map((t, idx) => (
                <div key={idx} className="relative p-12 bg-white/5 border border-white/10">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
                  <p className="text-xl font-medium mb-8 italic text-white/80 leading-relaxed">"{t.text}"</p>
                  <div>
                    <h5 className="font-black uppercase tracking-widest text-xs text-primary">{t.author}</h5>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1 font-bold">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-40 px-6 md:px-24 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-muted-foreground mb-6 block">Ready to Automate?</span>
              <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter leading-none">Request a Quote</h2>
              
              <div className="space-y-10 mb-16">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-[10px] tracking-widest mb-2">Call Engineering Support</h4>
                    <p className="text-xl font-medium">+91 739 739 5665</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-[10px] tracking-widest mb-2">General Inquiries</h4>
                    <p className="text-xl font-medium">info@samrobotics.com</p>
                  </div>
                </div>
              </div>

              <div className="p-8 border-2 border-secondary inline-block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-secondary flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-black uppercase text-xs tracking-[0.2em]">MSME Registered</h4>
                </div>
                <p className="text-sm font-medium text-muted-foreground">Certified by the Government of India for machinery manufacturing excellence.</p>
              </div>
            </div>

            <div>
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
