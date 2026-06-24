"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Database, Server, Zap, Search, ChevronRight, BarChart3, Workflow } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function DashboardPreviewBase({ id, eyebrow, title, subtitle, align = "center" }) {
  const [latency, setLatency] = useState(12);
  const [queries, setQueries] = useState(1425);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => prev === 12 ? 14 : prev === 14 ? 11 : 12);
      setQueries(prev => prev + Math.floor(Math.random() * 5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id={id}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl"
      >
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align={align} />
        
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
          {/* Mac-like Top Bar */}
          <div className="flex h-12 items-center border-b border-border bg-muted/40 px-4">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <div className="mx-auto flex h-6 w-full max-w-sm items-center justify-center rounded-md bg-background/50 text-xs text-muted-foreground shadow-inner">
              indexora.one / command-center
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row">
            {/* Sidebar Preview */}
            <div className="w-full border-r border-border bg-muted/20 p-4 md:w-64">
              <div className="mb-6 px-2 text-sm font-semibold text-primary">Intelligence Layer</div>
              <div className="space-y-1">
                <div className="flex items-center gap-3 rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
                  <Activity className="h-4 w-4" /> Overview
                </div>
                <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/50">
                  <Database className="h-4 w-4" /> Databases
                </div>
                <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/50">
                  <BarChart3 className="h-4 w-4" /> Analytics
                </div>
                <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/50">
                  <Workflow className="h-4 w-4" /> Pipelines
                </div>
              </div>
              
              <div className="mt-8 mb-6 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</div>
              <div className="rounded-lg border border-border bg-background p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Cluster Health</span>
                  <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                </div>
                <div className="mt-2 text-sm font-semibold">99.99% Uptime</div>
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className="flex-1 p-6">
              <Tabs defaultValue="overview" className="w-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="vectors">Vector Optimization</TabsTrigger>
                    <TabsTrigger value="queries">Query Understanding</TabsTrigger>
                  </TabsList>
                  <Badge variant="outline" className="hidden lg:flex items-center gap-1">
                    Powered by NVIDIA SDK
                  </Badge>
                </div>
                
                <TabsContent value="overview" className="mt-0 space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Search Latency</CardTitle>
                        <Zap className="h-4 w-4 text-primary" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{latency}ms</div>
                        <p className="text-xs text-muted-foreground">-85% from baseline</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Queries Optimized</CardTitle>
                        <Search className="h-4 w-4 text-primary" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{queries.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">+12% this hour</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Embedding Storage</CardTitle>
                        <Database className="h-4 w-4 text-primary" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">4.2 TB</div>
                        <p className="text-xs text-muted-foreground">45% compression ratio</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Connected DBs</CardTitle>
                        <Server className="h-4 w-4 text-primary" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">3 Active</div>
                        <p className="text-xs text-muted-foreground">Pinecone, Milvus, Weaviate</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Fake Chart Area */}
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Retrieval Accuracy (RAG)</CardTitle>
                      <CardDescription>Semantic relevance score over the last 24 hours.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px] w-full rounded-md border border-dashed border-border bg-muted/10 flex items-center justify-center">
                        <div className="flex h-full w-full items-end gap-2 px-4 pb-4 pt-12">
                          {[40, 50, 60, 55, 75, 80, 85, 82, 90, 95, 99, 98].map((height, i) => (
                            <div key={i} className="w-full rounded-t-sm bg-primary/60 transition-all hover:bg-primary" style={{ height: `${height}%` }}></div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="vectors" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Embedding Generation Pipeline</CardTitle>
                      <CardDescription>Visualizing vector indexing workflows and storage efficiency.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border border-border p-4">
                         <div className="flex items-center justify-between mb-2">
                           <span className="text-sm font-medium">OpenAI text-embedding-3-large</span>
                           <span className="text-sm text-primary">Optimizing...</span>
                         </div>
                         <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                           <motion.div 
                              className="h-full bg-primary"
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                           />
                         </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg border border-border bg-muted/20 p-4 text-center flex flex-col justify-center">
                           <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Before Optimization</div>
                           <div className="text-xl font-bold">1,536 Dimensions</div>
                        </div>
                        <div className="rounded-lg border border-border bg-primary/5 p-4 text-center border-primary/20 flex flex-col justify-center">
                           <div className="text-xs text-primary uppercase tracking-wider mb-1">After Indexora</div>
                           <div className="text-xl font-bold text-primary">256 Dimensions</div>
                           <div className="text-xs mt-1 opacity-80 text-muted-foreground">(No accuracy loss)</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="queries" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Query Transformation Engine</CardTitle>
                      <CardDescription>AI semantic intent expansion before database retrieval.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex flex-col gap-4">
                         <div className="rounded-lg border border-border p-5 bg-muted/20 relative mt-3">
                            <span className="absolute -top-3 left-4 bg-background px-2 text-xs font-semibold text-muted-foreground">Original User Query</span>
                            <p className="text-sm font-medium">"How to handle auth errors?"</p>
                         </div>
                         
                         <div className="flex justify-center">
                            <ChevronRight className="h-6 w-6 text-primary rotate-90 sm:rotate-0" />
                         </div>
                         
                         <div className="rounded-lg border border-primary/30 p-5 bg-primary/5 relative mt-3">
                            <span className="absolute -top-3 left-4 bg-background px-2 text-xs font-semibold text-primary">Indexora Expanded Intent</span>
                            <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                              <li>"Authentication token expiration handling code examples"</li>
                              <li>"OAuth 2.0 refresh token failure resolution"</li>
                              <li>"JWT signature invalid exception troubleshooting"</li>
                            </ul>
                         </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
              </Tabs>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
