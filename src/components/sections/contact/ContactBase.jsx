"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";

import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

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

const IconMap = {
  Email: Mail,
  Phone: Phone,
  Location: MapPin,
};

export function ContactBase({
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
  maxWidth = "max-w-5xl",
  className,
  form,
  contactInfo = [],
  animateIn = true,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [token, setToken] = useState("");
  const turnstileRef = React.useRef(null);

  const MotionSection = animateIn ? motion.div : "div";
  const MotionItem = animateIn ? motion.div : "div";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formElement = e.target;
    const formData = new FormData(formElement);
    
    try {
      const response = await fetch("https://formspree.io/f/xwvdvped", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });
      
      if (response.ok) {
        setIsSubmitting(false);
        setIsSuccess(true);
        formElement.reset();
        setToken("");
        turnstileRef.current?.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setIsSubmitting(false);
        alert("Oops! There was a problem submitting your message.");
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("Oops! There was a problem submitting your message.");
    }
  };

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

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <div className="flex flex-col gap-8">
            <MotionItem
              {...(animateIn ? { variants: itemVariants } : {})}
              className="flex flex-col gap-6"
            >
              {contactInfo.map((info, index) => {
                const Icon = IconMap[info.label] || Mail;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/60"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-base font-semibold text-foreground hover:text-primary hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-base font-semibold text-foreground">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </MotionItem>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#ff3b00] to-[#ffb703] opacity-20 blur-xl" />
            <MotionItem
              {...(animateIn ? { variants: itemVariants } : {})}
              className="relative rounded-3xl border border-border/70 bg-card/70 p-8 shadow-lg backdrop-blur-sm"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" name="firstName" placeholder="Enter your first name" required className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" name="lastName" placeholder="Enter your last name" required className="bg-background/50" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Enter your email" required className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  rows={4}
                  required
                  className="resize-none bg-background/50"
                />
              </div>
              <div className="flex justify-center w-full my-2">
                <Turnstile
                  ref={turnstileRef}
                  siteKey="0x4AAAAAADqJWuKKyfyDea2G"
                  onSuccess={(t) => setToken(t)}
                  options={{
                    theme: "auto",
                  }}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting || !token}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-4 w-4 rounded-full border-2 border-primary-foreground border-t-transparent"
                    />
                    Sending...
                  </span>
                ) : isSuccess ? (
                  <span className="text-green-500">{form?.successMessage || "Message Sent!"}</span>
                ) : (
                  <span className="flex items-center gap-2">
                    {form?.submitText || "Send Message"}
                    <Send className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
            </MotionItem>
          </div>
        </div>
      </MotionSection>
    </SectionWrapper>
  );
}
