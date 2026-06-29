
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Stats } from '@/components/Stats';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  Lightbulb, 
  Users, 
  Zap, 
  Search, 
  Handshake,
  Quote
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const timeline = [
    { 
      year: "Pre-2020", 
      title: "The Problem Is Identified in the Field", 
      desc: "SAM's founder spent 15 years as a field service engineer across South India. FMCG, food, pharma, chemical — the same problems kept appearing: machines that broke down and stayed broken, suppliers who vanished after the sale, and no one who combined real engineering knowledge with genuine client accountability." 
    },
    { 
      year: "2020", 
      title: "SAM Is Founded — During a Pandemic", 
      desc: "Covid made reliable, hygienic packaging a business-critical necessity. Senthil founded SAM Robotics & Automation in Coimbatore — combining 15 years of field experience with a direct manufacturing operation built on one principle: quality is not an act, it's a practice." 
    },
    { 
      year: "2021–23", 
      title: "Custom Builds. Enterprise Clients. First Exports.", 
      desc: "As word spread, SAM moved from single machines to custom builds, full processing lines, and its first export orders.\n\n<strong>2021 — First export.</strong> KRK Exports of Madurai ordered a packaging line for their operation in Natham, Tamil Nadu, and shipped a SAM machine onward to Malaysia — commissioned entirely online and running to this day. They returned for a second machine in 2024.\n\n<strong>2021–22 — Into the Gulf and Africa.</strong> Early export orders followed across the Gulf and East Africa — including a complete bottling line for Forest Africa in Zambia (storage tank, filling, capping, labelling, batch coding, and final packing), proving SAM could deliver a full turnkey line, not just a single machine.\n\n<strong>2022 — A famous-name custom build.</strong> Santhi Sweets of Tirunelveli — one of the region's best-known aluva makers — needed inkjet coding applied to pouches filled with the product at nearly 100°C. SAM engineered a printing solution that held up to the heat: the kind of problem a catalogue machine can't solve.\n\n<strong>2023 — Backing startups for the long term.</strong> Tasty Food Products in Chennai took a startup packing machine and stayed with SAM for on-site service and monthly consumables — an early example of the after-sales relationship SAM is built around"
    },
    { 
      year: "Today", 
      title: "2,000+ Machines. 25+ Countries. The Same Standard.", 
      desc: "SAM machines now run in factories across India and in 25+ countries — Gulf, East Africa, Southeast Asia, Europe, and the Americas. ISO and CE certified. Clients include ITC, TVS Group, Hindustan Foods, and the Tamil Nadu Government. From startup packing machines to full turnkey industrial lines — every one built, installed, and backed the same way." 
    }
  ];

  const values = [
    { icon: ShieldCheck, title: "Quality First", desc: "No compromises on engineering integrity or component selection." },
    { icon: Lightbulb, title: "Innovation", desc: "Continuously evolving our designs for faster, more accurate packing." },
    { icon: Users, title: "Customer Success", desc: "Our machines are built to make your business more profitable." },
    { icon: Zap, title: "Reliability", desc: "Industrial-grade builds meant to run 24/7 with minimal downtime." },
    { icon: Search, title: "Transparency", desc: "Clear communication from initial quote to final site installation." },
    { icon: Handshake, title: "Partnership", desc: "We don't just sell machines; we support your factory's growth." }
  ];

  const facilityImages = [
    { id: 'infra-design', label: "Engineering Design Center" },
    { id: 'infra-assembly', label: "Main Assembly Floor" },
    { id: 'infra-testing', label: "Quality Control Lab" },
    { id: 'hero-machinery', label: "Final Export Packaging" }
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-white bg-white">
      <Navbar variant="dark" />

      <main className="flex-grow">
        {/* 1. Header Section */}
        <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-40 lg:pt-52 pb-20">
          <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] z-0">
            <Image 
              src="/About-Hero.webp"
              alt="Industrial Manufacturing"
              fill
              className="object-cover object-center grayscale opacity-40 lg:opacity-100"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 lg:via-white/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 lg:hidden" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-[65px] font-black text-secondary md:leading-[70px] leading-tight tracking-tighter uppercase mb-10">
                Built on the Belief <br /> That a Machine Is <br /> Only as Good as the <br /> 
                <span className="text-primary italic">Team Behind It.</span>
              </h1>
              
              <div className="flex flex-col gap-6 mb-12">
                <p className="text-sm font-black tracking-widest uppercase text-secondary/60">
                  Packaging Machinery Manufacturer, Coimbatore — <span className="text-primary">Founded 2020</span>
                </p>
                <p className="text-xl text-secondary/60 font-medium leading-relaxed max-w-2xl">
                  We started SAM in 2020 with one belief: that manufacturers deserve machinery built properly, installed properly, and supported properly. 5 years + and 2,000+ machines later, that's still the only standard we work to.
                </p>
              </div>

              <Button asChild size="lg" className="bg-primary text-white font-black h-16 px-12 rounded-none text-xs tracking-widest uppercase hover:bg-secondary transition-colors shadow-2xl">
                <Link href="/products" className="flex items-center gap-3">
                  Explore Our Machines <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 2. Our Story (Timeline) */}
        <section className="py-24 px-6 md:px-24 bg-white relative border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-4 block">JOURNEY</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-2">Our Story</h2>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em]">Four chapters. One consistent standard.</p>
            </div>

            <div className="relative">
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
                        <h3 className="text-2xl font-black tracking-tight mb-4">{item.title}</h3>
                        <p 
                          className="text-muted-foreground font-medium leading-relaxed whitespace-pre-line"
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                        />
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
        <Stats />

        {/* 4. Leadership - Premium Split Layout */}
        <section className="py-24 px-6 md:px-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left Side: Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] lg:aspect-square bg-muted grayscale hover:grayscale-0 transition-all duration-700"
              >
                <Image 
                  src="https://picsum.photos/seed/senthil/800/1000"
                  alt="Senthilmani Muthuramalingam"
                  fill
                  className="object-cover"
                  data-ai-hint="professional portrait"
                />
                <div className="absolute inset-0 border-[20px] border-white/10 m-6 pointer-events-none" />
              </motion.div>

              {/* Right Side: Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-6 block">LEADERSHIP</span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
                  Senthilmani Muthuramalingam
                </h2>
                <p className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-12">
                  Founder & CEO, SAM Robotics & Automation
                </p>

                <div className="space-y-8 text-lg font-medium text-muted-foreground leading-relaxed">
                  <p>
                    Senthil founded SAM Robotics in 2020, drawing on 15 years of hands-on experience as a field service engineer across South India's industrial sector. Having serviced machinery in hundreds of factories — and having seen firsthand the gap between what manufacturers needed and what the market offered — he built SAM to close it.
                  </p>
                  <p>
                    Today, Senthil leads the engineering and client relationship work at SAM — ensuring that every custom build, every installation, and every after-sales commitment reflects the quality standard SAM was built on.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Mission & Vision */}
        <section className="py-24 bg-muted/30 px-6 md:px-24 border-y border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
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
                  <div className="w-8 h-1 bg-primary" /> Our Mission
                </h3>
                <div className="space-y-6">
                  <p className="text-xl font-medium leading-relaxed text-secondary">
                    To build packaging machinery that manufacturers can rely on — completely. From the quality of the components to the support after delivery, SAM exists to give every client the machine they need and the team that stands behind it.
                  </p>
                  <p className="text-sm font-black text-primary uppercase tracking-[0.2em]">
                    Reliable machines. Genuine support. Every time.
                  </p>
                </div>
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
                  <div className="w-8 h-1 bg-primary" /> Our Vision
                </h3>
                <div className="space-y-6">
                  <p className="text-xl font-medium leading-relaxed text-white/80">
                    To be India's most trusted packaging machinery manufacturer — the name every buyer checks first and benchmarks against. To be the standard, not just an option.
                  </p>
                  <p className="text-sm font-black text-primary uppercase tracking-[0.2em]">
                    The benchmark, not just a choice.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
              <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-2 italic">
                "Quality Is Not An Act. It's a Practice."
              </h4>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">
                — The SAM brand principle
              </p>
            </motion.div>
          </div>
        </section>

        {/* 6. What We Stand For */}
        <section className="py-24 px-6 md:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
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
        <section className="py-24 bg-secondary text-white px-6 md:px-24 overflow-hidden">
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
        <section className="py-24 bg-white px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
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
                  <div className="w-16 h-16 bg-white/5 border border-primary/20 flex items-center justify-center mb-6 rounded-full group-hover:bg-primary/10 transition-colors">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Final CTA */}
        <section className="relative py-32 bg-secondary overflow-hidden">
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
                  <Link href="/#contact" className="flex items-center gap-3">Get a Quote <ArrowRight className="ml-3 w-5 h-5" /></Link>
               </Button>
               <Button asChild variant="outline" size="lg" className="border-2 border-white/20 text-white font-black h-20 px-16 rounded-none text-sm tracking-widest uppercase bg-transparent hover:bg-white hover:text-secondary transition-all">
                  <Link href="/#our-machines">View Catalogue</Link>
               </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
