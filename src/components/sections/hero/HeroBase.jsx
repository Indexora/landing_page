"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
  },
};

/**
 * HeroBase – flexible hero with layouts, background modes, CTAs, stats + mockup.
 */
export function HeroBase({
  id,
  eyebrow,
  title,
  subtitle,
  align,
  primaryCta,
  secondaryCta,
  stats = [],
  mockupImage,
  layout = "overlay-center", // "overlay-center" | "overlay-right" | "split"
  background = {},
  maxWidth,
  className,
  animateIn = true,
}) {
  const {
    type = "image", // "image" | "solid" | "gradient" | "none"
    imageSrc,
    imageAlt = "",
    imagePosition = "center",
    overlay = "auto",
    solidClassName,
    gradientClassName,
  } = background || {};

  const resolvedAlign =
    align ||
    (layout === "overlay-right"
      ? "right"
      : layout === "split"
      ? "left"
      : "center");

  const alignmentClasses =
    resolvedAlign === "center"
      ? "text-center items-center"
      : resolvedAlign === "right"
      ? "text-right items-center md:items-end md:text-right"
      : "text-left items-center md:items-start md:text-left";

  const Wrapper = animateIn ? motion.section : "section";
  const Inner = animateIn ? motion.div : "div";
  const Item = animateIn ? motion.div : "div";

  return (
    <Wrapper
      id={id}
      className={cn(
        "relative page-section overflow-hidden",
        "min-h-[80vh] md:min-h-[90vh]",
        className
      )}
      initial={animateIn ? "hidden" : undefined}
      whileInView={animateIn ? "show" : undefined}
      viewport={animateIn ? { once: true, amount: 0.3 } : undefined}
      variants={animateIn ? containerVariants : undefined}
    >
      {/* Background layer */}
      <div className="absolute inset-0">
        {type !== "none" && (
          <>
            {type === "image" && imageSrc && (
              <>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  className={cn(
                    "object-cover",
                    imagePosition === "top" && "object-top",
                    imagePosition === "bottom" && "object-bottom",
                    imagePosition === "center" && "object-center"
                  )}
                />
                {overlay !== "none" && (
                  <div
                    className={cn(
                      "absolute inset-0",

                      overlay === "dark" && "bg-black/60",
                      overlay === "light" && "bg-white/70",

                      overlay === "auto" && "bg-background/50"
                    )}
                  />
                )}
              </>
            )}

            {type === "solid" && (
              <div
                className={cn(
                  "absolute inset-0",
                  solidClassName || "bg-background"
                )}
              />
            )}

            {type === "gradient" && (
              <div
                className={cn(
                  "absolute inset-0",
                  gradientClassName ||
                    "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
                )}
              />
            )}

            {/* Added Fire and Gold Glowing Orbs */}
            <div className="absolute top-0 left-[-10%] w-[40%] h-[50%] bg-[#ff3b00] rounded-full blur-[120px] opacity-30 pointer-events-none mix-blend-screen animate-pulse duration-1000" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-[#ffb703] rounded-full blur-[150px] opacity-20 pointer-events-none mix-blend-screen" />

            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/5 pointer-events-none" />
          </>
        )}
      </div>

      {/* Foreground content */}
      <div className="section-inner relative z-10">
        {layout === "split" ? (
          <Inner
            className={cn(
              "flex min-h-[70vh] flex-col gap-10 md:flex-row md:items-center",
              resolvedAlign === "center" && "md:text-left"
            )}
            variants={animateIn ? staggerContainer : undefined}
          >
            {/* Text column */}
            <Item
              className={cn(
                "w-full md:w-1/2 flex flex-col",
                alignmentClasses,
                "items-start text-left"
              )}
              variants={animateIn ? fadeInUp : undefined}
            >
              {eyebrow && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary/80">
                  {eyebrow}
                </p>
              )}

              <h1 className="flex flex-wrap justify-start gap-x-3 md:gap-x-4 max-w-full text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-wide text-background [-webkit-text-stroke:2px_var(--foreground)] [text-shadow:4px_4px_0px_var(--foreground)] md:[text-shadow:6px_6px_0px_var(--foreground)]">
                {title?.split(" ").map((word, index, arr) => {
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
              </h1>

              {subtitle && (
                <p className="mt-4 max-w-xl text-base sm:text-lg text-muted-foreground">
                  {subtitle}
                </p>
              )}

              {(primaryCta || secondaryCta) && (
                <div className="mt-8 flex flex-wrap gap-4">
                  {primaryCta && (
                    <Button asChild size="lg" className="gap-2">
                      <Link href={primaryCta.href}>
                        <span>{primaryCta.label}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}

                  {secondaryCta && (
                    <Button asChild size="lg" variant="outline">
                      <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                    </Button>
                  )}
                </div>
              )}

              {stats?.length > 0 && (
                <div className="mt-8 grid w-full max-w-md grid-cols-2 gap-4 text-sm text-muted-foreground">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-xs uppercase tracking-wide">
                        {stat.label}
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </Item>

            {/* Image / mockup column – no border/shadow/rounded, can grow */}
            <Item
              className="w-full md:w-1/2 flex justify-center md:justify-end"
              variants={animateIn ? fadeInUp : undefined}
            >
              {mockupImage?.src ? (
                <div className="w-full max-w-[440px]">
                  <Image
                    src={mockupImage.src}
                    alt={mockupImage.alt || ""}
                    width={800}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority={mockupImage.priority}
                  />
                </div>
              ) : (
                <div className="flex w-full max-w-[640px] aspect-[4/3] items-center justify-center bg-muted/30 text-xs text-muted-foreground">
                  Mockup image placeholder
                </div>
              )}
            </Item>
          </Inner>
        ) : (
          <Inner
            className={cn(
              "flex min-h-[70vh] flex-col justify-center",
              "items-center md:items-stretch"
            )}
            variants={animateIn ? staggerContainer : undefined}
          >
            <Item
              className={cn(
                "flex flex-col",
                resolvedAlign === "center" && "items-center text-center",
                resolvedAlign === "right" &&
                  "items-center md:items-end text-center md:text-right",
                resolvedAlign === "left" &&
                  "items-center md:items-start text-center md:text-left"
              )}
              variants={animateIn ? fadeInUp : undefined}
            >
              {eyebrow && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary/80">
                  {eyebrow}
                </p>
              )}

              <h1
                className={cn(
                  "flex flex-wrap gap-x-3 md:gap-x-4 text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-wide text-background [-webkit-text-stroke:2px_var(--foreground)] [text-shadow:4px_4px_0px_var(--foreground)] md:[text-shadow:6px_6px_0px_var(--foreground)]",
                  maxWidth ? maxWidth : "max-w-5xl",
                  resolvedAlign === "left" ? "justify-start" : resolvedAlign === "right" ? "justify-end" : "justify-center"
                )}
              >
                {title?.split(" ").map((word, index, arr) => {
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
              </h1>

              {subtitle && (
                <p
                  className={cn(
                    "mt-4 text-base sm:text-lg text-muted-foreground",
                    "max-w-2xl",
                    resolvedAlign === "center" && "mx-auto",
                    resolvedAlign === "right" && "md:ml-auto",
                    resolvedAlign === "left" && "md:mr-auto"
                  )}
                >
                  {subtitle}
                </p>
              )}

              {(primaryCta || secondaryCta) && (
                <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                  {primaryCta && (
                    <Button asChild size="lg" className="gap-2">
                      <Link href={primaryCta.href}>
                        <span>{primaryCta.label}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}

                  {secondaryCta && (
                    <Button asChild size="lg" variant="outline">
                      <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                    </Button>
                  )}
                </div>
              )}

              {stats?.length > 0 && (
                <div className="mt-8 grid w-full max-w-lg grid-cols-2 gap-4 text-sm text-muted-foreground">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-xs uppercase tracking-wide">
                        {stat.label}
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </Item>
          </Inner>
        )}
      </div>
    </Wrapper>
  );
}
