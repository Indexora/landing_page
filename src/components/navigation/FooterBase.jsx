"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function FooterBase({
  logo,
  productName,
  description,
  socialIcons = [],
  footerColumns = [],
  newsletter,
}) {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("newsletter_subscribed") === "true") {
        setStatus("subscribed");
      }
    }
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (status === "subscribed") return;
    setStatus("loading");
    
    try {
      const response = await fetch("https://formspree.io/f/mbdvdljr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        setStatus("subscribed");
        localStorage.setItem("newsletter_subscribed", "true");
        setEmail("");
      } else {
        setStatus("");
        alert("Oops! There was a problem submitting your email.");
      }
    } catch (error) {
      setStatus("");
      alert("Oops! There was a problem submitting your email.");
    }
  };
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/dashboard-test")) {
    return null;
  }
  
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground relative w-full pt-20 border-t border-border/50">
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
        <div className="bg-primary absolute top-1/3 left-1/4 h-64 w-64 rounded-full opacity-10 blur-[100px]" />
        <div className="bg-primary absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full opacity-10 blur-[120px]" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Box */}
        {newsletter && (
          <div className="bg-background border border-border/50 shadow-2xl mb-16 rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 pointer-events-none" />
            <div className="grid items-center gap-8 md:grid-cols-2 relative z-10">
              <div className="relative z-10">
                <h3 className="mb-4 text-2xl font-bold md:text-4xl text-foreground tracking-tight">
                  {newsletter.title}
                </h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-md">
                  {newsletter.description}
                </p>
                <form className="flex flex-col gap-4 sm:flex-row" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={status === "subscribed" ? "You have subscribed" : newsletter.placeholder}
                    required={status !== "subscribed"}
                    disabled={status === "subscribed" || status === "loading"}
                    className="border-border/50 bg-background/50 backdrop-blur-sm focus:ring-primary rounded-xl border px-5 py-4 focus:ring-2 focus:outline-none flex-1 text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button 
                    type="submit" 
                    disabled={status === "subscribed" || status === "loading"}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-4 font-medium shadow-lg shadow-primary/20 transition-all cursor-target disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "subscribed" ? "Subscribed" : status === "loading" ? "Sending..." : newsletter.ctaLabel}
                  </button>
                </form>
              </div>
              <div className="hidden justify-end md:flex relative z-10 pr-4">
                <div className="relative group">
                  <div className="bg-primary/20 absolute inset-0 rotate-6 rounded-2xl transition-transform duration-500 group-hover:rotate-12" />
                  <img
                    src={newsletter.image}
                    alt="Newsletter visual"
                    className="relative w-80 h-[280px] rounded-2xl object-cover shadow-2xl transition-transform duration-500 group-hover:-translate-y-2"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Columns */}
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-background border border-border/50 shadow-sm rounded-[2rem] p-8">
            <div className="mb-6 flex items-center space-x-3">
              <div className="bg-primary/10 p-2.5 rounded-xl border border-primary/20 flex items-center justify-center">
                 {logo}
              </div>
              <span className="text-2xl font-bold tracking-tight">{productName}</span>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-sm text-base">
              {description}
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="bg-card border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary flex h-10 w-10 items-center justify-center rounded-full transition-all cursor-target"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="bg-background border border-border/50 shadow-sm rounded-[2rem] p-8">
              <h4 className="mb-6 text-sm font-bold tracking-wider uppercase text-foreground">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium cursor-target inline-flex items-center"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-border/40 flex flex-col items-center justify-center border-t pt-8 pb-12">
          <p className="text-muted-foreground text-sm">
            © {year} {productName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
