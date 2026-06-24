
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Cpu, Network, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";

const ICONS = [Database, Cpu, Network, MessageSquare];

const PILL_COLORS = [
  { from: "#ff3b00", to: "#ff7300" }, // Fire
  { from: "#ff7300", to: "#ff9d00" }, // Orange
  { from: "#ff9d00", to: "#ffb703" }, // Yellow
  { from: "#ffb703", to: "#f59e0b" }, // Gold
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
};

export function StepsBase({
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
  maxWidth = "max-w-6xl",
  className,
  animateIn = true,
  steps = [],
}) {
  if (!steps.length) return null;

  const MotionContainer = animateIn ? motion.div : "div";
  const MotionStep = animateIn ? motion.div : "div";

  return (
    <SectionWrapper id={id} className={className} maxWidth={maxWidth}>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        align={align}
        className="mb-16 md:mb-24"
      />

      <MotionContainer
        variants={containerVariants}
        initial={animateIn ? "hidden" : undefined}
        whileInView={animateIn ? "show" : undefined}
        viewport={animateIn ? { once: true, amount: 0.1 } : undefined}
        className="relative flex flex-col gap-16 md:gap-24 w-full pt-8 md:pt-16"
      >
        {/* Desktop Starting Line */}
        <svg className="absolute top-0 left-0 w-full h-16 pointer-events-none z-0 hidden md:block overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 50 0 C 50 50, 62 50, 62 100" stroke="#94a3b8" strokeWidth="3" strokeDasharray="1 10" strokeLinecap="round" fill="none" opacity="0.6" vectorEffect="non-scaling-stroke" />
          <circle cx="50" cy="0" r="5" fill="#94a3b8" vectorEffect="non-scaling-stroke" />
        </svg>

        {steps.map((stepItem, index) => {
          const isEven = index % 2 === 0;
          const color = PILL_COLORS[index % PILL_COLORS.length];
          const Icon = ICONS[index % ICONS.length];
          const displayStep = stepItem.step || `0${index + 1}`;
          const isLast = index === steps.length - 1;

          return (
            <MotionStep key={index} variants={stepVariants} className="relative w-full z-10">
              
              {/* === DESKTOP LAYOUT === */}
              <div className="hidden md:flex items-center w-full relative">
                
                {/* Connecting Path to Next Step */}
                {!isLast && (
                  <svg className="absolute top-1/2 left-0 w-full pointer-events-none z-0 overflow-visible" style={{ height: 'calc(100% + 6rem)' }} viewBox="0 0 100 100" preserveAspectRatio="none">
                    {isEven ? (
                      <path d="M 62 0 C 62 50, 38 50, 38 100" stroke="#94a3b8" strokeWidth="3" strokeDasharray="1 10" strokeLinecap="round" fill="none" opacity="0.6" vectorEffect="non-scaling-stroke" />
                    ) : (
                      <path d="M 38 0 C 38 50, 62 50, 62 100" stroke="#94a3b8" strokeWidth="3" strokeDasharray="1 10" strokeLinecap="round" fill="none" opacity="0.6" vectorEffect="non-scaling-stroke" />
                    )}
                  </svg>
                )}

                {/* Target Dot */}
                <div className="absolute top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center z-20" style={{ left: isEven ? 'calc(62% - 24px)' : 'calc(38% - 24px)' }}>
                  <div className="absolute w-full h-full rounded-full border-2 opacity-80" style={{ borderColor: isEven ? color.to : color.from }} />
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: isEven ? color.to : color.from }} />
                </div>

                {/* Left Column */}
                <div className={cn("flex justify-end relative z-10", isEven ? "w-[56%]" : "w-[32%]")}>
                  {isEven ? (
                    // Left Pill
                    <div className="relative w-full max-w-[400px] h-[110px] rounded-full shadow-lg flex items-center pl-8 pr-[130px]" style={{ backgroundImage: `linear-gradient(to right, ${color.from}, ${color.to})` }}>
                      <div className="flex flex-col text-left text-white z-10 w-full">
                        <h3 className="text-[11px] font-bold uppercase tracking-widest mb-0.5 opacity-90">{stepItem.eyebrow}</h3>
                        <h4 className="text-lg font-bold leading-tight mb-1 line-clamp-1">{stepItem.title}</h4>
                        <p className="text-xs opacity-90 leading-snug line-clamp-2">{stepItem.description}</p>
                      </div>
                      
                      {/* White Icon shrunken to fit perfectly inside the pill vertically */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-24 h-24 bg-background rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center justify-center z-20">
                        <Icon className="w-8 h-8" style={{ color: color.to }} />
                      </div>

                      {/* Triangle pointer mathematically aligned to the tip of the pill curve */}
                      <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px]" style={{ borderLeftColor: color.to }} />
                    </div>
                  ) : (
                    // Left Text
                    <div className="flex flex-col text-right justify-center h-[110px] pr-8">
                      <span className="text-2xl font-bold uppercase tracking-widest text-muted-foreground/50 leading-none mb-1">Step</span>
                      <span className="text-7xl font-black leading-none drop-shadow-sm" style={{ color: color.from }}>{displayStep}</span>
                    </div>
                  )}
                </div>

                {/* Center Gap (12%) */}
                <div className="w-[12%]" />

                {/* Right Column */}
                <div className={cn("flex justify-start relative z-10", isEven ? "w-[32%]" : "w-[56%]")}>
                  {!isEven ? (
                    // Right Pill
                    <div className="relative w-full max-w-[400px] h-[110px] rounded-full shadow-lg flex items-center pr-8 pl-[130px]" style={{ backgroundImage: `linear-gradient(to right, ${color.from}, ${color.to})` }}>
                      <div className="flex flex-col text-left text-white z-10 w-full">
                        <h3 className="text-[11px] font-bold uppercase tracking-widest mb-0.5 opacity-90">{stepItem.eyebrow}</h3>
                        <h4 className="text-lg font-bold leading-tight mb-1 line-clamp-1">{stepItem.title}</h4>
                        <p className="text-xs opacity-90 leading-snug line-clamp-2">{stepItem.description}</p>
                      </div>
                      
                      {/* White Icon shrunken to fit perfectly inside the pill vertically */}
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-24 h-24 bg-background rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center justify-center z-20">
                        <Icon className="w-8 h-8" style={{ color: color.from }} />
                      </div>

                      {/* Triangle pointer mathematically aligned to the tip of the pill curve */}
                      <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-r-[12px]" style={{ borderRightColor: color.from }} />
                    </div>
                  ) : (
                    // Right Text
                    <div className="flex flex-col text-left justify-center h-[110px] pl-8">
                      <span className="text-2xl font-bold uppercase tracking-widest text-muted-foreground/50 leading-none mb-1">Step</span>
                      <span className="text-7xl font-black leading-none drop-shadow-sm" style={{ color: color.to }}>{displayStep}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* === MOBILE LAYOUT === */}
              <div className="flex flex-col md:hidden w-full px-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 shrink-0 relative">
                    <div className="absolute w-full h-full rounded-full border-2 opacity-80" style={{ borderColor: color.from }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color.from }} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60 leading-none mb-1">Step</span>
                    <span className="text-4xl font-black leading-none" style={{ color: color.from }}>{displayStep}</span>
                  </div>
                </div>
                
                <div className="relative w-full rounded-3xl shadow-lg flex flex-col p-6 pt-16 mt-6" style={{ backgroundImage: `linear-gradient(to bottom right, ${color.from}, ${color.to})` }}>
                  <div className="absolute top-0 left-6 -translate-y-1/2 w-20 h-20 bg-background rounded-full shadow-md flex items-center justify-center z-20">
                    <Icon className="w-8 h-8" style={{ color: color.from }} />
                  </div>
                  <div className="flex flex-col text-left text-white z-10 w-full mt-2">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-90">{stepItem.eyebrow}</h3>
                    <h4 className="text-xl font-bold leading-tight mb-2">{stepItem.title}</h4>
                    <p className="text-sm opacity-90 leading-relaxed">{stepItem.description}</p>
                  </div>
                </div>
              </div>

            </MotionStep>
          );
        })}
      </MotionContainer>
    </SectionWrapper>
  );
}
