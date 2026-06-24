"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const EXIT_MS = 300;

export const CookieBanner = ({
  message = "We use cookies to improve your experience. By using our site, you accept cookies.",
  acceptText = "Accept",
  declineText = "Decline",
  className,
  position = "bottom",
}) => {
  const [visible, setVisible] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? localStorage.getItem("cookie-consent")
        : null;
    if (!stored) {
      setRender(true);
      requestAnimationFrame(() => setVisible(true));
    }
  }, []);

  const closeWithExit = () => {
    setVisible(false);
    setTimeout(() => setRender(false), EXIT_MS);
  };

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    closeWithExit();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "false");
    closeWithExit();
  };

  if (!render) return null;

  const slideIn =
    position === "top" ? "slide-in-from-top-8" : "slide-in-from-bottom-8";
  const slideOut =
    position === "top" ? "slide-out-to-top-8" : "slide-out-to-bottom-8";

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className={cn(
        "fixed left-1/2 z-[100] w-[95%] max-w-lg -translate-x-1/2",
        position === "top" ? "top-4" : "bottom-6"
      )}
    >
      <div
        className={cn(
          "border border-border/50 rounded-2xl bg-background/80 backdrop-blur-xl text-foreground shadow-2xl",
          "p-5 flex flex-col sm:flex-row items-center gap-4",
          visible
            ? cn("animate-in", "fade-in", slideIn)
            : cn("animate-out", "fade-out", slideOut),
          "duration-500 ease-[cubic-bezier(0.3,0.7,0.4,1)]",
          className
        )}
      >
        <p className="text-sm font-medium flex-1 text-muted-foreground leading-relaxed">{message}</p>
        
        <div className="flex gap-3 shrink-0 w-full sm:w-auto">
          <Button
            type="button"
            variant="outline"
            onClick={handleDecline}
            className="flex-1 sm:flex-none rounded-xl"
          >
            {declineText}
          </Button>

          <Button
            type="button"
            onClick={handleAccept}
            className="flex-1 sm:flex-none rounded-xl shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-transform"
          >
            {acceptText}
          </Button>
        </div>
      </div>
    </div>
  );
};
