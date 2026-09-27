import React, { useEffect, useState } from "react"
import { CrowdCanvas } from "@/components/ui/skiper39"
import { ArrowDown, Sparkles, Send, Briefcase } from "lucide-react"

const PHRASES = [
  { text: "THAT THINKS.", subtitle: "Agentic AI, Fine-Tuned Models & RAG" },
  { text: "THAT SCALES.", subtitle: "Snowflake, Databricks & Big Data ETL" },
  { text: "THAT FLIES.", subtitle: "Sub-2s React UIs & Buttery Motion" },
  { text: "THAT SHIPS.", subtitle: "18+ Open Source Repos & Production Systems" },
]

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % PHRASES.length)
        setFade(true)
      }, 300)
    }, 2800)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-white">
      {/* Full-bleed CrowdCanvas — interactive OpenPeeps crowd */}
      <div className="absolute inset-0 w-full h-full">
        <CrowdCanvas
          src="https://cdn.21st.dev/assets/localized/abdb8990a7bef8c2f5af3e45f0a3c969c4b0603fba8be92e81347de4ea4e1ed7.png"
          rows={15}
          cols={7}
        />
      </div>

      {/* Gentle gradient overlay to keep text ultra legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/30 pointer-events-none z-10" />

      {/* Centered Creative Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 select-none pointer-events-none text-center">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-neutral-300 shadow-sm text-neutral-800 text-xs font-semibold mb-6 animate-fade-in pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-600">
            Nagpur, India • Shantanu Fadnavis
          </span>
          <span className="text-neutral-300">|</span>
          <span className="text-[11px] font-semibold text-neutral-900 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-neutral-700" /> Shaan
          </span>
        </div>

        {/* Main Kinetic Headline */}
        <div className="max-w-4xl mx-auto space-y-1">
          <h1 className="font-heading font-black tracking-tight text-neutral-950 text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.95]">
            I BUILD SOFTWARE
          </h1>

          {/* Cycling Morphing Phrase */}
          <div className="h-[clamp(3rem,8vw,7.5rem)] flex items-center justify-center overflow-hidden">
            <span
              className={`font-heading font-black tracking-tight text-[clamp(2.5rem,7vw,6.5rem)] leading-none transition-all duration-300 ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } text-transparent [-webkit-text-stroke:2px_#0a0a0a] sm:[-webkit-text-stroke:3px_#0a0a0a] hover:text-black cursor-default`}
            >
              {PHRASES[index].text}
            </span>
          </div>

          <h2 className="font-heading font-black tracking-tight text-neutral-950 text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.95]">
            END TO END.
          </h2>
        </div>

        {/* Dynamic Sub-caption linked to active phrase */}
        <div className="mt-4 h-6 flex items-center justify-center">
          <p
            className={`text-xs sm:text-sm font-mono text-neutral-600 transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            ✦ {PHRASES[index].subtitle}
          </p>
        </div>

        {/* Interactive Action Chips */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 pointer-events-auto">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white text-xs sm:text-sm font-semibold hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="#journey"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-neutral-300 text-neutral-800 text-xs sm:text-sm font-semibold hover:bg-neutral-100 hover:border-neutral-400 transition-all shadow-sm"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>My Journey</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-neutral-300 text-neutral-800 text-xs sm:text-sm font-semibold hover:bg-neutral-100 hover:border-neutral-400 transition-all shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Say Hi</span>
          </a>
        </div>

        {/* Playful crowd interaction hint */}
        <div className="mt-6 flex items-center gap-1.5 text-[11px] font-mono text-neutral-500">
          <span>Move your mouse</span>
          <span className="text-neutral-400">—</span>
          <span>the crowd watches you</span>
          <span className="inline-block animate-bounce">👀</span>
        </div>
      </div>

      {/* Bottom attribution */}
      <div className="absolute bottom-3 right-4 z-30 pointer-events-auto">
        <span className="text-[10px] text-neutral-500 font-mono bg-white/80 backdrop-blur px-2.5 py-1 rounded-full border border-neutral-200 shadow-xs">
          OpenPeeps • GSAP Canvas
        </span>
      </div>
    </section>
  )
}

export default Hero
