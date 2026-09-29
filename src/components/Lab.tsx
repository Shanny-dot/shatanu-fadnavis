import React, { useState, useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Terminal as TerminalIcon,
  Play,
  RotateCcw,
  Sparkles,
  Music,
  Code2,
  Cpu,
  Layers,
  Check,
  Volume2,
  VolumeX,
} from "lucide-react"

interface CommandHistory {
  cmd: string
  output: React.ReactNode
}

// Interactive synth notes using native Web Audio API
const SYNTH_NOTES = [
  { label: "C4", freq: 261.63, key: "1" },
  { label: "E4", freq: 329.63, key: "2" },
  { label: "G4", freq: 392.0, key: "3" },
  { label: "B4", freq: 493.88, key: "4" },
  { label: "D5", freq: 587.33, key: "5" },
]

export const Lab: React.FC = () => {
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      cmd: "welcome",
      output: (
        <div className="space-y-1 text-neutral-300">
          <p className="text-emerald-400 font-bold">
            ✦ Shantanu's Interactive Dev Environment (v2.6)
          </p>
          <p className="text-xs text-neutral-400">
            Type a command or click a quick action below to run simulated agents, inspect my stack, or play with native hardware synth oscillators.
          </p>
        </div>
      ),
    },
  ])
  const [inputVal, setInputVal] = useState("")
  const [isAgentRunning, setIsAgentRunning] = useState(false)
  const [activeSynthNote, setActiveSynthNote] = useState<string | null>(null)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const terminalEndRef = useRef<HTMLDivElement>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)

  // Scroll terminal to bottom on output update
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [history])

  // Play synthetic tone using native browser Web Audio API
  const playTone = (freq: number, label: string) => {
    if (!soundEnabled) return
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
        audioCtxRef.current = new AudioCtx()
      }
      const ctx = audioCtxRef.current
      if (ctx.state === "suspended") {
        ctx.resume()
      }

      // Create warm analog-style oscillator with gentle low-pass filter
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      const filter = ctx.createBiquadFilter()

      osc.type = "sawtooth"
      osc.frequency.setValueAtTime(freq, ctx.currentTime)

      filter.type = "lowpass"
      filter.frequency.setValueAtTime(800, ctx.currentTime)
      filter.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.6)

      gain.gain.setValueAtTime(0.12, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.7)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(ctx.destination)

      osc.start()
      osc.stop(ctx.currentTime + 0.7)

      setActiveSynthNote(label)
      setTimeout(() => setActiveSynthNote(null), 300)
    } catch {
      // Audio context might be restricted before interaction
    }
  }

  // Play arpeggio chord sequence
  const playArpeggio = () => {
    SYNTH_NOTES.forEach((note, i) => {
      setTimeout(() => {
        playTone(note.freq, note.label)
      }, i * 160)
    })
  }

  const handleCommand = (command: string) => {
    const trimmed = command.trim().toLowerCase()
    if (!trimmed) return

    let outputNode: React.ReactNode = null

    switch (trimmed) {
      case "run agent.py":
      case "agent":
        setIsAgentRunning(true)
        outputNode = (
          <div className="space-y-1.5 font-mono text-xs text-neutral-300 animate-in fade-in duration-300">
            <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              [LangGraph Agent] Initializing graph execution...
            </div>
            <div className="text-neutral-400 pl-3">
              ↳ Node: <span className="text-white">StateLoader</span> — Ingesting requirements & dataset context
            </div>
            <div className="text-neutral-400 pl-3">
              ↳ Node: <span className="text-white">DataPipelines</span> — Querying Databricks & Snowflake ETL telemetry
            </div>
            <div className="text-neutral-400 pl-3">
              ↳ Node: <span className="text-white">ModelEvaluator</span> — Applying UnSloth LoRA adapter weights (loss: 0.042)
            </div>
            <div className="text-neutral-400 pl-3">
              ↳ Node: <span className="text-white">OutputFormatter</span> — Rendering 60fps reactive frontend payload
            </div>
            <div className="text-emerald-400 font-bold pl-3 pt-1">
              ✓ Execution complete in 240ms. Status: PRODUCTION READY.
            </div>
          </div>
        )
        setTimeout(() => setIsAgentRunning(false), 800)
        break

      case "cat stack.json":
      case "stack":
        outputNode = (
          <pre className="text-[11px] font-mono text-neutral-300 leading-tight bg-black/40 p-3 rounded-lg border border-white/5 overflow-x-auto">
{`{
  "ai_toolkit": ["LangGraph", "UnSloth", "RAG", "Hugging Face", "Fine-Tuning"],
  "data_engineering": ["Databricks", "Snowflake", "PySpark", "ETL Pipelines", "Python"],
  "frontend_craft": ["React 19", "TypeScript", "Tailwind CSS", "GSAP / Canvas"],
  "devops_infra": ["Docker", "Kubernetes", "FastAPI", "Git / GitHub Actions"],
  "hometown": "Nagpur, Maharashtra, India",
  "status": "Available for High-Impact Roles"
}`}
          </pre>
        )
        break

      case "fetch github-stats":
      case "stats":
        outputNode = (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono pt-1">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-neutral-400 text-[10px]">Open Source</div>
              <div className="font-bold text-white text-base">18+ Repos</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-neutral-400 text-[10px]">Primary Lang</div>
              <div className="font-bold text-emerald-400 text-base">Python & TS</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-neutral-400 text-[10px]">Live Deployments</div>
              <div className="font-bold text-white text-base">3 Systems</div>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <div className="text-neutral-400 text-[10px]">Enterprise Clients</div>
              <div className="font-bold text-amber-400 text-base">US Energy</div>
            </div>
          </div>
        )
        break

      case "curl /joke":
      case "joke":
        outputNode = (
          <p className="text-xs text-neutral-300 italic font-mono">
            "Why did the neural network go to therapy? Because it had too many unhandled biases and was stuck in a local minimum."
          </p>
        )
        break

      case "sudo hire-shaan":
      case "hire":
        outputNode = (
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono space-y-1.5">
            <div className="text-emerald-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              ACCESS GRANTED: Candidate matches all engineering criteria.
            </div>
            <p className="text-neutral-300">
              Shantanu is currently open for high-impact Machine Learning, Data Engineering, and Full-Stack roles.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 text-black font-bold text-xs hover:bg-emerald-400 transition-colors"
              >
                <span>Initiate Contact Transmission →</span>
              </a>
            </div>
          </div>
        )
        break

      case "clear":
        setHistory([])
        setInputVal("")
        return

      case "help":
      default:
        outputNode = (
          <div className="text-xs font-mono text-neutral-400 space-y-1">
            <p className="text-white font-semibold">Available Commands:</p>
            <p>• <span className="text-emerald-400">run agent.py</span> — Simulate LangGraph agent reasoning loop</p>
            <p>• <span className="text-emerald-400">cat stack.json</span> — Dump complete technical architecture</p>
            <p>• <span className="text-emerald-400">fetch github-stats</span> — View open source & engineering metrics</p>
            <p>• <span className="text-emerald-400">curl /joke</span> — Dev & ML engineer humor</p>
            <p>• <span className="text-emerald-400">sudo hire-shaan</span> — Fast-track hiring authorization</p>
            <p>• <span className="text-emerald-400">clear</span> — Wipe terminal screen</p>
          </div>
        )
        break
    }

    setHistory((prev) => [...prev, { cmd: command, output: outputNode }])
    setInputVal("")
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleCommand(inputVal)
  }

  return (
    <section id="lab" className="py-24 bg-neutral-950 text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-neutral-800/20 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="pill" className="mb-3 bg-white/10 text-neutral-200 border-white/15">
            The Laboratory
          </Badge>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Interactive Dev Sandbox
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Test simulated agents, inspect system architecture in real time, or jam on native Web Audio oscillators.
          </p>
        </div>

        {/* Main Grid: Interactive Terminal + Bento Experiments */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Interactive Terminal CLI Window (7 cols) */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl bg-neutral-900/90 border border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl">
            
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-950/80 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-neutral-500" />
                <span>shantanu@nagpur:~ (zsh)</span>
              </div>
              <button
                type="button"
                onClick={() => handleCommand("clear")}
                className="text-[11px] font-mono text-neutral-500 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                title="Clear screen"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Clear</span>
              </button>
            </div>

            {/* Terminal Quick Action Buttons */}
            <div className="flex items-center gap-1.5 p-2.5 bg-black/30 border-b border-white/5 overflow-x-auto text-xs font-mono no-scrollbar">
              <span className="text-[10px] text-neutral-500 uppercase px-2 shrink-0">Quick run:</span>
              <button
                type="button"
                onClick={() => handleCommand("run agent.py")}
                disabled={isAgentRunning}
                className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/15 text-emerald-400 border border-white/10 text-[11px] transition-all shrink-0 cursor-pointer flex items-center gap-1"
              >
                <Play className="w-2.5 h-2.5" />
                <span>agent.py</span>
              </button>
              <button
                type="button"
                onClick={() => handleCommand("cat stack.json")}
                className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/15 text-neutral-200 border border-white/10 text-[11px] transition-all shrink-0 cursor-pointer"
              >
                stack.json
              </button>
              <button
                type="button"
                onClick={() => handleCommand("fetch github-stats")}
                className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/15 text-neutral-200 border border-white/10 text-[11px] transition-all shrink-0 cursor-pointer"
              >
                stats
              </button>
              <button
                type="button"
                onClick={() => handleCommand("curl /joke")}
                className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/15 text-neutral-200 border border-white/10 text-[11px] transition-all shrink-0 cursor-pointer"
              >
                joke
              </button>
              <button
                type="button"
                onClick={() => handleCommand("sudo hire-shaan")}
                className="px-2.5 py-1 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-[11px] transition-all shrink-0 cursor-pointer"
              >
                hire-shaan
              </button>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-5 font-mono text-xs space-y-4 overflow-y-auto max-h-[380px] min-h-[300px] select-text">
              {history.map((h, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-neutral-400">
                    <span className="text-emerald-400 font-bold">shantanu@nagpur:~$</span>
                    <span className="text-white">{h.cmd}</span>
                  </div>
                  <div>{h.output}</div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Command Input Form */}
            <form
              onSubmit={handleFormSubmit}
              className="p-3 bg-neutral-950 border-t border-white/10 flex items-center gap-2"
            >
              <span className="text-emerald-400 font-mono text-xs font-bold pl-2 select-none">
                shantanu@nagpur:~$
              </span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help' or any command..."
                className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-neutral-600"
              />
              <button
                type="submit"
                className="px-3 py-1 rounded bg-white text-black font-mono text-xs font-bold hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Execute
              </button>
            </form>
          </div>

          {/* Right Column: Lab Bento Cards & Hardware Synthesizer (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            
            {/* Card 1: Native Web Audio Synthesizer */}
            <div className="p-6 rounded-3xl bg-neutral-900/90 border border-white/15 backdrop-blur-xl shadow-xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-300">
                    <Music className="w-4 h-4 text-emerald-400" />
                    <span>Hardware Synth Playground</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title={soundEnabled ? "Mute audio" : "Enable audio"}
                  >
                    {soundEnabled ? (
                      <Volume2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <VolumeX className="w-4 h-4 text-neutral-500" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  Born from my passion for hardware synthesizers. Click the keys below to generate real-time analog oscillator frequencies in your browser.
                </p>
              </div>

              {/* Synth Piano Keys */}
              <div>
                <div className="grid grid-cols-5 gap-2 mb-3">
                  {SYNTH_NOTES.map((note) => {
                    const isPlaying = activeSynthNote === note.label
                    return (
                      <button
                        key={note.label}
                        type="button"
                        onClick={() => playTone(note.freq, note.label)}
                        className={`h-20 rounded-xl flex flex-col justify-between p-2 font-mono transition-all duration-150 cursor-pointer ${
                          isPlaying
                            ? "bg-white text-black scale-95 shadow-lg shadow-white/30"
                            : "bg-neutral-800/90 hover:bg-neutral-700/90 text-neutral-200 border border-white/10"
                        }`}
                      >
                        <span className="text-[10px] text-neutral-400">[{note.key}]</span>
                        <span className="font-bold text-sm text-center">{note.label}</span>
                      </button>
                    )
                  })}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[10px] font-mono text-neutral-500">
                    Sawtooth + 800Hz Low-Pass Filter
                  </span>
                  <button
                    type="button"
                    onClick={playArpeggio}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white text-white hover:text-black text-xs font-semibold font-mono transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Play Arpeggio</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Engineering Philosophy */}
            <div className="p-6 rounded-3xl bg-neutral-900/90 border border-white/15 backdrop-blur-xl shadow-xl flex flex-col justify-between">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                <Code2 className="w-4 h-4 text-indigo-400" />
                <span>The Engineering Philosophy</span>
              </div>
              <blockquote className="text-xs sm:text-sm font-serif italic text-neutral-200 leading-relaxed my-2">
                "If it can be automated with an agent, automate it. If it moves data, make it idempotent. If it renders in a browser, make it 60fps."
              </blockquote>
              <div className="flex items-center gap-2 pt-2 border-t border-white/5 text-[11px] font-mono text-neutral-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Zero fluff. Just clean, resilient code that ships.</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Lab
