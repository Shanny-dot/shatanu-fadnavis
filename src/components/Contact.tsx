import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  Zap,
} from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"

const PROJECT_TYPES = [
  { id: "ai", label: "🤖 AI & Agentic Systems" },
  { id: "data", label: "📊 Big Data & ETL Pipelines" },
  { id: "frontend", label: "⚡ High-Performance React App" },
  { id: "role", label: "💼 Full-Time Engineering Role" },
  { id: "chat", label: "☕ Coffee & Tech Chat" },
]

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "🤖 AI & Agentic Systems",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const [nagpurTime, setNagpurTime] = useState<string>("")

  // Live ticking clock for Nagpur, India (Asia/Kolkata timezone)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
      setNagpurTime(formatted)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shantanufadnavis@protonmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 850)
  }

  return (
    <section id="contact" className="py-28 bg-[#080808] text-white relative overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Subtle Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300 mb-4 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for New Opportunities</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4 leading-tight">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">exceptional.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Have a project in mind, need scalable data pipelines, or looking to deploy agentic AI? Send a note or say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Access & Identity Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Live Nagpur Clock Card */}
            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 shadow-xl group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Nagpur, Maharashtra, India</span>
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  IST (UTC +5:30)
                </span>
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <div className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight font-mono">
                  {nagpurTime || "12:00:00 PM"}
                </div>
                <div className="text-xs font-mono text-neutral-500">Local Time</div>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Operating remotely across global timezones (US, Europe & Asia-Pacific friendly).
              </p>
            </div>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
                  <Mail className="w-3.5 h-3.5 text-white" />
                  <span>Direct Inbox</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-500 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-400" /> &lt;12h reply
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <span className="font-mono text-xs sm:text-sm text-neutral-200 select-all truncate">
                  shantanufadnavis@protonmail.com
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-black text-xs font-bold hover:bg-neutral-200 active:scale-95 transition-all shrink-0 cursor-pointer shadow-sm"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Network Badges */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/Shanny-dot"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl hover:border-white/30 hover:bg-neutral-900/90 transition-all duration-300 group shadow-lg flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-heading font-bold text-sm text-white">GitHub</div>
                  <div className="text-[11px] text-neutral-400 font-mono">@Shanny-dot • 18+ Repos</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/shantanu-fadnavis-621751289/"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl hover:border-white/30 hover:bg-neutral-900/90 transition-all duration-300 group shadow-lg flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-heading font-bold text-sm text-white">LinkedIn</div>
                  <div className="text-[11px] text-neutral-400 font-mono">Shantanu Fadnavis</div>
                </div>
              </a>
            </div>

            {/* Quick Pitch Pill */}
            <div className="p-5 rounded-3xl bg-gradient-to-br from-neutral-900/80 to-neutral-950 border border-white/10 text-xs text-neutral-400 space-y-2">
              <div className="flex items-center gap-2 font-bold text-white">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>What I Bring to the Table</span>
              </div>
              <p className="text-[11px] leading-relaxed text-neutral-400">
                End-to-end execution from raw big data pipelines (Snowflake / Databricks) to fine-tuned LLM agents (UnSloth / LangGraph) and production-ready React frontends.
              </p>
            </div>

          </div>

          {/* Right Column: Creative Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-900/70 border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              
              {/* Subtle top card glow accent */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />

              {submitted ? (
                <div className="py-14 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                    Message Dispatched! 🚀
                  </h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-white">{formData.name || "friend"}</span>! Your inquiry regarding <span className="text-emerald-400 font-mono">{formData.projectType}</span> has landed in my inbox. I’ll review it and get back to you shortly.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 rounded-full text-white bg-white/5 border-white/20 hover:bg-white hover:text-black cursor-pointer px-6"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: "",
                        email: "",
                        projectType: "🤖 AI & Agentic Systems",
                        message: "",
                      })
                    }}
                  >
                    <span>Send Another Transmission</span>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  
                  <div>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mb-1 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-neutral-400" />
                      <span>Send a Message</span>
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Select what you'd like to collaborate on, or just drop a note.
                    </p>
                  </div>

                  {/* Project Scope Pill Selector */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      What are you interested in?
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {PROJECT_TYPES.map((pt) => {
                        const isSelected = formData.projectType === pt.label
                        return (
                          <button
                            key={pt.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: pt.label })}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-white text-black shadow-md scale-102"
                                : "bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {pt.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-neutral-300">
                        Your Name <span className="text-emerald-400">*</span>
                      </label>
                      <Input
                        required
                        placeholder="e.g. Sam Altman"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-neutral-800/60 border-neutral-700/80 text-white placeholder:text-neutral-500 focus-visible:ring-2 focus-visible:ring-white h-12 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-neutral-300">
                        Email Address <span className="text-emerald-400">*</span>
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-neutral-800/60 border-neutral-700/80 text-white placeholder:text-neutral-500 focus-visible:ring-2 focus-visible:ring-white h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-neutral-300">
                        Your Message <span className="text-emerald-400">*</span>
                      </label>
                      <span className="text-[10px] font-mono text-neutral-500">
                        Brief & direct is welcome
                      </span>
                    </div>
                    <Textarea
                      required
                      rows={4}
                      placeholder={`Tell me about your goals, timeline, or just say hello...`}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-neutral-800/60 border-neutral-700/80 text-white placeholder:text-neutral-500 focus-visible:ring-2 focus-visible:ring-white rounded-xl resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-white text-black font-extrabold text-sm hover:bg-neutral-200 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-white/10"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Transmitting to Shantanu...
                      </span>
                    ) : (
                      <>
                        <span>Send Transmission</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
