"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { cn } from "@/lib/utils";

export function AboutPlatformBase({ id, eyebrow, title, subtitle, imageSrc, imageAlt }) {
  return (
    <section id={id} className="relative bg-background overflow-hidden py-24 md:py-32 w-full">
      {/* Corner Orange Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-br-full opacity-90 -translate-x-[40%] -translate-y-[40%] pointer-events-none z-0 hidden md:block" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary rounded-tl-full opacity-90 translate-x-[40%] translate-y-[40%] pointer-events-none z-0 hidden md:block" />

      {/* Subtle Background Wave/Curve Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 1440 800" className="absolute top-1/2 left-1/2 w-full min-w-[1440px] -translate-x-1/2 -translate-y-1/2 opacity-5 dark:opacity-10" preserveAspectRatio="none">
           <path d="M0,400 C320,600 640,200 960,400 C1280,600 1440,400 1440,400 L1440,800 L0,800 Z" fill="currentColor" className="text-foreground" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col text-left"
        >
          {eyebrow && (
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
              {eyebrow}
            </span>
          )}
          
          <h2 className="flex flex-wrap justify-start gap-x-3 md:gap-x-4 mb-8 text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide text-background [-webkit-text-stroke:2px_var(--foreground)] [text-shadow:4px_4px_0px_var(--foreground)] md:[text-shadow:6px_6px_0px_var(--foreground)]">
            {(title || "A New Standard for Vector Intelligence").split(" ").map((word, index, arr) => {
              const isHighlighted = arr.length > 3 ? index >= arr.length - 2 : index === arr.length - 1;
              return (
                <span 
                  key={index}
                  className={isHighlighted ? "text-transparent bg-clip-text bg-gradient-to-r from-[#ffb703] via-[#ff3b00] to-[#ffb703] bg-[length:200%_auto] animate-liquid" : "text-background"}
                >
                  {word}
                </span>
              );
            })}
          </h2>
          
          <p className="text-muted-foreground leading-relaxed mb-10 text-base md:text-lg">
            {subtitle}
          </p>
          
          <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
            Bridging the gap between raw <br className="hidden md:block"/>
            <span className="text-primary">data</span> and AI understanding
          </h3>
          
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            Traditional vector databases are slow and struggle with domain-specific nuances. 
            Our semantic intelligence layer sits directly between your enterprise data and your LLM, 
            restructuring high-dimensional arrays in real-time to guarantee perfect context retrieval.
          </p>
        </motion.div>

        {/* Right Column: Masonry Images + Badges */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative h-[500px] md:h-[650px] w-full mt-12 lg:mt-0"
        >
           {/* Image 1 (Top Left) */}
           <div className="absolute top-0 left-0 w-[55%] h-[60%] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl z-10">
              <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
           </div>

           {/* Image 2 (Bottom Right) */}
           <div className="absolute bottom-0 right-0 w-[60%] h-[65%] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl z-10">
              <Image src="/images/hero-bg.png" alt="Secondary visual" fill className="object-cover" />
           </div>

           {/* Floating Badge 1 (Top Right overlap on Image 1) */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.5 }}
             className="absolute top-[10%] right-[5%] bg-primary text-primary-foreground font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg md:rounded-xl shadow-xl z-20 text-xs md:text-sm whitespace-nowrap"
           >
              Zero-latency index restructuring
           </motion.div>
           
           {/* Floating Badge 2 (Below Badge 1) */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5, duration: 0.5 }}
             className="absolute top-[22%] right-[-2%] md:right-[2%] bg-background text-foreground font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg md:rounded-xl shadow-xl z-20 text-xs md:text-sm whitespace-nowrap border border-border"
           >
              Real-time semantic intent expansion
           </motion.div>

           {/* Floating Badge 3 (Bottom Left overlap on Image 2) */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6, duration: 0.5 }}
             className="absolute bottom-[15%] left-[5%] bg-primary text-primary-foreground font-semibold py-3 px-5 md:py-4 md:px-6 rounded-lg md:rounded-xl shadow-xl z-20 text-xs md:text-sm max-w-[220px] md:max-w-[260px] leading-tight"
           >
              NVIDIA-accelerated vector compression
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
