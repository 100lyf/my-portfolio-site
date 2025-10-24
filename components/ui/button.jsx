import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold transition-all duration-300 cursor-pointer border border-transparent",
  {
    variants: {
      variant: {
        //  Default orange button
        default: `
          bg-[var(--accent)] 
          text-[var(--foreground)] 
          font-bold
          border-[3px]
          hover:bg-transparent 
          hover:border-[var(--accent)] 
          hover:text-[var(--foreground)] 
        `,

        // Outline style if you ever need it
        outline: `
          border border-[var(--accent)] 
          bg-transparent 
          text-[var(--accent)] 
          hover:bg-[var(--accent)] 
          hover:text-[var(--foreground)]
        `,
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({ className, variant, size, asChild = false, ...props }) {
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
