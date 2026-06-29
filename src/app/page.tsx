
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
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Factory, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Box, 
  Wrench, 
  Microscope, 
  Briefcase, 
  Landmark, 
  Headset,
  Globe,
  Handshake,
  Cpu,
  CheckCircle2,
  Quote,
  HelpCircle
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const machines = [
    {
      id: "m1",
      title: "Multi Head Weigher VFFS Collar Packing Machine",
      description: "The multihead weigher VFFS machine Coimbatore’s snack and FMCG factories rely on — 30 to 200 pouches per minute, high-accuracy weighing, and minimal product giveaway.",
      bestFor: ["Snacks", "FMCG", "Grocery", "Seeds", "Spices"],
      imageUrl: PlaceHolderImages.find(img => img.id === 'multihead-vffs')?.imageUrl || "",
    },
    {
      id: "m2",
      title: "Auger VFFS Collar Packing Machine",
      description: "Precision auger dosing for masala, tea, coffee, powders, and non-free-flowing products. Built for accuracy, hygiene, and minimal waste on every fill.",
      bestFor: ["Spices", "Masala", "Tea", "Coffee", "Chemical", "Pharma"],
      imageUrl: PlaceHolderImages.find(img => img.id === 'auger-vffs')?.imageUrl || "",
    },
    {
      id: "m3",
      title: "Bottle Filling Plant",
      description: "End-to-end bottling lines including filling, capping, labelling, date-coding, and final packaging. Configured for granules, powders, and liquids.",
      bestFor: ["Pharma", "FMCG", "Beverages", "Chemical", "Cosmetics"],
      imageUrl: PlaceHolderImages.find(img => img.id === 'bottle-filling-line')?.imageUrl || "",
    },
    {
      id: "m4",
      title: "Blending Machines",
      description: "Industrial mixers for homogeneous blending of powders, granules, and semi-solids. Available in octagonal, double cone, and ribbon configurations.",
      bestFor: ["Pharma Mixing", "Spices", "Tea", "Masala", "Food Processing"],
      imageUrl: PlaceHolderImages.find(img => img.id === 'blending-machine')?.imageUrl || "",
    },
  ];

  const whyChooseFeatures = [
    {
      icon: ShieldCheck,
      title: "Quality-Grade Components",
      desc: "Every machine is built with industrial-grade components — Siemens PLCs, Festo pneumatics, SS304 contact parts. The same quality you’d expect from premium manufacturers."
    },
    {
      icon: Cpu,
      title: "Genuine Custom Engineering",
      desc: "As a custom packing machine manufacturer, SAM builds to your exact specifications. We visit your factory, understand your product, and engineer the solution — not a catalogue item."
    },
    {
      icon: Wrench,
      title: "End-to-End Installation & Training",
      desc: "From factory loading to civil prep, installation, and operator training at your site — we stay until the machine runs. Export orders get a full week on-site."
    },
    {
      icon: Headset,
      title: "Fast Spare Parts & 24×7 Support",
      desc: "Most spare parts delivered within 1 day. Critical parts within 1 week. 24×7 video call support resolves most issues the same day — anywhere in India or overseas."
    },
    {
      icon: Globe,
      title: "Export-Ready from South India",
      desc: "ISO and CE certified. IE Code registered. As a packaging machine manufacturer in South India with full export capability, SAM ships to 25+ countries — UAE, UK, USA, Germany, Australia, and more."
    },
    {
      icon: Handshake,
      title: "AMC & Long-Term Partnership",
      desc: "Annual Maintenance Contracts available. Spare parts stocked by part number. SAM is not a box-shifter — we build relationships that last as long as the machine does."
    }
  ];

  const testimonials = [
    {
      quote: "Best place for high accuracy weighing machinery. Exceptional performance — 20 grams accuracy for 50 kg bag. Every bag saves a lot of money for me. Thank you Mr Senthil.",
      author: "Quality Supervisor"
    },
    {
      quote: "Purchased a packing machine and octagonal blender. Working super good. Best quality machine manufacturer in South India. Thanks Senthil and Arjun for guiding us.",
      author: "Operations Manager"
    }
  ];

  const faqs = [
    {
      question: "Who is the best packing machine manufacturer in India?",
      answer: "SAM Robotics & Automation is an established Indian packing machine manufacturer based in Coimbatore, supplying VFFS pouch packing machines, auger fillers, bottle filling plants and blending equipment to factories across India and in 25+ countries. Every machine is custom-engineered to the customer’s product, speed and floor layout."
    },
    {
      question: "What types of packing machines does SAM Robotics manufacture?",
      answer: "SAM manufactures four main machine ranges: multihead weigher VFFS collar packing machines for snacks and FMCG, auger filler VFFS machines for powders and masala, automatic bottle filling plants, and industrial blending machines in octagonal, double cone and ribbon configurations. Standard and fully custom builds are both available."
    },
    {
      question: "Can SAM build a custom packing machine for my product?",
      answer: "Yes. SAM is a custom packing machine manufacturer, not a catalogue supplier. Engineers assess your product, target speed and production floor — often with a site visit — then design the machine around those requirements. This applies across pouch packing, powder filling, bottling and blending equipment."
    },
    {
      question: "Does SAM Robotics export packing machines outside India?",
      answer: "Yes. SAM is an export-ready packaging machine manufacturer with ISO and CE certifications and IE Code registration, shipping to 25+ countries, including the UAE, the UK, the USA, Germany, and Australia. Export orders include a full week of on-site installation, commissioning and operator training."
    },
    {
      question: "What after-sales support and spare parts does SAM provide?",
      answer: "SAM provides 24×7 support, with most issues resolved the same day over video call. Most spare parts are delivered within 1 day, and critical parts within 1 week, anywhere in India or overseas. Annual Maintenance Contracts are available, and parts are stocked by part number."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-white bg-background overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left" style={{ scaleX }} />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />

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
                <h2 className="text-4xl md:text-6xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">
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

        {/* Our Machines Section */}
        <section id="our-machines" className="py-32 md:py-64 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 dot-grid w-full h-full opacity-[0.02] -z-10" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-32">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-8 block"
              >
                Core Catalogue
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase mb-12"
              >
                Our Machines
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl mx-auto text-xl text-muted-foreground font-medium"
              >
                From high-speed pouch packing to precision powder filling and complete bottle filling lines — SAM builds the machine your production floor needs. Every machine is available in standard and custom configurations.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
              {machines.map((machine, idx) => (
                <motion.div
                  key={machine.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="group bg-white border border-border overflow-hidden flex flex-col hover:border-primary/50 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={machine.imageUrl}
                      alt={machine.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint="industrial packaging machine"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="p-10 flex flex-col flex-1">
                    <h3 className="text-3xl font-black mb-6 tracking-tighter uppercase leading-none group-hover:text-primary transition-colors">
                      {machine.title}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-10 leading-relaxed line-clamp-3">
                      {machine.description}
                    </p>
                    
                    <div className="mt-auto space-y-8">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-4">Best For</span>
                        <div className="flex flex-wrap gap-2">
                          {machine.bestFor.map(tag => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-muted border border-border text-muted-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-8 border-t border-border">
                        <Link 
                          href="/products" 
                          className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] hover:text-primary transition-colors group/link"
                        >
                          Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Centered CTA */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center py-20 px-6 border-4 border-secondary/5 bg-muted/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 dot-grid w-64 h-64 opacity-10" />
              <h3 className="text-3xl md:text-4xl font-black mb-12 tracking-tighter uppercase max-w-2xl mx-auto leading-tight">
                Looking for a machine tailored to your production needs?
              </h3>
              <Button asChild size="lg" className="bg-primary text-white font-black rounded-none h-16 px-12 uppercase tracking-[0.2em] text-sm shadow-xl hover:bg-secondary transition-all duration-300">
                <Link href="/products" className="flex items-center gap-3">
                  View All Machines <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section id="why-choose" className="py-32 md:py-64 bg-muted/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 dot-grid w-1/3 h-full opacity-[0.03] -z-10" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-8 block"
              >
                WHY CHOOSE SAM
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase mb-12"
              >
                Why Manufacturers Choose SAM
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl mx-auto text-xl text-muted-foreground font-medium"
              >
                The packing machinery market has many options. Here's what sets SAM apart.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
              {whyChooseFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-12 border border-border group hover:border-primary hover:shadow-xl transition-all duration-500 flex flex-col h-full"
                >
                  <div className="w-16 h-16 bg-muted flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                    <feature.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-black mb-6 tracking-tight uppercase leading-tight group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center py-20 border-y border-border"
            >
              <h3 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase leading-none">
                Ready to upgrade your production line?
              </h3>
              <p className="text-lg text-muted-foreground font-medium mb-12">
                Speak with our engineering team to discuss your packaging requirements and discover the right automation solution.
              </p>
              <Button asChild size="lg" className="bg-secondary text-white font-black rounded-none h-16 px-12 uppercase tracking-[0.2em] text-sm shadow-xl hover:bg-primary transition-all duration-300">
                <Link href="#contact" className="flex items-center gap-3">
                  Consult With An Engineer <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section id="testimonials" className="py-32 md:py-64 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 dot-grid w-full h-full opacity-[0.01] -z-10" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-8 block"
              >
                CLIENT TESTIMONIALS
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase mb-12"
              >
                What Our Clients Say
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-32">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-muted/30 p-12 border border-border relative group hover:border-primary transition-all duration-500"
                >
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                  <p className="text-xl font-medium leading-relaxed text-foreground mb-10 italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-1 bg-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      {t.author}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA in Testimonials Section - Card Layout */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto bg-secondary text-white p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 dot-grid w-64 h-64 opacity-10" />
              <div className="text-left relative z-10">
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
                  You’ve found your <br className="hidden md:block" /> manufacturer.
                </h3>
                <p className="text-primary text-xl md:text-2xl font-black uppercase tracking-tighter">
                  Let’s build your machine.
                </p>
              </div>
              <Button asChild size="lg" className="bg-primary text-white font-black rounded-none h-20 px-12 md:px-16 uppercase tracking-[0.2em] text-sm shadow-xl hover:bg-white hover:text-secondary transition-all duration-300 shrink-0 relative z-10">
                <Link href="#contact" className="flex items-center gap-3">
                  Get a Quote <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
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

        {/* FAQ Section */}
        <section id="faq" className="py-32 md:py-64 px-6 md:px-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 dot-grid w-full h-full opacity-[0.02] -z-10" />
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10px] font-black tracking-[0.5em] uppercase text-primary mb-8 block"
              >
                KNOWLEDGE BASE
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase"
              >
                Frequently Asked <br /><span className="text-primary italic">Questions</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem 
                    key={idx} 
                    value={`item-${idx}`} 
                    className="border-2 border-border px-8 py-2 hover:border-primary transition-colors data-[state=open]:border-primary"
                  >
                    <AccordionTrigger className="text-left text-lg font-black uppercase tracking-tight hover:no-underline hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base font-medium leading-relaxed pt-4 pb-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
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
