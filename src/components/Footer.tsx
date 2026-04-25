"use client";

import React from 'react';
import Link from 'next/link';
import { Linkedin, Mail, MapPin, Phone, Instagram, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer id="footer" className="bg-secondary text-white pt-32 pb-12 px-6 md:px-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 dot-grid w-96 h-96 opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-primary flex items-center justify-center transform rotate-45">
                <div className="w-3 h-3 bg-white"></div>
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">Sam Robotics</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm mb-12 font-medium">
              Leading the transition to Industry 4.0 with precision-engineered packaging automation and modular industrial solutions.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Instagram, Mail].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                  <Icon className="w-5 h-5 text-white/40 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-10">
            <div>
              <h4 className="font-black text-[10px] tracking-[0.3em] uppercase mb-10 text-primary">Solutions</h4>
              <ul className="space-y-5 text-[11px] font-black tracking-widest uppercase text-white/40">
                <li><Link href="#products" className="hover:text-white transition-colors">Filling Units</Link></li>
                <li><Link href="#products" className="hover:text-white transition-colors">Capping Pro</Link></li>
                <li><Link href="#products" className="hover:text-white transition-colors">Labeling Tech</Link></li>
                <li><Link href="#products" className="hover:text-white transition-colors">Conveyor Systems</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-[10px] tracking-[0.3em] uppercase mb-10 text-primary">Resources</h4>
              <ul className="space-y-5 text-[11px] font-black tracking-widest uppercase text-white/40">
                <li><Link href="#infrastructure" className="hover:text-white transition-colors">Our Facility</Link></li>
                <li><Link href="#process" className="hover:text-white transition-colors">How we work</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Technical Docs</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-3">
             <h4 className="font-black text-[10px] tracking-[0.3em] uppercase mb-10 text-primary">Stay Informed</h4>
             <p className="text-xs text-white/40 mb-8 font-medium">Join our network for latest engineering updates and industry insights.</p>
             <div className="space-y-4">
                <Input className="bg-white/5 border-white/10 rounded-none h-14 text-xs font-bold tracking-widest uppercase focus:border-primary" placeholder="EMAIL ADDRESS" />
                <Button className="w-full bg-primary hover:bg-white hover:text-primary rounded-none font-black h-14 text-[10px] tracking-widest uppercase transition-all duration-300">
                  Subscribe
                </Button>
             </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:row-reverse md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[9px] font-black tracking-[0.3em] uppercase text-white/20">
          <div className="flex gap-12 mb-6 md:mb-0">
            <Link href="#" className="hover:text-white transition-colors">Legal Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Data Privacy</Link>
          </div>
          <span>© 2026 Sam Robotics & Automation India.</span>
        </div>
      </div>
    </footer>
  );
}
