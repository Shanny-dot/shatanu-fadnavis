import React from "react"
import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel"

// 9 best projects from https://github.com/Shanny-dot
// Cover images chosen from Unsplash to match each project's domain
const PROJECTS: WorksWheelItem[] = [
  {
    title: "LyricGenieAI",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    href: "https://github.com/Shanny-dot/LyricGenieAI",
  },
  {
    title: "SmallAnimeLM",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    href: "https://github.com/Shanny-dot/SmallAnimeLM",
  },
  {
    title: "SneakerHeadLM",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    href: "https://github.com/Shanny-dot/SneakerHeadLM",
  },
  {
    title: "VisionText Image Reader",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    href: "https://github.com/Shanny-dot/VisionText-Image-Reader",
  },
  {
    title: "Product Extractor",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    href: "https://github.com/Shanny-dot/Product_Extractor",
  },
  {
    title: "SecureVault",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
    href: "https://github.com/Shanny-dot/securevault",
  },
  {
    title: "Travel Itinerary Planner",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
    href: "https://github.com/Shanny-dot/Travel_Itinerary_Planner",
  },
  {
    title: "Beautiful Story Generator",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    href: "https://github.com/Shanny-dot/Beautiful-Story-Generator",
  },
  {
    title: "Cloud Migration GCP",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    href: "https://github.com/Shanny-dot/cloud-migration-gcp",
  },
]

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative bg-neutral-950 text-white">
      {/* Wheel — full viewport height, dark */}
      <div className="w-full h-screen min-h-[700px]" style={{ background: "#0a0a0a" }}>
        <WorksWheel
          items={PROJECTS}
          label=""
          action="View on GitHub"
          className="h-full w-full"
          style={{ background: "transparent", color: "#ffffff" }}
        />
      </div>

      {/* Header overlaid at the very top of the dark section */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none pt-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2">
          What I've Built
        </p>
        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
          My Projects
        </h2>
        <p className="text-neutral-400 text-sm mt-3">
          Scroll or drag the wheel · click any card to open the repo
        </p>
      </div>
    </section>
  )
}

export default Projects
