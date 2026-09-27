import React from "react"

export const Metrics: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl ${className}`}>
      <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-neutral-200/90 shadow-sm text-left hover:border-neutral-400 transition-colors">
        <div className="font-heading font-bold text-2xl text-neutral-950">4+</div>
        <div className="text-xs text-neutral-500 font-medium">Years Experience</div>
      </div>
      <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-neutral-200/90 shadow-sm text-left hover:border-neutral-400 transition-colors">
        <div className="font-heading font-bold text-2xl text-neutral-950">25+</div>
        <div className="text-xs text-neutral-500 font-medium">Projects Shipped</div>
      </div>
      <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-neutral-200/90 shadow-sm text-left hover:border-neutral-400 transition-colors">
        <div className="font-heading font-bold text-2xl text-neutral-950">99.9%</div>
        <div className="text-xs text-neutral-500 font-medium">Uptime & Reliability</div>
      </div>
      <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-neutral-200/90 shadow-sm text-left hover:border-neutral-400 transition-colors">
        <div className="font-heading font-bold text-2xl text-neutral-950">100k+</div>
        <div className="text-xs text-neutral-500 font-medium">Active Users Impacted</div>
      </div>
    </div>
  )
}
export default Metrics
