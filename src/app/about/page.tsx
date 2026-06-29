
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Stats } from '@/components/Stats';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Award, 
  Users, 
  History, 
  ShieldCheck, 
  Lightbulb, 
  Handshake, 
  Zap, 
  Search,
  CheckCircle2,
  Globe,
  Briefcase
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const timeline = [
    { year: "2012", title: "Company Founded", desc: "Started with a vision to revolutionize the South Indian packaging market from Coimbatore." },
    { year: "2014", title: "First Machine Delivered", desc: "Successfully installed our first high-accuracy VFFS machine for a major snack manufacturer." },
    { year: "2017", title: "Expansion into Export", desc: "Successfully shipped our first overseas order to the UAE, marking our global entry." },
    { year: "2019", title: "ISO & CE Certification", desc: "Achieved international quality benchmarks, enabling entry into European and US markets." },
    { year: "2022", title: "25+ Countries Served", desc: "Established a strong presence across 4 continents with over 500+ happy global clients." },
    { year: "2025", title: "Industry 4.0 Integration", desc: "Launching smart-enabled machinery with remote diagnostics and AI-driven efficiency." }
  ];

  const values = [
    { icon: ShieldCheck, title: "Quality First", desc: "No compromises on engineering integrity or component selection." },
    { icon: Lightbulb, title: "Innovation", desc: "Continuously evolving our designs for faster, more accurate packing." },
    { icon: Users, title: "Customer Success", desc: "Our machines are built to make your business more profitable." },
    { icon: Zap, title: "Reliability", desc: "Industrial-grade builds meant to run 24/7 with minimal downtime." },
    { icon: Search, title: "Transparency", desc: "Clear communication from initial quote to final site installation." },
    { icon: Handshake, title: "Partnership", desc: "We don't just sell machines; we support your factory's growth." }
  ];

  const leadership = [
    {
      name: "Senthil Kumar",
      role: "Founder & CEO",
      desc: "An engineering veteran with 25+ years of experience in automation and precision manufacturing.",
      image: "https://picsum.photos/seed/leader1/400/400"
    },
    {
      name: "Arjun Senthil",
      role: "Operations Manager",
      desc: "Spearheading global exports and ensuring seamless installation and service delivery worldwide.",
      image: "https://picsum.photos/seed/leader2/400/400"
    }
  ];

  const facilityImages = [
    { id: 'infra-design', label: "Engineering Design Center" },
    { id: 'infra-assembly', label: "Main Assembly Floor" },
    { id: 'infra-testing', label: "Quality Control Lab" },
    { id: 'hero-machinery', label: "Final Export Packaging" }
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-white bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Header Section - Adjusted padding to accommodate transparent Navbar */}
        <section className="relative h-[90vh] flex items-center overflow-hidden bg-secondary pt-32">
          <div className="absolute inset-0 opacity-40">
            <Image 
              src={PlaceHolderImages.find(img => img.id === 'hero-machinery')?.imageUrl || ""}
              alt="Industrial Manufacturing"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent" />
          </div>
          <div className="absolute inset-0 grid-lines opacity-10" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-8 block">About SAM</span>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-12">
                Engineering <br /> <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>Packaging Automation</span> <br /> Since Day One
              </h1>
              <p className="text-xl text-white/60 font-medium mb-12 leading-relaxed max-w-2xl">
                A trusted packaging machine manufacturer from Coimbatore serving factories across India and 25+ countries worldwide.
              </p>
              <Button asChild size="lg" className="bg-primary text-white font-black h-16 px-12 rounded-none text-xs tracking-widest uppercase">
                <Link href="/products">Explore Our Machines <ArrowRight className="ml-3 w-4 h-4" /></Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 2. Our Story (Timeline) */}
        <section className="py-16 px-6 md:px-24 bg-white relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-4 block">JOURNEY</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Our Story</h2>
            </div>

            <div className="relative">
              {/* Vertical Line for Desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
              
              <div className="space-y-12 md:space-y-0 relative">
                {timeline.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-center justify-between md:mb-24 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="w-full md:w-[45%]">
                      <div className={`p-8 border-2 border-border hover:border-primary transition-all duration-500 bg-white group ${idx % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                        <span className="text-4xl font-black text-primary/20 mb-4 block group-hover:text-primary transition-colors">{item.year}</span>
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{item.title}</h3>
                        <p className="text-muted-foreground font-medium">{item.desc}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-secondary items-center justify-center z-10">
                      <div className="w-2 h-2 bg-primary" />
                    </div>

                    <div className="hidden md:block w-[45%]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. By the Numbers */}
        <section className="bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto py-16">
             <div className="text-center mb-16 px-6">
                <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-4 block">GLOBAL REACH</span>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">By the Numbers</h2>
             </div>
             <Stats />
          </div>
        </section>

        {/* 4. Leadership */}
        <section className="py-16 px-6 md:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-4 block">THE TEAM</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Leadership</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {leadership.map((leader, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative aspect-square overflow-hidden bg-muted mb-8 grayscale hover:grayscale-0 transition-all duration-700">
                    <Image 
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint="portrait"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">{leader.name}</h3>
                  <p className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6">{leader.role}</p>
                  <p className="text-muted-foreground font-medium leading-relaxed max-w-md">{leader.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Mission & Vision */}
        <section className="py-16 bg-muted/30 px-6 md:px-24 border-y border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-16 border-2 border-border hover:border-primary transition-all duration-500 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8">
                  <Target className="w-16 h-16 text-primary/10 group-hover:text-primary/20 transition-colors" />
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                  <div className="w-8 h-1 bg-primary" /> Mission
                </h3>
                <p className="text-xl font-medium leading-relaxed text-secondary">
                  To deliver reliable, innovative, and efficient packaging automation solutions that improve manufacturing productivity and drive customer growth.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-secondary p-16 border-2 border-secondary hover:border-primary transition-all duration-500 relative group overflow-hidden text-white"
              >
                <div className="absolute top-0 right-0 p-8">
                  <Eye className="w-16 h-16 text-white/5 group-hover:text-white/10 transition-colors" />
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4 text-white">
                  <div className="w-8 h-1 bg-primary" /> Vision
                </h3>
                <p className="text-xl font-medium leading-relaxed text-white/70">
                  To become one of the most trusted global packaging machine manufacturers through engineering excellence, customer success, and Industry 4.0 integration.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. What We Stand For */}
        <section className="py-16 px-6 md:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-4 block">VALUES</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">What We Stand For</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-12 border border-border group hover:border-primary transition-all duration-500 bg-white"
                >
                  <div className="w-16 h-16 bg-muted flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                    <val.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4">{val.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Facility Section */}
        <section className="py-16 bg-secondary text-white px-6 md:px-24 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-4 block">INFRASTRUCTURE</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Our Facility</h2>
              </div>
              <p className="max-w-md text-white/50 text-sm font-medium leading-relaxed">
                Our state-of-the-art manufacturing unit in Coimbatore is equipped with precision machining centers and a dedicated R&D lab for custom engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px]">
              {facilityImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative group overflow-hidden bg-white/5 h-full ${idx === 0 || idx === 3 ? 'md:col-span-2' : ''}`}
                >
                  <Image 
                    src={PlaceHolderImages.find(p => p.id === img.id)?.imageUrl || ""}
                    alt={img.label}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 block">{idx + 1}</span>
                    <h4 className="text-lg font-black uppercase tracking-tight">{img.label}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Certifications */}
        <section className="py-16 bg-white px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-4 block">QUALITY ASSURED</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Certifications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "ISO 9001:2015", desc: "Quality Management System Certified" },
                { title: "CE Certified", desc: "European Safety Standards Compliance" },
                { title: "IE Code Registered", desc: "Import Export Code for Global Trade" },
                { title: "Industry 4.0", desc: "Compliant with Modern Smart Factory Standards" }
              ].map((cert, idx) => (
                <div key={idx} className="p-10 bg-muted/30 border-2 border-border flex flex-col items-center text-center group hover:border-primary transition-colors">
                  <Award className="w-12 h-12 text-primary mb-6" />
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Clients - Logo Carousel */}
        <section className="py-16 bg-white border-t border-border overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-4 block">TRUSTED BY</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Leading Brands Worldwide</h2>
          </div>
          
          <div className="flex gap-16 animate-marquee whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-16">
                 <span className="text-4xl font-black uppercase tracking-tighter grayscale">ITC FOODS</span>
                 <span className="text-4xl font-black uppercase tracking-tighter grayscale">HINDUSTAN FOODS</span>
                 <span className="text-4xl font-black uppercase tracking-tighter grayscale">TVS MOTORS</span>
                 <span className="text-4xl font-black uppercase tracking-tighter grayscale">BRITANNIA</span>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Final CTA */}
        <section className="relative py-24 bg-secondary overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image 
               src={PlaceHolderImages.find(img => img.id === 'infra-assembly')?.imageUrl || ""}
               alt="Factory"
               fill
               className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8] mb-12"
            >
              Partner with the <br /> <span className="text-primary italic">Best in Automation</span>
            </motion.h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Button asChild size="lg" className="bg-primary text-white font-black h-20 px-16 rounded-none text-sm tracking-widest uppercase hover:bg-white hover:text-secondary transition-all">
                  <Link href="/#contact">Get a Quote <ArrowRight className="ml-3 w-5 h-5" /></Link>
               </Button>
               <Button asChild variant="outline" size="lg" className="border-2 border-white/20 text-white font-black h-20 px-16 rounded-none text-sm tracking-widest uppercase bg-transparent hover:bg-white hover:text-secondary transition-all">
                  <Link href="/products">View Catalogue</Link>
               </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
          width: fit-content;
        }
      `}</style>
    </div>
  );
}
