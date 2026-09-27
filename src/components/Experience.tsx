import React, { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, CheckCircle, TrendingUp, ChevronDown } from "lucide-react"

interface Experience {
  role: string
  company: string
  period: string
  location: string
  type: string
  description: string
  achievements: string[]
  impact?: string[]
  skills: string[]
  current?: boolean
}

const experiences: Experience[] = [
  {
    role: "Machine Learning Engineer Intern",
    company: "DataObserve",
    period: "Dec 2025 – Mar 2026",
    location: "Texas, USA (Remote)",
    type: "1st Internship",
    description:
      "Built ML models on Big Data infrastructure with API & LLM integration to power scalable analytics for a US-based enterprise client.",
    achievements: [
      "Designed and deployed an AI-powered analytics dashboard for real-time energy surveillance.",
      "Built end-to-end ETL pipelines using Snowflake and Databricks, improving data ingestion and processing efficiency.",
      "Implemented real-time data processing and visualization systems in collaboration with cross-functional teams.",
    ],
    impact: [
      "Replaced manual reporting with a live analytics dashboard, giving a US enterprise client real-time visibility into energy usage.",
      "Streamlined ETL workflows on Snowflake & Databricks, directly improving data ingestion and processing efficiency.",
      "Took 3 AI/ML projects from idea to working deployment independently, with no external oversight.",
      "Open-sourced 18+ repositories, contributing reusable ML/NLP tooling that others can build on.",
    ],
    skills: ["Python", "Databricks", "Snowflake", "LLM", "ETL", "FastAPI", "RAG", "Spark"],
  },
  {
    role: "Frontend Developer",
    company: "Qobo",
    period: "Apr 2026 – Jul 2026",
    location: "India (Remote)",
    type: "2nd Internship",
    description:
      "Crafted performant, pixel-perfect interfaces for a product startup, collaborating closely with design and product teams.",
    achievements: [
      "Built reusable React component systems adopted across multiple product surfaces.",
      "Optimised web performance achieving consistent sub-2s load times and smooth animations.",
      "Led the integration of REST APIs with real-time UI updates and optimistic state management.",
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "JavaScript", "Git"],
  },
  {
    role: "AI Developer Intern",
    company: "Zostel",
    period: "Jul 2026 – Sep 2026",
    location: "India (Remote)",
    type: "3rd Internship",
    current: true,
    description:
      "Developed AI-driven features for a hospitality platform, focusing on intelligent automation and natural language interfaces.",
    achievements: [
      "Built conversational AI assistants to automate guest queries and booking flows.",
      "Integrated LangGraph-based agentic workflows to handle complex multi-step reasoning tasks.",
      "Fine-tuned language models using UnSloth for domain-specific hospitality use cases.",
    ],
    skills: ["Python", "LangGraph", "UnSloth", "Hugging Face", "Fine-Tuning", "RAG", "FastAPI"],
  },
]

const impactStats = [
  { value: "18+", label: "Open-source repos" },
  { value: "3", label: "End-to-end AI deployments" },
  { value: "1", label: "US enterprise client served" },
  { value: "3", label: "Internships completed" },
]

export const Experience: React.FC = () => {
  const [expandedImpact, setExpandedImpact] = useState<number | null>(0)

  return (
    <section id="journey" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="pill" className="mb-3">Career Journey</Badge>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-neutral-950 tracking-tight mb-4">
            Where I've made an impact
          </h2>
          <p className="text-neutral-500 text-base">
            From ML pipelines to frontend interfaces — real work, real results.
          </p>
        </div>

        {/* Impact Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {impactStats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-2xl bg-neutral-950 text-white"
            >
              <div className="font-heading font-extrabold text-3xl sm:text-4xl mb-1">{stat.value}</div>
              <div className="text-xs text-neutral-400 font-medium leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-neutral-200 ml-4 md:ml-6 pl-6 md:pl-10 space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className={`absolute -left-[31px] md:-left-[43px] top-2 w-4 h-4 rounded-full border-4 transition-transform duration-200 group-hover:scale-125 ${
                exp.current ? "bg-black border-black" : "bg-white border-black"
              }`} />
              {exp.current && (
                <span className="absolute -left-[52px] md:-left-[64px] top-6 text-[9px] font-bold text-white bg-black px-1 py-0.5 rounded rotate-90 origin-center translate-y-2">NOW</span>
              )}

              <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
                {/* Header */}
                <div className="p-6 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
                          {exp.type}
                        </span>
                        {exp.current && (
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            ● Active
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading font-bold text-xl text-neutral-950">{exp.role}</h3>
                      <p className="text-sm font-semibold text-neutral-600">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full">
                        <Calendar className="w-3 h-3" /> {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-neutral-400">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-5">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-neutral-50 text-neutral-700 border border-neutral-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact accordion — only for DataObserve */}
                {exp.impact && (
                  <div className="border-t border-neutral-100">
                    <button
                      onClick={() => setExpandedImpact(expandedImpact === idx ? null : idx)}
                      className="w-full flex items-center justify-between px-6 sm:px-7 py-3.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-black" />
                        Impact I've made
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                          expandedImpact === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedImpact === idx && (
                      <div className="px-6 sm:px-7 pb-6 bg-neutral-950 rounded-b-2xl">
                        <ul className="pt-4 space-y-3">
                          {exp.impact.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2.5 text-sm text-neutral-300">
                              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
