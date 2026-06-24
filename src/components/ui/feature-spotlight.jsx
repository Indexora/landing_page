"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const AnimatedFeatureSpotlight = React.forwardRef(
  (
    {
      className,
      preheaderIcon,
      preheaderText,
      heading,
      description,
      buttonText,
      buttonProps,
      imageUrl,
      imageAlt = 'Feature illustration',
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          'w-full max-w-6xl mx-auto rounded-3xl bg-background border overflow-hidden relative h-[35vh] min-h-[160px] flex items-center px-6 md:px-12',
          className
        )}
        aria-labelledby="feature-spotlight-heading"
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row w-full h-full items-center justify-between relative z-10 gap-8 py-6">
          {/* Text Content & Button */}
          <div className="flex flex-col text-center md:text-left flex-1 justify-center max-w-2xl">
            <h2
              id="feature-spotlight-heading"
              className="text-2xl md:text-4xl font-bold tracking-tight text-foreground animate-in fade-in slide-in-from-left-4 duration-700"
            >
              {heading}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground animate-in fade-in slide-in-from-left-4 duration-700 delay-150 line-clamp-3 mt-3 mb-6">
              {description}
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Button size="lg" className="rounded-full px-8 cursor-target" {...buttonProps}>
                {buttonText}
              </Button>
            </div>
          </div>

          {/* Right Column: Animated Visual */}
          <div className="hidden md:flex relative h-full w-1/3 items-center justify-end animate-in fade-in zoom-in-95 duration-700 delay-200">
            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src={imageUrl}
              alt={imageAlt}
              className="max-h-full w-auto object-cover rounded-xl shadow-2xl border border-border/50"
            />
          </div>
        </div>
      </section>
    );
  }
);
AnimatedFeatureSpotlight.displayName = 'AnimatedFeatureSpotlight';

export { AnimatedFeatureSpotlight };
