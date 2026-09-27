import React from "react"
import {
  GitBranch,
  Database,
  Code2,
  Layers,
  Container,
  Globe,
  Zap,
  Smile,
  BookOpen,
  SlidersHorizontal,
  Atom,
  Terminal,
  Bot,
  Network,
} from "lucide-react"

interface Skill {
  name: string
  icon: React.ElementType | string
  color: string        // bg of the sticky
  textColor: string
  rotate: string
  tag: string          // category label
}

const skills: Skill[] = [
  { name: "GitHub",        icon: GitBranch,         color: "#fef9c3", textColor: "#713f12", rotate: "-2deg",  tag: "VCS" },
  { name: "SQL",           icon: Database,          color: "#dbeafe", textColor: "#1e3a8a", rotate: "1.5deg", tag: "Data" },
  { name: "Python",        icon: "🐍",              color: "#dcfce7", textColor: "#14532d", rotate: "-1deg",  tag: "Language" },
  { name: "Databricks",    icon: Layers,            color: "#ffe4e6", textColor: "#881337", rotate: "2deg",   tag: "Big Data" },
  { name: "Kubernetes",    icon: Container,         color: "#e0e7ff", textColor: "#312e81", rotate: "-2.5deg",tag: "DevOps" },
  { name: "Web Scraping",  icon: Globe,             color: "#fef3c7", textColor: "#78350f", rotate: "1deg",   tag: "Extraction" },
  { name: "Spark",         icon: Zap,               color: "#fce7f3", textColor: "#831843", rotate: "-1.5deg",tag: "Processing" },
  { name: "Hugging Face",  icon: "🤗",              color: "#fff7ed", textColor: "#7c2d12", rotate: "2.5deg", tag: "ML Models" },
  { name: "RAG",           icon: BookOpen,          color: "#f0fdf4", textColor: "#166534", rotate: "-1deg",  tag: "AI" },
  { name: "Fine-Tuning",   icon: SlidersHorizontal, color: "#fdf4ff", textColor: "#581c87", rotate: "1.5deg", tag: "AI" },
  { name: "React",         icon: Atom,              color: "#ecfeff", textColor: "#164e63", rotate: "-2deg",  tag: "Frontend" },
  { name: "Scripting",     icon: Terminal,          color: "#f1f5f9", textColor: "#0f172a", rotate: "1deg",   tag: "Automation" },
  { name: "UnSloth",       icon: Bot,               color: "#fff1f2", textColor: "#9f1239", rotate: "-1.5deg",tag: "LLM" },
  { name: "LangGraph",     icon: Network,           color: "#f5f3ff", textColor: "#4c1d95", rotate: "2deg",   tag: "AI Agents" },
  { name: "Docker",        icon: Container,         color: "#e0f2fe", textColor: "#0c4a6e", rotate: "-1deg",  tag: "DevOps" },
  { name: "FastAPI",       icon: Zap,               color: "#f0fdf4", textColor: "#14532d", rotate: "1.5deg", tag: "Backend" },
  { name: "Pandas",        icon: "🐼",              color: "#fef9c3", textColor: "#713f12", rotate: "-2deg",  tag: "Data" },
  { name: "TypeScript",    icon: Code2,             color: "#dbeafe", textColor: "#1e3a8a", rotate: "1deg",   tag: "Language" },
]

const StickyNote: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const Icon = typeof skill.icon === "string" ? null : skill.icon
  const emoji = typeof skill.icon === "string" ? skill.icon : null

  return (
    <div
      className="relative group cursor-default select-none"
      style={{
        transform: `rotate(${skill.rotate})`,
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={e => {
        ;(e.currentTarget as HTMLDivElement).style.transform = "rotate(0deg) scale(1.06)"
        ;(e.currentTarget as HTMLDivElement).style.zIndex = "20"
      }}
      onMouseLeave={e => {
        ;(e.currentTarget as HTMLDivElement).style.transform = `rotate(${skill.rotate}) scale(1)`
        ;(e.currentTarget as HTMLDivElement).style.zIndex = "auto"
      }}
    >
      {/* Pin dot at top */}
      <div
        className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-white shadow z-10"
        style={{ backgroundColor: skill.textColor }}
      />

      {/* Note body */}
      <div
        className="relative flex flex-col gap-2 px-5 pt-6 pb-5 w-44 min-h-[148px] shadow-[4px_6px_20px_rgba(0,0,0,0.13)]"
        style={{
          backgroundColor: skill.color,
          // Folded corner
          clipPath:
            "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
        }}
      >
        {/* Folded corner triangle */}
        <div
          className="absolute top-0 right-0 w-[18px] h-[18px]"
          style={{
            background: `linear-gradient(225deg, rgba(0,0,0,0.15) 50%, transparent 50%)`,
          }}
        />

        {/* Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-xl mb-1"
             style={{ backgroundColor: `${skill.textColor}18` }}>
          {emoji ? (
            <span className="text-2xl leading-none">{emoji}</span>
          ) : (
            Icon && <Icon className="w-5 h-5" style={{ color: skill.textColor }} />
          )}
        </div>

        {/* Name */}
        <p className="font-bold text-[15px] leading-tight" style={{ color: skill.textColor }}>
          {skill.name}
        </p>

        {/* Tag */}
        <span
          className="mt-auto inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: `${skill.textColor}15`,
            color: skill.textColor,
          }}
        >
          {skill.tag}
        </span>
      </div>
    </div>
  )
}

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#000 0,#000 1px,transparent 1px,transparent 40px), repeating-linear-gradient(90deg,#000 0,#000 1px,transparent 1px,transparent 40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-3">What I Work With</p>
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-neutral-950 tracking-tight">
            My Skills &amp;{" "}
            <span className="relative inline-block">
              Toolkit
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="6"
                viewBox="0 0 200 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 5 Q50 1 100 4 Q150 7 200 3"
                  stroke="#171717"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Sticky notes board */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
          {skills.map((skill, i) => (
            <StickyNote key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
