"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeIn,defaultMotionProps,staggerContainer,fadeInUp } from "@/lib/motion";
/**
 * SectionHeader
 *
 * Shared heading block for marketing sections.
 *
 * Props:
 * - eyebrow?: string                → small label above the title
 * - title?: string                  → main heading text
 * - subtitle?: string               → supporting description
 * - align?: "left" | "center" | "right"  → text alignment (default: "left")
 * - className?: string              → extra classes on the wrapper
 * - as?: keyof JSX.IntrinsicElements → heading tag, e.g. "h2" | "h3" (default: "h2")
 * - animateIn?: boolean             → fade-in on scroll using motion (default: false)
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  as = "h2",
  animateIn = false,
}) {
  const Tag = as;

  const alignClasses = "items-center text-center";

  const Wrapper = animateIn ? motion.div : "div";

  return (
    <Wrapper
      className={cn(
        "flex flex-col gap-2",
        alignClasses,
        className
      )}
      {...(animateIn ? { variants: fadeIn, ...defaultMotionProps } : {})}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">
          {eyebrow}
        </p>
      ) : null}

      {title ? (
        <Tag className="flex flex-wrap justify-center gap-x-3 md:gap-x-4 text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide text-background [-webkit-text-stroke:2px_var(--foreground)] [text-shadow:4px_4px_0px_var(--foreground)] md:[text-shadow:6px_6px_0px_var(--foreground)]">
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
        </Tag>
      ) : null}

      {subtitle ? (
        <p className="max-w-2xl text-sm sm:text-base text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </Wrapper>
  );
}
