import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center shrink-0 whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-electric-lime text-deep-black hover:bg-electric-lime-hover active:bg-electric-lime-active border-none font-sans text-lg font-normal shadow-none rounded-full tracking-wide",
        secondary: "bg-transparent text-foreground border-2 border-deep-black dark:border-white hover:bg-deep-black/8 dark:hover:bg-white/10 active:bg-deep-black/15 dark:active:bg-white/20 font-sans text-lg font-normal shadow-none rounded-[10px]",
        tertiary: "bg-deep-black/20 dark:bg-white/20 text-foreground hover:bg-deep-black/30 dark:hover:bg-white/30 border-none rounded-full",
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-base",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-lg",
        link: "text-link-blue underline-offset-4 hover:underline text-lg",
      },
      size: {
        default: "h-10 px-6",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "size-10 p-0 flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
