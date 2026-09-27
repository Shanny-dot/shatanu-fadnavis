import React, { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 900)
  }

  return (
    <section id="contact" className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-neutral-800/30 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Info & Value Prop */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-neutral-300 border border-white/10 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Let's Build Something Great
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight text-white mb-4 leading-tight">
                Have an idea? Let's bring it to life.
              </h2>
              <p className="text-neutral-400 text-base leading-relaxed">
                Whether you're looking to build an ambitious product from scratch, revitalize an existing interface with fluid animations, or consult on systems architecture, I'd love to chat.
              </p>
            </div>

            {/* Direct Details */}
            <div className="space-y-4 pt-2">
              <a
                href="mailto:shantanufadnavis@protonmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Direct Email</div>
                  <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors break-all">
                    shantanufadnavis@protonmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Location</div>
                  <div className="text-sm font-semibold text-white">
                    Nagpur, Maharashtra, India • Open to Remote
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <div className="text-xs text-neutral-400 font-mono mb-3 uppercase tracking-wider">
                Connect on Networks
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Shanny-dot"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shantanu-fadnavis-621751289/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-900/90 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-neutral-400 text-sm max-w-sm mx-auto">
                    Thanks for reaching out, {formData.name || "friend"}. I typically respond within 12–24 hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 rounded-full text-white bg-transparent border-white/20 hover:bg-white hover:text-black cursor-pointer"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: "", email: "", projectType: "Full-Stack Web App", message: "" })
                    }}
                  >
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white mb-1">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Fill out the form below or email me directly at{" "}
                      <a href="mailto:shantanufadnavis@protonmail.com" className="text-white underline hover:text-emerald-300">
                        shantanufadnavis@protonmail.com
                      </a>.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-neutral-300">Your Name *</label>
                      <Input
                        required
                        placeholder="Ada Lovelace"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-neutral-800/80 border-neutral-700 text-white placeholder:text-neutral-500 focus-visible:ring-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-neutral-300">Email Address *</label>
                      <Input
                        required
                        type="email"
                        placeholder="ada@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-neutral-800/80 border-neutral-700 text-white placeholder:text-neutral-500 focus-visible:ring-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-neutral-300">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="flex h-11 w-full rounded-xl border border-neutral-700 bg-neutral-800/80 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white transition-all cursor-pointer"
                    >
                      <option value="Full-Stack Web App">Full-Stack Web App (React / Next.js)</option>
                      <option value="Interactive UI / Canvas Motion">Interactive UI / Canvas Motion (GSAP)</option>
                      <option value="Architecture & Performance Tuning">Architecture & Performance Tuning</option>
                      <option value="Full-Time Engineering Role">Full-Time Engineering Opportunity</option>
                      <option value="Advisory / Consultation">Advisory / Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-neutral-300">Your Message *</label>
                    <Textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project, timeline, and goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-neutral-800/80 border-neutral-700 text-white placeholder:text-neutral-500 focus-visible:ring-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-white text-black font-bold hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
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
