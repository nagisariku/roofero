import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<"input"> {
  variant?: "light" | "dark"
}

function Input({ className, type, variant = "light", ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      data-variant={variant}
      className={cn(
        "w-full min-w-0 font-inter text-base font-normal leading-[19.2px] px-4 py-3 h-10 rounded-[6px] transition-all outline-none disabled:pointer-events-none disabled:opacity-50",
        variant === "light"
          ? "bg-white text-deep-black border border-light-neutral placeholder:text-medium-gray focus:border-link-blue focus:ring-3 focus:ring-link-blue/10"
          : "bg-brand-dark text-electric-lime border border-electric-lime/30 placeholder:text-electric-lime/50 focus:border-electric-lime focus:ring-0",
        className
      )}
      {...props}
    />
  )
}

export { Input }
