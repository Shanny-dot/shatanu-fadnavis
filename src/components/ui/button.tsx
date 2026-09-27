import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "glow"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 active:scale-95"
    
    const variants = {
      default: "bg-black text-white hover:bg-neutral-800 shadow-md hover:shadow-lg",
      destructive: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
      outline: "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100 hover:border-neutral-400",
      secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
      ghost: "hover:bg-neutral-100 text-neutral-800",
      link: "text-neutral-900 underline-offset-4 hover:underline",
      glow: "bg-black text-white shadow-[0_0_25px_rgba(0,0,0,0.18)] hover:shadow-[0_0_35px_rgba(0,0,0,0.3)] hover:scale-[1.02]",
    }

    const sizes = {
      default: "h-10 px-5 py-2",
      sm: "h-8 rounded-full px-3 text-xs",
      lg: "h-12 rounded-full px-8 text-base",
      icon: "h-10 w-10 p-0",
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
