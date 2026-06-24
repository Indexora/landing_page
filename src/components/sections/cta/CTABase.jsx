"use client";

import React from "react";
import { Shield } from "lucide-react";
import { AnimatedFeatureSpotlight } from "@/components/ui/feature-spotlight";
import { SectionWrapper } from "@/components/layout/SectionWrapper";

export function CTABase({
  id,
  preheaderText,
  heading,
  description,
  buttonText,
  imageUrl,
  imageAlt,
}) {
  return (
    <SectionWrapper id={id} padded={false} className="py-8 md:py-12">
       <div className="mx-auto w-full max-w-6xl">
         <AnimatedFeatureSpotlight
           preheaderIcon={<Shield className="h-5 w-5 text-primary" />}
           preheaderText={preheaderText}
           heading={<>{heading}</>}
           description={description}
           buttonText={buttonText}
           buttonProps={{
              onClick: () => { window.location.href = "#contact" }
           }}
           imageUrl={imageUrl}
           imageAlt={imageAlt}
           className="bg-card/50 backdrop-blur-sm shadow-2xl border-primary/20"
         />
       </div>
    </SectionWrapper>
  );
}
