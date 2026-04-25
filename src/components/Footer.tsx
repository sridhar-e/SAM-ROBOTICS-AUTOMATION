
"use client";

import React from 'react';
import Link from 'next/link';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer id="footer" className="bg-secondary text-white pt-24 pb-12 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-primary flex items-center justify-center transform rotate-45">
                <div className="w-2.5 h-2.5 bg-white"></div>
              </div>
              <span className="text-sm font-black tracking-tighter uppercase">Sam Robotics</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-8">
              Leading manufacturer of packaging machinery solutions, driving industrial efficiency with precision engineering and advanced automation.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <Linkedin className="w-4 h-4 text-white/40 group-hover:text-white" />
              </Link>
              <Link href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group">
                <Mail className="w-4 h-4 text-white/40 group-hover:text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-black text-[10px] tracking-[0.2em] uppercase mb-8 text-white">Solutions</h4>
            <ul className="space-y-4 text-sm font-medium text-white/40">
              <li><Link href="#products" className="hover:text-primary transition-colors">Liquid Filling</Link></li>
              <li><Link href="#products" className="hover:text-primary transition-colors">Capping Systems</Link></li>
              <li><Link href="#products" className="hover:text-primary transition-colors">Labeling Units</Link></li>
              <li><Link href="#products" className="hover:text-primary transition-colors">Palletizing Robots</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[10px] tracking-[0.2em] uppercase mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-white/40">
              <li><Link href="#infrastructure" className="hover:text-primary transition-colors">Infrastructure</Link></li>
              <li><Link href="#updates" className="hover:text-primary transition-colors">News & Media</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Partner Program</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Support Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[10px] tracking-[0.2em] uppercase mb-8 text-white">Get in Touch</h4>
            <ul className="space-y-4 text-sm font-medium text-white/40">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <span>+91 739 739 5665</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <span>info@samrobotics.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Industrial Area, Sector 5<br/>Mumbai, MH 400001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:row-reverse md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] font-black tracking-widest uppercase text-white/20">
          <div className="flex gap-8 mb-4 md:mb-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
          <span>© 2026 Sam Robotics and Automation. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
