
"use client";

import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};


export function FAQBase({
  id,
  eyebrow,
  title = "Frequently asked questions",
  subtitle,
  align = "left",
  maxWidth = "max-w-7xl",
  className,
  faqs = [],
  imageSrc,
  imageAlt,
  animateIn = true,
}) {
  if (!faqs.length) return null;

  const MotionSection = animateIn ? motion.div : "div";
  const MotionItem = animateIn ? motion.div : "div";

  const defaultValue =
    faqs[0]?.id != null
      ? String(faqs[0].id)
      : faqs.length > 0
      ? "item-0"
      : undefined;

  return (
    <SectionWrapper id={id} className={className}>
      <MotionSection
        {...(animateIn
          ? {
              variants: sectionVariants,
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true, amount: 0.2 },
            }
          : {})}
        className={cn("mx-auto", maxWidth)}
      >
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          align={align}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Side: FAQs */}
          <div className="flex flex-col w-full">
            <Accordion
              type="single"
              collapsible
              defaultValue={defaultValue}
              className="space-y-4"
            >
              {faqs.map((faq, index) => {
                const value =
                  faq.id != null ? String(faq.id) : `item-${index}`;

                return (
                  <MotionItem
                    key={value}
                    {...(animateIn ? { variants: itemVariants } : {})}
                  >
                    <AccordionItem
                      value={value}
                      className={cn(
                        "group rounded-2xl border border-border/70 bg-card/70",
                        "backdrop-blur-sm shadow-sm",
                        "transition-colors hover:border-primary/60"
                      )}
                    >
                      <AccordionTrigger
                        className={cn(
                          "gap-3 px-4 py-4 sm:px-6 sm:py-5",
                          "hover:no-underline"
                        )}
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/40 text-accent-foreground">
                          <HelpCircle className="h-5 w-5" aria-hidden="true" />
                        </span>

                        <div className="flex-1 text-left">
                          <p className="text-base font-semibold text-foreground sm:text-lg">
                            {faq.question}
                          </p>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent
                        className={cn(
                          "px-4 pb-5 pt-0 sm:px-6 sm:pb-6",
                          "text-base leading-relaxed text-muted-foreground"
                        )}
                      >
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </MotionItem>
                );
              })}
            </Accordion>
          </div>

          {/* Right Side: Image and Widget */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {imageSrc && (
              <MotionItem
                {...(animateIn ? { variants: itemVariants } : {})}
                className="relative hidden lg:block aspect-square w-full max-w-lg mx-auto xl:max-w-none xl:w-[110%] xl:-mr-10 xl:aspect-[4/3] rounded-3xl overflow-hidden border border-border/50 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent z-10 pointer-events-none" />
                <Image
                  src={imageSrc}
                  alt={imageAlt || "FAQ Image"}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </MotionItem>
            )}

            <MotionItem
              {...(animateIn ? { variants: itemVariants } : {})}
              className="rounded-3xl border border-transparent bg-gradient-to-r from-[#ffb703] via-[#ff3b00] to-[#ffb703] bg-[length:200%_auto] animate-liquid p-5 sm:p-6 shadow-lg flex flex-col items-start gap-2 xl:w-[110%] xl:-mr-10"
            >
              <div className="flex items-center gap-3">
                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                 </div>
                 <h3 className="text-lg font-semibold text-white">Still have questions?</h3>
              </div>
              <p className="text-white/90 text-sm">
                Can't find the answer you're looking for? Please chat to our friendly team.
              </p>
              <Button asChild className="mt-1 bg-white text-black hover:bg-white/90" size="sm">
                 <Link href="#contact">Get in touch</Link>
              </Button>
            </MotionItem>
          </div>
        </div>
      </MotionSection>
    </SectionWrapper>
  );
}
