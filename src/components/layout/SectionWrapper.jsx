"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, defaultMotionProps } from "@/lib/motion";

const BackgroundDecor = () => (
  <>
    <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-br-full opacity-90 -translate-x-[40%] -translate-y-[40%] pointer-events-none z-0 hidden md:block" />
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary rounded-tl-full opacity-90 translate-x-[40%] translate-y-[40%] pointer-events-none z-0 hidden md:block" />
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <svg viewBox="0 0 1440 800" className="absolute top-1/2 left-1/2 w-full min-w-[1440px] -translate-x-1/2 -translate-y-1/2 opacity-5 dark:opacity-10" preserveAspectRatio="none">
         <path d="M0,400 C320,600 640,200 960,400 C1280,600 1440,400 1440,400 L1440,800 L0,800 Z" fill="currentColor" className="text-foreground" />
      </svg>
    </div>
  </>
);

export function SectionWrapper({
  id,
  className,
  maxWidth = "max-w-6xl",
  padded = true,
  animateIn = false,
  as = "section",
  children,
}) {
  const Tag = as;
  const MotionTag = motion[as];

  const outerClasses = cn(
    "relative bg-background overflow-hidden",
    padded ? "page-section" : "w-full",
    className
  );

  const innerClasses = cn("section-inner relative z-10", maxWidth);

  if (animateIn) {
    return (
      <MotionTag
        id={id}
        className={outerClasses}
        variants={staggerContainer}
        {...defaultMotionProps}
      >
        <BackgroundDecor />
        <div className={innerClasses}>{children}</div>
      </MotionTag>
    );
  }

  return (
    <Tag id={id} className={outerClasses}>
      <BackgroundDecor />
      <div className={innerClasses}>{children}</div>
    </Tag>
  );
}
