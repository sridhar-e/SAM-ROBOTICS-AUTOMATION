"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Package, Globe, Users, ShieldCheck, Clock } from 'lucide-react';

export function Stats() {
  const stats = [
    { icon: Package, label: "Machines Delivered", val: "2,000+" },
    { icon: Globe, label: "Countries Exported To", val: "25+" },
    { icon: Users, label: "Happy Clients", val: "500+" },
    { icon: ShieldCheck, label: "Certified", val: "ISO · CE" },
    { icon: Clock, label: "After Sales Support", val: "24 × 7" }
  ];

  return (
    <section className="bg-secondary py-20 px-6 md:px-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-5" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="flex flex-col items-start group"
            >
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                <stat.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <span className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2 block uppercase">
                {stat.val}
              </span>
              <span className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase leading-tight max-w-[120px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
