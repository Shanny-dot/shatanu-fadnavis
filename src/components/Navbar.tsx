import React, { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "@/components/icons"

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("home")

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Lab", href: "#lab" },
    { label: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "journey", "lab", "contact"]

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Near bottom of page -> highlight contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection("contact")
        return
      }

      const scrollPosition = window.scrollY + 180
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex flex-col group">
          <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
            Shantanu Fadnavis
          </span>
          <span className="text-[10px] text-neutral-500 font-mono flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for work
          </span>
        </a>

        {/* Desktop Nav with active section highlight */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-100/90 backdrop-blur-sm p-1.5 rounded-full border border-neutral-200/70 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-neutral-950 text-white shadow-sm"
                    : "text-neutral-600 hover:text-black hover:bg-neutral-200/60"
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Shanny-dot"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-black hover:border-black hover:bg-neutral-50 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/shantanu-fadnavis-621751289/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-black hover:border-black hover:bg-neutral-50 transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <Button
            size="sm"
            className="rounded-full gap-1.5 font-semibold shadow-sm cursor-pointer"
            onClick={() => {
              const contactSec = document.getElementById("contact")
              contactSec?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-neutral-200 text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-neutral-200 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-neutral-950 text-white"
                      : "text-neutral-700 hover:text-black hover:bg-neutral-100"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                </a>
              )
            })}
          </div>
          <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
            <div className="flex gap-3">
              <a
                href="https://github.com/Shanny-dot"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-neutral-200 text-neutral-700 hover:text-black"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/shantanu-fadnavis-621751289/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-neutral-200 text-neutral-700 hover:text-black"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <Button
              size="sm"
              onClick={() => {
                setMobileMenuOpen(false)
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
