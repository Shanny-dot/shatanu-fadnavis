import React from "react"
import { ArrowUp, Heart } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Name & Copyright */}
        <div className="text-center md:text-left">
          <div className="text-white text-base font-bold font-heading">
            Shantanu Fadnavis
          </div>
          <p className="text-xs text-neutral-500 mt-0.5">
            © {new Date().getFullYear()} Shantanu Fadnavis. All rights reserved.
          </p>
        </div>

        {/* Center: Crafted with heart in India */}
        <div className="text-xs text-neutral-400 flex items-center gap-1.5 text-center">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          <span>in India</span>
        </div>

        {/* Social Links & Back to top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Shanny-dot"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white hover:text-black text-neutral-400 flex items-center justify-center transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/shantanu-fadnavis-621751289/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white hover:text-black text-neutral-400 flex items-center justify-center transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-colors cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer
