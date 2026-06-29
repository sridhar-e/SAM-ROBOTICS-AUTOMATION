
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
    <section className="bg-primary py-24 px-6 md:px-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="dot-grid w-full h-full" />
      </div>
      
      {/* Subtle depth gradient for a modern feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-16 lg:gap-0">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center text-center group relative lg:px-4 ${
                i !== 0 ? 'lg:border-l lg:border-white/20' : ''
              }`}
            >
              {/* Icon Section */}
              <div className="relative mb-8">
                {/* Decorative Rotating Arcs */}
                <div className="absolute -inset-4 border-t-2 border-white/30 rounded-full transition-transform duration-1000 group-hover:rotate-180" />
                <div className="absolute -inset-2 border-b-2 border-white/20 rounded-full transition-transform duration-700 group-hover:-rotate-90" />
                
                {/* White Circle Icon Container with elevation shadow */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.2)] relative z-10 transform transition-all duration-500 group-hover:scale-110">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Data Section */}
              <div className="space-y-3">
                <span className="text-4xl md:text-5xl font-black text-white tracking-tighter drop-shadow-md block leading-none">
                  {stat.val}
                </span>
                <span className="text-[11px] font-black tracking-[0.3em] text-white/90 uppercase leading-tight max-w-[150px] block mx-auto">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
