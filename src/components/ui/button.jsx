import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  if (variant === "default") {
    const innerText = asChild && React.isValidElement(children) ? children.props.children : children;
    
    const InnerContent = (
      <>
        <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-md transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px pointer-events-none"></span>
        <span className="absolute top-0 left-0 w-full h-full rounded-md bg-gradient-to-r from-[#b32400] to-[#d97706] pointer-events-none"></span>
        <span className={cn(
          buttonVariants({ size }),
          "relative flex items-center justify-center w-full text-white rounded-md transform -translate-y-1 bg-gradient-to-r from-[#ff3b00] to-[#ffb703] transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110 gap-2"
        )}>
          {innerText}
        </span>
      </>
    );

    if (asChild && React.isValidElement(children)) {
      return (
        <Slot
          className={cn(
            "relative group border-none bg-transparent p-0 outline-none cursor-pointer font-sans inline-flex items-center justify-center",
            className
          )}
          {...props}
        >
          {React.cloneElement(children, { children: InnerContent })}
        </Slot>
      );
    }

    return (
      <button
        data-slot="button"
        className={cn(
          "relative group border-none bg-transparent p-0 outline-none cursor-pointer font-sans inline-flex items-center justify-center",
          className
        )}
        {...props}
      >
        {InnerContent}
      </button>
    );
  }

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Button, buttonVariants }
