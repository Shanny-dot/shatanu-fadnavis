import React from "react"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Shaan is that rare 1% engineer who has deep command over distributed system architecture while maintaining pixel-perfect mastery of frontend animations. He delivered our canvas workflow editor 3 weeks ahead of schedule.",
      author: "Elena Rostova",
      role: "VP of Product Engineering",
      company: "Apex Labs",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote:
        "Working with Shaan felt effortless. He converted complex Figma design interactions into buttery 60fps animations with GSAP and Tailwind. The launch saw a 45% uplift in user session duration.",
      author: "Marcus Chen",
      role: "Design Director",
      company: "Nova Digital Studio",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote:
        "Shaan's code hygiene is extraordinary. Everything is rigorously typed, covered with end-to-end tests, and packaged cleanly using modern shadcn and Tailwind patterns. An absolute asset to any engineering team.",
      author: "Sarah Lindqvist",
      role: "Staff Infrastructure Engineer",
      company: "CloudScale Systems",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
  ]

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="pill" className="mb-3">
            Social Proof
          </Badge>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-neutral-950 tracking-tight mb-4">
            Endorsements from fellow builders
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            What leaders and colleagues say about collaborating together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border border-neutral-200/90 bg-neutral-50/50 hover:bg-white hover:border-neutral-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-200/70">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-11 h-11 rounded-full object-cover border border-neutral-200"
                />
                <div>
                  <div className="text-sm font-bold text-neutral-900">{item.author}</div>
                  <div className="text-xs text-neutral-500">
                    {item.role}, <span className="font-medium text-neutral-700">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Testimonials
