import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "pill" | "subtle"
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default: "border-transparent bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-800",
    secondary: "border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
    destructive: "border-transparent bg-red-500 text-neutral-50 shadow hover:bg-red-600",
    outline: "text-neutral-950 border border-neutral-300",
    pill: "border border-neutral-200 bg-neutral-50/80 backdrop-blur text-neutral-800 font-medium px-3 py-1 text-xs rounded-full shadow-sm",
    subtle: "border border-emerald-500/20 bg-emerald-50 text-emerald-700 font-medium px-3 py-1 text-xs rounded-full",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
