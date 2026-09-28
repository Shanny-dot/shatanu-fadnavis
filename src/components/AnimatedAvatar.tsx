import React, { useEffect, useRef, useState, useCallback } from "react"

type Direction = "left" | "center" | "right"

const images: Record<Direction, string> = {
  right:  "/avatar-right.png?v=3",
  center: "/avatar-center.png?v=3",
  left:   "/avatar-left.png?v=3",
}

const AnimatedAvatar: React.FC = () => {
  const [dir, setDir] = useState<Direction>("center")
  const [loaded, setLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const prevDir = useRef<Direction>("center")

  // Derive direction from cursor position relative to THIS container only
  const fromEvent = useCallback((e: MouseEvent): Direction | null => {
    const el = containerRef.current
    if (!el) return null
    const rect = el.getBoundingClientRect()
    // Only react when cursor is over (or near) the portrait container
    const margin = 40 // px outside the box that still counts
    if (
      e.clientX < rect.left - margin ||
      e.clientX > rect.right + margin ||
      e.clientY < rect.top - margin ||
      e.clientY > rect.bottom + margin
    ) {
      return "center" // default to center when cursor is far away
    }
    const relX = e.clientX - rect.left
    const w = rect.width
    if (relX < w * 0.35) return "left"
    if (relX > w * 0.65) return "right"
    return "center"
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const next = fromEvent(e)
      if (next !== null && next !== prevDir.current) {
        prevDir.current = next
        setDir(next)
      }
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [fromEvent])

  // Preload all 3 images
  useEffect(() => {
    let done = 0
    const srcs = Object.values(images)
    srcs.forEach((src) => {
      const img = new Image()
      img.onload = () => { done++; if (done === srcs.length) setLoaded(true) }
      img.src = src
    })
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {(["right", "center", "left"] as Direction[]).map((d) => (
        <img
          key={d}
          src={images[d]}
          alt={`Portrait ${d}`}
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{
            opacity: dir === d && loaded ? 1 : 0,
            transition: "opacity 260ms ease-in-out",
            willChange: "opacity",
          }}
          draggable={false}
        />
      ))}
      {!loaded && (
        <div className="absolute inset-0 bg-neutral-100 animate-pulse" />
      )}
    </div>
  )
}

export default AnimatedAvatar
