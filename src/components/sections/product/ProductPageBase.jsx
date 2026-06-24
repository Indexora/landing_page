"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, ScanSearch, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap = {
  Sparkles,
  BrainCircuit,
  ScanSearch,
};

export function ProductPageBase({ hero, story, capabilities, workflow, metrics, technicalHighlights }) {
  return (
    <main className="bg-background">
      <SectionWrapper id="product-hero" className="relative overflow-hidden" maxWidth="max-w-7xl">
        <div className="grid gap-12 px-4 py-24 md:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {hero.eyebrow}
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-black uppercase tracking-wide text-foreground sm:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                {hero.subtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="min-w-[180px]">
                <Link href={hero.primaryCta.href} target={hero.primaryCta.external ? "_blank" : undefined} rel={hero.primaryCta.external ? "noreferrer" : undefined}>
                  {hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[180px]">
                <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
              </Button>
            </div>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border/70 bg-card/70 p-4 shadow-sm">
                  <p className="text-2xl font-semibold text-foreground">{item.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-2xl shadow-primary/10"
          >
            <div className="rounded-[1.5rem] border border-border/60 bg-background/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Built for product teams</p>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/10 to-transparent p-4">
                  <p className="text-sm font-medium text-foreground">Semantic retrieval that feels intuitive</p>
                  <p className="mt-2 text-sm text-muted-foreground">Improve how users discover answers, products, or knowledge in a single experience.</p>
                </div>
                <div className="rounded-2xl border border-border/60 p-4">
                  <p className="text-sm font-medium text-foreground">Less friction, more relevance</p>
                  <p className="mt-2 text-sm text-muted-foreground">Support high-volume search, recommendation, and copilot workloads with a calmer architecture.</p>
                </div>
                <div className="rounded-2xl border border-border/60 p-4">
                  <p className="text-sm font-medium text-foreground">Made to evolve with your roadmap</p>
                  <p className="mt-2 text-sm text-muted-foreground">Move from pilot to production without rebuilding the retrieval layer every quarter.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="story" className="bg-background/70" maxWidth="max-w-6xl">
        <SectionHeader eyebrow={story.eyebrow} title={story.title} subtitle={story.subtitle} className="mb-10" />
        <div className="grid gap-6 md:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <Card key={item.title} className="h-full border-border/70 bg-card/80 shadow-sm">
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper id="workflow" className="bg-background" maxWidth="max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-4">
            <SectionHeader eyebrow={workflow.eyebrow} title={workflow.title} subtitle={workflow.subtitle} align="left" className="items-start text-left" />
          </div>
          <div className="grid gap-4">
            {workflow.steps.map((step, index) => (
              <div key={step.title} className="flex gap-4 rounded-2xl border border-border/70 bg-card/80 p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="technical-highlights" className="bg-background/70" maxWidth="max-w-6xl">
        <div className="rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-sm md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Technical foundation</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Made for scale without losing clarity</h2>
            </div>
            <Button asChild variant="outline">
              <Link href="https://app.indexora.one" target="_blank" rel="noreferrer">Try the product</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {technicalHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/60 bg-background/70 p-5">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
