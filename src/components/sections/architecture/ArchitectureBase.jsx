"use client";

import React, { useState } from "react";
import { Database, Cpu, Network, MessageSquare } from "lucide-react";

export function ArchitectureBase({ 
  id, 
  eyebrow = "Platform Architecture",
  title = "How Indexora Works", 
  subtitle = "An enterprise-grade pipeline built to process, optimize, and retrieve vector embeddings at scale." 
}) {
  const steps = [
    {
      id: "01",
      icon: Database,
      title: "Ingestion Layer",
      desc: "High-dimensional embeddings are ingested directly from Vector DBs via low-latency API streams.",
      color: "#ff3b00"
    },
    {
      id: "02",
      icon: Cpu,
      title: "Processing Engine",
      desc: "The AI engine analyzes noise, compresses vectors dynamically, and expands query semantics.",
      color: "#ff7300"
    },
    {
      id: "03",
      icon: Network,
      title: "Retrieval & Ranking",
      desc: "Optimized context is strictly ranked and delivered directly into the RAG pipeline.",
      color: "#ff9d00"
    },
    {
      id: "04",
      icon: MessageSquare,
      title: "LLM Integration",
      desc: "Seamlessly connects with intelligent agents to deliver hallucination-free generation.",
      color: "#ffb703"
    }
  ];

  const [hoveredNode, setHoveredNode] = useState(null);

  const Icon0 = steps[0].icon;
  const Icon1 = steps[1].icon;
  const Icon2 = steps[2].icon;
  const Icon3 = steps[3].icon;

  return (
    <section id={id || "architecture"} className="relative w-full overflow-hidden bg-background text-foreground min-h-[700px] flex flex-col justify-center py-24">
      {/* Corner Orange Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-br-full opacity-90 -translate-x-[40%] -translate-y-[40%] pointer-events-none z-0 hidden md:block" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary rounded-tl-full opacity-90 translate-x-[40%] translate-y-[40%] pointer-events-none z-0 hidden md:block" />

      {/* Subtle Background Wave/Curve Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 1440 800" className="absolute top-1/2 left-1/2 w-full min-w-[1440px] -translate-x-1/2 -translate-y-1/2 opacity-5 dark:opacity-10" preserveAspectRatio="none">
           <path d="M0,400 C320,600 640,200 960,400 C1280,600 1440,400 1440,400 L1440,800 L0,800 Z" fill="currentColor" className="text-foreground" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[120rem] mx-auto px-4 lg:px-8 hidden md:block">
        <div className="text-center mb-20 flex flex-col items-center">
          {eyebrow && (
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6 uppercase tracking-wider shadow-sm">
              {eyebrow}
            </div>
          )}
          <h2 className="flex flex-wrap justify-center gap-x-3 md:gap-x-4 text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide text-background [-webkit-text-stroke:2px_var(--foreground)] [text-shadow:4px_4px_0px_var(--foreground)] md:[text-shadow:6px_6px_0px_var(--foreground)]">
            {title.split(" ").map((word, index, arr) => {
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
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative w-full aspect-[21/9] max-w-full mx-auto mt-12">
          {/* SVG Snake Path */}
          <svg viewBox="0 0 1000 400" className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="snakeGradient" x1="180" y1="0" x2="820" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ff3b00" />
                <stop offset="33%" stopColor="#ff7300" />
                <stop offset="66%" stopColor="#ff9d00" />
                <stop offset="100%" stopColor="#ffb703" />
              </linearGradient>
              <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#000" floodOpacity="0.25" />
              </filter>
              <filter id="pathShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="12" stdDeviation="8" floodColor="#000" floodOpacity="0.5" />
              </filter>
            </defs>

            {/* Group to combine path and blue rims into a single shadowed object */}
            <g filter="url(#pathShadow)">
              {/* Thick connecting line */}
              <path 
                d="M 200 280 C 270 280, 330 120, 400 120 C 470 120, 530 280, 600 280 C 670 280, 730 120, 800 120"
                fill="none" 
                stroke="url(#snakeGradient)" 
                strokeWidth="70" 
                strokeLinecap="round"
              />
              {/* Blue node circles to ensure perfectly round bulges */}
              <circle cx="200" cy="280" r="58" fill="url(#snakeGradient)" />
              <circle cx="400" cy="120" r="58" fill="url(#snakeGradient)" />
              <circle cx="600" cy="280" r="58" fill="url(#snakeGradient)" />
              <circle cx="800" cy="120" r="58" fill="url(#snakeGradient)" />
            </g>

            {/* Animated outer rings */}
            <g opacity="0.6">
              {/* Node 1 */}
              <circle cx="200" cy="280" r="72" fill="none" stroke="#ff3b00" strokeWidth="2" strokeDasharray="10 10">
                <animateTransform attributeName="transform" type="rotate" from="0 200 280" to="360 200 280" dur="10s" repeatCount="indefinite" />
              </circle>
              {/* Node 2 */}
              <circle cx="400" cy="120" r="72" fill="none" stroke="#ff7300" strokeWidth="2" strokeDasharray="10 10">
                <animateTransform attributeName="transform" type="rotate" from="360 400 120" to="0 400 120" dur="12s" repeatCount="indefinite" />
              </circle>
              {/* Node 3 */}
              <circle cx="600" cy="280" r="72" fill="none" stroke="#ff9d00" strokeWidth="2" strokeDasharray="10 10">
                <animateTransform attributeName="transform" type="rotate" from="0 600 280" to="360 600 280" dur="10s" repeatCount="indefinite" />
              </circle>
              {/* Node 4 */}
              <circle cx="800" cy="120" r="72" fill="none" stroke="#ffb703" strokeWidth="2" strokeDasharray="10 10">
                <animateTransform attributeName="transform" type="rotate" from="360 800 120" to="0 800 120" dur="12s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* White node circles */}
            <circle cx="200" cy="280" r="44" fill={hoveredNode === 0 ? "#ffb703" : "white"} className="transition-colors duration-300" filter="url(#nodeShadow)" />
            <circle cx="400" cy="120" r="44" fill={hoveredNode === 1 ? "#ffb703" : "white"} className="transition-colors duration-300" filter="url(#nodeShadow)" />
            <circle cx="600" cy="280" r="44" fill={hoveredNode === 2 ? "#ff3b00" : "white"} className="transition-colors duration-300" filter="url(#nodeShadow)" />
            <circle cx="800" cy="120" r="44" fill={hoveredNode === 3 ? "#ff3b00" : "white"} className="transition-colors duration-300" filter="url(#nodeShadow)" />
          </svg>

          {/* HTML Overlay for Content */}
          <div className="absolute inset-0">
            {/* 01 */}
            <div 
              className="absolute flex flex-col items-center justify-center w-24 h-24 rounded-full cursor-pointer z-20" 
              style={{ left: '20%', top: '70%', transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setHoveredNode(0)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <span className="text-xl font-bold mb-1 transition-colors duration-300" style={{ color: hoveredNode === 0 ? 'white' : steps[0].color }}>{steps[0].id}</span>
              <Icon0 size={26} color={hoveredNode === 0 ? "white" : steps[0].color} strokeWidth={2} className="transition-colors duration-300" />
            </div>
            <div className="absolute text-center w-[20%]" style={{ left: '20%', top: '95%', transform: 'translate(-50%, -50%)' }}>
               <h3 className="font-bold text-xl mb-1 text-foreground">{steps[0].title}</h3>
               <p className="text-sm text-muted-foreground leading-tight">{steps[0].desc}</p>
            </div>

            {/* 02 */}
            <div 
              className="absolute flex flex-col items-center justify-center w-24 h-24 rounded-full cursor-pointer z-20" 
              style={{ left: '40%', top: '30%', transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setHoveredNode(1)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <span className="text-xl font-bold mb-1 transition-colors duration-300" style={{ color: hoveredNode === 1 ? 'white' : steps[1].color }}>{steps[1].id}</span>
              <Icon1 size={26} color={hoveredNode === 1 ? "white" : steps[1].color} strokeWidth={2} className="transition-colors duration-300" />
            </div>
            <div className="absolute text-center w-[20%]" style={{ left: '40%', top: '5%', transform: 'translate(-50%, -50%)' }}>
               <h3 className="font-bold text-xl mb-1 text-foreground">{steps[1].title}</h3>
               <p className="text-sm text-muted-foreground leading-tight">{steps[1].desc}</p>
            </div>

            {/* 03 */}
            <div 
              className="absolute flex flex-col items-center justify-center w-24 h-24 rounded-full cursor-pointer z-20" 
              style={{ left: '60%', top: '70%', transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setHoveredNode(2)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <span className="text-xl font-bold mb-1 transition-colors duration-300" style={{ color: hoveredNode === 2 ? 'white' : steps[2].color }}>{steps[2].id}</span>
              <Icon2 size={26} color={hoveredNode === 2 ? "white" : steps[2].color} strokeWidth={2} className="transition-colors duration-300" />
            </div>
            <div className="absolute text-center w-[20%]" style={{ left: '60%', top: '95%', transform: 'translate(-50%, -50%)' }}>
               <h3 className="font-bold text-xl mb-1 text-foreground">{steps[2].title}</h3>
               <p className="text-sm text-muted-foreground leading-tight">{steps[2].desc}</p>
            </div>

            {/* 04 */}
            <div 
              className="absolute flex flex-col items-center justify-center w-24 h-24 rounded-full cursor-pointer z-20" 
              style={{ left: '80%', top: '30%', transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setHoveredNode(3)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <span className="text-xl font-bold mb-1 transition-colors duration-300" style={{ color: hoveredNode === 3 ? 'white' : steps[3].color }}>{steps[3].id}</span>
              <Icon3 size={26} color={hoveredNode === 3 ? "white" : steps[3].color} strokeWidth={2} className="transition-colors duration-300" />
            </div>
            <div className="absolute text-center w-[20%]" style={{ left: '80%', top: '5%', transform: 'translate(-50%, -50%)' }}>
               <h3 className="font-bold text-xl mb-1 text-foreground">{steps[3].title}</h3>
               <p className="text-sm text-muted-foreground leading-tight">{steps[3].desc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Fallback Layout */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6 md:hidden">
        <div className="text-center mb-12 flex flex-col items-center">
          {eyebrow && (
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4 uppercase tracking-wider shadow-sm">
              {eyebrow}
            </div>
          )}
          <h2 className="flex flex-wrap justify-center gap-x-3 md:gap-x-4 text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide text-background [-webkit-text-stroke:2px_var(--foreground)] [text-shadow:4px_4px_0px_var(--foreground)] md:[text-shadow:6px_6px_0px_var(--foreground)]">
            {title.split(" ").map((word, index, arr) => {
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
          {subtitle && (
            <p className="mt-3 text-base text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-[#ff3b00] before:to-[#ffb703]">
           {steps.map((step, index) => {
             const Icon = step.icon;
             const isHovered = hoveredNode === index;
             const hoverBgColor = index < 2 ? "#ffb703" : "#ff3b00";
             
             return (
               <div 
                 key={step.id} 
                 className="relative flex items-center justify-between group cursor-pointer"
                 onMouseEnter={() => setHoveredNode(index)}
                 onMouseLeave={() => setHoveredNode(null)}
               >
                 <div 
                   className="flex flex-col items-center justify-center w-12 h-12 rounded-full border-2 border-border bg-background font-bold shrink-0 z-10 shadow-md transition-colors duration-300" 
                   style={{ 
                     color: isHovered ? "white" : step.color,
                     backgroundColor: isHovered ? hoverBgColor : undefined,
                     borderColor: isHovered ? hoverBgColor : undefined
                   }}
                 >
                   <span className="text-[10px] leading-none mb-0.5">{step.id}</span>
                   <Icon size={16} />
                 </div>
                 <div className="w-[calc(100%-4rem)] p-4 rounded-xl bg-card border border-border shadow-sm">
                   <h3 className="font-bold text-lg mb-1 text-foreground">{step.title}</h3>
                   <p className="text-sm text-muted-foreground">{step.desc}</p>
                 </div>
               </div>
             );
           })}
        </div>
      </div>
    </section>
  );
}
