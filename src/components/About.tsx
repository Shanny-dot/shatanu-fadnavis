import React from "react"
import { CheckCircle2 } from "lucide-react"
import AnimatedAvatar from "@/components/AnimatedAvatar"

export const About: React.FC = () => {
  const pillars = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Micro-Interactions"],
      desc: "Pixel-perfectionist turning complex user flows into buttery, responsive interfaces that load in sub-2s and never make users rage-click.",
    },
    {
      title: "AI Work",
      skills: ["LangGraph", "UnSloth", "RAG", "Fine-Tuning", "Hugging Face"],
      desc: "Building autonomous agentic workflows, fine-tuning domain models without incinerating cloud GPUs, and shipping AI that solves actual human problems.",
    },
    {
      title: "Data Engineering",
      skills: ["Databricks", "Snowflake", "Spark", "ETL Pipelines", "Python"],
      desc: "Wrangling high-throughput enterprise pipelines, streaming real-time telemetry, and delivering pristine data to downstream models without dropping a packet.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Cursor-tracking animated portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm">
              {/* Ambient glow ring */}
              <div className="absolute -inset-3 bg-gradient-to-br from-neutral-200 via-neutral-300/60 to-neutral-200 rounded-[2rem] blur-2xl opacity-60 pointer-events-none" />

              {/* Portrait — full vertical rectangle, showing entire illustration */}
              <div
                className="relative overflow-hidden shadow-xl bg-white border border-neutral-200/80 rounded-2xl"
                style={{ aspectRatio: "2/3" }}
              >
                <AnimatedAvatar />
              </div>
            </div>
          </div>

          {/* Right Column: Quirky Bio & Skills Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-neutral-600 leading-relaxed text-base">
              <p>
                Hey there! I’m <span className="font-bold text-neutral-900">Shantanu Fadnavis</span> (mostly known as <span className="font-bold text-neutral-900">Shaan</span>), building from <span className="font-semibold text-neutral-900">Nagpur, Maharashtra, India</span> — the land of juicy oranges, scorching summers, and dangerously high chai & coffee consumption.
              </p>
              <p>
                I thrive at the chaotic, delightful intersection of <span className="font-semibold text-neutral-900">Data Engineering</span>, <span className="font-semibold text-neutral-900">AI / LLM wizardry</span>, and <span className="font-semibold text-neutral-900">Frontend craftsmanship</span>. My journey kicked off at <span className="text-neutral-900 font-semibold underline decoration-neutral-300">DataObserve</span> wrangling big data ETL on Snowflake & Databricks to power real-time energy surveillance for a US enterprise. Then I dialed in UI polish at <span className="text-neutral-900 font-semibold underline decoration-neutral-300">Qobo</span> crafting sub-2s React components, before architecting LangGraph agentic workflows and fine-tuning domain models with UnSloth at <span className="text-neutral-900 font-semibold underline decoration-neutral-300">Zostel</span>.
              </p>
              <p>
                When I’m not open-sourcing ML/NLP tools (<span className="font-mono text-neutral-900 font-semibold">18+ repos and counting</span> on GitHub) or arguing with a gradient descent curve, you’ll find me exploring tactile web interactions, tweaking SQL until it sings, or building AI side quests that probably weren't necessary — but are undeniably cool.
              </p>
            </div>

            {/* Pillar Cards without icons: Frontend, AI Work, Data Engineering */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-neutral-200/90 bg-neutral-50/70 hover:bg-white hover:border-neutral-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading font-extrabold text-neutral-950 text-base">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-mono font-semibold text-neutral-400 uppercase tracking-widest">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-3 border-t border-neutral-200/60">
                    {item.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-neutral-700 border border-neutral-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick bullets */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-neutral-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Nagpur, India • Open to Global Remote</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>18+ Open Source ML/NLP Repos on GitHub</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Databricks & Snowflake Enterprise ETL</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>LangGraph & UnSloth Agentic AI Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
